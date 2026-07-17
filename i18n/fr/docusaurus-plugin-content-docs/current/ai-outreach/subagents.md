---
id: subagents
title: Sous-agents
sidebar_label: Sous-agents
description: Gérez les sous-agents IA intégrés, installés par plugin, de workspace et manuels dans aiFetchly.
---

# Sous-agents

Les sous-agents sont des définitions réutilisables d'agents IA spécialisés. Ils décrivent un rôle ciblé, un prompt système, les outils autorisés, une préférence de modèle et des limites d'exécution qu'aiFetchly peut utiliser pour des tâches IA précises.

Les plugins peuvent installer des sous-agents avec des AI Skills et des serveurs MCP. Vous pouvez aussi créer des sous-agents manuels pour vos workflows récurrents.

## Ouvrir Sous-agents

1. Cliquez sur **Paramètres** dans la navigation de gauche.
2. Ouvrez **Paramètres système**.
3. Cliquez sur **Gérer les sous-agents**.

La page affiche une table compacte, des contrôles de recherche et de filtre, une boîte de dialogue de détails et l'action **Ajouter un sous-agent**.

## Sources des sous-agents

| Source | Description |
|---|---|
| **Intégré** | Agents fournis avec aiFetchly. Ils sont en lecture seule. |
| **Plugin** | Agents installés par un plugin. Ils sont en lecture seule depuis la page Sous-agents, mais peuvent être activés ou désactivés. |
| **Workspace** | Agents chargés depuis des fichiers du workspace. Modifiez le fichier d'agent du workspace pour les changer. |
| **Manuel** | Agents créés par vous dans aiFetchly. Ils peuvent être modifiés, activés, désactivés ou supprimés. |

Utilisez le filtre de source pour afficher tous les sous-agents ou une seule source.

## Rechercher et filtrer

La table contient:

| Colonne | Description |
|---|---|
| **Agent** | Nom affiché et ID d'exécution. |
| **Description** | Résumé court de ce que fait l'agent. |
| **Source** | Intégré, Plugin, Workspace ou Manuel. |
| **Mode** | Rôle de l'agent, comme `specialist`, `verifier`, `coordinator` ou `formatter`. |
| **Outils** | Nombre d'outils que l'agent peut utiliser. |
| **Statut** | Activé ou désactivé, avec indicateurs d'avertissement pour les agents non sains. |
| **Actions** | Interrupteur d'activation quand il est disponible. |

Vous pouvez rechercher par ID, nom, description ou nom de plugin. Le filtre de statut peut afficher tous les agents, les agents activés ou les agents désactivés.

## Voir les détails

Cliquez sur une ligne pour ouvrir le panneau de détails. Il affiche:

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
- `tools`
- `model`
- `mode`
- Limites d'exécution
- Instructions Markdown qui deviennent le prompt système

Les sous-agents de plugin sont namespacés par plugin, par exemple `lead-pack:researcher`. Les dossiers imbriqués peuvent créer des IDs plus profonds, comme `lead-pack:review:verifier`.

## Gérer les sous-agents de plugin

Les sous-agents de plugin apparaissent à deux endroits:

- **Paramètres système → Sous-agents** pour le catalogue complet.
- **Plugin Manager → détail du plugin → Sous-agents** pour les agents d'un plugin.

Dans l'onglet Sous-agents du détail plugin, vous pouvez consulter le nom, l'ID, le mode, le nombre d'outils, la santé et l'état activé. Désactiver un sous-agent de plugin ne désactive pas les autres skills, serveurs MCP ou sous-agents du plugin.

Si le plugin entier est désactivé, ses sous-agents sont indisponibles même si leur interrupteur individuel est actif. Réactiver le plugin restaure les paramètres de composant précédemment enregistrés.

## Santé et avertissements

Les sous-agents peuvent signaler des états comme `healthy`, `disabled`, `partial_load`, `invalid` ou `missing_files`.

Les avertissements indiquent généralement qu'aiFetchly a chargé l'agent avec des restrictions ou trouvé un problème dans la définition source. Ouvrez le panneau de détails ou les diagnostics du plugin pour examiner la cause.

## Notes de sécurité

- Les sous-agents de plugin sont des définitions, pas des programmes indépendants.
- Les champs sensibles fournis par les plugins, comme les modes d'autorisation, hooks, enregistrement direct de serveurs MCP ou paramètres d'exécution privilégiée, sont ignorés ou signalés.
- Les outils autorisés définissent la limite supérieure du sous-agent. aiFetchly croise toujours cette liste avec les outils activés et la politique runtime.
- Gardez les prompts système manuels autonomes, car les sous-agents ne doivent pas supposer qu'ils voient tout l'historique du chat parent.
