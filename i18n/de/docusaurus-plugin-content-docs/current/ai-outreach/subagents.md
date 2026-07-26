---
id: subagents
title: Unteragenten
sidebar_label: Unteragenten
description: Verwalten Sie integrierte, von Plugins installierte, Workspace- und manuelle AI-Unteragenten in aiFetchly.
---

# Unteragenten

Unteragenten sind wiederverwendbare Definitionen spezialisierter AI-Agenten. Sie beschreiben eine fokussierte Rolle, einen System-Prompt, erlaubte Tools, eine Modellpräferenz und Laufzeitgrenzen, die aiFetchly für gezielte AI-Arbeiten nutzen kann.

Plugins können Unteragenten zusammen mit AI Skills und MCP-Servern installieren, und Sie können auch manuelle Unteragenten für eigene wiederkehrende Workflows erstellen.

## Wie die AI Unteragenten verwendet

Sie rufen Unteragenten nicht direkt auf. Zu Beginn eines Chats injiziert aiFetchly eine Liste **Verfügbare AiFetchly-Agenten** in den Kontext der AI — jeder Eintrag zeigt die Runtime-ID, die Beschreibung und die Quelle des Agenten. Wenn eine Aufgabe passt, ruft die AI das Tool **`run_subagent`** mit dieser ID auf. Der Unteragent läuft dann mit seinem eigenen System-Prompt, seinen erlaubten Tools und seinen Laufzeitgrenzen und gibt sein Ergebnis an die Haupt-AI zurück.

## Integrierte Agenten

aiFetchly wird mit einem integrierten Unteragenten ausgeliefert:

- **Lead Researcher** (`agent-lead-researcher`) — ein `specialist`, der öffentlichen Geschäftskontext für einen Lead sammelt (Branche, Zusammenfassung, Produkte, Signale) mithilfe der Search-Scraper- und Knowledge-Library-Tools und ein strukturiertes JSON-Objekt mit Quell-URLs und einem Konfidenzwert zurückgibt. Er ist schreibgeschützt.

## Unteragenten öffnen

1. Klicken Sie im linken Navigationsmenü auf **Systemeinstellung**.
2. Klicken Sie auf **Unteragenten verwalten**.

Die Unteragenten-Seite zeigt eine kompakte Tabelle, Such- und Filtersteuerungen, einen Detaildialog und die Aktion **Unteragent hinzufügen**.

## Quellen von Unteragenten

| Quelle | Beschreibung |
|---|---|
| **Integriert** | Agenten, die mit aiFetchly ausgeliefert werden. Sie sind schreibgeschützt. |
| **Plugin** | Von einem Plugin installierte Agenten. Sie sind auf der Unteragenten-Seite schreibgeschützt, können aber aktiviert oder deaktiviert werden. |
| **Workspace** | Agenten, die aus den `.aifetchly/agents/`-Dateien des Workspaces geladen werden. Sie können hier aktiviert oder deaktiviert werden; bearbeiten Sie die Workspace-Datei, um ihre Definition zu ändern. Workspace-Agenten werden erst geladen, wenn der Workspace als vertrauenswürdig eingestuft wurde. |
| **Manuell** | Von Ihnen in aiFetchly erstellte Agenten **oder** als Markdown-Dateien unter `~/.aifetchly/agents/` definierte Agenten. Diese können bearbeitet, aktiviert, deaktiviert oder gelöscht werden. |

Verwenden Sie den Quellenfilter, um alle Unteragenten oder nur eine Quelle anzuzeigen.

## Unteragenten finden und filtern

Die Unteragenten-Tabelle enthält:

| Spalte | Beschreibung |
|---|---|
| **Agent** | Anzeigename und Runtime-ID. |
| **Beschreibung** | Kurze Zusammenfassung der Aufgaben des Agenten. |
| **Quelle** | Integriert, Plugin, Workspace oder Manuell. |
| **Plugin** | Das zuständige Plugin, sofern zutreffend. |
| **Modus** | Agentenrolle, etwa `specialist`, `verifier`, `coordinator` oder `formatter`. |
| **Tools** | Anzahl der Tools, die der Agent verwenden darf. |
| **Modell** | Das Standardmodell des Agenten, falls eines festgelegt ist. |
| **Status** | Aktiviert oder deaktiviert, mit Warnhinweisen für fehlerhafte Agenten. |
| **Aktionen** | Aktivierungs- oder Deaktivierungsschalter, sofern verfügbar. |

Sie können nach Agenten-ID, Name, Beschreibung oder Plugin-Name suchen. Der Statusfilter kann **alle** Agenten, **aktivierte** Agenten, **deaktivierte** Agenten oder Agenten **mit Warnungen** anzeigen.

## Details anzeigen

Klicken Sie auf eine Unteragenten-Zeile, um ihr Detailfenster zu öffnen. Das Fenster zeigt:

- Agentenname und Runtime-ID
- Quelle und Plugin-Eigentümer, sofern zutreffend
- Status und Health
- Beschreibung
- Quelldatei oder Plugin-Komponentenpfad
- Modus und Standardmodell
- Maximale Tool-Aufrufe
- Maximale Laufzeit
- Maximale Continue-Aufrufe
- Erlaubte Tools
- System-Prompt

Schreibgeschützte Agenten zeigen einen Hinweis, der erklärt, wo sie bearbeitet werden sollten. Manuelle Agenten zeigen die Aktionen **Unteragent bearbeiten** und **Diesen Unteragenten löschen**.

## Einen manuellen Unteragenten erstellen

1. Klicken Sie auf **Unteragent hinzufügen**.
2. Geben Sie einen **Namen** ein.
3. Prüfen oder bearbeiten Sie den generierten **ID-Slug**.
4. Fügen Sie eine **Beschreibung** hinzu.
5. Wählen Sie einen **Modus**.
6. Schreiben Sie den **System-Prompt**.
7. Fügen Sie kommagetrennte **Erlaubte Tools** hinzu.
8. Legen Sie optional ein **Standardmodell** fest.
9. Setzen Sie Laufzeitgrenzen.
10. Fügen Sie optional ein JSON-Objekt als **Ausgabeschema** hinzu.
11. Wählen Sie, ob der Unteragent **Aktiviert** startet.
12. Klicken Sie auf **Speichern**.

Der ID-Slug ist nach der Erstellung gesperrt, wählen Sie also einen stabilen Bezeichner.

## Felder manueller Unteragenten

| Feld | Beschreibung |
|---|---|
| **Name** | Lesbarer Name, der in Tabelle und Detailfenster angezeigt wird. |
| **ID-Slug** | Stabile Runtime-Kennung. Sie wird vor dem ersten Speichern aus dem Namen erzeugt und kann später nicht geändert werden. |
| **Beschreibung** | Kurze Erklärung, wann der Unteragent verwendet werden soll. |
| **Modus** | Funktionale Rolle: `coordinator`, `specialist`, `verifier` oder `formatter`. |
| **System-Prompt** | Die Anweisungen des Unteragenten. Halten Sie ihn eigenständig und konkret. |
| **Erlaubte Tools** | Kommagetrennte Tool-Namen, die der Unteragent verwenden darf. Die Runtime-Policy gilt weiterhin. |
| **Standardmodell** | Optionale Modellpräferenz für diesen Unteragenten. |
| **Max. Tool-Aufrufe** | Maximale Anzahl von Tool-Aufrufen während eines Laufs. |
| **Max. Laufzeit (Sekunden)** | Maximale Laufzeit für einen Unteragentenlauf. |
| **Max. Continue-Aufrufe** | Maximale Anzahl von Fortsetzungsrunden. |
| **Ausgabeschema** | Optionales JSON-Objekt, das die gewünschte strukturierte Ausgabe beschreibt. |
| **Aktiviert** | Steuert, ob dieser Unteragent für die Runtime verfügbar ist. |

## Manuelle Unteragenten bearbeiten und löschen

Öffnen Sie einen manuellen Unteragenten und klicken Sie auf **Unteragent bearbeiten**, um Name, Beschreibung, System-Prompt, erlaubte Tools, Modell, Laufzeitgrenzen, Ausgabeschema oder Aktivierungsstatus zu aktualisieren.

Um einen manuellen Unteragenten zu entfernen, öffnen Sie sein Detailfenster und klicken Sie auf **Diesen Unteragenten löschen**. Das Löschen ist dauerhaft.

## Plugin-installierte Unteragenten

Plugins können Unteragenten als Markdown-Dateien in einem `agents/`-Verzeichnis oder über Plugin-Manifest-Deklarationen enthalten. Nach der Installation werden diese Dateien zu plugin-eigenen Unteragenten-Definitionen in aiFetchly.

Ein Plugin-Unteragent kann Folgendes enthalten:

- `name`
- `description`
- `tools` (und/oder `skills`, die in die erlaubten Tools eingefügt werden)
- `model`
- `mode`
- Laufzeitgrenzen (`maxToolCalls`, `maxRuntimeMs`, `maxTurns`)
- Ein optionales `outputSchema`
- Markdown-Anweisungen, die zum System-Prompt werden

Plugin-eigene Unteragenten werden mit dem Plugin-Namespace versehen, z. B. `lead-pack:researcher`. Verschachtelte Ordner können tiefere IDs erzeugen, etwa `lead-pack:review:verifier`.

## Plugin-Unteragenten verwalten

Plugin-Unteragenten erscheinen an zwei Stellen:

- **Systemeinstellungen → Unteragenten** für den vollständigen Katalog.
- **Plugin Manager → Plugin-Detail → Unteragenten** für Agenten, die einem Plugin gehören.

Im Unteragenten-Tab der Plugin-Details können Sie Name, ID, Modus, Tool-Anzahl, Health und Aktivierungsstatus jedes Agenten prüfen. Das Deaktivieren eines Plugin-Unteragenten deaktiviert nicht die anderen Skills, MCP-Server oder Unteragenten des Plugins.

Wenn das gesamte Plugin deaktiviert ist, sind seine Unteragenten nicht verfügbar, selbst wenn ihr individueller Aktivierungsschalter eingeschaltet ist. Erneutes Aktivieren des Plugins stellt die zuvor gespeicherten Komponenten-Einstellungen wieder her.

## Health und Warnungen

Unteragenten können Health-Status wie `healthy`, `disabled`, `partial_load`, `invalid` oder `missing_files` melden.

Warnungen bedeuten meist, dass aiFetchly den Agenten mit Einschränkungen geladen oder ein Problem mit der Quelldefinition gefunden hat. Öffnen Sie das Detailfenster oder die Plugin-Diagnose, um die Ursache zu untersuchen.

## Sicherheitshinweise

- Plugin-Unteragenten sind Definitionen, keine eigenständigen Programme.
- Von Plugins gelieferte sicherheitsrelevante Felder wie Permission-Modi, Hooks, direkte MCP-Server-Registrierung oder privilegierte Ausführungseinstellungen werden ignoriert oder mit einer Warnung versehen.
- Erlaubte Tools definieren die Obergrenze des Unteragenten. aiFetchly schneidet diese Liste weiterhin mit aktivierten Tools und der Runtime-Policy.
- Halten Sie manuelle System-Prompts eigenständig, da Unteragenten nicht davon ausgehen sollten, die gesamte übergeordnete Chat-Historie sehen zu können.
