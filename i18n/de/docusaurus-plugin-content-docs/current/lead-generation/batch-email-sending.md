---
id: batch-email-sending
title: Batch-E-Mail-Versand
sidebar_label: Batch-E-Mail-Versand
description: Senden Sie personalisierte E-Mail-Kampagnen im Maßstab mit SMTP-Integration über aiFetchly.
---

# Batch-E-Mail-Versand

Die Batch-E-Mail-Versandfunktion von aiFetchly ermöglicht es Ihnen, personalisierte E-Mail-Kampagnen im großen Maßstab zu starten. Importieren Sie E-Mails aus Ihren Extraktionsaufgaben, verwenden Sie KI-generierte Vorlagen und senden Sie über Ihren eigenen SMTP-Server für die volle Kontrolle über Ihre Kommunikation.

## Übersicht

Der Batch-E-Mail-Versand besteht aus **4 Schritten**:

1. **E-Mail-Quelle wählen** — Wählen Sie, woher Ihre E-Mails stammen
2. **E-Mail-Vorlage wählen** — Wählen oder erstellen Sie Ihre Nachrichtenvorlage
3. **E-Mail-Filter wählen** (Optional) — Wenden Sie Filter auf Ihre E-Mail-Liste an
4. **E-Mail-Dienst wählen** — SMTP konfigurieren und senden

:::info Voraussetzungen

Stellen Sie vor dem Senden von Kampagnen sicher, dass Sie:
- Einen [SMTP-Dienst konfiguriert](#e-mail-dienste-konfigurieren) haben
- [E-Mail-Vorlagen erstellt](../ai-outreach/ai-email-writer) haben
- [E-Mail-Listen extrahiert oder importiert](./contact-extraction) haben

:::

## E-Mail-Dienste konfigurieren

Bevor Sie E-Mails senden, müssen Sie mindestens einen SMTP-Dienst konfigurieren.

### Was ist SMTP?

**SMTP** (Simple Mail Transfer Protocol) ist der Standard zum Versenden von E-Mails. aiFetchly verwendet SMTP, um E-Mails über Ihren eigenen E-Mail-Server oder E-Mail-Dienstleister zu senden.

### Schritt 1: Zu E-Mail-Diensten navigieren

1. Klicken Sie auf **E-Mail-Marketing** im linken Navigationsmenü
2. Wählen Sie **E-Mail-Dienste** aus dem Untermenü
3. Klicken Sie auf **Neuen Dienst hinzufügen**

### Schritt 2: SMTP-Konfiguration

Geben Sie die folgenden SMTP-Details ein:

#### Dienstname

- **Zweck**: Identifiziert diese SMTP-Konfiguration
- **Beispiel**: "Gmail SMTP", "SendGrid", "AWS SES"
- **Erforderlich**: Ja

#### Absender-E-Mail

- **Zweck**: E-Mail-Adresse, von der aus E-Mails gesendet werden
- **Beispiel**: `kontakt@ihrunternehmen.de`
- **Erforderlich**: Ja

:::tip Absender-Reputation

Verwenden Sie eine dedizierte E-Mail-Adresse für Ihre Akquise. Vermeiden Sie es, persönliche E-Mail-Adressen für den Massenversand zu verwenden.

:::

#### Passwort

- **Zweck**: E-Mail-Kontopasswort oder App-spezifisches Passwort
- **Erforderlich**: Ja
- **Sicherheit**: Passwort wird sicher gespeichert

**Anzeigen/Verbergen-Schalter**: Klicken Sie auf das Augensymbol, um das Passwort anzuzeigen oder zu verbergen.

#### Host

- **Zweck**: SMTP-Server-Hostname
- **Beispiele**:
  - Gmail: `smtp.gmail.com`
  - SendGrid: `smtp.sendgrid.net`
  - AWS SES: `email-smtp.us-east-1.amazonaws.com`
- **Erforderlich**: Ja

#### Port

- **Zweck**: SMTP-Server-Port
- **Gängige Ports**:
  - **587**: Submission (STARTTLS) — Empfohlen
  - **465**: SMTPS (SSL/TLS)
  - **25**: SMTP (nicht empfohlen, oft blockiert)
- **Erforderlich**: Ja

#### SSL/TLS

- **Schalter**: Sichere Verbindung aktivieren
- **Empfehlung**: Immer aktiviert lassen
- **Zweck**: Verschlüsselt die E-Mail-Übertragung

### Schritt 3: Konfiguration testen

Testen Sie Ihre SMTP-Einstellungen vor dem Speichern:

1. **Klicken Sie auf "Verbindung testen"**
2. **Testdetails eingeben**:
   - **Empfänger**: Test-E-Mail-Adresse
   - **Betreff**: Test-Betreffzeile
   - **Inhalt**: Test-E-Mail-Text
3. **Klicken Sie auf "Test-E-Mail senden"**
4. **Überprüfen Sie Ihren Posteingang** auf die Test-E-Mail

:::important Vor dem Senden testen

Testen Sie Ihre SMTP-Konfiguration immer vor der Verwendung in Kampagnen. Dies verhindert fehlgeschlagene Sendungen und verschwendete Ressourcen.

:::

### Schritt 4: Dienst speichern

1. Wenn der Test erfolgreich war, klicken Sie auf **Speichern**
2. Der Dienst erscheint in Ihrer E-Mail-Dienste-Liste
3. Bereit zur Verwendung in Kampagnen

### Gängige SMTP-Anbieter

| Anbieter | Host | Port | Hinweise |
|----------|------|------|-------|
| **Gmail** | `smtp.gmail.com` | 587 | App-Passwort verwenden, nicht das reguläre Passwort |
| **Outlook** | `smtp.office365.com` | 587 | Kann App-Passwort erfordern |
| **SendGrid** | `smtp.sendgrid.net` | 587 | API-Schlüssel als Passwort |
| **Mailgun** | `smtp.mailgun.org` | 587 | SMTP-Zugangsdaten verwenden |
| **AWS SES** | Regionsspezifisch | 587 | Erfordert SMTP-Zugangsdaten |
| **Postmark** | `smtp.postmarkapp.com` | 587 | API-Schlüssel als Passwort |

:::warning Gmail und Outlook

Gmail und Outlook erfordern **App-Passwörter** für den SMTP-Zugriff durch Drittanbieter. Sie können Ihr reguläres Passwort nicht verwenden.

1. Zwei-Faktor-Authentifizierung aktivieren
2. Ein App-Passwort generieren
3. Das App-Passwort in aiFetchly verwenden

:::

## Batch-E-Mails senden

### Schritt 1: E-Mail-Quelle wählen

1. **Navigieren** Sie zu **E-Mail-Marketing** → **Massen-E-Mails senden**
2. **E-Mail-Quelltyp** aus dem Dropdown auswählen:
   - **E-Mail-Aufgabe**: E-Mails aus Extraktionsaufgaben
   - **Manuelle Eingabe**: E-Mail-Liste manuell hochladen
   - **Suchergebnisse**: Suchaufgabenergebnisse verwenden

#### E-Mail-Aufgaben verwenden (Empfohlen)

1. **E-Mail-Aufgabe** aus Dropdown auswählen
2. **Extraktionsaufgabe** aus der Liste wählen
3. **Vorschau** der E-Mail-Liste anzeigen
4. **Option**: "Duplikate vermeiden" aktivieren, um bereits kontaktierte E-Mails zu überspringen

#### Manuelle Eingabe verwenden

1. **Manuelle Eingabe** aus Dropdown auswählen
2. **E-Mails** in das Textfeld eingeben
3. **Format**: Eine E-Mail pro Zeile oder CSV-Format
4. **Klicken Sie auf "Analysieren"**, um die Liste zu verarbeiten

### Schritt 2: E-Mail-Vorlage wählen

1. **Wählen Sie eine oder mehrere Vorlagen** aus Ihrer Vorlagenliste
2. **Vorschau** des Vorlageninhalts anzeigen
3. **Variablen** werden automatisch ausgefüllt:
   - `{$receiver_email}`: E-Mail-Adresse des Empfängers
   - `{$url}`: Quell-URL (falls verfügbar)
   - `{$description}`: Beschreibung oder Kontext
   - `{$sender}`: Absendername aus SMTP-Konfiguration
   - `{$send_time}`: Zeitstempel

:::tip Mehrere Vorlagen

Sie können mehrere Vorlagen auswählen, um verschiedene Nachrichten für A/B-Tests zu verwenden. Das System rotiert die Vorlagen über die Empfänger.

:::

### Schritt 3: E-Mail-Filter wählen (Optional)

Wenden Sie Filter auf Ihre E-Mail-Liste an:

1. **Filtertyp** aus Dropdown auswählen
2. **Filterregeln konfigurieren**
3. **Gefilterte Ergebnisse anzeigen**
4. **Anzahl** der gefilterten E-Mails sehen

**Gängige Filter:**
- Doppelte E-Mails entfernen
- Nach Domain filtern
- Nach Branche/Kategorie filtern
- Vorherige Empfänger ausschließen

:::info Filter-Status

E-Mail-Filter sind in dieser Version derzeit eine Platzhalterfunktion. Duplikatvermeidung ist in Schritt 1 verfügbar.

:::

### Schritt 4: E-Mail-Dienst wählen

1. **SMTP-Dienst** aus Ihren konfigurierten Diensten auswählen
2. **Kampagnenzusammenfassung überprüfen**:
   - E-Mail-Anzahl
   - Ausgewählte Vorlage(n)
   - SMTP-Dienst
   - Geschätzte Sendezeit

3. **Klicken Sie auf "Kampagne senden"**, um den Versand zu starten

### Kampagnenausführung

Nach dem Start:

- **Echtzeit-Fortschritt**: Sendefortschritt verfolgen
- **Erfolgs-/Fehler-Zähler**: Erfolgreiche vs. fehlgeschlagene Sendungen sehen
- **Fehlerprotokolle**: Details für fehlgeschlagene E-Mails anzeigen
- **Pausieren/Fortsetzen**: Kampagnenausführung steuern

## Kampagnen überwachen

### Kampagnenliste

Navigieren Sie zu **E-Mail-Marketing** → **Kampagnen**, um alle Kampagnen zu sehen.

**Kampagneninformationen:**
- Kampagnenname
- E-Mail-Anzahl
- Verwendete Vorlage
- SMTP-Dienst
- Status (Ausstehend, Senden, Abgeschlossen, Fehlgeschlagen)
- Sende-/Fehler-Zähler
- Start- und Endzeiten

### Kampagnenaktionen

| Aktion | Beschreibung |
|--------|-------------|
| **Details anzeigen** | Einzelnen E-Mail-Status sehen |
| **Pausieren** | Laufende Kampagne pausieren |
| **Fortsetzen** | Pausierte Kampagne fortsetzen |
| **Stoppen** | Kampagne beenden |
| **Protokolle herunterladen** | Kampagnenergebnisse exportieren |
| **Löschen** | Kampagnendatensatz entfernen |

### E-Mail-Status

Einzelne E-Mails können folgende Status haben:

| Status | Beschreibung |
|--------|-------------|
| **Ausstehend** | Zum Senden eingereiht |
| **Gesendet** | Erfolgreich zugestellt |
| **Fehlgeschlagen** | Konnte nicht zugestellt werden |
| **Bounced** | Vom Empfängerserver abgelehnt |
| **Geöffnet** | Empfänger hat E-Mail geöffnet |
| **Geklickt** | Empfänger hat Link geklickt |

## Bewährte Praktiken

### 1. SMTP-Konfiguration

**Dedizierte IPs verwenden:**
- Für hochvolumigen Versand dedizierte IP-Adressen verwenden
- Absender-Reputation schrittweise aufbauen
- Zustellbarkeitsmetriken überwachen

**Neue Konten aufwärmen:**
- Mit 20-50 E-Mails pro Tag beginnen
- Über 2-4 Wochen schrittweise erhöhen
- Bounce- und Spam-Raten überwachen

**Mehrere Dienste:**
- 2-3 SMTP-Dienste konfigurieren
- Zwischen Diensten rotieren, um die Last zu verteilen
- Ratenbegrenzung durch einen einzelnen Anbieter verhindern

### 2. E-Mail-Listenqualität

**Listen bereinigen:**
- Bounced E-Mails entfernen
- Abmeldungen und Beschwerden unterdrücken
- E-Mails vor dem Senden verifizieren

**Zielgruppe segmentieren:**
- Nach Branche, Unternehmensgröße oder Interesse gruppieren
- Gezielte Kampagnen für jedes Segment erstellen
- Relevanz und Engagement verbessern

**Duplikate vermeiden:**
- Option "Duplikate vermeiden" aktivieren
- Unterdrückungslisten für vorherige Empfänger
- Regelmäßige Listenpflege

### 3. Vorlagenoptimierung

**Inhalte personalisieren:**
- Variablen umfangreich verwenden
- Empfängerspezifische Details erwähnen
- Auf ihre Website oder Arbeit verweisen

**Kurz und prägnant halten:**
- 100-200 Wörter ideal
- Klare Betreffzeilen
- Ein einziger Call-to-Action

**Mobile-freundlich:**
- Kurze Absätze
- Klare Formatierung
- Auf mobilen Geräten testen

### 4. Timing und Häufigkeit

**Beste Sendezeiten:**
- Dienstag, Mittwoch, Donnerstag: 10:00 - 14:00 Uhr
- Montagmorgens und Wochenenden vermeiden
- Zeiten für Ihre spezifische Zielgruppe testen

**Sende-Häufigkeit:**
- Nicht an denselben Empfänger innerhalb von 30 Tagen senden
- Kampagnen angemessen zeitlich auseinanderlegen
- Abmelderaten überwachen

**Ratenbegrenzung:**
- SMTP-Anbieter-Limits beachten
- Langsam beginnen: 10-20 E-Mails pro Minute
- Auf Blockaden oder Bounces überwachen

### 5. Compliance

**Erforderliche Elemente einbeziehen:**
- Physische Postanschrift
- Klaren Abmeldemechanismus
- Korrekte Header-Informationen
- Ihre Identität in der E-Mail

**Vorschriften beachten:**
- **CAN-SPAM** (USA): Anforderungen für kommerzielle E-Mails
- **DSGVO** (EU): Einwilligung und Datenschutz
- **CASL** (Kanada): Einwilligungsanforderungen

:::warning Rechtliche Compliance

Stellen Sie sicher, dass Ihre E-Mail-Kampagnen den geltenden Gesetzen in den Rechtssystemen Ihrer Empfänger entsprechen. Konsultieren Sie einen Rechtsbeistand für eine Beratung.

:::

## Fehlerbehebung

### SMTP-Verbindung fehlgeschlagen

**Mögliche Ursachen:**
- Falsche SMTP-Einstellungen
- Firewall blockiert Verbindung
- Authentifizierungsprobleme

**Lösungen:**
1. Host, Port und Zugangsdaten überprüfen
2. Mit telnet testen: `telnet smtp.host.com port`
3. Firewall-/Antiviren-Einstellungen prüfen
4. Anderen Port versuchen (587 vs. 465)
5. App-Passwort für Gmail/Outlook überprüfen

### Hohe Bounce-Rate

**Mögliche Ursachen:**
- Ungültige E-Mail-Adressen
- Absender-Reputationsprobleme
- Spam-Filter-Auslöser

**Lösungen:**
1. E-Mail-Listenqualität überprüfen
2. Absender-Reputation prüfen (MXToolbox)
3. E-Mail-Inhalt verbessern
4. E-Mail-Konto aufwärmen
5. Anderen SMTP-Dienst verwenden

### E-Mails landen im Spam

**Mögliche Ursachen:**
- Schlechte Absender-Reputation
- Spammy Inhalt
- Fehlende Authentifizierung

**Lösungen:**
1. SPF, DKIM und DMARC einrichten
2. E-Mail-Inhaltsqualität verbessern
3. Spam-Auslöserwörter vermeiden
4. Physische Adresse und Abmeldelink einfügen
5. Sendedomain aufwärmen

### Ratenbegrenzung

**Mögliche Ursachen:**
- Zu schnell gesendet
- SMTP-Anbieter-Limits überschritten

**Lösungen:**
1. Sendegeschwindigkeit reduzieren (E-Mails pro Minute)
2. Mehrere SMTP-Dienste konfigurieren
3. Anbieter-Ratenlimits prüfen
4. SMTP-Plan bei Bedarf upgraden

### Vorlagen werden nicht personalisiert

**Mögliche Ursachen:**
- Variablen stimmen nicht mit Daten überein
- Fehlende Daten in der E-Mail-Liste

**Lösungen:**
1. Überprüfen Sie, ob die Variablennamen genau übereinstimmen
2. Prüfen Sie, ob die E-Mail-Liste die erforderlichen Felder enthält
3. Vor dem Senden mit Vorschau testen
4. Generischen Inhalt als Fallback verwenden

## Kampagnenmetriken zum Verfolgen

### Zustellbarkeit

- **Sende-Rate**: Erfolgreich gesendete E-Mails / Gesamtanzahl E-Mails
- **Bounce-Rate**: Bounced E-Mails / Gesendete E-Mails
- **Zustellrate**: Zugestellte E-Mails / Gesendete E-Mails

### Engagement

- **Öffnungsrate**: Öffnungen / Zugestellte
- **Klickrate**: Klicks / Öffnungen
- **Konversionsrate**: Konversionen / Klicks

### Absender-Reputation

- **Beschwerderate**: Spam-Beschwerden / Zugestellte
- **Abmelderate**: Abmeldungen / Zugestellte
- **Spam-Fallen-Treffer**: E-Mails an Spam-Fallen

:::tip Benchmark-Metriken

Branchendurchschnitte:
- Öffnungsrate: 15-25%
- Klickrate: 2-5%
- Bounce-Rate: < 2%
- Beschwerderate: < 0,1%

:::

## Erweiterte Workflows

### Workflow 1: Drip-Kampagne

Automatisierte Mehrfach-Kontakt-Kampagnen einrichten:

1. **Tag 1**: Erste Akquise-E-Mail
2. **Tag 3**: Nachfassen bei keiner Antwort
3. **Tag 7**: Letztes Nachfassen mit Mehrwert
4. **Tag 14**: Abschluss-E-Mail

Verwenden Sie den [Scheduler](../automation/task-scheduling) zur Automatisierung.

### Workflow 2: A/B-Testing

Verschiedene Ansätze testen:

1. **2-3 Vorlagenvarianten erstellen**
2. **E-Mail-Liste** in Segmente aufteilen
3. **Verschiedene Vorlagen** an jedes Segment senden
4. **Ergebnisse messen** (Öffnungsrate, Antwortrate)
5. **Gewinner** für zukünftige Kampagnen verwenden

### Workflow 3: Segmentierte Kampagnen

Spezifische Zielgruppen ansprechen:

1. **E-Mails extrahieren** nach Branche oder Standort
2. **Maßgeschneiderte Vorlagen** für jedes Segment erstellen
3. **Gezielte Kampagnen** an jedes Segment senden
4. **Ergebnisse nach Segment analysieren**
5. **Nachrichten basierend auf Antworten optimieren**

## Integration mit Lead-Generierung

Der vollständige E-Mail-Akquise-Workflow:

1. **[Suchmaschinen](./search-engines)**: Ziel-Websites finden
2. **[Kontaktextraktion](./contact-extraction)**: E-Mails sammeln
3. **[KI-E-Mail-Writer](../ai-outreach/ai-email-writer)**: Personalisierte Vorlagen erstellen
4. **[Wissensbibliothek](../ai-outreach/knowledge-library)**: Kontext für die KI bereitstellen
5. **Batch-E-Mail-Versand**: Kampagnen starten

## Nächste Schritte

- [Den KI-Marketing-Assistenten einrichten](../ai-outreach/ai-marketing-assistant) für Strategie
- [Aufgabenplanung konfigurieren](../automation/task-scheduling) für Automatisierung
- [Systemeinstellungen überprüfen](../settings/system-settings)

---

**Bereit, Kampagnen zu senden?** Beginnen Sie mit einem kleinen Test-Batch (20-50 E-Mails), um zu überprüfen, ob alles funktioniert, und skalieren Sie dann Ihre Akquise-Aktivitäten.
