import { Bot, Code, Lightbulb, Workflow } from "lucide-react";
import { PageHeroConfig, ServiceCard, PricingItem } from "@/lib/types";

export const servicesHero: PageHeroConfig = {
  badge: "Our Services",
  title: "AI Engineering That Ships",
  description:
    "From autonomous agents to full-stack AI products, we build intelligent systems that transform how businesses operate. Not demos. Production-grade solutions.",
  variant: "centered",
  cta: {
    primary: { text: "Book a Call", href: "/contact" },
    secondary: { text: "View Case Studies", href: "/case-studies" },
  },
};

export const services: ServiceCard[] = [
  {
    id: 1,
    title: "AI Agent Development",
    description:
      "Custom autonomous agents that handle complex, multi-step workflows. From customer support to data processing to internal operations.",
    icon: <Bot className="size-6" />,
    href: "/services/ai-agents",
    features: [
      "Multi-step reasoning and decision making",
      "Tool use and API integration",
      "Memory and context management",
      "Human-in-the-loop when needed",
      "Production monitoring and optimization",
    ],
  },
  {
    id: 2,
    title: "AI-Native Products",
    description:
      "Full-stack applications with intelligence built into the core. Web and mobile products where AI isn't an afterthought.",
    icon: <Code className="size-6" />,
    href: "/services",
    features: [
      "React/Next.js & React Native",
      "LLM-powered features",
      "Real-time AI interactions",
      "Scalable cloud architecture",
      "From MVP to enterprise scale",
    ],
  },
  {
    id: 3,
    title: "Process Automation",
    description:
      "Identify bottlenecks and deploy intelligent workflows that eliminate manual operations. Turn hours into seconds.",
    icon: <Workflow className="size-6" />,
    href: "/services",
    features: [
      "Workflow mapping and analysis",
      "Document processing",
      "Data extraction and transformation",
      "Integration with existing tools",
      "Measurable ROI tracking",
    ],
  },
  {
    id: 4,
    title: "AI Strategy & Consulting",
    description:
      "Not sure where to start? We help identify high-impact AI opportunities and build roadmaps that deliver real business value.",
    icon: <Lightbulb className="size-6" />,
    href: "/services",
    features: [
      "AI readiness assessment",
      "Opportunity identification",
      "Technology stack recommendations",
      "Build vs. buy analysis",
      "Implementation roadmap",
    ],
  },
];

export const engagementModels: PricingItem[] = [
  {
    name: "Project",
    href: "/contact",
    price: "Custom",
    period: "project",
    yearlyPrice: "Custom",
    features: [
      "Defined scope and deliverables",
      "Dedicated project team",
      "2-12 week typical timeline",
      "Full IP transfer on completion",
    ],
    description: "Best for specific products or automations",
    buttonText: "Get Quote",
    buttonColor: "bg-accent text-primary",
    isPopular: false,
  },
  {
    name: "Embedded",
    href: "/contact",
    price: "Custom",
    period: "month",
    yearlyPrice: "Custom",
    features: [
      "Engineers embedded with your team",
      "Ongoing development & iteration",
      "Direct Slack/communication access",
      "Weekly strategy sessions",
      "Priority support & rapid response",
      "Flexible team scaling",
    ],
    description: "Best for continuous AI development",
    buttonText: "Book a Call",
    buttonColor: "bg-secondary text-white",
    isPopular: true,
  },
  {
    name: "Enterprise",
    href: "/contact",
    price: "Custom",
    period: "year",
    yearlyPrice: "Custom",
    features: [
      "Dedicated team allocation",
      "Custom SLAs & compliance",
      "Executive strategy partnership",
      "Multi-project capacity",
      "On-site deployment available",
    ],
    description: "For large-scale AI transformation",
    buttonText: "Contact Us",
    buttonColor: "bg-primary text-primary-foreground",
    isPopular: false,
  },
];

export const servicesConfig = {
  hero: servicesHero,
  services,
  engagementModels,
};
