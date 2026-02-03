# Component Contracts: Professional Homepage Redesign

**Feature**: Professional Homepage Redesign
**Date**: 2026-02-03
**Status**: Final

## Overview

This document defines the interfaces, contracts, and schemas for homepage components. Since this is a visual/content feature with no backend APIs, contracts focus on React component interfaces, content schemas, and styling contracts.

---

## 1. Homepage Page Component Contract

**Component**: `Home` (export from `src/pages/index.tsx`)

**Interface**:
```typescript
interface HomeProps {
  // No props - uses Docusaurus context
}

interface HomeContext {
  siteConfig: {
    title: string;
    tagline: string;
    url: string;
    baseUrl: string;
  };
}
```

**Contract**:
- **Input**: No props (reads from Docusaurus context)
- **Output**: JSX element with `<Layout>` wrapper
- **Dependencies**: `HomepageHeader`, `HomepageFeatures`, Docusaurus `Layout`, `useDocusaurusContext`
- **Side Effects**: None (pure render component)

**Preconditions**:
- Docusaurus context must be available
- `siteConfig.title` and `siteConfig.tagline` must be non-empty strings

**Postconditions**:
- Renders `HomepageHeader` component
- Renders `HomepageFeatures` component
- Wraps content in `Layout` with proper meta tags

**Invariants**:
- Page always renders hero section first
- Page always renders feature grid second
- All links use valid Docusaurus routes

---

## 2. HomepageHeader Component Contract

**Component**: `HomepageHeader` (internal to `src/pages/index.tsx`)

**Interface**:
```typescript
interface HomepageHeaderProps {
  // No props - reads siteConfig from context
}

interface HeroContent {
  title: string;        // From siteConfig.title
  subtitle: string;     // From siteConfig.tagline
  enhancedText?: string; // Optional: Additional hero text
  ctaButton: {
    label: string;
    to: string;
    variant?: 'primary' | 'secondary';
  };
}
```

**Contract**:
- **Input**: No props (uses `useDocusaurusContext`)
- **Output**: JSX `<header>` element with hero content
- **Dependencies**: Docusaurus `Heading`, `Link`, `useDocusaurusContext`
- **Side Effects**: None

**Preconditions**:
- `siteConfig.title` must be a non-empty string
- `siteConfig.tagline` must be a non-empty string
- CTA route must exist in documentation

**Postconditions**:
- Renders H1 heading with `siteConfig.title`
- Renders paragraph with `siteConfig.tagline`
- Renders at least one CTA button
- Header has proper CSS classes for styling

**Invariants**:
- Title always rendered as `h1` (SEO requirement)
- CTA always links to Getting Started guide
- Header background uses gradient (design requirement)

---

## 3. HomepageFeatures Component Contract

**Component**: `HomepageFeatures` (export from `src/components/HomepageFeatures/index.tsx`)

**Interface**:
```typescript
interface FeatureItem {
  id: string;
  title: string;
  description: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
}

interface HomepageFeaturesProps {
  // No props - uses static FeatureList
}
```

**Contract**:
- **Input**: No props
- **Output**: JSX `<section>` with feature grid
- **Dependencies**: Docusaurus `Heading`, Lucide icons, `clsx`
- **Side Effects**: None

**Preconditions**:
- `FeatureList` array must contain 6 items
- Each feature must have `id`, `title`, `description`, `icon`
- All `link` values (if present) must be valid routes

**Postconditions**:
- Renders 6 feature cards in grid layout
- Each card displays icon, title, description
- Cards with `link` are wrapped in `Link` component
- Grid is responsive (3 cols → 2 cols → 1 col)

**Invariants**:
- Feature count is always 6 (design requirement)
- All cards use same component structure
- Grid maintains visual alignment
- Icons are consistently sized and colored

---

## 4. Feature Card Component Contract

**Component**: `Feature` (internal to `HomepageFeatures`)

**Interface**:
```typescript
interface FeatureProps {
  title: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: ReactNode;
}
```

**Contract**:
- **Input**: `title`, `Svg` component, `description`
- **Output**: JSX `<div>` with card content
- **Dependencies**: Docusaurus `Heading`, `clsx`
- **Side Effects**: None

**Preconditions**:
- `title` must be non-empty string
- `Svg` must be valid SVG component
- `description` must be renderable ReactNode

**Postconditions**:
- Renders icon at top of card
- Renders `title` as `h3` heading
- Renders `description` as paragraph
- Card has proper CSS classes for styling and hover effects

**Invariants**:
- Icon always rendered first
- Title always rendered as `h3`
- Card maintains consistent padding and spacing

---

## 5. Content Schema Contract

**Schema**: FeatureList array

**Definition**:
```typescript
type FeatureList = FeatureItem[];

const featureItemSchema = {
  id: string;              // Format: kebab-case
  title: string;           // Length: 2-4 words
  description: string;     // Length: 10-20 words, benefit-oriented
  icon: LucideIcon;        // From lucide-react package
  link?: string;           // Format: '/docs/category/page'
};
```

**Validation Rules**:
- `id` must be unique across all features
- `id` must match regex: `^[a-z0-9]+(-[a-z0-9]+)*$`
- `title` must not contain "Docusaurus" or generic terms
- `title` length: 10-50 characters
- `description` must emphasize user benefit (not just technical)
- `description` length: 50-150 characters
- `icon` must be imported from `lucide-react`
- `link` (if present) must start with `/docs/`

**Example Valid Feature**:
```typescript
{
  id: 'multi-engine-search',
  title: 'Multi-Engine Search',
  description: 'Scrape leads from Google, Bing, Yandex, and Yahoo simultaneously',
  icon: Search,
  link: '/docs/lead-generation/search-engines'
}
```

**Example Invalid Feature**:
```typescript
// ❌ Violates: title contains generic Docusaurus content
{
  id: 'easy-to-use',
  title: 'Easy to Use',
  description: 'Docusaurus was designed from the ground up...',
  icon: Tree,
  // Missing: link to actual documentation
}
```

---

## 6. CSS Module Contracts

### File: `src/pages/index.module.css`

**Exported Classes**:
```typescript
interface IndexStyles {
  heroBanner: string;
  buttons: string;
}
```

**Contract**:
- `.heroBanner` must:
  - Apply gradient background
  - Set text color to white (for contrast)
  - Include responsive padding (4rem desktop, 2rem mobile)
  - Handle overflow (for potential decorative elements)

- `.buttons` must:
  - Use flexbox for centering
  - Support gap between multiple buttons
  - Be responsive (stack on mobile)

### File: `src/components/HomepageFeatures/styles.module.css`

**Exported Classes**:
```typescript
interface FeaturesStyles {
  features: string;
  featureSvg: string;
  featureCard?: string;  // Enhanced
  featureIcon?: string;  // Enhanced
}
```

**Contract**:
- `.features` must:
  - Use flexbox for centering
  - Apply padding (4rem desktop, 2rem mobile)
  - Set background color from theme variable

- `.featureSvg` must:
  - Set icon dimensions (48px × 48px)
  - Apply primary color from theme
  - Include bottom margin for spacing

- `.featureCard` (new) must:
  - Add border radius
  - Include transition for hover effects
  - Apply border and shadow on hover
  - Maintain consistent padding

---

## 7. Accessibility Contract

**WCAG AA Compliance Requirements**:

### Color Contrast
- Hero text on gradient background: ≥4.5:1 contrast ratio
- Feature card text: ≥4.5:1 contrast ratio
- Link text: ≥3:1 contrast ratio (enhanced)

### Keyboard Navigation
- All links must be keyboard accessible
- Tab order must be logical (hero CTA → feature cards → secondary CTA)
- Focus indicators must be visible (default browser or custom)

### Screen Reader Support
- All icons must have `role="img"` or `aria-label`
- Hero heading must be `h1` (document outline)
- Feature titles must be `h3` (h2 reserved for page sections)
- Links must have descriptive text (not "click here")

### Semantic HTML
- Use semantic elements: `<header>`, `<main>`, `<section>`, `<nav>`
- Heading hierarchy: h1 → h2 → h3 (no skips)
- Landmark regions for navigation (banner, main, contentinfo)

**Testing Contract**:
- Lighthouse accessibility score: 90+
- axe-core DevTools: zero errors
- Manual keyboard test: all features accessible
- Screen reader test: NVDA/JAWS compatible

---

## 8. Performance Contract

**Requirements** (from spec):
- Homepage load time: <2s on 3G connection
- Lighthouse Performance score: 90+
- Bundle size increase: <50KB

**Metrics**:
```typescript
interface PerformanceMetrics {
  firstContentfulPaint: number;  // Target: <1.5s
  largestContentfulPaint: number; // Target: <2.5s
  cumulativeLayoutShift: number;  // Target: <0.1
  firstInputDelay: number;        // Target: <100ms
  bundleSize: number;             // Target: <50KB increase
}
```

**Contract**:
- No blocking JavaScript for above-fold content
- Icons loaded via tree-shaking (not full library)
- CSS modules inline critical styles
- Lazy load off-screen images (if added later)
- Preload critical fonts (handled by Docusaurus)

---

## 9. Testing Contract

### Unit Test Requirements

**Files**:
- `src/components/__tests__/HomepageFeatures.test.tsx`
- `src/pages/__tests__/index.test.tsx`

**Coverage**: 100% for custom components (per FR-022, SC-007)

**Test Cases**:

#### HomepageFeatures Component
```typescript
describe('HomepageFeatures', () => {
  it('renders 6 feature cards', () => {});
  it('each card has icon, title, description', () => {});
  it('cards with links navigate to correct routes', () => {});
  it('responsive layout renders correct column count', () => {});
  it('icons have proper aria attributes', () => {});
});
```

#### Home Page Component
```typescript
describe('Home', () => {
  it('renders hero section with title and tagline', () => {});
  it('renders CTA button with correct link', () => {});
  it('renders feature grid below hero', () => {});
  it('has proper meta description for SEO', () => {});
  it('uses h1 for main heading', () => {});
});
```

---

## 10. Integration Contract

### Docusaurus Integration

**Theme Contracts**:
- Uses Docusaurus `Layout` component
- Uses Docusaurus `Link` component for internal navigation
- Uses Docusaurus `Heading` component for consistent headings
- Respects `colorMode` context (light/dark theme)

**Configuration Contract**:
- Reads `siteConfig.title` from `docusaurus.config.ts`
- Reads `siteConfig.tagline` from `docusaurus.config.ts`
- Page title and meta description from `Layout` props

**Build Process**:
- Component must compile with `yarn build`
- No TypeScript errors (FR-023)
- No ESLint warnings (recommended)

### Styling Integration

**Theme Variables Used**:
- `--ifm-color-primary`: Icon and accent color
- `--ifm-background-color`: Page background
- `--ifm-font-family-base`: Typography
- `--ifm-spacing-*`: Spacing scale (8px grid)

**Custom CSS**:
- Enhanced in `src/css/custom.css` (gradient, hero styles)
- Component-specific in CSS Modules

---

## Summary of Contracts

| Contract Type | Count | Status |
|--------------|-------|--------|
| Component Interfaces | 4 | Final |
| Content Schemas | 1 | Final |
| CSS Modules | 2 | Final |
| Accessibility | 1 | Final |
| Performance | 1 | Final |
| Testing | 2 | Final |

**Total Contracts**: 11

All contracts are final and ready for implementation phase.
