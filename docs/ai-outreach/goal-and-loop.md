---
id: goal-and-loop
title: Goal and Loop Commands
sidebar_label: Goals & Loops
description: Define a durable goal with /goal, run bounded iterations toward it with /loop, and re-run a prompt on a fixed interval with /loop 5m in AI Chat V2.
---

# Goal and Loop Commands

The **`/goal`** and **`/loop`** slash commands let you give the AI Chat V2 assistant a durable objective and then either work toward that objective in bounded, verifiable steps, or re-run a prompt on a fixed interval — instead of prompting it turn by turn.

`/goal` captures what "done" means, including explicit, checkable acceptance criteria. `/loop` then has **two modes**:

- **Goal loop** — `/loop 5` runs a limited number of autonomous iterations toward the active goal, collecting fresh evidence and verifying each criterion before the goal can be marked complete.
- **Scheduled loop** — `/loop 5m check the deployment` re-runs a prompt on a fixed interval (every 5 minutes, every 2 hours, …) so you can monitor work that changes over time. Every occurrence and every response stays in the same conversation.

:::info AI Chat V2 only

`/goal` and `/loop` are built-in slash commands available in the **[AI Chat V2](./ai-chat-v2)** composer. They require an active aiFetchly subscription with AI enabled, and they reuse AI Chat V2's existing [Plan Mode](./ai-chat-v2), tool-approval, and workspace-safety boundaries.

:::

## The two `/loop` modes

Which mode you get depends on what you type after `/loop`:

| Mode | Command | What it does | Requires |
|---|---|---|---|
| **Goal loop** | `/loop <maxIterations>` | Runs up to that many autonomous iterations toward the active goal. | An active goal already set with `/goal`. |
| **Scheduled loop** | `/loop <duration> <prompt>` | Re-runs the prompt on a fixed interval, in the same conversation. | A non-empty prompt. |
| **Scheduled-loop control** | `/loop status` · `/loop pause` · `/loop resume` · `/loop stop` | Manages the active conversation's scheduled loop. | An active scheduled loop in this conversation. |

A bare integer (`/loop 5`) always means a goal loop. A duration (`/loop 5m …`) always means a scheduled loop. The two never interfere with each other.

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

## Goal loop — `/loop <maxIterations>`

### Syntax

```text
/loop <maxIterations>
```

`<maxIterations>` is an integer from **1 to 10**. Provide it explicitly — if you omit it or pass a value outside that range, `/loop` asks for a valid count. A goal loop also **requires an active goal**; if you have not set one, it tells you to run `/goal` first.

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

### When the goal loop stops

A goal loop never runs forever. It stops as soon as any of these is true:

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

## Scheduled loop — `/loop <duration> <prompt>`

A scheduled loop re-runs a prompt on a fixed interval and keeps **every occurrence and every response in the same conversation**. It does not need a goal, and it never creates a new chat per run.

```text
/loop 5m check if the deployment finished and tell me what happened
```

Use it to monitor work that changes over time — deployments, imports, campaign replies, scraping jobs, external approvals — without re-sending the same prompt by hand.

### When to use a scheduled loop

- **Deployment monitoring** — `/loop 5m check if deployment 218 finished and summarize the result`
- **Campaign monitoring** — `/loop 1h --times 8 -- summarize new campaign replies and flag urgent leads`
- **Long-running imports** — `/loop every 15m --for 3h -- check the contact import and report new failures`

You can keep chatting in the same conversation between occurrences. The next scheduled run picks up your interactive messages as part of its context.

### Syntax

**Shorthand** — interval followed by the prompt:

```text
/loop <duration> <prompt>
```

```text
/loop 5m check if the deployment finished and tell me what happened
/loop 2h summarize any new campaign replies
```

**Canonical** — for explicit limits, with a `--` separator before the prompt:

```text
/loop every <duration> [--times <count>] [--for <duration>] -- <prompt>
```

```text
/loop every 5m --times 12 -- check if the deployment finished
/loop every 1h --for 8h -- summarize new campaign replies
/loop every 30m --times 6 --for 3h -- check the import status
```

When both `--times` and `--for` are present, the loop stops at whichever limit is reached first. The `--` separator is required in the canonical form so prompt text containing words like "times" or "for" is not mistaken for options.

### Duration rules

Intervals use two units:

- `m` — minutes
- `h` — hours

Rules:

- Minimum interval: **1m**. Maximum interval: **24h**.
- The value must be a positive whole number with no space before the unit — `5m`, `2h`, `30m`.
- The unit is case-insensitive (`5M` and `5m` are the same).
- Decimals, signs, scientific notation, spaces, and unknown units are rejected.

Rejected examples:

```text
/loop 0m check deployment
/loop -5m check deployment
/loop 1.5h check deployment
/loop 5 minutes check deployment
/loop 5m
/loop 5d check deployment
```

### Default and maximum limits

A scheduled loop is **always bounded** — by execution count and by lifetime.

| Limit | Default | Maximum |
|---|---|---|
| Executions (`--times`) | 24 | 100 |
| Lifetime (`--for`) | 24 hours | 7 days |

The shorthand `/loop 5m <prompt>` runs **at most 24 times and for at most 24 hours** — whichever comes first. At a five-minute interval the execution count normally ends the loop first. Use `--times` and `--for` in the canonical form to raise either bound up to the maximum.

### What happens when it starts

When the command is accepted, AI Chat V2 appends the visible slash command and a short confirmation in the same conversation, for example:

```text
Scheduled every 5 minutes. Maximum 24 runs or 24 hours. Next run: 14:35.
```

The first occurrence runs **one interval after** you start the loop — it does not run immediately. The confirmation tells you the next-run time, so you know exactly when the first check will happen.

### Scheduled turns stay in one conversation

Every occurrence becomes a normal, durable conversation turn:

1. The scheduled prompt is appended to the originating conversation.
2. The AI receives that conversation's existing history and context.
3. The assistant response is appended to the **same** conversation.
4. If that conversation is open, it refreshes and the response streams in live.
5. If another conversation is open, aiFetchly updates the originating conversation's preview and unread indicator without navigating you away from your current work.

Scheduled user turns are shown with a small clock icon and a run label (for example *Scheduled — Run 2*) so you can tell them apart from messages you typed.

:::tip One conversation, one timeline

Because every occurrence shares one transcript, later runs can build on earlier observations. You can also ask a follow-up question between runs and the next scheduled run will include it.

:::

### Status, Pause, Resume, and Stop

While a conversation has an active scheduled loop, the chat header shows a **status chip** with the loop's state and compact controls:

- **Pause** — stops new occurrences from starting. History is kept.
- **Resume** — computes the next future run time and continues. It does not replay missed occurrences.
- **Stop loop** — prevents any future occurrences. The currently running occurrence is allowed to finish.
- **Stop current run** — aborts only the occurrence that is running right now; future occurrences continue on schedule.

The same actions are available as commands, scoped to the active conversation:

```text
/loop status
/loop pause
/loop resume
/loop stop
```

These only ever affect the active conversation's loop. They cannot stop or modify a loop in another conversation. All control actions are idempotent — running them twice does the same thing as running them once.

### Scheduled-loop lifecycle

A scheduled loop moves through these states:

| Status | Meaning |
|---|---|
| **active** | Waiting for the next occurrence. |
| **running** | An occurrence is executing right now. |
| **paused** | Paused — no new occurrences will start until you resume. |
| **expired** | The execution count or lifetime limit was reached. |
| **failed** | Repeated run failures or an unrecoverable error stopped the loop. |
| **stopped** | You stopped it (or the conversation was deleted). |

### Restart and sleep recovery

Scheduled loops are backed by a persistent scheduler, so they survive an app restart or system sleep:

- If no occurrence was missed, the next run time is preserved.
- If occurrences were missed while the app was closed or asleep, **at most one catch-up run** is performed — never a burst of one run per missed interval.
- If the loop's lifetime expired while offline, it is simply marked expired.
- Wall-clock, daylight-saving, and time-zone changes never produce duplicate runs.

The database is the source of truth. If a refresh notification is missed, reopening the conversation reloads the full, correct history.

### Limits and safety

| Limit | Value |
|---|---|
| Interval (`/loop <duration>`) | 1m – 24h |
| Executions | default 24, max 100 |
| Lifetime | default 24h, max 7 days |
| Active scheduled loops per conversation | One |
| Per-run wall-clock cap | 10 minutes |
| Consecutive failures before the loop fails | 3 |

Safety guarantees that always apply:

- A scheduled loop is **always bounded** — by count and by lifetime. It never runs forever.
- It is **always cancellable** (Stop).
- **Interactive turns take priority.** If you are mid-conversation when a run is due, the scheduled occurrence is deferred or coalesced — it never interrupts your turn.
- Occurrences **never overlap**. If a run takes longer than its interval, due occurrences are merged into one pending run.
- **Tool policy is task-scoped.** Scheduled runs are unattended, so only explicitly approved tools are available, and high-impact tools stay blocked. Your interactive "Always Allow" choices do **not** widen what a scheduled loop can do.
- **AI enablement**, workspace, and file-safety boundaries all continue to apply.
- The loop does **not** infer completion from the assistant's wording ("done", "complete"). It stops only on a limit, a failure threshold, an explicit Stop, or because the conversation is gone.

:::warning Clearing or deleting a conversation stops its loop

If a conversation has an active scheduled loop, clearing its history asks you to confirm that the loop will also be stopped, and deleting the conversation stops the loop first. aiFetchly never leaves an unattended loop running against a deleted conversation, and never recreates a deleted conversation.

:::

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
| Goal-loop iteration count (`/loop <N>`) | 1–10 (provide it explicitly) |
| Per-run wall-clock cap | 10 minutes (default) |
| Identical failures before **blocked** | 3 |
| Active goals per conversation | One (setting a new goal replaces the old one) |

Safety guarantees that always apply:

- Every loop is **always bounded** — never infinite.
- It is **always cancellable** (press Stop).
- **AI enablement**, tool-approval mode, Plan Mode, and workspace/file safety boundaries all continue to apply during a loop.
- Destructive actions, new dependencies, authentication changes, and other high-impact side effects still require the normal approval boundary — even mid-loop.
- Evidence and logs shown to the verifier are scoped, size-capped, and redacted of secrets, and treated as untrusted data — never as instructions.

## Tips

### DO ✅

- **Set a goal before a goal loop** — `/loop 5` always needs an active `/goal`.
- **Make objectives verifiable** — prefer criteria the app can check (a command, a file) over subjective ones.
- **Start a goal loop with a small count** (`/loop 3`) to inspect progress before committing to more.
- **Keep Plan Mode on** for goals that modify files, send outreach, or run many tool calls.
- **Use a scheduled loop for monitoring** — anything that changes over time (a deploy, an import, a campaign) is a good fit.
- **Keep chat access enabled** — a scheduled loop pauses after repeated `AI_DISABLED` failures.

### DON'T ❌

- **Don't expect unbounded autonomy** — a goal loop always needs an explicit 1–10 count, and a scheduled loop always has a run-count and lifetime cap.
- **Don't trust a bare "done"** — goal completion is evidence-driven; if a required criterion did not pass, the goal is not complete.
- **Don't expect a scheduled loop to run while the app is closed** — it runs only while aiFetchly is open, and catches up at most once on restart.
- **Don't expect interactive "Always Allow" to apply to scheduled runs** — scheduled tool permissions are task-scoped and stricter.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| *"Set a goal first with /goal"* | No active goal in this conversation | Run `/goal <objective>` and approve the plan first. |
| *"Please provide an iteration count"* | `/loop` was called with no number | Provide a count, for example `/loop 5`. |
| *"Iteration count must be between 1 and 10"* | Count is missing, zero, or above 10 | Use an integer from 1 to 10. |
| *"The interval must be between 1 minute and 24 hours"* | Duration is below 1m, above 24h, or malformed | Use a whole-number `m` or `h` value such as `5m` or `2h`. |
| *"A prompt is required for a scheduled loop"* | `/loop 5m` had no prompt text | Add the prompt after the interval, or after the `--` separator in canonical form. |
| *"No active scheduled loop for this conversation"* | `/loop pause/resume/stop` with no loop running | Start a loop first with `/loop <duration> <prompt>`. |
| Scheduled loop stopped early | Run-count or lifetime limit reached, or 3 consecutive failures | Check the status chip for the reason. Raise limits with `--times`/`--for`, or address the failure and start a new loop. |
| Goal is **blocked** | The same failure repeated (default 3 times) | Read the failure reason in the conversation, address the root cause, then `/loop` again or adjust the goal. |
| Goal stays **needs_user_input** | The loop is waiting for your answer or approval | Respond to the prompt or approve the pending action. |
| A scheduled run didn't happen at the exact time | Runs are deferred while you chat, coalesced when long, or caught up once after sleep | This is expected. Check the status chip and next-run time. |

## Next steps

- [AI Chat V2](./ai-chat-v2) — the chat where `/goal` and `/loop` live, including Plan Mode.
- [Slash Commands](./slash-commands) — the full built-in command list and how to author your own.
- [Subagents](./subagents) — scoped specialists the assistant can delegate to during a loop.
