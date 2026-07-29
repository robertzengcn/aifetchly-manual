---
id: ai-skills
title: Compétences IA
sidebar_label: Compétences IA
description: Gérez et étendez les capacités IA d'aiFetchly avec des compétences — importez, activez/désactivez, désinstallez, et comprenez le fonctionnement des permissions et des demandes d'approbation des compétences dans l'AI Chat.
---

# Compétences IA

Les AI Skills sont des extensions modulaires qui ajoutent des outils que l'IA peut appeler durant une conversation — des capacités spécialisées telles que le scraping web, l'automatisation, l'accès aux fichiers ou les commandes shell. Lorsqu'une compétence est activée, l'IA peut décider de l'utiliser pour répondre à votre requête.

## Qu'est-ce qu'une compétence ?

Une compétence est un outil empaqueté avec :

- Un **nom** et une **version** uniques.
- Une **source** : **Intégré** (livré avec aiFetchly) ou **Installé par l'utilisateur** (importé par vous, ou fournie avec un plugin).
- Une **catégorie de permission** — dérivée des permissions déclarées par la compétence (voir [Catégories de permission](#permission-categories)).
- Un état **activé/désactivé**.

## Accéder aux AI Skills

1. Cliquez sur **System Setting** dans le menu de navigation de gauche.
2. Cliquez sur **Manage Skills** (ou **AI Skills**).

La page liste toutes les compétences installées dans un tableau.

## Le tableau des compétences

| Colonne | Description |
|--------|-------------|
| **Name** | Identifiant de la compétence. Si la compétence provient d'un plugin, une puce _« via plugin: \{name\} »_ apparaît à côté. |
| **Source** | Badge **Intégré** ou **Installé par l'utilisateur**. |
| **Category** | Catégorie de permission de la compétence (`pure`, `network`, `filesystem`, `automation` ou `shell`). |
| **Version** | Numéro de version de la compétence. |
| **Status** | **Enabled** ou **Disabled**. |
| **Actions** | Bascule activer/désactiver et bouton de désinstallation — **affichées uniquement pour les compétences installées par l'utilisateur**. |

:::note Les compétences intégrées sont toujours actives

Les compétences intégrées n'affichent **ni** la bascule activer/désactiver **ni** le bouton de désinstallation. Elles ne peuvent pas être désactivées ni supprimées depuis cette page.

:::

## Importer une compétence

Les compétences sont importées sous forme de packages `.zip`.

1. Cliquez sur **Import** (en haut à droite, icône de téléchargement).
2. Choisissez un fichier `.zip` de compétence.
3. aiFetchly valide le package (manifeste, permissions, fichier d'entrée) et l'installe.

:::tip Conseils d'importation

- Seuls les fichiers `.zip` sont pris en charge par le bouton Import.
- Le package doit contenir un fichier `manifest.json` valide (voir [Format du package de compétence](#skill-package-format)).
- Les compétences fournies avec un plugin n'ont pas besoin d'être importées — elles apparaissent automatiquement lorsque leur plugin est installé.

:::

Les compétences peuvent également arriver automatiquement depuis :

- **Plugins** — un plugin fournit une ou plusieurs compétences ; elles apparaissent ici avec une puce _« via plugin »_. Installez ou supprimez-les via le **[Plugin Manager](./plugin-manager)**.
- **Dossiers de compétences locaux** (avancé) — les compétences placées sous `~/.aifetchly/skills/<name>/` sont découvertes automatiquement.

## Activer, désactiver et désinstaller

Pour les compétences **installées par l'utilisateur** :

- **Activer / désactiver** — utilisez la bascule coche (activer) / croix (désactiver) dans la colonne Actions.
- **Désinstaller** — cliquez sur l'icône corbeille et confirmez. La désinstallation est définitive ; réimportez le `.zip` pour réutiliser la compétence.

Les compétences intégrées n'ont aucun contrôle Actions — elles sont toujours activées.

## Fonctionnement des compétences dans le chat

Une fois une compétence activée, l'IA peut choisir de l'appeler lorsqu'elle est pertinente. Vous n'invoquez pas les compétences par leur nom (bien que vous puissiez en demander une explicitement, par ex. *« utilisez le scraper web sur cette URL »*).

### Catégories de compétences

Chaque compétence appartient à une **catégorie de permission** qui détermine comment elle est approuvée lorsque l'IA l'appelle. La catégorie est la première `permission` déclarée par la compétence (dans son manifeste), ou `pure` si aucune n'est déclarée :

| Catégorie | Ce que la compétence peut faire |
|--------|----------------------|
| `pure` | Utilitaires à usage général — traitement de texte, calculs, formatage. Aucun accès spécial. |
| `network` | Accès réseau/HTTP sortant (récupération de pages, appels d'API). |
| `filesystem` | Lecture/écriture de fichiers locaux. |
| `automation` | Automatisation du navigateur, scraping, publications sociales et actions scriptées similaires. |
| `shell` | Exécute des commandes shell système. (Uniquement `shell_execute` intégré — jamais importable.) |

La catégorie est affichée brute et en minuscules dans le tableau (par exemple `network`, `automation`).

### Demandes d'approbation

Lorsque l'IA appelle une compétence, aiFetchly peut vous demander de l'approuver avant son exécution. L'apparition d'une demande dépend de la catégorie de la compétence **et** de votre mode actuel d'approbation des outils dans le chat :

| Catégorie | Comportement de l'approbation |
|--------|-------------------|
| `pure` | Toujours auto-approuvée — aucune demande. |
| `shell` | **Demande toujours à chaque commande.** Jamais auto-approuvée (voir ci-dessous). |
| `network` / `filesystem` / `automation` | Demande d'approbation sous le mode par défaut _« demander une approbation »_. Sous les modes _« approuver pour moi »_ ou _« accès complet »_, elles sont auto-approuvées. |

Lorsqu'une demande apparaît, vous verrez une carte d'approbation avec trois actions :

- **Autoriser une fois** — exécuter uniquement cet appel.
- **Toujours autoriser** — mémoriser la décision afin que les futurs appels à cette compétence ne déclenchent pas de demande.
- **Refuser** — bloquer cet appel.

Pour les compétences **shell**, la carte est intitulée **« Exécution de commande shell »**, affiche un aperçu de la commande (commande, répertoire de travail, shell, délai d'attente), et le troisième bouton s'intitule **« Toujours autoriser (cette session) »** au lieu de « Toujours autoriser ».

:::warning L'approbation shell est effectivement unique

Pour les compétences `shell`, « Toujours autoriser » n'est **pas** honoré pour les commandes suivantes. Chaque commande shell déclenchera à nouveau une demande — il s'agit d'une mesure de sécurité intentionnelle, car les commandes shell peuvent faire n'importe quoi sur votre machine. Seules les catégories non-shell mémorisent véritablement « Toujours autoriser » de façon permanente.

:::

## Format du package de compétence

Un `.zip` de compétence doit contenir un `manifest.json`. Le manifeste minimal viable ressemble à ceci :

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

### Champs obligatoires du manifeste

| Champ | Description |
|-------|-------------|
| `name` | Identifiant unique de la compétence. |
| `version` | Chaîne de version, par ex. `1.0.0`. |
| `description` | Courte description — l'IA la lit pour décider quand utiliser la compétence. |
| `runtime` | `javascript` ou `python`. |
| `entry` | Le fichier d'entrée dans le package (par ex. `index.js` ou `main.py`). |
| `parameters` | Un objet JSON Schema décrivant les paramètres d'entrée de la compétence. |

### Champs facultatifs du manifeste

| Champ | Description |
|-------|-------------|
| `permissions` | Tableau de chaînes de permission. **Les valeurs valides sont uniquement `network`, `filesystem`, `automation`.** La première entrée détermine la catégorie de la compétence (voir [Catégories de compétences](#skill-categories)). Les valeurs inconnues sont rejetées à l'import. |

:::danger Les permissions sont strictement validées

Seuls `network`, `filesystem` et `automation` sont acceptés. Les valeurs telles que `web-search`, `data-access` ou `shell` seront rejetées et la compétence ne sera pas importée. Il n'y a pas de champ `category` distinct — la catégorie est dérivée de la première entrée de `permissions` (ou `pure` si aucune n'est fournie).

:::

### Empaquetage

1. Placez un `manifest.json` valide à la racine du package.
2. Ajoutez les fichiers d'exécution/d'entrée référencés par `entry`.
3. Compressez le **contenu**, pas le dossier parent.
4. Nommez le fichier `skill-name.zip`.

## Dépannage

### Échec de l'importation

**Causes possibles :** zip invalide, `manifest.json` manquant ou mal formé, valeur de `permissions` invalide, ou un champ obligatoire manquant (`runtime`, `entry`, `parameters`).

**Solutions :**
1. Vérifiez l'intégrité du zip.
2. Vérifiez que `manifest.json` contient tous les champs obligatoires avec des valeurs valides.
3. Confirmez que `permissions` utilise uniquement `network`, `filesystem` ou `automation`.
4. Confirmez que `runtime` vaut `javascript` ou `python` et que `entry` pointe vers un fichier réel.

### Une compétence n'apparaît pas dans le chat

**Causes possibles :** la compétence est désactivée, ou (pour les compétences de plugin) son plugin est désactivé.

**Solutions :**
1. Vérifiez le statut de la compétence dans le tableau et activez-la.
2. Pour les compétences de plugin, vérifiez le **[Plugin Manager](./plugin-manager)** — le plugin propriétaire doit être activé.

### L'IA continue de demander une approbation

- Vous utilisez une compétence **shell**. Les approbations shell sont uniques par conception.
- Pour les autres catégories, basculez le mode d'approbation des outils du chat sur _« approuver pour moi »_ pour réduire les demandes (note : cela auto-approuve les compétences non-shell).

### Une compétence intégrée n'a pas de bascule

C'est intentionnel. Les compétences intégrées sont toujours activées et ne peuvent pas être désactivées ni désinstallées depuis cette page.

## Prochaines étapes

- [Plugin Manager](./plugin-manager) — installez des plugins qui fournissent des compétences, des commandes, des agents, des hooks et des serveurs MCP.
- [Subagents](./subagents) — des spécialistes ciblés que l'IA peut déployer.
- [AI Chat V2](./ai-chat-v2) — l'endroit où les compétences sont invoquées.
