import { PageHeroConfig, CaseStudy } from "@/lib/types";

export const caseStudiesHero: PageHeroConfig = {
  badge: "Our Work",
  title: "Real Products. Real Businesses.",
  description:
    "A sample of what we've shipped for our clients — live in production, in front of real users.",
  variant: "centered",
  cta: {
    primary: { text: "Start Your Project", href: "/contact" },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "styleit",
    title: "Styleit — AI virtual try-on, end-to-end",
    client: "Styleit",
    industry: "Consumer AI · E-commerce",
    summary:
      "A Chrome extension that turns any product page into a virtual try-on with AI. We shipped the browser extension, backend, and inference pipeline end-to-end.",
    challenge:
      "Customers shopping online have no way to know whether a piece of clothing will actually suit them until it arrives. The founders wanted a frictionless way to let shoppers try things on, in-context, without leaving the store they're browsing — and without a native app install.",
    solution:
      "We built a Chrome extension that scrapes product imagery from any e-commerce site, routes it to a custom inference pipeline, and renders an on-body try-on in seconds. Extension, backend API, and inference infrastructure were all shipped by our team, integrated with the founders' storefronts and marketing flows.",
    image: "/work_assets/styleit.png",
    externalUrl: "https://styleit.fit",
    featured: true,
  },
  {
    slug: "jobseekr",
    title: "jobseekr — a job hunt platform for senior engineers",
    client: "jobseekr",
    industry: "HR Tech · Consumer",
    summary:
      "A job-hunting platform for candidates chasing FAANG-tier roles — real-time listings, personalized matching, and resume analysis.",
    challenge:
      "Senior engineers target a narrow band of high-bar companies and need signal, not volume. Generic job boards drown their users in noise. The founders wanted a platform that surfaced the right roles, at the right time, with context on how the candidate's profile mapped to each opening.",
    solution:
      "We built the full web application — fast, real-time job listings, personalized matching, saved-search alerting, and resume analysis tooling — and shipped it to production with a customer-facing auth system, Google OAuth login, and a Discord-powered community.",
    image: "/work_assets/jobseekr.png",
    externalUrl: "https://jobseekr.io",
    featured: true,
  },
  {
    slug: "visa-architect",
    title: "Visa Architect — EB-1A immigration practice",
    client: "Visa Architect",
    industry: "Legal · Immigration",
    summary:
      "A marketing and consultation site for an EB-1A immigration practice, built to convert high-intent applicants and educate them on the path to a U.S. green card.",
    challenge:
      "EB-1A applicants are high-income, high-context professionals researching their options carefully. The practice needed a website that conveyed authority and expertise, walked visitors through complex visa categories, and converted qualified leads into booked consultations.",
    solution:
      "We designed and built a conversion-focused marketing site with dedicated work-visa and greencard-pathway content, consultation booking, and resource hub. Clean, credible, and tuned for qualified pipeline.",
    image: "/work_assets/greencard.png",
    externalUrl: "https://visarchitect.com",
    featured: false,
  },
  {
    slug: "open-atlas",
    title: "Open Atlas — a community for high-skilled immigrants",
    client: "Open Atlas",
    industry: "Community · Media",
    summary:
      "A community platform for high-skilled immigrants in the U.S. — events, webinars, a conference, and a fast-growing newsletter with national press coverage.",
    challenge:
      "High-skilled immigrants in the U.S. — students, professionals, founders — are underserved by existing community platforms. The team needed a home for their newsletter, events, and a rapidly scaling membership base, plus the infrastructure to run recurring webinars and an annual conference.",
    solution:
      "We built the community website from the ground up: content sections for webinars, conferences, and resources; a newsletter-first hero flow; a press section surfacing their coverage in Fortune, BBC News, Yahoo Finance, and others; and a membership signup funnel that converts.",
    image: "/work_assets/unshackled.png",
    externalUrl: "https://theopenatlas.org",
    featured: false,
  },
];

export const caseStudiesConfig = {
  hero: caseStudiesHero,
  studies: caseStudies,
};
