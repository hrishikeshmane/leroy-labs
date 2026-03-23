# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Pre-Launch Issues

See [FIXME.md](./FIXME.md) for the full list of issues to fix before going live.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack (http://localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint
```

## Architecture

This is a Next.js 15 landing page using React 19, Tailwind CSS v4, and shadcn/ui (new-york style).

### Key Directories

- `src/app/` - App Router pages with route groups
  - `(marketing)/` - Marketing pages with shared navbar/footer layout
- `src/components/sections/` - Page sections (hero, pricing, FAQ, etc.) composed in `page.tsx`
  - `shared/` - Reusable section patterns (PageHero, SectionCTA, ContentGrid)
- `src/components/ui/` - Reusable UI primitives (shadcn components + custom animations)
- `src/lib/config/` - **Central content configuration** - all text, navigation, pricing, FAQs
  - `index.ts` - Main siteConfig aggregator
  - `navigation.ts` - Nav links and footer structure
  - `home.tsx` - Home page content (largest config file)
  - `services.tsx`, `solutions.tsx`, `approach.tsx`, etc. - Page-specific configs
- `src/lib/types.ts` - TypeScript interfaces for all configuration shapes
- `src/lib/site.ts` - Site metadata (name, URL, description, social links)
- `src/lib/utils.ts` - Utility functions (cn, color helpers)
- `src/hooks/` - Custom React hooks (use-media-query)

### Core Patterns

**Content-Config-Component Separation:**
- **Content** lives in `src/lib/config/` as TypeScript data structures
- **Types** defined in `src/lib/types.ts` for strict typing
- **Components** pull from `siteConfig` and are purely presentational
- **Pages** compose sections to build complete views

This architecture enables:
- Updating content without modifying React components
- Reusing sections across multiple pages
- Type-safe configuration with autocompletion
- Clear separation of concerns

**Config-Driven Development:**
Section components pull data from `siteConfig` rather than hardcoding text:

```tsx
// src/components/sections/hero-section.tsx
export function HeroSection() {
  const { hero } = siteConfig;  // Pull from lib/config

  return (
    <section>
      <p>{hero.badge}</p>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <Link href={hero.cta.primary.href}>{hero.cta.primary.text}</Link>
    </section>
  );
}
```

**Page Composition:**
Pages are built by composing section components:

```tsx
// src/app/(marketing)/page.tsx
export default function Home() {
  return (
    <main>
      <HeroSection />        {/* Uses siteConfig.hero */}
      <CompanyShowcase />    {/* Uses siteConfig.companyLogos */}
      <BentoSection />       {/* Uses siteConfig.bentoSection */}
      <FeatureSection />     {/* Uses siteConfig.featureSection */}
      <FAQSection />         {/* Uses siteConfig.faqSection */}
    </main>
  );
}
```

**Shared Section Patterns:**
Reusable section components in `src/components/sections/shared/`:
- `PageHero` - Hero section for subpages (services, solutions, about)
- `SectionCTA` - Call-to-action pattern reused across sections
- `ContentGrid/ContentCard` - Grid layout for displaying card-based content

### Configuration System

The configuration system is the heart of this architecture. All content lives in `src/lib/config/`:

**Adding New Content:**
1. Define/update config in `src/lib/config/{page}.tsx`
2. Add TypeScript types to `src/lib/types.ts`
3. Export from `src/lib/config/index.ts` in the `siteConfig` object
4. Create section component in `src/components/sections/{section}.tsx`
5. Compose section into page

**Configuration Structure:**
- `navigation.ts` - Nav links array and footer column structure
- `home.tsx` - Hero, features, bento grid, pricing, FAQs, testimonials
- `services.tsx` - Services page hero and content sections
- `solutions.tsx` - Solutions/industries page content
- `approach.tsx` - Our approach page content
- `case-studies.ts` - Case study listings
- `about.tsx` - About page content
- `contact.ts` - Contact page configuration
- `blog.ts` - Blog page configuration

### Styling & Design System

**Styling Stack:**
- Tailwind CSS v4 with PostCSS
- shadcn/ui components using `class-variance-authority` (CVA)
- CSS variables for theming (OKLCH color space)
- `cn()` utility from `lib/utils.ts` for merging Tailwind classes

**Color System:**
Uses OKLCH color space for perceptual uniformity. Defined in `globals.css`:
- `primary` - Main text, headings
- `secondary` - Accent/brand color (blue)
- `muted-foreground` - Secondary text, descriptions
- `border` - Dividers, card borders
- `accent` - Highlighted cards, badges
- `background` - Page background

Access via Tailwind: `bg-secondary`, `text-muted-foreground`, `border-border`

**Typography:**
- Font: Geist Sans and Geist Mono
- Headings: `font-medium tracking-tighter text-balance`
  - Hero: `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
  - Section: `text-3xl md:text-4xl`
  - Card title: `text-lg font-semibold`
- Body: `text-base md:text-lg font-medium text-muted-foreground`

**Component Styling Pattern (CVA):**
```tsx
// shadcn/ui components use class-variance-authority
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "...", outline: "..." },
    size: { default: "h-9 px-4", sm: "h-8 px-3", lg: "h-10 px-6" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

function Button({ variant, size, className, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
```

**Dark Mode:**
- Uses `next-themes` with CSS variable-based theming
- Components support dark/light via Tailwind's `dark:` prefix
- System preference detection enabled
- SVG icons: provide both versions with `dark:hidden` / `hidden dark:block`

**Responsive Design:**
- Mobile-first approach
- Common breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Pattern: stack vertically by default, then `md:flex-row` or `md:grid-cols-2`

For complete design guidelines, see `design-system.md`.

### Animations

**Framer Motion Integration:**
Uses `motion/react` package (not `framer-motion`):

```tsx
import { motion, AnimatePresence, useScroll, useInView } from "motion/react";
```

**Common Animation Patterns:**

Spring animations for UI interactions:
```tsx
<motion.div
  layoutId="active-tab"
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
/>
```

Enter/exit animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
/>
```

Scroll-triggered animations:
```tsx
const ref = useRef(null);
const isInView = useInView(ref);
```

**CSS Keyframe Animations** (in `globals.css`):
- `animate-marquee` / `animate-marquee-vertical` - Infinite scroll
- `animate-accordion-down` / `accordion-up` - Expand/collapse
- `animate-orbit` - Circular motion

**Custom Animation Components:**
Complex animations are extracted into separate files:
- `first-bento-animation.tsx` through `fourth-bento-animation.tsx`
- `blur-fade.tsx` - Fade in with blur effect

### Special UI Components

**Custom Visualizations:**
- `ui/globe.tsx` - 3D globe using `cobe` library
- `ui/flickering-grid.tsx` - Animated background grid effect with text support
  - Props: `letterSpacing` (number | string), `textPosition` ("center" | "bottom"), `fontSize`, `fontWeight`
- `ui/marquee.tsx` - Infinite horizontal/vertical scroll
- `ui/orbiting-circle.tsx` - Orbital animation pattern
- `ui/blur-fade.tsx` - Entry animation with blur
- `ui/hero-video-dialog.tsx` - Modal video player

**Content Components:**
- `ui/markdown.tsx` - React Markdown with GitHub Flavored Markdown support
- `ui/code-block.tsx` - Syntax-highlighted code using Shiki
- `ui/response-stream.tsx` - Streaming text animation

**shadcn/ui Components:**
All components follow the new-york style variant. Common components:
- Button (CVA-based variants)
- Accordion (Radix UI)
- Badge
- Navigation Menu (Radix UI)

### Layout Structure

**Marketing Layout** (`app/(marketing)/layout.tsx`):
```tsx
<div className="max-w-7xl mx-auto border-x relative">
  <Navbar />
  {children}
  <FooterSection />
</div>
```

Features:
- Max-width container with vertical borders
- Navbar sticky on scroll with backdrop blur and width animation
- Consistent footer across all marketing pages

**Navbar Behavior:**
- Desktop: Animated width change on scroll (70rem → 900px)
- Mobile: Drawer menu with Framer Motion animations
- Active link highlighting with animated indicator
- No link highlighted when on pages not in navbar (returns `null` instead of defaulting to home)

**Section Pattern:**
```tsx
<section className="divide-y divide-border">
  <SectionHeader>
    <h2>{title}</h2>
    <p>{description}</p>
  </SectionHeader>

  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* Grid items with decorative diagonal patterns */}
  </div>
</section>
```

### Path Aliases

`@/` maps to `src/` (configured in tsconfig.json)

### Metadata & SEO

- Centralized metadata in `src/app/metadata.ts`
- Dynamic metadata per page via `Metadata` export
- Dynamic OG image generation (`opengraph-image.tsx`)
- Site info in `src/lib/site.ts`

### Icons

The `icons.tsx` file contains all SVG icons as inline React components:
- No extra HTTP requests
- Easy styling and animation
- Theme-aware (dark/light variants available)
- Large file (106KB) but bundled efficiently

### Development Notes

- Next.js App Router with route groups: `(marketing)` for shared layouts
- Turbopack for fast HMR in development
- No testing framework currently configured
- TypeScript strict mode enabled
- Font optimization via `next/font` with Geist fonts from Google Fonts
