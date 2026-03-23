# FIXME — Pre-Launch Issues

Consolidated audit of issues to fix before making the site live.

## Critical — Must Fix

- [ ] **Missing pages linked in footer** — `/privacy` and `/terms` have no pages. Create them or remove the links from `src/lib/config/navigation.ts`
- [ ] **Blog not in navbar or footer** — `/blog` is not linked in the header navigation or footer. Add it to `src/lib/config/navigation.ts` navLinks and/or footerLinks
- [ ] **Blog pages show 404** — Individual blog post pages (`/blog/[slug]`) don't exist. Create `src/app/(marketing)/blog/[slug]/page.tsx` or make blog post cards non-clickable
- [x] **~~Missing `/careers` page~~** — Removed all careers references. CTAs now point to `/contact` and `/case-studies`
- [ ] **No `robots.txt` or `sitemap.xml`** — Create `src/app/robots.ts` and `src/app/sitemap.ts` for SEO
- [ ] **Home page missing metadata** — `src/app/(marketing)/page.tsx` has no `metadata` export. Add title and description
- [ ] **Replace `<img>` with `next/image`** — ~10 files use raw `<img>` tags, bypassing Next.js image optimization. Affected: blog, case studies, about, testimonials, bento animations

## High Priority — Should Fix

- [ ] **Placeholder images everywhere** — All avatars use `randomuser.me`, hero images use Unsplash stock photos. Files: `home.tsx`, `about.tsx`, `case-studies.ts`, `blog.ts`
- [ ] **Incomplete team social links** — All 6 team members in `src/lib/config/about.tsx:64-108` have empty LinkedIn/Twitter URLs (just base domain). Complete or remove them
- [ ] **Company showcase `href="#"`** — All 6 logo links in `src/components/sections/company-showcase.tsx:18` go nowhere. Remove link wrappers or add real URLs
- [ ] **Missing `aria-label` on buttons** — Mobile menu toggle, drawer close, video play/close buttons in `navbar.tsx` and `hero-video-dialog.tsx` lack accessibility labels
- [ ] **Twitter/X link inconsistency** — `src/lib/site.ts` uses `x.com/leroylabs`, `src/lib/config/index.ts` uses `twitter.com/leroylabs`. Standardize on one
- [ ] **Duplicate testimonial photo** — Sarah Chen (`home.tsx:371`) and Nina Patel (`home.tsx:539`) share the same `randomuser.me` avatar

## Medium Priority — Nice to Fix

- [ ] **Heading semantics** — Review heading hierarchy across sections for screen reader navigation
- [ ] **`icons.tsx` is 106KB** — Single file with all SVGs in `src/components/icons.tsx`. Consider code-splitting for unused icons
- [ ] **Feature slideshow `loading="eager"`** — Below-fold images in `src/components/ui/feature-slideshow.tsx:239` should use `loading="lazy"`
- [ ] **Verify `cal.com/leroylabs`** — Booking link used across CTAs. Confirm it's active and configured
- [ ] **Blog post dates are stale** — Dates from Jan 2024 / Dec 2023 in `src/lib/config/blog.ts`. Update if posts don't actually exist
- [ ] **Verify OG image** — `public/agent-template-og.png` name suggests it may be a template placeholder
- [ ] **Color contrast** — `text-white` on `bg-secondary` used in badges/buttons. Verify WCAG AA 4.5:1 ratio

## No Issues Found

- No stale `/approach` references remaining
- Company name "Leroy Labs" is consistent everywhere
- CTA links and email (`hi@leroylabs.io`) are consistent
- All case studies have complete data
- External links have proper `rel="noopener noreferrer"`
- Dark mode is properly implemented
- No TODO/FIXME/HACK comments in codebase
