import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { solutionsConfig } from "@/lib/config/solutions";
import { Check, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions & Approach",
  description:
    "AI solutions built for your industry with our forward-deployed engineering approach. See how we work and what we deliver.",
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={solutionsConfig.hero} />

      {/* Industry Solutions Grid */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Built for Your Industry
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Deep domain expertise across regulated and complex verticals
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {solutionsConfig.industries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col items-start justify-between min-h-[450px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group"
              >
                <div className="flex flex-col gap-4 p-6 h-full">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-secondary border border-border">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl tracking-tighter font-semibold mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {industry.description}
                    </p>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      Common Use Cases
                    </p>
                    <ul className="space-y-2">
                      {industry.useCases.slice(0, 5).map((useCase, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 text-secondary shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {industry.caseStudySlug && (
                    <Link
                      href={`/case-studies/${industry.caseStudySlug}`}
                      className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group-hover:gap-2"
                    >
                      View Case Study
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-center text-balance mb-3">
            Enterprise-Ready Across All Industries
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium mb-10">
            Our solutions meet the highest security and compliance standards
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="dark:hidden">
                <Icons.soc2 className="size-16" />
              </div>
              <div className="hidden dark:block">
                <Icons.soc2Dark className="size-16" />
              </div>
              <span className="text-sm font-medium text-primary">SOC 2 Type II</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="dark:hidden">
                <Icons.hipaa className="size-16" />
              </div>
              <div className="hidden dark:block">
                <Icons.hipaaDark className="size-16" />
              </div>
              <span className="text-sm font-medium text-primary">HIPAA Ready</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="dark:hidden">
                <Icons.gdpr className="size-16" />
              </div>
              <div className="hidden dark:block">
                <Icons.gdprDark className="size-16" />
              </div>
              <span className="text-sm font-medium text-primary">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {solutionsConfig.comparison.title}
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Why forward deployment delivers better results
            </p>
          </SectionHeader>

          <div className="p-6 md:p-10 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-primary text-sm uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="text-left p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
                    Traditional
                  </th>
                  <th className="text-left p-4 font-semibold text-secondary text-sm uppercase tracking-wider">
                    Forward Deployed
                  </th>
                </tr>
              </thead>
              <tbody>
                {solutionsConfig.comparison.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="p-4 font-medium text-primary text-sm">
                      {row.aspect}
                    </td>
                    <td className="p-4 text-muted-foreground text-sm">
                      <div className="flex items-start gap-2">
                        <X className="size-4 text-red-500 mt-0.5 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 text-primary text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="size-4 text-secondary mt-0.5 shrink-0" />
                        <span>{row.forwardDeployed}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            {solutionsConfig.process.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {solutionsConfig.process.description}
          </p>
        </div>
        <div className="max-w-2xl mx-auto w-full">
          {solutionsConfig.process.steps.map((step, index) => (
            <div key={step.id} className="flex gap-6 items-start mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center size-10 rounded-full bg-secondary text-white font-semibold text-sm shrink-0">
                  {step.id}
                </div>
                {index < solutionsConfig.process.steps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2 min-h-[60px]" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-secondary">{step.icon}</span>
                  <h3 className="text-lg font-semibold tracking-tighter text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.slice(0, 3).map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-3 text-secondary shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {solutionsConfig.deliverables.title}
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Tangible deliverables with every engagement
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 gap-4">
            {solutionsConfig.deliverables.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border"
              >
                <Check className="size-5 text-secondary shrink-0" />
                <span className="text-sm text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Ready to Get Started?"
        description="See firsthand how our forward-deployed approach accelerates AI delivery for your industry."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
        variant="accent"
      />
    </main>
  );
}
