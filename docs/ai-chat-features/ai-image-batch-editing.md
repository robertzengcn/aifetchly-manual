---
id: ai-image-batch-editing
title: Batch Image Editing
sidebar_label: Batch Image Editing
description: Apply the same edit to up to 50 generated images at once. Isolated per-image jobs, bounded concurrency, live progress, stop, and retry failed items.
---

# Batch Image Editing

Batch editing applies **one instruction to many images**. Instead of editing images one by one, aiFetchly runs a bounded background job with one isolated edit per image and shows a single progress card in the conversation. Typical jobs:

- "Give all 20 product photos a white background."
- "Brighten every picture from this generation."
- "Add my watermark text into each of these images."

## When batch editing is used

You end up in a batch in one of three ways:

1. **You ask for the same edit on more than three images.** Direct chat requests carry at most three images, so a larger set is routed to a batch automatically (aiFetchly asks you to confirm first).
2. **You select four or more images in the reference tray.** aiFetchly offers: "More than 3 images were selected. Run them as a batch of independent edits instead?" Confirm to start the batch, or decline and edit three at a time.
3. **You ask for a large numbered set**, for example "edit image 4 through image 12". The same confirmation appears before anything runs.

:::info Confirmed before any cost

A batch confirmation always shows the exact count before the job starts. Nothing runs, and no AI usage is charged, until you confirm.

:::

## Running a batch

1. **Generate or select the images** you want edited (see [AI Image Generation & Editing](./ai-image-generation)).
2. **Send one instruction** that applies to all of them, for example "replace the background with white on all of these."
3. **Confirm the batch** when the "Process as batch?" dialog appears. It lists how many images will be edited.
4. **Watch the progress card** in the conversation (details below). Results appear as soon as each item is durably saved.
5. **Handle the outcome**: download or review completed images, and retry anything that failed.

## The progress card

One card tracks the whole job. It never floods the conversation with one message per image:

- **Summary line**: `{completed} of {requested} completed · concurrency {concurrency}` plus the job status (running, completed, partial, failed, cancelled).
- **Stop batch**: stops the job at any time. Images already completed stay saved; items that never started are marked cancelled.
- **Expandable failures section**: shows each failed item with its file name and a short reason.
- **Retry failed items (N)**: after the job settles, reruns only the failed or cancelled items. Successful images are never re-processed.

### Partial success is safe

If 18 of 20 images succeed, you keep those 18 results. A failure on one image does not cancel its neighbors. Click **Retry failed items** to give the two failures another try.

## How a batch runs

Batch editing is built for scale without bloating the chat:

- **One image, one job.** Each image is edited by its own isolated AI request with your shared instruction. Input-to-output mapping is preserved: results are reported in the order you selected the images, not the order they finished.
- **Bounded concurrency.** Up to **3 images** process at the same time (configurable between 1 and 3 by the coordinator). A 50-image job is 50 small requests, not one giant request.
- **Light parent chat.** The main conversation only receives progress, summaries, and the finished images. Image bytes and per-item transcripts stay in the isolated workers, so chatting during and after a long batch stays fast.
- **Durable outputs.** Every finished image is saved locally before the progress card references it, so provider-side temporary links expiring cannot lose your results.

:::note Each image still costs AI usage

Batch isolation keeps the conversation context small, it does not make the edits free. Every image is one image-model operation. The confirmation dialog shows the item count up front, and the same tool approval rules as direct chat apply.

:::

## Limits

| Limit | Value |
|---|---|
| Images per batch job | 1 to 50 (duplicates removed automatically) |
| Parallel image edits | 1 to 3 (default 3) |
| Image inputs per single direct request | 3 |
| Same instruction for all items | Yes, one shared instruction per batch |
| Fusion (combining several images into one) | Not available in batch; use the direct path with up to 3 images |

## Troubleshooting

**Some items failed.**
Open the failures section on the progress card to see the reasons, then click **Retry failed items (N)**. Only the failures rerun.

**"This image exceeds the size limit."** or **"Unsupported image type."**
The stored original may be too large or in a format the editor cannot read (PNG, JPEG, WebP are supported). Regenerate the image, or save it to your workspace, resize or convert it there, and run the edit as a workspace-file batch.

**"The original image is no longer available."**
The stored file behind a reference is gone. Regenerate that image and start a new batch for it.

**"Image editing is unavailable: no edit-capable model is configured."**
Your [AI provider](../settings/ai-provider) does not provide an image editing model. Configure one and retry the failed items.

**I stopped the batch by mistake.**
Completed results are already saved. Click **Retry failed items** after the job settles: it also picks up the cancelled (never started) items.

**The batch seems stuck.**
Concurrency is bounded to three parallel edits, so a large job takes a while. Check the summary line: if the completed count stops climbing for a long time, use **Stop batch** and retry the remaining items.

## Next steps

- [AI Image Generation & Editing](./ai-image-generation) — generating images and direct one-to-three image editing.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — the full chat feature set, from Plan Mode to subagents.
