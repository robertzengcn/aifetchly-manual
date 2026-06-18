---
id: plugin-manager
title: Plugin Manager
sidebar_label: Plugin Manager
description: Install, manage, and uninstall plugin bundles that package AI Skills and MCP servers together. Install from local zip, local folder, git, GitHub, npm, or URL.
---

# Plugin Manager

A **plugin** is a single package that bundles one or more **AI Skills** and **MCP servers** with a shared manifest, install path, and ownership record. The Plugin Manager is the central place to install, inspect, enable, disable, configure, and uninstall plugins.

Plugins are an organizational layer on top of the existing [AI Skills](./ai-skills) and [MCP Tools](./mcp-tools) systems. Installing a plugin installs its skills and MCP servers; uninstalling a plugin removes them — all as a unit.

## Why use plugins?

- **One install, multiple capabilities.** A "LinkedIn Research Pack" plugin can ship a search skill plus a LinkedIn MCP server in one package.
- **Clean uninstall.** Plugin-owned skills and MCP servers are tracked. Removing the plugin removes exactly what it added — nothing else.
- **Per-plugin enable/disable.** Disable a plugin to hide all of its capabilities from the AI without losing your settings.
- **Provenance.** Each plugin records where it came from (git URL, npm package, etc.) so you can audit and later update it.

## Opening the Plugin Manager

**From the left navigation:** click **Plugins** (puzzle icon).

**From System Settings:** Settings → Plugins.

The page has a toolbar (search, filters, Import, Install from Source, Reload), a plugin table, and a detail panel.

## Installing a plugin

There are two install buttons in the toolbar:

- **Import Plugin** — choose a local `.zip` file (the original install path, still supported).
- **Install from Source** — install from any of six sources (see below).

### Install from Source

Click **Install from Source** and pick a source type. Each source has its own form.

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
- All HTTPS downloads must use HTTPS (HTTP is rejected) and follow at most 5 redirects.

:::

### Provenance

After install, each plugin row records:

- **Source kind** (e.g. `git`, `npm`, `local-folder`).
- **Source URI** (the repo URL, npm package name, or folder path).
- **Source ref** (branch / tag / version).

These appear in the plugin's Overview tab and will be used by a future "update from source" feature.

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

Click any plugin row to open the detail panel with six tabs.

### Overview

Description, author, version, install path, component counts, current health, and the source provenance.

### Skills

Every skill the plugin owns. Toggle skills on/off individually, view manifest, parameters schema, supported file types, and permission status.

### MCP Servers

Every MCP server the plugin owns. See transport, config status, tool count. **Discover Tools** to refresh the tool list, **Test Connection** to verify the server is reachable, and toggle individual tools on/off.

### Permissions

Declared permissions (from the manifest), currently granted permissions, install-time warnings, and a revoke action per permission.

### Diagnostics

Last load result, per-component errors, validation errors. Use **Copy JSON** to grab a sanitized bundle for support. Secrets are automatically redacted.

### Manifest

Read-only, formatted view of the plugin manifest.

## Enabling and disabling

- **Plugin-level toggle** (in the toolbar or table): turns the whole plugin on or off. Disabling a plugin hides **all** of its skills and MCP tools from the AI, but preserves your per-component settings for when you re-enable.
- **Component-level toggles** (in the Skills and MCP Servers tabs): turn a single skill or MCP server on/off inside the plugin. These settings persist across plugin enable/disable cycles.

Effective enablement for any capability is: **plugin enabled AND component enabled**.

## Uninstalling

1. Click the **Uninstall** action on a plugin row.
2. A confirmation dialog lists exactly what will be removed: skills, MCP servers, cached files, permission grants.
3. Confirm to remove.

Uninstall:

- Always removes plugin-owned skill and MCP rows.
- Removes the plugin's cached files from the plugins directory.
- Revokes permissions granted at install time.
- Never deletes files outside the plugin install root.
- Never touches standalone skills or MCP servers you added manually.
- Preserves chat history and past tool execution logs.

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
├── mcp/
│   └── servers.json         # MCP server declarations
├── docs/
│   └── README.md
└── assets/
```

The manifest (`plugin.json`) declares the plugin name, version, description, included skills (relative paths to skill manifests), included MCP servers (relative paths to servers.json files), permissions, and optional dependencies.

### MCP server declaration

`mcp/servers.json` follows the common MCP config shape:

```json
{
  "mcpServers": {
    "my-server": {
      "transport": "stdio",
      "command": "node",
      "args": ["./server/index.js"],
      "env": { "API_TOKEN": "${user:API_TOKEN}" },
      "timeout": 30000
    }
  }
}
```

Values like `${user:API_TOKEN}` are placeholders — the user supplies the secret at configuration time; it is never stored in the manifest.

## Installing plugins from each source — examples

### Local folder (developer workflow)

1. Build your plugin in a local directory.
2. Click **Install from Source** → **Local Folder**.
3. Pick the directory.
4. The folder is copied into the plugins cache. Edit your source and re-install to update.

### Git (private repo)

1. Make sure your SSH key or git credential helper can access the repo.
2. Click **Install from Source** → **Git**.
3. Paste the URL: `git@github.com:myorg/my-plugin.git`.
4. Optionally specify a branch, tag, or commit.
5. The manager runs `git clone --depth 1 --branch <ref>` and installs the result.

### GitHub release asset

1. Click **Install from Source** → **GitHub**.
2. Paste the release asset URL: `https://github.com/myorg/my-plugin/releases/download/v1.2.0/my-plugin.zip`.
3. The asset is downloaded and unzipped.

### npm package (private registry)

1. Click **Install from Source** → **npm**.
2. Enter the package name (e.g. `@myorg/aifetchly-plugin`).
3. Optionally enter the version, registry URL (e.g. `https://npm.pkg.github.com`), and auth token.
4. The auth token is used once to download the tarball and is then discarded.

### URL (auto-detected)

1. Click **Install from Source** → **URL**.
2. Paste any URL. The manager figures out whether it's a zip, a git URL, or a GitHub URL.
3. Plain HTTP URLs are rejected; use HTTPS.

## Troubleshooting

### Install fails with "path escapes plugin directory"

The plugin manifest references a file outside its own root. Reject the plugin — it's malformed or hostile.

### Install fails with "Package exceeds max size"

The plugin is larger than 50 MB compressed or 250 MB extracted. Trim its contents or pick a smaller plugin.

### Git install hangs

The clone exceeded the 60-second timeout. Check the repo size and network. The manager kills the `git` process on timeout; no zombie clone is left behind.

### npm install fails with 401 / 403

For private packages you need to provide an auth token. For GitHub Packages, the registry URL must be `https://npm.pkg.github.com` and the token must have `read:packages` scope.

### Plugin shows "Needs Configuration"

The plugin bundles a Python skill. The Python environment is set up the first time the skill runs. You can also run the skill once manually to trigger setup.

### Plugin shows "Missing Files"

The install path was deleted from disk. Reinstall the plugin to restore it.

## Next steps

- [AI Skills](./ai-skills) — how skills work inside a plugin.
- [MCP Tools](./mcp-tools) — how MCP servers work inside a plugin.
- [AI Chat V2](./ai-chat-v2) — where plugin capabilities show up as AI tools.
