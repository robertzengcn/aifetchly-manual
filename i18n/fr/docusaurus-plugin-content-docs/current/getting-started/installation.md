---
id: installation
title: Installation
sidebar_label: Installation
description: How to download and install aiFetchly on Windows, macOS, or Linux.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Installer aiFetchly

aiFetchly est disponible pour Windows, macOS et Linux. Suivez les instructions correspondant à votre système d'exploitation.

## Configuration système

Avant d'installer aiFetchly, assurez-vous que votre système répond à ces exigences :

### Toutes les plateformes
- **RAM** : 4 Go minimum (8 Go recommandés)
- **Stockage** : 500 Mo pour l'application + espace supplémentaire pour les données
- **Réseau** : Connexion internet stable

### Spécifique à la plateforme

| Plateforme | Version minimale |
|----------|-----------------|
| Windows | Windows 10 ou ultérieur |
| macOS | macOS 10.15 (Catalina) ou ultérieur |
| Linux | Ubuntu 20.04+, Debian 11+, Fedora 35+ |

## Télécharger aiFetchly

1. Visitez le site web officiel d'aiFetchly
2. Accédez à la section **Téléchargements**
3. Sélectionnez l'installateur approprié pour votre système d'exploitation

## Installation par plateforme

### Installation Windows

aiFetchly propose deux options d'installation pour Windows :

#### Option 1 : Installateur Squirrel (Recommandé)

L'installateur Squirrel est la méthode d'installation moderne avec prise en charge des mises à jour automatiques.

**Étapes :**

1. Téléchargez `aiFetchly-Setup-x.x.x.exe` (x.x.x est le numéro de version)
2. Double-cliquez sur l'installateur pour l'exécuter
3. Si Windows SmartScreen affiche un avertissement, cliquez sur « Plus d'infos » puis « Exécuter quand même »
4. Suivez l'assistant d'installation :
   - Choisissez l'emplacement d'installation (par défaut : `%LOCALAPPDATA%\aiFetchly`)
   - Sélectionnez s'il faut créer un raccourci bureau
   - Sélectionnez s'il faut créer un raccourci dans le menu Démarrer
5. Cliquez sur **Installer** pour commencer
6. Attendez la fin de l'installation
7. Cliquez sur **Terminer** pour fermer l'installateur

:::tip Privilèges administrateur

L'installation standard ne nécessite pas de privilèges administrateur. Cependant, si vous souhaitez installer pour tous les utilisateurs, exécutez l'installateur en tant qu'administrateur.

:::

#### Option 2 : Installateur WiX (MSI)

L'installateur WiX offre une expérience d'installation MSI traditionnelle.

**Étapes :**

1. Téléchargez `aiFetchly-x.x.x.msi`
2. Double-cliquez sur le fichier MSI
3. Suivez l'assistant d'installation Windows :
   - Acceptez l'accord de licence
   - Choisissez le répertoire d'installation
   - Configurez les raccourcis (bureau et menu Démarrer)
   - Sélectionnez le dossier d'installation pour tous les utilisateurs ou l'utilisateur actuel
4. Cliquez sur **Installer** pour commencer
5. Terminez l'assistant et redémarrez si demandé

#### Lancer aiFetchly sur Windows

Après l'installation, vous pouvez lancer aiFetchly via :

- **Raccourci bureau** : Double-cliquez sur l'icône aiFetchly sur votre bureau
- **Menu Démarrer** : Allez dans Démarrer → Tous les programmes → aiFetchly → aiFetchly
- **Dossier d'installation** : Naviguez vers le répertoire d'installation et exécutez `aiFetchly.exe`

### Installation macOS

aiFetchly pour macOS est distribué sous forme d'image disque DMG.

**Étapes :**

1. Téléchargez `aiFetchly-x.x.x.dmg`
2. Double-cliquez sur le fichier DMG pour le monter
3. Une fenêtre apparaîtra avec l'application aiFetchly et un raccourci vers Applications
4. Glissez l'icône **aiFetchly** dans le dossier **Applications**
5. Attendez la fin de la copie
6. Éjectez le DMG en le glissant dans la corbeille ou par clic droit et « Éjecter »

#### Premier lancement sur macOS

**Important :** Lors du premier lancement, macOS peut empêcher aiFetchly de s'exécuter en raison des paramètres de sécurité.

**Pour contourner la protection Gatekeeper :**

1. Ouvrez **Préférences Système** → **Sécurité et confidentialité**
2. Allez dans l'onglet **Général**
3. Recherchez le message indiquant « aiFetchly a été bloqué »
4. Cliquez sur **Ouvrir quand même** pour confirmer l'exécution

:::info Méthode alternative

Faites un clic droit (ou Control+clic) sur aiFetchly dans le dossier Applications et sélectionnez « Ouvrir ». Cela contournera Gatekeeper pour ce lancement spécifique.

:::

#### Lancer aiFetchly sur macOS

Après l'installation :

- **Dossier Applications** : Ouvrez le Finder → Applications → aiFetchly
- **Recherche Spotlight** : Appuyez sur `Cmd + Espace`, tapez « aiFetchly » et appuyez sur Entrée
- **Launchpad** : Cliquez sur l'icône Launchpad et recherchez aiFetchly

### Installation Linux

aiFetchly propose des paquets pour les distributions Debian/Ubuntu (DEB) et Red Hat/Fedora (RPM).

#### Debian/Ubuntu (Paquet DEB)

**Étapes :**

1. Téléchargez `aifetchly_x.x.x_amd64.deb`
2. Ouvrez votre terminal et naviguez vers le répertoire de téléchargement
3. Installez le paquet avec :

```bash
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

4. En cas de problèmes de dépendances, corrigez-les avec :

```bash
sudo apt-get install -f
```

5. aiFetchly sera installé par défaut dans `/opt/aifetchly`

#### Red Hat/Fedora (Paquet RPM)

**Étapes :**

1. Téléchargez `aifetchly-x.x.x.x86_64.rpm`
2. Ouvrez votre terminal et naviguez vers le répertoire de téléchargement
3. Installez le paquet avec :

```bash
sudo dnf install aifetchly-x.x.x.x86_64.rpm
```

Ou avec `yum` :

```bash
sudo yum install aifetchly-x.x.x.x86_64.rpm
```

#### Installation manuelle (archive tar.gz)

Si vous préférez ne pas utiliser un gestionnaire de paquets :

1. Téléchargez `aiFetchly-x.x.x-linux.tar.gz`
2. Extrayez l'archive :

```bash
tar -xzf aiFetchly-x.x.x-linux.tar.gz
```

3. Déplacez le répertoire extrait vers l'emplacement souhaité :

```bash
sudo mv aiFetchly /opt/aifetchly
```

4. Créez des raccourcis bureau manuellement (facultatif)

#### Lancer aiFetchly sur Linux

Après l'installation :

- **Menu d'applications** : Recherchez aiFetchly dans le menu d'applications de votre environnement de bureau
- **Terminal** : Exécutez `/opt/aifetchly/aiFetchly`
- **Raccourci bureau** : Si créé lors de l'installation, double-cliquez sur l'icône du bureau

## Vérifier l'installation

Après avoir lancé aiFetchly, vous devriez voir la fenêtre principale de l'application avec :

- Le menu de navigation sur la gauche
- Le tableau de bord ou l'écran d'accueil
- L'accès à toutes les fonctionnalités (Recherche, Email Marketing, Bibliothèque de connaissances, etc.)

## Désinstaller aiFetchly

Si vous devez supprimer aiFetchly de votre système :

### Windows

**Installateur Squirrel :**

1. Allez dans **Paramètres** → **Applications** → **Applications installées**
2. Recherchez « aiFetchly »
3. Cliquez sur **Désinstaller** et suivez les instructions

**Installateur WiX (MSI) :**

1. Allez dans **Paramètres** → **Applications** → **Applications installées**
2. Trouvez aiFetchly dans la liste
3. Cliquez sur **Désinstaller** et confirmez

Ou utilisez le désinstallateur dans le répertoire d'installation.

### macOS

1. Quittez aiFetchly s'il est en cours d'exécution
2. Ouvrez le **Finder** et allez dans **Applications**
3. Glissez **aiFetchly** dans la corbeille
4. Videz la corbeille pour terminer la suppression

:::note Données de l'application

Sur macOS, les données utilisateur et les préférences sont stockées dans :
```
~/Library/Application Support/aiFetchly
```

Supprimez ce dossier pour retirer toutes les données utilisateur.

:::

### Linux

**Paquet DEB (Debian/Ubuntu) :**

```bash
sudo apt remove aifetchly
```

**Paquet RPM (Red Hat/Fedora) :**

```bash
sudo dnf remove aifetchly
```

**Installation manuelle :**

```bash
sudo rm -rf /opt/aifetchly
rm ~/.config/aifetchly  # Supprimer les données utilisateur si souhaité
```

## Mettre à jour aiFetchly

### Windows (Installateur Squirrel)

aiFetchly vérifie automatiquement les mises à jour au lancement. Lorsqu'une mise à jour est disponible :

1. Vous verrez une notification concernant la nouvelle version
2. Cliquez sur **Télécharger la mise à jour** pour commencer
3. L'application téléchargera et installera la mise à jour automatiquement
4. aiFetchly redémarrera pour terminer la mise à jour

### macOS

Les mises à jour sont fournies via les versions DMG. Pour mettre à jour :

1. Téléchargez le dernier DMG depuis le site web
2. Glissez le nouveau aiFetchly dans Applications, en remplaçant l'ancienne version
3. Lancez et confirmez le remplacement

### Linux

Les mises à jour sont fournies via les mises à jour de paquets :

**Debian/Ubuntu :**

```bash
sudo apt update
sudo apt install --only-upgrade aifetchly
```

**Red Hat/Fedora :**

```bash
sudo dnf upgrade aifetchly
```

## Dépannage de l'installation

### Windows : « Windows a protégé votre PC »

C'est Windows SmartScreen qui est prudent. Cliquez sur **Plus d'infos** → **Exécuter quand même** pour continuer.

### Windows : L'installation échoue

- Exécutez l'installateur en tant qu'administrateur
- Désactivez temporairement l'antivirus
- Assurez-vous d'avoir suffisamment d'espace disque
- Vérifiez qu'aucune version précédente n'est en cours d'exécution

### macOS : « L'app ne peut pas être ouverte »

C'est la protection Gatekeeper. Voir la section [Premier lancement sur macOS](#first-launch-on-macos) ci-dessus.

### Linux : Permission refusée

Assurez-vous que l'installateur a les permissions d'exécution :

```bash
chmod +x aifetchly_x.x.x_amd64.deb
sudo dpkg -i aifetchly_x.x.x_amd64.deb
```

### Linux : Dépendances manquantes

Si vous rencontrez des erreurs de dépendances :

**Debian/Ubuntu :**

```bash
sudo apt-get install -f
```

**Red Hat/Fedora :**

```bash
sudo dnf install --skip-broken aifetchly
```

## Prochaines étapes

Après avoir installé aiFetchly avec succès :

1. [Configurer les paramètres proxy](./proxy-setup) (recommandé pour le scraping)
2. [En savoir plus sur la génération de prospects](../lead-generation/search-engines)
3. [Configurer votre bibliothèque de connaissances](../ai-outreach/knowledge-library)

---

**Besoin d'aide ?** Consultez nos [paramètres système](../settings/system-settings) ou contactez le support.
