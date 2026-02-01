/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { caseStudiesConfig } from "@/lib/config/case-studies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we've helped companies across industries build AI systems that deliver measurable impact.",
};

export default function CaseStudiesPage() {
  const featuredStudies = caseStudiesConfig.studies.filter(
    (study) => study.featured
  );
  const otherStudies = caseStudiesConfig.studies.filter(
    (study) => !study.featured
  );

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={caseStudiesConfig.hero} />

      {/* Featured Case Studies */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Featured Success Stories
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Real results from real engagements
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {featuredStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="flex flex-col items-start justify-between min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group"
              >
                <div className="flex flex-col h-full w-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-6 flex-1">
                    <h3 className="text-lg tracking-tighter font-semibold group-hover:text-secondary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {study.summary}
                    </p>
                    <div className="flex gap-6 mt-auto pt-4">
                      {study.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i}>
                          <div className="text-xl font-semibold text-secondary tracking-tighter">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-secondary mt-4 group-hover:gap-2 transition-all">
                      Read Case Study
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
              More Success Stories
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Explore our full portfolio of AI implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {otherStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10)] transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary/90 text-white text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <h3 className="text-base tracking-tighter font-semibold group-hover:text-secondary transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {study.summary}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-secondary mt-auto pt-2 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SectionCTA
        title="Ready to Be Our Next Success Story?"
        description="Let's discuss how AI can transform your business."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
      />
    </main>
  );
}
