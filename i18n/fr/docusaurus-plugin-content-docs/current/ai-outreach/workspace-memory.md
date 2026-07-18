---
id: workspace-memory
title: Mémoire d'espace de travail
sidebar_label: Mémoire d'espace de travail
description: Utilisez une mémoire scoped par espace de travail pour qu'AI Chat retienne décisions, workflows, conventions, références et avertissements propres au projet.
---

# Mémoire d'espace de travail

La mémoire d'espace de travail permet à AI Chat de retenir du contexte propre à un projet pour un espace de travail approuvé. Elle est séparée de la mémoire utilisateur globale et de la mémoire de conversation, afin que les détails d'un projet ne soient pas réutilisés dans un autre.

Utilisez-la pour les informations durables qui doivent s'appliquer lorsque vous travaillez dans le même dossier de projet, espace de campagne ou dépôt.

## Ce qu'elle mémorise

| Type | À utiliser pour |
|---|---|
| **Projet** | Contexte de produit, campagne, jalon ou projet non évident depuis les fichiers. |
| **Décision** | Décisions produit ou techniques approuvées par l'utilisateur. |
| **Workflow** | Commandes, étapes de revue ou procédures pour cet espace. |
| **Convention** | Conventions de code, rédaction, nommage ou UX. |
| **Référence** | Pointeurs vers fichiers locaux, docs, specs ou ressources externes. |
| **Avertissement** | Pièges connus, actions restreintes, tests instables, règles de conformité ou contraintes de sécurité. |

N'y stockez pas de secrets, clés API, cookies, données privées de leads, transcriptions complètes, grosses sorties d'outils, contenu brut de fichiers ou progression temporaire.

## Portée

La mémoire d'espace de travail fonctionne seulement lorsque la conversation AI Chat possède un espace de travail approuvé.

aiFetchly résout l'espace à une identité stable. Si le dossier choisi est dans un dépôt Git, la mémoire est scoped à la racine Git. Sinon, elle est scoped au chemin réel sélectionné.

Conséquences:

- Les conversations du même espace approuvé peuvent partager la mémoire.
- Les mémoires d'un espace ne sont pas injectées dans un autre.
- Sans espace approuvé, la mémoire ne peut pas être ouverte ni utilisée.

## Ouvrir la mémoire

1. Ouvrez **AI Chat**.
2. Choisissez ou approuvez un espace de travail au-dessus du composeur.
3. Cliquez sur **Mémoire** dans le badge de l'espace.

Le dialogue affiche les mémoires actives de l'espace actuel. Le badge indique aussi leur nombre.

## Créer une mémoire

1. Ouvrez le dialogue de mémoire.
2. Cliquez sur **Créer une mémoire**.
3. Choisissez un **Type**.
4. Saisissez un **Titre** court.
5. Saisissez le **Contenu**.
6. Réglez la **Confiance**.
7. Cliquez sur **Enregistrer**.

Les mémoires manuelles sont enregistrées uniquement pour l'espace approuvé actif.

## Champs

| Champ | Description |
|---|---|
| **Type** | Catégorie: projet, décision, workflow, convention, référence ou avertissement. |
| **Titre** | Libellé court pour lecture rapide et recherche. |
| **Contenu** | Texte de la mémoire. Gardez-le concis et durable. |
| **Confiance** | Score de 0 à 100. Les mémoires manuelles commencent haut, mais vous pouvez le baisser. |
| **Statut** | Disponible à l'édition: actif, archivé ou contredit. |

## Rechercher et réviser

Utilisez la recherche pour trouver des mémoires par titre ou contenu.

Chaque ligne affiche le type, le titre, le contenu, le statut si non actif, la source, la date de mise à jour, la dernière utilisation et la confiance. Activez **Afficher les archivées** pour inclure les mémoires archivées et contredites.

## Modifier, archiver et supprimer

- **Modifier** met à jour type, titre, contenu, confiance ou statut.
- **Archiver** masque la mémoire de la liste active sans la supprimer.
- **Supprimer** retire définitivement la mémoire après confirmation.

Les mémoires archivées sont masquées sauf si **Afficher les archivées** est activé.

## Auto-résumé d'espace

L'auto-résumé d'espace, appelé workspace auto-dream en interne, peut consolider des informations propres au projet depuis les conversations et tâches d'agents.

Dans le dialogue:

- Le badge montre le nombre actif et l'état de l'auto-résumé.
- **RUN AUTO SUMMARY** lance une consolidation manuelle.
- La dernière exécution est affichée quand elle existe.

Vous pouvez inspecter, modifier, archiver ou supprimer les mémoires générées.

## Paramètres

| Paramètre | Effet |
|---|---|
| **Injection de mémoire d'espace de travail** | Injecte les mémoires pertinentes dans le contexte d'AI Chat pour l'espace approuvé actif. |
| **Auto-résumé d'espace de travail** | Consolide en arrière-plan les mémoires depuis conversations et tâches d'agents. |
| **Mémoire d'espace de travail manuelle** | Autorise la création, modification et suppression manuelles. La désactivation ne supprime pas les mémoires stockées. |

Le message utilisateur actuel reste prioritaire. S'il contredit une mémoire, l'instruction actuelle doit l'emporter.

## Bonnes pratiques

- Mémorisez les décisions et conventions qu'il serait pénible de répéter.
- Mémorisez les commandes projet non évidentes.
- Mémorisez les avertissements de conformité, sécurité, environnement ou tests.
- Gardez les mémoires courtes.
- Préférez référencer des chemins ou docs plutôt que copier de gros contenus.
- Archivez les mémoires obsolètes au lieu de laisser des consignes contradictoires actives.
