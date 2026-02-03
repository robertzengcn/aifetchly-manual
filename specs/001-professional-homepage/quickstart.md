# Quickstart Guide: Professional Homepage Redesign

**Feature**: Professional Homepage Redesign
**Date**: 2026-02-03
**Audience**: Developers implementing this feature

## Overview

This guide provides step-by-step instructions for implementing the professional homepage redesign. Follow these steps to update the aiFetchly documentation homepage with professional styling, aiFetchly-specific content, and enhanced user experience.

---

## Prerequisites

### Development Environment

✅ **Required**:
- Node.js ≥20.0 (check with `node --version`)
- npm or yarn (check with `npm --version` or `yarn --version`)
- Git (check with `git --version`)

### Project Setup

You should already be on the feature branch:
```bash
git branch  # Should show: * 001-professional-homepage
```

If not, checkout the branch:
```bash
git checkout 001-professional-homepage
```

### Install Dependencies

First, install the new icon library:
```bash
npm install lucide-react
# or
yarn add lucide-react
```

---

## Phase 1: Update Homepage Content

### Step 1.1: Update src/pages/index.tsx

**File**: `src/pages/index.tsx`

**Action**: Replace the entire file content with:

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.enhancedSubtitle}>
          Find leads, extract contacts, and automate personalized outreach campaigns with AI assistance.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Get Started in 5 Minutes ⏱️
          </Link>
          <Link
            className="button button--info button--lg"
            to="/docs/getting-started/introduction">
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="AI-Powered Marketing Automation for Lead Generation and Outreach">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

**Changes**:
- Added `enhancedSubtitle` paragraph
- Added second CTA button ("Explore Features")
- Changed button text to "Get Started in 5 Minutes" (more action-oriented)

---

### Step 1.2: Update src/components/HomepageFeatures/index.tsx

**File**: `src/components/HomepageFeatures/index.tsx`

**Action**: Replace the entire file content with:

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  Search,
  Users,
  Mail,
  Send,
  Sparkles,
  Clock,
} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Engine Search',
    icon: Search,
    description: (
      <>
        Scrape leads from <strong>Google, Bing, Yandex, and Yahoo</strong> simultaneously
        to maximize your reach and efficiency.
      </>
    ),
    link: '/docs/lead-generation/search-engines',
  },
  {
    title: 'Contact Extraction',
    icon: Users,
    description: (
      <>
        Extract email addresses and contacts from <strong>websites, Yellow Pages,
        and search results</strong> with precision.
      </>
    ),
    link: '/docs/lead-generation/contact-extraction',
  },
  {
    title: 'AI Email Writer',
    icon: Mail,
    description: (
      <>
        Generate <strong>personalized outreach emails</strong> using advanced AI with context
        from your own documents and knowledge base.
      </>
    ),
    link: '/docs/ai-outreach/ai-email-writer',
  },
  {
    title: 'Batch Email Sending',
    icon: Send,
    description: (
      <>
        Send <strong>personalized email campaigns</strong> at scale with SMTP integration,
        smart filters, and duplicate prevention.
      </>
    ),
    link: '/docs/ai-outreach/batch-email-sending',
  },
  {
    title: 'AI Marketing Assistant',
    icon: Sparkles,
    description: (
      <>
        Get <strong>strategic marketing guidance</strong> and content ideas through AI-powered
        chat that learns from your business.
      </>
    ),
    link: '/docs/ai-outreach/ai-marketing-assistant',
  },
  {
    title: 'Task Scheduling',
    icon: Clock,
    description: (
      <>
        <strong>Automate workflows</strong> with flexible cron-based scheduling, task
        chaining, and execution history tracking.
      </>
    ),
    link: '/docs/automation/task-scheduling',
  },
];

function Feature({title, icon: Icon, description, link}: FeatureItem) {
  const cardContent = (
    <>
      <div className={clsx('text--center', styles.iconContainer)}>
        <Icon className={styles.featureIcon} role="img" />
      </div>
      <div className={clsx('text--center', styles.cardContent)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <Link to={link} className={clsx('col col--4', styles.featureCard)}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      {cardContent}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Changes**:
- Imported Lucide React icons
- Replaced `FeatureList` with aiFetchly-specific content
- Added `link` property to each feature
- Made feature cards clickable (wrapped in `Link` component)
- Enhanced descriptions with bold keywords
- Added proper `role="img"` to icons for accessibility

---

## Phase 2: Enhanced Styling

### Step 2.1: Update src/pages/index.module.css

**File**: `src/pages/index.module.css`

**Action**: Replace the entire file content with:

```css
/**
 * CSS files with the .module.css suffix will be treated as CSS modules
 * and scoped locally.
 */

.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
}

.heroBanner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

.enhancedSubtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 480px) {
  .buttons {
    flex-direction: column;
  }

  .buttons .button {
    width: 100%;
  }
}
```

**Changes**:
- Added gradient background
- Added decorative overlay with radial gradient
- Added `enhancedSubtitle` styling
- Enhanced buttons with gap and flex-wrap
- Added mobile responsiveness for buttons

---

### Step 2.2: Update src/components/HomepageFeatures/styles.module.css

**File**: `src/components/HomepageFeatures/styles.module.css`

**Action**: Replace the entire file content with:

```css
.features {
  display: flex;
  align-items: center;
  padding: 4rem 0;
  width: 100%;
  background: var(--ifm-background-color);
}

.featureCard {
  height: 100%;
  padding: 2rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  border: 1px solid var(--ifm-color-emphasis-200);
  text-decoration: none !important;
  display: block;
}

.featureCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--ifm-color-primary-light);
}

.featureCard:focus {
  outline: 2px solid var(--ifm-color-primary);
  outline-offset: 2px;
}

.iconContainer {
  margin-bottom: 1.5rem;
}

.featureIcon {
  height: 56px;
  width: 56px;
  color: var(--ifm-color-primary);
  stroke-width: 1.5;
}

.cardContent {
  padding: 0 1rem;
}

.featureCard h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--ifm-color-emphasis-900);
}

.featureCard p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ifm-color-emphasis-700);
}

.featureCard strong {
  color: var(--ifm-color-primary);
  font-weight: 600;
}

@media screen and (max-width: 996px) {
  .features {
    padding: 2rem 0;
  }

  .featureCard {
    padding: 1.5rem;
  }

  .featureIcon {
    height: 48px;
    width: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featureCard {
    transition: none;
  }

  .featureCard:hover {
    transform: none;
  }
}
```

**Changes**:
- Added card styling with border and border-radius
- Added hover effects (transform, shadow, border color)
- Added focus state for keyboard navigation
- Enhanced icon styling (size, color, stroke width)
- Improved typography (heading and paragraph sizes)
- Added responsive breakpoint adjustments
- Added `prefers-reduced-motion` support (accessibility)

---

## Phase 3: Verification

### Step 3.1: Start Development Server

```bash
npm start
# or
yarn start
```

**Expected**:
- Server starts at `http://localhost:3000`
- Browser opens automatically
- Homepage loads with new design

**Verify**:
- ✅ Hero section has blue gradient background
- ✅ Two CTA buttons visible
- ✅ Six feature cards displayed in grid
- ✅ Each card has an icon, title, and description
- ✅ Cards are clickable and link to documentation

---

### Step 3.2: Test Responsive Design

**Desktop** (1920px+):
- Hero section full width with centered content
- Feature grid: 3 columns
- Both buttons side-by-side

**Tablet** (768px - 996px):
- Feature grid: 2 columns (Docusaurus default)
- Padding adjusts

**Mobile** (<768px):
- Feature grid: 1 column
- Buttons stack vertically
- Padding reduced

**How to test**:
1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select different device presets or manually resize

---

### Step 3.3: Test Accessibility

**Keyboard Navigation**:
1. Press `Tab` to navigate to CTA buttons
2. Press `Tab` to navigate through feature cards
3. Verify focus indicators are visible
4. Press `Enter` to activate links

**Color Contrast**:
1. Install [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
2. Click "Scan ALL of my page"
3. Verify zero contrast errors

**Screen Reader** (optional):
1. Enable screen reader (NVDA on Windows, VoiceOver on Mac)
2. Navigate page
3. Verify proper announcements (headings, links, landmarks)

---

### Step 3.4: Type Check

```bash
npm run typecheck
# or
yarn typecheck
```

**Expected**: No TypeScript errors

---

### Step 3.5: Build Production

```bash
npm run build
# or
yarn build
```

**Expected**: Build completes successfully with no errors

---

## Phase 4: Testing (Required)

### Step 4.1: Create Test Directory

```bash
mkdir -p src/components/__tests__
mkdir -p src/pages/__tests__
```

---

### Step 4.2: Create HomepageFeatures Test

**File**: `src/components/__tests__/HomepageFeatures.test.tsx`

**Action**: Create file with content:

```tsx
import React from 'react';
import {render, screen} from '@testing-library/react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

describe('HomepageFeatures', () => {
  it('renders 6 feature cards', () => {
    render(<HomepageFeatures />);
    const cards = screen.getAllByRole('link');
    expect(cards).toHaveLength(6);
  });

  it('renders feature titles', () => {
    render(<HomepageFeatures />);
    expect(screen.getByText('Multi-Engine Search')).toBeInTheDocument();
    expect(screen.getByText('Contact Extraction')).toBeInTheDocument();
    expect(screen.getByText('AI Email Writer')).toBeInTheDocument();
    expect(screen.getByText('Batch Email Sending')).toBeInTheDocument();
    expect(screen.getByText('AI Marketing Assistant')).toBeInTheDocument();
    expect(screen.getByText('Task Scheduling')).toBeInTheDocument();
  });

  it('each card links to correct documentation', () => {
    render(<HomepageFeatures />);
    const searchCard = screen.getByText('Multi-Engine Search').closest('a');
    expect(searchCard).toHaveAttribute('href', '/docs/lead-generation/search-engines');
  });

  it('icons have proper role attribute', () => {
    render(<HomepageFeatures />);
    const icons = screen.getAllByRole('img');
    expect(icons.length).toBeGreaterThan(0);
  });
});
```

---

### Step 4.3: Create Home Page Test

**File**: `src/pages/__tests__/index.test.tsx`

**Action**: Create file with content:

```tsx
import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from '@site/src/pages/index';

// Mock Docusaurus context
jest.mock('@docusaurus/useDocusaurusContext', () => ({
  useDocusaurusContext: jest.fn(() => ({
    siteConfig: {
      title: 'aiFetchly Manual',
      tagline: 'AI-Powered Marketing Automation for Lead Generation and Outreach',
      url: 'https://your-docusaurus-site.example.com',
      baseUrl: '/',
    },
  })),
}));

describe('Home', () => {
  it('renders hero section with title', () => {
    render(<Home />);
    expect(screen.getByRole('heading', {name: 'aiFetchly Manual'})).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<Home />);
    expect(screen.getByText(/AI-Powered Marketing Automation/)).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Home />);
    const ctaButton = screen.getByRole('link', {name: /Get Started in 5 Minutes/i});
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/docs/getting-started/introduction');
  });

  it('renders feature grid', () => {
    render(<Home />);
    expect(screen.getByText('Multi-Engine Search')).toBeInTheDocument();
  });
});
```

---

### Step 4.4: Run Tests

```bash
npm test -- --watchAll=false
# or
yarn test --watchAll=false
```

**Expected**: All tests pass

---

## Phase 5: Performance Validation

### Step 5.1: Run Lighthouse Audit

1. Open production build or dev server
2. Open Chrome DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Desktop" or "Mobile"
5. Click "Analyze page load"

**Expected Scores**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

### Step 5.2: Check Bundle Size

After build, check:
```bash
ls -lh build/static/js/
```

**Expected**: Bundle size increase <50KB compared to baseline

---

## Troubleshooting

### Issue: Icons not displaying

**Solution**:
```bash
npm install lucide-react
# Restart dev server
```

### Issue: TypeScript errors

**Solution**: Ensure lucide-react types are installed:
```bash
npm install --save-dev @types/lucide-react
```

### Issue: Gradient not visible

**Solution**: Clear Docusaurus cache:
```bash
npm run clear
npm start
```

### Issue: Tests fail

**Solution**: Check that test utilities are installed:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

---

## Validation Checklist

Before considering this feature complete:

- [ ] Hero section displays with gradient background
- [ ] Six feature cards show aiFetchly-specific content
- [ ] All cards link to correct documentation pages
- [ ] Design is responsive (desktop, tablet, mobile)
- [ ] All TypeScript errors resolved
- [ ] All tests pass
- [ ] Lighthouse score 90+ in all categories
- [ ] Zero accessibility errors (axe-core)
- [ ] Bundle size increase <50KB
- [ ] Production build succeeds

---

## Next Steps

After implementation:
1. Commit changes with descriptive message
2. Run final validation
3. Create pull request
4. Deploy to staging/production

**Commit Message Template**:
```
feat: redesign homepage with professional styling

- Replace Docusaurus placeholder content with aiFetchly features
- Add gradient hero section with enhanced CTAs
- Implement 6 feature cards with Lucide icons
- Add hover effects and responsive design
- Ensure WCAG AA accessibility compliance
- Add unit tests for custom components

Closes #001-professional-homepage
```

---

## Support

If you encounter issues:
- Check Docusaurus docs: https://docusaurus.io/docs
- Review research.md for technical decisions
- Review contracts/component-interfaces.ts for API details
- Check data-model.md for component structure

Good luck! 🚀
