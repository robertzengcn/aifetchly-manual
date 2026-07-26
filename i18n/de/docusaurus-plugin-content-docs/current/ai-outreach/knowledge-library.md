---
id: knowledge-library
title: Wissensbibliothek
sidebar_label: Wissensbibliothek
description: Erstellen Sie Ihre Wissensbasis mit Dokumenten, die die KI verwendet, um kontextuell relevanten Content zu generieren.
---

# Knowledge Library

Die Wissensbibliothek ist aiFetchlys intelligentes Dokumentenmanagementsystem. Laden Sie Ihre Dokumente hoch (PDFs, Word-Dateien, HTML und mehr), um eine Wissensbasis zu erstellen, die KI-generierte Inhalte unterstützt und sicherstellt, dass Ihre Kommunikation kontextuell präzise und personalisiert ist.

:::info Abonnement erforderlich

Die Wissensbibliothek – einschließlich des kostenlosen lokalen Einbettungsmodells – erfordert ein aiFetchly-Abonnement. Wenn für Ihr Konto keine KI aktiviert ist, zeigt die Seite eine Aufforderung **Abonnement erforderlich**.

:::

## Was ist RAG?

**RAG** (Retrieval-Augmented Generation) ist eine Technologie, die:

1. Ihre Dokumente **aufnimmt** und in kleinere Abschnitte unterteilt
2. **Vektor-Einbettungen erstellt**, die die semantische Bedeutung Ihres Inhalts verstehen
3. **Relevante Informationen abruft**, wenn Inhalte generiert werden
4. **KI-Antworten verbessert** mit Ihrem spezifischen Wissen

:::info Warum RAG wichtig ist

Herkömmliche KI-Systeme generieren generische Inhalte. Mit RAG greift aiFetchlys KI auf IHRE Dokumente zu und erstellt personalisierte, kontextbewusste E-Mails und Marketinginhalte.

:::

## Unterstützte Dateitypen

| Format | Erweiterungen | Am besten für |
|--------|------------|----------|
| **PDF** | `.pdf` | Broschüren, Whitepaper, Dokumentation |
| **Microsoft Word** | `.doc`, `.docx` | Vorschläge, Verträge, Produktinformationen |
| **Text** | `.txt` | Einfache Textdateien, Notizen |
| **Markdown** | `.md` | Technische Dokumentation, README-Dateien |
| **HTML** | `.html`, `.htm` | Webinhalte, Artikel |

## Dokumente hochladen

### Schritt 1: Zur Wissensbibliothek navigieren

1. Klicken Sie auf **Wissen** im linken Navigationsmenü
2. Sie sehen die Benutzeroberfläche der Wissensbibliothek

### Schritt 2: Dokumente hochladen

**Methode 1: Drag & Drop**

1. Ziehen Sie Dateien von Ihrem Computer
2. Legen Sie sie im Upload-Bereich ab
3. Visuelles Feedback zeigt, dass Dateien hinzugefügt werden

**Methode 2: Dateibrowser**

1. Klicken Sie auf die Schaltfläche **Upload** (oder den Upload-Bereich)
2. Navigieren Sie im Dateibrowser zu Ihren Dateien
3. Wählen Sie ein oder mehrere Dokumente aus
4. Klicken Sie auf **Öffnen**, um hochzuladen

### Schritt 3: Verarbeitung

Nach dem Upload werden Dokumente automatisch verarbeitet:

1. **Speichern**: Dateien werden in der Datenbank gespeichert
2. **Chunking**: Dokumente werden in kleinere Segmente unterteilt
3. **Einbettung**: Vektor-Einbettungen für die semantische Suche werden erstellt
4. **Status-Aktualisierung**: Verarbeitungsstatus ändert sich von **Ausstehend** → **In Bearbeitung** → **Abgeschlossen**

:::tip Verarbeitungszeit

Die Verarbeitungszeit hängt von der Dateigröße ab:
- Kleine Dateien (< 1 MB): 10-30 Sekunden
- Mittlere Dateien (1-5 MB): 30-60 Sekunden
- Große Dateien (5-10 MB): 1-3 Minuten

:::

## Dokumente verwalten

### Dokumentenlistenansicht

Die Wissensbibliothek zeigt alle Ihre Dokumente mit folgenden Informationen:

| Spalte | Beschreibung |
|--------|-------------|
| **Name** | Dokumentdateiname |
| **Titel** | Dokumenttitel (bearbeitbar) |
| **Status** | Verarbeitungsstatus (Ausstehend/In Bearbeitung/Abgeschlossen/Fehler) |
| **Typ** | Dateityp (PDF, DOCX usw.) |
| **Größe** | Dateigröße |
| **Upload-Datum** | Wann das Dokument hochgeladen wurde |
| **Aktionen** | Anzeigen, Herunterladen, Löschen, Neu einbetten |

### Dokumentaktionen

| Aktion | Beschreibung |
|--------|-------------|
| **Anzeigen** | Dokument öffnen, um den Inhalt zu sehen |
| **Herunterladen** | Originaldatei auf Ihren Computer herunterladen |
| **Löschen** | Dokument aus der Wissensbasis entfernen |
| **Neu einbetten** | Dokument mit neuem Einbettungsmodell erneut verarbeiten |
| **Protokolle anzeigen** | Fehlerdetails für fehlgeschlagene Dokumente anzeigen |

### Suche und Filter

- **Nach Name suchen**: Dokumente nach Dateiname filtern
- **Nach Status filtern**: Nur abgeschlossene, in Bearbeitung befindliche oder fehlgeschlagene Dokumente anzeigen
- **Nach Typ filtern**: Nur bestimmte Dateitypen anzeigen

### Massenoperationen

- **Mehrere auswählen**: Kontrollkästchen neben Dokumenten aktivieren
- **Massenlöschung**: Mehrere Dokumente gleichzeitig entfernen
- **Auswahl aufheben**: Alle Dokumente abwählen

## Verarbeitungsstatus verstehen

| Status | Farbe | Bedeutung | Aktion |
|--------|-------|---------|--------|
| **Ausstehend** | Grau | Zur Verarbeitung eingereiht | Auf automatische Verarbeitung warten |
| **In Bearbeitung** | Blau | Wird gerade eingebettet | Auf Abschluss warten |
| **Abgeschlossen** | Grün | Zur Verwendung in der KI-Generierung bereit | Dokument ist aktiv |
| **Fehler** | Rot | Verarbeitung fehlgeschlagen | Protokolle anzeigen, Neu-Einbettung versuchen |

## Dokumente neu einbetten

Wenn Sie Einbettungsmodelle ändern oder ein Dokument erneut verarbeiten müssen:

1. Suchen Sie das Dokument in der Liste
2. Klicken Sie auf die Schaltfläche **Neu einbetten**
3. Der Dokumentstatus ändert sich zu **In Bearbeitung**
4. Neue Einbettungen werden mit dem aktuellen Modell erstellt
5. Der Status aktualisiert sich auf **Abgeschlossen**, sobald fertig

**Anwendungsfälle für Neu-Einbettung:**
- Einbettungsmodell in den Einstellungen geändert
- Vorherige Einbettung teilweise fehlgeschlagen
- Aktualisierte Chunking-Parameter verwenden möchten

Informationen zur Auswahl oder Änderung des Modells finden Sie unten unter [Einbettungsmodell-Einstellungen](#einbettungsmodell-einstellungen).

## Einbettungsmodell-Einstellungen

Einbettungen wandeln Ihren Text in Vektoren um, die die KI semantisch durchsucht. Sie wählen in den **Einstellungen** aus, welches Einbettungsmodell aiFetchly verwendet.

### Einbettungseinstellungen öffnen

1. Öffnen Sie die **Wissensbibliothek**.
2. Klicken Sie im Header auf **Einstellungen**.

Im Dialog wird ein Dropdown-Menü **Einbettungsmodell** angezeigt, das alle verfügbaren Modelle, Ihr **Aktuelles Modell** und eine Schaltfläche **Modell aktualisieren** enthält.

### Lokale vs. Remote-Modelle

Das Dropdown-Menü vereint zwei Arten von Modellen:

| Typ | Beispiel | Hinweise |
|------|---------|-------|
| **Lokal (kostenlos)** | `Xenova/all-MiniLM-L6-v2 (free)` | Läuft vollständig auf Ihrem Gerät (384-dimensional). Kostenlos, privat und funktioniert offline, sobald es zwischengespeichert ist. |
| **Remote** | Vom Server bereitgestellte Modelle | Werden auf dem aiFetchly-KI-Server erzeugt. Kostenlos oder kostenpflichtig, je nach Tarif. |

Kostenlose Modelle – lokal oder Remote – zeigen im Dropdown einen grünen **Kostenlos**-Chip. Das lokale Modell wird immer angezeigt, selbst wenn die Liste der Remote-Modelle nicht geladen werden kann, damit es stets eine funktionierende Option gibt.

:::tip Lokales Modell = privat + kostenlos

Das lokale Modell läuft über Transformers.js auf Ihrer eigenen CPU. Wenn es ausgewählt ist, wird Ihr Dokumenttext **niemals an den Remote-Einbettungs-Endpunkt gesendet** – die Einbettungen werden vollständig auf Ihrem Gerät erzeugt. Wählen Sie es für Datenschutz, keine Kosten und Offline-Nutzung.

:::

:::note Erste Nutzung lädt das Modell herunter

Wenn Sie das lokale Modell zum ersten Mal verwenden, lädt aiFetchly die Modellgewichte (von Hugging Face) herunter und speichert sie auf der Festplatte zwischen. Die erste Indizierung läuft daher langsamer; spätere Durchläufe verwenden das zwischengespeicherte Modell und sind schnell.

:::

Wählen Sie ein Modell und klicken Sie auf **Modell aktualisieren**. Das neue Modell gilt für **zukünftige** Indizierungen und Neu-Einbettungen. Bestehende Dokumente behalten das Modell, mit dem sie ursprünglich eingebettet wurden, bis Sie sie neu einbetten.

### Automatischer Fallback während der Indizierung

Wenn Sie ein Remote-Modell verwenden und die Einbettung nach Wiederholungsversuchen fehlschlägt (z. B. durch einen Netzwerk- oder Serverfehler), führt aiFetchly automatisch Folgendes aus:

1. Verwirft alle teilweisen Vektoren für dieses Dokument, damit die Einbettungsräume nicht vermischt werden.
2. Bettet das gesamte Dokument mit dem **lokalen, kostenlosen Modell** neu ein.
3. Trägt das lokale Modell auf dem Dokument ein.

Sie sehen: *"Remote-Einbettung fehlgeschlagen. AiFetchly hat stattdessen das lokale, kostenlose Einbettungsmodell verwendet."*

Wenn auch das lokale Modell fehlschlägt, wird das Dokument als **Fehler** markiert: *"Einbettungserzeugung nach Remote-Wiederholung und lokalem Fallback fehlgeschlagen. Details finden Sie im Fehlerprotokoll des Dokuments."*

:::warning Kontingentfehler führen zu keinem Fallback

Wenn das Remote-Versagen ein Abrechnungs- oder Kontingentlimit ist, führt aiFetchly **keinen** stillen Fallback durch – es zeigt *"Remote-Einbettungskontingent oder Abrechnungslimit erreicht"*, damit Sie Ihren Tarif aufladen können. Wechseln Sie zum lokalen Modell (oder betten Sie nach Behebung des Kontingentproblems neu ein), um fortzufahren.

:::

### Durchsuchen einer Bibliothek mit gemischten Modellen

Wenn einige Dokumente mit einem Remote-Modell und andere mit dem lokalen Modell eingebettet wurden, wird jedes Dokument mit dem Modell durchsucht, mit dem es eingebettet wurde – die beiden Einbettungsräume sind nicht austauschbar. Wenn der Remote-Endpunkt während einer Suche nicht verfügbar ist, werden die remote-indizierten Dokumente bei dieser Suche übersprungen und nur die lokal indizierten Dokumente liefern Ergebnisse.

## Fehlerbehebung

### Dokumentstatus: "Fehler"

**Mögliche Ursachen:**
- Beschädigte Datei
- Nicht unterstütztes Dateiformat
- Datei zu groß
- Kodierungsprobleme

**Lösungen:**
1. **Protokolle anzeigen**, um den spezifischen Fehler zu sehen
2. **Neu einbetten** des Dokuments versuchen
3. Die Originaldatei **erneut hochladen**
4. **Datei konvertieren** in ein anderes Format (z. B. DOC → PDF)

### Langsame Verarbeitung

**Mögliche Ursachen:**
- Große Dateigröße
- Hohe Systemauslastung
- Netzwerklatenz (bei Remote-Einbettung)
- Erstmalige Verwendung des lokalen Einbettungsmodells (es lädt einmal Modellgewichte herunter)

**Lösungen:**
1. Auf Abschluss der Verarbeitung warten
2. Große Dokumente in kleinere Dateien aufteilen
3. Andere Anwendungen schließen, um Ressourcen freizugeben
4. Wenn Sie gerade auf das lokale Modell gewechselt sind, lädt der erste Durchlauf das Modell herunter und speichert es zwischen – spätere Durchläufe sind schnell

### Dokument wird nicht in KI-Inhalten verwendet

**Mögliche Ursachen:**
- Dokument nicht vollständig verarbeitet
- Dokumentinhalt nicht relevant für die Anfrage
- RAG-Kontext nicht aktiviert

**Lösungen:**
1. Überprüfen Sie, ob der Dokumentstatus **Abgeschlossen** ist
2. Stellen Sie sicher, dass der RAG-Kontext im KI-Chat/E-Mail-Writer aktiviert ist
3. Versuchen Sie, nach spezifischerem Inhalt zu suchen
4. Laden Sie zusätzliche relevante Dokumente hoch

## Bewährte Praktiken

### 1. Dokumentauswahl

**Laden Sie Dokumente hoch, die:**
- Ihre Produkte oder Dienstleistungen detailliert beschreiben
- Ihr Wertangebot erklären
- Fallstudien oder Erfolgsgeschichten enthalten
- Branchenspezifische Terminologie beinhalten
- Wettbewerbsvorteile darlegen

**Vermeiden Sie:**
- Generische oder veraltete Informationen
- Irrelevante Inhalte
- Sehr große Dateien (> 10 MB)
- Schlecht formatierte Dokumente

### 2. Dokumentenorganisation

**Namenskonventionen:**
- Beschreibende Namen verwenden: `Product_Brochure_2024.pdf`
- Versionsnummern einbeziehen: `Pricing_Guide_v2.docx`
- Daten hinzufügen: `Case_Study_January_2024.pdf`

**Kategorisierung:**
- Verwandte Dokumente zusammen gruppieren
- Einheitliche Namensmuster verwenden
- Dokumente für einfache Filterung markieren

### 3. Inhaltliche Qualität

**Für beste Ergebnisse:**
- Gut formatierte Dokumente verwenden
- Strukturierte Überschriften einbeziehen
- Spezifische Details und Beispiele bereitstellen
- Informationen aktuell halten
- Professionelle Sprache verwenden

### 4. Regelmäßige Wartung

**Halten Sie Ihre Wissensbasis gesund:**
- **Regelmäßig überprüfen**: Veraltete Dokumente entfernen
- **Inhalte aktualisieren**: Bei Änderungen erneut hochladen
- **Status überwachen**: Auf fehlgeschlagene Einbettungen prüfen
- **Größe optimieren**: Große Dokumente wann möglich aufteilen

## Integration mit KI-Funktionen

Die Wissensbibliothek integriert sich mit:

### KI-E-Mail-Writer

Beim Erstellen KI-generierter E-Mails:

1. **RAG-Kontext aktivieren** im E-Mail-Writer
2. Die KI durchsucht Ihre Wissensbibliothek nach relevanten Informationen
3. Abgerufene Inhalte werden zur Personalisierung der E-Mails verwendet
4. E-Mails enthalten präzise, kontextbewusste Informationen

**Beispiel:**
- Sie laden einen Produktkatalog-PDF hoch
- Die KI generiert E-Mails mit Verweis auf spezifische Produkte
- Jede E-Mail erwähnt für den Empfänger relevante Produkte

### KI-Marketing-Assistent

Beim Chatten mit dem KI-Assistenten:

1. **RAG-Kontext umschalten** (📖-Symbol)
2. Stellen Sie Fragen zu Ihrem Unternehmen, Produkten oder Dienstleistungen
3. Die KI durchsucht die Wissensbibliothek nach Antworten
4. Antworten basieren auf IHRER Dokumentation

**Beispielfragen:**
- "Was sind unsere wichtigsten Produktfunktionen?"
- "Wie vergleicht sich unsere Preisgestaltung mit der Konkurrenz?"
- "Was ist unsere Rückerstattungsrichtlinie?"
- "Erstellen Sie eine Marketing-E-Mail für Produkt X"

## Beispiel-Anwendungsfälle

### Anwendungsfall 1: Produktmarketing

**Hochzuladende Dokumente:**
- Produktbroschüren
- Funktionsspezifikationen
- Preislisten
- Vergleichstabellen
- Fallstudien

**Ergebnis:** Die KI generiert detaillierte, präzise Produkt-E-Mails.

### Anwendungsfall 2: Dienstleistungsunternehmen

**Hochzuladende Dokumente:**
- Dienstleistungsbeschreibungen
- Prozessdokumentationen
- Kundenreferenzen
- Portfolio-Beispiele
- Preispakete

**Ergebnis:** Die KI erstellt dienstleistungsorientierte Kommunikation mit spezifischen Details.

### Anwendungsfall 3: Agentur-Akquise

**Hochzuladende Dokumente:**
- Agentur-Leistungen
- Portfolio-Stücke
- Fallstudien
- Team-Biografien
- Servicepakete

**Ergebnis:** Die KI personalisiert Agentur-Pitches für jeden Interessenten.

### Anwendungsfall 4: SaaS-Unternehmen

**Hochzuladende Dokumente:**
- Funktionsdokumentation
- API-Leitfäden
- Preistufen
- Onboarding-Materialien
- Webinar-Transkripte

**Ergebnis:** Die KI generiert technische, aber zugängliche Akquisenachrichten.

## Technische Details

### Wie RAG funktioniert

1. **Dokumentaufnahme**:
   - Dateien werden hochgeladen und in der Datenbank gespeichert
   - Metadaten (Name, Typ, Größe, Datum) werden erfasst

2. **Textextraktion**:
   - Text wird aus verschiedenen Dateiformaten extrahiert
   - Formatierung wird wo möglich beibehalten

3. **Chunking**:
   - Dokumente werden in kleinere Segmente (Chunks) unterteilt
   - Typische Chunk-Größe: 500-1000 Zeichen
   - Überlappung zwischen Chunks erhält den Kontext

4. **Einbettungserstellung**:
   - Jeder Chunk wird in eine Vektor-Einbettung umgewandelt
   - Einbettungen erfassen die semantische Bedeutung
   - In Vektordatenbank für schnellen Abruf gespeichert

5. **Semantische Suche**:
   - Bei der Content-Generierung sucht die KI nach relevanten Chunks
   - Ähnlichkeitsabgleich findet die relevantesten Inhalte
   - Abgerufene Chunks werden als Kontext einbezogen

6. **Content-Generierung**:
   - KI verwendet abgerufenen Kontext + Prompt
   - Generiert personalisierte, präzise Inhalte
   - Bezieht sich auf Ihr spezifisches Wissen

### Speicherung und Leistung

- **Speicherung**: Dokumente in lokaler SQLite-Datenbank gespeichert
- **Vektordatenbank**: Optimiert für schnelle Ähnlichkeitssuche
- **Leistung**: Millisekunden-schneller Abruf relevanter Inhalte
- **Skalierbarkeit**: Bewältigt effizient Tausende von Dokumenten

## Sicherheit und Datenschutz

### Datenspeicherung

- **Lokale Speicherung**: Alle Dokumente lokal auf Ihrem Computer gespeichert
- **Kein Cloud-Upload**: Originaldateien bleiben auf Ihrem Computer
- **Verschlüsselt**: Datenbank kann für zusätzliche Sicherheit verschlüsselt werden

### Datenschutzaspekte

- **Ihr Wissen**: Nur Sie haben Zugriff auf Ihre Dokumente
- **KI-Verarbeitung**: Mit dem lokalen Einbettungsmodell verlässt Ihr Text niemals Ihr Gerät; mit einem Remote-Modell werden die Einbettungen auf dem Server von aiFetchly erzeugt
- **Keine Trainingsdaten**: Ihre Dokumente werden nicht zum Training öffentlicher KI-Modelle verwendet

:::tip Vertrauliche Informationen

Die Wissensbibliothek ist ideal für:
- Interne Produktdokumentation
- Vertrauliche Preisinformationen
- Proprietäre Geschäftsprozesse
- Kundenspezifische Informationen

:::

## Nächste Schritte

Nachdem Sie Ihre Wissensbibliothek aufgebaut haben:

- [KI-generierte E-Mail-Kampagnen erstellen](./ai-email-writer)
- [Den KI-Marketing-Assistenten verwenden](./ai-marketing-assistant)
- [Outreach-Kampagne einrichten](../lead-generation/batch-email-sending)

---

**Bereit, Ihre Wissensbasis aufzubauen?** Beginnen Sie mit dem Upload Ihrer Produktdokumentation, Preislisten und Marketingmaterialien, um personalisierte KI-Kommunikation zu unterstützen.
