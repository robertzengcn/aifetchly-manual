---
id: knowledge-library
title: Bibliothèque de connaissances
sidebar_label: Bibliothèque de connaissances
description: Construisez votre base de connaissances avec des documents que l'IA utilise pour générer du contenu contextuellement pertinent.
---

# Bibliothèque de connaissances

La Bibliothèque de connaissances est le système intelligent de gestion de documents d'aiFetchly. Téléchargez vos documents (PDF, fichiers Word, HTML et plus) pour créer une base de connaissances qui alimente le contenu généré par l'IA, garantissant que votre prospection est contextuellement précise et personnalisée.

:::info Abonnement requis

La Bibliothèque de connaissances — y compris le modèle d'embedding local gratuit — nécessite un abonnement aiFetchly. Si votre compte n'a pas l'IA activée, la page affiche une invite **Abonnement requis**.

:::

## Qu'est-ce que le RAG ?

**RAG** (Retrieval-Augmented Generation) est une technologie qui :

1. **Ingère** vos documents et les divise en morceaux plus petits
2. **Crée des embeddings vectoriels** qui comprennent la signification sémantique de votre contenu
3. **Récupère les informations pertinentes** lors de la génération de contenu
4. **Améliore les réponses de l'IA** avec vos connaissances spécifiques

:::info Pourquoi le RAG est important

Les systèmes d'IA traditionnels génèrent du contenu générique. Avec le RAG, l'IA d'aiFetchly se réfère à VOS documents, créant des e-mails et du contenu marketing personnalisés et adaptés au contexte.

:::

## Types de fichiers pris en charge

| Format | Extensions | Idéal pour |
|--------|------------|----------|
| **PDF** | `.pdf` | Brochures, livres blancs, documentation |
| **Microsoft Word** | `.doc`, `.docx` | Propositions, contrats, informations produit |
| **Texte** | `.txt` | Fichiers texte simples, notes |
| **Markdown** | `.md` | Documentation technique, fichiers README |
| **HTML** | `.html`, `.htm` | Contenu web, articles |

## Téléchargement de documents

### Étape 1 : Accéder à la Bibliothèque de connaissances

1. Cliquez sur **Knowledge** dans le menu de navigation de gauche
2. L'interface de la Bibliothèque de connaissances s'affiche

### Étape 2 : Télécharger des documents

**Méthode 1 : Glisser-déposer**

1. Faites glisser des fichiers depuis votre ordinateur
2. Déposez-les dans la zone de téléchargement
3. Un retour visuel indique que les fichiers sont ajoutés

**Méthode 2 : Navigateur de fichiers**

1. Cliquez sur le bouton **Upload** (ou la zone de téléchargement)
2. Accédez à vos fichiers dans le navigateur de fichiers
3. Sélectionnez un ou plusieurs documents
4. Cliquez sur **Open** pour télécharger

### Étape 3 : Traitement

Après le téléchargement, les documents sont automatiquement traités :

1. **Sauvegarde** : Les fichiers sont enregistrés dans la base de données
2. **Segmentation** : Les documents sont découpés en segments plus petits
3. **Embedding** : Des embeddings vectoriels sont créés pour la recherche sémantique
4. **Mise à jour du statut** : Le statut de traitement passe de **En attente** → **En cours** → **Terminé**

:::tip Temps de traitement

Le temps de traitement dépend de la taille du fichier :
- Petits fichiers (< 1 Mo) : 10 à 30 secondes
- Fichiers moyens (1 à 5 Mo) : 30 à 60 secondes
- Gros fichiers (5 à 10 Mo) : 1 à 3 minutes

:::

## Importer du contenu depuis des sites web

En plus de téléverser des fichiers, vous pouvez importer **des pages web publiques directement via une URL**. aiFetchly récupère chaque page, la convertit en markdown et l'indexe via le même pipeline RAG — les pages importées sont donc immédiatement consultables. Choisissez une page unique, une liste d'URL ou une exploration limitée de même origine.

Voir [Importer un site web dans la bibliothèque de connaissances](./website-import) pour le guide complet, les options, les limites et les détails de sécurité.

## Gestion des documents

### Vue de la liste des documents

La Bibliothèque de connaissances affiche tous vos documents avec :

| Colonne | Description |
|--------|-------------|
| **Name** | Nom du fichier document |
| **Title** | Titre du document (modifiable) |
| **Status** | Statut de traitement (En attente/En cours/Terminé/Erreur) |
| **Type** | Type de fichier (PDF, DOCX, etc.) |
| **Size** | Taille du fichier |
| **Upload Date** | Date de téléchargement du document |
| **Actions** | Afficher, télécharger, supprimer, ré-embedder |

### Actions sur les documents

| Action | Description |
|--------|-------------|
| **View** | Ouvrir le document pour afficher le contenu |
| **Download** | Télécharger le fichier original sur votre ordinateur |
| **Delete** | Supprimer le document de la base de connaissances |
| **Re-embed** | Retraiter le document avec un nouveau modèle d'embedding |
| **View Logs** | Voir les détails des erreurs pour les documents en échec |

### Recherche et filtrage

- **Recherche par nom** : Filtrer les documents par nom de fichier
- **Filtrer par statut** : Afficher uniquement les documents terminés, en cours de traitement ou en échec
- **Filtrer par type** : Afficher uniquement des types de fichiers spécifiques

### Opérations en lot

- **Sélection multiple** : Cochez les cases à côté des documents
- **Suppression en lot** : Supprimer plusieurs documents à la fois
- **Effacer la sélection** : Désélectionner tous les documents

## Comprendre le statut de traitement

| Statut | Couleur | Signification | Action |
|--------|-------|---------|--------|
| **En attente** | Gris | En file d'attente pour traitement | Attendre le traitement automatique |
| **En cours** | Bleu | Embedding en cours | Attendre la fin |
| **Terminé** | Vert | Prêt à utiliser dans la génération IA | Le document est actif |
| **Erreur** | Rouge | Échec du traitement | Voir les logs, essayer de ré-embedder |

## Ré-embedding des documents

Si vous changez de modèle d'embedding ou devez retraiter un document :

1. Trouvez le document dans la liste
2. Cliquez sur le bouton **Re-embed**
3. Le statut du document passe à **En cours**
4. De nouveaux embeddings sont créés avec le modèle actuel
5. Le statut passe à **Terminé** une fois terminé

**Cas d'utilisation du ré-embedding :**
- Changement du modèle d'embedding dans les paramètres
- Échec partiel de l'embedding précédent
- Souhait d'utiliser des paramètres de segmentation mis à jour

Voir [Paramètres du modèle d'embedding](#paramètres-du-modèle-dembedding) ci-dessous pour savoir comment choisir ou changer le modèle.

## Paramètres du modèle d'embedding

Les embeddings convertissent votre texte en vecteurs que l'IA recherche sémantiquement. Vous choisissez le modèle d'embedding qu'aiFetchly utilise depuis les **Paramètres**.

### Ouverture des paramètres d'embedding

1. Ouvrez la **Bibliothèque de connaissances**.
2. Cliquez sur **Paramètres** dans l'en-tête.

La boîte de dialogue affiche un menu déroulant **Modèle d'embedding** listant tous les modèles disponibles, votre **Modèle actuel**, ainsi qu'un bouton **Mettre à jour le modèle**.

### Modèles locaux vs. distants

Le menu déroulant combine deux types de modèles :

| Type | Exemple | Notes |
|------|---------|-------|
| **Local (gratuit)** | `Xenova/all-MiniLM-L6-v2 (free)` | S'exécute entièrement sur votre appareil (384 dimensions). Gratuit, privé et fonctionne hors ligne une fois mis en cache. |
| **Distant** | Modèles fournis par le serveur | Générés sur le serveur IA d'aiFetchly. Gratuit ou payant selon votre offre. |

Les modèles gratuits — locaux ou distants — affichent une pastille verte **Gratuit** dans le menu déroulant. Le modèle local est toujours listé, même si la liste des modèles distants ne peut pas être chargée, afin de toujours disposer d'une option fonctionnelle.

:::tip Modèle local = privé + gratuit

Le modèle local s'exécute sur votre propre CPU via Transformers.js. Lorsqu'il est sélectionné, le texte de votre document n'est **jamais envoyé au point de terminaison d'embedding distant** — les embeddings sont générés entièrement sur votre machine. Choisissez-le pour la confidentialité, le coût nul et l'utilisation hors ligne.

:::

:::note La première utilisation télécharge le modèle

La première fois que vous utilisez le modèle local, aiFetchly télécharge les poids du modèle (depuis Hugging Face) et les met en cache sur le disque. La première indexation est donc plus lente ; les exécutions suivantes réutilisent le modèle en cache et sont rapides.

:::

Choisissez un modèle et cliquez sur **Mettre à jour le modèle**. Le nouveau modèle s'applique aux indexations et ré-embeddings **futurs**. Les documents existants conservent le modèle avec lequel ils ont été initialement embeddés jusqu'à ce que vous les ré-embeddiez.

### Repli automatique lors de l'indexation

Si vous utilisez un modèle distant et que l'embedding échoue (par exemple, une erreur réseau ou serveur) après plusieurs tentatives, aiFetchly :

1. Ignore tous les vecteurs partiels pour ce document afin de ne pas mélanger les espaces d'embedding.
2. Ré-embedde tout le document avec le **modèle local gratuit**.
3. Enregistre le modèle local sur le document.

Vous verrez : *"L'embedding distant a échoué. AiFetchly a utilisé le modèle d'embedding local gratuit à la place."*

Si le modèle local échoue également, le document est marqué **Erreur** avec : *"La génération d'embeddings a échoué après une nouvelle tentative distante et un repli local. Consultez le journal des erreurs du document pour plus de détails."*

:::warning Les erreurs de quota ne déclenchent pas de repli

Si l'échec distant est dû à une limite de facturation ou de quota, aiFetchly ne se replie **pas** silencieusement — il affiche *"Quota d'embedding distant ou limite de facturation atteint"* afin que vous puissiez recharger votre offre. Passez au modèle local (ou ré-embeddez après avoir résolu le problème de quota) pour continuer.

:::

### Recherche dans une bibliothèque à modèles mixtes

Si certains documents ont été embeddés avec un modèle distant et d'autres avec le modèle local, chaque document est recherché en utilisant le modèle avec lequel il a été embeddé — les deux espaces d'embedding ne sont pas interchangeables. Si le point de terminaison distant est indisponible lors d'une recherche, les documents indexés à distance sont ignorés pour cette recherche et seuls les documents indexés localement renvoient des résultats.

## Dépannage

### Statut du document : « Erreur »

**Causes possibles :**
- Fichier corrompu
- Format de fichier non pris en charge
- Fichier trop volumineux
- Problèmes d'encodage

**Solutions :**
1. **View Logs** pour voir l'erreur spécifique
2. **Essayez de ré-embedder** le document
3. **Retéléchargez** le fichier original
4. **Convertissez le fichier** dans un format différent (par ex. DOC → PDF)

### Traitement lent

**Causes possibles :**
- Taille de fichier importante
- Charge système élevée
- Latence réseau (pour l'embedding distant)
- Première utilisation du modèle d'embedding local (il télécharge les poids du modèle une fois)

**Solutions :**
1. Attendez la fin du traitement
2. Divisez les documents volumineux en fichiers plus petits
3. Fermez les autres applications pour libérer des ressources
4. Si vous venez de passer au modèle local, la première exécution télécharge et met en cache le modèle — les exécutions suivantes sont rapides

### Document non utilisé dans le contenu IA

**Causes possibles :**
- Document non entièrement traité
- Contenu du document non pertinent pour la requête
- Contexte RAG non activé

**Solutions :**
1. Vérifiez que le statut du document est **Terminé**
2. Assurez-vous que le contexte RAG est activé dans le Chat IA/Rédacteur d'e-mails
3. Essayez de rechercher du contenu plus spécifique
4. Téléchargez des documents pertinents supplémentaires

## Bonnes pratiques

### 1. Sélection des documents

**Téléchargez des documents qui :**
- Décrivent vos produits ou services en détail
- Expliquent votre proposition de valeur
- Contiennent des études de cas ou des témoignages de réussite
- Incluent la terminologie spécifique à votre secteur
- Présentent vos avantages concurrentiels

**À éviter :**
- Informations génériques ou obsolètes
- Contenu non pertinent
- Fichiers très volumineux (> 10 Mo)
- Documents mal formatés

### 2. Organisation des documents

**Conventions de nommage :**
- Utilisez des noms descriptifs : `Product_Brochure_2024.pdf`
- Incluez les numéros de version : `Pricing_Guide_v2.docx`
- Ajoutez des dates : `Case_Study_January_2024.pdf`

**Catégorisation :**
- Regroupez les documents connexes
- Utilisez des modèles de nommage cohérents
- Étiquetez les documents pour un filtrage facile

### 3. Qualité du contenu

**Pour de meilleurs résultats :**
- Utilisez des documents bien formatés
- Incluez des titres structurés
- Fournissez des détails et des exemples spécifiques
- Gardez les informations à jour
- Utilisez un langage professionnel

### 4. Maintenance régulière

**Gardez votre base de connaissances en bonne santé :**
- **Examinez régulièrement** : Supprimez les documents obsolètes
- **Mettez à jour le contenu** : Retéléchargez lorsque les informations changent
- **Surveillez le statut** : Vérifiez les embeddings en échec
- **Optimisez la taille** : Divisez les documents volumineux lorsque c'est possible

## Intégration avec les fonctionnalités IA

La Bibliothèque de connaissances s'intègre avec :

### Rédacteur d'e-mails IA

Lors de la création d'e-mails générés par l'IA :

1. **Activez le contexte RAG** dans le rédacteur d'e-mails
2. L'IA recherche dans votre Bibliothèque de connaissances des informations pertinentes
3. Le contenu récupéré est utilisé pour personnaliser les e-mails
4. Les e-mails contiennent des informations précises et adaptées au contexte

**Exemple :**
- Vous téléchargez un catalogue de produits en PDF
- L'IA génère des e-mails référençant des produits spécifiques
- Chaque e-mail mentionne des produits pertinents pour le destinataire

### Assistant marketing IA

Lors d'une conversation avec l'assistant IA :

1. **Activez le contexte RAG** (icône 📖)
2. Posez des questions sur votre entreprise, vos produits ou services
3. L'IA recherche dans la Bibliothèque de connaissances pour répondre
4. Les réponses sont basées sur VOTRE documentation

**Exemples de questions :**
- « Quelles sont les fonctionnalités clés de nos produits ? »
- « Comment nos prix se comparent-ils à ceux des concurrents ? »
- « Quelle est notre politique de remboursement ? »
- « Génère un e-mail marketing pour le Produit X »

## Exemples de cas d'utilisation

### Cas 1 : Marketing produit

**Documents à télécharger :**
- Brochures produit
- Spécifications techniques
- Guides de tarification
- Tableaux comparatifs
- Études de cas

**Résultat :** L'IA génère des e-mails produit détaillés et précis.

### Cas 2 : Entreprises de services

**Documents à télécharger :**
- Descriptions de services
- Documentation des processus
- Témoignages clients
- Exemples de portfolio
- Forfaits tarifaires

**Résultat :** L'IA crée une prospection axée sur les services avec des détails spécifiques.

### Cas 3 : Prospection d'agence

**Documents à télécharger :**
- Capacités de l'agence
- Pièces de portfolio
- Études de cas
- Présentations de l'équipe
- Forfaits de services

**Résultat :** L'IA personnalise les propositions d'agence pour chaque prospect.

### Cas 4 : Entreprises SaaS

**Documents à télécharger :**
- Documentation des fonctionnalités
- Guides API
- Niveaux de tarification
- Supports d'intégration
- Transcriptions de webinaires

**Résultat :** L'IA génère une prospection technique mais accessible.

## Détails techniques

### Fonctionnement du RAG

1. **Ingestion de documents** :
   - Les fichiers sont téléchargés et enregistrés dans la base de données
   - Les métadonnées (nom, type, taille, date) sont enregistrées

2. **Analyse du profil de texte** :
   - Le texte est extrait des différents formats de fichiers
   - Le formatage est préservé lorsque c'est possible

3. **Segmentation** :
   - Les documents sont divisés en segments plus petits (chunks)
   - Taille de chunk typique : 500 à 1000 caractères
   - Le chevauchement entre les chunks maintient le contexte

4. **Création d'embeddings** :
   - Chaque chunk est converti en embedding vectoriel
   - Les embeddings capturent la signification sémantique
   - Stockés dans une base de données vectorielle pour une récupération rapide

5. **Recherche sémantique** :
   - Lors de la génération de contenu, l'IA recherche les chunks pertinents
   - La correspondance de similarité trouve le contenu le plus pertinent
   - Les chunks récupérés sont inclus comme contexte

6. **Génération de contenu** :
   - L'IA utilise le contexte récupéré + le prompt
   - Génère du contenu personnalisé et précis
   - Se réfère à vos connaissances spécifiques

### Stockage et performances

- **Stockage** : Documents stockés dans une base de données SQLite locale
- **Base de données vectorielle** : Optimisée pour la recherche de similarité rapide
- **Performances** : Récupération en millisecondes pour le contenu pertinent
- **Évolutivité** : Gère efficacement des milliers de documents

## Sécurité et confidentialité

### Stockage des données

- **Stockage local** : Tous les documents sont stockés localement sur votre machine
- **Pas de téléchargement cloud** : Les fichiers originaux restent sur votre ordinateur
- **Chiffrement** : La base de données peut être chiffrée pour une sécurité supplémentaire

### Considérations de confidentialité

- **Vos connaissances** : Vous seul avez accès à vos documents
- **Traitement IA** : Avec le modèle d'embedding local, le texte ne quitte jamais votre appareil ; avec un modèle distant, les embeddings sont générés sur le serveur d'aiFetchly
- **Pas de données d'entraînement** : Vos documents ne sont pas utilisés pour entraîner des modèles d'IA publics

:::tip Informations confidentielles

La Bibliothèque de connaissances est parfaite pour :
- La documentation produit interne
- Les informations de tarification confidentielles
- Les processus métier propriétaires
- Les informations spécifiques aux clients

:::

## Prochaines étapes

Maintenant que vous avez construit votre Bibliothèque de connaissances :

- [Créer des campagnes d'e-mails générées par l'IA](./ai-email-writer)
- [Utiliser l'Assistant marketing IA](./ai-marketing-assistant)
- [Configurer l'envoi d'e-mails par lot](../lead-generation/batch-email-sending)

---

**Prêt à construire votre base de connaissances ?** Commencez par télécharger votre documentation produit, vos guides de tarification et vos supports marketing pour alimenter une prospection IA personnalisée.
