---
id: task-scheduling
title: Aufgabenplanung
sidebar_label: Aufgabenplaner
description: Automatisieren Sie Ihre Workflows mit dem leistungsstarken Aufgabenplanungssystem von aiFetchly.
---

# Aufgabenplanung

Der Aufgabenplaner von aiFetchly ermöglicht es Ihnen, Ihre Marketing-Workflows zu automatisieren, indem Aufgaben automatisch zu bestimmten Zeiten oder als Reaktion auf andere Aufgaben ausgeführt werden. Richten Sie wiederkehrende Suchen, automatisierte E-Mail-Kampagnen und komplexe mehrstufige Workflows ein.

## Planung verstehen

Der Aufgabenplaner unterstützt drei Arten von Aufgabentriggern:

| Triggertyp | Beschreibung | Am besten für |
|-------------|-------------|----------|
| **Cron** | Zeitbasierte Planung mit Cron-Ausdrücken | Wiederkehrende Aufgaben, tägliche/wöchentliche/monatliche Jobs |
| **Abhängigkeit** | Wird durch den Abschluss einer anderen Aufgabe ausgelöst | Mehrstufige Workflows, Aufgabenketten |
| **Manuell** | Wird nur bei manueller Auslösung ausgeführt | On-Demand-Aufgaben, Tests |

:::info Alles automatisieren

Von der Lead-Generierung bis zu E-Mail-Kampagnen spart Planungsautomatisierung Zeit und gewährleistet eine konsistente Ausführung Ihrer Marketing-Workflows.

:::

## Eine geplante Aufgabe erstellen

### Schritt 1: Zum Planer navigieren

1. Klicken Sie auf **Schedule** im linken Navigationsmenü
2. Klicken Sie auf die Schaltfläche **New Schedule**

### Schritt 2: Grundlegende Informationen

Geben Sie die folgenden erforderlichen Informationen ein:

#### Zeitplanname

- **Zweck**: Den Zeitplan in Ihrer Liste identifizieren
- **Beispiel**: "Tägliche Google-Suche", "Wöchentliche E-Mail-Kampagne"
- **Erforderlich**: Ja

#### Aufgabentyp

Wählen Sie den Typ der zu planenden Aufgabe:

- **Search**: Suchmaschinen-Information Organization-Aufgaben
- **Email Extract**: E-Mail-Extraktionsaufgaben
- **Outreach Campaign**: E-Mail-Marketing-Kampagnen
- **Directory Assistant**: Verzeichnis-Information Organization-Aufgaben
- **Google Maps**: Google Maps-Scraping-Aufgaben
- **Yandex Maps**: Yandex Maps-Scraping-Aufgaben
- **AI Message**: KI-gestützte Nachrichtenaufgaben mit Tool-Integration

#### Aufgaben-ID

- **Zweck**: Mit der spezifischen Aufgabeninstanz verknüpfen
- **Auswahl**: Aus vorhandenen Aufgaben des ausgewählten Typs wählen
- **Erforderlich**: Ja
- **Hinweis**: Für AI Message-Aufgaben wird die Aufgabenkonfiguration beim Einrichten des Zeitplans inline erstellt (siehe [AI Message Aufgabenkonfiguration](#ai-message-aufgabenkonfiguration) unten)

#### Beschreibung

- **Zweck**: Kontext über den Zweck des Zeitplans geben
- **Beispiel**: "Tägliche Suche nach neuen Marketingagenturen in Zielstädten"
- **Optional**: Ja

### AI Message Aufgabenkonfiguration

Wenn Sie **AI Message** als Aufgabentyp auswählen, wird ein zusätzliches Konfigurationsformular zur Definition der KI-Aufgabe angezeigt. Dieser Abschnitt erscheint nicht bei anderen Aufgabentypen.

#### Aufgabenname

- **Zweck**: Die KI-Nachrichtenaufgabe identifizieren
- **Erforderlich**: Ja
- **Beispiel**: "Tägliche Lead-Analyse", "Anfragen automatisch beantworten"

#### KI-Nachricht

- **Zweck**: Der Prompt/Nachricht, die an das KI-Modell gesendet wird
- **Erforderlich**: Ja
- **Beispiel**: "Analysiere die heutigen Suchergebnisse und identifiziere die 10 vielversprechendsten Leads nach Unternehmensgröße und Branche"
- **Unterstützt**: Mehrzeiliger Text mit detaillierten Anweisungen

#### Erlaubte Tools

Wählen Sie, welche Tools der KI-Agent während der Ausführung verwenden darf:

| Risikostufe | Farbe | Beschreibung |
|----------------|-------|-------------|
| **Niedrig** | Grün | Sichere Lesezugriffe |
| **Mittel** | Gelb | Operationen mit mäßiger Auswirkung |
| **Hoch** | Rot | Operationen, die Daten ändern oder erhebliche Aktionen durchführen |
| **Blockiert** | — | Tools, die für geplante Aufgaben nicht zugelassen sind |

- **Zweck**: Steuern, welche Aktionen die KI autonom ausführen kann
- **Auswahl**: Mehrfachauswahl aus verfügbaren planbaren Tools
- **Standard**: Keine Tools ausgewählt

#### Tools automatisch genehmigen

- **Zweck**: Der KI erlauben, Tool-Aufrufe ohne manuelle Genehmigung auszuführen
- **Standard**: Aus (deaktiviert)
- **Warnung**: Durch die Aktivierung kann die KI Tools automatisch ausführen. Überprüfen Sie die Liste der erlaubten Tools vor der Aktivierung sorgfältig.

:::caution Sicherheit der automatischen Genehmigung

Wenn die automatische Genehmigung aktiviert ist, führt die KI genehmigte Tools aus, ohne auf menschliche Bestätigung zu warten. Aktivieren Sie dies nur für gut getestete Aufgabenkonfigurationen mit einer sorgfältig kuratierten Tool-Liste. Legen Sie immer angemessene Sicherheitsgrenzen fest.

:::

#### Sicherheitslimits

Konfigurieren Sie Limits, um die KI-Aufgabe innerhalb sicherer Grenzen zu halten:

| Einstellung | Standard | Minimum | Beschreibung |
|---------|---------|-----|-------------|
| **Max. Tool-Aufrufe** | 10 | 1 | Maximale Anzahl von Tool-Aufrufen pro Ausführung |
| **Max. Laufzeit** | 300.000 ms (5 Min.) | 1.000 ms | Maximale Ausführungszeit |
| **Max. Fortsetzungsaufrufe** | 10 | 1 | Maximale Anzahl von Fortsetzungszyklen |

Diese Limits verhindern, dass entfesselte Aufgaben übermäßige Ressourcen verbrauchen oder unbegrenzt ausgeführt werden.

#### Cron-Planung (Zeitbasiert)

Aktivieren Sie **Cron** und konfigurieren Sie den Zeitplan:

**Voreinstellungen:**
- Jede Minute
- Jede Stunde
- Täglich (Mitternacht)
- Wöchentlich (Sonntag Mitternacht)
- Monatlich (1. des Monats, Mitternacht)
- Alle 15 Minuten
- Alle 30 Minuten
- Alle 2 Stunden
- Alle 6 Stunden
- Alle 12 Stunden
- Werktags 9 Uhr
- Wochenends 10 Uhr

**Benutzerdefinierter Cron-Builder:**

| Feld | Optionen | Beschreibung |
|-------|---------|-------------|
| **Minuten** | `*/5`, `*/15`, `*/30` oder bestimmte Minuten | Alle 5/15/30 Min. oder spezifisch |
| **Stunden** | `*/2`, `*/6`, `*/12` oder bestimmte Stunden | Alle 2/6/12 Stunden oder spezifisch |
| **Tage** | `*/2` oder bestimmte Tage | Alle 2 Tage oder spezifisch |
| **Monate** | `*/3`, `*/6` oder bestimmte Monate | Alle 3/6 Monate oder spezifisch |
| **Wochentage** | `1-5` (Werktage), `0,6` (Wochenenden) oder spezifisch | Werktage, Wochenenden oder spezifisch |

**Cron-Ausdrucksformat:**
```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
* * * * *
```

**Beispiele:**
```
0 9 * * 1-5      # Werktags um 9:00 Uhr
*/30 * * * *     # Alle 30 Minuten
0 0 * * 1        # Jeden Montag um Mitternacht
0 9,15 * * *     # Täglich um 9:00 und 15:00 Uhr
0 0 1 * *        # Am 1. jeden Monats um Mitternacht
```

**Nächste Ausführungszeit:**
- Das System berechnet und zeigt automatisch die nächste Ausführungszeit an
- Hilfreich zur Überprüfung Ihres Cron-Ausdrucks

#### Abhängigkeitsplanung (Aufgabenbasiert)

Aktivieren Sie **Dependency**, um diese Aufgabe auszulösen, wenn eine andere Aufgabe abgeschlossen ist.

**Konfiguration:**

1. **Übergeordneter Zeitplan**: Wählen Sie den Zeitplan, der diese Aufgabe auslösen soll
2. **Abhängigkeitsbedingung**:
   - **On Success**: Nur ausführen, wenn die übergeordnete Aufgabe erfolgreich ist
   - **On Completion**: Nach Abschluss der übergeordneten Aufgabe ausführen (Erfolg oder Fehler)
   - **On Failure**: Nur ausführen, wenn die übergeordnete Aufgabe fehlschlägt

3. **Verzögerung (Minuten)**: Wartezeit nach Abschluss der übergeordneten Aufgabe
   - `0` Minuten: Sofort ausführen
   - `5` Minuten: 5 Minuten vor dem Start warten
   - `60` Minuten: 1 Stunde vor dem Start warten

**Anwendungsfälle:**
- **E-Mail nach Extraktion**: E-Mails extrahieren, dann Kampagne nach Abschluss senden
- **Analyse nach Information Organization**: Daten scrapen, dann KI-Analyse durchführen
- **Mehrstufige Kampagnen**: Erste Kontaktaufnahme → Follow-up 1 → Follow-up 2

:::tip Abhängigkeitsketten

Sie können mehrstufige Abhängigkeitsketten erstellen:
- Aufgabe A (Cron) → Aufgabe B (Abhängigkeit) → Aufgabe C (Abhängigkeit)

Dies erstellt leistungsstarke automatisierte Workflows.

:::

#### Manuelle Ausführung

Aktivieren Sie **Manual**, um Aufgaben nur bei Auslösung auszuführen:

- Keine automatische Planung
- On-Demand-Ausführung über die Schaltfläche "Run Now"
- Nützlich für Tests oder seltene Aufgaben

### Schritt 4: Aktiver Status

Schalten Sie den Zeitplan um:
- **Active**: Der Zeitplan wird gemäß den Triggereinstellungen ausgeführt
- **Inactive**: Der Zeitplan ist deaktiviert und wird nicht ausgeführt

### Schritt 5: Zeitplan speichern

Klicken Sie auf **Save**, um den Zeitplan zu erstellen. Sie können:
- Den Zeitplan später **Edit** (bearbeiten)
- Bei Bedarf **Enable/Disable** (aktivieren/deaktivieren)
- Mit **Run Now** sofort testen

## Geplante Aufgaben verwalten

### Zeitplanliste anzeigen

Navigieren Sie zu **Schedule**, um alle Ihre geplanten Aufgaben zu sehen.

**Zeitplanübersicht:**
- **Statuskarte**: Zeigt Gesamtzahl, aktive, inaktive und pausierte Zeitpläne
- **Filter**: Suche nach Name, Status, Aufgabentyp, Triggertyp

### Zeitplantabelle

Die Zeitplanliste zeigt:

| Spalte | Beschreibung |
|--------|-------------|
| **Name** | Zeitplanname mit Aufgabentyp-Indikator |
| **Status** | Active (grün), Inactive (grau), Paused (gelb) |
| **Trigger Type** | Cron, Dependency oder Manual |
| **Schedule** | Cron-Ausdruck oder Abhängigkeitsbeschreibung |
| **Next Run** | Nächste Ausführungszeit mit Countdown |
| **Last Run** | Letzte Ausführung mit vergangener Zeit |
| **Executions** | Anzahl Erfolge / Anzahl Fehler |
| **Actions** | Bearbeiten, Löschen, Pausieren/Fortsetzen, Jetzt ausführen |

### Zeitplanaktionen

| Aktion | Beschreibung | Verfügbar wenn |
|--------|-------------|----------------|
| **Edit** | Zeitplankonfiguration ändern | Immer |
| **Delete** | Zeitplan entfernen | Immer |
| **Enable** | Einen inaktiven Zeitplan aktivieren | Inaktive Zeitpläne |
| **Disable** | Einen Zeitplan deaktivieren | Aktive Zeitpläne |
| **Pause** | Ausführung vorübergehend stoppen | Aktive Zeitpläne |
| **Resume** | Pausierten Zeitplan fortsetzen | Pausierte Zeitpläne |
| **Run Now** | Sofort ausführen | Immer |

## Ausführung überwachen

### Ausführungsverlauf anzeigen

1. Klicken Sie auf **View Details** bei einem Zeitplan
2. Sehen Sie sich die Ausführungsverlaufstabelle an

**Ausführungsinformationen:**

| Spalte | Beschreibung |
|--------|-------------|
| **Start Time** | Wann die Ausführung begann |
| **End Time** | Wann die Ausführung abgeschlossen wurde (oder "Running...") |
| **Duration** | Wie lange die Ausführung dauerte (oder Live-Zähler) |
| **Status** | Success (grün), Failed (rot), Running (blau) |
| **Result** | Zusammenfassung der Ausführungsergebnisse |
| **Error** | Fehlermeldung (falls Ausführung fehlgeschlagen) |
| **Actions** | Details anzeigen, laufende abbrechen |

### Ausführungsstatistiken

Die Detailansicht zeigt:

- **Erfolgsquote**: Prozentsatz der erfolgreichen Ausführungen
- **Durchschnittliche Dauer**: Typische Ausführungszeit
- **Gesamte Ausführungen**: Gesamtanzahl und Aufschlüsselung
- **Letzter Fehler**: Aktuellste Fehlermeldung
- **Nächste Ausführung**: Countdown zur nächsten Ausführung

### Echtzeitüberwachung

Für laufende Aufgaben:
- **Live-Dauer**: Zähler zeigt vergangene Zeit an
- **Abbrechen-Schaltfläche**: Ausführung bei Bedarf stoppen
- **Automatische Aktualisierung**: Status wird alle paar Sekunden aktualisiert

## Häufige Planungsmuster

### Muster 1: Tägliche Lead-Generierung

**Zeitplan**: Jeden Werktag um 9:00 Uhr
```
Cron: 0 9 * * 1-5
Task: Market Insight Explorer
```

**Anwendungsfall**: Jeden Morgen neue Leads für Ihr Vertriebsteam.

### Muster 2: Stündliche Überwachung

**Zeitplan**: Jede Stunde während der Geschäftszeiten
```
Cron: 0 9-17 * * 1-5
Task: Search / Yellow Pages
```

**Anwendungsfall**: Überwachung neuer Geschäftseinträge während der Arbeitszeit.

### Muster 3: Wöchentliche Kampagne

**Zeitplan**: Jeden Montag um 10:00 Uhr
```
Cron: 0 10 * * 1
Task: Outreach Campaign Sending
```

**Anwendungsfall**: Wöchentlicher E-Mail-Newsletter oder Outreach-Kampagne.

### Muster 4: Mehrstufiger Workflow

**Aufgabe A** (Cron): Täglich um 9:00 Uhr - Nach Leads suchen
**Aufgabe B** (Abhängigkeit): Nach Erfolg von A - E-Mails extrahieren
**Aufgabe C** (Abhängigkeit): Nach Erfolg von B (30 Min. Verzögerung) - E-Mails senden

**Anwendungsfall**: Automatisierte Lead-Generierungs- und Outreach-Pipeline.

### Muster 5: Wartungsaufgaben

**Zeitplan**: Jeden Sonntag um 3:00 Uhr
```
Cron: 0 3 * * 0
Task: Data cleanup or backup
```

**Anwendungsfall**: Regelmäßige Wartung in Zeiten mit wenig Traffic.

### Muster 6: KI-gestützte Lead-Analyse

**Zeitplan**: Jeden Werktag um 10:00 Uhr
```
Cron: 0 10 * * 1-5
Task: AI Message
```

**KI-Konfiguration**:
- **Nachricht**: "Überprüfe die Suchergebnisse von gestern, analysiere die Lead-Qualität und erstelle einen Zusammenfassungsbericht der vielversprechendsten Kontakte"
- **Erlaubte Tools**: Relevante Datenanalysetools auswählen
- **Automatisch genehmigen**: Aktiviert (mit sorgfältig geprüfter Tool-Liste)
- **Max. Laufzeit**: 300.000 ms (5 Minuten)

**Anwendungsfall**: Automatisierte tägliche Analyse gesammelter Leads mittels KI.

## Best Practices

### 1. Zeitplandesign

**Überschneidungen vermeiden:**
- Sicherstellen, dass Aufgaben vor der nächsten geplanten Ausführung abgeschlossen sind
- Durchschnittliche Ausführungszeit bei der Festlegung der Häufigkeit berücksichtigen
- Abhängigkeiten verwenden, um sich überschneidende Aufgaben zu sequenzieren

**Nebenzeiten:**
- Ressourcenintensive Aufgaben außerhalb der Stoßzeiten planen
- Konkurrenz mit Benutzeraktivität vermeiden
- Zeitzonen für globale Operationen berücksichtigen

**Pufferzeit:**
- Puffer zwischen abhängigen Aufgaben hinzufügen
- Variable Ausführungszeiten berücksichtigen
| Kaskadenverzögerungen verhindern

### 2. Fehlerbehandlung

**Fehler überwachen:**
- Ausführungsverlauf regelmäßig prüfen
- Wiederholte Fehler untersuchen
- Zeitpläne oder Aufgaben bei Bedarf anpassen

**Warnungen einrichten:**
- Zeitpläne wöchentlich überprüfen
- Auf steckengebliebene oder pausierte Aufgaben prüfen
| Abhängigkeiten korrekt auslösen lassen

**Graceful Degradation:**
- "On Completion"-Abhängigkeiten verwenden, um die Kette fortzusetzen, auch wenn eine Aufgabe fehlschlägt
- Alternative Zeitpläne für kritische Aufgaben erstellen
| Eskalationsverfahren dokumentieren

### 3. Ressourcenmanagement

**Gleichzeitige Aufgaben:**
- Nicht zu viele Aufgaben gleichzeitig planen
- Systemressourcen (CPU, Speicher, Netzwerk) berücksichtigen
| Ähnliche Aufgaben versetzen, um Konflikte zu vermeiden

**Proxy-Rotation:**
- Ausreichende Proxys für gleichzeitige geplante Aufgaben sicherstellen
| Last über den Proxy-Pool verteilen
| Proxy-Gesundheit für geplante Aufgaben überwachen

### 4. Tests

**Zeitpläne testen:**
- Vor der Planung mit "Run Now" testen
| Zuerst mit einmaliger Ausführung verifizieren
| Protokolle auf Probleme prüfen

**Cron-Ausdrücke validieren:**
- "Next Run Time"-Vorschau zur Überprüfung verwenden
| Zuerst mit kürzeren Intervallen testen
| Zeitzoneneinstellungen bestätigen

**Abhängigkeiten testen:**
| Übergeordnete Aufgaben erfolgreich abschließen lassen
| Verzögerungseinstellungen testen
| Sicherstellen, dass Ketten wie erwartet funktionieren

### 5. Dokumentation

**Zeitpläne klar benennen:**
- Beschreibende Namen mit Zweck und Häufigkeit
| Aufgabentyp und Ziel angeben
| Beispiel: "Tägliche Google-Suche - Marketingagenturen"

**Beschreibungen nutzen:**
| Zweck und erwartete Ergebnisse dokumentieren
| Abhängigkeiten und Beziehungen notieren
| Besondere Hinweise aufnehmen

**Aufgabenzwecke kennzeichnen:**
| Verwandte Zeitpläne markieren oder kategorisieren
| Nach Projekt oder Kampagne gruppieren
| Identifikation erleichtern

## Fehlerbehebung

### Zeitplan wird nicht ausgeführt

**Mögliche Ursachen:**
- Zeitplan ist inaktiv oder pausiert
- Cron-Ausdruck falsch konfiguriert
| Planer-Dienst wird nicht ausgeführt
| Systemzeit/Zeitzonen-Probleme

**Lösungen:**
1. Überprüfen Sie, ob der Status "Active" ist
2. Cron-Ausdruck-Syntax prüfen
3. Bestätigen Sie, dass der Planer-Dienst läuft
4. Systemzeit und Zeitzoneneinstellungen überprüfen
5. Ausführungsprotokolle auf Fehler prüfen

### Aufgabe wird zu häufig ausgeführt

**Mögliche Ursachen:**
- Cron-Ausdruck falsch
| Mehrere Zeitpläne für dieselbe Aufgabe
| Cron-Syntax missverstanden

**Lösungen:**
1. Cron-Ausdruck sorgfältig überprüfen
2. Auf doppelte Zeitpläne prüfen
3. "Next Run Time"-Vorschau zur Überprüfung verwenden
4. Zuerst mit längeren Intervallen testen

### Abhängigkeiten werden nicht ausgelöst

**Mögliche Ursachen:**
| Übergeordnete Aufgabe wird nicht abgeschlossen
| Falsche Abhängigkeitsbedingung
| Verzögerung zu lang oder zu kurz

**Lösungen:**
1. Ausführungsverlauf der übergeordneten Aufgabe prüfen
2. Abhängigkeitsbedingung mit dem gewünschten Verhalten abgleichen
3. Verzögerungseinstellungen anpassen
4. Auf zirkuläre Abhängigkeiten prüfen

### Aufgaben dauern zu lange

**Mögliche Ursachen:**
| Aufgabenkonfiguration zu aggressiv
| Systemressourcen unzureichend
| Netzwerk-Engpässe

**Lösungen:**
1. Aufgaben-Umfang reduzieren (Seiten, Parallelität usw.)
2. In Nebenzeiten planen
3. Intervall zwischen Ausführungen vergrößern
4. Systemleistung prüfen

### AI Message Aufgabenprobleme

**Aufgabe erreicht Sicherheitslimits:**
- **Mögliche Ursachen**: Max. Tool-Aufrufe, max. Laufzeit oder max. Fortsetzungsaufrufe erreicht
- **Lösungen**:
  1. KI-Nachricht-Prompt auf Klarheit und Spezifität überprüfen
  2. Sicherheitslimits erhöhen, wenn die Aufgabe legitimerweise mehr Ressourcen benötigt
  3. Umfang des Aufgaben-Prompts reduzieren
  4. Ausführungsprotokolle prüfen, um zu sehen, welches Limit erreicht wurde

**KI-Aufgabe liefert unerwartete Ergebnisse:**
- **Mögliche Ursachen**: Vager Prompt, falsche Tools ausgewählt oder unzureichender Kontext
- **Lösungen**:
  1. KI-Nachricht mit spezifischeren Anweisungen verfeinern
  2. Liste der erlaubten Tools überprüfen und anpassen
  3. Mit deaktivierter automatischer Genehmigung testen, um Tool-Aufrufe manuell zu prüfen
  4. Mehr Kontext zum System-Prompt hinzufügen

**Tool-Aufrufe werden blockiert:**
- **Mögliche Ursachen**: Tool nicht in der Erlaubt-Liste oder als blockiert für geplante Aufgaben markiert
- **Lösungen**:
  1. Erforderliches Tool zur Liste der erlaubten Tools hinzufügen
  2. Überprüfen, ob das Tool für die geplante Ausführung verfügbar ist
  3. Risikostufe des Tools prüfen und bestätigen, dass es nicht durch Richtlinien blockiert ist

### Ausführungsverlauf wird nicht angezeigt

**Mögliche Ursachen:**
| Aufgabe wurde noch nie ausgeführt
| Verlauf wurde gelöscht
| Datenbankprobleme

**Lösungen:**
1. Aufgabe manuell zum Testen ausführen
2. Prüfen, ob die Aufgabe jemals ausgeführt wurde
3. Datenbankverbindung überprüfen
4. Planer-Dienst bei Bedarf neu starten

## Erweiterte Workflows

### Workflow 1: Automatisierte Lead-Generierungs-Pipeline

**Zeitplan 1**: Tägliche Suche
```
Cron: 0 9 * * 1-5 (Weekdays 9 AM)
Task: Google Search for "marketing agencies [city]"
```

**Zeitplan 2**: E-Mail-Extraktion (Abhängigkeit)
```
Trigger: After Schedule 1 succeeds
Delay: 0 minutes
Task: Open in Contact Profile Insights from Schedule 1 results
```

**Zeitplan 3**: E-Mail-Kampagne (Abhängigkeit)
```
Trigger: After Schedule 2 completes
Delay: 60 minutes (allow time for profile insights)
Task: Send welcome email campaign
```

**Ergebnis**: Automatisierte tägliche Lead-Generierung und Outreach.

### Workflow 2: Wöchentliche Wartung

**Zeitplan 1**: Datenbankbereinigung
```
Cron: 0 3 * * 0 (Sunday 3 AM)
Task: Remove old completed tasks
```

**Zeitplan 2**: Proxy-Gesundheitsprüfung (Abhängigkeit)
```
Trigger: After Schedule 1 completes
Task: Test all proxies and remove failed
```

**Zeitplan 3**: Berichtserstellung (Abhängigkeit)
```
Trigger: After Schedule 2 completes
Task: Generate weekly usage report
```

**Ergebnis**: Automatisierte wöchentliche Wartung und Berichterstellung.

### Workflow 3: Multi-Regionale Überwachung

**Zeitplan 1**: US-Ostküstenüberwachung
```
Cron: 0 */2 * * * (Every 2 hours)
Task: Search US East keywords
```

**Zeitplan 2**: US-Westküstenüberwachung
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search US West keywords
```

**Zeitplan 3**: Europa-Überwachung
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search European keywords
```

**Ergebnis**: Kontinuierliche globale Überwachung mit versetzten Zeitplänen.

### Workflow 4: KI-erweiterte Lead-Pipeline

**Zeitplan 1**: Tägliche Suche
```
Cron: 0 9 * * 1-5 (Werktage 9 Uhr)
Task: Google Maps - Suche nach "Restaurants [Stadt]"
```

**Zeitplan 2**: Kontaktextraktion (Abhängigkeit)
```
Trigger: Nach Erfolg von Zeitplan 1
Delay: 0 Minuten
Task: Kontaktextraktion aus den Ergebnissen von Zeitplan 1
```

**Zeitplan 3**: KI-Analyse (Abhängigkeit)
```
Trigger: Nach Erfolg von Zeitplan 2
Delay: 30 Minuten
Task: AI Message - "Analysiere die extrahierten Kontakte und erstelle personalisierte Outreach-Nachrichten für die Top-20-Leads"
Sicherheitslimits: Max. Tool-Aufrufe: 15, Max. Laufzeit: 600000ms (10 Min.)
```

**Zeitplan 4**: E-Mail-Kampagne (Abhängigkeit)
```
Trigger: Nach Erfolg von Zeitplan 3
Delay: 60 Minuten
Task: Outreach Campaign - KI-generierte Nachrichten senden
```

**Ergebnis**: Vollautomatisierte Pipeline von der Suche über KI-Analyse bis zum Outreach.

## Integration mit anderen Funktionen

Der Aufgabenplaner integriert sich mit:

- **[Suchmaschinen](../lead-generation/search-engines)**: Wiederkehrende Suchen planen
- **[Kontaktextraktion](../lead-generation/contact-extraction)**: Automatische Extraktion nach Suchen
- **[Gelbe Seiten](../lead-generation/yellow-pages)**: Regelmäßiges Verzeichnis-Information Organization
- **[Google Maps Scraper](../lead-generation/local-business-finder)**: Google Maps-Datenerfassung planen
- **[Massen-E-Mail-Versand](../lead-generation/batch-email-sending)**: Automatisierte Kampagnen
- **AI Message**: KI-gestützte Aufgaben mit Tool-Integration für automatisierte Analyse und Aktionen planen

## Nächste Schritte

Nachdem Sie nun die Planung verstehen:

- [Systemeinstellungen konfigurieren](../settings/system-settings)
- [Das vollständige Benutzerhandbuch lesen](../getting-started/introduction)

---

**Bereit zu automatisieren?** Beginnen Sie mit der Planung einer einfachen täglichen Suchaufgabe und erstellen Sie dann schrittweise komplexere automatisierte Workflows, während Sie sich mit dem System vertraut machen.
