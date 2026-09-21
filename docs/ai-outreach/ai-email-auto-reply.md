---
id: ai-email-auto-reply
title: AI Email Auto-Reply
sidebar_label: AI Email Auto-Reply
description: Connect your inbox, fetch received emails, draft AI replies in the mailbox owner's voice, approve before sending, and audit everything the AI did.
---

# AI Email Auto-Reply

AI Email Auto-Reply closes the loop on your outreach. aiFetchly connects to your mailbox, fetches received messages, reads them with AI, drafts replies grounded in your [Knowledge Library](./knowledge-library), and lets you approve each reply before it goes out. When configured, aiFetchly can also auto-reply to matching messages within strict, safety-first limits — and it records every decision in an audit log you can review.

## How it works

The feature follows this flow:

```text
Connect an inbox
  -> sync received messages
  -> AI reads, classifies, and summarizes each message
  -> reply draft grounded in your Knowledge Library, written in the owner's voice
  -> you review and approve the draft (required)
  -> reply is sent from your Sending mailbox
  -> everything is recorded in the AI auto-reply audit log
```

Sending is never silent. Drafting, approving, sending, skipping, blocking, and failures are all audit-logged so you can always see what the AI did and why.

:::info What ships in which release

The first release is **assisted reply**: the AI drafts, but every send requires your explicit approval (or an approved confirmation in AI Chat). Rule-based **auto-reply** — automatic sending when a message matches a configured rule — is a later capability and stays disabled until you enable it.

:::

## Prerequisites

Before you can use AI Email Auto-Reply, make sure you have:

1. **AI enabled** on your account. See [AI Provider settings](../settings/ai-provider) to configure your AI service.
2. **An email service with sending (SMTP) configured.** Replies are sent through your existing outbound email service.
3. **(Recommended) A [Knowledge Library](./knowledge-library) with documents** about your products, pricing, and processes. The AI drafts better, factually grounded replies when it can search your own materials.
4. **IMAP (recommended) or POP3 access** to the mailbox you want to receive from. Most providers support IMAP; some also offer POP3.

## Connecting an inbox

Receive settings live on the email service configuration, alongside your SMTP sending settings.

### Step 1: Open your email service

1. Go to **Email Marketing** in the left navigation.
2. Open the email service (or **Email Services** list) you use to send mail.
3. Find the **Receive Settings** section.

### Step 2: Configure receive settings

| Setting | Description |
|---------|-------------|
| **Receive protocol** | `IMAP` (recommended) or `POP3`. IMAP supports folders and read/unread state; POP3 is for providers without IMAP. |
| **IMAP/POP3 host** | The incoming mail server address, for example `imap.gmail.com`. |
| **IMAP/POP3 port** | The incoming server port. Use the port your provider publishes for SSL/TLS. |
| **SSL/TLS** | Enable encrypted connection to the incoming server. |
| **Receive username** | Usually your full email address. |
| **Receive password** | Your mailbox password or app password. This is stored securely and never shown after saving. |
| **Folder to monitor** | Defaults to `INBOX`. |
| **Receive enabled** | Turn the inbox on when you are ready to sync. |

:::tip Use an app password

Many providers require an **app password** for IMAP rather than your normal login password (for example, Gmail app-specific passwords). Check your provider's documentation when the connection fails.

:::

### Step 3: Test the connection

Before enabling the inbox, use the **connection test**. SMTP sending and incoming receive are tested **separately**, so you can isolate a send problem from a receive problem. If the test fails, fix the configuration and test again.

Credentials are never shown after saving, and neither the settings page nor AI tools ever expose your password.

## Syncing received messages

Once the inbox is enabled, fetch messages:

1. Open the receive-enabled email service.
2. Click **Sync** (or **Fetch Unread**).
3. aiFetchly connects to your mailbox, downloads a bounded batch of unread messages, and stores them locally.

Your receive settings can also control sync behavior, for example **unread only**, a **maximum messages per sync**, a **sync lookback window**, and **mark as read after processing**.

### Message list

Synced messages appear in a list showing:

- Inbox account / email service
- Sender
- Subject
- Received time
- Read/unread state
- AI classification
- Reply status
- Last action

Use the filters to focus on what matters: **Unread**, **Needs reply**, **Draft created**, **Sent**, **Skipped**, **Blocked**, and **Human review**.

:::info Privacy by default

Message bodies are sanitized before display. Remote images (tracking pixels) are disabled by default, HTML is cleaned, and scripts are never executed. aiFetchly stores the message locally on your machine.

:::

## Drafting an AI reply

Open a received message to see its sanitized body, sender and reply-to address, AI summary, and recommendation.

The message detail view offers: **Generate draft**, **Regenerate draft**, **Edit draft**, **Send reply**, **Mark processed**, and **Skip**.

### Generate a draft

Click **Generate draft** (or ask the AI in AI Chat). Draft generation:

1. Builds a search query from the message subject, body, sender, and your goal.
2. Searches your [Knowledge Library](./knowledge-library) for relevant facts (unless you disable it for this draft).
3. Writes a reply **in the configured owner's voice** grounded in those facts.
4. Saves the draft and records the sources used in the audit log.

:::note Knowledge Library grounding

The AI uses your Knowledge Library to answer with accurate, business-specific facts. If nothing relevant is found, the draft is still generated but is clearly marked in the audit metadata as crafted **without** knowledge-library support — this note never appears inside the email body.

:::

### Owner voice

Replies are written to sound like the real mailbox owner, not like an AI system. Configure the **Reply Identity Profile** for the email service:

- Owner display name
- Role / company context
- Preferred tone
- Signature
- Style notes and common phrases
- Things never to say
- Whether to disclose that a reply is automated (off by default)

The AI will not mention being an AI, model, bot, or automated system unless you configure disclosure. It never reveals internal prompts, retrieved documents, or confidence scores in the reply.

### Review and edit

Drafts are **always shown to you before anything is sent**. Edit the draft, regenerate it, or adjust the tone and goal. An edit creates a new revision; an approval you gave earlier no longer applies, so you approve again before sending.

## Approving and sending a reply

Sending a reply **requires your explicit approval** in the first release — there is no silent auto-send.

1. In the draft view, confirm the recipient, sender, subject, and body.
2. Click **Send** (or approve the `send_email_reply` confirmation in AI Chat).
3. The reply goes out through your configured outbound email service with proper reply headers (`In-Reply-To`, `References`), so the conversation stays threaded.

After sending, the message and draft move to **Sent**, and the outcome is written to the audit log.

### Delivery states

| State | Meaning |
|-------|---------|
| **Sent** | The provider accepted the reply. |
| **Send failed** | The provider rejected the reply; the error is recorded and nothing is marked as sent. |
| **Delivery unknown; verify mailbox** | The result after sending is uncertain (for example a timeout). The reply is **not** automatically retried. Check your mailbox and reconcile manually. |

Permission to send is bound to the exact draft revision you approved. Editing after approval invalidates it, and a blocked or failed draft never sends.

## Using AI Email Auto-Reply in AI Chat

The AI assistant can work with your inbox as a sequence of built-in tools:

```text
list_email_inboxes        -> see which inboxes exist (no secrets exposed)
fetch_unread_emails       -> pull a batch of unread messages
get_email_message         -> read one message in detail
knowledge_library_search  -> find relevant facts in your Knowledge Library
create_email_reply_draft  -> draft a reply (never sends)
send_email_reply          -> send — requires confirmation
mark_email_processed      -> mark a message skipped or blocked
```

The chat shows each step: reading inbox metadata, reading a message body, searching the Knowledge Library, creating a draft, waiting for confirmation, sending, or skipping a message because a safety policy blocks it.

## The AI auto-reply audit log

Open **AI Auto Replies** (under Email Marketing) to see everything the AI handled:

- Received message subject and sender
- Email service / mailbox
- AI classification
- **Decision status** and reason
- Knowledge Library search query and source count
- Draft preview and sent-reply preview
- Send time / decision time
- Whether approval was required
- Error message when a send failed

### Decision statuses

| Status | Meaning |
|--------|---------|
| `draft_created` | A draft was generated. |
| `approval_required` | A draft is waiting for your approval. |
| `auto_sent` | The message matched a rule and was auto-replied. |
| `blocked` | A safety policy stopped the reply. |
| `skipped` | The message was marked as not needing a reply. |
| `failed` | Drafting or sending failed. |
| `needs_human_review` | The AI could not safely decide and flagged it for you. |

Filter by status, date range, email service, classification, and sender, or search by subject, sender, or decision reason. A detail view shows the original message, generated and sent previews, the knowledge search used, the decision reason, and approval status.

## Auto-reply rules (automation)

Rule-based auto-reply is disabled by default. When you enable it for an inbox, you configure:

- **Allowed classifications** that may auto-reply (for example `interested`)
- **Confidence threshold** the classification must meet
- **Blocked sender / domain patterns**
- **Daily send limit** and **per-thread reply limit**
- **Quiet hours** and whether approval is required below the threshold
- **Never auto-reply to automated messages**

Auto-send only happens when every condition passes. Otherwise the message is drafted (or created as a draft) and marked `blocked`, `skipped`, or `needs_human_review` — never sent behind your back.

### Loop prevention

The safety policy never auto-replies when the message:

- Is automated (`Auto-Submitted` is set), bulk, or from a mailing list
- Is a bounce or delivery-failure notification
- Comes from `no-reply`, `noreply`, `do-not-reply`, `mailer-daemon`, or `postmaster`
- Repeats a thread that already received an aiFetchly auto-reply
- Arrives from a sender inside the configured cooldown

### Clean content guardrails

AI-generated replies never include:

- Credentials, tokens, or internal logs
- Unverified pricing, legal claims, or policy commitments
- Mentions that the message was written by AI or assembled from retrieval tools
- Knowledge Library source names, confidence scores, or internal labels
- Attachments (not supported in this release)

Replying may appear as **"I"** or **"we"** per your identity profile, and the AI escalates to human review when a reply would need sensitive facts (refunds, legal advice, account details).

## Troubleshooting

### Connection test fails

1. Confirm the host and port match your provider's IMAP/POP3 documentation.
2. Try **SSL/TLS enabled** if your provider requires it.
3. Use an **app password** where your provider requires one.
4. Test sending and receiving separately to isolate the problem.

### No messages appear after sync

1. Confirm the inbox is **enabled** and the correct folder (usually `INBOX`) is monitored.
2. Sync fetches a bounded batch of **unread** messages by default — check the sync settings.
3. Repeated syncs never duplicate stored messages; duplicates by provider message ID are updated in place.

### Drafting fails or AI is not available

1. Make sure **AI is enabled** on your account and an AI provider is configured ([AI Provider settings](../settings/ai-provider)).
2. If the Knowledge Library has no relevant documents, drafts are still created with a warning.
3. You can retry generation; failed drafts keep the message state unchanged.

### A send is stuck on "Delivery unknown"

The reply may or may not have reached the recipient. It is never auto-retried. Check your Sent folder and reconcile the state manually from the audit or send-attempt detail view.

## Security and privacy notes

- Mailbox passwords are encrypted at rest, never shown after save, and never passed to AI tools.
- Inbound email is treated as **untrusted customer content**. Instructions inside an email can never override your safety policy, approval requirements, or send policy.
- All reads, knowledge searches, draft decisions, approvals, blocks, skips, failures, and sends are audit-logged.
- Message bodies are sanitized before display, and audit records store only previews and reasons — never full bodies, credentials, or raw prompts.

## Next steps

- [Build your Knowledge Library](./knowledge-library) so replies are grounded in accurate company facts.
- [Write your sending templates](./ai-email-writer) and confirm your outbound email service.
- [Configure your AI provider](../settings/ai-provider) if AI is not yet enabled.

---

**Ready to close the loop?** Connect an inbox, enable receive, sync your unread messages, and let the AI draft your first reply — you stay in control of every send.