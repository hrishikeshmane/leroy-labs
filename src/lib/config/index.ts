// Re-export all config modules
export * from "./navigation";
export * from "./home";
export * from "./services";
export * from "./solutions";
export * from "./approach";
export * from "./case-studies";
export * from "./about";
export * from "./contact";
export * from "./blog";

// Import for siteConfig compatibility
import { homeConfig, BLUR_FADE_DELAY, Highlight } from "./home";
import { navigationConfig, footerLinks } from "./navigation";

// Main site configuration for backward compatibility
export const siteConfig = {
  name: "Leroy Labs",
  description:
    "AI-native software engineering and forward-deployed automation teams.",
  cta: "Book a Call",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://leroylabs.io",
  keywords: [
    "AI Software Development",
    "AI Agents",
    "Custom Automation",
    "Forward Deployment",
    "AI-Native Products",
    "Agentic Workflows",
  ],
  links: {
    email: "hello@leroylabs.io",
    twitter: "https://twitter.com/leroylabs",
    linkedin: "https://linkedin.com/company/leroylabs",
    github: "https://github.com/leroylabs",
  },
  nav: navigationConfig,
  hero: homeConfig.hero,
  companyShowcase: {
    companyLogos: homeConfig.companyLogos,
  },
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
