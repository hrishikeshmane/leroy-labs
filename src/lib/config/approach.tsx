import { Search, Users, Rocket, RefreshCw } from "lucide-react";
import { PageHeroConfig, ComparisonRow, ProcessStep } from "@/lib/types";

export const approachHero: PageHeroConfig = {
  badge: "Our Approach",
  title: "Forward Deployment: Engineering That Ships",
  description:
    "We don't hand off PowerPoint decks. Our engineers embed with your team, commit to your repos, and ship production code. This is how modern AI gets built.",
  variant: "centered",
  cta: {
    primary: { text: "Book a Call", href: "/contact" },
    secondary: { text: "View Case Studies", href: "/case-studies" },
  },
};

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Team Integration",
    traditional: "External consultants who deliver reports",
    forwardDeployed: "Engineers who join your Slack, standups, and repos",
  },
  {
    aspect: "Deliverables",
    traditional: "Strategy documents and recommendations",
    forwardDeployed: "Production code and working systems",
  },
  {
    aspect: "Timeline",
    traditional: "Months of discovery before any code",
    forwardDeployed: "Ship working prototypes within weeks",
  },
  {
    aspect: "Knowledge Transfer",
    traditional: "Final handoff at project end",
    forwardDeployed: "Continuous collaboration and team upskilling",
  },
  {
    aspect: "Iteration Speed",
    traditional: "Change requests require new SOWs",
    forwardDeployed: "Rapid iteration based on real feedback",
  },
  {
    aspect: "Domain Context",
    traditional: "Surface-level understanding",
    forwardDeployed: "Deep integration with your business logic",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Scoping",
    description:
      "We map your workflows, identify automation opportunities, and design a solution architecture that integrates with your existing stack.",
    details: [
      "Stakeholder interviews and workflow mapping",
      "Technical architecture review",
      "Data availability assessment",
      "ROI estimation and prioritization",
      "Project scope and timeline definition",
    ],
    icon: <Search className="size-5" />,
  },
  {
    id: 2,
    title: "Team Embedding",
    description:
      "Our engineers join your team - on-site or remotely. We get access to your systems, join your communication channels, and start shipping.",
    details: [
      "Engineer onboarding to your systems",
      "Access to codebase and infrastructure",
      "Join Slack/Teams and daily standups",
      "Establish feedback loops and review processes",
      "Define success metrics and milestones",
    ],
    icon: <Users className="size-5" />,
  },
  {
    id: 3,
    title: "Build & Iterate",
    description:
      "We ship working features fast, then iterate based on real usage. No waiting months for a big reveal - continuous delivery of value.",
    details: [
      "Rapid prototype development",
      "User testing and feedback collection",
      "Iterative improvement cycles",
      "Performance optimization",
      "Production deployment and monitoring",
    ],
    icon: <Rocket className="size-5" />,
  },
  {
    id: 4,
    title: "Optimize & Scale",
    description:
      "Post-launch, we optimize based on real data. Your AI gets smarter as your business evolves, and we help your team own the system.",
    details: [
      "Performance monitoring and analytics",
      "Model fine-tuning and optimization",
      "Knowledge transfer to your team",
      "Documentation and training",
      "Ongoing support and iteration",
    ],
    icon: <RefreshCw className="size-5" />,
  },
];

export const deliverables = {
  title: "What You Get",
  items: [
    "Production-ready AI systems deployed to your infrastructure",
    "Clean, documented codebase with full IP transfer",
    "Trained team members who can maintain and extend the system",
    "Monitoring dashboards and alerting",
    "Documentation and runbooks",
    "Post-launch support period",
  ],
};

export const approachConfig = {
  hero: approachHero,
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
