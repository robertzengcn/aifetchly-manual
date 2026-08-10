---
id: ai-chat-v2
title: AI Chat V2
sidebar_label: AI Chat V2
description: Le chat IA de nouvelle génération avec Mode Plan, suivi en temps réel du contexte, sous-agents et approbation de plan intégrée.
---

# AI Chat V2

AI Chat V2 est l'assistant IA repensé. Il conserve tout ce que fait l'Assistant Marketing IA classique — contexte de la Bibliothèque de connaissances, outils MCP, Compétences IA — et ajoute un composeur plus épuré, le **Mode Plan**, un **badge d'utilisation du contexte en temps réel**, l'**approbation de plan intégrée**, les **sous-agents** et un **panneau des opérations sur fichiers**.

V2 et l'assistant classique fonctionnent côte à côte. Si le feature flag V2 est activé, cliquer sur l'icône de chat (ou appuyer sur `Ctrl/Cmd + K`) ouvre V2.

## Nouveautés de V2

| Fonctionnalité | Ce qu'elle fait |
|---|---|
| **Mode Plan** | Demandez à l'IA de rédiger un plan étape par étape et approuvez-le avant l'exécution du moindre outil. |
| **Badge d'utilisation du contexte** | Indicateur `CTX %` en temps réel pour savoir à quel point vous êtes proche de la limite de contexte du modèle. |
| **Approbation de plan intégrée** | La carte du plan s'affiche dans le flux de messages avec Approuver / Rejeter / Demander des modifications. |
| **Sous-agents** | L'IA peut déléguer à un spécialiste (par ex. Lead Researcher) avec son propre budget d'outils et son schéma de sortie. |
| **Panneau des opérations sur fichiers** | Panneau repliable au-dessus du composeur listant chaque fichier que l'IA vient de lire ou de modifier. |
| **Reconnexion du flux** | Si le flux s'interrompt, V2 réessaie et affiche un indicateur de reconnexion au lieu de rester bloqué silencieusement. |
| **Indicateur de saisie** | Visible pendant que l'IA réfléchit ou exécute un outil. |
| **Bouton Arrêter** | Annule le flux en cours et tout appel d'outil en cours d'exécution. |
| **Commandes Slash** | Saisissez `/` dans le composeur pour exécuter des actions (`/clear`, `/status`, `/plugin`) ou développer des modèles d'invite réutilisables que vous créez vous-même. Voir [Commandes Slash](./slash-commands). |
| **Voix** | Dictez votre message et écoutez la réponse de l'IA — reconnaissance vocale et synthèse vocale sur l'appareil. Voir [Voix](#voix). |

## Ouvrir V2

1. Cliquez sur l'**icône de chat** dans l'en-tête, ou appuyez sur `Ctrl + K` (Windows/Linux) / `Cmd + K` (macOS).
2. Si V2 est activé, le panneau V2 glisse depuis la droite.
3. Pour rebasculer vers l'assistant classique pour une session, désactivez le flag V2 dans `localStorage` (`aifetchly:aiChatV2Enabled`).

:::tip Redimensionner le panneau

Faites glisser le bord gauche du panneau pour le redimensionner. Le panneau mémorise sa largeur pour la session.

:::

## Mode Chat ou Mode Plan

Utilisez le **sélecteur de mode** au-dessus du composeur pour basculer entre les deux modes.

### Mode Chat (par défaut)

Se comporte comme l'assistant classique : vous demandez, l'IA répond, les outils s'exécutent au besoin. Idéal pour les questions-réponses, la rédaction de contenu et les recherches rapides.

### Mode Plan

Le Mode Plan ajoute un portail d'approbation avant que l'IA n'exécute quoi que ce soit de destructeur ou de longue durée.

1. Basculez le sélecteur de mode sur **Plan**.
2. Décrivez l'objectif (par ex. *« Rechercher ces 5 leads et rédiger une prospection pour chacun »*).
3. L'IA rédige un plan — un document Markdown avec les étapes qu'elle compte suivre.
4. Le plan s'affiche sous forme de carte intégrée avec son statut, sa version et son objectif.
5. Choisissez :
   - **Approuver** — l'IA commence à exécuter le plan immédiatement.
   - **Rejeter** — envoyez un motif ; l'IA s'arrête et révise.
   - **Demander des modifications** — demandez des ajustements sans rejeter complètement.
6. Pendant l'exécution, l'IA diffuse la progression et la sortie des outils dans la conversation.

:::info Quand utiliser le Mode Plan

Activez le Mode Plan pour toute tâche qui exécute de nombreux appels d'outils, modifie des fichiers, envoie de la prospection ou coûte un nombre significatif de crédits. Pour *« Quel est un bon objet ? »* — restez en Mode Chat.

:::

### Statuts des plans

| Statut | Signification |
|---|---|
| **Brouillon** | L'IA compose encore le plan. |
| **En attente de réponse** | L'IA a posé une question de clarification avant de finaliser. |
| **En attente d'approbation** | Le plan est prêt — en attente de votre Approuver / Rejeter. |
| **Approuvé** | Vous avez approuvé ; l'exécution est en cours ou terminée. |
| **Rejeté** | Vous avez rejeté avec un retour. |
| **Terminé** | Le plan s'est terminé avec succès. |
| **Annulé** | Le plan a été annulé (par vous ou par une erreur). |

## Le badge d'utilisation du contexte

À côté du sélecteur de mode, un petit badge affiche **`CTX <percent>%`**. C'est la part de la fenêtre de contexte du modèle utilisée par la conversation courante.

| Teinte | Plage | Signification |
|---|---|---|
| Faible (gris) | 0–49 % | Beaucoup de marge. |
| Moyen (jaune) | 50–79 % | Commence à se remplir. |
| Élevé (orange) | 80–94 % | Envisagez de commencer une nouvelle conversation bientôt. |
| Critique (rouge) | 95–100 % | Proche de la limite — les longs messages peuvent être tronqués ou compactés automatiquement. |

Quand le badge atteint Critique, commencez une nouvelle conversation ou laissez l'IA compacter la session (voir ci-dessous).

## Sous-agents

Un sous-agent est un spécialiste à portée limitée que l'IA principale peut déléguer pour accomplir une tâche bien définie. Chaque sous-agent possède :

- Un **prompt système** ajusté pour sa tâche
- Une **liste d'outils autorisés** (un sous-ensemble des outils disponibles de l'IA)
- Un **schéma de sortie** (le sous-agent doit renvoyer du JSON conforme au schéma)
- Des **budgets** : nombre max d'appels d'outils, durée max d'exécution, max de tours de continuation

### Intégré : Lead Researcher

Le sous-agent Lead Researcher rassemble le contexte public d'une entreprise pour un lead. Il est autorisé à utiliser `google_search`, `scrape_urls_from_search_engine` et `knowledge_library_search`. Il renvoie un objet structuré avec :

- `businessSummary`
- `productsOrServices`
- `targetCustomerHints`
- `marketSignals`
- `sourceUrls` (chaque affirmation doit être sourcée)
- `confidence` (0–1)

Vous n'invoquez pas les sous-agents directement — c'est l'IA principale qui décide quand en déléguer un. Pour l'orienter, demandez par exemple : *« Recherche le lead sur acme.com en utilisant le Lead Researcher. »*

:::tip Les sous-agents sont à portée limitée

Un sous-agent ne peut utiliser que les outils de sa liste d'autorisation. Il ne peut pas envoyer d'e-mails, publier sur les réseaux sociaux ni modifier d'enregistrements. Sa sortie constitue des éléments de preuve sur lesquels l'IA principale peut agir — pas une action en soi.

:::

## Panneau des opérations sur fichiers

Au-dessus du composeur, un panneau repliable affiche chaque fichier que l'IA vient de lire ou d'écrire dans le tour courant. Chaque entrée est une puce sur laquelle vous pouvez cliquer pour ouvrir le fichier (ou une vue diff pour les fichiers modifiés).

Utilisez-le pour :

- Vérifier ce que l'IA a réellement modifié avant de faire confiance au résultat.
- Accéder directement à un fichier mentionné par l'IA sans avoir à le chercher.
- Lever les yeux au ciel parce que l'IA a modifié le mauvais fichier. (Ça arrive.)

## Compétences, MCP et Bibliothèque de connaissances dans V2

V2 utilise les mêmes Compétences, serveurs MCP et Bibliothèque de connaissances que l'assistant classique :

- **[Compétences IA](./ai-skills)** — installées depuis la page Compétences ou via le Gestionnaire de plugins ; apparaissent automatiquement comme outils dans V2.
- **[Outils MCP](./mcp-tools)** — cliquez sur le bouton **Outils MCP** dans l'en-tête de V2 pour ajouter ou gérer des serveurs MCP externes.
- **[Bibliothèque de connaissances](./knowledge-library)** — activez le contexte RAG de la même façon que dans l'assistant classique.

## Autorisations et « Toujours autoriser »

Quand l'IA veut exécuter un outil nécessitant une approbation, V2 affiche une carte d'approbation intégrée avec deux options :

- **Autoriser une fois** — exécute une seule fois.
- **Toujours autoriser** — mémorise la décision.

Pour la plupart des catégories de compétences, **Toujours autoriser** est mémorisé de façon permanente. Pour la catégorie **exécution shell**, **Toujours autoriser** est **limité à la session** par sécurité — au prochain redémarrage de l'application, l'IA redemandera.

:::warning Le shell est toujours limité à la session

L'IA ne peut exécuter des commandes shell qu'avec votre approbation explicite. Même si vous cliquez sur « Toujours autoriser » pour le shell, l'autorisation expire lorsque vous fermez l'application. C'est intentionnel.

:::

## Flux, arrêt et reconnexions

- **Indicateur de saisie** : un petit spinner apparaît pendant que l'IA produit une réponse ou exécute un outil.
- **Bouton Arrêter** : remplace le bouton Envoyer pendant le flux. Cliquez pour annuler la réponse et tout appel d'outil en cours. L'interface se réinitialise immédiatement.
- **Reconnexion** : si le flux s'interrompt en cours de réponse, V2 réessaie automatiquement et affiche un indicateur de reconnexion. Si la reconnexion échoue, le dernier message partiel reste visible afin que vous puissiez décider de le renvoyer ou non.

## Compacter (résumer automatiquement) les longues sessions

Quand une conversation approche de la limite de contexte, V2 peut compacter la session : elle résume les tours précédents sous une forme plus courte afin que la conversation puisse continuer sans perdre le contexte clé. Le compactage s'exécute comme sa propre tâche d'arrière-plan ; vous verrez une notification quand il se produit.

## Commandes Slash

Saisissez `/` au début du composeur pour ouvrir le menu de commandes slash. Les commandes intégrées comme `/clear`, `/help`, `/status` et `/plugin` s'exécutent instantanément, et vous pouvez créer vos propres modèles d'invite réutilisables (par exemple `/outreach <website>`) sous forme de fichiers Markdown dans `~/.aifetchly/commands/`. Voir la page dédiée **[Commandes Slash](./slash-commands)** pour la liste complète, la création de commandes personnalisées et les raccourcis clavier. Pour un travail autonome borné, utilisez **`/goal`** pour définir un objectif vérifiable et **`/loop`** pour exécuter des itérations vers celui-ci ; pour surveiller quelque chose dans le temps, utilisez **`/loop 5m <prompt>`** pour relancer un prompt à intervalle fixe dans le même chat — voir [Commandes d'objectif et de boucle](./goal-and-loop).

## Voix

AI Chat V2 prend en charge la **saisie vocale** (reconnaissance vocale) et les **réponses parlées** (synthèse vocale). Les deux s'exécutent **sur votre appareil** via le moteur vocal `sherpa-onnx` — l'audio de votre microphone est traité localement et n'est pas envoyé à un serveur.

La voix est désactivée par défaut. Activez-la dans **[Fournisseur d'IA → Paramètres vocaux](../settings/ai-provider#paramètres-vocaux)**.

### Parler à l'IA (saisie vocale)

Quand la saisie vocale est activée, un **bouton microphone** apparaît dans le composeur :

1. Cliquez sur le micro pour **commencer l'enregistrement** (appuyer-pour-parler). Cliquez à nouveau (ou sur le contrôle d'arrêt) pour arrêter.
2. Le composeur affiche un état d'enregistrement pendant que vous parlez. L'enregistrement s'arrête automatiquement à la durée maximale (par défaut 60 secondes).
3. Après l'arrêt, aiFetchly transcrit votre parole localement et insère la transcription dans le composeur comme texte modifiable.
4. Révisez ou modifiez la transcription, puis envoyez-la comme d'habitude.

:::tip Envoi automatique

Activez **Envoyer la transcription vocale automatiquement** dans les paramètres vocaux pour envoyer la transcription dès que la transcription est terminée, en sautant l'étape de révision.

:::

La transcription devient un message de chat normal — stockée et envoyée comme du texte, exactement comme un message saisi au clavier.

La première fois que vous utilisez la saisie vocale, aiFetchly télécharge le modèle vocal (téléchargement unique). Si le modèle n'est pas encore installé, le bouton micro affiche un état **modèle manquant** avec une action d'installation.

### Entendre la réponse de l'IA (réponses parlées)

Le **bouton volume** dans l'en-tête du chat active ou désactive les réponses parlées :

- **Activé** (mis en surbrillance) : les réponses textuelles de l'IA sont lues à voix haute au fil de leur diffusion.
- **Désactivé** : silencieux — les réponses apparaissent uniquement comme texte.

aiFetchly lit uniquement la réponse en langage naturel — pas les blocs de code, les appels d'outils, les tableaux ni les invites d'autorisation.

:::note Parler uniquement après saisie vocale

Dans les paramètres vocaux, vous pouvez configurer l'IA pour qu'elle prononce **uniquement ses réponses à vos messages vocaux** (un aller-retour mains libres) au lieu de chaque réponse.

:::

Pendant que l'IA parle, un contrôle **arrêter-la-parole** vous permet d'interrompre la lecture. Démarrer un nouvel enregistrement vocal, changer de conversation ou cliquer sur le bouton **Arrêter** du chat coupe aussi la parole.

### La voix n'accorde pas l'accès au chat

La reconnaissance et la synthèse vocale sont locales et gratuites, mais pour envoyer un message et obtenir une réponse, vous avez toujours besoin de l'accès au chat — soit un abonnement IA aiFetchly (Hosted), soit un [fournisseur personnalisé/local](../settings/ai-provider) fonctionnel. Si aucun modèle de chat n'est disponible, votre parole peut toujours être transcrite localement, mais le message ne peut pas être envoyé tant que le chat n'est pas disponible.

## Conseils pour tirer le meilleur de V2

### À FAIRE ✅

- **Utilisez le Mode Plan** pour les tâches multi-étapes ou destructrices.
- **Surveillez le badge CTX** — commencez une nouvelle conversation avant qu'il ne passe au rouge.
- **Approuvez les compétences de confiance** avec « Toujours autoriser » pour réduire les sollicitations (sauf le shell).
- **Consultez le panneau des opérations sur fichiers** après tout tour riche en outils.
- **Nommez le Lead Researcher explicitement** quand vous voulez des données de lead structurées.

### À ÉVITER ❌

- **N'approuvez pas l'exécution shell à l'aveugle** — lisez d'abord la commande.
- **Ne gardez pas une session de 200 tours indéfiniment** — repartez de zéro quand le badge CTX grimpe.
- **N'attendez pas des sous-agents qu'ils envoient de la prospection** — ils ne font que collecter et renvoyer des données.
- **N'ignorez pas la carte du plan** — l'approuver saute votre dernière chance de réorienter.

## Dépannage

### Le Mode Plan ne s'active pas

- Confirmez que le sélecteur de mode est sur **Plan**.
- Si le sélecteur est manquant, le flag V2 est désactivé. Réactivez-le via `localStorage`.

### L'IA ne délègue pas au Lead Researcher

- L'IA ne délègue des sous-agents que lorsqu'elle les juge nécessaires. Demandez-le explicitement : *« Utilise le Lead Researcher pour ça. »*
- Le sous-agent ne s'exécute que si ses outils requis sont activés (recherche Google, scraper d'URL, Bibliothèque de connaissances).

### Le badge de contexte reste rouge

- Commencez une nouvelle conversation, ou laissez le compactage automatique s'exécuter.
- Désactivez le contexte RAG si la Bibliothèque de connaissances injecte trop de texte.

### L'approbation d'outil continue de demander après « Toujours autoriser »

- Vous utilisez une compétence **shell**. Les approbations shell sont limitées à la session par conception.
- La compétence a peut-être été réinstallée, ce qui réinitialise ses autorisations.

## Étapes suivantes

- [Commandes Slash](./slash-commands) — exécutez des actions et des invites réutilisables avec `/`.
- [Gestionnaire de plugins](./plugin-manager) — installez des plugins depuis un dossier local, git, GitHub, npm ou une URL.
- [Compétences IA](./ai-skills) — ce que sont les compétences et comment les utiliser.
- [Outils MCP](./mcp-tools) — connecter des services externes.
