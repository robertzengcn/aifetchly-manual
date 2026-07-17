---
id: subagents
title: Unteragenten
sidebar_label: Unteragenten
description: Verwalte integrierte, plugin-installierte, workspace- und manuelle AI-Unteragenten in aiFetchly.
---

# Unteragenten

Unteragenten sind wiederverwendbare Definitionen spezialisierter AI-Agenten. Sie beschreiben eine fokussierte Rolle, einen System-Prompt, erlaubte Tools, Modellpräferenz und Laufzeitgrenzen, die aiFetchly für gezielte AI-Arbeit nutzen kann.

Plugins können Unteragenten zusammen mit AI Skills und MCP-Servern installieren. Du kannst auch manuelle Unteragenten für eigene wiederkehrende Workflows erstellen.

## Unteragenten öffnen

1. Klicke in der linken Navigation auf **Einstellungen**.
2. Öffne **Systemeinstellungen**.
3. Klicke auf **Unteragenten verwalten**.

Die Seite zeigt eine kompakte Tabelle, Such- und Filtersteuerungen, einen Detaildialog und die Aktion **Unteragent hinzufügen**.

## Quellen von Unteragenten

| Quelle | Beschreibung |
|---|---|
| **Integriert** | Agenten, die mit aiFetchly ausgeliefert werden. Sie sind schreibgeschützt. |
| **Plugin** | Von einem Plugin installierte Agenten. Sie sind auf der Unteragenten-Seite schreibgeschützt, können aber aktiviert oder deaktiviert werden. |
| **Workspace** | Aus Workspace-Dateien geladene Agenten. Bearbeite die Workspace-Agentendatei, um sie zu ändern. |
| **Manuell** | Von dir in aiFetchly erstellte Agenten. Sie können bearbeitet, aktiviert, deaktiviert oder gelöscht werden. |

Nutze den Quellenfilter, um alle Unteragenten oder nur eine Quelle anzuzeigen.

## Suchen und Filtern

Die Tabelle enthält:

| Spalte | Beschreibung |
|---|---|
| **Agent** | Anzeigename und Runtime-ID. |
| **Beschreibung** | Kurze Zusammenfassung der Agentenaufgabe. |
| **Quelle** | Integriert, Plugin, Workspace oder Manuell. |
| **Modus** | Agentenrolle wie `specialist`, `verifier`, `coordinator` oder `formatter`. |
| **Tools** | Anzahl der Tools, die der Agent nutzen darf. |
| **Status** | Aktiviert oder deaktiviert, mit Warnsymbolen für fehlerhafte Agenten. |
| **Aktionen** | Aktivierungs-/Deaktivierungsschalter, sofern verfügbar. |

Du kannst nach Agenten-ID, Name, Beschreibung oder Plugin-Name suchen. Der Statusfilter zeigt alle, aktivierte oder deaktivierte Agenten.

## Details anzeigen

Klicke auf eine Zeile, um das Detailfenster zu öffnen. Es zeigt:

- Agentenname und Runtime-ID
- Quelle und Plugin-Eigentümer, falls vorhanden
- Status und Health
- Beschreibung
- Quelldatei oder Plugin-Komponentenpfad
- Modus und Standardmodell
- Maximale Tool-Aufrufe
- Maximale Laufzeit
- Maximale Continue-Aufrufe
- Erlaubte Tools
- System-Prompt

Schreibgeschützte Agenten zeigen einen Hinweis, wo sie bearbeitet werden müssen. Manuelle Agenten zeigen **Unteragent bearbeiten** und **Diesen Unteragent löschen**.

## Einen manuellen Unteragenten erstellen

1. Klicke auf **Unteragent hinzufügen**.
2. Gib einen **Namen** ein.
3. Prüfe oder bearbeite den generierten **ID slug**.
4. Füge eine **Beschreibung** hinzu.
5. Wähle einen **Modus**.
6. Schreibe den **System-Prompt**.
7. Füge kommagetrennte **Erlaubte Tools** hinzu.
8. Lege optional ein **Standardmodell** fest.
9. Setze Laufzeitgrenzen.
10. Füge optional ein JSON-Objekt als **Ausgabeschema** hinzu.
11. Wähle, ob der Unteragent **Aktiviert** startet.
12. Klicke auf **Speichern**.

Der ID slug ist nach der Erstellung gesperrt, wähle also einen stabilen Bezeichner.

## Felder manueller Unteragenten

| Feld | Beschreibung |
|---|---|
| **Name** | Lesbarer Name in Tabelle und Detailfenster. |
| **ID slug** | Stabile Runtime-Kennung. Sie wird vor dem ersten Speichern aus dem Namen erzeugt und kann später nicht geändert werden. |
| **Beschreibung** | Kurze Erklärung, wann der Unteragent verwendet werden soll. |
| **Modus** | Funktionale Rolle: `coordinator`, `specialist`, `verifier` oder `formatter`. |
| **System-Prompt** | Anweisungen des Unteragenten. Halte sie eigenständig und konkret. |
| **Erlaubte Tools** | Kommagetrennte Tool-Namen. Runtime-Policy gilt weiterhin. |
| **Standardmodell** | Optionale Modellpräferenz für diesen Unteragenten. |
| **Max. Tool-Aufrufe** | Maximale Anzahl von Tool-Aufrufen während eines Laufs. |
| **Max. Runtime (Sekunden)** | Maximale Laufzeit für einen Unteragentenlauf. |
| **Max. Continue-Aufrufe** | Maximale Anzahl von Fortsetzungsrunden. |
| **Ausgabeschema** | Optionales JSON-Objekt für die gewünschte strukturierte Ausgabe. |
| **Aktiviert** | Steuert, ob dieser Unteragent für die Runtime verfügbar ist. |

## Manuelle Unteragenten bearbeiten und löschen

Öffne einen manuellen Unteragenten und klicke auf **Unteragent bearbeiten**, um Name, Beschreibung, System-Prompt, erlaubte Tools, Modell, Grenzen, Ausgabeschema oder Aktivierungsstatus zu ändern.

Zum Entfernen öffne das Detailfenster und klicke auf **Diesen Unteragent löschen**. Das Löschen ist dauerhaft.

## Plugin-installierte Unteragenten

Plugins können Unteragenten als Markdown-Dateien in einem `agents/`-Verzeichnis oder über Manifest-Deklarationen enthalten. Nach der Installation werden diese Dateien zu plugin-eigenen Unteragenten-Definitionen in aiFetchly.

Ein Plugin-Unteragent kann enthalten:

- `name`
- `description`
- `tools`
- `model`
- `mode`
- Laufzeitgrenzen
- Markdown-Anweisungen, die zum System-Prompt werden

Plugin-Unteragenten werden mit dem Plugin-Namespace versehen, zum Beispiel `lead-pack:researcher`. Verschachtelte Ordner können tiefere IDs erzeugen, etwa `lead-pack:review:verifier`.

## Plugin-Unteragenten verwalten

Plugin-Unteragenten erscheinen an zwei Stellen:

- **Systemeinstellungen → Unteragenten** für den vollständigen Katalog.
- **Plugin Manager → Plugin-Details → Unteragenten** für Agenten eines Plugins.

Im Unteragenten-Tab der Plugin-Details kannst du Name, ID, Modus, Tool-Anzahl, Health und Aktivierungsstatus prüfen. Das Deaktivieren eines Plugin-Unteragenten deaktiviert nicht die anderen Skills, MCP-Server oder Unteragenten des Plugins.

Wenn das gesamte Plugin deaktiviert ist, sind seine Unteragenten nicht verfügbar, selbst wenn ihr einzelner Schalter aktiv ist. Beim erneuten Aktivieren werden die zuvor gespeicherten Komponenten-Einstellungen wiederhergestellt.

## Health und Warnungen

Unteragenten können Health-Status wie `healthy`, `disabled`, `partial_load`, `invalid` oder `missing_files` melden.

Warnungen bedeuten meist, dass aiFetchly den Agenten mit Einschränkungen geladen oder ein Problem in der Quelldefinition gefunden hat. Öffne das Detailfenster oder die Plugin-Diagnose, um die Ursache zu prüfen.

## Sicherheitshinweise

- Plugin-Unteragenten sind Definitionen, keine eigenständigen Programme.
- Von Plugins gelieferte sicherheitssensitive Felder wie Permission-Modi, Hooks, direkte MCP-Server-Registrierung oder privilegierte Ausführungseinstellungen werden ignoriert oder gemeldet.
- Erlaubte Tools definieren die Obergrenze des Unteragenten. aiFetchly schneidet diese Liste weiterhin mit aktivierten Tools und Runtime-Policy.
- Halte manuelle System-Prompts eigenständig, da Unteragenten nicht davon ausgehen sollten, die gesamte übergeordnete Chat-Historie zu sehen.
