import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { approachConfig } from "@/lib/config/approach";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Forward deployment: our engineers embed with your team to ship production AI. Not consultants - builders.",
};

export default function ApproachPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={approachConfig.hero} />

      {/* Comparison Table */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {approachConfig.comparison.title}
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
                {approachConfig.comparison.rows.map((row, index) => (
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
            {approachConfig.process.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {approachConfig.process.description}
          </p>
        </div>
        <div className="max-w-2xl mx-auto w-full">
          {approachConfig.process.steps.map((step, index) => (
            <div key={step.id} className="flex gap-6 items-start mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center size-10 rounded-full bg-secondary text-white font-semibold text-sm shrink-0">
                  {step.id}
                </div>
                {index < approachConfig.process.steps.length - 1 && (
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
              {approachConfig.deliverables.title}
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Tangible deliverables with every engagement
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 gap-4">
            {approachConfig.deliverables.items.map((item, index) => (
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
        title="Ready to Experience Forward Deployment?"
        description="See firsthand how embedded engineering accelerates AI delivery."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
        variant="accent"
      />
    </main>
  );
}
