---
id: yellow-pages
title: Gelbe-Seiten-Scraping
sidebar_label: Gelbe Seiten
description: Extrahieren Sie Geschäftsinformationen aus Gelben Seiten, Yelp und anderen Online-Verzeichnissen weltweit.
---

# Gelbe-Seiten-Scraping

Die Gelbe-Seiten-Scraping-Funktion von aiFetchly ermöglicht es Ihnen, umfassende Geschäftsinformationen aus mehreren Online-Verzeichnissen zu extrahieren. Sammeln Sie Leads aus lokalen Geschäftseinträgen mit detaillierten Kontaktinformationen, Bewertungen, Rezensionen und mehr. Mit KI-Unterstützung können Sie die Scraping-Genauigkeit verbessern und automatisch verwandte Schlüsselwörter generieren.

## Unterstützte Verzeichnisse

| Verzeichnis | Region | Sprache | Ratenlimit | Funktionen |
|-----------|--------|----------|------------|----------|
| **YellowPages.com** | USA | Englisch | 100 Anf./Std. | Geschäftsdetails, Bewertungen, Rezensionen, Öffnungszeiten |
| **Yelp.com** | USA | Englisch | 60 Anf./Std. | Rezensionen, Bewertungen, Fotos, detaillierte Extraktion |
| **YellowPages.ca** | Kanada | Englisch | 100 Anf./Std. | Kanadisches Geschäftsverzeichnis, Adressanalyse |
| **YellowPages.com.sg** | Singapur | Englisch | 100 Anf./Std. | Singapurer Geschäftslistungen |
| **192.com** | UK | Englisch | 100 Anf./Std. | UK-spezifisches Geschäftsverzeichnis |
| **11880.com** | Deutschland | Deutsch | 100 Anf./Std. | Deutsches Verzeichnis, Cookie-Einwilligungsbehandlung |
| **Gelbeseiten.de** | Deutschland | Deutsch | 100 Anf./Std. | Deutsche Gelbe Seiten, Shadow-Root-Behandlung |
| **PagesJaunes.fr** | Frankreich | Französisch | 100 Anf./Std. | Französische Gelbe Seiten, Standort erforderlich |
| **PagineGialle.it** | Italien | Italienisch | 100 Anf./Std. | Italienische Gelbe Seiten, Cookie-Einwilligung |
| **iTownPage** | Japan | Japanisch | 60 Anf./Std. | Japanisches Verzeichnis, Dialogbehandlung |
| **uSonar Yellow Page** | Japan | Japanisch | 60 Anf./Std. | Japanische Geschäftslistungen |
| **KoreaLocalPages** | Südkorea | Koreanisch | 60 Anf./Std. | Koreanisches lokales Geschäftsverzeichnis |

:::tip Ratenlimits

Jedes Verzeichnis hat spezifische Ratenlimits. aiFetchly verwaltet automatisch Anfrageverzögerungen, um diese Limits einzuhalten.

:::

:::info Plattform-Informationen

Beim Erstellen eines Auftrags wählen Sie eine Plattform aus dem Dropdown aus. Bei der Auswahl jeder Plattform sehen Sie eine Seitenleiste mit:
- Land-/Sprachunterstützung
- Ratenlimits
- Authentifizierungsanforderungen
- Ob ein Standort erforderlich ist

:::

## Einen Gelbe-Seiten-Auftrag erstellen

### Schritt 1: Zu Gelbe Seiten navigieren

1. Klicken Sie auf **Gelbe Seiten** im linken Navigationsmenü
2. Sie sehen die Gelbe-Seiten-Auftragsliste
3. Klicken Sie auf **Neuen Auftrag erstellen**

### Schritt 2: Grundlegende Informationen

Geben Sie die folgenden erforderlichen Informationen ein:

#### Auftragsname

- Geben Sie Ihrem Auftrag einen beschreibenden Namen
- Beispiel: "Restaurants in Berlin" oder "Klempner in München"

#### Plattformauswahl

Wählen Sie das Verzeichnis, das Sie scrapen möchten, aus dem Dropdown:

**Amerika:**
- YellowPages.com (USA)
- Yelp.com (USA)
- YellowPages.ca (Kanada)

**Europa:**
- 192.com (UK)
- 11880.com (Deutschland)
- Gelbeseiten.de (Deutschland)
- PagesJaunes.fr (Frankreich) — Standort erforderlich
- PagineGialle.it (Italien)

**Asien-Pazifik:**
- YellowPages.com.sg (Singapur)
- iTownPage (Japan)
- uSonar Yellow Page (Japan)
- KoreaLocalPages (Südkorea)

#### Schlüsselwörter

Geben Sie Ihre Suchbegriffe ein:
- **Format**: Komma-getrennt oder einer pro Zeile
- **Beispiele**: `Restaurant, Klempner, Zahnarzt, Marketingagentur`
- **Tipp**: Verwenden Sie spezifische Geschäftstypen oder -kategorien für bessere Ergebnisse

**KI-Schlüsselwörter abfragen** (Optional):
- Klicken Sie auf die Schaltfläche **KI-Schlüsselwörter abfragen** (lila, Roboter-Symbol) innerhalb des Schlüsselwort-Feldes
- aiFetchly verwendet KI, um verwandte Suchbegriffe basierend auf Ihren vorhandenen Schlüsselwörtern zu generieren
- Generierte Schlüsselwörter werden mit Ihren Originalen kombiniert, Duplikate automatisch entfernt
- Wenn keine Schlüsselwörter eingegeben sind, generiert die KI Vorschläge aus einem Standard-Seed-Begriff

#### Standort

Geben Sie den geografischen Standort für Ihre Suche ein:
- **Beispiele**: `Berlin, München, Hamburg`
- **Format**: Stadt, Bundesland oder Stadt, Region
- **Erforderlich**: Für die meisten Plattformen

### Schritt 3: Leistungseinstellungen

Konfigurieren Sie, wie der Scraping-Auftrag ausgeführt wird:

#### Maximale Seiten

- **Bereich**: 1-100 Seiten
- **Standard**: 10 Seiten
- **Empfehlung**: Mit 10-20 Seiten für Tests beginnen

**Was das bedeutet:**
- Jede Seite enthält typischerweise 20-30 Geschäftseinträge
- 10 Seiten = 200-300 potenzielle Leads
- Mehr Seiten = längere Verarbeitungszeit

#### Gleichzeitigkeit

- **Bereich**: 1-10 gleichzeitige Anfragen
- **Standard**: 2 gleichzeitige Anfragen
- **Höhere Werte**: Schneller, aber höheres Risiko der Blockierung

:::warning Parallelitätsrichtlinien

- Mit 1-3 gleichzeitigen Anfragen beginnen
- Bei Proxy-Verwendung schrittweise erhöhen
- Plattform-Ratenlimits beachten

:::

#### Verzögerung zwischen Anfragen

- **Bereich**: 0-10.000 Millisekunden
- **Standard**: 2000ms (2 Sekunden)
- **Zweck**: Verhindert Ratenbegrenzung und Blockierung

**Empfohlene Verzögerungen:**
- **Yelp.com**: 3000ms (strengere Ratenlimits)
- **Japanische Plattformen** (iTownPage, uSonar): 2500ms
- **Koreanische Plattformen** (KoreaLocalPages): 2500ms
- **Alle anderen**: 2000ms

### Schritt 4: Browser-Konfiguration

#### Headless-Modus

- **Aktiviert** (Standard): Browser läuft unsichtbar (schneller, empfohlen)
- **Deaktiviert**: Browser-Fenster sichtbar (nützlich für Debugging)

**Empfehlung**: Headless-Modus für Produktionsaufgaben aktiviert lassen.

#### KI-Unterstützung

Schalten Sie **KI-Unterstützung** um, um KI-gestützte Scraping-Assistenz zu aktivieren:

- Wenn aktiviert, hilft die KI, die Scraping-Genauigkeit zu verbessern und Sonderfälle zu behandeln
- Standardmäßig aktiviert, wenn Ihr Konto KI-Funktionen hat
- Suchen Sie nach dem lilafarbenen Roboter-Symbol neben dem Schalter

#### Lokaler Browser

Schalten Sie **Lokalen Browser verwenden** um, um Ihre lokale Chrome- oder Firefox-Installation für das Scraping zu nutzen:

1. **Lokaler Browser** umschalten, um zu aktivieren
2. **Chrome** oder **Firefox** aus dem Dropdown auswählen
3. **Vorteile**: Niedrigere Erkennungsraten, besserer Erfolg bei Anti-Bot-Schutzmaßnahmen

### Schritt 5: Optionale Funktionen

#### Kontoauswahl

Einige Plattformen unterstützen authentifiziertes Scraping:

1. **Konto verwenden** umschalten, falls verfügbar
2. Ein Konto aus Ihren gespeicherten Konten auswählen
3. Vorteile:
   - Höhere Erfolgsrate
   - Zugriff auf exklusive Inhalte für Mitglieder
   - Reduziertes Blockierungsrisiko

#### Proxy-Konfiguration

Proxys für groß angelegtes Scraping hinzufügen:

1. **Proxy verwenden** umschalten
2. Klicken Sie auf **Proxy wählen**
3. Einen oder mehrere Proxys aus Ihrer Liste auswählen
4. Klicken Sie auf **Bestätigen**

:::tip Wann Proxys verwenden

Proxys verwenden, wenn:
- Mehr als 50 Seiten gescrapt werden
- Gleichzeitige Aufträge ausgeführt werden
- Vorherige Aufträge blockiert wurden

:::

### Schritt 6: Planung (Optional)

#### Einmalige Planung

Ein bestimmtes Datum und eine Uhrzeit für die Auftragsausführung festlegen:
- Klicken Sie auf **Planen**
- Datum und Uhrzeit auswählen
- Auftrag wird automatisch zur geplanten Zeit ausgeführt

#### Wiederkehrende Planung

Automatisierte, wiederkehrende Aufträge einrichten:

**Vordefinierte Optionen:**
- Alle 15 Minuten
- Alle 30 Minuten
- Stündlich
- Alle 2 Stunden
- Alle 6 Stunden
- Alle 12 Stunden
- Täglich
- Wöchentlich
- Monatlich

**Benutzerdefinierte Planung:**
- Cron-Ausdrücke für erweiterte Planung verwenden
- Beispiel: `0 9 * * 1-5` (9 Uhr Montag-Freitag)

**Planungs-Vorschau:**
- Zeigt die nächste Ausführungszeit
- Zeigt Konfigurationszusammenfassung

### Schritt 7: Auftrag erstellen

Klicken Sie auf eine der Aktionsschaltflächen in der Seitenleiste:

- **Auftrag erstellen & starten** (Hauptschaltfläche): Erstellt den Auftrag und startet die Ausführung sofort
- **Nur Auftrag erstellen**: Speichert den Auftrag ohne Ausführung — Status wird "Ausstehend" sein

:::tip Auftrag-Vorschau

Während Sie das Formular ausfüllen, zeigt die **Auftrag-Vorschau**-Seitenleiste eine Live-Zusammenfassung Ihrer Konfiguration, einschließlich Auftragsname, Plattform, Schlüsselwortanzahl, Standort, maximale Seiten, Gleichzeitigkeit, Headless-Modus und lokaler Browserauswahl. Überprüfen Sie dies vor der Auftragserteilung.

:::

### Einen Auftrag bearbeiten

So ändern Sie einen vorhandenen Auftrag:

1. Gehen Sie zur **Gelbe Seiten**-Auftragsliste
2. Klicken Sie auf das **Bearbeiten**-Symbol (Bleistift) auf dem Auftrag
3. Ändern Sie die Konfiguration im Formular
4. Klicken Sie auf **Auftrag aktualisieren**, um die Änderungen zu speichern

## Gelbe-Seiten-Aufträge verwalten

### Auftragsliste anzeigen

Navigieren Sie zu **Gelbe Seiten**, um alle Ihre Aufträge zu sehen.

**Auftragslistenübersicht:**
- **Echtzeit-Statistiken**: Gesamt, laufend, ausstehend, abgeschlossen, fehlgeschlagen mit Erfolgsrate
- **Auto-Aktualisierung**: Aktualisiert alle 5 Sekunden; mit der Aktualisierungsschaltfläche ein-/ausschalten
- **Intelligente Pause**: Auto-Aktualisierung pausiert automatisch beim Wechseln von Browser-Tabs und wird beim Zurückkehren fortgesetzt

### Filterung und Suche

Verwenden Sie die Filterleiste, um Aufträge einzugrenzen:

| Filter | Beschreibung |
|--------|-------------|
| **Suche** | Nach Auftragsname oder Plattform suchen |
| **Status** | Filtern nach Ausstehend, Laufend, Abgeschlossen, Fehlgeschlagen, Pausiert |
| **Plattform** | Nach Verzeichnisplattform filtern |
| **Priorität** | Nach Hoher, Mittlerer, Niedriger Priorität filtern |

Aktive Filter werden als entfernbare Chips unter der Filterleiste angezeigt. Klicken Sie auf **Filter löschen**, um alle Filter zurückzusetzen.

### Auftragsstatus

| Status | Beschreibung | Aktion |
|--------|-------------|--------|
| **Ausstehend** | Auftrag erstellt, aber nicht gestartet | Starten, Bearbeiten, Löschen |
| **Laufend** | Auftrag wird gerade verarbeitet | Pausieren, Stoppen, Fortschritt anzeigen |
| **Pausiert** | Vorübergehend angehalten | Fortsetzen, Stoppen |
| **Abgeschlossen** | Erfolgreich beendet | Ergebnisse anzeigen, Löschen |
| **Fehlgeschlagen** | Mit Fehlern beendet | Protokolle anzeigen, Wiederholen, Löschen |

### Auftragsaktionen

| Aktion | Beschreibung |
|--------|-------------|
| **Starten** | Auftragsausführung beginnen |
| **Stoppen** | Laufenden Auftrag beenden |
| **Pausieren** | Auftrag vorübergehend aussetzen |
| **Fortsetzen** | Pausierten Auftrag fortsetzen |
| **Bearbeiten** | Auftragskonfiguration ändern |
| **Löschen** | Auftrag aus dem System entfernen |
| **Ergebnisse anzeigen** | Extrahierte Geschäftsdaten anzeigen |

### Cloudflare-Schutz-Warnung

Wenn ein Auftrag auf Cloudflare-Schutz stößt, zeigt aiFetchly eine Warnmeldung oben in der Auftragsliste an. Diese Warnung zeigt an, dass das Zielverzeichnis Anti-Bot-Maßnahmen aktiviert hat. Zur Behebung versuchen Sie, den lokalen Browser zu aktivieren, authentifizierte Konten zu verwenden oder Proxys hinzuzufügen.

### Massenoperationen

- **Mehrere starten**: Mehrere pausierte/fehlgeschlagene Aufträge auswählen und starten
- **Aufträge stoppen**: Mehrere laufende Aufträge stoppen
- **Aufträge löschen**: Mehrere abgeschlossene/fehlgeschlagene Aufträge entfernen

## Ergebnisse anzeigen

### Schritt 1: Ergebnisse aufrufen

1. Gehen Sie zur **Gelbe Seiten**-Auftragsliste
2. Finden Sie den abgeschlossenen Auftrag
3. Klicken Sie auf **Ergebnisse anzeigen**, um die Ergebnisseite zu öffnen

### Schritt 2: Auftragszusammenfassungs-Karte

Die Ergebnisseite zeigt eine **Auftragszusammenfassungs-Karte** oben mit:
- **Plattform**: Welches Verzeichnis gescrapt wurde
- **Gesamtergebnisse**: Anzahl der extrahierten Unternehmen
- **Status**: Aktueller Auftragsstatus (farbcodiert)
- **Erstellungszeit**: Wann der Auftrag erstellt wurde
- **Schlüsselwörter**: Als Chips für einfache Überprüfung angezeigt
- **Standort**: Das durchsuchte geografische Gebiet

### Schritt 4: Ergebnistabelle

Die Ergebnistabelle zeigt umfassende Geschäftsinformationen:

| Spalte | Beschreibung |
|--------|-------------|
| **Unternehmensname** | Name des Unternehmens |
| **Kategorien** | Geschäftskategorien (visuelle Chips) |
| **E-Mail** | E-Mail-Adresse mit Kopier-Schaltfläche |
| **Telefon** | Telefonnummer mit Kopier-Schaltfläche |
| **Website** | Anklickbarer Link zur Website |
| **Adresse** | Vollständige Adresse mit Karten-Symbol |
| **Bewertungen** | Sternebewertung mit Rezensionsanzahl |
| **Beschreibung** | Unternehmensbeschreibung |
| **Öffnungszeiten** | Geschäftszeiten (falls verfügbar) |
| **Gründungsjahr** | Jahr der Unternehmensgründung |
| **Mitarbeiterzahl** | Anzahl der Mitarbeiter |
| **Extrahiert am** | Zeitstempel der Datenextraktion |

### Schritt 5: Mit Ergebnissen interagieren

**Einzelaktionen:**
- **E-Mail kopieren**: E-Mail-Adresse in die Zwischenablage kopieren
- **Telefon kopieren**: Telefonnummer in die Zwischenablage kopieren
- **Website öffnen**: Unternehmenswebsite in neuem Tab öffnen
- **Details anzeigen**: Vollständigen Geschäftseintrag im Modal anzeigen

**Suche & Filter:**
- **Suche**: Nach Unternehmensname, E-Mail, Telefon, Website oder Adresse filtern
- **Kategorie-Filter**: Ergebnisse nach Geschäftskategorien filtern
- **Paginierung**: Durch große Ergebnismengen navigieren

## Ergebnisse exportieren

### Als CSV exportieren

1. Klicken Sie auf **Exportieren** in der Ergebnisansicht
2. Datei wird automatisch im CSV-Format heruntergeladen
3. Dateiname enthält Auftrags-ID und Datum

**Exportierte Daten enthalten:**
- Unternehmensname und Kategorien
- Kontaktdetails (E-Mail, Telefon, Website)
- Adresse und Standort
- Bewertungen und Rezensionen
- Geschäftszeiten
- Zusätzliche Metadaten

## Bewährte Praktiken

### 1. Schlüsselwort-Strategie

- **Seien Sie spezifisch**: Verwenden Sie spezifische Geschäftstypen anstelle generischer Begriffe
  - Falsch: "Dienstleistungen"
  - Richtig: "Marketingagentur" oder "Klempner-Dienstleistungen"

- **Synonyme verwenden**: Verschiedene Begriffe für denselben Geschäftstyp ausprobieren
  - "Restaurant" und "Gaststätte"
  - "Klempner" und "Sanitär-Service"

### 2. Standort-Targeting

- **Präzise sein**: Verwenden Sie das Format "Stadt, Bundesland"
  - Richtig: "Berlin, BE"
  - Richtig: "München, BY"
  - Falsch: "Berlin" (kann mehrdeutige Ergebnisse liefern)

- **Breit beginnen, dann eingrenzen**:
  1. In einer großen Stadt suchen (Tausende Ergebnisse)
  2. Ergebnisse exportieren
  3. In spezifischen Stadtteilen suchen

### 3. Leistungsoptimierung

**Für kleine Aufträge** (< 100 Seiten):
- Gleichzeitigkeit: 1-3
- Verzögerung: 2000ms
- Kein Proxy erforderlich

**Für mittlere Aufträge** (100-500 Seiten):
- Gleichzeitigkeit: 3-5
- Verzögerung: 2000ms
- 2-3 Proxys verwenden

**Für große Aufträge** (500+ Seiten):
- Gleichzeitigkeit: 5-10
- Verzögerung: 2000ms
- 5+ Proxys verwenden
- Aufteilung in mehrere Aufträge in Betracht ziehen

### 4. Blockaden vermeiden

1. **Ratenlimits beachten**: Empfohlene Gleichzeitigkeit nicht überschreiten
2. **Verzögerungen verwenden**: Anfrageverzögerungen bei 2000ms oder höher halten
3. **Proxys rotieren**: Anfragen über mehrere IPs verteilen
4. **Konten verwenden**: Authentifiziertes Scraping hat höhere Limits
5. **Pausen einlegen**: Keine großen Aufträge kontinuierlich ausführen
6. **KI-Unterstützung aktivieren**: KI kann helfen, Anti-Bot-Schutz zu behandeln
7. **Lokalen Browser verwenden**: Echter Browser-Fingerabdruck reduziert Erkennungsrisiko

### 5. Datenqualität

- **Ergebnisse verifizieren**: Stichprobenartig extrahierte Daten auf Genauigkeit überprüfen
- **Kategorien filtern**: Kategoriefilter verwenden, um irrelevante Ergebnisse zu entfernen
- **Abgleichen**: Daten von mehreren Plattformen kombinieren
- **Regelmäßige Aktualisierung**: Geschäftsinformationen ändern sich, Daten regelmäßig aktualisieren

## Plattform-spezifische Tipps

### YellowPages.com (USA)

**Stärken:**
- Umfassende Geschäftseinträge
- Akkurate Kontaktinformationen
- Gute Abdeckung über alle Bundesstaaten

**Tipps:**
- Stadt + Bundesland für beste Ergebnisse verwenden
- Enthält Geschäftszeiten und Dienstleistungen
- Gut für B2C-Unternehmen

### Yelp.com (USA)

**Stärken:**
- Reichhaltige Rezensionsdaten
- Fotos und detaillierte Beschreibungen
- Benutzererstellte Inhalte

**Tipps:**
- Strengere Ratenlimits (3000ms Verzögerung verwenden)
- Hervorragend für Dienstleistungsunternehmen
- Rezensionsdaten helfen bei der Lead-Qualifizierung

### YellowPages.ca (Kanada)

**Stärken:**
- Kanada-spezifische Einträge
- Kanadische Geschäftsverifizierung

**Tipps:**
- Unverzichtbar für den kanadischen Markt
- Format "Stadt, Provinz" verwenden

### YellowPages.com.sg (Singapur)

**Stärken:**
- Singapurer Geschäftsverzeichnis
- Umfassende lokale Einträge

**Tipps:**
- Stadt- oder Bezirksnamen für den Standort verwenden
- Gut für südostasiatische Marktforschung

### 192.com (UK)

**Stärken:**
- UK-spezifisches Geschäfts- und Personenverzeichnis
- Gute Abdeckung im gesamten Vereinigten Königreich

**Tipps:**
- UK-Stadt- und Postleitzahlformat verwenden
- Gut für UK-B2B-Akquise

### 11880.com (Deutschland)

**Stärken:**
- Deutsches Geschäftsverzeichnis
- Behandelt Cookie-Einwilligungen automatisch

**Tipps:**
- Deutsche Stadtnamen für beste Ergebnisse verwenden
- Gut für DACH-Marktforschung

### Gelbeseiten.de (Deutschland)

**Stärken:**
- Deutsche Gelbe Seiten
- Umfassende Geschäftseinträge in Deutschland
- Behandelt komplexe Cookie-Einwilligungs-Dialoge

**Tipps:**
- Deutsche Schlüsselwörter für beste Ergebnisse verwenden
- Unverzichtbar für den deutschen Markt

### PagesJaunes.fr (Frankreich)

**Stärken:**
- Französische Gelbe Seiten
- Telefonnummer-Anzeigefunktion
- Umfassende französische Geschäftseinträge

**Tipps:**
- **Standort ist erforderlich** für diese Plattform
- Französische Stadtnamen und Postleitzahlen verwenden
- Gut für französische Markterschließung

### PagineGialle.it (Italien)

**Stärken:**
- Italienische Gelbe Seiten
- Umfassendes italienisches Geschäftsverzeichnis
- Behandelt Cookie-Einwilligungen automatisch

**Tipps:**
- Italienische Stadtnamen für den Standort verwenden
- Gut für italienische Marktforschung

### iTownPage (Japan)

**Stärken:**
- Japanisches Geschäftsverzeichnis
- Behandelt Dialog-Popups automatisch
- Japanische Cookie-Einwilligungsverwaltung

**Tipps:**
- Japanische Schlüsselwörter für beste Ergebnisse verwenden
- Unverzichtbar für die Entdeckung japanischer lokaler Unternehmen
- 2500ms Verzögerung verwenden (60 Anf./Std. Ratenlimit)

### uSonar Yellow Page (Japan)

**Stärken:**
- Alternatives japanisches Geschäftsverzeichnis
- Gut zum Abgleich mit iTownPage

**Tipps:**
- Zusammen mit iTownPage für breitere Abdeckung verwenden
- 2500ms Verzögerung verwenden

### KoreaLocalPages (Südkorea)

**Stärken:**
- Koreanisches lokales Geschäftsverzeichnis
- Gut für Markteintrittsrecherche in Südkorea

**Tipps:**
- Koreanische Schlüsselwörter für beste Ergebnisse verwenden
- 2500ms Verzögerung verwenden (60 Anf./Std. Ratenlimit)
- Gut zur Entdeckung koreanischer Unternehmen

## Integration mit E-Mail-Marketing

Extrahierte Geschäfts-E-Mails können direkt in E-Mail-Kampagnen verwendet werden:

1. **Ergebnisse exportieren** aus dem Gelbe-Seiten-Auftrag
2. Navigieren Sie zu **E-Mail-Marketing** → **Massen-E-Mails senden**
3. **CSV importieren** mit extrahierten E-Mails
4. **Vorlage erstellen** für Ihre Akquise
5. **Kampagne starten**

Ausführliche Anleitungen finden Sie unter [Batch-E-Mail-Versand](./batch-email-sending).

## Fehlerbehebung

### Auftragsstatus: "Fehlgeschlagen"

**Mögliche Ursachen:**
- Alle Proxys fehlgeschlagen
- Netzwerkverbindungsprobleme
- Plattform hat Anfragen blockiert
- Ungültige Schlüsselwörter oder Standort

**Lösungen:**
1. Proxy-Gesundheit überprüfen
2. Internetverbindung überprüfen
3. Gleichzeitigkeit reduzieren und Verzögerung erhöhen
4. Andere Schlüsselwörter/Standort versuchen
5. Konto-Authentifizierung aktivieren
6. KI-Unterstützung für intelligentere Fehlerbehandlung aktivieren
7. Lokalen Browser verwenden, um Anti-Bot-Schutz zu umgehen

### Keine Ergebnisse zurückgegeben

**Mögliche Ursachen:**
- Schlüsselwörter zu spezifisch
- Standort hat keine passenden Unternehmen
- Plattform hat keine Ergebnisse zurückgegeben

**Lösungen:**
1. Breitere Schlüsselwörter versuchen
2. Standort-Schreibweise überprüfen
3. Manuell prüfen, ob Unternehmen auf der Plattform existieren
4. Nahegelegene Standorte versuchen

### Langsame Verarbeitung

**Mögliche Ursachen:**
- Hohe Einstellung für maximale Seiten
- Konservative Verzögerungseinstellungen
- Plattform-Ratenlimits

**Lösungen:**
1. Maximale Seiten reduzieren
2. Verzögerung leicht reduzieren (mit Vorsicht)
3. Gleichzeitigkeit erhöhen (bei Proxy-Verwendung)

### Unvollständige Daten

**Mögliche Ursachen:**
- Geschäftseinträge mit fehlenden Informationen
- Plattform-Layout-Änderungen

**Lösungen:**
1. Einige Unternehmen verfügen natürlich über bestimmte Daten nicht
2. Mit anderen Plattformen abgleichen
3. Plattform-Probleme an den Support melden

## Erweiterte Workflows

### Workflow 1: Lokale Unternehmens-Akquise

1. **Suchen** nach Unternehmen an Ihrem Zielstandort
2. **Filtern** nach Kategorie und Bewertungen
3. **Exportieren** von hochwertigen Leads
4. **Importieren** in E-Mail-Marketing
5. **Personalisierte Kampagne erstellen** mit dem KI-E-Mail-Writer

### Workflow 2: Wettbewerbsanalyse

1. **Wettbewerber scrapen** an mehreren Standorten
2. **Bewertungen und Rezensionen analysieren**
3. **Service-Lücken identifizieren**
4. **Unterversorgte Gebiete gezielt ansprechen**

### Workflow 3: Marktforschung

1. **Alle Unternehmen** einer Branche extrahieren
2. **Verteilung und Muster analysieren**
3. **Marktopportunitäten identifizieren**
4. **Expansionsstrategie planen**

## Vergleich: Suchmaschinen vs. Gelbe Seiten

| Funktion | Suchmaschinen | Gelbe Seiten |
|---------|---------------|--------------|
| **Am besten für** | Websites finden, allgemeine Recherche | Lokale Unternehmen, verifizierte Einträge |
| **Datenqualität** | Variiert | Strukturiert, verifiziert |
| **Kontaktinformationen** | Erfordert Extraktion | Vorab extrahierte E-Mails/Telefonnummern |
| **Geografisches Targeting** | Schlüsselwortbasiert | Standortbasiert |
| **Bewertungen/Rezensionen** | Manchmal | Immer (Yelp) |
| **Geschäftszeiten** | Selten | Häufig |

:::tip Beide Strategien verwenden

Kombinieren Sie beide Ansätze:
1. **Suchmaschinen** verwenden, um branchenspezifische Websites zu finden
2. **Gelbe Seiten** verwenden, um lokale Unternehmen zu finden
3. Für umfassende Abdeckung abgleichen

:::

## Nächste Schritte

- [E-Mail-Extraktion kennenlernen](./contact-extraction)
- [KI-gestützte E-Mail-Kampagnen einrichten](../ai-outreach/ai-email-writer)
- [Aufgabenplanung konfigurieren](../automation/task-scheduling)

---

**Bereit, lokale Unternehmen zu finden?** Beginnen Sie mit einem kleinen Auftrag, um sich mit dem Prozess vertraut zu machen, und skalieren Sie dann Ihre Aktivitäten.
