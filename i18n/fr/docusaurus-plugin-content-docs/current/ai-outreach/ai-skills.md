---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Gerez et etendez les capacites d'IA d'aiFetchly avec des competences personnalisables - importez, desinstallez, activez/desactivez et utilisez-les dans l'IA Chat.
---

# AI Skills

Les AI Skills sont des extensions modulaires qui enrichissent les capacites de conversation IA d'aiFetchly. Ces competences ajoutent des connaissances specialisees, des outils personnalises et des fonctionnalites specifiques a un domaine a l'Assistant Marketing IA.

## Qu'est-ce que les AI Skills ?

Les AI Skills sont des composants packages qui etendent les capacites de l'IA :

- **Skills integres** : Competences preinstallees avec les fonctionnalites principales
- **Skills installes par l'utilisateur** : Competences personnalisees que vous importez pour des cas d'usage specifiques

Chaque competence dispose de :
- Un nom et une version uniques
- Une categorie (par ex., « recherche-web », « analyse-de-donnees », « automatisation »)
- Un etat active/desactive
- Un manifeste definissant les permissions et les capacites

## Acces aux AI Skills

1. Cliquez sur **Settings** dans le menu de navigation de gauche
2. Accedez a **Skills**
3. Consultez la liste des competences installees avec leur statut

## Importation de competences

### Etape 1 : Obtenir le package de la competence

Les competences sont distribuees sous forme de fichiers `.zip`. Vous pouvez les obtenir aupres de :
- La marketplace officielle des competences aiFetchly
- Competences contribuees par la communaute
- Competences developpees sur mesure pour votre organisation

### Etape 2 : Importer la competence

1. Dans la page Skills, cliquez sur le bouton **Import** (en haut a droite, avec l'icone de telechargement)
2. Une boite de dialogue de selection de fichiers s'ouvre
3. Naviguez vers votre fichier `.zip` de competence
4. Selectionnez le fichier et confirmez

### Etape 3 : Verifier l'installation

Apres l'importation :
- La competence apparait dans le tableau des competences
- Le statut est affiche comme **Enabled** par defaut
- Verifiez que la categorie et la version de la competence correspondent a vos attentes

:::tip Conseils d'importation

- Seuls les fichiers `.zip` sont pris en charge
- La competence doit contenir un fichier `manifest.json` valide
- En cas d'echec de l'importation, verifiez l'integrite du fichier zip et le format du manifeste

:::

## Gestion des competences

### Consulter les competences installees

Le tableau des competences affiche :

| Colonne | Description |
|---------|-------------|
| **Name** | Identifiant/nom de la competence |
| **Source** | Badge `Built-in` ou `User-installed` |
| **Category** | Categorie fonctionnelle de la competence |
| **Version** | Numero de version actuel |
| **Status** | Badge `Enabled` ou `Disabled` |
| **Actions** | Bascule activer/desactiver et bouton de desinstallation |

### Activer/Desactiver les competences

Pour modifier l'etat d'une competence :

1. Localisez la competence dans le tableau
2. Utilisez les **boutons de bascule** dans la colonne Actions :
   - **Coche** (verte) : Activer la competence
   - **Croix** (grise) : Desactiver la competence

**Quand desactiver une competence :**
- La competence est en conflit avec une autre
- Resolution temporaire de problemes
- La competence n'est pas necessaire pour les taches en cours
- Test du comportement de la competence

**Remarque :** Les competences integrees ne peuvent pas etre desinstallees, uniquement desactivees.

### Desinstaller les competences

Pour supprimer une competence installee par l'utilisateur :

1. Localisez la competence dans le tableau
2. Cliquez sur l'icone **Delete** (corbeille) dans la colonne Actions
3. Confirmez l'action de desinstallation dans la boite de dialogue

:::warning Avertissement de desinstallation

La desinstallation d'une competence la supprime definitivement. Vous devrez la reimporter si vous souhaitez l'utiliser a nouveau.

:::

## Utilisation des competences dans l'IA Chat

Les competences deviennent disponibles dans l'**Assistant Marketing IA** une fois activees.

### Acceder a l'IA Chat

1. Accedez a **AI Marketing Assistant** (ou **AI Chat**)
2. Demarrez une nouvelle conversation ou poursuivez une conversation existante

### Fonctionnement des competences dans le Chat

Les competences activees s'integrent automatiquement aux reponses de l'IA :

1. **Selection automatique des outils** : L'IA choisit les competences pertinentes en fonction de votre requete
2. **Invocation manuelle** : Demandez une fonctionnalite specifique d'une competence
3. **Resultats combines** : Plusieurs competences peuvent travailler ensemble

### Exemples d'utilisation des competences

**Competence de recherche web :**
```
Utilisateur : "Quelles sont les dernieres tendances en marketing SaaS ?"
IA : [Utilise la competence de recherche web pour trouver des informations actuelles]
IA : "D'apres les donnees recentes, les tendances du marketing SaaS incluent..."
```

**Competence d'analyse de donnees :**
```
Utilisateur : "Analysez ces donnees clients et identifiez les tendances"
IA : [Utilise la competence d'analyse de donnees pour traiter les donnees]
IA : "L'analyse revele les tendances cles suivantes..."
```

**Competence d'automatisation :**
```
Utilisateur : "Configurez une campagne email automatisee pour les nouveaux prospects"
IA : [Utilise la competence d'automatisation pour configurer la campagne]
IA : "Votre campagne automatisee est maintenant configuree avec..."
```

### Indicateurs de competences dans le Chat

Lorsqu'une competence est utilisee :
- Le nom de la competence peut apparaitre dans la reponse
- Une petite icone ou un badge indique l'activation de la competence
- L'utilisation de l'outil est affichee dans le flux de conversation

### Demandes d'autorisation des competences

Certaines competences requierent votre autorisation explicite avant leur execution. Il s'agit d'une fonctionnalite de securite pour proteger votre systeme.

**Quand vous verrez des demandes d'autorisation :**

Les competences sont classees selon leur niveau de permission :

| Categorie | Comportement des permissions | Exemples |
|-----------|------------------------------|----------|
| **Pure** | Auto-approuvee, aucune demande | Traitement de texte, calculs, formatage de donnees |
| **Shell** | Demande toujours avant l'execution | Execution de commandes systeme, operations sur les fichiers |
| **Network** | Peut demander pour les appels externes | Web scraping, appels API vers des services externes |
| **Data** | Peut demander pour les acces sensibles | Lecture/ecriture du systeme de fichiers, acces a la base de donnees |

**La demande d'autorisation :**

Lorsqu'une competence necessite une autorisation, vous verrez une boite de dialogue dans l'IA Chat :

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

- **Allow Once** : Accorder l'autorisation pour cette seule execution
- **Allow Always** : Retenir cette decision et auto-approuver les futures requetes de cette competence
- **Deny** : Bloquer cette execution (la competence echouera proprement)

**Gestion des autorisations enregistrees :**

Pour consulter ou modifier les autorisations enregistrees :

1. Accedez a **Settings** -> **AI Skills**
2. Cliquez sur une competence pour voir son statut de permission
3. Activez/desactivez « Always Allow » pour modifier le comportement d'auto-approbation
4. Les competences desactivees ont leurs permissions temporairement suspendues

:::tip Bonne pratique de securite

Commencez par « Allow Once » pour les nouvelles competences. Apres avoir verifie qu'elles fonctionnent correctement et de maniere securisee, vous pouvez passer a « Allow Always » pour plus de commodite.

:::

## Categories de competences

Les competences sont organisees par categorie fonctionnelle :

| Categorie | Objectif | Exemples de competences |
|-----------|----------|------------------------|
| **Web Search** | Recherche sur Internet, analyse de tendances | Moteur de recherche, surveillance des reseaux sociaux |
| **Data Analysis** | Traitement et interpretation des donnees | Analyse CSV, modelisation statistique |
| **Automation** | Taches d'automatisation des flux de travail | Automatisation des emails, planification de taches |
| **Integration** | Connexions aux services externes | CRM, connecteurs API |
| **Content** | Generation et optimisation de contenu | Redaction de blog, optimisation SEO |
| **Pure** | Utilitaires a usage general | Traitement de texte, formatage |

## Depannage

### La competence n'apparait pas dans le Chat

**Causes possibles :**
- La competence est desactivee
- L'installation de la competence est incomplete
- La competence necessite des permissions specifiques

**Solutions :**
1. Verifiez le statut de la competence dans Settings -> Skills
2. Activez la competence si elle est desactivee
3. Reimportez la competence si elle est corrompue
4. Verifiez que le manifeste de la competence contient les permissions requises

### Echec de l'importation

**Causes possibles :**
- Format de fichier zip invalide
- `manifest.json` manquant ou mal formate
- La competence est deja installee
- Telechargement corrompu

**Solutions :**
1. Verifiez l'integrite du fichier zip
2. Verifiez le format et le contenu du fichier manifest.json
3. Desinstallez d'abord la version existante, puis reimportez
4. Telechargez a nouveau le package de la competence

### La competence provoque des erreurs

**Causes possibles :**
- Bug ou incompatibilite de la competence
- Dependances manquantes
- Cle API non configuree

**Solutions :**
1. Desactivez temporairement la competence
2. Consultez la documentation de la competence pour les prerequis
3. Verifiez que toutes les configurations requises sont completes
4. Contactez le developpeur de la competence pour obtenir de l'assistance

### Impossible de desinstaller une competence integree

Les competences integrees sont essentielles au fonctionnement d'aiFetchly et ne peuvent pas etre supprimees. Vous pouvez uniquement les desactiver si elles entrent en conflit avec d'autres competences.

## Bonnes pratiques

### 1. Selection des competences

**Installez uniquement ce dont vous avez besoin :**
- Chaque competence ajoute de la complexite
- Trop de competences peuvent provoquer des conflits
- Commencez par les competences essentielles, ajoutez-en au besoin

### 2. Mises a jour des competences

**Maintenez vos competences a jour :**
- Verifiez regulierement les mises a jour des competences
- Mettez a jour les competences pour les correctifs et les ameliorations
- Testez les competences mises a jour avant une utilisation en production

### 3. Organisation des competences

**Nommez et categorisez judicieusement :**
- Utilisez des noms de competences descriptifs
- Organisez par categorie fonctionnelle
- Documentez l'objectif des competences personnalisees

### 4. Tests

**Testez avant la production :**
- Activez les competences en mode test d'abord
- Verifiez le comportement de la competence dans l'IA Chat
- Verifiez l'absence de conflits avec les competences existantes

### 5. Securite

**Installez uniquement des competences de confiance :**
- Verifiez la source de la competence
- Examinez les permissions de la competence
- Surveillez le comportement de la competence
- Supprimez les competences inutilisees

## Developpement de competences (pour les developpeurs)

### Structure du manifeste

Le fichier `manifest.json` d'une competence doit inclure :

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "category": "automation",
  "permissions": ["web-search", "data-access"],
  "description": "Description de ce que cette competence fait"
}
```

### Packaging

1. Incluez `manifest.json` a la racine
2. Ajoutez les fichiers d'implementation de la competence
3. Incluez les ressources necessaires
4. Compressez le contenu (pas le dossier)
5. Nommez le fichier `skill-name.zip`

## Integration avec d'autres fonctionnalites

### Assistant Marketing IA

Les competences enrichissent les capacites de conversation de l'IA :
- Des reponses plus precises
- Acces a des sources de donnees externes
- Execution automatisee de taches

### Outils MCP

Les competences et les outils MCP peuvent fonctionner ensemble :
- Les competences fournissent une logique specifique au domaine
- Les outils MCP fournissent une connectivite externe
- Combines pour une automatisation puissante

### Bibliotheque de connaissances

Les competences peuvent exploiter votre base de connaissances :
- Recherche de connaissances pendant la conversation
- Application de modeles appris
- Generation de reponses contextuelles

## Prochaines etapes

- [Configurer les parametres systeme](../settings/system-settings)
- [Decouvrir l'Assistant Marketing IA](./ai-marketing-assistant)
- [Configurer la Bibliotheque de connaissances](./knowledge-library)

---

**Pret a etendre les capacites de l'IA ?** Importez votre premiere competence et decouvrez de nouvelles possibilites d'automatisation et d'intelligence.
