# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack (http://localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint
```

## Architecture

This is a Next.js 15 landing page using React 19, Tailwind CSS v4, and shadcn/ui (new-york style).

### Key Directories

- `src/app/` - App Router pages (single-page layout with navbar)
- `src/components/sections/` - Page sections (hero, pricing, FAQ, etc.) composed in `page.tsx`
- `src/components/ui/` - Reusable UI primitives (shadcn components + custom animations)
- `src/lib/config.tsx` - **Central content configuration** - all text, navigation, pricing, FAQs live here
- `src/lib/site.ts` - Site metadata (name, URL, description)
- `src/hooks/` - Custom React hooks

### Patterns

- **Content is config-driven**: Section components pull data from `siteConfig` in `lib/config.tsx` rather than hardcoding text
- **Theming**: Uses `next-themes` with CSS variables; components support dark/light via Tailwind's `dark:` prefix
- **Styling**: Use `cn()` from `lib/utils.ts` for merging Tailwind classes; shadcn components use `class-variance-authority`
- **Animations**: Framer Motion via `motion/react` package (not `framer-motion`)
- **Path aliases**: `@/` maps to `src/` (configured in tsconfig.json)
