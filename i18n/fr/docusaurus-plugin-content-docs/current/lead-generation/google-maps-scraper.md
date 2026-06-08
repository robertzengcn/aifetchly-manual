---
id: local-business-finder
title: Local Business Finder
sidebar_label: Local Business Finder
description: Extrayez les informations commerciales de Google Maps et Yandex Maps par mot-clé et emplacement avec le Local Business Finder d'aiFetchly.
---

# Local Business Finder

Le Local Business Finder d'aiFetchly vous permet de rechercher des entreprises locales en utilisant deux sources de données : **Google Maps** (couverture mondiale) et **Yandex Maps** (idéal pour les marchés russes et de la CEI). Collectez des données commerciales complètes, y compris les noms, catégories, notes, avis, adresses, numéros de téléphone et URL de sites web.

## Présentation

Le Local Business Finder offre une interface simplifiée pour l'profile insights de données d'entreprises locales :

1. **Choisissez une source de données** — Google Maps ou Yandex Maps
2. **Entrez un mot-clé** (par exemple, « dentiste », « restaurant italien »)
3. **Entrez un emplacement** (par exemple, « Paris », « Moscou », « 75001 »)
4. **Configurez les options** (nombre maximum de résultats, inclusion du site web, avis, etc.)
5. **Lancez la recherche** et suivez la progression en temps réel
6. **Exportez les résultats** en CSV, JSON ou copiez dans le presse-papiers

:::tip Choisir une source de données

- **Google Maps** — Idéal pour les marchés mondiaux et les pays occidentaux. Couverture mondiale supérieure.
- **Yandex Maps** — Essentiel pour la Russie, les pays de la CEI (Kazakhstan, Biélorussie) et la Turquie. Prend en charge la personnalisation de la langue et de la région.

Pour une couverture complète d'une région, effectuez des recherches sur les deux sources de données, puis recoupez et dédupliquez les résultats.

:::

## Accéder au Local Business Finder

1. Cliquez sur **Local Business Finder** dans le menu de navigation de gauche
2. Le assistant s'ouvre avec deux onglets : **Recherche** et **Historique**

## Effectuer une recherche

### Étape 1 : Choisir la source de données

Sélectionnez votre source de données préférée en haut du formulaire de recherche :

| Caractéristique | Google Maps | Yandex Maps |
|-----------------|-------------|-------------|
| **Idéal pour** | Marchés mondiaux, pays occidentaux | Russie, CEI, Turquie |
| **Prise en charge des langues** | Multilingue (automatique) | Langue/région configurable |
| **Couverture des entreprises** | Meilleure au niveau mondial | Meilleure en Russie/CEI |
| **Type de compte** | Compte Google | Compte Yandex |

### Étape 2 : Saisir les critères de recherche

#### Mot-clé commercial (obligatoire)

Entrez un type ou un nom d'entreprise à rechercher :

- **Exemples** : `dentiste`, `restaurant italien`, `plombier`, `agence marketing`
- **Conseil** : Utilisez des types d'entreprise spécifiques pour des résultats plus ciblés
- **Conseil Yandex** : Les mots-clés fonctionnent mieux dans la langue locale (ex. utilisez des mots-clés russes pour les emplacements russes)

#### Emplacement (obligatoire)

Entrez une ville, une adresse ou un code postal :

- **Exemples** : `Paris`, `Londres`, `75001`, `Moscou`, `Saint-Pétersbourg`, `Almaty, Kazakhstan`
- **Conseil** : Des emplacements plus précis donnent des résultats plus pertinents

### Étape 3 : Configurer les options de recherche

#### Nombre maximum de résultats

- **Plage** : 1 à 50 résultats
- **Par défaut** : 20 résultats
- Ajustez le curseur pour contrôler le nombre d'entreprises à extraire

:::info Plafond de résultats

Le nombre maximum de résultats est plafonné à une limite sûre pour garantir une extraction fiable. La plage du curseur de 1 à 50 est la plage configurable par l'utilisateur.

:::

#### Inclure le site web

- **Activé** (par défaut) : Tente d'extraire l'URL du site web de l'entreprise
- **Désactivé** : Ignore l'profile insights du site web pour des résultats plus rapides

#### Inclure les avis

- **Désactivé** (par défaut) : Renvoie uniquement les données de base de l'entreprise
- **Activé** : Inclut les données d'avis dans les résultats (augmente le temps de traitement)

#### Afficher le navigateur

- **Désactivé** (par défaut) : Le navigateur s'exécute en mode headless (plus rapide)
- **Activé** : La fenêtre du navigateur est visible pendant l'profile insights (utile pour le débogage)

:::warning Afficher le navigateur

L'activation de cette option affichera la fenêtre du navigateur sur votre écran pendant la recherche. Ceci est destiné au débogage uniquement et peut ralentir le processus d'profile insights.

:::

### Étape 4 : Paramètres de langue et de région (Yandex Maps uniquement)

Ces paramètres sont spécifiques à Yandex Maps et permettent de personnaliser le contexte de recherche.

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

### Étape 5 : Paramètres de compte et de proxy (facultatif)

#### Compte Google / Compte Yandex

Sélectionnez un compte pour utiliser ses cookies lors de l'profile insights authentifiée :

- **Avantages** :
  - Taux de réussite plus élevé
  - Accès à des informations commerciales plus détaillées
  - Risque réduit d'être bloqué
- Google Maps affiche uniquement les comptes Google ; Yandex Maps affiche uniquement les comptes Yandex

:::tip Ajouter des comptes

Pour ajouter des comptes, accédez à **Paramètres** et configurez vos comptes sociaux. Consultez les [Paramètres système](../settings/system-settings) pour plus de détails.

:::

#### Proxys

Sélectionnez un ou plusieurs proxys pour alterner pendant la recherche :

- **Avantages** :
  - Répartit les requêtes sur plusieurs adresses IP
  - Réduit le risque de détection
  - Essentiel pour l'profile insights à grande échelle
- Sélectionnez plusieurs proxys pour une rotation automatique par requête

:::warning Recommandation de proxy

Pour Yandex Maps, l'utilisation de proxys situés dans la région cible (ex. proxys russes pour les recherches à Moscou) améliore considérablement les taux de réussite.

:::

### Étape 6 : Lancer la recherche

1. Cliquez sur **Lancer la recherche** pour commencer
2. Une barre de progression apparaît affichant l'état de l'profile insights en temps réel
3. La recherche s'exécute de manière asynchrone — vous pouvez continuer à utiliser les autres fonctionnalités
4. Jusqu'à **3 recherches simultanées** peuvent s'exécuter en parallèle

:::info Recherches simultanées

Vous pouvez exécuter jusqu'à 3 recherches en même temps. Si vous tentez d'en lancer une 4e, vous serez invité à attendre la fin de l'une d'entre elles.

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
| **Nom** | Nom de l'entreprise (lien cliquable vers Maps si disponible) |
| **Catégorie** | Catégorie de l'entreprise (par exemple, « Restaurant », « Dentiste ») |
| **Note** | Note en étoiles (avec icône d'étoile) |
| **Avis** | Nombre d'avis |
| **Adresse** | Adresse complète de l'entreprise |
| **Téléphone** | Numéro de téléphone |
| **Site web** | Lien cliquable vers le site web de l'entreprise (tronqué) |

:::tip Cliquer sur les noms d'entreprises

Les noms d'entreprises avec un lien Maps sont cliquables — ils ouvrent la fiche de l'entreprise dans un nouvel onglet.

:::

### En-tête des résultats de recherche

L'en-tête affiche :

- Le nombre total d'entreprises trouvées
- Le mot-clé de recherche utilisé
- L'emplacement recherché

### Aucun résultat

Si aucune entreprise n'est trouvée, un message s'affiche indiquant qu'aucun résultat ne correspond à vos critères de recherche. Essayez de :

- Utiliser des mots-clés plus larges
- Utiliser des mots-clés dans la langue locale (pour Yandex Maps)
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
3. Le nom du fichier inclut le mot-clé et l'emplacement (par exemple, `maps-dentiste-Paris.csv`)

**Colonnes CSV incluses :**
Nom, Catégorie, Note, Nombre d'avis, Adresse, Téléphone, Site web, Horaires, URL Maps

### Exporter en JSON

1. Cliquez sur **Exporter JSON** dans l'en-tête des résultats
2. Un fichier JSON se télécharge avec toutes les données des résultats
3. Le nom du fichier suit la même convention que les exports CSV

## Historique des recherches

L'onglet **Historique** conserve toutes vos recherches passées.

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
- **Utilisez la langue locale pour Yandex** : Mots-clés en russe pour les emplacements russes
  - ✅ `стоматолог` (dentiste en russe) pour Moscou
  - ✅ `dentiste` pour les zones francophones

### 2. Ciblage géographique

- **Utilisez des emplacements précis** pour de meilleurs résultats :
  - ✅ `Manhattan, New York`
  - ✅ `Moscou`
  - ✅ `75001`
  - ❌ `France` ou `Russie` (trop large)
- **Recherchez plusieurs zones** pour couvrir une région plus large :
  - Exécutez des recherches distinctes pour chaque quartier ou arrondissement

### 3. Paramètre de nombre maximum de résultats

- **Test rapide** : Réglez sur 5 à 10 résultats pour vérifier votre recherche
- **Recherche standard** : 20 résultats (par défaut)
- **Exhaustif** : 50 résultats pour une couverture complète

### 4. Langue et région (Yandex Maps)

- **Définissez la langue sur `ru`** pour les régions russophones
- **Définissez la région pour qu'elle corresponde au pays cible** pour de meilleurs résultats
- **Laissez vide** si vous n'êtes pas sûr — Yandex utilisera les valeurs par défaut en fonction de l'emplacement

### 5. Utilisation des proxys

- **Recherche unique** : Proxy non requis
- **Recherches multiples en séquence** : Utilisez 1 à 2 proxys
- **Profile Insights à grande échelle** : Utilisez 3 proxys ou plus avec rotation
- **Yandex Maps** : Utilisez des proxys locaux (proxys russes pour les recherches en Russie)

### 6. Utilisation des comptes

- **Compte Google** : Recommandé pour les recherches renvoyant plus de 30 résultats ; essentiel dans les zones populaires avec de nombreuses entreprises
- **Compte Yandex** : Recommandé pour toutes les recherches Yandex Maps ; essentiel pour les villes russes avec de nombreuses entreprises
- Les comptes avec une utilisation active fournissent de meilleurs résultats

## Dépannage

### Échec de la recherche

**Causes possibles :**
- Problèmes de connectivité réseau
- Le service de Maps a bloqué la requête
- Mot-clé ou emplacement invalide

**Solutions :**
1. Vérifiez votre connexion Internet
2. Essayez un mot-clé ou un emplacement différent
3. Utilisez un compte pour un accès authentifié
4. Activez les proxys — de préférence avec des IP dans la région cible
5. Réduisez le paramètre de nombre maximum de résultats
6. (Yandex Maps) Essayez de définir les codes de langue et de région corrects

### Aucun résultat trouvé

**Causes possibles :**
- Le mot-clé ne correspond à aucune entreprise dans la zone
- L'emplacement est trop spécifique ou trop vague
- Paramètre de langue ou de région incorrect (Yandex Maps)

**Solutions :**
1. Essayez des mots-clés plus larges ou dans la langue locale
2. Utilisez une ville plus grande ou une zone plus étendue
3. Vérifiez manuellement sur le service de Maps que le type d'entreprise existe dans la zone
4. (Yandex Maps) Vérifiez vos paramètres de langue et de région

### Résultats partiels

**Causes possibles :**
- La recherche a été annulée avant la fin
- Certaines fiches d'entreprise ne contenaient pas les données requises
- Une limitation de débit est survenue pendant l'profile insights

**Solutions :**
1. Laissez la recherche se terminer complètement
2. Exécutez une autre recherche pour la zone restante
3. Utilisez des proxys pour éviter les limitations de débit

## Intégration avec d'autres fonctionnalités

Les résultats du Local Business Finder peuvent être utilisés avec :

- **[Profile Insights de contacts](./contact-extraction)** — Ouvrir dans le profile insights de contacts à partir des sites web d'entreprises trouvés dans les résultats
- **[Pages Jaunes](./yellow-pages)** — Recoupez avec les annuaires pour des données plus complètes
- **[Rédacteur d'e-mails IA](../ai-outreach/ai-email-writer)** — Créez des e-mails de prospection personnalisés en utilisant les données commerciales collectées
- **[Envoi d'e-mails en lot](./batch-email-sending)** — Lancez des campagnes d'e-mails en utilisant les informations de contact extraites

## Prochaines étapes

- [Configurer le profile insights de contacts](./contact-extraction)
- [Créer des campagnes d'e-mails alimentées par l'IA](../ai-outreach/ai-email-writer)
