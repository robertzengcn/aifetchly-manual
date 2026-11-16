---
id: ai-image-generation
title: AI Image Generation & Editing
sidebar_label: AI Image Generation & Editing
description: Générez des images en discutant avec l'IA, modifiez-les avec un message ultérieur (sans espace de travail), sélectionnez et ordonnez jusqu'à trois images, et confiez les grands travaux à l'édition par lot.
---

# AI Image Generation & Editing

Vous pouvez créer et retoucher des images sans quitter le chat. Demandez une image, recevez-la directement dans la conversation, puis dites ce qu'il faut changer, par exemple « add a dog into the image ». Modifier vos propres images générées par chat **ne nécessite pas** d'espace de travail. L'espace de travail n'est requis que pour les fichiers de projet et pour enregistrer des images dans un projet.

En résumé :

- **Générez** des images avec un message de chat.
- **Modifiez**-les avec un message ultérieur, sans outil et sans espace de travail.
- **Sélectionnez et ordonnez** jusqu'à trois images générées par requête, y compris leur combinaison en une seule composition.
- **Appliquez une même édition à de nombreuses images** avec l'[édition par lot](./ai-image-batch-editing) (jusqu'à 50 images).

![Édition d'images par lot dans AI Chat Workspace](/img/ai-image-editing.png)

## Générer des images

Décrivez ce que vous voulez dans le composeur du chat et envoyez le message :

- « Génère une image d'un lion dans la savane au coucher du soleil. »
- « Crée une photo produit d'une basket blanche sur une table en bois. »
- « Dessine un robot sympathique comme mascotte pour une app de codage pour enfants. »

L'IA diffuse sa progression comme une réponse de chat normale. Quand l'image est prête, elle apparaît dans la conversation. Si une génération produit plusieurs images, elles s'affichent sous forme de grille numérotée.

Les images générées sont stockées **sur votre machine**, organisées par compte et par conversation. Le chat ne dépend pas de liens temporaires du fournisseur : les images d'hier s'ouvrent encore aujourd'hui. Aucune galerie publique : les images appartiennent à la conversation où vous les avez générées.

## Modifier une image générée

### Option 1 : demandez simplement

Dans le cas courant, vous n'avez rien à sélectionner. Après la génération d'une image, envoyez un message du type :

- « Ajoute un chien dans l'image. »
- « Rends le ciel orageux. »
- « Remplace l'arrière-plan par du blanc. »

aiFetchly détermine l'image visée grâce à une **logique locale déterministe** (ce n'est pas le modèle d'IA qui devine des chemins) :

| Ce que vous dites | Ce qu'aiFetchly joint |
|---|---|
| « cette image », « l'image », « it » et la dernière génération contient **une** image | Cette image |
| « image 2 », « la deuxième image » | L'image à cette position dans la dernière génération |
| « les deux », « toutes » | Toutes les images de la dernière génération (jusqu'à trois) |
| Une édition qui s'applique clairement à **plus de trois** images | Propose l'[édition par lot](./ai-image-batch-editing) |

Si votre formulation peut désigner plusieurs images, aiFetchly ne devine pas. Un sélecteur affiche les images candidates et vous choisissez celle visée.

:::tip La sélection explicite prime toujours

Toute image sélectionnée dans la barre de références remplace l'inférence automatique. Pour être sûr que la bonne image est utilisée, sélectionnez-la vous-même (section suivante).

:::

### Option 2 : choisissez l'image vous-même

Chaque image générée de la conversation propose des actions au survol :

| Action | Effet |
|---|---|
| **Utiliser comme référence** | Ajoute l'image à la barre de références du composeur (cliquez à nouveau pour la retirer). |
| **Modifier** | Ajoute l'image comme seule référence et active le composeur, prêt pour votre instruction. |
| **Open** | Ouvre le fichier image sur votre ordinateur. |
| **Enregistrer dans l'espace de travail** | Exporte l'image vers l'espace de travail de votre projet. Nécessite un espace de travail approuvé. |
| **Tout enregistrer** | (Réponses multi-images) Exporte toutes les images de cette réponse d'un coup. |

### La barre de références

Les images sélectionnées apparaissent comme des vignettes ordonnées au-dessus du composeur :

1. Les vignettes affichent leur ordre de sélection : **1**, **2**, **3**.
2. Utilisez **Monter** et **Descendre** sur une vignette pour changer l'ordre. L'ordre compte quand vous combinez des images (« mets l'image 1 à gauche et l'image 2 à droite »).
3. Retirez une vignette avec **Supprimer**, ou videz la barre avec **Tout effacer**.
4. La barre affiche un rappel à la limite : « Vous pouvez référencer jusqu'à 3 images par requête. »
5. Le contenu de la barre est limité à la conversation en cours et n'est envoyé qu'avec votre message.

Les images téléversées et les références d'images générées partagent la même limite : au maximum **trois entrées d'image** par requête de chat. Deux téléversements plus deux références, c'est trop pour une seule requête ; envoyez l'image en plus dans le message suivant ou utilisez l'édition par lot pour des éditions indépendantes.

## Édition multi-images et fusion

Avec deux ou trois références sélectionnées, vous pouvez :

- **Appliquer le même changement à chaque image** : « donne un fond blanc aux deux ».
- **Combiner des images en une seule** : « fusionne-les en une affiche, produit à gauche, logo à droite ».

La fusion est limitée à **trois images à la fois**. Pour davantage, modifiez-les séparément ou utilisez l'[édition par lot](./ai-image-batch-editing) pour des éditions indépendantes.

## Modifier des images de l'espace de travail

Les images présentes dans votre **espace de travail de projet** (fichiers sur disque joints à la tâche) conservent les règles de l'espace de travail :

- Modifier ou analyser une image de l'espace de travail requiert un **espace de travail approuvé**.
- Appliquer une même édition à de nombreux fichiers de l'espace de travail suit le même flux par lot que les images générées, avec l'exigence d'espace de travail maintenue.

Les images générées par chat évitent tout cela. Ce sont des artefacts de conversation, elles se résolvent donc sans aucun espace de travail. C'est tout l'intérêt : vous ne devriez jamais avoir à exporter une image dans un dossier simplement pour continuer à la modifier.

## Limites

| Limite | Valeur |
|---|---|
| Entrées d'image par requête de chat (téléversements + références combinés) | 3 |
| Images par travail par lot | 1 à 50 |
| Images par fusion (combinaison) par requête | 3 |
| Formats pris en charge | PNG, JPEG, WebP |
| Taille d'une image générée stockée | jusqu'à ~20 Mo par image |
| Normalisation de l'image envoyée | grand côté jusqu'à 1568 px, cible ~1,5 Mo |

L'envoi ne renvoie jamais les images des tours précédents. Seul ce que vous avez sélectionné ou clairement référencé dans le message courant est inclus, ce qui garde les conversations riches en images rapides et économiques.

## Dépannage

**« Plusieurs images pourraient correspondre à votre demande. »**
Votre formulation (comme « cette image ») correspondait à une génération ayant produit plusieurs images. Choisissez l'image visée dans le sélecteur, ou sélectionnez-la dans la barre de références.

**« Vous ne pouvez référencer que des images générées dans cette conversation. »**
Les références sont limitées à la conversation où l'image a été générée. Générez l'image ici, ou copiez le fichier dans votre espace de travail et joignez-le là-bas.

**« L'image d'origine n'est plus disponible. »**
Le fichier stocké a disparu (par exemple à cause d'un nettoyage du stockage). Régénérez l'image ou choisissez-en une autre.

**« Image editing is unavailable: no edit-capable model is configured ».**
Votre [fournisseur d'IA](../settings/ai-provider) ne propose pas de modèle d'édition d'images. Passez à un fournisseur ou un modèle qui prend en charge l'édition d'images.

**« Unsupported image type » / « exceeds the size limit ».**
Les images générées conviennent généralement, mais les téléversements et exports doivent être des fichiers PNG, JPEG ou WebP dans les limites ci-dessus. Convertissez ou redimensionnez d'abord l'image.

**aiFetchly demande un espace de travail pour modifier une image.**
Cela ne se produit que pour les **fichiers de l'espace de travail**. Les images générées par chat n'en ont jamais besoin. Si vous modifiez un fichier de projet, approuvez d'abord l'espace de travail, ou exportez l'image générée vers l'espace de travail et continuez là-bas.

## Étapes suivantes

- [Batch Image Editing](./ai-image-batch-editing) — appliquez une même édition à 50 images au maximum, avec progression, arrêt et relance.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — l'ensemble complet des fonctions du chat, du Mode Plan aux sous-agents.
