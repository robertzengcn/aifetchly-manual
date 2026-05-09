---
id: proxy-setup
title: Proxy Setup
sidebar_label: Proxy Setup
description: Learn how to configure and manage proxies for safe and efficient web scraping in aiFetchly.
---

# Guide de configuration des proxys

L'utilisation de proxys est **facultative** avec aiFetchly. Vous pouvez exécuter des tâches de recherche sans proxy, mais en ajouter vous permet de :

- **Éviter les blocages d'IP** de la part des moteurs de recherche et des sites web
- **Extraire des données à grande échelle** en répartissant les requêtes sur plusieurs adresses IP
- **Préserver votre anonymat** lors de la collecte de prospects
- **Accéder au contenu géo-restreint** depuis différentes régions

:::info Fonctionnalité facultative

Les proxys ne sont pas obligatoires pour utiliser aiFetchly. Vous pouvez commencer à extraire des données immédiatement sans configurer de proxys. Ajoutez-en uniquement si vous souhaitez éviter les limitations de débit ou accéder à du contenu spécifique à une région.

:::

## Comprendre les proxys

Un serveur proxy agit comme un intermédiaire entre votre ordinateur et les sites web que vous consultez. Au lieu de voir votre adresse IP, les sites web voient l'adresse IP du proxy.

### Types de proxys pris en charge

aiFetchly prend en charge trois protocoles de proxy :

| Protocole | Description | Cas d'utilisation |
|----------|-------------|----------|
| **HTTP** | Proxy HTTP basique | Extraction web générale, sites non-SSL |
| **HTTPS** | Proxy HTTP sécurisé | Sites web sécurisés (HTTPS), recommandé pour la plupart des extractions |
| **SOCKS5** | Socket Secure 5 | Utilisateurs avancés, prend en charge davantage de protocoles, meilleures performances |

:::tip Protocole recommandé

Pour la plupart des cas d'utilisation, les proxys **HTTPS** sont recommandés car ils fonctionnent avec les sites web HTTP et HTTPS.

:::

### Format du proxy

Chaque proxy nécessite les informations suivantes :

- **Hôte/IP** - L'adresse du serveur proxy (par ex., `192.168.1.1` ou `proxy.example.com`)
- **Port** - Le numéro de port (par ex., `8080`, `3128`, `1080`)
- **Protocole** - http, https ou socks5
- **Nom d'utilisateur** (facultatif) - Pour l'authentification
- **Mot de passe** (facultatif) - Pour l'authentification

Exemple : `192.168.1.1:8080` avec le nom d'utilisateur `user1` et le mot de passe `pass123`

## Ajouter des proxys manuellement

### Étape 1 : Ouvrir la gestion des proxys

1. Lancez aiFetchly
2. Accédez à **Proxy** dans le menu de navigation de gauche
3. Vous verrez la page de gestion des proxys avec la liste de vos proxys

### Étape 2 : Ajouter un proxy individuel

1. Cliquez sur le bouton **Add Proxy** (icône +) dans le coin supérieur droit
2. Remplissez les champs requis :

   - **Host/IP** : Saisissez l'adresse ou l'IP du serveur proxy
   - **Port** : Saisissez le numéro de port
   - **Protocol** : Sélectionnez dans le menu déroulant (HTTP, HTTPS ou SOCKS5)
   - **Username** : (Facultatif) Saisissez si une authentification est requise
   - **Password** : (Facultatif) Saisissez si une authentification est requise

3. Cliquez sur **Submit** pour enregistrer le proxy

:::info Authentification

Si votre fournisseur de proxy exige une authentification, vous devez saisir le nom d'utilisateur et le mot de passe. Les proxys non authentifiés échoueront lors des tests.

:::

### Étape 3 : Tester le proxy

Après avoir ajouté des proxys, vous devriez vérifier qu'ils fonctionnent :

1. Définissez facultativement **Check timeout** dans la barre d'outils (1 à 60 secondes par proxy ; 10 secondes par défaut). Cette limite s'applique à la fois au test de connectivité et à la vérification Google.
2. Sélectionnez le ou les proxys que vous souhaitez tester (cases à cocher sur les lignes).
3. Cliquez sur **Check Proxy**.
4. aiFetchly met à jour deux types de résultats :

**Status (connectivité)** — indique si le proxy peut relayer le trafic (par exemple, un tunnel vers un point de terminaison de test) :

- **Pass** — Le test basique du proxy a réussi.
- **Failure** — Le test basique a échoué (hôte/port incorrect, authentification ou réseau).
- **Unknown** — Pas encore testé.

**Google Pass** — indique si le même proxy peut atteindre **Google** sans être bloqué en tant que trafic automatisé. Après que **Status** affiche **Pass**, l'application exécute une vérification distincte (navigateur headless vers Google). Cette colonne peut se mettre à jour avec un léger délai :

- **Pass** — La vérification Google a réussi ; l'IP a plus de chances de fonctionner pour l'extraction reposant sur Google.
- **Fail** — Google a bloqué, mis au défi, ou la vérification a échoué (courant pour les IPs de datacenter ou les proxys surexploités).
- **Not Checked** — Aucun résultat Google pour le moment (le proxy n'a jamais réussi le test basique, ou non vérifié depuis l'ajout de cette fonctionnalité).

Si **Status** est **Failure**, **Google Pass** reste **Not Checked** (l'étape Google ne s'exécute que lorsque le test basique réussit).

## Importer des proxys par lot

Si vous disposez de plusieurs proxys, vous pouvez les importer tous en une seule fois à l'aide d'un fichier CSV.

### Étape 1 : Télécharger le modèle

1. Accédez à **Proxy** dans le menu de navigation
2. Cliquez sur **Batch Upload Proxy**
3. Cliquez sur **Download Template** pour obtenir le modèle CSV

### Étape 2 : Préparer votre fichier CSV

Le modèle CSV présente la structure suivante :

```csv
host,port,protocols,user,pass
192.168.1.1,8080,http,username1,password1
192.168.1.2,3128,https,username2,password2
192.168.1.3,1080,socks5,username3,password3
192.168.1.4,8080,http,,
```

**Directives de formatage CSV :**

- **host** - Obligatoire : Adresse IP ou nom d'hôte du proxy
- **port** - Obligatoire : Numéro de port
- **protocols** - Obligatoire : Doit être « http », « https » ou « socks5 »
- **user** - Facultatif : Nom d'utilisateur (laissez vide si aucune authentification)
- **pass** - Facultatif : Mot de passe (laissez vide si aucune authentification)

:::tip Mise en forme CSV

- Votre fichier peut utiliser les mêmes en-têtes de colonnes que le modèle (`host`, `port`, `protocols`, `user`, `pass`) ou omettre la ligne d'en-tête si vos colonnes sont dans cet ordre
- Utilisez des virgules pour séparer les champs
- Laissez les champs user/pass vides si votre proxy ne nécessite pas d'authentification
- Enregistrez le fichier au format `.csv` (valeurs séparées par des virgules)

:::

### Étape 3 : Importer le CSV

1. Cliquez sur **Batch Upload**
2. Sur **Upload File**, sélectionnez votre CSV (ou utilisez **Paste Text** pour un proxy par ligne)
3. Les proxys analysés apparaissent dans le tableau de prévisualisation
4. Facultatif : cliquez sur **Check Proxies** pour exécuter un **test rapide de connectivité** sur la liste de prévisualisation (ceci n'est pas identique au test complet **Google Pass** sur les proxys enregistrés)
5. Cliquez sur **Import proxy** (affiché comme **Import All** dans certains paramètres régionaux) pour les ajouter à votre bibliothèque
6. Après l'importation, ouvrez la liste principale des proxys, sélectionnez les nouvelles lignes et cliquez sur **Check Proxy** pour enregistrer **Status** et **Google Pass** pour les tâches utilisant Google

Pour nettoyer la liste principale après les vérifications, utilisez **remove failure proxy** (supprime les lignes dont le **Status** est **Failure**).

## Gérer votre liste de proxys

### Afficher les proxys

La liste des proxys affiche tous vos proxys avec les informations suivantes :

| Colonne | Description |
|--------|-------------|
| **ID** | Identifiant unique |
| **Host** | IP/nom d'hôte du serveur proxy |
| **Port** | Port du proxy |
| **Username** | Nom d'utilisateur d'authentification (le cas échéant) |
| **Password** | Mot de passe d'authentification (masqué par défaut ; utilisez **Columns** pour l'afficher) |
| **Protocol** | HTTP, HTTPS ou SOCKS5 |
| **Status** | Test basique : Pass, Failure ou Unknown |
| **Check Time** | Dernière date de test du proxy |
| **Google Pass** | Vérification spécifique Google : Pass, Fail ou Not Checked (voir [Vérification Google Pass](#google-pass-check)) |
| **Actions** | Boutons de modification ou de suppression |

Utilisez le contrôle **Columns** dans la barre d'outils pour afficher ou masquer des colonnes (par exemple, le mot de passe est masqué par défaut pour des raisons de sécurité).

### Modifier les proxys

1. Recherchez le proxy que vous souhaitez modifier dans la liste
2. Cliquez sur le bouton **Edit** (icône crayon)
3. Modifiez les champs selon vos besoins
4. Cliquez sur **Submit** pour enregistrer les modifications

### Supprimer des proxys

1. Recherchez le proxy que vous souhaitez supprimer
2. Cliquez sur le bouton **Delete** (icône corbeille)
3. Confirmez la suppression

### Opérations en masse

- **Check Proxy** — Avec une ou plusieurs lignes sélectionnées, exécute le test complet (**Status** plus **Google Pass** lorsque le test basique réussit). Rien n'est vérifié tant que vous n'avez pas sélectionné au moins un proxy.
- **remove failure proxy** — Supprime en une seule action tous les proxys enregistrés dont le **Status** est **Failure**

## Utiliser les proxys dans les tâches de recherche

Une fois vos proxys ajoutés et testés, vous pouvez les utiliser dans vos tâches de recherche et d'extraction.

### Étape 1 : Créer ou modifier une tâche de recherche

1. Accédez à **Search** → **Search Form**
2. Créez une nouvelle tâche de recherche ou modifiez une tâche existante

### Étape 2 : Sélectionner des proxys

1. Recherchez la section **Proxy** dans la configuration de la tâche
2. Cliquez sur le bouton **Choose Proxy**
3. Une boîte de dialogue de sélection de proxy apparaîtra avec tous vos proxys
4. Sélectionnez un ou plusieurs proxys dans la liste :
   - Privilégiez les proxys avec **Status** **Pass** et **Google Pass** **Pass** lorsque votre tâche utilise Google ou des flux reposant fortement sur Google
   - Vous pouvez sélectionner plusieurs proxys pour l'équilibrage de charge

5. Cliquez sur **Confirm** pour ajouter les proxys sélectionnés à votre tâche

### Étape 3 : Exécuter votre tâche

Lorsque vous exécutez la tâche de recherche, aiFetchly va :

- Répartir les requêtes entre vos proxys sélectionnés
- Effectuer une rotation automatique des proxys
- Gérer les défaillances de proxy de manière appropriée
- Continuer l'extraction même si certains proxys échouent

:::info Rotation des proxys

Lorsque vous utilisez plusieurs proxys, aiFetchly effectue automatiquement une rotation entre eux pour répartir la charge et éviter les limitations de débit.

:::

## Surveillance de l'état des proxys

Des vérifications régulières garantissent que vos proxys fonctionnent correctement.

### Quand les vérifications s'exécutent

- **Proxys enregistrés :** Utilisez **Check Proxy** après avoir sélectionné des lignes. La liste se rafraîchit pendant l'exécution des vérifications ; lorsque la progression atteint 100 %, les résultats sont à jour pour **Status** ; **Google Pass** peut se terminer légèrement plus tard pour les proxys ayant réussi l'étape basique.
- **Boîte de dialogue d'importation par lot :** **Check Proxies** valide uniquement la connectivité pour les lignes de prévisualisation avant l'importation. Exécutez **Check Proxy** sur la liste principale après l'importation pour **Google Pass**.

### Délai d'expiration des vérifications

Sur la page **Proxy**, définissez **Check timeout** (1 à 60 secondes, **10** par défaut). La même valeur s'applique au test basique et au test navigateur Google pour les proxys enregistrés.

### Interpréter les résultats de statut

| Statut | Signification | Action |
|--------|---------|--------|
| **Pass** (vert) | Le test basique du proxy a réussi | Prêt pour une utilisation générale ; confirmez **Google Pass** si vous avez besoin de Google |
| **Failure** (rose) | Le proxy ne fonctionne pas | Supprimer ou remplacer |
| **Unknown** (gris) | Pas encore testé | Exécuter une vérification |

## Vérification Google Pass

**Google Pass** répond à la question : « Via ce proxy, pouvons-nous charger Google sans blocage évident ? » Il utilise une session de navigateur headless (similaire à la navigation réelle), ce qui est plus strict qu'un simple test de ping ou de tunnel HTTP.

- **Pass** — Signal utile pour l'extraction orientée Google ; ne constitue pas une garantie pour chaque surface ou volume Google.
- **Fail** — Souvent des IPs de datacenter, des proxys recyclés ou des IPs déjà signalées ; essayez un autre proxy ou fournisseur.
- **Not Checked** — Exécutez **Check Proxy** sur les proxys enregistrés, ou le proxy n'a pas encore réussi le test basique.

**Google Pass** peut être **Fail** même lorsque **Status** est **Pass**, car Google applique des signaux supplémentaires de détection de bots et d'abus au-delà de la simple connectivité.

## Bonnes pratiques

### 1. Utiliser des fournisseurs de proxy fiables

Investissez dans des services de proxy de qualité. Les proxys gratuits sont souvent lents, peu fiables ou déjà bloqués par les sites web majeurs.

### 2. Effectuer des vérifications régulières

Testez vos proxys régulièrement, en particulier avant d'exécuter des tâches d'extraction à grande échelle.

### 3. Supprimer les proxys défaillants

Maintenez votre liste de proxys propre en supprimant rapidement les proxys défaillants.

### 4. Utiliser plusieurs proxys

Pour l'extraction à grande échelle, utilisez plusieurs proxys pour :
- Répartir la charge
- Réduire le risque de blocages d'IP
- Augmenter la vitesse d'extraction

### 5. Faire correspondre la localisation du proxy à la cible

Si vous extrayez du contenu spécifique à une région, utilisez des proxys situés dans la même région que votre audience cible.

### 6. Surveiller les performances des proxys

Suivez les proxys les plus performants et privilégiez-les dans vos tâches.

### 7. Ne pas surutiliser un seul proxy

Même les proxys fonctionnels peuvent être bloqués s'ils sont surutilisés. Effectuez une rotation régulière.

## Résoudre les problèmes de proxy

### Tous les proxys affichent « Failure »

**Causes possibles :**
- Problèmes de connectivité réseau
- Identifiants de proxy incorrects
- Le service du fournisseur de proxy est indisponible

**Solutions :**
- Vérifiez votre connexion internet
- Confirmez le nom d'utilisateur et le mot de passe auprès de votre fournisseur de proxy
- Contactez votre fournisseur de proxy

### Certains proxys échouent de manière intermittente

**Causes possibles :**
- Le serveur proxy est surchargé
- Service de proxy instable

**Solutions :**
- Supprimez les proxys peu fiables
- Utilisez les résultats des vérifications pour identifier les proxys stables
- Envisagez de passer à un service de proxy supérieur

### Les proxys fonctionnent lors des tests mais échouent pendant l'extraction

**Causes possibles :**
- Le site cible dispose de mesures anti-extraction plus strictes
- Le proxy est soumis à une limitation de débit par la cible
- **Status** est **Pass** mais **Google Pass** est **Fail** alors que la tâche repose sur Google

**Solutions :**
- Utilisez davantage de proxys pour répartir les requêtes
- Réduisez la fréquence des requêtes
- Essayez différents fournisseurs de proxy
- Pour les flux de travail reposant fortement sur Google, privilégiez les proxys avec **Google Pass** **Pass**

### Impossible de se connecter au proxy

**Causes possibles :**
- Le pare-feu bloque la connexion au proxy
- Paramètres de proxy incorrects
- Le serveur proxy est hors ligne

**Solutions :**
- Vérifiez les paramètres du pare-feu
- Confirmez l'hôte et le port du proxy
- Testez le proxy dans un navigateur ou avec curl

## Considérations de sécurité

### Protéger vos identifiants de proxy

- Traitez les noms d'utilisateur et mots de passe de proxy comme des données sensibles
- Ne partagez pas vos listes de proxys avec des utilisateurs non autorisés
- Utilisez des méthodes sécurisées pour transférer les informations de proxy

### Utiliser des proxys HTTPS

Les proxys HTTPS chiffrent le trafic entre vous et le serveur proxy, offrant une meilleure sécurité.

### Effectuer une rotation régulière des proxys

Changez régulièrement votre pool de proxys pour maintenir la sécurité et éviter la détection.

## Prochaines étapes

Maintenant que vous avez configuré vos proxys :

- [En savoir plus sur l'extraction des moteurs de recherche](../lead-generation/search-engines)
- [Configurer l'extraction de contacts](../lead-generation/contact-extraction)
- [Configurer la bibliothèque de connaissances](../ai-outreach/knowledge-library)

---

**Besoin de proxys ?** Envisagez ces fournisseurs de proxy populaires :
- Bright Data (anciennement Luminati)
- Smartproxy
- Oxylabs
- Storm Proxies
- ProxyMesh

*Remarque : Il ne s'agit pas d'une recommandation. Faites vos propres recherches et choisissez en fonction de vos besoins spécifiques.*
