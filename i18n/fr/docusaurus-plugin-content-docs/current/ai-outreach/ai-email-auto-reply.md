---
id: ai-email-auto-reply
title: Réponse automatique aux e-mails par IA
sidebar_label: Réponse automatique aux e-mails par IA
description: Connectez votre boîte de réception, recevez des messages, rédigez des réponses IA dans la voix du propriétaire de la boîte, approuvez avant l'envoi et auditez tout ce que l'IA a fait.
---

# Réponse automatique aux e-mails par IA

La réponse automatique aux e-mails par IA boucle la boucle de votre prospection. aiFetchly se connecte à votre boîte aux lettres, reçoit les messages, les lit avec l'IA, rédige des réponses fondées sur votre [Bibliothèque de connaissances](./knowledge-library) et vous laisse approuver chaque réponse avant son envoi. Une fois configurée, aiFetchly peut aussi répondre automatiquement aux messages correspondant à une règle, dans des limites strictes et axées sur la sécurité, et enregistre chaque décision dans un journal d'audit consultable.

## Comment cela fonctionne

La fonction suit ce flux :

```text
Connecter une boîte de réception
  -> synchroniser les messages reçus
  -> l'IA lit, classe et résume chaque message
  -> brouillon de réponse fondé sur votre Bibliothèque de connaissances, rédigé dans la voix du propriétaire
  -> vous révisez et approuvez le brouillon (obligatoire)
  -> la réponse part depuis votre boîte d'envoi
  -> tout est enregistré dans le journal d'audit des réponses automatiques par IA
```

L'envoi n'est jamais silencieux. La rédaction, l'approbation, l'envoi, le passage, le blocage et les échecs sont tous consignés dans l'audit pour que vous puissiez toujours voir ce que l'IA a fait et pourquoi.

:::info Ce qui est inclus dans chaque version

La première version est la **réponse assistée** : l'IA rédige, mais chaque envoi exige votre approbation explicite (ou une confirmation approuvée dans le Chat IA). La **réponse automatique** fondée sur des règles — l'envoi automatique quand un message correspond à une règle configurée — est une capacité ultérieure et reste désactivée jusqu'à ce que vous l'activiez.

:::

## Prérequis

Avant d'utiliser la réponse automatique aux e-mails par IA, assurez-vous d'avoir :

1. **L'IA activée** sur votre compte. Consultez [Paramètres du fournisseur d'IA](../settings/ai-provider) pour configurer votre service d'IA.
2. **Un service de messagerie avec envoi (SMTP) configuré.** Les réponses partent via votre service de messagerie sortante existant.
3. **(Recommandé) Une [Bibliothèque de connaissances](./knowledge-library) avec des documents** sur vos produits, prix et processus. L'IA rédige de meilleures réponses, fondées sur des faits, quand elle peut chercher dans vos propres documents.
4. **Un accès IMAP (recommandé) ou POP3** à la boîte aux lettres depuis laquelle vous voulez recevoir. La plupart des fournisseurs prennent en charge IMAP ; certains proposent aussi POP3.

## Connecter une boîte de réception

Les paramètres de réception se trouvent dans la configuration du service de messagerie, à côté de vos paramètres d'envoi SMTP.

### Étape 1 : Ouvrez votre service de messagerie

1. Allez dans **Email Marketing** dans la navigation de gauche.
2. Ouvrez le service de messagerie (ou la liste **Email Services**) que vous utilisez pour envoyer.
3. Repérez la section **Receive Settings** (Paramètres de réception).

### Étape 2 : Configurez les paramètres de réception

| Paramètre | Description |
|-----------|-------------|
| **Protocole de réception** | `IMAP` (recommandé) ou `POP3`. IMAP prend en charge les dossiers et l'état lu/non lu ; POP3 est réservé aux fournisseurs sans IMAP. |
| **Hôte IMAP/POP3** | L'adresse du serveur de courrier entrant, par exemple `imap.gmail.com`. |
| **Port IMAP/POP3** | Le port du serveur entrant. Utilisez le port publié par votre fournisseur pour SSL/TLS. |
| **SSL/TLS** | Active la connexion chiffrée au serveur entrant. |
| **Nom d'utilisateur de réception** | En général votre adresse e-mail complète. |
| **Mot de passe de réception** | Le mot de passe de votre boîte aux lettres ou un mot de passe d'application. Il est stocké de façon sécurisée et jamais affiché après l'enregistrement. |
| **Dossier à surveiller** | `INBOX` par défaut. |
| **Réception activée** | Activez la boîte de réception quand vous êtes prêt à synchroniser. |

:::tip Utilisez un mot de passe d'application

De nombreux fournisseurs exigent un **mot de passe d'application** pour IMAP plutôt que votre mot de passe habituel (par exemple les mots de passe spécifiques de Gmail). Consultez la documentation de votre fournisseur si la connexion échoue.

:::

### Étape 3 : Testez la connexion

Avant d'activer la boîte de réception, utilisez le **test de connexion**. L'envoi SMTP et la réception entrante se testent **séparément**, afin d'isoler un problème d'envoi d'un problème de réception. Si le test échoue, corrigez la configuration et retestez.

Les identifiants ne sont jamais affichés après l'enregistrement, et ni la page de paramètres ni les outils IA n'exposent votre mot de passe.

## Synchroniser les messages reçus

Une fois la boîte de réception activée, récupérez des messages :

1. Ouvrez le service de messagerie avec réception activée.
2. Cliquez sur **Sync** (ou **Fetch Unread**).
3. aiFetchly se connecte à votre boîte aux lettres, télécharge un lot limité de messages non lus et les stocke localement.

Vos paramètres de réception peuvent aussi contrôler le comportement de la synchronisation, par exemple **non lus uniquement**, un **maximum de messages par synchronisation**, une **fenêtre de recul de synchronisation** et **marquer comme lu après traitement**.

### Liste des messages

Les messages synchronisés apparaissent dans une liste affichant :

- Compte de boîte de réception / service de messagerie
- Expéditeur
- Objet
- Heure de réception
- État lu/non lu
- Classification IA
- État de la réponse
- Dernière action

Utilisez les filtres pour vous concentrer sur l'essentiel : **Non lus**, **Réponse requise**, **Brouillon créé**, **Envoyé**, **Passé**, **Bloqué** et **Révision humaine**.

:::info Confidentialité par défaut

Les corps des messages sont assainis avant l'affichage. Les images distantes (pixels de suivi) sont désactivées par défaut, le HTML est nettoyé et les scripts ne sont jamais exécutés. aiFetchly stocke le message localement sur votre machine.

:::

## Rédiger une réponse IA

Ouvrez un message reçu pour voir son corps assaini, l'expéditeur et l'adresse de réponse, le résumé IA et sa recommandation.

La vue détaillée du message propose : **Generate draft** (Générer un brouillon), **Regenerate draft** (Régénérer le brouillon), **Edit draft** (Modifier le brouillon), **Send reply** (Envoyer la réponse), **Mark processed** (Marquer comme traité) et **Skip** (Passer).

### Générer un brouillon

Cliquez sur **Generate draft** (ou demandez-le à l'IA dans le Chat IA). La génération du brouillon :

1. Construit une requête de recherche à partir de l'objet, du corps, de l'expéditeur et de votre objectif.
2. Cherche dans votre [Bibliothèque de connaissances](./knowledge-library) les faits pertinents (sauf si vous la désactivez pour ce brouillon).
3. Rédige une réponse **dans la voix du propriétaire configuré**, fondée sur ces faits.
4. Enregistre le brouillon et consigne les sources utilisées dans le journal d'audit.

:::note Fondement dans la Bibliothèque de connaissances

L'IA utilise votre Bibliothèque de connaissances pour répondre avec des données précises propres à votre entreprise. Si elle ne trouve rien de pertinent, le brouillon est quand même généré mais clairement marqué dans les métadonnées d'audit comme rédigé **sans** l'appui de la bibliothèque de connaissances ; cette note n'apparaît jamais dans le corps du message.

:::

### Voix du propriétaire

Les réponses sont rédigées pour sonner comme celles du vrai propriétaire de la boîte, pas comme celles d'un système d'IA. Configurez le **profil d'identité de réponse** du service de messagerie :

- Nom affiché du propriétaire
- Rôle / contexte de l'entreprise
- Ton préféré
- Signature
- Notes de style et formulations habituelles
- Ce qu'il ne faut jamais dire
- S'il faut préciser qu'une réponse est automatisée (désactivé par défaut)

L'IA ne mentionnera pas qu'elle est une IA, un modèle, un robot ou un système automatisé sauf si vous configurez cette divulgation. Elle ne révèle jamais dans la réponse les invites internes, les documents récupérés ni les scores de confiance.

### Réviser et modifier

Les brouillons **vous sont toujours présentés avant tout envoi**. Modifiez le brouillon, régénérez-le ou ajustez le ton et l'objectif. Une modification crée une nouvelle révision ; une approbation donnée précédemment ne s'applique plus, vous approuvez donc à nouveau avant l'envoi.

## Approuver et envoyer une réponse

Envoyer une réponse **exige votre approbation explicite** dans la première version ; il n'y a pas d'envoi automatique silencieux.

1. Dans la vue du brouillon, confirmez le destinataire, l'expéditeur, l'objet et le corps.
2. Cliquez sur **Send** (ou approuvez la confirmation `send_email_reply` dans le Chat IA).
3. La réponse part via votre service de messagerie sortante configuré avec les bons en-têtes de réponse (`In-Reply-To`, `References`), afin que la conversation reste dans le même fil.

Après l'envoi, le message et le brouillon passent à **Sent** (Envoyé) et le résultat est écrit dans le journal d'audit.

### États de livraison

| État | Signification |
|------|---------------|
| **Sent** (Envoyé) | Le fournisseur a accepté la réponse. |
| **Send failed** (Échec de l'envoi) | Le fournisseur a rejeté la réponse ; l'erreur est enregistrée et rien n'est marqué comme envoyé. |
| **Delivery unknown; verify mailbox** (Livraison inconnue ; vérifier la boîte) | Le résultat après l'envoi est incertain (par exemple un délai d'attente). La réponse n'est **pas** automatiquement renvoyée. Vérifiez votre boîte et réconciliez manuellement. |

L'autorisation d'envoi est liée à la révision exacte du brouillon que vous avez approuvée. Toute modification après approbation l'invalide, et un brouillon bloqué ou en échec n'est jamais envoyé.

## Utiliser la réponse automatique aux e-mails par IA dans le Chat IA

L'assistant IA peut travailler sur votre boîte de réception sous forme de séquence d'outils intégrés :

```text
list_email_inboxes        -> voir quelles boîtes existent (sans exposer de secrets)
fetch_unread_emails       -> récupérer un lot de messages non lus
get_email_message         -> lire un message en détail
knowledge_library_search  -> trouver des faits pertinents dans votre Bibliothèque de connaissances
create_email_reply_draft  -> rédiger un brouillon de réponse (n'envoie jamais)
send_email_reply          -> envoyer ; nécessite une confirmation
mark_email_processed      -> marquer un message comme passé ou bloqué
```

Le chat affiche chaque étape : lecture des métadonnées de la boîte, lecture du corps d'un message, recherche dans la Bibliothèque de connaissances, création d'un brouillon, attente de confirmation, envoi ou passage d'un message qu'une politique de sécurité bloque.

## Le journal d'audit des réponses automatiques par IA

Ouvrez **AI Auto Replies** (Réponses automatiques par IA, sous Email Marketing) pour voir tout ce que l'IA a traité :

- Objet et expéditeur du message reçu
- Service de messagerie / boîte aux lettres
- Classification IA
- **État de la décision** et motif
- Requête de recherche dans la Bibliothèque de connaissances et nombre de sources
- Aperçu du brouillon et aperçu de la réponse envoyée
- Heure d'envoi / heure de la décision
- Si une approbation était requise
- Message d'erreur quand un envoi échoue

### États de décision

| État | Signification |
|------|---------------|
| `draft_created` | Un brouillon a été généré. |
| `approval_required` | Un brouillon attend votre approbation. |
| `auto_sent` | Le message correspondait à une règle et a reçu une réponse automatique. |
| `blocked` | Une politique de sécurité a stoppé la réponse. |
| `skipped` | Le message a été marqué comme n'ayant pas besoin de réponse. |
| `failed` | La rédaction ou l'envoi a échoué. |
| `needs_human_review` | L'IA n'a pas pu décider en toute sécurité et vous l'a signalé. |

Filtrez par état, intervalle de dates, service de messagerie, classification et expéditeur, ou recherchez par objet, expéditeur ou motif de la décision. Une vue de détail montre le message original, les aperçus généré et envoyé, la recherche de connaissances utilisée, le motif de la décision et l'état d'approbation.

## Règles de réponse automatique (automatisation)

La réponse automatique fondée sur des règles est désactivée par défaut. Quand vous l'activez pour une boîte de réception, vous configurez :

- **Classifications autorisées** pouvant répondre automatiquement (par exemple `interested`)
- **Seuil de confiance** que doit atteindre la classification
- **Modèles d'expéditeur / de domaine bloqués**
- **Limite d'envoi quotidienne** et **limite de réponses par fil**
- **Heures de silence** et si une approbation est requise sous le seuil
- **Ne jamais répondre automatiquement aux messages automatisés**

L'envoi automatique n'a lieu que lorsque toutes les conditions sont remplies. Sinon, le message est rédigé (ou créé comme brouillon) et marqué `blocked`, `skipped` ou `needs_human_review` ; jamais envoyé dans votre dos.

### Prévention des boucles

La politique de sécurité ne répond automatiquement jamais quand le message :

- Est automatisé (`Auto-Submitted` défini), en masse ou issu d'une liste de diffusion
- Est un rebond ou une notification d'échec de livraison
- Provient de `no-reply`, `noreply`, `do-not-reply`, `mailer-daemon` ou `postmaster`
- Répète un fil qui a déjà reçu une réponse automatique d'aiFetchly
- Arrive d'un expéditeur dans la période de refroidissement configurée

### Garde-fous de contenu sain

Les réponses générées par IA n'incluent jamais :

- Des identifiants, jetons ou journaux internes
- Des prix non vérifiés, des affirmations juridiques ou des engagements
- Des mentions que le message a été écrit par l'IA ou assemblé avec des outils de récupération
- Des noms de sources de la Bibliothèque de connaissances, des scores de confiance ou des étiquettes internes
- Des pièces jointes (non prises en charge dans cette version)

La réponse peut utiliser **« je »** ou **« nous »** selon votre profil d'identité, et l'IA escalade vers une révision humaine quand une réponse exigerait des faits sensibles (remboursements, conseils juridiques, détails de compte).

## Dépannage

### Le test de connexion échoue

1. Vérifiez que l'hôte et le port correspondent à la documentation IMAP/POP3 de votre fournisseur.
2. Essayez avec **SSL/TLS activé** si votre fournisseur l'exige.
3. Utilisez un **mot de passe d'application** là où votre fournisseur l'exige.
4. Testez séparément l'envoi et la réception pour isoler le problème.

### Aucun message n'apparaît après la synchronisation

1. Vérifiez que la boîte de réception est **activée** et que le bon dossier (généralement `INBOX`) est surveillé.
2. La synchronisation récupère par défaut un lot limité de messages **non lus** ; vérifiez les paramètres de synchronisation.
3. Les synchronisations répétées ne dupliquent jamais les messages stockés ; les doublons par ID de message fournisseur sont mis à jour sur place.

### La rédaction échoue ou l'IA est indisponible

1. Assurez-vous que **l'IA est activée** sur votre compte et qu'un fournisseur d'IA est configuré ([Paramètres du fournisseur d'IA](../settings/ai-provider)).
2. Si la Bibliothèque de connaissances n'a pas de documents pertinents, les brouillons sont quand même créés avec un avertissement.
3. Vous pouvez relancer la génération ; les brouillons en échec conservent l'état du message inchangé.

### Un envoi reste à « Delivery unknown »

La réponse a peut-être atteint le destinataire ou non. Elle n'est jamais renvoyée automatiquement. Vérifiez votre dossier envoyés et réconciliez l'état manuellement depuis la vue détaillée de l'audit ou de la tentative d'envoi.

## Notes de sécurité et de confidentialité

- Les mots de passe des boîtes aux lettres sont chiffrés au repos, jamais affichés après l'enregistrement et jamais transmis aux outils IA.
- Le courrier entrant est traité comme **contenu client non fiable**. Les instructions contenues dans un e-mail ne peuvent jamais remplacer votre politique de sécurité, vos exigences d'approbation ni votre politique d'envoi.
- Toutes les lectures, recherches de connaissances, décisions de brouillon, approbations, blocages, passages, échecs et envois sont consignés dans l'audit.
- Les corps des messages sont assainis avant l'affichage, et les enregistrements d'audit ne stockent que des aperçus et des motifs ; jamais de corps complets, d'identifiants ni d'invites brutes.

## Prochaines étapes

- [Constituez votre Bibliothèque de connaissances](./knowledge-library) pour que les réponses reposent sur des faits précis de l'entreprise.
- [Rédigez vos modèles d'envoi](./ai-email-writer) et confirmez votre service de messagerie sortante.
- [Configurez votre fournisseur d'IA](../settings/ai-provider) si l'IA n'est pas encore activée.

---

**Prêt à boucler la boucle ?** Connectez une boîte de réception, activez la réception, synchronisez vos messages non lus et laissez l'IA rédiger votre première réponse — vous gardez le contrôle de chaque envoi.