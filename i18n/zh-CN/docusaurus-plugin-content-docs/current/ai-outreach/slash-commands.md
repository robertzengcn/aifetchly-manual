---
id: slash-commands
title: 斜杠命令
sidebar_label: 斜杠命令
description: 快速执行常用操作，将可复用的提示转化为自定义命令，在 AI Chat V2 中通过 / 即可调用。
---

# 斜杠命令

斜杠命令是您在 **AI Chat V2** 输入框中输入的简短快捷方式。以 `/` 开头发送消息，aiFetchly 会立即执行某个操作（清除聊天、查看状态、安装插件），或为您展开一个可复用的提示模板。

每个斜杠命令都带有 **来源徽章**，让您随时知道它的来源：

| 徽章 | 来源 | 含义 |
|---|---|---|
| **内置** | `built-in` | 随 aiFetchly 内置。始终可用。 |
| **用户** | `user` | 您在 `~/.aifetchly/commands/` 中创建的命令。 |
| **工作区** | `workspace` | 在当前工作区的 `.aifetchly/` 文件夹中定义的命令。需要该工作区受信任。 |
| **插件** | `plugin` | 由已安装插件提供的命令。 |

:::info 斜杠命令位于 AI Chat V2 中

斜杠命令可在 **[AI Chat V2](./ai-chat-v2)** 的输入框中使用。如果未看到 V2 面板，请从聊天图标或 `Ctrl/Cmd + K` 打开。

:::

## 使用斜杠命令

您可以完整输入命令，也可以从建议列表中选择。

### 键盘操作流程

1. 点击输入框，将 `/` 作为 **第一个字符** 输入 — 建议下拉列表将打开。
2. 继续输入以进行筛选。aiFetchly 会匹配命令的 **名称**、**别名** 或 **描述** 中的某个词。
3. 使用 `↑` / `↓` 移动高亮项，或用鼠标悬停。
4. 按 `Enter`（或点击）以 **选择** 命令。这会在输入框中插入 `/name ` 并关闭下拉列表 — 此时 **尚未** 发送。
5. 在插入的命令之后输入任何参数（例如要翻译的文本）。
6. 按 `Enter` 运行命令。（`Shift + Enter` 照常换行。）
7. 随时按 `Esc` 可关闭下拉列表而不进行选择。

| 按键 | 作用 |
|---|---|
| `/`（开头） | 打开建议下拉列表 |
| 继续输入 | 按名称 / 别名 / 描述筛选列表 |
| `↑` / `↓` | 移动高亮项 |
| `Enter` | 选择高亮的命令（填入 `/name `） |
| `Esc` | 关闭下拉列表 |
| `Shift + Enter` | 换行（输入框的常规行为） |

:::tip 完整输入命令

下拉列表只是一个辅助工具——您可以忽略它，自己输入命令名，例如 `/clear`。请注意，当下拉列表打开时，按 `Enter` 会选中高亮的匹配项而不是发送；请先按 `Esc` 关闭下拉列表，然后再按 `Enter` 运行您输入的内容。

:::

:::warning 命令仅在开头触发

只有当消息 **以 `/` 开头** 且没有附件时，才会被当作斜杠命令处理。如果您想发送以 `/` 开头的字面文本，请先添加一个空格或字符（例如 " `/path/to/file`"）。

:::

## 内置命令

这些命令随 aiFetchly 内置，且始终可用。它们会立即执行，不调用 AI（`/plugin` 例外，它会执行安装操作）。

| 命令 | 描述 |
|---|---|
| `/help` | 列出可用的斜杠命令及其来源。 |
| `/clear` | 清除当前对话。 |
| `/status` | 显示 AiFetchly 的配置状态、计数和诊断信息。 |
| `/skills` | 列出当前系统中可用的 AI 技能/工具。 |
| `/agents` | 列出可用的 AiFetchly 智能体（内置和动态）。 |
| `/reload-config` | 重新扫描 `~/.aifetchly` 并重新加载配置。 |
| `/goal` | 设定或替换 AI Chat 的当前活动目标并进入计划模式。 |
| `/loop` | 朝着活动目标运行有界的自主迭代。 |
| `/plugin` | 管理插件市场并从聊天中安装插件。 |

### `/help`

快速清点当前作用域内（内置 + 用户 + 工作区 + 插件）可用的每个命令，并显示各自的来源徽章。可用于发现您（或某个插件）添加的命令。

### `/clear`

清空当前对话。无需打开对话历史对话框即可重新开始。此操作无法撤销。

### `/status`

输出 aiFetchly 配置的快照：已加载多少命令、智能体、钩子和技能，产生了多少诊断信息，以及配置上次重新加载的时间。在排查未能加载的自定义命令时非常实用。

### `/skills` 和 `/agents`

`/skills` 列出当前系统中已启用的 AI 技能/工具。`/agents` 列出可用的 aiFetchly 智能体（内置和动态）。背景信息请参阅 [AI 技能](./ai-skills) 和 [子智能体](./subagents)。

### `/reload-config`

强制重新扫描 `~/.aifetchly` 并重新加载配置。在您于应用外 **手动编辑或添加** 了命令文件后，希望它们立即生效时使用。如果文件监视器正在运行，新命令通常会自动出现 — 此命令是手动后备方案。

### `/plugin`

唯一接受参数的内置命令。它让您无需离开聊天即可管理插件市场并安装插件。

```
/plugin marketplace add <source> [--ref <ref>] [--overwrite]
/plugin install <plugin@marketplace|source> [--overwrite] [--ref <ref>] [--kind <kind>]
```

`<source>` 可以是本地文件夹、`.zip` 文件、Git/GitHub/HTTPS URL、`owner/repo` GitHub 简写，或 `npm:<package>`。可选的 `--kind` 为 `local-zip | local-folder | git | github | npm | url` 之一。

示例：

```
/plugin marketplace add https://github.com/acme/aifetchly-plugins
/plugin install lead-tools@acme-plugins
/plugin install npm:@acme/awesome-plugin
```

完整的插件生命周期请参阅 [插件管理器](./plugin-manager)。


### `/goal` 与 `/loop`

与上面的其他内置命令不同，这两个由 AI 驱动并协同工作：`/goal` 设定一个持久且可验证的目标（并进入计划模式），`/loop <maxIterations>` 则朝着该目标运行有限次数的自主迭代。完成与否由证据驱动 —— 助手不能自行声明其目标已完成。

```text
/goal Build a Facebook campaign scraper and verify it works
/loop 5
```

有关验收标准、验证方式、循环上限、停止条件以及各状态含义，请参见专页 **[目标与循环命令](./goal-and-loop)**。
## 命令来源与优先级

来自这四种来源的命令会合并为一个列表。当两个命令同名时，由以下优先级决定运行哪一个：

**内置 → 工作区 → 用户 → 插件**

- **内置** 命令永远无法被覆盖。`/clear`、`/help` 等始终表示 aiFetchly 所定义的含义。
- **工作区** 命令会覆盖同名的 **用户** 命令，而后者又会覆盖 **插件** 命令。
- 别名同样适用：如果您为某个自定义命令设置了别名 `clear`，`/clear` 仍会运行内置命令（内置名称和别名始终优先）。

这意味着您可以放心地将某个自定义命令命名为 `outreach`，即使某个插件也定义了同名命令 — 您的命令会优先于插件；但如果存在同名内置命令，则内置命令会优先于您。

## 创建自定义命令

自定义命令是存储为小型 Markdown 文件的 **可复用提示模板**。它们非常适合您经常发送的提示：研究清单、固定的外联结构、翻译请求、摘要格式。

您可以将它们放在两个位置：

| 位置 | 作用域 | 信任 |
|---|---|---|
| `~/.aifetchly/commands/*.md` | 在 **每个** 聊天中可用（您的全局命令）。 | 自动受信任 — 因为是您创建的。 |
| `<workspace>/.aifetchly/commands/*.md` | **仅** 在该工作区处于活动状态时可用。 | 需要该工作区 [受信任](#workspace-commands-and-trust)。 |

`~` 代表您的主目录（macOS/Linux 上为 `/home/you`，Windows 上为 `%USERPROFILE%`）。`.aifetchly` 文件夹是 aiFetchly 的全局配置根目录。

### 文件格式

每个命令都是一个 `.md` 文件，包含一个小型的前置元数据头部和一个提示正文：

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

#### 前置元数据字段

| 字段 | 是否必填 | 说明 |
|---|---|---|
| `name` | 是 | 小写字母、数字、`-`、`_`。必须以字母开头。例如：`outreach`。这是您在 `/` 之后输入的内容。 |
| `description` | 是 | 最多 500 个字符。显示在建议下拉列表中。 |
| `type` | 是 | 自定义提示命令必须为 `prompt`。 |
| `argumentHint` | 否 | 最多 100 个字符。显示在名称旁边的提示，例如 `<text>`。 |
| `aliases` | 否 | 最多 10 个别名，每个都需遵循 `name` 的规则。以 YAML 字符串数组形式列出。 |

**正文**（第二个 `---` 之后的所有内容）是提示文本。它不能为空。

:::warning 使用确切的字段名

前置元数据解析器只能理解简单的 `key: value` 行和字符串数组 — 出于安全考虑，它 **并非** 完整的 YAML 解析器。请仅使用上述字段。不要添加嵌套映射、带引号的多行值或未知字段，并指望它们发挥作用。

:::

### `$ARGUMENTS` 占位符

您在命令名 **之后** 输入的任何内容都会成为该命令的参数。`$ARGUMENTS` 占位符用于控制该文本在提示中出现的位置：

- **正文包含 `$ARGUMENTS`** — 每处出现都会被替换为您的文本。
- **正文中没有 `$ARGUMENTS`，但您输入了内容** — 您的文本会被追加到正文末尾，因此绝不会被打无声丢弃。
- **您未输入任何内容** — 正文按原样使用。

以 `/outreach acme.com` 为例：

```
Research the company behind the following website, then write ...
more leads. Keep it under 120 words.

acme.com
```

### 更多示例

一个无参数命令（通过 `/review` 调用的固定清单）：

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

一个带别名的命令（可通过 `/translate` **或** `/tr` 调用）：

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

### 限制

- 每个命令文件：最多 **64 KB**。
- 每个来源最多 **200 个命令**。
- `description`：最多 500 个字符。`argumentHint`：最多 100 个。`aliases`：最多 10 个。

违反这些规则或前置元数据无效的文件会被跳过，并在 `/status` 中显示为一条诊断信息。

## 工作区命令与信任

放置在 **工作区** 的 `.aifetchly/commands/` 文件夹中的命令，是通过代码仓库与团队共享命令的强大方式。由于这些命令来自您可能刚刚检出的文件夹，aiFetchly 默认将其视为 **不受信任**。

- 当某个工作区定义了配置时，aiFetchly 会显示 **工作区 AiFetchly 配置** 提示，要求您在启用其命令之前审查并 **信任** 它。
- 在您信任该工作区之前，其命令在下拉列表中会被 **隐藏**，且无法调用 — 您会看到 *"Command /name is disabled because workspace config is not trusted."*
- 工作区命令的作用域仅限于其所属工作区。来自工作区 A 的命令 **绝不会** 在使用工作区 B 的聊天中可用。

这才是命令来源的真正安全关卡 — 在信任工作区之前，请务必审查其 `.aifetchly/` 文件夹，就像审查该仓库中的任何其他代码一样。

## 插件命令

插件可以将自己的斜杠命令与技能和 MCP 服务器打包在一起。插件安装后，其命令会自动出现，并带有 **插件** 徽章和 `plugin:<name>` 来源标识。有关安装和管理插件，请参阅 [插件管理器](./plugin-manager)；有关更广泛的插件自有能力模型，请参阅 [AI 技能](./ai-skills)。

## 提示

### 建议 ✅

- **使用 `/help`** 查看当前作用域内确切可用的命令。
- **将重复的提示转化为命令** — 如果您已多次输入相同的指令，请为它创建一个 `/command`。
- **为命令设置简短的别名**，以便快速输入（例如将 `tr` 作为 `translate` 的别名）。
- **当刚添加的自定义命令未出现时，运行 `/status`** — 诊断计数会告诉您是否有文件加载失败。
- **有意识地信任工作区配置** — 批准前先阅读命令内容。

### 不建议 ❌

- **不要指望覆盖内置命令** — `/clear`、`/help` 等始终优先。请选择其他名称。
- **不要将密钥放入命令文件中** — 它们是磁盘上的普通 Markdown，可能会通过仓库被共享。
- **不要信任您未曾阅读的工作区配置** — 其命令可以运行提示并调用工具。
- **不要指望 `Tab` 自动补全** — 请使用 `Enter` 从下拉列表中选择。

## 故障排除

### 我的自定义命令未出现在下拉列表中

- 确认文件位于 `~/.aifetchly/commands/<name>.md`（或对应的工作区路径），且以 `.md` 为后缀。
- 检查 `name` 是否符合规则（小写、以字母开头、仅包含字母/数字/`-`/`_`）。
- 确保存在 `type: prompt` 且正文不为空。
- 运行 `/status` — 如果诊断计数不为零，说明有文件未通过校验。运行 `/reload-config` 强制重新扫描。
- 切记内置优先级：同名的内置或工作区命令会覆盖您的命令。

### 我收到 "Unknown slash command: /name"

该命令在当前作用域内不可用。它可能是某个工作区命令，但其工作区未激活或未受信任；也可能是某个插件命令，但其插件未安装。`/help` 会列出当前所有可用的命令。

### 我收到 "Command /name is disabled."

该命令来自某个尚未被您信任的工作区。请打开工作区信任提示，在启用前先审查其配置。

### 选择命令后并未运行

这是预期行为。从下拉列表中选择命令会在输入框中插入 `/name ` 并关闭列表。请输入任何参数，然后按 `Enter` 运行。

## 下一步

- [AI Chat V2](./ai-chat-v2) — 斜杠命令所在的聊天。
- [AI 技能](./ai-skills) — AI 可调用的打包工具。
- [子智能体](./subagents) — 作用域内的专家，例如潜在客户研究员。
- [插件管理器](./plugin-manager) — 安装可带来专属命令的插件。
