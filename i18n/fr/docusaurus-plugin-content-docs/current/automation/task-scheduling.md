---
id: task-scheduling
title: Planification des taches
sidebar_label: Planificateur de taches
description: Automatisez vos flux de travail avec le puissant systeme de planification de taches de aiFetchly.
---

# Planification des taches

Le planificateur de taches de aiFetchly vous permet d'automatiser vos flux de travail marketing en executant des taches automatiquement a des moments specifies ou en reponse a d'autres taches. Configurez des recherches recurrentes, des campagnes d'e-mails automatisees et des flux de travail complexes a plusieurs etapes.

## Comprendre la planification

Le planificateur de taches prend en charge trois types de declencheurs de taches :

| Type de declencheur | Description | Cas d'utilisation |
|-------------|-------------|----------|
| **Cron** | Planification basee sur le temps utilisant des expressions cron | Taches recurrentes, travaux quotidiens/hebdomadaires/mensuels |
| **Dependance** | Declenche par l'achevement d'une autre tache | Flux de travail a plusieurs etapes, chaines de taches |
| **Manuel** | Execute uniquement lorsqu'il est declenche manuellement | Taches a la demande, tests |

:::info Tout automatiser

De la generation de prospects aux campagnes d'e-mails, l'automatisation de la planification fait gagner du temps et assure une execution coherente de vos flux de travail marketing.

:::

## Creer une tache planifiee

### Etape 1 : Acceder au planificateur

1. Cliquez sur **Schedule** dans le menu de navigation de gauche
2. Cliquez sur le bouton **New Schedule**

### Etape 2 : Informations de base

Entrez les informations requises suivantes :

#### Nom du planificateur

- **Objectif** : Identifier le planificateur dans votre liste
- **Exemple** : « Recherche Google quotidienne », « Campagne d'e-mails hebdomadaire »
- **Obligatoire** : Oui

#### Type de tache

Selectionnez le type de tache a planifier :

- **Search** : Taches de scraping de moteurs de recherche
- **Email Extract** : Taches d'extraction d'e-mails
- **Bulk Email** : Campagnes d'e-mails marketing
- **Yellow Pages** : Taches de scraping d'annuaires
- **Video Download** : Taches de telechargement de videos

#### ID de tache

- **Objectif** : Lier a l'instance de tache specifique
- **Selection** : Choisissez parmi les taches existantes du type selectionne
- **Obligatoire** : Oui

#### Description

- **Objectif** : Fournir du contexte sur l'objectif du planificateur
- **Exemple** : « Recherche quotidienne de nouvelles agences marketing dans les villes cibles »
- **Facultatif** : Oui

### Etape 3 : Configurer le declencheur

#### Planification Cron (basee sur le temps)

Activez **Cron** et configurez le planificateur :

**Options predefinies :**
- Chaque minute
- Chaque heure
- Quotidien (minuit)
- Hebdomadaire (dimanche minuit)
- Mensuel (1er du mois, minuit)
- Toutes les 15 minutes
- Toutes les 30 minutes
- Toutes les 2 heures
- Toutes les 6 heures
- Toutes les 12 heures
- Jours ouvrables 9h
- Weekends 10h

**Generateur Cron personnalise :**

| Champ | Options | Description |
|-------|---------|-------------|
| **Minutes** | `*/5`, `*/15`, `*/30` ou minutes specifiques | Toutes les 5/15/30 min ou specifique |
| **Heures** | `*/2`, `*/6`, `*/12` ou heures specifiques | Toutes les 2/6/12 heures ou specifique |
| **Jours** | `*/2` ou jours specifiques | Tous les 2 jours ou specifique |
| **Mois** | `*/3`, `*/6` ou mois specifiques | Tous les 3/6 mois ou specifique |
| **Jours de la semaine** | `1-5` (jours ouvres), `0,6` (weekends) ou specifique | Jours ouvres, weekends ou specifique |

**Format d'expression Cron :**
```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
* * * * *
```

**Exemples :**
```
0 9 * * 1-5      # Jours ouvrables a 9h00
*/30 * * * *     # Toutes les 30 minutes
0 0 * * 1        # Chaque lundi a minuit
0 9,15 * * *     # Quotidien a 9h00 et 15h00
0 0 1 * *        # Le 1er de chaque mois a minuit
```

**Prochaine execution :**
- Le systeme calcule et affiche automatiquement l'heure de la prochaine execution
- Utile pour verifier votre expression cron

#### Planification par dependance (basee sur les taches)

Activez **Dependency** pour declencher cette tache lorsqu'une autre tache est terminee.

**Configuration :**

1. **Planificateur parent** : Selectionnez le planificateur qui declenchera cette tache
2. **Condition de dependance** :
   - **On Success** : Executer uniquement si la tache parente reussit
   - **On Completion** : Executer apres l'achevement de la tache parente (succes ou echec)
   - **On Failure** : Executer uniquement si la tache parente echoue

3. **Delai (minutes)** : Temps d'attente apres l'achevement de la tache parente
   - `0` minutes : Executer immediatement
   - `5` minutes : Attendre 5 minutes avant de commencer
   - `60` minutes : Attendre 1 heure avant de commencer

**Cas d'utilisation :**
- **E-mail apres extraction** : Extraire les e-mails, puis envoyer la campagne une fois termine
- **Analyse apres scraping** : Scraper les donnees, puis lancer une analyse IA
- **Campagnes multi-etapes** : Prise de contact initiale → Suivi 1 → Suivi 2

:::tip Chaines de dependance

Vous pouvez creer des chaines de dependance a plusieurs niveaux :
- Tache A (Cron) → Tache B (Dependance) → Tache C (Dependance)

Cela cree des flux de travail automatises puissants.

:::

#### Execution manuelle

Activez **Manual** pour executer les taches uniquement lorsqu'elles sont declenchees :

- Pas de planification automatique
- Execution a la demande via le bouton « Run Now »
- Utile pour les tests ou les taches peu frequentes

### Etape 4 : Statut actif

Basculez le statut du planificateur :
- **Active** : Le planificateur s'executera selon les parametres du declencheur
- **Inactive** : Le planificateur est desactive et ne s'executera pas

### Etape 5 : Enregistrer le planificateur

Cliquez sur **Save** pour creer le planificateur. Vous pouvez :
- **Edit** (modifier) le planificateur ulterieurement
- **Enable/Disable** (activer/desactiver) selon vos besoins
- **Run Now** pour tester immediatement

## Gestion des taches planifiees

### Afficher la liste des planificateurs

Naviguez vers **Schedule** pour voir toutes vos taches planifiees.

**Apercu des planificateurs :**
- **Carte de statut** : Affiche le nombre total de planificateurs actifs, inactifs et en pause
- **Filtres** : Recherche par nom, statut, type de tache, type de declencheur

### Tableau des planificateurs

La liste des planificateurs affiche :

| Colonne | Description |
|--------|-------------|
| **Name** | Nom du planificateur avec indicateur de type de tache |
| **Status** | Active (vert), Inactive (gris), Paused (jaune) |
| **Trigger Type** | Cron, Dependency ou Manual |
| **Schedule** | Expression cron ou description de dependance |
| **Next Run** | Prochaine heure d'execution avec compte a rebours |
| **Last Run** | Execution la plus recente avec temps ecoule |
| **Executions** | Nombre de succes / Nombre d'echecs |
| **Actions** | Modifier, Supprimer, Pause/Reprendre, Executer maintenant |

### Actions du planificateur

| Action | Description | Disponible quand |
|--------|-------------|----------------|
| **Edit** | Modifier la configuration du planificateur | Toujours |
| **Delete** | Supprimer le planificateur | Toujours |
| **Enable** | Activer un planificateur inactif | Planificateurs inactifs |
| **Disable** | Desactiver un planificateur | Planificateurs actifs |
| **Pause** | Suspendre temporairement l'execution | Planificateurs actifs |
| **Resume** | Reprendre un planificateur en pause | Planificateurs en pause |
| **Run Now** | Executer immediatement | Toujours |

## Surveillance de l'execution

### Afficher l'historique d'execution

1. Cliquez sur **View Details** sur un planificateur
2. Consultez le tableau de l'historique d'execution

**Informations d'execution :**

| Colonne | Description |
|--------|-------------|
| **Start Time** | Quand l'execution a commence |
| **End Time** | Quand l'execution s'est terminee (ou « Running... ») |
| **Duration** | Combien de temps l'execution a pris (ou compteur en direct) |
| **Status** | Success (vert), Failed (rouge), Running (bleu) |
| **Result** | Resume des resultats d'execution |
| **Error** | Message d'erreur (si l'execution a echoue) |
| **Actions** | Voir les details, annuler l'execution en cours |

### Statistiques d'execution

La vue detaillee affiche :

- **Taux de reussite** : Pourcentage d'executions reussies
- **Duree moyenne** : Temps d'execution typique
- **Executions totales** : Nombre global et repartition
- **Derniere erreur** : Message d'echec le plus recent
- **Prochaine execution** : Compte a rebours avant la prochaine execution

### Surveillance en temps reel

Pour les taches en cours d'execution :
- **Duree en direct** : Le compteur affiche le temps ecoule
- **Bouton Annuler** : Arreter l'execution si necessaire
- **Actualisation automatique** : Mise a jour du statut toutes les quelques secondes

## Modeles de planification courants

### Modele 1 : Generation de prospects quotidienne

**Planificateur** : Chaque jour ouvrable a 9h00
```
Cron: 0 9 * * 1-5
Task: Search Engine Scraping
```

**Cas d'utilisation** : De nouveaux prospects chaque matin pour votre equipe commerciale.

### Modele 2 : Surveillance horaire

**Planificateur** : Chaque heure pendant les heures de bureau
```
Cron: 0 9-17 * * 1-5
Task: Search / Yellow Pages
```

**Cas d'utilisation** : Surveiller les nouvelles annonces commerciales pendant les heures de travail.

### Modele 3 : Campagne hebdomadaire

**Planificateur** : Chaque lundi a 10h00
```
Cron: 0 10 * * 1
Task: Bulk Email Sending
```

**Cas d'utilisation** : Newsletter hebdomadaire ou campagne de prospection.

### Modele 4 : Flux de travail a plusieurs etapes

**Tache A** (Cron) : Quotidien a 9h00 - Rechercher des prospects
**Tache B** (Dependance) : Apres le succes de A - Extraire les e-mails
**Tache C** (Dependance) : Apres le succes de B (delai de 30 min) - Envoyer les e-mails

**Cas d'utilisation** : Pipeline automatise de generation de prospects et de prospection.

### Modele 5 : Taches de maintenance

**Planificateur** : Chaque dimanche a 3h00
```
Cron: 0 3 * * 0
Task: Data cleanup or backup
```

**Cas d'utilisation** : Maintenance de routine pendant les periodes de faible trafic.

## Bonnes pratiques

### 1. Conception du planificateur

**Eviter les chevauchements :**
- S'assurer que les taches se terminent avant la prochaine execution planifiee
- Prendre en compte le temps d'execution moyen lors de la definition de la frequence
- Utiliser les dependances pour sequencer les taches qui se chevauchent

**Heures creuses :**
- Planifier les taches gourmandes en ressources pendant les heures creuses
- Eviter la concurrence avec l'activite des utilisateurs
- Prendre en compte les fuseaux horaires pour les operations mondiales

**Temps tampon :**
- Ajouter un tampon entre les taches dependantes
- Prendre en compte les temps d'execution variables
- Prevenir les retards en cascade

### 2. Gestion des erreurs

**Surveiller les echecs :**
- Verifier regulierement l'historique d'execution
- Investiguer les echecs repetes
- Ajuster les planificateurs ou les taches si necessaire

**Configurer des alertes :**
- Examiner les planificateurs chaque semaine
- Verifier les taches bloquees ou en pause
- Verifier que les dependances se declenchent correctement

**Degradation progressive :**
- Utiliser les dependances « On Completion » pour continuer la chaine meme si une tache echoue
- Creer des planificateurs alternatifs pour les taches critiques
- Documenter les procedures d'escalade

### 3. Gestion des ressources

**Taches concurrentes :**
- Eviter de planifier trop de taches simultanement
- Prendre en compte les ressources systeme (CPU, memoire, reseau)
- Decaler les taches similaires pour eviter les conflits

**Rotation des proxies :**
- S'assurer qu'il y a suffisamment de proxies pour les taches planifiees concurrentes
- Repartir la charge sur le pool de proxies
- Surveiller la sante des proxies pour les taches planifiees

### 4. Tests

**Tester les planificateurs :**
- Utiliser « Run Now » pour tester avant la planification
- Verifier d'abord avec une execution unique
- Consulter les journaux pour tout probleme

**Valider les expressions Cron :**
- Utiliser l'apercu « Next Run Time » pour verifier
- Tester d'abord avec des intervalles plus courts
- Confirmer que les parametres de fuseau horaire sont corrects

**Tester les dependances :**
- Verifier que les taches parentes se terminent avec succes
- Tester les parametres de delai
- S'assurer que les chaines fonctionnent comme prevu

### 5. Documentation

**Nommer clairement les planificateurs :**
- Noms descriptifs avec objectif et frequence
- Inclure le type de tache et la cible
- Exemple : « Recherche Google quotidienne - Agences marketing »

**Utiliser les descriptions :**
- Documenter l'objectif et les resultats attendus
- Noter les dependances et les relations
- Inclure les considerations speciales

**Etiqueter les objectifs des taches :**
- Taguer ou categoriser les planificateurs connexes
- Grouper par projet ou campagne
- Faciliter l'identification

## Depannage

### Le planificateur ne s'execute pas

**Causes possibles :**
- Le planificateur est inactif ou en pause
- L'expression cron est mal configuree
- Le service du planificateur ne fonctionne pas
- Problemes d'heure systeme/fuseau horaire

**Solutions :**
1. Verifier que le statut est « Active »
2. Verifier la syntaxe de l'expression cron
3. Confirmer que le service du planificateur fonctionne
4. Verifier l'heure systeme et les parametres de fuseau horaire
5. Consulter les journaux d'execution pour les erreurs

### La tache s'execute trop frequemment

**Causes possibles :**
- L'expression cron est incorrecte
- Plusieurs planificateurs pour la meme tache
- Mauvaise comprehension de la syntaxe cron

**Solutions :**
1. Examiner attentivement l'expression cron
2. Verifier s'il y a des planificateurs en double
3. Utiliser l'apercu « Next Run Time » pour verifier
4. Tester d'abord avec des intervalles plus longs

### Les dependances ne se declenchent pas

**Causes possibles :**
- La tache parente ne se termine pas
- Mauvaise condition de dependance
- Delai trop long ou trop court

**Solutions :**
1. Verifier l'historique d'execution de la tache parente
2. Verifier que la condition de dependance correspond au comportement souhaite
3. Ajuster les parametres de delai
4. Verifier les dependances circulaires

### Les taches prennent trop de temps

**Causes possibles :**
- La configuration de la tache est trop agressive
- Ressources systeme insuffisantes
- Goulots d'etranglement reseau

**Solutions :**
1. Reduire la portee de la tache (pages, concurrence, etc.)
2. Planifier pendant les heures creuses
3. Augmenter l'intervalle entre les executions
4. Verifier les performances du systeme

### L'historique d'execution ne s'affiche pas

**Causes possibles :**
- La tache n'a jamais ete executee
- L'historique a ete efface
- Problemes de base de donnees

**Solutions :**
1. Executer la tache manuellement pour tester
2. Verifier si la tache a deja ete executee
3. Verifier la connectivite de la base de donnees
4. Redemarrer le service du planificateur si necessaire

## Flux de travail avances

### Flux de travail 1 : Pipeline automatise de generation de prospects

**Planificateur 1** : Recherche quotidienne
```
Cron: 0 9 * * 1-5 (Weekdays 9 AM)
Task: Google Search for "marketing agencies [city]"
```

**Planificateur 2** : Extraction d'e-mails (dependance)
```
Trigger: After Schedule 1 succeeds
Delay: 0 minutes
Task: Extract emails from Schedule 1 results
```

**Planificateur 3** : Campagne d'e-mails (dependance)
```
Trigger: After Schedule 2 completes
Delay: 60 minutes (allow time for extraction)
Task: Send welcome email campaign
```

**Resultat** : Generation de prospects et prospection quotidiennes automatisees.

### Flux de travail 2 : Maintenance hebdomadaire

**Planificateur 1** : Nettoyage de la base de donnees
```
Cron: 0 3 * * 0 (Sunday 3 AM)
Task: Remove old completed tasks
```

**Planificateur 2** : Verification de sante des proxies (dependance)
```
Trigger: After Schedule 1 completes
Task: Test all proxies and remove failed
```

**Planificateur 3** : Generation de rapports (dependance)
```
Trigger: After Schedule 2 completes
Task: Generate weekly usage report
```

**Resultat** : Maintenance et rapports hebdomadaires automatises.

### Flux de travail 3 : Surveillance multiregionale

**Planificateur 1** : Surveillance Est des Etats-Unis
```
Cron: 0 */2 * * * (Every 2 hours)
Task: Search US East keywords
```

**Planificateur 2** : Surveillance Ouest des Etats-Unis
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search US West keywords
```

**Planificateur 3** : Surveillance Europe
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search European keywords
```

**Resultat** : Surveillance mondiale continue avec des planificateurs decalages.

## Integration avec d'autres fonctionnalites

Le planificateur de taches s'integre avec :

- **[Moteurs de recherche](../lead-generation/search-engines)** : Planifier des recherches recurrentes
- **[Extraction de contacts](../lead-generation/contact-extraction)** : Extraction automatique apres les recherches
- **[Pages Jaunes](../lead-generation/yellow-pages)** : Scraping d'annuaires regulier
- **[Envoi d'e-mails en lot](../lead-generation/batch-email-sending)** : Campagnes automatisees

## Prochaines etapes

Maintenant que vous comprenez la planification :

- [Configurer les parametres systeme](../settings/system-settings)
- [Consulter le manuel utilisateur complet](../getting-started/introduction)

---

**Pret a automatiser ?** Commencez par planifier une simple tache de recherche quotidienne, puis construisez progressivement des flux de travail automatises plus complexes a mesure que vous vous familiarisez avec le systeme.
