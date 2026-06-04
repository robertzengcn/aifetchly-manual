This is a very clever setup! Using **GitHub Pages** for your official production release and **Netlify** for your internal testing gives you the best of both worlds: official branding on GitHub and the advanced "branch deploy" features of Netlify.

To make one Docusaurus project work on both, we need to detect the **Environment** and the **Branch** dynamically.

---

**1. The Unified docusaurus.config.ts**

Copy this logic into your configuration file. It detects if the site is being built by GitHub or Netlify and adjusts the URLs and SEO settings automatically.

```typescript
// Detect Environment
const isNetlify = process.env.NETLIFY === "true";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// Detect Branch (Netlify uses CONTEXT, GitHub uses GITHUB_REF)
const isProduction =
  (isNetlify && process.env.CONTEXT === "production") ||
  (isGitHubActions && process.env.GITHUB_REF === "refs/heads/master");

export default {
  title: "My Software Manual",

  // Set URL based on where it is hosted
  url: isNetlify
    ? (process.env.DEPLOY_PRIME_URL || "https://your-site.netlify.app")
    : "https://your-username.github.io",

  // Set BaseURL: GitHub Pages usually needs the repo name, Netlify usually uses root /
  baseUrl: isGitHubActions ? "/your-repo-name/" : "/",

  organizationName: "your-username",
  projectName: "your-repo-name",

  headTags: [
    // BLOCK SEARCH ENGINES ON TEST (NETLIFY)
    ...(!isProduction
      ? [
          {
            tagName: "meta",
            attributes: {
              name: "robots",
              content: "noindex, nofollow",
            },
          },
        ]
      : []),
  ],

  themeConfig: {
    // Also add to Docusaurus internal metadata
    metadata: !isProduction ? [{ name: "robots", content: "noindex, nofollow" }] : [],
    // ... rest of your config
  },
};
```

---

**2. The GitHub Action (Production Only)**

You only want GitHub to build when you push to master. This keeps your GitHub Pages clean and "Production-only."

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Production to GitHub Pages

on:
  push:
    branches: [master] # Only run on master branch

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

---

**3. Netlify Configuration (Test Only)**

Since Netlify will handle your test branch, create a `netlify.toml` in your root folder. This file tells Netlify to ignore the master branch (so it doesn't double-deploy) and focus on the test branch.

```toml
[build]
  command = "npm run build"
  publish = "build"

# Ignore the master branch on Netlify to avoid conflict with GitHub Pages
[build.ignore]
  command = "git rev-parse --abbrev-ref HEAD | grep -q 'master'"

# Settings specifically for the test branch
[context.test]
  command = "npm run build"
  [context.test.environment]
    NODE_ENV = "development"

# Add the security header to all Netlify deploys
[[headers]]
  for = "/*"
  [headers.values]
    X-Robots-Tag = "noindex, nofollow"
```

---

**4. How the Workflow Operates**

1. **Work on features:** Create a branch from master.
2. **Push to test branch:**
   - **GitHub:** Does nothing.
   - **Netlify:** Detects the push, builds the site, and gives you a "test" URL (e.g., `test--your-site.netlify.app`). This site is **hidden** from Google.
3. **Merge test into master:**
   - **Netlify:** Sees the push to master but **ignores it** (because of our `netlify.toml` rule).
   - **GitHub:** Detects the push to master, runs the Action, and updates your **Production** site at `your-username.github.io/repo/`.

### Final Check on Market Insight Explorer

Because the `noindex` logic in the TypeScript file checks `isProduction`, your GitHub site will remain searchable (SEO friendly), while the Netlify site will actively tell bots like Googlebot to go away.

**Would you like me to help you set up a "Version" dropdown in Docusaurus so you can easily archive old versions of the manual as your software grows?**
