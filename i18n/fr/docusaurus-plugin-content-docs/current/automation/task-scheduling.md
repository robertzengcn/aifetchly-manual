---
id: task-scheduling
title: Planification des tâches
sidebar_label: Planificateur de tâches
description: Automatisez vos flux de travail avec le puissant système de planification de tâches de aiFetchly.
---

# Planification des tâches

Le planificateur de tâches de aiFetchly vous permet d'automatiser vos flux de travail marketing en exécutant des tâches automatiquement à des moments spécifiés ou en réponse à d'autres tâches. Configurez des recherches récurrentes, des campagnes d'e-mails automatisées et des flux de travail complexes à plusieurs étapes.

## Comprendre la planification

Le planificateur de tâches prend en charge trois types de déclencheurs de tâches :

| Type de déclencheur | Description | Cas d'utilisation |
|-------------|-------------|----------|
| **Cron** | Planification basée sur le temps utilisant des expressions cron | Tâches récurrentes, travaux quotidiens/hebdomadaires/mensuels |
| **Dépendance** | Déclenché par l'achèvement d'une autre tâche | Flux de travail à plusieurs étapes, chaînes de tâches |
| **Manuel** | Exécuté uniquement lorsqu'il est déclenché manuellement | Tâches à la demande, tests |

:::info Tout automatiser

De la génération de prospects aux campagnes d'e-mails, l'automatisation de la planification fait gagner du temps et assure une exécution cohérente de vos flux de travail marketing.

:::

## Créer une tâche planifiée

### Étape 1 : Accéder au planificateur

1. Cliquez sur **Schedule** dans le menu de navigation de gauche
2. Cliquez sur le bouton **New Schedule**

### Étape 2 : Informations de base

Entrez les informations requises suivantes :

#### Nom du planificateur

- **Objectif** : Identifier le planificateur dans votre liste
- **Exemple** : « Recherche Google quotidienne », « Campagne d'e-mails hebdomadaire »
- **Obligatoire** : Oui

#### Type de tâche

Sélectionnez le type de tâche à planifier :

- **Search** : Tâches de information organization de moteurs de recherche
- **Email Extract** : Tâches d'profile insights d'e-mails
- **Outreach Campaign** : Campagnes d'e-mails marketing
- **Directory Assistant** : Tâches de information organization d'annuaires
- **Video Download** : Tâches de téléchargement de vidéos

#### ID de tâche

- **Objectif** : Lier à l'instance de tâche spécifique
- **Sélection** : Choisissez parmi les tâches existantes du type sélectionné
- **Obligatoire** : Oui

#### Description

- **Objectif** : Fournir du contexte sur l'objectif du planificateur
- **Exemple** : « Recherche quotidienne de nouvelles agences marketing dans les villes cibles »
- **Facultatif** : Oui

### Étape 3 : Configurer le déclencheur

#### Planification Cron (basée sur le temps)

Activez **Cron** et configurez le planificateur :

**Options prédéfinies :**
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

**Générateur Cron personnalisé :**

| Champ | Options | Description |
|-------|---------|-------------|
| **Minutes** | `*/5`, `*/15`, `*/30` ou minutes spécifiques | Toutes les 5/15/30 min ou spécifique |
| **Heures** | `*/2`, `*/6`, `*/12` ou heures spécifiques | Toutes les 2/6/12 heures ou spécifique |
| **Jours** | `*/2` ou jours spécifiques | Tous les 2 jours ou spécifique |
| **Mois** | `*/3`, `*/6` ou mois spécifiques | Tous les 3/6 mois ou spécifique |
| **Jours de la semaine** | `1-5` (jours ouvrés), `0,6` (weekends) ou spécifique | Jours ouvrés, weekends ou spécifique |

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
0 9 * * 1-5      # Jours ouvrables à 9h00
*/30 * * * *     # Toutes les 30 minutes
0 0 * * 1        # Chaque lundi à minuit
0 9,15 * * *     # Quotidien à 9h00 et 15h00
0 0 1 * *        # Le 1er de chaque mois à minuit
```

**Prochaine exécution :**
- Le système calcule et affiche automatiquement l'heure de la prochaine exécution
- Utile pour vérifier votre expression cron

#### Planification par dépendance (basée sur les tâches)

Activez **Dependency** pour déclencher cette tâche lorsqu'une autre tâche est terminée.

**Configuration :**

1. **Planificateur parent** : Sélectionnez le planificateur qui déclenchera cette tâche
2. **Condition de dépendance** :
   - **On Success** : Exécuter uniquement si la tâche parente réussit
   - **On Completion** : Exécuter après l'achèvement de la tâche parente (succès ou échec)
   - **On Failure** : Exécuter uniquement si la tâche parente échoue

3. **Délai (minutes)** : Temps d'attente après l'achèvement de la tâche parente
   - `0` minutes : Exécuter immédiatement
   - `5` minutes : Attendre 5 minutes avant de commencer
   - `60` minutes : Attendre 1 heure avant de commencer

**Cas d'utilisation :**
- **E-mail après profile insights** : Extraire les e-mails, puis envoyer la campagne une fois terminé
- **Analyse après information organization** : Assistant les données, puis lancer une analyse IA
- **Campagnes multi-étapes** : Prise de contact initiale → Suivi 1 → Suivi 2

:::tip Chaînes de dépendance

Vous pouvez créer des chaînes de dépendance à plusieurs niveaux :
- Tâche A (Cron) → Tâche B (Dépendance) → Tâche C (Dépendance)

Cela crée des flux de travail automatisés puissants.

:::

#### Exécution manuelle

Activez **Manual** pour exécuter les tâches uniquement lorsqu'elles sont déclenchées :

- Pas de planification automatique
- Exécution à la demande via le bouton « Run Now »
- Utile pour les tests ou les tâches peu fréquentes

### Étape 4 : Statut actif

Basculez le statut du planificateur :
- **Active** : Le planificateur s'exécutera selon les paramètres du déclencheur
- **Inactive** : Le planificateur est désactivé et ne s'exécutera pas

### Étape 5 : Enregistrer le planificateur

Cliquez sur **Save** pour créer le planificateur. Vous pouvez :
- **Edit** (modifier) le planificateur ultérieurement
- **Enable/Disable** (activer/désactiver) selon vos besoins
- **Run Now** pour tester immédiatement

## Gestion des tâches planifiées

### Afficher la liste des planificateurs

Naviguez vers **Schedule** pour voir toutes vos tâches planifiées.

**Aperçu des planificateurs :**
- **Carte de statut** : Affiche le nombre total de planificateurs actifs, inactifs et en pause
- **Filtres** : Recherche par nom, statut, type de tâche, type de déclencheur

### Tableau des planificateurs

La liste des planificateurs affiche :

| Colonne | Description |
|--------|-------------|
| **Name** | Nom du planificateur avec indicateur de type de tâche |
| **Status** | Active (vert), Inactive (gris), Paused (jaune) |
| **Trigger Type** | Cron, Dependency ou Manual |
| **Schedule** | Expression cron ou description de dépendance |
| **Next Run** | Prochaine heure d'exécution avec compte à rebours |
| **Last Run** | Exécution la plus récente avec temps écoulé |
| **Executions** | Nombre de succès / Nombre d'échecs |
| **Actions** | Modifier, Supprimer, Pause/Reprendre, Exécuter maintenant |

### Actions du planificateur

| Action | Description | Disponible quand |
|--------|-------------|----------------|
| **Edit** | Modifier la configuration du planificateur | Toujours |
| **Delete** | Supprimer le planificateur | Toujours |
| **Enable** | Activer un planificateur inactif | Planificateurs inactifs |
| **Disable** | Désactiver un planificateur | Planificateurs actifs |
| **Pause** | Suspendre temporairement l'exécution | Planificateurs actifs |
| **Resume** | Reprendre un planificateur en pause | Planificateurs en pause |
| **Run Now** | Exécuter immédiatement | Toujours |

## Surveillance de l'exécution

### Afficher l'historique d'exécution

1. Cliquez sur **View Details** sur un planificateur
2. Consultez le tableau de l'historique d'exécution

**Informations d'exécution :**

| Colonne | Description |
|--------|-------------|
| **Start Time** | Quand l'exécution a commencé |
| **End Time** | Quand l'exécution s'est terminée (ou « Running... ») |
| **Duration** | Combien de temps l'exécution a pris (ou compteur en direct) |
| **Status** | Success (vert), Failed (rouge), Running (bleu) |
| **Result** | Résumé des résultats d'exécution |
| **Error** | Message d'erreur (si l'exécution a échoué) |
| **Actions** | Voir les détails, annuler l'exécution en cours |

### Statistiques d'exécution

La vue détaillée affiche :

- **Taux de réussite** : Pourcentage d'exécutions réussies
- **Durée moyenne** : Temps d'exécution typique
- **Exécutions totales** : Nombre global et répartition
- **Dernière erreur** : Message d'échec le plus récent
- **Prochaine exécution** : Compte à rebours avant la prochaine exécution

### Surveillance en temps réel

Pour les tâches en cours d'exécution :
- **Durée en direct** : Le compteur affiche le temps écoulé
- **Bouton Annuler** : Arrêter l'exécution si nécessaire
- **Actualisation automatique** : Mise à jour du statut toutes les quelques secondes

## Modèles de planification courants

### Modèle 1 : Génération de prospects quotidienne

**Planificateur** : Chaque jour ouvrable à 9h00
```
Cron: 0 9 * * 1-5
Task: Market Insight Explorer
```

**Cas d'utilisation** : De nouveaux prospects chaque matin pour votre équipe commerciale.

### Modèle 2 : Surveillance horaire

**Planificateur** : Chaque heure pendant les heures de bureau
```
Cron: 0 9-17 * * 1-5
Task: Search / Yellow Pages
```

**Cas d'utilisation** : Surveiller les nouvelles annonces commerciales pendant les heures de travail.

### Modèle 3 : Campagne hebdomadaire

**Planificateur** : Chaque lundi à 10h00
```
Cron: 0 10 * * 1
Task: Outreach Campaign Sending
```

**Cas d'utilisation** : Newsletter hebdomadaire ou campagne de prospection.

### Modèle 4 : Flux de travail à plusieurs étapes

**Tâche A** (Cron) : Quotidien à 9h00 - Rechercher des prospects
**Tâche B** (Dépendance) : Après le succès de A - Extraire les e-mails
**Tâche C** (Dépendance) : Après le succès de B (délai de 30 min) - Envoyer les e-mails

**Cas d'utilisation** : Pipeline automatisé de génération de prospects et de prospection.

### Modèle 5 : Tâches de maintenance

**Planificateur** : Chaque dimanche à 3h00
```
Cron: 0 3 * * 0
Task: Data cleanup or backup
```

**Cas d'utilisation** : Maintenance de routine pendant les périodes de faible trafic.

## Bonnes pratiques

### 1. Conception du planificateur

**Éviter les chevauchements :**
- S'assurer que les tâches se terminent avant la prochaine exécution planifiée
- Prendre en compte le temps d'exécution moyen lors de la définition de la fréquence
- Utiliser les dépendances pour séquencer les tâches qui se chevauchent

**Heures creuses :**
- Planifier les tâches gourmandes en ressources pendant les heures creuses
- Éviter la concurrence avec l'activité des utilisateurs
- Prendre en compte les fuseaux horaires pour les opérations mondiales

**Temps tampon :**
- Ajouter un tampon entre les tâches dépendantes
- Prendre en compte les temps d'exécution variables
- Prévenir les retards en cascade

### 2. Gestion des erreurs

**Surveiller les échecs :**
- Vérifier régulièrement l'historique d'exécution
- Investiguer les échecs répétés
- Ajuster les planificateurs ou les tâches si nécessaire

**Configurer des alertes :**
- Examiner les planificateurs chaque semaine
- Vérifier les tâches bloquées ou en pause
- Vérifier que les dépendances se déclenchent correctement

**Dégradation progressive :**
- Utiliser les dépendances « On Completion » pour continuer la chaîne même si une tâche échoue
- Créer des planificateurs alternatifs pour les tâches critiques
- Documenter les procédures d'escalade

### 3. Gestion des ressources

**Tâches concurrentes :**
- Éviter de planifier trop de tâches simultanément
- Prendre en compte les ressources système (CPU, mémoire, réseau)
- Décaler les tâches similaires pour éviter les conflits

**Rotation des proxies :**
- S'assurer qu'il y a suffisamment de proxies pour les tâches planifiées concurrentes
- Répartir la charge sur le pool de proxies
- Surveiller la santé des proxies pour les tâches planifiées

### 4. Tests

**Tester les planificateurs :**
- Utiliser « Run Now » pour tester avant la planification
- Vérifier d'abord avec une exécution unique
- Consulter les journaux pour tout problème

**Valider les expressions Cron :**
- Utiliser l'aperçu « Next Run Time » pour vérifier
- Tester d'abord avec des intervalles plus courts
- Confirmer que les paramètres de fuseau horaire sont corrects

**Tester les dépendances :**
- Vérifier que les tâches parentes se terminent avec succès
- Tester les paramètres de délai
- S'assurer que les chaînes fonctionnent comme prévu

### 5. Documentation

**Nommer clairement les planificateurs :**
- Noms descriptifs avec objectif et fréquence
- Inclure le type de tâche et la cible
- Exemple : « Recherche Google quotidienne - Agences marketing »

**Utiliser les descriptions :**
- Documenter l'objectif et les résultats attendus
- Noter les dépendances et les relations
- Inclure les considérations spéciales

**Étiqueter les objectifs des tâches :**
- Taguer ou catégoriser les planificateurs connexes
- Grouper par projet ou campagne
- Faciliter l'identification

## Dépannage

### Le planificateur ne s'exécute pas

**Causes possibles :**
- Le planificateur est inactif ou en pause
- L'expression cron est mal configurée
- Le service du planificateur ne fonctionne pas
- Problèmes d'heure système/fuseau horaire

**Solutions :**
1. Vérifier que le statut est « Active »
2. Vérifier la syntaxe de l'expression cron
3. Confirmer que le service du planificateur fonctionne
4. Vérifier l'heure système et les paramètres de fuseau horaire
5. Consulter les journaux d'exécution pour les erreurs

### La tâche s'exécute trop fréquemment

**Causes possibles :**
- L'expression cron est incorrecte
- Plusieurs planificateurs pour la même tâche
- Mauvaise compréhension de la syntaxe cron

**Solutions :**
1. Examiner attentivement l'expression cron
2. Vérifier s'il y a des planificateurs en double
3. Utiliser l'aperçu « Next Run Time » pour vérifier
4. Tester d'abord avec des intervalles plus longs

### Les dépendances ne se déclenchent pas

**Causes possibles :**
- La tâche parente ne se termine pas
- Mauvaise condition de dépendance
- Délai trop long ou trop court

**Solutions :**
1. Vérifier l'historique d'exécution de la tâche parente
2. Vérifier que la condition de dépendance correspond au comportement souhaité
3. Ajuster les paramètres de délai
4. Vérifier les dépendances circulaires

### Les tâches prennent trop de temps

**Causes possibles :**
- La configuration de la tâche est trop agressive
- Ressources système insuffisantes
- Goulots d'étranglement réseau

**Solutions :**
1. Réduire la portée de la tâche (pages, concurrence, etc.)
2. Planifier pendant les heures creuses
3. Augmenter l'intervalle entre les exécutions
4. Vérifier les performances du système

### L'historique d'exécution ne s'affiche pas

**Causes possibles :**
- La tâche n'a jamais été exécutée
- L'historique a été effacé
- Problèmes de base de données

**Solutions :**
1. Exécuter la tâche manuellement pour tester
2. Vérifier si la tâche a déjà été exécutée
3. Vérifier la connectivité de la base de données
4. Redémarrer le service du planificateur si nécessaire

## Flux de travail avancés

### Flux de travail 1 : Pipeline automatisé de génération de prospects

**Planificateur 1** : Recherche quotidienne
```
Cron: 0 9 * * 1-5 (Weekdays 9 AM)
Task: Google Search for "marketing agencies [city]"
```

**Planificateur 2** : Profile Insights d'e-mails (dépendance)
```
Trigger: After Schedule 1 succeeds
Delay: 0 minutes
Task: Open in Contact Profile Insights from Schedule 1 results
```

**Planificateur 3** : Campagne d'e-mails (dépendance)
```
Trigger: After Schedule 2 completes
Delay: 60 minutes (allow time for profile insights)
Task: Send welcome email campaign
```

**Résultat** : Génération de prospects et prospection quotidiennes automatisées.

### Flux de travail 2 : Maintenance hebdomadaire

**Planificateur 1** : Nettoyage de la base de données
```
Cron: 0 3 * * 0 (Sunday 3 AM)
Task: Remove old completed tasks
```

**Planificateur 2** : Vérification de santé des proxies (dépendance)
```
Trigger: After Schedule 1 completes
Task: Test all proxies and remove failed
```

**Planificateur 3** : Génération de rapports (dépendance)
```
Trigger: After Schedule 2 completes
Task: Generate weekly usage report
```

**Résultat** : Maintenance et rapports hebdomadaires automatisés.

### Flux de travail 3 : Surveillance multirégionale

**Planificateur 1** : Surveillance Est des États-Unis
```
Cron: 0 */2 * * * (Every 2 hours)
Task: Search US East keywords
```

**Planificateur 2** : Surveillance Ouest des États-Unis
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search US West keywords
```

**Planificateur 3** : Surveillance Europe
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search European keywords
```

**Résultat** : Surveillance mondiale continue avec des planificateurs décalés.

## Intégration avec d'autres fonctionnalités

Le planificateur de tâches s'intègre avec :

- **[Moteurs de recherche](../lead-generation/search-engines)** : Planifier des recherches récurrentes
- **[Profile Insights de contacts](../lead-generation/contact-extraction)** : Profile Insights automatique après les recherches
- **[Pages Jaunes](../lead-generation/yellow-pages)** : Information Organization d'annuaires régulier
- **[Envoi d'e-mails en lot](../lead-generation/batch-email-sending)** : Campagnes automatisées

## Prochaines étapes

Maintenant que vous comprenez la planification :

- [Configurer les paramètres système](../settings/system-settings)
- [Consulter le manuel utilisateur complet](../getting-started/introduction)

---

**Prêt à automatiser ?** Commencez par planifier une simple tâche de recherche quotidienne, puis construisez progressivement des flux de travail automatisés plus complexes à mesure que vous vous familiarisez avec le système.
