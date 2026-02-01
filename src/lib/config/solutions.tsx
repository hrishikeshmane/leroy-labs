import { Building2, Heart, ShoppingCart, Briefcase } from "lucide-react";
import { PageHeroConfig, IndustrySolution } from "@/lib/types";

export const solutionsHero: PageHeroConfig = {
  badge: "Industry Solutions",
  title: "AI Built for Your Industry",
  description:
    "Every industry has unique challenges, regulations, and opportunities. We bring deep domain expertise to build AI solutions that work in the real world.",
  variant: "centered",
  cta: {
    primary: { text: "Discuss Your Industry", href: "/contact" },
    secondary: { text: "View Case Studies", href: "/case-studies" },
  },
};

export const industries: IndustrySolution[] = [
  {
    id: 1,
    name: "Financial Services",
    description:
      "Automate compliance workflows, enhance risk assessment, and build intelligent customer experiences while meeting regulatory requirements.",
    icon: <Building2 className="size-6" />,
    useCases: [
      "Automated KYC/AML document processing",
      "Fraud detection and prevention",
      "Customer service automation",
      "Risk assessment and scoring",
      "Regulatory reporting automation",
      "Portfolio analysis and insights",
    ],
    caseStudySlug: "fintech-customer-service",
  },
  {
    id: 2,
    name: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant AI solutions that streamline patient care, accelerate research, and reduce administrative burden.",
    icon: <Heart className="size-6" />,
    useCases: [
      "Patient intake automation",
      "Clinical documentation assistance",
      "Prior authorization processing",
      "Medical record summarization",
      "Research data extraction",
      "Appointment scheduling optimization",
    ],
    caseStudySlug: "healthtech-intake",
  },
  {
    id: 3,
    name: "E-commerce & Retail",
    description:
      "Personalized shopping experiences, intelligent inventory management, and customer support automation that drives revenue.",
    icon: <ShoppingCart className="size-6" />,
    useCases: [
      "Product recommendation engines",
      "Customer support chatbots",
      "Inventory demand forecasting",
      "Dynamic pricing optimization",
      "Content generation at scale",
      "Return fraud detection",
    ],
    caseStudySlug: "ecommerce-personalization",
  },
  {
    id: 4,
    name: "SaaS & Technology",
    description:
      "Add intelligent features to your product, automate internal operations, and scale your team's capabilities with AI.",
    icon: <Briefcase className="size-6" />,
    useCases: [
      "AI-powered product features",
      "Automated code review",
      "Customer onboarding automation",
      "Support ticket triage",
      "Usage analytics and insights",
      "Content and documentation generation",
    ],
    caseStudySlug: "saas-features",
  },
];

export const solutionsConfig = {
  hero: solutionsHero,
  industries,
};
