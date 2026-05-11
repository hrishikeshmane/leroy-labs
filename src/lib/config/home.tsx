import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import {
  HeroConfig,
  CompanyLogo,
  FeatureSectionConfig,
  BentoSectionConfig,
  GrowthSectionConfig,
  QuoteConfig,
  PricingConfig,
  Testimonial,
  FAQSectionConfig,
  CTASectionConfig,
  Benefit,
  OurWorkItem,
} from "@/lib/types";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const heroConfig: HeroConfig = {
  badgeIcon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dark:fill-white fill-[#364153]"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </svg>
  ),
  badge: "Software · Automation · AI",
  title: "Software that ships, automations that stick, and AI that earns its seat.",
  description:
    "We build the products, automate the busywork, and add AI where it pulls its weight. Engineers, embedded. Not consultants, embellished.",
  cta: {
    primary: {
      text: "Book a Call",
      href: "https://calendly.com/hi-leroylabs/30min",
    },
    secondary: {
      text: "Our Work",
      href: "/case-studies",
    },
  },
};

export const companyLogos: CompanyLogo[] = [
  {
    id: 1,
    name: "Styleit",
    href: "https://styleit.fit",
    logo: (
      <span className="text-2xl md:text-3xl font-semibold tracking-tighter text-primary">
        Styleit
      </span>
    ),
  },
  {
    id: 2,
    name: "jobseekr",
    href: "https://jobseekr.io",
    logo: (
      <span className="text-2xl md:text-3xl font-semibold tracking-tighter lowercase text-primary">
        jobseekr
      </span>
    ),
  },
  {
    id: 3,
    name: "Visa Architect",
    href: "https://visarchitect.com",
    logo: (
      <span className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
        VISA ARCHITECT
      </span>
    ),
  },
  {
    id: 4,
    name: "Open Atlas",
    href: "https://theopenatlas.org",
    logo: (
      <span className="text-2xl md:text-3xl font-semibold tracking-tighter text-primary">
        Open Atlas
      </span>
    ),
  },
];

export const ourWork: OurWorkItem[] = [
  {
    id: 1,
    name: "Styleit",
    tagline: "AI virtual try-on, end-to-end",
    description:
      "A Chrome extension that turns any product page into a virtual try-on with AI. We shipped the extension, backend, and inference pipeline end-to-end.",
    href: "https://styleit.fit",
    image: "/work_assets/styleit.png",
  },
  {
    id: 2,
    name: "jobseekr",
    tagline: "Job hunting platform for senior engineers",
    description:
      "A job-hunting platform for candidates chasing FAANG-tier roles — real-time listings, personalized matching, and resume analysis.",
    href: "https://jobseekr.io",
    image: "/work_assets/jobseekr.png",
  },
  {
    id: 3,
    name: "Visa Architect",
    tagline: "EB-1A immigration for global talent",
    description:
      "A marketing and consultation site for an EB-1A immigration practice, built to convert high-intent applicants and educate them on the path to a U.S. green card.",
    href: "https://visarchitect.com",
    image: "/work_assets/greencard.png",
  },
  {
    id: 4,
    name: "Open Atlas",
    tagline: "Community for high-skilled immigrants",
    description:
      "A community platform for high-skilled immigrants in the U.S. — events, webinars, a conference, and a fast-growing newsletter with national press coverage.",
    href: "https://theopenatlas.org",
    image: "/work_assets/unshackled.png",
  },
];

export const featureSectionConfig: FeatureSectionConfig = {
  title: "How We Work",
  description:
    "From discovery to delivery, our forward-deployed teams embed with yours to ship software, automate operations, and add AI where it earns its keep.",
  items: [
    {
      id: 1,
      title: "Discovery & Architecture",
      content:
        "We map your workflows, identify the highest-leverage opportunities — whether that's a new product, a backend automation, or an AI feature — and design a solution that fits your existing stack.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Embedded Engineering",
      content:
        "Our engineers join your team on-site or remotely. We don't hand off specs — we ship production code alongside you, in your repo, on your cadence.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Automation & AI Integration",
      content:
        "We build the workflows, integrations, and agents that eliminate repetitive work — from simple ETL jobs to custom LLM-powered systems. AI is a tool, not the whole product.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Ship, Measure, Iterate",
      content:
        "Post-launch support, monitoring, and iteration. We ship early, measure what's working, and keep improving as your business evolves.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
  ],
};

export const bentoSectionConfig: BentoSectionConfig = {
  title: "What We Build",
  description:
    "Web and mobile products, business automation, system integrations, and AI where it adds real leverage.",
  items: [
    {
      id: 1,
      content: <FirstBentoAnimation />,
      title: "Custom Web & Mobile Apps",
      description:
        "Production-grade products built with your stack of choice. From MVP to App Store to scale, shipped by engineers who care about craft.",
    },
    {
      id: 2,
      content: <SecondBentoAnimation />,
      title: "System & API Integration",
      description:
        "Connect your CRM, ERP, data warehouse, and third-party SaaS into a unified backend that actually works together.",
    },
    {
      id: 3,
      content: (
        <ThirdBentoAnimation
          data={[20, 30, 25, 45, 40, 55, 75]}
          toolTipValues={[
            1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
          ]}
        />
      ),
      title: "Business Process Automation",
      description:
        "Turn manual operations into reliable, observable workflows. Backend workers, scheduled jobs, document pipelines, and the occasional LLM agent where it earns its cost.",
    },
    {
      id: 4,
      content: <FourthBentoAnimation once={false} />,
      title: "AI Features & Agents",
      description:
        "From LLM-powered product features to autonomous agents that handle customer support, data extraction, and internal operations. AI where it makes your product measurably better.",
    },
  ],
};

export const benefits: Benefit[] = [
  {
    id: 1,
    text: "Ship custom software and features faster with embedded engineers.",
    image: "/Device-6.png",
  },
  {
    id: 2,
    text: "Cut operational costs by automating the workflows that drain your team.",
    image: "/Device-7.png",
  },
  {
    id: 3,
    text: "Scale your team's capabilities without scaling headcount.",
    image: "/Device-8.png",
  },
  {
    id: 4,
    text: "Add AI to your product where it creates measurable leverage — not just hype.",
    image: "/Device-1.png",
  },
];

export const growthSectionConfig: GrowthSectionConfig = {
  title: "Built for the Real World",
  description:
    "Engineering that's ready for production — secure, observable, and deployed where your business needs it.",
  items: [
    {
      id: 1,
      content: (
        <div
          className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
          style={{
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
      ),
      title: "Security & Privacy First",
      description:
        "NDAs and DPAs as standard. Least-privilege access to your systems. Full IP transfer on delivery. We work inside the security frameworks your business already trusts.",
    },
    {
      id: 2,
      content: (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
          <Globe className="top-28" />
        </div>
      ),
      title: "Global Deployment",
      description:
        "Teams across time zones, infrastructure across regions. We deploy where your business needs us.",
    },
  ],
};

export const quoteConfig: QuoteConfig = {
  quote:
    "Software consultancies either sell you decks or rent you a developer. We do neither. We embed with your team, learn your business deeply, and ship the products, automations, and AI features that actually move the needle.",
  author: {
    name: "Leroy Labs",
    role: "Our promise",
    image: "/agent-template-og.png",
  },
};

export const pricingConfig: PricingConfig = {
  title: "Engagement Models",
  description:
    "Flexible partnerships built around how you want to work — from scoped project builds to long-term embedded teams.",
  pricingItems: [
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
      href: "https://calendly.com/hi-leroylabs/30min",
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
        "Custom SLAs & compliance",
        "Executive strategy partnership",
        "Multi-project capacity",
        "On-site deployment available",
      ],
      description: "For large-scale engineering engagements",
      buttonText: "Contact Us",
      buttonColor: "bg-primary text-primary-foreground",
      isPopular: false,
    },
  ],
};

// TODO: populate with real client quotes once collected.
export const testimonials: Testimonial[] = [];

export const faqSectionConfig: FAQSectionConfig = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about working with Leroy Labs. Have something else in mind? Let's talk.",
  faQitems: [
    {
      id: 1,
      question:
        "How is Leroy Labs different from a typical dev shop or consultancy?",
      answer:
        "We're builders, not advisors. Our engineers embed directly with your team and ship production code. We don't hand off PowerPoint decks or rent you a junior developer. We learn your business deeply and deliver working software, automations, and AI features you actually own.",
    },
    {
      id: 2,
      question: "What does 'forward deployment' mean?",
      answer:
        "Forward deployment means our engineers work alongside your team — either on-site or as deeply integrated remote collaborators. We join your Slack, attend your standups, and commit to your repos. The goal is seamless collaboration, not arms-length consulting.",
    },
    {
      id: 3,
      question: "What kinds of projects do you take on?",
      answer:
        "Three buckets. (1) Custom software — web and mobile products from MVP to scale. (2) Business automation — backend workers, integrations, document pipelines, scheduled jobs, and workflow systems that eliminate manual work. (3) AI integration — adding LLM-powered features and autonomous agents to your product where they create measurable leverage. Most engagements are a mix.",
    },
    {
      id: 4,
      question: "Do I need an AI use case to work with you?",
      answer:
        "No. Plenty of our work has no AI in it at all — shipping a product, automating a finance workflow, integrating a CRM with a data warehouse. We recommend AI when it's the right tool; we skip it when it isn't.",
    },
    {
      id: 5,
      question: "How long does a typical engagement last?",
      answer:
        "Project-based work typically runs 4–12 weeks depending on scope. Embedded engagements are ongoing partnerships that scale up or down based on your needs. We're flexible and work with you to define the right structure.",
    },
    {
      id: 6,
      question: "Do you work with early-stage startups?",
      answer:
        "Yes. We work with companies from seed stage to enterprise. For startups, we often ship initial MVPs, core product features, or automations that let a small team punch above its weight. The key is having a clear problem to solve and commitment to shipping.",
    },
    {
      id: 7,
      question: "What about data privacy and security?",
      answer:
        "Security is foundational to our work. We sign NDAs and DPAs as standard, operate under least-privilege access to your systems, and work within the security frameworks you already have in place. For regulated environments, we've built software alongside client-provided compliance programs.",
    },
  ],
};

export const ctaSectionConfig: CTASectionConfig = {
  id: "contact",
  title: "Let's build something that ships.",
  backgroundImage: "/agent-cta-background.png",
  button: {
    text: "Book a Discovery Call",
    href: "https://calendly.com/hi-leroylabs/30min",
  },
  subtext:
    "30-minute call to explore where custom software, automation, or AI can move your business.",
};

export const homeConfig = {
  hero: heroConfig,
  companyLogos,
  ourWork,
  featureSection: featureSectionConfig,
  bentoSection: bentoSectionConfig,
  benefits,
  growthSection: growthSectionConfig,
  quote: quoteConfig,
  pricing: pricingConfig,
  testimonials,
  faqSection: faqSectionConfig,
  ctaSection: ctaSectionConfig,
};
