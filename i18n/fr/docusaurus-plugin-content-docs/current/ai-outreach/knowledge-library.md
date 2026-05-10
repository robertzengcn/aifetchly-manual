---
id: knowledge-library
title: Bibliothèque de connaissances
sidebar_label: Bibliothèque de connaissances
description: Construisez votre base de connaissances avec des documents que l'IA utilise pour générer du contenu contextuellement pertinent.
---

# Bibliothèque de connaissances

La Bibliothèque de connaissances est le système de gestion de documents intelligent d'aiFetchly. Téléchargez vos documents (PDF, fichiers Word, HTML et plus) pour créer une base de connaissances qui alimente le contenu généré par l'IA, garantissant que votre prospection est contextuellement précise et personnalisée.

## Qu'est-ce que le RAG ?

**RAG** (Retrieval-Augmented Generation) est une technologie qui :

1. **Ingestion** : vos documents et les divise en morceaux plus petits
2. **Création d'embeddings vectoriels** : capture la signification sémantique de votre contenu
3. **Récupération d'informations pertinentes** lors de la génération de contenu
4. **Amélioration des réponses de l'IA** avec vos connaissances spécifiques

:::info Pourquoi le RAG est important

Les systèmes d'IA traditionnels génèrent du contenu générique. Avec le RAG, l'IA d'aiFetchly se réfère à VOS documents, créant des e-mails et du contenu marketing personnalisés et adaptés au contexte.

:::

## Types de fichiers pris en charge

| Format | Extensions | Meilleur pour |
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
4. **Mise à jour du statut** : Le statut passe de **Pending** → **Processing** → **Completed**

:::tip Temps de traitement

Le temps de traitement dépend de la taille du fichier :
- Petits fichiers (< 1 Mo) : 10 à 30 secondes
- Fichiers moyens (1 à 5 Mo) : 30 à 60 secondes
- Gros fichiers (5 à 10 Mo) : 1 à 3 minutes

:::

## Gestion des documents

### Vue de la liste des documents

La Bibliothèque de connaissances affiche tous vos documents avec :

| Colonne | Description |
|--------|-------------|
| **Name** | Nom du fichier document |
| **Title** | Titre du document (modifiable) |
| **Status** | Statut de traitement (Pending/Processing/Completed/Error) |
| **Type** | Type de fichier (PDF, DOCX, etc.) |
| **Size** | Taille du fichier |
| **Upload Date** | Date de téléchargement du document |
| **Actions** | Afficher, télécharger, supprimer, ré-embedder |

### Actions sur les documents

| Action | Description |
|--------|-------------|
| **View** | Ouvrir le document pour voir le contenu |
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
| **Pending** | Gris | En attente de traitement | Attendre le traitement automatique |
| **Processing** | Bleu | En cours d'embedding | Attendre la fin |
| **Completed** | Vert | Prêt à utiliser dans la génération IA | Le document est actif |
| **Error** | Rouge | Échec du traitement | Voir les logs, essayer de ré-embedder |

## Ré-embedding des documents

Si vous changez de modèle d'embedding ou devez retraiter un document :

1. Trouvez le document dans la liste
2. Cliquez sur le bouton **Re-embed**
3. Le statut du document passe à **Processing**
4. De nouveaux embeddings sont créés avec le modèle actuel
5. Le statut passe à **Completed** une fois terminé

**Cas d'utilisation du ré-embedding :**
- Changement du modèle d'embedding dans les paramètres
- Échec partiel de l'embedding précédent
- Souhait d'utiliser des paramètres de segmentation mis à jour

## Dépannage

### Statut du document : « Error »

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

**Solutions :**
1. Attendez la fin du traitement
2. Divisez les documents volumineux en fichiers plus petits
3. Fermez les autres applications pour libérer des ressources

### Document non utilisé dans le contenu IA

**Causes possibles :**
- Document non entièrement traité
- Contenu du document non pertinent pour la requête
- Contexte RAG non activé

**Solutions :**
1. Vérifiez que le statut du document est **Completed**
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
4. Les e-mails contiennent des informations précises et contextuelles

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
- Matériaux d'intégration
- Transcriptions de webinaires

**Résultat :** L'IA génère une prospection technique mais accessible.

## Détails techniques

### Fonctionnement du RAG

1. **Ingestion de documents** :
   - Les fichiers sont téléchargés et enregistrés dans la base de données
   - Les métadonnées (nom, type, taille, date) sont enregistrées

2. **Extraction de texte** :
   - Le texte est extrait de différents formats de fichiers
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
- **Performance** : Récupération en millisecondes pour le contenu pertinent
- **Évolutivité** : Gère efficacement des milliers de documents

## Sécurité et confidentialité

### Stockage des données

- **Stockage local** : Tous les documents sont stockés localement sur votre machine
- **Pas de téléchargement cloud** : Les fichiers originaux restent sur votre ordinateur
- **Chiffrement** : La base de données peut être chiffrée pour une sécurité supplémentaire

### Considérations de confidentialité

- **Vos connaissances** : Vous seul avez accès à vos documents
- **Traitement IA** : Les embeddings sont créés localement ou sur vos serveurs
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
