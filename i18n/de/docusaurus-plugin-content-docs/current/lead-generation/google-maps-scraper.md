---
id: google-maps-scraper
title: Local Business Finder
sidebar_label: Local Business Finder
description: Extrahieren Sie Unternehmensinformationen aus Google Maps nach Schlagwort und Standort mit dem Local Business Finder von aiFetchly.
---

# Local Business Finder

Der Local Business Finder von aiFetchly ermöglicht die Suche nach lokalen Unternehmen auf Google Maps anhand von Schlagwort und Standort. Sammeln Sie umfassende Unternehmensdaten wie Namen, Kategorien, Bewertungen, Rezensionen, Adressen, Telefonnummern und Website-URLs — alles direkt aus den Google Maps-Suchergebnissen.

## Übersicht

Der Local Business Finder bietet eine übersichtliche Oberfläche zur Extraktion lokaler Unternehmensdaten:

1. **Schlagwort eingeben** (z. B. „Zahnarzt", „Italienisches Restaurant")
2. **Standort eingeben** (z. B. „Berlin", „London", „90210")
3. **Optionen konfigurieren** (maximale Ergebnisse, Website-Einbindung, Rezensionen usw.)
4. **Suche starten** und den Fortschritt in Echtzeit verfolgen
5. **Ergebnisse exportieren** als CSV oder JSON

:::tip Am besten geeignet für

Der Local Business Finder eignet sich ideal zur Suche nach lokalen Unternehmen mit strukturierten Daten wie verifizierten Adressen, Telefonnummern, Bewertungen und Geschäftszeiten — Informationen, die zuverlässiger sind als allgemeine Webergebnisse.

:::

## Aufrufen des Local Business Finders

1. Klicken Sie auf **Google Maps** im linken Navigationsmenü
2. Der Assistant öffnet sich mit zwei Registerkarten: **Suche** und **Verlauf**

## Suche ausführen

### Schritt 1: Suchkriterien eingeben

#### Unternehmens-Schlagwort (Erforderlich)

Geben Sie einen Unternehmenstyp oder Namen ein, nach dem gesucht werden soll:

- **Beispiele**: `Zahnarzt`, `Italienisches Restaurant`, `Klempner`, `Marketingagentur`
- **Tipp**: Verwenden Sie spezifische Unternehmenstypen für gezieltere Ergebnisse

#### Standort (Erforderlich)

Geben Sie eine Stadt, Adresse oder Postleitzahl ein:

- **Beispiele**: `Berlin`, `London`, `90210`, `Paris, Frankreich`
- **Tipp**: Je spezifischer der Standort, desto relevanter die Ergebnisse

### Schritt 2: Suchoptionen konfigurieren

#### Maximale Ergebnisse

- **Bereich**: 1–50 Ergebnisse
- **Standard**: 20 Ergebnisse
- Passen Sie den Schieberegler an, um zu steuern, wie viele Unternehmen extrahiert werden

#### Website einbeziehen

- **Aktiviert** (Standard): Versucht, die Website-URL des Unternehmens zu extrahieren
- **Deaktiviert**: Überspringt die Website-Extraktion für schnellere Ergebnisse

#### Rezensionen einbeziehen

- **Deaktiviert** (Standard): Gibt nur grundlegende Unternehmensdaten zurück
- **Aktiviert**: Bezieht Rezensionsdaten in die Ergebnisse ein (erhöht die Verarbeitungszeit)

#### Browser anzeigen

- **Deaktiviert** (Standard): Browser läuft im Headless-Modus (schneller)
- **Aktiviert**: Browserfenster ist beim Information Organization sichtbar (nützlich zur Fehlerbehebung)

:::warning Browser anzeigen

Wenn Sie diese Option aktivieren, wird das Browserfenster während der Suche auf Ihrem Bildschirm angezeigt. Dies ist nur zur Fehlerbehebung gedacht und kann den Information Organization-Prozess verlangsamen.

:::

### Schritt 3: Konto- und Proxy-Einstellungen (Optional)

#### Google-Konto

Wählen Sie ein Google-Konto aus, um dessen Cookies für authentifiziertes Information Organization zu verwenden:

- **Vorteile**:
  - Höhere Erfolgsquote
  - Zugriff auf detailliertere Unternehmensinformationen
  - Verringertes Risiko einer Blockierung
- Im Dropdown-Menü werden nur Google-Konten angezeigt

:::tip Konten hinzufügen

Um Google-Konten hinzuzufügen, navigieren Sie zu **Einstellungen** und konfigurieren Sie Ihre Social-Konten. Details finden Sie unter [Systemeinstellungen](../settings/system-settings).

:::

#### Proxys

Wählen Sie einen oder mehrere Proxys aus, die während der Suche rotiert werden sollen:

- **Vorteile**:
  - Verteilt Anfragen über mehrere IPs
  - Verringert das Erkennungsrisiko
  - Unverzichtbar für groß angelegtes Information Organization
- Wählen Sie mehrere Proxys für die automatische Rotation pro Anfrage

### Schritt 4: Suche starten

1. Klicken Sie auf **Suche starten**, um zu beginnen
2. Eine Fortschrittsanzeige erscheint und zeigt den Information Organization-Status in Echtzeit
3. Die Suche läuft asynchron — Sie können andere Funktionen weiterhin nutzen
4. Bis zu **3 gleichzeitige Suchen** können parallel ausgeführt werden

:::info Gleichzeitige Suchen

Sie können bis zu 3 Google Maps-Suchen gleichzeitig ausführen. Wenn Sie versuchen, eine 4. zu starten, werden Sie aufgefordert, auf den Abschluss einer laufenden Suche zu warten.

:::

### Suche abbrechen

Wenn eine Suche zu lange dauert oder Sie diese stoppen möchten:

- Klicken Sie auf die Schaltfläche **Abbrechen**, die während einer laufenden Suche angezeigt wird
- Teilweise Ergebnisse, die vor dem Abbruch gesammelt wurden, bleiben erhalten

## Ergebnisse anzeigen

Sobald eine Suche abgeschlossen ist, werden die Ergebnisse in einer Datentabelle angezeigt.

### Ergebnistabelle

| Spalte | Beschreibung |
|--------|-------------|
| **Name** | Unternehmensname (klickbarer Link zu Google Maps, falls verfügbar) |
| **Kategorie** | Unternehmenskategorie (z. B. „Restaurant", „Zahnarzt") |
| **Bewertung** | Sternebewertung (mit Stern-Symbol) |
| **Rezensionen** | Anzahl der Rezensionen |
| **Adresse** | Vollständige Unternehmensadresse |
| **Telefon** | Telefonnummer |
| **Website** | Klickbarer Link zur Unternehmenswebsite (gekürzt) |

:::tip Auf Unternehmensnamen klicken

Unternehmensnamen mit einem Google Maps-Link sind klickbar — sie öffnen den Unternehmenseintrag auf Google Maps in einem neuen Tab.

:::

### Kopfzeile der Suchergebnisse

Die Kopfzeile zeigt:

- Gesamtzahl der gefundenen Unternehmen
- Das verwendete Such-Schlagwort
- Den durchsuchten Standort

### Keine Ergebnisse

Wenn keine Unternehmen gefunden werden, wird eine Meldung angezeigt, die darauf hinweist, dass keine Ergebnisse für Ihre Suchkriterien vorliegen. Versuchen Sie:

- Breitere Schlagwörter zu verwenden
- Den Standortbereich zu erweitern
- Die Einstellung für maximale Ergebnisse zu erhöhen

## Ergebnisse exportieren

### Als CSV exportieren

1. Klicken Sie auf **CSV exportieren** in der Kopfzeile der Ergebnisse
2. Eine CSV-Datei wird automatisch heruntergeladen
3. Der Dateiname enthält das Schlagwort und den Standort (z. B. `google-maps-Zahnarzt-Berlin.csv`)

**CSV-Spalten umfassen:**
Name, Kategorie, Bewertung, Rezensionsanzahl, Adresse, Telefon, Website, Öffnungszeiten, Maps-URL

### Als JSON exportieren

1. Klicken Sie auf **JSON exportieren** in der Kopfzeile der Ergebnisse
2. Eine JSON-Datei mit den vollständigen Ergebnisdaten wird heruntergeladen
3. Der Dateiname folgt der gleichen Konvention wie bei CSV-Exporten

## Suchverlauf

Die Registerkarte **Verlauf** speichert alle Ihre vergangenen Google Maps-Suchen.

### Verlauf anzeigen

1. Klicken Sie auf die Registerkarte **Verlauf**
2. Eine Tabelle zeigt alle bisherigen Suchen

| Spalte | Beschreibung |
|--------|-------------|
| **Abfrage** | Das verwendete Such-Schlagwort |
| **Standort** | Der durchsuchte Standort |
| **Ergebnisse** | Gesamtzahl der gefundenen Unternehmen |
| **Datum** | Wann die Suche durchgeführt wurde |
| **Aktionen** | Anzeigen oder Löschen |

### Verwaltungsaktionen

- **Anzeigen** (Augen-Symbol): Lädt die historischen Ergebnisse in die Registerkarte „Suche"
- **Löschen** (Papierkorb-Symbol): Entfernt den Suchdatensatz dauerhaft

### Verlauf aktualisieren

- Klicken Sie auf die Schaltfläche **Aktualisieren**, um die Verlaufsliste neu zu laden
- Der Verlauf wird automatisch geladen, wenn Sie auf die Registerkarte „Verlauf" klicken

## Bewährte Methoden

### 1. Schlagwort-Strategie

- **Seien Sie spezifisch**: Verwenden Sie präzise Unternehmenstypen
  - ✅ `Italienisches Restaurant`
  - ❌ `Essen`
- **Varianten ausprobieren**: Suchen Sie mit mehreren Begriffen für eine umfassende Abdeckung
  - `Zahnarzt` und `Zahnklinik`
  - `Klempner` und `Klempnerservice`

### 2. Standort-Targeting

- **Verwenden Sie spezifische Standorte** für bessere Ergebnisse:
  - ✅ `Mitte, Berlin`
  - ✅ `90210`
  - ❌ `Deutschland`
- **Durchsuchen Sie mehrere Gebiete**, um eine breitere Region abzudecken:
  - Führen Sie separate Suchen für jeden Stadtteil oder Bezirk durch

### 3. Einstellung für maximale Ergebnisse

- **Schnelltest**: Auf 5–10 Ergebnisse setzen, um Ihre Suche zu überprüfen
- **Standardsuche**: 20 Ergebnisse (Standard)
- **Umfassend**: 50 Ergebnisse für eine gründliche Abdeckung

### 4. Proxys verwenden

- **Einzelne Suche**: Proxy nicht erforderlich
- **Mehrere aufeinanderfolgende Suchen**: 1–2 Proxys verwenden
- **Groß angelegtes Information Organization**: 3+ Proxys mit Rotation verwenden

### 5. Google-Konten verwenden

- **Empfohlen** für Suchen mit 30+ Ergebnissen
- **Unverzichtbar** beim Information Organization beliebter Gebiete mit vielen Unternehmen
- Konten mit aktiver Google Maps-Nutzung liefern bessere Ergebnisse

## Fehlerbehebung

### Suche fehlgeschlagen

**Mögliche Ursachen:**
- Netzwerkverbindungsprobleme
- Google Maps hat die Anfrage blockiert
- Ungültiges Schlagwort oder Standort

**Lösungen:**
1. Überprüfen Sie Ihre Internetverbindung
2. Versuchen Sie ein anderes Schlagwort oder einen anderen Standort
3. Verwenden Sie ein Google-Konto für authentifizierten Zugriff
4. Aktivieren Sie Proxys für IP-Rotation
5. Reduzieren Sie die Einstellung für maximale Ergebnisse

### Keine Ergebnisse gefunden

**Mögliche Ursachen:**
- Das Schlagwort passt zu keinem Unternehmen in der Umgebung
- Der Standort ist zu spezifisch oder zu vage
- Google Maps hat leere Ergebnisse zurückgegeben

**Lösungen:**
1. Versuchen Sie breitere Schlagwörter (z. B. `Restaurant` statt `Italienisches Restaurant`)
2. Verwenden Sie eine größere Stadt oder einen breiteren Bereich
3. Überprüfen Sie manuell auf Google Maps, ob der Unternehmenstyp in der Umgebung existiert

### Teilweise Ergebnisse

**Mögliche Ursachen:**
- Die Suche wurde vor Abschluss abgebrochen
- Einige Unternehmenseinträge enthielten nicht die erforderlichen Daten
- Ratenbegrenzung während des Information Organization aufgetreten

**Lösungen:**
1. Lassen Sie die Suche vollständig abschließen
2. Führen Sie eine weitere Suche für das verbleibende Gebiet durch
3. Verwenden Sie Proxys, um Ratenbegrenzungen zu vermeiden

## Integration mit anderen Funktionen

Die Ergebnisse des Local Business Finders können verwendet werden mit:

- **[Kontaktextraktion](./contact-extraction)** — E-Mails von Unternehmenswebsites aus den Ergebnissen extrahieren
- **[Gelbe Seiten](./yellow-pages)** — Abgleich mit Verzeichniseinträgen für umfassendere Daten
- **[KI-E-Mail-Writer](../ai-outreach/ai-email-writer)** — Personalisierte E-Mails für die Kontaktaufnahme mit den gesammelten Unternehmensdaten erstellen
- **[Stapel-E-Mail-Versand](./batch-email-sending)** — E-Mail-Kampagnen mit extrahierten Kontaktinformationen starten

## Nächste Schritte

- [Informationen zum Local Business Finder](./yandex-maps-scraper)
- [E-Mail-Extraktion einrichten](./contact-extraction)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)
