---
id: ai-email-writer
title: Rédacteur d'emails IA
sidebar_label: Rédacteur d'emails IA
description: Créez des modèles d'emails personnalisés générés par l'IA avec substitution de variables et intégration de la Bibliothèque de connaissances.
---

# AI Email Writer

L'AI Email Writer est le système intelligent de création d'e-mails d'aiFetchly. Générez des e-mails de prospection personnalisés, créez des modèles réutilisables avec des variables dynamiques et exploitez votre Bibliothèque de connaissances pour des messages adaptés au contexte.

## Comprendre la génération d'e-mails par l'IA

Les modèles d'e-mails traditionnels sont statiques et génériques. L'AI Email Writer d'aiFetchly :

- **Génère un contenu unique** pour chaque destinataire
- **Intègre votre base de connaissances** via l'intégration RAG
- **Personnalise à grande échelle** tout en maintenant la qualité
- **S'adapte à différents contextes** et types de destinataires

:::info IA + Bibliothèque de connaissances

Pour de meilleurs résultats, [téléchargez les documents pertinents](./knowledge-library) dans votre Bibliothèque de connaissances avant de générer des e-mails. L'IA fera référence à vos produits, services et propositions de valeur spécifiques.

:::

## Aperçu des modèles d'e-mails

Les modèles constituent la base de vos campagnes d'e-mails. Ils contiennent :

1. **Contenu statique** : Le message de base qui reste cohérent
2. **Variables dynamiques** : Des espaces réservés qui sont remplacés par les données spécifiques du destinataire
3. **Génération par IA** : Création de contenu optionnelle alimentée par l'IA
4. **Mise en forme riche** : Prise en charge de divers styles de texte

## Créer des modèles d'e-mails

### Étape 1 : Accéder au module Outreach Campaign

1. Cliquez sur **Outreach Campaign** dans le menu de navigation de gauche
2. Sélectionnez **Templates** dans le sous-menu
3. Cliquez sur **Create New Template**

### Étape 2 : Informations du modèle

Entrez les informations suivantes :

#### Titre (Obligatoire)

- **Objectif** : Identifier le modèle dans votre liste
- **Exemple** : « Lancement de produit - Prospection », « Proposition de partenariat »
- **Recommandation** : Utilisez des noms descriptifs et spécifiques

#### Description (Optionnelle)

- **Objectif** : Fournir le contexte du cas d'utilisation du modèle
- **Exemple** : « Prospection initiale pour le lancement d'un nouveau produit auprès de prospects qualifiés »
- **Recommandation** : Incluez quand l'utiliser, le public cible et les messages clés

### Étape 3 : Contenu du modèle

Rédigez le contenu de votre e-mail dans l'éditeur de texte enrichi.

#### Utilisation des variables

Les variables sont des espaces réservés qui sont remplacés par les données réelles lors de l'envoi des e-mails.

**Variables disponibles :**

| Variable | Description | Exemple de résultat |
|----------|-------------|---------------------|
| `{$send_time}` | Horodatage actuel | « 2024-01-15 10:30 AM » |
| `{$sender}` | Nom de l'expéditeur | « Jean Dupont » |
| `{$receiver_email}` | E-mail du destinataire | « contact@entreprise.com » |
| `{$url}` | URL source | « https://entreprise.com » |
| `{$description}` | Texte descriptif | « Entreprise logicielle à Paris » |

**Exemple de modèle avec variables :**

```
Subject: Partnership Opportunity from {$sender}

Hi,

I came across your website ({$url}) and was impressed by your work in {$description}.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
{$sender}

Sent: {$send_time}
```

**Après substitution des variables :**

```
Subject: Partnership Opportunity from John Smith

Hi,

I came across your website (https://techstartup.com) and was impressed by your work in Software Development.

I'm reaching out because I believe there's a great partnership opportunity between our companies.

Would you be available for a quick call this week?

Best regards,
John Smith

Sent: 2024-01-15 10:30 AM
```

### Étape 4 : Contenu généré par l'IA (Optionnel)

Pour la génération de contenu alimentée par l'IA :

1. **Activez « Use AI Generation »**
2. **Fournissez un prompt** décrivant ce que vous souhaitez
3. **Activez le contexte RAG** pour utiliser la Bibliothèque de connaissances
4. **Cliquez sur Generate** pour créer le contenu

**Exemples de prompts :**
- « Rédigez un e-mail d'introduction amical pour nos services marketing »
- « Créez une prospection personnalisée mentionnant les fonctionnalités de notre plateforme SaaS »
- « Générez un e-mail de proposition de partenariat »

:::tip IA + Intégration RAG

Lorsque le contexte RAG est activé, l'IA fera automatiquement référence à votre Bibliothèque de connaissances pour inclure des informations précises sur vos produits, services et propositions de valeur.

:::

### Étape 5 : Aperçu et test

1. **Cliquez sur « Preview »** pour voir le modèle avec des exemples de variables
2. **Testez différentes combinaisons de variables**
3. **Modifiez le contenu** si nécessaire
4. **Enregistrez le modèle** lorsque vous êtes satisfait

## Gérer les modèles

### Liste des modèles

Accédez à **Outreach Campaign** → **Templates** pour voir tous les modèles.

**Informations du modèle :**
- Titre
- Description
- Date de création
- Date de dernière modification
- Nombre d'utilisations

### Actions sur les modèles

| Action | Description |
|--------|-------------|
| **Edit** | Modifier le contenu et les variables du modèle |
| **Duplicate** | Créer une copie du modèle |
| **Delete** | Supprimer le modèle (confirmation requise) |
| **Preview** | Voir le modèle avec des exemples de variables |
| **Use in Campaign** | Sélectionner pour l'envoi d'e-mails en lot |

### Bonnes pratiques pour les modèles

#### 1. Objets d'e-mails clairs

- ✅ « Opportunité de partenariat : [Leur entreprise] + [Votre entreprise] »
- ✅ « Question rapide sur [Leur secteur] »
- ❌ « Bonjour » ou « Salut »

#### 2. Personnalisation

- Utilisez des variables pour personnaliser le contenu
- Mentionnez des détails spécifiques sur le destinataire
- Faites référence à leur site web, secteur ou travail

#### 3. Approche axée sur la valeur

- Commencez par la valeur, pas seulement par un argument de vente
- Expliquez les avantages, pas seulement les fonctionnalités
- Soyez clair sur ce que le destinataire y gagne

#### 4. Appel à l'action clair

- Une seule étape suivante claire
- Facile à comprendre
- Peu d'effort requis (par exemple, « Répondez à cet e-mail »)

#### 5. Ton professionnel

- Relisez pour la grammaire et l'orthographe
- Maintenez un langage professionnel
- Évitez un ton trop décontracté ou trop commercial

## Exemples de modèles

### Exemple 1 : Prospection produit

**Objet :** Améliorez votre flux de travail en [Secteur] avec [Nom du produit]

```
Hi,

I noticed on {$url} that you're in the [Industry] space.

I'm reaching out because our platform has helped companies like [Description]
reduce their workflow time by up to 40%.

Would you be interested in a quick demo to see how it could work for {$receiver_email}?

Best,
{$sender}
```

### Exemple 2 : Proposition de partenariat

**Objet :** Opportunité de partenariat entre [Leur entreprise] et [Votre entreprise]

```

Hi,

I've been following [Description] (from {$url}) and think there's a
great synergy between our companies.

We've been working on [Industry] solutions and believe a partnership
could be mutually beneficial. Our companies serve similar markets with
complementary offerings.

Would you be open to a brief call to explore possibilities?

Best regards,
{$sender}
```

### Exemple 3 : Collaboration éditoriale

**Objet :** Opportunité de collaboration éditoriale

```
Hi,

I came across your content on {$url} and was impressed by your
expertise in [Industry].

I'm writing to explore a potential content collaboration. Our audience
is very interested in [Topic], and I think your insights would provide
tremendous value.

Would you be interested in discussing a guest post or joint webinar?

Best,
{$sender}
```

### Exemple 4 : Présentation de service

**Objet :** [Type de service] pour [Leur entreprise]

```
Hi,

I was researching companies in the [Industry] space and came across
{$url}.

I noticed you're [Description] and thought our [Service Type] might
be a good fit for your current stage. We've helped similar companies
achieve [Specific Result].

Would you be open to a brief conversation about your goals and
how we might help?

Best regards,
{$sender}
```

## Fonctionnalités avancées

### Contenu conditionnel

Créez des variations en fonction des données du destinataire :

```
{$if_industry}
If they're in [Industry], mention relevant case studies
{$endif}

{$if_company_size}
Adjust messaging based on company size
{$endif}
```

### Prise en charge multilingue

Créez des modèles en plusieurs langues :

1. **Dupliquez le modèle** pour chaque langue
2. **Traduisez le contenu** en conservant la structure des variables
3. **Utilisez le modèle approprié** en fonction de la localisation du destinataire

### Tests A/B

Créez plusieurs variations de modèles :

1. **Dupliquez le modèle** 2 à 3 fois
2. **Apportez une seule modification** par version (objet, introduction, appel à l'action)
3. **Testez avec de petits lots** d'abord
4. **Mesurez les résultats** et utilisez la version gagnante

### Blocs de contenu dynamique

Utilisez différentes sections de contenu en fonction des variables :

```
{$value_proposition_1}
Alternative: {$value_proposition_2}
Alternative: {$value_proposition_3}
```

## Intégration avec l'envoi d'e-mails en lot

Les modèles sont utilisés dans le flux d'envoi d'e-mails en lot :

1. **Choisissez un modèle** à l'étape 2 du processus d'envoi d'e-mails en lot
2. **Les variables sont automatiquement renseignées** à partir de votre liste d'e-mails
3. **Chaque destinataire reçoit un e-mail personnalisé**
4. **L'IA peut enrichir** le modèle avec le contenu de la Bibliothèque de connaissances

Pour des instructions détaillées, consultez [Envoi d'e-mails en lot](../lead-generation/batch-email-sending).

## Dépannage

### Variables non remplacées

**Causes possibles :**
- Noms de variables mal orthographiés
- Données manquantes dans la liste d'e-mails
- Syntaxe de variable incorrecte

**Solutions :**
1. Vérifiez la syntaxe des variables : `{$variable_name}`
2. Vérifiez que les données existent pour toutes les variables
3. Testez avec l'aperçu avant l'envoi

### La génération par IA ne fonctionne pas

**Causes possibles :**
- Service IA non configuré
- Contexte RAG activé mais aucun document dans la Bibliothèque de connaissances
- Prompt trop vague

**Solutions :**
1. Vérifiez les paramètres IA dans la configuration système
2. Téléchargez les documents pertinents dans la Bibliothèque de connaissances
3. Fournissez des prompts spécifiques et détaillés
4. Essayez d'abord avec le RAG désactivé

### Modèle trop générique

**Causes possibles :**
- Utilisation excessive de texte statique
- Pas assez de variables
- Génération par IA désactivée

**Solutions :**
1. Ajoutez plus de variables pour la personnalisation
2. Activez la génération par IA pour du contenu dynamique
3. Utilisez le contexte RAG pour des informations spécifiques
4. Créez plusieurs modèles pour différents cas d'utilisation

## Résumé des bonnes pratiques

### À FAIRE ✅

- **Personnalisez le contenu** avec des variables
- **Testez minutieusement** avant les campagnes
- **Gardez les objets** clairs et convaincants
- **Apportez de la valeur** dès le départ
- **Utilisez des appels à l'action clairs**
- **Relisez** tous les modèles
- **Créez des variations** pour différents publics
- **Exploitez l'IA** avec le contexte RAG

### À ÉVITER ❌

- **Ne soyez pas trop commercial**
- **N'utilisez pas d'objets vagues**
- **N'envoyez pas sans tester**
- **N'ignorez pas le contexte du destinataire**
- **Ne rédigez pas des e-mails trop longs**
- **N'utilisez pas une mise en forme excessive**
- **N'oubliez pas l'appel à l'action**
- **N'envoyez pas depuis des adresses « no-reply »**

## Prochaines étapes

Après avoir créé vos modèles :

- [Configurer les services e-mail (SMTP)](../lead-generation/batch-email-sending#configuration-des-services-de-mail)
- [Configurer l'envoi d'e-mails en lot](../lead-generation/batch-email-sending)
- [Utiliser l'assistant marketing IA](./ai-marketing-assistant) pour la stratégie

---

**Prêt à créer des modèles ?** Commencez avec un modèle de prospection simple et ajoutez progressivement plus de personnalisation et de contenu généré par l'IA au fur et à mesure que vous vous familiarisez avec le système.
