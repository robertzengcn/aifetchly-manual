# Browser Use Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add complete user manual documentation for aiFetchly's Browser Use capability in English and all 5 supported internationalized languages (zh-CN, es, fr, de, ja).

**Architecture:** Create `docs/ai-outreach/browser-use.md`, update `sidebars.ts`, `docs/ai-outreach/ai-chat-v2.md`, and `docs/settings/system-settings.md`, then translate all new content and updates synchronously across all `i18n/*/docusaurus-plugin-content-docs/current/` directories per repository guidelines.

**Tech Stack:** Docusaurus, React, TypeScript, MDX, i18n.

**Spec:** `docs/superpowers/specs/2026-11-10-browser-use-manual-design.md`

## Global Constraints

- Source language is English in `docs/`.
- Translated versions must strictly mirror the `docs/` folder structure under `i18n/{zh-CN,es,fr,de,ja}/docusaurus-plugin-content-docs/current/`.
- Docusaurus build must succeed with zero broken links (`onBrokenLinks: "throw"`).
- Preserve existing formatting conventions (callouts like `:::info`, `:::tip`, tables, frontmatter).

## Review Focus

1. Ensure relative links between documentation files (e.g., `[System Settings](../settings/system-settings)`) resolve properly in all locales without breaking the Docusaurus build.
2. Frontmatter `id`, `title`, `sidebar_label`, and `description` must be appropriately localized in translated files while preserving the expected `id`.
3. Check that the sidebar in `sidebars.ts` properly registers `"ai-outreach/browser-use"`.
4. Ensure accurate terminology across languages (e.g., "Browser Use", "Managed Browser", "Puppeteer", "Tool Account").
5. Verify cache configuration and clear cache instructions accurately reflect that cookies are never deleted when clearing cache.

---

### Task 1: English Documentation & Config

**Files:**
- Create: `docs/ai-outreach/browser-use.md`
- Modify: `sidebars.ts`
- Modify: `docs/ai-outreach/ai-chat-v2.md`
- Modify: `docs/settings/system-settings.md`

- [ ] **Step 1: Write `docs/ai-outreach/browser-use.md`**
  Detail the feature:
  - Architecture overview (Puppeteer-managed headed Chrome in utility process)
  - Public vs. Authenticated browsing
  - Starting sessions & workspace status header (controls: Pause, Take over, Stop)
  - Semantic observation, action programs, privileged scripts
  - Human handoff, login verification, CAPTCHA decision policy
  - Settings, resource cache isolation & clearing
  - Security & privacy (zero credential/cookie leakage to LLM, native fingerprints)

- [ ] **Step 2: Update `sidebars.ts`**
  Add `"ai-outreach/browser-use"` to `AI Outreach` category items.

- [ ] **Step 3: Update `docs/ai-outreach/ai-chat-v2.md`**
  Add Browser Use to the "What's new in V2" table and reference the new guide.

- [ ] **Step 4: Update `docs/settings/system-settings.md`**
  Add the "Managed Browser" group covering toggles, cache bounds, clear on close, and clearing cache.

- [ ] **Step 5: Verify English docs compile**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 2: Simplified Chinese Translation (`zh-CN`)

**Files:**
- Create: `i18n/zh-CN/docusaurus-plugin-content-docs/current/ai-outreach/browser-use.md`
- Modify: `i18n/zh-CN/docusaurus-plugin-content-docs/current/ai-outreach/ai-chat-v2.md`
- Modify: `i18n/zh-CN/docusaurus-plugin-content-docs/current/settings/system-settings.md`

- [ ] **Step 1: Create `i18n/zh-CN/.../ai-outreach/browser-use.md`**
  Translate all sections of the Browser Use guide to natural, technical Simplified Chinese.

- [ ] **Step 2: Update `i18n/zh-CN/.../ai-outreach/ai-chat-v2.md`**
  Add Browser Use feature to the V2 table and cross-link.

- [ ] **Step 3: Update `i18n/zh-CN/.../settings/system-settings.md`**
  Add the Managed Browser settings section in Simplified Chinese.

---

### Task 3: Spanish Translation (`es`)

**Files:**
- Create: `i18n/es/docusaurus-plugin-content-docs/current/ai-outreach/browser-use.md`
- Modify: `i18n/es/docusaurus-plugin-content-docs/current/ai-outreach/ai-chat-v2.md`
- Modify: `i18n/es/docusaurus-plugin-content-docs/current/settings/system-settings.md`

- [ ] **Step 1: Create `i18n/es/.../ai-outreach/browser-use.md`**
  Translate the Browser Use guide to Spanish.

- [ ] **Step 2: Update `i18n/es/.../ai-outreach/ai-chat-v2.md`**
  Add Browser Use feature to the V2 table and cross-link.

- [ ] **Step 3: Update `i18n/es/.../settings/system-settings.md`**
  Add the Managed Browser settings section in Spanish.

---

### Task 4: French Translation (`fr`)

**Files:**
- Create: `i18n/fr/docusaurus-plugin-content-docs/current/ai-outreach/browser-use.md`
- Modify: `i18n/fr/docusaurus-plugin-content-docs/current/ai-outreach/ai-chat-v2.md`
- Modify: `i18n/fr/docusaurus-plugin-content-docs/current/settings/system-settings.md`

- [ ] **Step 1: Create `i18n/fr/.../ai-outreach/browser-use.md`**
  Translate the Browser Use guide to French.

- [ ] **Step 2: Update `i18n/fr/.../ai-outreach/ai-chat-v2.md`**
  Add Browser Use feature to the V2 table and cross-link.

- [ ] **Step 3: Update `i18n/fr/.../settings/system-settings.md`**
  Add the Managed Browser settings section in French.

---

### Task 5: German Translation (`de`)

**Files:**
- Create: `i18n/de/docusaurus-plugin-content-docs/current/ai-outreach/browser-use.md`
- Modify: `i18n/de/docusaurus-plugin-content-docs/current/ai-outreach/ai-chat-v2.md`
- Modify: `i18n/de/docusaurus-plugin-content-docs/current/settings/system-settings.md`

- [ ] **Step 1: Create `i18n/de/.../ai-outreach/browser-use.md`**
  Translate the Browser Use guide to German.

- [ ] **Step 2: Update `i18n/de/.../ai-outreach/ai-chat-v2.md`**
  Add Browser Use feature to the V2 table and cross-link.

- [ ] **Step 3: Update `i18n/de/.../settings/system-settings.md`**
  Add the Managed Browser settings section in German.

---

### Task 6: Japanese Translation (`ja`)

**Files:**
- Create: `i18n/ja/docusaurus-plugin-content-docs/current/ai-outreach/browser-use.md`
- Modify: `i18n/ja/docusaurus-plugin-content-docs/current/ai-outreach/ai-chat-v2.md`
- Modify: `i18n/ja/docusaurus-plugin-content-docs/current/settings/system-settings.md`

- [ ] **Step 1: Create `i18n/ja/.../ai-outreach/browser-use.md`**
  Translate the Browser Use guide to Japanese.

- [ ] **Step 2: Update `i18n/ja/.../ai-outreach/ai-chat-v2.md`**
  Add Browser Use feature to the V2 table and cross-link.

- [ ] **Step 3: Update `i18n/ja/.../settings/system-settings.md`**
  Add the Managed Browser settings section in Japanese.

---

### Task 7: Full Build & Verification

- [ ] **Step 1: Run type checking**
  Run: `npm run typecheck`
  Expected: PASS with 0 errors.

- [ ] **Step 2: Run full production build**
  Run: `npm run build`
  Expected: Successful build with all locales generated and zero broken links.
