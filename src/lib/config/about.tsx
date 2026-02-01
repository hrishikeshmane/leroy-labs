import { Target, Zap, Users, Shield } from "lucide-react";
import { PageHeroConfig, TeamMember, CompanyValue } from "@/lib/types";

export const aboutHero: PageHeroConfig = {
  badge: "About Us",
  title: "Elite Engineers. Real Results.",
  description:
    "We're a team of engineers and researchers from top tech companies and research labs who got tired of seeing AI projects fail. So we built a different way.",
  variant: "centered",
  cta: {
    primary: { text: "Join the Team", href: "/careers" },
    secondary: { text: "Work With Us", href: "/contact" },
  },
};

export const story = {
  title: "Our Story",
  content: [
    "Leroy Labs was founded by engineers who spent years watching AI projects fail - not because of bad technology, but because of bad process. Traditional consulting doesn't work for AI. You can't build intelligent systems from the outside.",
    "We started with a simple idea: what if elite AI engineers embedded directly with client teams? What if instead of handing off reports, we shipped production code? What if we measured success by business impact, not billable hours?",
    "That approach - forward deployment - has helped dozens of companies ship AI that actually works. From Series A startups to Fortune 500 enterprises, we've proven that the best AI gets built by teams that work together.",
    "Today, Leroy Labs brings together engineers from companies like Anthropic, OpenAI, Google, Meta, and Stripe. We're researchers who can ship and builders who understand the science. And we're just getting started.",
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
      "We're aligned with your success, not our billable time. We win when you ship AI that transforms your business.",
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
    bio: "Former ML lead at Anthropic. Built production AI systems at scale before starting Leroy Labs.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Jordan Chen",
    role: "CTO",
    bio: "Ex-Google Brain researcher. PhD in machine learning from Stanford. Obsessed with making AI actually work.",
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
    bio: "Ex-OpenAI. Specialized in autonomous agents and tool use. Ships AI that actually ships.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: 5,
    name: "Casey Williams",
    role: "Senior Engineer",
    bio: "Former Meta AI. Full-stack expertise with deep ML integration experience.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: 6,
    name: "Riley Park",
    role: "Senior Engineer",
    bio: "Ex-Vercel. Frontend specialist who makes AI products feel magical.",
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
