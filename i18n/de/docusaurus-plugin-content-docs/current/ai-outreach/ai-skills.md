---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Verwalten und erweitern Sie die KI-Fähigkeiten von aiFetchly mit Skills — importieren, aktivieren/deaktivieren, deinstallieren Sie diese und verstehen Sie, wie Skill-Berechtigungen und Genehmigungsabfragen im KI-Chat funktionieren.
---

# AI Skills

AI Skills sind modulare Erweiterungen, die Werkzeuge hinzufügen, die die KI während eines Chats aufrufen kann — spezialisierte Fähigkeiten wie Web-Scraping, Automatisierung, Dateizugriff oder Shell-Befehle. Wenn ein Skill aktiviert ist, kann die KI entscheiden, ihn zu verwenden, um Ihre Anfrage zu beantworten.

## Was ist ein Skill?

Ein Skill ist ein paketiertes Werkzeug mit:

- Einem eindeutigen **Namen** und einer **Version**.
- Einer **Quelle**: **Integriert** (mit aiFetchly mitgeliefert) oder **Benutzerinstalliert** (von Ihnen importiert oder mit einem Plugin gebündelt).
- Einer **Berechtigungskategorie** — abgeleitet aus den deklarierten Berechtigungen des Skills (siehe [Berechtigungskategorien](#berechtigungskategorien)).
- Einem **Aktivierungs-/Deaktivierungs**-Status.

## Zugriff auf AI Skills

1. Klicken Sie im linken Navigationsmenü auf **System Setting**.
2. Klicken Sie auf **Manage Skills** (oder **AI Skills**).

Die Seite listet jeden installierten Skill in einer Tabelle auf.

## Die Skills-Tabelle

| Spalte | Beschreibung |
|--------|-------------|
| **Name** | Skill-Bezeichner. Wenn der Skill aus einem Plugin stammt, erscheint daneben ein _"via plugin: {name}"_-Chip. |
| **Quelle** | **Integriert**- oder **Benutzerinstalliert**-Badge. |
| **Kategorie** | Die Berechtigungskategorie des Skills (`pure`, `network`, `filesystem`, `automation` oder `shell`). |
| **Version** | Versionsnummer des Skills. |
| **Status** | **Aktiviert** oder **Deaktiviert**. |
| **Aktionen** | Aktivierungs-/Deaktivierungsschalter und Deinstallations-Schaltfläche — **nur bei benutzerinstallierten Skills angezeigt**. |

:::note Integrierte Skills sind immer aktiviert

Integrierte Skills zeigen **weder** den Aktivierungs-/Deaktivierungsschalter **noch** die Deinstallations-Schaltfläche an. Sie können auf dieser Seite weder deaktiviert noch entfernt werden.

:::

## Einen Skill importieren

Skills werden als `.zip`-Pakete importiert.

1. Klicken Sie auf **Import** (oben rechts, Upload-Symbol).
2. Wählen Sie eine Skill-`.zip`-Datei aus.
3. aiFetchly validiert das Paket (Manifest, Berechtigungen, Einstiegsdatei) und installiert es.

:::tip Import-Tipps

- Die Schaltfläche "Import" unterstützt nur `.zip`-Dateien.
- Das Paket muss eine gültige `manifest.json` enthalten (siehe [Skill-Paketformat](#skill-paketformat)).
- Mit Plugins gebündelte Skills müssen nicht importiert werden — sie erscheinen automatisch, wenn ihr Plugin installiert wird.

:::

Skills können auch automatisch bezogen werden aus:

- **Plugins** — ein Plugin bündelt einen oder mehrere Skills; sie erscheinen hier mit einem _"via plugin"_-Chip. Installieren oder entfernen Sie sie über den **[Plugin Manager](./plugin-manager)**.
- **Lokale Skill-Ordner** (fortgeschritten) — Skills, die unter `~/.aifetchly/skills/<name>/` abgelegt werden, werden automatisch erkannt.

## Aktivieren, Deaktivieren und Deinstallieren

Für **benutzerinstallierte** Skills:

- **Aktivieren / Deaktivieren** — verwenden Sie den Häkchen (aktivieren) / Kreuz (deaktivieren)-Schalter in der Spalte Aktionen.
- **Deinstallieren** — klicken Sie auf das Papierkorb-Symbol und bestätigen Sie. Die Deinstallation ist dauerhaft; importieren Sie die `.zip` erneut, um den Skill wieder zu verwenden.

Integrierte Skills haben keine Aktionen-Steuerung — sie sind immer aktiviert.

## Wie Skills im Chat funktionieren

Sobald ein Skill aktiviert ist, kann die KI ihn bei Bedarf aufrufen. Sie rufen Skills nicht namentlich auf (Sie können jedoch explizit nach einem verlangen, z. B. *"verwende den Web-Scraper für diese URL"*).

### Skill-Kategorien

Jeder Skill gehört zu einer **Berechtigungskategorie**, die bestimmt, wie er bei Aufruf durch die KI genehmigt wird. Die Kategorie ist die erste deklarierte `permission` des Skills (aus seinem Manifest) oder `pure`, wenn keine deklariert ist:

| Kategorie | Was der Skill tun kann |
|--------|----------------------|
| `pure` | Allzweck-Dienstprogramme — Textverarbeitung, Berechnungen, Formatierung. Kein besonderer Zugriff. |
| `network` | Ausgehende Netzwerk-/HTTP-Zugriffe (Seiten abrufen, APIs aufrufen). |
| `filesystem` | Lokales Datei-Lesen/Schreiben. |
| `automation` | Browser-Automatisierung, Scraping, Social-Posting und ähnliche skriptgesteuerte Aktionen. |
| `shell` | Führt System-Shell-Befehle aus. (Nur integriert `shell_execute` — nie importierbar.) |

Die Kategorie wird in der Tabelle roh und in Kleinschreibung angezeigt (z. B. `network`, `automation`).

### Genehmigungsabfragen

Wenn die KI einen Skill aufruft, kann aiFetchly Sie um Genehmigung bitten, bevor er ausgeführt wird. Ob eine Abfrage erscheint, hängt von der Kategorie des Skills **und** Ihrem aktuellen Modus zur Werkzeuggenehmigung im Chat ab:

| Kategorie | Genehmigungsverhalten |
|--------|-------------------|
| `pure` | Immer automatisch genehmigt — keine Abfrage. |
| `shell` | **Fragt bei jedem Befehl nach.** Nie automatisch genehmigt (siehe unten). |
| `network` / `filesystem` / `automation` | Wird im Standardmodus _"um Genehmigung bitten"_ abgefragt. In den Modi _"für mich genehmigen"_ oder _"voller Zugriff"_ werden diese automatisch genehmigt. |

Wenn eine Abfrage erscheint, sehen Sie eine Genehmigungskarte mit drei Aktionen:

- **Einmal erlauben** — nur diesen einzelnen Aufruf ausführen.
- **Immer erlauben** — die Entscheidung speichern, damit zukünftige Aufrufe dieses Skills nicht mehr abgefragt werden.
- **Ablehnen** — diesen Aufruf blockieren.

Für **Shell**-Skills lautet der Titel der Karte **"Shell-Befehlsausführung"**, sie zeigt eine Vorschau des Befehls (Befehl, Arbeitsverzeichnis, Shell, Timeout) und die dritte Schaltfläche heißt **"Immer erlauben (Diese Sitzung)"** statt "Immer erlauben".

:::warning Shell-Genehmigung ist faktisch einmalig

Für `shell`-Skills wird "Immer erlauben" bei nachfolgenden Befehlen **nicht** berücksichtigt. Jeder Shell-Befehl wird erneut abgefragt — dies ist eine bewusste Sicherheitsmaßnahme, da Shell-Befehle auf Ihrem Rechner alles tun können. Nur Nicht-Shell-Kategorien merken sich "Immer erlauben" wirklich dauerhaft.

:::

## Skill-Paketformat

Ein Skill-`.zip` muss eine `manifest.json` enthalten. Das minimal funktionsfähige Manifest sieht so aus:

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "description": "What this skill does, shown to the AI.",
  "runtime": "javascript",
  "entry": "index.js",
  "parameters": {
    "type": "object",
    "properties": {
      "url": { "type": "string" }
    },
    "required": ["url"]
  },
  "permissions": ["network"]
}
```

### Erforderliche Manifest-Felder

| Feld | Beschreibung |
|-------|-------------|
| `name` | Eindeutiger Skill-Bezeichner. |
| `version` | Versionszeichenkette, z. B. `1.0.0`. |
| `description` | Kurze Beschreibung — die KI liest dies, um zu entscheiden, wann der Skill verwendet wird. |
| `runtime` | `javascript` oder `python`. |
| `entry` | Die Einstiegsdatei innerhalb des Pakets (z. B. `index.js` oder `main.py`). |
| `parameters` | Ein JSON-Schema-Objekt, das die Eingabeparameter des Skills beschreibt. |

### Optionale Manifest-Felder

| Feld | Beschreibung |
|-------|-------------|
| `permissions` | Array von Berechtigungszeichenketten. **Gültige Werte sind nur `network`, `filesystem`, `automation`.** Der erste Eintrag bestimmt die Kategorie des Skills (siehe [Skill-Kategorien](#skill-kategorien)). Unbekannte Werte werden beim Import abgelehnt. |

:::danger Berechtigungen werden streng validiert

Es werden nur `network`, `filesystem` und `automation` akzeptiert. Werte wie `web-search`, `data-access` oder `shell` werden abgelehnt und der Skill wird nicht importiert. Es gibt kein separates `category`-Feld — die Kategorie wird vom ersten `permissions`-Eintrag abgeleitet (oder `pure`, falls keiner angegeben ist).

:::

### Paketierung

1. Legen Sie eine gültige `manifest.json` in das Hauptverzeichnis des Pakets.
2. Fügen Sie die Runtime-/Einstiegsdateien hinzu, auf die `entry` verweist.
3. Zippen Sie den **Inhalt**, nicht den umschließenden Ordner.
4. Benennen Sie die Datei `skill-name.zip`.

## Fehlerbehebung

### Import fehlgeschlagen

**Mögliche Ursachen:** ungültiges Zip, fehlende oder fehlerhafte `manifest.json`, ein ungültiger `permissions`-Wert oder ein fehlendes Pflichtfeld (`runtime`, `entry`, `parameters`).

**Lösungen:**
1. Überprüfen Sie die Integrität der Zip-Datei.
2. Prüfen Sie, ob `manifest.json` alle Pflichtfelder mit gültigen Werten enthält.
3. Bestätigen Sie, dass `permissions` nur `network`, `filesystem` oder `automation` verwendet.
4. Bestätigen Sie, dass `runtime` `javascript` oder `python` ist und `entry` auf eine echte Datei verweist.

### Ein Skill erscheint nicht im Chat

**Mögliche Ursachen:** der Skill ist deaktiviert, oder (bei Plugin-Skills) sein Plugin ist deaktiviert.

**Lösungen:**
1. Prüfen Sie den Status des Skills in der Tabelle und aktivieren Sie ihn.
2. Prüfen Sie bei Plugin-Skills den **[Plugin Manager](./plugin-manager)** — das besitzende Plugin muss aktiviert sein.

### Die KI fragt ständig nach Genehmigung

- Sie verwenden einen **Shell**-Skill. Shell-Genehmigungen sind absichtlich einmalig.
- Wechseln Sie bei anderen Kategorien den Modus zur Werkzeuggenehmigung im Chat auf _"für mich genehmigen"_, um Abfragen zu reduzieren (Hinweis: dies genehmigt Nicht-Shell-Skills automatisch).

### Integrierter Skill hat keinen Schalter

Das ist beabsichtigt. Integrierte Skills sind immer aktiviert und können auf dieser Seite weder deaktiviert noch deinstalliert werden.

## Nächste Schritte

- [Plugin Manager](./plugin-manager) — installieren Sie Plugins, die Skills, Befehle, Agenten, Hooks und MCP-Server bündeln.
- [Subagents](./subagents) — bereichsbezogene Spezialisten, die die KI entsenden kann.
- [AI Chat V2](./ai-chat-v2) — wo Skills aufgerufen werden.
