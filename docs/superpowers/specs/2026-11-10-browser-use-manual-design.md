# Design Doc: Browser Use Manual Documentation

- **Date**: 2026-11-10
- **Status**: Proposed
- **Approach**: Approach 2 (Dedicated Guide under AI Outreach)

## 1. Intent & Purpose
Document the new **Browser Use** (Puppeteer-Managed Headed Chrome Browser) feature in the aiFetchly user manual, explaining both basic concepts and advanced workflows for marketing operators, agency account managers, and power users.

## 2. Scope & Files Touched

### A. New Documentation Page
- `docs/ai-outreach/browser-use.md`:
  - **Overview**: What is Browser Use, headed Chrome architecture, why visible automation matters.
  - **Browsing Modes**:
    - *Public Browsing*: Ephemeral session, no account needed, safe fallback.
    - *Authenticated Browsing*: Tied to saved Tool Accounts, zero-leak encrypted cookie injection, auto-refreshed session persistence.
  - **Starting a Session**: AI Chat prompt requests, or "Open managed browser" from Tool Accounts.
  - **AI Workspace & Live Controls**: Session header (account, platform, origin, proxy, elapsed time), "Pause AI", "Take over", "Stop browser".
  - **How the AI Operates**: Semantic page observation (`browser_observe`), structured action programs (`browser_run_actions`), and privileged page scripts (`browser_evaluate_script`).
  - **Safety & Human Handoff**: Risk classes, consequential action previews/approvals, manual login/MFA handoff with "I've finished logging in" verification, CAPTCHA decision policy (login handoff vs optional 2Captcha provider for authorized non-login domains).
  - **Cache & Performance**: Persistent resource cache benefits, cache size limits, safe clearing.
  - **Security & Privacy Invariants**: Sandboxed Chrome, executable-matched native fingerprints, zero secret leakage to LLM/renderer.

### B. Updates to Existing Pages & Configuration
- `sidebars.ts`: Add `"ai-outreach/browser-use"` to the `AI Outreach` category items.
- `docs/ai-outreach/ai-chat-v2.md`: Add Browser Use to feature overview table and link to the dedicated guide.
- `docs/settings/system-settings.md`: Add the **Managed Browser** settings section detailing toggles, cache settings, and cache clearing.

### C. Internationalization (i18n)
Mirror all new content and modifications across all 5 translated locales simultaneously per `AGENTS.md`:
- `i18n/zh-CN/docusaurus-plugin-content-docs/current/` (Simplified Chinese)
- `i18n/es/docusaurus-plugin-content-docs/current/` (Spanish)
- `i18n/fr/docusaurus-plugin-content-docs/current/` (French)
- `i18n/de/docusaurus-plugin-content-docs/current/` (German)
- `i18n/ja/docusaurus-plugin-content-docs/current/` (Japanese)

## 3. Verification Plan
- Run `npm run build` or `npm run typecheck` to verify no broken links or MDX formatting issues exist.
