---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Verwalte Lebenszyklus-Hooks, die rund um AI-Chat und Tool-Aktivität in aiFetchly ausgeführt werden.
---

# Hooks

Hooks ermöglichen aiFetchly, konfigurierte Aktionen während wichtiger Lebenszyklus-Ereignisse des AI-Chats auszuführen, zum Beispiel bevor ein Tool läuft, nachdem ein Tool erfolgreich war oder nachdem ein Tool fehlgeschlagen ist. Verwende Hooks, um Sicherheitsprüfungen hinzuzufügen, Compliance-Kontext einzufügen oder lokale Workflow-Logik mit AI-Tool-Aktivität zu verbinden.

## Hooks öffnen

1. Klicke in der linken Navigation auf **Einstellungen**.
2. Öffne **Systemeinstellungen**.
3. Klicke auf **Hooks verwalten**.

Die Hooks-Seite enthält einen globalen Schalter, eine Hook-Liste, einen Editorbereich und ein aktuelles Audit-Protokoll.

## Globale Aktivierung

Verwende **Enable hooks globally**, um das gesamte Hook-System ein- oder auszuschalten.

Wenn globale Hooks deaktiviert sind, wird kein Hook ausgelöst, auch wenn ein einzelner Hook aktiviert ist. Das ist der schnellste Weg, das gesamte Hook-Verhalten während der Fehlersuche zu pausieren.

## Hook-Quellen

Die Hook-Liste kann verschiedene Quellen anzeigen:

| Quelle | Beschreibung |
|---|---|
| **Integriert** | Hooks, die mit aiFetchly ausgeliefert werden. Du kannst sie aktivieren oder deaktivieren, aber ihre Definitionen nicht bearbeiten. |
| **Benutzer** | Command-Hooks, die du auf der Hooks-Seite erstellst. Diese können bearbeitet, aktiviert, deaktiviert oder gelöscht werden. |
| **Sitzung** | Temporäre Hooks, die an die aktuelle Sitzung gebunden sind. Aktiviere **Show session hooks**, um sie in der Liste anzuzeigen. |

Verwende die Filter **Event** und **Source**, um die Liste einzugrenzen.

## Integrierte Hooks

aiFetchly enthält integrierte Hooks für Sicherheits- und Compliance-Workflows.

| Hook | Standard | Funktion |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | Aktiviert | Prüft `shell_execute` vor der Tool-Nutzung und blockiert gefährliche rekursive Löschbefehle wie `rm -rf /` oder `rm -rf *`. |
| `builtin-scraping-compliance-context` | Deaktiviert | Fügt nach Scrape-Tool-Aufrufen Compliance-Kontext hinzu. Das Aktivieren dieses Hooks kann scrape-bezogene AI-Ergebnisse beeinflussen. |

Integrierte Hooks sind im Code definiert. Die Hooks-Seite ändert nur, ob sie aktiviert sind.

## Einen Command-Hook erstellen

1. Klicke auf **Add command hook**.
2. Prüfe oder ersetze die generierte **Hook ID**.
3. Wähle ein **Event**.
4. Lege einen **Matcher** fest.
5. Füge optional eine **If condition** hinzu.
6. Gib den lokalen **Command** ein.
7. Lege **Timeout (ms)** und **Failure mode** fest.
8. Füge optional eine **Status message** hinzu.
9. Klicke auf **Save**.
10. Wähle den gespeicherten Hook aus und schalte **Enabled** ein, wenn du ihn verwenden möchtest.

Neue Command-Hooks werden standardmäßig deaktiviert gespeichert, damit du sie vor der Ausführung prüfen kannst.

## Felder eines Command-Hooks

| Feld | Beschreibung |
|---|---|
| **Hook ID** | Eindeutige Kennung des Hooks. Sie kann nur beim Erstellen bearbeitet werden. |
| **Event** | Lebenszyklus-Ereignis, das den Hook auslösen kann. |
| **Matcher** | Muster zum Abgleichen des Ereignisziels, zum Beispiel eines Tool-Namens. Verwende `*`, um für das ausgewählte Ereignis alles abzugleichen. |
| **If condition** | Optionales Muster, das bei tool-bezogenen Ereignissen gegen Zeichenketten-Eingabewerte geprüft wird. Zum Beispiel kann `git *` Shell-Befehle abgleichen, die mit `git ` beginnen. |
| **Command** | Lokaler Befehl, der ausgeführt wird, wenn der Hook passt. Die Hook-Eingabe wird dem Befehl als JSON über stdin übergeben. |
| **Timeout (ms)** | Maximale Laufzeit, bevor aiFetchly den Befehl stoppt. |
| **Failure mode** | `warn` protokolliert Hook-Fehler, ohne den AI-Ablauf zu blockieren. `block` wandelt Hook-Ausführungsfehler in eine blockierte Operation um. |
| **Status message** | Optionale Meldung, die während der Hook-Ausführung angezeigt wird. |
| **Enabled** | Steuert, ob der gespeicherte Hook laufen kann. |

Command-Hooks sollten ein JSON-Objekt auf stdout schreiben. Ein leeres Objekt bedeutet "keine Änderung". Unterstützte Ausgabefelder sind `continue`, `reason`, `systemMessage`, `additionalContext`, `updatedInput`, `updatedToolOutput`, `suppressOutput` und `permissionDecision`.

Beispielausgabe, die eine passende Operation blockiert:

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

Beispielausgabe, die Kontext hinzufügt:

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Hook-Ereignisse

| Ereignis | Wann es läuft |
|---|---|
| `SessionStart` | Wenn eine AI-Chat-, Plan- oder Agent-Sitzung startet. |
| `UserPromptSubmit` | Wenn der Benutzer einen Prompt absendet. |
| `PreToolUse` | Vor der Ausführung eines Tools. |
| `PostToolUse` | Nachdem ein Tool erfolgreich abgeschlossen wurde. |
| `PostToolUseFailure` | Nachdem ein Tool fehlgeschlagen ist. |
| `PermissionRequest` | Wenn eine Tool-Berechtigungsanfrage vorbereitet wird. |
| `PermissionDenied` | Wenn eine Tool-Berechtigungsanfrage abgelehnt wird. |
| `Stop` | Wenn der AI-Lauf stoppt oder abgeschlossen wird. |

## Hooks bearbeiten und löschen

Wähle einen Benutzer-Hook aus der Liste, um Matcher, Bedingung, Befehl, Timeout, Fehlermodus oder Statusmeldung zu bearbeiten. Klicke auf **Save**, um Änderungen anzuwenden.

Um einen Benutzer-Hook zu entfernen, klicke auf **Delete** und bestätige. Das Löschen eines Hooks ist dauerhaft.

:::info Einschränkungen integrierter Hooks

Integrierte Hooks können aktiviert oder deaktiviert werden, aber ihr Ereignis, Matcher und Verhalten können nicht auf der Hooks-Seite bearbeitet werden.

:::

## Aktuelles Audit-Protokoll

Das **Recent audit log** zeigt Hook-Aktivität, darunter:

- Zeit
- Hook ID
- Ereignis
- Status
- Dauer
- Grund

Filtere das Audit-Protokoll nach **Event**, **Status** oder **Hook** und wähle, ob die letzten 100, 500 oder 1000 Zeilen angezeigt werden. Mit der Aktualisierungsschaltfläche kannst du die automatische Aktualisierung beim Testen von Hooks starten oder pausieren.

Häufige Statuswerte sind:

| Status | Bedeutung |
|---|---|
| `started` | Die Hook-Ausführung hat begonnen. |
| `success` | Der Hook wurde erfolgreich abgeschlossen. |
| `blocked` | Der Hook hat die Operation blockiert. |
| `failed` | Der Hook ist fehlgeschlagen. |
| `timeout` | Der Hook hat sein Timeout überschritten. |

## Sicherheitshinweise

- Command-Hooks führen lokale Prozesse aus. Erstelle nur Hooks, deren Befehle du verstehst.
- Halte Hook-Befehle eng begrenzt und vorhersehbar.
- Verwende beim Testen eines neuen Hooks bevorzugt `warn` und wechsle erst nach verifiziertem Verhalten zu `block`.
- Nutze das Audit-Protokoll nach dem Aktivieren eines Hooks, um zu prüfen, dass er nur wie erwartet ausgelöst wird.
