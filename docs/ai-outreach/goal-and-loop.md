---
id: goal-and-loop
title: Goal and Loop Commands
sidebar_label: Goals & Loops
description: Define a durable goal with /goal and run bounded, evidence-driven autonomous work toward it with /loop in AI Chat V2.
---

# Goal and Loop Commands

The **`/goal`** and **`/loop`** slash commands let you give the AI Chat V2 assistant a durable objective and then ask it to keep working toward that objective in bounded, verifiable steps — instead of prompting it turn by turn.

`/goal` captures what "done" means, including explicit, checkable acceptance criteria. `/loop` then runs a limited number of autonomous iterations toward that goal, collecting fresh evidence and verifying each criterion before the goal can be marked complete.

:::info AI Chat V2 only

`/goal` and `/loop` are built-in slash commands available in the **[AI Chat V2](./ai-chat-v2)** composer. They require an active aiFetchly subscription with AI enabled, and they reuse AI Chat V2's existing [Plan Mode](./ai-chat-v2), tool-approval, and workspace-safety boundaries.

:::

## How the two commands relate

| Command | What it does | Requires |
|---|---|---|
| `/goal <objective>` | Creates or replaces the active conversation goal and enters Plan Mode. | A non-empty objective. |
| `/loop <maxIterations>` | Runs up to that many autonomous iterations toward the active goal. | An active goal already set with `/goal`. |

A typical flow:

```text
/goal Build a Facebook campaign scraper and verify it works
(approve the plan and its acceptance criteria in Plan Mode)
/loop 5
```

## `/goal` — set a durable objective

### Syntax

```text
/goal <objective>
```

Example:

```text
/goal Build a Facebook campaign scraper and verify it works
```

### What happens

1. The objective becomes the **active goal** for the current conversation.
2. AI Chat enters **Plan Mode**. The assistant asks clarifying questions when the objective is ambiguous.
3. The assistant proposes a plan that includes one or more **acceptance criteria** — concrete, checkable conditions that define what "done" means.
4. You approve (or reject or request changes to) the plan through the normal Plan Mode approval flow.
5. The goal stays active for the conversation until it is **completed**, **blocked**, or **cancelled**.

Running `/goal` again replaces the current active goal.

### Acceptance criteria and verification

Each acceptance criterion is verified automatically — the goal is not complete just because the assistant says it is. Every criterion has a verification method:

| Method | How the criterion is checked |
|---|---|
| **command** | A command exits successfully, optionally matching an expected exit code or output pattern. |
| **file** | An expected file or project state is present, for example a file exists or has changed. |
| **manual** | The loop pauses and asks you to confirm. |
| **llm** | An independent verifier evaluates the collected evidence for criteria that cannot be checked deterministically. |

A criterion can be marked **required** or optional. The goal can be marked complete only when **every required criterion** passes with fresh evidence.

:::tip Write checkable objectives

`/goal` works best when "done" is something the app can verify. An objective like "build the scraper and verify it works" — with a criterion such as "the test command exits 0" — is far more reliable than a subjective one like "make the scraper good".

:::

## `/loop` — run bounded iterations

### Syntax

```text
/loop <maxIterations>
```

`<maxIterations>` is an integer from **1 to 10**. Provide it explicitly — if you omit it or pass a value outside that range, `/loop` asks for a valid count. `/loop` also **requires an active goal**; if you have not set one, it tells you to run `/goal` first.

Example:

```text
/loop 5
```

### What each iteration does

Every iteration runs the same observe → act → verify cycle:

```text
Observe current state
  → the assistant proposes one bounded next action
  → approved tools execute it
  → the system collects fresh evidence
  → deterministic checks run first
  → an independent verifier evaluates any remaining criteria
  → the loop continues, completes, blocks, or asks for input
```

Progress is shown in the conversation as the loop runs — iteration count, collected evidence summaries, and per-criterion verification results.

### When the loop stops

`/loop` never runs forever. It stops as soon as any of these is true:

- You press **Stop**.
- The maximum iteration count is reached.
- The per-run time limit is reached.
- The goal is **complete** — every required criterion passed with fresh evidence.
- A tool needs your approval, or Plan Mode needs approval.
- The assistant needs to ask you a question.
- The same failure repeats enough times, so the goal becomes **blocked**.
- The verifier returns `blocked` or `needs_user_input`.
- An unrecoverable error occurs.

### How completion is decided

The assistant that does the work **cannot mark its own goal complete** by declaration. Completion requires **fresh, criterion-specific evidence** — for example, a test that passed *after* the most recent code change, not a stale result from before it.

Deterministic checks (commands, file state) run first. The independent LLM verifier is used only for criteria that cannot be checked deterministically, and it returns structured verdicts (`satisfied`, `not_satisfied`, `blocked`, `needs_user_input`) tied to specific evidence — never a free-text "done".

## Goal and loop status

A goal moves through these states:

| Status | Meaning |
|---|---|
| **draft** | The goal is being defined in Plan Mode. |
| **active** | Approved and waiting to be run or continued. |
| **running** | A `/loop` is executing an iteration. |
| **complete** | All required criteria passed with fresh evidence. |
| **blocked** | Repeated failures or an unresolved blocker — needs your attention. |
| **needs_user_input** | The loop paused to ask you a question or get confirmation. |
| **failed** | An unrecoverable error ended the run. |
| **cancelled** | You stopped it. |

## Limits and safety

| Limit | Value |
|---|---|
| Iteration count (`/loop`) | 1–10 (provide it explicitly) |
| Per-run wall-clock cap | 10 minutes (default) |
| Identical failures before **blocked** | 3 |
| Active goals per conversation | One (setting a new goal replaces the old one) |

Safety guarantees that always apply:

- The loop is **always bounded** — never infinite.
- It is **always cancellable** (press Stop).
- **AI enablement**, tool-approval mode, Plan Mode, and workspace/file safety boundaries all continue to apply during a loop.
- Destructive actions, new dependencies, authentication changes, and other high-impact side effects still require the normal approval boundary — even mid-loop.
- Evidence and logs shown to the verifier are scoped, size-capped, and redacted of secrets, and treated as untrusted data — never as instructions.

## Tips

### DO ✅

- **Set a goal before looping** — `/loop` always needs an active `/goal`.
- **Make objectives verifiable** — prefer criteria the app can check (a command, a file) over subjective ones.
- **Start with a small count** (`/loop 3`) to inspect progress before committing to more.
- **Keep Plan Mode on** for goals that modify files, send outreach, or run many tool calls.

### DON'T ❌

- **Don't expect unbounded autonomy** — `/loop` always needs an explicit 1–10 count.
- **Don't trust a bare "done"** — completion is evidence-driven; if a required criterion did not pass, the goal is not complete.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| *"Set a goal first with /goal"* | No active goal in this conversation | Run `/goal <objective>` and approve the plan first. |
| *"Please provide an iteration count"* | `/loop` was called with no number | Provide a count, for example `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Count is missing, zero, or above 10 | Use an integer from 1 to 10. |
| Goal is **blocked** | The same failure repeated (default 3 times) | Read the failure reason in the conversation, address the root cause, then `/loop` again or adjust the goal. |
| Goal stays **needs_user_input** | The loop is waiting for your answer or approval | Respond to the prompt or approve the pending action. |
| Loop stopped early | Approval, plan approval, or a question was required | Approve the pending item and run `/loop` again to continue. |

## Next steps

- [AI Chat V2](./ai-chat-v2) — the chat where `/goal` and `/loop` live, including Plan Mode.
- [Slash Commands](./slash-commands) — the full built-in command list and how to author your own.
- [Subagents](./subagents) — scoped specialists the assistant can delegate to during a loop.
