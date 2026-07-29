---
id: website-import
title: Website in die Wissensbibliothek importieren
sidebar_label: Von Website importieren
description: Wandeln Sie öffentliche Webseiten in durchsuchbare Wissensbibliothek-Dokumente um – über eine URL — eine Seite, eine Liste von Seiten oder ein begrenztes Same-Origin-Crawling.
---

# Website in die Wissensbibliothek importieren

Mit der Funktion **Import Website** können Sie öffentliche Webseiten direkt über eine URL in durchsuchbare Wissensbibliothek-Dokumente umwandeln – ohne die Seite vorher manuell als Datei speichern zu müssen. aiFetchly lädt die Seite, wandelt sie in sauberes Markdown um und indiziert sie über dieselbe RAG-Pipeline wie hochgeladene Dateien. Importierte Seiten stehen daher sofort dem [AI Email Writer](./ai-email-writer), [AI Chat](./ai-chat-v2) und der [Wissensbibliothek-Suche](./knowledge-library) zur Verfügung.

:::info Abonnement erforderlich

Der Website-Import führt Chunking und Embedding aus und erfordert daher ein aktives aiFetchly-Abonnement mit aktivierter KI. Wenn die KI nicht aktiviert ist, wird der Import blockiert, bevor eine Seite geladen wird.

:::

## Zwei Importwege

Sie können Webseiten auf zwei Wegen importieren – beide ergeben identische Wissensbibliothek-Dokumente:

| Methode | Wo | Ideal für |
|---------|----|-----------|
| **Dialog „Import Website“** | Seite Wissensbibliothek → Schaltfläche **Import Website** | Kontrollierte, manuelle Imports mit allen Optionen |
| **KI-Chat-Werkzeug** | Bitten Sie den Assistenten im [AI Chat](./ai-chat-v2) | Schnelle, dialogorientierte Imports („importiere unsere Preisseite“) |

Der Rest dieser Seite konzentriert sich auf den manuellen Dialog. Der Weg über den KI-Chat wird unten unter [Aus dem KI-Chat importieren](#aus-dem-ki-chat-importieren) beschrieben.

## Importmodi

Wählen Sie im Dialog einen von drei Modi:

| Modus | Eingabe | Wann verwenden |
|-------|---------|----------------|
| **Single page** | Eine URL (+ optionaler Titel) | Sie möchten eine bestimmte Seite |
| **URL list** | Bis zu 50 URLs, eine pro Zeile | Sie kennen bereits die genauen Seiten |
| **Site crawl** | Eine Start-URL + Seiten-/Tiefengrenzen | Sie möchten eine Doku-, FAQ-Seite oder einen Bereich per Same-Origin-Crawling erfassen |

:::tip Ein Dokument pro Seite

Jede importierte Webseite wird zu **eigenem** Wissensbibliothek-Dokument – nicht zu einem einzigen riesigen Dokument pro Website. Dadurch bleiben Zitate präzise, einzelne Seiten lassen sich einfach löschen oder aktualisieren und die Dublettenerkennung bleibt zuverlässig.

:::

## Den Dialog „Import Website“ verwenden

### Schritt 1: Dialog öffnen

1. Öffnen Sie die Seite **Knowledge** über die linke Navigation.
2. Klicken Sie im Seitenkopf auf **Import Website**.

### Schritt 2: Importmodus wählen

Wählen Sie oben im Dialog **Single page**, **URL list** oder **Site crawl**. Das Formular passt sich an den gewählten Modus an.

### Schritt 3: URL(s) angeben

- **Single page** und **Site crawl** — geben Sie eine einzelne **URL** ein (im Crawl-Modus heißt das Feld **Start URL**). Verwenden Sie eine öffentliche `http://`- oder `https://`-Adresse, z. B. `https://example.com/pricing`.
- **URL list** — geben Sie eine URL pro Zeile im Feld **URLs** ein (max. 50). Leerzeilen werden ignoriert.

### Schritt 4: Modusspezifische Optionen setzen

- **Single page** — optional einen **Title** festlegen, um den Titel der Seite zu überschreiben.
- **URL list** und **Site crawl** — **Max pages** festlegen (wie viele Seiten importiert werden).
- **Site crawl** — zusätzlich **Max depth** festlegen (wie viele Link-Sprünge ab der Start-URL gefolgt wird).

### Schritt 5: Gemeinsame Metadaten hinzufügen (optional)

| Feld | Beschreibung |
|------|--------------|
| **Tags** | Durch Kommas getrennte Tags, die auf jede importierte Seite angewendet werden (z. B. `pricing, product`). |
| **Author** | Bei den Dokumenten erfasster Autor. Standard: `Website`. |
| **Description** | Optionale Beschreibung, die mit den Dokumenten gespeichert wird. |
| **Duplicate policy** | `Skip duplicates` (Standard) oder `Allow duplicates`. Siehe [Umgang mit Dubletten](#umgang-mit-dubletten). |

### Schritt 6: Importieren und prüfen

Klicken Sie auf **Import**. Ein Fortschrittsbereich zeigt die aktuelle Seite, wie viele Links gefunden wurden (Crawl-Modus) und die laufenden Importiert-/Übersprungen-Zähler.

Nach Abschluss listet der Dialog:

- **Imported** — jede Seite mit Titel, Quell-URL und Anzahl erstellter Chunks.
- **Skipped** — jede URL, die nicht importiert wurde, mit Grund (Dublette, leerer Inhalt, Scraping-Fehler, blockierte URL, …).
- **Discovered** — wie viele Same-Origin-Links der Crawler gefunden hat (Crawl-Modus).

Verwenden Sie **Import another**, um einen neuen Import zu starten, oder **Close**, um zur Wissensbibliothek zurückzukehren. Importierte Seiten erscheinen in der Dokumentenliste wie hochgeladene Dateien und sind sofort durchsuchbar.

## Grenzwerte

| Grenzwert | Wert |
|-----------|------|
| Max. URLs pro **URL list** | 50 |
| Bereich **Max pages** (URL list & Site crawl) | 1–100 (Standard 20) |
| Bereich **Max depth** (Site crawl) | 0–4 (Standard 2) |
| Erlaubte URL-Schemata | nur `http://`, `https://` |
| Crawl-Bereich | Nur Same-Origin (kein Cross-Origin-Crawling) |

Diese Obergrenzen schützen die Embedding-Kosten und halten Crawls begrenzt. Der Crawler folgt zudem konservativen Standards: geringe Nebenläufigkeit und eine kleine Pause zwischen den Anfragen.

## Wie importierte Inhalte gespeichert werden

Jede Webseite wird in Markdown umgewandelt und über die Standard-RAG-Pipeline aufgenommen:

1. **Laden** — die Seite wird über den browserbasierten Scraper von aiFetchly geladen (dieselbe Engine wie bei der Website-Analyse).
2. **Extrahieren & Konvertieren** — Navigation, Skripte, Styles und anderer Ballast werden entfernt und der Hauptinhalt in Markdown umgewandelt.
3. **Bereitstellen** — das Markdown wird als anwendungs-eigenes Dokument gespeichert.
4. **Chunking & Embedding** — das Dokument wird genau wie eine hochgeladene Datei in Chunks zerlegt und eingebettet.
5. **Indizieren** — die Seite wird durchsuchbar und als RAG-Kontext nutzbar.

Der generierte Dokumentname folgt dem Muster `{hostname}-{path}-{hash}.md` (z. B. `example.com-pricing-a1b2c3d4.md`), und die Quell-URL wird beim Dokument erfasst.

:::note Extraktionsqualität

aiFetchly wählt den wahrscheinlichsten Inhaltsbereich aus (article, main, Doku-Container, Fallback auf body). Die Qualität hängt von der Seite ab, und Seiten mit wenig lesbarem Text (Login-/Fehlerseiten, starke JavaScript-Apps) können als leer übersprungen werden. Die Extraktion wird mit der Zeit besser.

:::

## Umgang mit Dubletten

Standardmäßig **überspringt** aiFetchly Seiten, die bereits in Ihrer Wissensbibliothek vorhanden sind, damit diese sauber bleibt.

- **Skip duplicates** (Standard) — Dubletten werden übersprungen und unter **Skipped** mit dem Grund `duplicate` aufgeführt. Ein Einzelseiten-Import, der eine Dublette ist, schlägt mit einem Dublettenfehler fehl.
- **Allow duplicates** — jede Seite wird importiert, auch wenn bereits eine Kopie existiert. Verwenden Sie dies, wenn Sie bewusst einen zweiten Schnappschuss einer Seite möchten.

:::info Seite ersetzen

Es gibt noch keinen automatischen „Replace“-Modus. Um eine Seite zu aktualisieren, löschen Sie das alte Dokument und importieren Sie die URL erneut.

:::

## Sicherheit und Schutz

Der Website-Import ist so konzipiert, dass er standardmäßig sicher ist. Um Missbrauch und SSRF-Angriffe (Server-Side Request Forgery) zu verhindern, lehnt aiFetchly ab:

- Nicht-`http(s)`-URLs, einschließlich `file://`, `mailto:`, `tel:`, `javascript:` und `data:`.
- `localhost`, Loopback sowie private, link-local und interne Netzwerkadressen.
- Cloud-Metadaten-Endpunkte (z. B. `169.254.169.254`).
- URLs mit Zugangsdaten.
- Weiterleitungen und gefundene Links, die auf eines der obigen Ziele auflösen.

Crawls verlassen niemals den Origin der Start-URL. Importierter Seiteninhalt wird streng als **Wissen** behandelt: Er wird nur für die Abruf gespeichert und niemals als Anweisung ausgeführt.

:::warning Keine privaten oder authentifizierten Seiten

Authentifizierte, login-geschützte und interne Netzwerkseiten werden nicht unterstützt. Importieren Sie nur öffentliche Seiten.

:::

## Aus dem KI-Chat importieren

Sie können den Assistenten im [AI Chat](./ai-chat-v2) auch bitten, Webseiten zu importieren. Der Assistent verwendet das Werkzeug `knowledge_library_import_website` und fragt vor dem Laden nach einer Bestätigung.

Beispiele:

```text
Importiere https://example.com/pricing in meine Wissensbibliothek und tagge es mit pricing.
```

```text
Importiere die Doku-Seiten von https://example.com/docs in die Wissensbibliothek.
```

```text
Crawl bis zu 25 Seiten von https://example.com/docs und importiere sie als Website-Dokumente.
```

Der Assistent bestätigt Modus, URL(s), Grenzwerte, Tags und Dublettenrichtlinie und fasst anschließend zusammen, wie viele Seiten importiert und übersprungen wurden.

## Fehlerbehebung

| Symptom | Wahrscheinliche Ursache | Was tun |
|---------|-------------------------|---------|
| **„Import failed“** vor dem Laden einer Seite | KI/Abonnement nicht aktiviert | Aktivieren Sie die KI in Ihrem Abonnement und versuchen Sie es erneut. |
| Seite unter **Skipped** als `URL_BLOCKED` | URL ist privat/localhost/nicht http(s) | Verwenden Sie eine öffentliche `http(s)`-URL. |
| Seite als `EMPTY_CONTENT` | Seite hatte wenig lesbaren Text (Login/Fehler, nur JS) | Andere URL versuchen oder Seite im Browser prüfen. |
| Seite als `SCRAPE_FAILED` | Seite hat den Scraper blockiert oder Timeout | Später erneut versuchen oder Seitenanzahl reduzieren. |
| Seite als `duplicate` | Seite existiert bereits in der Bibliothek | **Allow duplicates** verwenden oder erst das alte Dokument löschen. |
| Crawl hat fewer Seiten importiert als erwartet | **Max pages** / **Max depth** erreicht oder wenige Same-Origin-Links | Grenzwerte erhöhen oder prüfen, ob die Seite die gewünschten Seiten verlinkt. |
| Importierte Seite wird nicht im KI-Inhalt verwendet | RAG-Kontext nicht aktiviert oder Inhalt nicht relevant | RAG-Kontext in AI Chat / Email Writer aktivieren und prüfen, dass der Dokumentstatus **Completed** ist. |

## Nächste Schritte

- [Wissensbibliothek](./knowledge-library) — importierte Seiten verwalten, durchsuchen, neu einbetten und löschen.
- [AI Chat V2](./ai-chat-v2) — Webseiten im Dialog importieren und Ihre Bibliothek durchsuchen.
- [AI Email Writer](./ai-email-writer) — importiertes Website-Wissen zur Personalisierung Ihrer Outreach-Nachrichten nutzen.
