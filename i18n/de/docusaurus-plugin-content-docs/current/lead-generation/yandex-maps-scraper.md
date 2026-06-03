---
id: yandex-maps-scraper
title: Yandex Maps Scraper
sidebar_label: Yandex Maps
description: Extrahieren Sie Unternehmensinformationen aus Yandex Maps nach Schlagwort und Standort mit dem Yandex Maps Scraper von aiFetchly — ideal für den russischen und GUS-Markt.
---

# Yandex Maps Scraper

Der Yandex Maps Scraper von aiFetchly ermöglicht die Suche nach lokalen Unternehmen auf Yandex Maps anhand von Schlagwort und Standort. Er ist das ideale Werkzeug zur Erfassung von Unternehmensdaten aus dem russischen und GUS-Markt und unterstützt die Anpassung von Sprache und Region.

## Übersicht

Der Yandex Maps Scraper bietet eine umfassende Extraktion lokaler Unternehmensdaten:

1. **Schlagwort eingeben** (z. B. „Zahnarzt", „Restaurant")
2. **Standort eingeben** (z. B. „Moskau", „Sankt Petersburg", „Russland")
3. **Optionen konfigurieren** (Sprache, Region, maximale Ergebnisse usw.)
4. **Suche starten** und den Fortschritt in Echtzeit verfolgen
5. **Ergebnisse exportieren** als CSV, JSON oder in die Zwischenablage kopieren

:::tip Am besten geeignet für

Der Yandex Maps Scraper ist unverzichtbar für Unternehmen, die den russischen Markt und die GUS-Länder erschließen möchten. Yandex Maps bietet eine überlegene Abdeckung lokaler Unternehmen in Russland, Kasachstan, Belarus, der Türkei und anderen Regionen, in denen Yandex tätig ist.

:::

## Aufrufen des Yandex Maps Scrapers

1. Klicken Sie auf **Yandex Maps** im linken Navigationsmenü
2. Der Scraper öffnet sich mit zwei Registerkarten: **Suche** und **Verlauf**

## Suche ausführen

### Schritt 1: Suchkriterien eingeben

#### Unternehmens-Schlagwort (Erforderlich)

Geben Sie einen Unternehmenstyp oder Namen ein, nach dem gesucht werden soll:

- **Beispiele**: `Zahnarzt`, `Restaurant`, `Klempner`, `Marketingagentur`
- **Tipp**: Schlagwörter funktionieren am besten in der lokalen Sprache (z. B. russische Schlagwörter für russische Standorte)

#### Standort (Erforderlich)

Geben Sie eine Stadt oder Region ein, in der gesucht werden soll:

- **Beispiele**: `Moskau`, `Sankt Petersburg`, `Russland`, `Almaty, Kasachstan`
- **Tipp**: Je spezifischer der Standort, desto relevanter die Ergebnisse

### Schritt 2: Suchoptionen konfigurieren

#### Maximale Ergebnisse

- **Bereich**: 1–50 Ergebnisse
- **Standard**: 20 Ergebnisse
- Passen Sie den Schieberegler an, um zu steuern, wie viele Unternehmen extrahiert werden

:::info Ergebnislimit

Die maximale Anzahl an Ergebnissen ist auf ein sicheres Limit begrenzt, um eine zuverlässige Extraktion zu gewährleisten. Der Schieberegler-Bereich von 1–50 ist der vom Benutzer konfigurierbare Bereich.

:::

#### Website einbeziehen

- **Aktiviert** (Standard): Versucht, die Website-URL des Unternehmens zu extrahieren
- **Deaktiviert**: Überspringt die Website-Extraktion für schnellere Ergebnisse

#### Rezensionen einbeziehen

- **Deaktiviert** (Standard): Gibt nur grundlegende Unternehmensdaten zurück
- **Aktiviert**: Bezieht Rezensionsdaten in die Ergebnisse ein (erhöht die Verarbeitungszeit)

#### Browser anzeigen

- **Deaktiviert** (Standard): Browser läuft im Headless-Modus (schneller)
- **Aktiviert**: Browserfenster ist beim Scraping sichtbar (nützlich zur Fehlerbehebung)

### Schritt 3: Sprach- und Regionseinstellungen (Optional)

Diese Einstellungen sind spezifisch für Yandex Maps und helfen, Ihren Suchkontext anzupassen.

#### Sprache

- Legen Sie den Sprachcode für die Yandex Maps-Oberfläche fest
- **Beispiele**: `ru` (Russisch), `en` (Englisch), `tr` (Türkisch)
- Leer lassen, um die Standardsprache zu verwenden
- **Tipp**: Verwenden Sie die lokale Sprache für bessere Suchergebnisse in der jeweiligen Region

#### Region

- Legen Sie den Regionscode für den Suchkontext fest
- **Beispiele**: `ru` (Russland), `kz` (Kasachstan), `by` (Belarus)
- Leer lassen, um die Standardregion zu verwenden
- **Tipp**: Die Einstellung der korrekten Region verbessert die Genauigkeit der Ergebnisse

### Schritt 4: Konto- und Proxy-Einstellungen (Optional)

#### Yandex-Konto

Wählen Sie ein Yandex-Konto aus, um dessen Cookies für authentifiziertes Scraping zu verwenden:

- **Vorteile**:
  - Höhere Erfolgsquote
  - Zugriff auf detailliertere Unternehmensinformationen
  - Verringertes Risiko einer Blockierung
- Im Dropdown-Menü werden nur Yandex-Konten angezeigt

:::tip Konten hinzufügen

Um Yandex-Konten hinzuzufügen, navigieren Sie zu **Einstellungen** und konfigurieren Sie Ihre Social-Konten. Details finden Sie unter [Systemeinstellungen](../settings/system-settings).

:::

#### Proxys

Wählen Sie einen oder mehrere Proxys aus, die während der Suche rotiert werden sollen:

- **Vorteile**:
  - Verteilt Anfragen über mehrere IPs
  - Verringert das Erkennungsrisiko
  - Unverzichtbar für groß angelegtes Scraping
- Wählen Sie mehrere Proxys für die automatische Rotation pro Anfrage

:::warning Proxy-Empfehlung

Für das Scraping von Yandex Maps verbessert die Verwendung von Proxys im Zielgebiet (z. B. russische Proxys für Suchen in Moskau) die Erfolgsquote erheblich.

:::

### Schritt 5: Suche starten

1. Klicken Sie auf **Suche starten**, um zu beginnen
2. Ein kreisförmiger Fortschrittsindikator und eine Fortschrittsanzeige erscheinen
3. Ein Echtzeit-Statustext zeigt die aktuelle Scraping-Phase an
4. Ein Zähler zeigt den Fortschritt an (z. B. „5 / 20 Unternehmen")
5. Bis zu **3 gleichzeitige Suchen** können parallel ausgeführt werden

:::info Gleichzeitige Suchen

Sie können bis zu 3 Yandex Maps-Suchen gleichzeitig ausführen. Wenn Sie versuchen, eine 4. zu starten, werden Sie aufgefordert, auf den Abschluss einer laufenden Suche zu warten.

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
| **Name** | Unternehmensname (klickbarer Link zu Yandex Maps, falls verfügbar) |
| **Kategorie** | Unternehmenskategorie (z. B. „Restaurant", „Zahnarzt") |
| **Bewertung** | Sternebewertung (mit Stern-Symbol) |
| **Rezensionen** | Anzahl der Rezensionen |
| **Adresse** | Vollständige Unternehmensadresse |
| **Telefon** | Telefonnummer |
| **Website** | Klickbarer Link zur Unternehmenswebsite (gekürzt) |

:::tip Auf Unternehmensnamen klicken

Unternehmensnamen mit einem Yandex Maps-Link sind klickbar — sie öffnen den Unternehmenseintrag auf Yandex Maps in einem neuen Tab.

:::

### Kopfzeile der Suchergebnisse

Die Kopfzeile zeigt:

- Gesamtzahl der gefundenen Unternehmen
- Das verwendete Such-Schlagwort
- Den durchsuchten Standort

### Keine Ergebnisse

Wenn keine Unternehmen gefunden werden, wird eine Meldung angezeigt, die darauf hinweist, dass keine Ergebnisse für Ihre Suchkriterien vorliegen. Versuchen Sie:

- Breitere Schlagwörter zu verwenden
- Schlagwörter in der lokalen Sprache zu verwenden
- Den Standortbereich zu erweitern
- Die Einstellung für maximale Ergebnisse zu erhöhen

## Ergebnisse exportieren

### Alle kopieren

1. Klicken Sie auf **Alle kopieren** in der Kopfzeile der Ergebnisse
2. Alle Ergebnisse werden als JSON in Ihre Zwischenablage kopiert
3. Fügen Sie sie in einen beliebigen Texteditor oder eine Tabelle ein

### Als CSV exportieren

1. Klicken Sie auf **CSV exportieren** in der Kopfzeile der Ergebnisse
2. Eine CSV-Datei wird automatisch heruntergeladen
3. Der Dateiname enthält das Schlagwort und den Standort (z. B. `yandex-maps-Zahnarzt-Moskau.csv`)

**CSV-Spalten umfassen:**
Name, Kategorie, Bewertung, Rezensionsanzahl, Adresse, Telefon, Website, Öffnungszeiten, Maps-URL

### Als JSON exportieren

1. Klicken Sie auf **JSON exportieren** in der Kopfzeile der Ergebnisse
2. Eine JSON-Datei mit den vollständigen Ergebnisdaten wird heruntergeladen
3. Der Dateiname folgt der gleichen Konvention wie bei CSV-Exporten

## Suchverlauf

Die Registerkarte **Verlauf** speichert alle Ihre vergangenen Yandex Maps-Suchen.

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

- **Lokale Sprache verwenden**: Russische Schlagwörter für russische Standorte
  - ✅ `стоматолог` (Zahnarzt auf Russisch) für Moskau
  - ✅ `dentist` für englischsprachige Gebiete
- **Seien Sie spezifisch**: Verwenden Sie präzise Unternehmenstypen
- **Varianten ausprobieren**: Suchen Sie mit mehreren Begriffen für eine umfassende Abdeckung

### 2. Standort-Targeting

- **Verwenden Sie spezifische Standorte** für bessere Ergebnisse:
  - ✅ `Moskau`
  - ✅ `Sankt Petersburg`
  - ✅ `Kasan, Russland`
  - ❌ `Russland` (zu weit gefasst)
- **Durchsuchen Sie mehrere Gebiete**, um eine breitere Region abzudecken

### 3. Sprache und Region

- **Sprache auf `ru` setzen** für russischsprachige Regionen
- **Region auf das Zielland setzen** für optimale Ergebnisse
- **Leer lassen**, wenn unsicher — Yandex verwendet Standardwerte basierend auf dem Standort

### 4. Proxys verwenden

- **Lokale Proxys verwenden** (russische Proxys für russische Suchen)
- **Einzelne Suche**: Proxy nicht erforderlich
- **Mehrere Suchen**: 1–2 Proxys verwenden
- **Groß angelegtes Scraping**: 3+ Proxys mit Rotation verwenden

### 5. Yandex-Konten verwenden

- **Empfohlen** für alle Yandex Maps-Scraping-Aufgaben
- **Unverzichtbar** beim Scraping russischer Städte mit vielen Unternehmen
- Konten mit aktiver Yandex-Nutzung liefern bessere Ergebnisse

## Vergleich: Google Maps vs. Yandex Maps

| Funktion | Google Maps Scraper | Yandex Maps Scraper |
|---------|-------------------|-------------------|
| **Am besten für** | Globale Märkte, westliche Länder | Russland, GUS, Türkei |
| **Sprachunterstützung** | Mehrsprachig (automatisch) | Konfigurierbare Sprache/Region |
| **Unternehmensabdeckung** | Weltweit am besten | Am besten in Russland/GUS |
| **Kontotyp** | Google-Konto | Yandex-Konto |
| **Exportformate** | CSV, JSON | CSV, JSON, Alle kopieren |
| **Fortschrittsverfolgung** | Fortschrittsanzeige | Kreisförmiger Fortschritt + Statustext |

:::tip Beide Scraper nutzen

Für eine umfassende Abdeckung einer Region führen Sie Suchen sowohl auf Google Maps als auch auf Yandex Maps durch und gleichen Sie die Ergebnisse anschließend ab, um Duplikate zu entfernen.

:::

## Fehlerbehebung

### Suche fehlgeschlagen

**Mögliche Ursachen:**
- Netzwerkverbindungsprobleme
- Yandex Maps hat die Anfrage blockiert
- Ungültiges Schlagwort oder Standort

**Lösungen:**
1. Überprüfen Sie Ihre Internetverbindung
2. Versuchen Sie ein anderes Schlagwort oder einen anderen Standort
3. Verwenden Sie ein Yandex-Konto für authentifizierten Zugriff
4. Aktivieren Sie Proxys — vorzugsweise mit IPs im Zielgebiet
5. Reduzieren Sie die Einstellung für maximale Ergebnisse
6. Versuchen Sie, die korrekten Sprach- und Regionscodes einzustellen

### Keine Ergebnisse gefunden

**Mögliche Ursachen:**
- Das Schlagwort passt zu keinem Unternehmen in der Umgebung
- Der Standort ist zu spezifisch oder zu vage
- Falsche Sprach- oder Regionseinstellung

**Lösungen:**
1. Versuchen Sie breitere Schlagwörter oder Schlagwörter in der lokalen Sprache
2. Verwenden Sie eine größere Stadt oder einen breiteren Bereich
3. Überprüfen Sie auf Yandex Maps manuell, ob der Unternehmenstyp in der Umgebung existiert
4. Überprüfen Sie Ihre Sprach- und Regionseinstellungen

### Teilweise Ergebnisse

**Mögliche Ursachen:**
- Die Suche wurde vor Abschluss abgebrochen
- Einige Unternehmenseinträge enthielten nicht die erforderlichen Daten
- Ratenbegrenzung während des Scraping aufgetreten

**Lösungen:**
1. Lassen Sie die Suche vollständig abschließen
2. Führen Sie eine weitere Suche für das verbleibende Gebiet durch
3. Verwenden Sie Proxys, um Ratenbegrenzungen zu vermeiden

## Integration mit anderen Funktionen

Die Ergebnisse des Yandex Maps Scrapers können verwendet werden mit:

- **[Kontaktextraktion](./contact-extraction)** — E-Mails von Unternehmenswebsites aus den Ergebnissen extrahieren
- **[Google Maps Scraper](./google-maps-scraper)** — Abgleich mit Google Maps für eine breitere Abdeckung
- **[Gelbe Seiten](./yellow-pages)** — Abgleich mit Verzeichniseinträgen
- **[KI-E-Mail-Writer](../ai-outreach/ai-email-writer)** — Personalisierte E-Mails für die Kontaktaufnahme mit den gesammelten Unternehmensdaten erstellen
- **[Stapel-E-Mail-Versand](./batch-email-sending)** — E-Mail-Kampagnen mit extrahierten Kontaktinformationen starten

## Nächste Schritte

- [Informationen zum Google Maps Scraper](./google-maps-scraper)
- [E-Mail-Extraktion einrichten](./contact-extraction)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)
