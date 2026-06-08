---
id: search-engines
title: Information Organization des moteurs de recherche
sidebar_label: Moteurs de recherche
description: Apprenez à assistant les résultats de recherche de Google, Bing et Yandex pour générer des prospects avec une analyse alimentée par l'IA.
---

# Information Organization des moteurs de recherche

La fonction de information organization multi-moteur de recherche d'aiFetchly vous permet de collecter des prospects à partir de plusieurs moteurs de recherche simultanément. Extrayez automatiquement les informations d'entreprise, les URL et les coordonnées à partir des résultats de recherche. Grâce à l'analyse par IA, vous pouvez noter les prospects, classifier les industries et extraire les coordonnées — le tout directement à partir de vos résultats de recherche.


:::info Utilisation des informations publiques

Cette fonctionnalité sert uniquement à organiser des informations web publiques. Assurez-vous que vos activités Market Insight respectent le protocole Robots et les conditions d'utilisation du site cible.

:::

## Moteurs de recherche pris en charge

| Moteur | Idéal pour | Compte requis | Navigateur local |
|--------|----------|------------------|---------------|
| **Google** | Recherches générales, portée mondiale | Recommandé | Facultatif |
| **Bing** | Recherches générales, couverture Microsoft Search | Recommandé | Facultatif |
| **Yandex** | Marché russe, contenu cyrillique | Recommandé | **Requis** |

:::info Condition Yandex

Le information organization Yandex nécessite une **intégration de navigateur local** pour fonctionner correctement. Activez cette option lors de la création de tâches Yandex.

:::

## Création d'une tâche de recherche

### Étape 1 : Accéder à la recherche

1. Cliquez sur **Search** dans le menu de navigation de gauche
2. Vous verrez la page **Search Form**

### Étape 2 : Configuration de base de la recherche

Entrez les informations suivantes requises :

#### Mots-clés

1. **Saisissez vos mots-clés** : Tapez ou collez vos mots-clés de recherche dans la zone de texte
   - Un mot-clé par ligne
   - Utilisez des mots-clés spécifiques et ciblés pour de meilleurs résultats

2. **Générer des mots-clés associés** (Facultatif) :
   - Cliquez sur le bouton **Generate Related Keywords**
   - aiFetchly utilise l'IA pour générer des termes de recherche associés
   - Développe votre liste de mots-clés pour une couverture plus large
   - Supprime automatiquement les doublons

:::tip Stratégie de mots-clés

Commencez avec 5 à 10 mots-clés de base, puis utilisez la génération par IA pour étendre à 20-50 mots-clés associés pour une couverture complète.

:::

#### Moteur de recherche

Sélectionnez le moteur de recherche dans le menu déroulant :
- Google (par défaut)
- Bing
- Yandex

#### Numéro de page

Spécifiez à quelle page commencer le information organization :
- **Commencer à la page 1** pour les nouvelles recherches
- **Reprendre à la page X** si vous continuez une tâche précédente

#### Quantité simultanée

Définissez le nombre de recherches simultanées :
- **1** (par défaut) : Le plus sûr, le plus lent
- **3-5** : Vitesse modérée, adapté à la plupart des cas d'utilisation
- **10+** : Le plus rapide, nécessite plus de proxies

:::warning Limites de concurrence

Une concurrence plus élevée augmente le risque d'être bloqué. Commencez par 1-3 et augmentez progressivement.

:::

### Étape 3 : Options avancées

#### Configuration du proxy

**Option A : Utiliser des proxies enregistrés**

1. Cliquez sur le bouton **Choose Proxy**
2. Sélectionnez un ou plusieurs proxies dans votre liste
3. Cliquez sur **Confirm** pour les ajouter à la tâche

**Option B : Saisie manuelle du proxy**

1. Activez l'option proxy
2. Saisissez manuellement les détails du proxy :
   - Adresse hôte/IP
   - Numéro de port
   - Nom d'utilisateur (si requis)
   - Mot de passe (si requis)

:::tip Bonnes pratiques pour les proxies

Utilisez plusieurs proxies pour les tâches à haute concurrence afin de répartir la charge et d'éviter les blocages.

:::

#### Intégration du navigateur local

Activez le information organization par navigateur local pour un comportement plus humain :

1. Activez **Local Browser**
2. Sélectionnez votre navigateur Chrome dans la liste
3. **Requis pour** : Le information organization Yandex
4. **Recommandé pour** : Google et Bing à grande échelle

**Avantages :**
- Taux de détection plus faibles
- Meilleur succès face aux protections anti-bot
- Résultats plus cohérents

#### Afficher dans le navigateur

Activez **Show in Browser** pour contrôler la visibilité du navigateur pendant le information organization :

- **Activé** : La fenêtre du navigateur est visible pendant le information organization — utile pour le débogage ou la surveillance de la progression
- **Désactivé** (par défaut) : Le navigateur s'exécute en mode headless pour un fonctionnement plus rapide en arrière-plan

#### Activer la récupération IA

Activez **Enable AI Recovery** pour permettre à l'IA de récupérer automatiquement des erreurs de information organization :

- Lorsqu'il est activé, aiFetchly utilise l'IA pour diagnostiquer et récupérer les erreurs rencontrées pendant le information organization
- Le système peut analyser les captures d'écran d'erreurs et ajuster sa stratégie
- Les tentatives de récupération sont limitées en débit pour éviter une consommation excessive de ressources

:::tip Quand utiliser la récupération IA

Activez la récupération IA lors du information organization de moteurs avec une forte protection anti-bot (comme Google ou Bing) ou lors de l'exécution de tâches à grande échelle où des erreurs occasionnelles sont attendues.

:::

#### Utilisation du compte de recherche

Utilisez des comptes authentifiés pour de meilleurs taux de réussite :

1. Activez **Search Account**
2. Cliquez sur **Choose Account** pour sélectionner les identifiants enregistrés
3. Sélectionnez les comptes correspondant à votre moteur de recherche
4. Cliquez sur **Confirm**

**Recommandations :**
- **Google** : Utilisez des comptes pour le information organization à grande échelle
- **Bing** : Utilisez des comptes pour le information organization à grande échelle
- **Yandex** : Utilisez des comptes pour un meilleur accès

### Étape 4 : Exécuter ou Enregistrer

Choisissez l'une des options suivantes :

#### Enregistrer uniquement

- Crée la tâche sans l'exécuter
- Utile pour la planification ou la création de tâches par lots
- Statut de la tâche : "Not Start"

#### Exécuter la tâche

- Crée et exécute la tâche immédiatement
- Le statut passe à "Processing"
- Les résultats apparaissent en temps réel

## Gestion des tâches de recherche

### Afficher la liste des tâches

Naviguez vers **Search** → **Result List** pour voir toutes vos tâches de recherche.

**Colonnes de la liste des tâches :**

| Colonne | Description |
|--------|-------------|
| **ID** | Identifiant unique de la tâche |
| **Keywords** | Mots-clés utilisés dans la recherche |
| **Search Engine** | Moteur utilisé (Google, Bing, Yandex) |
| **Status** | Not Start, Processing, Complete, Error |
| **Record Time** | Date et heure de création |
| **Actions** | Run, Edit, View Results, Kill Process, Retry, Download Logs |

### Actions sur les tâches

| Action | Description | Quand disponible |
|--------|-------------|----------------|
| **Run** | Démarrer une tâche "Not Start" | Tâche non démarrée |
| **Retry** | Redémarrer une tâche échouée | La tâche a le statut "Error" |
| **Edit** | Modifier les paramètres de la tâche | Toute tâche |
| **Kill Process** | Arrêter une tâche en cours | La tâche est "Processing" |
| **View Results** | Voir les résultats détaillés | La tâche a des résultats |
| **Download Logs** | Exporter les journaux d'erreurs | La tâche a des erreurs |

## Affichage des résultats de recherche

### Étape 1 : Ouvrir les résultats

1. Allez dans **Search** → **Result List**
2. Trouvez votre tâche
3. Cliquez sur **View Results** pour voir les résultats détaillés

### Étape 2 : Tableau des résultats

Le tableau des résultats affiche :

| Colonne | Description |
|--------|-------------|
| **ID** | Identifiant du résultat |
| **Title** | Titre de la page du résultat de recherche |
| **Link** | URL du résultat de recherche |
| **Keyword** | Mot-clé qui a généré ce résultat |
| **Record Time** | Moment où le résultat a été scrapé |
| **Customer Industry** | Industrie classifiée par IA (si analysé) |
| **Probability** | Score de qualité du prospect par IA 0-100% (si analysé) |
| **Analysis Status** | Statut d'achèvement de l'analyse (pending/analyzing/completed/failed) |
| **Contact Profile Insights** | Statut d'profile insights des coordonnées |
| **Email** | Adresse e-mail extraite (si extraite) |
| **Phone** | Numéro de téléphone extrait (si extrait) |
| **Address** | Adresse physique extraite (si extraite) |

:::tip Visibilité des colonnes

Vous pouvez personnaliser les colonnes affichées en utilisant le menu de **visibilité des colonnes**. Cliquez sur le sélecteur de colonnes pour afficher ou masquer des colonnes spécifiques selon vos besoins de flux de travail.

:::

### Étape 3 : Interagir avec les résultats

**Actions individuelles :**
- **Copy Link** : Copier l'URL dans le presse-papiers
- **Copy Contact Info** : Copier directement l'e-mail, le téléphone ou l'adresse extraits

**Actions par lots :**
- Sélectionnez plusieurs résultats à l'aide des cases à cocher
- **AI Analyze** : Analyser les résultats sélectionnés pour le scoring des prospects et la classification des industries
- **AI Extract Contact Info** : Extraire les coordonnées (e-mail, téléphone, adresse) des URL sélectionnées
- **Open in Contact Profile Insights** : Naviguer vers la fonction d'profile insights d'e-mails avec les URL sélectionnées
- **Export** : Télécharger les résultats en CSV (inclut les champs d'analyse IA)

## Analyse de site web par IA

Améliorez vos résultats de recherche avec une analyse alimentée par l'IA :

### Étape 1 : Sélectionner les résultats

1. Cochez les cases à côté des résultats que vous souhaitez analyser
2. Cliquez sur le bouton **AI Analyze**

### Étape 2 : Fournir le contexte commercial

Une boîte de dialogue apparaîtra vous demandant des informations sur votre entreprise :

1. **Entrez la description de votre entreprise** dans la zone de texte — cela aide l'IA à comprendre quel type de prospects vous recherchez
2. **Sauvegarder pour plus tard** (facultatif) : Cochez cette case pour sauvegarder votre description d'entreprise pour les analyses futures

:::tip Contexte commercial

Fournissez une description claire et spécifique de votre entreprise et de vos clients cibles. Plus vous donnez de contexte, plus le scoring de l'IA sera précis. Par exemple : "Nous sommes une entreprise SaaS B2B qui vend des outils d'automatisation du marketing aux petites et moyennes entreprises du secteur de la vente au détail."

:::

### Étape 3 : Examiner les résultats de l'analyse

L'IA produit les éléments suivants pour chaque résultat analysé :

| Champ | Description |
|-------|-------------|
| **Customer Industry** | Catégorie d'industrie classifiée par IA |
| **Probability** | Score de qualité du prospect de 0 à 100% |
| **AI Reasoning** | Explication de la notation de ce prospect |
| **Client Business** | Type d'entreprise identifié du site web |

### Étape 4 : Surveiller la progression

- La barre de progression affiche l'état d'achèvement des opérations par lots
- Les résultats se mettent à jour en temps réel au fur et à mesure que chaque site web est analysé
- Le statut d'analyse suit chaque résultat : pending → analyzing → completed/failed

### Étape 5 : Filtrer par score

Après l'analyse :
- Utilisez le score Probability pour prioriser les prospects
- Concentrez-vous sur les prospects avec un score de 70%+ pour la prospection
- Filtrez les résultats par classification d'industrie

## Profile Insights de coordonnées par IA

Extrayez les coordonnées directement de vos résultats de recherche en utilisant l'IA :

### Étape 1 : Sélectionner les résultats

1. Cochez les cases à côté des résultats dont vous souhaitez extraire les coordonnées
2. Cliquez sur le bouton **AI Extract Contact Info**

### Étape 2 : Surveiller l'profile insights

- Le système visite chaque URL sélectionnée et extrait les coordonnées
- L'profile insights s'exécute en arrière-plan avec des mises à jour de progression en temps réel
- Le statut suit chaque résultat : pending → analyzing → completed/failed

### Étape 3 : Afficher les contacts extraits

Les informations extraites sont affichées directement dans le tableau des résultats :

| Champ | Description |
|-------|-------------|
| **Email** | Adresses e-mail extraites |
| **Phone** | Numéros de téléphone extraits |
| **Address** | Adresses physiques extraites |

Vous pouvez copier des champs de contact individuels directement depuis le tableau à l'aide des boutons de copie.

## Profile Insights d'e-mails à partir des résultats de recherche

Extrayez des e-mails directement de vos résultats de recherche :

### Étape 1 : Sélectionner les résultats

1. Cochez les cases à côté des résultats contenant les URL dont vous souhaitez extraire les e-mails
2. Cliquez sur le bouton **Open in Contact Profile Insights**

### Étape 2 : Configurer l'profile insights

Les URL sélectionnées sont automatiquement transmises à la fonction [Profile Insights d'e-mails](./contact-extraction).

### Étape 3 : Afficher les e-mails extraits

Naviguez vers la section d'profile insights d'e-mails pour voir les e-mails collectés.

## Exportation des résultats de recherche

### Exporter en CSV

1. Sélectionnez les résultats que vous souhaitez exporter (ou laissez vide pour tous)
2. Cliquez sur **Export** → **CSV**
3. Choisissez l'emplacement de sauvegarde
4. Le fichier inclut toutes les colonnes du tableau des résultats, y compris les champs d'analyse IA (industrie, score, raisonnement) et les coordonnées (e-mail, téléphone, adresse)

### Exporter les journaux d'erreurs

Si une tâche échoue :

1. Allez dans **Search** → **Result List**
2. Trouvez la tâche échouée
3. Cliquez sur **Download Logs**
4. Consultez les journaux pour diagnostiquer les problèmes

## Bonnes pratiques

### 1. Commencer petit

- Commencez avec 5 à 10 mots-clés
- Utilisez une faible concurrence (1-3)
- Surveillez les résultats avant de monter en charge

### 2. Utiliser des proxies

- Utilisez toujours des proxies pour plus de 10 pages
- Faites tourner les proxies pour répartir la charge
- Testez les proxies avant d'exécuter de grandes tâches

### 3. Exploiter les fonctionnalités IA

- Utilisez la génération de mots-clés pour étendre la couverture
- Fournissez un contexte commercial clair pour un scoring IA plus précis
- Exécutez des analyses IA pour noter et classer les prospects
- Utilisez l'profile insights de contacts par IA pour obtenir e-mail, téléphone et adresse
- Concentrez-vous sur les résultats à score élevé pour la prospection

### 4. Conseils spécifiques par moteur

**Google :**
- Utilisez des comptes authentifiés
- Activez le navigateur local pour les grandes tâches
- Activez la récupération IA pour une gestion robuste des erreurs
- Respectez les limites de débit (commencez avec 1 simultané)

**Bing :**
- Utilisez des comptes authentifiés pour les grandes tâches
- Activez le navigateur local lors de la montée en charge
- Activez la récupération IA pour une gestion robuste des erreurs
- Respectez les limites de débit (commencez avec 1 simultané)

**Yandex :**
- **Doit utiliser le navigateur local**
- Utilisez des comptes pour un meilleur accès
- Essentiel pour le contenu russe/cyrillique

### 5. Surveiller le statut des tâches

- Vérifiez régulièrement la liste des tâches
- Consultez les journaux d'erreurs pour les échecs
- Ajustez les paramètres en fonction des résultats

### 6. Organiser les résultats

- Utilisez des noms de tâches descriptifs
- Exportez les résultats régulièrement
- Nettoyez les anciennes tâches

## Dépannage

### Statut de la tâche : "Error"

**Causes possibles :**
- Tous les proxies ont échoué
- Problèmes de connectivité réseau
- Le moteur de recherche a bloqué les requêtes

**Solutions :**
1. Vérifiez l'état des proxies dans la section Proxy
2. Vérifiez la connexion Internet
3. Réduisez la concurrence
4. Activez le navigateur local
5. Utilisez des comptes authentifiés
6. Activez la récupération IA pour la gestion automatique des erreurs

### Aucun résultat retourné

**Causes possibles :**
- Mots-clés trop spécifiques
- Le moteur de recherche n'a retourné aucun résultat
- Pagination hors limites

**Solutions :**
1. Essayez des mots-clés plus larges
2. Commencez à la page 1
3. Vérifiez que les mots-clés fonctionnent dans une recherche manuelle

### Traitement lent

**Causes possibles :**
- Concurrence élevée sans assez de proxies
- Navigateur local activé (plus lent mais plus sûr)
- Latence réseau

**Solutions :**
1. Ajoutez plus de proxies
2. Réduisez la concurrence
3. Envisagez de désactiver le navigateur local pour la vitesse (avec prudence)

### Captcha ou blocage détecté

**Solutions :**
1. Activez l'intégration du navigateur local
2. Utilisez des comptes authentifiés
3. Ajoutez plus de proxies
4. Réduisez la fréquence des requêtes
5. Faites des pauses entre les grandes tâches
6. Activez la récupération IA pour gérer automatiquement les blocages

## Flux de travail avancés

### Flux de travail 1 : Génération de prospects complète

1. **Créer une tâche de recherche** avec des mots-clés larges
2. **Générer des mots-clés associés** en utilisant l'IA
3. **Exécuter avec une concurrence modérée** (3-5)
4. **Activer la récupération IA** pour une gestion robuste des erreurs
5. **Analyser par IA** tous les résultats avec votre contexte commercial
6. **Filtrer par score de probabilité** (concentrez-vous sur 70%+)
7. **Extraire les coordonnées par IA** des résultats à score élevé
8. **Exporter** pour les campagnes d'e-mail

### Flux de travail 2 : Analyse concurrentielle

1. **Rechercher les noms des concurrents** + mots-clés de l'industrie
2. **Utiliser le navigateur local** pour éviter la détection
3. **Analyser par IA** pour la classification des industries
4. **Exporter** pour la recherche de marché

### Flux de travail 3 : Découverte d'entreprises locales

1. **Rechercher des mots-clés locaux** (par exemple, "plombiers à Paris")
2. **Extraire les coordonnées par IA** des résultats (e-mail, téléphone, adresse)
3. **Analyser par lots** les sites web avec votre contexte commercial
4. **Créer des campagnes de prospection ciblées**

## Intégration avec d'autres fonctionnalités

Les résultats de recherche s'intègrent de manière transparente avec :

- **[Profile Insights de contacts](./contact-extraction)** - Extraire les e-mails des URL
- **[Pages Jaunes](./yellow-pages)** - Croiser avec les annuaires
- **[Rédacteur d'e-mails IA](../ai-outreach/ai-email-writer)** - Créer des prospections personnalisées
- **[Envoi d'e-mails par lot](./batch-email-sending)** - Lancer des campagnes

## Prochaines étapes

- [En savoir plus sur le information organization des Pages Jaunes](./yellow-pages)
- [Configurer l'profile insights de contacts](./contact-extraction)
- [Créer des campagnes d'e-mails alimentées par l'IA](../ai-outreach/ai-email-writer)

---

**Prêt à trouver des prospects ?** Commencez par une petite tâche de recherche et montez en charge à mesure que vous vous familiarisez avec le système.
