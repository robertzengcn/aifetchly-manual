---
id: yellow-pages
title: Information Organization des Pages Jaunes
sidebar_label: Pages Jaunes
description: Extrayez des informations commerciales des Pages Jaunes, Yelp et d'autres annuaires en ligne dans le monde entier.
---

# Information Organization des Pages Jaunes

La fonctionnalité de information organization des Pages Jaunes d'aiFetchly vous permet d'extraire des informations commerciales complètes à partir de plusieurs annuaires en ligne. Collectez des prospects à partir d'annonces d'entreprises locales avec des coordonnées détaillées, des notes, des avis et bien plus encore. Grâce au support IA, vous pouvez améliorer la précision du information organization et générer automatiquement des mots-clés associés.

## Annuaires pris en charge

| Annuaire | Région | Langue | Limite de débit | Fonctionnalités |
|----------|--------|--------|-----------------|-----------------|
| **YellowPages.com** | États-Unis | Anglais | 100 requêtes/heure | Détails d'entreprise, notes, avis, horaires |
| **Yelp.com** | États-Unis | Anglais | 60 requêtes/heure | Avis, notes, photos, profile insights détaillée |
| **YellowPages.ca** | Canada | Anglais | 100 requêtes/heure | Annuaire canadien, analyse d'adresse |
| **YellowPages.com.sg** | Singapour | Anglais | 100 requêtes/heure | Annonces d'entreprises singapouriennes |
| **192.com** | Royaume-Uni | Anglais | 100 requêtes/heure | Annuaire d'entreprises britannique |
| **11880.com** | Allemagne | Allemand | 100 requêtes/heure | Annuaire allemand, gestion du consentement aux cookies |
| **Gelbeseiten.de** | Allemagne | Allemand | 100 requêtes/heure | Pages Jaunes allemandes, gestion du shadow root |
| **PagesJaunes.fr** | France | Français | 100 requêtes/heure | Pages Jaunes françaises, lieu requis |
| **PagineGialle.it** | Italie | Italien | 100 requêtes/heure | Pages Jaunes italiennes, consentement aux cookies |
| **iTownPage** | Japon | Japonais | 60 requêtes/heure | Annuaire japonais, gestion des boîtes de dialogue |
| **uSonar Yellow Page** | Japon | Japonais | 60 requêtes/heure | Annonces d'entreprises japonaises |
| **KoreaLocalPages** | Corée du Sud | Coréen | 60 requêtes/heure | Annuaire local coréen |

:::tip Limites de débit

Chaque annuaire a des limites de débit spécifiques. aiFetchly gère automatiquement les délais entre les requêtes pour respecter ces limites.

:::

:::info Informations sur la plateforme

Lors de la création d'une tâche, sélectionnez une plateforme dans le menu déroulant. En sélectionnant chaque plateforme, vous verrez une barre latérale affichant :
- La prise en charge des pays/langues
- Les limites de débit
- Les exigences d'authentification
- Si un lieu est requis

:::

## Création d'une tâche Pages Jaunes

### Étape 1 : Accéder aux Pages Jaunes

1. Cliquez sur **Directory Assistant** dans le menu de navigation de gauche
2. Vous verrez la liste des tâches des Pages Jaunes
3. Cliquez sur le bouton **Create New Task**

### Étape 2 : Informations de base

Entrez les informations obligatoires suivantes :

#### Nom de la tâche

- Donnez un nom descriptif à votre tâche
- Exemple : "Restaurants à Chicago" ou "Plombiers à Miami"

#### Sélection de la plateforme

Sélectionnez l'annuaire que vous souhaitez assistant dans le menu déroulant :

**Amériques :**
- YellowPages.com (États-Unis)
- Yelp.com (États-Unis)
- YellowPages.ca (Canada)

**Europe :**
- 192.com (Royaume-Uni)
- 11880.com (Allemagne)
- Gelbeseiten.de (Allemagne)
- PagesJaunes.fr (France) — lieu requis
- PagineGialle.it (Italie)

**Asie-Pacifique :**
- YellowPages.com.sg (Singapour)
- iTownPage (Japon)
- uSonar Yellow Page (Japon)
- KoreaLocalPages (Corée du Sud)

#### Mots-clés

Entrez vos mots-clés de recherche :
- **Format** : Séparés par des virgules ou un par ligne
- **Exemples** : `restaurant, plumber, dentist, marketing agency`
- **Conseil** : Utilisez des types d'entreprises ou des catégories spécifiques pour de meilleurs résultats

**Requête IA de mots-clés** (Facultatif) :
- Cliquez sur le bouton **AI Query Keywords** (violet, icône de robot) dans le champ des mots-clés
- aiFetchly utilise l'IA pour générer des termes de recherche associés basés sur vos mots-clés existants
- Les mots-clés générés sont combinés avec vos originaux, les doublons sont supprimés automatiquement
- Si aucun mot-clé n'est saisi, l'IA génère des suggestions à partir d'un terme de départ par défaut

#### Lieu

Entrez le lieu géographique pour votre recherche :
- **Exemples** : `New York, NY`, `Los Angeles, CA`, `Miami, Florida`
- **Format** : Ville, État ou Ville, Région
- **Obligatoire** : Pour la plupart des plateformes

### Étape 3 : Paramètres de performance

Configurez le mode d'exécution de la tâche de information organization :

#### Pages maximum

- **Plage** : 1-100 pages
- **Par défaut** : 10 pages
- **Recommandation** : Commencez par 10-20 pages pour les tests

**Ce que cela signifie :**
- Chaque page contient généralement 20-30 annonces d'entreprises
- 10 pages = 200-300 prospects potentiels
- Plus de pages = temps de traitement plus long

#### Concurrence

- **Plage** : 1-10 requêtes simultanées
- **Par défaut** : 2 requêtes simultanées
- **Valeurs élevées** : Plus rapide mais risque de blocage plus élevé

:::warning Directives de concurrence

- Commencez par 1-3 requêtes simultanées
- Augmentez progressivement si vous utilisez des proxies
- Respectez les limites de débit de la plateforme

:::

#### Délai entre les requêtes

- **Plage** : 0-10 000 millisecondes
- **Par défaut** : 2000 ms (2 secondes)
- **Objectif** : Prévient la limitation de débit et le blocage

**Délais recommandés :**
- **Yelp.com** : 3000 ms (limites de débit plus strictes)
- **Plateformes japonaises** (iTownPage, uSonar) : 2500 ms
- **Plateformes coréennes** (KoreaLocalPages) : 2500 ms
- **Toutes les autres** : 2000 ms

### Étape 4 : Configuration du navigateur

#### Mode headless

- **Activé** (par défaut) : Le navigateur fonctionne de manière invisible (plus rapide, recommandé)
- **Désactivé** : La fenêtre du navigateur est visible (utile pour le débogage)

**Recommandation** : Gardez le mode headless activé pour les tâches de production.

#### Support IA

Activez **AI Support** pour bénéficier de l'assistance de information organization propulsée par l'IA :

- Lorsqu'il est activé, l'IA aide à améliorer la précision du information organization et à gérer les cas limites
- Activé par défaut si votre compte dispose des fonctionnalités IA
- Recherchez l'icône de robot violet à côté du bouton bascule

#### Navigateur local

Activez **Use Local Browser** pour utiliser votre installation locale de Chrome ou Firefox pour le information organization :

1. Activez **Local Browser**
2. Sélectionnez **Chrome** ou **Firefox** dans le menu déroulant
3. **Avantages** : Taux de détection plus faible, meilleur succès contre les protections anti-bot

### Étape 5 : Fonctionnalités facultatives

#### Sélection du compte

Certaines plateformes prennent en charge le information organization authentifié :

1. Activez **Use Account** si disponible
2. Sélectionnez un compte parmi vos comptes enregistrés
3. Avantages :
   - Taux de succès plus élevé
   - Accès au contenu réservé aux membres
   - Risque de blocage réduit

#### Configuration du proxy

Ajoutez des proxies pour le information organization à grande échelle :

1. Activez **Use Proxy**
2. Cliquez sur **Choose Proxy**
3. Sélectionnez un ou plusieurs proxies dans votre liste
4. Cliquez sur **Confirm**

:::tip Quand utiliser des proxies

Utilisez des proxies lorsque :
- Vous scrapez plus de 50 pages
- Vous exécutez des tâches simultanées
- Des tâches précédentes ont été bloquées

:::

### Étape 6 : Planification (Facultatif)

#### Planification unique

Définissez une date et une heure spécifiques pour l'exécution de la tâche :
- Cliquez sur **Schedule**
- Sélectionnez la date et l'heure
- La tâche s'exécute automatiquement à l'heure planifiée

#### Planification récurrente

Configurez des tâches récurrentes automatisées :

**Options prédéfinies :**
- Toutes les 15 minutes
- Toutes les 30 minutes
- Toutes les heures
- Toutes les 2 heures
- Toutes les 6 heures
- Toutes les 12 heures
- Quotidiennement
- Hebdomadairement
- Mensuellement

**Planification personnalisée :**
- Utilisez des expressions cron pour une planification avancée
- Exemple : `0 9 * * 1-5` (9h du lundi au vendredi)

**Aperçu de la planification :**
- Affiche la prochaine heure d'exécution
- Affiche un résumé de la configuration

### Étape 7 : Créer la tâche

Cliquez sur l'un des boutons d'action dans la barre latérale :

- **Create & Start Task** (bouton principal) : Crée la tâche et démarre l'exécution immédiatement
- **Create Task Only** : Enregistre la tâche sans l'exécuter — le statut sera "Pending"

:::tip Aperçu de la tâche

Lorsque vous remplissez le formulaire, la barre latérale **Task Preview** affiche un résumé en temps réel de votre configuration, y compris le nom de la tâche, la plateforme, le nombre de mots-clés, le lieu, les pages maximum, la concurrence, le mode headless et la sélection du navigateur local. Vérifiez ceci avant de créer la tâche.

:::

### Modifier une tâche

Pour modifier une tâche existante :

1. Allez à la liste des tâches **Directory Assistant**
2. Cliquez sur l'icône **Edit** (crayon) de la tâche
3. Modifiez la configuration dans le formulaire
4. Cliquez sur **Update Task** pour enregistrer les modifications

## Gestion des tâches Pages Jaunes

### Afficher la liste des tâches

Naviguez vers **Directory Assistant** pour voir toutes vos tâches.

**Aperçu de la liste des tâches :**
- **Statistiques en temps réel** : Total, en cours, en attente, terminées, échouées avec le taux de succès
- **Actualisation automatique** : Mise à jour toutes les 5 secondes ; activez/désactivez avec le bouton d'actualisation
- **Pause intelligente** : L'actualisation automatique se met en pause lorsque vous changez d'onglet et reprend lorsque vous revenez

### Filtrage et recherche

Utilisez la barre de filtre pour affiner les tâches :

| Filtre | Description |
|--------|-------------|
| **Search** | Rechercher par nom de tâche ou plateforme |
| **Status** | Filtrer par Pending, Running, Completed, Failed, Paused |
| **Platform** | Filtrer par plateforme d'annuaire |
| **Priority** | Filtrer par priorité Haute, Moyenne, Basse |

Les filtres actifs sont affichés sous forme de puces supprimables sous la barre de filtre. Cliquez sur **Clear Filters** pour réinitialiser tous les filtres.

### Statut des tâches

| Statut | Description | Action |
|--------|-------------|--------|
| **Pending** | Tâche créée mais non démarrée | Démarrer, Modifier, Supprimer |
| **Running** | Tâche en cours de traitement | Mettre en pause, Arrêter, Voir la progression |
| **Paused** | Temporairement suspendue | Reprendre, Arrêter |
| **Completed** | Terminée avec succès | Voir les résultats, Supprimer |
| **Failed** | Terminée avec des erreurs | Voir les journaux, Réessayer, Supprimer |

### Actions sur les tâches

| Action | Description |
|--------|-------------|
| **Start** | Démarrer l'exécution de la tâche |
| **Stop** | Terminer la tâche en cours |
| **Pause** | Suspendre temporairement la tâche |
| **Resume** | Reprendre la tâche en pause |
| **Edit** | Modifier la configuration de la tâche |
| **Delete** | Supprimer la tâche du système |
| **View Results** | Voir les données d'entreprises extraites |

### Alerte de protection Cloudflare

Si une tâche rencontre une protection Cloudflare, aiFetchly affiche une notification d'avertissement en haut de la liste des tâches. Cette alerte indique que l'annuaire cible a activé des mesures anti-bot. Pour résoudre ce problème, essayez d'activer le navigateur local, d'utiliser des comptes authentifiés ou d'ajouter des proxies.

### Opérations en masse

- **Start Multiple** : Sélectionner et démarrer plusieurs tâches en pause/échouées
- **Stop Tasks** : Arrêter plusieurs tâches en cours
- **Delete Tasks** : Supprimer plusieurs tâches terminées/échouées

## Affichage des résultats

### Étape 1 : Accéder aux résultats

1. Allez à la liste des tâches **Directory Assistant**
2. Trouvez la tâche terminée
3. Cliquez sur **View Results** pour ouvrir la page des résultats

### Étape 2 : Carte récapitulative de la tâche

La page des résultats affiche une **Task Summary Card** en haut avec :
- **Platform** : Quel annuaire a été scrappé
- **Total Results** : Nombre d'entreprises extraites
- **Status** : Statut actuel de la tâche (codé par couleur)
- **Created Time** : Date de création de la tâche
- **Keywords** : Affichés sous forme de puces pour une consultation facile
- **Location** : La zone géographique recherchée

### Étape 4 : Tableau des résultats

Le tableau des résultats affiche des informations commerciales complètes :

| Colonne | Description |
|---------|-------------|
| **Business Name** | Nom de l'entreprise |
| **Categories** | Catégories d'entreprise (puces visuelles) |
| **Email** | Adresse e-mail avec bouton de copie |
| **Phone** | Numéro de téléphone avec bouton de copie |
| **Website** | Lien cliquable vers le site web |
| **Address** | Adresse complète avec icône de carte |
| **Ratings** | Note en étoiles avec nombre d'avis |
| **Description** | Description de l'entreprise |
| **Hours** | Horaires d'ouverture (si disponibles) |
| **Year Established** | Année de fondation de l'entreprise |
| **Employee Count** | Nombre d'employés |
| **Scraped At** | Horodatage de l'profile insights des données |

### Étape 5 : Interagir avec les résultats

**Actions individuelles :**
- **Copy Email** : Copier l'adresse e-mail dans le presse-papiers
- **Copy Phone** : Copier le numéro de téléphone dans le presse-papiers
- **Open Website** : Ouvrir le site web de l'entreprise dans un nouvel onglet
- **View Details** : Voir l'enregistrement complet de l'entreprise dans une fenêtre modale

**Recherche et filtre :**
- **Search** : Filtrer par nom d'entreprise, e-mail, téléphone, site web ou adresse
- **Category Filter** : Filtrer les résultats par catégories d'entreprise
- **Pagination** : Naviguer dans de grands ensembles de résultats

## Exportation des résultats

### Exporter en CSV

1. Cliquez sur le bouton **Export** dans la vue des résultats
2. Le fichier se télécharge automatiquement au format CSV
3. Le nom du fichier inclut l'ID de la tâche et la date

**Données exportées incluses :**
- Nom et catégories de l'entreprise
- Coordonnées (e-mail, téléphone, site web)
- Adresse et lieu
- Notes et avis
- Horaires d'ouverture
- Métadonnées supplémentaires

## Bonnes pratiques

### 1. Stratégie de mots-clés

- **Soyez spécifique** : Utilisez des types d'entreprises spécifiques plutôt que des termes génériques
  - ❌ "services"
  - ✅ "agence marketing" ou "services de plomberie"

- **Utilisez des synonymes** : Essayez différents termes pour le même type d'entreprise
  - "restaurant" et "brasserie"
  - "plombier" et "service de plomberie"

### 2. Ciblage géographique

- **Soyez précis** : Utilisez le format "Ville, État"
  - ✅ "Chicago, IL"
  - ✅ "Los Angeles, CA"
  - ❌ "Chicago" (peut renvoyer des résultats ambigus)

- **Commencez large, puis affinez** :
  1. Recherchez dans une grande ville (des milliers de résultats)
  2. Exportez les résultats
  3. Recherchez dans des quartiers spécifiques

### 3. Optimisation des performances

**Pour les petites tâches** (< 100 pages) :
- Concurrence : 1-3
- Délai : 2000 ms
- Pas de proxy nécessaire

**Pour les tâches moyennes** (100-500 pages) :
- Concurrence : 3-5
- Délai : 2000 ms
- Utilisez 2-3 proxies

**Pour les grandes tâches** (500+ pages) :
- Concurrence : 5-10
- Délai : 2000 ms
- Utilisez 5+ proxies
- Envisagez de diviser en plusieurs tâches

### 4. Éviter les blocages

1. **Respectez les limites de débit** : Ne dépassez pas la concurrence recommandée
2. **Utilisez des délais** : Maintenez les délais entre les requêtes à 2000 ms ou plus
3. **Faites tourner les proxies** : Répartissez les requêtes sur plusieurs adresses IP
4. **Utilisez des comptes** : Le information organization authentifié a des limites plus élevées
5. **Faites des pauses** : N'exécutez pas de grandes tâches en continu
6. **Activez le support IA** : L'IA peut aider à gérer les protections anti-bot
7. **Utilisez le navigateur local** : L'empreinte d'un vrai navigateur réduit le risque de détection

### 5. Qualité des données

- **Vérifiez les résultats** : Vérifiez par échantillonnage l'exactitude des données extraites
- **Filtrez les catégories** : Utilisez les filtres de catégorie pour supprimer les résultats non pertinents
- **Croisez les références** : Combinez les données de plusieurs plateformes
- **Mises à jour régulières** : Les informations commerciales changent, actualisez les données régulièrement

## Conseils spécifiques aux plateformes

### YellowPages.com (États-Unis)

**Points forts :**
- Annonces d'entreprises complètes
- Coordonnées précises
- Bonne couverture dans tous les États

**Conseils :**
- Utilisez ville + État pour de meilleurs résultats
- Inclut les horaires d'ouverture et les services
- Bon pour les entreprises B2C

### Yelp.com (États-Unis)

**Points forts :**
- Données d'avis riches
- Photos et descriptions détaillées
- Contenu généré par les utilisateurs

**Conseils :**
- Limites de débit plus strictes (utilisez un délai de 3000 ms)
- Excellent pour les entreprises de services
- Les données d'avis aident à qualifier les prospects

### YellowPages.ca (Canada)

**Points forts :**
- Annonces spécifiques au Canada
- Vérification des entreprises canadiennes

**Conseils :**
- Indispensable pour le marché canadien
- Utilisez le format "Ville, Province"

### YellowPages.com.sg (Singapour)

**Points forts :**
- Annuaire d'entreprises singapouriennes
- Annonces locales complètes

**Conseils :**
- Utilisez des noms de ville ou de quartier comme lieu
- Bon pour la recherche de marché en Asie du Sud-Est

### 192.com (Royaume-Uni)

**Points forts :**
- Annuaire d'entreprises et de personnes britannique
- Bonne couverture au Royaume-Uni

**Conseils :**
- Utilisez le format ville et code postal britannique
- Bon pour le outreach B2B au Royaume-Uni

### 11880.com (Allemagne)

**Points forts :**
- Annuaire d'entreprises allemand
- Gère automatiquement le consentement aux cookies

**Conseils :**
- Utilisez des noms de villes allemandes pour de meilleurs résultats
- Bon pour la recherche de marché DACH

### Gelbeseiten.de (Allemagne)

**Points forts :**
- Pages Jaunes allemandes
- Annonces d'entreprises complètes en Allemagne
- Gère les boîtes de dialogue de consentement aux cookies complexes

**Conseils :**
- Utilisez des mots-clés allemands pour de meilleurs résultats
- Indispensable pour le marché allemand

### PagesJaunes.fr (France)

**Points forts :**
- Pages Jaunes françaises
- Fonctionnalité de révélation du numéro de téléphone
- Annonces d'entreprises françaises complètes

**Conseils :**
- **Le lieu est obligatoire** pour cette plateforme
- Utilisez des noms de villes françaises et des codes postaux
- Bon pour l'outreach sur le marché français

### PagineGialle.it (Italie)

**Points forts :**
- Pages Jaunes italiennes
- Annuaire d'entreprises italien complet
- Gère automatiquement le consentement aux cookies

**Conseils :**
- Utilisez des noms de villes italiennes comme lieu
- Bon pour la recherche de marché en Italie

### iTownPage (Japon)

**Points forts :**
- Annuaire d'entreprises japonais
- Gère automatiquement les popups de dialogue
- Gestion du consentement aux cookies en japonais

**Conseils :**
- Utilisez des mots-clés japonais pour de meilleurs résultats
- Indispensable pour la découverte d'entreprises locales japonaises
- Utilisez un délai de 2500 ms (limite de 60 requêtes/heure)

### uSonar Yellow Page (Japon)

**Points forts :**
- Annuaire d'entreprises japonais alternatif
- Bon pour la cross-référence avec iTownPage

**Conseils :**
- Utilisez conjointement avec iTownPage pour une couverture plus large
- Utilisez un délai de 2500 ms

### KoreaLocalPages (Corée du Sud)

**Points forts :**
- Annuaire local d'entreprises coréennes
- Bon pour la recherche d'entrée sur le marché coréen

**Conseils :**
- Utilisez des mots-clés coréens pour de meilleurs résultats
- Utilisez un délai de 2500 ms (limite de 60 requêtes/heure)
- Bon pour découvrir les entreprises coréennes

## Intégration avec le marketing par e-mail

Les e-mails d'entreprises extraits peuvent être utilisés directement dans les campagnes d'e-mail :

1. **Exportez les résultats** de la tâche Pages Jaunes
2. Naviguez vers **Outreach Campaign** → **Send Outreach Campaigns**
3. **Importez le CSV** avec les e-mails extraits
4. **Créez un modèle** pour votre outreach
5. **Lancez la campagne**

Pour des instructions détaillées, consultez [Envoi d'e-mails en lot](./batch-email-sending).

## Dépannage

### Statut de la tâche : "Failed"

**Causes possibles :**
- Tous les proxies ont échoué
- Problèmes de connectivité réseau
- La plateforme a bloqué les requêtes
- Mots-clés ou lieu invalides

**Solutions :**
1. Vérifiez l'état des proxies
2. Vérifiez la connexion Internet
3. Réduisez la concurrence et augmentez le délai
4. Essayez différents mots-clés/lieux
5. Activez l'authentification par compte
6. Activez le support IA pour une gestion plus intelligente des erreurs
7. Utilisez le navigateur local pour contourner les protections anti-bot

### Aucun résultat renvoyé

**Causes possibles :**
- Mots-clés trop spécifiques
- Le lieu n'a pas d'entreprises correspondantes
- La plateforme n'a renvoyé aucun résultat

**Solutions :**
1. Essayez des mots-clés plus larges
2. Vérifiez l'orthographe du lieu
3. Vérifiez manuellement si des entreprises existent sur la plateforme
4. Essayez des lieux proches

### Traitement lent

**Causes possibles :**
- Paramètre de pages maximum élevé
- Paramètres de délai conservateurs
- Limites de débit de la plateforme

**Solutions :**
1. Réduisez le nombre maximum de pages
2. Réduisez légèrement le délai (avec prudence)
3. Augmentez la concurrence (si vous utilisez des proxies)

### Données incomplètes

**Causes possibles :**
- Les annonces d'entreprises manquent d'informations
- Changements de mise en page de la plateforme

**Solutions :**
1. Certaines entreprises manquent naturellement de certaines données
2. Croisez les références avec d'autres plateformes
3. Signalez les problèmes de plateforme au support

## Flux de travail avancés

### Flux de travail 1 : Outreach d'entreprises locales

1. **Recherchez** des entreprises dans votre zone cible
2. **Filtrez** par catégorie et notes
3. **Exportez** des prospects de qualité
4. **Importez** dans le marketing par e-mail
5. **Créez une campagne personnalisée** en utilisant le rédacteur d'e-mails IA

### Flux de travail 2 : Analyse concurrentielle

1. **Scrapez les concurrents** dans plusieurs zones
2. **Analysez les notes et les avis**
3. **Identifiez les lacunes de service**
4. **Ciblez les zones mal desservies**

### Flux de travail 3 : Étude de marché

1. **Extrayez** toutes les entreprises d'un secteur
2. **Analysez** la distribution et les modèles
3. **Identifiez** les opportunités de marché
4. **Planifiez** la stratégie d'expansion

## Comparaison : Moteurs de recherche vs Pages Jaunes

| Fonctionnalité | Moteurs de recherche | Pages Jaunes |
|---------------|---------------------|-------------|
| **Idéal pour** | Trouver des sites web, recherche générale | Entreprises locales, annonces vérifiées |
| **Qualité des données** | Variable | Structurées, vérifiées |
| **Coordonnées** | Nécessite une profile insights | E-mails/téléphones pré-extraits |
| **Ciblage géographique** | Basé sur les mots-clés | Basé sur le lieu |
| **Notes/Avis** | Parfois | Toujours (Yelp) |
| **Horaires d'ouverture** | Rarement | Couramment |

:::tip Combinez les deux stratégies

Combinez les deux approches :
1. Utilisez les **moteurs de recherche** pour trouver des sites web spécifiques à un secteur
2. Utilisez les **Pages Jaunes** pour trouver des entreprises locales
3. Croisez les références pour une couverture complète

:::

## Prochaines étapes

- [En savoir plus sur l'profile insights d'e-mails](./contact-extraction)
- [Configurer des campagnes d'e-mails IA](../ai-outreach/ai-email-writer)
- [Configurer la planification des tâches](../automation/task-scheduling)

---

**Prêt à trouver des entreprises locales ?** Commencez par une petite tâche pour vous familiariser avec le processus, puis augmentez progressivement vos opérations.
