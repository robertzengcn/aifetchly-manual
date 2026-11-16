---
id: ai-image-generation
title: AI Image Generation & Editing
sidebar_label: AI Image Generation & Editing
description: Generate images by chatting with AI, edit them with a follow-up message (no workspace needed), select and order up to three images, and hand larger jobs to batch editing.
---

# AI Image Generation & Editing

You can create and refine images without leaving the chat. Ask for an image, get it rendered right in the conversation, then say what to change, for example "add a dog into the image." Editing your own chat-generated images does **not** require a workspace. A workspace is only needed for project files and for saving images into a project.

At a glance:

- **Generate** images with a chat message.
- **Edit** them with a follow-up message, no tools and no workspace required.
- **Select and order** up to three generated images per request, including combining them into one composition.
- **Apply one edit to many images** with [batch editing](./ai-image-batch-editing) (up to 50 images).

![Batch image editing in AI Chat Workspace](/img/ai-image-editing.png)

## Generating images

Describe what you want in the chat composer and send the message:

- "Generate an image of a lion on the savanna at sunset."
- "Create a product photo of a white sneaker on a wooden table."
- "Draw a friendly robot mascot for a kids' coding app."

The AI streams its progress like a normal chat reply. When the image is ready it appears in the conversation. If a turn produces several images, they render as a numbered grid.

Generated images are stored **on your machine**, organized per account and conversation. The chat does not rely on temporary provider links, so yesterday's images still open today. Nothing is uploaded to a gallery: the images belong to the conversation where you generated them.

## Editing a generated image

### Option 1: just ask

For the common case you do not need to select anything. After an image is generated, send a follow-up like:

- "Add a dog into the image."
- "Make the sky stormy."
- "Replace the background with white."

aiFetchly figures out which image you mean with **deterministic local logic** (not the AI model guessing paths):

| What you say | What aiFetchly attaches |
|---|---|
| "this image", "the image", "it" and the latest turn has **one** image | That image |
| "image 2", "the second picture", "第2张" | The image at that position in the latest generation |
| "both", "all of them" | Every image from the latest generation (up to three) |
| An edit that clearly applies to **more than three** images | Offers [batch editing](./ai-image-batch-editing) |

If your wording could refer to several images, aiFetchly does not guess. A chooser shows the candidate images and you pick the intended one.

:::tip Explicit selection always wins

Anything you select in the reference tray overrides automatic inference. To be sure the right image is used, select it yourself (next section).

:::

### Option 2: pick the image yourself

Every generated image in the conversation has hover actions:

| Action | What it does |
|---|---|
| **Use as reference** | Adds the image to the composer's reference tray (click again to remove it). |
| **Edit** | Adds the image as the only reference and focuses the composer, ready for your instruction. |
| **Open** | Opens the image file on your computer. |
| **Save to workspace** | Exports the image into your project workspace. Needs an approved workspace. |
| **Save all** | (Multi-image replies) Exports every image from that reply at once. |

### The reference tray

Selected images appear as ordered thumbnails above the composer:

1. Thumbnails show their selection order as **1**, **2**, **3**.
2. Use **Move up** and **Move down** on a thumbnail to change the order. Order matters when you combine images ("put image 1 on the left and image 2 on the right").
3. Remove one thumbnail with **Remove**, or empty the tray with **Clear all**.
4. The tray shows a hint when you hit the limit: "You can reference up to 3 images per request."
5. Tray contents are scoped to the current conversation and are not sent until you send the message.

Uploaded images and generated-image references share the same limit: at most **three image inputs** in one chat request. Two uploads plus two references is too many for one request; send the extra image in the next message or use batch editing for independent edits.

## Multi-image editing and fusion

With two or three references selected you can:

- **Edit each image with the same change**: "give both of them a white background."
- **Combine images into one**: "merge these into one poster, product on the left, logo on the right."

Fusion is limited to **three images at a time**. For more images, edit them separately or use [batch editing](./ai-image-batch-editing) for independent edits.

## Editing workspace images

Images that live in your **project workspace** (files on disk you attached for the task) keep the workspace rules:

- Editing or analyzing a workspace image requires an **approved workspace**.
- Applying one edit to many workspace files uses the same batch flow as generated images, with the workspace requirement kept.

Chat-generated images skip all of that. They are conversation artifacts owned by the conversation, so they resolve without any workspace. This is the whole point: you should never need to export an image to a folder just to keep editing it.

## Limits

| Limit | Value |
|---|---|
| Image inputs per chat request (uploads + references combined) | 3 |
| Images per batch job | 1 to 50 |
| Fusion (combining) images per request | 3 |
| Supported formats | PNG, JPEG, WebP |
| Stored generated image size | up to ~20 MB per image |
| Sent image normalization | long edge up to 1568 px, target ~1.5 MB |

Sending an image never resends images from earlier turns. Only what you selected or clearly referenced in the current message is included, which keeps conversations with many images fast and cheap.

## Troubleshooting

**"Several images could match your request."**
Your wording (like "this image") matched a turn that produced multiple images. Pick the intended image in the chooser, or select it in the reference tray.

**"You can only reference images generated in this conversation."**
References are scoped to the conversation where the image was generated. Generate the image here or copy the file into your workspace and attach it there.

**"The original image is no longer available."**
The stored file is gone (for example cleared by a storage cleanup). Regenerate the image or choose another one.

**"Image editing is unavailable: no edit-capable model is configured."**
Your [AI provider](../settings/ai-provider) does not provide an image editing model. Switch to a provider or model that supports image editing.

**"Unsupported image type" / "exceeds the size limit".**
Generated images are usually fine, but uploads and exports must be PNG, JPEG, or WebP within the limits above. Convert or resize the image first.

**aiFetchly asks for a workspace to edit an image.**
That happens only for **workspace files**. Chat-generated images never need one. If you are editing a project file, approve the workspace first, or export the generated image into the workspace and continue there.

## Next steps

- [Batch Image Editing](./ai-image-batch-editing) — apply one edit to up to 50 images with progress, stop, and retry.
- [AI Chat V2](../ai-outreach/ai-chat-v2) — the full chat feature set, from Plan Mode to subagents.
