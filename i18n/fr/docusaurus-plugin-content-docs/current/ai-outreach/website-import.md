---
id: website-import
title: Importer un site web dans la bibliothèque de connaissances
sidebar_label: Importer depuis le web
description: Transformez des pages web publiques en documents consultables de la bibliothèque de connaissances via une URL — une page, une liste de pages ou une exploration limitée de même origine.
---

# Importer un site web dans la bibliothèque de connaissances

La fonctionnalité **Import Website** vous permet de transformer des pages web publiques en documents consultables de la bibliothèque de connaissances directement depuis une URL, sans avoir à enregistrer la page en tant que fichier au préalable. aiFetchly récupère la page, la convertit en markdown propre et l'indexe via le même pipeline RAG que les fichiers téléversés. Les pages importées sont donc immédiatement disponibles pour [AI Email Writer](./ai-email-writer), [AI Chat](./ai-chat-v2) et la [recherche dans la bibliothèque de connaissances](./knowledge-library).

:::info Abonnement requis

L'import de site web déclenche le découpage (chunking) et la génération d'embeddings, il nécessite donc un abonnement aiFetchly actif avec l'IA activée. Si l'IA n'est pas activée, l'import est bloqué avant toute récupération de page.

:::

## Deux façons d'importer

Vous pouvez importer des pages web de deux manières — les deux produisent des documents identiques dans la bibliothèque de connaissances :

| Méthode | Où | Idéal pour |
|---------|----|-----------|
| **Boîte de dialogue Import Website** | Page Bibliothèque de connaissances → bouton **Import Website** | Imports manuels et contrôlés avec toutes les options |
| **Outil AI Chat** | Demandez à l'assistant dans [AI Chat](./ai-chat-v2) | Imports rapides et conversationnels (« importe notre page tarifs ») |

Le reste de cette page porte sur la boîte de dialogue manuelle. La voie via AI Chat est décrite dans [Importer depuis AI Chat](#importer-depuis-ai-chat) ci-dessous.

## Modes d'import

Choisissez l'un des trois modes dans la boîte de dialogue :

| Mode | Entrée | Quand l'utiliser |
|------|--------|-------------------|
| **Single page** | Une URL (+ titre facultatif) | Vous voulez une page précise |
| **URL list** | Jusqu'à 50 URL, une par ligne | Vous connaissez déjà les pages exactes voulues |
| **Site crawl** | Une URL de départ + limites de pages/profondeur | Vous voulez récupérer un site de docs, une FAQ ou une section en explorant les liens de même origine |

:::tip Un document par page

Chaque page web importée devient **son propre** document de la bibliothèque de connaissances, et non un document géant unique par site. Cela garde les citations précises, facilite la suppression ou la mise à jour de pages individuelles et offre une détection fiable des doublons.

:::

## Utiliser la boîte de dialogue Import Website

### Étape 1 : Ouvrir la boîte de dialogue

1. Ouvrez la page **Knowledge** depuis la navigation de gauche.
2. Cliquez sur **Import Website** dans l'en-tête de la page.

### Étape 2 : Choisir un mode d'import

Sélectionnez **Single page**, **URL list** ou **Site crawl** en haut de la boîte de dialogue. Le formulaire s'adapte au mode choisi.

### Étape 3 : Fournir la ou les URL

- **Single page** et **Site crawl** — saisissez une seule **URL** (en mode exploration, le champ s'appelle **Start URL**). Utilisez une adresse `http://` ou `https://` publique, par ex. `https://example.com/pricing`.
- **URL list** — saisissez une URL par ligne dans le champ **URLs** (50 maximum). Les lignes vides sont ignorées.

### Étape 4 : Définir les options du mode

- **Single page** — définissez facultativement un **Title** pour remplacer celui de la page.
- **URL list** et **Site crawl** — définissez **Max pages** (le nombre de pages à importer).
- **Site crawl** — définissez aussi **Max depth** (le nombre de sauts de liens à suivre depuis l'URL de départ).

### Étape 5 : Ajouter des métadonnées communes (facultatif)

| Champ | Description |
|-------|-------------|
| **Tags** | Étiquettes séparées par des virgules appliquées à chaque page importée (par ex. `pricing, product`). |
| **Author** | Auteur enregistré sur les documents. Par défaut : `Website`. |
| **Description** | Description facultative enregistrée avec les documents. |
| **Duplicate policy** | `Skip duplicates` (par défaut) ou `Allow duplicates`. Voir [Gestion des doublons](#gestion-des-doublons). |

### Étape 6 : Importer et vérifier

Cliquez sur **Import**. Un panneau de progression indique la page en cours, le nombre de liens découverts (mode exploration) et les compteurs importées / ignorées en temps réel.

À la fin de l'import, la boîte de dialogue liste :

- **Imported** — chaque page avec son titre, son URL source et le nombre de blocs créés.
- **Skipped** — chaque URL non importée, avec la raison (doublon, contenu vide, échec de récupération, URL bloquée, …).
- **Discovered** — le nombre de liens de même origine trouvés par l'explorateur (mode exploration).

Utilisez **Import another** pour lancer un nouvel import, ou **Close** pour revenir à la bibliothèque de connaissances. Les pages importées apparaissent dans la liste des documents comme les fichiers téléversés et sont immédiatement consultables.

## Limites

| Limite | Valeur |
|--------|--------|
| Nombre maximum d'URL par **URL list** | 50 |
| Plage de **Max pages** (URL list et Site crawl) | 1–100 (20 par défaut) |
| Plage de **Max depth** (Site crawl) | 0–4 (2 par défaut) |
| Schémas d'URL autorisés | `http://`, `https://` uniquement |
| Portée de l'exploration | Même origine uniquement (pas d'exploration cross-origin) |

Ces plafonds protègent le coût des embeddings et maintiennent les explorations bornées. L'explorateur suit aussi des valeurs conservatrices : faible concurrence et petit délai entre les requêtes.

## Comment le contenu importé est stocké

Chaque page web est convertie en markdown et ingérée via le pipeline RAG standard :

1. **Récupération** — la page est chargée via le scraper basé sur navigateur de aiFetchly (le même moteur que pour l'analyse de sites web).
2. **Extraction et conversion** — la navigation, les scripts, les styles et autres éléments superflus sont supprimés, et le contenu principal est converti en markdown.
3. **Préparation** — le markdown est enregistré comme un document propriété de l'application.
4. **Découpage et embeddings** — le document est découpé et embbedé exactement comme un fichier téléversé.
5. **Indexation** — la page devient consultable et utilisable comme contexte RAG.

Le nom de document généré suit le motif `{hostname}-{path}-{hash}.md` (par exemple `example.com-pricing-a1b2c3d4.md`), et l'URL source est enregistrée avec le document.

:::note Qualité de l'extraction

aiFetchly sélectionne la zone de contenu la plus probable (article, main, conteneurs de docs, avec `body` en repli). La qualité varie selon le site, et les pages avec peu de texte lisible (pages de connexion, d'erreur, applications très JavaScript) peuvent être ignorées pour contenu vide. L'extraction s'améliore au fil du temps.

:::

## Gestion des doublons

Par défaut, aiFetchly **ignore** les pages qui existent déjà dans votre bibliothèque de connaissances afin de la garder propre.

- **Skip duplicates** (par défaut) — les pages en doublon sont ignorées et listées sous **Skipped** avec la raison `duplicate`. Un import de page unique en doublon échoue avec une erreur de doublon.
- **Allow duplicates** — chaque page est importée même si une copie existe déjà. Utilisez-le lorsque vous souhaitez volontairement un second instantané d'une page.

:::info Remplacer une page

Il n'existe pas encore de mode « remplacement » automatique. Pour actualiser une page, supprimez l'ancien document et réimportez l'URL.

:::

## Sécurité et protection

L'import de sites web est conçu pour être sûr par défaut. Pour éviter les abus et les attaques SSRF (Server-Side Request Forgery), aiFetchly rejette :

- Les URL non `http(s)`, y compris `file://`, `mailto:`, `tel:`, `javascript:` et `data:`.
- `localhost`, loopback et les adresses de réseaux privés, link-local et internes.
- Les endpoints de métadonnées cloud (par exemple `169.254.169.254`).
- Les URL contenant des identifiants.
- Les redirections et liens découverts qui pointent vers l'un des éléments ci-dessus.

Les explorations ne quittent jamais l'origine de l'URL de départ. Le contenu importé est traité strictement comme une **connaissance** : il est stocké pour la recherche uniquement et n'est jamais exécuté en tant qu'instruction.

:::warning Pas de sites privés ni authentifiés

Les pages authentifiées, derrière connexion ou sur réseaux internes ne sont pas prises en charge. Importez uniquement des pages publiques.

:::

## Importer depuis AI Chat

Vous pouvez aussi demander à l'assistant d'[AI Chat](./ai-chat-v2) d'importer des pages web. L'assistant utilise l'outil `knowledge_library_import_website` et demandera confirmation avant toute récupération.

Exemples :

```text
Importe https://example.com/pricing dans ma bibliothèque de connaissances et étiquette-le pricing.
```

```text
Importe les pages de docs de https://example.com/docs dans la bibliothèque de connaissances.
```

```text
Explore jusqu'à 25 pages depuis https://example.com/docs et importe-les comme documents de site web.
```

L'assistant confirmera le mode, la ou les URL, les limites, les étiquettes et la politique de doublons, puis résumera combien de pages ont été importées et ignorées.

## Dépannage

| Symptôme | Cause probable | Que faire |
|----------|----------------|-----------|
| **« Import failed »** avant tout chargement de page | IA/abonnement non activé | Activez l'IA dans votre abonnement et réessayez. |
| Page sous **Skipped** comme `URL_BLOCKED` | L'URL est privée/localhost/non http(s) | Utilisez une URL `http(s)` publique. |
| Page comme `EMPTY_CONTENT` | Peu de texte lisible (connexion/erreur, JS uniquement) | Essayez une autre URL ou vérifiez la page dans le navigateur. |
| Page comme `SCRAPE_FAILED` | Le site a bloqué le scraper ou a expiré | Réessayez plus tard ou réduisez le nombre de pages. |
| Page comme `duplicate` | La page existe déjà dans la bibliothèque | Utilisez **Allow duplicates** ou supprimez d'abord l'ancien document. |
| L'exploration a importé moins de pages que prévu | Limite **Max pages** / **Max depth** atteinte, ou peu de liens de même origine | Augmentez les limites ou confirmez que le site pointe vers les pages voulues. |
| La page importée n'est pas utilisée dans le contenu IA | Le contexte RAG n'est pas activé, ou le contenu n'est pas pertinent | Activez le contexte RAG dans AI Chat / Email Writer et vérifiez que le statut du document est **Completed**. |

## Prochaines étapes

- [Bibliothèque de connaissances](./knowledge-library) — gérer, rechercher, ré-embbeder et supprimer les pages importées.
- [AI Chat V2](./ai-chat-v2) — importer des pages web de façon conversationnelle et rechercher dans votre bibliothèque.
- [AI Email Writer](./ai-email-writer) — utiliser les connaissances de sites web importées pour personnaliser vos prospections.
