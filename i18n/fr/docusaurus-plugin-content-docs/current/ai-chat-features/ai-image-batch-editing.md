---
id: ai-image-batch-editing
title: Batch Image Editing
sidebar_label: Batch Image Editing
description: Appliquez la même édition à 50 images générées d'un coup. Travail isolé par image, concurrence limitée, progression en direct, arrêt et relance des éléments en échec.
---

# Batch Image Editing

L'édition par lot applique **une même instruction à de nombreuses images**. Au lieu de les modifier une par une, aiFetchly exécute un travail en arrière-plan borné avec une édition isolée par image et affiche une unique carte de progression dans la conversation. Travaux typiques :

- « Donne un fond blanc aux 20 photos produit. »
- « Éclaircis toutes les images de cette génération. »
- « Ajoute mon texte de filigrane dans chacune de ces images. »

## Quand l'édition par lot est utilisée

Vous aboutissez à un lot de trois façons :

1. **Vous demandez la même édition pour plus de trois images.** Les requêtes directes du chat transportent au maximum trois images ; un ensemble plus grand est donc automatiquement routé vers un lot (aiFetchly vous demande d'abord de confirmer).
2. **Vous sélectionnez quatre images ou plus dans la barre de références.** aiFetchly propose : « Plus de 3 images ont été sélectionnées. Les traiter plutôt comme un lot d'éditions indépendantes ? ». Confirmez pour démarrer le lot, ou refusez et éditez trois images à la fois.
3. **Vous demandez un grand ensemble numéroté**, par exemple « édite de l'image 4 à l'image 12 ». La même confirmation apparaît avant toute exécution.

:::info Confirmé avant tout coût

La confirmation du lot affiche toujours le nombre exact avant le démarrage. Rien ne s'exécute, et aucun usage d'IA n'est facturé, tant que vous ne confirmez pas.

:::

## Exécuter un lot

1. **Générez ou sélectionnez les images** à modifier (voir [AI Image Generation & Editing](./ai-image-generation)).
2. **Envoyez une instruction** valable pour toutes, par exemple « remplace l'arrière-plan par du blanc sur toutes ».
3. **Confirmez le lot** quand la boîte de dialogue « Traiter par lot ? » apparaît. Elle indique combien d'images seront modifiées.
4. **Suivez la carte de progression** dans la conversation (détails ci-dessous). Les résultats apparaissent dès que chaque élément est enregistré de façon durable.
5. **Traitez le résultat** : téléchargez ou relisez les images terminées, et relancez ce qui a échoué.

## La carte de progression

Une seule carte suit tout le travail. Elle ne noie jamais la conversation sous un message par image :

- **Ligne de synthèse** : `{completed} sur {requested} terminées · concurrence {concurrency}` plus le statut du travail (en cours, terminé, partiel, échoué, annulé).
- **Arrêter le lot** : arrête le travail à tout moment. Les images déjà terminées restent enregistrées ; les éléments jamais démarrés sont marqués annulés.
- **Section de défaillances dépliable** : liste chaque élément en échec avec son nom de fichier et un motif bref.
- **Réessayer les éléments en échec (N)** : une fois le travail terminé, relance uniquement les éléments échoués ou annulés. Les images réussies ne sont jamais retraitées.

### Le succès partiel est sans danger

Si 18 images sur 20 réussissent, vous conservez ces 18 résultats. L'échec d'une image n'annule pas ses voisines. Cliquez sur **Réessayer les éléments en échec** pour retenter les deux échecs.

## Comment un lot s'exécute

L'édition par lot est conçue pour l'échelle sans alourdir le chat :

- **Une image, un travail.** Chaque image est modifiée par sa propre requête IA isolée avec l'instruction partagée. La correspondance entrée-sortie est préservée : les résultats sont rapportés dans l'ordre de sélection des images, pas dans l'ordre d'achèvement.
- **Concurrence bornée.** Jusqu'à **3 images** sont traitées en même temps (réglable entre 1 et 3 par le coordinateur). Un travail de 50 images équivaut à 50 petites requêtes, pas à une seule géante.
- **Chat parent léger.** La conversation principale ne reçoit que la progression, les synthèses et les images finies. Les octets d'image et les transcriptions par élément restent dans les travailleurs isolés, ce qui garde la conversation fluide pendant et après un long lot.
- **Sorties durables.** Chaque image finie est enregistrée localement avant que la carte de progression ne la référence, de sorte que l'expiration des liens temporaires du fournisseur ne peut pas perdre vos résultats.

:::note Chaque image coûte toujours de l'usage d'IA

L'isolation par lot réduit le contexte de la conversation, elle ne rend pas les éditions gratuites. Chaque image représente une opération du modèle d'image. La boîte de confirmation affiche le nombre d'éléments à l'avance, et les mêmes règles d'approbation d'outils que le chat direct s'appliquent.

:::

## Limites

| Limite | Valeur |
|---|---|
| Images par travail par lot | 1 à 50 (les doublons sont retirés automatiquement) |
| Éditions d'images en parallèle | 1 à 3 (par défaut 3) |
| Entrées d'image par requête directe | 3 |
| Même instruction pour tous les éléments | Oui, une instruction partagée par lot |
| Fusion (combiner plusieurs images en une) | Non disponible en lot ; utilisez la voie directe avec 3 images au plus |

## Dépannage

**Certains éléments ont échoué.**
Ouvrez la section de défaillances de la carte de progression pour voir les motifs, puis cliquez sur **Réessayer les éléments en échec (N)**. Seuls les échecs sont relancés.

**« Cette image dépasse la limite de taille »** ou **« Type d'image non pris en charge ».**
L'original stocké est peut-être trop volumineux ou dans un format que l'éditeur ne lit pas (PNG, JPEG et WebP sont pris en charge). Régénérez l'image, ou enregistrez-la dans votre espace de travail, redimensionnez-la ou convertissez-la là-bas, puis lancez l'édition comme lot de fichiers de l'espace de travail.

**« L'image d'origine n'est plus disponible. »**
Le fichier stocké derrière une référence a disparu. Régénérez cette image et démarrez un nouveau lot pour elle.

**« Image editing is unavailable: no edit-capable model is configured ».**
Votre [fournisseur d'IA](../settings/ai-provider) ne propose pas de modèle d'édition d'images. Configurez-en un puis relancez les éléments en échec.

**J'ai arrêté le lot par erreur.**
Les résultats terminés sont déjà enregistrés. Cliquez sur **Réessayer les éléments en échec** une fois le travail terminé : cela reprend aussi les éléments annulés (jamais démarrés).

**Le lot semble bloqué.**
La concurrence est limitée à trois éditions parallèles ; un grand travail prend donc du temps. Consultez la ligne de synthèse : si le compteur de terminaisons cesse de monter longtemps, utilisez **Arrêter le lot** puis relancez les éléments restants.

## Étapes suivantes

- [AI Image Generation & Editing](./ai-image-generation) — génération d'images et édition directe d'une à trois images.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — l'ensemble complet des fonctions du chat, du Mode Plan aux sous-agents.
