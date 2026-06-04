# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for Aifetchly, built with [Docusaurus](https://docusaurus.io/). It's a static site generator that uses React, TypeScript, and MDX for content.

## Development Commands

```bash
# Install dependencies
yarn
# or
npm install

# Start local development server (with hot reload)
yarn start
# or
npm run start

# Build for production
yarn build
# or
npm run build

# Type checking
yarn typecheck
# or
npm run typecheck

# Serve production build locally
yarn serve

# Clear Docusaurus cache
yarn clear
```

**Note:** This project requires Node.js >= 20.0.

## Architecture

### Key Files

- **`docusaurus.config.ts`** - Main configuration file containing site metadata, navigation, themes, and plugin settings
- **`sidebars.ts`** - Defines the structure of documentation sidebars (currently auto-generated from `docs/` folder)
- **`tsconfig.json`** - TypeScript configuration (extends `@docusaurus/tsconfig`)

### Directory Structure

- **`docs/`** - Documentation content in Markdown/MDX format
  - Sidebar structure is auto-generated from folder hierarchy
  - `_category_.json` files define category metadata
- **`blog/`** - Blog posts
- **`src/`** - Custom React components and pages
  - `components/` - Reusable React components (e.g., HomepageFeatures)
  - `css/` - Custom styles (custom.css is loaded by theme config)
  - `pages/` - Additional pages beyond docs (index.tsx is the homepage)
- **`static/`** - Static assets (images, favicon, etc.)
  - `img/` - Image assets
  - `.nojekyll` - Tells GitHub Pages to not process with Jekyll

### Content Frontmatter

Docusaurus documents use frontmatter for metadata. Example:
```yaml
---
title: Document Title
sidebar_label: Short Label
---
```

### Deployment

- **GitHub Actions**: `.github/workflows/deploy.yml` auto-deploys to GitHub Pages on push to `main` branch
- Build output goes to `build/` directory
- The workflow uses Node 20 and `npm` (not yarn)

### Customization

- **Custom CSS**: Edit `src/css/custom.css` for global style overrides
- **Custom Components**: Add React components to `src/components/` and import in MDX files
- **Swizzling**: Use `yarn swizzle` to customize built-in Docusaurus components (e.g., footer, navbar)

### Internationalization (i18n)

This project supports multiple languages. When updating documentation content:

1. **English (`docs/`)** is the source language - update these files first
2. **Translated versions** must be updated after English content changes:
   - Spanish: `i18n/es/docusaurus-plugin-content-docs/current/`
   - French: `i18n/fr/docusaurus-plugin-content-docs/current/`
   - German: `i18n/de/docusaurus-plugin-content-docs/current/`
   - Japanese: `i18n/ja/docusaurus-plugin-content-docs/current/`
   - Chinese (Simplified): `i18n/zh-CN/docusaurus-plugin-content-docs/current/`

**CRITICAL:** Every documentation change must be applied to ALL languages simultaneously. When you modify a file in `docs/`, you must also update the corresponding file in every `i18n/*/docusaurus-plugin-content-docs/current/` directory. The translated files mirror the `docs/` folder structure. Never leave one language out of sync with others.
