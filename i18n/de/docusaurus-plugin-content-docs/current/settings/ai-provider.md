---
id: ai-provider
title: KI-Anbieter
sidebar_label: KI-Anbieter
description: Leiten Sie KI-Chat über die gehostete KI von aiFetchly oder über einen eigenen OpenAI-kompatiblen Anbieter (Ollama, LM Studio, OpenAI, OpenRouter, vLLM, LocalAI oder einen benutzerdefinierten Endpunkt).
---

# KI-Anbieter

Die Seite **KI-Anbieter** ermöglicht Ihnen die Auswahl, woher der KI-Chat sein Modell bezieht. Sie haben zwei Optionen:

- **Gehostet (aiFetchly)** — aiFetchly führt das Modell für Sie aus. Dies ist die Standardeinstellung und in einem aiFetchly-KI-Abonnement enthalten.
- **Benutzerdefinierter / lokaler Anbieter** — Sie verweisen aiFetchly auf einen beliebigen **OpenAI-kompatiblen** Endpunkt, einschließlich lokaler Server wie [Ollama](https://ollama.com) oder LM Studio sowie Drittanbieter-APIs wie OpenAI und OpenRouter.

:::info Warum das wichtig ist

Benutzerdefinierte Anbieter ermöglichen Ihnen die Nutzung des **KI-Chats mit Ihrem eigenen Modell — auch ohne ein aiFetchly-KI-Abonnement.** Andere gehostete KI-Funktionen von aiFetchly (Schlüsselwortgenerierung, E-Mail-Vorlagengenerierung, KI-Wiederherstellung, Rerank, Embeddings) benötigen weiterhin ein Abonnement; nur die Chat-Oberfläche kann über Ihren eigenen Anbieter laufen.

:::

Benutzerdefinierte Anbieter verwenden den Standard-Chat-Completions-Vertrag von OpenAI (`/v1/chat/completions` und, sofern unterstützt, `/v1/models`). aiFetchly enthält keine anbieterspezifischen SDKs — es kommuniziert direkt vom Backend der Anwendung mit Ihrem Endpunkt, sodass Ihr API-Schlüssel nie Ihren Rechner verlässt.

:::info Spracheinstellungen finden Sie auch hier

Diese Seite enthält außerdem die **Sprache (Voice)**-Einstellungen für AI Chat — auf-Geräte-Spracherkennung (Push-to-Talk) und gesprochene Antworten (Text-to-Speech). Die Sprachfunktion läuft lokal auf Ihrem Rechner und ist unabhängig von Ihrem KI-Anbieter. Siehe [Spracheinstellungen](#spracheinstellungen) unten.

:::

## Öffnen der Seite „KI-Anbieter"

1. Klicken Sie im linken Navigationsmenü auf **System Setting** (Systemeinstellung).
2. Klicken Sie auf die Schaltfläche **AI Provider** (KI-Anbieter) auf der System-Settings-Seite.

Sie können die Seite auch über AI Chat öffnen — klicken Sie auf den Anbieter-Chip neben der Modellauswahl (z. B. `Hosted` oder `Local: Ollama`).

## Anbietermodus

Oben auf der Seite wählen Sie einen Modus über die Optionsgruppe:

| Modus | Wann verwenden | Voraussetzung |
|------|----------------|---------------|
| **Gehostet (aiFetchly)** | Sie haben ein aiFetchly-KI-Abonnement und möchten den einfachsten Weg. | Ein aktives aiFetchly-KI-Abonnement. |
| **Benutzerdefinierter / lokaler Anbieter** | Sie betreiben Ihr eigenes Modell, möchten mehr Kontrolle, Privatsphäre oder niedrigere Kosten oder haben kein Abonnement. | Ein erreichbarer OpenAI-kompatibler Endpunkt und eine gespeicherte Anbieterkonfiguration. |

Im Modus **Gehostet** zeigt die Seite an, ob gehostete KI für Ihr Konto aktiviert ist oder dass ein Abonnement erforderlich ist.

Im Modus **Benutzerdefinierter / lokaler Anbieter** erscheinen die Konfigurationsfelder (siehe unten). Speichern in diesem Modus stellt den KI-Chat auf Ihren Anbieter um; Speichern im Modus **Gehostet** stellt zurück.

:::tip Nur der KI-Chat folgt dieser Einstellung

Das Wechseln zu einem benutzerdefinierten Anbieter entsperrt **nur den KI-Chat**. Rein gehostete KI-Funktionen benötigen unabhängig von dieser Einstellung weiterhin ein Abonnement.

:::

## Anbieter-Voreinstellungen

Um Tipparbeit zu sparen, wählen Sie eine **Anbieter-Voreinstellung (Preset)**. Die Auswahl füllt einen vorgeschlagenen Namen und eine Basis-URL aus — danach können Sie jedes Feld weiterhin bearbeiten.

| Preset | Standard-Basis-URL | API-Schlüssel |
|--------|---------------------|---------------|
| **Ollama** | `http://localhost:11434/v1` | Normalerweise nicht erforderlich |
| **LM Studio** | `http://localhost:1234/v1` | Normalerweise nicht erforderlich |
| **OpenAI** | `https://api.openai.com/v1` | Erforderlich |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Erforderlich |
| **vLLM** | `http://localhost:8000/v1` | Normalerweise nicht erforderlich |
| **LocalAI** | `http://localhost:8080/v1` | Normalerweise nicht erforderlich |
| **Custom** | _(leer)_ | Sie entscheiden |

Wählen Sie **Custom** für jeden anderen OpenAI-kompatiblen Server (z. B. ein Unternehmens-Gateway, einen Groq-kompatiblen Endpunkt oder einen anderen lokalen Inferenzserver).

## Konfigurationsfelder

Diese Felder erscheinen, wenn **Benutzerdefinierter / lokaler Anbieter** ausgewählt ist:

| Feld | Beschreibung |
|-------|-------------|
| **Anbieter-Preset** | Schnellstart-Vorlage (siehe oben). Füllt Standardwerte, sperrt aber keine Felder. |
| **Anbietername** | Eine Bezeichnung für diesen Anbieter. Erforderlich. |
| **Basis-URL** | Die API-Wurzel des Anbieters, z. B. `http://localhost:11434/v1`. Erforderlich. Siehe [Normalisierung der Basis-URL](#normalisierung-der-basis-url). |
| **API-Schlüssel (optional)** | Wird als `Bearer`-Token gesendet. Maskiert. Für lokale Anbieter leer lassen, die keinen benötigen. |
| **Standardmodell** | Das Modell, das der KI-Chat verwendet. Eine Combobox — aus der aktualisierten Liste wählen oder einen Namen manuell eingeben. Erforderlich. |
| **Kontextgröße (optional)** | Überschreibt das Kontextfenster des Modells, in Token. |
| **Modelle aktualisieren (Refresh Models)** | Ruft die Modellliste vom Endpunkt `/models` des Anbieters ab. |
| **Verbindung testen (Test Connection)** | Prüft den Endpunkt und erkennt Fähigkeiten. Siehe [Verbindungstest](#verbindungstest). |
| **Speichern (Save)** | Speichert die Konfiguration. |

### Normalisierung der Basis-URL

Sie können die Basis-URL mit oder ohne das Suffix `/v1` sowie mit oder ohne abschließenden Schrägstrich eingeben — aiFetchly normalisiert beim Speichern zu einer URL, die mit `/v1` endet und keinen abschließenden Schrägstrich hat.

| Sie geben ein | Gespeichert als |
|------------|----------------|
| `http://localhost:11434` | `http://localhost:11434/v1` |
| `http://localhost:11434/` | `http://localhost:11434/v1` |
| `http://localhost:11434/v1/` | `http://localhost:11434/v1` |
| `https://api.openai.com/v1` | `https://api.openai.com/v1` |

### Umgang mit dem API-Schlüssel

- Das Feld **API-Schlüssel** ist maskiert. Klicken Sie auf das Augensymbol, um Ihre Eingabe anzuzeigen.
- Sobald ein Schlüssel gespeichert ist, wird er **nie wieder im Klartext angezeigt**. Das Feld zeigt _"API-Schlüssel konfiguriert — leer lassen, um beizubehalten"_, und ein grünes Badge **API-Schlüssel konfiguriert** erscheint.
- Um den vorhandenen Schlüssel zu behalten, lassen Sie das Feld beim Speichern leer.
- Um ihn zu ersetzen, geben Sie den neuen Schlüssel ein und speichern.
- Um ihn zu entfernen, klicken Sie auf **Clear API key** (API-Schlüssel löschen).

:::warning Unverschlüsseltes HTTP

`http://` ist für `localhost` und lokale Netzwerkanbieter erlaubt. Wenn Sie eine einfache `http://`-URL verwenden, die **nicht** lokal ist, warnt aiFetchly, dass die Verbindung unverschlüsselt ist — bevorzugen Sie für externe Anbieter stets `https://`.

:::

## Modelle aktualisieren

Klicken Sie auf **Refresh Models**, um den Endpunkt `/models` des Anbieters abzufragen und das Dropdown **Standardmodell** zu füllen. Dies ist optional — Sie können stattdessen immer einen Modellnamen manuell eingeben.

- Wenn `/models` erfolgreich ist, werden die zurückgegebenen Modelle normalisiert und im Dropdown angezeigt.
- Wenn `/models` fehlschlägt (einige lokale Server implementieren es nicht), erhalten Sie eine Warnung, aber die Konfiguration bleibt gültig, sofern ein **Standardmodell** eingegeben ist. aiFetchly nutzt dann das manuell eingegebene Modell.
- Wenn ein Standardmodell existiert, die Liste aber nicht geladen werden kann, können Sie dennoch speichern und chatten.

## Verbindungstest

Klicken Sie vor der Nutzung eines Anbieters auf **Test Connection**. Der Test prüft in dieser Reihenfolge:

1. Die Basis-URL ist eine gültige `http:`- oder `https:`-URL.
2. Der Anbieter ist erreichbar.
3. Der Endpunkt `/models` funktioniert **oder** es ist manuell ein Standardmodell eingegeben.
4. Eine nicht-streaming Chat-Completion funktioniert mit einem winzigen Prompt.
5. Eine Streaming-Chat-Completion funktioniert (sofern unterstützt).
6. Die Unterstützung von Tool-Aufrufen wird nach Möglichkeit erkannt.

Der Test sendet einen minimalen Prompt (z. B. das Modell bittet, mit `pong` zu antworten). Jede gültige Completion gilt als Erfolg — aiFetchly verlangt keine exakte Textübereinstimmung, da lokale Modelle oft Formatierungen hinzufügen.

Das Ergebnis erscheint als Statusmeldung und als **Fähigkeits-Badges** (siehe unten). Der Verbindungstest protokolliert oder zeigt Ihren API-Schlüssel niemals.

:::note Drittanbieter-APIs können pro Token abrechnen

OpenAI, OpenRouter und andere kostenpflichtige Endpunkte berechnen pro Token, daher sendet jeder Verbindungstest nur eine sehr kleine Anfrage. Der Test führt dennoch einen echten API-Aufruf durch.

:::

## Fähigkeits-Badges

Nach einem Verbindungstest beschreiben die Fähigkeits-Badges, was Ihr Anbieter und Modell können:

| Badge | Bedeutung |
|-------|-------------|
| **Models** | Der Endpunkt `/models` ist verfügbar. |
| **Chat** | Nicht-streaming Chat-Completion funktioniert. |
| **Streaming** | Streaming-Chat-Completion funktioniert. |
| **Tools** | Das Modell unterstützt Tool-Aufrufe. |
| **Vision** | Das Modell akzeptiert Bildeingaben. |
| **Context** | Erkannte/überschriebene Kontextgröße in Token (wird angezeigt, wenn verfügbar). |

Jedes Badge hat einen dieser Zustände:

| Zustand | Farbe | Bedeutung |
|--------|-------|-------------|
| **Unterstützt (Supported)** | 🟢 grün | Verifiziert funktionsfähig. |
| **Nicht unterstützt / Fehlgeschlagen (Unsupported / Failed)** | 🔴 rot | Verifiziert nicht funktionsfähig oder der Test ist fehlgeschlagen. |
| **Unbekannt (Unknown)** | 🟡 gelb | Konnte nicht ermittelt werden — mit Vorsicht fortfahren. |

:::tip Wenn Tools nicht unterstützt oder unbekannt ist

Wenn der Verbindungstest die Tool-Unterstützung nicht bestätigt, zeigt AI Chat die Warnung *„Dieser lokale Anbieter hat die Tool-Unterstützung nicht bestätigt. Tools sind für diese Unterhaltung deaktiviert."* und deaktiviert Tools für diese Unterhaltung. Tool-abhängige Workflows (einschließlich Plan-Modus) werden erst ausgeführt, wenn Sie zu einem toolfähigen Modell oder gehostetem aiFetchly wechseln. Führen Sie nach dem Modellwechsel **Test Connection** erneut aus, um die Tool-Unterstützung neu zu prüfen.

:::

## Wie der KI-Chat Ihren Anbieter verwendet

Sobald ein gültiger benutzerdefinierter Anbieter gespeichert ist:

- **Der KI-Chat wird verfügbar** — auch ohne ein aiFetchly-KI-Abonnement.
- Eine **Anbieteranzeige** erscheint neben der Modellauswahl im KI-Chat (z. B. `Local: Ollama`, `Local: LM Studio` oder `Hosted`). Ein Klick öffnet diese Einstellungsseite.
- Die **Modellauswahl** listet die Modelle Ihres Anbieters (aus `/models` oder nur Ihr konfiguriertes Standardmodell, falls `/models` nicht verfügbar ist).
- Chat-Anfragen werden direkt vom Backend der Anwendung an Ihren Endpunkt gesendet — nie vom Browser/Renderer.

Wenn der Anbieter nicht erreichbar ist, zeigt der KI-Chat einen klaren Anbieterfehler an, statt lautlos zu scheitern.

:::info Verwandt: AI Chat V2

Der Anbietermodus gilt übergreifend für die Chat-Oberflächen. Siehe [AI Chat V2](../ai-outreach/ai-chat-v2) für das Chat-Erlebnis selbst, einschließlich Plan-Modus und Kontextnutzungs-Badge.

:::

## Spracheinstellungen

Die Seite „KI-Anbieter" enthält außerdem ein Panel **Sprache (Voice)** für die auf dem Gerät ausgeführte Sprachfunktion im AI Chat — Spracherkennung (Spracheingabe) und Sprachsynthese (gesprochene Antworten). Die Sprachfunktion läuft lokal auf Ihrem Rechner über die Engine `sherpa-onnx` und ist unabhängig von Ihrem KI-Anbieter.

### Spracheingabe

| Einstellung | Funktion |
|---|---|
| **Spracheingabe aktivieren (Enable voice input)** | Zeigt eine Mikrofon-Schaltfläche im AI-Chat-Composer an (Push-to-Talk). Standardmäßig deaktiviert. |
| **Sprachtranskript automatisch senden (Send voice transcript automatically)** | Sendet das Transkript sobald die Transkription abgeschlossen ist, anstatt es zum Prüfen in den Composer einzufügen. |
| **STT-Sprache (STT language)** | Die Sprache, die Sie sprechen: Auto, English, 中文, Español, Français, Deutsch oder 日本語. |
| **STT-Modell (STT model)** | Das Spracherkennungsmodell. Nur installierte Modelle sind auswählbar. |
| **Maximale Aufnahmedauer (Max recording duration)** | Wie lange eine einzelne Aufnahme dauern darf, in Sekunden (1–600; Standard 60). |

### Gesprochene Antworten

| Einstellung | Funktion |
|---|---|
| **Gesprochene Antworten aktivieren (Enable spoken responses)** | Liest die Textantworten der KI laut vor. Sie können dies jederzeit auch über die Lautstärketaste im AI-Chat-Header ein-/ausschalten. |
| **Nur nach Spracheingabe sprechen (Speak only after voice input)** | Wenn aktiviert, spricht die KI nur ihre Antworten auf Ihre Sprachnachrichten (freihändige Unterhaltung), nicht jede Antwort. |
| **TTS-Sprache (TTS language)** | Die Sprache für gesprochene Antworten: Auto, English, 中文, Español, Français, Deutsch oder 日本語. |
| **TTS-Stimme / Modell (TTS voice / model)** | Die Stimme für gesprochene Antworten. Nur installierte Stimmen sind auswählbar. |
| **Sprechgeschwindigkeit (Speech speed)** | Wiedergabegeschwindigkeit, von 0.5× bis 2.0×. |

### Sprachmodelle

Sowohl die Spracheingabe als auch die gesprochenen Antworten benötigen jeweils ein Sprachmodell. Der Abschnitt **Sprachmodelle (Voice models)** listet die verfügbaren STT- und TTS-Modelle mit ihrem Status auf — **Herunterladen (Download)**, **Installiert (Installed)** oder **Abbrechen (Cancel)** (während des Downloads) — und zeigt den Live-Download-Fortschritt an.

Modelle werden bei Bedarf heruntergeladen, wenn Sie eine Funktion zum ersten Mal aktivieren oder verwenden. Beim erstmaligen Einschalten der Sprachfunktion wird also ein einmaliger Download ausgelöst. Sie können Modelle auch hier vorab herunterladen.

:::info Sprache ist lokal und privat

Spracherkennung und Sprachsynthese erfolgen vollständig auf Ihrem Gerät. Ihr Mikrofonaudio wird lokal verarbeitet und **nicht** an einen Server gesendet oder gespeichert. Nur das resultierende Transkript wird aufbewahrt — als normale Chat-Nachricht.

:::

:::note Sprache gewährt keinen Chat-Zugriff

Die Sprachfunktion ist lokal und kostenlos, gewährt aber keinen Chat-Zugriff. Um eine transkribierte Nachricht zu senden und eine Antwort zu erhalten, benötigen Sie weiterhin entweder ein aiFetchly-KI-Abonnement (Gehostet) oder einen funktionierenden benutzerdefinierten/lokalen Anbieter. Siehe [AI Chat V2 → Sprache](../ai-outreach/ai-chat-v2#voice) für die Nutzung der Sprachfunktion im Chat.

:::

## Sicherheit und Privatsphäre

- **API-Schlüssel werden in Ruhe verschlüsselt** und separat vom restlichen Konfigurationsspeicher aufbewahrt.
- **Schlüssel werden nach dem Speichern nie im Klartext an die UI zurückgegeben** — die Seite zeigt nur `apiKeyConfigured: true/false`.
- **Schlüssel werden nie protokolliert.** Debug- und Anforderungs-Logs schwärzen `Authorization`-Header und alles, was wie ein Secret aussieht.
- **Anfragen werden vom Backend der Anwendung gestellt**, nicht vom Renderer, sodass Anmeldedaten Web-Inhalten nicht ausgesetzt sind.
- **Basis-URLs werden** ausschließlich als `http:` oder `https:` **validiert**.

## Schnellstart: Ollama

1. [Installieren Sie Ollama](https://ollama.com) und laden Sie ein Modell, z. B. `ollama pull llama3.1`.
2. Öffnen Sie **Settings → AI Provider**.
3. Wählen Sie **Custom / Local Provider**.
4. Setzen Sie das **Preset** auf **Ollama** (füllt `http://localhost:11434/v1`).
5. Klicken Sie auf **Refresh Models** und wählen Sie ein Modell, oder geben Sie eines ein (z. B. `llama3.1`).
6. Klicken Sie zum Bestätigen auf **Test Connection** und dann auf **Save**.
7. Öffnen Sie den KI-Chat — die Anzeige lautet `Local: Ollama`, und Sie können ohne Abonnement chatten.

## Schnellstart: OpenAI / OpenRouter

1. Öffnen Sie **Settings → AI Provider**.
2. Wählen Sie **Custom / Local Provider**.
3. Setzen Sie das **Preset** auf **OpenAI** oder **OpenRouter**.
4. Fügen Sie Ihren **API-Schlüssel** in das Feld ein.
5. Geben Sie ein **Standardmodell (Default model)** ein (z. B. `gpt-4o-mini` oder eine OpenRouter-Modell-ID).
6. Klicken Sie auf **Test Connection** und dann auf **Save**.

## Fehlerbehebung

### Verbindung zum Anbieter nicht möglich

**Mögliche Ursachen:**
- Der lokale Server läuft nicht (Ollama-/LM-Studio-/vLLM-Prozess prüfen).
- Basis-URL oder Port ist falsch.
- Eine Firewall blockiert den localhost-/LAN-Zugriff.

**Lösungen:**
1. Starten Sie den Anbieter und bestätigen Sie, dass er im Browser antwortet (z. B. `http://localhost:11434/v1/models`).
2. Basis-URL erneut prüfen und **Test Connection** ausführen.
3. Bei Docker- oder WSL-Setups sicherstellen, dass der Anbieter aus dem Netzwerkkontext von aiFetchly erreichbar ist.

### Authentifizierung fehlgeschlagen (401 / 403)

**Mögliche Ursachen:**
- Der API-Schlüssel fehlt, ist falsch oder abgelaufen.
- Der Schlüssel hat keinen Zugriff auf das ausgewählte Modell.

**Lösungen:**
1. API-Schlüssel erneut eingeben und speichern.
2. Bei OpenAI/OpenRouter bestätigen, dass der Schlüssel gültig ist und Guthaben/Berechtigung für das Modell hat.

### Das ausgewählte Modell ist nicht verfügbar

Der Anbieter meldete „model not found". Wählen Sie ein anderes Modell aus der **Refresh Models**-Liste oder aktualisieren Sie das **Standardmodell (Default model)** auf eines, das der Anbieter tatsächlich bereitstellt.

### Modellliste konnte nicht geladen werden

Einige lokale Server implementieren `/models` nicht. Das ist erwartet: Geben Sie den Modellnamen manuell in **Default model** ein und speichern Sie. Der Chat funktioniert weiterhin.

### Chat funktioniert, aber Tools / Streaming werden als nicht unterstützt angezeigt

Nicht jedes lokale Modell unterstützt Tool-Aufrufe oder Streaming. Wenn Sie diese benötigen, wechseln Sie zu einem tool- oder streamingfähigen Modell oder verwenden Sie **Hosted aiFetchly**. Siehe [Fähigkeits-Badges](#fähigkeits-badges).

### Rein gehostete Funktionen verlangen weiterhin ein Abonnement

Das ist beabsichtigt. Ein benutzerdefinierter Anbieter entsperrt nur den KI-Chat: Schlüsselwortgenerierung, E-Mail-Vorlagengenerierung, KI-Wiederherstellung, Rerank und Embeddings benötigen weiterhin ein aiFetchly-KI-Abonnement.

## Nächste Schritte

- [AI Chat V2](../ai-outreach/ai-chat-v2) — das Chat-Erlebnis, das Ihr Anbieter antreibt
- [System Settings](./system-settings) — allgemeine Konfiguration
- [AI Skills](../ai-outreach/ai-skills) — Fähigkeiten, die die KI während des Chats aufrufen kann
