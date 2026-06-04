---
id: ai-email-writer
title: KI-E-Mail-Verfasser
sidebar_label: KI-E-Mail-Verfasser
description: Erstellen Sie personalisierte, KI-generierte E-Mail-Vorlagen mit Variablenersetzung und Integration der Wissensbibliothek.
---

# AI Email Writer

Der AI Email Writer ist aiFetchlys intelligentes E-Mail-Erstellungssystem. Generieren Sie personalisierte Outreach-E-Mails, erstellen Sie wiederverwendbare Vorlagen mit dynamischen Variablen und nutzen Sie Ihre Wissensbibliothek für kontextbezogene Nachrichten.

## Grundlagen der KI-E-Mail-Generierung

Herkömmliche E-Mail-Vorlagen sind statisch und generisch. aiFetchlys AI Email Writer:

- **Generiert einzigartige Inhalte** für jeden Empfänger
- **Bezieht Ihre Wissensbasis ein** durch RAG-Integration
- **Personalisiert im großen Maßstab** bei gleichbleibender Qualität
- **Passt sich an verschiedene Kontexte** und Empfängertypen an

:::info KI + Wissensbibliothek

Für optimale Ergebnisse laden Sie [relevante Dokumente](./knowledge-library) in Ihre Wissensbibliothek hoch, bevor Sie E-Mails generieren. Die KI wird auf Ihre spezifischen Produkte, Dienstleistungen und Alleinstellungsmerkmale zurückgreifen.

:::

## Übersicht der E-Mail-Vorlagen

Vorlagen sind das Fundament Ihrer E-Mail-Kampagnen. Sie enthalten:

1. **Statische Inhalte**: Grundnachricht, die gleich bleibt
2. **Dynamische Variablen**: Platzhalter, die mit empfängerspezifischen Daten ersetzt werden
3. **KI-Generierung**: Optionale KI-gestützte Inhaltserstellung
4. **Erweiterte Formatierung**: Unterstützung für verschiedene Textstile

## E-Mail-Vorlagen erstellen

### Schritt 1: Zum E-Mail-Marketing navigieren

1. Klicken Sie auf **Outreach Campaign** im linken Navigationsmenü
2. Wählen Sie **Templates** aus dem Untermenü
3. Klicken Sie auf **Create New Template**

### Schritt 2: Vorlageninformationen

Geben Sie die folgenden Details ein:

#### Titel (Erforderlich)

- **Zweck**: Identifizierung der Vorlage in Ihrer Liste
- **Beispiel**: "Produktlaunch-Outreach", "Partnerschaftsvorschlag"
- **Richtlinie**: Verwenden Sie beschreibende, spezifische Namen

#### Beschreibung (Optional)

- **Zweck**: Kontext zum Anwendungsfall der Vorlage
- **Beispiel**: "Erstkontakt für neuen Produktlaunch an qualifizierte Leads"
- **Richtlinie**: Geben Sie an, wann die Vorlage verwendet werden soll, die Zielgruppe und die Kernbotschaft

### Schritt 3: Vorlageninhalt

Verfassen Sie Ihren E-Mail-Inhalt im Rich-Text-Editor.

#### Variablen verwenden

Variablen sind Platzhalter, die beim Versenden der E-Mails durch tatsächliche Daten ersetzt werden.

**Verfügbare Variablen:**

| Variable | Beschreibung | Beispielausgabe |
|----------|-------------|-----------------|
| `{$send_time}` | Aktueller Zeitstempel | "2024-01-15 10:30 AM" |
| `{$sender}` | Absendername | "John Smith" |
| `{$receiver_email}` | E-Mail-Adresse des Empfängers | "contact@company.com" |
| `{$url}` | Quell-URL | "https://company.com" |
| `{$description}` | Beschreibungstext | "Software company in New York" |

**Beispielvorlage mit Variablen:**

```
Subject: Partnership Opportunity from {$sender}

Hi,

I came across your website ({$url}) and was impressed by your work in {$description}.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
{$sender}

Sent: {$send_time}
```

**Nach Variablenersetzung:**

```
Subject: Partnership Opportunity from John Smith

Hi,

I came across your website (https://techstartup.com) and was impressed by your work in Software Development.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
John Smith

Sent: 2024-01-15 10:30 AM
```

### Schritt 4: KI-generierte Inhalte (Optional)

Für KI-gestützte Inhaltserstellung:

1. **Aktivieren Sie "Use AI Generation"**
2. **Geben Sie einen Prompt ein**, der beschreibt, was Sie möchten
3. **Aktivieren Sie RAG Context**, um die Wissensbibliothek zu nutzen
4. **Klicken Sie auf Generate**, um Inhalte zu erstellen

**Beispiel-Prompts:**
- "Schreibe eine freundliche Vorstellungs-E-Mail für unsere Marketingdienstleistungen"
- "Erstelle einen personalisierten Outreach, der unsere SaaS-Plattform-Funktionen erwähnt"
- "Generiere eine E-Mail für einen Partnerschaftsvorschlag"

:::tip KI + RAG-Integration

Wenn der RAG-Kontext aktiviert ist, greift die KI automatisch auf Ihre Wissensbibliothek zu, um präzise Informationen über Ihre Produkte, Dienstleistungen und Alleinstellungsmerkmale einzubeziehen.

:::

### Schritt 5: Vorschau und Test

1. **Klicken Sie auf "Preview"**, um die Vorlage mit Beispielvariablen zu sehen
2. **Testen Sie verschiedene Variablenkombinationen**
3. **Bearbeiten Sie den Inhalt** nach Bedarf
4. **Speichern Sie die Vorlage**, wenn Sie zufrieden sind

## Vorlagen verwalten

### Vorlagenliste

Navigieren Sie zu **Outreach Campaign** → **Templates**, um alle Vorlagen zu sehen.

**Vorlageninformationen:**
- Titel
- Beschreibung
- Erstellungsdatum
- Datum der letzten Änderung
- Verwendungshäufigkeit

### Vorlagenaktionen

| Aktion | Beschreibung |
|--------|-------------|
| **Edit** | Vorlageninhalt und Variablen bearbeiten |
| **Duplicate** | Eine Kopie der Vorlage erstellen |
| **Delete** | Vorlage entfernen (Bestätigung erforderlich) |
| **Preview** | Vorlage mit Beispielvariablen anzeigen |
| **Use in Campaign** | Für Batch-E-Mail-Versand auswählen |

### Bewährte Methoden für Vorlagen

#### 1. Klare Betreffzeilen

- ✅ "Partnership Opportunity: [Ihr Unternehmen] + [Unser Unternehmen]"
- ✅ "Kurze Frage zu [Ihrer Branche]"
- ❌ "Hallo" oder "Hi"

#### 2. Personalisierung

- Verwenden Sie Variablen zur Personalisierung der Inhalte
- Erwähnen Sie spezifische Details über den Empfänger
- Beziehen Sie sich auf deren Website, Branche oder Arbeit

#### 3. Mehrwert zuerst

- Beginnen Sie mit Mehrwert, nicht nur einem Verkaufsanruf
- Erklären Sie Vorteile, nicht nur Funktionen
- Seien Sie klar darüber, was der Empfänger davon hat

#### 4. Klarer Call-to-Action

- Ein einziger, klarer nächster Schritt
- Leicht verständlich
- Geringe Hürde (z. B. "Antworten Sie auf diese E-Mail")

#### 5. Professioneller Ton

- Korrekturlesen auf Grammatik und Rechtschreibung
- Professionelle Sprache beibehalten
- Übermäßig lockere oder vertriebsorientierte Sprache vermeiden

## Vorlagenbeispiele

### Beispiel 1: Produkt-Outreach

**Betreff:** Optimieren Sie Ihren [Branche]-Workflow mit [Produktname]

```
Hi,

I noticed on {$url} that you're in the [Industry] space.

I'm reaching out because our platform has helped companies like [Description]
reduce their workflow time by up to 40%.

Would you be interested in a quick demo to see how it could work for {$receiver_email}?

Best,
{$sender}
```

### Beispiel 2: Partnerschaftsvorschlag

**Betreff:** Partnerschaftsmöglichkeit zwischen [Ihr Unternehmen] & [Unser Unternehmen]

```

Hi,

I've been following [Description] (from {$url}) and think there's a
great synergy between our companies.

We've been working on [Industry] solutions and believe a partnership
could be mutually beneficial. Our companies serve similar markets with
complementary offerings.

Would you be open to a brief call to explore possibilities?

Best regards,
{$sender}
```

### Beispiel 3: Inhaltskooperation

**Betreff:** Möglichkeit zur Inhaltskooperation

```
Hi,

I came across your content on {$url} and was impressed by your
expertise in [Industry].

I'm writing to explore a potential content collaboration. Our audience
is very interested in [Topic], and I think your insights would provide
tremendous value.

Would you be interested in discussing a guest post or joint webinar?

Best,
{$sender}
```

### Beispiel 4: Dienstleistungsvorstellung

**Betreff:** [Dienstleistungstyp] für [Ihr Unternehmen]

```
Hi,

I was researching companies in the [Industry] space and came across
{$url}.

I noticed you're [Description] and thought our [Service Type] might
be a good fit for your current stage. We've helped similar companies
achieve [Specific Result].

Would you be open to a brief conversation about your goals and
how we might help?

Best regards,
{$sender}
```

## Erweiterte Funktionen

### Bedingte Inhalte

Erstellen Sie Varianten basierend auf Empfängerdaten:

```
{$if_industry}
If they're in [Industry], mention relevant case studies
{$endif}

{$if_company_size}
Adjust messaging based on company size
{$endif}
```

### Mehrsprachige Unterstützung

Erstellen Sie Vorlagen in mehreren Sprachen:

1. **Duplizieren Sie die Vorlage** für jede Sprache
2. **Übersetzen Sie den Inhalt** unter Beibehaltung der Variablenstruktur
3. **Verwenden Sie die entsprechende Vorlage** basierend auf dem Standort des Empfängers

### A/B-Tests

Erstellen Sie mehrere Vorlagenvarianten:

1. **Duplizieren Sie die Vorlage** 2-3 Mal
2. **Ändern Sie ein Element** pro Version (Betreffzeile, Eröffnung, CTA)
3. **Testen Sie mit kleinen Gruppen** zuerst
4. **Messen Sie die Ergebnisse** und verwenden Sie die beste Version

### Dynamische Inhaltsblöcke

Verwenden Sie verschiedene Inhaltsabschnitte basierend auf Variablen:

```
{$value_proposition_1}
Alternative: {$value_proposition_2}
Alternative: {$value_proposition_3}
```

## Integration mit Batch-E-Mail-Versand

Vorlagen werden im Batch-E-Mail-Versand-Workflow verwendet:

1. **Wählen Sie eine Vorlage** in Schritt 2 des Batch-E-Mail-Prozesses
2. **Variablen werden automatisch befüllt** aus Ihrer E-Mail-Liste
3. **Jeder Empfänger erhält eine personalisierte E-Mail**
4. **KI kann die Vorlage erweitern** mit Inhalten aus der Wissensbibliothek

Ausführliche Anleitungen finden Sie unter [Batch-E-Mail-Versand](../lead-generation/batch-email-sending).

## Fehlerbehebung

### Variablen werden nicht ersetzt

**Mögliche Ursachen:**
- Variablennamen falsch geschrieben
- Fehlende Daten in der E-Mail-Liste
- Falsche Variablensyntax

**Lösungen:**
1. Überprüfen Sie die Variablensyntax: `{$variable_name}`
2. Stellen Sie sicher, dass Daten für alle Variablen vorhanden sind
3. Testen Sie mit der Vorschau vor dem Versand

### KI-Generierung funktioniert nicht

**Mögliche Ursachen:**
- KI-Dienst nicht konfiguriert
- RAG-Kontext aktiviert, aber keine Dokumente in der Wissensbibliothek
- Prompt ist zu vage

**Lösungen:**
1. Überprüfen Sie die KI-Einstellungen in der Systemkonfiguration
2. Laden Sie relevante Dokumente in die Wissensbibliothek hoch
3. Geben Sie spezifische, detaillierte Prompts ein
4. Versuchen Sie es zuerst mit deaktiviertem RAG

### Vorlage ist zu generisch

**Mögliche Ursachen:**
- Zu viel statischer Text
- Nicht genug Variablen
- KI-Generierung deaktiviert

**Lösungen:**
1. Fügen Sie mehr Variablen für Personalisierung hinzu
2. Aktivieren Sie die KI-Generierung für dynamische Inhalte
3. Verwenden Sie den RAG-Kontext für spezifische Informationen
4. Erstellen Sie mehrere Vorlagen für verschiedene Anwendungsfälle

## Zusammenfassung der bewährten Methoden

### EMPFEHLUNG ✅

- **Personalisieren Sie Inhalte** mit Variablen
- **Testen Sie gründlich** vor Kampagnen
- **Halten Sie Betreffzeilen** klar und ansprechend
- **Bieten Sie Mehrwert** direkt zu Beginn
- **Verwenden Sie klare CTAs**
- **Korrigieren Sie** alle Vorlagen
- **Erstellen Sie Varianten** für verschiedene Zielgruppen
- **Nutzen Sie die KI** mit RAG-Kontext

### VERMEIDEN ❌

- **Nicht zu vertriebsorientiert sein**
- **Keine vagen Betreffzeilen verwenden**
- **Nicht ohne Testversand senden**
- **Den Empfängerkontext nicht ignorieren**
- **E-Mails nicht zu lang machen**
- **Keine übermäßige Formatierung verwenden**
- **Call-to-Action nicht vergessen**
- **Nicht von "no-reply"-Adressen senden**

## Nächste Schritte

Nachdem Sie Ihre Vorlagen erstellt haben:

- [E-Mail-Dienste konfigurieren (SMTP)](../lead-generation/batch-email-sending#e-mail-dienste-konfigurieren)
- [Batch-E-Mail-Versand einrichten](../lead-generation/batch-email-sending)
- [Den KI-Marketing-Assistenten nutzen](./ai-marketing-assistant) für Ihre Strategie

---

**Bereit, Vorlagen zu erstellen?** Beginnen Sie mit einer einfachen Outreach-Vorlage und fügen Sie schrittweise mehr Personalisierung und KI-generierte Inhalte hinzu, während Sie sich mit dem System vertraut machen.
