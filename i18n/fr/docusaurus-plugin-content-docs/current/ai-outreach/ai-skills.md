---
id: ai-skills
title: Compétences IA
sidebar_label: Compétences IA
description: Gérez et étendez les capacités d'IA d'aiFetchly avec des compétences personnalisables - importez, désinstallez, activez/désactivez et utilisez-les dans l'IA Chat.
---

# Compétences IA

Les AI Skills sont des extensions modulaires qui enrichissent les capacités de conversation IA d'aiFetchly. Ces compétences ajoutent des connaissances spécialisées, des outils personnalisés et des fonctionnalités spécifiques à un domaine à l'Assistant Marketing IA.

## Qu'est-ce que les AI Skills ?

Les AI Skills sont des composants packagés qui étendent les capacités de l'IA :

- **Skills intégrés** : Compétences préinstallées avec les fonctionnalités principales
- **Skills installés par l'utilisateur** : Compétences personnalisées que vous importez pour des cas d'usage spécifiques

Chaque compétence dispose de :
- Un nom et une version uniques
- Une catégorie (par ex., « recherche-web », « analyse-de-données », « automatisation »)
- Un état activé/désactivé
- Un manifeste définissant les permissions et les capacités

## Accès aux AI Skills

1. Cliquez sur **Settings** dans le menu de navigation de gauche
2. Accédez à **Skills**
3. Consultez la liste des compétences installées avec leur statut

## Importation de compétences

### Étape 1 : Obtenir le package de la compétence

Les compétences sont distribuées sous forme de fichiers `.zip`. Vous pouvez les obtenir auprès de :
- La marketplace officielle des compétences aiFetchly
- Compétences contribuées par la communauté
- Compétences développées sur mesure pour votre organisation

### Étape 2 : Importer la compétence

1. Dans la page Skills, cliquez sur le bouton **Import** (en haut à droite, avec l'icône de téléchargement)
2. Une boîte de dialogue de sélection de fichiers s'ouvre
3. Naviguez vers votre fichier `.zip` de compétence
4. Sélectionnez le fichier et confirmez

### Étape 3 : Vérifier l'installation

Après l'importation :
- La compétence apparaît dans le tableau des compétences
- Le statut est affiché comme **Enabled** par défaut
- Vérifiez que la catégorie et la version de la compétence correspondent à vos attentes

:::tip Conseils d'importation

- Seuls les fichiers `.zip` sont pris en charge
- La compétence doit contenir un fichier `manifest.json` valide
- En cas d'échec de l'importation, vérifiez l'intégrité du fichier zip et le format du manifeste

:::

## Gestion des compétences

### Consulter les compétences installées

Le tableau des compétences affiche :

| Colonne | Description |
|---------|-------------|
| **Name** | Identifiant/nom de la compétence |
| **Source** | Badge `Built-in` ou `User-installed` |
| **Category** | Catégorie fonctionnelle de la compétence |
| **Version** | Numéro de version actuel |
| **Status** | Badge `Enabled` ou `Disabled` |
| **Actions** | Bascule activer/désactiver et bouton de désinstallation |

### Activer/Désactiver les compétences

Pour modifier l'état d'une compétence :

1. Localisez la compétence dans le tableau
2. Utilisez les **boutons de bascule** dans la colonne Actions :
   - **Coche** (verte) : Activer la compétence
   - **Croix** (grise) : Désactiver la compétence

**Quand désactiver une compétence :**
- La compétence est en conflit avec une autre
- Résolution temporaire de problèmes
- La compétence n'est pas nécessaire pour les tâches en cours
- Test du comportement de la compétence

**Remarque :** Les compétences intégrées ne peuvent pas être désinstallées, uniquement désactivées.

### Désinstaller les compétences

Pour supprimer une compétence installée par l'utilisateur :

1. Localisez la compétence dans le tableau
2. Cliquez sur l'icône **Delete** (corbeille) dans la colonne Actions
3. Confirmez l'action de désinstallation dans la boîte de dialogue

:::warning Avertissement de désinstallation

La désinstallation d'une compétence la supprime définitivement. Vous devrez la réimporter si vous souhaitez l'utiliser à nouveau.

:::

## Utilisation des compétences dans l'IA Chat

Les compétences deviennent disponibles dans l'**Assistant Marketing IA** une fois activées.

### Accéder à l'IA Chat

1. Accédez à **AI Marketing Assistant** (ou **AI Chat**)
2. Démarrez une nouvelle conversation ou poursuivez une conversation existante

### Fonctionnement des compétences dans le Chat

Les compétences activées s'intègrent automatiquement aux réponses de l'IA :

1. **Sélection automatique des outils** : L'IA choisit les compétences pertinentes en fonction de votre requête
2. **Invocation manuelle** : Demandez une fonctionnalité spécifique d'une compétence
3. **Résultats combinés** : Plusieurs compétences peuvent travailler ensemble

### Exemples d'utilisation des compétences

**Compétence de recherche web :**
```
Utilisateur : "Quelles sont les dernières tendances en marketing SaaS ?"
IA : [Utilise la compétence de recherche web pour trouver des informations actuelles]
IA : "D'après les données récentes, les tendances du marketing SaaS incluent..."
```

**Compétence d'analyse de données :**
```
Utilisateur : "Analysez ces données clients et identifiez les tendances"
IA : [Utilise la compétence d'analyse de données pour traiter les données]
IA : "L'analyse révèle les tendances clés suivantes..."
```

**Compétence d'automatisation :**
```
Utilisateur : "Configurez une campagne email automatisée pour les nouveaux prospects"
IA : [Utilise la compétence d'automatisation pour configurer la campagne]
IA : "Votre campagne automatisée est maintenant configurée avec..."
```

### Indicateurs de compétences dans le Chat

Lorsqu'une compétence est utilisée :
- Le nom de la compétence peut apparaître dans la réponse
- Une petite icône ou un badge indique l'activation de la compétence
- L'utilisation de l'outil est affichée dans le flux de conversation

### Demandes d'autorisation des compétences

Certaines compétences requièrent votre autorisation explicite avant leur exécution. Il s'agit d'une fonctionnalité de sécurité pour protéger votre système.

**Quand vous verrez des demandes d'autorisation :**

Les compétences sont classées selon leur niveau de permission :

| Catégorie | Comportement des permissions | Exemples |
|-----------|------------------------------|----------|
| **Pure** | Auto-approuvée, aucune demande | Traitement de texte, calculs, formatage de données |
| **Shell** | Demande toujours avant l'exécution | Exécution de commandes système, opérations sur les fichiers |
| **Network** | Peut demander pour les appels externes | Web scraping, appels API vers des services externes |
| **Data** | Peut demander pour les accès sensibles | Lecture/écriture du système de fichiers, accès à la base de données |

**La demande d'autorisation :**

Lorsqu'une compétence nécessite une autorisation, vous verrez une boîte de dialogue dans l'IA Chat :

```
┌─────────────────────────────────────────────┐
│  Skill Permission Request                  │
├─────────────────────────────────────────────┤
│  Skill: shell_execute                       │
│  Category: Shell                            │
│                                             │
│  This skill wants to run:                  │
│  $ ls -la /path/to/directory               │
│                                             │
│  [Allow Once]  [Allow Always]  [Deny]      │
└─────────────────────────────────────────────┘
```

**Options d'autorisation :**

- **Allow Once** : Accorder l'autorisation pour cette seule exécution
- **Allow Always** : Retenir cette décision et auto-approuver les futures requêtes de cette compétence
- **Deny** : Bloquer cette exécution (la compétence échouera proprement)

**Gestion des autorisations enregistrées :**

Pour consulter ou modifier les autorisations enregistrées :

1. Accédez à **Settings** -> **AI Skills**
2. Cliquez sur une compétence pour voir son statut de permission
3. Activez/désactivez « Always Allow » pour modifier le comportement d'auto-approbation
4. Les compétences désactivées ont leurs permissions temporairement suspendues

:::tip Bonne pratique de sécurité

Commencez par « Allow Once » pour les nouvelles compétences. Après avoir vérifié qu'elles fonctionnent correctement et de manière sécurisée, vous pouvez passer à « Allow Always » pour plus de commodité.

:::

## Catégories de compétences

Les compétences sont organisées par catégorie fonctionnelle :

| Catégorie | Objectif | Exemples de compétences |
|-----------|----------|------------------------|
| **Web Search** | Recherche sur Internet, analyse de tendances | Moteur de recherche, surveillance des réseaux sociaux |
| **Data Analysis** | Traitement et interprétation des données | Analyse CSV, modélisation statistique |
| **Automation** | Tâches d'automatisation des flux de travail | Automatisation des emails, planification de tâches |
| **Integration** | Connexions aux services externes | CRM, connecteurs API |
| **Content** | Génération et optimisation de contenu | Rédaction de blog, optimisation SEO |
| **Pure** | Utilitaires à usage général | Traitement de texte, formatage |

## Dépannage

### La compétence n'apparaît pas dans le Chat

**Causes possibles :**
- La compétence est désactivée
- L'installation de la compétence est incomplète
- La compétence nécessite des permissions spécifiques

**Solutions :**
1. Vérifiez le statut de la compétence dans Settings -> Skills
2. Activez la compétence si elle est désactivée
3. Réimportez la compétence si elle est corrompue
4. Vérifiez que le manifeste de la compétence contient les permissions requises

### Échec de l'importation

**Causes possibles :**
- Format de fichier zip invalide
- `manifest.json` manquant ou mal formaté
- La compétence est déjà installée
- Téléchargement corrompu

**Solutions :**
1. Vérifiez l'intégrité du fichier zip
2. Vérifiez le format et le contenu du fichier manifest.json
3. Désinstallez d'abord la version existante, puis réimportez
4. Téléchargez à nouveau le package de la compétence

### La compétence provoque des erreurs

**Causes possibles :**
- Bug ou incompatibilité de la compétence
- Dépendances manquantes
- Clé API non configurée

**Solutions :**
1. Désactivez temporairement la compétence
2. Consultez la documentation de la compétence pour les prérequis
3. Vérifiez que toutes les configurations requises sont complétées
4. Contactez le développeur de la compétence pour obtenir de l'assistance

### Impossible de désinstaller une compétence intégrée

Les compétences intégrées sont essentielles au fonctionnement d'aiFetchly et ne peuvent pas être supprimées. Vous pouvez uniquement les désactiver si elles entrent en conflit avec d'autres compétences.

## Bonnes pratiques

### 1. Sélection des compétences

**Installez uniquement ce dont vous avez besoin :**
- Chaque compétence ajoute de la complexité
- Trop de compétences peuvent provoquer des conflits
- Commencez par les compétences essentielles, ajoutez-en au besoin

### 2. Mises à jour des compétences

**Maintenez vos compétences à jour :**
- Vérifiez régulièrement les mises à jour des compétences
- Mettez à jour les compétences pour les correctifs et les améliorations
- Testez les compétences mises à jour avant une utilisation en production

### 3. Organisation des compétences

**Nommez et catégorisez judicieusement :**
- Utilisez des noms de compétences descriptifs
- Organisez par catégorie fonctionnelle
- Documentez l'objectif des compétences personnalisées

### 4. Tests

**Testez avant la production :**
- Activez les compétences en mode test d'abord
- Vérifiez le comportement de la compétence dans l'IA Chat
- Vérifiez l'absence de conflits avec les compétences existantes

### 5. Sécurité

**Installez uniquement des compétences de confiance :**
- Vérifiez la source de la compétence
- Examinez les permissions de la compétence
- Surveillez le comportement de la compétence
- Supprimez les compétences inutilisées

## Développement de compétences (pour les développeurs)

### Structure du manifeste

Le fichier `manifest.json` d'une compétence doit inclure :

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "category": "automation",
  "permissions": ["web-search", "data-access"],
  "description": "Description de ce que cette compétence fait"
}
```

### Packaging

1. Incluez `manifest.json` à la racine
2. Ajoutez les fichiers d'implémentation de la compétence
3. Incluez les ressources nécessaires
4. Compressez le contenu (pas le dossier)
5. Nommez le fichier `skill-name.zip`

## Intégration avec d'autres fonctionnalités

### Assistant Marketing IA

Les compétences enrichissent les capacités de conversation de l'IA :
- Des réponses plus précises
- Accès à des sources de données externes
- Exécution automatisée de tâches

### Outils MCP

Les compétences et les outils MCP peuvent fonctionner ensemble :
- Les compétences fournissent une logique spécifique au domaine
- Les outils MCP fournissent une connectivité externe
- Combinés pour une automatisation puissante

### Bibliothèque de connaissances

Les compétences peuvent exploiter votre base de connaissances :
- Recherche de connaissances pendant la conversation
- Application de modèles appris
- Génération de réponses contextuelles

## Prochaines étapes

- [Configurer les paramètres système](../settings/system-settings)
- [Découvrir l'Assistant Marketing IA](./ai-marketing-assistant)
- [Configurer la Bibliothèque de connaissances](./knowledge-library)

---

**Prêt à étendre les capacités de l'IA ?** Importez votre première compétence et découvrez de nouvelles possibilités d'automatisation et d'intelligence.
