---
id: slash-commands
title: Commandes Slash
sidebar_label: Commandes Slash
description: Exécutez instantanément des actions courantes et transformez vos invites réutilisables en commandes personnalisées que vous pouvez invoquer avec / dans l'IA Chat V2.
---

# Commandes Slash

Les commandes slash sont des raccourcis courts que vous saisissez dans le composeur de l'**IA Chat V2**. Commencez un message par `/` et aiFetchly exécute soit immédiatement une action (vider le chat, afficher le statut, installer un plugin), soit développe pour vous un modèle d'invite réutilisable.

Chaque commande slash possède un **badge de source** afin que vous sachiez toujours d'où elle provient :

| Badge | Source | Signification |
|---|---|---|
| **Intégré** | `built-in` | Fourni avec aiFetchly. Toujours disponible. |
| **Utilisateur** | `user` | Une commande que vous avez créée dans `~/.aifetchly/commands/`. |
| **Espace de travail** | `workspace` | Une commande définie dans le dossier `.aifetchly/` de l'espace de travail courant. Requiert que l'espace de travail soit approuvé. |
| **Plugin** | `plugin` | Une commande fournie par un plugin installé. |

:::info Les commandes slash résident dans l'IA Chat V2

Les commandes slash sont disponibles dans le composeur de l'**[IA Chat V2](./ai-chat-v2)**. Si vous ne voyez pas le panneau V2, ouvrez-le depuis l'icône de chat ou via `Ctrl/Cmd + K`.

:::

## Utilisation des commandes slash

Vous pouvez soit saisir une commande en entier, soit la choisir dans la liste de suggestions.

### Le déroulé au clavier

1. Cliquez sur le composeur et saisissez `/` comme **premier caractère** — la liste de suggestions s'ouvre.
2. Continuez à saisir pour filtrer. aiFetchly recherche une correspondance avec le **nom** de la commande, un **alias**, ou un mot dans la **description**.
3. Utilisez `↑` / `↓` pour déplacer la surbrillance, ou survolez avec la souris.
4. Appuyez sur `Enter` (ou cliquez) pour **choisir** une commande. Cela insère `/name ` dans la zone et ferme la liste — cela **n'envoie pas** encore le message.
5. Saisissez les éventuels arguments après la commande insérée (par exemple le texte à traduire).
6. Appuyez sur `Enter` pour l'exécuter. (`Shift + Enter` insère un saut de ligne comme d'habitude.)
7. Appuyez sur `Esc` à tout moment pour fermer la liste sans effectuer de sélection.

| Touche | Action |
|---|---|
| `/` (au début) | Ouvre la liste de suggestions |
| Saisir plus | Filtre la liste par nom / alias / description |
| `↑` / `↓` | Déplace la surbrillance |
| `Enter` | Choisit la commande en surbrillance (remplit `/name `) |
| `Esc` | Ferme la liste |
| `Shift + Enter` | Nouvelle ligne (comportement normal du composeur) |

:::tip Saisir une commande en entier

La liste n'est qu'une aide — vous pouvez l'ignorer et saisir vous-même le nom d'une commande, par exemple `/clear`. Notez que tant que la liste est ouverte, `Enter` sélectionne la proposition surlignée au lieu d'envoyer ; appuyez sur `Esc` pour fermer la liste, puis sur `Enter` pour exécuter ce que vous avez saisi.

:::

:::warning Les commandes ne se déclenchent qu'en début de message

Un message est traité comme une commande slash uniquement lorsqu'il **commence par `/`** et ne comporte pas de pièce jointe. Si vous souhaitez envoyer du texte littéral commençant par `/`, ajoutez d'abord un espace ou un mot (par exemple, « `/path/to/file` »).

:::

## Commandes intégrées

Celles-ci sont fournies avec aiFetchly et sont toujours disponibles. Elles s'exécutent instantanément sans appeler l'IA (à l'exception de `/plugin`, qui effectue une action d'installation).

| Commande | Description |
|---|---|
| `/help` | Liste les commandes slash disponibles et leurs sources. |
| `/clear` | Vide la conversation en cours. |
| `/status` | Affiche l'état de configuration d'AiFetchly, les décomptes et les diagnostics. |
| `/skills` | Liste les compétences/outils IA actuellement disponibles dans ce système. |
| `/agents` | Liste les agents AiFetchly disponibles (intégrés et dynamiques). |
| `/reload-config` | Réanalyse `~/.aifetchly` et recharge la configuration. |
| `/goal` | Définit ou remplace l'objectif AI Chat actif et entre en Mode Plan. |
| `/loop` | Exécute des itérations autonomes bornées vers l'objectif actif. |
| `/plugin` | Gère les marketplaces de plugins et installe des plugins depuis le chat. |

### `/help`

Effectue un inventaire rapide de toutes les commandes disponibles dans votre portée actuelle (intégrées + utilisateur + espace de travail + plugin), chacune affichée avec son badge de source. Utilisez-le pour découvrir les commandes que vous (ou un plugin) avez ajoutées.

### `/clear`

Vide la conversation en cours. Utilisez-le pour repartir de zéro sans ouvrir la boîte de dialogue d'historique des conversations. Cette action est irréversible.

### `/status`

Affiche un instantané de votre configuration aiFetchly : combien de commandes, d'agents, de hooks et de compétences sont chargés, combien de diagnostics ont été levés, et quand la configuration a été rechargée pour la dernière fois. Pratique pour dépanner des commandes personnalisées qui ne se sont pas chargées.

### `/skills` et `/agents`

`/skills` liste les compétences/outils IA actuellement activés dans ce système. `/agents` liste les agents aiFetchly disponibles (intégrés et dynamiques). Consultez [Compétences IA](./ai-skills) et [Sous-agents](./subagents) pour plus de contexte.

### `/reload-config`

Force une réanalyse de `~/.aifetchly` et recharge la configuration. Utilisez-le après avoir **modifié ou ajouté manuellement** des fichiers de commande en dehors de l'application et que vous souhaitez qu'ils apparaissent immédiatement. Si l'observateur de fichiers est en cours d'exécution, les nouvelles commandes apparaissent généralement d'elles-mêmes — ceci est le repli manuel.

### `/plugin`

La seule commande intégrée qui accepte des arguments. Elle vous permet de gérer les marketplaces de plugins et d'installer des plugins sans quitter le chat.

```
/plugin marketplace add <source> [--ref <ref>] [--overwrite]
/plugin install <plugin@marketplace|source> [--overwrite] [--ref <ref>] [--kind <kind>]
```

La `<source>` peut être un dossier local, un fichier `.zip`, une URL Git/GitHub/HTTPS, un raccourci GitHub `owner/repo`, ou `npm:<package>`. L'option facultative `--kind` prend l'une des valeurs `local-zip | local-folder | git | github | npm | url`.

Exemples :

```
/plugin marketplace add https://github.com/acme/aifetchly-plugins
/plugin install lead-tools@acme-plugins
/plugin install npm:@acme/awesome-plugin
```

Consultez [Gestionnaire de plugins](./plugin-manager) pour le cycle de vie complet des plugins.


### `/goal` et `/loop`

Contrairement aux autres commandes intégrées ci-dessus, ces deux-ci sont pilotées par l'IA et fonctionnent ensemble : `/goal` définit un objectif durable et vérifiable (et entre en Mode Plan), et `/loop <maxIterations>` exécute un nombre borné d'itérations autonomes vers cet objectif. L'achèvement est fondé sur des preuves — l'assistant ne peut pas déclarer son propre objectif terminé.

```text
/goal Build a Facebook campaign scraper and verify it works
/loop 5
```

Consultez la page dédiée **[Commandes d'objectif et de boucle](./goal-and-loop)** pour les critères d'acceptation, les méthodes de vérification, les limites de boucle, les conditions d'arrêt et la signification des états.
## Sources des commandes et précédence

Les commandes des quatre sources sont fusionnées en une seule liste. Lorsque deux commandes portent le même nom, cette précédence détermine laquelle s'exécute :

**Intégré → Espace de travail → Utilisateur → Plugin**

- Les commandes **intégrées** ne peuvent jamais être remplacées. `/clear`, `/help`, etc. signifient toujours ce qu'aiFetchly dit qu'elles signifient.
- Une commande d'**espace de travail** masque une commande **utilisateur** du même nom, qui à son tour masque une commande de **plugin**.
- Les alias comptent aussi : si vous donnez à une commande personnalisée l'alias `clear`, `/clear` exécute toujours la commande intégrée (les noms et alias intégrés priment toujours).

Cela signifie que vous pouvez nommer sans risque une commande personnalisée `outreach` même si un plugin en définit une — votre commande prime sur le plugin, mais une commande intégrée portant ce nom primerait sur la vôtre.

## Création de commandes personnalisées

Les commandes personnalisées sont des **modèles d'invites réutilisables** stockés sous forme de petits fichiers Markdown. Elles sont parfaites pour les invites que vous envoyez souvent : une liste de vérification de recherche, une structure d'approche fixe, une demande de traduction, un format de résumé.

Il existe deux emplacements où vous pouvez les placer :

| Emplacement | Portée | Confiance |
|---|---|---|
| `~/.aifetchly/commands/*.md` | Disponible dans **chaque** chat (vos commandes globales). | Automatiquement approuvées — vous les avez créées. |
| `<workspace>/.aifetchly/commands/*.md` | Disponible **uniquement** lorsque cet espace de travail est actif. | Requiert que l'espace de travail soit [approuvé](#workspace-commands-and-trust). |

`~` représente votre répertoire personnel (`/home/you` sur macOS/Linux, `%USERPROFILE%` sur Windows). Le dossier `.aifetchly` est la racine de configuration globale d'aiFetchly.

### Format de fichier

Chaque commande correspond à un fichier `.md` avec un petit en-tête frontmatter et un corps d'invite :

```
---
name: outreach
description: Draft a cold outreach email for the given company.
type: prompt
argumentHint: <company website>
aliases:
  - reach
---
Research the company behind the following website, then write a concise,
friendly cold-outreach email proposing how aiFetchly could help them find
more leads. Keep it under 120 words.

$ARGUMENTS
```

#### Champs du frontmatter

| Champ | Requis | Remarques |
|---|---|---|
| `name` | Oui | Lettres minuscules, chiffres, `-`, `_`. Doit commencer par une lettre. Exemple : `outreach`. C'est ce que vous saisissez après `/`. |
| `description` | Oui | Jusqu'à 500 caractères. Affiché dans la liste de suggestions. |
| `type` | Oui | Doit valoir `prompt` pour les commandes d'invite personnalisées. |
| `argumentHint` | Non | Jusqu'à 100 caractères. Une indication affichée à côté du nom, par ex. `<text>`. |
| `aliases` | Non | Jusqu'à 10 noms alternatifs, chacun suivant les règles de `name`. Listés sous forme de tableau de chaînes YAML. |

Le **corps** (tout ce qui suit le second `---`) est le texte de l'invite. Il doit être non vide.

:::warning Utilisez les noms de champs exacts

L'analyseur de frontmatter ne comprend que les lignes simples `key: value` et les tableaux de chaînes — il s'agit intentionnellement **d'un analyseur YAML partiel**, pour des raisons de sécurité. Tenez-vous aux champs ci-dessus. N'ajoutez pas de cartes imbriquées, de valeurs multilignes entre guillemets, ni de champs inconnus en vous attendant à ce qu'ils fassent quelque chose.

:::

### Le jeton `$ARGUMENTS`

Tout ce que vous saisissez **après** le nom de la commande devient les arguments de la commande. Le jeton `$ARGUMENTS` contrôle où ce texte atterrit dans votre invite :

- **Le corps contient `$ARGUMENTS`** — chaque occurrence est remplacée par votre texte.
- **Le corps ne contient pas `$ARGUMENTS` mais vous avez saisi quelque chose** — votre texte est ajouté à la fin du corps, afin qu'il ne soit jamais silencieusement ignoré.
- **Vous n'avez rien saisi** — le corps est utilisé exactement tel qu'écrit.

Exemple avec `/outreach acme.com` :

```
Research the company behind the following website, then write ...
more leads. Keep it under 120 words.

acme.com
```

### Quelques exemples supplémentaires

Une commande sans argument (une liste de vérification fixe que vous invoquez avec `/review`) :

```
---
name: review
description: Load my standard lead-review checklist into the chat.
type: prompt
---
Review the most recent lead in this conversation against my checklist:
1. Is the website a real business?
2. What product/service do they sell?
3. Who is the likely decision-maker?
4. What is a relevant hook for outreach?
Return the answers as a short table.
```

Une commande avec un alias (invoquable via `/translate` **ou** `/tr`) :

```
---
name: translate
description: Translate the given text to English.
type: prompt
argumentHint: <text>
aliases:
  - tr
---
Translate the following text to English:

$ARGUMENTS
```

### Limites

- Chaque fichier de commande : jusqu'à **64 Ko**.
- Jusqu'à **200 commandes** par source.
- `description` : jusqu'à 500 caractères. `argumentHint` : jusqu'à 100. `aliases` : jusqu'à 10.

Les fichiers qui enfreignent ces règles, ou qui ont un frontmatter invalide, sont ignorés et apparaissent comme un diagnostic dans `/status`.

## Commandes d'espace de travail et approbation

Les commandes placées dans le dossier `.aifetchly/commands/` d'un **espace de travail** constituent un moyen puissant de partager des commandes avec une équipe via un dépôt. Comme elles proviennent d'un dossier que vous venez peut-être de récupérer, aiFetchly les considère comme **non approuvées par défaut**.

- Lorsqu'un espace de travail définit une configuration, aiFetchly affiche une invite **Workspace AiFetchly config** vous demandant de l'examiner et de l'**approuver** avant que ses commandes ne soient activées.
- Tant que vous n'approuvez pas l'espace de travail, ses commandes sont **masquées** dans la liste et ne peuvent pas être dispatchées — vous verrez *« Command /name is disabled because workspace config is not trusted. »*
- Les commandes d'espace de travail sont limitées à leur espace de travail. Une commande de l'espace de travail A n'est **jamais** disponible dans un chat qui utilise l'espace de travail B.

Il s'agit de la véritable barrière de sécurité quant à l'origine des commandes — examinez toujours le dossier `.aifetchly/` d'un espace de travail avant de l'approuver, tout comme vous examineriez n'importe quel autre code dans ce dépôt.

## Commandes de plugin

Les plugins peuvent fournir leurs propres commandes slash, aux côtés des compétences et des serveurs MCP. Une fois un plugin installé, ses commandes apparaissent automatiquement avec un badge **Plugin** et un identifiant de source `plugin:<name>`. Consultez [Gestionnaire de plugins](./plugin-manager) pour l'installation et la gestion des plugins, et [Compétences IA](./ai-skills) pour le modèle plus large de capacités détenues par les plugins.

## Conseils

### À FAIRE ✅

- **Utilisez `/help`** pour voir exactement quelles commandes sont disponibles dans votre portée actuelle.
- **Transformez les invites répétées en commandes** — si vous avez saisi les mêmes instructions trois fois, créez une `/command` pour cela.
- **Donnez des alias courts à vos commandes** afin qu'elles soient rapides à saisir (par ex. `tr` pour `translate`).
- **Exécutez `/status`** lorsqu'une commande personnalisée que vous venez d'ajouter n'apparaît pas — le nombre de diagnostics vous indique si un fichier a échoué au chargement.
- **Approuvez la configuration d'espace de travail de manière délibérée** — lisez les commandes avant d'approuver.

### À NE PAS FAIRE ❌

- **Ne vous attendez pas à pouvoir remplacer les commandes intégrées** — `/clear`, `/help`, etc. priment toujours. Choisissez un autre nom.
- **Ne placez pas de secrets dans les fichiers de commande** — ce sont de simples fichiers Markdown sur le disque, qui peuvent être partagés via un dépôt.
- **N'approuvez pas une configuration d'espace de travail que vous n'avez pas lue** — ses commandes peuvent exécuter des invites et appeler des outils.
- **Ne vous attendez pas à ce que `Tab` fournisse la complétion automatique** — utilisez `Enter` pour choisir dans la liste.

## Dépannage

### Ma commande personnalisée n'apparaît pas dans la liste

- Confirmez que le fichier se trouve à `~/.aifetchly/commands/<name>.md` (ou l'équivalent pour l'espace de travail) et se termine par `.md`.
- Vérifiez que `name` respecte les règles (minuscules, commence par une lettre, uniquement des lettres/chiffres/`-`/`_`).
- Assurez-vous que `type: prompt` est présent et que le corps est non vide.
- Exécutez `/status` — si le nombre de diagnostics n'est pas nul, un fichier a échoué à la validation. Exécutez `/reload-config` pour forcer une réanalyse.
- Gardez en tête la précédence des commandes intégrées : une commande intégrée ou d'espace de travail portant le même nom masquera la vôtre.

### J'obtiens « Unknown slash command: /name »

La commande n'est pas disponible dans la portée actuelle. Il peut s'agir d'une commande d'espace de travail dont l'espace de travail n'est pas actif ou approuvé, ou d'une commande de plugin dont le plugin n'est pas installé. `/help` liste tout ce qui est actuellement disponible.

### J'obtiens « Command /name is disabled. »

La commande provient d'un espace de travail dont vous n'avez pas encore approuvé la configuration. Ouvrez l'invite d'approbation de l'espace de travail et examinez la configuration avant de l'activer.

### Sélectionner une commande ne l'exécute pas

C'est normal. Choisir une commande dans la liste insère `/name ` dans la zone et ferme la liste. Saisissez les éventuels arguments, puis appuyez sur `Enter` pour l'exécuter.

## Prochaines étapes

- [IA Chat V2](./ai-chat-v2) — le chat où résident les commandes slash.
- [Compétences IA](./ai-skills) — des outils packagés que l'IA peut appeler.
- [Sous-agents](./subagents) — des spécialistes ciblés comme le Lead Researcher.
- [Gestionnaire de plugins](./plugin-manager) — installez des plugins qui apportent leurs propres commandes.
