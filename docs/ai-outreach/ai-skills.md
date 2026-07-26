---
id: ai-skills
title: AI Skills
sidebar_label: AI Skills
description: Manage and extend aiFetchly's AI capabilities with skills — import, enable/disable, uninstall, and understand how skill permissions and approval prompts work in AI Chat.
---

# AI Skills

AI Skills are modular extensions that add tools the AI can call during a chat — specialized capabilities such as web scraping, automation, file access, or shell commands. When a skill is enabled, the AI can decide to use it to answer your request.

## What is a skill?

A skill is a packaged tool with:

- A unique **name** and **version**.
- A **source**: **Built-in** (shipped with aiFetchly) or **User Installed** (imported by you, or bundled with a plugin).
- A **permission category** — derived from the skill's declared permissions (see [Permission categories](#permission-categories)).
- An **enable/disable** state.

## Accessing AI Skills

1. Click **System Setting** in the left navigation menu.
2. Click **Manage Skills** (or **AI Skills**).

The page lists every installed skill in a table.

## The skills table

| Column | Description |
|--------|-------------|
| **Name** | Skill identifier. If the skill came from a plugin, a _"via plugin: {name}"_ chip appears next to it. |
| **Source** | **Built-in** or **User Installed** badge. |
| **Category** | The skill's permission category (`pure`, `network`, `filesystem`, `automation`, or `shell`). |
| **Version** | Skill version number. |
| **Status** | **Enabled** or **Disabled**. |
| **Actions** | Enable/disable toggle and uninstall button — **shown only for user-installed skills**. |

:::note Built-in skills are always on

Built-in skills render **neither** the enable/disable toggle **nor** the uninstall button. They cannot be disabled or removed from this page.

:::

## Importing a skill

Skills are imported as `.zip` packages.

1. Click **Import** (top-right, upload icon).
2. Choose a skill `.zip` file.
3. aiFetchly validates the package (manifest, permissions, entry file) and installs it.

:::tip Import tips

- Only `.zip` files are supported by the Import button.
- The package must contain a valid `manifest.json` (see [Skill package format](#skill-package-format)).
- Plugin-bundled skills do not need to be imported — they appear automatically when their plugin is installed.

:::

Skills can also arrive automatically from:

- **Plugins** — a plugin bundles one or more skills; they appear here with a _"via plugin"_ chip. Install or remove them via the **[Plugin Manager](./plugin-manager)**.
- **Local skill folders** (advanced) — skills placed under `~/.aifetchly/skills/<name>/` are auto-discovered.

## Enabling, disabling, and uninstalling

For **user-installed** skills:

- **Enable / disable** — use the check (enable) / cross (disable) toggle in the Actions column.
- **Uninstall** — click the trash icon and confirm. Uninstalling is permanent; re-import the `.zip` to use the skill again.

Built-in skills have no Actions controls — they are always enabled.

## How skills work in chat

Once a skill is enabled, the AI can choose to call it when relevant. You don't invoke skills by name (though you can ask for one explicitly, e.g. *"use the web scraper on this URL"*).

### Skill categories

Each skill belongs to a **permission category** that determines how it's approved when the AI calls it. The category is the skill's first declared `permission` (from its manifest), or `pure` if none is declared:

| Category | What the skill can do |
|--------|----------------------|
| `pure` | General-purpose utilities — text processing, calculations, formatting. No special access. |
| `network` | Outbound network/HTTP access (fetching pages, calling APIs). |
| `filesystem` | Local file read/write. |
| `automation` | Browser automation, scraping, social posting, and similar scripted actions. |
| `shell` | Runs system shell commands. (Built-in `shell_execute` only — never importable.) |

The category is shown raw and lowercase in the table (for example `network`, `automation`).

### Approval prompts

When the AI calls a skill, aiFetchly may ask you to approve it before it runs. Whether a prompt appears depends on the skill's category **and** your current chat tool-approval mode:

| Category | Approval behavior |
|--------|-------------------|
| `pure` | Always auto-approved — no prompt. |
| `shell` | **Always prompts on every command.** Never auto-approved (see below). |
| `network` / `filesystem` / `automation` | Prompted under the default _"ask for approval"_ mode. Under _"approve for me"_ or _"full access"_ modes these are auto-approved. |

When a prompt appears you'll see an approval card with three actions:

- **Allow Once** — run this one call only.
- **Always Allow** — remember the decision so future calls to this skill don't prompt.
- **Deny** — block this call.

For **shell** skills, the card is titled **"Shell Command Execution"**, shows a preview of the command (command, working directory, shell, timeout), and the third button reads **"Always Allow (This Session)"** instead of "Always Allow".

:::warning Shell approval is effectively one-shot

For `shell` skills, "Always Allow" is **not** honored for subsequent commands. Each shell command will prompt again — this is an intentional safety measure, because shell commands can do anything on your machine. Only non-shell categories truly remember "Always Allow" permanently.

:::

## Skill package format

A skill `.zip` must contain a `manifest.json`. The minimum viable manifest looks like this:

```json
{
  "name": "my-custom-skill",
  "version": "1.0.0",
  "description": "What this skill does, shown to the AI.",
  "runtime": "javascript",
  "entry": "index.js",
  "parameters": {
    "type": "object",
    "properties": {
      "url": { "type": "string" }
    },
    "required": ["url"]
  },
  "permissions": ["network"]
}
```

### Required manifest fields

| Field | Description |
|-------|-------------|
| `name` | Unique skill identifier. |
| `version` | Version string, e.g. `1.0.0`. |
| `description` | Short description — the AI reads this to decide when to use the skill. |
| `runtime` | `javascript` or `python`. |
| `entry` | The entry file inside the package (e.g. `index.js` or `main.py`). |
| `parameters` | A JSON Schema object describing the skill's input parameters. |

### Optional manifest fields

| Field | Description |
|-------|-------------|
| `permissions` | Array of permission strings. **Valid values are `network`, `filesystem`, `automation` only.** The first entry determines the skill's category (see [Skill categories](#skill-categories)). Unknown values are rejected at import. |

:::danger Permissions are strictly validated

Only `network`, `filesystem`, and `automation` are accepted. Values like `web-search`, `data-access`, or `shell` will be rejected and the skill will not import. There is no separate `category` field — the category is derived from the first `permissions` entry (or `pure` if none is given).

:::

### Packaging

1. Put a valid `manifest.json` at the root of the package.
2. Add the runtime/entry files referenced by `entry`.
3. Zip the **contents**, not the wrapping folder.
4. Name the file `skill-name.zip`.

## Troubleshooting

### Import failed

**Possible causes:** invalid zip, missing or malformed `manifest.json`, an invalid `permissions` value, or a missing required field (`runtime`, `entry`, `parameters`).

**Solutions:**
1. Verify the zip integrity.
2. Check `manifest.json` has all required fields with valid values.
3. Confirm `permissions` only uses `network`, `filesystem`, or `automation`.
4. Confirm `runtime` is `javascript` or `python` and `entry` points to a real file.

### A skill doesn't appear in chat

**Possible causes:** the skill is disabled, or (for plugin skills) its plugin is disabled.

**Solutions:**
1. Check the skill's status in the table and enable it.
2. For plugin skills, check the **[Plugin Manager](./plugin-manager)** — the owning plugin must be enabled.

### The AI keeps asking for approval

- You're using a **shell** skill. Shell approvals are one-shot by design.
- For other categories, switch the chat tool-approval mode to _"approve for me"_ to reduce prompts (note: this auto-approves non-shell skills).

### Built-in skill has no toggle

This is intentional. Built-in skills are always enabled and cannot be disabled or uninstalled from this page.

## Next steps

- [Plugin Manager](./plugin-manager) — install plugins that bundle skills, commands, agents, hooks, and MCP servers.
- [Subagents](./subagents) — scoped specialists the AI can dispatch.
- [AI Chat V2](./ai-chat-v2) — where skills are invoked.
