import { ReactNode } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Code2,
  Cpu,
  Database,
  Rocket,
  Globe,
  GraduationCap,
  Heart,
} from "lucide-react";
import { PageHeroConfig } from "@/lib/types";

export interface JobHighlight {
  id: number;
  label: string;
  value: string;
  icon: ReactNode;
}

export interface JobSection {
  id: number;
  title: string;
  items: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  team: string;
  location: string;
  employmentType: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
  compensation: string;
}

export interface CareerPerk {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export const careersHero: PageHeroConfig = {
  badge: "We're Hiring",
  title: "Build AI That Actually Ships",
  description:
    "We're looking for elite engineers who care as much about production systems as they do about research. Forward-deployed, embedded with clients, shipping real code.",
  variant: "centered",
  cta: {
    primary: { text: "See Open Role", href: "#open-role" },
    secondary: { text: "Meet the Team", href: "/about" },
  },
};

export const careerPerks: CareerPerk[] = [
  {
    id: 1,
    title: "Ship, Don't Slide",
    description:
      "Your work lands in production with real users — not in a slide deck that gathers dust.",
    icon: <Rocket className="size-5" />,
  },
  {
    id: 2,
    title: "Fully Remote",
    description:
      "Work from anywhere. Async by default, with focused collaboration windows across time zones.",
    icon: <Globe className="size-5" />,
  },
  {
    id: 3,
    title: "Learn on the Frontier",
    description:
      "Generous learning budget, conference stipends, and time to dig into new models and tooling.",
    icon: <GraduationCap className="size-5" />,
  },
  {
    id: 4,
    title: "Competitive Pay + Equity",
    description:
      "Top-of-market compensation with meaningful equity. We win together when we ship.",
    icon: <Heart className="size-5" />,
  },
];

export const openRole: JobPosting = {
  id: "open-role",
  title: "Senior Software Engineer",
  team: "Engineering",
  location: "Remote (US / EU)",
  employmentType: "Full-time",
  summary:
    "We're looking for a full-stack engineer who's equally comfortable decomposing a monolith, wiring up an event-driven pipeline, and shipping an LLM-powered feature to a million users. You'll embed with client teams, own features end-to-end, and turn research into production systems.",
  about:
    "You've spent years building scalable web products and you've started to lean into AI. You've worked on Next.js and React on the frontend, Django or Python microservices on the backend, and you care about the unglamorous parts — database migrations, observability, and real-time data pipelines — as much as the shiny LLM layer on top. This role is forward-deployed: you'll work inside client codebases, partner with their engineers, and ship features that move production metrics.",
  responsibilities: [
    "Architect and ship full-stack features in Next.js / React and Python (Django, Flask) microservices.",
    "Design event-driven pipelines using RabbitMQ, Kafka, or similar — improving reliability of tracking, notifications, and async workflows.",
    "Decompose monolithic services into microservices and parallelize database calls to reduce search and API latency at scale.",
    "Ship LLM-powered features end-to-end: prompt engineering, RAG pipelines, vector similarity search, and real-time inference on production traffic.",
    "Own DB ↔ search synchronization via CDC architectures, replacing fragile script-based syncs with near real-time consistency.",
    "Improve core web vitals (TTI, CLS, LCP, FCP) using React Profiler, Lighthouse, ISR, and CDN caching strategies.",
    "Lead cloud migrations on AWS with automated migration and validation pipelines — zero data loss, minimal downtime.",
  ],
  requirements: [
    "4+ years shipping production full-stack systems used by real users.",
    "Deep experience with Next.js, React, and TypeScript on the frontend.",
    "Strong Python backend skills — Django, Flask, or FastAPI — and comfort designing REST APIs at scale.",
    "Hands-on experience with PostgreSQL, Redis, and a message broker (RabbitMQ, Kafka, or SQS).",
    "Experience with Elasticsearch, search relevance tuning, or vector search in production.",
    "Comfortable with Docker, Kubernetes, and deploying to AWS.",
    "A track record of improving performance metrics — latency, throughput, or web vitals — with measurable outcomes.",
    "Strong written communication. You can embed with a client team and earn their trust in the first week.",
  ],
  techStack: [
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Django",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Elasticsearch",
    "ELSER",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  compensation:
    "Competitive base + meaningful equity. Fully remote, flexible hours, conference and learning budgets.",
};

export const jobHighlights: JobHighlight[] = [
  {
    id: 1,
    label: "Team",
    value: openRole.team,
    icon: <Briefcase className="size-4" />,
  },
  {
    id: 2,
    label: "Location",
    value: openRole.location,
    icon: <MapPin className="size-4" />,
  },
  {
    id: 3,
    label: "Type",
    value: openRole.employmentType,
    icon: <Clock className="size-4" />,
  },
  {
    id: 4,
    label: "Stack",
    value: "Full-stack + AI",
    icon: <Code2 className="size-4" />,
  },
];

export const jobSections: JobSection[] = [
  {
    id: 1,
    title: "What you'll do",
    items: openRole.responsibilities,
  },
  {
    id: 2,
    title: "What we're looking for",
    items: openRole.requirements,
  },
];

export const applicationCTA = {
  icon: <Cpu className="size-6" />,
  eyebrow: "How to apply",
  title: "If this role feels like the one, we want to hear from you.",
  description:
    "There's no application form to fill out. Send us your resume — and a short note on what you've shipped that you're proud of — and we'll take it from there.",
  email: "hi@leroylabs.io",
  subject: "Senior Software Engineer — Application",
  footnote:
    "We read every email. Expect a reply within a few business days.",
};

export const careersConfig = {
  hero: careersHero,
  perks: careerPerks,
  role: openRole,
  highlights: jobHighlights,
  sections: jobSections,
  application: applicationCTA,
  stackIcon: <Database className="size-4" />,
};
