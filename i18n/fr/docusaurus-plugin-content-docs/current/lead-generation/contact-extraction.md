---
id: contact-extraction
title: Contact Profile Insights
sidebar_label: Contact Profile Insights
description: Créez des profils de contact à partir de sites web et d'URL avec découverte d'e-mails, enrichissement IA optionnel, contrôles de tâches et résultats exportables.
---

# Contact Profile Insights

Contact Profile Insights d'aiFetchly crée des profils de contact structurés à partir de sites web à grande échelle. Utilisez-le pour collecter des e-mails publics depuis des URL individuelles ou des résultats de recherche existants, et enrichir éventuellement chaque profil avec des numéros de téléphone, adresses et liens sociaux détectés par l'IA.

## Comprendre Contact Profile Insights

Contact Profile Insights fonctionne en :

1. **Visitant chaque URL** que vous fournissez
2. **Scannant le contenu de la page** pour détecter des modèles d'e-mails
3. **Suivant les liens internes** (facultatif)
4. **Sélectionnant les meilleures pages candidates** pour l'enrichissement IA optionnel
5. **Compilant les e-mails découverts et les champs enrichis** dans une liste structurée
6. **Dédoublonnant** automatiquement les résultats

:::info Cas d'utilisation

Contact Profile Insights est idéal pour :
- Collecter des e-mails à partir de résultats de recherche
- Construire des listes de contacts à partir d'annuaires professionnels
- Rassembler des informations de contact à partir de listes de membres
- Extraire des e-mails à partir de pages de ressources
- Enrichir les profils avec téléphones, adresses et profils sociaux

:::

## Créer une tâche de profil de contact

### Étape 1 : Accéder à Contact Profile Insights

1. Cliquez sur **Contact Profile Insights** dans le menu de navigation de gauche
2. Vous verrez la liste des tâches de profils de contact
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

### Étape 3 : Configurer les paramètres de profil

#### Profondeur de page

- **Par défaut** : 10 pages par URL
- **Plage recommandée** : 1 à 1 000 pages
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

### Étape 5 : Enrichissement IA (facultatif)

Lorsque l'IA est activée pour votre compte, le formulaire affiche **Enable AI Enrichment**.

- **Désactivé** : Extrait uniquement les e-mails.
- **Activé** : Utilise l'IA pour enrichir chaque résultat avec téléphone, adresse et liens sociaux lorsque ces informations peuvent être trouvées.

L'enrichissement IA est utile lorsque vous avez besoin de profils de contact plus complets pour la prospection ou la qualification. Il peut allonger le traitement, et certaines lignes peuvent afficher **Skipped** ou **Failed** si le contenu utile est insuffisant ou si la demande d'enrichissement ne peut pas aboutir.

### Étape 6 : Configuration du proxy (facultatif)

Ajoutez des proxys pour l'profile insights à grande échelle :

1. Cliquez sur **Choisir un proxy**
2. Sélectionnez un ou plusieurs proxys
3. Confirmez la sélection
4. Les proxys sélectionnés apparaissent sous forme de pastilles dans le sélecteur

:::tip Quand utiliser des proxys

Utilisez des proxys lorsque :
- Vous extrayez à partir de plus de 50 URL
- Vous exécutez plusieurs processus simultanés
- Les tâches précédentes ont été bloquées
- Vous extrayez repeatedly des mêmes domaines

:::

### Étape 7 : Créer ou mettre à jour la tâche

Cliquez sur **Soumettre** pour créer une nouvelle tâche de profils de contact. Les nouvelles tâches sont envoyées au processus backend et l'application revient à la liste des tâches lorsque la tâche démarre.

Lorsque vous modifiez une tâche existante, le bouton devient **Save**. L'enregistrement met à jour la source des URL, la profondeur de page, la concurrence, le délai, les proxys, la visibilité du navigateur et l'enrichissement IA.

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
| **Actions** | Voir, Arrêter, Démarrer/Redémarrer, Modifier, Supprimer, Télécharger les logs |

### Statut des tâches

| Statut | Description | Action |
|--------|-------------|--------|
| **En attente** | Tâche créée mais non démarrée | Modifier, Supprimer |
| **En cours** | Recherche active de canaux de contact publics | Arrêter la tâche ou suivre la progression |
| **Terminé** | Terminé avec succès | Voir les résultats, modifier les paramètres ou redémarrer |
| **Erreur** | Échoué avec des erreurs | Télécharger les logs, modifier, supprimer ou redémarrer |

### Actions sur les tâches

- **Voir les résultats** (icône dossier) : Voir les e-mails extraits
- **Arrêter** (icône stop) : Arrêter une tâche en cours
- **Démarrer/Redémarrer** (icône lecture) : Démarrer une tâche qui n'est pas en cours
- **Modifier** (icône crayon) : Modifier les paramètres de la tâche
- **Supprimer** (icône corbeille) : Supprimer les tâches en attente ou en erreur
- **Télécharger les logs** (icône téléchargement) : Obtenir les logs d'erreurs (uniquement tâches échouées)

## Afficher les résultats de profils de contact

### Étape 1 : Accéder aux résultats

1. Allez à la liste des tâches **Profile Insights d'e-mails**
2. Trouvez la tâche terminée
3. Cliquez sur **Voir les résultats**

### Étape 2 : Tableau des résultats

Le tableau des résultats affiche :

| Colonne | Description |
|---------|-------------|
| **ID** | Identifiant unique du résultat |
| **URL** | Site web source |
| **Heure d'enregistrement** | Moment où le résultat a été collecté |
| **Téléphone** | Téléphone enrichi par l'IA lorsqu'il est disponible |
| **Adresse** | Adresse enrichie par l'IA lorsqu'elle est disponible |
| **Liens sociaux** | Liens de profils sociaux enrichis par l'IA lorsqu'ils sont disponibles |
| **Statut IA** | Statut d'enrichissement : Not enriched, Processing, Completed, Failed ou Skipped |

### Étape 3 : Développer les détails

Cliquez sur une ligne pour la développer et voir :
- Tous les e-mails trouvés sur cette URL
- La liste d'e-mails peut être copiée
- Téléphone, adresse et liens sociaux enrichis lorsqu'ils existent

### Étape 4 : Recherche et filtrage

- **Recherche** : Filtrer par URL ou adresse e-mail
- **Pagination** : Naviguer dans les grands ensembles de résultats
- **Export** : Télécharger les résultats de la tâche au format CSV

## Exporter les résultats de profils de contact

### Exporter en CSV

1. Ouvrez les détails des résultats d'une tâche
2. Cliquez sur **Export**
3. aiFetchly exporte les résultats de la tâche en CSV et renvoie le chemin du fichier enregistré

**Format CSV :**
```csv
URL,Email,Phone,Address,Social Links,AI Status,Timestamp
https://example.com,contact@example.com,+1-555-0100,"123 Market St","https://linkedin.com/company/example",completed,2026-06-08 10:30:00
```

### Utiliser dans les campagnes d'e-mail

Les e-mails extraits s'intègrent directement avec le marketing par e-mail :

1. **Voir les résultats** de la tâche d'profile insights
2. Exportez les résultats de la tâche ou choisissez la tâche dans le sélecteur de source d'e-mails de la campagne
3. Utilisez les e-mails collectés et les champs enrichis pour la vérification et la personnalisation

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
- Très grands portails (faible qualité)

### 2. Paramètres de profondeur de page

**Conservateur** (axé sur la qualité) :
- Profondeur de page : 5-10
- Concurrence : 1-3
- Enrichissement IA : activé pour les contacts à haute valeur
- Idéal pour : Listes ciblées, contacts à haute valeur

**Modéré** (équilibre) :
- Profondeur de page : 10-50
- Concurrence : 3-5
- Enrichissement IA : activé lorsque la qualité du profil compte
- Idéal pour : Campagnes de prospection générales

**Agressif** (axé sur la quantité) :
- Profondeur de page : 50-100+
- Concurrence : 5-10
- Enrichissement IA : à utiliser sélectivement pour maîtriser le temps de traitement
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

2. **Ouvrir dans Contact Profile Insights** :
   - Créer une tâche de profils à partir des résultats de recherche
   - Ouvrir Contact Profile Insights depuis les URL découvertes

3. **Contrôle qualité** :
   - Examiner les e-mails extraits et les champs enrichis
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

### Enrichissement IA indisponible

**Causes possibles :**
- L'IA n'est pas activée pour votre compte
- L'application n'a pas pu charger l'état IA actuel

**Solutions :**
1. Vérifier que les fonctions IA sont activées dans votre compte ou espace de travail
2. Rouvrir le formulaire de tâche après activation de l'IA
3. Exécuter la tâche sans enrichissement IA si vous avez seulement besoin d'adresses e-mail

### Le statut IA affiche Failed ou Skipped

**Causes possibles :**
- La page ne contient pas assez de contexte de contact utile
- Le site a bloqué l'accès aux pages de contact
- L'enrichissement IA a expiré ou échoué pour ce résultat

**Solutions :**
1. Développer la ligne et examiner les e-mails qui ont tout de même été extraits
2. Augmenter la profondeur de page pour les sites dont les pages de contact sont plus profondes
3. Réduire la concurrence ou utiliser des proxys si les pages sont bloquées
4. Redémarrer la tâche après ajustement des paramètres

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
2. **Examiner l'enrichissement** : Vérifier téléphone, adresse, liens sociaux et statut IA lorsque l'enrichissement IA était activé
3. **Exporter ou importer** : Choisir la tâche dans une campagne ou exporter en CSV
4. **Sélectionner un modèle** : Choisir ou créer un modèle d'e-mail
5. **Personnaliser** : Utiliser le rédacteur d'e-mails IA pour un contenu personnalisé
6. **Lancer la campagne** : Envoyer une prospection ciblée

Pour des instructions détaillées sur la création de campagnes, consultez [Envoi d'e-mails en lot](./batch-email-sending).

## Prochaines étapes

- [Configurer la bibliothèque de connaissances](../ai-outreach/knowledge-library)
- [Créer des campagnes d'e-mail alimentées par l'IA](../ai-outreach/ai-email-writer)
- [En savoir plus sur l'assistant marketing IA](../ai-outreach/ai-marketing-assistant)

---

**Prêt à trouver des canaux de contact publics ?** Commencez avec un petit lot d'URL pour tester vos paramètres, puis augmentez progressivement vos opérations de profils de contact.
