---
id: workspace-memory
title: Workspace Memory
sidebar_label: Workspace Memory
description: Use workspace-scoped memory so AI Chat can remember project-specific decisions, workflows, conventions, references, and warnings.
---

# Workspace Memory

Workspace memory lets AI Chat remember project-specific context for an approved workspace. It is separate from global user memory and conversation memory, so details from one project are not reused in another project.

Use workspace memory for durable information that should apply whenever you work in the same project folder, campaign workspace, or repository.

## What Workspace Memory Remembers

Workspace memory is designed for project-specific knowledge:

| Type | Use it for |
|---|---|
| **Project** | Product, campaign, milestone, or project context that is not obvious from files. |
| **Decision** | User-approved product or technical decisions. |
| **Workflow** | Commands, review steps, or operating procedures for this workspace. |
| **Convention** | Coding, writing, naming, or UX conventions for this workspace. |
| **Reference** | Pointers to local files, docs, specs, or external resources. |
| **Warning** | Known traps, restricted actions, flaky tests, compliance rules, or security constraints. |

Workspace memory should not store secrets, API keys, cookies, private scraped lead data, full transcripts, bulky tool output, raw file contents, or temporary task progress.

## Workspace Scope

Workspace memory only works when the current AI Chat conversation has an approved workspace.

aiFetchly resolves the workspace to a stable workspace identity. If the selected folder is inside a Git repository, memory is scoped to the repository root. If no Git root is found, memory is scoped to the selected real path.

This means:

- Conversations using the same approved workspace can share workspace memory.
- Memories from one workspace are not injected into another workspace.
- If no workspace is approved, workspace memory cannot be opened or used.

## Opening Workspace Memory

1. Open **AI Chat**.
2. Choose or approve a workspace from the workspace area above the composer.
3. Click the **Memory** action on the workspace badge.

The Workspace memory dialog shows active memories for the current workspace. The badge also shows the active memory count.

## Creating a Memory

1. Open the Workspace memory dialog.
2. Click **Create memory**.
3. Choose a **Type**.
4. Enter a short **Title**.
5. Enter the **Content**.
6. Set **Confidence**.
7. Click **Save**.

Manual memories are saved only for the active approved workspace.

## Memory Fields

| Field | Description |
|---|---|
| **Type** | Category of memory: project, decision, workflow, convention, reference, or warning. |
| **Title** | Short label for scanning and search. |
| **Content** | The actual memory text. Keep it concise and durable. |
| **Confidence** | Confidence score from 0 to 100. Manual memories default high, but you can lower it for less certain notes. |
| **Status** | Available while editing: active, archived, or contradicted. |

## Searching and Reviewing

Use the search box to find workspace memories by title or content.

Each memory row shows:

- Type
- Title
- Content
- Status when not active
- Source, such as Manual, Chat, Agent task, or Auto-dream
- Updated time
- Last used time, when available
- Confidence

Turn on **Show archived** to include archived and contradicted memories in the list.

## Editing, Archiving, and Deleting

Open the Workspace memory dialog and use the row actions:

- **Edit** updates the type, title, content, confidence, or status.
- **Archive** hides the memory from the active list without deleting it.
- **Delete** permanently removes the memory after confirmation.

Archived memories are not shown unless **Show archived** is enabled.

## Workspace Auto-Summary

Workspace auto-summary, also called workspace auto-dream in the app internals, can consolidate useful project-specific information from conversations and agent tasks.

In the Workspace memory dialog:

- The status badge shows the active memory count and auto-summary status.
- **RUN AUTO SUMMARY** starts a manual consolidation run for the active workspace.
- The dialog shows the last run time when available.

Auto-summary is intended to create or update workspace memories such as decisions, workflows, references, and warnings. You can still inspect, edit, archive, or delete the resulting memories.

## Settings

Workspace memory is controlled from AI preferences in System Settings:

| Setting | Effect |
|---|---|
| **Workspace Memory Injection** | Injects relevant workspace memories into AI Chat context for the active approved workspace. |
| **Workspace Auto-Summary** | Consolidates workspace-specific memories from conversations and agent tasks in the background. |
| **Manual Workspace Memory** | Allows creating, editing, and deleting workspace memories by hand. Disabling it does not delete stored memories. |

The current user message still takes priority. If a workspace memory conflicts with what you ask in the current message, the current message should win.

## Best Practices

- Store decisions and conventions that would be tedious to repeat in every new chat.
- Store project commands that are not obvious from package scripts or docs.
- Store warnings for compliance, safety, environment issues, or known test traps.
- Keep memories short enough to be useful in prompt context.
- Prefer references to file paths or docs instead of copying large file contents.
- Archive outdated memories instead of leaving contradictory active guidance.
