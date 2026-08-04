---
id: goal-and-loop
title: Ziel- und Schleifen-Befehle
sidebar_label: Ziele & Schleifen
description: Definiere ein dauerhaftes Ziel mit /goal, führe begrenzte Iterationen dorthin mit /loop aus und wiederhole einen Prompt in festem Intervall mit /loop 5m in AI Chat V2.
---

# Ziel- und Schleifen-Befehle

Die Slash-Befehle **`/goal`** und **`/loop`** ermöglichen es dir, dem AI-Chat-V2-Assistenten ein dauerhaftes Ziel zu geben und dann entweder in begrenzten, überprüfbaren Schritten auf dieses Ziel hinzuarbeiten oder einen Prompt in einem festen Intervall zu wiederholen — anstatt ihn Runde für Runde zu promoten.

`/goal` erfasst, was „fertig" bedeutet, einschließlich expliziter, überprüfbarer Akzeptanzkriterien. `/loop` hat dabei **zwei Modi**:

- **Ziel-Schleife** — `/loop 5` führt eine begrenzte Anzahl autonomer Iterationen in Richtung des aktiven Ziels aus, sammelt frische Evidenz und überprüft jedes Kriterium, bevor das Ziel als abgeschlossen markiert werden kann.
- **Geplante Schleife** — `/loop 5m check the deployment` wiederholt einen Prompt in einem festen Intervall (alle 5 Minuten, alle 2 Stunden, …), sodass du Arbeiten überwachen kannst, die sich im Laufe der Zeit ändern. Jedes Vorkommen und jede Antwort bleibt in derselben Konversation.

:::info Nur in AI Chat V2

`/goal` und `/loop` sind eingebaute Slash-Befehle, die im Composer von **[AI Chat V2](./ai-chat-v2)** verfügbar sind. Sie setzen ein aktives aiFetchly-Abonnement mit aktivierter KI voraus und nutzen den vorhandenen [Plan Mode](./ai-chat-v2), die Werkzeugfreigabe und die Workspace-Sicherheitsgrenzen von AI Chat V2.

:::

## Die beiden `/loop`-Modi

Welcher Modus greift, hängt davon ab, was du nach `/loop` eingibst:

| Modus | Befehl | Was er tut | Erfordert |
|---|---|---|---|
| **Ziel-Schleife** | `/loop <maxIterations>` | Führt bis zu dieser Anzahl autonomer Iterationen zum aktiven Ziel aus. | Ein bereits mit `/goal` gesetztes aktives Ziel. |
| **Geplante Schleife** | `/loop <duration> <prompt>` | Wiederholt den Prompt in einem festen Intervall, in derselben Konversation. | Einen nicht-leeren Prompt. |
| **Steuerung der geplanten Schleife** | `/loop status` · `/loop pause` · `/loop resume` · `/loop stop` | Verwaltet die geplante Schleife der aktiven Konversation. | Eine aktive geplante Schleife in dieser Konversation. |

Eine bloße ganze Zahl (`/loop 5`) bedeutet immer eine Ziel-Schleife. Eine Dauer (`/loop 5m …`) bedeutet immer eine geplante Schleife. Die beiden Modi stören sich nie gegenseitig.

## `/goal` — ein dauerhaftes Ziel setzen

### Syntax

```text
/goal <objective>
```

Beispiel:

```text
/goal Build a Facebook campaign scraper and verify it works
```

### Was passiert

1. Das Ziel wird das **aktive Ziel** der aktuellen Konversation.
2. AI Chat wechselt in den **Plan Mode**. Der Assistent stellt klärende Fragen, wenn das Ziel mehrdeutig ist.
3. Der Assistent schlägt einen Plan vor, der ein oder mehrere **Akzeptanzkriterien** enthält — konkrete, überprüfbare Bedingungen, die definieren, was „fertig" bedeutet.
4. Du genehmigst (oder lehnst ab oder forderst Änderungen an) den Plan über den normalen Plan-Mode-Genehmigungsfluss.
5. Das Ziel bleibt für die Konversation aktiv, bis es **abgeschlossen**, **blockiert** oder **abgebrochen** ist.

Erneutes Ausführen von `/goal` ersetzt das aktuelle aktive Ziel.

### Akzeptanzkriterien und Verifikation

Jedes Akzeptanzkriterium wird automatisch überprüft — das Ziel ist nicht allein deshalb fertig, weil der Assistent es sagt. Jedes Kriterium hat eine Verifikationsmethode:

| Methode | Wie das Kriterium geprüft wird |
|---|---|
| **command** | Ein Befehl wird erfolgreich beendet, optional passend zu einem erwarteten Exit-Code oder Ausgabe-Muster. |
| **file** | Eine erwartete Datei oder ein erwarteter Projektzustand ist vorhanden, z. B. eine Datei existiert oder hat sich geändert. |
| **manual** | Die Schleife pausiert und bittet dich um Bestätigung. |
| **llm** | Ein unabhängiger Prüfer bewertet die gesammelte Evidenz für Kriterien, die nicht deterministisch geprüft werden können. |

Ein Kriterium kann als **erforderlich** oder optional markiert werden. Das Ziel kann erst als abgeschlossen markiert werden, wenn **alle erforderlichen Kriterien** mit frischer Evidenz erfüllt sind.

:::tip Schreib überprüfbare Ziele

`/goal` funktioniert am besten, wenn „fertig" etwas ist, das die App überprüfen kann. Ein Ziel wie „den Scraper bauen und verifizieren, dass er funktioniert" — mit einem Kriterium wie „der Test-Befehl endet mit 0" — ist deutlich zuverlässiger als ein subjektives wie „mach den Scraper gut".

:::

## Ziel-Schleife — `/loop <maxIterations>`

### Syntax

```text
/loop <maxIterations>
```

`<maxIterations>` ist eine ganze Zahl von **1 bis 10**. Gib sie explizit an — wenn du sie weglässt oder einen Wert außerhalb dieses Bereichs angibst, fordert `/loop` einen gültigen Zähler an. Eine Ziel-Schleife **erfordert außerdem ein aktives Ziel**; wenn du keines gesetzt hast, wird sie dich auffordern, zuerst `/goal` auszuführen.

Beispiel:

```text
/loop 5
```

### Was jede Iteration tut

Jede Iteration durchläuft denselben Beobachten → Handeln → Verifizieren-Zyklus:

```text
Aktuellen Zustand beobachten
  → der Assistent schlägt eine begrenzte nächste Aktion vor
  → genehmigte Werkzeuge führen sie aus
  → das System sammelt frische Evidenz
  → deterministische Prüfungen laufen zuerst
  → ein unabhängiger Prüfer bewertet verbleibende Kriterien
  → die Schleife fährt fort, schließt ab, blockiert oder fragt ab
```

Der Fortschritt wird während der Ausführung in der Konversation angezeigt — Iterationszähler, Evidenz-Zusammenfassungen und Verifikationsergebnisse pro Kriterium.

### Wann die Ziel-Schleife stoppt

Eine Ziel-Schleife läuft nie endlos. Sie stoppt, sobald eine dieser Bedingungen zutrifft:

- Du drückst **Stop**.
- Die maximale Iterationsanzahl ist erreicht.
- Das Zeitlimit pro Durchlauf ist erreicht.
- Das Ziel ist **abgeschlossen** — alle erforderlichen Kriterien wurden mit frischer Evidenz erfüllt.
- Ein Werkzeug braucht deine Genehmigung, oder der Plan Mode braucht eine Freigabe.
- Der Assistent muss dir eine Frage stellen.
- Derselbe Fehler wiederholt sich oft genug, sodass das Ziel **blockiert** wird.
- Der Prüfer gibt `blocked` oder `needs_user_input` zurück.
- Ein nicht behebbarer Fehler tritt auf.

### Wie die Fertigstellung entschieden wird

Der Assistent, der die Arbeit ausführt, **kann sein eigenes Ziel nicht per Erklärung als fertig markieren**. Die Fertigstellung erfordert **frische, kriterienspezifische Evidenz** — beispielsweise ein Test, der *nach* der letzten Codeänderung bestanden wurde, kein veraltetes Ergebnis von davor.

Deterministische Prüfungen (Befehle, Dateizustand) laufen zuerst. Der unabhängige LLM-Prüfer wird nur für Kriterien genutzt, die nicht deterministisch geprüft werden können, und gibt strukturierte Befunde (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) zurück, die an spezifische Evidenz gebunden sind — nie ein „fertig" im Freitext.

## Geplante Schleife — `/loop <duration> <prompt>`

Eine geplante Schleife wiederholt einen Prompt in einem festen Intervall und behält **jedes Vorkommen und jede Antwort in derselben Konversation**. Sie benötigt kein Ziel und erstellt nie pro Durchlauf einen neuen Chat.

```text
/loop 5m check if the deployment finished and tell me what happened
```

Nutze sie, um Arbeiten zu überwachen, die sich im Laufe der Zeit ändern — Deployments, Imports, Kampagnenantworten, Scraping-Jobs, externe Freigaben — ohne denselben Prompt per Hand erneut zu senden.

### Wann du eine geplante Schleife verwendest

- **Deployment-Überwachung** — `/loop 5m check if deployment 218 finished and summarize the result`
- **Kampagnen-Überwachung** — `/loop 1h --times 8 -- summarize new campaign replies and flag urgent leads`
- **Lange Imports** — `/loop every 15m --for 3h -- check the contact import and report new failures`

Du kannst zwischen den Vorkommen in derselben Konversation weiterschreiben. Der nächste geplante Durchlauf nimmt deine interaktiven Nachrichten als Teil seines Kontexts auf.

### Syntax

**Kurzform** — Intervall gefolgt vom Prompt:

```text
/loop <duration> <prompt>
```

```text
/loop 5m check if the deployment finished and tell me what happened
/loop 2h summarize any new campaign replies
```

**Kanonische Form** — für explizite Limits, mit einem `--`-Trenner vor dem Prompt:

```text
/loop every <duration> [--times <count>] [--for <duration>] -- <prompt>
```

```text
/loop every 5m --times 12 -- check if the deployment finished
/loop every 1h --for 8h -- summarize new campaign replies
/loop every 30m --times 6 --for 3h -- check the import status
```

Wenn sowohl `--times` als auch `--for` angegeben sind, stoppt die Schleife bei der zuerst erreichten Grenze. Der `--`-Trenner ist in der kanonischen Form erforderlich, damit Prompt-Text mit Wörtern wie „times" oder „for" nicht als Optionen fehlinterpretiert wird.

### Regeln für die Dauer

Intervalle verwenden zwei Einheiten:

- `m` — Minuten
- `h` — Stunden

Regeln:

- Mindestintervall: **1m**. Maximalintervall: **24h**.
- Der Wert muss eine positive ganze Zahl ohne Leerzeichen vor der Einheit sein — `5m`, `2h`, `30m`.
- Die Einheit ist case-insensitive (`5M` und `5m` sind gleich).
- Dezimalzahlen, Vorzeichen, wissenschaftliche Notation, Leerzeichen und unbekannte Einheiten werden abgelehnt.

Abgelehnte Beispiele:

```text
/loop 0m check deployment
/loop -5m check deployment
/loop 1.5h check deployment
/loop 5 minutes check deployment
/loop 5m
/loop 5d check deployment
```

### Standard- und Höchstgrenzen

Eine geplante Schleife ist **immer begrenzt** — nach Ausführungsanzahl und nach Lebensdauer.

| Grenze | Standard | Maximum |
|---|---|---|
| Ausführungen (`--times`) | 24 | 100 |
| Lebensdauer (`--for`) | 24 Stunden | 7 Tage |

Die Kurzform `/loop 5m <prompt>` läuft **höchstens 24-mal und maximal 24 Stunden** — was immer zuerst eintritt. Bei einem Fünf-Minuten-Intervall beendet normalerweise der Ausführungszähler die Schleife zuerst. Verwende `--times` und `--for` in der kanonischen Form, um eine der Grenzen bis zum Maximum anzuheben.

### Was beim Start passiert

Wenn der Befehl akzeptiert wird, hängt AI Chat V2 den sichtbaren Slash-Befehl und eine kurze Bestätigung in dieselbe Konversation an, zum Beispiel:

```text
Scheduled every 5 minutes. Maximum 24 runs or 24 hours. Next run: 14:35.
```

Das erste Vorkommen läuft **ein Intervall nach** dem Start der Schleife — es wird nicht sofort ausgeführt. Die Bestätigung nennt die nächste Laufzeit, damit du genau weißt, wann die erste Prüfung stattfindet.

### Geplante Durchläufe bleiben in einer Konversation

Jedes Vorkommen wird zu einem normalen, dauerhaften Konversationszug:

1. Der geplante Prompt wird an die ursprüngliche Konversation angehangen.
2. Die KI erhält die vorhandene Historie und den Kontext dieser Konversation.
3. Die Assistentenantwort wird an **dieselbe** Konversation angehangen.
4. Wenn diese Konversation geöffnet ist, wird sie aktualisiert und die Antwort streamt live hinein.
5. Wenn eine andere Konversation geöffnet ist, aktualisiert aiFetchly die Vorschau und den ungelesen-Indikator der Ursprungskonversation, ohne dich aus deiner aktuellen Arbeit herauszuholen.

Geplante Nutzerzugänge werden mit einem kleinen Uhr-Symbol und einer Lauf-Label (z. B. *Scheduled — Run 2*) angezeigt, damit du sie von selbst getippten Nachrichten unterscheiden kannst.

:::tip Eine Konversation, eine Zeitachse

Da jedes Vorkommen eine gemeinsame Aufzeichnung teilt, können spätere Durchläufe auf früheren Beobachtungen aufbauen. Du kannst zwischen Durchläufen auch eine Rückfrage stellen und der nächste geplante Durchlauf wird sie berücksichtigen.

:::

### Status, Pause, Fortsetzen und Stopp

Solange eine Konversation eine aktive geplante Schleife hat, zeigt die Chat-Kopfzeile einen **Status-Chip** mit dem Zustand der Schleife und kompakten Steuerelementen:

- **Pause** — verhindert, dass neue Vorkommen starten. Die Historie bleibt erhalten.
- **Resume** — berechnet die nächste Laufzeit und fährt fort. Verpasste Vorkommen werden nicht nachgeholt.
- **Stop loop** — verhindert alle zukünftigen Vorkommen. Der aktuell laufende Durchlauf darf enden.
- **Stop current run** — bricht nur den gerade laufenden Durchlauf ab; zukünftige Vorkommen laufen weiter.

Dieselben Aktionen sind als Befehle verfügbar, begrenzt auf die aktive Konversation:

```text
/loop status
/loop pause
/loop resume
/loop stop
```

Diese wirken sich nur auf die Schleife der aktiven Konversation aus. Sie können eine Schleife in einer anderen Konversation weder stoppen noch ändern. Alle Steueraktionen sind idempotent — zweimaliges Ausführen wirkt wie einmaliges.

### Lebenszyklus der geplanten Schleife

Eine geplante Schleife durchläuft folgende Zustände:

| Status | Bedeutung |
|---|---|
| **active** | Wartet auf das nächste Vorkommen. |
| **running** | Ein Vorkommen wird gerade ausgeführt. |
| **paused** | Pausiert — es starten keine neuen Vorkommen, bis du fortsetzt. |
| **expired** | Die Ausführungs- oder Lebensdauergrenze wurde erreicht. |
| **failed** | Wiederholte Fehler oder ein nicht behebbarer Fehler haben die Schleife gestoppt. |
| **stopped** | Du hast sie gestoppt (oder die Konversation wurde gelöscht). |

### Wiederherstellung nach Neustart oder Ruhezustand

Geplante Schleifen basieren auf einem persistenten Scheduler und überstehen daher einen App-Neustart oder den System-Ruhezustand:

- Wenn kein Vorkommen verpasst wurde, bleibt die nächste Laufzeit erhalten.
- Wenn Vorkommen verpasst wurden, während die App geschlossen war oder das System schlief, wird **höchstens ein Nachhol-Durchlauf** ausgeführt — nie eine Salve eines Durchlaufs pro verpasstem Intervall.
- Wenn die Lebensdauer der Schleife offline abgelaufen ist, wird sie einfach als abgelaufen markiert.
- Änderungen der Uhrzeit, der Sommerzeit oder der Zeitzone erzeugen nie doppelte Durchläufe.

Die Datenbank ist die Wahrheitsquelle. Wenn eine Aktualisierungs-Benachrichtigung verpasst wird, lädt das erneute Öffnen der Konversation die vollständige, korrekte Historie neu.

### Grenzen und Sicherheit

| Grenze | Wert |
|---|---|
| Intervall (`/loop <duration>`) | 1m – 24h |
| Ausführungen | standardmäßig 24, max 100 |
| Lebensdauer | standardmäßig 24h, max 7 Tage |
| Aktive geplante Schleifen pro Konversation | Eine |
| Zeitobergrenze pro Durchlauf | 10 Minuten |
| Aufeinanderfolgende Fehler bevor die Schleife scheitert | 3 |

Sicherheitsgarantien, die immer gelten:

- Eine geplante Schleife ist **immer begrenzt** — nach Anzahl und Lebensdauer. Sie läuft nie endlos.
- Sie ist **immer abbrechbar** (Stop).
- **Interaktive Züge haben Vorrang.** Wenn du mitten in einer Konversation bist, wenn ein Durchlauf fällig ist, wird das geplante Vorkommen verschoben oder zusammengeführt — es unterbricht nie deinen Zug.
- Vorkommen **überlappen nie**. Wenn ein Durchlauf länger als sein Intervall dauert, werden fällige Vorkommen zu einem ausstehenden zusammengeführt.
- **Die Werkzeug-Richtlinie ist pro Aufgabe.** Geplante Durchläufe sind unbeaufsichtigt, daher sind nur explizit genehmigte Werkzeuge verfügbar und wirkungsvolle Werkzeuge bleiben gesperrt. Deine interaktiven „Always Allow"-Entscheidungen **erweitern nicht**, was eine geplante Schleife tun darf.
- **KI-Aktivierung** sowie Workspace- und Datei-Sicherheitsgrenzen bleiben in Kraft.
- Die Schleife **schließt nicht** aus dem Wortlaut des Assistenten („done", „complete") auf Fertigstellung. Sie stoppt nur bei einer Grenze, einer Fehler-Schwelle, einem expliziten Stop oder weil die Konversation verschwunden ist.

:::warning Leeren oder Löschen einer Konversation stoppt ihre Schleife

Wenn eine Konversation eine aktive geplante Schleife hat, fordert das Leeren ihrer Historie zur Bestätigung auf, dass die Schleife ebenfalls gestoppt wird, und das Löschen der Konversation stoppt die Schleife zuerst. aiFetchly hinterlässt nie eine unbeaufsichtigte Schleife für eine gelöschte Konversation und erstellt eine gelöschte Konversation nie neu.

:::

## Ziel- und Schleifen-Status

Ein Ziel durchläuft folgende Zustände:

| Status | Bedeutung |
|---|---|
| **draft** | Das Ziel wird gerade im Plan Mode definiert. |
| **active** | Genehmigt und wartet auf Ausführung oder Fortsetzung. |
| **running** | Ein `/loop` führt eine Iteration aus. |
| **complete** | Alle erforderlichen Kriterien wurden mit frischer Evidenz erfüllt. |
| **blocked** | Wiederholte Fehler oder ein ungelöster Blocker — braucht deine Aufmerksamkeit. |
| **needs_user_input** | Die Schleife pausierte, um dir eine Frage zu stellen oder eine Bestätigung einzuholen. |
| **failed** | Ein nicht behebbarer Fehler beendete den Durchlauf. |
| **cancelled** | Du hast sie gestoppt. |

## Grenzen und Sicherheit

| Grenze | Wert |
|---|---|
| Iterationsanzahl der Ziel-Schleife (`/loop <N>`) | 1–10 (explizit angeben) |
| Zeitobergrenze pro Durchlauf | 10 Minuten (Standard) |
| Identische Fehler vor **blockiert** | 3 |
| Aktive Ziele pro Konversation | Eins (ein neues Ziel ersetzt das alte) |

Sicherheitsgarantien, die immer gelten:

- Jede Schleife ist **immer begrenzt** — nie unendlich.
- Sie ist **immer abbrechbar** (Stop drücken).
- **KI-Aktivierung**, Werkzeug-Freigabemodus, Plan Mode sowie Workspace- und Datei-Sicherheitsgrenzen bleiben während einer Schleife aktiv.
- Zerstörerische Aktionen, neue Abhängigkeiten, Authentifizierungsänderungen und andere wirkungsvolle Seiteneffekte erfordern weiterhin die normale Freigabegrenze — auch mitten in der Schleife.
- Evidenz und Logs, die dem Prüfer gezeigt werden, sind begrenzt, größenbeschränkt und von Geheimnissen bereinigt und werden als nicht vertrauenswürdige Daten behandelt — nie als Anweisungen.

## Tipps

### DOS ✅

- **Setze ein Ziel vor einer Ziel-Schleife** — `/loop 5` braucht immer ein aktives `/goal`.
- **Mach Ziele überprüfbar** — ziehe Kriterien, die die App prüfen kann (ein Befehl, eine Datei), subjektiven vor.
- **Starte eine Ziel-Schleife mit kleinem Zähler** (`/loop 3`), um den Fortschritt zu prüfen, bevor du dich zu mehr verpflichtest.
- **Behalte den Plan Mode bei** für Ziele, die Dateien ändern, Outreach verschicken oder viele Werkzeugaufrufe ausführen.
- **Nutze eine geplante Schleife zur Überwachung** — alles, was sich im Laufe der Zeit ändert (Deployment, Import, Kampagne), passt gut.
- **Behalte den KI-Zugriff aktiviert** — eine geplante Schleife pausiert nach wiederholten `AI_DISABLED`-Fehlern.

### DON'Ts ❌

- **Erwarte keine unbegrenzte Autonomie** — eine Ziel-Schleife braucht immer einen expliziten Zähler von 1 bis 10, und eine geplante Schleife hat immer eine Ausführungs- und Lebensdauer-Obergrenze.
- **Vertraue keinem bloßen „done"** — die Ziel-Fertigstellung ist evidenzbasiert; wenn ein erforderliches Kriterium nicht erfüllt ist, ist das Ziel nicht fertig.
- **Erwarte nicht, dass eine geplante Schleife bei geschlossener App läuft** — sie läuft nur, während aiFetchly geöffnet ist, und holt höchstens einmal beim Neustart nach.
- **Erwarte nicht, dass das interaktive „Always Allow" für geplante Durchläufe gilt** — geplante Werkzeugberechtigungen sind pro Aufgabe und strenger.

## Fehlerbehebung

| Symptom | Wahrscheinliche Ursache | Was tun |
|---|---|---|
| *„Set a goal first with /goal"* | Kein aktives Ziel in dieser Konversation | Führe `/goal <objective>` aus und genehmige zuerst den Plan. |
| *„Please provide an iteration count"* | `/loop` ohne Zahl aufgerufen | Gib einen Zähler an, z. B. `/loop 5`. |
| *„Iteration count must be between 1 and 10"* | Zähler fehlt, ist null oder über 10 | Verwende eine ganze Zahl von 1 bis 10. |
| *„The interval must be between 1 minute and 24 hours"* | Dauer unter 1m, über 24h oder fehlerhaft | Verwende einen ganzzahligen `m`- oder `h`-Wert wie `5m` oder `2h`. |
| *„A prompt is required for a scheduled loop"* | `/loop 5m` hatte keinen Prompt-Text | Füge den Prompt nach dem Intervall bzw. nach dem `--`-Trenner in der kanonischen Form hinzu. |
| *„No active scheduled loop for this conversation"* | `/loop pause/resume/stop` ohne laufende Schleife | Starte zuerst eine Schleife mit `/loop <duration> <prompt>`. |
| Geplante Schleife stoppte früh | Ausführungs- oder Lebensdauergrenze erreicht oder 3 aufeinanderfolgende Fehler | Prüfe den Status-Chip für den Grund. Hebe Grenzen mit `--times`/`--for` an oder behebe den Fehler und starte eine neue Schleife. |
| Ziel ist **blockiert** | Derselbe Fehler wiederholte sich (standardmäßig 3-mal) | Lies den Fehlergrund in der Konversation, behebe die Ursache, dann `/loop` erneut ausführen oder Ziel anpassen. |
| Ziel bleibt auf **needs_user_input** | Die Schleife wartet auf deine Antwort oder Freigabe | Antworte auf die Frage oder genehmige die ausstehende Aktion. |
| Ein geplanter Durchlauf fand nicht zur genauen Zeit statt | Durchläufe werden beim Schreiben verschoben, bei Länge zusammengeführt oder nach dem Aufwachen einmal nachgeholt | Das ist erwartet. Prüfe den Status-Chip und die nächste Laufzeit. |

## Nächste Schritte

- [AI Chat V2](./ai-chat-v2) — der Chat, in dem `/goal` und `/loop` leben, inklusive Plan Mode.
- [Slash Commands](./slash-commands) — die vollständige Liste eingebauter Befehle und wie du eigene erstellst.
- [Subagents](./subagents) — begrenzte Spezialisten, an die der Assistent während einer Schleife delegieren kann.
