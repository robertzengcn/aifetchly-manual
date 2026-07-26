---
id: plugin-manager
title: 插件管理器
sidebar_label: 插件管理器
description: 安装、浏览并管理将 AI Skills、Subagents、斜杠命令、Hooks 和 MCP 服务器打包在一起的插件。支持从本地 zip/文件夹、git、GitHub、npm、URL 或插件市场安装。
---

# 插件管理器

**插件**是一个独立的软件包，它将一项或多项扩展能力——**AI Skills**、**Subagents**、**斜杠命令**、**Hooks** 和/或 **MCP 服务器**——打包到一个清单、一条安装路径和一条归属记录之下。插件管理器是您安装、浏览、查看、启用、禁用和卸载插件的地方。

插件建立在独立的 [AI Skills](./ai-skills)、[Subagents](./subagents)、[斜杠命令](./slash-commands)、[Hooks](../settings/hooks) 和 [MCP Tools](./mcp-tools) 系统之上。安装插件时会注册其打包的所有能力；卸载时则会全部移除——所有操作作为一个整体执行。

## 打开插件管理器

**从左侧导航**：点击 **Plugins**（拼图图标）。

**从系统设置**：打开 **System Setting**，然后点击 **Plugins**。

该页面分为**四个标签页**：

| 标签页 | 用途 |
|---|---|
| **已安装** | 已在您本机上的插件——安装、启用/禁用、查看和卸载。 |
| **发现** | 浏览插件市场目录并从中安装插件。 |
| **市场** | 添加、刷新和移除为"发现"标签页提供内容的市场来源。 |
| **错误** | 加载失败的市场及其错误详情。 |

## 已安装标签页

**已安装**标签页的顶部是一个工具栏（包含三项操作），下方是包含每个已安装插件的表格。

### 工具栏

- **重新加载** — 重新扫描已安装的插件。
- **导入插件** — 从本地 `.zip` 文件安装。
- **从来源安装** — 从六种来源之一安装（参见[从来源安装](#从来源安装)）。

### 插件表格

| 列 | 说明 |
|---|---|
| **Plugin** | 插件名称。 |
| **Version** | 已安装的版本号。 |
| **Source** | **内置**、**市场** 或 **本地**。 |
| **Imported From** | 来源（文件夹路径、git URL、npm 包等）。 |
| **SubAgent** | 插件打包的 subagent 数量。 |
| **Skills** | 技能数量。 |
| **Hooks** | Hooks 数量。 |
| **MCP Servers** | MCP 服务器数量。 |
| **Status** | 当前的健康状态（参见[插件健康状态](#插件健康状态)）。 |
| **Actions** | 一个插件级别的 **enable/disable**（启用/禁用）开关以及一个 **trash**（垃圾桶，卸载）按钮。 |

**Source** 列显示三种粗略徽章之一——**内置**、**市场** 或 **本地**。更具体的安装来源（例如 `git`、`npm`、`local-folder`）显示在插件 Overview（概览）标签页的 **Install source** 中。

## 安装插件

在"已安装"标签页中有两个安装入口：

- **导入插件** — 选择一个本地 `.zip` 文件。
- **从来源安装** — 从六种来源之一安装（见下文）。

插件也可以通过 **发现** 标签页从市场安装（参见[市场](#市场)）。

### 从来源安装

点击 **从来源安装** 并选择一种来源类型。对话框默认选择 **Local Folder**。每种来源都有各自的表单。

| 来源 | 接受的内容 | 鉴权方式 |
|---|---|---|
| **Local Zip** | 磁盘上的一个 `.zip` 文件。 | 无。 |
| **Local Folder** | 磁盘上一个包含该插件的目录。该文件夹会被复制到插件缓存中；您的源文件夹永远不会被修改。 | 无。 |
| **Git** | 任意 HTTPS 或 SSH git URL（`https://…`、`git@…`、`ssh://…`）。纯 HTTP 会被拒绝。 | 使用您的 SSH 代理和操作系统 git 凭据助手。命令行不会传递任何凭据。 |
| **GitHub** | GitHub 仓库 URL、release 资源 URL，或 `releases/latest` URL。仓库 URL 会被克隆；release 资源 URL 会被直接下载。 | 仅支持公开仓库和公开 release 资源。对于私有仓库，请使用 Git 来源并配合凭据助手。 |
| **npm** | 公共 npm registry 上的任意包，以及 GitHub Packages 和带 auth token 的 scoped registry。 | 可选的 registry URL 和 auth token。该 token 会被写入安装工作目录中一个权限为 0600 的 `.npmrc` 文件，安装后**绝不存储**。 |
| **URL** | 粘贴任意 URL——管理器会自动检测它是 `.zip`、git URL 还是 GitHub URL，并据此路由。纯 HTTP 会被拒绝。 | 继承自匹配到的来源。 |

:::info 安全保障

无论从哪种来源安装，每次安装都会：

- 应用相同的体积和文件数量限制（压缩后 50 MB / 解压后 250 MB / 5,000 个文件）。
- 安装期间绝不执行插件代码——不执行 `npm install`，不执行 `pip install`，不执行任何生命周期脚本。
- `npm pack` 会带 `--ignore-scripts` 运行，因此包的生命周期脚本无法运行。
- 所有派生的 `git`/`npm`/`tar` 进程如果超过 60 秒超时就会被终止。
- 所有下载必须使用 HTTPS（HTTP 会被拒绝），并且最多跟随 5 次重定向。

:::

## 市场

**市场（marketplace）** 是一个插件目录，您可以从中浏览和安装插件。插件管理器有三个与市场相关的标签页。

### 市场标签页

管理您的市场来源：

- **添加市场** — 注册一个新的市场。来源可以是 `owner/repo` 简写、git URL、本地文件夹，或一个直接的 `marketplace.json` URL。可选的 branch/tag/commit 让您可以锁定到某个版本。
- **全部刷新** — 重新拉取每个市场的目录。
- 每一行 — **refresh**（刷新）或 **remove**（移除）单个市场。移除某个市场**不会**卸载您已经从中安装的插件。

### 发现标签页

浏览您的市场提供的所有内容：

- 按插件名称或描述 **Search**（搜索）。
- 按 **marketplace**（市场）和 **status**（状态）筛选（全部 / 已安装 / 未安装）。
- 每一行显示该插件、其所属市场、版本和状态。点击 **详情** 可查看完整描述、作者、解析后的来源以及任何风险标志。

#### 风险标志与确认

从市场安装前，aiFetchly 会对潜在的敏感行为进行标记：

- **启动 MCP 服务器**
- **声明 Hooks**
- **声明监视器**
- **从 npm 安装**
- **未锁定到特定 commit**

如果存在任何标志，您必须先勾选 **"我已了解风险并希望继续安装。"**，Install（安装）按钮才会启用。

如果您已经拥有该插件的其他版本，按钮会显示为 **重新安装** 而不是 Install（安装）。

### 错误标签页

列出健康状态不是 **健康** 的市场，及其健康状态和错误消息。当某个市场无法加载时，可以用它来诊断问题。

## 插件健康状态

| 状态 | 含义 |
|---|---|
| **健康** | 所有组件均已成功加载。 |
| **已禁用** | 您已将该插件关闭。其任何能力都不会暴露给 AI。 |
| **需要配置** | 该插件包含一个 Python 技能；运行时会在首次使用时设置其虚拟环境。 |
| **部分加载** | 部分组件加载成功，其他组件失败。诊断（Diagnostics）标签页会显示具体是哪些。 |
| **无效** | 插件清单或安装状态已损坏。 |
| **文件缺失** | 安装路径不存在（例如已从磁盘删除）。 |

## 详情面板

点击任意插件行即可打开详情对话框，其中包含**九个标签页**。

### Overview（概览）

版本号、来源、导入来源 URI、安装路径、当前健康状态、**commands** 和 **hooks** 计数、作者、**Install source**（安装来源：类型和引用）、市场（如果是通过某个市场安装的）以及描述。

### Skills（技能）

该插件拥有的每个技能，附带一个健康状态标签和一个单独的 **enable/disable**（启用/禁用）开关。

### Subagents（子代理）

该插件拥有的每个 subagent——名称（含 ID）、模式、工具数量、健康状态，以及单独的 **enable/disable**（启用/禁用）开关。如果插件不含 subagent，则为空。

### Commands（命令）

该插件提供的斜杠命令——`/name`、描述、别名、参数提示以及启用/禁用状态。**只读**（不能在此单独切换命令）。

### Hooks（钩子）

该插件提供的 hooks——id、event、matcher、type 和 status。**只读**。

### MCP Servers（MCP 服务器）

该插件拥有的每个 MCP 服务器，附带其传输方式以及每个服务器一个 **Enabled** 开关。（MCP 服务器的工具发现和连接测试在专门的 **[MCP Tools](./mcp-tools)** 页面上进行，而不是这里。）

### Permissions（权限）

该插件在其清单中声明过的权限，以只读标签的形式展示。

### Diagnostics（诊断）

点击 **导出诊断信息** 可生成一个 JSON 数据包，包含该插件的加载状态和每个组件的错误，内容会在页面内联展示。在排查问题或上报 bug 时使用。

### Manifest（清单）

插件清单的只读、格式化视图。

## 启用与禁用

- **插件级开关**（在表格的 Actions 列中）：开启或关闭整个插件。禁用一个插件会将其**所有**能力对 AI 隐藏。
- **组件级开关**（在 Skills、Subagents 和 MCP Servers 标签页中）：在插件内开启或关闭某个单独的技能、subagent 或 MCP 服务器。

**命令和 Hooks 没有组件级开关**——它们跟随插件级开关。

任何能力的最终有效启用状态为：**插件已启用 且（在存在开关的地方，组件也已启用）**。

## 卸载

1. 点击某个插件 Actions 列中的 **trash**（垃圾桶）图标。
2. 弹出的确认对话框会询问：_"确定卸载此插件？这将移除其包含的技能和 MCP 服务器。"_
3. 确认即可移除。

卸载会移除该插件打包的所有能力以及它的缓存文件。它不会删除插件安装根目录之外的文件，也不会影响您自行添加的独立技能、命令、agents、hooks 或 MCP 服务器。

## 插件包与清单

一个插件是一个具有以下布局的目录（或其 zip 压缩包）：

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

清单（`plugin.json`）声明了插件名称、版本、描述、所包含的能力（指向 skills、agents、commands、hooks 和 MCP 服务器配置的相对路径）、权限以及可选的依赖项。

:::note Claude 格式的插件

aiFetchly 也支持 Claude 格式的插件。以 Claude 格式编写的、插件打包的 subagents 和 commands 会在安装时自动适配。

:::

## 故障排查

### 安装失败并提示 "path escapes plugin directory"

插件清单引用了其自身根目录之外的文件。请拒绝该插件——它格式错误或带有恶意。

### 安装失败并提示 "Package exceeds max size"

插件压缩后超过 50 MB 或解压后超过 250 MB。请精简其内容或选择一个更小的插件。

### Git 安装卡住

克隆操作超过了 60 秒超时。请检查仓库大小和网络。管理器在超时时会终止 `git` 进程；不会留下任何僵尸克隆。

### npm 安装失败并返回 401 / 403

对于私有包，您需要提供 auth token。对于 GitHub Packages，registry URL 必须是 `https://npm.pkg.github.com`，并且 token 必须具有 `read:packages` 权限范围。

### 某个市场无法加载

打开 **错误** 标签页查看该市场的健康状态和错误消息。常见原因：URL 不可达、`marketplace.json` 格式错误，或某个 git 引用不存在。在该市场所在行点击 **refresh**（刷新）重试，或者 **remove**（移除）它后用正确的来源重新添加。

### 插件显示 "需要配置"

该插件打包了一个 Python 技能。Python 环境会在该技能首次运行时设置。您也可以手动运行该技能一次以触发设置。

### 插件显示 "文件缺失"

安装路径已从磁盘删除。重新安装该插件即可恢复。

## 后续步骤

- [AI Skills](./ai-skills) — 技能如何在插件中工作。
- [Subagents](./subagents) — 插件可以打包的、限定范围的专家。
- [斜杠命令](./slash-commands) — 可复用的提示/操作命令。
- [Hooks](../settings/hooks) — 插件可以声明的生命周期 hooks。
- [MCP Tools](./mcp-tools) — MCP 服务器如何在插件中工作。
- [AI Chat V2](./ai-chat-v2) — 插件能力作为 AI 工具出现的地方。
