---
id: workspace-memory
title: Workspace-Memory
sidebar_label: Workspace-Memory
description: Nutze workspace-bezogene Memory, damit AI Chat projektbezogene Entscheidungen, Workflows, Konventionen, Referenzen und Warnungen behält.
---

# Workspace-Memory

Workspace-Memory lässt AI Chat projektspezifischen Kontext für einen genehmigten Workspace behalten. Sie ist von globaler Benutzermemory und Gesprächsmemory getrennt, damit Details aus einem Projekt nicht in einem anderen Projekt wiederverwendet werden.

Nutze sie für dauerhaftes Wissen, das gelten soll, wenn du im selben Projektordner, Kampagnen-Workspace oder Repository arbeitest.

## Was gespeichert wird

| Typ | Wofür |
|---|---|
| **Project** | Produkt-, Kampagnen-, Meilenstein- oder Projektkontext, der nicht direkt aus Dateien ersichtlich ist. |
| **Decision** | Vom Benutzer bestätigte Produkt- oder Technikentscheidungen. |
| **Workflow** | Befehle, Review-Schritte oder Abläufe für diesen Workspace. |
| **Convention** | Code-, Schreib-, Namens- oder UX-Konventionen. |
| **Reference** | Hinweise auf lokale Dateien, Dokumente, Specs oder externe Ressourcen. |
| **Warning** | Bekannte Fallen, eingeschränkte Aktionen, flaky Tests, Compliance-Regeln oder Sicherheitsvorgaben. |

Speichere keine Secrets, API-Keys, Cookies, privaten Lead-Daten, vollständigen Transkripte, große Tool-Ausgaben, rohe Dateiinhalte oder temporären Aufgabenfortschritt.

## Scope

Workspace-Memory funktioniert nur, wenn die aktuelle AI-Chat-Konversation einen genehmigten Workspace hat.

aiFetchly löst den Workspace zu einer stabilen Identität auf. Liegt der ausgewählte Ordner in einem Git-Repository, wird die Memory der Repository-Wurzel zugeordnet. Ohne Git-Wurzel wird der reale ausgewählte Pfad verwendet.

Das bedeutet:

- Gespräche im selben genehmigten Workspace können Memory teilen.
- Memories eines Workspace werden nicht in einen anderen injiziert.
- Ohne genehmigten Workspace kann Workspace-Memory nicht geöffnet oder genutzt werden.

## Workspace-Memory öffnen

1. Öffne **AI Chat**.
2. Wähle oder genehmige einen Workspace oberhalb des Composers.
3. Klicke im Workspace-Badge auf **Memory**.

Der Dialog zeigt aktive Memories für den aktuellen Workspace. Das Badge zeigt auch die Anzahl aktiver Memories.

## Memory erstellen

1. Öffne den Workspace-Memory-Dialog.
2. Klicke auf **Create memory**.
3. Wähle einen **Type**.
4. Gib einen kurzen **Title** ein.
5. Gib den **Content** ein.
6. Setze **Confidence**.
7. Klicke auf **Save**.

Manuelle Memories werden nur für den aktiven genehmigten Workspace gespeichert.

## Felder

| Feld | Beschreibung |
|---|---|
| **Type** | Kategorie: project, decision, workflow, convention, reference oder warning. |
| **Title** | Kurzes Label für Übersicht und Suche. |
| **Content** | Der Memory-Text. Halte ihn knapp und dauerhaft. |
| **Confidence** | Wert von 0 bis 100. Manuelle Memories starten hoch, können aber abgesenkt werden. |
| **Status** | Beim Bearbeiten verfügbar: active, archived oder contradicted. |

## Suchen und Prüfen

Nutze die Suche, um Memories nach Titel oder Inhalt zu finden.

Jede Zeile zeigt Typ, Titel, Inhalt, Status wenn nicht aktiv, Quelle, Aktualisierungszeit, letzte Nutzung und Confidence. Aktiviere **Show archived**, um archivierte und widersprochene Memories einzuschließen.

## Bearbeiten, Archivieren und Löschen

- **Edit** aktualisiert Typ, Titel, Inhalt, Confidence oder Status.
- **Archive** blendet die Memory aus der aktiven Liste aus, ohne sie zu löschen.
- **Delete** entfernt die Memory nach Bestätigung dauerhaft.

Archivierte Memories erscheinen nur, wenn **Show archived** aktiv ist.

## Workspace-Auto-Zusammenfassung

Die Workspace-Auto-Zusammenfassung, intern workspace auto-dream genannt, kann projektspezifische Informationen aus Gesprächen und Agent-Aufgaben konsolidieren.

Im Dialog:

- Das Badge zeigt aktive Anzahl und Auto-Zusammenfassungsstatus.
- **RUN AUTO SUMMARY** startet eine manuelle Konsolidierung.
- Die letzte Ausführung wird angezeigt, wenn vorhanden.

Generierte Memories kannst du weiterhin prüfen, bearbeiten, archivieren oder löschen.

## Einstellungen

| Einstellung | Wirkung |
|---|---|
| **Workspace-Memory-Injection** | Injiziert relevante Workspace-Memories in den AI-Chat-Kontext für den aktiven genehmigten Workspace. |
| **Workspace-Auto-Zusammenfassung** | Konsolidiert workspace-spezifische Memories aus Gesprächen und Agent-Aufgaben im Hintergrund. |
| **Manuelles Workspace-Memory** | Erlaubt manuelles Erstellen, Bearbeiten und Löschen. Deaktivieren löscht gespeicherte Memories nicht. |

Die aktuelle Benutzernachricht hat Vorrang. Wenn sie einer Memory widerspricht, soll die aktuelle Anweisung gewinnen.

## Best Practices

- Speichere Entscheidungen und Konventionen, die du sonst wiederholen müsstest.
- Speichere Projektbefehle, die nicht offensichtlich sind.
- Speichere Warnungen zu Compliance, Sicherheit, Umgebung oder bekannten Tests.
- Halte Memories kurz.
- Verweise lieber auf Pfade oder Docs, statt große Inhalte zu kopieren.
- Archiviere veraltete Memories, statt widersprüchliche aktive Hinweise zu behalten.
