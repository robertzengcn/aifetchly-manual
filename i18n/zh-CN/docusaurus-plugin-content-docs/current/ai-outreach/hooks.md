---
id: hooks
title: Hooks
sidebar_label: Hooks
description: 管理 aiFetchly 中围绕 AI 聊天和工具活动运行的生命周期 Hooks。
---

# Hooks

Hooks 允许 aiFetchly 在 AI 聊天生命周期的关键事件中运行已配置的操作，例如工具运行前、工具成功后或工具失败后。你可以用 Hooks 添加安全检查、注入合规上下文，或把本地工作流逻辑连接到 AI 工具活动。

## 打开 Hooks

1. 在左侧导航中点击 **设置**。
2. 打开 **系统设置**。
3. 点击 **管理 Hooks**。

Hooks 页面包含全局启用开关、Hook 列表、编辑面板和最近审计日志。

## 全局启用

使用 **Enable hooks globally** 打开或关闭整个 Hook 系统。

当全局 Hooks 关闭时，即使某个单独 Hook 已启用，也不会触发任何 Hook。这是在排查问题时暂停所有 Hook 行为的最快方式。

## Hook 来源

Hook 列表可以显示不同来源：

| 来源 | 说明 |
|---|---|
| **内置** | aiFetchly 自带的 Hooks。你可以启用或禁用它们，但不能编辑其定义。 |
| **用户** | 你在 Hooks 页面创建的命令 Hooks。可以编辑、启用、禁用或删除。 |
| **会话** | 绑定到当前会话的临时 Hooks。启用 **Show session hooks** 后会显示在列表中。 |

使用 **Event** 和 **Source** 筛选器缩小列表范围。

## 内置 Hooks

aiFetchly 包含用于安全和合规工作流的内置 Hooks。

| Hook | 默认状态 | 作用 |
|---|---|---|
| `builtin-block-dangerous-shell-delete` | 启用 | 在工具使用前检查 `shell_execute`，并阻止 `rm -rf /` 或 `rm -rf *` 等危险的递归删除命令。 |
| `builtin-scraping-compliance-context` | 禁用 | 在抓取工具调用后添加合规上下文。启用此 Hook 可能会影响与抓取相关的 AI 结果。 |

内置 Hooks 由代码定义。Hooks 页面只改变它们是否启用。

## 创建命令 Hook

1. 点击 **Add command hook**。
2. 检查或替换生成的 **Hook ID**。
3. 选择一个 **Event**。
4. 设置 **Matcher**。
5. 可选填写 **If condition**。
6. 输入要运行的本地 **Command**。
7. 设置 **Timeout (ms)** 和 **Failure mode**。
8. 可选填写 **Status message**。
9. 点击 **Save**。
10. 选择保存后的 Hook，并在准备使用时打开 **Enabled**。

新的命令 Hook 默认以禁用状态保存，因此你可以在运行前先检查配置。

## 命令 Hook 字段

| 字段 | 说明 |
|---|---|
| **Hook ID** | Hook 的唯一标识符。只能在创建 Hook 时编辑。 |
| **Event** | 可以触发 Hook 的生命周期事件。 |
| **Matcher** | 用于匹配事件目标的模式，例如工具名称。使用 `*` 可匹配所选事件下的所有目标。 |
| **If condition** | 可选模式，用于在工具相关事件中检查字符串输入值。例如，`git *` 可以匹配以 `git ` 开头的 shell 命令。 |
| **Command** | Hook 匹配时运行的本地命令。Hook 输入会以 JSON 形式通过 stdin 传给该命令。 |
| **Timeout (ms)** | aiFetchly 停止该命令前允许的最长运行时间。 |
| **Failure mode** | `warn` 会记录 Hook 错误但不阻塞 AI 流程。`block` 会把 Hook 执行错误转为被阻塞的操作。 |
| **Status message** | Hook 运行时显示的可选消息。 |
| **Enabled** | 控制已保存的 Hook 是否可以运行。 |

命令 Hook 应向 stdout 写入一个 JSON 对象。空对象表示“无更改”。支持的输出字段包括 `continue`、`reason`、`systemMessage`、`additionalContext`、`updatedInput`、`updatedToolOutput`、`suppressOutput` 和 `permissionDecision`。

阻止匹配操作的输出示例：

```json
{
  "continue": false,
  "reason": "This action is blocked by the team hook policy."
}
```

添加上下文的输出示例：

```json
{
  "additionalContext": "Use compliant outreach language and avoid storing unnecessary personal data."
}
```

## Hook 事件

| 事件 | 运行时机 |
|---|---|
| `SessionStart` | AI 聊天、计划或 Agent 会话启动时。 |
| `UserPromptSubmit` | 用户提交提示词时。 |
| `PreToolUse` | 工具执行前。 |
| `PostToolUse` | 工具成功完成后。 |
| `PostToolUseFailure` | 工具失败后。 |
| `PermissionRequest` | 准备工具权限请求时。 |
| `PermissionDenied` | 工具权限请求被拒绝时。 |
| `Stop` | AI 运行停止或完成时。 |

## 编辑和删除 Hooks

从列表中选择一个用户 Hook，即可编辑它的 matcher、条件、命令、timeout、失败模式或状态消息。点击 **Save** 应用更改。

要移除用户 Hook，点击 **Delete** 并确认。删除 Hook 是永久操作。

:::info 内置 Hook 限制

内置 Hooks 可以启用或禁用，但不能在 Hooks 页面编辑其事件、matcher 或行为。

:::

## 最近审计日志

**Recent audit log** 显示 Hook 活动，包括：

- 时间
- Hook ID
- 事件
- 状态
- 持续时间
- 原因

你可以按 **Event**、**Status** 或 **Hook** 筛选审计日志，并选择显示最近 100、500 或 1000 行。测试 Hooks 时，可以使用刷新按钮启动或暂停自动刷新。

常见状态包括：

| 状态 | 含义 |
|---|---|
| `started` | Hook 运行已开始。 |
| `success` | Hook 已成功完成。 |
| `blocked` | Hook 阻止了该操作。 |
| `failed` | Hook 失败。 |
| `timeout` | Hook 超过了超时时间。 |

## 安全注意事项

- 命令 Hooks 会运行本地进程。只创建你理解其命令含义的 Hooks。
- 保持 Hook 命令范围明确、行为可预测。
- 测试新 Hook 时优先使用 `warn`；只有在验证行为后再切换到 `block`。
- 启用 Hook 后使用审计日志确认它只在预期情况下触发。
