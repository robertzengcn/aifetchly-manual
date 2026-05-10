---
id: mcp-tools
title: MCP-Tools
sidebar_label: MCP-Tools
description: Erweitern Sie die KI-Fähigkeiten durch die Verbindung mit externen Werkzeugen und Diensten über das Model Context Protocol (MCP).
---

# MCP-Tools

MCP (Model Context Protocol) ermöglicht es aiFetchly, sich mit externen Tools und Diensten zu verbinden und die KI-Funktionen über die integrierten Features hinaus zu erweitern. Durch das Hinzufügen von MCP-Servern kann der KI-Marketing-Assistent Websuchen durchführen, auf Datenbanken zugreifen, externe APIs aufrufen und benutzerdefinierte Geschäftslogik ausführen.

## Was ist MCP?

Das **Model Context Protocol** ist ein offener Standard, der KI-Anwendungen ermöglicht, auf sichere, strukturierte Weise mit externen Tools und Datenquellen zu interagieren. Mit MCP kann aiFetchly:

- **Das Web durchsuchen** nach Echtzeit-Informationen
- **Sich mit Datenbanken verbinden** und Daten abfragen
- **Externe APIs aufrufen** für spezialisierte Verarbeitung
- **Benutzerdefinierte Tools ausführen**, die für Ihren Workflow entwickelt wurden
- **Drittanbieterdienste integrieren** (CRM, Analysen usw.)

Jeder MCP-Server stellt eine Reihe von **Tools** bereit — Funktionen, die die KI während einer Konversation aufrufen kann. Beispielsweise könnte ein Web-Such-Server ein `search`-Tool und ein Datenbankserver ein `query`-Tool bereitstellen.

## Zugriff auf MCP-Tools

MCP-Server werden über die Chat-Oberfläche des **KI-Marketing-Assistenten** verwaltet:

1. Öffnen Sie den KI-Marketing-Assistenten (klicken Sie auf das Chat-Symbol oder drücken Sie `Cmd/Ctrl + K`)
2. Klicken Sie auf die Schaltfläche **MCP Tools** (Server/Netzwerk-Symbol) in der Chat-Symbolleiste
3. Der MCP-Tools-Verwaltungsdialog wird geöffnet

:::info Wo Sie es finden

MCP-Tools werden über die KI-Chat-Oberfläche aufgerufen, nicht über die Haupt-Einstellungsseite. Öffnen Sie eine beliebige KI-Chat-Sitzung, um den MCP-Tools-Manager zu finden.

:::

## MCP-Server hinzufügen

### Schritt 1: Den Hinzufügen-Dialog öffnen

1. Klicken Sie im MCP-Tools-Dialog auf **Add Server** (oder die **+**-Schaltfläche)
2. Der Dialog zum Hinzufügen eines MCP-Servers wird geöffnet

### Schritt 2: Eingabemodus wählen

Sie können Server auf zwei Arten hinzufügen:

- **Formularmodus**: Einzelne Felder ausfüllen (empfohlen für Einsteiger)
- **JSON-Modus**: JSON-Konfigurationsblock einfügen (schneller für Masseneinrichtung, kompatibel mit dem Claude Desktop-Format)

### Schritt 3: Den Server konfigurieren

#### Formularmodus

| Feld | Beschreibung | Erforderlich |
|-------|-------------|----------|
| **Server Name** | Ein beschreibender Name für diesen Server | Ja |
| **Transport Type** | Verbindungstyp: `Stdio`, `SSE` oder `WebSocket` | Ja |
| **Host / Command** | Hostname (für SSE/WebSocket) oder auszuführender Befehl (für Stdio) | Ja |
| **Port** | Portnummer (nicht erforderlich für Stdio) | Für SSE/WebSocket |
| **Authentication Type** | `None`, `API Key`, `Bearer Token` oder `Custom` | Nein |
| **Timeout** | Anfrage-Timeout in Millisekunden (Standard: 30000) | Nein |
| **Enabled** | Ob der Server aktiv ist (Standard: aktiviert) | Nein |

#### JSON-Modus

Der JSON-Modus akzeptiert das Standard-`mcpServers`-Format, das von Claude Desktop und anderen MCP-Clients verwendet wird:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uvx",
      "args": ["package-name"]
    }
  }
}
```

**Unterstützte JSON-Eigenschaften:**

| Eigenschaft | Beschreibung |
|----------|-------------|
| `command` | Auszuführender Befehl (für Stdio-Transport) |
| `args` | Array von Befehlsargumenten |
| `url` | Server-URL (für SSE/WebSocket) |
| `host` | Hostname oder IP-Adresse |
| `port` | Portnummer |
| `transport` | Überschreibung des Transporttyps |
| `enabled` | Aktivieren/Deaktivieren beim Hinzufügen (Standard: true) |
| `authType` | Authentifizierungstyp |
| `authConfig` | Authentifizierungsdaten |
| `timeout` | Anfrage-Timeout in ms |

Sie können mehrere Server in einem einzelnen JSON-Block hinzufügen, indem Sie weitere Einträge unter `mcpServers` hinzufügen.

:::tip Beispiel laden verwenden

Klicken Sie im JSON-Modus auf **Load Example**, um eine Beispielkonfiguration zu sehen, die Sie anpassen können.

:::

### Schritt 4: Speichern

Klicken Sie auf **Add**, um die Serverkonfiguration zu speichern. Der Server erscheint in der Liste mit dem Status **Enabled**.

## MCP-Server verwalten

### Serverliste

Der MCP-Tools-Dialog zeigt alle konfigurierten Server an:

| Element | Beschreibung |
|---------|-------------|
| **Servername** | Der von Ihnen konfigurierte Bezeichner |
| **Status-Badge** | `Enabled` (grün) oder `Disabled` (grau) |
| **Verbindungsinformationen** | Transporttyp, Host und Port |
| **Tool-Anzahl** | Anzahl der entdeckten Tools |

### Server aktivieren/deaktivieren

1. Suchen Sie den Server in der Liste
2. Klicken Sie auf das **Schalter-Symbol** in der Spalte „Aktionen"
3. Der Serverstatus wechselt zwischen „Aktiviert" und „Deaktiviert"

**Wenn deaktiviert:** Die KI kann keine Tools von diesem Server verwenden, aber die Konfiguration bleibt erhalten.

### Server bearbeiten

1. Suchen Sie den Server in der Liste
2. Klicken Sie auf das **Bleistift-Symbol** in der Spalte „Aktionen"
3. Ändern Sie die gewünschten Konfigurationsfelder
4. Klicken Sie auf **Update**, um die Änderungen zu speichern

:::info JSON-Modus-Einschränkung

Der JSON-Modus ist nur beim Hinzufügen neuer Server verfügbar. Um einen bestehenden Server zu bearbeiten, verwenden Sie den Formularmodus.

:::

### Server löschen

1. Suchen Sie den Server in der Liste
2. Klicken Sie auf das **Papierkorb-Symbol** in der Spalte „Aktionen"
3. Bestätigen Sie die Löschung im Dialog

:::warning Dauerhafte Löschung

Das Löschen eines Servers entfernt seine Konfiguration und alle entdeckten Tools. Diese Aktion kann nicht rückgängig gemacht werden.

:::

## Tools entdecken und verwalten

### Tools entdecken

Nach dem Hinzufügen eines Servers müssen Sie die von ihm bereitgestellten Tools entdecken:

1. Suchen Sie den Server in der Liste
2. Klicken Sie auf das **Lupen-Symbol** (Discover Tools)
3. aiFetchly verbindet sich mit dem Server und ruft die Liste der verfügbaren Tools ab
4. Die entdeckten Tools erscheinen unter dem Servereintrag

:::tip Nach Konfigurationsänderungen entdecken

Entdecken Sie Tools erneut, nachdem Sie die Verbindungsdetails eines Servers geändert haben. Dadurch bleibt die Tool-Liste mit dem Server synchronisiert.

:::

### Entdeckte Tools anzeigen

Klicken Sie auf einen Servereintrag, um ihn zu erweitern und seine Tools zu sehen:

- Jedes Tool zeigt seinen Namen an
- Tools haben individuelle Aktivierungs-/Deaktivierungsschalter
- Tool-Namen erhalten das Präfix `mcp_`, wenn sie von der KI verwendet werden

### Einzelne Tools aktivieren/deaktivieren

1. Erweitern Sie den Server, um seine Tools zu sehen
2. Verwenden Sie den **Schalter** neben jedem Tool-Namen
3. Deaktivierte Tools sind für die KI nicht verfügbar, auch wenn der Server aktiviert ist

Dies ist nützlich, wenn ein Server viele Tools bereitstellt, Sie aber nur bestimmte für die KI verfügbar machen möchten.

### Verbindung testen

Um zu überprüfen, ob ein Server erreichbar ist:

1. Suchen Sie den Server in der Liste
2. Klicken Sie auf das **Netzwerk-Check-Symbol** (Test Connection)
3. aiFetchly versucht eine Verbindung herzustellen und meldet Erfolg oder Misserfolg

## Transporttypen

### Stdio

**Am besten für:** Lokale Tools, Kommandozeilenprogramme, npm-Pakete

Der Stdio-Transport startet einen lokalen Prozess und kommuniziert über Standard-Eingabe/Ausgabe.

**Konfiguration:**
- **Host/Befehl**: Der auszuführende Befehl (z. B. `node server.js`, `uvx package-name`)
- **Port**: Nicht zutreffend

**Beispielbefehle:**
- `npx @modelcontextprotocol/server-memory` — In-Memory-Wissensgraph
- `uvx blender-mcp` — Blender-Integration
- `node /path/to/custom-server.js` — Benutzerdefinierter lokaler Server

### SSE (Server-Sent Events)

**Am besten für:** HTTP-basierte Dienste, Cloud-gehostete Tools

Der SSE-Transport verbindet sich mit einem HTTP-Endpunkt, der Tool-Ergebnisse streamt.

**Konfiguration:**
- **Host**: Server-Hostname oder IP (z. B. `api.example.com`)
- **Port**: Server-Portnummer (z. B. `8080`)

### WebSocket

**Am besten für:** Echtzeit-Dienste, bidirektionale Kommunikation

Der WebSocket-Transport stellt eine persistente Verbindung für die Tool-Kommunikation her.

**Konfiguration:**
- **Host**: Server-Hostname oder IP
- **Port**: Server-Portnummer

## Authentifizierung

MCP-Server unterstützen mehrere Authentifizierungsmethoden:

| Typ | Anwendungsfall | Felder |
|------|----------|--------|
| **None** | Öffentliche/lokale Server | Keine Anmeldedaten erforderlich |
| **API Key** | Dienste, die einen API-Schlüssel erfordern | API Key (Passwort-Feld) |
| **Bearer Token** | OAuth/tokenbasierte Dienste | Bearer Token (Passwort-Feld) |
| **Custom** | Nicht-Standard-Authentifizierung | JSON-Konfiguration |

## MCP-Tools im KI-Chat verwenden

Sobald MCP-Server konfiguriert und Tools entdeckt sind:

1. **KI-Marketing-Assistenten öffnen**
2. Die KI erkennt automatisch alle aktivierten Tools von aktivierten Servern
3. Tools erscheinen als verfügbare Funktionen, die die KI aufrufen kann
4. Die KI entscheidet basierend auf Ihrer Anfrage, wann ein Tool verwendet wird

### Beispiel: Websuche

```
Benutzer: "Suche im Web nach den neuesten SaaS-Preistrends"
KI: [Ruft das Such-Tool von Ihrem Web-Such-MCP-Server auf]
KI: "Hier sind die neuesten SaaS-Preistrends, die ich gefunden habe..."
```

### Beispiel: Datenbankabfrage

```
Benutzer: "Wie viele Leads hatten wir letzte Woche von unserer Website?"
KI: [Ruft das Abfrage-Tool von Ihrem Datenbank-MCP-Server auf]
KI: "Laut der Datenbankabfrage haben Sie letzte Woche 247 Leads erhalten..."
```

### Beispiel: Benutzerdefinierte API

```
Benutzer: "Prüfe, ob unser Mitbewerber seine Preisseite aktualisiert hat"
KI: [Ruft das Monitoring-Tool von Ihrem benutzerdefinierten MCP-Server auf]
KI: "Ja, sie haben ihre Preisseite gestern aktualisiert. Hier sind die Änderungen..."
```

### Wie die KI Tools verwendet

Die KI folgt diesem Prozess:

1. **Analysiert Ihre Anfrage**, um festzustellen, ob ein Tool benötigt wird
2. **Wählt das passende Tool** aus den verfügbaren MCP-Tools aus
3. **Ruft das Tool** mit den erforderlichen Parametern auf
4. **Integriert das Ergebnis** in ihre Antwort

Sie können die KI auch explizit bitten, ein bestimmtes Tool zu verwenden:
- "Verwende das Web-Such-Tool, um zu finden..."
- "Frage die Datenbank ab nach..."
- "Rufe [Tool-Name] auf, um..."

## Fehlerbehebung

### Verbindung fehlgeschlagen

**Mögliche Ursachen:**
- Server läuft nicht
- Falscher Host/Port
- Firewall blockiert die Verbindung
- Authentifizierungsdaten sind falsch

**Lösungen:**
1. Überprüfen Sie, ob der Server läuft und erreichbar ist
2. Überprüfen Sie die Host- und Port-Konfiguration
3. Verwenden Sie **Test Connection** zur Diagnose
4. Überprüfen Sie die Authentifizierungsdaten
5. Überprüfen Sie Firewall- und Netzwerkeinstellungen

### Tool-Entdeckung fehlgeschlagen

**Mögliche Ursachen:**
- Server antwortet nicht
- Server implementiert das MCP-Protokoll nicht korrekt
- Verbindungs-Timeout

**Lösungen:**
1. Testen Sie zuerst die Verbindung
2. Überprüfen Sie, ob der Server das MCP-Protokoll unterstützt
3. Erhöhen Sie die Timeout-Einstellung
4. Überprüfen Sie die Server-Logs auf Fehler

### KI verwendet keine MCP-Tools

**Mögliche Ursachen:**
- Server ist deaktiviert
- Alle Tools sind deaktiviert
- Tools wurden noch nicht entdeckt
- KI erkennt nicht, dass die Anfrage ein Tool erfordert

**Lösungen:**
1. Überprüfen Sie, ob der Server aktiviert ist (grünes Badge)
2. Überprüfen Sie, ob einzelne Tools aktiviert sind
3. Entdecken Sie Tools, wenn die Tool-Anzahl 0 anzeigt
4. Erwähnen Sie das Tool explizit in Ihrer Anfrage

### Server zeigt 0 Tools

**Lösungen:**
1. Klicken Sie auf **Discover Tools**, um die Tool-Liste abzurufen
2. Stellen Sie sicher, dass der Server während der Entdeckung läuft
3. Überprüfen Sie, ob der Server Tools über das MCP-Protokoll bereitstellt
4. Entdecken Sie Tools nach Server-Updates erneut

## Best Practices

### 1. Mit wesentlichen Servern beginnen

Fügen Sie nur Server hinzu, die Sie benötigen:
- Zu viele Server erhöhen die Komplexität
- Jede Serververbindung verbraucht Ressourcen
- Beginnen Sie mit ein bis zwei und fügen Sie bei Bedarf weitere hinzu

### 2. Tools nach der Einrichtung entdecken

Entdecken Sie Tools immer nach:
- dem Hinzufügen eines neuen Servers
- dem Ändern von Verbindungseinstellungen
- dem Aktualisieren der Serversoftware

### 3. Tool-Level-Kontrolle verwenden

Deaktivieren Sie einzelne Tools, die Sie nicht benötigen:
- Reduziert Störungen für die KI
- Verhindert versehentliche Verwendung mächtiger Tools
- Hält die Tool-Liste überschaubar

### 4. Vor der Nutzung testen

- Verwenden Sie **Test Connection** nach der Konfiguration
- **Discover Tools**, um die Tool-Verfügbarkeit zu überprüfen
- Versuchen Sie eine einfache Abfrage im KI-Chat, um Ende-zu-Ende zu bestätigen

### 5. Zugangsdaten sicher aufbewahren

- Behandeln Sie API-Schlüssel und Tokens wie Passwörter
- Teilen Sie Serverkonfigurationen nicht mit unvertrauenswürdigen Personen
- Widerrufen Sie Zugangsdaten beim Entfernen von Servern

### 6. Tool-Nutzung überwachen

- Überprüfen Sie KI-Antworten auf unerwartete Tool-Nutzung
- Deaktivieren Sie Tools, die unzuverlässige Ergebnisse liefern
- Passen Sie Server-Timeouts an, wenn Antworten langsam sind

## Integration mit anderen Funktionen

### KI-Skills

MCP-Tools und KI-Skills arbeiten zusammen:
- Skills bieten domänenspezifisches Wissen und Logik
- MCP-Tools bieten externe Daten und Aktionen
- Beide sind im KI-Marketing-Assistenten verfügbar

### Wissensbibliothek

MCP-Tools ergänzen die Wissensbibliothek:
- Die Wissensbibliothek bietet Ihren Geschäftskontext
- MCP-Tools bieten Echtzeit-externe Daten
- Kombiniert für umfassende KI-Antworten

## Nächste Schritte

- [KI-Marketing-Assistenten kennenlernen](./ai-marketing-assistant)
- [KI-Skills erkunden](./ai-skills)
- [Wissensbibliothek einrichten](./knowledge-library)

---

**Bereit, Ihre KI zu erweitern?** Fügen Sie Ihren ersten MCP-Server hinzu, entdecken Sie seine Tools und beginnen Sie, externe Funktionen in Ihren KI-Gesprächen zu nutzen.
