---
id: ai-email-auto-reply
title: KI-Automatikantwort für E-Mails
sidebar_label: KI-Automatikantwort für E-Mails
description: Verbinden Sie Ihr Postfach, empfangen Sie E-Mails, verfassen Sie KI-Antworten in der Stimme des Postfachinhabers, genehmigen Sie vor dem Senden und protokollieren Sie alles, was die KI getan hat.
---

# KI-Automatikantwort für E-Mails

Die KI-Automatikantwort für E-Mails schließt den Kreis Ihrer Kampagnen. aiFetchly verbindet sich mit Ihrem Postfach, empfängt eingehende Nachrichten, liest sie mit KI, verfasst Antworten, die auf Ihrer [Wissensbibliothek](./knowledge-library) basieren, und lässt Sie jede Antwort genehmigen, bevor sie versendet wird. Wenn konfiguriert, kann aiFetchly auch automatisch auf Nachrichten antworten, die einer Regel entsprechen – innerhalb strenger, sicherheitsorientierter Grenzen – und protokolliert jede Entscheidung in einem Prüfprotokoll, das Sie einsehen können.

## So funktioniert es

Die Funktion folgt diesem Ablauf:

```text
Postfach verbinden
  -> empfangene Nachrichten synchronisieren
  -> KI liest, klassifiziert und fasst jede Nachricht zusammen
  -> Antwortentwurf auf Basis Ihrer Wissensbibliothek, in der Stimme des Inhabers verfasst
  -> Sie prüfen und genehmigen den Entwurf (erforderlich)
  -> die Antwort wird aus Ihrem Versandpostfach gesendet
  -> alles wird im Prüfprotokoll für KI-Automatikantworten erfasst
```

Das Senden ist nie still. Verfassen, Genehmigen, Senden, Überspringen, Blockieren und Fehler werden alle protokolliert, damit Sie jederzeit sehen können, was die KI getan hat und warum.

:::info Was in welcher Version enthalten ist

Die erste Version ist die **unterstützte Antwort**: Die KI verfasst, aber jeder Versand erfordert Ihre ausdrückliche Genehmigung (oder eine genehmigte Bestätigung im KI-Chat). Die regelbasierte **Automatikantwort** – automatisches Senden, wenn eine Nachricht einer konfigurierten Regel entspricht – ist eine spätere Funktion und bleibt deaktiviert, bis Sie sie aktivieren.

:::

## Voraussetzungen

Bevor Sie die KI-Automatikantwort für E-Mails nutzen, stellen Sie sicher, dass Folgendes vorhanden ist:

1. **KI auf Ihrem Konto aktiviert.** Siehe [KI-Anbieter-Einstellungen](../settings/ai-provider), um Ihren KI-Dienst zu konfigurieren.
2. **Ein E-Mail-Dienst mit konfiguriertem Versand (SMTP).** Antworten werden über Ihren bestehenden ausgehenden E-Mail-Dienst gesendet.
3. **(Empfohlen) Eine [Wissensbibliothek](./knowledge-library) mit Dokumenten** zu Ihren Produkten, Preisen und Prozessen. Die KI verfasst besser fundierte Antworten, wenn sie in Ihren eigenen Materialien suchen kann.
4. **IMAP-Zugriff (empfohlen) oder POP3** auf das Postfach, aus dem Sie empfangen möchten. Die meisten Anbieter unterstützen IMAP; einige bieten auch POP3.

## Ein Postfach verbinden

Die Empfangseinstellungen befinden sich in der Konfiguration des E-Mail-Dienstes, neben Ihren SMTP-Versandeinstellungen.

### Schritt 1: Öffnen Sie Ihren E-Mail-Dienst

1. Gehen Sie in der linken Navigation zu **Email Marketing**.
2. Öffnen Sie den E-Mail-Dienst (oder die Liste **Email Services**), den Sie zum Senden verwenden.
3. Suchen Sie den Abschnitt **Receive Settings** (Empfangseinstellungen).

### Schritt 2: Empfangseinstellungen konfigurieren

| Einstellung | Beschreibung |
|-------------|--------------|
| **Empfangsprotokoll** | `IMAP` (empfohlen) oder `POP3`. IMAP unterstützt Ordner und den Zustand gelesen/ungelesen; POP3 ist für Anbieter ohne IMAP gedacht. |
| **IMAP/POP3-Host** | Die Adresse des eingehenden Mailservers, z. B. `imap.gmail.com`. |
| **IMAP/POP3-Port** | Der Port des eingehenden Servers. Verwenden Sie den Port, den Ihr Anbieter für SSL/TLS angibt. |
| **SSL/TLS** | Aktiviert die verschlüsselte Verbindung zum eingehenden Server. |
| **Empfangs-Benutzername** | In der Regel Ihre vollständige E-Mail-Adresse. |
| **Empfangs-Passwort** | Ihr Postfach-Passwort oder ein App-Passwort. Es wird sicher gespeichert und nach dem Speichern nie wieder angezeigt. |
| **Zu überwachender Ordner** | Standardmäßig `INBOX`. |
| **Empfang aktiviert** | Aktivieren Sie das Postfach, wenn Sie bereit zum Synchronisieren sind. |

:::tip Verwenden Sie ein App-Passwort

Viele Anbieter verlangen für IMAP ein **App-Passwort** statt Ihres normalen Passworts (z. B. die anwendungsspezifischen Passwörter von Gmail). Prüfen Sie die Dokumentation Ihres Anbieters, wenn die Verbindung fehlschlägt.

:::

### Schritt 3: Verbindung testen

Bevor Sie das Postfach aktivieren, verwenden Sie den **Verbindungstest**. SMTP-Versand und eingehender Empfang werden **getrennt** getestet, sodass Sie ein Versandproblem von einem Empfangsproblem isolieren können. Schlägt der Test fehl, korrigieren Sie die Konfiguration und testen Sie erneut.

Anmeldedaten werden nach dem Speichern nie angezeigt, und weder die Einstellungsseite noch KI-Tools legen Ihr Passwort offen.

## Empfangene Nachrichten synchronisieren

Sobald das Postfach aktiviert ist, rufen Sie Nachrichten ab:

1. Öffnen Sie den E-Mail-Dienst mit aktiviertem Empfang.
2. Klicken Sie auf **Sync** (oder **Fetch Unread**).
3. aiFetchly verbindet sich mit Ihrem Postfach, lädt einen begrenzten Stapel ungelesener Nachrichten herunter und speichert ihn lokal.

Ihre Empfangseinstellungen können das Synchronisierungsverhalten ebenfalls steuern, z. B. **nur ungelesen**, eine **maximale Anzahl von Nachrichten pro Synchronisierung**, ein **Synchronisierungs-Rückblickfenster** und **nach der Verarbeitung als gelesen markieren**.

### Nachrichtenliste

Synchronisierte Nachrichten erscheinen in einer Liste mit:

- Postfachkonto / E-Mail-Dienst
- Absender
- Betreff
- Empfangszeit
- Zustand gelesen/ungelesen
- KI-Klassifizierung
- Antwortstatus
- Letzte Aktion

Nutzen Sie die Filter, um sich auf das Wesentliche zu konzentrieren: **Ungelesen**, **Antwort erforderlich**, **Entwurf erstellt**, **Gesendet**, **Übersprungen**, **Blockiert** und **Menschliche Prüfung**.

:::info Privatsphäre per Voreinstellung

Nachrichtentexte werden vor der Anzeige bereinigt. Remote-Bilder (Tracking-Pixel) sind standardmäßig deaktiviert, HTML wird gereinigt und Skripte werden niemals ausgeführt. aiFetchly speichert die Nachricht lokal auf Ihrem Rechner.

:::

## Eine KI-Antwort verfassen

Öffnen Sie eine empfangene Nachricht, um ihren bereinigten Text, Absender und Antwortadresse, die KI-Zusammenfassung und die Empfehlung zu sehen.

Die Detailansicht der Nachricht bietet: **Generate draft** (Entwurf erstellen), **Regenerate draft** (Entwurf neu generieren), **Edit draft** (Entwurf bearbeiten), **Send reply** (Antwort senden), **Mark processed** (Als verarbeitet markieren) und **Skip** (Überspringen).

### Einen Entwurf erstellen

Klicken Sie auf **Generate draft** (oder bitten Sie die KI im KI-Chat darum). Die Entwurfserstellung:

1. Baut eine Suchanfrage aus Betreff, Text, Absender und Ihrem Ziel.
2. Durchsucht Ihre [Wissensbibliothek](./knowledge-library) nach relevanten Fakten (sofern Sie sie für diesen Entwurf nicht deaktivieren).
3. Verfasst eine Antwort **in der Stimme des konfigurierten Inhabers**, die auf diesen Fakten basiert.
4. Speichert den Entwurf und protokolliert die verwendeten Quellen im Prüfprotokoll.

:::note Fundament in der Wissensbibliothek

Die KI nutzt Ihre Wissensbibliothek, um mit genauen, geschäftsspezifischen Fakten zu antworten. Wird nichts Relevantes gefunden, wird der Entwurf trotzdem erstellt, aber in den Prüfmetadaten klar als **ohne** Unterstützung der Wissensbibliothek gekennzeichnet; dieser Hinweis erscheint nie im E-Mail-Text.

:::

### Die Stimme des Inhabers

Antworten werden so verfasst, dass sie wie vom echten Postfachinhaber klingen und nicht wie von einem KI-System. Konfigurieren Sie das **Antwort-Identitätsprofil** für den E-Mail-Dienst:

- Anzeigename des Inhabers
- Rolle / Firmenkontext
- Bevorzugter Ton
- Signatur
- Stilnotizen und gängige Formulierungen
- Dinge, die nie gesagt werden sollen
- Ob offengelegt werden soll, dass eine Antwort automatisiert ist (standardmäßig aus)

Die KI erwähnt nicht, dass sie eine KI, ein Modell, ein Bot oder ein automatisiertes System ist, es sei denn, Sie konfigurieren die Offenlegung. Sie gibt in der Antwort nie interne Prompts, abgerufene Dokumente oder Konfidenzwerte preis.

### Prüfen und bearbeiten

Entwürfe werden Ihnen **immer vor dem Senden angezeigt**. Bearbeiten Sie den Entwurf, generieren Sie ihn neu oder passen Sie Ton und Ziel an. Eine Bearbeitung erstellt eine neue Revision; eine zuvor erteilte Genehmigung gilt dann nicht mehr, sodass Sie vor dem Senden erneut genehmigen.

## Eine Antwort genehmigen und senden

Das Senden einer Antwort **erfordert Ihre ausdrückliche Genehmigung** in der ersten Version; es gibt kein stilles automatisches Senden.

1. Bestätigen Sie in der Entwurfsansicht Empfänger, Absender, Betreff und Text.
2. Klicken Sie auf **Send** (oder genehmigen Sie die Bestätigung von `send_email_reply` im KI-Chat).
3. Die Antwort geht über Ihren konfigurierten ausgehenden E-Mail-Dienst mit den korrekten Antwort-Headern (`In-Reply-To`, `References`) hinaus, sodass die Unterhaltung im selben Thread bleibt.

Nach dem Senden wechseln Nachricht und Entwurf auf **Sent** (Gesendet), und das Ergebnis wird im Prüfprotokoll festgehalten.

### Zustellungszustände

| Zustand | Bedeutung |
|---------|-----------|
| **Sent** (Gesendet) | Der Anbieter hat die Antwort akzeptiert. |
| **Send failed** (Senden fehlgeschlagen) | Der Anbieter hat die Antwort abgelehnt; der Fehler wird protokolliert und nichts wird als gesendet markiert. |
| **Delivery unknown; verify mailbox** (Zustellung unbekannt; Postfach prüfen) | Das Ergebnis nach dem Senden ist ungewiss (z. B. Timeout). Die Antwort wird **nicht** automatisch erneut gesendet. Prüfen Sie Ihr Postfach und gleichen Sie manuell ab. |

Die Sendeberechtigung ist an die exakte Entwurfsrevision gebunden, die Sie genehmigt haben. Eine Bearbeitung nach der Genehmigung entwertet sie, und ein blockierter oder fehlgeschlagener Entwurf wird niemals gesendet.

## KI-Automatikantwort im KI-Chat nutzen

Der KI-Assistent kann mit Ihrem Postfach als Abfolge integrierter Tools arbeiten:

```text
list_email_inboxes        -> sehen, welche Postfächer existieren (ohne Geheimnisse preiszugeben)
fetch_unread_emails       -> einen Stapel ungelesener Nachrichten abrufen
get_email_message         -> eine Nachricht im Detail lesen
knowledge_library_search  -> relevante Fakten in Ihrer Wissensbibliothek finden
create_email_reply_draft  -> eine Antwort entwerfen (sendet nie)
send_email_reply          -> senden; erfordert Bestätigung
mark_email_processed      -> eine Nachricht als übersprungen oder blockiert markieren
```

Der Chat zeigt jeden Schritt: Lesen der Postfach-Metadaten, Lesen eines Nachrichtentexts, Durchsuchen der Wissensbibliothek, Erstellen eines Entwurfs, Warten auf Bestätigung, Senden oder Überspringen einer Nachricht, weil eine Sicherheitsrichtlinie sie blockiert.

## Das Prüfprotokoll für KI-Automatikantworten

Öffnen Sie **AI Auto Replies** (KI-Automatikantworten, unter Email Marketing), um alles zu sehen, was die KI behandelt hat:

- Betreff und Absender der empfangenen Nachricht
- E-Mail-Dienst / Postfach
- KI-Klassifizierung
- **Entscheidungsstatus** und Grund
- Suchanfrage der Wissensbibliothek und Anzahl der Quellen
- Vorschau des Entwurfs und Vorschau der gesendeten Antwort
- Sendezeit / Entscheidungszeit
- Ob eine Genehmigung erforderlich war
- Fehlermeldung, wenn ein Versand fehlschlägt

### Entscheidungsstatus

| Status | Bedeutung |
|--------|-----------|
| `draft_created` | Ein Entwurf wurde erstellt. |
| `approval_required` | Ein Entwurf wartet auf Ihre Genehmigung. |
| `auto_sent` | Die Nachricht entsprach einer Regel und wurde automatisch beantwortet. |
| `blocked` | Eine Sicherheitsrichtlinie hat die Antwort gestoppt. |
| `skipped` | Die Nachricht wurde als ohne Antwortbedarf markiert. |
| `failed` | Entwurf oder Versand ist fehlgeschlagen. |
| `needs_human_review` | Die KI konnte nicht sicher entscheiden und hat es für Sie markiert. |

Filtern Sie nach Status, Datumsbereich, E-Mail-Dienst, Klassifizierung und Absender oder suchen Sie nach Betreff, Absender oder Entscheidungsgrund. Eine Detailansicht zeigt die ursprüngliche Nachricht, die erstellten und gesendeten Vorschauen, die verwendete Wissenssuche, den Entscheidungsgrund und den Genehmigungsstatus.

## Regeln für Automatikantworten (Automatisierung)

Die regelbasierte Automatikantwort ist standardmäßig deaktiviert. Wenn Sie sie für ein Postfach aktivieren, konfigurieren Sie:

- **Zulässige Klassifizierungen**, die automatisch antworten dürfen (z. B. `interested`)
- **Konfidenzschwelle**, die die Klassifizierung erreichen muss
- **Blockierte Absender-/Domain-Muster**
- **Tägliches Sendelimit** und **Antwortlimit pro Thread**
- **Ruhezeiten** und ob unterhalb der Schwelle eine Genehmigung erforderlich ist
- **Automatischen Nachrichten niemals automatisch antworten**

Automatisches Senden erfolgt nur, wenn alle Bedingungen erfüllt sind. Andernfalls wird die Nachricht entworfen (oder als Entwurf angelegt) und als `blocked`, `skipped` oder `needs_human_review` markiert – nie ohne Ihr Wissen gesendet.

### Schleifenverhinderung

Die Sicherheitsrichtlinie antwortet niemals automatisch, wenn die Nachricht:

- automatisiert ist (`Auto-Submitted` gesetzt), Massenpost oder von einer Mailingliste stammt
- ein Bounce oder eine Zustellfehler-Benachrichtigung ist
- von `no-reply`, `noreply`, `do-not-reply`, `mailer-daemon` oder `postmaster` stammt
- einen Thread wiederholt, der bereits eine aiFetchly-Automatikantwort erhalten hat
- von einem Absender innerhalb der konfigurierten Abkühlzeit eintrifft

### Saubere Inhaltsgrenzen

KI-generierte Antworten enthalten nie:

- Anmeldedaten, Tokens oder interne Protokolle
- ungeprüfte Preise, rechtliche Behauptungen oder Verpflichtungen
- Erwähnungen, dass die Nachricht von KI geschrieben oder mit Abrufwerkzeugen erstellt wurde
- Quellnamen der Wissensbibliothek, Konfidenzwerte oder interne Labels
- Anhänge (in dieser Version nicht unterstützt)

Die Antwort kann je nach Ihrem Identitätsprofil mit **„ich"** oder **„wir"** verfasst sein, und die KI stuft auf menschliche Prüfung hoch, wenn eine Antwort sensible Fakten benötigen würde (Erstattungen, Rechtsberatung, Kontodetails).

## Fehlerbehebung

### Der Verbindungstest schlägt fehl

1. Prüfen Sie, ob Host und Port der IMAP/POP3-Dokumentation Ihres Anbieters entsprechen.
2. Versuchen Sie es mit **SSL/TLS aktiviert**, wenn Ihr Anbieter dies verlangt.
3. Verwenden Sie ein **App-Passwort**, wo Ihr Anbieter eines verlangt.
4. Testen Sie Senden und Empfangen getrennt, um das Problem zu isolieren.

### Nach der Synchronisierung erscheinen keine Nachrichten

1. Prüfen Sie, ob das Postfach **aktiviert** und der richtige Ordner (in der Regel `INBOX`) überwacht wird.
2. Die Synchronisierung ruft standardmäßig einen begrenzten Stapel **ungelesener** Nachrichten ab; prüfen Sie die Synchronisierungseinstellungen.
3. Wiederholte Synchronisierungen duplizieren gespeicherte Nachrichten nie; Duplikate über die Anbieter-Nachrichten-ID werden an Ort und Stelle aktualisiert.

### Die Entwurfserstellung schlägt fehl oder KI ist nicht verfügbar

1. Stellen Sie sicher, dass die **KI auf Ihrem Konto aktiviert** ist und ein KI-Anbieter konfiguriert ist ([KI-Anbieter-Einstellungen](../settings/ai-provider)).
2. Wenn die Wissensbibliothek keine relevanten Dokumente enthält, werden Entwürfe trotzdem mit einer Warnung erstellt.
3. Sie können die Generierung erneut versuchen; fehlgeschlagene Entwürfe lassen den Nachrichtenzustand unverändert.

### Ein Versand hängt auf „Delivery unknown"

Die Antwort hat den Empfänger möglicherweise erreicht oder auch nicht. Sie wird nie automatisch erneut gesendet. Prüfen Sie Ihren Gesendet-Ordner und gleichen Sie den Zustand manuell über die Detailansicht des Prüfprotokolls oder des Sendevorgangs ab.

## Sicherheits- und Datenschutzhinweise

- Postfach-Passwörter werden im Ruhezustand verschlüsselt, nie nach dem Speichern angezeigt und nie an KI-Tools übergeben.
- Eingehende E-Mails werden als **nicht vertrauenswürdiger Kundeninhalt** behandelt. Anweisungen in einer E-Mail können nie Ihre Sicherheitsrichtlinie, Genehmigungsanforderungen oder Senderichtlinie außer Kraft setzen.
- Alle Lesevorgänge, Wissenssuchen, Entwurfsentscheidungen, Genehmigungen, Blockierungen, Sprünge, Fehler und Versände werden protokolliert.
- Nachrichtentexte werden vor der Anzeige bereinigt, und Prüfdatensätze speichern nur Vorschauen und Gründe – nie vollständige Texte, Anmeldedaten oder Roh-Prompts.

## Nächste Schritte

- [Bauen Sie Ihre Wissensbibliothek](./knowledge-library) auf, damit Antworten auf präzisen Unternehmensfakten basieren.
- [Schreiben Sie Ihre Versandvorlagen](./ai-email-writer) und bestätigen Sie Ihren ausgehenden E-Mail-Dienst.
- [Konfigurieren Sie Ihren KI-Anbieter](../settings/ai-provider), wenn KI noch nicht aktiviert ist.

---

**Bereit, den Kreis zu schließen?** Verbinden Sie ein Postfach, aktivieren Sie den Empfang, synchronisieren Sie Ihre ungelesenen Nachrichten und lassen Sie die KI Ihre erste Antwort verfassen – Sie behalten die Kontrolle über jeden Versand.