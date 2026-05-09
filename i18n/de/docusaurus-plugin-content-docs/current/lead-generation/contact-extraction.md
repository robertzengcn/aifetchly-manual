---
id: contact-extraction
title: Kontaktextraktion
sidebar_label: E-Mail-Extraktion
description: Extrahieren Sie E-Mail-Adressen massenhaft von Websites und URLs mit dem leistungsstarken Extraktionstool von aiFetchly.
---

# E-Mail-Extraktion

Die E-Mail-Extraktionsfunktion von aiFetchly ermöglicht es Ihnen, E-Mail-Adressen im großen Maßstab von Websites zu sammeln. Extrahieren Sie Kontaktinformationen von einzelnen URLs oder nutzen Sie Ihre vorhandenen Suchergebnisse für gezielte E-Mail-Sammlung.

## Grundlagen der E-Mail-Extraktion

Die E-Mail-Extraktion funktioniert durch:

1. **Aufrufen jeder URL**, die Sie angeben
2. **Scannen des Seiteninhalts** nach E-Mail-Mustern
3. **Folgen interner Links** (optional)
4. **Zusammenstellen aller gefundenen E-Mails** in einer strukturierten Liste
5. **Automatische Deduplizierung** der Ergebnisse

:::info Anwendungsfälle

E-Mail-Extraktion eignet sich ideal für:
- Sammeln von E-Mails aus Suchergebnissen
- Aufbau von Kontaktlisten aus Branchenverzeichnissen
- Sammeln von Kontaktinformationen aus Mitgliederlisten
- Extrahieren von E-Mails aus Ressourcenseiten

:::

## Eine Extraktionsaufgabe erstellen

### Schritt 1: Zur E-Mail-Extraktion navigieren

1. Klicken Sie auf **E-Mail-Extraktion** im linken Navigationsmenü
2. Sie sehen die Liste der Extraktionsaufgaben
3. Klicken Sie auf die Schaltfläche **Neue Aufgabe erstellen**

### Schritt 2: URL-Eingabemethode wählen

Wählen Sie, wie Sie URLs für die Extraktion bereitstellen möchten:

#### Methode 1: Manuelle URL-Eingabe

**Am besten für**: Benutzerdefinierte URL-Listen, bestimmte Websites

1. Wählen Sie **Manuelle Eingabe** aus dem Quell-Dropdown
2. Geben Sie Ihre URLs in das Textfeld ein
3. **Format**: Eine URL pro Zeile

**Beispiel:**
```
https://example.com
https://www.business-site.com/contact
https://another-site.com/about-us
```

**Validierung:**
- URLs müssen mit `http://` oder `https://` beginnen
- Ungültige URLs werden automatisch markiert
- Maximale URLs pro Aufgabe: 10.000

#### Methode 2: Aus Suchergebnissen

**Am besten für**: Nutzung vorhandener Suchkampagnen

1. Wählen Sie **Suchergebnisse** aus dem Quell-Dropdown
2. Eine Tabelle Ihrer abgeschlossenen Suchaufgaben wird angezeigt
3. Wählen Sie die Suchaufgabe mit den URLs, aus denen Sie extrahieren möchten
4. Klicken Sie auf **Bestätigen**

**Vorteile:**
- Nahtlose Integration mit der Suchfunktion
- Keine manuelle URL-Eingabe erforderlich
- Verwendet zuvor gecrawlte URLs

### Schritt 3: Extraktionseinstellungen konfigurieren

#### Seitentiefe

- **Standard**: 10 Seiten pro URL
- **Bereich**: 1-1000 Seiten
- **Zweck**: Wie viele Seiten tief jede Website gecrawlt wird

**Richtlinien:**
- **Kleine Websites**: 5-10 Seiten
- **Mittlere Websites**: 10-50 Seiten
- **Große Websites**: 50-100 Seiten
- **Sehr große Websites**: 100+ Seiten (mit Vorsicht verwenden)

:::warning Seiten vs. Zeit

Höhere Seitentiefe = längere Extraktionszeit. Beginnen Sie konservativ und skalieren Sie schrittweise.

:::

#### Parallelität

- **Standard**: 1 gleichzeitiger Prozess
- **Bereich**: 1-10 gleichzeitige Prozesse
- **Zweck**: Wie viele URLs gleichzeitig verarbeitet werden

**Empfehlungen:**
- **Ohne Proxys**: 1-3 gleichzeitige
- **Mit Proxys**: 3-10 gleichzeitige
- **Niedrig beginnen** und schrittweise erhöhen

#### Maximale Seitenzahl

- **Standard**: 100 Seiten
- **Bereich**: 0-1000 Seiten
- **Zweck**: Absolute Obergrenze für zu verarbeitende Seiten

**Anwendungsfall**: Verhindert unkontrollierte Extraktion auf sehr großen Websites.

#### Verarbeitungs-Timeout

- **Standard**: 10 Minuten
- **Bereich**: 1-20 Minuten
- **Zweck**: Maximale Zeit pro URL vor Timeout

**Anpassen bei:**
- Websites laden langsam → Timeout erhöhen
- Schnelleres Scheitern gewünscht → Timeout verringern

### Schritt 4: Anzeigeoptionen

#### Im Browser anzeigen

- **Nein** (Standard): Extraktion läuft unsichtbar im Hintergrund (schneller)
- **Ja**: Browserfenster sichtbar (Debug-Modus)

**Empfehlung**: Für Produktionsaufgaben bei "Nein" belassen.

### Schritt 5: Proxy-Konfiguration (Optional)

Proxys für groß angelegte Extraktion hinzufügen:

1. **Proxy verwenden** umschalten
2. **Proxy wählen** klicken
3. Einen oder mehrere Proxys auswählen
4. **Bestätigen** klicken

:::tip Wann Proxys verwendet werden sollten

Verwenden Sie Proxys, wenn:
- Sie von 50+ URLs extrahieren
- Mehrere gleichzeitige Prozesse ausgeführt werden
- Vorherige Aufgaben blockiert wurden
- Wiederholt von denselben Domains extrahiert wird

:::

### Schritt 6: Aufgabe erstellen

Klicken Sie auf **Absenden**, um Ihre Extraktionsaufgabe zu erstellen. Sie können:
- **Nur speichern**: Aufgabe ohne Ausführung speichern
- **Jetzt ausführen**: Extraktion sofort starten

## Extraktionsaufgaben verwalten

### Aufgabenliste anzeigen

Navigieren Sie zu **E-Mail-Extraktion**, um alle Ihre Aufgaben zu sehen.

**Spalten der Aufgabenliste:**

| Spalte | Beschreibung |
|--------|--------------|
| **ID** | Eindeutige Aufgabenkennung |
| **Typ** | Manuelle Eingabe oder Suchergebnisse |
| **Status** | Ausstehend, In Bearbeitung, Abgeschlossen, Fehler |
| **Erfassungszeit** | Zeitpunkt der Aufgabenerstellung |
| **Aktionen** | Anzeigen, Bearbeiten, Löschen, Logs herunterladen |

### Aufgabenstatus

| Status | Beschreibung | Aktion |
|--------|--------------|--------|
| **Ausstehend** | Aufgabe erstellt, aber nicht gestartet | Bearbeiten, Löschen |
| **In Bearbeitung** | E-Mails werden aktiv extrahiert | Fortschritt überwachen |
| **Abgeschlossen** | Erfolgreich beendet | Ergebnisse anzeigen |
| **Fehler** | Mit Fehlern fehlgeschlagen | Logs anzeigen, Erneut versuchen |

### Aufgabenaktionen

- **Ergebnisse anzeigen** (Ordner-Symbol): Extrahierte E-Mails ansehen
- **Bearbeiten** (Stift-Symbol): Aufgabeneinstellungen ändern (nur ausstehende/Fehler-Aufgaben)
- **Löschen** (Papierkorb-Symbol): Aufgabe entfernen
- **Logs herunterladen** (Download-Symbol): Fehlerprotokolle abrufen (nur fehlgeschlagene Aufgaben)

## Extrahierte E-Mails anzeigen

### Schritt 1: Ergebnisse aufrufen

1. Gehen Sie zur **E-Mail-Extraktion**-Aufgabenliste
2. Finden Sie die abgeschlossene Aufgabe
3. Klicken Sie auf **Ergebnisse anzeigen**

### Schritt 2: Ergebnistabelle

Die Ergebnistabelle zeigt:

| Spalte | Beschreibung |
|--------|--------------|
| **URL** | Quell-Website |
| **E-Mails** | Extrahierte E-Mail-Adressen (erweiterbar) |
| **Anzahl** | Anzahl der gefundenen E-Mails |
| **Zeitstempel** | Zeitpunkt der Extraktion |

### Schritt 3: Details erweitern

Klicken Sie auf eine Zeile, um sie zu erweitern und zu sehen:
- Alle auf dieser URL gefundenen E-Mails
- E-Mail-Liste kann kopiert werden
- Einzelne E-Mail-Adressen anzeigen

### Schritt 4: Suche und Filterung

- **Suche**: Nach URL oder E-Mail-Adresse filtern
- **Paginierung**: Große Ergebnisssätze durchblättern
- **Automatische Aktualisierung**: Ergebnisse werden während der Verarbeitung alle 10 Sekunden aktualisiert

## Extrahierte E-Mails exportieren

### Als CSV exportieren

1. Wählen Sie die Ergebnisse aus, die Sie exportieren möchten (oder leer lassen für alle)
2. Klicken Sie auf **Exportieren** → **CSV**
3. Datei wird mit allen extrahierten E-Mails heruntergeladen

**CSV-Format:**
```csv
URL,Email,Timestamp
https://example.com,contact@example.com,2024-01-15 10:30:00
https://example.com,info@example.com,2024-01-15 10:30:00
```

### In E-Mail-Kampagnen verwenden

Extrahierte E-Mails lassen sich direkt in E-Mail-Marketing integrieren:

1. **Ergebnisse anzeigen** der Extraktionsaufgabe
2. **In Kampagne verwenden** Schaltfläche klicken
3. E-Mails werden automatisch an den E-Mail-Marketing-Workflow übergeben

Ausführliche Anleitungen finden Sie unter [Massen-E-Mail-Versand](./batch-email-sending).

## Bewährte Methoden

### 1. URL-Quellenstrategie

**Hochwertige Quellen:**
- Branchenverzeichnisse
- Mitgliederlisten
- Verbandswebsites
- Ressourcenseiten
- "Kontakt"-Seiten

**Vermeiden:**
- Social-Media-Plattformen (selten E-Mails)
- Nachrichtenseiten (niedrige Konversion)
- Sehr große Portale (niedrige Qualität)

### 2. Seitentiefen-Einstellungen

**Konservativ** (Qualitätsfokus):
- Seitentiefe: 5-10
- Parallelität: 1-3
- Am besten für: Gezielte Listen, hochwertige Kontakte

**Moderat** (Ausgewogen):
- Seitentiefe: 10-50
- Parallelität: 3-5
- Am besten für: Allgemeine Outreach-Kampagnen

**Aggressiv** (Mengenfokus):
- Seitentiefe: 50-100+
- Parallelität: 5-10
- Am besten für: Marktforschung, breite Abdeckung

:::warning Qualität vs. Menge

Aggressive Einstellungen extrahieren möglicherweise mehr E-Mails, aber mit geringerer Qualität. Konzentrieren Sie sich auf relevante Quellen für bessere Kampagnenergebnisse.

:::

### 3. Proxy-Nutzung

**Kleine Aufgaben** (< 100 URLs):
- Proxys nicht erforderlich
- Parallelität: 1-3

**Mittlere Aufgaben** (100-1000 URLs):
- 2-3 Proxys verwenden
- Parallelität: 3-5

**Große Aufgaben** (1000+ URLs):
- 5+ Proxys verwenden
- Parallelität: 5-10
- Proxys regelmäßig rotieren

### 4. Deduplizierung

aiFetchly dedupliziert E-Mails innerhalb einer Aufgabe automatisch. Für zusätzliche Deduplizierung:

- Ergebnisse als CSV exportieren
- Tabellenkalkulationssoftware oder Skripte verwenden
- Mit vorhandenen Kontaktlisten abgleichen
- Duplikate vor Kampagnen entfernen

### 5. E-Mail-Verifizierung

Extrahierte E-Mails sind möglicherweise nicht immer gültig. Beachten Sie:

- **Manuelle Überprüfung**: E-Mail-Formate stichprobenartig prüfen
- **E-Mail-Verifizierungstools**: Drittanbieterdienste nutzen
- **Testkampagnen**: Zunächst kleine Stapel senden
- **Bounces verfolgen**: Unzustellbare E-Mails entfernen

## Integration mit Suchergebnissen

Der leistungsstärkste Workflow kombiniert Suche und Extraktion:

### Vollständiger Workflow

1. **Suchaufgabe ausführen**:
   - Nach Unternehmen in Ihrer Zielbranche suchen
   - KI-Schlüsselwortgenerierung für umfassende Abdeckung nutzen

2. **E-Mails extrahieren**:
   - Extraktionsaufgabe aus Suchergebnissen erstellen
   - E-Mails von entdeckten URLs extrahieren

3. **Qualitätskontrolle**:
   - Extrahierte E-Mails überprüfen
   - Nach Quellqualität filtern
   - Duplikate entfernen

4. **E-Mail-Kampagne**:
   - In E-Mail-Marketing importieren
   - Personalisierte Vorlagen erstellen
   - Kampagne starten

## Fortgeschrittene Techniken

### Technik 1: Tiefe Extraktion

Für umfassende E-Mail-Sammlung:

1. **Seitentiefe festlegen**: 50-100 Seiten
2. **Proxys aktivieren**: 3-5 Proxys verwenden
3. **Moderate Parallelität**: 3-5
4. **Fortschritt überwachen**: Ergebnisse regelmäßig prüfen
5. **Frühzeitig stoppen**: Wenn die Qualität sinkt, Einstellungen anpassen

### Technik 2: Mustergestützte Extraktion

Bestimmte Seitentypen gezielt ansteuern:

- **Kontaktseiten**: URLs mit `/contact`
- **Über-uns-Seiten**: URLs mit `/about`
- **Teamseiten**: URLs mit `/team`
- **Mitgliederverzeichnisse**: Verbandswebsites

### Technik 3: Wettbewerbsanalyse

E-Mails von Wettbewerbswebsites extrahieren:

1. **Wettbewerber identifizieren** in Ihrer Nische
2. **Deren Kontakt-E-Mails extrahieren**
3. **Deren Partnerschaften analysieren** (Link-Seiten)
4. **Partnerschafts-Outreach-Liste aufbauen**

## Fehlerbehebung

### Aufgabenstatus: "Fehler"

**Mögliche Ursachen:**
- Ungültige URLs
- Netzwerkverbindungsprobleme
- Alle Proxys fehlgeschlagen
- Website-Blockierung

**Lösungen:**
1. URL-Format überprüfen (http:// oder https://)
2. Internetverbindung prüfen
3. Proxy-Gesundheit testen
4. Parallelität reduzieren
5. Timeout-Einstellungen erhöhen

### Keine E-Mails extrahiert

**Mögliche Ursachen:**
- Websites haben keine öffentlich sichtbaren E-Mails
- E-Mails in Bildern/JavaScript (nicht extrahierbar)
- Websites verwenden Kontaktformulare statt E-Mails
- Seitentiefe zu niedrig

**Lösungen:**
1. Seitentiefen-Einstellung erhöhen
2. Manuell überprüfen, ob Websites E-Mails haben
3. Andere URL-Quellen ausprobieren
4. Prüfen, ob Sites Kontaktformulare verwenden

### Langsame Verarbeitung

**Mögliche Ursachen:**
- Hohe Seitentiefe
- Viele gleichzeitige Prozesse
- Langsame Websites
- Netzwerklatenz

**Lösungen:**
1. Seitentiefe reduzieren
2. Parallelität verringern
3. Timeout erhöhen
4. Schnellere Proxys verwenden

### Doppelte E-Mails

**Mögliche Ursachen:**
- Dieselbe E-Mail erscheint auf mehreren Seiten
- Mehrere URLs von derselben Domain

**Lösungen:**
1. aiFetchly dedupliziert automatisch innerhalb von Aufgaben
2. Exportieren und aufgabenübergreifend deduplizieren
3. Tabellenkalkulationssoftware oder Skripte verwenden
4. E-Mail-Verifizierungstools verwenden

### Von Websites blockiert

**Mögliche Ursachen:**
- Zu viele gleichzeitige Anfragen
- Keine Proxy-Rotation
- Zu aggressive Einstellungen

**Lösungen:**
1. Parallelität auf 1-3 reduzieren
2. Mehrere Proxys verwenden
3. Verzögerungen zwischen Anfragen erhöhen
4. Website-Ratenlimits respektieren

## Rechtliche und ethische Aspekte

### Compliance

Beim Extrahieren von E-Mails beachten Sie bitte:

- **DSGVO** (Europa): Strenge Vorschriften zur E-Mail-Erfassung
- **CAN-SPAM** (USA): Anforderungen für kommerzielle E-Mails
- **CASL** (Kanada): Einwilligungserfordernisse für elektronische Nachrichten

:::warning Rechtlicher Hinweis

Stellen Sie immer sicher, dass Sie die rechtlichen Berechtigungen haben, E-Mail-Adressen zu extrahieren und zu kontaktieren. Konsultieren Sie einen Rechtsbeistand für Hinweise zu geltenden Gesetzen.

:::

### Bewährte Methoden

- **Nur öffentliche Quellen**: Nur aus öffentlich verfügbaren Informationen extrahieren
- **Relevanter Kontext**: Von Unternehmen/Kontakten extrahieren, die für Ihr Angebot relevant sind
- **Robots.txt respektieren**: Website-Ausschlussstandards beachten
- **Abmeldung anbieten**: Abmeldeoptionen in E-Mails enthalten
- **Mehrwert bieten**: In Ihrem Outreach etwas Wertvolles anbieten

## Integration mit E-Mail-Marketing

Nachdem Sie E-Mails extrahiert haben:

1. **Ergebnisse überprüfen**: Qualitätsprüfung Ihrer extrahierten E-Mails
2. **Exportieren oder Importieren**: Direkt ins E-Mail-Marketing oder als CSV exportieren
3. **Vorlage auswählen**: E-Mail-Vorlage wählen oder erstellen
4. **Personalisieren**: KI-E-Mail-Writer für personalisierte Inhalte nutzen
5. **Kampagne starten**: Gezielten Outreach versenden

Ausführliche Anleitungen zur Erstellung von Kampagnen finden Sie unter [Massen-E-Mail-Versand](./batch-email-sending).

## Nächste Schritte

- [Wissensbibliothek einrichten](../ai-outreach/knowledge-library)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)
- [Mehr über den KI-Marketing-Assistenten erfahren](../ai-outreach/ai-marketing-assistant)

---

**Bereit, E-Mails zu extrahieren?** Beginnen Sie mit einem kleinen Stapel URLs, um Ihre Einstellungen zu testen, und skalieren Sie dann Ihre Extraktionsvorgänge.
