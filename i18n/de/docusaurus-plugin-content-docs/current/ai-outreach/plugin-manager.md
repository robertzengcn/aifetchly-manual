---
id: plugin-manager
title: Plugin-Manager
sidebar_label: Plugin-Manager
description: Installieren, durchsuchen und verwalten Sie Plugin-Bundles, die KI-Skills, Subagenten, Slash-Commands, Hooks und MCP-Server paketieren. Installation aus lokalem Zip/Ordner, Git, GitHub, npm, URL oder einem Marketplace.
---

# Plugin-Manager

Ein **Plugin** ist ein einzelnes Paket, das eine oder mehrere Erweiterungsfähigkeiten bündelt — **KI-Skills**, **Subagenten**, **Slash-Commands**, **Hooks** und/oder **MCP-Server** — unter einem Manifest, einem Installationspfad und einem Eigentumsdatensatz. Der Plugin-Manager ist der Ort, an dem Sie Plugins installieren, durchsuchen, inspizieren, aktivieren, deaktivieren und deinstallieren.

Plugins setzen auf den eigenständigen Systemen für [KI-Skills](./ai-skills), [Subagents](./subagents), [Slash Commands](./slash-commands), [Hooks](../settings/hooks) und [MCP Tools](./mcp-tools) auf. Das Installieren eines Plugins registriert die gebündelten Fähigkeiten; die Deinstallation entfernt sie — alle als Einheit.

## Öffnen des Plugin-Managers

**Über die linke Navigation:** Klicken Sie auf **Plugins** (Puzzlesymbol).

**Über die Systemeinstellungen:** Öffnen Sie **System Setting** und klicken Sie auf **Plugins**.

Die Seite ist in **vier Registerkarten** gegliedert:

| Registerkarte | Zweck |
|-----|---------|
| **Installed** | Bereits auf Ihrem Rechner vorhandene Plugins — installieren, aktivieren/deaktivieren, inspizieren, deinstallieren. |
| **Discover** | Einen Marketplace-Katalog durchsuchen und daraus Plugins installieren. |
| **Marketplaces** | Die Marketplace-Quellen hinzufügen, aktualisieren und entfernen, die Discover speisen. |
| **Errors** | Marketplaces, die nicht geladen werden konnten, mit ihren Fehlerdetails. |

## Registerkarte „Installed"

Die Registerkarte **Installed** enthält eine Werkzeugleiste mit drei Aktionen sowie eine Tabelle aller installierten Plugins.

### Werkzeugleiste

- **Reload** — installierte Plugins neu einlesen.
- **Import Plugin** — aus einer lokalen `.zip`-Datei installieren.
- **Install from Source** — aus einer von sechs Quellen installieren (siehe [Install from Source](#install-from-source)).

### Die Plugins-Tabelle

| Spalte | Beschreibung |
|--------|-------------|
| **Plugin** | Plugin-Name. |
| **Version** | Installierte Version. |
| **Source** | **Built-in**, **Marketplace** oder **Local**. |
| **Imported From** | Die Herkunft (Ordnerpfad, Git-URL, npm-Paket usw.). |
| **SubAgent** | Anzahl der vom Plugin gebündelten Subagenten. |
| **Skills** | Anzahl der Skills. |
| **Hooks** | Anzahl der Hooks. |
| **MCP Servers** | Anzahl der MCP-Server. |
| **Status** | Aktueller Gesundheitszustand (siehe [Plugin-Gesundheitszustände](#plugin-health-states)). |
| **Actions** | Ein Schalter zum **Aktivieren/Deaktivieren** auf Plugin-Ebene und eine **Papierkorb**-Schaltfläche (Deinstallieren). |

Die Spalte **Source** zeigt einen von drei groben Badges an — **Built-in**, **Marketplace** oder **Local**. Die spezifischere Installationsquelle (z. B. `git`, `npm`, `local-folder`) wird auf der Registerkarte „Overview" des Plugins als **Install source** angezeigt.

## Ein Plugin installieren

Es gibt zwei Einstiegspunkte für die Installation auf der Registerkarte „Installed":

- **Import Plugin** — eine lokale `.zip`-Datei auswählen.
- **Install from Source** — aus einer von sechs Quellen installieren (unten).

Plugins können auch über einen Marketplace über die Registerkarte **Discover** installiert werden (siehe [Marketplaces](#marketplaces)).

### Install from Source

Klicken Sie auf **Install from Source** und wählen Sie einen Quelltyp. Der Dialog wird standardmäßig auf **Local Folder** gesetzt. Jede Quelle hat ihr eigenes Formular.

| Quelle | Was akzeptiert wird | Authentifizierungsmodell |
|---|---|---|
| **Local Zip** | Eine `.zip`-Datei auf dem Datenträger. | Keiner. |
| **Local Folder** | Ein Verzeichnis auf dem Datenträger, das das Plugin enthält. Der Ordner wird in den Plugins-Cache kopiert; Ihr Quellordner wird niemals verändert. | Keiner. |
| **Git** | Beliebige HTTPS- oder SSH-Git-URL (`https://…`, `git@…`, `ssh://…`). Plain HTTP wird abgelehnt. | Ihr SSH-Agent und der Git-Credential-Helper des Betriebssystems. Es werden keine Zugangsdaten über die Befehlszeile übergeben. |
| **GitHub** | Eine GitHub-Repo-URL, eine Release-Asset-URL oder eine `releases/latest`-URL. Repo-URLs werden geklont; Release-Asset-URLs werden direkt heruntergeladen. | Nur öffentliche Repos und öffentliche Release-Assets. Für private Repos verwenden Sie die Quelle „Git" mit einem Credential-Helper. |
| **npm** | Beliebiges Paket im öffentlichen npm-Registry sowie GitHub Packages und Scoped-Registries mit einem Auth-Token. | Optionale Registry-URL und Auth-Token. Das Token wird in eine 0600-`.npmrc` im Installations-Workdir geschrieben und nach der Installation **niemals gespeichert**. |
| **URL** | Beliebige URL einfügen — der Manager erkennt automatisch, ob es sich um eine `.zip`, eine Git-URL oder eine GitHub-URL handelt und leitet entsprechend weiter. Plain HTTP wird abgelehnt. | Erbt von der erkannten Quelle. |

:::info Sicherheitsgarantien

Unabhängig von der Quelle gilt für jede Installation:

- Dieselben Limits für Größe und Dateianzahl werden angewendet (50 MB komprimiert / 250 MB entpackt / 5.000 Dateien).
- Plugin-Code wird während der Installation niemals ausgeführt — kein `npm install`, kein `pip install`, keine Lifecycle-Skripte.
- `npm pack` wird mit `--ignore-scripts` ausgeführt, sodass Package-Lifecycle-Skripte nicht ausgeführt werden können.
- Alle gestarteten `git`-/`npm`-/`tar`-Prozesse werden abgebrochen, wenn sie das 60-Sekunden-Timeout überschreiten.
- Alle Downloads müssen HTTPS verwenden (HTTP wird abgelehnt) und folgen höchstens 5 Weiterleitungen.

:::

## Marketplaces

Ein **Marketplace** ist ein Katalog von Plugins, die Sie durchsuchen und von denen Sie installieren können. Der Plugin-Manager verfügt über drei Registerkarten rund um Marketplaces.

### Registerkarte „Marketplaces"

Verwalten Sie Ihre Marketplace-Quellen:

- **Add Marketplace** — einen neuen Marketplace registrieren. Die Quelle kann eine `owner/repo`-Kurzform, eine Git-URL, ein lokaler Ordner oder eine direkte `marketplace.json`-URL sein. Ein optionaler Branch/Tag/Commit ermöglicht das Fixieren auf einen Stand.
- **Refresh All** — jeden Marketplace-Katalog neu abrufen.
- Pro Zeile — einen einzelnen Marketplace **aktualisieren** oder **entfernen**. Das Entfernen eines Marketplaces deinstalliert **keine** Plugins, die Sie bereits von ihm installiert haben.

### Registerkarte „Discover"

Durchsuchen Sie alles, was Ihre Marketplaces anbieten:

- **Search** nach Plugin-Name oder -Beschreibung.
- Filtern nach **Marketplace** und nach **Status** (Alle / Installiert / Nicht installiert).
- Jede Zeile zeigt das Plugin, seinen Marketplace, die Version und den Status. Klicken Sie auf **Details**, um die vollständige Beschreibung, den Autor, die aufgelöste Quelle und etwaige Risiko-Flags zu sehen.

#### Risiko-Flags und Bestätigung

Vor der Installation aus einem Marketplace kennzeichnet aiFetchly potenziell sensibles Verhalten:

- **Starts MCP servers**
- **Declares hooks**
- **Declares monitors**
- **Installs from npm**
- **Not pinned to a commit**

Wenn ein Flag vorhanden ist, müssen Sie **„I understand the risks and want to install."** aktivieren, bevor die Schaltfläche „Install" freigeschaltet wird.

Wenn Sie das Plugin bereits in einer anderen Version haben, lautet die Schaltfläche **Reinstall** anstelle von „Install".

### Registerkarte „Errors"

Listet Marketplaces auf, deren Zustand nicht **Healthy** ist, mit ihrem Gesundheitszustand und Fehlermeldungen. Verwenden Sie sie, um einen Marketplace zu diagnostizieren, der nicht laden will.

## Plugin-Gesundheitszustände

| Zustand | Bedeutung |
|---|---|
| **Healthy** | Alle Komponenten wurden erfolgreich geladen. |
| **Disabled** | Sie haben das Plugin ausgeschaltet. Keine seiner Fähigkeiten wird der KI bereitgestellt. |
| **Needs Configuration** | Das Plugin enthält einen Python-Skill; die Laufzeitumgebung richtet beim ersten Gebrauch dessen virtuelle Umgebung ein. |
| **Partial Load** | Einige Komponenten wurden geladen, andere fehlgeschlagen. Die Registerkarte „Diagnostics" zeigt welche. |
| **Invalid** | Das Plugin-Manifest oder der Installationszustand ist defekt. |
| **Missing Files** | Der Installationspfad ist verschwunden (z. B. vom Datenträger gelöscht). |

## Das Detail-Panel

Klicken Sie auf eine beliebige Plugin-Zeile, um den Detail-Dialog mit **neun Registerkarten** zu öffnen.

### Overview

Version, Quelle, Imported-From-URI, Installationspfad, aktueller Zustand, Anzahlen der **Commands** und **Hooks**, Autor, **Install source** (Art und Referenz), Marketplace (falls aus einem installiert) und Beschreibung.

### Skills

Jeder Skill, der dem Plugin gehört, mit einem Gesundheits-Chip und einem individuellen Schalter zum **Aktivieren/Deaktivieren**.

### Subagents

Jeder Subagent, der dem Plugin gehört — Name (mit ID), Modus, Werkzeuganzahl, Zustand und ein individueller Schalter zum **Aktivieren/Deaktivieren**. Leer, wenn das Plugin keine Subagenten mitliefert.

### Commands

Die Slash-Commands, die das Plugin beisteuert — `/name`, Beschreibung, Aliasse, Argument-Hinweis und Aktiviert/Deaktiviert-Status. **Schreibgeschützt** (Commands können hier nicht einzeln umgeschaltet werden).

### Hooks

Die Hooks, die das Plugin beisteuert — ID, Event, Matcher, Typ und Status. **Schreibgeschützt**.

### MCP Servers

Jeder MCP-Server, der dem Plugin gehört, mit seinem Transport und einem Schalter **Enabled** pro Server. (Werkzeugerkennung und Verbindungstests für MCP-Server erfolgen auf der dedizierten Seite **[MCP Tools](./mcp-tools)**, nicht hier.)

### Permissions

Die Berechtigungen, die das Plugin in seinem Manifest deklariert, als schreibgeschützte Chips.

### Diagnostics

Klicken Sie auf **Export Diagnostics**, um ein JSON-Bündel aus Ladezustand und Komponentenfehlern des Plugins zu erzeugen, das inline angezeigt wird. Verwenden Sie es bei der Fehlersuche oder beim Melden eines Problems.

### Manifest

Schreibgeschützte, formatierte Ansicht des Plugin-Manifests.

## Aktivieren und Deaktivieren

- **Schalter auf Plugin-Ebene** (in der Spalte „Actions" der Tabelle): schaltet das gesamte Plugin ein oder aus. Das Deaktivieren eines Plugins verbirgt **alle** seine Fähigkeiten vor der KI.
- **Schalter auf Komponentenebene** (in den Registerkarten Skills, Subagents und MCP Servers): schalten einen einzelnen Skill, Subagenten oder MCP-Server innerhalb des Plugins ein oder aus.

**Commands und Hooks haben keinen Komponenten-Schalter** — sie folgen dem Schalter auf Plugin-Ebene.

Die effektive Aktivierung für jede Fähigkeit ist: **Plugin aktiviert UND (Komponente aktiviert, sofern ein Schalter existiert)**.

## Deinstallieren

1. Klicken Sie auf das **Papierkorb**-Symbol in der Spalte „Actions" eines Plugins.
2. Ein Bestätigungsdialog fragt: _„Uninstall this plugin? This removes its skills and MCP servers."_
3. Bestätigen Sie, um zu entfernen.

Die Deinstallation entfernt die gebündelten Fähigkeiten des Plugins und seine zwischengespeicherten Dateien. Sie löscht keine Dateien außerhalb des Plugin-Installationswurzelpfads und berührt keine eigenständigen Skills, Commands, Agenten, Hooks oder MCP-Server, die Sie selbst hinzugefügt haben.

## Plugin-Pakete und das Manifest

Ein Plugin ist ein Verzeichnis (oder ein Zip davon) mit folgendem Aufbau:

```text
my-plugin/
├── .aifetchly-plugin/
│   └── plugin.json          # manifest (root-level plugin.json also accepted)
├── skills/
│   └── my-skill/
│       ├── manifest.json
│       └── main.js
├── agents/                  # subagent markdown files (optional)
├── commands/                # slash command markdown files (optional)
├── hooks/                   # hook definitions (optional)
├── mcp/
│   └── servers.json         # MCP server declarations
└── docs/
    └── README.md
```

Das Manifest (`plugin.json`) deklariert den Plugin-Namen, die Version, die Beschreibung, die enthaltenen Fähigkeiten (relative Pfade zu Skills, Agenten, Commands, Hooks und MCP-Server-Konfigurationen), Berechtigungen und optionale Abhängigkeiten.

:::note Plugins im Claude-Format

aiFetchly unterstützt auch Plugins im Claude-Format. Subagenten und Commands im Claude-Format, die vom Plugin gebündelt werden, werden bei der Installation automatisch angepasst.

:::

## Fehlerbehebung

### Installation schlägt fehl mit „path escapes plugin directory"

Das Plugin-Manifest verweist auf eine Datei außerhalb seines eigenen Wurzelpfads. Lehnen Sie das Plugin ab — es ist fehlerhaft oder bösartig.

### Installation schlägt fehl mit „Package exceeds max size"

Das Plugin ist größer als 50 MB komprimiert oder 250 MB entpackt. Reduzieren Sie seinen Inhalt oder wählen Sie ein kleineres Plugin.

### Git-Installation bleibt hängen

Der Klon hat das 60-Sekunden-Timeout überschritten. Überprüfen Sie Repo-Größe und Netzwerk. Der Manager beendet den `git`-Prozess beim Timeout; es bleibt kein Zombie-Klon zurück.

### npm-Installation schlägt fehl mit 401 / 403

Für private Pakete müssen Sie ein Auth-Token angeben. Für GitHub Packages muss die Registry-URL `https://npm.pkg.github.com` lauten und das Token muss den Scope `read:packages` besitzen.

### Ein Marketplace will nicht laden

Öffnen Sie die Registerkarte **Errors**, um den Gesundheitszustand und die Fehlermeldung des Marketplaces zu sehen. Häufige Ursachen: eine unerreichbare URL, eine fehlerhafte `marketplace.json` oder eine Git-Referenz, die nicht existiert. Klicken Sie auf **Refresh** in der Zeile des Marketplaces, um es erneut zu versuchen, oder auf **Remove** und fügen Sie es mit der korrekten Quelle neu hinzu.

### Plugin zeigt „Needs Configuration"

Das Plugin bündelt einen Python-Skill. Die Python-Umgebung wird beim ersten Ausführen des Skills eingerichtet. Sie können den Skill auch einmal manuell ausführen, um die Einrichtung auszulösen.

### Plugin zeigt „Missing Files"

Der Installationspfad wurde vom Datenträger gelöscht. Installieren Sie das Plugin erneut, um es wiederherzustellen.

## Nächste Schritte

- [AI Skills](./ai-skills) — wie Skills innerhalb eines Plugins funktionieren.
- [Subagents](./subagents) — bereichsspezifische Spezialisten, die ein Plugin bündeln kann.
- [Slash Commands](./slash-commands) — wiederverwendbare Prompt-/Aktions-Commands.
- [Hooks](../settings/hooks) — Lifecycle-Hooks, die ein Plugin deklarieren kann.
- [MCP Tools](./mcp-tools) — wie MCP-Server innerhalb eines Plugins funktionieren.
- [AI Chat V2](./ai-chat-v2) — wo Plugin-Fähigkeiten als KI-Werkzeuge erscheinen.
