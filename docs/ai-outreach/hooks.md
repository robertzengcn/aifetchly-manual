---
id: hooks
title: Hooks
sidebar_label: Hooks
description: Manage lifecycle hooks that run around AI chat and tool activity in aiFetchly.
---

# Hooks

Hooks let aiFetchly run configured actions during key AI chat lifecycle events, such as before a tool runs, after a tool succeeds, or after a tool fails. Use Hooks to add safety checks, inject compliance context, or connect local workflow logic to AI tool activity.

## Opening Hooks

1. Click **Settings** in the left navigation.
2. Open **System Settings**.
3. Click **Manage Hooks**.

The Hooks page includes a global enable switch, a hook list, an editor panel, and a recent audit log.

## Global Enable

Use **Enable hooks globally** to turn the entire hook system on or off.

When global hooks are disabled, no hook will fire, even if an individual hook is enabled. This is the fastest way to pause all hook behavior while troubleshooting.

## Hook Sources

The hook list can show different sources:

| Source | Description |
|---|---|
| **Built-in** | Hooks shipped with aiFetchly. You can enable or disable them, but you cannot edit their definitions. |
| **User** | Command hooks you create in the Hooks page. These can be edited, enabled, disabled, or deleted. |
| **Session** | Temporary hooks attached to the current session. Enable **Show session hooks** to include them in the list. |

Use the **Event** and **Source** filters to narrow the list.

## Built-in Hooks

aiFetchly includes built-in hooks for safety and compliance workflows.

| Hook | Default | What it does |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | Enabled | Checks `shell_execute` before tool use and blocks dangerous recursive delete commands such as `rm -rf /` or `rm -rf *`. |
| `builtin-scraping-compliance-context` | Disabled | Adds compliance context after scrape tool calls. Enabling this hook may affect scrape-related AI results. |

Built-in hooks are code-defined. The Hooks page only changes whether they are enabled.

## Creating a Command Hook

1. Click **Add command hook**.
2. Review or replace the generated **Hook ID**.
3. Choose an **Event**.
4. Set a **Matcher**.
5. Optionally add an **If condition**.
6. Enter the local **Command** to run.
7. Set **Timeout (ms)** and **Failure mode**.
8. Optionally add a **Status message**.
9. Click **Save**.
10. Select the saved hook and turn on **Enabled** when you are ready to use it.

New command hooks are saved disabled by default, so you can review them before they run.

## Command Hook Fields

| Field | Description |
|---|---|
| **Hook ID** | Unique identifier for the hook. It can only be edited while creating the hook. |
| **Event** | Lifecycle event that can trigger the hook. |
| **Matcher** | Pattern used to match the event target, such as a tool name. Use `*` to match everything for the selected event. |
| **If condition** | Optional pattern checked against string input values for tool-related events. For example, `git *` can match shell commands that start with `git `. |
| **Command** | Local command to run when the hook matches. The hook input is passed to the command as JSON on stdin. |
| **Timeout (ms)** | Maximum runtime before aiFetchly stops the command. |
| **Failure mode** | `warn` records hook errors without blocking the AI flow. `block` turns hook execution errors into a blocked operation. |
| **Status message** | Optional message shown while the hook runs. |
| **Enabled** | Controls whether the saved hook can run. |

Command hooks should write a JSON object to stdout. An empty object means "no change." Supported output fields include `continue`, `reason`, `systemMessage`, `additionalContext`, `updatedInput`, `updatedToolOutput`, `suppressOutput`, and `permissionDecision`.

Example output that blocks a matching operation:

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

Example output that adds context:

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Hook Events

| Event | When it runs |
|---|---|
| `SessionStart` | When an AI chat, plan, or agent session starts. |
| `UserPromptSubmit` | When the user submits a prompt. |
| `PreToolUse` | Before a tool is executed. |
| `PostToolUse` | After a tool completes successfully. |
| `PostToolUseFailure` | After a tool fails. |
| `PermissionRequest` | When a tool permission request is being prepared. |
| `PermissionDenied` | When a tool permission request is denied. |
| `Stop` | When the AI run stops or completes. |

## Editing and Deleting Hooks

Select a user hook from the list to edit its matcher, condition, command, timeout, failure mode, or status message. Click **Save** to apply changes.

To remove a user hook, click **Delete** and confirm. Deleting a hook is permanent.

:::info Built-in hook restrictions

Built-in hooks can be enabled or disabled, but their event, matcher, and behavior cannot be edited from the Hooks page.

:::

## Recent Audit Log

The **Recent audit log** shows hook activity, including:

- Time
- Hook ID
- Event
- Status
- Duration
- Reason

Filter the audit log by **Event**, **Status**, or **Hook**, and choose whether to show the last 100, 500, or 1000 rows. Use the refresh button to start or pause auto-refresh while testing hooks.

Common statuses include:

| Status | Meaning |
|---|---|
| `started` | The hook run began. |
| `success` | The hook completed successfully. |
| `blocked` | The hook blocked the operation. |
| `failed` | The hook failed. |
| `timeout` | The hook exceeded its timeout. |

## Safety Notes

- Command hooks run local processes. Only create hooks whose commands you understand.
- Keep hook commands narrow and predictable.
- Prefer `warn` while testing a new hook, then switch to `block` only after the behavior is verified.
- Use the audit log after enabling a hook to confirm it fires only when expected.
