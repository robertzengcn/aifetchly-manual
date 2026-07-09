---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Configurez des hooks de cycle de vie qui observent, bloquent, réécrivent ou annotent les appels d'outils de l'assistant IA — y compris les hooks de sécurité intégrés et vos propres hooks de commande.
---

# Hooks

**Les hooks** sont des déclencheurs de cycle de vie qui exécutent votre propre logique autour de ce que fait l'Assistant Marketing IA. Ils se déclenchent à des moments bien définis — surtout **avant et après l'exécution d'un outil** — et peuvent observer, bloquer, réécrire ou annoter l'action. Avec les hooks, vous pouvez appliquer une politique (« ne jamais exécuter ce type de commande »), ajouter du contexte que l'IA voit (« rappelez-moi la conformité après le scraping ») et conserver un journal d'audit infalsifiable de chaque décision de hook.

aiFetchly est livré avec des **hooks de sécurité intégrés** qui vous protègent par défaut, et vous permet d'ajouter vos propres **hooks de commande** — de petits scripts qui reçoivent un événement au format JSON et décident de ce qui doit se passer ensuite.

:::info Où se placent les hooks

Les hooks se situent entre l'IA et les outils qu'elle appelle ([Compétences IA](../ai-outreach/ai-skills) intégrées, [outils MCP](../ai-outreach/mcp-tools) et outils hérités). Ils ne **remplacent pas** l'IA — ils filtrent et façonnent les appels d'outils que l'IA demande. Un hook qui *autorise* un appel ne contourne jamais le système d'autorisation normal ; un hook qui *bloque* un appel l'arrête avant qu'il ne s'exécute.

:::

## Que peuvent faire les hooks ?

Chaque hook reçoit les détails de l'événement et peut renvoyer une décision :

- **Bloquer** une action avant qu'elle ne se produise (par exemple, refuser une commande shell dangereuse).
- **Réécrire** les entrées avec lesquelles un outil est sur le point d'être appelé (par exemple, masquer une valeur).
- **Ajouter du contexte** que l'IA lit après l'exécution d'un outil (par exemple, un rappel de conformité).
- **Enregistrer l'activité** pour une consultation ultérieure dans le journal d'audit.

## Concepts clés

### Événements

Un hook est lié à un **événement** — le moment du cycle de vie de l'IA auquel il se déclenche. Les événements les plus importants sont ceux du cycle de vie des outils :

| Événement | Se déclenche quand | Peut-il bloquer ? |
|------|------------|---------------|
| **PreToolUse** | Juste avant l'exécution d'un outil | ✅ Oui — l'outil ne s'exécute jamais |
| **PostToolUse** | Après l'exécution réussie d'un outil | ❌ Non (l'outil s'est déjà exécuté), mais peut ajouter du contexte ou réécrire sa sortie |
| **PostToolUseFailure** | Après l'échec d'un outil | ❌ Non (impossible de transformer un échec en réussite), mais peut ajouter un message |

Des événements supplémentaires dans le modèle de hooks — **SessionStart**, **UserPromptSubmit**, **PermissionRequest**, **PermissionDenied** et **Stop** — sont disponibles dans le menu déroulant des événements et décrivent les moments de session, de prompt, d'autorisation et de fin de tour. Les noms d'événements sont conservés comme identifiants de code (comme `PreToolUse`) dans toutes les langues afin de rester recherchables et non ambigus.

:::note Les événements d'outils sont les points d'application actifs

Les points d'application entièrement câblés aujourd'hui sont les événements du cycle de vie des outils (**PreToolUse**, **PostToolUse**, **PostToolUseFailure**). C'est ici que le blocage, la réécriture des entrées, la réécriture de la sortie et l'injection de contexte prennent effet. Les événements de session, de prompt, d'autorisation et d'arrêt font partie du modèle de hooks et sont sélectionnables dans l'interface ; le déclenchement de chacun dépend de l'endroit où cette partie de l'application l'invoque.

:::

### Sources

Chaque hook possède une **source**, qui détermine à qui il appartient et ce que vous pouvez en faire :

| Source | Ce que c'est | Affiché par défaut ? |
|--------|------------|-------------------|
| **builtin** | Livré avec aiFetchly (sécurité et conformité) | ✅ Oui |
| **user** | Créé par vous sur cette page | ✅ Oui |
| **session** | Enregistré temporairement pour la session en cours | Uniquement quand **Show session hooks** est activé |

Utilisez le filtre **Source** pour restreindre la liste à l'une de ces sources.

### Hooks de commande

Le seul type de hook que vous pouvez créer depuis l'interface est un **hook de commande**. Un hook de commande exécute une commande locale (un script ou un exécutable) et communique avec aiFetchly via JSON :

1. aiFetchly envoie les détails de l'événement à votre commande sous forme d'**objet JSON sur l'entrée standard**.
2. Votre commande effectue son travail et écrit une **décision JSON sur la sortie standard**.
3. aiFetchly lit cette décision et agit en conséquence (bloquer, réécrire l'entrée, ajouter du contexte, etc.).

Les hooks intégrés sont écrits en code (hooks de rappel) et ne sont pas modifiables depuis l'interface — vous pouvez uniquement les activer ou les désactiver.

### Matchers

Le **Matcher** d'un hook restreint *à quels appels d'outils* il s'applique. Le matcher est testé par rapport au **nom de l'outil** et prend en charge des modèles simples avec joker :

| Matcher | Correspond à |
|---------|---------|
| `*` | Tous les outils |
| `shell_execute` | Uniquement l'outil dont le nom est exactement `shell_execute` |
| `scrape_*` | Tout outil dont le nom commence par `scrape_` (par ex. `scrape_search`) |
| `*_search` | Tout outil dont le nom se termine par `_search` |
| `*scrape*` | Tout outil dont le nom contient `scrape` |

Les matchers sont limités à 128 caractères.

### La condition « If »

La **condition If** facultative restreint davantage un hook en ciblant les **valeurs des arguments** de l'outil, et non plus seulement son nom. Elle utilise la même syntaxe de joker, testée par rapport aux arguments sous forme de chaîne passés à l'outil. Par exemple :

- Sur `PreToolUse` avec le matcher `shell_execute`, une condition If de `git *` fait en sorte que le hook ne se déclenche que pour les commandes shell commençant par `git `.
- Une condition If de `rm -rf *` ne se déclenche que pour les commandes de suppression récursive.

La condition If est ignorée pour les événements qui n'ont pas d'arguments d'outil. Elle est limitée à 256 caractères.

### Mode d'échec

Les hooks peuvent échouer — une commande peut planter, expirer ou renvoyer un JSON invalide. Le **mode d'échec** décide de ce qui arrive à l'appel d'outil lorsque le *hook lui-même* produit une erreur (cela est distinct d'un hook qui renvoie délibérément un blocage) :

| Mode d'échec | Quand le hook produit une erreur… |
|--------------|----------------------|
| **warn** | L'erreur est enregistrée dans le journal d'audit, et l'appel d'outil **se poursuit normalement**. |
| **block** | L'erreur est traitée comme un blocage — l'appel d'outil **ne s'exécute pas**. |

Utilisez **warn** pour les hooks non critiques (journalisation, contexte consultatif). Utilisez **block** uniquement lorsque vous préférez arrêter un outil plutôt que de l'exécuter sans la réussite de la vérification de votre hook.

:::tip Bloc vs avertissement, en une phrase

Un hook qui *renvoie* `{ continue: false }` bloque toujours l'outil, quel que soit le mode d'échec. Le mode d'échec n'a d'importance que lorsque le hook **lui-même tombe en panne** (délai d'attente, plantage, JSON incorrect).

:::

### Activation globale

Le commutateur **Enable hooks globally** en haut de la page est le coupe-circuit maître. Lorsqu'il est désactivé, **aucun hook ne se déclenche nulle part** — ni intégré, ni créé par l'utilisateur. Le reste de la page reste interactif afin que vous puissiez continuer à configurer les hooks pendant que le système est en pause. Le paramètre persiste entre les redémarrages.

## Ouvrir la page Hooks

1. Cliquez sur **Settings** dans le menu de navigation de gauche.
2. Ouvrez la page **Hooks** (à côté de Skills et MCP).

## Mise en page de la page

La page Hooks comporte quatre zones, empilées de haut en bas :

```
┌─ Hooks ──────────────────────────────────────────────┐
│ [✓] Enable hooks globally            [+ Add command]  │  header
│ Filter: Event[All▾] Source[All▾] [□ Show session]     │  list filters
│ ┌─────────────────────┬─────────────────────────┐    │
│ │ Hooks (N)           │ Edit panel              │    │  master–detail
│ │ ● block-shell   ✓   │ Hook ID / Event / …     │    │
│ │ ● compliance    ⏸   │ [Save] [Delete]         │    │
│ └─────────────────────┴─────────────────────────┘    │
│ ─ Recent audit ─────────────────────────────────────  │  audit panel
│ Time   Hook        Event       Status   Duration      │
└───────────────────────────────────────────────────────┘
```

- **En-tête** — commutateur d'activation globale et bouton **+ Add command hook**. Une bannière jaune apparaît lorsque les hooks sont globalement désactivés.
- **Filtres de liste** — filtrer la liste des hooks par événement et par source, et révéler facultativement les hooks de session.
- **Maître–détail** — la liste des hooks à gauche ; cliquez sur un hook pour le modifier à droite.
- **Panneau d'audit** — activité récente des hooks avec ses propres filtres et une actualisation automatique facultative.

## Hooks intégrés

aiFetchly est livré avec ces hooks intégrés :

| Hook ID | Événement | Matcher | Par défaut | Ce qu'il fait |
|---------|-------|---------|---------|--------------|
| `builtin-block-dangerous-shell-delete` | PreToolUse | `shell_execute` | **Activé** | Bloque les commandes shell correspondant à un modèle de suppression récursive dangereux (par ex. `rm -rf /` ou `rm -rf *`). |
| `builtin-scraping-compliance-context` | PostToolUse | `scrape_*` | Désactivé | Après tout appel d'outil de scraping, injecte un court rappel de conformité dans le contexte de l'IA afin qu'elle recommande une prospection légale et à données minimales. |

:::warning Contexte de conformité du scraping

Activer `builtin-scraping-compliance-context` injecte des directives de conformité dans le prompt de l'IA après **chaque** appel d'outil de scraping. C'est intentionnel, mais soyez conscient que cela peut influencer la formulation des réponses de suivi de l'IA.

:::

Les hooks intégrés sont en **lecture seule** — leurs champs ne peuvent pas être modifiés et ils ne peuvent pas être supprimés. Vous pouvez uniquement les activer ou les désactiver ; cette substitution persiste entre les redémarrages.

## Créer un hook de commande

### Étape 1 : Démarrer un nouveau hook

Cliquez sur **+ Add command hook**. Le panneau d'édition bascule sur un formulaire vierge avec des valeurs par défaut raisonnables :

- **Event** : `PreToolUse`
- **Matcher** : `*`
- **Failure mode** : `warn`
- **Timeout** : `5000` ms
- **Enabled** : désactivé (les nouveaux hooks démarrent désactivés)

### Étape 2 : Remplir les champs

| Champ | Description |
|-------|-------------|
| **Hook ID** | Un nom unique pour le hook (par exemple `block-home-delete`). Utilisé dans la liste et le journal d'audit. |
| **Event** | Quand le hook se déclenche (voir [Événements](#événements)). |
| **Matcher** | À quels noms d'outils le hook s'applique ; `*` signifie tous (voir [Matchers](#matchers)). |
| **If condition** | Facultatif — restreint davantage par la valeur d'argument de l'outil (voir [La condition « If »](#la-condition--if-)). |
| **Command** | La commande locale à exécuter. Elle reçoit l'événement au format JSON sur stdin et doit afficher une décision JSON sur stdout (voir [Le contrat du hook de commande](#le-contrat-du-hook-de-commande)). |
| **Timeout (ms)** | Durée d'exécution maximale avant que le hook ne soit tué. Par défaut `5000` ; plafonné à `60000`. |
| **Failure mode** | Ce qui se passe lorsque le hook lui-même produit une erreur (voir [Mode d'échec](#mode-déchec)). |
| **Status message** | Court libellé facultatif affiché comme indicateur de progression pendant l'exécution du hook. |

### Étape 3 : Enregistrer et activer

1. Cliquez sur **Save**. Le hook est enregistré avec **Enabled** désactivé, donc rien ne s'exécute pour l'instant.
2. Sélectionnez le hook dans la liste et activez le commutateur **Enabled** pour l'activer.

:::tip Les hooks ne s'exécutent que lorsque les deux commutateurs l'autorisent

Un hook de commande ne se déclenche que lorsque **les hooks sont activés globalement** *et* **que le hook lui-même est activé**. Les nouveaux hooks démarrent désactivés exprès, afin que vous puissiez examiner la commande avant qu'elle ne s'exécute.

:::

## Modifier, activer et supprimer des hooks

- **Activer / désactiver** — sélectionnez n'importe quel hook et basculez le commutateur **Enabled**. Fonctionne pour les hooks intégrés et utilisateur ; le changement prend effet immédiatement et persiste.
- **Modifier les champs** — seuls les hooks **utilisateur** sont modifiables. Sélectionnez le hook, modifiez les champs et cliquez sur **Save**. Les hooks intégrés et de session affichent leurs champs en lecture seule.
- **Supprimer** — seuls les hooks **utilisateur** peuvent être supprimés. Cliquez sur **Delete**, confirmez l'ID du hook et l'aperçu de la commande dans la boîte de dialogue, et le hook est supprimé définitivement. Les hooks intégrés ne peuvent pas être supprimés (le bouton est masqué ; le backend le rejette également par mesure de sécurité).

## Le contrat du hook de commande

Lorsqu'un hook de commande se déclenche, aiFetchly exécute votre **Command** avec `shell: false` — le premier jeton est l'exécutable et les jetons restants sont ses arguments. Il envoie l'événement sous forme d'objet JSON sur **stdin** et lit une décision JSON depuis **stdout**.

### Entrée (stdin)

Pour un hook `PreToolUse`, l'entrée ressemble grossièrement à ceci :

```json
{
  "eventName": "PreToolUse",
  "hookRunId": "run-1a2b3c",
  "tool": { "id": "...", "name": "shell_execute", "source": "legacy-tool" },
  "input": { "command": "rm -rf /tmp/old" },
  "permissionState": { "allowed": true, "needsPrompt": false },
  "timestamp": "2026-07-10T09:42:00.000Z"
}
```

Les champs exacts dépendent de l'événement (par exemple, `PostToolUse` inclut également `output` et `executionTimeMs`). Votre script doit lire de manière défensive — accédez aux champs avec un chaînage optionnel et tolérez les clés manquantes.

### Sortie (stdout)

Votre commande affiche un objet JSON décrivant sa décision. Tous les champs sont facultatifs :

| Champ | Effet |
|-------|--------|
| `continue` | `false` bloque l'appel d'outil (à utiliser avec `reason`). Omis ou `true` pour autoriser. |
| `reason` | Explication lisible par l'humain affichée dans le journal d'audit et (pour les blocages) à l'IA. Max 1000 caractères. |
| `additionalContext` | Texte ajouté au contexte de l'IA (couramment utilisé sur `PostToolUse`). Max 4000 caractères. |
| `systemMessage` | Un message de niveau système. Max 2000 caractères. |
| `updatedInput` | Remplace les entrées de l'outil (**PreToolUse uniquement**). Max 64 Ko. |
| `updatedToolOutput` | Réécrit la sortie de l'outil (**PostToolUse uniquement**) ; ne peut pas transformer un échec en réussite. Max 128 Ko. |
| `suppressOutput` | Masque la sortie de l'outil de la conversation. |
| `permissionDecision` | `allow`, `ask` ou `deny`. `allow` est consultatif et ne contourne jamais le système d'autorisation. |

Une réponse « autoriser » minimale est un objet vide : `{}`. Une sortie qui n'est pas du JSON valide est traitée comme une erreur de hook (soumise au mode d'échec), donc émettez toujours du JSON bien formé.

### Règles d'exécution

- **Pas de fonctionnalités shell.** Comme `shell: false`, les tubes (`|`), les redirections (`>`), l'enchaînement (`&&`) et l'expansion de variables (`$VAR`) ne fonctionnent **pas** directement. Pour les utiliser, invoquez un shell explicitement, par ex. `sh -c "..."` ou `bash -c "..."`.
- **Environnement restreint.** Votre commande ne reçoit qu'une petite liste d'autorisation de variables d'environnement par défaut : `PATH`, `HOME`, `USER`, `USERNAME`, `TEMP`, `TMP`. aiFetchly ne transmet jamais ses propres identifiants ni jetons à votre hook.
- **Guillemets.** L'analyseur de commandes prend en charge les guillemets simples et doubles pour les arguments contenant des espaces (par ex. `-e "console.log(1)"`), mais aucune séquence d'échappement ni expansion de variable.
- **Limites de taille.** stdout est plafonné à 256 Ko et stderr à 64 Ko. Gardez les réponses petites.

## Exemples

### Exemple 1 — Bloquer les suppressions du répertoire personnel

Un hook `PreToolUse` qui refuse les commandes shell supprimant des fichiers sous le dossier personnel.

**Paramètres du hook**

| Champ | Valeur |
|-------|-------|
| Event | `PreToolUse` |
| Matcher | `shell_execute` |
| Failure mode | `block` |
| Command | `node /home/me/hooks/block-home-delete.js` |

**`block-home-delete.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input = {};
  try { input = JSON.parse(raw); } catch { /* ignore malformed input */ }
  const command = String(input?.input?.command ?? "");
  if (/\brm\s+-rf\s+~(\/|$|\s)/.test(command)) {
    process.stdout.write(JSON.stringify({
      continue: false,
      reason: "Refusing to delete files inside the home directory.",
    }));
    return;
  }
  process.stdout.write(JSON.stringify({ continue: true }));
});
```

### Exemple 2 — Ajouter un rappel de conformité après le scraping

Un hook `PostToolUse` qui injecte des directives chaque fois qu'un outil de scraping s'exécute.

**Paramètres du hook**

| Champ | Valeur |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `scrape_*` |
| Failure mode | `warn` |
| Command | `node /home/me/hooks/compliance-reminder.js` |

**`compliance-reminder.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  process.stdout.write(JSON.stringify({
    additionalContext:
      "Only keep contact data you have a lawful basis to process, and prefer minimal, opt-in outreach.",
  }));
});
```

### Exemple 3 — Ajouter chaque appel d'outil à un fichier journal

Un hook `PostToolUse` qui ajoute l'événement brut à un fichier. Comme il utilise une redirection, il invoque un shell explicitement.

| Champ | Valeur |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `*` |
| Failure mode | `warn` |
| Command | `sh -c "cat >> /tmp/aifetchly-tool-audit.log"` |

:::tip Tester avant d'activer

Testez d'abord votre script depuis un terminal en y injectant du JSON d'exemple (`echo '{...}' | node my-hook.js`). Confirmez qu'il affiche du JSON valide et se termine rapidement, puis pointez un hook de commande vers lui.

:::

## Lire le journal d'audit

Le **journal d'audit récent** en bas de la page enregistre chaque exécution de hook. Chaque ligne affiche :

| Colonne | Signification |
|--------|---------|
| **Time** | Quand le hook s'est exécuté. |
| **Hook** | L'ID du hook. |
| **Event** | L'événement qui l'a déclenché. |
| **Status** | `started`, `success`, `blocked`, `failed` ou `timeout`. |
| **Duration** | Combien de temps le hook a pris, en millisecondes. |
| **Reason** | La raison d'un blocage, ou le message d'erreur pour un échec. |

Utilisez les filtres pour restreindre par **event**, **status** ou **hook**, et choisissez le nombre de lignes à charger (100 / 500 / 1000). Cliquez sur l'icône d'actualisation pour démarrer l'**auto-refresh** (l'icône tourne quand elle est active), qui interroge à nouveau toutes les quelques secondes afin que vous puissiez observer l'activité des hooks en direct pendant les tests.

## Sécurité

Le système de hooks est conçu de sorte qu'un hook de commande défaillant ou malveillant ne puisse pas compromettre l'application :

- **Désactivé par défaut.** Les nouveaux hooks de commande sont enregistrés avec Enabled désactivé ; les hooks de commande intégrés sont les seuls livrés activés, et seul celui de sécurité est activé.
- **Environnement restreint.** Les hooks ne reçoivent qu'une liste d'autorisation de variables d'environnement — jamais les identifiants, clés API ou jetons de session d'aiFetchly.
- **Pas d'injection shell.** Les commandes s'exécutent avec `shell: false` et un analyseur argv minimal, donc les opérateurs shell ne sont pas interprétés sauf si vous invoquez explicitement un shell.
- **Exécution bornée.** Chaque hook a un délai d'attente (par défaut 5 s, max 60 s) ; un dépassement est tué et enregistré comme `timeout`.
- **Sortie bornée.** stdout et stderr sont plafonnés ; une sortie trop volumineuse est tronquée.
- **Secrets masqués dans l'audit.** Les modèles ressemblant à des clés API, jetons bearer, cookies ou en-têtes `Authorization` sont masqués avant d'être écrits dans le journal d'audit.
- **Les hooks intégrés sont infalsifiables.** Leurs définitions ne peuvent pas être modifiées ni supprimées depuis l'interface — uniquement basculées.
- **Les hooks ne contournent jamais les autorisations.** Un hook qui renvoie `allow` est consultatif ; le système d'autorisation standard s'applique toujours. Seul un hook qui renvoie `block` court-circuite un appel d'outil.

:::warning Vous êtes responsable des hooks de commande que vous créez

Un hook de commande exécute un programme sur votre machine avec l'environnement décrit ci-dessus. Ne pointez les hooks que vers des scripts en lesquels vous avez confiance, situés dans des répertoires que vous contrôlez, et examinez la commande avant de l'activer.

:::

## Dépannage

### Mon hook de commande ne se déclenche pas

**Causes possibles :**
- Les hooks sont globalement désactivés (bannière jaune en haut).
- Le hook lui-même est désactivé (commutateur Enabled désactivé).
- Le **Matcher** ne correspond pas au nom de l'outil, ou la **If condition** ne correspond pas à la valeur d'argument.
- L'**Event** ne fait pas partie des événements actifs du cycle de vie des outils (`PreToolUse` / `PostToolUse` / `PostToolUseFailure`).

**Solutions :**
1. Activez **Enable hooks globally**.
2. Sélectionnez le hook et activez-le.
3. Définissez temporairement le Matcher sur `*` et effacez la If condition pour confirmer que le hook fonctionne, puis restreignez-le à nouveau.
4. Consultez le journal d'audit — une ligne avec le statut `started` signifie que le hook a été sélectionné ; aucune ligne signifie qu'il n'a jamais correspondu.

### Le hook s'est exécuté mais l'outil s'est quand même exécuté

**Causes possibles :**
- Le hook a renvoyé `{ continue: true }` (ou un objet vide), ce qui autorise l'appel.
- Le hook a **produit une erreur** (statut `failed` ou `timeout`) et le mode d'échec est **warn**, donc l'appel se poursuit quand même.

**Solutions :**
1. Assurez-vous que votre script écrit `{ continue: false, reason: "..." }` lorsqu'il doit bloquer.
2. Si le hook produit des erreurs, définissez le mode d'échec sur **block** si vous voulez que les erreurs arrêtent l'outil, ou corrigez le script pour qu'il cesse d'échouer.

### Le hook affiche le statut `failed` ou `timeout`

**Causes possibles :**
- Le script a planté ou affiché une sortie invalide (non-JSON).
- Le script a pris plus de temps que le délai d'attente configuré.
- La commande a utilisé des fonctionnalités shell (tubes, redirections) sans invoquer un shell.

**Solutions :**
1. Testez le script dans un terminal : `echo '{"eventName":"PreToolUse","input":{"command":"test"}}' | node my-hook.js`. Il doit afficher du JSON valide.
2. Augmentez le délai d'attente (jusqu'à 60000 ms), ou rendez le script plus rapide.
3. Enveloppez les fonctionnalités shell dans `sh -c "..."` ou `bash -c "..."`.

### L'ID du hook ne peut pas être modifié

Les ID de hook sont fixes une fois le hook créé (le champ est désactivé lors de la modification). Pour renommer un hook, créez-en un nouveau avec l'ID souhaité, puis supprimez l'ancien.

### Je ne peux pas modifier ni supprimer un hook intégré

C'est intentionnel. Les hooks intégrés appartiennent au code ; vous pouvez uniquement les activer ou les désactiver.

## Prochaines étapes

- [Compétences IA](../ai-outreach/ai-skills) — les capacités que les hooks peuvent filtrer
- [Outils MCP](../ai-outreach/mcp-tools) — des outils externes dont les appels sont observés par les hooks
- [Assistant Marketing IA](../ai-outreach/ai-marketing-assistant) — d'où proviennent les appels d'outils
- [Paramètres système](./system-settings) — configuration globale
