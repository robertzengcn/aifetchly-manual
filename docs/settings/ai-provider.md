---
id: ai-provider
title: AI Provider
sidebar_label: AI Provider
description: Route AI Chat through aiFetchly's hosted AI or your own OpenAI-compatible provider (Ollama, LM Studio, OpenAI, OpenRouter, vLLM, LocalAI, or a custom endpoint).
---

# AI Provider

The **AI Provider** page lets you choose where AI Chat gets its model from. You have two options:

- **Hosted aiFetchly** — aiFetchly runs the model for you. This is the default and is included with an aiFetchly AI subscription.
- **Custom / Local Provider** — you point aiFetchly at any **OpenAI-compatible** endpoint, including local servers like [Ollama](https://ollama.com) or LM Studio, or third-party APIs like OpenAI and OpenRouter.

:::info Why this matters

Custom providers let you use **AI Chat with your own model — even without an aiFetchly AI subscription.** Other hosted aiFetchly AI features (keyword generation, email template generation, AI recovery, rerank, embeddings) still require a subscription; only the chat surface can run through your own provider.

:::

Custom providers speak the standard OpenAI chat-completions contract (`/v1/chat/completions` and, when supported, `/v1/models`). aiFetchly does not bundle provider-specific SDKs — it talks to your endpoint directly from the app's backend, so your API key never leaves your machine.

:::info Voice settings live here too

This page also contains **Voice** settings for AI Chat — on-device speech-to-text (push-to-talk) and spoken responses (text-to-speech). Voice runs locally on your machine and is independent of your AI provider. See [Voice settings](#voice-settings) below.

:::

## Opening the AI Provider page

1. Click **System Setting** in the left navigation menu.
2. Click the **AI Provider** button on the System Settings page.

You can also open it from AI Chat — click the provider chip next to the model selector (for example `Hosted` or `Local: Ollama`).

## Provider mode

At the top of the page, choose a mode with the radio group:

| Mode | When to use | What it requires |
|------|-------------|------------------|
| **Hosted aiFetchly** | You have an aiFetchly AI subscription and want the simplest path. | An active aiFetchly AI subscription. |
| **Custom / Local Provider** | You run your own model, want more control, privacy, or lower cost, or don't have a subscription. | A reachable OpenAI-compatible endpoint and a saved provider config. |

In **Hosted** mode, the page shows whether hosted AI is enabled for your account, or that it requires a subscription.

In **Custom / Local Provider** mode, the provider configuration fields appear (below). Saving in this mode switches AI Chat to your provider; saving in **Hosted** mode switches it back.

:::tip Only AI Chat follows this setting

Switching to a custom provider unlocks **AI Chat** only. Hosted-only AI features continue to require a subscription regardless of this setting.

:::

## Provider presets

To save typing, pick a **Provider preset**. Selecting one fills in a suggested name and Base URL — you can still edit every field afterward.

| Preset | Default Base URL | API key |
|--------|------------------|---------|
| **Ollama** | `http://localhost:11434/v1` | Usually not required |
| **LM Studio** | `http://localhost:1234/v1` | Usually not required |
| **OpenAI** | `https://api.openai.com/v1` | Required |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Required |
| **vLLM** | `http://localhost:8000/v1` | Usually not required |
| **LocalAI** | `http://localhost:8080/v1` | Usually not required |
| **Custom** | _(empty)_ | You decide |

Choose **Custom** for any other OpenAI-compatible server (for example a company gateway, Groq-compatible endpoint, or another local inference server).

## Configuration fields

These fields appear when **Custom / Local Provider** is selected:

| Field | Description |
|-------|-------------|
| **Provider preset** | Quick-start template (see above). Fills defaults but does not lock the fields. |
| **Provider name** | A label for this provider. Required. |
| **Base URL** | The provider's API root, e.g. `http://localhost:11434/v1`. Required. See [Base URL normalization](#base-url-normalization). |
| **API key (optional)** | Sent as a `Bearer` token. Masked. Leave blank for local providers that don't need one. |
| **Default model** | The model AI Chat uses. A combobox — pick from the refreshed list or type a name manually. Required. |
| **Context size (optional)** | Override the model's context window, in tokens. |
| **Refresh Models** | Pulls the model list from the provider's `/models` endpoint. |
| **Test Connection** | Verifies the endpoint and detects capabilities. See [Test Connection](#test-connection). |
| **Save** | Persists the configuration. |

### Base URL normalization

You can enter the Base URL with or without the `/v1` suffix and with or without a trailing slash — aiFetchly normalizes it on save to end with `/v1` and no trailing slash.

| You enter | Stored as |
|-----------|-----------|
| `http://localhost:11434` | `http://localhost:11434/v1` |
| `http://localhost:11434/` | `http://localhost:11434/v1` |
| `http://localhost:11434/v1/` | `http://localhost:11434/v1` |
| `https://api.openai.com/v1` | `https://api.openai.com/v1` |

### API key handling

- The **API key** field is masked. Click the eye icon to reveal what you are typing.
- Once a key is saved, it is **never shown again in plaintext**. The field displays _"API key configured — leave blank to keep"_, and a green **API key configured** chip appears.
- To keep the existing key, leave the field blank when saving.
- To replace it, type the new key and save.
- To remove it, click **Clear API key**.

:::warning Plain HTTP

`http://` is allowed for `localhost` and local network providers. If you use a plain `http://` URL that is **not** local, aiFetchly warns that the connection is unencrypted — prefer `https://` for any remote provider.

:::

## Refresh Models

Click **Refresh Models** to query the provider's `/models` endpoint and populate the **Default model** dropdown. This is optional — you can always type a model name manually instead.

- If `/models` succeeds, the returned models are normalized and shown in the dropdown.
- If `/models` fails (some local servers don't implement it), you get a warning, but the configuration is still valid as long as a **Default model** is entered. aiFetchly falls back to the manually entered model.
- If a default model exists but the list can't be loaded, you can still save and chat.

## Test Connection

Click **Test Connection** before relying on a provider. The test verifies, in order:

1. The Base URL is a valid `http:` or `https:` URL.
2. The provider is reachable.
3. The `/models` endpoint works, **or** a default model is entered manually.
4. A non-streaming chat completion succeeds with a tiny prompt.
5. A streaming chat completion succeeds (if supported).
6. Tool-calling support is detected when possible.

The test sends a minimal prompt (for example, asking the model to reply `pong`). Any valid completion counts as success — aiFetchly does not require an exact text match, because local models often add formatting.

The result appears as a status message and as **capability badges** (below). The connection test never logs or displays your API key.

:::note Third-party APIs may bill per token

OpenAI, OpenRouter, and other paid endpoints charge per token, so each test connection sends only a very small request. The test still makes a real API call.

:::

## Capability badges

After a connection test, capability badges describe what your provider and model can do:

| Badge | Meaning |
|-------|---------|
| **Models** | The `/models` endpoint is available. |
| **Chat** | Non-streaming chat completion works. |
| **Streaming** | Streaming chat completion works. |
| **Tools** | The model supports tool calling. |
| **Vision** | The model accepts image inputs. |
| **Context** | Detected/overridden context size in tokens (shown when available). |

Each badge has one of these states:

| State | Color | Meaning |
|-------|-------|---------|
| **Supported** | 🟢 green | Verified to work. |
| **Unsupported** / **Failed** | 🔴 red | Verified not to work, or the test failed. |
| **Unknown** | 🟡 yellow | Could not be determined — proceed with caution. |

:::tip When Tools is unsupported or unknown

If the connection test does not confirm tool support, AI Chat shows the warning *"This local provider has not confirmed tool support. Tools are disabled for this conversation."* and disables tools for that conversation. Tool-dependent workflows (including Plan Mode) will not run until you switch to a tool-capable model or Hosted aiFetchly. Re-run **Test Connection** after changing your model to re-probe tool support.

:::

## How AI Chat uses your provider

Once a valid custom provider is saved:

- **AI Chat becomes available** — even without an aiFetchly AI subscription.
- A **provider indicator** appears near the model selector in AI Chat (for example `Local: Ollama`, `Local: LM Studio`, or `Hosted`). Clicking it opens this settings page.
- The **model selector** lists models from your provider (from `/models`, or just your configured default model if `/models` isn't available).
- Chat requests are sent to your endpoint directly from the app backend — never from the browser/renderer.

If the provider is unreachable, AI Chat shows a clear provider error instead of failing silently.

:::info Related: AI Chat V2

Provider mode is shared across the chat surfaces. See [AI Chat V2](../ai-outreach/ai-chat-v2) for the chat experience itself, including Plan Mode and the context-usage badge.

:::

## Voice settings

The AI Provider page also includes a **Voice** panel for on-device speech in AI Chat — speech-to-text (voice input) and text-to-speech (spoken responses). Voice runs locally on your machine using the `sherpa-onnx` engine and is independent of your AI provider.

### Voice input

| Setting | What it does |
|---|---|
| **Enable voice input** | Shows a microphone button in the AI Chat composer (push-to-talk). Off by default. |
| **Send voice transcript automatically** | Sends the transcript as soon as transcription finishes, instead of placing it in the composer for review. |
| **STT language** | The language you'll speak: Auto, English, 中文, Español, Français, Deutsch, or 日本語. |
| **STT model** | The speech-to-text model. Only installed models are selectable. |
| **Max recording duration** | How long a single recording can run, in seconds (1–600; default 60). |

### Spoken responses

| Setting | What it does |
|---|---|
| **Enable spoken responses** | Reads the AI's text replies aloud. You can also toggle this anytime from the volume button in the AI Chat header. |
| **Speak only after voice input** | When on, the AI speaks only its replies to your voice messages (hands-free conversation), not every reply. |
| **TTS language** | The language for spoken replies: Auto, English, 中文, Español, Français, Deutsch, or 日本語. |
| **TTS voice / model** | The voice used for spoken replies. Only installed voices are selectable. |
| **Speech speed** | Playback speed, from 0.5× to 2.0×. |

### Voice models

Voice input and spoken responses each need a speech model. The **Voice models** section lists the available STT and TTS models with their status — **Download**, **Installed**, or **Cancel** (during download) — and shows live download progress.

Models download on demand the first time you enable or use a feature, so turning voice on for the first time triggers a one-time download. You can also pre-download models here.

:::info Voice is local and private

Speech recognition and synthesis happen entirely on your device. Your microphone audio is processed locally and is **not** sent to a server or stored. Only the resulting transcript is kept — as a normal chat message.

:::

:::note Voice doesn't grant chat access

Voice is local and free, but it doesn't grant chat access. To send a transcribed message and get a reply you still need either an aiFetchly AI subscription (Hosted) or a working custom/local provider. See [AI Chat V2 → Voice](../ai-outreach/ai-chat-v2#voice) for how voice is used in chat.

:::

## Security and privacy

- **API keys are encrypted at rest** and stored separately from the rest of the config.
- **Keys are never returned to the UI in plaintext** after they are saved — the page only shows `apiKeyConfigured: true/false`.
- **Keys are never logged.** Debug and request logs redact `Authorization` headers and anything that looks like a secret.
- **Requests are made from the app backend**, not the renderer, so credentials are not exposed to web content.
- **Base URLs are validated** as `http:` or `https:` only.

## Quick start: Ollama

1. [Install Ollama](https://ollama.com) and pull a model, e.g. `ollama pull llama3.1`.
2. Open **Settings → AI Provider**.
3. Select **Custom / Local Provider**.
4. Set **Provider preset** to **Ollama** (fills `http://localhost:11434/v1`).
5. Click **Refresh Models** and pick a model, or type one (e.g. `llama3.1`).
6. Click **Test Connection** to confirm, then **Save**.
7. Open AI Chat — the indicator reads `Local: Ollama` and you can chat without a subscription.

## Quick start: OpenAI / OpenRouter

1. Open **Settings → AI Provider**.
2. Select **Custom / Local Provider**.
3. Set **Provider preset** to **OpenAI** or **OpenRouter**.
4. Paste your **API key** into the API key field.
5. Enter a **Default model** (for example `gpt-4o-mini`, or an OpenRouter model id).
6. Click **Test Connection**, then **Save**.

## Troubleshooting

### Could not connect to the provider

**Possible causes:**
- The local server isn't running (check the Ollama / LM Studio / vLLM process).
- The Base URL or port is wrong.
- A firewall is blocking localhost/lan access.

**Solutions:**
1. Start the provider and confirm it answers in a browser (for example `http://localhost:11434/v1/models`).
2. Re-check the Base URL and run **Test Connection**.
3. For Docker or WSL setups, make sure the provider is reachable from aiFetchly's network context.

### Authentication failed (401 / 403)

**Possible causes:**
- The API key is missing, wrong, or expired.
- The key doesn't have access to the selected model.

**Solutions:**
1. Re-enter the API key and save.
2. For OpenAI/OpenRouter, confirm the key is valid and has credit/permission for the model.

### The selected model is not available

The provider returned "model not found". Choose a different model from the **Refresh Models** list, or update the **Default model** to one the provider actually serves.

### Model list could not be loaded

Some local servers don't implement `/models`. This is expected — type the model name manually into **Default model** and save. Chat will still work.

### Chat works but Tools / Streaming show as unsupported

Not every local model supports tool calling or streaming. If you need those, switch to a tool- or stream-capable model, or use **Hosted aiFetchly**. See [Capability badges](#capability-badges).

### Hosted-only features still ask for a subscription

This is by design. A custom provider unlocks AI Chat only — keyword generation, email template generation, AI recovery, rerank, and embeddings still require an aiFetchly AI subscription.

## Next steps

- [AI Chat V2](../ai-outreach/ai-chat-v2) — the chat experience your provider powers
- [System Settings](./system-settings) — overall configuration
- [AI Skills](../ai-outreach/ai-skills) — capabilities the AI can call during chat
