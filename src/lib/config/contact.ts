import { PageHeroConfig, ContactConfig } from "@/lib/types";

export const contactHero: PageHeroConfig = {
  badge: "Contact Us",
  title: "Let's Build Something Together",
  description:
    "Ready to ship a product, automate a workflow, or integrate AI where it matters? Book a discovery call and we'll dig into what would move your business.",
  variant: "centered",
  cta: {
    primary: { text: "Book a Call", href: "https://cal.com/leroylabs" },
  },
};

export const contactInfo = {
  email: "hi@leroylabs.io",
  calendlyLink: "https://cal.com/leroylabs",
};

export const contactProcessSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "30-minute conversation to understand your challenges, explore opportunities, and see if we're a good fit.",
  },
  {
    id: 2,
    title: "Technical Deep-Dive",
    description:
      "If there's a match, we schedule a technical session to map your workflows and identify the highest-leverage work — software, automation, or AI.",
  },
  {
    id: 3,
    title: "Proposal & Kickoff",
    description:
      "We provide a clear scope, timeline, and pricing. Once approved, our engineers embed with your team within days.",
  },
];

export const contactConfig: ContactConfig = {
  hero: contactHero,
  contactInfo,
  processSteps: contactProcessSteps,
};
