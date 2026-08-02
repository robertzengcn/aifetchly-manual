---
id: slash-commands
title: Slash-Befehle
sidebar_label: Slash-Befehle
description: Führen Sie häufige Aktionen sofort aus und wandeln Sie wiederverwendbare Prompts in benutzerdefinierte Befehle um, die Sie im KI-Chat V2 mit / aufrufen können.
---

# Slash-Befehle

Slash-Befehle sind kurze Kürzel, die Sie im Eingabefeld des **KI-Chat V2** eingeben. Beginnen Sie eine Nachricht mit `/` und aiFetchly führt entweder sofort eine Aktion aus (Unterhaltung leeren, Status anzeigen, ein Plugin installieren) oder klappt eine wiederverwendbare Prompt-Vorlage für Sie auf.

Jeder Slash-Befehl trägt ein **Quell-Badge**, damit Sie stets wissen, woher er stammt:

| Badge | Quelle | Bedeutung |
|---|---|---|
| **Built-in** | `built-in` | Wird mit aiFetchly mitgeliefert. Immer verfügbar. |
| **User** | `user` | Ein Befehl, den Sie in `~/.aifetchly/commands/` erstellt haben. |
| **Workspace** | `workspace` | Ein Befehl, der im `.aifetchly/`-Ordner des aktuellen Workspace definiert ist. Erfordert, dass der Workspace als vertrauenswürdig eingestuft ist. |
| **Plugin** | `plugin` | Ein Befehl, der von einem installierten Plugin beigetragen wurde. |

:::info Slash-Befehle leben im KI-Chat V2

Slash-Befehle stehen im Eingabefeld des **[KI-Chat V2](./ai-chat-v2)** zur Verfügung. Wenn Sie das V2-Panel nicht sehen, öffnen Sie es über das Chat-Symbol oder `Ctrl/Cmd + K`.

:::

## Slash-Befehle verwenden

Sie können einen Befehl entweder vollständig eingeben oder aus der Vorschlagsliste auswählen.

### Der Tastatur-Ablauf

1. Klicken Sie in das Eingabefeld und tippen Sie `/` als **erstes Zeichen** — die Vorschlagsliste öffnet sich.
2. Tippen Sie weiter, um zu filtern. aiFetchly gleicht den Befehls**namen**, einen **Alias** oder ein Wort in der **Beschreibung** ab.
3. Verwenden Sie `↑` / `↓`, um die Markierung zu verschieben, oder fahren Sie mit der Maus darüber.
4. Drücken Sie `Enter` (oder klicken Sie), um einen Befehl **auszuwählen**. Dadurch wird `/name ` in das Feld eingefügt und die Vorschlagsliste geschlossen — es wird noch **nicht** gesendet.
5. Tippen Sie nach dem eingefügten Befehl beliebige Argumente (zum Beispiel den zu übersetzenden Text).
6. Drücken Sie `Enter`, um ihn auszuführen. (`Shift + Enter` fügt wie gewohnt eine neue Zeile ein.)
7. Drücken Sie jederzeit `Esc`, um die Vorschlagsliste ohne Auswahl zu schließen.

| Taste | Funktion |
|---|---|
| `/` (am Anfang) | Öffnet die Vorschlagsliste |
| Weiter tippen | Filtert die Liste nach Name / Alias / Beschreibung |
| `↑` / `↓` | Verschiebt die Markierung |
| `Enter` | Wählt den markierten Befehl aus (füllt `/name ` aus) |
| `Esc` | Schließt die Vorschlagsliste |
| `Shift + Enter` | Neue Zeile (normales Eingabefeld-Verhalten) |

:::tip Einen Befehl vollständig eingeben

Die Vorschlagsliste ist nur eine Hilfe — Sie können sie ignorieren und einen Befehlsnamen selbst eingeben, zum Beispiel `/clear`. Beachten Sie: Solange die Liste geöffnet ist, wählt `Enter` den markierten Treffer aus, statt zu senden; drücken Sie zuerst `Esc`, um die Liste zu schließen, dann `Enter`, um das Getippte auszuführen.

:::

:::warning Befehle werden nur am Anfang ausgelöst

Eine Nachricht wird nur dann als Slash-Befehl behandelt, wenn sie **mit `/` beginnt** und keine Anhänge hat. Wenn Sie wörtlichen Text senden möchten, der mit `/` beginnt, fügen Sie zunächst ein Leerzeichen oder Wort hinzu (zum Beispiel „ `/path/to/file`").

:::

## Eingebaute Befehle

Diese werden mit aiFetchly mitgeliefert und sind immer verfügbar. Sie werden sofort ausgeführt, ohne die KI aufzurufen (mit Ausnahme von `/plugin`, das eine Installationsaktion durchführt).

| Befehl | Beschreibung |
|---|---|
| `/help` | Listet verfügbare Slash-Befehle und deren Quellen auf. |
| `/clear` | Leert die aktuelle Unterhaltung. |
| `/status` | Zeigt den aiFetchly-Konfigurationsstatus, Zähler und Diagnosen an. |
| `/skills` | Listet die aktuell verfügbaren KI-Fähigkeiten/Tools in diesem System auf. |
| `/agents` | Listet verfügbare aiFetchly-Agenten auf (eingebaute und dynamische). |
| `/reload-config` | Untersucht `~/.aifetchly` neu und lädt die Konfiguration erneut. |
| `/goal` | Setzt das aktive AI-Chat-Ziel oder ersetzt es und aktiviert den Plan-Modus. |
| `/loop` | Führt begrenzte autonome Iterationen in Richtung des aktiven Ziels aus. |
| `/plugin` | Verwaltet Plugin-Marktplätze und installiert Plugins aus dem Chat. |

### `/help`

Führt eine kurze Inventur aller in Ihrem aktuellen Bereich verfügbaren Befehle durch (built-in + user + workspace + plugin), jeder mit seinem Quell-Badge angezeigt. Verwenden Sie ihn, um Befehle zu entdecken, die Sie (oder ein Plugin) hinzugefügt haben.

### `/clear`

Leert die aktuelle Unterhaltung. Verwenden Sie ihn, um neu zu beginnen, ohne den Unterhaltungsverlaufs-Dialog zu öffnen. Dies kann nicht rückgängig gemacht werden.

### `/status`

Gibt einen Schnappschuss Ihrer aiFetchly-Konfiguration aus: wie viele Befehle, Agenten, Hooks und Skills geladen sind, wie viele Diagnosen ausgegeben wurden und wann die Konfiguration zuletzt neu geladen wurde. Nützlich bei der Fehlersuche für benutzerdefinierte Befehle, die nicht geladen wurden.

### `/skills` und `/agents`

`/skills` listet die aktuell in diesem System aktivierten KI-Fähigkeiten/Tools auf. `/agents` listet verfügbare aiFetchly-Agenten auf (eingebaute und dynamische). Siehe [KI-Fähigkeiten](./ai-skills) und [Unteragenten](./subagents) für Hintergrundinformationen.

### `/reload-config`

Erzwingt ein erneutes Einlesen von `~/.aifetchly` und lädt die Konfiguration neu. Verwenden Sie ihn, nachdem Sie Befehlsdateien **außerhalb der App manuell bearbeitet oder hinzugefügt** haben und möchten, dass sie sofort erscheinen. Wenn der Datei-Watcher läuft, erscheinen neue Befehle in der Regel von selbst — dies ist der manuelle Fallback.

### `/plugin`

Der einzige eingebaute Befehl, der Argumente annimmt. Er ermöglicht Ihnen die Verwaltung von Plugin-Marktplätzen und die Installation von Plugins, ohne den Chat zu verlassen.

```
/plugin marketplace add <source> [--ref <ref>] [--overwrite]
/plugin install <plugin@marketplace|source> [--overwrite] [--ref <ref>] [--kind <kind>]
```

Der `<source>` kann ein lokaler Ordner, eine `.zip`-Datei, eine Git/GitHub/HTTPS-URL, die GitHub-Kurzform `owner/repo` oder `npm:<package>` sein. Der optionale `--kind` ist einer der Werte `local-zip | local-folder | git | github | npm | url`.

Beispiele:

```
/plugin marketplace add https://github.com/acme/aifetchly-plugins
/plugin install lead-tools@acme-plugins
/plugin install npm:@acme/awesome-plugin
```

Siehe [Plugin-Manager](./plugin-manager) für den vollständigen Plugin-Lebenszyklus.


### `/goal` und `/loop`

Im Gegensatz zu den anderen oben genannten Built-ins sind diese beiden KI-gesteuert und arbeiten zusammen: `/goal` setzt ein dauerhaftes, überprüfbares Ziel (und aktiviert den Plan-Modus), und `/loop <maxIterations>` führt eine begrenzte Anzahl autonomer Iterationen in Richtung dieses Ziels aus. Der Abschluss ist evidenzbasiert — der Assistent kann sein eigenes Ziel nicht selbst als erledigt erklären.

```text
/goal Build a Facebook campaign scraper and verify it works
/loop 5
```

Siehe die dedizierte Seite **[Ziel- und Schleifen-Befehle](./goal-and-loop)** für Akzeptanzkriterien, Verifizierungsmethoden, Schleifenlimits, Stoppbedingungen und Statusbedeutungen.
## Befehlsquellen und Rangfolge

Befehle aus den vier Quellen werden zu einer einzigen Liste zusammengeführt. Wenn zwei Befehle denselben Namen haben, entscheidet diese Rangfolge, welcher ausgeführt wird:

**Built-in → Workspace → User → Plugin**

- **Built-in**-Befehle können niemals überschrieben werden. `/clear`, `/help` usw. bedeuten immer das, was aiFetchly festlegt.
- Ein **Workspace**-Befehl überschattet einen **User**-Befehl mit demselben Namen, der wiederum einen **Plugin**-Befehl überschattet.
- Aliase gelten ebenfalls: Wenn Sie einem benutzerdefinierten Befehl den Alias `clear` geben, führt `/clear` weiterhin den eingebauten Befehl aus (eingebaute Namen und Aliase haben immer Vorrang).

Das bedeutet, dass Sie einen benutzerdefinierten Befehl bedenkenlos `outreach` nennen können, selbst wenn ein Plugin ebenfalls einen definiert — Ihr Befehl gewinnt gegenüber dem Plugin, aber ein eingebauter Befehl mit diesem Namen würde gegenüber Ihnen gewinnen.

## Benutzerdefinierte Befehle erstellen

Benutzerdefinierte Befehle sind **wiederverwendbare Prompt-Vorlagen**, die als kleine Markdown-Dateien gespeichert werden. Sie eignen sich perfekt für Prompts, die Sie häufig senden: eine Recherche-Checkliste, eine feste Outreach-Struktur, eine Übersetzungsanfrage, ein Zusammenfassungsformat.

Es gibt zwei Orte, an denen Sie sie ablegen können:

| Ort | Bereich | Vertrauen |
|---|---|---|
| `~/.aifetchly/commands/*.md` | In **jedem** Chat verfügbar (Ihre globalen Befehle). | Automatisch vertrauenswürdig — Sie haben sie erstellt. |
| `<workspace>/.aifetchly/commands/*.md` | **Nur** verfügbar, wenn dieser Workspace aktiv ist. | Erfordert, dass der Workspace als [vertrauenswürdig](#workspace-commands-and-trust) eingestuft wird. |

`~` ist Ihr Home-Verzeichnis (`/home/you` unter macOS/Linux, `%USERPROFILE%` unter Windows). Der Ordner `.aifetchly` ist der globale Konfigurations-Stamm von aiFetchly.

### Dateiformat

Jeder Befehl ist eine `.md`-Datei mit einem kleinen Frontmatter-Header und einem Prompt-Body:

```
---
name: outreach
description: Draft a cold outreach email for the given company.
type: prompt
argumentHint: <company website>
aliases:
  - reach
---
Research the company behind the following website, then write a concise,
friendly cold-outreach email proposing how aiFetchly could help them find
more leads. Keep it under 120 words.

$ARGUMENTS
```

#### Frontmatter-Felder

| Feld | Erforderlich | Hinweise |
|---|---|---|
| `name` | Ja | Kleinbuchstaben, Ziffern, `-`, `_`. Muss mit einem Buchstaben beginnen. Beispiel: `outreach`. Dies geben Sie nach `/` ein. |
| `description` | Ja | Bis zu 500 Zeichen. Wird in der Vorschlagsliste angezeigt. |
| `type` | Ja | Muss `prompt` für benutzerdefinierte Prompt-Befehle sein. |
| `argumentHint` | Nein | Bis zu 100 Zeichen. Ein Hinweis, der neben dem Namen angezeigt wird, z. B. `<text>`. |
| `aliases` | Nein | Bis zu 10 alternative Namen, die jeweils den `name`-Regeln folgen. Als YAML-String-Array angegeben. |

Der **Body** (alles nach dem zweiten `---`) ist der Prompt-Text. Er darf nicht leer sein.

:::warning Verwenden Sie die exakten Feldnamen

Der Frontmatter-Parser versteht nur einfache `key: value`-Zeilen und String-Arrays — er ist bewusst **kein** vollständiger YAML-Parser, und zwar aus Sicherheitsgründen. Bleiben Sie bei den obigen Feldern. Fügen Sie keine verschachtelten Maps, mehrzeilige Werte in Anführungszeichen oder unbekannte Felder hinzu in der Erwartung, dass sie etwas bewirken.

:::

### Das `$ARGUMENTS`-Token

Was auch immer Sie **nach** dem Befehlsnamen tippen, wird zu den Argumenten des Befehls. Das `$ARGUMENTS`-Token steuert, wo dieser Text in Ihrem Prompt landet:

- **Body enthält `$ARGUMENTS`** — jedes Vorkommen wird durch Ihren Text ersetzt.
- **Body hat kein `$ARGUMENTS`, aber Sie haben etwas eingegeben** — Ihr Text wird an das Ende des Bodys angehängt, sodass er niemals stillschweigend verworfen wird.
- **Sie haben nichts eingegeben** — der Body wird genau wie geschrieben verwendet.

Beispiel mit `/outreach acme.com`:

```
Research the company behind the following website, then write ...
more leads. Keep it under 120 words.

acme.com
```

### Einige weitere Beispiele

Ein Befehl ohne Argumente (eine feste Checkliste, die Sie mit `/review` aufrufen):

```
---
name: review
description: Load my standard lead-review checklist into the chat.
type: prompt
---
Review the most recent lead in this conversation against my checklist:
1. Is the website a real business?
2. What product/service do they sell?
3. Who is the likely decision-maker?
4. What is a relevant hook for outreach?
Return the answers as a short table.
```

Ein Befehl mit einem Alias (aufrufbar als `/translate` **oder** `/tr`):

```
---
name: translate
description: Translate the given text to English.
type: prompt
argumentHint: <text>
aliases:
  - tr
---
Translate the following text to English:

$ARGUMENTS
```

### Grenzwerte

- Pro Befehlsdatei: bis zu **64 KB**.
- Bis zu **200 Befehle** pro Quelle.
- `description`: bis zu 500 Zeichen. `argumentHint`: bis zu 100. `aliases`: bis zu 10.

Dateien, die gegen diese Regeln verstoßen oder ein ungültiges Frontmatter aufweisen, werden übersprungen und als Diagnose in `/status` angezeigt.

## Workspace-Befehle und Vertrauen

Befehle, die im `.aifetchly/commands/`-Ordner eines **Workspace** abgelegt sind, sind eine leistungsstarke Möglichkeit, Befehle über ein Repo mit einem Team zu teilen. Da sie aus einem Ordner stammen, den Sie vielleicht gerade erst ausgecheckt haben, behandelt aiFetchly sie standardmäßig als **nicht vertrauenswürdig**.

- Wenn ein Workspace Konfiguration definiert, zeigt aiFetchly eine Aufforderung **„Workspace AiFetchly config"**, die Sie bittet, diese zu überprüfen und als **vertrauenswürdig** einzustufen, bevor ihre Befehle aktiviert werden.
- Bis Sie dem Workspace vertrauen, sind seine Befehle in der Vorschlagsliste **ausgeblendet** und können nicht aufgerufen werden — Sie sehen *„Command /name is disabled because workspace config is not trusted."*
- Workspace-Befehle sind auf ihren Workspace beschränkt. Ein Befehl aus Workspace A ist in einem Chat, der Workspace B verwendet, **niemals** verfügbar.

Dies ist die eigentliche Sicherheitsgrenze für die Herkunft von Befehlen — überprüfen Sie immer den `.aifetchly/`-Ordner eines Workspace, bevor Sie ihm vertrauen, genauso wie Sie jeden anderen Code in diesem Repo überprüfen würden.

## Plugin-Befehle

Plugins können neben Skills und MCP-Servern ihre eigenen Slash-Befehle mitliefern. Sobald ein Plugin installiert ist, erscheinen seine Befehle automatisch mit einem **Plugin**-Badge und der Quell-ID `plugin:<name>`. Siehe [Plugin-Manager](./plugin-manager) zur Installation und Verwaltung von Plugins und [KI-Fähigkeiten](./ai-skills) für das breitere Modell der Plugin-eigenen Fähigkeiten.

## Tipps

### Das sollten Sie tun ✅

- **Verwenden Sie `/help`**, um genau zu sehen, welche Befehle in Ihrem aktuellen Bereich verfügbar sind.
- **Wandeln Sie wiederkehrende Prompts in Befehle um** — wenn Sie dieselben Anweisungen dreimal getippt haben, erstellen Sie dafür einen `/command`.
- **Geben Sie Befehlen kurze Aliase**, damit sie schnell zu tippen sind (z. B. `tr` für `translate`).
- **Führen Sie `/status` aus**, wenn ein benutzerdefinierter Befehl, den Sie gerade hinzugefügt haben, nicht erscheint — die Diagnose-Anzahl sagt Ihnen, ob eine Datei nicht geladen werden konnte.
- **Vertrauen Sie Workspace-Konfigurationen bewusst** — lesen Sie die Befehle vor der Genehmigung.

### Das sollten Sie vermeiden ❌

- **Erwarten Sie nicht, eingebaute Befehle überschreiben zu können** — `/clear`, `/help` usw. gewinnen immer. Wählen Sie einen anderen Namen.
- **Legen Sie keine Secrets in Befehlsdateien ab** — sie sind reines Markdown auf der Festplatte und könnten über ein Repo geteilt werden.
- **Vertrauen Sie keiner Workspace-Konfiguration, die Sie nicht gelesen haben** — ihre Befehle können Prompts ausführen und Tools aufrufen.
- **Erwarten Sie nicht, dass `Tab` automatisch vervollständigt** — verwenden Sie `Enter`, um aus der Vorschlagsliste auszuwählen.

## Fehlerbehebung

### Mein benutzerdefinierter Befehl erscheint nicht in der Vorschlagsliste

- Bestätigen Sie, dass sich die Datei unter `~/.aifetchly/commands/<name>.md` (oder der Workspace-Entsprechung) befindet und mit `.md` endet.
- Überprüfen Sie, ob `name` den Regeln entspricht (Kleinbuchstaben, beginnt mit einem Buchstaben, nur Buchstaben/Ziffern/`-`/`_`).
- Stellen Sie sicher, dass `type: prompt` vorhanden ist und der Body nicht leer ist.
- Führen Sie `/status` aus — wenn die Diagnose-Anzahl ungleich null ist, ist eine Datei bei der Validierung gescheitert. Führen Sie `/reload-config` aus, um ein erneutes Einlesen zu erzwingen.
- Beachten Sie die Rangfolge der eingebauten Befehle: Ein eingebauter oder Workspace-Befehl mit demselben Namen überschattet Ihren.

### Ich erhalte „Unknown slash command: /name"

Der Befehl ist im aktuellen Bereich nicht verfügbar. Es kann sich um einen Workspace-Befehl handeln, dessen Workspace nicht aktiv oder vertrauenswürdig ist, oder um einen Plugin-Befehl, dessen Plugin nicht installiert ist. `/help` listet alle aktuell verfügbaren Befehle auf.

### Ich erhalte „Command /name is disabled."

Der Befehl stammt aus einem Workspace, dessen Konfiguration Sie noch nicht vertraut haben. Öffnen Sie die Workspace-Vertrauens-Aufforderung und überprüfen Sie die Konfiguration, bevor Sie ihn aktivieren.

### Das Auswählen eines Befehls hat ihn nicht ausgeführt

Das ist erwartet. Das Auswählen eines Befehls aus der Vorschlagsliste fügt `/name ` in das Feld ein und schließt die Liste. Tippen Sie beliebige Argumente und drücken Sie dann `Enter`, um ihn auszuführen.

## Nächste Schritte

- [KI-Chat V2](./ai-chat-v2) — der Chat, in dem die Slash-Befehle leben.
- [KI-Fähigkeiten](./ai-skills) — paketierte Tools, die die KI aufrufen kann.
- [Unteragenten](./subagents) — bereichsbezogene Spezialisten wie der Lead-Rechercheur.
- [Plugin-Manager](./plugin-manager) — installieren Sie Plugins, die ihre eigenen Befehle mitbringen.
