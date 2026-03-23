# Merge "Our Approach" Page into Solutions Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge the "Our Approach" page content (comparison table, process timeline, deliverables) into the Solutions page, then remove the Approach page and all its references.

**Architecture:** The Solutions page currently has: Hero > Industry Grid > Compliance section > CTA. We'll insert the Approach sections (comparison table, process timeline, deliverables) between the Compliance section and the final CTA. The Approach page, config, and nav links will then be removed. The Solutions hero and metadata will be updated to reflect the broader scope.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Lucide icons

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `src/app/(marketing)/solutions/page.tsx` | Add approach sections, update metadata |
| Modify | `src/lib/config/solutions.tsx` | Import and re-export approach data |
| Modify | `src/lib/config/navigation.ts` | Remove "Our Approach" nav link, update footer |
| Modify | `src/lib/config/index.ts` | Remove approach re-export |
| Delete | `src/app/(marketing)/approach/page.tsx` | No longer needed |
| Delete | `src/lib/config/approach.tsx` | Data moves into solutions config |
| Modify | `src/lib/types.ts` | Move approach types into solutions section (optional cleanup) |

---

### Task 1: Move Approach Data into Solutions Config

**Files:**
- Modify: `src/lib/config/solutions.tsx`
- Reference: `src/lib/config/approach.tsx` (source of data to move)

- [ ] **Step 1: Add approach imports and data to solutions config**

In `src/lib/config/solutions.tsx`, add the lucide icon imports (`Search`, `Users`, `Rocket`, `RefreshCw`) and the type imports (`ComparisonRow`, `ProcessStep`). Then copy the `comparisonRows`, `processSteps`, and `deliverables` data from `approach.tsx` into `solutions.tsx`.

- [ ] **Step 2: Expand the `solutionsConfig` export**

Update the `solutionsConfig` object to include the approach data:

```tsx
export const solutionsConfig = {
  hero: solutionsHero,
  industries,
  comparison: {
    title: "Traditional Consulting vs. Forward Deployment",
    rows: comparisonRows,
  },
  process: {
    title: "How We Work",
    description:
      "A proven process that delivers results fast while building long-term capabilities.",
    steps: processSteps,
  },
  deliverables,
};
```

- [ ] **Step 3: Verify no import errors**

Run: `pnpm build`
Expected: Build succeeds (approach page still exists at this point and imports from its own config — that's fine, we haven't deleted it yet).

- [ ] **Step 4: Commit**

```bash
git add src/lib/config/solutions.tsx
git commit -m "feat: add approach data to solutions config"
```

---

### Task 2: Add Approach Sections to Solutions Page

**Files:**
- Modify: `src/app/(marketing)/solutions/page.tsx`

- [ ] **Step 1: Update imports**

Add `Check`, `X` to the lucide imports (add `X`, `Check` already imported). Import `solutionsConfig` already exists. Remove the `Icons` import only if the compliance section is kept (it is). Add no new component imports — the sections are inlined.

- [ ] **Step 2: Update page metadata**

```tsx
export const metadata: Metadata = {
  title: "Solutions & Approach",
  description:
    "AI solutions built for your industry with our forward-deployed engineering approach. See how we work and what we deliver.",
};
```

- [ ] **Step 3: Add the Comparison Table section**

Insert after the Compliance section (`</section>`) and before `<SectionCTA>`. Copy the comparison table JSX from `approach/page.tsx` lines 19-75, replacing `approachConfig.comparison` references with `solutionsConfig.comparison`.

- [ ] **Step 4: Add the Process Timeline section**

Insert after the comparison table section. Copy the process timeline JSX from `approach/page.tsx` lines 78-123, replacing `approachConfig.process` references with `solutionsConfig.process`.

- [ ] **Step 5: Add the Deliverables section**

Insert after the process timeline section. Copy the deliverables JSX from `approach/page.tsx` lines 126-152, replacing `approachConfig.deliverables` references with `solutionsConfig.deliverables`.

- [ ] **Step 6: Update the final SectionCTA**

Update the CTA to cover both solutions and approach messaging:

```tsx
<SectionCTA
  title="Ready to Get Started?"
  description="See firsthand how our forward-deployed approach accelerates AI delivery for your industry."
  primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
  secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
  variant="accent"
/>
```

- [ ] **Step 7: Verify the page renders**

Run: `pnpm dev` and visit `http://localhost:3000/solutions`
Expected: Page shows all original Solutions content plus the three Approach sections, in order:
1. Hero
2. Industry Grid
3. Compliance
4. Comparison Table
5. Process Timeline
6. Deliverables
7. CTA

- [ ] **Step 8: Commit**

```bash
git add src/app/(marketing)/solutions/page.tsx
git commit -m "feat: add approach sections to solutions page"
```

---

### Task 3: Update Navigation

**Files:**
- Modify: `src/lib/config/navigation.ts`

- [ ] **Step 1: Remove "Our Approach" from navbar**

In `navLinks`, remove the entry `{ id: 4, name: "Our Approach", href: "/approach" }`.

- [ ] **Step 2: Update the navbar "Solutions" label (optional)**

Consider renaming from `"Solutions"` to `"Solutions & Approach"` — or keep as `"Solutions"` if the user prefers brevity. Default: keep as `"Solutions"`.

- [ ] **Step 3: Update footer links**

In `footerLinks`, in the "Resources" section:
- Remove `{ id: 9, title: "Our Approach", url: "/approach" }`
- Optionally add `{ id: 9, title: "Our Approach", url: "/solutions#approach" }` if anchor linking is desired, or simply remove it.

- [ ] **Step 4: Verify navigation**

Run: `pnpm dev` and check navbar and footer.
Expected: No "Our Approach" link in navbar. Footer updated. "Solutions" link works.

- [ ] **Step 5: Commit**

```bash
git add src/lib/config/navigation.ts
git commit -m "feat: remove approach from navigation, update footer"
```

---

### Task 4: Delete Approach Page and Config

**Files:**
- Delete: `src/app/(marketing)/approach/page.tsx`
- Delete: `src/lib/config/approach.tsx`
- Modify: `src/lib/config/index.ts` (remove approach re-export)

- [ ] **Step 1: Remove the approach re-export from index.ts**

In `src/lib/config/index.ts`, remove the line:
```ts
export * from "./approach";
```

- [ ] **Step 2: Delete the approach page**

```bash
rm src/app/(marketing)/approach/page.tsx
```

- [ ] **Step 3: Delete the approach config**

```bash
rm src/lib/config/approach.tsx
```

- [ ] **Step 4: Remove the approach directory if empty**

```bash
rmdir src/app/(marketing)/approach
```

- [ ] **Step 5: Verify build succeeds**

Run: `pnpm build`
Expected: Build passes with no errors. No references to `approachConfig` or `/approach` remain.

- [ ] **Step 6: Verify `/approach` returns 404**

Run: `pnpm dev` and visit `http://localhost:3000/approach`
Expected: 404 page.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: remove approach page and config after merge into solutions"
```

---

### Task 5: Clean Up Types (Optional)

**Files:**
- Modify: `src/lib/types.ts`

- [ ] **Step 1: Move approach types under solutions section**

Move the `ProcessStep`, `ComparisonRow`, and `ApproachConfig` interfaces to sit near the `SolutionsConfig` interface. Update `SolutionsConfig` to include the approach fields:

```ts
export interface SolutionsConfig {
  hero: PageHeroConfig;
  industries: IndustrySolution[];
  comparison: {
    title: string;
    rows: ComparisonRow[];
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  deliverables: {
    title: string;
    items: string[];
  };
}
```

- [ ] **Step 2: Remove `ApproachConfig` interface**

Delete the `ApproachConfig` interface since it's no longer used.

- [ ] **Step 3: Verify build**

Run: `pnpm build`
Expected: Build passes.

- [ ] **Step 4: Commit**

```bash
git add src/lib/types.ts
git commit -m "chore: consolidate approach types into solutions types"
```

---

## Final Page Structure (Solutions)

After merge, `http://localhost:3000/solutions` will render:

1. **Hero** — "AI Built for Your Industry"
2. **Industry Solutions Grid** — 4 industry cards (Financial, Healthcare, E-commerce, SaaS)
3. **Compliance Badges** — SOC 2, HIPAA, GDPR
4. **Comparison Table** — Traditional vs. Forward Deployed (from Approach)
5. **Process Timeline** — 4-step "How We Work" (from Approach)
6. **Deliverables** — Checklist of what clients get (from Approach)
7. **CTA** — "Ready to Get Started?"
