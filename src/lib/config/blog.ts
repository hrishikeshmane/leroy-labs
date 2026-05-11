import { PageHeroConfig, BlogPost } from "@/lib/types";

export const blogHero: PageHeroConfig = {
  badge: "Blog",
  title: "Notes from the field",
  description:
    "Practical perspectives on building software, automating operations, and integrating AI where it earns its keep.",
  variant: "centered",
};

export const categories = [
  "All",
  "Engineering",
  "Automation",
  "AI",
  "Consulting",
  "Industry",
];

export const posts: BlogPost[] = [
  {
    slug: "forward-deployment-explained",
    title: "Forward Deployment: Why Traditional Consulting Fails Software Projects",
    excerpt:
      "The case for embedded engineering over traditional consulting. How we've seen forward deployment consistently outperform deck-driven engagements.",
    content: `## The problem with traditional consulting

Most software consulting engagements follow a predictable arc: discovery, strategy deck, handoff, and a slow march toward a deliverable that may or may not resemble production code. The consultants leave, the client is left holding the bag, and six months later somebody inside the company is rebuilding what the consultants delivered.

We've watched this happen enough times to know it isn't a staffing problem. It's a structural problem.

## What forward deployment means

Forward deployment means our engineers work *inside* your team — not alongside it. They join your Slack, attend your standups, commit to your repo, and participate in your code review process. The fiction of an "external vendor" goes away on day one.

The practical effects are immediate:

- **No handoff.** Because code is being written in your repo, there's no artifact to hand off. When the engagement ends, the work is already yours.
- **Shorter feedback loops.** Changes land in hours, not weeks. Designers, PMs, and operators review work the same day it's written.
- **Context stays put.** When a forward-deployed engineer rolls off, the system they built is understood by your team — because your team reviewed every PR.

## Why this matters for AI and automation work

AI and automation projects fail silently. A demo looks great, a pilot gets approved, and then production reveals all the edge cases the prototype didn't handle. You can't fix those edge cases from outside the organization — you need to be sitting next to the people who actually do the work.

That's why we embed. Not because it's trendy, but because it's the only way we know how to ship software that still works twelve months from now.`,
    author: {
      name: "Alex Morgan",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    publishedAt: "2026-04-02",
    category: "Consulting",
    tags: ["Process", "Consulting", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "automation-before-ai",
    title: "Automation Before AI: Where Most of Your Leverage Actually Lives",
    excerpt:
      "Everyone wants AI agents. Most businesses don't need them yet. The highest-ROI work is usually the boring automation sitting right in front of you.",
    content: `## The meeting that keeps happening

A prospect calls us. They want to know if we can build "an AI agent" to handle customer support. We ask what the agent would need to do. They describe it: read tickets, pull account data, send a response, and escalate if needed.

We ask how ticket data flows into their system today. Silence. Then: "It's kind of manual. Our ops team forwards emails from a shared inbox into our support tool, and then someone pulls account info from a different dashboard."

There is no AI agent to build here. There's an email forwarder to write. An API to connect. A templating system to standardize responses. Maybe — at the very end — an LLM call to draft a first-pass response a human reviews.

## Automation is the water. AI is the boat.

The businesses getting the most value out of AI are the ones who already had their automation house in order. They have APIs. They have structured data. They have reliable pipelines between systems. They have workflow state they can observe.

AI shines when it has somewhere to sit. Most companies are still building the somewhere.

## What we do first

Before we even scope an AI feature, we look for:

- **Manual data re-entry between systems.** If your team copies and pastes between tools, that's an integration, not a language model problem.
- **Scheduled tasks done by humans.** A weekly report? A monthly reconciliation? Cron job territory.
- **Documents handled by eye.** Invoices, contracts, receipts. Deterministic extraction first, LLM extraction second.
- **Escalation rules that live in someone's head.** Put them in code. Then, maybe, improve them with AI.

When those systems are in place, AI becomes cheap to bolt on. When they aren't, AI becomes an expensive band-aid.

## The short version

Automation gives you leverage today. AI gives you leverage *on top of* the automation you've already built. Sequence matters.`,
    author: {
      name: "Sam Rivera",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    publishedAt: "2026-03-18",
    category: "Automation",
    tags: ["Automation", "AI", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "building-production-ai-agents",
    title: "Building Production-Ready AI Agents: Lessons from the Field",
    excerpt:
      "What we've learned from shipping AI agents to production. The gap between demo and deployed is bigger than you think.",
    content: `## The 80% problem

Any developer with an API key can build a demo AI agent in an afternoon. The demo will handle the happy path beautifully. Then it meets production — the long tail of edge cases, the partial outages, the unexpected user inputs — and everything falls apart.

The jump from demo to deployed is where 80% of AI projects die.

## What production-ready actually means

An AI agent is production-ready when:

1. **Its inputs are validated.** Users send weird things. APIs return nulls. Agents that trust their inputs fail loudly in production.
2. **Its outputs are validated.** LLMs hallucinate. Structured output with schema validation is table stakes.
3. **It has a fallback for every tool call.** APIs go down. Your agent's retry logic matters more than its prompt.
4. **It has observability.** If you can't see what your agent decided and why, you can't debug it.
5. **It has cost guardrails.** An agent in a loop costs real money. Rate limits, token limits, circuit breakers.
6. **It has a human-in-the-loop mode.** Some decisions are too consequential to leave to the model. Build escalation paths from day one.

## What we recommend

Start narrow. One workflow. One user type. One measurable outcome. Ship it, instrument it, iterate on real usage — not on imagined usage in a planning doc.

Scope creep kills AI agents faster than any prompt engineering mistake.`,
    author: {
      name: "Taylor Kim",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    publishedAt: "2026-02-20",
    category: "AI",
    tags: ["AI Agents", "Production", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "what-we-build-when-its-not-ai",
    title: "What We Build When It's Not AI",
    excerpt:
      "A breakdown of the non-AI work that makes up most of our engagements — integrations, internal tools, custom storefronts, and the plumbing that keeps businesses running.",
    content: `## The unfashionable work

We do a lot of AI integration work. We also do a lot of work that has no AI in it at all. Both are valuable; one just gets less airtime in conference talks.

Here's a rough breakdown of what the last year of engagements has actually looked like.

### Custom product development (roughly 40%)

Web apps, mobile apps, Chrome extensions, marketing sites. Most of it in Next.js, React Native, and whatever backend makes sense (Node, Python, sometimes Go). This is the biggest category by volume.

### Business automation (roughly 30%)

The workhorse work. Backend jobs, integrations, data pipelines, internal dashboards. A CRM talking to an ERP. A nightly reconciliation. A document-processing queue. The stuff that eliminates human toil.

### AI integration (roughly 20%)

LLM-powered product features, autonomous agents, RAG systems, evaluation infrastructure. Growing, but smaller than most founders assume when they first call us.

### Technical strategy and discovery (roughly 10%)

Scoped engagements where we help a team figure out what to build before they build it. Architecture review, build-vs-buy, automation opportunity assessment.

## Why the mix matters

When someone asks "are you an AI company?" the honest answer is: we're a software company that does AI well. The boring work pays the bills *and* sets the foundation for the interesting work.

A CRM integration isn't glamorous. But it's the thing that makes the eventual AI-powered sales assistant actually work.`,
    author: {
      name: "Jordan Chen",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    publishedAt: "2026-01-30",
    category: "Engineering",
    tags: ["Software", "Automation", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "measuring-software-roi",
    title: "Measuring Software ROI: Beyond the Hype",
    excerpt:
      "How to actually measure the return on software and automation investments. The metrics that matter and the ones that don't.",
    content: `## The metrics that actually matter

When a client asks us to justify an engagement, we focus on three numbers:

1. **Hours saved per week.** Add up the manual work the new system eliminates. Multiply by loaded labor cost. That's your baseline ROI.
2. **Error rate delta.** What did the old process get wrong? What does the new one get wrong? Errors in finance, compliance, or customer-facing workflows have compounding costs.
3. **Throughput change.** What can your team do now that they couldn't before? Faster response times, more customers per headcount, shorter cycle times — these are the numbers that compound.

## The metrics that don't

- **"Engagement."** Nobody ever billed a customer for engagement.
- **"Innovation."** A useful result, not a measurable one.
- **"Model accuracy" in isolation.** A 95% accurate model doing the wrong job is worth less than a 70% accurate model doing the right one.
- **Lines of code.** You knew this one.

## How we present it

Every engagement gets a before/after dashboard. We measure the key metric manually before we start, automate the measurement during the build, and keep reporting on it after we're gone. If the numbers don't move, we didn't do our job.

Simple test: if a board member can't look at your dashboard and understand why the work was worth it, the metrics are wrong.`,
    author: {
      name: "Alex Morgan",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    publishedAt: "2025-12-12",
    category: "Engineering",
    tags: ["ROI", "Metrics", "Business"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

export const blogConfig = {
  hero: blogHero,
  categories,
  posts,
};
