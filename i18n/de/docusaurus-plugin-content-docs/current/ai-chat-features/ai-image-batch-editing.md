---
id: ai-image-batch-editing
title: Batch-Bildbearbeitung
sidebar_label: Batch-Bildbearbeitung
description: Wenden Sie dieselbe Bearbeitung auf bis zu 50 generierte Bilder gleichzeitig an. Isolierte Jobs pro Bild, begrenzte Parallelität, Live-Fortschritt, Stopp und Wiederholung fehlgeschlagener Elemente.
---

# Batch-Bildbearbeitung

Die Batch-Bearbeitung wendet **eine Anweisung auf viele Bilder** an. Statt Bild einzeln zu bearbeiten, führt aiFetchly einen begrenzten Hintergrund-Job mit einer isolierten Bearbeitung pro Bild aus und zeigt eine einzelne Fortschrittskarte in der Konversation. Typische Aufträge:

- „Gib allen 20 Produktfotos einen weißen Hintergrund."
- „Helle alle Bilder aus dieser Generierung auf."
- „Füge meinen Wasserzeichen-Text in jedes dieser Bilder ein."

## Wann die Batch-Bearbeitung zum Einsatz kommt

Sie landen auf drei Arten in einem Batch:

1. **Sie fordern dieselbe Bearbeitung für mehr als drei Bilder an.** Direkte Chat-Anfragen tragen höchstens drei Bilder; eine größere Menge wird deshalb automatisch an einen Batch geroutet (aiFetchly bittet zuerst um Bestätigung).
2. **Sie wählen vier oder mehr Bilder in der Referenzleiste aus.** aiFetchly bietet an: „Es wurden mehr als 3 Bilder ausgewählt. Stattdessen als Stapel unabhängiger Bearbeitungen verarbeiten?" Bestätigen Sie, um den Batch zu starten, oder lehnen Sie ab und bearbeiten Sie je drei Bilder.
3. **Sie fordern eine große nummerierte Menge an**, etwa „bearbeite Bild 4 bis Bild 12". Dieselbe Bestätigung erscheint, bevor irgendetwas ausgeführt wird.

:::info Bestätigt, bevor Kosten entstehen

Die Batch-Bestätigung zeigt vor dem Start die genaue Anzahl. Nichts wird ausgeführt und keine KI-Nutzung berechnet, bis Sie bestätigen.

:::

## Einen Batch ausführen

1. **Erzeugen oder wählen Sie die Bilder** aus, die bearbeitet werden sollen (siehe [KI-Bildgenerierung und -bearbeitung](./ai-image-generation)).
2. **Senden Sie eine Anweisung**, die für alle gilt, zum Beispiel „ersetze bei allen den Hintergrund durch Weiß".
3. **Bestätigen Sie den Batch**, wenn der Dialog „Als Stapel verarbeiten?" erscheint. Er nennt, wie viele Bilder bearbeitet werden.
4. **Beobachten Sie die Fortschrittskarte** in der Konversation (Details unten). Ergebnisse erscheinen, sobald jedes Element dauerhaft gespeichert ist.
5. **Behandeln Sie das Ergebnis**: Laden Sie fertige Bilder herunter oder prüfen Sie sie und wiederholen Sie, was fehlgeschlagen ist.

## Die Fortschrittskarte

Eine Karte verfolgt den ganzen Job. Sie flutet die Konversation nie mit einer Nachricht pro Bild:

- **Zusammenfassungszeile**: `{completed} von {requested} abgeschlossen · Parallelität {concurrency}` plus den Job-Status (laufend, abgeschlossen, teilweise, fehlgeschlagen, abgebrochen).
- **Stapel stoppen**: stoppt den Job jederzeit. Bereits fertiggestellte Bilder bleiben gespeichert; nie gestartete Elemente werden als abgebrochen markiert.
- **Aufklappbare Fehler-Sektion**: zeigt jedes fehlgeschlagene Element mit Dateiname und kurzem Grund.
- **Fehlgeschlagene Elemente wiederholen (N)**: wiederholt nach Abschluss des Jobs nur die fehlgeschlagenen oder abgebrochenen Elemente. Erfolgreiche Bilder werden nie erneut verarbeitet.

### Teilerfolg ist sicher

Gelingen 18 von 20 Bildern, behalten Sie diese 18 Ergebnisse. Ein Fehler bei einem Bild bricht seine Nachbarn nicht ab. Klicken Sie auf **Fehlgeschlagene Elemente wiederholen**, um den beiden Fehlern eine zweite Chance zu geben.

## Wie ein Batch läuft

Die Batch-Bearbeitung ist auf Skalierung gebaut, ohne den Chat aufzublähen:

- **Ein Bild, ein Job.** Jedes Bild wird durch seine eigene isolierte KI-Anfrage mit der gemeinsamen Anweisung bearbeitet. Die Zuordnung von Eingabe zu Ausgabe bleibt erhalten: Ergebnisse werden in der Reihenfolge gemeldet, in der Sie die Bilder ausgewählt haben, nicht in der Reihenfolge des Abschlusses.
- **Begrenzte Parallelität.** Bis zu **3 Bilder** werden gleichzeitig verarbeitet (durch den Koordinator zwischen 1 und 3 einstellbar). Ein Job mit 50 Bildern besteht aus 50 kleinen Anfragen, nicht aus einer einzigen riesigen.
- **Leichter Eltern-Chat.** Die Hauptkonversation erhält nur Fortschritt, Zusammenfassungen und die fertigen Bilder. Bildbytes und Transkripte pro Element bleiben in den isolierten Workern, damit das Weiterschreiben während und nach einem langen Batch schnell bleibt.
- **Dauerhafte Ausgaben.** Jedes fertige Bild wird lokal gespeichert, bevor die Fortschrittskarte es referenziert, sodass ablaufende temporäre Anbieter-Links Ihre Ergebnisse nicht verlieren können.

:::note Jedes Bild kostet weiterhin KI-Nutzung

Die Batch-Isolation verkleinert den Konversationskontext, sie macht die Bearbeitungen nicht gratis. Jedes Bild ist eine Operation des Bildmodells. Der Bestätigungsdialog zeigt die Elementanzahl vorab, und dieselben Tool-Genehmigungsregeln wie im direkten Chat gelten weiter.

:::

## Limits

| Limit | Wert |
|---|---|
| Bilder pro Batch-Auftrag | 1 bis 50 (Duplikate werden automatisch entfernt) |
| Parallele Bildbearbeitungen | 1 bis 3 (Standard 3) |
| Bildeingaben pro einzelner direkter Anfrage | 3 |
| Dieselbe Anweisung für alle Elemente | Ja, eine gemeinsame Anweisung pro Batch |
| Fusion (mehrere Bilder zu einem kombinieren) | Im Batch nicht verfügbar; nutzen Sie den direkten Weg mit bis zu 3 Bildern |

## Fehlerbehebung

**Einige Elemente sind fehlgeschlagen.**
Öffnen Sie die Fehler-Sektion der Fortschrittskarte, um die Gründe zu sehen, und klicken Sie auf **Fehlgeschlagene Elemente wiederholen (N)**. Nur die Fehler werden wiederholt.

**„Dieses Bild überschreitet das Größenlimit"** oder **„Nicht unterstützter Bildtyp".**
Das gespeicherte Original ist möglicherweise zu groß oder in einem Format, das der Editor nicht lesen kann (PNG, JPEG und WebP werden unterstützt). Erzeugen Sie das Bild neu, oder speichern Sie es in Ihren Workspace, verkleinern oder konvertieren Sie es dort und führen Sie die Bearbeitung als Workspace-Datei-Batch aus.

**„Das Originalbild ist nicht mehr verfügbar".**
Die gespeicherte Datei hinter einer Referenz fehlt. Erzeugen Sie dieses Bild neu und starten Sie für es einen neuen Batch.

**„Image editing is unavailable: no edit-capable model is configured".**
Ihr [KI-Anbieter](../settings/ai-provider) stellt kein Bildbearbeitungsmodell bereit. Konfigurieren Sie eines und wiederholen Sie die fehlgeschlagenen Elemente.

**Ich habe den Batch versehentlich gestoppt.**
Fertige Ergebnisse sind bereits gespeichert. Klicken Sie nach Abschluss des Jobs auf **Fehlgeschlagene Elemente wiederholen**: Das erfasst auch die abgebrochenen (nie gestarteten) Elemente.

**Der Batch scheint steckengeblieben zu sein.**
Die Parallelität ist auf drei gleichzeitige Bearbeitungen begrenzt; ein großer Job dauert also eine Weile. Prüfen Sie die Zusammenfassungszeile: Steigt die Anzahl der abgeschlossenen Elemente lange nicht mehr, nutzen Sie **Stapel stoppen** und wiederholen Sie die restlichen Elemente.

## Nächste Schritte

- [KI-Bildgenerierung und -bearbeitung](./ai-image-generation) — Bilder erzeugen und ein bis drei Bilder direkt bearbeiten.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — der volle Funktionsumfang des Chats, vom Plan-Modus bis zu Subagents.
