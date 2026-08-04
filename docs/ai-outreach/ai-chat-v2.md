---
id: ai-chat-v2
title: AI Chat V2
sidebar_label: AI Chat V2
description: The next-generation AI chat with Plan Mode, live context tracking, subagents, and inline plan approval.
---

# AI Chat V2

AI Chat V2 is the redesigned AI assistant. It keeps everything the legacy AI Marketing Assistant does — Knowledge Library context, MCP tools, AI Skills — and adds a cleaner composer, **Plan Mode**, a **live context-usage badge**, **inline plan approval**, **subagents**, and a **file operations panel**.

V2 and the legacy assistant run side by side. If the V2 feature flag is on, clicking the chat icon (or pressing `Ctrl/Cmd + K`) opens V2.

## What's new in V2

| Feature | What it does |
|---|---|
| **Plan Mode** | Ask the AI to draft a step-by-step plan and approve it before any tool runs. |
| **Context-usage badge** | Live `CTX %` indicator so you know how close you are to the model's context limit. |
| **Inline plan approval** | Plan card renders inside the message flow with Approve / Reject / Request Changes. |
| **Subagents** | The AI can dispatch a specialist (e.g. Lead Researcher) with its own tool budget and output schema. |
| **File operations panel** | Collapsible panel above the composer lists every file the AI just read or changed. |
| **Streaming reconnect** | If the stream drops, V2 retries and shows a reconnect indicator instead of silently hanging. |
| **Typing indicator** | Visible while the AI is thinking or running a tool. |
| **Stop button** | Cancels the in-flight stream and any running tool call. |
| **Slash commands** | Type `/` in the composer to run actions (`/clear`, `/status`, `/plugin`) or expand reusable prompt templates you create yourself. See [Slash Commands](./slash-commands). |
| **Voice** | Speak your message and hear the AI reply — on-device speech-to-text and text-to-speech. See [Voice](#voice). |

## Opening V2

1. Click the **chat icon** in the header, or press `Ctrl + K` (Windows/Linux) / `Cmd + K` (macOS).
2. If V2 is enabled, the V2 panel slides in from the right.
3. To switch back to the legacy assistant for a session, turn the V2 flag off in `localStorage` (`aifetchly:aiChatV2Enabled`).

:::tip Resizing the panel

Drag the left edge of the panel to resize. The panel remembers its width for the session.

:::

## Chat Mode vs Plan Mode

Use the **mode dropdown** above the composer to switch between two modes.

### Chat Mode (default)

Behaves like the legacy assistant: you ask, the AI answers, tools run as needed. Best for Q&A, content drafting, and quick lookups.

### Plan Mode

Plan Mode adds an approval gate before the AI executes anything destructive or long-running.

1. Switch the mode selector to **Plan**.
2. Describe the objective (e.g. "Research these 5 leads and draft outreach for each").
3. The AI drafts a plan — a markdown document with the steps it intends to take.
4. The plan appears as an inline card with status, version, and objective.
5. Choose:
   - **Approve** — the AI begins executing the plan immediately.
   - **Reject** — send a reason; the AI stops and revises.
   - **Request Changes** — ask for edits without rejecting outright.
6. While executing, the AI streams progress and tool output back into the conversation.

:::info When to use Plan Mode

Turn Plan Mode on for any task that runs many tool calls, modifies files, sends outreach, or costs significant credits. For "what's a good subject line?" — stay in Chat Mode.

:::

### Plan statuses

| Status | Meaning |
|---|---|
| **Draft** | The AI is still composing the plan. |
| **Awaiting Answer** | The AI asked a clarifying question before finalizing. |
| **Awaiting Approval** | The plan is ready — waiting for you to Approve / Reject. |
| **Approved** | You approved; execution is in progress or finished. |
| **Rejected** | You rejected with feedback. |
| **Completed** | The plan finished successfully. |
| **Cancelled** | The plan was cancelled (by you or by an error). |

## The context-usage badge

Next to the mode selector, a small badge shows **`CTX <percent>%`**. This is how much of the model's context window the current conversation is using.

| Tone | Range | What it means |
|---|---|---|
| Low (grey) | 0–49% | Plenty of room. |
| Mid (yellow) | 50–79% | Getting fuller. |
| High (orange) | 80–94% | Consider starting a new conversation soon. |
| Critical (red) | 95–100% | Near the limit — long messages may be truncated or auto-compacted. |

When the badge hits Critical, start a new conversation or let the AI compact the session (see below).

## Subagents

A subagent is a scoped specialist the main AI can dispatch to handle a well-defined job. Each subagent has:

- A **system prompt** tuned for its job
- A **tool allowlist** (a subset of the AI's available tools)
- An **output schema** (the subagent must return JSON matching the schema)
- **Budgets**: max tool calls, max runtime, max continuation turns

### Built-in: Lead Researcher

The Lead Researcher subagent gathers public business context for a lead. It is allowed to use `google_search`, `scrape_urls_from_search_engine`, and `knowledge_library_search`. It returns a structured object with:

- `businessSummary`
- `productsOrServices`
- `targetCustomerHints`
- `marketSignals`
- `sourceUrls` (every claim must be source-backed)
- `confidence` (0–1)

You don't invoke subagents directly — the main AI decides when to dispatch one. To nudge it, ask something like: *"Research the lead at acme.com using the Lead Researcher."*

:::tip Subagents are scoped

A subagent can only use the tools in its allowlist. It cannot send emails, post on social media, or modify records. Its output is evidence for the main AI to act on — not an action of its own.

:::

## File operations panel

Above the composer, a collapsible panel shows every file the AI has just read or written in the current turn. Each entry is a chip you can click to open the file (or a diff view for edited files).

Use it to:

- Verify what the AI actually changed before you trust the result.
- Jump straight to a file the AI mentioned without hunting for it.
- Roll your eyes at the AI for editing the wrong file. (It happens.)

## Skills, MCP, and Knowledge Library in V2

V2 uses the same Skills, MCP servers, and Knowledge Library as the legacy assistant:

- **[AI Skills](./ai-skills)** — installed from the Skills page or via the Plugin Manager; appear automatically as tools in V2.
- **[MCP Tools](./mcp-tools)** — click the **MCP Tools** button in the V2 header to add or manage external MCP servers.
- **[Knowledge Library](./knowledge-library)** — toggle RAG context the same way as in the legacy assistant.

## Permissions and "Always Allow"

When the AI wants to run a tool that needs approval, V2 shows an inline approval card with two options:

- **Allow once** — runs this one time.
- **Always allow** — remembers the decision.

For most skill categories, **Always Allow** is remembered permanently. For the **shell execution** category, **Always Allow** is **session-only** for safety — the next time you restart the app, the AI will ask again.

:::warning Shell is always session-scoped

The AI can run shell commands only with your explicit approval. Even if you click "Always Allow" for shell, the permission expires when you close the app. This is intentional.

:::

## Streaming, stopping, and reconnects

- **Typing indicator**: a small spinner appears while the AI is producing a response or running a tool.
- **Stop button**: replaces the Send button while streaming. Click it to cancel the response and any in-flight tool call. The UI resets immediately.
- **Reconnect**: if the stream drops mid-response, V2 retries automatically and shows a reconnect indicator. If reconnect fails, the last partial message stays visible so you can decide whether to resend.

## Compact (auto-summarize) long sessions

When a conversation approaches the context limit, V2 can compact the session: it summarizes earlier turns into a shorter form so the conversation can continue without losing key context. The compact runs as its own background task; you'll see a notice when it happens.

## Slash commands

Type `/` at the start of the composer to open the slash-command menu. Built-in commands like `/clear`, `/help`, `/status`, and `/plugin` run instantly, and you can create your own reusable prompt templates (for example `/outreach <website>`) as Markdown files in `~/.aifetchly/commands/`. See the dedicated **[Slash Commands](./slash-commands)** page for the full list, custom-command authoring, and the keyboard shortcuts. For bounded autonomous work, use **`/goal`** to set a verifiable objective and **`/loop`** to run iterations toward it; to monitor something over time, use **`/loop 5m <prompt>`** to re-run a prompt on a fixed interval in the same chat — see [Goal and Loop Commands](./goal-and-loop).

## Voice

AI Chat V2 supports **voice input** (speech-to-text) and **spoken responses** (text-to-speech). Both run **on your device** using the `sherpa-onnx` speech engine — your microphone audio is processed locally and is not sent to a server.

Voice is off by default. Turn it on in **[AI Provider → Voice settings](../settings/ai-provider#voice-settings)**.

### Speak to the AI (voice input)

When voice input is enabled, a **microphone button** appears in the composer:

1. Click the mic to **start recording** (push-to-talk). Click again (or the stop control) to stop.
2. The composer shows a recording state while you speak. Recording auto-stops at the maximum duration (default 60 seconds).
3. After you stop, aiFetchly transcribes your speech locally and inserts the transcript into the composer as editable text.
4. Review or edit the transcript, then send it as usual.

:::tip Auto-send

Enable **Send voice transcript automatically** in voice settings to send the transcript the moment transcription finishes, skipping the review step.

:::

The transcript becomes a normal chat message — stored and sent as text, exactly like a typed message.

The first time you use voice input, aiFetchly downloads the speech model (a one-time download). If the model isn't installed yet, the mic button shows a **missing model** state with an install action.

### Hear the AI reply (spoken responses)

The **volume button** in the chat header toggles spoken responses on and off:

- **On** (highlighted): the AI's text replies are read aloud as they stream.
- **Off**: silent — replies appear as text only.

aiFetchly reads only the natural-language reply — not code blocks, tool calls, tables, or permission prompts.

:::note Speak only after voice input

In voice settings you can set the AI to speak **only its replies to your voice messages** (a hands-free back-and-forth) instead of every reply.

:::

While the AI is speaking, a **stop-speaking** control lets you halt playback. Starting a new voice recording, switching conversations, or clicking the chat **Stop** button also stops speech.

### Voice doesn't grant chat access

Speech recognition and synthesis are local and free, but to send a message and get a reply you still need chat access — either an aiFetchly AI subscription (Hosted) or a working [custom/local provider](../settings/ai-provider). If no chat model is available, your speech can still be transcribed locally, but the message can't be sent until chat is available.

## Tips for getting the most out of V2

### DO ✅

- **Use Plan Mode** for multi-step or destructive tasks.
- **Watch the CTX badge** — start a new conversation before it goes red.
- **Approve skills you trust** with "Always Allow" to reduce prompts (except shell).
- **Check the file operations panel** after any tool-heavy turn.
- **Reference the Lead Researcher by name** when you want structured lead data.

### DON'T ❌

- **Don't approve shell execution blindly** — read the command first.
- **Don't keep a 200-turn session alive** — start fresh when the CTX badge climbs.
- **Don't expect subagents to send outreach** — they only gather and return data.
- **Don't ignore the plan card** — approving skips your last chance to redirect.

## Troubleshooting

### Plan Mode won't activate

- Confirm the mode dropdown is set to **Plan**.
- If the dropdown is missing, the V2 flag is off. Re-enable via `localStorage`.

### The AI isn't dispatching the Lead Researcher

- The AI dispatches subagents only when it judges them necessary. Ask explicitly: *"Use the Lead Researcher for this."*
- The subagent only runs if its required tools are enabled (Google search, URL scraper, Knowledge Library).

### Context badge stays red

- Start a new conversation, or let auto-compact run.
- Disable RAG context if the Knowledge Library is pulling in too much text.

### Tool approval keeps prompting after "Always Allow"

- You're using a **shell** skill. Shell approvals are session-only by design.
- The skill may have been re-installed, which resets its permission grants.

## Next steps

- [Slash Commands](./slash-commands) — run actions and reusable prompts with `/`.
- [AI Marketing Assistant](./ai-marketing-assistant) — the legacy chat, still supported.
- [Plugin Manager](./plugin-manager) — install plugins from local folder, git, GitHub, npm, or URL.
- [AI Skills](./ai-skills) — what skills are and how to use them.
- [MCP Tools](./mcp-tools) — connecting external services.
