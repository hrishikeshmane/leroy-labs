/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudiesConfig } from "@/lib/config/case-studies";
import { SectionCTA } from "@/components/sections/shared";
import { JsonLd } from "@/components/json-ld";
import { caseStudySchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { ArrowLeft, Check, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesConfig.studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesConfig.studies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      images: [study.image.startsWith("http") ? study.image : `${siteConfig.url}${study.image}`],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesConfig.studies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Get related case studies (same industry, excluding current)
  const relatedStudies = caseStudiesConfig.studies
    .filter((s) => s.slug !== slug && s.industry === study.industry)
    .slice(0, 2);

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <JsonLd
        data={caseStudySchema({
          title: study.title,
          summary: study.summary,
          url: `${siteConfig.url}/case-studies/${study.slug}`,
          image: study.image,
          client: study.client,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
          { name: study.title, url: `${siteConfig.url}/case-studies/${study.slug}` },
        ])}
      />
      {/* Header with radial gradient */}
      <section className="w-full relative">
        <div className="relative flex flex-col items-center w-full px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-[600px] md:h-[500px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
          </div>

          <div className="w-full max-w-4xl pt-32 pb-16 md:pb-20 z-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                {study.industry}
              </span>
              {study.duration && (
                <span className="px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-xs font-medium">
                  {study.duration}
                </span>
              )}
              {study.externalUrl && (
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-xs font-medium hover:bg-secondary hover:text-white transition-colors"
                >
                  Visit {new URL(study.externalUrl).hostname.replace(/^www\./, "")} ↗
                </a>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-balance mb-4">
              {study.title}
            </h1>

            <p className="text-lg text-muted-foreground text-balance mb-10 max-w-2xl">
              {study.summary}
            </p>

            {/* Metrics Bar */}
            {study.metrics && study.metrics.length > 0 && (
              <div className="flex flex-wrap gap-8 md:gap-12">
                {study.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-semibold text-secondary tracking-tighter">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full flex items-center justify-center">
        <div className="relative aspect-video max-h-[500px] w-full overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <div className="max-w-3xl mx-auto p-10 md:p-14 space-y-12">
            {study.challenge && (
              <div>
                <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            )}

            {study.solution && (
              <div>
                <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>
            )}

            {study.results && study.results.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
                  The Results
                </h2>
                <ul className="space-y-3">
                  {study.results.map((result, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="size-5 text-secondary shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {study.externalUrl && (
              <div>
                <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
                  See it live
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This project is in production today. Click through to see what we shipped.
                </p>
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-secondary text-white text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  Visit {new URL(study.externalUrl).hostname.replace(/^www\./, "")}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Quote className="size-12 text-secondary/20 absolute -top-4 -left-4" />
              <blockquote className="text-xl md:text-2xl text-primary font-medium leading-relaxed pl-8 tracking-tight">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 mt-8 pl-8">
                {study.testimonial.image && (
                  <img
                    src={study.testimonial.image}
                    alt={study.testimonial.name}
                    className="size-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-primary">
                    {study.testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {study.testimonial.role}, {study.client}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
          <div className="border-x mx-5 md:mx-10 relative w-full">
            <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
            <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

            <div className="p-10 md:p-14">
              <h2 className="text-2xl font-medium tracking-tighter text-center mb-8">
                Related Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedStudies.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/case-studies/${related.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10)] transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-5 flex-1">
                      <h3 className="text-base tracking-tighter font-semibold group-hover:text-secondary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.summary}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-secondary mt-auto pt-2 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <SectionCTA
        title="Ready to ship something like this?"
        description="Let's talk about what would move your business — a product, an automation, an AI feature, or all three."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryButton={{ text: "View More Work", href: "/case-studies" }}
        variant="accent"
      />
    </main>
  );
}
