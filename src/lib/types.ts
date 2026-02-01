import { ReactNode } from "react";

// Navigation types
export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export interface NavDropdownItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavConfig {
  links: NavLink[];
}

// Hero types
export interface HeroConfig {
  badgeIcon?: ReactNode;
  badge: string;
  title: string;
  description: string;
  cta: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

// Company showcase
export interface CompanyLogo {
  id: number;
  name: string;
  logo: ReactNode;
}

// Feature section
export interface FeatureItem {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface FeatureSectionConfig {
  title: string;
  description: string;
  items: FeatureItem[];
}

// Bento section
export interface BentoItem {
  id: number;
  content: ReactNode;
  title: string;
  description: string;
}

export interface BentoSectionConfig {
  title: string;
  description: string;
  items: BentoItem[];
}

// Growth section
export interface GrowthItem {
  id: number;
  content: ReactNode;
  title: string;
  description: string;
}

export interface GrowthSectionConfig {
  title: string;
  description: string;
  items: GrowthItem[];
}

// Quote section
export interface QuoteConfig {
  quote: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

// Pricing
export interface PricingItem {
  name: string;
  href: string;
  price: string;
  period: string;
  yearlyPrice: string;
  features: string[];
  description: string;
  buttonText: string;
  buttonColor: string;
  isPopular: boolean;
}

export interface PricingConfig {
  title: string;
  description: string;
  pricingItems: PricingItem[];
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  img: string;
  description: ReactNode;
}

// FAQ
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionConfig {
  title: string;
  description: string;
  faQitems: FAQItem[];
}

// CTA Section
export interface CTASectionConfig {
  id?: string;
  title: string;
  backgroundImage?: string;
  button: {
    text: string;
    href: string;
  };
  subtext?: string;
}

// Footer
export interface FooterLink {
  id: number;
  title: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Benefits
export interface Benefit {
  id: number;
  text: string;
  image: string;
}

// Page-specific configs
export interface PageHeroConfig {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  variant?: "centered" | "split" | "minimal";
  cta?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  image?: string;
}

// Services
export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  features: string[];
}

export interface ServicesConfig {
  hero: PageHeroConfig;
  services: ServiceCard[];
  engagementModels?: PricingItem[];
}

// Solutions by Industry
export interface IndustrySolution {
  id: number;
  name: string;
  description: string;
  icon: ReactNode;
  useCases: string[];
  caseStudySlug?: string;
}

export interface SolutionsConfig {
  hero: PageHeroConfig;
  industries: IndustrySolution[];
}

// Case Studies
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    image?: string;
  };
  image: string;
  featured?: boolean;
}

export interface CaseStudiesConfig {
  hero: PageHeroConfig;
  studies: CaseStudy[];
}

// About
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface AboutConfig {
  hero: PageHeroConfig;
  story: {
    title: string;
    content: string[];
  };
  values: CompanyValue[];
  team: TeamMember[];
}

// Contact
export interface ContactConfig {
  hero: PageHeroConfig;
  contactInfo: {
    email: string;
    phone?: string;
    address?: string;
    calendlyLink?: string;
  };
  processSteps: {
    id: number;
    title: string;
    description: string;
  }[];
}

// Blog
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    image: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface BlogConfig {
  hero: PageHeroConfig;
  categories: string[];
  posts: BlogPost[];
}

// Approach
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon?: ReactNode;
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  forwardDeployed: string;
}

export interface ApproachConfig {
  hero: PageHeroConfig;
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
