// Re-export all config modules
export * from "./navigation";
export * from "./home";
export * from "./services";
export * from "./solutions";
export * from "./case-studies";
export * from "./about";
export * from "./contact";
export * from "./blog";
export * from "./careers";

// Import for siteConfig compatibility
import { homeConfig, BLUR_FADE_DELAY, Highlight } from "./home";
import { navigationConfig, footerLinks } from "./navigation";

// Main site configuration for backward compatibility
export const siteConfig = {
  name: "Leroy Labs",
  description:
    "Leroy Labs is a software studio that builds custom products, automates business workflows, and integrates AI where it creates real leverage.",
  cta: "Book a Call",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://leroylabs.io",
  keywords: [
    "Software Consultancy",
    "Custom Software Development",
    "Business Automation",
    "Workflow Automation",
    "AI Integration",
    "AI Agents",
    "Web App Development",
    "Mobile App Development",
    "System Integration",
    "Forward-Deployed Engineering",
  ],
  links: {
    email: "hi@leroylabs.io",
    twitter: "https://twitter.com/leroylabs",
    linkedin: "https://linkedin.com/company/leroylabs",
    github: "https://github.com/leroylabs",
  },
  nav: navigationConfig,
  hero: homeConfig.hero,
  companyShowcase: {
    companyLogos: homeConfig.companyLogos,
  },
  ourWork: homeConfig.ourWork,
  featureSection: homeConfig.featureSection,
  bentoSection: homeConfig.bentoSection,
  benefits: homeConfig.benefits,
  growthSection: homeConfig.growthSection,
  quoteSection: homeConfig.quote,
  pricing: homeConfig.pricing,
  testimonials: homeConfig.testimonials,
  faqSection: homeConfig.faqSection,
  ctaSection: homeConfig.ctaSection,
  footerLinks,
};

export { BLUR_FADE_DELAY, Highlight };

export type SiteConfig = typeof siteConfig;
