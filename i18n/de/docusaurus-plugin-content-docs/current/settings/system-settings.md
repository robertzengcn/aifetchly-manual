---
id: system-settings
title: Systemeinstellungen
sidebar_label: Systemeinstellungen
description: Konfigurieren Sie Browser-Pfade, Captcha-Lösung und Systemeinstellungen von aiFetchly.
---

# Systemeinstellungen

Der Bereich Systemeinstellungen ermöglicht es Ihnen, die Kernfunktionalität von aiFetchly zu konfigurieren, einschließlich Browser-Pfade für Web-Automatisierung, Captcha-Lösung, Einbettungsmodelle und Systempräferenzen. Eine ordnungsgemäße Konfiguration stellt die optimale Leistung aller Funktionen sicher.

## Zugriff auf Systemeinstellungen

1. Klicken Sie auf **Einstellungen** im linken Navigationsmenü
2. Ein baumbasiertes Navigationspanel erscheint links
3. Klicken Sie auf eine Kategorie, um deren Einstellungen zu erweitern
4. Ändern Sie die Einstellungen nach Bedarf
5. Änderungen werden automatisch gespeichert

:::info Auto-Speichern

Die meisten Einstellungen werden bei Änderung automatisch gespeichert. Achten Sie auf Speicher-Indikatoren oder Bestätigungsnachrichten.

:::

## Einstellungsübersicht

### 2Captcha-Dienst

Automatisierte Captcha-Lösung für Web-Information Organization.

| Einstellung | Beschreibung |
|---------|-------------|
| **Token** | Ihr 2Captcha-API-Token |
| **Aktiviert** | Captcha-Lösung ein-/ausschalten |

**Einrichtung (Optional):**
1. Registrieren Sie sich unter https://2captcha.com
2. Guthaben zum Konto hinzufügen
3. API-Token aus dem Dashboard abrufen
4. Token eingeben und Dienst aktivieren

:::info Wann 2Captcha verwenden

Nützlich, wenn:
- Im großen Maßstab gescrapt wird
- Häufig Captchas auftreten
- Captchas nicht manuell gelöst werden sollen

:::

### Einbettungskonfiguration

Konfigurieren Sie das Standard-Einbettungsmodell für RAG (Retrieval-Augmented Generation).

| Einstellung | Beschreibung |
|---------|-------------|
| **Standardmodell** | Aus verfügbaren Einbettungsmodellen auswählen |

**Optionen:**
- Verschiedene Einbettungsmodelle mit unterschiedlichen Dimensionen
- Auswahl basierend auf:
  - Sprachunterstützung
  - Leistungsanforderungen
  - Ressourcenbeschränkungen

### Externe Systempfade

Konfigurieren Sie Browser-Pfade für die lokale Browser-Integration.

#### Chrome-Pfad

**Zweck**: Pfad zur Chrome-Browser-Ausführungsdatei

**Zum Konfigurieren:**
1. Klicken Sie auf **Durchsuchen** oder die Dateiauswahl-Schaltfläche
2. Zur Chrome-Installation navigieren
3. Ausführungsdatei auswählen

**Standardpfade (nach Betriebssystem):**
- **Windows**: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- **macOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Linux**: `/usr/bin/google-chrome` oder `/usr/bin/chromium-browser`

#### Firefox-Pfad

**Zweck**: Pfad zur Firefox-Browser-Ausführungsdatei

**Zum Konfigurieren:**
1. Klicken Sie auf **Durchsuchen** oder die Dateiauswahl-Schaltfläche
2. Zur Firefox-Installation navigieren
3. Ausführungsdatei auswählen

**Standardpfade (nach Betriebssystem):**
- **Windows**: `C:\Program Files\Mozilla Firefox\firefox.exe`
- **macOS**: `/Applications/Firefox.app/Contents/MacOS/firefox`
- **Linux**: `/usr/bin/firefox`

:::tip Browser-Pfad-Anforderungen

Browser-Pfade sind erforderlich für:
- Lokale Browser-Integrationsfunktionen
- Yandex-Information Organization (erfordert Browser)
- Bestimmte Anti-Bot-Erkennungsszenarien

:::

### Benutzereinstellungen

Konfigurieren Sie Ihr aiFetchly-Erlebnis.

#### Sprache

**Optionen:**
- **English**: Oberfläche auf Englisch
- **中文**: Oberfläche auf Chinesisch (vereinfacht)

**Zum Ändern:**
1. Bevorzugte Sprache aus dem Dropdown auswählen
2. Oberfläche aktualisiert sich sofort
3. Neustart für vollständigen Sprachwechsel empfohlen

#### KI-Website-Analyse Geschäftsinformationen

**Zweck**: Kontext für KI-gestützte Website-Analyse bereitstellen

**Format**: JSON-Konfiguration

**Beispiel:**
```json
{
  "industry": "Software",
  "company_size": "50-200 employees",
  "target_markets": ["B2B", "SaaS"],
  "keywords": ["marketing", "automation"]
}
```

**Verwendung:**
- Die KI verwendet diesen Kontext bei der Analyse von Websites
- Verbessert die Relevanz der Analyseergebnisse
- Passt Scoring und Kategorisierung an

## MCP-Tools-Verwaltung

**MCP** (Model Context Protocol) ermöglicht die Integration mit externen Werkzeugen und Diensten und erweitert den KI-Marketing-Assistenten um Funktionen wie Websuche, Datenbankabfragen und benutzerdefinierte API-Aufrufe.

Die vollständige Dokumentation zur Konfiguration und Verwendung von MCP-Servern finden Sie unter [MCP-Tools](../ai-outreach/mcp-tools).

## Konfigurations-Bewährte Praktiken

### 1. Browser-Konfiguration

**Chrome vs. Firefox:**
- Chrome: Bessere Kompatibilität, mehr Funktionen
- Firefox: Open-Source, datenschutzorientiert

**Empfehlung:** Chrome als Primärbrowser konfigurieren, Firefox als Backup.

### 2. Captcha-Lösung

**Wann aktivieren:**
- Groß angelegte Information Organization-Operationen (>1000 Seiten)
- Häufige Captcha-Begegnungen
- Keine manuelle Intervention gewünscht

**Wann deaktivieren:**
- Kleines Information Organization-Volumen
- Um Kosten zu sparen (2captcha ist kostenpflichtig)
- Selten Captchas auftreten

### 3. Sprach-Einstellungen

**Auswahl basierend auf:**
- Ihrer Muttersprache
- Sprache der Zielgruppe
- Inhaltssprache (für die Wissensbibliothek)

**Hinweis:** Die Spracheinstellung betrifft nur die Benutzeroberfläche. Die KI kann unabhängig von der Einstellung mehrere Sprachen verarbeiten.

### 4. MCP-Tools

**Sparsam hinzufügen:**
- Nur Werkzeuge hinzufügen, die Sie verwenden werden
- Jedes Werkzeug erhöht die Komplexität
- Werkzeuge einzeln testen

**Sicherheit:**
- Nur vertrauenswürdige MCP-Server verwenden
- Zugangsdaten sicher aufbewahren
- Werkzeugberechtigungen überprüfen

## Fehlerbehebung

### Browser-Integration funktioniert nicht

**Mögliche Ursachen:**
- Falscher Browser-Pfad
- Browser nicht installiert
- Berechtigungsprobleme

**Lösungen:**
1. Überprüfen, ob der Browser installiert ist
2. Dateipfad auf Richtigkeit prüfen
3. Testen, indem der Browser direkt gestartet wird
4. aiFetchly mit Administrator-/Sudo-Berechtigungen ausführen

### Captcha wird nicht gelöst

**Mögliche Ursachen:**
- 2Captcha-Token ungültig
- Unzureichendes Guthaben
- Dienst deaktiviert

**Lösungen:**
1. Überprüfen, ob der 2Captcha-Token korrekt ist
2. Kontostand prüfen
3. Sicherstellen, dass der 2Captcha-Schalter aktiviert ist
4. Zuerst mit manuellem Captcha testen

### Einstellungen werden nicht gespeichert

**Mögliche Ursachen:**
- Datenbank gesperrt
- Unzureichende Berechtigungen
- Anwendungsfehler

**Lösungen:**
1. aiFetchly neu starten
2. Als Administrator/Sudo ausführen
3. Anwendungsprotokolle prüfen
4. Überprüfen, ob die Datenbank nicht schreibgeschützt ist

### MCP-Tools erscheinen nicht

**Mögliche Ursachen:**
- Server nicht korrekt konfiguriert
- Verbindungstest fehlgeschlagen
- Werkzeuge deaktiviert

**Lösungen:**
1. Serverkonfiguration überprüfen
2. Verbindung testen
3. Prüfen, ob der Server läuft
4. Einzelne Werkzeuge aktivieren

## Erweiterte Konfiguration

### Mehrere Einbettungsmodelle

Konfigurieren Sie verschiedene Einbettungsmodelle für verschiedene Zwecke:

1. Navigieren Sie zu **Einbettungskonfiguration**
2. Mehrere Modelle hinzufügen
3. Standardmodell festlegen
4. Spezifische Modelle pro Aufgabe verwenden

### Umgebungs-spezifische Einstellungen

Verschiedene Einstellungen für verschiedene Umgebungen:

**Entwicklung:**
- Captcha-Lösung deaktivieren
- Debug-Logging aktivieren

**Produktion:**
- Captcha-Lösung aktivieren
- Debug-Logging deaktivieren

## Sicherheitsaspekte

### Browser-Pfade

**Sicherheit:**
- Nur vertrauenswürdige Browser-Installationen verwenden
- Überprüfen, ob Browser-Ausführungsdateien legitim sind
- Browser aktuell halten
- Vorsicht bei benutzerdefinierten Browser-Builds

### MCP-Tools

**Sicherheit:**
- Nur mit vertrauenswürdigen MCP-Servern verbinden
- Werkzeugberechtigungen sorgfältig überprüfen
- Authentifizierung verwenden, wenn verfügbar
- Werkzeugnutzung überwachen
- Zugriff widerrufen, wenn nicht mehr benötigt

## AI-Skills-Verwaltung

AI Skills sind modulare Erweiterungen, die die KI-Chat-Funktionen von aiFetchly erweitern. Skills können importiert, aktiviert/deaktiviert und im KI-Marketing-Assistenten verwendet werden.

Die vollständige Dokumentation zum Importieren, Verwalten und Verwenden von AI Skills finden Sie unter [AI Skills](../ai-outreach/ai-skills).

## Nächste Schritte

Nach dem Konfigurieren der Systemeinstellungen:

- [Zurück zu Erste Schritte](../getting-started/introduction)
- [Ihren ersten Suchauftrag einrichten](../lead-generation/search-engines)
- [E-Mail-Dienste konfigurieren](../lead-generation/batch-email-sending)
- [KI-Marketing-Assistenten kennenlernen](../ai-outreach/ai-marketing-assistant)

---

**Konfiguration abgeschlossen!** Ihr aiFetchly ist nun eingerichtet und bereit, Ihnen bei der Lead-Generierung und Automatisierung Ihrer Marketing-Workflows zu helfen.
