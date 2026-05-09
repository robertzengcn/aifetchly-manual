---
id: mcp-tools
title: Outils MCP
sidebar_label: Outils MCP
description: Étendez les capacités de l'IA en vous connectant à des outils et services externes grâce au Model Context Protocol (MCP).
---

# Outils MCP

Le MCP (Model Context Protocol) permet à aiFetchly de se connecter à des outils et services externes, étendant ainsi les capacités de l'IA au-delà de ses fonctionnalités intégrées. En ajoutant des serveurs MCP, l'Assistant Marketing IA peut effectuer des recherches sur le Web, accéder à des bases de données, appeler des API externes et exécuter une logique métier personnalisée.

## Qu'est-ce que le MCP ?

Le **Model Context Protocol** est une norme ouverte qui permet aux applications d'IA d'interagir avec des outils et sources de données externes de manière sécurisée et structurée. Avec le MCP, aiFetchly peut :

- **Rechercher sur le Web** des informations en temps réel
- **Se connecter à des bases de données** et interroger des données
- **Appeler des API externes** pour un traitement spécialisé
- **Exécuter des outils personnalisés** conçus pour votre flux de travail
- **S'intégrer à des services tiers** (CRM, analytics, etc.)

Chaque serveur MCP expose un ensemble d'**outils** — des fonctions que l'IA peut appeler au cours d'une conversation. Par exemple, un serveur de recherche Web peut exposer un outil `search`, et un serveur de base de données peut exposer un outil `query`.

## Accéder aux outils MCP

Les serveurs MCP sont gérés depuis l'interface de chat de l'**Assistant Marketing IA** :

1. Ouvrez l'Assistant Marketing IA (cliquez sur l'icône de chat ou appuyez sur `Cmd/Ctrl + K`)
2. Cliquez sur le bouton **Outils MCP** (icône serveur/réseau) dans la barre d'outils du chat
3. La boîte de dialogue de gestion des outils MCP s'ouvre

:::info Où les trouver

Les outils MCP sont accessibles depuis l'interface de chat de l'IA, et non depuis la page principale des Paramètres. Ouvrez n'importe quelle session de chat IA pour accéder au gestionnaire d'outils MCP.

:::

## Ajouter des serveurs MCP

### Étape 1 : Ouvrir la boîte de dialogue d'ajout

1. Dans la boîte de dialogue Outils MCP, cliquez sur **Ajouter un serveur** (ou sur le bouton **+**)
2. La boîte de dialogue d'ajout de serveur MCP s'ouvre

### Étape 2 : Choisir le mode de saisie

Vous pouvez ajouter des serveurs de deux manières :

- **Mode Formulaire** : Remplissez les champs individuels (recommandé pour les débutants)
- **Mode JSON** : Collez un bloc de configuration JSON (plus rapide pour une configuration en masse, compatible avec le format Claude Desktop)

### Étape 3 : Configurer le serveur

#### Mode Formulaire

| Champ | Description | Requis |
|-------|-------------|--------|
| **Nom du serveur** | Un nom descriptif pour ce serveur | Oui |
| **Type de transport** | Mode de connexion : `Stdio`, `SSE` ou `WebSocket` | Oui |
| **Hôte / Commande** | Nom d'hôte (pour SSE/WebSocket) ou commande à exécuter (pour Stdio) | Oui |
| **Port** | Numéro de port (non requis pour Stdio) | Pour SSE/WebSocket |
| **Type d'authentification** | `Aucune`, `Clé API`, `Jeton Bearer` ou `Personnalisée` | Non |
| **Délai d'attente** | Délai d'expiration de la requête en millisecondes (par défaut : 30000) | Non |
| **Activé** | Indique si le serveur est actif (par défaut : activé) | Non |

#### Mode JSON

Le mode JSON accepte le format standard `mcpServers` utilisé par Claude Desktop et d'autres clients MCP :

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uvx",
      "args": ["package-name"]
    }
  }
}
```

**Propriétés JSON prises en charge :**

| Propriété | Description |
|-----------|-------------|
| `command` | Commande à exécuter (pour le transport Stdio) |
| `args` | Tableau des arguments de la commande |
| `url` | URL du serveur (pour SSE/WebSocket) |
| `host` | Nom d'hôte ou adresse IP |
| `port` | Numéro de port |
| `transport` | Remplacement du type de transport |
| `enabled` | Activer/désactiver lors de l'ajout (par défaut : true) |
| `authType` | Type d'authentification |
| `authConfig` | Identifiants d'authentification |
| `timeout` | Délai d'expiration de la requête en ms |

Vous pouvez ajouter plusieurs serveurs dans un seul bloc JSON en ajoutant d'autres entrées sous `mcpServers`.

:::tip Utiliser Charger un exemple

Cliquez sur **Charger un exemple** en mode JSON pour voir un exemple de configuration que vous pouvez modifier.

:::

### Étape 4 : Enregistrer

Cliquez sur **Ajouter** pour enregistrer la configuration du serveur. Le serveur apparaît dans la liste avec le statut **Activé**.

## Gérer les serveurs MCP

### Liste des serveurs

La boîte de dialogue Outils MCP affiche tous les serveurs configurés :

| Élément | Description |
|---------|-------------|
| **Nom du serveur** | Identifiant que vous avez configuré |
| **Badge de statut** | `Activé` (vert) ou `Désactivé` (gris) |
| **Informations de connexion** | Type de transport, hôte et port |
| **Nombre d'outils** | Nombre d'outils découverts |

### Activer/Désactiver un serveur

1. Repérez le serveur dans la liste
2. Cliquez sur l'icône du **commutateur** dans la colonne Actions
3. Le statut du serveur bascule entre Activé et Désactivé

**Lorsqu'il est désactivé :** L'IA ne peut utiliser aucun outil de ce serveur, mais la configuration est préservée.

### Modifier un serveur

1. Repérez le serveur dans la liste
2. Cliquez sur l'icône **crayon** dans la colonne Actions
3. Modifiez les champs de configuration souhaités
4. Cliquez sur **Mettre à jour** pour enregistrer les modifications

:::info Restriction du mode JSON

Le mode JSON est uniquement disponible lors de l'ajout de nouveaux serveurs. Pour modifier un serveur existant, utilisez le mode Formulaire.

:::

### Supprimer un serveur

1. Repérez le serveur dans la liste
2. Cliquez sur l'icône **corbeille** dans la colonne Actions
3. Confirmez la suppression dans la boîte de dialogue

:::warning Suppression définitive

La suppression d'un serveur retire sa configuration et tous les outils découverts. Cette action est irréversible.

:::

## Découverte et gestion des outils

### Découvrir les outils

Après avoir ajouté un serveur, vous devez découvrir les outils qu'il fournit :

1. Repérez le serveur dans la liste
2. Cliquez sur l'icône **loupe** (Découvrir les outils)
3. aiFetchly se connecte au serveur et récupère la liste des outils disponibles
4. Les outils découverts apparaissent sous l'entrée du serveur

:::tip Découvrir après modification de la configuration

Redécouvrez les outils après avoir modifié les paramètres de connexion d'un serveur. Cela garantit que la liste des outils reste synchronisée avec le serveur.

:::

### Afficher les outils découverts

Cliquez sur une entrée de serveur pour la déplier et voir ses outils :

- Chaque outil affiche son nom
- Les outils disposent de commutateurs d'activation/désactivation individuels
- Les noms d'outils sont préfixés par `mcp_` lorsqu'ils sont utilisés par l'IA

### Activer/Désactiver des outils individuels

1. Dépliez le serveur pour voir ses outils
2. Utilisez le **commutateur** à côté de chaque nom d'outil
3. Les outils désactivés ne seront pas disponibles pour l'IA, même si le serveur est activé

Ceci est utile lorsqu'un serveur fournit de nombreux outils mais que vous souhaitez que seuls certains d'entre eux soient disponibles pour l'IA.

### Tester la connexion

Pour vérifier qu'un serveur est accessible :

1. Repérez le serveur dans la liste
2. Cliquez sur l'icône **vérification réseau** (Tester la connexion)
3. aiFetchly tente de se connecter et indique le succès ou l'échec

## Types de transport

### Stdio

**Idéal pour :** Outils locaux, programmes en ligne de commande, paquets npm

Le transport Stdio lance un processus local et communique via l'entrée/sortie standard.

**Configuration :**
- **Hôte/Commande** : La commande à exécuter (par ex., `node server.js`, `uvx package-name`)
- **Port** : Non applicable

**Exemples de commandes :**
- `npx @modelcontextprotocol/server-memory` — Graphe de connaissances en mémoire
- `uvx blender-mcp` — Intégration Blender
- `node /path/to/custom-server.js` — Serveur local personnalisé

### SSE (Server-Sent Events)

**Idéal pour :** Services HTTP, outils hébergés dans le cloud

Le transport SSE se connecte à un point de terminaison HTTP qui diffuse les résultats des outils.

**Configuration :**
- **Hôte** : Nom d'hôte ou IP du serveur (par ex., `api.example.com`)
- **Port** : Numéro de port du serveur (par ex., `8080`)

### WebSocket

**Idéal pour :** Services en temps réel, communication bidirectionnelle

Le transport WebSocket établit une connexion persistante pour la communication des outils.

**Configuration :**
- **Hôte** : Nom d'hôte ou IP du serveur
- **Port** : Numéro de port du serveur

## Authentification

Les serveurs MCP prennent en charge plusieurs méthodes d'authentification :

| Type | Cas d'utilisation | Champs |
|------|-------------------|--------|
| **Aucune** | Serveurs publics/locaux | Aucun identifiant requis |
| **Clé API** | Services nécessitant une clé API | Clé API (champ mot de passe) |
| **Jeton Bearer** | Services basés sur OAuth/jetons | Jeton Bearer (champ mot de passe) |
| **Personnalisée** | Authentification non standard | Configuration JSON |

## Utiliser les outils MCP dans le chat IA

Une fois les serveurs MCP configurés et les outils découverts :

1. **Ouvrez l'Assistant Marketing IA**
2. L'IA détecte automatiquement tous les outils activés des serveurs activés
3. Les outils apparaissent comme des fonctions disponibles que l'IA peut appeler
4. L'IA décide quand utiliser un outil en fonction de votre requête

### Exemple : Recherche Web

```
Utilisateur : « Recherchez sur le Web les dernières tendances de tarification SaaS »
IA : [Appelle l'outil de recherche de votre serveur MCP de recherche Web]
IA : « Voici les dernières tendances de tarification SaaS que j'ai trouvées... »
```

### Exemple : Requête en base de données

```
Utilisateur : « Combien de prospects avons-nous obtenus la semaine dernière depuis notre site ? »
IA : [Appelle l'outil de requête de votre serveur MCP de base de données]
IA : « D'après la requête en base de données, vous avez reçu 247 prospects la semaine dernière... »
```

### Exemple : API personnalisée

```
Utilisateur : « Vérifiez si notre concurrent a mis à jour sa page de tarification »
IA : [Appelle l'outil de surveillance de votre serveur MCP personnalisé]
IA : « Oui, ils ont mis à jour leur page de tarification hier. Voici les modifications... »
```

### Comment l'IA utilise les outils

L'IA suit ce processus :

1. **Analyse votre requête** pour déterminer si un outil est nécessaire
2. **Sélectionne l'outil approprié** parmi les outils MCP disponibles
3. **Appelle l'outil** avec les paramètres nécessaires
4. **Intègre le résultat** dans sa réponse

Vous pouvez également demander explicitement à l'IA d'utiliser un outil spécifique :
- « Utilise l'outil de recherche Web pour trouver... »
- « Interroge la base de données pour... »
- « Appelle [nom de l'outil] pour... »

## Dépannage

### Échec de connexion

**Causes possibles :**
- Le serveur n'est pas en cours d'exécution
- Hôte/port incorrect
- Le pare-feu bloque la connexion
- Les identifiants d'authentification sont incorrects

**Solutions :**
1. Vérifiez que le serveur est en cours d'exécution et accessible
2. Vérifiez la configuration de l'hôte et du port
3. Utilisez **Tester la connexion** pour diagnostiquer
4. Vérifiez les identifiants d'authentification
5. Vérifiez les paramètres du pare-feu et du réseau

### Échec de la découverte des outils

**Causes possibles :**
- Le serveur ne répond pas
- Le serveur n'implémente pas correctement le protocole MCP
- Délai d'attente dépassé

**Solutions :**
1. Testez d'abord la connexion
2. Vérifiez que le serveur prend en charge le protocole MCP
3. Augmentez le paramètre de délai d'attente
4. Consultez les journaux du serveur pour détecter des erreurs

### L'IA n'utilise pas les outils MCP

**Causes possibles :**
- Le serveur est désactivé
- Tous les outils sont désactivés
- Les outils n'ont pas encore été découverts
- L'IA ne reconnaît pas la requête comme nécessitant un outil

**Solutions :**
1. Vérifiez que le serveur est activé (badge vert)
2. Vérifiez que les outils individuels sont activés
3. Découvrez les outils si le nombre d'outils affiche 0
4. Mentionnez explicitement l'outil dans votre requête

### Le serveur affiche 0 outil

**Solutions :**
1. Cliquez sur **Découvrir les outils** pour récupérer la liste des outils
2. Vérifiez que le serveur est en cours d'exécution lors de la découverte
3. Vérifiez que le serveur expose des outils via le protocole MCP
4. Redécouvrez les outils après une mise à jour du serveur

## Bonnes pratiques

### 1. Commencez par les serveurs essentiels

Ajoutez uniquement les serveurs dont vous avez besoin :
- Trop de serveurs augmentent la complexité
- Chaque connexion de serveur consomme des ressources
- Commencez avec un ou deux serveurs, ajoutez-en selon vos besoins

### 2. Découvrez les outils après la configuration

Découvrez toujours les outils après :
- L'ajout d'un nouveau serveur
- La modification des paramètres de connexion
- La mise à jour du logiciel du serveur

### 3. Utilisez le contrôle au niveau des outils

Désactivez les outils individuels dont vous n'avez pas besoin :
- Réduit le bruit pour l'IA
- Empêche l'utilisation accidentelle d'outils puissants
- Maintient la liste des outils gérable

### 4. Testez avant d'utiliser

- Utilisez **Tester la connexion** après la configuration
- **Découvrez les outils** pour vérifier leur disponibilité
- Essayez une requête simple dans le chat IA pour confirmer le fonctionnement de bout en bout

### 5. Sécurisez vos identifiants

- Traitez les clés API et les jetons comme des mots de passe
- Ne partagez pas les configurations de serveur avec des tiers non fiables
- Révoquez les identifiants lors de la suppression de serveurs

### 6. Surveillez l'utilisation des outils

- Examinez les réponses de l'IA pour détecter une utilisation inattendue des outils
- Désactivez les outils qui produisent des résultats peu fiables
- Ajustez les délais d'attente des serveurs si les réponses sont lentes

## Intégration avec d'autres fonctionnalités

### Compétences IA

Les outils MCP et les compétences IA fonctionnent ensemble :
- Les compétences fournissent des connaissances et une logique spécifiques au domaine
- Les outils MCP fournissent des données et des actions externes
- Les deux sont disponibles dans l'Assistant Marketing IA

### Bibliothèque de connaissances

Les outils MCP complètent la Bibliothèque de connaissances :
- La Bibliothèque de connaissances fournit le contexte de votre entreprise
- Les outils MCP fournissent des données externes en temps réel
- Combinés, ils permettent des réponses IA complètes

## Prochaines étapes

- [En savoir plus sur l'Assistant Marketing IA](./ai-marketing-assistant)
- [Explorer les compétences IA](./ai-skills)
- [Configurer la Bibliothèque de connaissances](./knowledge-library)

---

**Prêt à étendre votre IA ?** Ajoutez votre premier serveur MCP, découvrez ses outils et commencez à utiliser des capacités externes dans vos conversations avec l'IA.
