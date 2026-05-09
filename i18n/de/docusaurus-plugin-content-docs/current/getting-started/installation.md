---
id: installation
title: Installation
sidebar_label: Installation
description: How to download and install aiFetchly on Windows, macOS, or Linux.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# aiFetchly installieren

aiFetchly ist für Windows, macOS und Linux verfügbar. Befolgen Sie die Anweisungen für Ihr Betriebssystem.

## Systemanforderungen

Stellen Sie vor der Installation sicher, dass Ihr System diese Anforderungen erfüllt:

### Alle Plattformen
- **RAM**: 4 GB minimum (8 GB empfohlen)
- **Speicher**: 500 MB für die Anwendung + zusätzlicher Platz für Daten
- **Netzwerk**: Stabile Internetverbindung

### Plattformspezifisch

| Plattform | Mindestversion |
|----------|-----------------|
| Windows | Windows 10 oder neuer |
| macOS | macOS 10.15 (Catalina) oder neuer |
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 35+ |

## aiFetchly herunterladen

1. Besuchen Sie die offizielle aiFetchly-Website
2. Navigieren Sie zum Bereich **Downloads**
3. Wählen Sie das passende Installationsprogramm für Ihr Betriebssystem

## Installation nach Plattform

### Windows-Installation

aiFetchly bietet zwei Installationsprogramme für Windows:

#### Option 1: Squirrel-Installationsprogramm (Empfohlen)

Das Squirrel-Installationsprogramm ist die moderne Installationsmethode mit automatischer Update-Unterstützung.

**Schritte:**

1. `aiFetchly-Setup-x.x.x.exe` herunterladen (x.x.x ist die Versionsnummer)
2. Installationsprogramm doppelt anklicken
3. Falls Windows SmartScreen eine Warnung zeigt, auf „Weitere Informationen" und dann „Trotzdem ausführen" klicken
4. Dem Installationsassistenten folgen:
   - Installationsort wählen (Standard: `%LOCALAPPDATA%\aiFetchly`)
   - Desktop-Verknüpfung erstellen oder nicht
   - Startmenü-Verknüpfung erstellen oder nicht
5. Auf **Installieren** klicken
6. Auf Abschluss der Installation warten
7. Auf **Fertigstellen** klicken

:::tip Administratorrechte

Die Standardinstallation erfordert keine Administratorrechte. Wenn Sie jedoch für alle Benutzer installieren möchten, führen Sie das Installationsprogramm als Administrator aus.

:::

#### Option 2: WiX-Installationsprogramm (MSI)

Das WiX-Installationsprogramm bietet eine traditionelle MSI-Installation.

**Schritte:**

1. `aiFetchly-x.x.x.msi` herunterladen
2. MSI-Datei doppelt anklicken
3. Dem Windows-Installationsassistenten folgen:
   - Lizenzvereinbarung akzeptieren
   - Installationsverzeichnis wählen
   - Verknüpfungen konfigurieren (Desktop und Startmenü)
   - Installationsordner für alle oder aktuellen Benutzer wählen
4. Auf **Installieren** klicken
5. Assistenten abschließen und bei Bedarf neu starten

#### aiFetchly unter Windows starten

Nach der Installation können Sie aiFetchly starten über:

- **Desktop-Verknüpfung**: aiFetchly-Icon auf dem Desktop doppelt anklicken
- **Startmenü**: Start → Alle Programme → aiFetchly → aiFetchly
- **Installationsordner**: Zum Installationsverzeichnis navigieren und `aiFetchly.exe` ausführen

### macOS-Installation

aiFetchly für macOS wird als DMG-Disk-Image vertrieben.

**Schritte:**

1. `aiFetchly-x.x.x.dmg` herunterladen
2. DMG-Datei doppelt anklicken zum Einhängen
3. Ein Fenster mit der aiFetchly-Anwendung und einem Link zu „Programme" erscheint
4. Das **aiFetchly**-Symbol in den Ordner **Programme** ziehen
5. Auf Abschluss des Kopiervorgangs warten
6. DMG auswerfen durch Ziehen in den Papierkorb oder Rechtsklick und „Auswerfen"

#### Erster Start unter macOS

**Wichtig:** Beim ersten Start kann macOS aiFetchly aufgrund der Sicherheitseinstellungen blockieren.

**Gatekeeper-Schutz umgehen:**

1. **Systemeinstellungen** → **Sicherheit & Datenschutz** öffnen
2. Zum Reiter **Allgemein** gehen
3. Nach der Meldung „aiFetchly wurde am Öffnen gehindert" suchen
4. Auf **Trotzdem öffnen** klicken

:::info Alternative Methode

Klicken Sie im Programme-Ordner mit der rechten Maustaste (oder Control-Klick) auf aiFetchly und wählen Sie „Öffnen". Dies umgeht Gatekeeper für diesen Start.

:::

#### aiFetchly unter macOS starten

Nach der Installation:

- **Programme-Ordner**: Finder öffnen → Programme → aiFetchly
- **Spotlight-Suche**: `Cmd + Leertaste` drücken, „aiFetchly" eingeben und Enter drücken
- **Launchpad**: Launchpad-Icon klicken und aiFetchly suchen

### Linux-Installation

aiFetchly bietet Pakete für Debian/Ubuntu (DEB) und Red Hat/Fedora (RPM) Distributionen.

#### Debian/Ubuntu (DEB-Paket)

**Schritte:**

1. `aifetchly_x.x.x_amd64.deb` herunterladen
2. Terminal öffnen und zum Download-Verzeichnis navigieren
3. Paket installieren mit:

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. Bei Abhängigkeitsproblemen:

```bash
sudo apt-get install -f
```

5. aiFetchly wird standardmäßig nach `/opt/aifetchly` installiert

#### Red Hat/Fedora (RPM-Paket)

**Schritte:**

1. `aifetchly-x.x.x.x86_64.rpm` herunterladen
2. Terminal öffnen und zum Download-Verzeichnis navigieren
3. Paket installieren mit:

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

Oder mit `yum`:

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### Manuelle Installation (tar.gz-Archiv)

Wenn Sie keinen Paketmanager verwenden möchten:

1. `aiFetchly-x.x.x-linux.tar.gz` herunterladen
2. Archiv entpacken:

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. Entpacktes Verzeichnis an den gewünschten Ort verschieben:

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. Desktop-Verknüpfungen manuell erstellen (optional)

#### aiFetchly unter Linux starten

Nach der Installation:

- **Anwendungsmenü**: aiFetchly im Anwendungsmenü Ihrer Desktop-Umgebung suchen
- **Terminal**: `/opt/aifetchly/aiFetchly` ausführen
- **Desktop-Verknüpfung**: Falls erstellt, Desktop-Icon doppelt anklicken

## Installation überprüfen

Nach dem Start von aiFetchly sollten Sie das Hauptfenster sehen mit:

- Navigationsmenü auf der linken Seite
- Dashboard oder Willkommensbildschirm
- Zugriff auf alle Funktionen (Suche, E-Mail-Marketing, Wissensbibliothek usw.)

## aiFetchly deinstallieren

Wenn Sie aiFetchly von Ihrem System entfernen möchten:

### Windows

**Squirrel-Installationsprogramm:**

1. **Einstellungen** → **Apps** → **Installierte Apps** öffnen
2. Nach „aiFetchly" suchen
3. Auf **Deinstallieren** klicken und den Anweisungen folgen

**WiX-Installationsprogramm (MSI):**

1. **Einstellungen** → **Apps** → **Installierte Apps** öffnen
2. aiFetchly in der Liste finden
3. Auf **Deinstallieren** klicken und bestätigen

Oder das Deinstallationsprogramm im Installationsverzeichnis verwenden.

### macOS

1. aiFetchly beenden, falls es läuft
2. **Finder** öffnen und zu **Programme** gehen
3. **aiFetchly** in den Papierkorb ziehen
4. Papierkorb leeren zum vollständigen Entfernen

:::note Anwendungsdaten

Unter macOS werden Benutzerdaten und Einstellungen gespeichert in:
```
~/Library/Application Support/aiFetchly
```

Löschen Sie diesen Ordner, um alle Benutzerdaten zu entfernen.

:::

### Linux

**DEB-Paket (Debian/Ubuntu):**

```bash
sudo apt remove aifetchly
```

**RPM-Paket (Red Hat/Fedora):**

```bash
sudo dnf remove aifetchly
```

**Manuelle Installation:**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # Benutzerdaten bei Bedarf entfernen
```

## aiFetchly aktualisieren

### Windows (Squirrel-Installationsprogramm)

aiFetchly prüft beim Start automatisch nach Updates. Wenn ein Update verfügbar ist:

1. Sie sehen eine Benachrichtigung über die neue Version
2. Auf **Update herunterladen** klicken
3. Die Anwendung lädt und installiert das Update automatisch
4. aiFetchly startet neu, um das Update abzuschließen

### macOS

Updates werden über DMG-Releases bereitgestellt. So aktualisieren Sie:

1. Neueste DMG von der Website herunterladen
2. Neues aiFetchly in Programme ziehen und alte Version ersetzen
3. Starten und beim Ersetzen-Prompt bestätigen

### Linux

Updates werden über Paketaktualisierungen bereitgestellt:

**Debian/Ubuntu:**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora:**

```bash
sudo dnf upgrade aifetchly
```

## Installationsprobleme beheben

### Windows: „Windows hat Ihren PC geschützt"

Dies ist eine Vorsichtsmaßnahme von Windows SmartScreen. Klicken Sie auf **Weitere Informationen** → **Trotzdem ausführen**.

### Windows: Installation schlägt fehl

- Installationsprogramm als Administrator ausführen
- Antiviren-Software vorübergehend deaktivieren
- Ausreichenden Speicherplatz sicherstellen
- Prüfen, dass keine vorherige Version läuft

### macOS: „App kann nicht geöffnet werden"

Dies ist der Gatekeeper-Schutz. Siehe den Abschnitt [Erster Start unter macOS](#first-launch-on-macos) oben.

### Linux: Berechtigung verweigert

Stellen Sie sicher, dass das Installationsprogramm Ausführungsberechtigungen hat:

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux: Fehlende Abhängigkeiten

Bei Abhängigkeitsfehlern:

**Debian/Ubuntu:**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora:**

```bash
sudo dnf install --skip-broken aifetchly
```

## Nächste Schritte

Nach erfolgreicher Installation von aiFetchly:

1. [Proxy-Einstellungen konfigurieren](./proxy-setup) (empfohlen für Scraping)
2. [Lead-Generierung kennenlernen](../lead-generation/search-engines)
3. [Wissensbibliothek einrichten](../ai-outreach/knowledge-library)

---

**Hilfe benötigt?** Lesen Sie unsere [Systemeinstellungen](../settings/system-settings) oder kontaktieren Sie den Support.
