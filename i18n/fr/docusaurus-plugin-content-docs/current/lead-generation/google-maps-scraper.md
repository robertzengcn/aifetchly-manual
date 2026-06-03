---
id: google-maps-scraper
title: Google Maps Scraper
sidebar_label: Google Maps
description: Extrayez les informations commerciales de Google Maps par mot-clé et emplacement avec le Google Maps Scraper d'aiFetchly.
---

# Google Maps Scraper

Le Google Maps Scraper d'aiFetchly vous permet de rechercher des entreprises locales sur Google Maps par mot-clé et emplacement. Collectez des données commerciales complètes, y compris les noms, catégories, notes, avis, adresses, numéros de téléphone et URL de sites web — le tout à partir des résultats de recherche Google Maps.

## Présentation

Le Google Maps Scraper offre une interface simplifiée pour l'extraction de données d'entreprises locales :

1. **Entrez un mot-clé** (par exemple, « dentiste », « restaurant italien »)
2. **Entrez un emplacement** (par exemple, « Paris », « Lyon », « 75001 »)
3. **Configurez les options** (nombre maximum de résultats, inclusion du site web, avis, etc.)
4. **Lancez la recherche** et suivez la progression en temps réel
5. **Exportez les résultats** en CSV ou JSON

:::tip Idéal pour

Le Google Maps Scraper est idéal pour trouver des entreprises locales avec des données structurées, y compris des adresses vérifiées, des numéros de téléphone, des notes et des horaires d'ouverture — des informations plus fiables que les résultats de recherche web généraux.

:::

## Accéder au Google Maps Scraper

1. Cliquez sur **Google Maps** dans le menu de navigation de gauche
2. Le scraper s'ouvre avec deux onglets : **Recherche** et **Historique**

## Effectuer une recherche

### Étape 1 : Saisir les critères de recherche

#### Mot-clé commercial (obligatoire)

Entrez un type ou un nom d'entreprise à rechercher :

- **Exemples** : `dentiste`, `restaurant italien`, `plombier`, `agence marketing`
- **Conseil** : Utilisez des types d'entreprise spécifiques pour des résultats plus ciblés

#### Emplacement (obligatoire)

Entrez une ville, une adresse ou un code postal :

- **Exemples** : `Paris`, `Lyon`, `75001`, `Marseille, France`
- **Conseil** : Des emplacements plus précis donnent des résultats plus pertinents

### Étape 2 : Configurer les options de recherche

#### Nombre maximum de résultats

- **Plage** : 1 à 50 résultats
- **Par défaut** : 20 résultats
- Ajustez le curseur pour contrôler le nombre d'entreprises à extraire

#### Inclure le site web

- **Activé** (par défaut) : Tente d'extraire l'URL du site web de l'entreprise
- **Désactivé** : Ignore l'extraction du site web pour des résultats plus rapides

#### Inclure les avis

- **Désactivé** (par défaut) : Renvoie uniquement les données de base de l'entreprise
- **Activé** : Inclut les données d'avis dans les résultats (augmente le temps de traitement)

#### Afficher le navigateur

- **Désactivé** (par défaut) : Le navigateur s'exécute en mode headless (plus rapide)
- **Activé** : La fenêtre du navigateur est visible pendant l'extraction (utile pour le débogage)

:::warning Afficher le navigateur

L'activation de cette option affichera la fenêtre du navigateur sur votre écran pendant la recherche. Ceci est destiné au débogage uniquement et peut ralentir le processus d'extraction.

:::

### Étape 3 : Paramètres de compte et de proxy (facultatif)

#### Compte Google

Sélectionnez un compte Google pour utiliser ses cookies lors de l'extraction authentifiée :

- **Avantages** :
  - Taux de réussite plus élevé
  - Accès à des informations commerciales plus détaillées
  - Risque réduit d'être bloqué
- Seuls les comptes Google apparaissent dans le menu déroulant

:::tip Ajouter des comptes

Pour ajouter des comptes Google, accédez à **Paramètres** et configurez vos comptes sociaux. Consultez les [Paramètres système](../settings/system-settings) pour plus de détails.

:::

#### Proxys

Sélectionnez un ou plusieurs proxys pour alterner pendant la recherche :

- **Avantages** :
  - Répartit les requêtes sur plusieurs adresses IP
  - Réduit le risque de détection
  - Essentiel pour l'extraction à grande échelle
- Sélectionnez plusieurs proxys pour une rotation automatique par requête

### Étape 4 : Lancer la recherche

1. Cliquez sur **Lancer la recherche** pour commencer
2. Une barre de progression apparaît affichant l'état de l'extraction en temps réel
3. La recherche s'exécute de manière asynchrone — vous pouvez continuer à utiliser les autres fonctionnalités
4. Jusqu'à **3 recherches simultanées** peuvent s'exécuter en parallèle

:::info Recherches simultanées

Vous pouvez exécuter jusqu'à 3 recherches Google Maps en même temps. Si vous tentez d'en lancer une 4e, vous serez invité à attendre la fin de l'une d'entre elles.

:::

### Annuler une recherche

Si une recherche prend trop de temps ou si vous souhaitez l'arrêter :

- Cliquez sur le bouton **Annuler** qui apparaît pendant l'exécution d'une recherche
- Les résultats partiels collectés avant l'annulation sont conservés

## Afficher les résultats

Une fois une recherche terminée, les résultats s'affichent dans un tableau de données.

### Tableau des résultats

| Colonne | Description |
|---------|-------------|
| **Nom** | Nom de l'entreprise (lien cliquable vers Google Maps si disponible) |
| **Catégorie** | Catégorie de l'entreprise (par exemple, « Restaurant », « Dentiste ») |
| **Note** | Note en étoiles (avec icône d'étoile) |
| **Avis** | Nombre d'avis |
| **Adresse** | Adresse complète de l'entreprise |
| **Téléphone** | Numéro de téléphone |
| **Site web** | Lien cliquable vers le site web de l'entreprise (tronqué) |

:::tip Cliquer sur les noms d'entreprises

Les noms d'entreprises avec un lien Google Maps sont cliquables — ils ouvrent la fiche de l'entreprise sur Google Maps dans un nouvel onglet.

:::

### En-tête des résultats de recherche

L'en-tête affiche :

- Le nombre total d'entreprises trouvées
- Le mot-clé de recherche utilisé
- L'emplacement recherché

### Aucun résultat

Si aucune entreprise n'est trouvée, un message s'affiche indiquant qu'aucun résultat ne correspond à vos critères de recherche. Essayez de :

- Utiliser des mots-clés plus larges
- Élargir la zone de localisation
- Augmenter le paramètre de nombre maximum de résultats

## Exporter les résultats

### Exporter en CSV

1. Cliquez sur **Exporter CSV** dans l'en-tête des résultats
2. Un fichier CSV se télécharge automatiquement
3. Le nom du fichier inclut le mot-clé et l'emplacement (par exemple, `google-maps-dentiste-Paris.csv`)

**Colonnes CSV incluses :**
Nom, Catégorie, Note, Nombre d'avis, Adresse, Téléphone, Site web, Horaires, URL Maps

### Exporter en JSON

1. Cliquez sur **Exporter JSON** dans l'en-tête des résultats
2. Un fichier JSON se télécharge avec toutes les données des résultats
3. Le nom du fichier suit la même convention que les exports CSV

## Historique des recherches

L'onglet **Historique** conserve toutes vos recherches Google Maps passées.

### Consulter l'historique

1. Cliquez sur l'onglet **Historique**
2. Un tableau affiche toutes les recherches précédentes

| Colonne | Description |
|---------|-------------|
| **Requête** | Le mot-clé de recherche utilisé |
| **Emplacement** | L'emplacement recherché |
| **Résultats** | Nombre total d'entreprises trouvées |
| **Date** | Date d'exécution de la recherche |
| **Actions** | Afficher ou Supprimer |

### Actions de l'historique

- **Afficher** (icône en forme d'œil) : Charge les résultats historiques dans l'onglet Recherche
- **Supprimer** (icône de corbeille) : Supprime définitivement l'enregistrement de recherche

### Actualiser l'historique

- Cliquez sur le bouton **Actualiser** pour recharger la liste de l'historique
- L'historique se charge automatiquement lorsque vous cliquez sur l'onglet Historique

## Bonnes pratiques

### 1. Stratégie de mots-clés

- **Soyez spécifique** : Utilisez des types d'entreprise précis
  - ✅ `restaurant italien`
  - ❌ `nourriture`
- **Essayez des variantes** : Recherchez plusieurs termes pour une couverture exhaustive
  - `dentiste` et `cabinet dentaire`
  - `plombier` et `service de plomberie`

### 2. Ciblage géographique

- **Utilisez des emplacements précis** pour de meilleurs résultats :
  - ✅ `Manhattan, New York`
  - ✅ `90210`
  - ❌ `États-Unis`
- **Recherchez plusieurs zones** pour couvrir une région plus large :
  - Exécutez des recherches distinctes pour chaque quartier ou arrondissement

### 3. Paramètre de nombre maximum de résultats

- **Test rapide** : Réglez sur 5 à 10 résultats pour vérifier votre recherche
- **Recherche standard** : 20 résultats (par défaut)
- **Exhaustif** : 50 résultats pour une couverture complète

### 4. Utilisation des proxys

- **Recherche unique** : Proxy non requis
- **Recherches multiples en séquence** : Utilisez 1 à 2 proxys
- **Extraction à grande échelle** : Utilisez 3 proxys ou plus avec rotation

### 5. Utilisation des comptes Google

- **Recommandé** pour les recherches renvoyant plus de 30 résultats
- **Essentiel** lors de l'extraction dans des zones populaires avec de nombreuses entreprises
- Les comptes avec une utilisation active de Google Maps fournissent de meilleurs résultats

## Dépannage

### Échec de la recherche

**Causes possibles :**
- Problèmes de connectivité réseau
- Google Maps a bloqué la requête
- Mot-clé ou emplacement invalide

**Solutions :**
1. Vérifiez votre connexion Internet
2. Essayez un mot-clé ou un emplacement différent
3. Utilisez un compte Google pour un accès authentifié
4. Activez les proxys pour la rotation d'adresses IP
5. Réduisez le paramètre de nombre maximum de résultats

### Aucun résultat trouvé

**Causes possibles :**
- Le mot-clé ne correspond à aucune entreprise dans la zone
- L'emplacement est trop spécifique ou trop vague
- Google Maps a renvoyé des résultats vides

**Solutions :**
1. Essayez des mots-clés plus larges (par exemple, `restaurant` au lieu de `restaurant italien`)
2. Utilisez une ville plus grande ou une zone plus étendue
3. Vérifiez manuellement sur Google Maps que le type d'entreprise existe dans la zone

### Résultats partiels

**Causes possibles :**
- La recherche a été annulée avant la fin
- Certaines fiches d'entreprise ne contenaient pas les données requises
- Une limitation de débit est survenue pendant l'extraction

**Solutions :**
1. Laissez la recherche se terminer complètement
2. Exécutez une autre recherche pour la zone restante
3. Utilisez des proxys pour éviter les limitations de débit

## Intégration avec d'autres fonctionnalités

Les résultats du Google Maps Scraper peuvent être utilisés avec :

- **[Extraction de contacts](./contact-extraction)** — Extrayez les e-mails des sites web d'entreprises trouvés dans les résultats
- **[Pages Jaunes](./yellow-pages)** — Recoupez avec les annuaires pour des données plus complètes
- **[Rédacteur d'e-mails IA](../ai-outreach/ai-email-writer)** — Créez des e-mails de prospection personnalisés en utilisant les données commerciales collectées
- **[Envoi d'e-mails en lot](./batch-email-sending)** — Lancez des campagnes d'e-mails en utilisant les informations de contact extraites

## Prochaines étapes

- [Découvrir le Yandex Maps Scraper](./yandex-maps-scraper)
- [Configurer l'extraction d'e-mails](./contact-extraction)
- [Créer des campagnes d'e-mails alimentées par l'IA](../ai-outreach/ai-email-writer)
