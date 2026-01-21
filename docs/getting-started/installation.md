---
id: installation
title: Installation
sidebar_label: Installation
description: How to download and install aiFetchly on Windows, macOS, or Linux.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Installing aiFetchly

aiFetchly is available for Windows, macOS, and Linux. Follow the instructions for your operating system below.

## System Requirements

Before installing aiFetchly, ensure your system meets these requirements:

### All Platforms
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB for application + additional space for data
- **Network**: Stable internet connection

### Platform-Specific

| Platform | Minimum Version |
|----------|-----------------|
| Windows | Windows 10 or later |
| macOS | macOS 10.15 (Catalina) or later |
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 35+ |

## Download aiFetchly

1. Visit the official aiFetchly website
2. Navigate to the **Downloads** section
3. Select the appropriate installer for your operating system

## Installation by Platform

### Windows Installation

aiFetchly provides two installer options for Windows:

#### Option 1: Squirrel Installer (Recommended)

The Squirrel installer is the modern installation method with automatic update support.

**Steps:**

1. Download `aiFetchly-Setup-x.x.x.exe` (where x.x.x is the version number)
2. Double-click the installer to run it
3. If prompted by Windows SmartScreen, click "More info" then "Run anyway"
4. Follow the installation wizard:
   - Choose installation location (default: `%LOCALAPPDATA%\aiFetchly`)
   - Select whether to create a desktop shortcut
   - Select whether to create a Start Menu shortcut
5. Click **Install** to begin installation
6. Wait for the installation to complete
7. Click **Finish** to close the installer

:::tip Administrator Privileges

Standard installation doesn't require administrator privileges. However, if you want to install for all users, run the installer as administrator.

:::

#### Option 2: WiX Installer (MSI)

The WiX installer provides a traditional MSI installation experience.

**Steps:**

1. Download `aiFetchly-x.x.x.msi`
2. Double-click the MSI file
3. Follow the Windows Installer wizard:
   - Accept the license agreement
   - Choose installation directory
   - Configure shortcuts (desktop and Start Menu)
   - Select installation folder for all users or current user
4. Click **Install** to begin
5. Complete the wizard and restart if prompted

#### Launching aiFetchly on Windows

After installation, you can launch aiFetchly by:

- **Desktop Shortcut**: Double-click the aiFetchly icon on your desktop
- **Start Menu**: Go to Start → All Programs → aiFetchly → aiFetchly
- **Installation Folder**: Navigate to the installation directory and run `aiFetchly.exe`

### macOS Installation

aiFetchly for macOS is distributed as a DMG disk image.

**Steps:**

1. Download `aiFetchly-x.x.x.dmg`
2. Double-click the DMG file to mount it
3. A window will appear with the aiFetchly application and a shortcut to Applications
4. Drag the **aiFetchly** icon to the **Applications** folder
5. Wait for the copy operation to complete
6. Eject the DMG by dragging it to the trash or right-clicking and selecting "Eject"

#### First Launch on macOS

**Important:** On first launch, macOS may prevent aiFetchly from running due to security settings.

**To bypass Gatekeeper protection:**

1. Open **System Preferences** → **Security & Privacy**
2. Go to the **General** tab
3. Look for a message saying "aiFetchly was blocked from opening"
4. Click **Open Anyway** to confirm you want to run aiFetchly

:::info Alternative Method

Right-click (or Control-click) on aiFetchly in the Applications folder and select "Open". This will bypass Gatekeeper for this specific launch.

:::

#### Launching aiFetchly on macOS

After installation:

- **Applications Folder**: Open Finder → Applications → aiFetchly
- **Spotlight Search**: Press `Cmd + Space`, type "aiFetchly", and press Enter
- **Launchpad**: Click the Launchpad icon and search for aiFetchly

### Linux Installation

aiFetchly provides packages for Debian/Ubuntu (DEB) and Red Hat/Fedora (RPM) distributions.

#### Debian/Ubuntu (DEB Package)

**Steps:**

1. Download `aifetchly_x.x.x_amd64.deb`
2. Open your terminal and navigate to the download directory
3. Install the package using:

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. If there are dependency issues, fix them with:

```bash
sudo apt-get install -f
```

5. aiFetchly will be installed to `/opt/aifetchly` by default

#### Red Hat/Fedora (RPM Package)

**Steps:**

1. Download `aifetchly-x.x.x.x86_64.rpm`
2. Open your terminal and navigate to the download directory
3. Install the package using:

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

Or using `yum`:

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### Manual Installation ( tar.gz archive)

If you prefer not to use a package manager:

1. Download `aiFetchly-x.x.x-linux.tar.gz`
2. Extract the archive:

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. Move the extracted directory to your preferred location:

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. Create desktop shortcuts manually (optional)

#### Launching aiFetchly on Linux

After installation:

- **Application Menu**: Look for aiFetchly in your desktop environment's application menu
- **Terminal**: Run `/opt/aifetchly/aiFetchly`
- **Desktop Shortcut**: If created during installation, double-click the desktop icon

## Verifying Installation

After launching aiFetchly, you should see the main application window with:

- Navigation menu on the left
- Dashboard or welcome screen
- Access to all features (Search, Email Marketing, Knowledge Library, etc.)

## Uninstalling aiFetchly

If you need to remove aiFetchly from your system:

### Windows

**Squirrel Installer:**

1. Go to **Settings** → **Apps** → **Installed apps**
2. Search for "aiFetchly"
3. Click **Uninstall** and follow the prompts

**WiX Installer (MSI):**

1. Go to **Settings** → **Apps** → **Installed apps**
2. Find aiFetchly in the list
3. Click **Uninstall** and confirm

Or use the uninstaller in the installation directory.

### macOS

1. Quit aiFetchly if it's running
2. Open **Finder** and go to **Applications**
3. Drag **aiFetchly** to the trash
4. Empty the trash to complete removal

:::note Application Data

On macOS, user data and preferences are stored in:
```
~/Library/Application Support/aiFetchly
```

Delete this folder if you want to remove all user data.

:::

### Linux

**DEB Package (Debian/Ubuntu):**

```bash
sudo apt remove aifetchly
```

**RPM Package (Red Hat/Fedora):**

```bash
sudo dnf remove aifetchly
```

**Manual Installation:**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # Remove user data if desired
```

## Updating aiFetchly

### Windows (Squirrel Installer)

aiFetchly will automatically check for updates on launch. When an update is available:

1. You'll see a notification about the new version
2. Click **Download Update** to begin
3. The application will download and install the update automatically
4. aiFetchly will restart to complete the update

### macOS

Updates are delivered through DMG releases. To update:

1. Download the latest DMG from the website
2. Drag the new aiFetchly to Applications, replacing the old version
3. Launch and confirm when prompted to replace

### Linux

Updates are delivered through package updates:

**Debian/Ubuntu:**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora:**

```bash
sudo dnf upgrade aifetchly
```

## Troubleshooting Installation

### Windows: "Windows Protected Your PC"

This is Windows SmartScreen being cautious. Click **More info** → **Run anyway** to proceed.

### Windows: Installation Fails

- Run the installer as administrator
- Temporarily disable antivirus software
- Ensure you have sufficient disk space
- Check that no previous version is running

### macOS: "App Can't Be Opened"

This is Gatekeeper protection. See the [First Launch on macOS](#first-launch-on-macos) section above.

### Linux: Permission Denied

Ensure the installer has execute permissions:

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux: Missing Dependencies

If you encounter dependency errors:

**Debian/Ubuntu:**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora:**

```bash
sudo dnf install --skip-broken aifetchly
```

## Next Steps

After successfully installing aiFetchly:

1. [Configure proxy settings](./proxy-setup) (recommended for scraping)
2. [Learn about lead generation](../lead-generation/search-engines)
3. [Set up your Knowledge Library](../ai-outreach/knowledge-library)

---

**Need help?** Check our [system settings](../settings/system-settings) or contact support.
