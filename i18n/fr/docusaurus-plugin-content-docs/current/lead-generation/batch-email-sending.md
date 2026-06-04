---
id: batch-email-sending
title: Envoi d'e-mails par lot
sidebar_label: Envoi d'e-mails par lot
description: Envoyez des campagnes d'e-mails personnalisées à grande échelle grâce à l'intégration SMTP d'aiFetchly.
---

# Envoi d'e-mails par lot

La fonctionnalité d'envoi d'e-mails par lot d'aiFetchly vous permet de lancer des campagnes d'e-mails personnalisées à grande échelle. Importez des e-mails depuis vos tâches d'profile insights, utilisez des modèles générés par l'IA et envoyez via votre propre serveur SMTP pour un contrôle total de vos actions de prospection.

## Vue d'ensemble

Le processus d'envoi d'e-mails par lot comprend **4 étapes** :

1. **Choisir la source des e-mails** - Sélectionnez la provenance de vos e-mails
2. **Choisir le modèle d'e-mail** - Sélectionnez ou créez votre modèle de message
3. **Choisir le filtre d'e-mail** (Facultatif) - Appliquez des filtres à votre liste d'e-mails
4. **Choisir le service d'e-mail** - Configurez le SMTP et envoyez

:::info Prérequis

Avant d'envoyer des campagnes, assurez-vous d'avoir :
- [Configuré un service SMTP](#configuration-des-services-de-mail)
- [Créé des modèles d'e-mails](../ai-outreach/ai-email-writer)
- [Extrait ou importé des listes d'e-mails](./contact-extraction)

:::

## Configuration des services d'e-mail

Avant d'envoyer des e-mails, vous devez configurer au moins un service SMTP.

### Qu'est-ce que le SMTP ?

**SMTP** (Simple Mail Transfer Protocol) est la norme pour l'envoi d'e-mails. aiFetchly utilise SMTP pour envoyer des e-mails via votre propre serveur de messagerie ou fournisseur de services d'e-mail.

### Étape 1 : Accéder aux services d'e-mail

1. Cliquez sur **Outreach Campaign** dans le menu de navigation de gauche
2. Sélectionnez **Email Services** dans le sous-menu
3. Cliquez sur **Add New Service**

### Étape 2 : Configuration SMTP

Entrez les détails SMTP suivants :

#### Nom du service

- **Objectif** : Identifier cette configuration SMTP
- **Exemple** : "Gmail SMTP", "SendGrid", "AWS SES"
- **Requis** : Oui

#### E-mail de l'expéditeur

- **Objectif** : Adresse e-mail depuis laquelle les e-mails seront envoyés
- **Exemple** : `outreach@yourcompany.com`
- **Requis** : Oui

:::tip Réputation de l'expéditeur

Utilisez une adresse e-mail dédiée pour la prospection. Évitez d'utiliser des adresses e-mail personnelles pour l'envoi en masse.

:::

#### Mot de passe

- **Objectif** : Mot de passe du compte e-mail ou mot de passe spécifique à l'application
- **Requis** : Oui
- **Sécurité** : Le mot de passe est stocké en toute sécurité

**Afficher/Masquer** : Cliquez sur l'icône en forme d'œil pour afficher/masquer le mot de passe.

#### Hôte

- **Objectif** : Nom d'hôte du serveur SMTP
- **Exemples** :
  - Gmail : `smtp.gmail.com`
  - SendGrid : `smtp.sendgrid.net`
  - AWS SES : `email-smtp.us-east-1.amazonaws.com`
- **Requis** : Oui

#### Port

- **Objectif** : Port du serveur SMTP
- **Ports courants** :
  - **587** : Soumission (STARTTLS) - Recommandé
  - **465** : SMTPS (SSL/TLS)
  - **25** : SMTP (non recommandé, souvent bloqué)
- **Requis** : Oui

#### SSL/TLS

- **Basculer** : Activer la connexion sécurisée
- **Recommandé** : Toujours garder activé
- **Objectif** : Chiffre la transmission des e-mails

### Étape 3 : Tester la configuration

Avant d'enregistrer, testez vos paramètres SMTP :

1. **Cliquez sur "Test Connection"**
2. **Entrez les détails du test** :
   - **Destinataire** : Adresse e-mail de test
   - **Titre** : Ligne d'objet du test
   - **Contenu** : Corps de l'e-mail de test
3. **Cliquez sur "Send Test Email"**
4. **Vérifiez votre boîte de réception** pour l'e-mail de test

:::important Tester avant l'envoi

Testez toujours votre configuration SMTP avant de l'utiliser dans des campagnes. Cela évite les envois échoués et le gaspillage de ressources.

:::

### Étape 4 : Enregistrer le service

1. Si le test est réussi, cliquez sur **Save**
2. Le service apparaît dans votre liste de services d'e-mail
3. Prêt à être utilisé dans les campagnes

### Fournisseurs SMTP courants

| Fournisseur | Hôte | Port | Remarques |
|----------|------|------|-------|
| **Gmail** | `smtp.gmail.com` | 587 | Utiliser un mot de passe d'application, pas le mot de passe habituel |
| **Outlook** | `smtp.office365.com` | 587 | Peut nécessiter un mot de passe d'application |
| **SendGrid** | `smtp.sendgrid.net` | 587 | Clé API comme mot de passe |
| **Mailgun** | `smtp.mailgun.org` | 587 | Utiliser les identifiants SMTP |
| **AWS SES** | Spécifique à la région | 587 | Nécessite des identifiants SMTP |
| **Postmark** | `smtp.postmarkapp.com` | 587 | Clé API comme mot de passe |

:::warning Gmail et Outlook

Gmail et Outlook nécessitent des **mots de passe d'application** pour l'accès SMTP tiers. Vous ne pouvez pas utiliser votre mot de passe habituel.

1. Activer l'authentification à deux facteurs
2. Générer un mot de passe d'application
3. Utiliser le mot de passe d'application dans aiFetchly

:::

## Envoi d'e-mails par lot

### Étape 1 : Choisir la source des e-mails

1. **Accédez à** **Outreach Campaign** → **Send Outreach Campaigns**
2. **Sélectionnez le type de source d'e-mail** dans le menu déroulant :
   - **Email Task** : E-mails provenant des tâches d'profile insights
   - **Manual Input** : Importer manuellement une liste d'e-mails
   - **Search Results** : Utiliser les résultats de tâches de recherche

#### Utilisation des tâches d'e-mail (Recommandé)

1. Sélectionnez **Email Task** dans le menu déroulant
2. **Choisissez une tâche d'profile insights** dans la liste
3. **Prévisualisez** la liste d'e-mails
4. **Option** : Activez "Avoid Duplicates" pour ignorer les e-mails déjà contactés

#### Utilisation de la saisie manuelle

1. Sélectionnez **Manual Input** dans le menu déroulant
2. **Entrez les e-mails** dans la zone de texte
3. **Format** : Un e-mail par ligne, ou format CSV
4. **Cliquez sur "Parse"** pour traiter la liste

### Étape 2 : Choisir le modèle d'e-mail

1. **Sélectionnez un ou plusieurs modèles** dans votre liste de modèles
2. **Prévisualisez** le contenu du modèle
3. **Les variables** seront automatiquement renseignées :
   - `{$receiver_email}` : Adresse e-mail du destinataire
   - `{$url}` : URL source (si disponible)
   - `{$description}` : Description ou contexte
   - `{$sender}` : Nom de l'expéditeur depuis la configuration SMTP
   - `{$send_time}` : Horodatage

:::tip Modèles multiples

Vous pouvez sélectionner plusieurs modèles pour tester différents messages en A/B. Le système alternera les modèles entre les destinataires.

:::

### Étape 3 : Choisir le filtre d'e-mail (Facultatif)

Appliquez des filtres à votre liste d'e-mails :

1. **Sélectionnez le type de filtre** dans le menu déroulant
2. **Configurez les règles de filtre**
3. **Prévisualisez les résultats filtrés**
4. **Voir le nombre** d'e-mails filtrés

**Filtres courants :**
- Supprimer les e-mails en doublon
- Filtrer par domaine
- Filtrer par secteur/catégorie
- Exclure les destinataires précédents

:::info Statut des filtres

Les filtres d'e-mail sont actuellement une fonctionnalité placeholder dans cette version. La prévention des doublons est disponible à l'étape 1.

:::

### Étape 4 : Choisir le service d'e-mail

1. **Sélectionnez un service SMTP** parmi vos services configurés
2. **Examinez le résumé de la campagne** :
   - Nombre d'e-mails
   - Modèle(s) sélectionné(s)
   - Service SMTP
   - Temps d'envoi estimé

3. **Cliquez sur "Send Campaign"** pour commencer l'envoi

### Exécution de la campagne

Après le lancement :

- **Progression en temps réel** : Suivez la progression de l'envoi
- **Comptages succès/échec** : Voir les envois réussis vs échoués
- **Journaux d'erreurs** : Voir les détails des e-mails échoués
- **Pause/Reprise** : Contrôler l'exécution de la campagne

## Suivi des campagnes

### Liste des campagnes

Accédez à **Outreach Campaign** → **Campaigns** pour voir toutes les campagnes.

**Informations sur la campagne :**
- Nom de la campagne
- Nombre d'e-mails
- Modèle utilisé
- Service SMTP
- Statut (En attente, Envoi en cours, Terminé, Échoué)
- Comptages Envoyés/Échoués
- Heures de début et de fin

### Actions de campagne

| Action | Description |
|--------|-------------|
| **View Details** | Voir le statut de chaque e-mail |
| **Pause** | Mettre en pause la campagne en cours |
| **Resume** | Reprendre la campagne en pause |
| **Stop** | Terminer la campagne |
| **Download Logs** | Exporter les résultats de la campagne |
| **Delete** | Supprimer l'enregistrement de la campagne |

### Statut des e-mails

Les e-mails individuels peuvent avoir les statuts suivants :

| Statut | Description |
|--------|-------------|
| **Pending** | En file d'attente pour l'envoi |
| **Sent** | Livré avec succès |
| **Failed** | Impossible à livrer |
| **Bounced** | Rejeté par le serveur du destinataire |
| **Opened** | Le destinataire a ouvert l'e-mail |
| **Clicked** | Le destinataire a cliqué sur un lien |

## Meilleures pratiques

### 1. Configuration SMTP

**Utiliser des IP dédiées :**
- Pour l'envoi à fort volume, utilisez des adresses IP dédiées
- Construisez progressivement la réputation de l'expéditeur
- Surveillez les métriques de délivrabilité

**Réchauffer les nouveaux comptes :**
- Commencez par 20 à 50 e-mails par jour
- Augmentez progressivement sur 2 à 4 semaines
- Surveillez les taux de rebond et de spam

**Services multiples :**
- Configurez 2 à 3 services SMTP
- Alternez entre les services pour répartir la charge
- Prévenez la limitation de débit par un seul fournisseur

### 2. Qualité de la liste d'e-mails

**Nettoyer vos listes :**
- Supprimez les e-mails rejetés
- Supprimez les désabonnements et les plaintes
- Vérifiez les e-mails avant l'envoi

**Segmenter votre audience :**
- Groupez par secteur, taille d'entreprise ou centre d'intérêt
- Créez des campagnes ciblées pour chaque segment
- Améliorez la pertinence et l'engagement

**Éviter les doublons :**
- Activez l'option "Avoid Duplicates"
- Listes de suppression pour les destinataires précédents
- Maintenance régulière des listes

### 3. Optimisation des modèles

**Personnaliser le contenu :**
- Utilisez largement les variables
- Mentionnez des détails spécifiques au destinataire
- Faites référence à leur site web ou travail

**Rester concis :**
- 100 à 200 mots idéalement
- Lignes d'objet claires
- Un seul appel à l'action

**Compatible mobile :**
- Paragraphes courts
- Formatage clair
- Tester sur appareils mobiles

### 4. Calendrier et fréquence

**Meilleurs moments d'envoi :**
- Mardi, mercredi, jeudi : 10h - 14h
- Éviter les lundis matins et les week-ends
- Testez les moments pour votre audience spécifique

**Fréquence d'envoi :**
- Ne pas envoyer au même destinataire dans les 30 jours
- Espacez les campagnes de manière appropriée
- Surveillez les taux de désabonnement

**Limitation du débit :**
- Respectez les limites du fournisseur SMTP
- Commencez doucement : 10 à 20 e-mails par minute
- Surveillez les blocages ou les rebonds

### 5. Conformité

**Inclure les éléments requis :**
- Adresse postale physique
- Mécanisme de désabonnement clair
- Informations d'en-tête exactes
- Votre identité dans l'e-mail

**Respecter les réglementations :**
- **CAN-SPAM** (États-Unis) : Exigences pour les e-mails commerciaux
- **RGPD** (UE) : Consentement et protection des données
- **CASL** (Canada) : Exigences de consentement

:::warning Conformité légale

Assurez-vous que vos campagnes d'e-mails sont conformes aux lois applicables dans les juridictions de vos destinataires. Consultez un conseiller juridique pour obtenir des conseils.

:::

## Dépannage

### Échec de la connexion SMTP

**Causes possibles :**
- Paramètres SMTP incorrects
- Pare-feu bloquant la connexion
- Problèmes d'authentification

**Solutions :**
1. Vérifiez l'hôte, le port et les identifiants
2. Testez avec telnet : `telnet smtp.host.com port`
3. Vérifiez les paramètres du pare-feu/antivirus
4. Essayez un port différent (587 vs 465)
5. Vérifiez le mot de passe d'application pour Gmail/Outlook

### Taux de rebond élevé

**Causes possibles :**
- Adresses e-mail invalides
- Problèmes de réputation de l'expéditeur
- Déclencheurs de filtres anti-spam

**Solutions :**
1. Vérifiez la qualité de la liste d'e-mails
2. Vérifiez la réputation de l'expéditeur (MXToolbox)
3. Améliorez le contenu des e-mails
4. Réchauffez le compte e-mail
5. Utilisez un service SMTP différent

### E-mails classés comme spam

**Causes possibles :**
- Mauvaise réputation de l'expéditeur
- Contenu considéré comme spam
- Authentification manquante

**Solutions :**
1. Configurez SPF, DKIM et DMARC
2. Améliorez la qualité du contenu des e-mails
3. Évitez les mots déclencheurs de spam
4. Incluez une adresse physique et un lien de désabonnement
5. Réchauffez le domaine d'envoi

### Limitation du débit

**Causes possibles :**
- Envoi trop rapide
- Limites du fournisseur SMTP dépassées

**Solutions :**
1. Réduisez la vitesse d'envoi (e-mails par minute)
2. Configurez plusieurs services SMTP
3. Vérifiez les limites de débit du fournisseur
4. Mettez à niveau le plan SMTP si nécessaire

### Les modèles ne se personnalisent pas

**Causes possibles :**
- Les variables ne correspondent pas aux données
- Données manquantes dans la liste d'e-mails

**Solutions :**
1. Vérifiez que les noms de variables correspondent exactement
2. Vérifiez que la liste d'e-mails contient les champs requis
3. Testez avec l'aperçu avant l'envoi
4. Utilisez du contenu générique comme solution de secours

## Métriques de campagne à suivre

### Délivrabilité

- **Taux d'envoi** : E-mails envoyés avec succès / Total des e-mails
- **Taux de rebond** : E-mails rejetés / E-mails envoyés
- **Taux de livraison** : E-mails livrés / E-mails envoyés

### Engagement

- **Taux d'ouverture** : Ouvertures / E-mails livrés
- **Taux de clics** : Clics / Ouvertures
- **Taux de conversion** : Conversions / Clics

### Réputation de l'expéditeur

- **Taux de plainte** : Plaintes pour spam / E-mails livrés
- **Taux de désabonnement** : Désabonnements / E-mails livrés
- **Touches de pièges à spam** : E-mails envoyés aux pièges à spam

:::tip Métriques de référence

Moyennes du secteur :
- Taux d'ouverture : 15 à 25 %
- Taux de clics : 2 à 5 %
- Taux de rebond : < 2 %
- Taux de plainte : < 0,1 %

:::

## Workflows avancés

### Workflow 1 : Campagne d'arrosage

Configurez des campagnes automatisées multi-touch :

1. **Jour 1** : E-mail de prospection initial
2. **Jour 3** : Suivi en l'absence de réponse
3. **Jour 7** : Dernier suivi avec valeur ajoutée
4. **Jour 14** : E-mail de clôture

Utilisez le [Planificateur](../automation/task-scheduling) pour l'automatisation.

### Workflow 2 : Test A/B

Testez différentes approches :

1. **Créez 2 à 3 variations de modèle**
2. **Divisez la liste d'e-mails** en segments
3. **Envoyez différents modèles** à chaque segment
4. **Mesurez les résultats** (taux d'ouverture, taux de réponse)
5. **Utilisez le gagnant** pour les futures campagnes

### Workflow 3 : Campagnes segmentées

Ciblez des audiences spécifiques :

1. **Extrayez des e-mails** par secteur ou emplacement
2. **Créez des modèles sur mesure** pour chaque segment
3. **Envoyez des campagnes ciblées** à chaque segment
4. **Analysez les résultats** par segment
5. **Optimisez les messages** en fonction des réponses

## Intégration avec la génération de leads

Le workflow complet de prospection par e-mail :

1. **[Moteurs de recherche](./search-engines)** : Trouver des sites web cibles
2. **[Profile Insights de contacts](./contact-extraction)** : Collecter les e-mails
3. **[Rédacteur d'e-mails IA](../ai-outreach/ai-email-writer)** : Créer des modèles personnalisés
4. **[Bibliothèque de connaissances](../ai-outreach/knowledge-library)** : Fournir du contexte à l'IA
5. **Envoi d'e-mails par lot** : Lancer les campagnes

## Prochaines étapes

- [Configurer l'assistant marketing IA](../ai-outreach/ai-marketing-assistant) pour la stratégie
- [Configurer la planification des tâches](../automation/task-scheduling) pour l'automatisation
- [Consulter les paramètres système](../settings/system-settings)

---

**Prêt à envoyer des campagnes ?** Commencez par un petit lot de test (20 à 50 e-mails) pour vérifier que tout fonctionne correctement, puis passez à l'échelle supérieure pour vos opérations de prospection.
