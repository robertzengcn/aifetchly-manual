---
id: yandex-maps-scraper
title: Yandex Maps Scraper
sidebar_label: Yandex Maps
description: Extrayez les informations commerciales de Yandex Maps par mot-clé et emplacement avec le Yandex Maps Scraper d'aiFetchly — idéal pour les marchés russe et de la CEI.
---

# Yandex Maps Scraper

Le Yandex Maps Scraper d'aiFetchly vous permet de rechercher des entreprises locales sur Yandex Maps par mot-clé et emplacement. C'est l'outil idéal pour collecter des données commerciales sur les marchés russe et de la CEI, avec prise en charge de la personnalisation de la langue et de la région.

## Présentation

Le Yandex Maps Scraper offre une extraction complète de données d'entreprises locales :

1. **Entrez un mot-clé** (par exemple, « dentiste », « restaurant »)
2. **Entrez un emplacement** (par exemple, « Moscou », « Saint-Pétersbourg », « Russie »)
3. **Configurez les options** (langue, région, nombre maximum de résultats, etc.)
4. **Lancez la recherche** et suivez la progression en temps réel
5. **Exportez les résultats** en CSV, JSON ou copiez dans le presse-papiers

:::tip Idéal pour

Le Yandex Maps Scraper est essentiel pour les entreprises ciblant le marché russe et les pays de la CEI. Yandex Maps offre une couverture supérieure des entreprises locales en Russie, au Kazakhstan, en Biélorussie, en Turquie et dans d'autres régions où Yandex opère.

:::

## Accéder au Yandex Maps Scraper

1. Cliquez sur **Yandex Maps** dans le menu de navigation de gauche
2. Le scraper s'ouvre avec deux onglets : **Recherche** et **Historique**

## Effectuer une recherche

### Étape 1 : Saisir les critères de recherche

#### Mot-clé commercial (obligatoire)

Entrez un type ou un nom d'entreprise à rechercher :

- **Exemples** : `dentiste`, `restaurant`, `plombier`, `agence marketing`
- **Conseil** : Les mots-clés fonctionnent mieux dans la langue locale (par exemple, utilisez des mots-clés en russe pour les emplacements russes)

#### Emplacement (obligatoire)

Entrez une ville ou une région à rechercher :

- **Exemples** : `Moscou`, `Saint-Pétersbourg`, `Russie`, `Almaty, Kazakhstan`
- **Conseil** : Des emplacements plus précis donnent des résultats plus pertinents

### Étape 2 : Configurer les options de recherche

#### Nombre maximum de résultats

- **Plage** : 1 à 50 résultats
- **Par défaut** : 20 résultats
- Ajustez le curseur pour contrôler le nombre d'entreprises à extraire

:::info Limite de résultats

Le nombre maximum de résultats est plafonné à une limite sûre pour garantir une extraction fiable. La plage du curseur de 1 à 50 correspond à la plage configurable par l'utilisateur.

:::

#### Inclure le site web

- **Activé** (par défaut) : Tente d'extraire l'URL du site web de l'entreprise
- **Désactivé** : Ignore l'extraction du site web pour des résultats plus rapides

#### Inclure les avis

- **Désactivé** (par défaut) : Renvoie uniquement les données de base de l'entreprise
- **Activé** : Inclut les données d'avis dans les résultats (augmente le temps de traitement)

#### Afficher le navigateur

- **Désactivé** (par défaut) : Le navigateur s'exécute en mode headless (plus rapide)
- **Activé** : La fenêtre du navigateur est visible pendant l'extraction (utile pour le débogage)

### Étape 3 : Paramètres de langue et de région (facultatif)

Ces paramètres sont spécifiques à Yandex Maps et permettent de personnaliser le contexte de votre recherche.

#### Langue

- Définissez le code de langue de l'interface Yandex Maps
- **Exemples** : `ru` (russe), `en` (anglais), `tr` (turc)
- Laissez vide pour utiliser la langue par défaut
- **Conseil** : Utilisez la langue locale pour de meilleurs résultats de recherche dans cette région

#### Région

- Définissez le code de région pour le contexte de recherche
- **Exemples** : `ru` (Russie), `kz` (Kazakhstan), `by` (Biélorussie)
- Laissez vide pour utiliser la région par défaut
- **Conseil** : Définir la région correcte améliore la précision des résultats

### Étape 4 : Paramètres de compte et de proxy (facultatif)

#### Compte Yandex

Sélectionnez un compte Yandex pour utiliser ses cookies lors de l'extraction authentifiée :

- **Avantages** :
  - Taux de réussite plus élevé
  - Accès à des informations commerciales plus détaillées
  - Risque réduit d'être bloqué
- Seuls les comptes Yandex apparaissent dans le menu déroulant

:::tip Ajouter des comptes

Pour ajouter des comptes Yandex, accédez à **Paramètres** et configurez vos comptes sociaux. Consultez les [Paramètres système](../settings/system-settings) pour plus de détails.

:::

#### Proxys

Sélectionnez un ou plusieurs proxys pour alterner pendant la recherche :

- **Avantages** :
  - Répartit les requêtes sur plusieurs adresses IP
  - Réduit le risque de détection
  - Essentiel pour l'extraction à grande échelle
- Sélectionnez plusieurs proxys pour une rotation automatique par requête

:::warning Recommandation de proxy

Pour l'extraction Yandex Maps, l'utilisation de proxys situés dans la région cible (par exemple, des proxys russes pour les recherches à Moscou) améliore considérablement les taux de réussite.

:::

### Étape 5 : Lancer la recherche

1. Cliquez sur **Lancer la recherche** pour commencer
2. Un indicateur de progression circulaire et une barre de progression apparaissent
3. Un texte d'état en temps réel affiche l'étape d'extraction en cours
4. Un compteur affiche la progression (par exemple, « 5 / 20 entreprises »)
5. Jusqu'à **3 recherches simultanées** peuvent s'exécuter en parallèle

:::info Recherches simultanées

Vous pouvez exécuter jusqu'à 3 recherches Yandex Maps en même temps. Si vous tentez d'en lancer une 4e, vous serez invité à attendre la fin de l'une d'entre elles.

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
| **Nom** | Nom de l'entreprise (lien cliquable vers Yandex Maps si disponible) |
| **Catégorie** | Catégorie de l'entreprise (par exemple, « Restaurant », « Dentiste ») |
| **Note** | Note en étoiles (avec icône d'étoile) |
| **Avis** | Nombre d'avis |
| **Adresse** | Adresse complète de l'entreprise |
| **Téléphone** | Numéro de téléphone |
| **Site web** | Lien cliquable vers le site web de l'entreprise (tronqué) |

:::tip Cliquer sur les noms d'entreprises

Les noms d'entreprises avec un lien Yandex Maps sont cliquables — ils ouvrent la fiche de l'entreprise sur Yandex Maps dans un nouvel onglet.

:::

### En-tête des résultats de recherche

L'en-tête affiche :

- Le nombre total d'entreprises trouvées
- Le mot-clé de recherche utilisé
- L'emplacement recherché

### Aucun résultat

Si aucune entreprise n'est trouvée, un message s'affiche indiquant qu'aucun résultat ne correspond à vos critères de recherche. Essayez de :

- Utiliser des mots-clés plus larges
- Utiliser des mots-clés dans la langue locale
- Élargir la zone de localisation
- Augmenter le paramètre de nombre maximum de résultats

## Exporter les résultats

### Tout copier

1. Cliquez sur **Tout copier** dans l'en-tête des résultats
2. Tous les résultats sont copiés dans votre presse-papiers au format JSON
3. Collez dans n'importe quel éditeur de texte ou tableur

### Exporter en CSV

1. Cliquez sur **Exporter CSV** dans l'en-tête des résultats
2. Un fichier CSV se télécharge automatiquement
3. Le nom du fichier inclut le mot-clé et l'emplacement (par exemple, `yandex-maps-dentiste-Moscou.csv`)

**Colonnes CSV incluses :**
Nom, Catégorie, Note, Nombre d'avis, Adresse, Téléphone, Site web, Horaires, URL Maps

### Exporter en JSON

1. Cliquez sur **Exporter JSON** dans l'en-tête des résultats
2. Un fichier JSON se télécharge avec toutes les données des résultats
3. Le nom du fichier suit la même convention que les exports CSV

## Historique des recherches

L'onglet **Historique** conserve toutes vos recherches Yandex Maps passées.

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

- **Utilisez la langue locale** : Mots-clés en russe pour les emplacements russes
  - ✅ `стоматолог` (dentiste en russe) pour Moscou
  - ✅ `dentist` pour les zones anglophones
- **Soyez spécifique** : Utilisez des types d'entreprise précis
- **Essayez des variantes** : Recherchez plusieurs termes pour une couverture exhaustive

### 2. Ciblage géographique

- **Utilisez des emplacements précis** pour de meilleurs résultats :
  - ✅ `Moscou`
  - ✅ `Saint-Pétersbourg`
  - ✅ `Kazan, Russie`
  - ❌ `Russie` (trop large)
- **Recherchez plusieurs zones** pour couvrir une région plus large

### 3. Langue et région

- **Définissez la langue sur `ru`** pour les régions russophones
- **Définissez la région correspondant au pays cible** pour de meilleurs résultats
- **Laissez vide** si vous n'êtes pas sûr — Yandex utilisera les valeurs par défaut en fonction de l'emplacement

### 4. Utilisation des proxys

- **Utilisez des proxys locaux** (proxys russes pour les recherches en Russie)
- **Recherche unique** : Proxy non requis
- **Recherches multiples** : Utilisez 1 à 2 proxys
- **Extraction à grande échelle** : Utilisez 3 proxys ou plus avec rotation

### 5. Utilisation des comptes Yandex

- **Recommandé** pour toute extraction Yandex Maps
- **Essentiel** lors de l'extraction dans des villes russes avec de nombreuses entreprises
- Les comptes avec une utilisation active de Yandex fournissent de meilleurs résultats

## Comparaison : Google Maps vs. Yandex Maps

| Fonctionnalité | Google Maps Scraper | Yandex Maps Scraper |
|----------------|-------------------|-------------------|
| **Idéal pour** | Marchés mondiaux, pays occidentaux | Russie, CEI, Turquie |
| **Prise en charge linguistique** | Multilingue (automatique) | Langue/région configurable |
| **Couverture commerciale** | Meilleur au niveau mondial | Meilleur en Russie/CEI |
| **Type de compte** | Compte Google | Compte Yandex |
| **Formats d'export** | CSV, JSON | CSV, JSON, Tout copier |
| **Suivi de progression** | Barre de progression | Progression circulaire + texte d'état |

:::tip Utilisez les deux scrapers

Pour une couverture complète d'une région, exécutez des recherches sur Google Maps et Yandex Maps, puis recouisez et dédupliquez les résultats.

:::

## Dépannage

### Échec de la recherche

**Causes possibles :**
- Problèmes de connectivité réseau
- Yandex Maps a bloqué la requête
- Mot-clé ou emplacement invalide

**Solutions :**
1. Vérifiez votre connexion Internet
2. Essayez un mot-clé ou un emplacement différent
3. Utilisez un compte Yandex pour un accès authentifié
4. Activez les proxys — de préférence avec des adresses IP dans la région cible
5. Réduisez le paramètre de nombre maximum de résultats
6. Essayez de définir les codes de langue et de région corrects

### Aucun résultat trouvé

**Causes possibles :**
- Le mot-clé ne correspond à aucune entreprise dans la zone
- L'emplacement est trop spécifique ou trop vague
- Mauvais paramètre de langue ou de région

**Solutions :**
1. Essayez des mots-clés plus larges ou des mots-clés dans la langue locale
2. Utilisez une ville plus grande ou une zone plus étendue
3. Vérifiez sur Yandex Maps que le type d'entreprise existe dans la zone
4. Vérifiez vos paramètres de langue et de région

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

Les résultats du Yandex Maps Scraper peuvent être utilisés avec :

- **[Extraction de contacts](./contact-extraction)** — Extrayez les e-mails des sites web d'entreprises trouvés dans les résultats
- **[Google Maps Scraper](./google-maps-scraper)** — Recoupez avec Google Maps pour une couverture plus large
- **[Pages Jaunes](./yellow-pages)** — Recoupez avec les annuaires
- **[Rédacteur d'e-mails IA](../ai-outreach/ai-email-writer)** — Créez des e-mails de prospection personnalisés en utilisant les données commerciales collectées
- **[Envoi d'e-mails en lot](./batch-email-sending)** — Lancez des campagnes d'e-mails en utilisant les informations de contact extraites

## Prochaines étapes

- [Découvrir le Google Maps Scraper](./google-maps-scraper)
- [Configurer l'extraction d'e-mails](./contact-extraction)
- [Créer des campagnes d'e-mails alimentées par l'IA](../ai-outreach/ai-email-writer)
