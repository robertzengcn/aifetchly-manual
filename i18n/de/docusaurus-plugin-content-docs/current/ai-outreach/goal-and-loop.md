---
id: goal-and-loop
title: Ziel- und Schleifen-Befehle
sidebar_label: Ziele & Schleifen
description: Definieren Sie mit /goal ein dauerhaftes Ziel und führen Sie mit /loop begrenzte, evidenzbasierte autonome Arbeit dorthin in AI Chat V2 aus.
---

# Ziel- und Schleifen-Befehle

Die Slash-Befehle **`/goal`** und **`/loop`** ermöglichen es Ihnen, dem AI-Chat-V2-Assistenten ein dauerhaftes Ziel zu geben und ihn dann zu bitten, in begrenzten, überprüfbaren Schritten auf dieses Ziel hinzuarbeiten — statt ihn Schritt für Schritt anzuleiten.

`/goal` erfasst, was „fertig" bedeutet, einschließlich expliziter, überprüfbarer Akzeptanzkriterien. `/loop` führt dann eine begrenzte Anzahl autonomer Iterationen in Richtung dieses Ziels aus, sammelt frische Evidenz und verifiziert jedes Kriterium, bevor das Ziel als abgeschlossen markiert werden kann.

:::info Nur in AI Chat V2

`/goal` und `/loop` sind integrierte Slash-Befehle, die im Composer von **[AI Chat V2](./ai-chat-v2)** verfügbar sind. Sie erfordern ein aktives aiFetchly-Abonnement mit aktivierter KI und nutzen die bestehenden Grenzen von AI Chat V2: [Plan-Modus](./ai-chat-v2), Werkzeugfreigabe und Workspace-Sicherheit.

:::

## Wie die beiden Befehle zusammenhängen

| Befehl | Was er tut | Erfordert |
|---|---|---|
| `/goal <objective>` | Erstellt oder ersetzt das aktive Ziel der Unterhaltung und aktiviert den Plan-Modus. | Ein nicht leeres Ziel. |
| `/loop <maxIterations>` | Führt bis zu dieser Anzahl autonomer Iterationen in Richtung des aktiven Ziels aus. | Ein mit `/goal` bereits gesetztes aktives Ziel. |

Ein typischer Ablauf:

```text
/goal Build a Facebook campaign scraper and verify it works
(genehmigen Sie den Plan und seine Akzeptanzkriterien im Plan-Modus)
/loop 5
```

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

1. Das Ziel wird zum **aktiven Ziel** der aktuellen Unterhaltung.
2. AI Chat tritt in den **Plan-Modus** ein. Der Assistent stellt Klärungsfragen, wenn das Ziel mehrdeutig ist.
3. Der Assistent schlägt einen Plan vor, der eines oder mehrere **Akzeptanzkriterien** enthält — konkrete, überprüfbare Bedingungen, die definieren, was „fertig" bedeutet.
4. Sie genehmigen (oder lehnen ab oder fordern Änderungen an) den Plan über den normalen Genehmigungsfluss des Plan-Modus.
5. Das Ziel bleibt für die Unterhaltung aktiv, bis es **abgeschlossen**, **blockiert** oder **abgebrochen** ist.

Erneutes Ausführen von `/goal` ersetzt das aktuelle aktive Ziel.

### Akzeptanzkriterien und Verifizierung

Jedes Akzeptanzkriterium wird automatisch verifiziert — das Ziel ist nicht allein deshalb fertig, weil der Assistent es sagt. Jedes Kriterium hat eine Verifizierungsmethode:

| Methode | Wie das Kriterium geprüft wird |
|---|---|
| **command** | Ein Befehl wird erfolgreich beendet, optional passend zu einem erwarteten Exit-Code oder Ausgabemuster. |
| **file** | Eine erwartete Datei oder ein erwarteter Projektzustand ist vorhanden, z. B. eine Datei existiert oder hat sich geändert. |
| **manual** | Die Schleife pausiert und bittet Sie um Bestätigung. |
| **llm** | Ein unabhängiger Verifizierer bewertet die gesammelte Evidenz für Kriterien, die nicht deterministisch geprüft werden können. |

Ein Kriterium kann als **erforderlich** oder optional markiert sein. Das Ziel kann nur dann als abgeschlossen markiert werden, wenn **jedes erforderliche Kriterium** mit frischer Evidenz besteht.

:::tip Formulieren Sie überprüfbare Ziele

`/goal` funktioniert am besten, wenn „fertig" etwas ist, das die App überprüfen kann. Ein Ziel wie „den Scraper bauen und überprüfen, dass er funktioniert" — mit einem Kriterium wie „der Testbefehl beendet sich mit Code 0" — ist wesentlich zuverlässiger als ein subjektives wie „mach den Scraper gut".

:::

## `/loop` — begrenzte Iterationen ausführen

### Syntax

```text
/loop <maxIterations>
```

`<maxIterations>` ist eine ganze Zahl von **1 bis 10**. Geben Sie sie explizit an — wenn Sie sie weglassen oder einen Wert außerhalb dieses Bereichs übergeben, fordert `/loop` eine gültige Anzahl an. `/loop` **erfordert außerdem ein aktives Ziel**; wenn Sie keines gesetzt haben, weist es Sie an, zuerst `/goal` auszuführen.

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
  → ein unabhängiger Verifizierer bewertet verbleibende Kriterien
  → die Schleife fährt fort, schließt ab, blockiert oder fragt Eingabe an
```

Der Fortschritt wird während der Ausführung der Schleibe in der Unterhaltung angezeigt — Iterationsanzahl, gesammelte Evidenzusammenfassungen und Verifizierungsergebnisse pro Kriterium.

### Wann die Schleife stoppt

`/loop` läuft nie endlos. Sie stoppt, sobald eine dieser Bedingungen zutrifft:

- Sie drücken **Stop**.
- Die maximale Iterationsanzahl ist erreicht.
- Das Zeitlimit pro Ausführung ist erreicht.
- Das Ziel ist **abgeschlossen** — jedes erforderliche Kriterium bestand mit frischer Evidenz.
- Ein Werkzeug benötigt Ihre Genehmigung, oder der Plan-Modus benötigt eine Genehmigung.
- Der Assistent muss Ihnen eine Frage stellen.
- derselbe Fehler oft genug auftritt, sodass das Ziel auf **blockiert** wechselt.
- Der Verifizierer `blocked` oder `needs_user_input` zurückgibt.
- Ein nicht behebbarer Fehler auftritt.

### Wie der Abschluss entschieden wird

Der Assistent, der die Arbeit ausführt, **kann sein eigenes Ziel nicht durch eine bloße Angabe als abgeschlossen markieren**. Der Abschluss erfordert **frische, kriterienspezifische Evidenz** — beispielsweise ein Test, der *nach* der letzten Codeänderung bestanden wurde, nicht ein veraltetes Ergebnis von davor.

Deterministische Prüfungen (Befehle, Dateizustand) laufen zuerst. Der unabhängige LLM-Verifizierer wird nur für Kriterien eingesetzt, die nicht deterministisch geprüft werden können, und er gibt strukturierte Urteile (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) zurück, die an spezifische Evidenz gebunden sind — nie ein freitextliches „done".

## Ziel- und Schleifenstatus

Ein Ziel durchläuft folgende Zustände:

| Status | Bedeutung |
|---|---|
| **draft** | Das Ziel wird im Plan-Modus definiert. |
| **active** | Genehmigt und wartet auf Ausführung oder Fortsetzung. |
| **running** | Ein `/loop` führt eine Iteration aus. |
| **complete** | Alle erforderlichen Kriterien bestanden mit frischer Evidenz. |
| **blocked** | Wiederholte Fehler oder ein ungelöster Blocker — erfordert Ihre Aufmerksamkeit. |
| **needs_user_input** | Die Schleife pausierte, um Ihnen eine Frage zu stellen oder eine Bestätigung einzuholen. |
| **failed** | Ein nicht behebbarer Fehler beendete die Ausführung. |
| **cancelled** | Sie haben sie gestoppt. |

## Limits und Sicherheit

| Limit | Wert |
|---|---|
| Iterationsanzahl (`/loop`) | 1–10 (explizit angeben) |
| Zeitlimit pro Ausführung | 10 Minuten (Standard) |
| Identische Fehler vor **blockiert** | 3 |
| Aktive Ziele pro Unterhaltung | Eins (ein neues Ziel ersetzt das alte) |

Sicherheitsgarantien, die stets gelten:

- Die Schleife ist immer **begrenzt** — niemals endlos.
- Sie ist immer **abbrechbar** (Stop drücken).
- KI-Aktivierung, Werkzeug-Genehmigungsmodus, Plan-Modus sowie Workspace- und Datei-Sicherheitsgrenzen gelten auch während einer Schleife weiter.
- Zerstörerische Aktionen, neue Abhängigkeiten, Authentifizierungsänderungen und andere weitreichende Nebeneffekte erfordern weiterhin die normale Genehmigungsgrenze — auch mitten in der Schleife.
- Evidenz und Logs, die dem Verifizierer gezeigt werden, sind bereichsbegrenzt, größenbeschränkt und von Geheimnissen bereinigt und werden als nicht vertrauenswürdige Daten behandelt — niemals als Anweisungen.

## Tipps

### ✅

- **Setzen Sie ein Ziel, bevor Sie schleifen** — `/loop` braucht immer ein aktives `/goal`.
- **Machen Sie Ziele überprüfbar** — bevorzugen Sie Kriterien, die die App prüfen kann (Befehl, Datei), gegenüber subjektiven.
- **Starten Sie mit einer kleinen Anzahl** (`/loop 3`), um den Fortschritt zu prüfen, bevor Sie sich auf mehr festlegen.
- **Lassen Sie den Plan-Modus aktiviert** für Ziele, die Dateien ändern, Outreach versenden oder viele Werkzeugaufrufe ausführen.

### ❌

- **Erwarten Sie keine unbegrenzte Autonomie** — `/loop` braucht stets eine explizite Anzahl von 1 bis 10.
- **Vertrauen Sie keinem bloßen „done"** — der Abschluss ist evidenzbasiert; wenn ein erforderliches Kriterium nicht bestanden wurde, ist das Ziel nicht abgeschlossen.

## Fehlerbehebung

| Symptom | Wahrscheinliche Ursache | Was tun |
|---|---|---|
| *"Set a goal first with /goal"* | Kein aktives Ziel in dieser Unterhaltung | Führen Sie `/goal <objective>` aus und genehmigen Sie zuerst den Plan. |
| *"Please provide an iteration count"* | `/loop` wurde ohne Zahl aufgerufen | Geben Sie eine Anzahl an, z. B. `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Anzahl fehlt, ist null oder über 10 | Verwenden Sie eine ganze Zahl von 1 bis 10. |
| Ziel ist **blockiert** | Derselbe Fehler wiederholte sich (standardmäßig 3-mal) | Lesen Sie den Fehlergrund in der Unterhaltung, beheben Sie die Ursache, dann `/loop` erneut ausführen oder das Ziel anpassen. |
| Ziel bleibt auf **needs_user_input** | Die Schleife wartet auf Ihre Antwort oder Genehmigung | Antworten Sie auf die Frage oder genehmigen Sie die ausstehende Aktion. |
| Schleife stoppte vorzeitig | Genehmigung, Plan-Genehmigung oder eine Frage war erforderlich | Genehmigen Sie das ausstehende Element und führen Sie `/loop` erneut aus, um fortzufahren. |

## Nächste Schritte

- [AI Chat V2](./ai-chat-v2) — der Chat, in dem `/goal` und `/loop` leben, inklusive Plan-Modus.
- [Slash-Befehle](./slash-commands) — die vollständige Liste der integrierten Befehle und wie Sie eigene erstellen.
- [Unteragenten](./subagents) — begrenzte Spezialisten, an die der Assistent während einer Schleife delegieren kann.
