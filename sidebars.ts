import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // aiFetchly Manual Sidebar
  docs: [
    'getting-started/introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/proxy-setup',
      ],
    },
    {
      type: 'category',
      label: 'Lead Generation',
      collapsible: false,
      collapsed: false,
      items: [
        'lead-generation/search-engines',
        'lead-generation/yellow-pages',
        'lead-generation/contact-extraction',
      ],
    },
    {
      type: 'category',
      label: 'AI Outreach',
      collapsible: false,
      collapsed: false,
      items: [
        'ai-outreach/knowledge-library',
        'ai-outreach/ai-email-writer',
        'ai-outreach/batch-email-sending',
        'ai-outreach/ai-marketing-assistant',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      collapsible: false,
      collapsed: false,
      items: [
        'automation/task-scheduling',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsible: false,
      collapsed: false,
      items: [
        'settings/system-settings',
      ],
    },
  ],
};

export default sidebars;
