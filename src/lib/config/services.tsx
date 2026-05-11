import {
  Bot,
  Code,
  Lightbulb,
  Workflow,
  Plug,
  Users,
} from "lucide-react";
import { PageHeroConfig, ServiceCard, PricingItem } from "@/lib/types";

export const servicesHero: PageHeroConfig = {
  badge: "What we do",
  title: "Engineering that ships — software, automation, AI.",
  description:
    "From greenfield products to gnarly legacy automations to AI features that earn their keep, our engineers embed with your team and ship production code.",
  variant: "centered",
  cta: {
    primary: { text: "Book a Call", href: "/contact" },
    secondary: { text: "View Case Studies", href: "/case-studies" },
  },
};

export const services: ServiceCard[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Web and mobile products built with your stack, shipped end-to-end. From MVP to App Store to scale.",
    icon: <Code className="size-6" />,
    href: "/services",
    features: [
      "Next.js, React, React Native, Node.js, Python",
      "Full product lifecycle: design, build, deploy",
      "Scalable cloud architecture on AWS/GCP/Vercel",
      "Ongoing post-launch iteration",
      "Clean code with full IP transfer",
    ],
  },
  {
    id: 2,
    title: "Business Process Automation",
    description:
      "Eliminate manual operations with reliable, observable workflows. Backend workers, integrations, document pipelines, and automations that compound over time.",
    icon: <Workflow className="size-6" />,
    href: "/services",
    features: [
      "Workflow mapping and ROI analysis",
      "Backend workers, queues, and scheduled jobs",
      "Document processing and data extraction",
      "Integration with existing tools (Slack, Gmail, Sheets, etc.)",
      "Dashboards and monitoring for every automation",
    ],
  },
  {
    id: 3,
    title: "AI Integration & Agents",
    description:
      "Add LLM-powered features to your product and deploy autonomous agents that handle customer support, data processing, and internal operations.",
    icon: <Bot className="size-6" />,
    href: "/services/ai-agents",
    features: [
      "LLM-powered product features",
      "Custom autonomous agents with tool use",
      "Retrieval-augmented generation (RAG) pipelines",
      "Human-in-the-loop review systems",
      "Evaluation, monitoring, and cost optimization",
    ],
  },
  {
    id: 4,
    title: "System & API Integration",
    description:
      "Connect your CRM, ERP, data warehouse, and third-party SaaS into a unified backend that actually works together.",
    icon: <Plug className="size-6" />,
    href: "/services",
    features: [
      "Salesforce, HubSpot, NetSuite, Stripe, Shopify",
      "Custom API design and public developer interfaces",
      "Event-driven architectures and webhooks",
      "Data warehouse sync (BigQuery, Snowflake, Postgres)",
      "Legacy system modernization",
    ],
  },
  {
    id: 5,
    title: "Forward-Deployed Engineering Teams",
    description:
      "Senior engineers who embed with your team — on-site or remote. They join your Slack, your standups, and your repo, and they ship.",
    icon: <Users className="size-6" />,
    href: "/services",
    features: [
      "Senior generalists and specialists",
      "Flexible team composition (1–6+ engineers)",
      "Direct embed with your engineering org",
      "Week-by-week ramping up or down",
      "Knowledge transfer built into the engagement",
    ],
  },
  {
    id: 6,
    title: "Technical Strategy & Discovery",
    description:
      "Not sure where to start? We help you identify the highest-leverage work — software, automation, or AI — and build a roadmap you can execute on.",
    icon: <Lightbulb className="size-6" />,
    href: "/services",
    features: [
      "Technical architecture review",
      "Automation opportunity assessment",
      "AI readiness and build-vs-buy analysis",
      "Scoped discovery sprints (1–3 weeks)",
      "Actionable roadmap with estimates",
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
      "2–12 week typical timeline",
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
    description: "Best for continuous product and automation work",
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
      "Custom SLAs",
      "Executive strategy partnership",
      "Multi-project capacity",
      "On-site deployment available",
    ],
    description: "For large-scale engineering engagements",
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
