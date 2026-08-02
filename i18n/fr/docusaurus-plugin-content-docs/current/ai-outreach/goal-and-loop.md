---
id: goal-and-loop
title: Commandes d'objectif et de boucle
sidebar_label: Objectifs et Boucles
description: Définissez un objectif durable avec /goal et exécutez un travail autonome borné et fondé sur des preuves vers celui-ci avec /loop dans AI Chat V2.
---

# Commandes d'objectif et de boucle

Les commandes slash **`/goal`** et **`/loop`** vous permettent de donner à l'assistant AI Chat V2 un objectif durable, puis de lui demander de continuer à travailler vers cet objectif par étapes bornées et vérifiables — au lieu de le solliciter tour par tour.

`/goal` capture ce que signifie « terminé », y compris des critères d'acceptation explicites et vérifiables. `/loop` exécute ensuite un nombre borné d'itérations autonomes vers cet objectif, en recueillant des preuves fraîches et en vérifiant chaque critère avant que l'objectif puisse être marqué comme terminé.

:::info AI Chat V2 uniquement

`/goal` et `/loop` sont des commandes slash intégrées disponibles dans le compositeur d'**[AI Chat V2](./ai-chat-v2)**. Elles nécessitent un abonnement aiFetchly actif avec l'IA activée et réutilisent les limites existantes d'AI Chat V2 : [Mode Plan](./ai-chat-v2), validation des outils et sécurité de l'espace de travail.

:::

## Relation entre les deux commandes

| Commande | Ce qu'elle fait | Requiert |
|---|---|---|
| `/goal <objective>` | Crée ou remplace l'objectif actif de la conversation et entre en Mode Plan. | Un objectif non vide. |
| `/loop <maxIterations>` | Exécute jusqu'à ce nombre d'itérations autonomes vers l'objectif actif. | Un objectif actif déjà défini avec `/goal`. |

Un flux typique :

```text
/goal Build a Facebook campaign scraper and verify it works
(approuvez le plan et ses critères d'acceptation en Mode Plan)
/loop 5
```

## `/goal` — définir un objectif durable

### Syntaxe

```text
/goal <objective>
```

Exemple :

```text
/goal Build a Facebook campaign scraper and verify it works
```

### Ce qui se passe

1. L'objectif devient l'**objectif actif** de la conversation courante.
2. AI Chat entre en **Mode Plan**. L'assistant pose des questions de clarification lorsque l'objectif est ambigu.
3. L'assistant propose un plan comprenant un ou plusieurs **critères d'acceptation** — des conditions concrètes et vérifiables qui définissent ce que signifie « terminé ».
4. Vous approuvez (ou rejetez ou demandez des modifications au) plan via le flux normal d'approbation du Mode Plan.
5. L'objectif reste actif pour la conversation jusqu'à ce qu'il soit **terminé**, **bloqué** ou **annulé**.

Relancer `/goal` remplace l'objectif actif actuel.

### Critères d'acceptation et vérification

Chaque critère d'acceptation est vérifié automatiquement — l'objectif n'est pas terminé seulement parce que l'assistant le dit. Chaque critère possède une méthode de vérification :

| Méthode | Comment le critère est vérifié |
|---|---|
| **command** | Une commande se termine avec succès, correspondant éventuellement à un code de sortie ou à un motif de sortie attendu. |
| **file** | Un fichier ou un état de projet attendu est présent, par exemple un fichier existe ou a changé. |
| **manual** | La boucle se met en pause et vous demande confirmation. |
| **llm** | Un vérificateur indépendant évalue les preuves recueillies pour les critères qui ne peuvent pas être vérifiés de manière déterministe. |

Un critère peut être marqué comme **requis** ou facultatif. L'objectif ne peut être marqué terminé que lorsque **chaque critère requis** passe avec des preuves fraîches.

:::tip Rédigez des objectifs vérifiables

`/goal` fonctionne mieux lorsque « terminé » est quelque chose que l'application peut vérifier. Un objectif comme « construire le scraper et vérifier qu'il fonctionne » — avec un critère tel que « la commande de test sort avec le code 0 » — est bien plus fiable qu'un objectif subjectif comme « rendre le scraper bon ».

:::

## `/loop` — exécuter des itérations bornées

### Syntaxe

```text
/loop <maxIterations>
```

`<maxIterations>` est un entier compris entre **1 et 10**. Fournissez-le explicitement — si vous l'omettez ou passez une valeur hors de cette plage, `/loop` demande un nombre valide. `/loop` **requiert également un objectif actif** ; si vous n'en avez pas défini, il vous indique de lancer `/goal` d'abord.

Exemple :

```text
/loop 5
```

### Ce que fait chaque itération

Chaque itération exécute le même cycle observer → agir → vérifier :

```text
Observer l'état courant
  → l'assistant propose une prochaine action bornée
  → les outils approuvés l'exécutent
  → le système recueille des preuves fraîches
  → les vérifications déterministes s'exécutent d'abord
  → un vérificateur indépendant évalue les critères restants
  → la boucle continue, se termine, se bloque ou demande une entrée
```

La progression s'affiche dans la conversation pendant l'exécution de la boucle — nombre d'itérations, résumés des preuves recueillies et résultats de vérification par critère.

### Quand la boucle s'arrête

`/loop` ne s'exécute jamais indéfiniment. Elle s'arrête dès que l'une de ces conditions est vraie :

- Vous appuyez sur **Stop**.
- Le nombre maximal d'itérations est atteint.
- La limite de temps par exécution est atteinte.
- L'objectif est **terminé** — chaque critère requis est passé avec des preuves fraîches.
- Un outil nécessite votre approbation, ou le Mode Plan nécessite une approbation.
- L'assistant doit vous poser une question.
- Le même échec se répète suffisamment de fois, donc l'objectif passe à **bloqué**.
- Le vérificateur renvoie `blocked` ou `needs_user_input`.
- Une erreur non récupérable se produit.

### Comment l'achèvement est décidé

L'assistant qui effectue le travail **ne peut pas marquer son propre objectif terminé** par déclaration. L'achèvement exige des **preuves fraîches et spécifiques au critère** — par exemple, un test qui a réussi *après* la dernière modification de code, pas un résultat périmé d'avant.

Les vérifications déterministes (commandes, état des fichiers) s'exécutent d'abord. Le vérificateur LLM indépendant n'est utilisé que pour les critères qui ne peuvent pas être vérifiés de manière déterministe, et il renvoie des verdicts structurés (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) liés à des preuves spécifiques — jamais un « done » en texte libre.

## État de l'objectif et de la boucle

Un objectif passe par les états suivants :

| État | Signification |
|---|---|
| **draft** | L'objectif est en cours de définition en Mode Plan. |
| **active** | Approuvé et en attente d'exécution ou de continuation. |
| **running** | Un `/loop` exécute une itération. |
| **complete** | Tous les critères requis sont passés avec des preuves fraîches. |
| **blocked** | Échecs répétés ou bloqueur non résolu — nécessite votre attention. |
| **needs_user_input** | La boucle s'est mise en pause pour vous poser une question ou obtenir une confirmation. |
| **failed** | Une erreur non récupérable a terminé l'exécution. |
| **cancelled** | Vous l'avez arrêtée. |

## Limites et sécurité

| Limite | Valeur |
|---|---|
| Nombre d'itérations (`/loop`) | 1–10 (fournissez-le explicitement) |
| Plafond de temps par exécution | 10 minutes (par défaut) |
| Échecs identiques avant **bloqué** | 3 |
| Objectifs actifs par conversation | Un (définir un nouvel objectif remplace l'ancien) |

Garanties de sécurité toujours applicables :

- La boucle est toujours **bornée** — jamais infinie.
- Elle est toujours **annulable** (appuyez sur Stop).
- L'activation de l'IA, le mode d'approbation des outils, le Mode Plan et les limites de sécurité de l'espace de travail et des fichiers continuent de s'appliquer pendant une boucle.
- Les actions destructrices, les nouvelles dépendances, les changements d'authentification et les autres effets de bord à fort impact nécessitent toujours la limite d'approbation habituelle — même en pleine boucle.
- Les preuves et journaux montrés au vérificateur sont filtrés, limités en taille et caviardés de secrets, et traités comme données non fiables — jamais comme des instructions.

## Conseils

### À FAIRE ✅

- **Définissez un objectif avant de boucler** — `/loop` a toujours besoin d'un `/goal` actif.
- **Rendez les objectifs vérifiables** — privilégiez les critères que l'application peut vérifier (une commande, un fichier) aux subjectifs.
- **Commencez par un petit nombre** (`/loop 3`) pour inspecter la progression avant de vous engager sur plus.
- **Gardez le Mode Plan activé** pour les objectifs qui modifient des fichiers, envoient de l'outreach ou exécutent beaucoup d'appels d'outils.

### À NE PAS FAIRE ❌

- **N'attendez pas d'autonomie sans limite** — `/loop` nécessite toujours un nombre explicite de 1 à 10.
- **Ne vous fiez pas à un simple « done »** — l'achèvement est fondé sur des preuves ; si un critère requis n'est pas passé, l'objectif n'est pas terminé.

## Dépannage

| Symptôme | Cause probable | Que faire |
|---|---|---|
| *"Set a goal first with /goal"* | Aucun objectif actif dans cette conversation | Lancez `/goal <objective>` et approuvez le plan d'abord. |
| *"Please provide an iteration count"* | `/loop` a été appelé sans nombre | Fournissez un nombre, par exemple `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Le nombre manque, est zéro ou supérieur à 10 | Utilisez un entier de 1 à 10. |
| L'objectif est **bloqué** | Le même échec s'est répété (3 fois par défaut) | Lisez le motif de l'échec dans la conversation, traitez la cause racine, puis relancez `/loop` ou ajustez l'objectif. |
| L'objectif reste en **needs_user_input** | La boucle attend votre réponse ou votre approbation | Répondez à la question ou approuvez l'action en attente. |
| La boucle s'est arrêtée tôt | Une approbation, une approbation de plan ou une question était requise | Approuvez l'élément en attente et relancez `/loop` pour continuer. |

## Étapes suivantes

- [AI Chat V2](./ai-chat-v2) — le chat où vivent `/goal` et `/loop`, y compris le Mode Plan.
- [Commandes Slash](./slash-commands) — la liste complète des commandes intégrées et comment créer les vôtres.
- [Sous-agents](./subagents) — spécialistes ciblés vers lesquels l'assistant peut déléguer pendant une boucle.
