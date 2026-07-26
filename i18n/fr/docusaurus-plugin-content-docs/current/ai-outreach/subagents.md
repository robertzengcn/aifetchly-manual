---
id: subagents
title: Sous-agents
sidebar_label: Sous-agents
description: Gérez les sous-agents IA intégrés, installés par plugin, de workspace et manuels dans aiFetchly.
---

# Sous-agents

Les sous-agents sont des définitions réutilisables d'agents IA spécialisés. Ils décrivent un rôle ciblé, un prompt système, les outils autorisés, une préférence de modèle et des limites d'exécution qu'aiFetchly peut utiliser pour des tâches IA précises.

Les plugins peuvent installer des sous-agents avec des AI Skills et des serveurs MCP. Vous pouvez aussi créer des sous-agents manuels pour vos workflows récurrents.

## Comment l'IA utilise les sous-agents

Vous n'invoquez pas les sous-agents directement. Au début d'un chat, aiFetchly injecte une liste **Available AiFetchly agents** dans le contexte de l'IA — chaque entrée affiche l'ID d'exécution de l'agent, sa description et sa source. Quand une tâche correspond, l'IA appelle l'outil **`run_subagent`** avec cet ID. Le sous-agent s'exécute alors avec son propre prompt système, ses outils autorisés et ses limites d'exécution, puis renvoie son résultat à l'IA principale.

## Agents intégrés

aiFetchly est livré avec un sous-agent intégré:

- **Lead Researcher** (`agent-lead-researcher`) — un agent `specialist` qui rassemble le contexte public d'une entreprise pour un lead (industrie, résumé, produits, signaux) à l'aide des outils search-scraper et Knowledge Library, et renvoie un objet JSON structuré avec les URLs source et un score de confiance. Il est en lecture seule.

## Ouvrir les Sous-agents

1. Cliquez sur **Paramètres système** dans le menu de navigation de gauche.
2. Cliquez sur **Gérer les sous-agents**.

La page Sous-agents affiche une table compacte, des contrôles de recherche et de filtre, une boîte de dialogue de détails et une action **Ajouter un sous-agent**.

## Sources des sous-agents

| Source | Description |
|---|---|
| **Intégré** | Agents fournis avec aiFetchly. Ils sont en lecture seule. |
| **Plugin** | Agents installés par un plugin. Ils sont en lecture seule depuis la page Sous-agents, mais peuvent être activés ou désactivés. |
| **Workspace** | Agents chargés depuis les fichiers `.aifetchly/agents/` du workspace. Ils peuvent être activés ou désactivés ici; modifiez le fichier du workspace pour changer leur définition. Les agents de workspace ne se chargent qu'une fois le workspace approuvé. |
| **Manuel** | Agents créés par vous dans aiFetchly, **ou** définis comme fichiers Markdown sous `~/.aifetchly/agents/`. Ils peuvent être modifiés, activés, désactivés ou supprimés. |

Utilisez le filtre de source pour afficher tous les sous-agents ou une seule source.

## Rechercher et filtrer

La table Sous-agents contient:

| Colonne | Description |
|---|---|
| **Agent** | Nom affiché et ID d'exécution. |
| **Description** | Résumé court de ce que fait l'agent. |
| **Source** | Intégré, Plugin, Workspace ou Manuel. |
| **Plugin** | Le plugin propriétaire, le cas échéant. |
| **Mode** | Rôle de l'agent, comme `specialist`, `verifier`, `coordinator` ou `formatter`. |
| **Outils** | Nombre d'outils que l'agent peut utiliser. |
| **Modèle** | Le modèle par défaut de l'agent, s'il est défini. |
| **Statut** | Activé ou désactivé, avec indicateurs d'avertissement pour les agents non sains. |
| **Actions** | Interrupteur d'activation quand il est disponible. |

Vous pouvez rechercher par ID d'agent, nom, description ou nom de plugin. Le filtre de statut peut afficher **tous** les agents, les agents **activés**, les agents **désactivés**, ou les agents qui **ont des avertissements**.

## Voir les détails

Cliquez sur une ligne de sous-agent pour ouvrir son panneau de détails. Le panneau affiche:

- Nom de l'agent et ID d'exécution
- Source et plugin propriétaire, le cas échéant
- Statut et santé
- Description
- Fichier source ou chemin de composant plugin
- Mode et modèle par défaut
- Nombre maximal d'appels d'outils
- Durée maximale d'exécution
- Nombre maximal de continuations
- Outils autorisés
- Prompt système

Les agents en lecture seule affichent une note indiquant où les modifier. Les agents manuels affichent les actions **Modifier le sous-agent** et **Supprimer ce sous-agent**.

## Créer un sous-agent manuel

1. Cliquez sur **Ajouter un sous-agent**.
2. Saisissez un **Nom**.
3. Vérifiez ou modifiez l'**ID slug** généré.
4. Ajoutez une **Description**.
5. Choisissez un **Mode**.
6. Rédigez le **Prompt système**.
7. Ajoutez les **Outils autorisés** séparés par des virgules.
8. Définissez éventuellement un **Modèle par défaut**.
9. Définissez les limites d'exécution.
10. Ajoutez éventuellement un objet JSON de **Schéma de sortie**.
11. Choisissez si le sous-agent commence **Activé**.
12. Cliquez sur **Enregistrer**.

L'ID slug est verrouillé après la création; choisissez donc un identifiant stable.

## Champs d'un sous-agent manuel

| Champ | Description |
|---|---|
| **Nom** | Nom lisible affiché dans la table et le panneau de détails. |
| **ID slug** | Identifiant d'exécution stable. Il est généré depuis le nom avant le premier enregistrement et ne peut plus être modifié ensuite. |
| **Description** | Courte explication du moment où utiliser le sous-agent. |
| **Mode** | Rôle fonctionnel: `coordinator`, `specialist`, `verifier` ou `formatter`. |
| **Prompt système** | Instructions du sous-agent. Gardez-les autonomes et spécifiques. |
| **Outils autorisés** | Noms d'outils séparés par des virgules. La politique d'exécution s'applique toujours. |
| **Modèle par défaut** | Préférence de modèle facultative pour ce sous-agent. |
| **Max appels outils** | Nombre maximal d'appels d'outils pendant une exécution. |
| **Max runtime (secondes)** | Durée maximale d'une exécution du sous-agent. |
| **Max continuations** | Nombre maximal de tours de continuation. |
| **Schéma de sortie** | Objet JSON facultatif décrivant la sortie structurée attendue. |
| **Activé** | Contrôle si ce sous-agent est disponible pour le runtime. |

## Modifier et supprimer des sous-agents manuels

Ouvrez un sous-agent manuel et cliquez sur **Modifier le sous-agent** pour mettre à jour son nom, sa description, son prompt système, ses outils autorisés, son modèle, ses limites, son schéma de sortie ou son état.

Pour le supprimer, ouvrez son panneau de détails et cliquez sur **Supprimer ce sous-agent**. La suppression est permanente.

## Sous-agents installés par plugin

Les plugins peuvent inclure des sous-agents dans des fichiers Markdown sous un dossier `agents/` ou via des déclarations du manifeste. Une fois installés, ces fichiers deviennent des définitions de sous-agent appartenant au plugin dans aiFetchly.

Un sous-agent de plugin peut inclure:

- `name`
- `description`
- `tools` (et/ou `skills`, qui sont fusionnés avec les outils autorisés)
- `model`
- `mode`
- Limites d'exécution (`maxToolCalls`, `maxRuntimeMs`, `maxTurns`)
- Un `outputSchema` facultatif
- Instructions Markdown qui deviennent le prompt système

Les sous-agents de plugin sont namespacés par plugin, par exemple `lead-pack:researcher`. Les dossiers imbriqués peuvent créer des IDs plus profonds, comme `lead-pack:review:verifier`.

## Gérer les sous-agents de plugin

Les sous-agents de plugin apparaissent à deux endroits:

- **Paramètres système → Sous-agents** pour le catalogue complet.
- **Plugin Manager → détail du plugin → Sous-agents** pour les agents d'un plugin.

Dans l'onglet Sous-agents du détail plugin, vous pouvez consulter le nom, l'ID, le mode, le nombre d'outils, la santé et l'état activé de chaque agent. Désactiver un sous-agent de plugin ne désactive pas les autres skills, serveurs MCP ou sous-agents du plugin.

Si le plugin entier est désactivé, ses sous-agents sont indisponibles même si leur interrupteur individuel est actif. Réactiver le plugin restaure les paramètres de composant précédemment enregistrés.

## Santé et avertissements

Les sous-agents peuvent signaler des états comme `healthy`, `disabled`, `partial_load`, `invalid` ou `missing_files`.

Les avertissements indiquent généralement qu'aiFetchly a chargé l'agent avec des restrictions ou trouvé un problème dans la définition source. Ouvrez le panneau de détails ou les diagnostics du plugin pour examiner la cause.

## Notes de sécurité

- Les sous-agents de plugin sont des définitions, pas des programmes indépendants.
- Les champs sensibles fournis par les plugins, comme les modes d'autorisation, hooks, enregistrement direct de serveurs MCP ou paramètres d'exécution privilégiée, sont ignorés ou signalés.
- Les outils autorisés définissent la limite supérieure du sous-agent. aiFetchly croise toujours cette liste avec les outils activés et la politique runtime.
- Gardez les prompts système manuels autonomes, car les sous-agents ne doivent pas supposer qu'ils voient tout l'historique du chat parent.
