---
id: subagents
title: Subagents
sidebar_label: Subagents
description: Manage built-in, plugin-installed, workspace, and manual AI subagents in aiFetchly.
---

# Subagents

Subagents are reusable specialist AI agent definitions. They describe a focused role, system prompt, allowed tools, model preference, and runtime limits that aiFetchly can use for targeted AI work.

Plugins can install subagents alongside AI Skills and MCP servers, and you can also create manual subagents for your own recurring workflows.

## How the AI uses subagents

You don't invoke subagents directly. At the start of a chat, aiFetchly injects an **Available AiFetchly agents** list into the AI's context — each entry shows the agent's runtime ID, description, and source. When a task fits, the AI calls the **`run_subagent`** tool with that ID. The subagent then runs with its own system prompt, allowed tools, and runtime limits, and returns its result to the main AI.

## Built-in agents

aiFetchly ships with one built-in subagent:

- **Lead Researcher** (`agent-lead-researcher`) — a `specialist` that gathers public business context for a lead (industry, summary, products, signals) using the search-scraper and Knowledge Library tools, and returns a structured JSON object with source URLs and a confidence score. It is read-only.

## Opening Subagents

1. Click **System Setting** in the left navigation menu.
2. Click **Manage Subagents**.

The Subagents page shows a compact table, search and filter controls, a detail dialog, and an **Add Subagent** action.

## Subagent Sources

| Source | Description |
|---|---|
| **Built-in** | Agents shipped with aiFetchly. They are read-only. |
| **Plugin** | Agents installed by a plugin. They are read-only from the Subagents page, but can be enabled or disabled. |
| **Workspace** | Agents loaded from the workspace's `.aifetchly/agents/` files. They can be enabled or disabled here; edit the workspace file to change their definition. Workspace agents only load once the workspace is trusted. |
| **Manual** | Agents created by you in aiFetchly, **or** defined as Markdown files under `~/.aifetchly/agents/`. These can be edited, enabled, disabled, or deleted. |

Use the source filter to show all subagents or only one source.

## Finding and Filtering Subagents

The Subagents table includes:

| Column | Description |
|---|---|
| **Agent** | Display name and runtime ID. |
| **Description** | Short summary of what the agent does. |
| **Source** | Built-in, Plugin, Workspace, or Manual. |
| **Plugin** | The owning plugin, when applicable. |
| **Mode** | Agent role, such as `specialist`, `verifier`, `coordinator`, or `formatter`. |
| **Tools** | Number of tools the agent is allowed to use. |
| **Model** | The agent's default model, if one is set. |
| **Status** | Enabled or Disabled, with warning indicators for unhealthy agents. |
| **Actions** | Enable or disable switch where available. |

You can search by agent ID, name, description, or plugin name. The status filter can show **all** agents, **enabled** agents, **disabled** agents, or agents that **have warnings**.

## Viewing Details

Click a subagent row to open its detail panel. The panel shows:

- Agent name and runtime ID
- Source and plugin owner, when applicable
- Status and health
- Description
- Source file or plugin component path
- Mode and default model
- Max tool calls
- Max runtime
- Max continue calls
- Allowed tools
- System prompt

Read-only agents show a note explaining where they should be edited. Manual agents show **Edit Subagent** and **Delete this subagent** actions.

## Creating a Manual Subagent

1. Click **Add Subagent**.
2. Enter a **Name**.
3. Review or edit the generated **ID slug**.
4. Add a **Description**.
5. Choose a **Mode**.
6. Write the **System prompt**.
7. Add comma-separated **Allowed tools**.
8. Optionally set a **Default model**.
9. Set runtime limits.
10. Optionally add an **Output schema** JSON object.
11. Choose whether the subagent starts **Enabled**.
12. Click **Save**.

The ID slug is locked after creation, so choose a stable identifier.

## Manual Subagent Fields

| Field | Description |
|---|---|
| **Name** | Human-readable name shown in the table and detail panel. |
| **ID slug** | Stable runtime identifier. It is auto-generated from the name before first save and cannot be changed later. |
| **Description** | Short explanation of when to use the subagent. |
| **Mode** | Functional role: `coordinator`, `specialist`, `verifier`, or `formatter`. |
| **System prompt** | The subagent's instructions. Keep this self-contained and specific. |
| **Allowed tools** | Comma-separated tool names the subagent is allowed to use. Runtime policy still applies. |
| **Default model** | Optional model preference for this subagent. |
| **Max tool calls** | Maximum number of tool calls allowed during one run. |
| **Max runtime (seconds)** | Maximum runtime for one subagent run. |
| **Max continue calls** | Maximum number of continuation turns. |
| **Output schema** | Optional JSON object describing the desired structured output. |
| **Enabled** | Controls whether this subagent is available to the runtime. |

## Editing and Deleting Manual Subagents

Open a manual subagent and click **Edit Subagent** to update its name, description, system prompt, allowed tools, model, runtime limits, output schema, or enabled state.

To remove a manual subagent, open its detail panel and click **Delete this subagent**. Deletion is permanent.

## Plugin-Installed Subagents

Plugins can include subagents in Markdown files under an `agents/` directory or via plugin manifest declarations. When installed, those files become plugin-owned subagent definitions in aiFetchly.

A plugin subagent can include:

- `name`
- `description`
- `tools` (and/or `skills`, which are merged into the allowed tools)
- `model`
- `mode`
- Runtime limits (`maxToolCalls`, `maxRuntimeMs`, `maxTurns`)
- An optional `outputSchema`
- Markdown instructions that become the system prompt

Plugin-owned subagents are namespaced by the plugin, such as `lead-pack:researcher`. Nested folders can create deeper IDs, such as `lead-pack:review:verifier`.

## Managing Plugin Subagents

Plugin subagents appear in two places:

- **System Settings → Subagents** for the complete catalog.
- **Plugin Manager → plugin detail → Subagents** for agents owned by one plugin.

In the plugin detail Subagents tab, you can review each agent's name, ID, mode, tool count, health, and enabled state. Disabling one plugin subagent does not disable the plugin's other skills, MCP servers, or subagents.

If the entire plugin is disabled, its subagents are unavailable even if their individual enabled switch is on. Re-enabling the plugin restores the component-level settings that were previously saved.

## Health and Warnings

Subagents can report health states such as `healthy`, `disabled`, `partial_load`, `invalid`, or `missing_files`.

Warnings usually mean aiFetchly loaded the agent with restrictions or found a problem with the source definition. Open the detail panel or plugin diagnostics to inspect the cause.

## Security Notes

- Plugin subagents are definitions, not independent programs.
- Plugin-supplied security-sensitive fields such as permission modes, hooks, direct MCP server registration, or privileged execution settings are ignored or warned on.
- Allowed tools define the subagent's upper bound. aiFetchly still intersects that list with enabled tools and runtime policy.
- Keep manual system prompts self-contained because subagents should not assume they can see the full parent chat history.
