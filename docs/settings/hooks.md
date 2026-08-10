---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Configure lifecycle hooks that observe, block, rewrite, or annotate the AI assistant's tool calls — including built-in safety hooks and your own command hooks.
---

# Hooks

**Hooks** are lifecycle triggers that run your own logic around what the AI Marketing Assistant does. They fire at well-defined moments — most importantly **before and after a tool runs** — and can observe, block, rewrite, or annotate the action. With hooks you can enforce policy ("never run this kind of command"), add context the AI sees ("remind me about compliance after scraping"), and keep a tamper-resistant audit trail of every hook decision.

aiFetchly ships with **built-in safety hooks** that protect you out of the box, and lets you add your own **command hooks** — small scripts that receive an event as JSON and decide what should happen next.

:::info Where hooks fit

Hooks sit between the AI and the tools it calls (built-in [AI Skills](../ai-outreach/ai-skills), [MCP tools](../ai-outreach/mcp-tools), and legacy tools). They do **not** replace the AI — they gate and shape the tool calls the AI requests. A hook that *allows* a call never bypasses the normal permission system; a hook that *blocks* a call stops it before it ever runs.

:::

## What can hooks do?

Each hook receives details about the event and can return a decision:

- **Block** an action before it happens (for example, refuse a dangerous shell command).
- **Rewrite** the inputs a tool is about to be called with (for example, redact a value).
- **Add context** the AI reads after a tool runs (for example, a compliance reminder).
- **Record activity** for later review in the audit log.

## Key concepts

### Events

A hook is bound to one **event** — the moment in the AI's lifecycle when it fires. The most important events are the tool lifecycle ones:

| Event | Fires when | Can it block? |
|------|------------|---------------|
| **PreToolUse** | Just before a tool runs | ✅ Yes — the tool never executes |
| **PostToolUse** | After a tool runs successfully | ❌ No (the tool already ran), but can add context or rewrite its output |
| **PostToolUseFailure** | After a tool fails | ❌ No (can't flip a failure into a success), but can add a message |

Additional events in the hook model — **SessionStart**, **UserPromptSubmit**, **PermissionRequest**, **PermissionDenied**, and **Stop** — are available in the event dropdown and describe session, prompt, permission, and turn-end moments. Event names are kept as code identifiers (like `PreToolUse`) across all languages so they stay searchable and unambiguous.

:::note Tool events are the active enforcement points

The fully-wired enforcement points today are the tool lifecycle events (**PreToolUse**, **PostToolUse**, **PostToolUseFailure**). This is where blocking, input rewriting, output rewriting, and context injection take effect. The session, prompt, permission, and stop events are part of the hook model and selectable in the UI; whether each one fires depends on where that part of the application triggers it.

:::

### Sources

Every hook has a **source**, which determines who owns it and what you can do with it:

| Source | What it is | Shown by default? |
|--------|------------|-------------------|
| **builtin** | Ships with aiFetchly (safety & compliance) | ✅ Yes |
| **user** | Created by you in this page | ✅ Yes |
| **session** | Registered temporarily for the current session | Only when **Show session hooks** is on |

Use the **Source** filter to narrow the list to one of these.

### Command hooks

The only type of hook you can create from the UI is a **command hook**. A command hook runs a local command (a script or executable) and communicates with aiFetchly through JSON:

1. aiFetchly sends the event details to your command as a **JSON object on standard input**.
2. Your command does its work and writes a **JSON decision to standard output**.
3. aiFetchly reads that decision and acts on it (block, rewrite input, add context, etc.).

Built-in hooks are written in code (callback hooks) and are not editable from the UI — you can only turn them on or off.

### Matchers

A hook's **Matcher** narrows *which tool calls* it applies to. The matcher is tested against the **tool name** and supports simple wildcard patterns:

| Matcher | Matches |
|---------|---------|
| `*` | Every tool |
| `shell_execute` | Only the tool whose name is exactly `shell_execute` |
| `scrape_*` | Any tool whose name starts with `scrape_` (e.g. `scrape_search`) |
| `*_search` | Any tool whose name ends with `_search` |
| `*scrape*` | Any tool whose name contains `scrape` |

Matchers are limited to 128 characters.

### The "If" condition

The optional **If condition** narrows a hook further by matching the tool's **argument values**, not just its name. It uses the same wildcard syntax, tested against the string arguments passed to the tool. For example:

- On `PreToolUse` with matcher `shell_execute`, an If condition of `git *` makes the hook fire only for shell commands that start with `git `.
- An If condition of `rm -rf *` fires only for recursive-delete commands.

The If condition is ignored for events that have no tool arguments. It is limited to 256 characters.

### Failure mode

Hooks can fail — a command can crash, time out, or return invalid JSON. The **Failure mode** decides what happens to the tool call when the *hook itself* errors (this is separate from a hook deliberately returning "block"):

| Failure mode | When the hook errors… |
|--------------|----------------------|
| **warn** | The error is recorded in the audit log, and the tool call **proceeds normally**. |
| **block** | The error is treated as a block — the tool call **does not run**. |

Use **warn** for non-critical hooks (logging, advisory context). Use **block** only when you would rather stop a tool than run it without your hook's check succeeding.

:::tip Block-vs-warn, in one sentence

A hook *returning* `{ continue: false }` always blocks the tool, regardless of failure mode. Failure mode only matters when the hook **itself breaks** (timeout, crash, bad JSON).

:::

### Global enable

The **Enable hooks globally** switch at the top of the page is the master kill switch. When it is off, **no hook fires anywhere** — not built-in, not user-created. The rest of the page stays interactive so you can still configure hooks while the system is paused. The setting persists across restarts.

## Opening the Hooks page

1. Click **Settings** in the left navigation menu.
2. Open the **Hooks** page (alongside Skills and MCP).

## Page layout

The Hooks page has four regions, stacked top to bottom:

```
┌─ Hooks ──────────────────────────────────────────────┐
│ [✓] Enable hooks globally            [+ Add command]  │  header
│ Filter: Event[All▾] Source[All▾] [□ Show session]     │  list filters
│ ┌─────────────────────┬─────────────────────────┐    │
│ │ Hooks (N)           │ Edit panel              │    │  master–detail
│ │ ● block-shell   ✓   │ Hook ID / Event / …     │    │
│ │ ● compliance    ⏸   │ [Save] [Delete]         │    │
│ └─────────────────────┴─────────────────────────┘    │
│ ─ Recent audit ─────────────────────────────────────  │  audit panel
│ Time   Hook        Event       Status   Duration      │
└───────────────────────────────────────────────────────┘
```

- **Header** — global enable switch and the **+ Add command hook** button. A yellow banner appears when hooks are globally disabled.
- **List filters** — filter the hook list by event and source, and optionally reveal session hooks.
- **Master–detail** — the hook list on the left; click a hook to edit it on the right.
- **Audit panel** — recent hook activity with its own filters and an optional auto-refresh.

## Built-in hooks

aiFetchly ships with these built-in hooks:

| Hook ID | Event | Matcher | Default | What it does |
|---------|-------|---------|---------|--------------|
| `builtin-block-dangerous-shell-delete` | PreToolUse | `shell_execute` | **Enabled** | Blocks shell commands matching a dangerous recursive-delete pattern (e.g. `rm -rf /` or `rm -rf *`). |
| `builtin-scraping-compliance-context` | PostToolUse | `scrape_*` | Disabled | After any scrape tool call, injects a short compliance reminder into the AI's context so it recommends lawful, minimal-data outreach. |

:::warning Scraping compliance context

Enabling `builtin-scraping-compliance-context` injects compliance guidance into the AI prompt after **every** scrape tool call. This is intentional, but be aware it may influence the wording of the AI's follow-up responses.

:::

Built-in hooks are **read-only** — their fields cannot be edited and they cannot be deleted. You can only toggle them on or off; that override persists across restarts.

## Creating a command hook

### Step 1: Start a new hook

Click **+ Add command hook**. The edit panel switches to a blank form with sensible defaults:

- **Event**: `PreToolUse`
- **Matcher**: `*`
- **Failure mode**: `warn`
- **Timeout**: `5000` ms
- **Enabled**: off (new hooks start disabled)

### Step 2: Fill in the fields

| Field | Description |
|-------|-------------|
| **Hook ID** | A unique name for the hook (for example `block-home-delete`). Used in the list and audit log. |
| **Event** | When the hook fires (see [Events](#events)). |
| **Matcher** | Which tool names the hook applies to; `*` means all (see [Matchers](#matchers)). |
| **If condition** | Optional — further restricts by tool argument value (see [The "If" condition](#the-if-condition)). |
| **Command** | The local command to run. It receives the event as JSON on stdin and must print a JSON decision on stdout (see [The command hook contract](#the-command-hook-contract)). |
| **Timeout (ms)** | Maximum runtime before the hook is killed. Default `5000`; capped at `60000`. |
| **Failure mode** | What happens when the hook itself errors (see [Failure mode](#failure-mode)). |
| **Status message** | Optional short label shown as a progress indicator while the hook runs. |

### Step 3: Save and enable

1. Click **Save**. The hook is stored with **Enabled off**, so nothing runs yet.
2. Select the hook in the list and turn on the **Enabled** switch to activate it.

:::tip Hooks only run when both switches allow it

A command hook fires only when **hooks are enabled globally** *and* **the hook itself is enabled**. New hooks start disabled on purpose, so you can review the command before it ever runs.

:::

## Editing, enabling, and deleting hooks

- **Enable / disable** — select any hook and toggle the **Enabled** switch. Works for built-in and user hooks; the change takes effect immediately and persists.
- **Edit fields** — only **user** hooks are editable. Select the hook, change the fields, and click **Save**. Built-in and session hooks show their fields read-only.
- **Delete** — only **user** hooks can be deleted. Click **Delete**, confirm the hook ID and command preview in the dialog, and the hook is removed permanently. Built-in hooks cannot be deleted (the button is hidden; the backend rejects it too as a safeguard).

## The command hook contract

When a command hook fires, aiFetchly runs your **Command** with `shell: false` — the first token is the executable and the remaining tokens are its arguments. It sends the event as a JSON object on **stdin** and reads a JSON decision from **stdout**.

### Input (stdin)

For a `PreToolUse` hook, the input looks roughly like this:

```json
{
  "eventName": "PreToolUse",
  "hookRunId": "run-1a2b3c",
  "tool": { "id": "...", "name": "shell_execute", "source": "legacy-tool" },
  "input": { "command": "rm -rf /tmp/old" },
  "permissionState": { "allowed": true, "needsPrompt": false },
  "timestamp": "2026-07-10T09:42:00.000Z"
}
```

The exact fields depend on the event (for example, `PostToolUse` also includes `output` and `executionTimeMs`). Your script should read defensively — access fields with optional chaining and tolerate missing keys.

### Output (stdout)

Your command prints a JSON object describing its decision. All fields are optional:

| Field | Effect |
|-------|--------|
| `continue` | `false` blocks the tool call (use with `reason`). Omit or `true` to allow. |
| `reason` | Human-readable explanation shown in the audit log and (for blocks) to the AI. Max 1000 chars. |
| `additionalContext` | Text appended to the AI's context (commonly used on `PostToolUse`). Max 4000 chars. |
| `systemMessage` | A system-level message. Max 2000 chars. |
| `updatedInput` | Replaces the tool's inputs (**PreToolUse only**). Max 64 KB. |
| `updatedToolOutput` | Rewrites the tool's output (**PostToolUse only**); cannot turn a failure into a success. Max 128 KB. |
| `suppressOutput` | Hides the tool's output from the conversation. |
| `permissionDecision` | `allow`, `ask`, or `deny`. `allow` is advisory and never overrides the permission system. |

A minimal "allow" response is an empty object: `{}`. Output that is not valid JSON is treated as a hook error (subject to the failure mode), so always emit well-formed JSON.

### Execution rules

- **No shell features.** Because `shell: false`, pipes (`|`), redirects (`>`), chaining (`&&`), and variable expansion (`$VAR`) do **not** work directly. To use them, invoke a shell explicitly, e.g. `sh -c "..."` or `bash -c "..."`.
- **Restricted environment.** Your command receives only a small allowlist of environment variables by default: `PATH`, `HOME`, `USER`, `USERNAME`, `TEMP`, `TMP`. aiFetchly never passes its own credentials or tokens to your hook.
- **Quoting.** The command parser supports single and double quotes for arguments containing spaces (e.g. `-e "console.log(1)"`), but no escape sequences or variable expansion.
- **Size caps.** stdout is capped at 256 KB and stderr at 64 KB. Keep responses small.

## Examples

### Example 1 — Block deletes of the home directory

A `PreToolUse` hook that refuses shell commands deleting files under the home folder.

**Hook settings**

| Field | Value |
|-------|-------|
| Event | `PreToolUse` |
| Matcher | `shell_execute` |
| Failure mode | `block` |
| Command | `node /home/me/hooks/block-home-delete.js` |

**`block-home-delete.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input = {};
  try { input = JSON.parse(raw); } catch { /* ignore malformed input */ }
  const command = String(input?.input?.command ?? "");
  if (/\brm\s+-rf\s+~(\/|$|\s)/.test(command)) {
    process.stdout.write(JSON.stringify({
      continue: false,
      reason: "Refusing to delete files inside the home directory.",
    }));
    return;
  }
  process.stdout.write(JSON.stringify({ continue: true }));
});
```

### Example 2 — Add a compliance reminder after scraping

A `PostToolUse` hook that injects guidance whenever a scrape tool runs.

**Hook settings**

| Field | Value |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `scrape_*` |
| Failure mode | `warn` |
| Command | `node /home/me/hooks/compliance-reminder.js` |

**`compliance-reminder.js`**

```js
let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  process.stdout.write(JSON.stringify({
    additionalContext:
      "Only keep contact data you have a lawful basis to process, and prefer minimal, opt-in outreach.",
  }));
});
```

### Example 3 — Append every tool call to a log file

A `PostToolUse` hook that appends the raw event to a file. Because it uses a redirect, it invokes a shell explicitly.

| Field | Value |
|-------|-------|
| Event | `PostToolUse` |
| Matcher | `*` |
| Failure mode | `warn` |
| Command | `sh -c "cat >> /tmp/aifetchly-tool-audit.log"` |

:::tip Test before enabling

Test your script from a terminal first by piping sample JSON into it (`echo '{...}' | node my-hook.js`). Confirm it prints valid JSON and exits quickly, then point a command hook at it.

:::

## Reading the audit log

The **Recent audit log** at the bottom of the page records every hook execution. Each row shows:

| Column | Meaning |
|--------|---------|
| **Time** | When the hook ran. |
| **Hook** | The hook ID. |
| **Event** | The event that triggered it. |
| **Status** | `started`, `success`, `blocked`, `failed`, or `timeout`. |
| **Duration** | How long the hook took, in milliseconds. |
| **Reason** | The reason for a block, or the error message for a failure. |

Use the filters to narrow by **event**, **status**, or **hook**, and choose how many rows to load (100 / 500 / 1000). Click the refresh icon to start **auto-refresh** (the icon spins while active), which re-polls every few seconds so you can watch hook activity live while testing.

## Security

The hooks system is designed so that a misbehaving or malicious command hook cannot compromise the application:

- **Disabled by default.** New command hooks are saved with Enabled off; built-in command hooks are the only ones that ship enabled, and only the safety one is on.
- **Restricted environment.** Hooks receive only an allowlist of environment variables — never aiFetchly's credentials, API keys, or session tokens.
- **No shell injection.** Commands run with `shell: false` and a minimal argv parser, so shell operators are not interpreted unless you explicitly invoke a shell.
- **Bounded execution.** Every hook has a timeout (default 5 s, max 60 s); overrun is killed and recorded as `timeout`.
- **Bounded output.** stdout and stderr are capped; oversized output is truncated.
- **Secrets redacted in audit.** Patterns that look like API keys, bearer tokens, cookies, or `Authorization` headers are redacted before being written to the audit log.
- **Built-in hooks are tamper-proof.** Their definitions cannot be edited or deleted from the UI — only toggled.
- **Hooks never bypass permissions.** A hook returning `allow` is advisory; the standard permission system still applies. Only a hook returning `block` short-circuits a tool call.

:::warning You are responsible for command hooks you create

A command hook runs a program on your machine with the environment described above. Only point hooks at scripts you trust, from directories you control, and review the command before enabling it.

:::

## Troubleshooting

### My command hook doesn't fire

**Possible causes:**
- Hooks are globally disabled (yellow banner at the top).
- The hook itself is disabled (Enabled switch off).
- The **Matcher** doesn't match the tool name, or the **If condition** doesn't match the argument value.
- The **Event** is not one of the active tool lifecycle events (`PreToolUse` / `PostToolUse` / `PostToolUseFailure`).

**Solutions:**
1. Turn on **Enable hooks globally**.
2. Select the hook and enable it.
3. Temporarily set the Matcher to `*` and clear the If condition to confirm the hook works, then narrow it back down.
4. Check the audit log — a row with status `started` means the hook was selected; no row means it never matched.

### The hook ran but the tool still executed

**Possible causes:**
- The hook returned `{ continue: true }` (or an empty object), which allows the call.
- The hook **errored** (status `failed` or `timeout`) and the failure mode is **warn**, so the call proceeds anyway.

**Solutions:**
1. Make sure your script writes `{ continue: false, reason: "..." }` when it should block.
2. If the hook is erroring, set the failure mode to **block** if you want errors to stop the tool, or fix the script so it stops failing.

### The hook shows status `failed` or `timeout`

**Possible causes:**
- The script crashed or printed invalid (non-JSON) output.
- The script took longer than the configured timeout.
- The command used shell features (pipes, redirects) without invoking a shell.

**Solutions:**
1. Test the script in a terminal: `echo '{"eventName":"PreToolUse","input":{"command":"test"}}' | node my-hook.js`. It must print valid JSON.
2. Increase the timeout (up to 60000 ms), or make the script faster.
3. Wrap shell features in `sh -c "..."` or `bash -c "..."`.

### The hook ID can't be changed

Hook IDs are fixed once the hook is created (the field is disabled when editing). To rename a hook, create a new one with the desired ID, then delete the old one.

### I can't edit or delete a built-in hook

This is intentional. Built-in hooks are code-owned; you can only toggle them on or off.

## Next steps

- [AI Skills](../ai-outreach/ai-skills) — the capabilities hooks can gate
- [MCP Tools](../ai-outreach/mcp-tools) — external tools whose calls hooks observe
- [System Settings](./system-settings) — overall configuration
