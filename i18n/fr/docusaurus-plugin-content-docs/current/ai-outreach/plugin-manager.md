---
id: plugin-manager
title: Gestionnaire de plugins
sidebar_label: Gestionnaire de plugins
description: Installez, parcourez et gérez des paquets de plugins qui regroupent des AI Skills, des sous-agents, des commandes slash, des hooks et des serveurs MCP. Installez depuis un zip/dossier local, git, GitHub, npm, une URL ou une marketplace.
---

# Gestionnaire de plugins

Un **plugin** est un paquet unique qui regroupe une ou plusieurs capacités d'extension — **AI Skills**, **sous-agents**, **commandes slash**, **hooks** et/ou **serveurs MCP** — sous un seul manifeste, un seul chemin d'installation et un seul enregistrement de propriété. Le Gestionnaire de plugins est l'endroit où vous installez, parcourez, inspectez, activez, désactivez et désinstallez les plugins.

Les plugins reposent sur les systèmes autonomes [AI Skills](./ai-skills), [Sous-agents](./subagents), [Commandes slash](./slash-commands), [Hooks](../settings/hooks) et [Outils MCP](./mcp-tools). Installer un plugin enregistre les capacités qu'il regroupe ; le désinstaller les supprime — le tout en tant qu'unité.

## Ouvrir le Gestionnaire de plugins

**Depuis la navigation de gauche :** cliquez sur **Plugins** (icône puzzle).

**Depuis les Paramètres système :** ouvrez **Paramètres système** et cliquez sur **Plugins**.

La page est organisée en **quatre onglets** :

| Onglet | Rôle |
|-----|---------|
| **Installés** | Plugins déjà présents sur votre machine — installer, activer/désactiver, inspecter, désinstaller. |
| **Découvrir** | Parcourez un catalogue de marketplace et installez des plugins depuis celui-ci. |
| **Marketplaces** | Ajoutez, rafraîchissez et supprimez les sources de marketplaces qui alimentent l'onglet Découvrir. |
| **Erreurs** | Marketplaces qui n'ont pas pu être chargées, avec leurs détails d'erreur. |

## Onglet Installés

L'onglet **Installés** propose une barre d'outils avec trois actions et une table de tous les plugins installés.

### Barre d'outils

- **Recharger** — réanalyser les plugins installés.
- **Importer un plugin** — installer depuis un fichier `.zip` local.
- **Installer depuis une source** — installer depuis l'une des six sources (voir [Installer depuis une source](#installer-depuis-une-source)).

### La table des plugins

| Colonne | Description |
|--------|-------------|
| **Plugin** | Nom du plugin. |
| **Version** | Version installée. |
| **Source** | **Intégré**, **Marketplace** ou **Local**. |
| **Importé depuis** | L'origine (chemin du dossier, URL git, paquet npm, etc.). |
| **Sous-agent** | Nombre de sous-agents regroupés par le plugin. |
| **Skills** | Nombre de skills. |
| **Hooks** | Nombre de hooks. |
| **Serveurs MCP** | Nombre de serveurs MCP. |
| **Statut** | État de santé actuel (voir [États de santé des plugins](#états-de-santé-des-plugins)). |
| **Actions** | Un interrupteur **activer/désactiver** au niveau du plugin et un bouton **corbeille** (désinstallation). |

La colonne **Source** affiche l'un des trois grands badges — **Intégré**, **Marketplace** ou **Local**. La source d'installation plus spécifique (par exemple `git`, `npm`, `local-folder`) est affichée dans l'onglet Vue d'ensemble du plugin en tant que **Source d'installation**.

## Installer un plugin

Il y a deux points d'entrée d'installation dans l'onglet Installés :

- **Importer un plugin** — choisir un fichier `.zip` local.
- **Installer depuis une source** — installer depuis l'une des six sources (ci-dessous).

Les plugins peuvent également être installés depuis une marketplace via l'onglet **Découvrir** (voir [Marketplaces](#marketplaces)).

### Installer depuis une source

Cliquez sur **Installer depuis une source** et choisissez un type de source. La boîte de dialogue propose **Dossier local** par défaut. Chaque source a son propre formulaire.

| Source | Ce qu'elle accepte | Modèle d'authentification |
|---|---|---|
| **Zip local** | Un fichier `.zip` sur le disque. | Aucun. |
| **Dossier local** | Un répertoire sur le disque contenant le plugin. Le dossier est copié dans le cache des plugins ; votre dossier source n'est jamais modifié. | Aucun. |
| **Git** | Toute URL git HTTPS ou SSH (`https://…`, `git@…`, `ssh://…`). Le HTTP simple est rejeté. | Votre agent SSH et l'assistant d'identification git du système. Aucun identifiant n'est transmis sur la ligne de commande. |
| **GitHub** | Une URL de dépôt GitHub, une URL de ressource de release ou une URL `releases/latest`. Les URLs de dépôt sont clonées ; les URLs de ressource de release sont téléchargées directement. | Dépôts publics et ressources de release publiques uniquement. Pour les dépôts privés, utilisez la source Git avec un assistant d'identification. |
| **npm** | Tout paquet du registre npm public, plus GitHub Packages et les registres scoped avec un jeton d'authentification. | URL de registre et jeton d'authentification facultatifs. Le jeton est écrit dans un `.npmrc` en `0600` dans le répertoire de travail d'installation et n'est **jamais stocké** après l'installation. |
| **URL** | Collez n'importe quelle URL — le gestionnaire détecte automatiquement s'il s'agit d'un `.zip`, d'une URL git ou d'une URL GitHub et route en conséquence. Le HTTP simple est rejeté. | Hérite de la source correspondante. |

:::info Garanties de sécurité

Quelle que soit la source, chaque installation :

- Applique les mêmes limites de taille et de nombre de fichiers (50 Mo compressés / 250 Mo extraits / 5 000 fichiers).
- N'exécute jamais de code de plugin pendant l'installation — pas de `npm install`, pas de `pip install`, pas de scripts de cycle de vie.
- `npm pack` s'exécute avec `--ignore-scripts` afin que les scripts de cycle de vie du paquet ne puissent pas s'exécuter.
- Tous les processus `git`/`npm`/`tar` lancés sont tués s'ils dépassent le délai de 60 secondes.
- Tous les téléchargements doivent utiliser HTTPS (le HTTP est rejeté) et suivre au maximum 5 redirections.

:::

## Marketplaces

Une **marketplace** est un catalogue de plugins que vous pouvez parcourir et depuis lequel vous pouvez installer. Le Gestionnaire de plugins a trois onglets liés aux marketplaces.

### Onglet Marketplaces

Gérez vos sources de marketplaces :

- **Ajouter une marketplace** — enregistrer une nouvelle marketplace. La source peut être un raccourci `owner/repo`, une URL git, un dossier local ou une URL `marketplace.json` directe. Une branche/étiquette/commit facultative vous permet d'épingler une révision.
- **Tout rafraîchir** — récupérer de nouveau chaque catalogue de marketplace.
- Par ligne — **rafraîchir** ou **supprimer** une marketplace unique. Supprimer une marketplace ne désinstalle **pas** les plugins que vous avez déjà installés depuis celle-ci.

### Onglet Découvrir

Parcourez tout ce que vos marketplaces offrent :

- **Rechercher** par nom de plugin ou par description.
- Filtrer par **marketplace** et par **statut** (Tous / Installés / Non installés).
- Chaque ligne affiche le plugin, sa marketplace, sa version et son statut. Cliquez sur **Détails** pour voir la description complète, l'auteur, la source résolue et les éventuels drapeaux de risque.

#### Drapeaux de risque et confirmation

Avant d'installer depuis une marketplace, aiFetchly signale les comportements potentiellement sensibles :

- **Démarre des serveurs MCP**
- **Déclare des hooks**
- **Déclare des moniteurs**
- **Installe depuis npm**
- **Non épinglé à un commit**

Si l'un de ces drapeaux est présent, vous devez cocher **« Je comprends les risques et je souhaite installer. »** avant que le bouton Installer ne soit activé.

Si vous avez déjà le plugin dans une version différente, le bouton affiche **Réinstaller** au lieu de Installer.

### Onglet Erreurs

Liste les marketplaces dont la santé n'est pas **Saine**, avec leur état de santé et leurs messages d'erreur. Utilisez-le pour diagnostiquer une marketplace qui ne se charge pas.

## États de santé des plugins

| État | Signification |
|---|---|
| **Sain** | Tous les composants ont été chargés avec succès. |
| **Désactivé** | Vous avez désactivé le plugin. Aucune de ses capacités n'est exposée à l'IA. |
| **Configuration requise** | Le plugin inclut une skill Python ; le runtime configurera son environnement virtuel lors de la première utilisation. |
| **Chargement partiel** | Certains composants ont été chargés, d'autres ont échoué. L'onglet Diagnostics indique lesquels. |
| **Invalide** | Le manifeste du plugin ou l'état d'installation est corrompu. |
| **Fichiers manquants** | Le chemin d'installation a disparu (par exemple, supprimé du disque). |

## Le panneau de détails

Cliquez sur n'importe quelle ligne de plugin pour ouvrir la boîte de dialogue de détails avec **neuf onglets**.

### Vue d'ensemble

Version, source, URI d'origine, chemin d'installation, santé actuelle, nombres de **commandes** et de **hooks**, auteur, **source d'installation** (type et réf), marketplace (si installé depuis une) et description.

### Skills

Chaque skill appartenant au plugin, avec un indicateur de santé et un interrupteur individuel **activer/désactiver**.

### Sous-agents

Chaque sous-agent appartenant au plugin — nom (avec ID), mode, nombre d'outils, santé et interrupteur individuel **activer/désactiver**. Vide si le plugin ne fournit aucun sous-agent.

### Commandes

Les commandes slash fournies par le plugin — `/name`, description, alias, indicateur d'argument et état activé/désactivé. **En lecture seule** (les commandes ne peuvent pas être activées/désactivées individuellement ici).

### Hooks

Les hooks fournis par le plugin — id, événement, matcher, type et statut. **En lecture seule**.

### Serveurs MCP

Chaque serveur MCP appartenant au plugin, avec son transport et un interrupteur **Activé** par serveur. (La découverte des outils et les tests de connexion pour les serveurs MCP se font sur la page dédiée **[Outils MCP](./mcp-tools)**, pas ici.)

### Permissions

Les permissions que le plugin déclare dans son manifeste, affichées sous forme d'indicateurs en lecture seule.

### Diagnostics

Cliquez sur **Exporter les diagnostics** pour générer un paquet JSON de l'état de chargement du plugin et des erreurs par composant, affiché en ligne. Utilisez-le lors du dépannage ou pour signaler un problème.

### Manifeste

Vue en lecture seule et formatée du manifeste du plugin.

## Activer et désactiver

- **Interrupteur au niveau du plugin** (dans la colonne Actions de la table) : active ou désactive l'ensemble du plugin. Désactiver un plugin masque **toutes** ses capacités à l'IA.
- **Interrupteurs au niveau des composants** (dans les onglets Skills, Sous-agents et Serveurs MCP) : activent ou désactivent une skill, un sous-agent ou un serveur MCP individuel au sein du plugin.

**Les commandes et les hooks n'ont pas d'interrupteur par composant** — ils suivent l'interrupteur au niveau du plugin.

L'activation effective pour toute capacité est : **plugin activé ET (composant activé, quand un interrupteur existe)**.

## Désinstaller

1. Cliquez sur l'icône **corbeille** dans la colonne Actions d'un plugin.
2. Une boîte de dialogue de confirmation demande : _« Désinstaller ce plugin ? Cela supprime ses skills et ses serveurs MCP. »_
3. Confirmez pour supprimer.

La désinstallation supprime les capacités regroupées du plugin et ses fichiers en cache. Elle ne supprime pas les fichiers en dehors de la racine d'installation du plugin et ne touche pas aux skills, commandes, agents, hooks ou serveurs MCP autonomes que vous avez ajoutés vous-même.

## Paquets de plugins et manifeste

Un plugin est un répertoire (ou un zip d'un tel répertoire) avec la structure suivante :

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

Le manifeste (`plugin.json`) déclare le nom du plugin, sa version, sa description, les capacités incluses (chemins relatifs vers les skills, agents, commandes, hooks et configurations de serveurs MCP), les permissions et les dépendances facultatives.

:::note Plugins au format Claude

aiFetchly prend également en charge les plugins au format Claude. Les sous-agents et commandes fournis par un plugin et rédigés au format Claude sont adaptés automatiquement lors de l'installation.

:::

## Dépannage

### L'installation échoue avec « path escapes plugin directory »

Le manifeste du plugin référence un fichier en dehors de sa propre racine. Rejetez le plugin — il est malformé ou hostile.

### L'installation échoue avec « Package exceeds max size »

Le plugin dépasse 50 Mo compressés ou 250 Mo extraits. Allégez son contenu ou choisissez un plugin plus petit.

### L'installation Git se bloque

Le clonage a dépassé le délai de 60 secondes. Vérifiez la taille du dépôt et le réseau. Le gestionnaire tue le processus `git` à l'expiration du délai ; aucun clone zombie n'est laissé derrière.

### L'installation npm échoue avec 401 / 403

Pour les paquets privés, vous devez fournir un jeton d'authentification. Pour GitHub Packages, l'URL du registre doit être `https://npm.pkg.github.com` et le jeton doit avoir la portée `read:packages`.

### Une marketplace ne se charge pas

Ouvrez l'onglet **Erreurs** pour voir l'état de santé et le message d'erreur de la marketplace. Causes courantes : une URL injoignable, un `marketplace.json` malformé ou une réf git qui n'existe pas. Cliquez sur **Rafraîchir** sur la ligne de la marketplace pour réessayer, ou sur **Supprimer** puis réajoutez-la avec la source correcte.

### Le plugin affiche « Configuration requise »

Le plugin regroupe une skill Python. L'environnement Python est configuré lors de la première exécution de la skill. Vous pouvez aussi exécuter la skill une fois manuellement pour déclencher la configuration.

### Le plugin affiche « Fichiers manquants »

Le chemin d'installation a été supprimé du disque. Réinstallez le plugin pour le restaurer.

## Étapes suivantes

- [AI Skills](./ai-skills) — comment les skills fonctionnent au sein d'un plugin.
- [Sous-agents](./subagents) — des spécialistes à portée limitée qu'un plugin peut regrouper.
- [Commandes slash](./slash-commands) — commandes de prompt/action réutilisables.
- [Hooks](../settings/hooks) — hooks de cycle de vie qu'un plugin peut déclarer.
- [Outils MCP](./mcp-tools) — comment les serveurs MCP fonctionnent au sein d'un plugin.
- [AI Chat V2](./ai-chat-v2) — où les capacités du plugin apparaissent en tant qu'outils IA.
