import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Detect deployment environment
const isNetlify = process.env.NETLIFY === "true";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// Detect production (master branch on either platform)
const isProduction =
  (isNetlify && process.env.CONTEXT === "production") ||
  (isGitHubActions && process.env.GITHUB_REF === "refs/heads/master");

const config: Config = {
  title: "aiFetchly Manual",
  tagline: "AI-Powered Marketing Automation for Lead Generation and Outreach",
  favicon: "img/favicon.ico",

  // Set URL based on deployment environment
  url: isNetlify
    ? process.env.DEPLOY_PRIME_URL || "https://aifetchly-manual.netlify.app"
    : "https://robertzengcn.github.io",

  // GitHub Pages needs repo name as baseUrl; Netlify uses root
  baseUrl: isGitHubActions ? "/aiFetchly/" : "/",

  // GitHub pages deployment config.
  organizationName: "robertzengcn", // Usually your GitHub org/user name.
  projectName: "aiFetchly", // Usually your repo name.

  // Block search engines on non-production (Netlify test) deploys
  headTags: [
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

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN", "es", "fr", "de", "ja"],
    localeConfigs: {
      en: {
        htmlLang: "en",
      },
      "zh-CN": {
        htmlLang: "zh-CN",
      },
      es: {
        htmlLang: "es",
      },
      fr: {
        htmlLang: "fr",
      },
      de: {
        htmlLang: "de",
      },
      ja: {
        htmlLang: "ja",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Block search engines on non-production deploys via internal metadata
    metadata: !isProduction
      ? [{ name: "robots", content: "noindex, nofollow" }]
      : [],
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "aiFetchly Manual",
      logo: {
        alt: "aiFetchly Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/robertzengcn/aiFetchly",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started/introduction",
            },
            {
              label: "Lead Generation",
              to: "/docs/lead-generation/search-engines",
            },
            {
              label: "AI Outreach",
              to: "/docs/ai-outreach/knowledge-library",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/aifetchly",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/aifetchly",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/robertzengcn/aiFetchly",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} aiFetchly. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
