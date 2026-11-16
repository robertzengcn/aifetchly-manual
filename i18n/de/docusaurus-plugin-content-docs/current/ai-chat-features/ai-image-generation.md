---
id: ai-image-generation
title: KI-Bildgenerierung und -bearbeitung
sidebar_label: KI-Bildgenerierung und -bearbeitung
description: Erzeugen Sie Bilder per Chat mit der KI, bearbeiten Sie sie mit einer Folgenachricht (ganz ohne Workspace), wählen und ordnen Sie bis zu drei Bilder und übergeben Sie große Aufträge an die Batch-Bearbeitung.
---

# KI-Bildgenerierung und -bearbeitung

Sie können Bilder erstellen und verfeinern, ohne den Chat zu verlassen. Fordern Sie ein Bild an, erhalten Sie es direkt in der Konversation und sagen Sie dann, was geändert werden soll, zum Beispiel „add a dog into the image". Die Bearbeitung Ihrer eigenen chat-generierten Bilder erfordert **keinen** Workspace. Ein Workspace ist nur für Projektdateien und für das Speichern von Bildern in einem Projekt nötig.

Überblick:

- **Erzeugen** Sie Bilder mit einer Chat-Nachricht.
- **Bearbeiten** Sie sie mit einer Folgenachricht, ohne Tools und ohne Workspace.
- **Wählen und ordnen** Sie bis zu drei generierte Bilder pro Anfrage, einschließlich der Kombination zu einer Komposition.
- **Wenden Sie eine Bearbeitung auf viele Bilder an** mit der [Batch-Bildbearbeitung](./ai-image-batch-editing) (bis zu 50 Bilder).

![Batch-Bildbearbeitung im AI Chat Workspace](/img/ai-image-editing.png)

## Bilder erzeugen

Beschreiben Sie im Composer, was Sie wollen, und senden Sie die Nachricht:

- „Generiere ein Bild eines Löwen in der Savanne bei Sonnenuntergang."
- „Erstelle ein Produktfoto eines weißen Sneakers auf einem Holztisch."
- „Zeichne einen freundlichen Roboter als Maskottchen für eine Kinder-Programmier-App."

Die KI zeigt ihren Fortschritt wie eine normale Chat-Antwort. Sobald das Bild fertig ist, erscheint es in der Konversation. Liefert ein Durchlauf mehrere Bilder, werden sie als nummeriertes Raster angezeigt.

Generierte Bilder werden **auf Ihrem Rechner** gespeichert, pro Konto und Konversation organisiert. Der Chat verlässt sich nicht auf temporäre Anbieter-Links, deshalb öffnen sich die Bilder von gestern auch heute noch. Es gibt keine öffentliche Galerie: Die Bilder gehören zu der Konversation, in der Sie sie erzeugt haben.

## Ein generiertes Bild bearbeiten

### Option 1: Sagen Sie es einfach

Im üblichen Fall müssen Sie nichts auswählen. Nachdem ein Bild erzeugt wurde, senden Sie eine Folgenachricht wie:

- „Füge einen Hund in das Bild ein."
- „Mach den Himmel stürmisch."
- „Ersetze den Hintergrund durch Weiß."

aiFetchly ermittelt, welches Bild gemeint ist, mit **deterministischer lokaler Logik** (nicht das KI-Modell, das Pfade errät):

| Was Sie sagen | Was aiFetchly anhängt |
|---|---|
| „dieses Bild", „das Bild", „it" und der letzte Durchlauf hat **ein** Bild | Dieses Bild |
| „Bild 2", „das zweite Bild" | Das Bild an dieser Position der letzten Generierung |
| „beide", „alle" | Jedes Bild der letzten Generierung (bis zu drei) |
| Eine Bearbeitung, die klar auf **mehr als drei** Bilder zielt | Bietet die [Batch-Bildbearbeitung](./ai-image-batch-editing) an |

Wenn Ihre Formulierung auf mehrere Bilder zutreffen könnte, rät aiFetchly nicht. Ein Auswahldialog zeigt die Kandidaten, und Sie wählen das gemeinte Bild.

:::tip Explizite Auswahl gewinnt immer

Alles, was Sie in der Referenzleiste auswählen, überschreibt die automatische Inferenz. Um sicherzugehen, dass das richtige Bild verwendet wird, wählen Sie es selbst aus (nächster Abschnitt).

:::

### Option 2: Wählen Sie das Bild selbst

Jedes generierte Bild in der Konversation hat Hover-Aktionen:

| Aktion | Wirkung |
|---|---|
| **Als Referenz verwenden** | Fügt das Bild der Referenzleiste des Composers hinzu (erneut klicken, um es zu entfernen). |
| **Bearbeiten** | Fügt das Bild als einzige Referenz hinzu und fokussiert den Composer, bereit für Ihre Anweisung. |
| **Open** | Öffnet die Bilddatei auf Ihrem Rechner. |
| **Im Workspace speichern** | Exportiert das Bild in den Workspace Ihres Projekts. Benötigt einen genehmigten Workspace. |
| **Alle speichern** | (Antworten mit mehreren Bildern) Exportiert alle Bilder dieser Antwort auf einmal. |

### Die Referenzleiste

Ausgewählte Bilder erscheinen als geordnete Miniaturbilder über dem Composer:

1. Die Miniaturbilder zeigen ihre Auswahlreihenfolge als **1**, **2**, **3**.
2. Verwenden Sie **Nach oben** und **Nach unten** an einem Miniaturbild, um die Reihenfolge zu ändern. Die Reihenfolge zählt, wenn Sie Bilder kombinieren („setze Bild 1 nach links und Bild 2 nach rechts").
3. Entfernen Sie ein Miniaturbild mit **Entfernen** oder leeren Sie die Leiste mit **Alle entfernen**.
4. Die Leiste zeigt am Limit einen Hinweis: „Pro Anfrage können bis zu 3 Bilder referenziert werden."
5. Der Inhalt der Leiste gehört zur aktuellen Konversation und wird erst mit Ihrer Nachricht gesendet.

Hochgeladene Bilder und Referenzen auf generierte Bilder teilen sich dasselbe Limit: höchstens **drei Bildeingaben** pro Chat-Anfrage. Zwei Uploads plus zwei Referenzen sind zu viele für eine Anfrage; senden Sie das zusätzliche Bild in der nächsten Nachricht oder nutzen Sie die Batch-Bearbeitung für unabhängige Bearbeitungen.

## Bearbeitung mehrerer Bilder und Fusion

Mit zwei oder drei ausgewählten Referenzen können Sie:

- **Jedes Bild mit derselben Änderung bearbeiten**: „gib beiden einen weißen Hintergrund".
- **Bilder zu einem zusammenführen**: „verschmelze sie zu einem Poster, Produkt links, Logo rechts".

Fusion ist auf **drei Bilder gleichzeitig** begrenzt. Für mehr Bilder bearbeiten Sie sie einzeln oder nutzen die [Batch-Bildbearbeitung](./ai-image-batch-editing) für unabhängige Bearbeitungen.

## Workspace-Bilder bearbeiten

Bilder in Ihrem **Projekt-Workspace** (Dateien auf der Festplatte, die Sie der Aufgabe beigelegt haben) behalten die Workspace-Regeln:

- Bearbeiten oder Analysieren eines Workspace-Bildes erfordert einen **genehmigten Workspace**.
- Dieselbe Bearbeitung auf viele Workspace-Dateien anzuwenden nutzt denselben Batch-Ablauf wie bei generierten Bildern, mit beibehaltener Workspace-Pflicht.

Chat-generierte Bilder überspringen all das. Sie sind Konversationsartefakte und lösen sich ohne jeden Workspace auf. Genau das ist der Punkt: Sie sollten nie ein Bild in einen Ordner exportieren müssen, nur um es weiter zu bearbeiten.

## Limits

| Limit | Wert |
|---|---|
| Bildeingaben pro Chat-Anfrage (Uploads + Referenzen zusammen) | 3 |
| Bilder pro Batch-Auftrag | 1 bis 50 |
| Bilder pro Fusion (Kombination) pro Anfrage | 3 |
| Unterstützte Formate | PNG, JPEG, WebP |
| Größe eines gespeicherten generierten Bildes | bis zu ca. 20 MB pro Bild |
| Normalisierung des gesendeten Bildes | lange Kante bis 1568 px, Ziel ca. 1,5 MB |

Beim Senden werden nie Bilder aus früheren Runden erneut gesendet. Nur was Sie ausgewählt oder in der aktuellen Nachricht eindeutig referenziert haben, ist enthalten. Das hält Gespräche mit vielen Bildern schnell und günstig.

## Fehlerbehebung

**„Mehrere Bilder könnten zu Ihrer Anfrage passen".**
Ihre Formulierung (etwa „dieses Bild") traf auf einen Durchlauf mit mehreren Bildern. Wählen Sie das gemeinte Bild im Auswahldialog oder in der Referenzleiste.

**„Sie können nur Bilder referenzieren, die in dieser Konversation generiert wurden".**
Referenzen sind auf die Konversation beschränkt, in der das Bild erzeugt wurde. Erzeugen Sie das Bild hier, oder kopieren Sie die Datei in Ihren Workspace und fügen Sie sie dort an.

**„Das Originalbild ist nicht mehr verfügbar".**
Die gespeicherte Datei fehlt (zum Beispiel nach einer Speicherbereinigung). Erzeugen Sie das Bild neu oder wählen Sie ein anderes.

**„Image editing is unavailable: no edit-capable model is configured".**
Ihr [KI-Anbieter](../settings/ai-provider) stellt kein Bildbearbeitungsmodell bereit. Wechseln Sie zu einem Anbieter oder Modell, das Bildbearbeitung unterstützt.

**„Unsupported image type" / „exceeds the size limit".**
Generierte Bilder sind meist in Ordnung, aber Uploads und Exporte müssen PNG, JPEG oder WebP innerhalb der obigen Limits sein. Konvertieren oder verkleinern Sie das Bild zuerst.

**aiFetchly verlangt einen Workspace, um ein Bild zu bearbeiten.**
Das passiert nur bei **Workspace-Dateien**. Chat-generierte Bilder brauchen nie einen. Wenn Sie eine Projektdatei bearbeiten, genehmigen Sie zuerst den Workspace oder exportieren Sie das generierte Bild in den Workspace und arbeiten Sie dort weiter.

## Nächste Schritte

- [Batch-Bildbearbeitung](./ai-image-batch-editing) — eine Bearbeitung auf bis zu 50 Bilder anwenden, mit Fortschritt, Stopp und Wiederholung.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — der volle Funktionsumfang des Chats, vom Plan-Modus bis zu Subagents.
