---
id: local-business-finder
title: Local Business Finder
sidebar_label: Local Business Finder
description: Strukturieren Sie Unternehmensinformationen aus Google Maps und Yandex Maps nach Schlagwort und Standort mit dem Local Business Finder von aiFetchly.
---

# Local Business Finder

Der Local Business Finder von aiFetchly ermöglicht die Suche nach lokalen Unternehmen nach Schlagwort und Standort über zwei Datenquellen: **Google Maps** (weltweite Abdeckung) und **Yandex Maps** (ideal für den russischen und GUS-Markt). Sammeln Sie umfassende Unternehmensdaten einschließlich Namen, Kategorien, Bewertungen, Rezensionen, Adressen, Telefonnummern und Website-URLs.

## Übersicht

Der Local Business Finder bietet eine übersichtliche Oberfläche zur Strukturierung lokaler Unternehmensdaten:

1. **Datenquelle auswählen** — Google Maps oder Yandex Maps
2. **Schlagwort eingeben** (z. B. „Zahnarzt", „Italienisches Restaurant")
3. **Standort eingeben** (z. B. „Berlin", „Moskau", „90210")
4. **Optionen konfigurieren** (maximale Ergebnisse, Website-Einbindung, Rezensionen usw.)
5. **Suche starten** und den Fortschritt in Echtzeit verfolgen
6. **Ergebnisse exportieren** als CSV, JSON oder in die Zwischenablage kopieren

:::tip Datenquelle auswählen

- **Google Maps** — Am besten für globale Märkte und westliche Länder. Überlegene weltweite Abdeckung.
- **Yandex Maps** — Unverzichtbar für Russland, GUS-Länder (Kasachstan, Belarus) und die Türkei. Unterstützt Sprach- und Regionseinstellungen.

Für eine umfassende Abdeckung einer Region können Sie Suchen auf beiden Datenquellen durchführen und die Ergebnisse anschließend abgleichen und Duplikate entfernen.

:::

## Aufrufen des Local Business Finders

1. Klicken Sie auf **Local Business Finder** im linken Navigationsmenü
2. Die Seite öffnet sich mit zwei Registerkarten: **Suche** und **Verlauf**

## Suche ausführen

### Schritt 1: Datenquelle auswählen

Wählen Sie oben im Suchformular Ihre bevorzugte Datenquelle aus:

| Funktion | Google Maps | Yandex Maps |
|----------|-------------|-------------|
| **Am besten für** | Globale Märkte, westliche Länder | Russland, GUS, Türkei |
| **Sprachunterstützung** | Mehrsprachig (automatisch) | Konfigurierbare Sprache/Region |
| **Unternehmensabdeckung** | Weltweit am besten | Am besten in Russland/GUS |
| **Kontotyp** | Google-Konto | Yandex-Konto |

### Schritt 2: Suchkriterien eingeben

#### Unternehmens-Schlagwort (Erforderlich)

Geben Sie einen Unternehmenstyp oder Namen ein, nach dem gesucht werden soll:

- **Beispiele**: `Zahnarzt`, `Italienisches Restaurant`, `Klempner`, `Marketingagentur`
- **Tipp**: Verwenden Sie spezifische Unternehmenstypen für gezieltere Ergebnisse
- **Yandex-Tipp**: Schlagwörter funktionieren am besten in der lokalen Sprache (z. B. russische Schlagwörter für russische Standorte)

#### Standort (Erforderlich)

Geben Sie eine Stadt, Adresse oder Postleitzahl ein:

- **Beispiele**: `Berlin`, `London`, `90210`, `Moskau`, `Sankt Petersburg`, `Almaty, Kasachstan`
- **Tipp**: Je spezifischer der Standort, desto relevanter die Ergebnisse

### Schritt 3: Suchoptionen konfigurieren

#### Maximale Ergebnisse

- **Bereich**: 1–50 Ergebnisse
- **Standard**: 20 Ergebnisse
- Passen Sie den Schieberegler an, um zu steuern, wie viele Unternehmen einbezogen werden

:::info Ergebniskappung

Die maximale Anzahl der Ergebnisse ist auf ein sicheres Limit begrenzt, um zuverlässige Profil-Einblicke zu gewährleisten. Der Schiebereglerbereich von 1–50 ist der benutzerkonfigurierbare Bereich.

:::

#### Website einbeziehen

- **Aktiviert** (Standard): Versucht, die Website-URL des Unternehmens einzubeziehen
- **Deaktiviert**: Überspringt die Website-Suche für schnellere Ergebnisse

#### Rezensionen einbeziehen

- **Deaktiviert** (Standard): Gibt nur grundlegende Unternehmensdaten zurück
- **Aktiviert**: Bezieht Rezensionsdaten in die Ergebnisse ein (erhöht die Verarbeitungszeit)

#### Browser anzeigen

- **Deaktiviert** (Standard): Browser läuft im Headless-Modus (schneller)
- **Aktiviert**: Browserfenster ist bei der Informationsstrukturierung sichtbar (nützlich zur Fehlerbehebung)

:::warning Browser anzeigen

Wenn Sie diese Option aktivieren, wird das Browserfenster während der Suche auf Ihrem Bildschirm angezeigt. Dies ist nur zur Fehlerbehebung gedacht und kann den Prozess der Informationsstrukturierung verlangsamen.

:::

### Schritt 4: Sprach- und Regionseinstellungen (nur Yandex Maps)

Diese Einstellungen sind spezifisch für Yandex Maps und helfen, Ihren Suchkontext anzupassen.

#### Sprache

- Legen Sie den Yandex Maps-UI-Sprachcode fest
- **Beispiele**: `ru` (Russisch), `en` (Englisch), `tr` (Türkisch)
- Leer lassen, um die Standardsprache zu verwenden
- **Tipp**: Verwenden Sie die lokale Sprache für bessere Suchergebnisse in der jeweiligen Region

#### Region

- Legen Sie den Regioncode für den Suchkontext fest
- **Beispiele**: `ru` (Russland), `kz` (Kasachstan), `by` (Belarus)
- Leer lassen, um die Standardregion zu verwenden
- **Tipp**: Die korrekte Regionseinstellung verbessert die Genauigkeit der Ergebnisse

### Schritt 5: Konto- und Proxy-Einstellungen (Optional)

#### Google-Konto / Yandex-Konto

Wählen Sie ein Konto aus, um dessen Cookies für authentifizierte Informationsstrukturierung zu verwenden:

- **Vorteile**:
  - Höhere Erfolgsquote
  - Zugriff auf detailliertere Unternehmensinformationen
  - Verringertes Risiko einer Blockierung
- Google Maps listet nur Google-Konten auf; Yandex Maps listet nur Yandex-Konten auf

:::tip Konten hinzufügen

Um Konten hinzuzufügen, navigieren Sie zu **Einstellungen** und konfigurieren Sie Ihre Social-Konten. Details finden Sie unter [Systemeinstellungen](../settings/system-settings).

:::

#### Proxys

Wählen Sie einen oder mehrere Proxys aus, die während der Suche rotiert werden sollen:

- **Vorteile**:
  - Verteilt Anfragen über mehrere IPs
  - Verringert das Erkennungsrisiko
  - Unverzichtbar für groß angelegte öffentliche Informationsstrukturierung
- Wählen Sie mehrere Proxys für die automatische Rotation pro Anfrage

:::warning Proxy-Empfehlung

Für Yandex Maps verbessert die Verwendung von Proxys im Zielgebiet (z. B. russische Proxys für Moskau-Suchen) die Erfolgsquote erheblich.

:::

### Schritt 6: Suche starten

1. Klicken Sie auf **Suche starten**, um zu beginnen
2. Eine Fortschrittsanzeige erscheint und zeigt den Echtzeit-Fortschrittsstatus
3. Die Suche läuft asynchron — Sie können andere Funktionen weiterhin nutzen
4. Bis zu **3 gleichzeitige Suchen** können parallel ausgeführt werden

:::info Gleichzeitige Suchen

Sie können bis zu 3 Suchen gleichzeitig ausführen. Wenn Sie versuchen, eine 4. zu starten, werden Sie aufgefordert, auf den Abschluss einer laufenden Suche zu warten.

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
| **Name** | Unternehmensname (klickbarer Link zu Maps, falls verfügbar) |
| **Kategorie** | Unternehmenskategorie (z. B. „Restaurant", „Zahnarzt") |
| **Bewertung** | Sternebewertung (mit Stern-Symbol) |
| **Rezensionen** | Anzahl der Rezensionen |
| **Adresse** | Vollständige Unternehmensadresse |
| **Telefon** | Telefonnummer |
| **Website** | Klickbarer Link zur Unternehmenswebsite (gekürzt) |

:::tip Auf Unternehmensnamen klicken

Unternehmensnamen mit einem Maps-Link sind klickbar — sie öffnen den Unternehmenseintrag in einem neuen Tab.

:::

### Kopfzeile der Suchergebnisse

Die Kopfzeile zeigt:

- Gesamtzahl der gefundenen Unternehmen
- Das verwendete Such-Schlagwort
- Den durchsuchten Standort

### Keine Ergebnisse

Wenn keine Unternehmen gefunden werden, wird eine Meldung angezeigt, die darauf hinweist, dass keine Ergebnisse für Ihre Suchkriterien vorliegen. Versuchen Sie:

- Breitere Schlagwörter zu verwenden
- Schlagwörter in der lokalen Sprache zu verwenden (für Yandex Maps)
- Den Standortbereich zu erweitern
- Die Einstellung für maximale Ergebnisse zu erhöhen

## Ergebnisse exportieren

### Alles kopieren

1. Klicken Sie auf **Alles kopieren** in der Kopfzeile der Ergebnisse
2. Alle Ergebnisse werden als JSON in Ihre Zwischenablage kopiert
3. Fügen Sie sie in einen beliebigen Texteditor oder eine Tabellenkalkulation ein

### Als CSV exportieren

1. Klicken Sie auf **CSV exportieren** in der Kopfzeile der Ergebnisse
2. Eine CSV-Datei wird automatisch heruntergeladen
3. Der Dateiname enthält das Schlagwort und den Standort (z. B. `maps-Zahnarzt-Berlin.csv`)

**CSV-Spalten umfassen:**
Name, Kategorie, Bewertung, Rezensionsanzahl, Adresse, Telefon, Website, Öffnungszeiten, Maps-URL

### Als JSON exportieren

1. Klicken Sie auf **JSON exportieren** in der Kopfzeile der Ergebnisse
2. Eine JSON-Datei mit den vollständigen Ergebnisdaten wird heruntergeladen
3. Der Dateiname folgt der gleichen Konvention wie bei CSV-Exporten

## Suchverlauf

Die Registerkarte **Verlauf** speichert alle Ihre vergangenen Suchen.

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
- **Lokale Sprache für Yandex verwenden**: Russische Schlagwörter für russische Standorte
  - ✅ `стоматолог` (Zahnarzt auf Russisch) für Moskau
  - ✅ `dentist` für englischsprachige Gebiete

### 2. Standort-Targeting

- **Verwenden Sie spezifische Standorte** für bessere Ergebnisse:
  - ✅ `Mitte, Berlin`
  - ✅ `Moskau`
  - ✅ `90210`
  - ❌ `Deutschland` oder `Russland` (zu allgemein)
- **Durchsuchen Sie mehrere Gebiete**, um eine breitere Region abzudecken:
  - Führen Sie separate Suchen für jeden Stadtteil oder Bezirk durch

### 3. Einstellung für maximale Ergebnisse

- **Schnelltest**: Auf 5–10 Ergebnisse setzen, um Ihre Suche zu überprüfen
- **Standardsuche**: 20 Ergebnisse (Standard)
- **Umfassend**: 50 Ergebnisse für eine gründliche Abdeckung

### 4. Sprache und Region (Yandex Maps)

- **Sprache auf `ru` setzen** für russischsprachige Regionen
- **Region auf das Zielland setzen** für beste Ergebnisse
- **Leer lassen**, wenn unsicher — Yandex verwendet Standardwerte basierend auf dem Standort

### 5. Proxys verwenden

- **Einzelne Suche**: Proxy nicht erforderlich
- **Mehrere aufeinanderfolgende Suchen**: 1–2 Proxys verwenden
- **Groß angelegte Informationsstrukturierung**: 3+ Proxys mit Rotation verwenden
- **Yandex Maps**: Lokale Proxys verwenden (russische Proxys für russische Suchen)

### 6. Konten verwenden

- **Google-Konto**: Empfohlen für Suchen mit 30+ Ergebnissen; unverzichtbar für beliebte Gebiete mit vielen Unternehmen
- **Yandex-Konto**: Empfohlen für alle Yandex Maps-Suchen; unverzichtbar für russische Städte mit vielen Unternehmen
- Konten mit aktiver Nutzung liefern bessere Ergebnisse

## Fehlerbehebung

### Suche fehlgeschlagen

**Mögliche Ursachen:**
- Netzwerkverbindungsprobleme
- Der Maps-Dienst hat die Anfrage blockiert
- Ungültiges Schlagwort oder Standort

**Lösungen:**
1. Überprüfen Sie Ihre Internetverbindung
2. Versuchen Sie ein anderes Schlagwort oder einen anderen Standort
3. Verwenden Sie ein Konto für authentifizierten Zugriff
4. Aktivieren Sie Proxys — vorzugsweise mit IPs im Zielgebiet
5. Reduzieren Sie die Einstellung für maximale Ergebnisse
6. (Yandex Maps) Versuchen Sie, die korrekten Sprach- und Regioncodes einzustellen

### Keine Ergebnisse gefunden

**Mögliche Ursachen:**
- Das Schlagwort passt zu keinem Unternehmen in der Umgebung
- Der Standort ist zu spezifisch oder zu vage
- Falsche Sprach- oder Regionseinstellung (Yandex Maps)

**Lösungen:**
1. Versuchen Sie breitere Schlagwörter oder Schlagwörter in der lokalen Sprache
2. Verwenden Sie eine größere Stadt oder einen breiteren Bereich
3. Überprüfen Sie manuell auf dem Maps-Dienst, ob der Unternehmenstyp in der Umgebung existiert
4. (Yandex Maps) Überprüfen Sie Ihre Sprach- und Regionseinstellungen

### Teilweise Ergebnisse

**Mögliche Ursachen:**
- Die Suche wurde vor Abschluss abgebrochen
- Einige Unternehmenseinträge enthielten nicht die erforderlichen Daten
- Ratenbegrenzung während der Informationsstrukturierung aufgetreten

**Lösungen:**
1. Lassen Sie die Suche vollständig abschließen
2. Führen Sie eine weitere Suche für das verbleibende Gebiet durch
3. Verwenden Sie Proxys, um Ratenbegrenzungen zu vermeiden

## Integration mit anderen Funktionen

Die Ergebnisse des Local Business Finders können verwendet werden mit:

- **[Kontaktprofil-Einblicke](./contact-extraction)** — In Kontaktprofil-Einblicke von Unternehmenswebsites aus den Ergebnissen öffnen
- **[Verzeichnis-Assistent](./yellow-pages)** — Abgleich mit Verzeichniseinträgen für umfassendere Daten
- **[KI-E-Mail-Writer](../ai-outreach/ai-email-writer)** — Personalisierte E-Mails für die Kontaktaufnahme mit den gesammelten Unternehmensdaten erstellen
- **[Outreach-Kampagne](./batch-email-sending)** — E-Mail-Kampagnen mit extrahierten Kontaktinformationen starten

## Nächste Schritte

- [Kontaktprofil-Einblicke einrichten](./contact-extraction)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)
