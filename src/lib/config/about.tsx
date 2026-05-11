import { Target, Zap, Users, Shield } from "lucide-react";
import { PageHeroConfig, TeamMember, CompanyValue } from "@/lib/types";

export const aboutHero: PageHeroConfig = {
  badge: "About Us",
  title: "Engineers who ship.",
  description:
    "We're a team of senior engineers from top tech companies and research labs who got tired of watching software projects fail. So we built a different way of working.",
  variant: "centered",
  cta: {
    primary: { text: "Work With Us", href: "/contact" },
    secondary: { text: "View Case Studies", href: "/case-studies" },
  },
};

export const story = {
  title: "Our Story",
  content: [
    "Leroy Labs was founded by engineers who spent years watching software and automation projects fail — not because of bad technology, but because of bad process. Traditional consulting rents you a developer; traditional agencies hand you a deck. Neither delivers the thing that actually matters: working software, in production, owned by you.",
    "We started with a simple idea: what if senior engineers embedded directly with client teams? What if instead of handing off reports, we shipped production code? What if we measured success by business impact, not billable hours?",
    "That approach — forward deployment — has helped dozens of companies ship real products, automate the workflows that drained their teams, and integrate AI where it created measurable leverage. From early-stage startups to Fortune 500 enterprises, we've proven that the best software gets built by teams that work together.",
    "Today, Leroy Labs brings together engineers from companies like Anthropic, OpenAI, Google, Meta, Stripe, and Vercel. We're generalists who can ship and specialists who go deep. And we're just getting started.",
  ],
};

export const values: CompanyValue[] = [
  {
    id: 1,
    title: "Ship Over Slides",
    description:
      "We deliver working systems, not presentations. Success is measured by production code and business impact.",
    icon: <Zap className="size-5" />,
  },
  {
    id: 2,
    title: "Embed, Don't Advise",
    description:
      "We join your team, not observe from outside. Deep integration leads to better solutions and knowledge transfer.",
    icon: <Users className="size-5" />,
  },
  {
    id: 3,
    title: "Outcomes Over Hours",
    description:
      "We're aligned with your success, not our billable time. We win when you ship software that transforms your business.",
    icon: <Target className="size-5" />,
  },
  {
    id: 4,
    title: "Trust Through Transparency",
    description:
      "Clear communication, honest timelines, and no surprises. We tell you what's working and what's not.",
    icon: <Shield className="size-5" />,
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Former engineering lead at Anthropic. Built production systems at scale before starting Leroy Labs.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Jordan Chen",
    role: "CTO",
    bio: "Ex-Google Brain. PhD from Stanford. Obsessed with shipping software that actually works in production.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Sam Rivera",
    role: "Head of Engineering",
    bio: "Former tech lead at Stripe. Built payment infrastructure handling billions in transactions.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 4,
    name: "Taylor Kim",
    role: "Lead AI Engineer",
    bio: "Ex-OpenAI. Specialized in autonomous agents and tool use — the AI half of our team.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: 5,
    name: "Casey Williams",
    role: "Senior Engineer",
    bio: "Former Meta engineer. Full-stack expertise across web, mobile, and backend systems.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 6,
    name: "Riley Park",
    role: "Senior Engineer",
    bio: "Ex-Vercel. Frontend specialist who makes products feel magical, AI or otherwise.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
];

export const aboutConfig = {
  hero: aboutHero,
  story,
  values,
  team,
};
