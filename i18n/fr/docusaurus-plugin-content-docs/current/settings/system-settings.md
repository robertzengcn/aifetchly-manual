---
id: system-settings
title: System Settings
sidebar_label: System Settings
description: Configure aiFetchly's browser paths, captcha solving, and system preferences.
---

# Paramètres système

La section Paramètres système vous permet de configurer les fonctionnalités principales d'aiFetchly, y compris les chemins des navigateurs pour l'automatisation Web, la résolution de captchas, les modèles d'embedding et les préférences système. Une configuration appropriée garantit des performances optimales pour toutes les fonctionnalités.

## Accéder aux paramètres système

1. Cliquez sur **Paramètres** dans le menu de navigation de gauche
2. Un panneau de navigation arborescent apparaît à gauche
3. Cliquez sur n'importe quelle catégorie pour développer ses paramètres
4. Modifiez les paramètres selon vos besoins
5. Les modifications sont enregistrées automatiquement

:::info Enregistrement automatique

La plupart des paramètres sont enregistrés automatiquement lors de leur modification. Recherchez les indicateurs de sauvegarde ou les messages de confirmation.

:::

## Aperçu des paramètres

### Service 2Captcha

Résolution automatique de captchas pour le information organization Web.

| Paramètre | Description |
|-----------|-------------|
| **Token** | Votre jeton API 2Captcha |
| **Activé** | Activer/désactiver la résolution de captchas |

**Configuration (facultatif) :**
1. Inscrivez-vous sur https://2captcha.com
2. Ajoutez des fonds à votre compte
3. Obtenez le jeton API depuis le tableau de bord
4. Entrez le jeton et activez le service

:::info Quand utiliser 2Captcha

Utile lorsque :
- Information Organization à grande échelle
- Rencontres fréquentes de captchas
- Vous ne voulez pas résoudre les captchas manuellement

:::

### Configuration d'embedding

Configurez le modèle d'embedding par défaut pour le RAG (Retrieval-Augmented Generation).

| Paramètre | Description |
|-----------|-------------|
| **Modèle par défaut** | Sélectionnez parmi les modèles d'embedding disponibles |

**Options :**
- Divers modèles d'embedding avec différentes dimensions
- Choisissez en fonction de :
  - Prise en charge des langues
  - Exigences de performance
  - Contraintes de ressources

### Chemins système externes

Configurez les chemins des navigateurs pour l'intégration de navigateur local.

#### Chemin Chrome

**Objectif** : Chemin vers l'exécutable du navigateur Chrome

**Pour configurer :**
1. Cliquez sur **Parcourir** ou le bouton de sélection de fichier
2. Accédez à l'installation de Chrome
3. Sélectionnez l'exécutable

**Chemins par défaut (par système d'exploitation) :**
- **Windows** : `C:\Program Files\Google\Chrome\Application\chrome.exe`
- **macOS** : `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Linux** : `/usr/bin/google-chrome` ou `/usr/bin/chromium-browser`

#### Chemin Firefox

**Objectif** : Chemin vers l'exécutable du navigateur Firefox

**Pour configurer :**
1. Cliquez sur **Parcourir** ou le bouton de sélection de fichier
2. Accédez à l'installation de Firefox
3. Sélectionnez l'exécutable

**Chemins par défaut (par système d'exploitation) :**
- **Windows** : `C:\Program Files\Mozilla Firefox\firefox.exe`
- **macOS** : `/Applications/Firefox.app/Contents/MacOS/firefox`
- **Linux** : `/usr/bin/firefox`

:::tip Exigences relatives aux chemins de navigateur

Les chemins de navigateur sont nécessaires pour :
- Les fonctionnalités d'intégration de navigateur local
- Le information organization Yandex (nécessite un navigateur)
- Certains scénarios de détection anti-bot

:::

### Préférences utilisateur

Configurez votre expérience aiFetchly.

#### Langue

**Options :**
- **English** : Interface en anglais
- **中文** : Interface en chinois simplifié

**Pour modifier :**
1. Sélectionnez la langue préférée dans le menu déroulant
2. L'interface se met à jour immédiatement
3. Un redémarrage est recommandé pour un changement complet de langue

#### Informations commerciales pour l'analyse IA de sites Web

**Objectif** : Fournir du contexte pour l'analyse de sites Web basée sur l'IA

**Format** : Configuration JSON

**Exemple :**
```json
{
  "industry": "Software",
  "company_size": "50-200 employees",
  "target_markets": ["B2B", "SaaS"],
  "keywords": ["marketing", "automation"]
}
```

**Utilisation :**
- L'IA utilise ce contexte lors de l'analyse de sites Web
- Améliore la pertinence des résultats d'analyse
- Personnalise la notation et la catégorisation

## Gestion des outils MCP

**MCP** (Model Context Protocol) permet l'intégration avec des outils et services externes, étendant l'Assistant Marketing IA avec des capacités telles que la recherche Web, les requêtes de base de données et les appels API personnalisés.

Pour la documentation complète sur la configuration et l'utilisation des serveurs MCP, consultez [Outils MCP](../ai-outreach/mcp-tools).

## Meilleures pratiques de configuration

### 1. Configuration du navigateur

**Chrome ou Firefox :**
- Chrome : Meilleure compatibilité, plus de fonctionnalités
- Firefox : Open source, axé sur la confidentialité

**Recommandation :** Configurez Chrome comme navigateur principal et Firefox comme solution de secours.

### 2. Résolution de captchas

**Quand activer :**
- Opérations de information organization à grande échelle (>1000 pages)
- Rencontres fréquentes de captchas
- Pas d'intervention manuelle souhaitée

**Quand désactiver :**
- Information Organization à petite échelle
- Pour économiser les coûts (2captcha est payant)
- Rencontres rares de captchas

### 3. Paramètres de langue

**Choisir en fonction de :**
- Votre langue maternelle
- La langue de votre public cible
- La langue du contenu (pour la bibliothèque de connaissances)

**Remarque :** La préférence de langue affecte uniquement l'interface utilisateur. L'IA peut traiter plusieurs langues indépendamment du paramètre.

### 4. Outils MCP

**Ajouter avec parcimonie :**
- N'ajoutez que les outils que vous utiliserez
- Chaque outil ajoute de la complexité
- Testez les outils individuellement

**Sécurité :**
- Utilisez uniquement des serveurs MCP de confiance
- Conservez les identifiants en toute sécurité
- Examinez les autorisations des outils

## Dépannage

### L'intégration du navigateur ne fonctionne pas

**Causes possibles :**
- Chemin du navigateur incorrect
- Navigateur non installé
- Problèmes d'autorisation

**Solutions :**
1. Vérifiez que le navigateur est installé
2. Vérifiez que le chemin du fichier est correct
3. Testez en lançant le navigateur directement
4. Exécutez aiFetchly avec des autorisations administrateur/sudo

### Le captcha n'est pas résolu

**Causes possibles :**
- Jeton 2Captcha invalide
- Fonds insuffisants
- Service désactivé

**Solutions :**
1. Vérifiez que le jeton 2Captcha est correct
2. Vérifiez le solde du compte
3. Assurez-vous que le commutateur 2Captcha est activé
4. Testez d'abord avec un captcha manuel

### Les paramètres ne sont pas enregistrés

**Causes possibles :**
- Base de données verrouillée
- Autorisations insuffisantes
- Erreur de l'application

**Solutions :**
1. Redémarrez aiFetchly
2. Exécutez en tant qu'administrateur/sudo
3. Consultez les journaux de l'application
4. Vérifiez que la base de données n'est pas en lecture seule

### Les outils MCP n'apparaissent pas

**Causes possibles :**
- Serveur mal configuré
- Échec du test de connexion
- Outils désactivés

**Solutions :**
1. Vérifiez la configuration du serveur
2. Testez la connexion
3. Vérifiez que le serveur est en cours d'exécution
4. Activez les outils individuels

## Configuration avancée

### Plusieurs modèles d'embedding

Configurez différents modèles d'embedding pour différents usages :

1. Accédez à **Configuration d'embedding**
2. Ajoutez plusieurs modèles
3. Définissez le modèle par défaut
4. Utilisez des modèles spécifiques par tâche

### Paramètres spécifiques à l'environnement

Différents paramètres pour différents environnements :

**Développement :**
- Désactiver la résolution de captchas
- Activer la journalisation de débogage

**Production :**
- Activer la résolution de captchas
- Désactiver la journalisation de débogage

## Considérations de sécurité

### Chemins des navigateurs

**Sécurité :**
- Utilisez uniquement des installations de navigateur fiables
- Vérifiez que les exécutables du navigateur sont légitimes
- Maintenez les navigateurs à jour
- Soyez prudent avec les versions de navigateur personnalisées

### Outils MCP

**Sécurité :**
- Connectez-vous uniquement à des serveurs MCP de confiance
- Examinez attentivement les autorisations des outils
- Utilisez l'authentification chaque fois qu'elle est disponible
- Surveillez l'utilisation des outils
- Révoquez l'accès lorsqu'il n'est plus nécessaire

## Gestion des compétences IA

Les compétences IA sont des extensions modulaires qui améliorent les capacités de chat IA d'aiFetchly. Les compétences peuvent être importées, activées/désactivées et utilisées dans l'Assistant Marketing IA.

Pour la documentation complète sur l'importation, la gestion et l'utilisation des compétences IA, consultez [Compétences IA](../ai-outreach/ai-skills).

## Prochaines étapes

Après avoir configuré les paramètres système :

- [Retour aux premiers pas](../getting-started/introduction)
- [Configurer votre première tâche de recherche](../lead-generation/search-engines)
- [Configurer les services de messagerie](../lead-generation/batch-email-sending)
- [En savoir plus sur l'Assistant Marketing IA](../ai-outreach/ai-marketing-assistant)

---

**Configuration terminée !** Votre aiFetchly est maintenant configuré et prêt à vous aider à générer des prospects et à automatiser vos flux de travail marketing.
