---
id: contact-extraction
title: Profile Insights de contacts
sidebar_label: Profile Insights d'e-mails
description: Extrayez des adresses e-mail en masse à partir de sites web et d'URL avec le puissant outil d'profile insights d'aiFetchly.
---

# Profile Insights d'e-mails

La fonctionnalité d'profile insights d'e-mails d'aiFetchly vous permet de collecter des adresses e-mail à grande échelle à partir de sites web. Extrayez des informations de contact à partir d'URL individuelles ou exploitez vos résultats de recherche existants pour une collecte d'e-mails ciblée.

## Comprendre l'profile insights d'e-mails

L'profile insights d'e-mails fonctionne en :

1. **Visitant chaque URL** que vous fournissez
2. **Scannant le contenu de la page** pour détecter des modèles d'e-mails
3. **Suivant les liens internes** (facultatif)
4. **Compilant tous les e-mails découverts** dans une liste structurée
5. **Dédoublonnant** automatiquement les résultats

:::info Cas d'utilisation

L'profile insights d'e-mails est idéale pour :
- Collecter des e-mails à partir de résultats de recherche
- Construire des listes de contacts à partir d'annuaires professionnels
- Rassembler des informations de contact à partir de listes de membres
- Extraire des e-mails à partir de pages de ressources

:::

## Créer une tâche d'profile insights

### Étape 1 : Accéder à l'profile insights d'e-mails

1. Cliquez sur **Profile Insights d'e-mails** dans le menu de navigation de gauche
2. Vous verrez la liste des tâches d'profile insights
3. Cliquez sur le bouton **Créer une nouvelle tâche**

### Étape 2 : Choisir la méthode de saisie d'URL

Sélectionnez comment vous souhaitez fournir les URL pour l'profile insights :

#### Méthode 1 : Saisie manuelle d'URL

**Idéal pour** : Listes d'URL personnalisées, sites web spécifiques

1. Sélectionnez **Saisie manuelle** dans le menu déroulant de la source
2. Entrez vos URL dans la zone de texte
3. **Format** : Une URL par ligne

**Exemple :**
```
https://example.com
https://www.business-site.com/contact
https://another-site.com/about-us
```

**Validation :**
- Les URL doivent commencer par `http://` ou `https://`
- Les URL invalides seront signalées automatiquement
- Maximum d'URL par tâche : 10 000

#### Méthode 2 : À partir des résultats de recherche

**Idéal pour** : Exploiter les campagnes de recherche existantes

1. Sélectionnez **Résultats de recherche** dans le menu déroulant de la source
2. Un tableau de vos tâches de recherche terminées apparaît
3. Sélectionnez la tâche de recherche contenant les URL dont vous souhaitez extraire
4. Cliquez sur **Confirmer**

**Avantages :**
- Intégration transparente avec la fonction de recherche
- Aucune saisie manuelle d'URL nécessaire
- Utilise les URL précédemment explorées

### Étape 3 : Configurer les paramètres d'profile insights

#### Profondeur de page

- **Par défaut** : 10 pages par URL
- **Plage** : 1 à 1 000 pages
- **Objectif** : Combien de pages explorer en profondeur pour chaque site web

**Recommandations :**
- **Petits sites** : 5-10 pages
- **Sites moyens** : 10-50 pages
- **Grands sites** : 50-100 pages
- **Très grands sites** : 100+ pages (à utiliser avec prudence)

:::warning Pages vs. temps

Une profondeur de page plus élevée = un temps d'profile insights plus long. Commencez de manière conservative et augmentez progressivement.

:::

#### Concurrence

- **Par défaut** : 1 processus simultané
- **Plage** : 1 à 10 processus simultanés
- **Objectif** : Combien d'URL traiter simultanément

**Recommandations :**
- **Sans proxys** : 1-3 simultanés
- **Avec proxys** : 3-10 simultanés
- **Commencez bas** et augmentez progressivement

#### Nombre maximum de pages

- **Par défaut** : 100 pages
- **Plage** : 0 à 1 000 pages
- **Objectif** : Maximum absolu de pages à traiter

**Cas d'utilisation** : Empêche l'profile insights incontrôlée sur de très grands sites.

#### Délai d'attente du traitement

- **Par défaut** : 10 minutes
- **Plage** : 1 à 20 minutes
- **Objectif** : Temps maximum par URL avant expiration

**Ajuster si :**
- Les sites chargent lentement → Augmenter le délai
- Vous souhaitez un échec plus rapide → Diminuer le délai

### Étape 4 : Options d'affichage

#### Afficher dans le navigateur

- **Non** (par défaut) : L'profile insights s'exécute de manière invisible (plus rapide)
- **Oui** : Fenêtre du navigateur visible (mode débogage)

**Recommandation** : Gardez sur "Non" pour les tâches de production.

### Étape 5 : Configuration du proxy (facultatif)

Ajoutez des proxys pour l'profile insights à grande échelle :

1. Activez **Utiliser un proxy**
2. Cliquez sur **Choisir un proxy**
3. Sélectionnez un ou plusieurs proxys
4. Cliquez sur **Confirmer**

:::tip Quand utiliser des proxys

Utilisez des proxys lorsque :
- Vous extrayez à partir de plus de 50 URL
- Vous exécutez plusieurs processus simultanés
- Les tâches précédentes ont été bloquées
- Vous extrayez repeatedly des mêmes domaines

:::

### Étape 6 : Créer la tâche

Cliquez sur **Soumettre** pour créer votre tâche d'profile insights. Vous pouvez :
- **Enregistrer uniquement** : Enregistrer la tâche sans l'exécuter
- **Exécuter maintenant** : Démarrer l'profile insights immédiatement

## Gestion des tâches d'profile insights

### Afficher la liste des tâches

Accédez à **Profile Insights d'e-mails** pour voir toutes vos tâches.

**Colonnes de la liste des tâches :**

| Colonne | Description |
|---------|-------------|
| **ID** | Identifiant unique de la tâche |
| **Type** | Saisie manuelle ou Résultats de recherche |
| **Statut** | En attente, En cours, Terminé, Erreur |
| **Heure d'enregistrement** | Moment de la création de la tâche |
| **Actions** | Voir, Modifier, Supprimer, Télécharger les logs |

### Statut des tâches

| Statut | Description | Action |
|--------|-------------|--------|
| **En attente** | Tâche créée mais non démarrée | Modifier, Supprimer |
| **En cours** | Profile Insights des e-mails en cours | Suivre la progression |
| **Terminé** | Terminé avec succès | Voir les résultats |
| **Erreur** | Échoué avec des erreurs | Voir les logs, Réessayer |

### Actions sur les tâches

- **Voir les résultats** (icône dossier) : Voir les e-mails extraits
- **Modifier** (icône crayon) : Modifier les paramètres de la tâche (uniquement tâches en attente/en erreur)
- **Supprimer** (icône corbeille) : Supprimer la tâche
- **Télécharger les logs** (icône téléchargement) : Obtenir les logs d'erreurs (uniquement tâches échouées)

## Afficher les e-mails extraits

### Étape 1 : Accéder aux résultats

1. Allez à la liste des tâches **Profile Insights d'e-mails**
2. Trouvez la tâche terminée
3. Cliquez sur **Voir les résultats**

### Étape 2 : Tableau des résultats

Le tableau des résultats affiche :

| Colonne | Description |
|---------|-------------|
| **URL** | Site web source |
| **E-mails** | Adresses e-mail extraites (dépliables) |
| **Nombre** | Nombre d'e-mails trouvés |
| **Horodatage** | Moment de l'profile insights |

### Étape 3 : Développer les détails

Cliquez sur une ligne pour la développer et voir :
- Tous les e-mails trouvés sur cette URL
- La liste d'e-mails peut être copiée
- Voir les adresses e-mail individuelles

### Étape 4 : Recherche et filtrage

- **Recherche** : Filtrer par URL ou adresse e-mail
- **Pagination** : Naviguer dans les grands ensembles de résultats
- **Actualisation automatique** : Les résultats se mettent à jour toutes les 10 secondes pendant le traitement

## Exporter les e-mails extraits

### Exporter en CSV

1. Sélectionnez les résultats que vous souhaitez exporter (ou laissez vide pour tous)
2. Cliquez sur **Exporter** → **CSV**
3. Le fichier se télécharge avec tous les e-mails extraits

**Format CSV :**
```csv
URL,Email,Timestamp
https://example.com,contact@example.com,2024-01-15 10:30:00
https://example.com,info@example.com,2024-01-15 10:30:00
```

### Utiliser dans les campagnes d'e-mail

Les e-mails extraits s'intègrent directement avec le marketing par e-mail :

1. **Voir les résultats** de la tâche d'profile insights
2. Cliquez sur le bouton **Utiliser dans une campagne**
3. Les e-mails sont automatiquement transmis au workflow de marketing par e-mail

Pour des instructions détaillées, consultez [Envoi d'e-mails en lot](./batch-email-sending).

## Meilleures pratiques

### 1. Stratégie de source d'URL

**Sources de haute qualité :**
- Annuaires professionnels
- Listes de membres
- Sites d'associations
- Pages de ressources
- Pages "Contactez-nous"

**À éviter :**
- Plateformes de réseaux sociaux (rarement des e-mails)
- Sites d'actualités (faible conversion)
 Très grands portails (faible qualité)

### 2. Paramètres de profondeur de page

**Conservateur** (axé sur la qualité) :
- Profondeur de page : 5-10
- Concurrence : 1-3
- Idéal pour : Listes ciblées, contacts à haute valeur

**Modéré** (équilibre) :
- Profondeur de page : 10-50
- Concurrence : 3-5
- Idéal pour : Campagnes de prospection générales

**Agressif** (axé sur la quantité) :
- Profondeur de page : 50-100+
- Concurrence : 5-10
- Idéal pour : Études de marché, couverture large

:::warning Qualité vs. quantité

Les paramètres agressifs peuvent extraire plus d'e-mails mais de moindre qualité. Concentrez-vous sur des sources pertinentes pour de meilleurs résultats de campagne.

:::

### 3. Utilisation des proxys

**Petites tâches** (< 100 URL) :
- Proxys non requis
- Concurrence : 1-3

**Tâches moyennes** (100 à 1 000 URL) :
- Utiliser 2-3 proxys
- Concurrence : 3-5

**Grandes tâches** (1 000+ URL) :
- Utiliser 5+ proxys
- Concurrence : 5-10
- Rotation régulière des proxys

### 4. Dédoublonnage

aiFetchly déduplique automatiquement les e-mails au sein d'une tâche. Pour un dédoublonnage supplémentaire :

- Exporter les résultats en CSV
- Utiliser un tableur ou des scripts
- Comparer avec les listes de contacts existantes
- Supprimer les doublons avant les campagnes

### 5. Vérification des e-mails

Les e-mails extraits ne sont pas toujours valides. Envisagez :

- **Révision manuelle** : Vérifier les formats d'e-mail par échantillonnage
- **Outils de vérification d'e-mail** : Utiliser des services tiers
- **Campagnes test** : Envoyer d'abord de petits lots
- **Suivi des rebonds** : Supprimer les e-mails non délivrables

## Intégration avec les résultats de recherche

Le flux de travail le plus puissant combine recherche et profile insights :

### Flux de travail complet

1. **Exécuter une tâche de recherche** :
   - Rechercher des entreprises dans votre secteur cible
   - Utiliser la génération de mots-clés IA pour une couverture complète

2. **Extraire les e-mails** :
   - Créer une tâche d'profile insights à partir des résultats de recherche
   - Extraire les e-mails des URL découvertes

3. **Contrôle qualité** :
   - Examiner les e-mails extraits
   - Filtrer par qualité de la source
   - Supprimer les doublons

4. **Campagne d'e-mail** :
   - Importer dans le marketing par e-mail
   - Créer des modèles personnalisés
   - Lancer la campagne

## Techniques avancées

### Technique 1 : Profile Insights approfondie

Pour une collecte d'e-mails complète :

1. **Définir la profondeur de page** : 50-100 pages
2. **Activer les proxys** : Utiliser 3-5 proxys
3. **Concurrence modérée** : 3-5
4. **Suivre la progression** : Vérifier les résultats régulièrement
5. **Arrêter tôt** : Si la qualité baisse, ajuster les paramètres

### Technique 2 : Profile Insights basée sur des motifs

Cibler des types de pages spécifiques :

- **Pages de contact** : URL contenant `/contact`
- **Pages à propos** : URL contenant `/about`
- **Pages d'équipe** : URL contenant `/team`
- **Répertoires de membres** : Sites d'associations

### Technique 3 : Analyse concurrentielle

Extraire les e-mails des sites concurrents :

1. **Identifier les concurrents** dans votre niche
2. **Extraire leurs e-mails de contact**
3. **Analyser leurs partenariats** (pages de liens)
4. **Construire une liste de prospection de partenariats**

## Dépannage

### Statut de la tâche : "Erreur"

**Causes possibles :**
- URL invalides
- Problèmes de connectivité réseau
- Tous les proxys ont échoué
- Blocage par le site web

**Solutions :**
1. Vérifier le format des URL (http:// ou https://)
2. Vérifier la connexion Internet
3. Tester la santé des proxys
4. Réduire la concurrence
5. Augmenter les paramètres de délai d'attente

### Aucun e-mail extrait

**Causes possibles :**
- Les sites web n'ont pas d'e-mails visibles publiquement
- Les e-mails sont dans des images/JavaScript (non extraits)
- Les sites utilisent des formulaires de contact au lieu d'e-mails
- Profondeur de page trop faible

**Solutions :**
1. Augmenter le paramètre de profondeur de page
2. Vérifier manuellement que les sites ont des e-mails
3. Essayer différentes sources d'URL
4. Vérifier si les sites utilisent des formulaires de contact

### Traitement lent

**Causes possibles :**
- Profondeur de page élevée
- Nombreux processus simultanés
- Sites web lents
- Latence réseau

**Solutions :**
1. Réduire la profondeur de page
2. Diminuer la concurrence
3. Augmenter le délai d'attente
4. Utiliser des proxys plus rapides

### E-mails en double

**Causes possibles :**
- Le même e-mail apparaît sur plusieurs pages
- Plusieurs URL du même domaine

**Solutions :**
1. aiFetchly déduplique automatiquement au sein des tâches
2. Exporter et dédupliquer entre les tâches
3. Utiliser un tableur ou des scripts
4. Utiliser des outils de vérification d'e-mail

### Bloqué par les sites web

**Causes possibles :**
- Trop de requêtes simultanées
- Pas de rotation de proxy
- Paramètres trop agressifs

**Solutions :**
1. Réduire la concurrence à 1-3
2. Utiliser plusieurs proxys
3. Augmenter les délais entre les requêtes
4. Respecter les limites de débit des sites

## Considérations légales et éthiques

### Conformité

Lors de l'profile insights d'e-mails, considérez :

- **RGPD** (Europe) : Réglementations strictes sur la collecte d'e-mails
- **CAN-SPAM** (USA) : Exigences pour les e-mails commerciaux
- **LCPC** (Canada) : Exigences de consentement pour les messages électroniques

:::warning Avertissement légal

Assurez-vous toujours d'avoir les droits légaux pour extraire et contacter les adresses e-mail. Consultez un conseiller juridique pour des directives sur les lois applicables.

:::

### Meilleures pratiques

- **Sources publiques uniquement** : Extraire uniquement à partir d'informations publiquement disponibles
- **Contexte pertinent** : Extraire d'entreprises/contacts pertinents pour votre offre
- **Respecter Robots.txt** : Honorer les standards d'exclusion des sites web
- **Fournir une option de désinscription** : Inclure des options de désinscription dans les e-mails
- **Proposition de valeur** : Offrir quelque chose de valeur dans votre prospection

## Intégration avec le marketing par e-mail

Une fois que vous avez extrait les e-mails :

1. **Examiner les résultats** : Vérifier la qualité de vos e-mails extraits
2. **Exporter ou importer** : Directement dans le marketing par e-mail ou exporter en CSV
3. **Sélectionner un modèle** : Choisir ou créer un modèle d'e-mail
4. **Personnaliser** : Utiliser le rédacteur d'e-mails IA pour un contenu personnalisé
5. **Lancer la campagne** : Envoyer une prospection ciblée

Pour des instructions détaillées sur la création de campagnes, consultez [Envoi d'e-mails en lot](./batch-email-sending).

## Prochaines étapes

- [Configurer la bibliothèque de connaissances](../ai-outreach/knowledge-library)
- [Créer des campagnes d'e-mail alimentées par l'IA](../ai-outreach/ai-email-writer)
- [En savoir plus sur l'assistant marketing IA](../ai-outreach/ai-marketing-assistant)

---

**Prêt à extraire des e-mails ?** Commencez avec un petit lot d'URL pour tester vos paramètres, puis augmentez progressivement vos opérations d'profile insights.
