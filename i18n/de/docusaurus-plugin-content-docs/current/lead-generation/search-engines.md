---
id: search-engines
title: Suchmaschinen-Scraping
sidebar_label: Suchmaschinen
description: Erfahren Sie, wie Sie Suchergebnisse von Google, Bing und Yandex extrahieren, um Leads mit KI-gestützter Analyse zu generieren.
---

# Suchmaschinen-Scraping

Die Multi-Engine-Such-Scraping-Funktion von aiFetchly ermöglicht es Ihnen, Leads von mehreren Suchmaschinen gleichzeitig zu sammeln. Extrahieren Sie automatisch Geschäftsinformationen, URLs und Kontaktdaten aus Suchergebnissen. Mit KI-gestützter Analyse können Sie Leads bewerten, Branchen klassifizieren und Kontaktinformationen extrahieren — alles aus Ihren Suchergebnissen.

## Unterstützte Suchmaschinen

| Suchmaschine | Am besten für | Konto erforderlich | Lokaler Browser |
|--------|----------|------------------|---------------|
| **Google** | Allgemeine Suchen, globale Reichweite | Empfohlen | Optional |
| **Bing** | Microsoft-Ökosystem, US-Markt | Optional | Optional |
| **Yandex** | Russischer Markt, kyrillische Inhalte | Empfohlen | **Erforderlich** |

:::info Yandex-Anforderung

Yandex-Scraping erfordert **lokale Browser-Integration** für den ordnungsgemäßen Betrieb. Aktivieren Sie diese Option beim Erstellen von Yandex-Aufgaben.

:::

## Einen Suchauftrag erstellen

### Schritt 1: Zur Suche navigieren

1. Klicken Sie auf **Suche** im linken Navigationsmenü
2. Sie sehen die **Suchformular**-Seite

### Schritt 2: Grundlegende Suchkonfiguration

Geben Sie die folgenden erforderlichen Informationen ein:

#### Schlüsselwörter

1. **Schlüsselwörter eingeben**: Geben Sie Ihre Suchbegriffe in das Textfeld ein oder fügen Sie sie ein
   - Ein Begriff pro Zeile
   - Verwenden Sie spezifische, zielgerichtete Schlüsselwörter für bessere Ergebnisse

2. **Verwandte Schlüsselwörter generieren** (Optional):
   - Klicken Sie auf die Schaltfläche **Verwandte Schlüsselwörter generieren**
   - aiFetchly verwendet KI, um verwandte Suchbegriffe zu generieren
   - Erweitert Ihre Schlüsselwortliste für eine breitere Abdeckung
   - Entfernt automatisch Duplikate

:::tip Schlüsselwort-Strategie

Beginnen Sie mit 5-10 Seed-Schlüsselwörtern und nutzen Sie dann die KI-Generierung, um auf 20-50 verwandte Schlüsselwörter für eine umfassende Abdeckung zu erweitern.

:::

#### Suchmaschine

Wählen Sie die Suchmaschine aus dem Dropdown:
- Google (Standard)
- Bing
- Yandex

#### Seitennummer

Geben Sie an, ab welcher Seite das Scraping beginnen soll:
- **Bei Seite 1 beginnen** für neue Suchen
- **Ab Seite X fortsetzen**, wenn ein vorheriger Auftrag fortgesetzt wird

#### Gleichzeitige Anzahl

Legen Sie die Anzahl gleichzeitiger Suchen fest:
- **1** (Standard): Am sichersten, am langsamsten
- **3-5**: Mittlere Geschwindigkeit, gut für die meisten Anwendungsfälle
- **10+**: Am schnellsten, erfordert mehr Proxys

:::warning Parallelitätslimits

Höhere Parallelität erhöht das Risiko, blockiert zu werden. Beginnen Sie mit 1-3 und steigern Sie schrittweise.

:::

### Schritt 3: Erweiterte Optionen

#### Proxy-Konfiguration

**Option A: Gespeicherte Proxys verwenden**

1. Klicken Sie auf die Schaltfläche **Proxy wählen**
2. Wählen Sie einen oder mehrere Proxys aus Ihrer Liste
3. Klicken Sie auf **Bestätigen**, um sie zum Auftrag hinzuzufügen

**Option B: Manuelle Proxy-Eingabe**

1. Proxy-Option umschalten
2. Proxy-Details manuell eingeben:
   - Host/IP-Adresse
   - Portnummer
   - Benutzername (falls erforderlich)
   - Passwort (falls erforderlich)

:::tip Proxy-Bewährte Praktiken

Verwenden Sie mehrere Proxys für Aufgaben mit hoher Parallelität, um die Last zu verteilen und Blockaden zu vermeiden.

:::

#### Lokale Browser-Integration

Aktivieren Sie lokales Browser-Scraping für menschenähnlicheres Verhalten:

1. **Lokaler Browser** umschalten, um zu aktivieren
2. Wählen Sie Ihren Chrome-Browser aus der Liste
3. **Erforderlich für**: Yandex-Scraping
4. **Empfohlen für**: Google im großen Maßstab

**Vorteile:**
- Niedrigere Erkennungsraten
- Besserer Erfolg bei Anti-Bot-Schutzmaßnahmen
- Konsistentere Ergebnisse

#### Im Browser anzeigen

Schalten Sie **Im Browser anzeigen** um, um die Sichtbarkeit des Browsers während des Scrapings zu steuern:

- **Aktiviert**: Das Browserfenster ist während des Scrapings sichtbar — nützlich für Debugging oder zur Fortschrittsüberwachung
- **Deaktiviert** (Standard): Der Browser läuft im Headless-Modus für schnelleren, Hintergrundbetrieb

#### KI-Wiederherstellung aktivieren

Schalten Sie **KI-Wiederherstellung aktivieren** um, um der KI zu ermöglichen, sich automatisch von Scraping-Fehlern zu erholen:

- Wenn aktiviert, verwendet aiFetchly KI, um während des Scrapings aufgetretene Fehler zu diagnostizieren und zu beheben
- Das System kann Fehler-Screenshots analysieren und seine Strategie anpassen
- Wiederherstellungsversuche sind ratenbegrenzt, um übermäßigen Ressourcenverbrauch zu vermeiden

:::tip Wann KI-Wiederherstellung verwenden

Aktivieren Sie die KI-Wiederherstellung beim Scraping von Suchmaschinen mit starkem Anti-Bot-Schutz (wie Google) oder bei großen Aufgaben, bei denen gelegentliche Fehler erwartet werden.

:::

#### Suchkonto verwenden

Verwenden Sie authentifizierte Konten für bessere Erfolgsraten:

1. **Suchkonto** umschalten, um zu aktivieren
2. Klicken Sie auf **Konto wählen**, um gespeicherte Zugangsdaten auszuwählen
3. Wählen Sie Konten, die zu Ihrer Suchmaschine passen
4. Klicken Sie auf **Bestätigen**

**Empfehlungen:**
- **Google**: Konten für groß angelegtes Scraping verwenden
- **Yandex**: Konten für besseren Zugang verwenden
- **Bing**: Optional, weniger kritisch

### Schritt 4: Ausführen oder Speichern

Wählen Sie eine der folgenden Optionen:

#### Nur speichern

- Erstellt den Auftrag, ohne ihn auszuführen
- Nützlich für Planung oder Batch-Auftragserstellung
- Auftragsstatus: "Nicht gestartet"

#### Auftrag ausführen

- Erstellt und führt den Auftrag sofort aus
- Status ändert sich zu "In Bearbeitung"
- Ergebnisse erscheinen in Echtzeit

## Suchaufträge verwalten

### Auftragsliste anzeigen

Navigieren Sie zu **Suche** → **Ergebnisliste**, um alle Ihre Suchaufträge zu sehen.

**Spalten der Auftragsliste:**

| Spalte | Beschreibung |
|--------|-------------|
| **ID** | Eindeutige Auftragskennung |
| **Schlüsselwörter** | Für die Suche verwendete Schlüsselwörter |
| **Suchmaschine** | Verwendete Suchmaschine (Google, Bing usw.) |
| **Status** | Nicht gestartet, In Bearbeitung, Abgeschlossen, Fehler |
| **Erstellungszeit** | Datum und Uhrzeit der Erstellung |
| **Aktionen** | Ausführen, Bearbeiten, Ergebnisse anzeigen, Prozess beenden, Wiederholen, Protokolle herunterladen |

### Auftragsaktionen

| Aktion | Beschreibung | Wann verfügbar |
|--------|-------------|----------------|
| **Ausführen** | Einen "Nicht gestartet"-Auftrag starten | Auftrag nicht gestartet |
| **Wiederholen** | Einen fehlgeschlagenen Auftrag neu starten | Auftrag hat "Fehler"-Status |
| **Bearbeiten** | Auftragsparameter ändern | Jeder Auftrag |
| **Prozess beenden** | Einen laufenden Auftrag stoppen | Auftrag ist "In Bearbeitung" |
| **Ergebnisse anzeigen** | Detaillierte Ergebnisse sehen | Auftrag hat Ergebnisse |
| **Protokolle herunterladen** | Fehlerprotokolle exportieren | Auftrag hat Fehler |

## Suchergebnisse anzeigen

### Schritt 1: Ergebnisse öffnen

1. Gehen Sie zu **Suche** → **Ergebnisliste**
2. Finden Sie Ihren Auftrag
3. Klicken Sie auf **Ergebnisse anzeigen**, um detaillierte Ergebnisse zu sehen

### Schritt 2: Ergebnistabelle

Die Ergebnistabelle zeigt:

| Spalte | Beschreibung |
|--------|-------------|
| **ID** | Ergebnis-Kennung |
| **Titel** | Seitentitel aus dem Suchergebnis |
| **Link** | URL des Suchergebnisses |
| **Schlüsselwort** | Schlüsselwort, das dieses Ergebnis generiert hat |
| **Erstellungszeit** | Wann das Ergebnis gescraped wurde |
| **Kundenbranche** | KI-klassifizierte Branche (falls analysiert) |
| **Wahrscheinlichkeit** | KI-Lead-Qualitäts-Score 0-100% (falls analysiert) |
| **Analysestatus** | Analyse-Abschlussstatus (ausstehend/analysierend/abgeschlossen/fehlgeschlagen) |
| **Kontaktextraktion** | Status der Kontaktinformationsextraktion |
| **E-Mail** | Extrahierte E-Mail-Adresse (falls extrahiert) |
| **Telefon** | Extrahierte Telefonnummer (falls extrahiert) |
| **Adresse** | Extrahierte physische Adresse (falls extrahiert) |

:::tip Spaltensichtbarkeit

Sie können anpassen, welche Spalten angezeigt werden, indem Sie das **Spaltensichtbarkeit**-Menü verwenden. Klicken Sie auf den Spaltenauswähler, um bestimmte Spalten basierend auf Ihren Workflow-Anforderungen ein- oder auszublenden.

:::

### Schritt 3: Mit Ergebnissen interagieren

**Einzelaktionen:**
- **Link kopieren**: URL in die Zwischenablage kopieren
- **Kontaktinformationen kopieren**: Extrahierte E-Mail, Telefon oder Adresse direkt kopieren

**Stapelaktionen:**
- Mehrere Ergebnisse über Kontrollkästchen auswählen
- **KI analysieren**: Ausgewählte Ergebnisse für Lead-Scoring und Branchenklassifikation analysieren
- **KI Kontaktinformationen extrahieren**: Kontaktinformationen (E-Mail, Telefon, Adresse) aus ausgewählten URLs extrahieren
- **E-Mails extrahieren**: Zur E-Mail-Extraktionsfunktion mit ausgewählten URLs navigieren
- **Exportieren**: Ergebnisse als CSV herunterladen (inklusive KI-Analyse-Felder)

## KI-Website-Analyse

Erweitern Sie Ihre Suchergebnisse mit KI-gestützter Analyse:

### Schritt 1: Ergebnisse auswählen

1. Aktivieren Sie die Kontrollkästchen neben den Ergebnissen, die Sie analysieren möchten
2. Klicken Sie auf die Schaltfläche **KI analysieren**

### Schritt 2: Geschäftskontext angeben

Ein Dialog erscheint, der nach Ihren Geschäftsinformationen fragt:

1. **Geben Sie Ihre Geschäftsbeschreibung** in das Textfeld ein — dies hilft der KI zu verstehen, nach welcher Art von Leads Sie suchen
2. **Für zukünftige Verwendung speichern** (optional): Aktivieren Sie dieses Kontrollkästchen, um Ihre Geschäftsbeschreibung für zukünftige Analysen zu speichern

:::tip Geschäftskontext

Geben Sie eine klare, spezifische Beschreibung Ihres Unternehmens und Ihrer Zielkunden an. Je mehr Kontext Sie liefern, desto genauer wird das KI-Scoring. Zum Beispiel: "Wir sind ein B2B-SaaS-Unternehmen, das Marketing-Automatisierungs-Tools an kleine und mittlere Unternehmen in der Einzelhandelsbranche verkauft."

:::

### Schritt 3: Analyseergebnisse überprüfen

Die KI erstellt Folgendes für jedes analysierte Ergebnis:

| Feld | Beschreibung |
|-------|-------------|
| **Kundenbranche** | KI-klassifizierte Branchenkategorie |
| **Wahrscheinlichkeit** | Lead-Qualitäts-Score von 0-100% |
| **KI-Begründung** | Erklärung, warum dieser Lead so bewertet wurde |
| **Kundengeschäft** | Identifizierter Geschäftstyp der Website |

### Schritt 4: Fortschritt überwachen

- Fortschrittsbalken zeigt Abschlussstatus für Stapeloperationen
- Ergebnisse werden in Echtzeit aktualisiert, während jede Website analysiert wird
- Analysestatus verfolgt jedes Ergebnis: ausstehend → analysierend → abgeschlossen/fehlgeschlagen

### Schritt 5: Nach Score filtern

Nach der Analyse:
- Verwenden Sie den Wahrscheinlichkeits-Score zur Priorisierung von Leads
- Konzentrieren Sie sich auf Leads mit 70%+ für die Akquise
- Filtern Sie Ergebnisse nach Branchenklassifikation

## KI-Kontaktinformationen-Extraktion

Extrahieren Sie Kontaktdaten direkt aus Ihren Suchergebnissen mittels KI:

### Schritt 1: Ergebnisse auswählen

1. Aktivieren Sie die Kontrollkästchen neben den Ergebnissen, aus denen Sie Kontaktinformationen extrahieren möchten
2. Klicken Sie auf die Schaltfläche **KI Kontaktinformationen extrahieren**

### Schritt 2: Extraktion überwachen

- Das System besucht jede ausgewählte URL und extrahiert Kontaktinformationen
- Die Extraktion läuft im Hintergrund mit Echtzeit-Fortschrittsaktualisierungen
- Der Status verfolgt jedes Ergebnis: ausstehend → analysierend → abgeschlossen/fehlgeschlagen

### Schritt 3: Extrahierte Kontakte anzeigen

Die extrahierten Informationen werden direkt in der Ergebnistabelle angezeigt:

| Feld | Beschreibung |
|-------|-------------|
| **E-Mail** | Extrahierte E-Mail-Adressen |
| **Telefon** | Extrahierte Telefonnummern |
| **Adresse** | Extrahierte physische Adressen |

Sie können einzelne Kontaktfelder direkt aus der Tabelle über die Kopier-Schaltflächen kopieren.

## E-Mail-Extraktion aus Suchergebnissen

Extrahieren Sie E-Mails direkt aus Ihren Suchergebnissen:

### Schritt 1: Ergebnisse auswählen

1. Aktivieren Sie die Kontrollkästchen neben Ergebnissen, die URLs enthalten, aus denen Sie E-Mails extrahieren möchten
2. Klicken Sie auf die Schaltfläche **E-Mails extrahieren**

### Schritt 2: Extraktion konfigurieren

Die ausgewählten URLs werden automatisch an die Funktion [E-Mail-Extraktion](./contact-extraction) übergeben.

### Schritt 3: Extrahierte E-Mails anzeigen

Navigieren Sie zum Bereich E-Mail-Extraktion, um die gesammelten E-Mails anzuzeigen.

## Suchergebnisse exportieren

### Als CSV exportieren

1. Wählen Sie Ergebnisse aus, die Sie exportieren möchten (oder lassen Sie es leer für alle)
2. Klicken Sie auf **Exportieren** → **CSV**
3. Speicherort wählen
4. Die Datei enthält alle Spalten aus der Ergebnistabelle, einschließlich KI-Analyse-Felder (Branche, Score, Begründung) und Kontaktinformationen (E-Mail, Telefon, Adresse)

### Fehlerprotokolle exportieren

Wenn ein Auftrag fehlschlägt:

1. Gehen Sie zu **Suche** → **Ergebnisliste**
2. Finden Sie den fehlgeschlagenen Auftrag
3. Klicken Sie auf **Protokolle herunterladen**
4. Überprüfen Sie die Protokolle zur Problemdiagnose

## Bewährte Praktiken

### 1. Klein beginnen

- Mit 5-10 Schlüsselwörtern beginnen
- Niedrige Parallelität verwenden (1-3)
- Ergebnisse überwachen, bevor skaliert wird

### 2. Proxys verwenden

- Immer Proxys für mehr als 10 Seiten verwenden
- Proxys rotieren, um die Last zu verteilen
- Proxys vor großen Aufträgen testen

### 3. KI-Funktionen nutzen

- Schlüsselwortgenerierung für erweiterte Abdeckung verwenden
- Klaren Geschäftskontext für genaueres KI-Scoring angeben
- KI-Analyse zum Bewerten und Klassifizieren von Leads ausführen
- KI-Kontaktextraktion für E-Mail, Telefon und Adresse verwenden
- Auf hoch bewertete Ergebnisse für Akquise konzentrieren

### 4. Engine-spezifische Tipps

**Google:**
- Authentifizierte Konten verwenden
- Lokalen Browser für große Aufgaben aktivieren
- KI-Wiederherstellung für robuste Fehlerbehandlung aktivieren
- Ratenlimits beachten (mit 1 gleichzeitigen starten)

**Bing:**
- Nachgiebiger als Google
- Höhere Parallelität möglich
- Gut für US-fokussierte Suchen

**Yandex:**
- **Lokalen Browser verwenden (zwingend)**
- Konten für besseren Zugang verwenden
- Unverzichtbar für russische/kyrillische Inhalte

### 5. Auftragsstatus überwachen

- Auftragsliste regelmäßig überprüfen
- Fehlerprotokolle bei Fehlern durchsehen
- Einstellungen basierend auf Ergebnissen anpassen

### 6. Ergebnisse organisieren

- Beschreibende Auftragsnamen verwenden
- Ergebnisse regelmäßig exportieren
- Alte Aufträge bereinigen

## Fehlerbehebung

### Auftragsstatus: "Fehler"

**Mögliche Ursachen:**
- Alle Proxys fehlgeschlagen
- Netzwerkverbindungsprobleme
- Suchmaschine hat Anfragen blockiert

**Lösungen:**
1. Proxy-Gesundheit im Proxy-Bereich überprüfen
2. Internetverbindung überprüfen
3. Parallelität reduzieren
4. Lokalen Browser aktivieren
5. Authentifizierte Konten verwenden
6. KI-Wiederherstellung für automatische Fehlerbehandlung aktivieren

### Keine Ergebnisse zurückgegeben

**Mögliche Ursachen:**
- Schlüsselwörter zu spezifisch
- Suchmaschine hat keine Ergebnisse zurückgegeben
- Paginierung außerhalb des Bereichs

**Lösungen:**
1. Breitere Schlüsselwörter versuchen
2. Ab Seite 1 beginnen
3. Überprüfen, ob Schlüsselwörter bei manueller Suche funktionieren

### Langsame Verarbeitung

**Mögliche Ursachen:**
- Hohe Parallelität ohne ausreichend Proxys
- Lokaler Browser aktiviert (langsamer, aber sicherer)
- Netzwerklatenz

**Lösungen:**
1. Mehr Proxys hinzufügen
2. Parallelität reduzieren
3. Lokalen Browser für Geschwindigkeit deaktivieren in Betracht ziehen (mit Vorsicht)

### Captcha oder Blockade erkannt

**Lösungen:**
1. Lokale Browser-Integration aktivieren
2. Authentifizierte Konten verwenden
3. Mehr Proxys hinzufügen
4. Anfragehäufigkeit reduzieren
5. Pausen zwischen großen Aufgaben einlegen
6. KI-Wiederherstellung aktivieren, um Blockaden automatisch zu behandeln

## Erweiterte Workflows

### Workflow 1: Umfassende Lead-Generierung

1. **Suchauftrag erstellen** mit breiten Schlüsselwörtern
2. **Verwandte Schlüsselwörter generieren** mittels KI
3. **Mit mittlerer Parallelität ausführen** (3-5)
4. **KI-Wiederherstellung aktivieren** für robuste Fehlerbehandlung
5. **Alle Ergebnisse mit KI analysieren** mit Ihrem Geschäftskontext
6. **Nach Wahrscheinlichkeits-Score filtern** (Fokus auf 70%+)
7. **KI Kontaktinformationen extrahieren** aus hoch bewerteten Ergebnissen
8. **Exportieren** für E-Mail-Kampagnen

### Workflow 2: Wettbewerbsanalyse

1. **Wettbewerbernamen suchen** + Branchen-Schlüsselwörter
2. **Lokalen Browser verwenden**, um Erkennung zu vermeiden
3. **KI analysieren** für Branchenklassifikation
4. **Exportieren** für Marktforschung

### Workflow 3: Lokale Unternehmensentdeckung

1. **Lokale Schlüsselwörter suchen** (z. B. "Klempner in Berlin")
2. **KI Kontaktinformationen extrahieren** aus Ergebnissen (E-Mail, Telefon, Adresse)
3. **Stapelanalyse** von Websites mit Ihrem Geschäftskontext
4. **Gezielte Akquise-Kampagnen** erstellen

## Integration mit anderen Funktionen

Suchergebnisse integrieren sich nahtlos mit:

- **[Kontaktextraktion](./contact-extraction)** — E-Mails aus URLs extrahieren
- **[Gelbe Seiten](./yellow-pages)** — Mit Verzeichnislistungen abgleichen
- **[KI-E-Mail-Writer](../ai-outreach/ai-email-writer)** — Personalisierte Akquise erstellen
- **[Batch-E-Mail-Versand](./batch-email-sending)** — Kampagnen starten

## Nächste Schritte

- [Gelbe-Seiten-Scraping kennenlernen](./yellow-pages)
- [Kontaktextraktion einrichten](./contact-extraction)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)

---

**Bereit, Leads zu finden?** Beginnen Sie mit einem kleinen Suchauftrag und skalieren Sie, sobald Sie sich mit dem System vertraut gemacht haben.
