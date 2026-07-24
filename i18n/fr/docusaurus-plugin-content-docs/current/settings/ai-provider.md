---
id: ai-provider
title: Fournisseur d'IA
sidebar_label: Fournisseur d'IA
description: Acheminez AI Chat via l'IA hébergée d'aiFetchly ou via votre propre fournisseur compatible OpenAI (Ollama, LM Studio, OpenAI, OpenRouter, vLLM, LocalAI ou un endpoint personnalisé).
---

# Fournisseur d'IA

La page **Fournisseur d'IA** vous permet de choisir la source du modèle utilisée par AI Chat. Deux options s'offrent à vous :

- **aiFetchly hébergé (Hosted)** — aiFetchly exécute le modèle pour vous. C'est l'option par défaut, incluse dans un abonnement IA aiFetchly.
- **Fournisseur personnalisé / local** — vous pointez aiFetchly vers n'importe quel endpoint **compatible OpenAI**, y compris des serveurs locaux comme [Ollama](https://ollama.com) ou LM Studio, ou des API tierces comme OpenAI et OpenRouter.

:::info Pourquoi c'est important

Les fournisseurs personnalisés vous permettent d'utiliser **AI Chat avec votre propre modèle — même sans abonnement IA aiFetchly.** Les autres fonctions IA hébergées d'aiFetchly (génération de mots-clés, génération de modèles d'e-mail, récupération par IA, rerank, embeddings) continuent d'exiger un abonnement ; seule la surface de chat peut passer par votre propre fournisseur.

:::

Les fournisseurs personnalisés utilisent le contrat standard de chat-completions d'OpenAI (`/v1/chat/completions` et, lorsqu'il est pris en charge, `/v1/models`). aiFetchly n'embarque pas de SDK propre à chaque fournisseur — il communique avec votre endpoint directement depuis le backend de l'application, afin que votre clé API ne quitte jamais votre machine.

## Ouvrir la page Fournisseur d'IA

1. Cliquez sur **Settings** (Paramètres) dans le menu de navigation de gauche.
2. Ouvrez la page **AI Provider** (Fournisseur d'IA), sous System Settings (Paramètres système).

## Mode de fournisseur

En haut de la page, choisissez un mode avec le groupe d'options :

| Mode | Quand l'utiliser | Ce qu'il requiert |
|------|------------------|-------------------|
| **aiFetchly hébergé (Hosted)** | Vous avez un abonnement IA aiFetchly et souhaitez le chemin le plus simple. | Un abonnement IA aiFetchly actif. |
| **Fournisseur personnalisé / local** | Vous exécutez votre propre modèle, voulez plus de contrôle, de confidentialité ou un coût réduit, ou n'avez pas d'abonnement. | Un endpoint compatible OpenAI accessible et une configuration de fournisseur enregistrée. |

En mode **hébergé (Hosted)**, la page indique si l'IA hébergée est activée pour votre compte, ou qu'un abonnement est requis.

En mode **personnalisé / local**, les champs de configuration du fournisseur apparaissent (ci-dessous). Enregistrer dans ce mode bascule AI Chat vers votre fournisseur ; enregistrer en mode **hébergé** le rebascule.

:::tip Seul AI Chat suit ce paramètre

Basculer vers un fournisseur personnalisé débloque **uniquement AI Chat**. Les fonctions IA purement hébergées continuent d'exiger un abonnement, quel que soit ce paramètre.

:::

## Préréglages de fournisseur

Pour gagner du temps, choisissez un **préréglage de fournisseur (preset)**. La sélection renseigne un nom et une URL de base suggérés — vous pouvez ensuite modifier chaque champ.

| Preset | URL de base par défaut | Clé API |
|--------|------------------------|---------|
| **Ollama** | `http://localhost:11434/v1` | Généralement non requise |
| **LM Studio** | `http://localhost:1234/v1` | Généralement non requise |
| **OpenAI** | `https://api.openai.com/v1` | Requise |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Requise |
| **vLLM** | `http://localhost:8000/v1` | Généralement non requise |
| **LocalAI** | `http://localhost:8080/v1` | Généralement non requise |
| **Custom** | _(vide)_ | À votre discrétion |

Choisissez **Custom** pour tout autre serveur compatible OpenAI (par exemple une passerelle d'entreprise, un endpoint compatible Groq ou un autre serveur d'inférence local).

## Champs de configuration

Ces champs apparaissent lorsque **Fournisseur personnalisé / local** est sélectionné :

| Champ | Description |
|-------|-------------|
| **Préréglage du fournisseur** | Modèle de démarrage rapide (voir ci-dessus). Renseigne des valeurs par défaut mais ne verrouille pas les champs. |
| **Nom du fournisseur** | Une étiquette pour ce fournisseur. Obligatoire. |
| **URL de base** | La racine d'API du fournisseur, par ex. `http://localhost:11434/v1`. Obligatoire. Voir [Normalisation de l'URL de base](#normalisation-de-lurl-de-base). |
| **Clé API (facultatif)** | Envoyée comme jeton `Bearer`. Masquée. Laissez vide pour les fournisseurs locaux qui n'en exigent pas. |
| **Modèle par défaut** | Le modèle qu'utilise AI Chat. Une combobox — choisissez depuis la liste rafraîchie ou saisissez un nom manuellement. Obligatoire. |
| **Taille de contexte (facultatif)** | Remplace la fenêtre de contexte du modèle, en tokens. |
| **Rafraîchir les modèles (Refresh Models)** | Récupère la liste des modèles depuis l'endpoint `/models` du fournisseur. |
| **Tester la connexion (Test Connection)** | Vérifie l'endpoint et détecte les capacités. Voir [Tester la connexion](#tester-la-connexion). |
| **Enregistrer (Save)** | Enregistre la configuration. |

### Normalisation de l'URL de base

Vous pouvez saisir l'URL de base avec ou sans le suffixe `/v1` et avec ou sans barre oblique finale — aiFetchly la normalise à l'enregistrement pour qu'elle se termine par `/v1` et sans barre oblique finale.

| Vous saisissez | Enregistré sous |
|----------------|-----------------|
| `http://localhost:11434` | `http://localhost:11434/v1` |
| `http://localhost:11434/` | `http://localhost:11434/v1` |
| `http://localhost:11434/v1/` | `http://localhost:11434/v1` |
| `https://api.openai.com/v1` | `https://api.openai.com/v1` |

### Gestion de la clé API

- Le champ **Clé API** est masqué. Cliquez sur l'icône œil pour révéler ce que vous saisissez.
- Une fois une clé enregistrée, elle **n'est plus jamais affichée en clair**. Le champ affiche _« Clé API configurée — laissez vide pour la conserver »_, et un badge vert **Clé API configurée** apparaît.
- Pour conserver la clé existante, laissez le champ vide lors de l'enregistrement.
- Pour la remplacer, saisissez la nouvelle clé et enregistrez.
- Pour la supprimer, cliquez sur **Clear API key** (Effacer la clé API).

:::warning HTTP en clair

`http://` est autorisé pour `localhost` et les fournisseurs en réseau local. Si vous utilisez une URL `http://` simple qui **n'est pas** locale, aiFetchly avertit que la connexion n'est pas chiffrée — préférez `https://` pour tout fournisseur distant.

:::

## Rafraîchir les modèles

Cliquez sur **Refresh Models** pour interroger l'endpoint `/models` du fournisseur et remplir le menu déroulant **Modèle par défaut**. C'est facultatif — vous pouvez toujours saisir un nom de modèle manuellement.

- Si `/models` réussit, les modèles renvoyés sont normalisés et affichés dans le menu déroulant.
- Si `/models` échoue (certains serveurs locaux ne l'implémentent pas), vous recevez un avertissement, mais la configuration reste valide tant qu'un **Modèle par défaut** est saisi. aiFetchly se rabat sur le modèle saisi manuellement.
- S'il existe un modèle par défaut mais que la liste ne peut pas être chargée, vous pouvez tout de même enregistrer et discuter.

## Tester la connexion

Cliquez sur **Test Connection** avant de vous fier à un fournisseur. Le test vérifie, dans l'ordre :

1. L'URL de base est une URL `http:` ou `https:` valide.
2. Le fournisseur est accessible.
3. L'endpoint `/models` fonctionne **ou** un modèle par défaut est saisi manuellement.
4. Une complétion de chat non diffusée fonctionne avec un prompt minimal.
5. Une complétion de chat en streaming fonctionne (si pris en charge).
6. La prise en charge des appels d'outils est détectée lorsque c'est possible.

Le test envoie un prompt minimal (par exemple, demander au modèle de répondre `pong`). Toute complétion valide compte comme un succès — aiFetchly n'exige pas de correspondance de texte exacte, car les modèles locaux ajoutent souvent de la mise en forme.

Le résultat apparaît comme un message d'état et sous forme de **badges de capacités** (ci-dessous). Le test de connexion ne journalise ni n'affiche jamais votre clé API.

:::note Les API tierces peuvent facturer au token

OpenAI, OpenRouter et d'autres endpoints payants facturent au token, donc chaque test de connexion n'envoie qu'une très petite requête. Le test effectue tout de même un véritable appel d'API.

:::

## Badges de capacités

Après un test de connexion, les badges de capacités décrivent ce que votre fournisseur et votre modèle peuvent faire :

| Badge | Signification |
|-------|-------------|
| **Models** | L'endpoint `/models` est disponible. |
| **Chat** | La complétion de chat non diffusée fonctionne. |
| **Streaming** | La complétion de chat en streaming fonctionne. |
| **Tools** | Le modèle prend en charge les appels d'outils. |
| **Vision** | Le modèle accepte les entrées d'image. |
| **Context** | Taille de contexte détectée/surchargée en tokens (affichée si disponible). |

Chaque badge a l'un de ces états :

| État | Couleur | Signification |
|------|---------|---------------|
| **Pris en charge (Supported)** | 🟢 vert | Vérifié fonctionnel. |
| **Non pris en charge / Échec (Unsupported / Failed)** | 🔴 rouge | Vérifié non fonctionnel, ou le test a échoué. |
| **Inconnu (Unknown)** | 🟡 jaune | N'a pas pu être déterminé — procédez avec prudence. |

:::tip Quand Tools est non pris en charge ou inconnu

Si votre fournisseur ne prend pas en charge (fiablement) les appels d'outils, AI Chat utilise automatiquement un mode d'approbation conservateur et n'envoie pas de définitions d'outils pour le chat simple. Les flux nécessitant des outils et le Mode Plan qui en dépendent peuvent être désactivés ou vous avertir. Pour une prise en charge complète des outils/Mode Plan, utilisez un modèle compatible avec les outils ou aiFetchly hébergé.

:::

## Comment AI Chat utilise votre fournisseur

Une fois un fournisseur personnalisé valide enregistré :

- **AI Chat devient disponible** — même sans abonnement IA aiFetchly.
- Un **indicateur de fournisseur** apparaît près du sélecteur de modèle dans AI Chat (par ex. `Local: Ollama`, `Local: LM Studio` ou `Hosted`). Cliquer dessus ouvre cette page de paramètres.
- Le **sélecteur de modèle** liste les modèles de votre fournisseur (depuis `/models`, ou seulement votre modèle par défaut configuré si `/models` n'est pas disponible).
- Les requêtes de chat sont envoyées à votre endpoint directement depuis le backend de l'application, jamais depuis le navigateur/renderer.

Si le fournisseur est inaccessible, AI Chat affiche une erreur claire de fournisseur au lieu d'échouer silencieusement.

:::info À voir aussi : AI Chat V2

Le mode de fournisseur est commun aux surfaces de chat. Voir [AI Chat V2](../ai-outreach/ai-chat-v2) pour l'expérience de chat elle-même, y compris le Mode Plan et le badge d'utilisation du contexte.

:::

## Sécurité et confidentialité

- Les **clés API sont chiffrées au repos** et stockées séparément du reste de la configuration.
- Les **clés ne sont jamais renvoyées à l'UI en clair** après enregistrement — la page affiche uniquement `apiKeyConfigured: true/false`.
- Les **clés ne sont jamais journalisées.** Les logs de débogage et de requêtes censurent les en-têtes `Authorization` et tout ce qui ressemble à un secret.
- Les **requêtes sont effectuées depuis le backend de l'application**, pas depuis le renderer, afin que les identifiants ne soient pas exposés au contenu web.
- Les **URL de base sont validées** uniquement comme `http:` ou `https:`.

## Démarrage rapide : Ollama

1. [Installez Ollama](https://ollama.com) et téléchargez un modèle, par ex. `ollama pull llama3.1`.
2. Ouvrez **Settings → AI Provider**.
3. Sélectionnez **Custom / Local Provider**.
4. Définissez le **preset** sur **Ollama** (remplit `http://localhost:11434/v1`).
5. Cliquez sur **Refresh Models** et choisissez un modèle, ou saisissez-en un (par ex. `llama3.1`).
6. Cliquez sur **Test Connection** pour confirmer, puis sur **Save**.
7. Ouvrez AI Chat — l'indicateur affiche `Local: Ollama` et vous pouvez discuter sans abonnement.

## Démarrage rapide : OpenAI / OpenRouter

1. Ouvrez **Settings → AI Provider**.
2. Sélectionnez **Custom / Local Provider**.
3. Définissez le **preset** sur **OpenAI** ou **OpenRouter**.
4. Collez votre **clé API** dans le champ correspondant.
5. Saisissez un **Default model** (modèle par défaut) (par exemple `gpt-4o-mini` ou un id de modèle OpenRouter).
6. Cliquez sur **Test Connection**, puis sur **Save**.

## Dépannage

### Impossible de se connecter au fournisseur

**Causes possibles :**
- Le serveur local n'est pas en cours d'exécution (vérifiez le processus Ollama / LM Studio / vLLM).
- L'URL de base ou le port est incorrect.
- Un pare-feu bloque l'accès localhost/lan.

**Solutions :**
1. Démarrez le fournisseur et confirmez qu'il répond dans un navigateur (par exemple `http://localhost:11434/v1/models`).
2. Revérifiez l'URL de base et lancez **Test Connection**.
3. Pour les configurations Docker ou WSL, assurez-vous que le fournisseur est accessible depuis le contexte réseau d'aiFetchly.

### Échec de l'authentification (401 / 403)

**Causes possibles :**
- La clé API est manquante, incorrecte ou expirée.
- La clé n'a pas accès au modèle sélectionné.

**Solutions :**
1. Saisissez à nouveau la clé API et enregistrez.
2. Pour OpenAI/OpenRouter, confirmez que la clé est valide et dispose de crédit/permission pour le modèle.

### Le modèle sélectionné n'est pas disponible

Le fournisseur a renvoyé « model not found ». Choisissez un autre modèle dans la liste **Refresh Models**, ou mettez à jour le **Default model** vers un modèle que le fournisseur sert réellement.

### La liste des modèles n'a pas pu être chargée

Certains serveurs locaux n'implémentent pas `/models`. C'est attendu : saisissez le nom du modèle manuellement dans **Default model** et enregistrez. Le chat fonctionnera toujours.

### Le chat fonctionne, mais Tools / Streaming apparaissent comme non pris en charge

Tous les modèles locaux ne prennent pas en charge les appels d'outils ou le streaming. Si vous en avez besoin, passez à un modèle compatible avec les outils/streaming ou utilisez **Hosted aiFetchly**. Voir [Badges de capacités](#badges-de-capacités).

### Les fonctions purement hébergées exigent toujours un abonnement

C'est par conception. Un fournisseur personnalisé ne débloque qu'AI Chat : la génération de mots-clés, la génération de modèles d'e-mail, la récupération par IA, le rerank et les embeddings continuent d'exiger un abonnement IA aiFetchly.

## Prochaines étapes

- [AI Chat V2](../ai-outreach/ai-chat-v2) — l'expérience de chat alimentée par votre fournisseur
- [System Settings](./system-settings) — configuration générale
- [AI Skills](../ai-outreach/ai-skills) — capacités que l'IA peut appeler pendant le chat
