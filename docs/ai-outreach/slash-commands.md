---
id: slash-commands
title: Slash Commands
sidebar_label: Slash Commands
description: Run common actions instantly and turn reusable prompts into custom commands you can invoke with / in AI Chat V2.
---

# Slash Commands

Slash commands are short shortcuts you type in the **AI Chat V2** composer. Start a message with `/` and aiFetchly either runs an action immediately (clear the chat, show status, install a plugin) or expands a reusable prompt template for you.

Every slash command has a **source badge** so you always know where it came from:

| Badge | Source | Meaning |
|---|---|---|
| **Built-in** | `built-in` | Ships with aiFetchly. Always available. |
| **User** | `user` | A command you created in `~/.aifetchly/commands/`. |
| **Workspace** | `workspace` | A command defined inside the current workspace's `.aifetchly/` folder. Requires the workspace to be trusted. |
| **Plugin** | `plugin` | A command contributed by an installed plugin. |

:::info Slash commands live in AI Chat V2

Slash commands are available in the **[AI Chat V2](./ai-chat-v2)** composer. If you don't see the V2 panel, open it from the chat icon or `Ctrl/Cmd + K`.

:::

## Using slash commands

You can either type a command in full or pick it from the suggestions list.

### The keyboard flow

1. Click the composer and type `/` as the **first character** — the suggestions dropdown opens.
2. Keep typing to filter. aiFetchly matches the command **name**, an **alias**, or a word in the **description**.
3. Use `↑` / `↓` to move the highlight, or hover with the mouse.
4. Press `Enter` (or click) to **pick** a command. This inserts `/name ` into the box and closes the dropdown — it does **not** send yet.
5. Type any arguments after the inserted command (for example the text to translate).
6. Press `Enter` to run it. (`Shift + Enter` inserts a newline as usual.)
7. Press `Esc` at any time to close the dropdown without selecting.

| Key | What it does |
|---|---|
| `/` (at start) | Opens the suggestions dropdown |
| Type more | Filters the list by name / alias / description |
| `↑` / `↓` | Moves the highlight |
| `Enter` | Picks the highlighted command (fills in `/name `) |
| `Esc` | Closes the dropdown |
| `Shift + Enter` | New line (normal composer behavior) |

:::tip Typing a command in full

The dropdown is just a helper — you can ignore it and type a command name yourself, for example `/clear`. Note that while the dropdown is open, `Enter` picks the highlighted match instead of sending; press `Esc` to close the dropdown first, then `Enter` to run what you typed.

:::

:::warning Commands only trigger at the start

A message is treated as a slash command only when it **starts with `/`** and has no attachments. If you want to send literal text that begins with `/`, add a space or word first (for example, " `/path/to/file`").

:::

## Built-in commands

These ship with aiFetchly and are always available. They run instantly without calling the AI (except `/plugin`, which performs an install action).

| Command | Description |
|---|---|
| `/help` | List available slash commands and their sources. |
| `/clear` | Clear the current conversation. |
| `/status` | Show AiFetchly configuration status, counts, and diagnostics. |
| `/skills` | List currently available AI skills/tools in this system. |
| `/agents` | List available AiFetchly agents (built-in and dynamic). |
| `/reload-config` | Rescan `~/.aifetchly` and reload configuration. |
| `/plugin` | Manage plugin marketplaces and install plugins from chat. |

### `/help`

Runs a quick inventory of every command available in your current scope (built-in + user + workspace + plugin), each shown with its source badge. Use it to discover commands you (or a plugin) have added.

### `/clear`

Empties the current conversation. Use it to start fresh without opening the conversation history dialog. This cannot be undone.

### `/status`

Prints a snapshot of your aiFetchly configuration: how many commands, agents, hooks, and skills are loaded, how many diagnostics were raised, and when the config was last reloaded. Handy when troubleshooting custom commands that did not load.

### `/skills` and `/agents`

`/skills` lists the AI skills/tools currently enabled in this system. `/agents` lists available aiFetchly agents (built-in and dynamic). See [AI Skills](./ai-skills) and [Subagents](./subagents) for background.

### `/reload-config`

Forces a rescan of `~/.aifetchly` and reloads the configuration. Use it after you have **manually edited or added** command files outside the app and want them to appear immediately. If the file watcher is running, new commands usually appear on their own — this is the manual fallback.

### `/plugin`

The only built-in that takes arguments. It lets you manage plugin marketplaces and install plugins without leaving the chat.

```
/plugin marketplace add <source> [--ref <ref>] [--overwrite]
/plugin install <plugin@marketplace|source> [--overwrite] [--ref <ref>] [--kind <kind>]
```

The `<source>` can be a local folder, a `.zip` file, a Git/GitHub/HTTPS URL, `owner/repo` GitHub shorthand, or `npm:<package>`. The optional `--kind` is one of `local-zip | local-folder | git | github | npm | url`.

Examples:

```
/plugin marketplace add https://github.com/acme/aifetchly-plugins
/plugin install lead-tools@acme-plugins
/plugin install npm:@acme/awesome-plugin
```

See [Plugin Manager](./plugin-manager) for the full plugin lifecycle.

## Command sources and precedence

Commands from the four sources are merged into one list. When two commands share the same name, this precedence decides which one runs:

**Built-in → Workspace → User → Plugin**

- **Built-in** commands can never be overridden. `/clear`, `/help`, etc. always mean what aiFetchly says they mean.
- A **workspace** command shadows a **user** command of the same name, which in turn shadows a **plugin** command.
- Aliases count too: if you give a custom command the alias `clear`, `/clear` still runs the built-in (built-in names and aliases always win).

This means you can safely name a custom command `outreach` even if a plugin also defines one — your command wins over the plugin, but a built-in with that name would win over you.

## Creating custom commands

Custom commands are **reusable prompt templates** stored as small Markdown files. They are perfect for prompts you send often: a research checklist, a fixed outreach structure, a translation request, a summary format.

There are two places you can put them:

| Location | Scope | Trust |
|---|---|---|
| `~/.aifetchly/commands/*.md` | Available in **every** chat (your global commands). | Trusted automatically — you created them. |
| `<workspace>/.aifetchly/commands/*.md` | Available **only** when that workspace is active. | Requires the workspace to be [trusted](#workspace-commands-and-trust). |

`~` is your home directory (`/home/you` on macOS/Linux, `%USERPROFILE%` on Windows). The `.aifetchly` folder is aiFetchly's global config root.

### File format

Each command is one `.md` file with a small frontmatter header and a prompt body:

```
---
name: outreach
description: Draft a cold outreach email for the given company.
type: prompt
argumentHint: <company website>
aliases:
  - reach
---
Research the company behind the following website, then write a concise,
friendly cold-outreach email proposing how aiFetchly could help them find
more leads. Keep it under 120 words.

$ARGUMENTS
```

#### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `name` | Yes | Lowercase letters, digits, `-`, `_`. Must start with a letter. Example: `outreach`. This is what you type after `/`. |
| `description` | Yes | Up to 500 characters. Shown in the suggestions dropdown. |
| `type` | Yes | Must be `prompt` for custom prompt commands. |
| `argumentHint` | No | Up to 100 characters. A hint shown next to the name, e.g. `<text>`. |
| `aliases` | No | Up to 10 alternative names, each following the `name` rules. Listed as a YAML string array. |

The **body** (everything after the second `---`) is the prompt text. It must be non-empty.

:::warning Use the exact field names

The frontmatter parser only understands simple `key: value` lines and string arrays — it is intentionally **not** a full YAML parser, for security. Stick to the fields above. Do not add nested maps, quoted multi-line values, or unknown fields expecting them to do something.

:::

### The `$ARGUMENTS` token

Whatever you type **after** the command name becomes the command's arguments. The `$ARGUMENTS` token controls where that text lands in your prompt:

- **Body contains `$ARGUMENTS`** — every occurrence is replaced with your text.
- **Body has no `$ARGUMENTS` but you typed something** — your text is appended to the end of the body, so it is never silently dropped.
- **You typed nothing** — the body is used exactly as written.

Example with `/outreach acme.com`:

```
Research the company behind the following website, then write ...
more leads. Keep it under 120 words.

acme.com
```

### A few more examples

A no-argument command (a fixed checklist you invoke with `/review`):

```
---
name: review
description: Load my standard lead-review checklist into the chat.
type: prompt
---
Review the most recent lead in this conversation against my checklist:
1. Is the website a real business?
2. What product/service do they sell?
3. Who is the likely decision-maker?
4. What is a relevant hook for outreach?
Return the answers as a short table.
```

A command with an alias (invocable as `/translate` **or** `/tr`):

```
---
name: translate
description: Translate the given text to English.
type: prompt
argumentHint: <text>
aliases:
  - tr
---
Translate the following text to English:

$ARGUMENTS
```

### Limits

- Each command file: up to **64 KB**.
- Up to **200 commands** per source.
- `description`: up to 500 characters. `argumentHint`: up to 100. `aliases`: up to 10.

Files that break these rules, or have invalid frontmatter, are skipped and show up as a diagnostic in `/status`.

## Workspace commands and trust

Commands placed in a **workspace's** `.aifetchly/commands/` folder are a powerful way to share commands with a team via a repo. Because they come from a folder you might have just checked out, aiFetchly treats them as **untrusted by default**.

- When a workspace defines config, aiFetchly shows a **Workspace AiFetchly config** prompt asking you to review and **trust** it before its commands are enabled.
- Until you trust the workspace, its commands are **hidden** from the dropdown and cannot be dispatched — you'll see *"Command /name is disabled because workspace config is not trusted."*
- Workspace commands are scoped to their workspace. A command from workspace A is **never** available in a chat that uses workspace B.

This is the real safety gate for where commands come from — always review a workspace's `.aifetchly/` folder before trusting it, just as you would review any other code in that repo.

## Plugin commands

Plugins can bundle their own slash commands alongside skills and MCP servers. Once a plugin is installed, its commands appear automatically with a **Plugin** badge and a `plugin:<name>` source id. See [Plugin Manager](./plugin-manager) for installing and managing plugins, and [AI Skills](./ai-skills) for the broader plugin-owned capability model.

## Tips

### DO ✅

- **Use `/help`** to see exactly which commands are available in your current scope.
- **Turn repeated prompts into commands** — if you've typed the same instructions three times, make a `/command` for it.
- **Give commands short aliases** so they're fast to type (e.g. `tr` for `translate`).
- **Run `/status`** when a custom command you just added doesn't appear — the diagnostic count tells you if a file failed to load.
- **Trust workspace config deliberately** — read the commands before approving.

### DON'T ❌

- **Don't expect to override built-ins** — `/clear`, `/help`, etc. always win. Pick a different name.
- **Don't put secrets in command files** — they're plain Markdown on disk and may be shared via a repo.
- **Don't trust a workspace config you haven't read** — its commands can run prompts and invoke tools.
- **Don't expect `Tab` to autocomplete** — use `Enter` to pick from the dropdown.

## Troubleshooting

### My custom command doesn't appear in the dropdown

- Confirm the file is at `~/.aifetchly/commands/<name>.md` (or the workspace equivalent) and ends in `.md`.
- Check the `name` matches the rules (lowercase, starts with a letter, only letters/digits/`-`/`_`).
- Make sure `type: prompt` is present and the body is non-empty.
- Run `/status` — if the diagnostics count is non-zero, a file failed validation. Run `/reload-config` to force a rescan.
- Remember the built-in precedence: a built-in or workspace command with the same name will shadow yours.

### I get "Unknown slash command: /name"

The command isn't available in the current scope. It may be a workspace command whose workspace isn't active or trusted, or a plugin command whose plugin isn't installed. `/help` lists everything currently available.

### I get "Command /name is disabled."

The command comes from a workspace whose config you haven't trusted yet. Open the workspace trust prompt and review the config before enabling it.

### Selecting a command didn't run it

That's expected. Picking a command from the dropdown inserts `/name ` into the box and closes the list. Type any arguments, then press `Enter` to run it.

## Next steps

- [AI Chat V2](./ai-chat-v2) — the chat where slash commands live.
- [AI Skills](./ai-skills) — packaged tools the AI can call on.
- [Subagents](./subagents) — scoped specialists like the Lead Researcher.
- [Plugin Manager](./plugin-manager) — install plugins that bring their own commands.
