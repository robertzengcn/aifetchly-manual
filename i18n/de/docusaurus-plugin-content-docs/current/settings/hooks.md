---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Konfigurieren Sie Lifecycle-Hooks, die Werkzeugaufrufe des KI-Assistenten beobachten, blockieren, umschreiben oder kommentieren — einschließlich integrierter Sicherheits-Hooks und eigener Command-Hooks.
---

# Hooks

**Hooks** sind Lifecycle-Trigger, die Ihre eigene Logik rund um die Aktionen des KI-Marketing-Assistenten ausführen. Sie feuern zu klar definierten Zeitpunkten — vor allem **vor und nachdem ein Werkzeug ausgeführt wird** — und können eine Aktion beobachten, blockieren, umschreiben oder kommentieren. Mit Hooks können Sie Richtlinien durchsetzen („führe nie diese Art von Befehl aus"), der KI Kontext hinzufügen („erinnere mich nach dem Scraping an Compliance") und ein manipulationssicheres Audit-Protokoll jeder Hook-Entscheidung führen.

aiFetchly wird mit **integrierten Sicherheits-Hooks** ausgeliefert, die Sie sofort schützen, und ermöglicht Ihnen das Hinzufügen eigener **Command-Hooks** — kleine Skripte, die ein Ereignis als JSON empfangen und entscheiden, was als Nächstes geschehen soll.

:::info Wo Hooks eingeordnet sind

Hooks sitzen zwischen der KI und den Werkzeugen, die sie aufruft (integrierte [AI Skills](../ai-outreach/ai-skills), [MCP-Tools](../ai-outreach/mcp-tools) und Legacy-Werkzeuge). Sie ersetzen die KI **nicht** — sie steuern und formen die Werkzeugaufrufe, die die KI anfordert. Ein Hook, der einen Aufruf *erlaubt*, umgeht niemals das normale Berechtigungssystem; ein Hook, der einen Aufruf *blockiert*, stoppt ihn, bevor er jemals ausgeführt wird.

:::

## Was können Hooks tun?

Jeder Hook empfängt Details zum Ereignis und kann eine Entscheidung zurückgeben:

- Eine Aktion **blockieren**, bevor sie stattfindet (zum Beispiel einen gefährlichen Shell-Befehl ablehnen).
- Die Eingaben **umschreiben**, mit denen ein Werkzeug aufgerufen werden soll (zum Beispiel einen Wert schwärzen).
- **Kontext hinzufügen**, den die KI liest, nachdem ein Werkzeug gelaufen ist (zum Beispiel eine Compliance-Erinnerung).
- **Aktivität aufzeichnen** für die spätere Prüfung im Audit-Protokoll.

## Wichtige Konzepte

### Ereignisse

Ein Hook ist an ein **Ereignis** gebunden — den Moment im Lifecycle der KI, in dem er feuert. Die wichtigsten Ereignisse sind die des Werkzeug-Lifecycles:

| Ereignis | Feuert, wenn | Kann blockieren? |
|------|------------|---------------|
| **PreToolUse** | Direkt bevor ein Werkzeug ausgeführt wird | ✅ Ja — das Werkzeug wird nie ausgeführt |
| **PostToolUse** | Nachdem ein Werkzeug erfolgreich ausgeführt wurde | ❌ Nein (das Werkzeug ist bereits gelaufen), kann aber Kontext hinzufügen oder dessen Ausgabe umschreiben |
| **PostToolUseFailure** | Nachdem ein Werkzeug fehlschlägt | ❌ Nein (ein Fehlschlag lässt sich nicht in einen Erfolg umwandeln), kann aber eine Nachricht hinzufügen |

Weitere Ereignisse im Hook-Modell — **SessionStart**, **UserPromptSubmit**, **PermissionRequest**, **PermissionDenied** und **Stop** — sind im Ereignis-Dropdown verfügbar und beschreiben Sitzungs-, Prompt-, Berechtigungs- und Zug-Ende-Momente. Ereignisnamen werden als Code-Bezeichner (wie `PreToolUse`) über alle Sprachen hinweg beibehalten, damit sie durchsuchbar und eindeutig bleiben.

:::note Werkzeug-Ereignisse sind die aktiven Durchsetzungspunkte

Die vollständig verdrahteten Durchsetzungspunkte sind heute die Werkzeug-Lifecycle-Ereignisse (**PreToolUse**, **PostToolUse**, **PostToolUseFailure**). Hier finden Blockieren, Umschreiben von Eingaben, Umschreiben von Ausgaben und Kontext-Injektion statt. Die Sitzungs-, Prompt-, Berechtigungs- und Stop-Ereignisse sind Teil des Hook-Modells und in der Benutzeroberfläche auswählbar; ob jedes einzelne feuert, hängt davon ab, wo dieser Teil der Anwendung es auslöst.

:::

### Quellen

Jeder Hook hat eine **Quelle**, die bestimmt, wem er gehört und was Sie damit tun können:

| Quelle | Was es ist | Standardmäßig angezeigt? |
|--------|------------|-------------------|
| **builtin** | Wird mit aiFetchly ausgeliefert (Sicherheit & Compliance) | ✅ Ja |
| **user** | Von Ihnen auf dieser Seite erstellt | ✅ Ja |
| **session** | Temporär für die aktuelle Sitzung registriert | Nur wenn **Show session hooks** aktiviert ist |

Verwenden Sie den Filter **Source**, um die Liste auf eine dieser Quellen einzugrenzen.

### Command-Hooks

Der einzige Hook-Typ, den Sie über die Benutzeroberfläche erstellen können, ist ein **Command-Hook**. Ein Command-Hook führt einen lokalen Befehl (ein Skript oder eine ausführbare Datei) aus und kommuniziert mit aiFetchly über JSON:

1. aiFetchly sendet die Ereignisdetails an Ihren Befehl als **JSON-Objekt auf der Standard-Eingabe (stdin)**.
2. Ihr Befehl erledigt seine Arbeit und schreibt eine **JSON-Entscheidung auf die Standard-Ausgabe (stdout)**.
3. aiFetchly liest diese Entscheidung und handelt entsprechend (blockieren, Eingabe umschreiben, Kontext hinzufügen usw.).

Integrierte Hooks sind in Code geschrieben (Callback-Hooks) und über die Benutzeroberfläche nicht bearbeitbar — Sie können sie nur ein- oder ausschalten.

### Matcher

Der **Matcher** eines Hooks grenzt ein, auf *welche Werkzeugaufrufe* er angewendet wird. Der Matcher wird gegen den **Werkzeugnamen** getestet und unterstützt einfache Wildcard-Muster:

| Matcher | Trifft zu auf |
|---------|---------|
| `*` | Jedes Werkzeug |
| `shell_execute` | Nur das Werkzeug, dessen Name genau `shell_execute` ist |
| `scrape_*` | Jedes Werkzeug, dessen Name mit `scrape_` beginnt (z. B. `scrape_search`) |
| `*_search` | Jedes Werkzeug, dessen Name auf `_search` endet |
| `*scrape*` | Jedes Werkzeug, dessen Name `scrape` enthält |

Matcher sind auf 128 Zeichen begrenzt.

### Die „If"-Bedingung

Die optionale **If-Bedingung** grenzt einen Hook weiter ein, indem sie die **Argumentwerte** des Werkzeugs abgleicht und nicht nur dessen Namen. Sie verwendet dieselbe Wildcard-Syntax, getestet gegen die Zeichenketten-Argumente, die an das Werkzeug übergeben werden. Zum Beispiel:

- Bei `PreToolUse` mit dem Matcher `shell_execute` bewirkt eine If-Bedingung von `git *`, dass der Hook nur für Shell-Befehle feuert, die mit `git ` beginnen.
- Eine If-Bedingung von `rm -rf *` feuert nur für rekursive Löschbefehle.

Die If-Bedingung wird für Ereignisse ignoriert, die keine Werkzeugargumente haben. Sie ist auf 256 Zeichen begrenzt.

### Fehlermodus

Hooks können fehlschlagen — ein Befehl kann abstürzen, eine Zeitüberschreitung auslösen oder ungültiges JSON zurückgeben. Der **Fehlermodus** entscheidet, was mit dem Werkzeugaufruf geschieht, wenn der *Hook selbst* einen Fehler verursacht (dies ist etwas anderes als ein Hook, der absichtlich „blockieren" zurückgibt):

| Fehlermodus | Wenn der Hook fehlschlägt … |
|--------------|----------------------|
| **warn** | Der Fehler wird im Audit-Protokoll aufgezeichnet, und der Werkzeugaufruf **wird normal fortgesetzt**. |
| **block** | Der Fehler wird als Blockierung behandelt — der Werkzeugaufruf **wird nicht ausgeführt**. |

Verwenden Sie **warn** für nicht kritische Hooks (Protokollierung, beratender Kontext). Verwenden Sie **block** nur, wenn Sie lieber ein Werkzeug stoppen möchten, als es ohne die erfolgreiche Prüfung Ihres Hooks auszuführen.

:::tip Block-vs-warn in einem Satz

Ein Hook, der `{ continue: false }` *zurückgibt*, blockiert das Werkzeug immer, unabhängig vom Fehlermodus. Der Fehlermodus spielt nur eine Rolle, wenn der Hook **selbst fehlerhaft ist** (Zeitüberschreitung, Absturz, fehlerhaftes JSON).

:::

### Globale Aktivierung

Der Schalter **Enable hooks globally** oben auf der Seite ist der Master-Ausschalter. Wenn er deaktiviert ist, **feuert nirgendwo ein Hook** — weder integrierte noch benutzerdefinierte. Der Rest der Seite bleibt interaktiv, sodass Sie Hooks weiterhin konfigurieren können, während das System pausiert ist. Die Einstellung bleibt über Neustarts hinweg erhalten.

## Öffnen der Hooks-Seite

1. Klicken Sie auf **Settings** im linken Navigationsmenü.
2. Öffnen Sie die Seite **Hooks** (neben Skills und MCP).

## Seitenlayout

Die Hooks-Seite hat vier Bereiche, von oben nach unten gestapelt:

```
┌─ Hooks ──────────────────────────────────────────────┐
│ [✓] Enable hooks globally            [+ Add command]  │  header
│ Filter: Event[All▾] Source[All▾] [□ Show session]     │  list filters
│ ┌─────────────────────┬─────────────────────────┐    │
│ │ Hooks (N)           │ Edit panel              │    │  master–detail
│ │ ● block-shell   ✓   │ Hook ID / Event / …     │    │
│ │ ● compliance    ⏸   │ [Save] [Delete]         │    │
│ └─────────────────────┴─────────────────────────┘    │
│ ─ Recent audit ─────────────────────────────────────  │  audit panel
│ Time   Hook        Event       Status   Duration      │
└───────────────────────────────────────────────────────┘
```

- **Header** — globaler Aktivierungsschalter und die Schaltfläche **+ Add command hook**. Ein gelbes Banner erscheint, wenn Hooks global deaktiviert sind.
- **Listenfilter** — filtert die Hook-Liste nach Ereignis und Quelle und blendet optional Sitzungs-Hooks ein.
- **Master-Detail** — die Hook-Liste links; klicken Sie auf einen Hook, um ihn rechts zu bearbeiten.
- **Audit-Panel** — letzte Hook-Aktivitäten mit eigenen Filtern und einer optionalen Auto-Aktualisierung.

## Integrierte Hooks

aiFetchly wird mit diesen integrierten Hooks ausgeliefert:

| Hook-ID | Ereignis | Matcher | Standard | Was es tut |
|---------|-------|---------|---------|--------------|
| `builtin-block-dangerous-shell-delete` | PreToolUse | `shell_execute` | **Aktiviert** | Blockiert Shell-Befehle, die einem gefährlichen rekursiven Löschmuster entsprechen (z. B. `rm -rf /` oder `rm -rf *`). |
| `builtin-scraping-compliance-context` | PostToolUse | `scrape_*` | Deaktiviert | Injiziert nach jedem Werkzeugaufruf eines Scraping-Tools eine kurze Compliance-Erinnerung in den Kontext der KI, sodass sie rechtmäßige, datenminimale Outreach empfiehlt. |

:::warning Scraping-Compliance-Kontext

Das Aktivieren von `builtin-scraping-compliance-context` injiziert nach **jedem** Scraping-Werkzeugaufruf Compliance-Hinweise in den KI-Prompt. Das ist beabsichtigt, aber seien Sie sich bewusst, dass dies die Formulierung der nachfolgenden Antworten der KI beeinflussen kann.

:::

Integrierte Hooks sind **schreibgeschützt** — ihre Felder können nicht bearbeitet und sie können nicht gelöscht werden. Sie können sie nur ein- oder ausschalten; diese Überschreibung bleibt über Neustarts hinweg erhalten.

## Einen Command-Hook erstellen

### Schritt 1: Einen neuen Hook starten

Klicken Sie auf **+ Add command hook**. Das Bearbeitungspanel wechselt zu einem leeren Formular mit sinnvollen Standardwerten:

- **Event**: `PreToolUse`
- **Matcher**: `*`
- **Failure mode**: `warn`
- **Timeout**: `5000` ms
- **Enabled**: aus (neue Hooks starten deaktiviert)

### Schritt 2: Felder ausfüllen

| Feld | Beschreibung |
|-------|-------------|
| **Hook-ID** | Ein eindeutiger Name für den Hook (zum Beispiel `block-home-delete`). Wird in der Liste und im Audit-Protokoll verwendet. |
| **Ereignis** | Wann der Hook feuert (siehe [Ereignisse](#ereignisse)). |
| **Matcher** | Auf welche Werkzeugnamen der Hook angewendet wird; `*` bedeutet alle (siehe [Matcher](#matcher)). |
| **If-Bedingung** | Optional — schränkt anhand des Werkzeug-Argumentwerts weiter ein (siehe [Die „If"-Bedingung](#die-if-bedingung)). |
| **Befehl** | Der lokale Befehl, der ausgeführt werden soll. Er empfängt das Ereignis als JSON auf stdin und muss eine JSON-Entscheidung auf stdout ausgeben (siehe [Der Command-Hook-Vertrag](#der-command-hook-vertrag)). |
| **Timeout (ms)** | Maximale Laufzeit, bevor der Hook abgebrochen wird. Standard `5000`; Obergrenze `60000`. |
| **Fehlermodus** | Was geschieht, wenn der Hook selbst fehlschlägt (siehe [Fehlermodus](#fehlermodus)). |
| **Statusnachricht** | Optionales kurzes Label, das als Fortschrittsanzeige gezeigt wird, während der Hook läuft. |

### Schritt 3: Speichern und aktivieren

1. Klicken Sie auf **Save**. Der Hook wird mit **Enabled aus** gespeichert, sodass noch nichts läuft.
2. Wählen Sie den Hook in der Liste aus und schalten Sie den Schalter **Enabled** ein, um ihn zu aktivieren.

:::tip Hooks feuern nur, wenn beide Schalter es erlauben

Ein Command-Hook feuert nur, wenn **Hooks global aktiviert sind** *und* **der Hook selbst aktiviert ist**. Neue Hooks starten absichtlich deaktiviert, damit Sie den Befehl überprüfen können, bevor er jemals läuft.

:::

## Hooks bearbeiten, aktivieren und löschen

- **Aktivieren / Deaktivieren** — wählen Sie einen beliebigen Hook und schalten Sie den Schalter **Enabled** um. Funktioniert für integrierte und benutzerdefinierte Hooks; die Änderung wirkt sich sofort aus und bleibt erhalten.
- **Felder bearbeiten** — nur **Benutzer**-Hooks sind bearbeitbar. Wählen Sie den Hook aus, ändern Sie die Felder und klicken Sie auf **Save**. Integrierte und Sitzungs-Hooks zeigen ihre Felder schreibgeschützt.
- **Löschen** — nur **Benutzer**-Hooks können gelöscht werden. Klicken Sie auf **Delete**, bestätigen Sie die Hook-ID und die Befehlsvorschau im Dialog, und der Hook wird dauerhaft entfernt. Integrierte Hooks können nicht gelöscht werden (die Schaltfläche ist ausgeblendet; das Backend lehnt es als zusätzliche Sicherheit ebenfalls ab).

## Der Command-Hook-Vertrag

Wenn ein Command-Hook feuert, führt aiFetchly Ihren **Befehl** mit `shell: false` aus — das erste Token ist die ausführbare Datei und die restlichen Token sind ihre Argumente. Er sendet das Ereignis als JSON-Objekt auf **stdin** und liest eine JSON-Entscheidung von **stdout**.

### Eingabe (stdin)

Für einen `PreToolUse`-Hook sieht die Eingabe ungefähr so aus:

```json
{
  "eventName": "PreToolUse",
  "hookRunId": "run-1a2b3c",
  "tool": { "id": "...", "name": "shell_execute", "source": "legacy-tool" },
  "input": { "command": "rm -rf /tmp/old" },
  "permissionState": { "allowed": true, "needsPrompt": false },
  "timestamp": "2026-07-10T09:42:00.000Z"
}
```

Die genauen Felder hängen vom Ereignis ab (zum Beispiel umfasst `PostToolUse` zusätzlich `output` und `executionTimeMs`). Ihr Skript sollte defensiv lesen — greifen Sie mit Optional Chaining auf Felder zu und tolerieren Sie fehlende Schlüssel.

### Ausgabe (stdout)

Ihr Befehl gibt ein JSON-Objekt aus, das seine Entscheidung beschreibt. Alle Felder sind optional:

| Feld | Wirkung |
|-------|--------|
| `continue` | `false` blockiert den Werkzeugaufruf (mit `reason` verwenden). Weglassen oder `true`, um zu erlauben. |
| `reason` | Menschlich lesbare Erklärung, die im Audit-Protokoll und (bei Blockierungen) für die KI angezeigt wird. Max. 1000 Zeichen. |
| `additionalContext` | Text, der dem Kontext der KI angefügt wird (üblicherweise bei `PostToolUse` verwendet). Max. 4000 Zeichen. |
| `systemMessage` | Eine Nachricht auf Systemebene. Max. 2000 Zeichen. |
| `updatedInput` | Ersetzt die Eingaben des Werkzeugs (**nur PreToolUse**). Max. 64 KB. |
| `updatedToolOutput` | Schreibt die Ausgabe des Werkzeugs um (**nur PostToolUse**); kann einen Fehlschlag nicht in einen Erfolg umwandeln. Max. 128 KB. |
| `suppressOutput` | Verbirgt die Ausgabe des Werkzeugs vor der Konversation. |
| `permissionDecision` | `allow`, `ask` oder `deny`. `allow` ist beratend und setzt das Berechtigungssystem niemals außer Kraft. |

Eine minimale „Erlauben"-Antwort ist ein leeres Objekt: `{}`. Ausgaben, die kein gültiges JSON sind, werden als Hook-Fehler behandelt (unterliegen dem Fehlermodus); geben Sie also immer wohlgeformtes JSON aus.

### Ausführungsregeln

- **Keine Shell-Funktionen.** Da `shell: false`, funktionieren Pipes (`|`), Umleitungen (`>`), Verkettungen (`&&`) und Variablenexpansion (`$VAR`) **nicht** direkt. Um sie zu nutzen, rufen Sie explizit eine Shell auf, z. B. `sh -c "..."` oder `bash -c "..."`.
- **Eingeschränkte Umgebung.** Ihr Befehl erhält standardmäßig nur eine kleine Allowlist von Umgebungsvariablen: `PATH`, `HOME`, `USER`, `USERNAME`, `TEMP`, `TMP`. aiFetchly übergibt niemals eigene Anmeldedaten oder Token an Ihren Hook.
- **Anführungszeichen.** Der Befehlsparser unterstützt einfache und doppelte Anführungszeichen für Argumente mit Leerzeichen (z. B. `-e "console.log(1)"`), aber keine Escape-Sequenzen oder Variablenexpansion.
- **Größenbeschränkungen.** stdout ist auf 256 KB und stderr auf 64 KB begrenzt. Halten Sie Antworten klein.

## Beispiele

### Beispiel 1 — Löschungen des Home-Verzeichnisses blockieren

Ein `PreToolUse`-Hook, der Shell-Befehle ablehnt, die Dateien im Home-Verzeichnis löschen.

**Hook-Einstellungen**

| Feld | Wert |
|-------|-------|
| Ereignis | `PreToolUse` |
| Matcher | `shell_execute` |
| Fehlermodus | `block` |
| Befehl | `node /home/me/hooks/block-home-delete.js` |

**`block-home-delete.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input = {};
  try { input = JSON.parse(raw); } catch { /* ignore malformed input */ }
  const command = String(input?.input?.command ?? "");
  if (/\brm\s+-rf\s+~(\/|$|\s)/.test(command)) {
    process.stdout.write(JSON.stringify({
      continue: false,
      reason: "Refusing to delete files inside the home directory.",
    }));
    return;
  }
  process.stdout.write(JSON.stringify({ continue: true }));
});
```

### Beispiel 2 — Eine Compliance-Erinnerung nach dem Scraping hinzufügen

Ein `PostToolUse`-Hook, der Hinweise injiziert, sobald ein Scraping-Werkzeug läuft.

**Hook-Einstellungen**

| Feld | Wert |
|-------|-------|
| Ereignis | `PostToolUse` |
| Matcher | `scrape_*` |
| Fehlermodus | `warn` |
| Befehl | `node /home/me/hooks/compliance-reminder.js` |

**`compliance-reminder.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  process.stdout.write(JSON.stringify({
    additionalContext:
      "Only keep contact data you have a lawful basis to process, and prefer minimal, opt-in outreach.",
  }));
});
```

### Beispiel 3 — Jeden Werkzeugaufruf an eine Protokolldatei anhängen

Ein `PostToolUse`-Hook, der das rohe Ereignis an eine Datei anhängt. Da er eine Umleitung verwendet, ruft er explizit eine Shell auf.

| Feld | Wert |
|-------|-------|
| Ereignis | `PostToolUse` |
| Matcher | `*` |
| Fehlermodus | `warn` |
| Befehl | `sh -c "cat >> /tmp/aifetchly-tool-audit.log"` |

:::tip Vor dem Aktivieren testen

Testen Sie Ihr Skript zuerst in einem Terminal, indem Sie Beispiel-JSON hineinleiten (`echo '{...}' | node my-hook.js`). Bestätigen Sie, dass es gültiges JSON ausgibt und schnell beendet, und richten Sie dann einen Command-Hook darauf.

:::

## Das Audit-Protokoll lesen

Das **Recent audit log** unten auf der Seite zeichnet jede Hook-Ausführung auf. Jede Zeile zeigt:

| Spalte | Bedeutung |
|--------|---------|
| **Time** | Wann der Hook lief. |
| **Hook** | Die Hook-ID. |
| **Event** | Das Ereignis, das ihn ausgelöst hat. |
| **Status** | `started`, `success`, `blocked`, `failed` oder `timeout`. |
| **Duration** | Wie lange der Hook brauchte, in Millisekunden. |
| **Reason** | Der Grund für eine Blockierung oder die Fehlermeldung bei einem Fehlschlag. |

Verwenden Sie die Filter, um nach **Ereignis**, **Status** oder **Hook** einzugrenzen, und wählen Sie, wie viele Zeilen geladen werden (100 / 500 / 1000). Klicken Sie auf das Aktualisierungssymbol, um die **Auto-Aktualisierung** zu starten (das Symbol dreht sich, während sie aktiv ist); sie fragt alle paar Sekunden neu ab, sodass Sie Hook-Aktivitäten beim Testen live beobachten können.

## Sicherheit

Das Hook-System ist so gestaltet, dass ein fehlerhafter oder bösartiger Command-Hook die Anwendung nicht kompromittieren kann:

- **Standardmäßig deaktiviert.** Neue Command-Hooks werden mit Enabled aus gespeichert; integrierte Command-Hooks sind die einzigen, die aktiviert mitgeliefert werden, und nur der Sicherheits-Hook ist eingeschaltet.
- **Eingeschränkte Umgebung.** Hooks empfangen nur eine Allowlist von Umgebungsvariablen — niemals Anmeldedaten, API-Schlüssel oder Sitzungs-Tokens von aiFetchly.
- **Keine Shell-Injection.** Befehle werden mit `shell: false` und einem minimalen argv-Parser ausgeführt, sodass Shell-Operatoren nicht interpretiert werden, es sei denn, Sie rufen explizit eine Shell auf.
- **Begrenzte Ausführung.** Jeder Hook hat ein Timeout (Standard 5 s, max. 60 s); eine Überschreitung wird abgebrochen und als `timeout` aufgezeichnet.
- **Begrenzte Ausgabe.** stdout und stderr sind begrenzt; zu große Ausgaben werden abgeschnitten.
- **Geheimnisse im Audit geschwärzt.** Muster, die wie API-Schlüssel, Bearer-Token, Cookies oder `Authorization`-Header aussehen, werden geschwärzt, bevor sie in das Audit-Protokoll geschrieben werden.
- **Integrierte Hooks sind manipulationssicher.** Ihre Definitionen können über die Benutzeroberfläche weder bearbeitet noch gelöscht werden — nur umgeschaltet.
- **Hooks umgehen niemals Berechtigungen.** Ein Hook, der `allow` zurückgibt, ist beratend; das normale Berechtigungssystem bleibt gültig. Nur ein Hook, der `block` zurückgibt, schließt einen Werkzeugaufruf kurz.

:::warning Sie sind für die von Ihnen erstellten Command-Hooks verantwortlich

Ein Command-Hook führt ein Programm auf Ihrem Rechner mit der oben beschriebenen Umgebung aus. Richten Sie Hooks nur auf Skripte, denen Sie vertrauen, aus Verzeichnissen, die Sie kontrollieren, und überprüfen Sie den Befehl, bevor Sie ihn aktivieren.

:::

## Fehlerbehebung

### Mein Command-Hook feuert nicht

**Mögliche Ursachen:**
- Hooks sind global deaktiviert (gelbes Banner oben).
- Der Hook selbst ist deaktiviert (Enabled-Schalter aus).
- Der **Matcher** passt nicht zum Werkzeugnamen oder die **If-Bedingung** passt nicht zum Argumentwert.
- Das **Ereignis** ist nicht eines der aktiven Werkzeug-Lifecycle-Ereignisse (`PreToolUse` / `PostToolUse` / `PostToolUseFailure`).

**Lösungen:**
1. Aktivieren Sie **Enable hooks globally**.
2. Wählen Sie den Hook aus und aktivieren Sie ihn.
3. Setzen Sie den Matcher vorübergehend auf `*` und leeren Sie die If-Bedingung, um zu bestätigen, dass der Hook funktioniert, und grenzen Sie ihn dann wieder ein.
4. Prüfen Sie das Audit-Protokoll — eine Zeile mit dem Status `started` bedeutet, dass der Hook ausgewählt wurde; keine Zeile bedeutet, dass er nie gepasst hat.

### Der Hook wurde ausgeführt, aber das Werkzeug wurde trotzdem ausgeführt

**Mögliche Ursachen:**
- Der Hook hat `{ continue: true }` (oder ein leeres Objekt) zurückgegeben, was den Aufruf erlaubt.
- Der Hook ist **fehlgeschlagen** (Status `failed` oder `timeout`) und der Fehlermodus ist **warn**, sodass der Aufruf trotzdem ausgeführt wird.

**Lösungen:**
1. Stellen Sie sicher, dass Ihr Skript `{ continue: false, reason: "..." }` schreibt, wenn es blockieren soll.
2. Wenn der Hook fehlschlägt, setzen Sie den Fehlermodus auf **block**, wenn Fehler das Werkzeug stoppen sollen, oder reparieren Sie das Skript, damit es nicht mehr fehlschlägt.

### Der Hook zeigt den Status `failed` oder `timeout`

**Mögliche Ursachen:**
- Das Skript ist abgestürzt oder hat ungültige (Nicht-JSON-) Ausgabe ausgegeben.
- Das Skript brauchte länger als das konfigurierte Timeout.
- Der Befehl hat Shell-Funktionen (Pipes, Umleitungen) verwendet, ohne eine Shell aufzurufen.

**Lösungen:**
1. Testen Sie das Skript in einem Terminal: `echo '{"eventName":"PreToolUse","input":{"command":"test"}}' | node my-hook.js`. Es muss gültiges JSON ausgeben.
2. Erhöhen Sie das Timeout (bis zu 60000 ms), oder machen Sie das Skript schneller.
3. Packen Sie Shell-Funktionen in `sh -c "..."` oder `bash -c "..."`.

### Die Hook-ID kann nicht geändert werden

Hook-IDs sind festgelegt, sobald der Hook erstellt ist (das Feld ist beim Bearbeiten deaktiviert). Um einen Hook umzubenennen, erstellen Sie einen neuen mit der gewünschten ID und löschen Sie dann den alten.

### Ich kann einen integrierten Hook nicht bearbeiten oder löschen

Das ist beabsichtigt. Integrierte Hooks gehören dem Code; Sie können sie nur ein- oder ausschalten.

## Nächste Schritte

- [AI Skills](../ai-outreach/ai-skills) — die Fähigkeiten, die Hooks steuern können
- [MCP-Tools](../ai-outreach/mcp-tools) — externe Werkzeuge, deren Aufrufe Hooks beobachten
- [KI-Marketing-Assistent](../ai-outreach/ai-marketing-assistant) — woher Werkzeugaufrufe stammen
- [Systemeinstellungen](./system-settings) — allgemeine Konfiguration
