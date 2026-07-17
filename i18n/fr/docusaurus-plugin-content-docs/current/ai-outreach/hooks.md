---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Gérez les hooks de cycle de vie qui s'exécutent autour du chat IA et de l'activité des outils dans aiFetchly.
---

# Hooks

Les hooks permettent à aiFetchly d'exécuter des actions configurées pendant les événements clés du cycle de vie du chat IA, par exemple avant l'exécution d'un outil, après sa réussite ou après son échec. Utilisez-les pour ajouter des contrôles de sécurité, injecter du contexte de conformité ou connecter une logique locale à l'activité des outils IA.

## Ouvrir Hooks

1. Cliquez sur **Paramètres** dans la navigation de gauche.
2. Ouvrez **Paramètres système**.
3. Cliquez sur **Gérer les Hooks**.

La page Hooks comprend un interrupteur global, une liste de hooks, un panneau d'édition et un journal d'audit récent.

## Activation globale

Utilisez **Enable hooks globally** pour activer ou désactiver tout le système de hooks.

Lorsque les hooks globaux sont désactivés, aucun hook ne se déclenche, même si un hook individuel est activé. C'est le moyen le plus rapide de suspendre tout comportement de hooks pendant un diagnostic.

## Sources des hooks

La liste peut afficher plusieurs sources:

| Source | Description |
|---|---|
| **Intégré** | Hooks fournis avec aiFetchly. Vous pouvez les activer ou les désactiver, mais pas modifier leurs définitions. |
| **Utilisateur** | Hooks de commande créés dans la page Hooks. Ils peuvent être modifiés, activés, désactivés ou supprimés. |
| **Session** | Hooks temporaires liés à la session actuelle. Activez **Show session hooks** pour les inclure dans la liste. |

Utilisez les filtres **Event** et **Source** pour réduire la liste.

## Hooks intégrés

aiFetchly inclut des hooks intégrés pour les workflows de sécurité et de conformité.

| Hook | Par défaut | Rôle |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | Activé | Vérifie `shell_execute` avant l'utilisation de l'outil et bloque les commandes dangereuses de suppression récursive comme `rm -rf /` ou `rm -rf *`. |
| `builtin-scraping-compliance-context` | Désactivé | Ajoute du contexte de conformité après les appels d'outils de scraping. Activer ce hook peut affecter les résultats IA liés au scraping. |

Les hooks intégrés sont définis dans le code. La page Hooks modifie uniquement leur état d'activation.

## Créer un hook de commande

1. Cliquez sur **Add command hook**.
2. Vérifiez ou remplacez le **Hook ID** généré.
3. Choisissez un **Event**.
4. Définissez un **Matcher**.
5. Ajoutez éventuellement une **If condition**.
6. Saisissez la commande locale dans **Command**.
7. Définissez **Timeout (ms)** et **Failure mode**.
8. Ajoutez éventuellement un **Status message**.
9. Cliquez sur **Save**.
10. Sélectionnez le hook enregistré et activez **Enabled** lorsque vous êtes prêt à l'utiliser.

Les nouveaux hooks de commande sont enregistrés désactivés par défaut afin que vous puissiez les vérifier avant leur exécution.

## Champs d'un hook de commande

| Champ | Description |
|---|---|
| **Hook ID** | Identifiant unique du hook. Il ne peut être modifié que pendant la création. |
| **Event** | Événement de cycle de vie pouvant déclencher le hook. |
| **Matcher** | Motif utilisé pour faire correspondre la cible de l'événement, par exemple un nom d'outil. Utilisez `*` pour tout faire correspondre pour l'événement sélectionné. |
| **If condition** | Motif facultatif vérifié sur les valeurs textuelles d'entrée pour les événements liés aux outils. Par exemple, `git *` peut correspondre aux commandes shell commençant par `git `. |
| **Command** | Commande locale exécutée lorsque le hook correspond. L'entrée du hook est transmise à la commande sous forme de JSON via stdin. |
| **Timeout (ms)** | Durée maximale avant qu'aiFetchly arrête la commande. |
| **Failure mode** | `warn` enregistre les erreurs du hook sans bloquer le flux IA. `block` transforme les erreurs d'exécution du hook en opération bloquée. |
| **Status message** | Message facultatif affiché pendant l'exécution du hook. |
| **Enabled** | Contrôle si le hook enregistré peut s'exécuter. |

Les hooks de commande doivent écrire un objet JSON sur stdout. Un objet vide signifie "aucun changement". Les champs de sortie pris en charge incluent `continue`, `reason`, `systemMessage`, `additionalContext`, `updatedInput`, `updatedToolOutput`, `suppressOutput` et `permissionDecision`.

Exemple de sortie qui bloque une opération correspondante:

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

Exemple de sortie qui ajoute du contexte:

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Événements de hook

| Événement | Moment d'exécution |
|---|---|
| `SessionStart` | Lorsqu'une session de chat IA, de plan ou d'agent démarre. |
| `UserPromptSubmit` | Lorsque l'utilisateur envoie un prompt. |
| `PreToolUse` | Avant l'exécution d'un outil. |
| `PostToolUse` | Après la réussite d'un outil. |
| `PostToolUseFailure` | Après l'échec d'un outil. |
| `PermissionRequest` | Lorsqu'une demande d'autorisation d'outil est préparée. |
| `PermissionDenied` | Lorsqu'une demande d'autorisation d'outil est refusée. |
| `Stop` | Lorsque l'exécution IA s'arrête ou se termine. |

## Modifier et supprimer des hooks

Sélectionnez un hook utilisateur dans la liste pour modifier son matcher, sa condition, sa commande, son timeout, son mode d'échec ou son message d'état. Cliquez sur **Save** pour appliquer les changements.

Pour supprimer un hook utilisateur, cliquez sur **Delete** puis confirmez. La suppression d'un hook est permanente.

:::info Restrictions des hooks intégrés

Les hooks intégrés peuvent être activés ou désactivés, mais leur événement, leur matcher et leur comportement ne peuvent pas être modifiés depuis la page Hooks.

:::

## Journal d'audit récent

Le **Recent audit log** affiche l'activité des hooks, notamment:

- Heure
- Hook ID
- Événement
- État
- Durée
- Raison

Filtrez le journal d'audit par **Event**, **Status** ou **Hook**, puis choisissez d'afficher les 100, 500 ou 1000 dernières lignes. Utilisez le bouton d'actualisation pour démarrer ou suspendre l'actualisation automatique pendant vos tests.

Les états courants incluent:

| État | Signification |
|---|---|
| `started` | L'exécution du hook a commencé. |
| `success` | Le hook s'est terminé correctement. |
| `blocked` | Le hook a bloqué l'opération. |
| `failed` | Le hook a échoué. |
| `timeout` | Le hook a dépassé son délai. |

## Notes de sécurité

- Les hooks de commande exécutent des processus locaux. Ne créez que des hooks dont vous comprenez les commandes.
- Gardez les commandes de hook ciblées et prévisibles.
- Préférez `warn` pendant le test d'un nouveau hook, puis passez à `block` uniquement après avoir vérifié le comportement.
- Utilisez le journal d'audit après l'activation d'un hook pour confirmer qu'il se déclenche uniquement quand prévu.
