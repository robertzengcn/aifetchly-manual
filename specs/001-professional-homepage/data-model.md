# Data Model: Professional Homepage Redesign

**Feature**: Professional Homepage Redesign
**Date**: 2026-02-03
**Status**: Final

## Overview

This feature is primarily visual and content-focused. There are no persistent data entities or database changes. The "data model" consists of React component structures, content schemas, and static assets.

## Component Structure

### 1. Homepage Page Component

**File**: `src/pages/index.tsx`

**Type Definition**:
```typescript
interface HomepageProps {
  // No props - uses siteConfig from Docusaurus context
}

interface HomepageHeaderProps {
  title: string;
  tagline: string;
}

interface HeroCTA {
  to: string;           // Route path
  label: string;        // Button text
  icon?: string;        // Optional icon name
}
```

**State Management**: None (static component)

**Data Flow**:
- Reads `siteConfig.title` and `siteConfig.tagline` from Docusaurus context
- Renders `HomepageHeader` component
- Renders `HomepageFeatures` component

---

### 2. HomepageFeatures Component

**File**: `src/components/HomepageFeatures/index.tsx`

**Type Definition**:
```typescript
interface FeatureItem {
  id: string;                    // Unique identifier
  title: string;                 // Feature name (displayed as H3)
  description: ReactNode;        // Feature description (can include JSX)
  icon: LucideIcon;              // Lucide React icon component
  link?: string;                 // Optional link to documentation
}

interface HomepageFeaturesProps {
  // No props - uses static FeatureList array
}
```

**State Management**: None (static data)

**Data Structure**:
```typescript
const FeatureList: FeatureItem[] = [
  {
    id: 'multi-engine-search',
    title: 'Multi-Engine Search',
    description: 'Scrape leads from Google, Bing, Yandex, and Yahoo simultaneously',
    icon: SearchIcon,
    link: '/docs/lead-generation/search-engines'
  },
  {
    id: 'contact-extraction',
    title: 'Contact Extraction',
    description: 'Extract emails and contacts from websites, Yellow Pages, and search results',
    icon: UsersIcon,
    link: '/docs/lead-generation/contact-extraction'
  },
  {
    id: 'ai-email-writer',
    title: 'AI Email Writer',
    description: 'Generate personalized outreach emails using AI with your knowledge base',
    icon: MailIcon,
    link: '/docs/ai-outreach/ai-email-writer'
  },
  {
    id: 'batch-sending',
    title: 'Batch Email Sending',
    description: 'Send personalized email campaigns at scale with SMTP integration',
    icon: SendIcon,
    link: '/docs/ai-outreach/batch-email-sending'
  },
  {
    id: 'ai-assistant',
    title: 'AI Marketing Assistant',
    description: 'Get strategic marketing guidance and content ideas through AI chat',
    icon: SparklesIcon,
    link: '/docs/ai-outreach/ai-marketing-assistant'
  },
  {
    id: 'task-scheduling',
    title: 'Task Scheduling',
    description: 'Automate workflows with flexible cron-based scheduling',
    icon: ClockIcon,
    link: '/docs/automation/task-scheduling'
  }
];
```

---

### 3. Feature Card Component (Internal)

**File**: `src/components/HomepageFeatures/index.tsx` (same file)

**Type Definition**:
```typescript
interface FeatureProps {
  title: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: ReactNode;
}
```

**Responsibilities**:
- Render individual feature card in grid
- Display icon, title, and description
- Optional: Wrap in Link component if `link` provided
- Hover effects via CSS

---

## Content Schema

### Hero Section Content

**Source**: `docusaurus.config.ts` + `src/pages/index.tsx`

```typescript
{
  title: "aiFetchly Manual",                    // From siteConfig.title
  tagline: "AI-Powered Marketing Automation...", // From siteConfig.tagline
  enhancedSubtitle: "Find leads, extract contacts, and automate personalized outreach campaigns with AI assistance.",
  primaryCTA: {
    label: "Get Started in 5 Minutes",
    to: "/docs/getting-started/introduction"
  }
}
```

### Feature Grid Content

**Source**: `src/components/HomepageFeatures/index.tsx`

See `FeatureList` array above. Each feature includes:
- **id**: Unique identifier for testing and analytics
- **title**: Short, descriptive name (2-4 words)
- **description**: Benefit-oriented description (10-20 words)
- **icon**: Lucide React icon component
- **link**: Optional documentation route

---

## Static Assets

### Icon Files

**Source**: `lucide-react` package (npm)

**Icons Used**:
1. `Search` - Multi-Engine Search
2. `Users` - Contact Extraction
3. `Mail` - AI Email Writer
4. `Send` - Batch Email Sending
5. `Sparkles` - AI Marketing Assistant
6. `Clock` - Task Scheduling

**Asset Type**: SVG components (no separate files)

### Existing Assets (Maintained)

**Files**:
- `/static/img/logo.svg` - aiFetchly logo (used in navbar)
- `/static/img/favicon.ico` - Site favicon
- `/static/img/docusaurus-social-card.jpg` - Social sharing image (may need update later)

**Removed**:
- `/static/img/undraw_docusaurus_*.svg` - Generic Docusaurus illustrations (replaced with Lucide icons)

---

## CSS Architecture

### File: `src/pages/index.module.css`

**Purpose**: Hero section styling

**Key Classes**:
```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); /* Enhanced */
  color: white; /* Text contrast on gradient */
}

.buttons {
  display: flex;
  gap: 1rem; /* Enhanced: multiple buttons */
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}
```

### File: `src/components/HomepageFeatures/styles.module.css`

**Purpose**: Feature grid and card styling

**Key Classes**:
```css
.features {
  display: flex;
  align-items: center;
  padding: 4rem 0; /* Enhanced: more spacing */
  width: 100%;
  background: var(--ifm-background-color); /* Theme-aware */
}

.featureCard {
  height: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid var(--ifm-color-emphasis-200);
}

.featureCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.featureIcon {
  height: 48px;
  width: 48px;
  margin-bottom: 1rem;
  color: var(--ifm-color-primary);
}

@media screen and (max-width: 996px) {
  .features {
    padding: 2rem 0;
  }
}
```

---

## Responsive Breakpoints

**Source**: Docusaurus Infima breakpoints

```css
/* Mobile-first approach */
/* Default: < 480px - Single column */

@media (min-width: 480px) {
  /* Small tablet - Still single column */
}

@media (min-width: 768px) {
  /* Tablet - 2 columns for features */
}

@media (min-width: 996px) {
  /* Desktop - 3 columns for features */
}

@media (min-width: 1280px) {
  /* Large desktop - Max width container */
}
```

---

## Validation Rules

### Content Validation

- All features must have `id`, `title`, `description`, `icon`
- `title` must be 2-4 words
- `description` must be benefit-oriented (not just technical)
- All links must be valid documentation routes
- All icons must be from Lucide React library

### Component Validation

- Hero section must render with siteConfig data
- Feature grid must display 6 feature cards
- All cards must have consistent structure
- CTA button must link to Getting Started guide
- No Docusaurus placeholder text in rendered output

### CSS Validation

- Gradient background in hero must meet WCAG AA contrast
- All interactive elements must have hover states
- Focus states must be visible for keyboard navigation
- Spacing must follow 8px grid system
- Responsive behavior must work at all breakpoints

---

## Migration Strategy

**From Current Implementation**:

1. **Keep**: File structure (`src/pages/index.tsx`, `src/components/HomepageFeatures/index.tsx`)
2. **Replace**: Content in `FeatureList` array
3. **Enhance**: CSS in both module files
4. **Add**: `lucide-react` dependency
5. **Remove**: Generic undraw illustrations from imports

**Backwards Compatibility**: None expected - this is homepage content replacement

**Rollback**: Git revert if issues arise

---

## Testing Data

**Test Fixtures** (for unit tests):

```typescript
const mockFeature: FeatureItem = {
  id: 'test-feature',
  title: 'Test Feature',
  description: 'Test description',
  icon: SearchIcon,
  link: '/docs/test'
};

const mockFeatures: FeatureItem[] = [mockFeature, ...];
```

**Expected Output**:
- Hero renders with title, tagline, CTA
- Feature grid renders 6 cards
- Each card has icon, title, description
- Links navigate to correct routes
- Responsive layout adapts to screen size

---

## Summary

**Data Complexity**: Low
**State Management**: None (static content)
**External Data Sources**: None
**Persistence**: N/A (static site)
**Validation**: Content + component + CSS rules
**Testing**: Jest fixtures for components
