---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Verwalten und erweitern Sie die KI-Fähigkeiten von aiFetchly mit anpassbaren Skills - importieren, deinstallieren, aktivieren/deaktivieren und im KI-Chat verwenden.
---

# AI Skills

AI Skills sind modulare Erweiterungen, die die KI-Chat-Funktionen von aiFetchly erweitern. Skills fügen dem KI-Marketing-Assistenten spezialisiertes Wissen, benutzerdefinierte Werkzeuge und domänenspezifische Funktionen hinzu.

## Was sind AI Skills?

AI Skills sind paketierte Komponenten, die die Fähigkeiten der KI erweitern:

- **Integrierte Skills**: Vorinstallierte Skills mit Kernfunktionen
- **Benutzerinstallierte Skills**: Benutzerdefinierte Skills, die Sie für bestimmte Anwendungsfälle importieren

Jeder Skill hat:
- Einen eindeutigen Namen und eine Version
- Eine Kategorie (z. B. "web-search", "data-analysis", "automation")
- Einen Aktivierungs-/Deaktivierungsstatus
- Ein Manifest, das Berechtigungen und Fähigkeiten definiert

## Zugriff auf AI Skills

1. Klicken Sie auf **Einstellungen** im linken Navigationsmenü
2. Navigieren Sie zu **Skills**
3. Sehen Sie sich die Liste der installierten Skills mit deren Status an

## Skills importieren

### Schritt 1: Skill-Paket beschaffen

Skills werden als `.zip`-Dateien vertrieben. Sie können Skills erhalten von:
- Offiziellem aiFetchly-Skill-Marketplace
- Community-beigetragene Skills
- Benutzerdefinierten, für Ihre Organisation entwickelten Skills

### Schritt 2: Den Skill importieren

1. Klicken Sie auf der Skills-Seite auf die Schaltfläche **Importieren** (oben rechts, mit Upload-Symbol)
2. Ein Dateiauswahldialog öffnet sich
3. Navigieren Sie zu Ihrer Skill-`.zip`-Datei
4. Wählen Sie die Datei aus und bestätigen Sie

### Schritt 3: Installation überprüfen

Nach dem Import:
- Der Skill erscheint in der Skills-Tabelle
- Der Status wird standardmäßig als **Aktiviert** angezeigt
- Überprüfen Sie, ob Kategorie und Version des Skills Ihren Erwartungen entsprechen

:::tip Import-Tipps

- Es werden nur `.zip`-Dateien unterstützt
- Der Skill muss eine gültige `manifest.json`-Datei enthalten
- Wenn der Import fehlschlägt, überprüfen Sie die Integrität der Zip-Datei und das Manifest-Format

:::

## Skills verwalten

### Installierte Skills anzeigen

Die Skills-Tabelle zeigt folgende Informationen:

| Spalte | Beschreibung |
|--------|-------------|
| **Name** | Skill-Bezeichner/Name |
| **Quelle** | `Integriert`- oder `Benutzerinstalliert`-Badge |
| **Kategorie** | Funktionale Kategorie des Skills |
| **Version** | Aktuelle Versionsnummer |
| **Status** | `Aktiviert`- oder `Deaktiviert`-Badge |
| **Aktionen** | Aktivierungs-/Deaktivierungsschalter und Deinstallations-Schaltfläche |

### Skills aktivieren/deaktivieren

So ändern Sie den Status eines Skills:

1. Suchen Sie den Skill in der Tabelle
2. Verwenden Sie die **Schalter** in der Spalte Aktionen:
   - **Häkchen** (grün): Skill aktivieren
   - **X-Zeichen** (grau): Skill deaktivieren

**Wann deaktivieren:**
- Skill steht in Konflikt mit einem anderen Skill
- Vorübergehende Fehlerbehebung
- Skill wird für aktuelle Aufgaben nicht benötigt
- Skill-Verhalten wird getestet

**Hinweis:** Integrierte Skills können nicht deinstalliert, sondern nur deaktiviert werden.

### Skills deinstallieren

So entfernen Sie einen benutzerinstallierten Skill:

1. Suchen Sie den Skill in der Tabelle
2. Klicken Sie auf das **Löschen**-Symbol (Papierkorb) in der Spalte Aktionen
3. Bestätigen Sie die Deinstallationsaktion im Dialog

:::warning Deinstallations-Warnung

Die Deinstallation eines Skills entfernt ihn dauerhaft. Sie müssen ihn erneut importieren, wenn Sie ihn wieder verwenden möchten.

:::

## Skills im KI-Chat verwenden

Skills stehen im **KI-Marketing-Assistenten** zur Verfügung, sobald sie aktiviert sind.

### Auf den KI-Chat zugreifen

1. Navigieren Sie zum **KI-Marketing-Assistenten** (oder **KI-Chat**)
2. Starten Sie eine neue Konversation oder setzen Sie eine bestehende fort

### Wie Skills im Chat funktionieren

Aktivierte Skills werden automatisch in KI-Antworten integriert:

1. **Automatische Werkzeugauswahl**: Die KI wählt relevante Skills basierend auf Ihrer Anfrage aus
2. **Manueller Aufruf**: Fordern Sie spezifische Skill-Funktionalität an
3. **Kombinierte Ausgaben**: Mehrere Skills können zusammenarbeiten

### Beispiel für die Skill-Nutzung

**Web-Suche-Skill:**
```
Benutzer: "Was sind die neuesten Trends im SaaS-Marketing?"
KI: [Verwendet den Web-Suche-Skill, um aktuelle Informationen zu finden]
KI: "Basierend auf aktuellen Daten umfassen SaaS-Marketing-Trends..."
```

**Datenanalyse-Skill:**
```
Benutzer: "Analysieren Sie diese Kundendaten und identifizieren Sie Muster"
KI: [Verwendet den Datenanalyse-Skill zur Verarbeitung der Daten]
KI: "Die Analyse zeigt folgende Schlüsselmuster..."
```

**Automatisierungs-Skill:**
```
Benutzer: "Richten Sie eine automatisierte E-Mail-Kampagne für neue Leads ein"
KI: [Verwendet den Automatisierungs-Skill zur Konfiguration der Kampagne]
KI: "Ihre automatisierte Kampagne ist jetzt konfiguriert mit..."
```

### Skill-Kennzeichen im Chat

Wenn ein Skill verwendet wird:
- Der Skill-Name kann in der Antwort erscheinen
- Ein kleines Symbol oder Badge zeigt die Skill-Aktivierung an
- Die Werkzeugverwendung wird im Konversationsverlauf angezeigt

### Skill-Berechtigungsabfragen

Einige Skills erfordern Ihre ausdrückliche Genehmigung vor der Ausführung. Dies ist eine Sicherheitsfunktion zum Schutz Ihres Systems.

**Wann Sie Berechtigungsabfragen sehen:**

Skills werden nach ihrem Berechtigungsniveau kategorisiert:

| Kategorie | Berechtigungsverhalten | Beispiele |
|----------|-------------------|----------|
| **Pure** | Automatisch genehmigt, keine Abfrage | Textverarbeitung, Berechnungen, Datenformatierung |
| **Shell** | Fragt immer vor der Ausführung nach | Ausführung von Systembefehlen, Dateioperationen |
| **Network** | Kann bei externen Aufrufen nachfragen | Web-Scraping, API-Aufrufe an externe Dienste |
| **Data** | Kann bei sensiblen Zugriffen nachfragen | Dateisystem-Lese-/Schreibzugriff, Datenbankzugriff |

**Die Berechtigungsabfrage:**

Wenn ein Skill eine Berechtigung benötigt, sehen Sie einen Dialog im KI-Chat:

```
┌─────────────────────────────────────────────┐
│  Skill-Berechtigungsanfrage                │
├─────────────────────────────────────────────┤
│  Skill: shell_execute                       │
│  Kategorie: Shell                            │
│                                             │
│  Dieser Skill möchte Folgendes ausführen:  │
│  $ ls -la /pfad/zum/verzeichnis            │
│                                             │
│  [Einmal erlauben]  [Immer erlauben]  [Ablehnen] │
└─────────────────────────────────────────────┘
```

**Berechtigungsoptionen:**

- **Einmal erlauben**: Berechtigung nur für diese einzelne Ausführung erteilen
- **Immer erlauben**: Diese Entscheidung speichern und zukünftige Anfragen dieses Skills automatisch genehmigen
- **Ablehnen**: Diese Ausführung blockieren (Skill wird ordnungsgemäß fehlschlagen)

**Gespeicherte Berechtigungen verwalten:**

So überprüfen oder ändern Sie gespeicherte Berechtigungen:

1. Gehen Sie zu **Einstellungen** → **AI Skills**
2. Klicken Sie auf einen Skill, um seinen Berechtigungsstatus anzuzeigen
3. Schalten Sie "Immer erlauben" um, um das Auto-Genehmigungsverhalten zu ändern
4. Deaktivierte Skills haben ihre Berechtigungen vorübergehend ausgesetzt

:::tip Bewährte Sicherheitspraxis

Beginnen Sie mit "Einmal erlauben" für neue Skills. Nachdem Sie überprüft haben, dass sie korrekt und sicher funktionieren, können Sie für mehr Komfort zu "Immer erlauben" wechseln.

:::

## Skill-Kategorien

Skills sind nach funktionaler Kategorie organisiert:

| Kategorie | Zweck | Beispiel-Skills |
|----------|---------|----------------|
| **Web-Suche** | Internetrecherche, Trendanalyse | Suchmaschine, Social-Media-Monitoring |
| **Datenanalyse** | Datenverarbeitung und -interpretation | CSV-Analyse, statistische Modellierung |
| **Automatisierung** | Workflow-Automatisierungsaufgaben | E-Mail-Automatisierung, Aufgabenplanung |
| **Integration** | Externe Dienstverbindungen | CRM, API-Konnektoren |
| **Content** | Content-Erstellung und -Optimierung | Blog-Schreiben, SEO-Optimierung |
| **Pure** | Allzweck-Dienstprogramme | Textverarbeitung, Formatierung |

## Fehlerbehebung

### Skill erscheint nicht im Chat

**Mögliche Ursachen:**
- Skill ist deaktiviert
- Skill-Installation unvollständig
- Skill erfordert spezifische Berechtigungen

**Lösungen:**
1. Überprüfen Sie den Skill-Status unter Einstellungen → Skills
2. Aktivieren Sie den Skill, falls deaktiviert
3. Importieren Sie den Skill erneut, falls beschädigt
4. Überprüfen Sie, ob das Skill-Manifest die erforderlichen Berechtigungen enthält

### Import fehlgeschlagen

**Mögliche Ursachen:**
- Ungültiges Zip-Dateiformat
- Fehlende oder fehlerhafte `manifest.json`
- Skill bereits installiert
- Beschädigter Download

**Lösungen:**
1. Überprüfen Sie die Integrität der Zip-Datei
2. Prüfen Sie Format und Inhalt der manifest.json
3. Deinstallieren Sie zuerst die vorhandene Version und importieren Sie dann erneut
4. Laden Sie das Skill-Paket erneut herunter

### Skill verursacht Fehler

**Mögliche Ursachen:**
- Skill-Fehler oder Inkompatibilität
- Fehlende Abhängigkeiten
- API-Schlüssel nicht konfiguriert

**Lösungen:**
1. Deaktivieren Sie den Skill vorübergehend
2. Überprüfen Sie die Skill-Dokumentation auf Anforderungen
3. Vergewissern Sie sich, dass alle erforderlichen Konfigurationen vollständig sind
4. Kontaktieren Sie den Skill-Entwickler für Support

### Integrierter Skill kann nicht deinstalliert werden

Integrierte Skills sind Kernbestandteil der aiFetchly-Funktionalität und können nicht entfernt werden. Sie können sie nur deaktivieren, wenn sie mit anderen Skills in Konflikt stehen.

## Bewährte Praktiken

### 1. Skill-Auswahl

**Installieren Sie nur, was Sie benötigen:**
- Jeder Skill erhöht die Komplexität
- Zu viele Skills können Konflikte verursachen
- Beginnen Sie mit den wesentlichen Skills und fügen Sie bei Bedarf weitere hinzu

### 2. Skill-Updates

**Halten Sie Skills aktuell:**
- Überprüfen Sie regelmäßig nach Skill-Updates
- Aktualisieren Sie Skills für Fehlerbehebungen und Verbesserungen
- Testen Sie aktualisierte Skills vor dem produktiven Einsatz

### 3. Skill-Organisation

**Gute Benennung und Kategorisierung:**
- Verwenden Sie beschreibende Skill-Namen
- Organisieren Sie nach funktionaler Kategorie
- Dokumentieren Sie den Zweck benutzerdefinierter Skills

### 4. Testen

**Vor der Produktion testen:**
- Aktivieren Sie Skills zuerst im Testmodus
- Überprüfen Sie das Skill-Verhalten im KI-Chat
- Prüfen Sie auf Konflikte mit vorhandenen Skills

### 5. Sicherheit

**Nur vertrauenswürdige Skills installieren:**
- Überprüfen Sie die Skill-Quelle
- Prüfen Sie die Skill-Berechtigungen
- Überwachen Sie das Skill-Verhalten
- Entfernen Sie nicht verwendete Skills

## Skill-Entwicklung (Für Entwickler)

### Manifest-Struktur

Die `manifest.json` eines Skills sollte Folgendes enthalten:

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "category": "automation",
  "permissions": ["web-search", "data-access"],
  "description": "Beschreibung der Funktionsweise dieses Skills"
}
```

### Paketierung

1. `manifest.json` im Hauptverzeichnis einfügen
2. Skill-Implementierungsdateien hinzufügen
3. Erforderliche Assets einbinden
4. Den Inhalt zippen (nicht den Ordner)
5. Datei als `skill-name.zip` benennen

## Integration mit anderen Funktionen

### KI-Marketing-Assistent

Skills erweitern die KI-Chat-Fähigkeiten:
- Präzisere Antworten
- Zugriff auf externe Datenquellen
- Automatisierte Aufgabenausführung

### MCP-Tools

Skills und MCP-Tools können zusammenarbeiten:
- Skills bieten domänenspezifische Logik
- MCP-Tools bieten externe Konnektivität
- Kombiniert für leistungsstarke Automatisierung

### Wissensbibliothek

Skills können Ihre Wissensbasis nutzen:
- Wissen während des Chats durchsuchen
- Gelernte Muster anwenden
- Kontextbewusste Antworten generieren

## Nächste Schritte

- [Systemeinstellungen konfigurieren](../settings/system-settings)
- [KI-Marketing-Assistent kennenlernen](./ai-marketing-assistant)
- [Wissensbibliothek einrichten](./knowledge-library)

---

**Bereit, die KI-Fähigkeiten zu erweitern?** Importieren Sie Ihren ersten Skill und entdecken Sie neue Möglichkeiten für Automatisierung und Intelligenz.
