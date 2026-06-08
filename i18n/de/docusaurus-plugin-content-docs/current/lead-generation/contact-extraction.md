---
id: contact-extraction
title: Contact Profile Insights
sidebar_label: Contact Profile Insights
description: Erstellen Sie Kontaktprofile aus Websites und URLs mit E-Mail-Erkennung, optionaler KI-Anreicherung, Aufgabensteuerung und exportierbaren Ergebnissen.
---

# Contact Profile Insights

Contact Profile Insights von aiFetchly erstellt strukturierte Kontaktprofile aus Websites im großen Maßstab. Nutzen Sie einzelne URLs oder vorhandene Suchergebnisse, um öffentliche E-Mails zu sammeln, und reichern Sie jedes Profil optional mit KI-erkannten Telefonnummern, Adressen und Social Links an.

## Grundlagen von Contact Profile Insights

Contact Profile Insights funktioniert durch:

1. **Aufrufen jeder URL**, die Sie angeben
2. **Scannen des Seiteninhalts** nach E-Mail-Mustern
3. **Folgen interner Links** (optional)
4. **Auswählen starker Kandidatenseiten** für optionale KI-Anreicherung
5. **Zusammenstellen gefundener E-Mails und angereicherter Felder** in einer strukturierten Liste
6. **Automatische Deduplizierung** der Ergebnisse

:::info Anwendungsfälle

Contact Profile Insights eignet sich ideal für:
- Sammeln von E-Mails aus Suchergebnissen
- Aufbau von Kontaktlisten aus Branchenverzeichnissen
- Sammeln von Kontaktinformationen aus Mitgliederlisten
- Extrahieren von E-Mails aus Ressourcenseiten
- Anreichern von Profilen mit Telefonnummern, Adressen und sozialen Profilen

:::

## Eine Kontaktprofil-Aufgabe erstellen

### Schritt 1: Zu Contact Profile Insights navigieren

1. Klicken Sie auf **Contact Profile Insights** im linken Navigationsmenü
2. Sie sehen die Liste der Kontaktprofil-Aufgaben
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

### Schritt 3: Profileinstellungen konfigurieren

#### Seitentiefe

- **Standard**: 10 Seiten pro URL
- **Empfohlener Bereich**: 1-1000 Seiten
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

### Schritt 5: KI-Anreicherung (optional)

Wenn KI für Ihr Konto aktiviert ist, zeigt das Aufgabenformular **Enable AI Enrichment** an.

- **Aus**: Extrahiert nur E-Mails.
- **Ein**: Nutzt KI, um jedes Ergebnis mit Telefonnummer, Adresse und Social Links anzureichern, wenn diese Angaben gefunden werden können.

KI-Anreicherung ist hilfreich, wenn Sie vollständigere Kontaktprofile für Outreach oder Qualifizierung benötigen. Sie kann die Verarbeitung verlängern, und einzelne Zeilen können **Skipped** oder **Failed** anzeigen, wenn nicht genügend nutzbarer Seiteninhalt vorhanden ist oder die KI-Anreicherung nicht abgeschlossen werden kann.

### Schritt 6: Proxy-Konfiguration (Optional)

Proxys für groß angelegte Extraktion hinzufügen:

1. Klicken Sie auf **Proxy wählen**
2. Wählen Sie einen oder mehrere Proxys aus
3. Bestätigen Sie die Auswahl
4. Die ausgewählten Proxys erscheinen als Chips im Proxy-Auswahlfeld

:::tip Wann Proxys verwendet werden sollten

Verwenden Sie Proxys, wenn:
- Sie von 50+ URLs extrahieren
- Mehrere gleichzeitige Prozesse ausgeführt werden
- Vorherige Aufgaben blockiert wurden
- Wiederholt von denselben Domains extrahiert wird

:::

### Schritt 7: Aufgabe erstellen oder aktualisieren

Klicken Sie auf **Absenden**, um eine neue Kontaktprofil-Aufgabe zu erstellen. Neue Aufgaben werden an den Backend-Prozess übergeben, und die App kehrt zur Aufgabenliste zurück, sobald die Aufgabe startet.

Beim Bearbeiten einer bestehenden Aufgabe ändert sich die Schaltfläche zu **Save**. Das Speichern aktualisiert URL-Quelle, Seitentiefe, Parallelität, Timeout, Proxys, Browseranzeige und KI-Anreicherung.

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
| **Aktionen** | Anzeigen, Stoppen, Starten/Neu starten, Bearbeiten, Löschen, Logs herunterladen |

### Aufgabenstatus

| Status | Beschreibung | Aktion |
|--------|--------------|--------|
| **Ausstehend** | Aufgabe erstellt, aber nicht gestartet | Bearbeiten, Löschen |
| **In Bearbeitung** | Öffentliche Kontaktkanäle werden aktiv gesucht | Aufgabe stoppen oder Fortschritt überwachen |
| **Abgeschlossen** | Erfolgreich beendet | Ergebnisse anzeigen, Einstellungen bearbeiten oder neu starten |
| **Fehler** | Mit Fehlern fehlgeschlagen | Logs herunterladen, bearbeiten, löschen oder neu starten |

### Aufgabenaktionen

- **Ergebnisse anzeigen** (Ordner-Symbol): Extrahierte E-Mails ansehen
- **Stoppen** (Stop-Symbol): Eine laufende Aufgabe stoppen
- **Starten/Neu starten** (Play-Symbol): Eine Aufgabe starten, die gerade nicht verarbeitet wird
- **Bearbeiten** (Stift-Symbol): Aufgabeneinstellungen ändern
- **Löschen** (Papierkorb-Symbol): Ausstehende Aufgaben oder Fehler-Aufgaben entfernen
- **Logs herunterladen** (Download-Symbol): Fehlerprotokolle abrufen (nur fehlgeschlagene Aufgaben)

## Kontaktprofil-Ergebnisse anzeigen

### Schritt 1: Ergebnisse aufrufen

1. Gehen Sie zur **E-Mail-Extraktion**-Aufgabenliste
2. Finden Sie die abgeschlossene Aufgabe
3. Klicken Sie auf **Ergebnisse anzeigen**

### Schritt 2: Ergebnistabelle

Die Ergebnistabelle zeigt:

| Spalte | Beschreibung |
|--------|--------------|
| **ID** | Eindeutige Ergebniskennung |
| **URL** | Quell-Website |
| **Erfassungszeit** | Zeitpunkt, zu dem das Ergebnis gesammelt wurde |
| **Phone** | KI-angereicherte Telefonnummer, sofern verfügbar |
| **Address** | KI-angereicherte Adresse, sofern verfügbar |
| **Social Links** | KI-angereicherte Social-Profile-Links, sofern verfügbar |
| **AI Status** | Anreicherungsstatus: Not enriched, Processing, Completed, Failed oder Skipped |

### Schritt 3: Details erweitern

Klicken Sie auf eine Zeile, um sie zu erweitern und zu sehen:
- Alle auf dieser URL gefundenen E-Mails
- E-Mail-Liste kann kopiert werden
- Angereicherte Telefonnummer, Adresse und Social Links, sofern vorhanden

### Schritt 4: Suche und Filterung

- **Suche**: Nach URL oder E-Mail-Adresse filtern
- **Paginierung**: Große Ergebnisssätze durchblättern
- **Export**: Aufgabenergebnisse als CSV-Datei herunterladen

## Kontaktprofil-Ergebnisse exportieren

### Als CSV exportieren

1. Öffnen Sie die Ergebnisdetails einer Aufgabe
2. Klicken Sie auf **Export**
3. aiFetchly exportiert die Aufgabenergebnisse als CSV und gibt den gespeicherten Dateipfad zurück

**CSV-Format:**
```csv
URL,Email,Phone,Address,Social Links,AI Status,Timestamp
https://example.com,contact@example.com,+1-555-0100,"123 Market St","https://linkedin.com/company/example",completed,2026-06-08 10:30:00
```

### In E-Mail-Kampagnen verwenden

Extrahierte E-Mails lassen sich direkt in E-Mail-Marketing integrieren:

1. **Ergebnisse anzeigen** der Extraktionsaufgabe
2. Exportieren Sie die Aufgabenergebnisse oder wählen Sie die Aufgabe im E-Mail-Quellenauswahlfeld der Kampagne
3. Nutzen Sie die gesammelten E-Mails und angereicherten Felder für Prüfung und Personalisierung

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
- KI-Anreicherung: Ein für hochwertige Ziele
- Am besten für: Gezielte Listen, hochwertige Kontakte

**Moderat** (Ausgewogen):
- Seitentiefe: 10-50
- Parallelität: 3-5
- KI-Anreicherung: Ein, wenn Profilqualität wichtig ist
- Am besten für: Allgemeine Outreach-Kampagnen

**Aggressiv** (Mengenfokus):
- Seitentiefe: 50-100+
- Parallelität: 5-10
- KI-Anreicherung: Selektiv verwenden, um Verarbeitungszeit zu steuern
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

2. **In Contact Profile Insights öffnen**:
   - Kontaktprofil-Aufgabe aus Suchergebnissen erstellen
   - Contact Profile Insights aus den entdeckten URLs öffnen

3. **Qualitätskontrolle**:
   - Extrahierte E-Mails und angereicherte Kontaktfelder überprüfen
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

### KI-Anreicherung nicht verfügbar

**Mögliche Ursachen:**
- KI ist für Ihr Konto nicht aktiviert
- Die App konnte den aktuellen KI-Kontostatus nicht laden

**Lösungen:**
1. Bestätigen Sie, dass KI-Funktionen in Ihrem Konto oder Arbeitsbereich aktiviert sind
2. Öffnen Sie das Aufgabenformular erneut, nachdem KI aktiviert wurde
3. Führen Sie die Aufgabe ohne KI-Anreicherung aus, wenn Sie nur E-Mail-Adressen benötigen

### KI-Status zeigt Failed oder Skipped

**Mögliche Ursachen:**
- Die Seite enthielt nicht genügend nützlichen Kontaktkontext
- Die Website blockierte den Zugriff auf Kontaktseiten
- Die KI-Anreicherung lief ab oder schlug für dieses Ergebnis fehl

**Lösungen:**
1. Erweitern Sie die Zeile und prüfen Sie die trotzdem extrahierten E-Mails
2. Erhöhen Sie die Seitentiefe für Websites, bei denen Kontaktseiten tiefer liegen
3. Reduzieren Sie die Parallelität oder verwenden Sie Proxys, wenn Seiten blockiert werden
4. Starten Sie die Aufgabe nach dem Anpassen der Einstellungen neu

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
2. **Anreicherung prüfen**: Telefonnummer, Adresse, Social Links und KI-Status prüfen, wenn KI-Anreicherung aktiviert war
3. **Exportieren oder Importieren**: Aufgabe in einer Kampagne auswählen oder als CSV exportieren
4. **Vorlage auswählen**: E-Mail-Vorlage wählen oder erstellen
5. **Personalisieren**: KI-E-Mail-Writer für personalisierte Inhalte nutzen
6. **Kampagne starten**: Gezielten Outreach versenden

Ausführliche Anleitungen zur Erstellung von Kampagnen finden Sie unter [Massen-E-Mail-Versand](./batch-email-sending).

## Nächste Schritte

- [Wissensbibliothek einrichten](../ai-outreach/knowledge-library)
- [KI-gestützte E-Mail-Kampagnen erstellen](../ai-outreach/ai-email-writer)
- [Mehr über den KI-Marketing-Assistenten erfahren](../ai-outreach/ai-marketing-assistant)

---

**Bereit, öffentliche Kontaktkanäle zu finden?** Beginnen Sie mit einem kleinen Stapel URLs, um Ihre Einstellungen zu testen, und skalieren Sie dann Ihre Kontaktprofil-Vorgänge.
