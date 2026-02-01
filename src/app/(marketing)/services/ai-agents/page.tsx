import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { PageHeroConfig } from "@/lib/types";
import {
  Brain,
  Settings,
  MessageSquare,
  Database,
  Shield,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agent Development",
  description:
    "Custom autonomous AI agents that handle complex, multi-step workflows. From customer support to data processing to internal operations.",
};

const heroConfig: PageHeroConfig = {
  badge: "AI Agent Development",
  title: "Autonomous Agents That Actually Work",
  description:
    "Custom-built AI agents that handle complex, multi-step workflows. Not chatbots with a fancy name - real autonomous systems that reason, decide, and act.",
  variant: "centered",
  cta: {
    primary: { text: "Build Your Agent", href: "/contact" },
    secondary: { text: "See Examples", href: "/case-studies" },
  },
};

const capabilities = [
  {
    icon: <Brain className="size-5" />,
    title: "Multi-Step Reasoning",
    description:
      "Agents that can break down complex tasks, plan their approach, and execute multi-step workflows autonomously.",
  },
  {
    icon: <Settings className="size-5" />,
    title: "Tool Use & API Integration",
    description:
      "Connect your agent to any API, database, or internal system. Execute actions, not just generate text.",
  },
  {
    icon: <Database className="size-5" />,
    title: "Memory & Context",
    description:
      "Persistent memory across conversations. Your agent remembers context, learns from interactions, and gets smarter over time.",
  },
  {
    icon: <MessageSquare className="size-5" />,
    title: "Human-in-the-Loop",
    description:
      "Configurable escalation to human operators when needed. Your agent knows its limits and asks for help appropriately.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Safety & Guardrails",
    description:
      "Built-in safety measures, content filtering, and action validation. Your agent won't go rogue.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Production Monitoring",
    description:
      "Real-time monitoring, logging, and analytics. Know what your agent is doing and how it's performing.",
  },
];

const useCases = [
  {
    title: "Customer Support",
    description:
      "Handle tier-1 support autonomously. Route complex issues to the right team. Maintain context across conversations.",
    examples: [
      "Answer product questions using your knowledge base",
      "Process refunds and account changes",
      "Escalate to humans with full context",
      "Handle multiple languages",
    ],
  },
  {
    title: "Document Processing",
    description:
      "Extract, validate, and process information from any document type. Contracts, invoices, applications - at scale.",
    examples: [
      "Extract key terms from contracts",
      "Validate and route applications",
      "Process invoices and receipts",
      "Summarize lengthy documents",
    ],
  },
  {
    title: "Data Analysis",
    description:
      "Query databases, analyze trends, and generate insights. Natural language interface to your data.",
    examples: [
      "Answer business questions in plain English",
      "Generate reports and visualizations",
      "Monitor metrics and alert on anomalies",
      "Connect multiple data sources",
    ],
  },
  {
    title: "Internal Operations",
    description:
      "Automate repetitive tasks across your organization. From scheduling to procurement to compliance.",
    examples: [
      "Automate employee onboarding tasks",
      "Process purchase requests",
      "Schedule and coordinate meetings",
      "Compliance monitoring and reporting",
    ],
  },
];

const techStack = [
  "OpenAI GPT-4",
  "Anthropic Claude",
  "LangChain / LangGraph",
  "Vector Databases",
  "Custom Fine-tuning",
  "Retrieval Augmented Generation",
];

export default function AIAgentsPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={heroConfig} />

      {/* Capabilities - Bento Grid */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              What Makes Our Agents Different
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Production-ready agents with capabilities that matter for business
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="flex flex-col items-start justify-start min-h-[250px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              >
                <div className="flex flex-col gap-3 p-6 h-full">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-accent text-secondary border border-border">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg tracking-tighter font-semibold">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Common Use Cases
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            AI agents transforming operations across every department
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-background"
            >
              <h3 className="text-xl tracking-tighter font-semibold">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {useCase.examples.map((example, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 text-secondary shrink-0" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Built on Modern AI Infrastructure
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              We use the best tools for each job, always choosing what&apos;s
              right for your use case
            </p>
          </SectionHeader>

          <div className="p-10 md:p-14">
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            How We Build Your Agent
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            A proven process that delivers production-ready agents
          </p>
        </div>
        <div className="max-w-2xl mx-auto w-full">
          {[
            {
              step: 1,
              title: "Discovery & Design",
              description:
                "We map out your workflows, identify automation opportunities, and design agent architecture.",
            },
            {
              step: 2,
              title: "Prototype & Iterate",
              description:
                "Rapid prototyping with your real data. Test edge cases, refine behavior, optimize prompts.",
            },
            {
              step: 3,
              title: "Production Deploy",
              description:
                "Deploy with monitoring, safety guardrails, and escalation paths. Full observability from day one.",
            },
            {
              step: 4,
              title: "Optimize & Scale",
              description:
                "Continuous improvement based on production feedback. Scale to handle more volume and use cases.",
            },
          ].map((item, index) => (
            <div key={item.step} className="flex gap-6 items-start mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center size-10 rounded-full bg-secondary text-white font-semibold text-sm shrink-0">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="w-px h-full bg-border mt-2 min-h-[60px]" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <h3 className="text-lg font-semibold tracking-tighter text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/case-studies"
          className="flex items-center gap-1 text-sm font-medium text-secondary hover:gap-2 transition-all"
        >
          See Agent Case Studies
          <ArrowRight className="size-4" />
        </Link>
      </section>

      <SectionCTA
        title="Ready to Build Your Agent?"
        description="Let's discuss your use case and design an agent that delivers real value."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
      />
    </main>
  );
}
