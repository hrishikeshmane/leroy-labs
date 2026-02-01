# Design System

Guidelines for UI components, styling, and animations in this landing page.

## Color System

Uses OKLCH color space for perceptual uniformity. Defined in `globals.css` with semantic CSS variables:

| Token | Usage |
|-------|-------|
| `primary` | Main text, headings |
| `secondary` | Accent/brand color (blue `oklch(54.65% 0.246 262.87)`) |
| `muted-foreground` | Secondary text, descriptions |
| `border` | Dividers, card borders |
| `accent` | Highlighted cards, badges |
| `background` | Page background |

Access via Tailwind: `bg-secondary`, `text-muted-foreground`, `border-border`

## Typography

- **Font**: Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`)
- **Headings**: `font-medium tracking-tighter text-balance`
  - Hero: `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
  - Section: `text-3xl md:text-4xl`
  - Card title: `text-lg font-semibold`
- **Body**: `text-base md:text-lg font-medium text-muted-foreground`
- **Small text**: `text-sm`

## Spacing

- **Section padding**: `px-6` horizontal, `pb-10` vertical
- **Section headers**: `p-10 md:p-14` with `border-b`
- **Card padding**: `p-4` or `p-6`
- **Gap between items**: `gap-2`, `gap-4`, `gap-5`, `gap-10`
- **Max content width**: `max-w-7xl` container, `max-w-xl` for centered text

## Borders & Radius

- **Base radius**: `--radius: 0.625rem` (10px)
- **Cards**: `rounded-xl` (larger) or `rounded-2xl`
- **Buttons**: `rounded-full` for pills, `rounded-md` for standard
- **Border color**: `border-border` (light/dark aware)

## Shadows

Layered shadow pattern for depth:

```css
/* Primary button - inset highlight + outer shadow */
shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]

/* Elevated card */
shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10)]

/* Subtle shadow */
shadow-[0_0_10px_rgba(0,0,0,0.05)]
```

## Buttons

### Primary CTA (Pill)
```tsx
<Link className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95">
```

### Secondary/Ghost
```tsx
<Link className="h-10 flex items-center justify-center px-5 text-sm font-normal text-primary rounded-full bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 transition-all ease-out active:scale-95">
```

### Interactive states
- Hover: `hover:bg-{color}/80`
- Active: `active:scale-95`
- Transition: `transition-all ease-out`

## Cards

### Standard card
```tsx
<div className="bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border rounded-xl p-4">
```

### Highlighted/Popular card
```tsx
<div className="bg-accent rounded-xl shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),...] p-4">
```

### Bento grid item
```tsx
<div className="min-h-[500px] relative before:absolute before:-left-0.5 before:h-screen before:w-px before:bg-border after:absolute after:-top-0.5 after:h-px after:w-screen after:bg-border">
```

## Animations

Uses `motion/react` (Framer Motion). Import as:
```tsx
import { motion, AnimatePresence, useInView, useScroll } from "motion/react";
```

### Spring configs
```tsx
// Snappy UI transitions
{ type: "spring", stiffness: 300, damping: 25, velocity: 2 }

// Smooth drawer/modal
{ type: "spring", damping: 15, stiffness: 200 }

// Content slide
{ type: "spring", stiffness: 300, damping: 20 }
```

### Common patterns

**Layout animations** (tabs, toggles):
```tsx
<motion.div layoutId="active-tab" transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }} />
```

**Enter/exit** (content changes):
```tsx
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -10 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
/>
```

**Price/number animation** (blur effect):
```tsx
<motion.span
  initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
/>
```

**Staggered children**:
```tsx
transition={{ staggerChildren: 0.03 }}
```

**Scroll-triggered** (useInView):
```tsx
const ref = useRef(null);
const isInView = useInView(ref);
// Delay animation start
useEffect(() => {
  if (isInView) setTimeout(() => setAnimate(true), 1000);
}, [isInView]);
```

### CSS keyframe animations (globals.css)
- `animate-marquee` / `animate-marquee-vertical` - infinite scroll
- `animate-accordion-down/up` - expand/collapse
- `animate-orbit` - circular motion

## Background Effects

### Radial gradient (hero)
```tsx
<div className="[background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]" />
```

### Diagonal lines pattern
```tsx
<div className="text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
```

### Fade overlay
```tsx
<div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-background to-transparent" />
```

### Backdrop blur (navbar on scroll)
```tsx
<div className="backdrop-blur-lg bg-background/75" />
```

## Responsive Breakpoints

Follow Tailwind defaults. Common patterns:
- `md:` (768px) - Switch to multi-column layouts
- Mobile-first: stack vertically, then `md:flex-row` or `md:grid-cols-2`
- Hide/show: `hidden md:flex` or `md:hidden`

## Dark Mode

- Use `dark:` prefix for overrides
- Colors auto-switch via CSS variables
- Explicit overrides where needed: `dark:bg-[#3F3F46]`, `dark:border-[#27272A]`
- SVG icons: provide both versions with `block dark:hidden` / `hidden dark:block`
