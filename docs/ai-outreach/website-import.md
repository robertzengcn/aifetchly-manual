---
id: website-import
title: Import Website into Knowledge Library
sidebar_label: Import from Website
description: Turn public webpages into searchable Knowledge Library documents by URL — one page, a list of pages, or a bounded same-origin crawl.
---

# Import Website into Knowledge Library

The **Import Website** feature lets you turn public webpages into searchable Knowledge Library documents directly from a URL — no need to manually save a page as a file first. aiFetchly fetches the page, converts it to clean markdown, and indexes it through the same RAG pipeline used for uploaded files, so imported pages are immediately available to [AI Email Writer](./ai-email-writer), [AI Chat](./ai-chat-v2), and [knowledge library search](./knowledge-library).

:::info Subscription required

Website import runs chunking and embedding, so it requires an active aiFetchly subscription with AI enabled. If AI is not enabled, the import is blocked before any page is fetched.

:::

## Two ways to import

You can import webpages in two ways — both produce identical Knowledge Library documents:

| Method | Where | Best for |
|--------|-------|----------|
| **Import Website dialog** | Knowledge Library page → **Import Website** button | Controlled, manual imports with full options |
| **AI Chat tool** | Ask the assistant in [AI Chat](./ai-chat-v2) | Quick, conversational imports ("import our pricing page") |

The rest of this page focuses on the manual dialog. The AI Chat path is covered in [Import from AI Chat](#import-from-ai-chat) below.

## Import modes

Choose one of three modes in the dialog:

| Mode | Input | Use when |
|------|-------|----------|
| **Single page** | One URL (+ optional title) | You want one specific page |
| **URL list** | Up to 50 URLs, one per line | You already know the exact pages you want |
| **Site crawl** | One start URL + page/depth limits | You want to pull in a docs site, FAQ, or section by crawling same-origin links |

:::tip One document per page

Every imported webpage becomes **its own** Knowledge Library document — not one giant document per website. This keeps citations precise, makes individual pages easy to delete or update, and gives reliable duplicate detection.

:::

## Using the Import Website dialog

### Step 1: Open the dialog

1. Open the **Knowledge** page from the left navigation.
2. Click **Import Website** in the page header.

### Step 2: Choose an import mode

Pick **Single page**, **URL list**, or **Site crawl** at the top of the dialog. The form adapts to the selected mode.

### Step 3: Provide the URL(s)

- **Single page** and **Site crawl** — enter a single **URL** (for crawl mode the field is labeled **Start URL**). Use a public `http://` or `https://` address, e.g. `https://example.com/pricing`.
- **URL list** — enter one URL per line in the **URLs** box (up to 50). Blank lines are ignored.

### Step 4: Set mode-specific options

- **Single page** — optionally set a **Title** to override the page's own title.
- **URL list** and **Site crawl** — set **Max pages** (how many pages to import).
- **Site crawl** — also set **Max depth** (how many link-hops from the start URL to follow).

### Step 5: Add common metadata (optional)

| Field | Description |
|-------|-------------|
| **Tags** | Comma-separated tags applied to every imported page (e.g. `pricing, product`). |
| **Author** | Author recorded on the documents. Defaults to `Website`. |
| **Description** | Optional description stored with the documents. |
| **Duplicate policy** | `Skip duplicates` (default) or `Allow duplicates`. See [Duplicate handling](#duplicate-handling). |

### Step 6: Import and review

Click **Import**. A progress panel shows the current page, how many links were discovered (crawl mode), and running imported / skipped counts.

When the import finishes, the dialog lists:

- **Imported** — each page with its title, source URL, and number of chunks created.
- **Skipped** — each URL that was not imported, with the reason (duplicate, empty content, scrape failure, blocked URL, …).
- **Discovered** — how many same-origin links the crawler found (crawl mode).

Use **Import another** to start a fresh import, or **Close** to return to the Knowledge Library. Imported pages appear in the document list just like uploaded files and are immediately searchable.

## Limits

| Limit | Value |
|-------|-------|
| Maximum URLs per **URL list** | 50 |
| **Max pages** range (URL list & Site crawl) | 1–100 (default 20) |
| **Max depth** range (Site crawl) | 0–4 (default 2) |
| Allowed URL schemes | `http://`, `https://` only |
| Crawl scope | Same-origin only (no cross-origin crawling) |

These caps protect embedding cost and keep crawls bounded. The crawler also follows conservative defaults: low concurrency and a small delay between page requests.

## How imported content is stored

Each webpage is converted to markdown and ingested through the standard RAG pipeline:

1. **Fetch** — the page is loaded through aiFetchly's browser-based scraper (the same engine used for website analysis).
2. **Extract & convert** — navigation, scripts, styles, and other boilerplate are stripped, and the main content is converted to markdown.
3. **Stage** — the markdown is saved as an app-owned document.
4. **Chunk & embed** — the document is chunked and embedded exactly like an uploaded file.
5. **Index** — the page becomes searchable and usable as RAG context.

The generated document name follows the pattern `{hostname}-{path}-{hash}.md` (for example `example.com-pricing-a1b2c3d4.md`), and the source URL is recorded with the document.

:::note Extraction quality

aiFetchly selects the most likely content area (article, main, docs containers, falling back to body). Quality varies by site, and pages with little readable text (login pages, error pages, heavy JavaScript apps) may be skipped as empty. Extraction improves over time.

:::

## Duplicate handling

By default, aiFetchly **skips** pages that already exist in your Knowledge Library so the library stays clean.

- **Skip duplicates** (default) — duplicate pages are skipped and listed under **Skipped** with reason `duplicate`. A single-page import that is a duplicate fails with a duplicate error.
- **Allow duplicates** — every page is imported even if a copy already exists. Use this when you intentionally want a second snapshot of a page.

:::info Replacing a page

There is no automatic "replace" mode yet. To refresh a page, delete the old document and import the URL again.

:::

## Security and safety

Website import is built to be safe by default. To prevent abuse and server-side request forgery (SSRF), aiFetchly rejects:

- Non-`http(s)` URLs, including `file://`, `mailto:`, `tel:`, `javascript:`, and `data:`.
- `localhost`, loopback, private, link-local, and internal-network addresses.
- Cloud metadata endpoints (for example `169.254.169.254`).
- URLs that contain credentials.
- Redirects and discovered links that resolve to any of the above.

Crawls never leave the start URL's origin. Imported page content is treated strictly as **knowledge** — it is stored for retrieval only and never executed as instructions.

:::warning No private or authenticated sites

Authenticated, login-walled, and internal-network pages are not supported. Import public pages only.

:::

## Import from AI Chat

You can also ask the assistant in [AI Chat](./ai-chat-v2) to import webpages. The assistant uses the `knowledge_library_import_website` tool and will ask for confirmation before fetching anything.

Examples:

```text
Import https://example.com/pricing into my knowledge library and tag it pricing.
```

```text
Import the docs pages from https://example.com/docs into the knowledge library.
```

```text
Crawl up to 25 pages from https://example.com/docs and import them as website docs.
```

The assistant will confirm the mode, URL(s), limits, tags, and duplicate policy, then summarize how many pages were imported and skipped.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---------|--------------|------------|
| **"Import failed"** before any page loads | AI/subscription not enabled | Enable AI in your subscription and retry. |
| Page listed under **Skipped** as `URL_BLOCKED` | URL is private/localhost/non-http(s) | Use a public `http(s)` URL. |
| Page listed as `EMPTY_CONTENT` | Page had little readable text (login/error page, JS-only) | Try a different URL or check the page in a browser. |
| Page listed as `SCRAPE_FAILED` | Site blocked the scraper or timed out | Retry later, or reduce the number of pages. |
| Page listed as `duplicate` | Page already exists in the library | Use **Allow duplicates**, or delete the old document first. |
| Crawl imported fewer pages than expected | Hit **Max pages** / **Max depth**, or few same-origin links | Raise the limits, or confirm the site links to the pages you want. |
| Imported page not used in AI content | RAG context not enabled, or content not relevant | Enable RAG context in AI Chat / Email Writer and check the document status is **Completed**. |

## Next steps

- [Knowledge Library](./knowledge-library) — manage, search, re-embed, and delete imported pages.
- [AI Chat V2](./ai-chat-v2) — import webpages conversationally and search your library.
- [AI Email Writer](./ai-email-writer) — use imported website knowledge to personalize outreach.
