---
id: ai-chat-v2
title: KI-Chat V2
sidebar_label: KI-Chat V2
description: Der KI-Chat der nächsten Generation mit Plan-Modus, Live-Kontextverfolgung, Unteragenten und Inline-Plangenehmigung.
---

# KI-Chat V2

Der KI-Chat V2 ist der neu gestaltete KI-Assistent. Er behält alles, was der klassische AI Marketing Assistant kann — Wissensbibliothek-Kontext, MCP-Tools, KI-Fähigkeiten — und ergänzt ihn um einen aufgeräumteren Composer, den **Plan-Modus**, ein **Live-Kontextnutzungs-Badge**, **Inline-Plangenehmigung**, **Unteragenten** und ein **Dateioperations-Panel**.

V2 und der klassische Assistent laufen parallel. Wenn das V2-Feature-Flag aktiviert ist, öffnet ein Klick auf das Chat-Symbol (oder das Drücken von `Ctrl/Cmd + K`) V2.

## Was neu ist in V2

| Funktion | Was sie tut |
|---|---|
| **Plan-Modus** | Bitten Sie die KI, einen Schritt-für-Schritt-Plan zu entwerfen, und genehmigen Sie ihn, bevor irgendein Tool läuft. |
| **Kontextnutzungs-Badge** | Live-Anzeige `CTX %`, damit Sie sehen, wie nah Sie am Kontextlimit des Modells sind. |
| **Inline-Plangenehmigung** | Die Plan-Karte wird im Nachrichtenverlauf mit Genehmigen / Ablehnen / Änderungen anfordern angezeigt. |
| **Unteragenten** | Die KI kann einen Spezialisten (z. B. Lead-Rechercheur) mit eigenem Tool-Budget und eigenem Ausgabeschema entsenden. |
| **Dateioperations-Panel** | Ein einklappbares Panel über dem Composer listet jede Datei auf, die die KI gerade gelesen oder geändert hat. |
| **Streaming-Reconnect** | Wenn der Stream abbricht, versucht V2 es erneut und zeigt eine Reconnect-Anzeige, anstatt lautlos hängen zu bleiben. |
| **Tippindikator** | Sichtbar, während die KI nachdenkt oder ein Tool ausführt. |
| **Stopp-Schaltfläche** | Bricht den laufenden Stream und jeglichen aktiven Tool-Aufruf ab. |
| **Slash-Befehle** | Tippen Sie `/` in den Composer, um Aktionen auszuführen (`/clear`, `/status`, `/plugin`) oder wiederverwendbare Prompt-Vorlagen aufzuklappen, die Sie selbst erstellt haben. Siehe [Slash-Befehle](./slash-commands). |
| **Sprache** | Sprechen Sie Ihre Nachricht und hören Sie die Antwort der KI — auf dem Gerät ausgeführte Spracherkennung und Sprachsynthese. Siehe [Sprache](#sprache). |

## V2 öffnen

1. Klicken Sie auf das **Chat-Symbol** in der Kopfzeile, oder drücken Sie `Ctrl + K` (Windows/Linux) / `Cmd + K` (macOS).
2. Wenn V2 aktiviert ist, fährt das V2-Panel von rechts herein.
3. Um für eine Sitzung zum klassischen Assistenten zurückzukehren, schalten Sie das V2-Flag in `localStorage` (`aifetchly:aiChatV2Enabled`) aus.

:::tip Panel in der Größe ändern

Ziehen Sie den linken Rand des Panels, um die Größe zu ändern. Das Panel merkt sich seine Breite für die Sitzung.

:::

## Chat-Modus vs. Plan-Modus

Verwenden Sie die **Modus-Dropdownliste** über dem Composer, um zwischen zwei Modi zu wechseln.

### Chat-Modus (Standard)

Verhält sich wie der klassische Assistent: Sie fragen, die KI antwortet, Tools laufen nach Bedarf. Optimal für Q&A, Content-Entwürfe und schnelle Nachschlagen.

### Plan-Modus

Der Plan-Modus fügt eine Genehmigungsschwelle hinzu, bevor die KI etwas Destruktives oder Langlaufendes ausführt.

1. Stellen Sie die Modus-Auswahl auf **Plan**.
2. Beschreiben Sie das Ziel (z. B. „Recherchiere diese 5 Leads und entwerfe Outreach für jeden").
3. Die KI entwirft einen Plan — ein Markdown-Dokument mit den Schritten, die sie auszuführen beabsichtigt.
4. Der Plan erscheint als Inline-Karte mit Status, Version und Ziel.
5. Wählen Sie:
   - **Genehmigen** — die KI beginnt sofort mit der Ausführung des Plans.
   - **Ablehnen** — senden Sie einen Grund; die KI stoppt und überarbeitet.
   - **Änderungen anfordern** — bitten Sie um Bearbeitungen, ohne rundheraus abzulehnen.
6. Während der Ausführung streamt die KI Fortschritt und Tool-Ausgabe zurück in die Konversation.

:::info Wann Sie den Plan-Modus verwenden

Aktivieren Sie den Plan-Modus für jede Aufgabe, die viele Tool-Aufrufe ausführt, Dateien modifiziert, Outreach sendet oder nennenswerte Credits kostet. Für „Was ist eine gute Betreffzeile?" bleiben Sie im Chat-Modus.

:::

### Plan-Status

| Status | Bedeutung |
|---|---|
| **Entwurf** | Die KI verfasst den Plan noch. |
| **Antwort ausstehend** | Die KI hat eine klärende Frage gestellt, bevor sie finalisiert. |
| **Genehmigung ausstehend** | Der Plan ist bereit — wartet auf Ihre Genehmigung / Ablehnung. |
| **Genehmigt** | Sie haben genehmigt; die Ausführung läuft oder ist abgeschlossen. |
| **Abgelehnt** | Sie haben mit Feedback abgelehnt. |
| **Abgeschlossen** | Der Plan wurde erfolgreich abgeschlossen. |
| **Abgebrochen** | Der Plan wurde abgebrochen (durch Sie oder durch einen Fehler). |

## Das Kontextnutzungs-Badge

Neben der Modus-Auswahl zeigt ein kleines Badge **`CTX <percent>%`**. Dies gibt an, wie viel vom Kontextfenster des Modells die aktuelle Konversation verwendet.

| Farbe | Bereich | Was es bedeutet |
|---|---|---|
| Niedrig (grau) | 0–49 % | Viel Platz. |
| Mittel (gelb) | 50–79 % | Wird voller. |
| Hoch (orange) | 80–94 % | Erwägen Sie bald, eine neue Konversation zu starten. |
| Kritisch (rot) | 95–100 % | Nah am Limit — lange Nachrichten könnten abgeschnitten oder auto-kompaktiert werden. |

Wenn das Badge auf Kritisch springt, starten Sie eine neue Konversation oder lassen Sie die KI die Sitzung kompaktieren (siehe unten).

## Unteragenten

Ein Unteragent ist ein bereichsbezogener Spezialist, den die Haupt-KI entsenden kann, um eine klar definierte Aufgabe zu erledigen. Jeder Unteragent hat:

- Einen **System-Prompt**, der auf seine Aufgabe abgestimmt ist
- Eine **Tool-Allowlist** (eine Teilmenge der verfügbaren Tools der KI)
- Ein **Ausgabeschema** (der Unteragent muss JSON zurückgeben, das zum Schema passt)
- **Budgets**: max. Tool-Aufrufe, max. Laufzeit, max. Fortsetzungsrunden

### Integriert: Lead-Rechercheur

Der Unteragent Lead-Rechercheur sammelt öffentlichen Geschäftskontext für einen Lead. Er darf `google_search`, `scrape_urls_from_search_engine` und `knowledge_library_search` verwenden. Er gibt ein strukturiertes Objekt mit folgenden Feldern zurück:

- `businessSummary`
- `productsOrServices`
- `targetCustomerHints`
- `marketSignals`
- `sourceUrls` (jede Behauptung muss quellenunterstützt sein)
- `confidence` (0–1)

Sie rufen Unteragenten nicht direkt auf — die Haupt-KI entscheidet, wann sie einen entsendet. Um die KI dazu zu veranlassen, fragen Sie etwas wie: *„Recherchiere den Lead bei acme.com mit dem Lead-Rechercheur."*

:::tip Unteragenten sind bereichsbezogen

Ein Unteragent kann nur die Tools in seiner Allowlist verwenden. Er kann keine E-Mails senden, in sozialen Medien posten oder Datensätze ändern. Seine Ausgabe ist Beweismaterial, auf das die Haupt-KI reagiert — nicht eine eigene Aktion.

:::

## Dateioperations-Panel

Oberhalb des Composers zeigt ein einklappbares Panel jede Datei, die die KI im aktuellen Durchgang gerade gelesen oder geschrieben hat. Jeder Eintrag ist ein Chip, auf den Sie klicken können, um die Datei zu öffnen (oder eine Diff-Ansicht für bearbeitete Dateien).

Verwenden Sie es, um:

- Zu überprüfen, was die KI tatsächlich geändert hat, bevor Sie dem Ergebnis vertrauen.
- Direkt zu einer Datei zu springen, die die KI erwähnt hat, ohne danach suchen zu müssen.
- Mit den Augen zu rollen, weil die KI die falsche Datei bearbeitet hat. (Es passiert.)

## Skills, MCP und Wissensbibliothek in V2

V2 verwendet dieselben Skills, MCP-Server und die Wissensbibliothek wie der klassische Assistent:

- **[KI-Fähigkeiten](./ai-skills)** — installiert über die Skills-Seite oder den Plugin-Manager; erscheinen automatisch als Tools in V2.
- **[MCP-Tools](./mcp-tools)** — klicken Sie auf die Schaltfläche **MCP-Tools** in der V2-Kopfzeile, um externe MCP-Server hinzuzufügen oder zu verwalten.
- **[Wissensbibliothek](./knowledge-library)** — schalten Sie den RAG-Kontext genauso um wie im klassischen Assistenten.

## Berechtigungen und „Immer erlauben"

Wenn die KI ein Tool ausführen möchte, das eine Genehmigung erfordert, zeigt V2 eine Inline-Genehmigungskarte mit zwei Optionen:

- **Einmal erlauben** — führt es dieses eine Mal aus.
- **Immer erlauben** — merkt sich die Entscheidung.

Für die meisten Skill-Kategorien wird **Immer erlauben** dauerhaft gespeichert. Für die Kategorie **Shell-Ausführung** ist **Immer erlauben** aus Sicherheitsgründen **nur sitzungsbezogen** — beim nächsten Neustart der App wird die KI erneut nachfragen.

:::warning Shell ist immer sitzungsbezogen

Die KI kann Shell-Befehle nur mit Ihrer ausdrücklichen Genehmigung ausführen. Selbst wenn Sie für Shell auf „Immer erlauben" klicken, verfällt die Berechtigung, wenn Sie die App schließen. Das ist beabsichtigt.

:::

## Streaming, Stoppen und Reconnects

- **Tippindikator**: Ein kleiner Spinner erscheint, während die KI eine Antwort erzeugt oder ein Tool ausführt.
- **Stopp-Schaltfläche**: Ersetzt die Senden-Schaltfläche während des Streamings. Klicken Sie darauf, um die Antwort und jeden aktiven Tool-Aufruf abzubrechen. Die UI setzt sich sofort zurück.
- **Reconnect**: Wenn der Stream mitten in einer Antwort abbricht, versucht V2 automatisch erneut und zeigt eine Reconnect-Anzeige. Wenn der Reconnect fehlschlägt, bleibt die letzte Teilnachricht sichtbar, damit Sie entscheiden können, ob Sie sie erneut senden.

## Lange Sitzungen kompaktieren (auto-zusammenfassen)

Wenn eine Konversation sich dem Kontextlimit nähert, kann V2 die Sitzung kompaktieren: Es fasst frühere Durchgänge in einer kürzeren Form zusammen, damit die Konversation ohne Verlust des Schlüsselkontexts fortgesetzt werden kann. Das Kompaktieren läuft als eigene Hintergrundaufgabe; Sie sehen einen Hinweis, wenn es passiert.

## Slash-Befehle

Tippen Sie `/` am Anfang des Composers, um das Slash-Befehl-Menü zu öffnen. Eingebaute Befehle wie `/clear`, `/help`, `/status` und `/plugin` werden sofort ausgeführt, und Sie können eigene wiederverwendbare Prompt-Vorlagen (zum Beispiel `/outreach <website>`) als Markdown-Dateien in `~/.aifetchly/commands/` erstellen. Siehe die dedizierte Seite **[Slash-Befehle](./slash-commands)** für die vollständige Liste, das Verfassen benutzerdefinierter Befehle und die Tastenkombinationen. Für begrenzte autonome Arbeit verwenden Sie **`/goal`** zum Setzen eines überprüfbaren Ziels und **`/loop`** zum Ausführen von Iterationen dorthin; um etwas im Lauf der Zeit zu überwachen, verwenden Sie **`/loop 5m <prompt>`**, um einen Prompt in festem Intervall im selben Chat zu wiederholen — siehe [Ziel- und Schleifen-Befehle](./goal-and-loop).

## Sprache

Der KI-Chat V2 unterstützt **Spracheingabe** (Sprache-zu-Text) und **gesprochene Antworten** (Text-zu-Sprache). Beide laufen **auf Ihrem Gerät** mit der `sherpa-onnx`-Sprach-Engine — Ihr Mikrofonaudio wird lokal verarbeitet und nicht an einen Server gesendet.

Sprache ist standardmäßig deaktiviert. Aktivieren Sie sie unter **[KI-Anbieter → Spracheinstellungen](../settings/ai-provider#spracheinstellungen)**.

### Mit der KI sprechen (Spracheingabe)

Wenn die Spracheingabe aktiviert ist, erscheint eine **Mikrofon-Schaltfläche** im Composer:

1. Klicken Sie auf das Mikrofon, um die **Aufnahme zu starten** (Push-to-Talk). Klicken Sie erneut (oder auf die Stopp-Steuerung), um zu stoppen.
2. Der Composer zeigt einen Aufnahmestatus, während Sie sprechen. Die Aufnahme stoppt automatisch bei der maximalen Dauer (standardmäßig 60 Sekunden).
3. Nachdem Sie gestoppt haben, transkribiert aiFetchly Ihre Sprache lokal und fügt das Transkript als bearbeitbaren Text in den Composer ein.
4. Überprüfen oder bearbeiten Sie das Transkript und senden Sie es wie gewohnt.

:::tip Auto-Send

Aktivieren Sie **Sprachtranskript automatisch senden** in den Spracheinstellungen, um das Transkript in dem Moment zu senden, in dem die Transkription abgeschlossen ist, und somit den Überprüfungsschritt zu überspringen.

:::

Das Transkript wird zu einer normalen Chat-Nachricht — gespeichert und als Text gesendet, genau wie eine getippte Nachricht.

Bei der ersten Verwendung der Spracheingabe lädt aiFetchly das Sprachmodell herunter (ein einmaliger Download). Wenn das Modell noch nicht installiert ist, zeigt die Mikrofon-Schaltfläche den Status **Modell fehlt** mit einer Installationsaktion.

### Antwort der KI anhören (gesprochene Antworten)

Die **Lautstärke-Schaltfläche** in der Chat-Kopfzeile schaltet gesprochene Antworten ein und aus:

- **Ein** (hervorgehoben): Die Textantworten der KI werden vorgelesen, während sie streamen.
- **Aus**: Still — Antworten erscheinen nur als Text.

aiFetchly liest nur die Antwort in natürlicher Sprache vor — nicht Codeblöcke, Tool-Aufrufe, Tabellen oder Berechtigungs-Aufforderungen.

:::note Nur nach Spracheingabe sprechen

In den Spracheinstellungen können Sie die KI so einstellen, dass sie **nur ihre Antworten auf Ihre Sprachnachrichten** spricht (ein freihändiges Hin-und-Her) anstatt jede Antwort zu sprechen.

:::

Während die KI spricht, bietet eine **Sprechen-stopp**-Steuerung die Möglichkeit, die Wiedergabe anzuhalten. Eine neue Sprachaufnahme beginnen, die Konversation wechseln oder die Chat-Schaltfläche **Stopp** klicken stoppt ebenfalls die Sprachausgabe.

### Sprache gewährt keinen Chat-Zugriff

Spracherkennung und -synthese sind lokal und kostenlos, aber um eine Nachricht zu senden und eine Antwort zu erhalten, benötigen Sie weiterhin Chat-Zugriff — entweder ein aiFetchly-KI-Abonnement (Gehostet) oder einen funktionierenden [benutzerdefinierten/lokalen Anbieter](../settings/ai-provider). Wenn kein Chat-Modell verfügbar ist, kann Ihre Sprache weiterhin lokal transkribiert werden, aber die Nachricht kann erst gesendet werden, wenn Chat verfügbar ist.

## Tipps, um das Beste aus V2 herauszuholen

### DAS SOLLTEN SIE TUN ✅

- **Verwenden Sie den Plan-Modus** für mehrstufige oder destruktive Aufgaben.
- **Beobachten Sie das CTX-Badge** — starten Sie eine neue Konversation, bevor es rot wird.
- **Genehmigen Sie Skills, denen Sie vertrauen**, mit „Immer erlauben", um Aufforderungen zu reduzieren (außer Shell).
- **Überprüfen Sie das Dateioperations-Panel** nach jedem tool-lastigen Durchgang.
- **Erwähnen Sie den Lead-Rechercheur namentlich**, wenn Sie strukturierte Lead-Daten möchten.

### DAS SOLLTEN SIE VERMEIDEN ❌

- **Genehmigen Sie die Shell-Ausführung nicht blind** — lesen Sie zuerst den Befehl.
- **Halten Sie keine 200-Durchgang-Sitzung am Leben** — starten Sie neu, wenn das CTX-Badge steigt.
- **Erwarten Sie nicht, dass Unteragenten Outreach senden** — sie sammeln und geben nur Daten zurück.
- **Ignorieren Sie nicht die Plan-Karte** — Genehmigen überspringt Ihre letzte Chance zum Umleiten.

## Fehlerbehebung

### Plan-Modus lässt sich nicht aktivieren

- Bestätigen Sie, dass die Modus-Dropdownliste auf **Plan** steht.
- Wenn die Dropdownliste fehlt, ist das V2-Flag aus. Reaktivieren Sie es über `localStorage`.

### Die KI entsendet den Lead-Rechercheur nicht

- Die KI entsendet Unteragenten nur, wenn sie sie als notwendig erachtet. Fragen Sie explizit: *„Verwende den Lead-Rechercheur dafür."*
- Der Unteragent läuft nur, wenn seine erforderlichen Tools aktiviert sind (Google-Suche, URL-Scraper, Wissensbibliothek).

### Kontext-Badge bleibt rot

- Starten Sie eine neue Konversation, oder lassen Sie das Auto-Kompaktieren laufen.
- Deaktivieren Sie den RAG-Kontext, wenn die Wissensbibliothek zu viel Text einbezieht.

### Tool-Genehmigung fragt weiterhin nach „Immer erlauben"

- Sie verwenden einen **Shell**-Skill. Shell-Genehmigungen sind sitzungsbezogen.
- Der Skill wurde möglicherweise neu installiert, was seine Berechtigungszuschüsse zurücksetzt.

## Nächste Schritte

- [Slash-Befehle](./slash-commands) — führen Sie Aktionen und wiederverwendbare Prompts mit `/` aus.
- [Plugin-Manager](./plugin-manager) — installieren Sie Plugins aus lokalem Ordner, Git, GitHub, npm oder URL.
- [KI-Fähigkeiten](./ai-skills) — was Fähigkeiten sind und wie Sie sie verwenden.
- [MCP-Tools](./mcp-tools) — externe Dienste verbinden.
