---
id: plugin-manager
title: Plugin Manager
sidebar_label: Plugin Manager
description: Install, browse, and manage plugin bundles that package AI Skills, Subagents, slash Commands, Hooks, and MCP servers. Install from local zip/folder, git, GitHub, npm, URL, or a marketplace.
---

# Plugin Manager

A **plugin** is a single package that bundles one or more extension capabilities — **AI Skills**, **Subagents**, **slash Commands**, **Hooks**, and/or **MCP servers** — under one manifest, one install path, and one ownership record. The Plugin Manager is where you install, browse, inspect, enable, disable, and uninstall plugins.

Plugins sit on top of the standalone [AI Skills](./ai-skills), [Subagents](./subagents), [Slash Commands](./slash-commands), [Hooks](../settings/hooks), and [MCP Tools](./mcp-tools) systems. Installing a plugin registers the capabilities it bundles; uninstalling it removes them — all as a unit.

## Opening the Plugin Manager

**From the left navigation:** click **Plugins** (puzzle icon).

**From System Settings:** open **System Setting** and click **Plugins**.

The page is organized into **four tabs**:

| Tab | Purpose |
|-----|---------|
| **Installed** | Plugins already on your machine — install, enable/disable, inspect, uninstall. |
| **Discover** | Browse a marketplace catalog and install plugins from it. |
| **Marketplaces** | Add, refresh, and remove the marketplace sources that feed Discover. |
| **Errors** | Marketplaces that failed to load, with their error details. |

## Installed tab

The **Installed** tab has a toolbar with three actions and a table of every installed plugin.

### Toolbar

- **Reload** — re-scan installed plugins.
- **Import Plugin** — install from a local `.zip` file.
- **Install from Source** — install from one of six sources (see [Install from Source](#install-from-source)).

### The plugins table

| Column | Description |
|--------|-------------|
| **Plugin** | Plugin name. |
| **Version** | Installed version. |
| **Source** | **Built-in**, **Marketplace**, or **Local**. |
| **Imported From** | The origin (folder path, git URL, npm package, etc.). |
| **SubAgent** | Number of subagents the plugin bundles. |
| **Skills** | Number of skills. |
| **Hooks** | Number of hooks. |
| **MCP Servers** | Number of MCP servers. |
| **Status** | Current health state (see [Plugin health states](#plugin-health-states)). |
| **Actions** | A plugin-level **enable/disable** switch and a **trash** (uninstall) button. |

The **Source** column shows one of three broad badges — **Built-in**, **Marketplace**, or **Local**. The more specific install source (e.g. `git`, `npm`, `local-folder`) is shown in the plugin's Overview tab as **Install source**.

## Installing a plugin

There are two install entry points in the Installed tab:

- **Import Plugin** — choose a local `.zip` file.
- **Install from Source** — install from any of six sources (below).

Plugins can also be installed from a marketplace via the **Discover** tab (see [Marketplaces](#marketplaces)).

### Install from Source

Click **Install from Source** and pick a source type. The dialog defaults to **Local Folder**. Each source has its own form.

| Source | What it accepts | Auth model |
|---|---|---|
| **Local Zip** | A `.zip` file on disk. | None. |
| **Local Folder** | A directory on disk containing the plugin. The folder is copied into the plugins cache; your source folder is never modified. | None. |
| **Git** | Any HTTPS or SSH git URL (`https://…`, `git@…`, `ssh://…`). Plain HTTP is rejected. | Your SSH agent and OS git credential helper. No credentials are passed on the command line. |
| **GitHub** | A GitHub repo URL, a release asset URL, or a `releases/latest` URL. Repo URLs are cloned; release asset URLs are downloaded directly. | Public repos and public release assets only. For private repos, use the Git source with a credential helper. |
| **npm** | Any package on the public npm registry, plus GitHub Packages and scoped registries with an auth token. | Optional registry URL and auth token. The token is written to a 0600 `.npmrc` in the install workdir and **never stored** after install. |
| **URL** | Paste any URL — the manager auto-detects whether it's a `.zip`, a git URL, or a GitHub URL and routes accordingly. Plain HTTP is rejected. | Inherits from the matched source. |

:::info Security guarantees

Regardless of source, every install:

- Applies the same size and file-count limits (50 MB compressed / 250 MB extracted / 5,000 files).
- Never executes plugin code during install — no `npm install`, no `pip install`, no lifecycle scripts.
- `npm pack` runs with `--ignore-scripts` so package lifecycle scripts cannot run.
- All spawned `git`/`npm`/`tar` processes are killed if they exceed the 60-second timeout.
- All downloads must use HTTPS (HTTP is rejected) and follow at most 5 redirects.

:::

## Marketplaces

A **marketplace** is a catalog of plugins you can browse and install from. The Plugin Manager has three marketplace-related tabs.

### Marketplaces tab

Manage your marketplace sources:

- **Add Marketplace** — register a new marketplace. The source can be an `owner/repo` shorthand, a git URL, a local folder, or a direct `marketplace.json` URL. An optional branch/tag/commit lets you pin a revision.
- **Refresh All** — re-fetch every marketplace catalog.
- Per row — **refresh** or **remove** a single marketplace. Removing a marketplace does **not** uninstall plugins you already installed from it.

### Discover tab

Browse everything your marketplaces offer:

- **Search** by plugin name or description.
- Filter by **marketplace** and by **status** (All / Installed / Not installed).
- Each row shows the plugin, its marketplace, version, and status. Click **Details** to see the full description, author, resolved source, and any risk flags.

#### Risk flags and confirmation

Before installing from a marketplace, aiFetchly flags potentially sensitive behavior:

- **Starts MCP servers**
- **Declares hooks**
- **Declares monitors**
- **Installs from npm**
- **Not pinned to a commit**

If any flag is present you must check **"I understand the risks and want to install."** before the Install button is enabled.

If you already have the plugin at a different version, the button reads **Reinstall** instead of Install.

### Errors tab

Lists marketplaces whose health is not **Healthy**, with their health state and error messages. Use it to diagnose a marketplace that won't load.

## Plugin health states

| State | Meaning |
|---|---|
| **Healthy** | All components loaded successfully. |
| **Disabled** | You've toggled the plugin off. None of its capabilities are exposed to the AI. |
| **Needs Configuration** | The plugin includes a Python skill; the runtime will set up its virtual environment on first use. |
| **Partial Load** | Some components loaded, others failed. The Diagnostics tab shows which. |
| **Invalid** | The plugin manifest or install state is broken. |
| **Missing Files** | The install path is gone (e.g. deleted from disk). |

## The detail panel

Click any plugin row to open the detail dialog with **nine tabs**.

### Overview

Version, source, imported-from URI, install path, current health, **commands** and **hooks** counts, author, **install source** (kind and ref), marketplace (if installed from one), and description.

### Skills

Each skill the plugin owns, with a health chip and an individual **enable/disable** switch.

### Subagents

Each subagent the plugin owns — name (with ID), mode, tool count, health, and an individual **enable/disable** switch. Empty if the plugin ships no subagents.

### Commands

The slash commands the plugin contributes — `/name`, description, aliases, argument hint, and enabled/disabled status. **Read-only** (commands can't be toggled individually here).

### Hooks

The hooks the plugin contributes — id, event, matcher, type, and status. **Read-only**.

### MCP Servers

Each MCP server the plugin owns, with its transport and an **Enabled** toggle per server. (Tool discovery and connection testing for MCP servers happen on the dedicated **[MCP Tools](./mcp-tools)** page, not here.)

### Permissions

The permissions the plugin declares in its manifest, shown as read-only chips.

### Diagnostics

Click **Export Diagnostics** to generate a JSON bundle of the plugin's load state and per-component errors, shown inline. Use it when troubleshooting or reporting an issue.

### Manifest

Read-only, formatted view of the plugin manifest.

## Enabling and disabling

- **Plugin-level switch** (in the table Actions column): turns the whole plugin on or off. Disabling a plugin hides **all** of its capabilities from the AI.
- **Component-level switches** (in the Skills, Subagents, and MCP Servers tabs): turn an individual skill, subagent, or MCP server on or off within the plugin.

**Commands and Hooks have no per-component toggle** — they follow the plugin-level switch.

Effective enablement for any capability is: **plugin enabled AND (component enabled, where a toggle exists)**.

## Uninstalling

1. Click the **trash** icon in a plugin's Actions column.
2. A confirmation dialog asks: _"Uninstall this plugin? This removes its skills and MCP servers."_
3. Confirm to remove.

Uninstall removes the plugin's bundled capabilities and its cached files. It does not delete files outside the plugin install root, and it does not touch standalone skills, commands, agents, hooks, or MCP servers you added yourself.

## Plugin packages and the manifest

A plugin is a directory (or zip of one) with this layout:

```text
my-plugin/
├── .aifetchly-plugin/
│   └── plugin.json          # manifest (root-level plugin.json also accepted)
├── skills/
│   └── my-skill/
│       ├── manifest.json
│       └── main.js
├── agents/                  # subagent markdown files (optional)
├── commands/                # slash command markdown files (optional)
├── hooks/                   # hook definitions (optional)
├── mcp/
│   └── servers.json         # MCP server declarations
└── docs/
    └── README.md
```

The manifest (`plugin.json`) declares the plugin name, version, description, included capabilities (relative paths to skills, agents, commands, hooks, and MCP server configs), permissions, and optional dependencies.

:::note Claude-format plugins

aiFetchly also supports Claude-format plugins. Plugin-bundled subagents and commands authored in the Claude format are adapted automatically on install.

:::

## Troubleshooting

### Install fails with "path escapes plugin directory"

The plugin manifest references a file outside its own root. Reject the plugin — it's malformed or hostile.

### Install fails with "Package exceeds max size"

The plugin is larger than 50 MB compressed or 250 MB extracted. Trim its contents or pick a smaller plugin.

### Git install hangs

The clone exceeded the 60-second timeout. Check the repo size and network. The manager kills the `git` process on timeout; no zombie clone is left behind.

### npm install fails with 401 / 403

For private packages you need to provide an auth token. For GitHub Packages, the registry URL must be `https://npm.pkg.github.com` and the token must have `read:packages` scope.

### A marketplace won't load

Open the **Errors** tab to see the marketplace's health state and error message. Common causes: an unreachable URL, a malformed `marketplace.json`, or a git ref that doesn't exist. Click **Refresh** on the marketplaces row to retry, or **Remove** it and re-add with the correct source.

### Plugin shows "Needs Configuration"

The plugin bundles a Python skill. The Python environment is set up the first time the skill runs. You can also run the skill once manually to trigger setup.

### Plugin shows "Missing Files"

The install path was deleted from disk. Reinstall the plugin to restore it.

## Next steps

- [AI Skills](./ai-skills) — how skills work inside a plugin.
- [Subagents](./subagents) — scoped specialists a plugin can bundle.
- [Slash Commands](./slash-commands) — reusable prompt/action commands.
- [Hooks](../settings/hooks) — lifecycle hooks a plugin can declare.
- [MCP Tools](./mcp-tools) — how MCP servers work inside a plugin.
- [AI Chat V2](./ai-chat-v2) — where plugin capabilities show up as AI tools.
