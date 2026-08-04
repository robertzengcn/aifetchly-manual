---
id: goal-and-loop
title: Commandes d'objectif et de boucle
sidebar_label: Objectifs et boucles
description: Définissez un objectif durable avec /goal, exécutez des itérations bornées vers lui avec /loop, et relancez un prompt à intervalle fixe avec /loop 5m dans AI Chat V2.
---

# Commandes d'objectif et de boucle

Les commandes slash **`/goal`** et **`/loop`** vous permettent de donner à l'assistant AI Chat V2 un objectif durable, puis de travailler vers cet objectif par étapes bornées et vérifiables, ou de relancer un prompt à intervalle fixe — au lieu de le solliciter tour par tour.

`/goal` capture ce que signifie « terminé », y compris des critères d'acceptation explicites et vérifiables. `/loop` a alors **deux modes** :

- **Boucle d'objectif** — `/loop 5` exécute un nombre limité d'itérations autonomes vers l'objectif actif, en recueillant des preuves récentes et en vérifiant chaque critère avant que l'objectif ne puisse être marqué comme terminé.
- **Boucle planifiée** — `/loop 5m check the deployment` relance un prompt à intervalle fixe (toutes les 5 minutes, toutes les 2 heures, …) afin que vous puissiez surveiller un travail qui évolue dans le temps. Chaque occurrence et chaque réponse restent dans la même conversation.

:::info AI Chat V2 uniquement

`/goal` et `/loop` sont des commandes slash intégrées disponibles dans le composeur d'**[AI Chat V2](./ai-chat-v2)**. Elles nécessitent un abonnement aiFetchly actif avec l'IA activée et réutilisent le [Plan Mode](./ai-chat-v2), l'approbation d'outils et les limites de sécurité du workspace déjà existants dans AI Chat V2.

:::

## Les deux modes de `/loop`

Le mode obtenu dépend de ce que vous saisissez après `/loop` :

| Mode | Commande | Ce qu'elle fait | Requiert |
|---|---|---|---|
| **Boucle d'objectif** | `/loop <maxIterations>` | Exécute jusqu'à ce nombre d'itérations autonomes vers l'objectif actif. | Un objectif actif déjà défini avec `/goal`. |
| **Boucle planifiée** | `/loop <duration> <prompt>` | Relance le prompt à intervalle fixe, dans la même conversation. | Un prompt non vide. |
| **Contrôle de boucle planifiée** | `/loop status` · `/loop pause` · `/loop resume` · `/loop stop` | Gère la boucle planifiée de la conversation active. | Une boucle planifiée active dans cette conversation. |

Un entier simple (`/loop 5`) signifie toujours une boucle d'objectif. Une durée (`/loop 5m …`) signifie toujours une boucle planifiée. Les deux modes ne s'entremêlent jamais.

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
2. AI Chat entre en **Plan Mode**. L'assistant pose des questions clarifiantes quand l'objectif est ambigu.
3. L'assistant propose un plan qui inclut un ou plusieurs **critères d'acceptation** — des conditions concrètes et vérifiables qui définissent ce que « terminé » signifie.
4. Vous approuvez (ou rejetez ou demandez des modifications) le plan via le flux d'approbation normal de Plan Mode.
5. L'objectif reste actif pour la conversation jusqu'à ce qu'il soit **terminé**, **bloqué** ou **annulé**.

Relancer `/goal` remplace l'objectif actif courant.

### Critères d'acceptation et vérification

Chaque critère d'acceptation est vérifié automatiquement — l'objectif n'est pas terminé simplement parce que l'assistant le dit. Chaque critère possède une méthode de vérification :

| Méthode | Comment le critère est vérifié |
|---|---|
| **command** | Une commande se termine avec succès, en correspondant éventuellement à un code de sortie ou à un motif attendu. |
| **file** | Un fichier ou un état de projet attendu est présent, par exemple un fichier existe ou a changé. |
| **manual** | La boucle se met en pause et vous demande confirmation. |
| **llm** | Un vérificateur indépendant évalue les preuves recueillies pour les critères non vérifiables de manière déterministe. |

Un critère peut être marqué **requis** ou facultatif. L'objectif ne peut être marqué terminé que lorsque **tous les critères requis** passent avec des preuves récentes.

:::tip Rédigez des objectifs vérifiables

`/goal` fonctionne mieux quand « terminé » est quelque chose que l'application peut vérifier. Un objectif comme « construire le scraper et vérifier qu'il fonctionne » — avec un critère comme « la commande de test sort en 0 » — est bien plus fiable qu'un objectif subjectif comme « rendre le scraper bon ».

:::

## Boucle d'objectif — `/loop <maxIterations>`

### Syntaxe

```text
/loop <maxIterations>
```

`<maxIterations>` est un entier de **1 à 10**. Indiquez-le explicitement — si vous l'omettez ou donnez une valeur hors de cette plage, `/loop` demandera un compteur valide. Une boucle d'objectif **requiert aussi un objectif actif** ; si vous n'en avez pas défini, elle vous invitera à lancer `/goal` d'abord.

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
  → le système recueille des preuves récentes
  → les vérifications déterministes passent d'abord
  → un vérificateur indépendant évalue les critères restants
  → la boucle continue, se termine, se bloque ou demande une entrée
```

La progression s'affiche dans la conversation pendant l'exécution — compteur d'itérations, résumés des preuves et résultats de vérification par critère.

### Quand la boucle d'objectif s'arrête

Une boucle d'objectif ne tourne jamais indéfiniment. Elle s'arrête dès que l'une de ces conditions est vraie :

- Vous appuyez sur **Stop**.
- Le nombre maximal d'itérations est atteint.
- La limite de temps par exécution est atteinte.
- L'objectif est **terminé** — tous les critères requis sont passés avec des preuves récentes.
- Un outil nécessite votre approbation, ou Plan Mode demande une approbation.
- L'assistant doit vous poser une question.
- Le même échec se répète suffisamment de fois, l'objectif passe alors à **bloqué**.
- Le vérificateur renvoie `blocked` ou `needs_user_input`.
- Une erreur non récupérable se produit.

### Comment la fin est décidée

L'assistant qui réalise le travail **ne peut pas marquer son propre objectif terminé** par simple déclaration. La fin nécessite des **preuves récentes et spécifiques au critère** — par exemple, un test qui a réussi *après* la dernière modification de code, pas un résultat périmé antérieur.

Les vérifications déterministes (commandes, état de fichiers) passent d'abord. Le vérificateur LLM indépendant n'est utilisé que pour les critères non vérifiables de manière déterministe, et renvoie des verdicts structurés (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) liés à des preuves spécifiques — jamais un « terminé » en texte libre.

## Boucle planifiée — `/loop <duration> <prompt>`

Une boucle planifiée relance un prompt à intervalle fixe et conserve **chaque occurrence et chaque réponse dans la même conversation**. Elle n'a pas besoin d'objectif et ne crée jamais de nouveau chat à chaque exécution.

```text
/loop 5m check if the deployment finished and tell me what happened
```

Utilisez-la pour surveiller un travail qui évolue dans le temps — déploiements, imports, réponses de campagne, jobs de scraping, approbations externes — sans renvoyer le même prompt à la main.

### Quand utiliser une boucle planifiée

- **Suivi de déploiement** — `/loop 5m check if deployment 218 finished and summarize the result`
- **Suivi de campagne** — `/loop 1h --times 8 -- summarize new campaign replies and flag urgent leads`
- **Imports longs** — `/loop every 15m --for 3h -- check the contact import and report new failures`

Vous pouvez continuer à discuter dans la même conversation entre les occurrences. La prochaine exécution planifiée reprend vos messages interactifs dans son contexte.

### Syntaxe

**Forme courte** — intervalle suivi du prompt :

```text
/loop <duration> <prompt>
```

```text
/loop 5m check if the deployment finished and tell me what happened
/loop 2h summarize any new campaign replies
```

**Forme canonique** — pour des limites explicites, avec un séparateur `--` avant le prompt :

```text
/loop every <duration> [--times <count>] [--for <duration>] -- <prompt>
```

```text
/loop every 5m --times 12 -- check if the deployment finished
/loop every 1h --for 8h -- summarize new campaign replies
/loop every 30m --times 6 --for 3h -- check the import status
```

Quand `--times` et `--for` sont tous deux présents, la boucle s'arrête à la première limite atteinte. Le séparateur `--` est obligatoire dans la forme canonique afin qu'un texte de prompt contenant des mots comme « times » ou « for » ne soit pas interprété comme des options.

### Règles de durée

Les intervalles utilisent deux unités :

- `m` — minutes
- `h` — heures

Règles :

- Intervalle minimal : **1m**. Intervalle maximal : **24h**.
- La valeur doit être un entier positif sans espace avant l'unité — `5m`, `2h`, `30m`.
- L'unité est insensible à la casse (`5M` et `5m` sont identiques).
- Les décimales, signes, notations scientifiques, espaces et unités inconnues sont rejetés.

Exemples rejetés :

```text
/loop 0m check deployment
/loop -5m check deployment
/loop 1.5h check deployment
/loop 5 minutes check deployment
/loop 5m
/loop 5d check deployment
```

### Limites par défaut et maximales

Une boucle planifiée est **toujours bornée** — par nombre d'exécutions et par durée.

| Limite | Par défaut | Maximum |
|---|---|---|
| Exécutions (`--times`) | 24 | 100 |
| Durée (`--for`) | 24 heures | 7 jours |

La forme courte `/loop 5m <prompt>` s'exécute **au plus 24 fois et pendant au plus 24 heures** — la première limite atteinte l'emporte. À un intervalle de cinq minutes, le compteur d'exécutions termine normalement la boucle en premier. Utilisez `--times` et `--for` dans la forme canonique pour relever l'une ou l'autre limite jusqu'au maximum.

### Ce qui se passe au démarrage

Quand la commande est acceptée, AI Chat V2 ajoute la commande slash visible et une brève confirmation dans la même conversation, par exemple :

```text
Scheduled every 5 minutes. Maximum 24 runs or 24 hours. Next run: 14:35.
```

La première occurrence s'exécute **un intervalle après** le lancement de la boucle — elle ne s'exécute pas immédiatement. La confirmation indique l'heure de la prochaine exécution, afin que vous sachiez exactement quand aura lieu la première vérification.

### Les occurrences restent dans une seule conversation

Chaque occurrence devient un tour normal et durable de la conversation :

1. Le prompt planifié est ajouté à la conversation d'origine.
2. L'IA reçoit l'historique et le contexte existants de cette conversation.
3. La réponse de l'assistant est ajoutée à la **même** conversation.
4. Si cette conversation est ouverte, elle se rafraîchit et la réponse arrive en streaming.
5. Si une autre conversation est ouverte, aiFetchly met à jour l'aperçu et l'indicateur de non-lu de la conversation d'origine sans vous dévier de votre travail courant.

Les tours utilisateur planifiés s'affichent avec une petite icône d'horloge et une étiquette d'exécution (par ex. *Scheduled — Run 2*) afin de les distinguer des messages que vous avez saisis.

:::tip Une conversation, une chronologie

Comme chaque occurrence partage une même transcription, les exécutions ultérieures peuvent s'appuyer sur les observations précédentes. Vous pouvez aussi poser une question de suivi entre deux exécutions et la prochaine exécution planifiée l'inclura.

:::

### État, Pause, Reprendre et Arrêter

Tant qu'une conversation possède une boucle planifiée active, l'en-tête du chat affiche une **puce d'état** avec l'état de la boucle et des commandes compactes :

- **Pause** — empêche le démarrage de nouvelles occurrences. L'historique est conservé.
- **Resume** — calcule la prochaine heure d'exécution et continue. Il ne rejoue pas les occurrences manquées.
- **Stop loop** — empêche toute occurrence future. L'occurrence en cours peut se terminer.
- **Stop current run** — abandonne uniquement l'occurrence en cours d'exécution ; les occurrences futures continuent selon le planning.

Les mêmes actions sont disponibles en tant que commandes, limitées à la conversation active :

```text
/loop status
/loop pause
/loop resume
/loop stop
```

Elles n'affectent que la boucle de la conversation active. Elles ne peuvent pas arrêter ni modifier une boucle d'une autre conversation. Toutes les actions de contrôle sont idempotentes — les exécuter deux fois revient au même qu'une fois.

### Cycle de vie de la boucle planifiée

Une boucle planifiée passe par les états suivants :

| État | Signification |
|---|---|
| **active** | En attente de la prochaine occurrence. |
| **running** | Une occurrence s'exécute actuellement. |
| **paused** | En pause — aucune nouvelle occurrence ne démarrera tant que vous ne reprenez pas. |
| **expired** | La limite d'exécutions ou de durée a été atteinte. |
| **failed** | Des échecs répétés ou une erreur non récupérable ont arrêté la boucle. |
| **stopped** | Vous l'avez arrêtée (ou la conversation a été supprimée). |

### Récupération après redémarrage ou mise en veille

Les boucles planifiées s'appuient sur un planificateur persistant, elles survivent donc à un redémarrage de l'application ou à la mise en veille du système :

- Si aucune occurrence n'a été manquée, la prochaine heure d'exécution est conservée.
- Si des occurrences ont été manquées pendant la fermeture ou la veille, **au plus une exécution de rattrapage** est effectuée — jamais une salve d'une exécution par intervalle manqué.
- Si la durée de la boucle a expiré hors ligne, elle est simplement marquée comme expirée.
- Les changements d'horloge, d'heure d'été ou de fuseau horaire ne produisent jamais d'exécutions en double.

La base de données est la source de vérité. Si une notification de rafraîchissement est manquée, rouvrir la conversation recharge tout l'historique correct.

### Limites et sécurité

| Limite | Valeur |
|---|---|
| Intervalle (`/loop <duration>`) | 1m – 24h |
| Exécutions | par défaut 24, max 100 |
| Durée | par défaut 24h, max 7 jours |
| Boucles planifiées actives par conversation | Une |
| Plafond de temps par exécution | 10 minutes |
| Échecs consécutifs avant l'échec de la boucle | 3 |

Garanties de sécurité toujours applicables :

- Une boucle planifiée est **toujours bornée** — par exécutions et par durée. Elle ne tourne jamais indéfiniment.
- Elle est **toujours annulable** (Stop).
- **Les tours interactifs sont prioritaires.** Si vous êtes en pleine conversation quand une exécution est due, elle est différée ou fusionnée — elle n'interrompt jamais votre tour.
- Les occurrences **ne se chevauchent jamais**. Si une exécution dure plus que son intervalle, les occurrences dues sont fusionnées en une seule exécution en attente.
- **La politique d'outils est par tâche.** Les exécutions planifiées sont sans supervision, donc seuls les outils explicitement approuvés sont disponibles, et les outils à fort impact restent bloqués. Vos choix « Always Allow » interactifs **n'élargissent pas** ce qu'une boucle planifiée peut faire.
- **L'activation de l'IA** et les limites de workspace et de fichiers continuent de s'appliquer.
- La boucle **n'infère pas** la fin à partir du vocabulaire de l'assistant (« done », « complete »). Elle ne s'arrête que sur une limite, un seuil d'échecs, un Stop explicite ou parce que la conversation a disparu.

:::warning Vider ou supprimer une conversation arrête sa boucle

Si une conversation possède une boucle planifiée active, vider son historique vous demande de confirmer que la boucle sera également arrêtée, et supprimer la conversation arrête d'abord la boucle. aiFetchly ne laisse jamais une boucle sans supervision tourner contre une conversation supprimée et ne recrée jamais une conversation supprimée.

:::

## État de l'objectif et de la boucle

Un objectif passe par les états suivants :

| État | Signification |
|---|---|
| **draft** | L'objectif est en cours de définition dans Plan Mode. |
| **active** | Approuvé et en attente d'exécution ou de continuation. |
| **running** | Un `/loop` exécute une itération. |
| **complete** | Tous les critères requis sont passés avec des preuves récentes. |
| **blocked** | Échecs répétés ou blocage non résolu — nécessite votre attention. |
| **needs_user_input** | La boucle s'est mise en pause pour vous poser une question ou obtenir une confirmation. |
| **failed** | Une erreur non récupérable a terminé l'exécution. |
| **cancelled** | Vous l'avez arrêtée. |

## Limites et sécurité

| Limite | Valeur |
|---|---|
| Nombre d'itérations de la boucle d'objectif (`/loop <N>`) | 1–10 (à indiquer explicitement) |
| Plafond de temps par exécution | 10 minutes (par défaut) |
| Échecs identiques avant **bloqué** | 3 |
| Objectifs actifs par conversation | Un (en définir un nouveau remplace le précédent) |

Garanties de sécurité toujours applicables :

- Toute boucle est **toujours bornée** — jamais infinie.
- Elle est **toujours annulable** (appuyez sur Stop).
- **L'activation de l'IA**, le mode d'approbation des outils, Plan Mode et les limites de sécurité du workspace et des fichiers continuent de s'appliquer pendant une boucle.
- Les actions destructrices, les nouvelles dépendances, les changements d'authentification et autres effets de bord à fort impact requièrent toujours la limite d'approbation normale — même en plein milieu d'une boucle.
- Les preuves et logs montrés au vérificateur sont bornés, limités en taille et expurgés des secrets, et traités comme données non fiables — jamais comme des instructions.

## Conseils

### À FAIRE ✅

- **Définissez un objectif avant une boucle d'objectif** — `/loop 5` nécessite toujours un `/goal` actif.
- **Rendez les objectifs vérifiables** — préférez des critères que l'application peut vérifier (une commande, un fichier) à des critères subjectifs.
- **Démarrez une boucle d'objectif avec un petit compteur** (`/loop 3`) pour inspecter la progression avant de vous engager davantage.
- **Gardez Plan Mode activé** pour les objectifs qui modifient des fichiers, envoient de l'outreach ou exécutent beaucoup d'appels d'outils.
- **Utilisez une boucle planifiée pour surveiller** — tout ce qui évolue dans le temps (un déploiement, un import, une campagne) convient bien.
- **Gardez l'accès IA activé** — une boucle planifiée se met en pause après des échecs `AI_DISABLED` répétés.

### À NE PAS FAIRE ❌

- **N'attendez pas d'autonomie sans limite** — une boucle d'objectif nécessite toujours un compteur explicite de 1 à 10, et une boucle planifiée a toujours un plafond d'exécutions et de durée.
- **Ne vous fiez pas à un simple « done »** — la fin de l'objectif est fondée sur des preuves ; si un critère requis n'est pas passé, l'objectif n'est pas terminé.
- **Ne vous attendez pas à ce qu'une boucle planifiée tourne application fermée** — elle ne tourne que pendant qu'aiFetchly est ouvert et rattrape au plus une fois au redémarrage.
- **Ne vous attendez pas à ce que le « Always Allow » interactif s'applique aux exécutions planifiées** — les permissions d'outils planifiées sont par tâche et plus strictes.

## Résolution de problèmes

| Symptôme | Cause probable | Que faire |
|---|---|---|
| *"Set a goal first with /goal"* | Aucun objectif actif dans cette conversation | Lancez `/goal <objective>` et approuvez le plan d'abord. |
| *"Please provide an iteration count"* | `/loop` a été appelé sans nombre | Indiquez un compteur, par exemple `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Compteur manquant, zéro ou supérieur à 10 | Utilisez un entier de 1 à 10. |
| *"The interval must be between 1 minute and 24 hours"* | La durée est inférieure à 1m, supérieure à 24h ou mal formée | Utilisez une valeur entière `m` ou `h`, comme `5m` ou `2h`. |
| *"A prompt is required for a scheduled loop"* | `/loop 5m` n'avait pas de texte de prompt | Ajoutez le prompt après l'intervalle, ou après le séparateur `--` dans la forme canonique. |
| *"No active scheduled loop for this conversation"* | `/loop pause/resume/stop` sans boucle en cours | Lancez d'abord une boucle avec `/loop <duration> <prompt>`. |
| La boucle planifiée s'est arrêtée tôt | Limite d'exécutions ou de durée atteinte, ou 3 échecs consécutifs | Consultez la puce d'état pour la raison. Relevez les limites avec `--times`/`--for`, ou corrigez l'échec et lancez une nouvelle boucle. |
| L'objectif est **bloqué** | Le même échec s'est répété (par défaut 3 fois) | Lisez le motif de l'échec dans la conversation, traitez la cause racine, puis relancez `/loop` ou ajustez l'objectif. |
| L'objectif reste en **needs_user_input** | La boucle attend votre réponse ou votre approbation | Répondez à la question ou approuvez l'action en attente. |
| Une exécution planifiée n'a pas eu lieu à l'heure exacte | Les exécutions sont différées pendant que vous discutez, fusionnées si longues, ou rattrapées une fois après la veille | C'est attendu. Consultez la puce d'état et la prochaine heure d'exécution. |

## Étapes suivantes

- [AI Chat V2](./ai-chat-v2) — le chat où vivent `/goal` et `/loop`, y compris Plan Mode.
- [Slash Commands](./slash-commands) — la liste complète des commandes intégrées et comment créer les vôtres.
- [Subagents](./subagents) — des spécialistes bornés vers lesquels l'assistant peut déléguer pendant une boucle.
