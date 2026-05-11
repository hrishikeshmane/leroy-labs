import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { careersConfig } from "@/lib/config/careers";
import { ArrowRight, Check, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Leroy Labs. We're hiring senior engineers — forward-deployed, embedded with clients, shipping real production software, automation, and AI integrations.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const { hero, perks, role, highlights, sections, application } =
    careersConfig;

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={hero} />

      {/* Why work here */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-10 md:p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Why Leroy Labs
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            A small team of senior engineers shipping AI into real production
            systems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="flex gap-4 p-6 rounded-xl border border-border bg-background"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-secondary border border-border shrink-0">
                {perk.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tighter text-primary mb-2">
                  {perk.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open role */}
      <section
        id="open-role"
        className="flex flex-col items-center justify-center w-full relative px-5 md:px-10 scroll-mt-24"
      >
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Open Role
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              One role, senior bar. If this is you, we&apos;d love to talk.
            </p>
          </SectionHeader>

          <div className="max-w-4xl mx-auto p-6 md:p-14 flex flex-col gap-10">
            {/* Role header */}
            <div className="flex flex-col gap-6 pb-8 border-b border-border">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-secondary">
                  {role.team}
                </p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-primary">
                  {role.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {role.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 px-3 h-8 rounded-full border border-border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] text-sm text-muted-foreground"
                  >
                    <span className="text-secondary">{item.icon}</span>
                    <span className="text-primary font-medium">
                      {item.label}:
                    </span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About the role */}
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold tracking-tighter text-primary">
                About the role
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {role.about}
              </p>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold tracking-tighter text-primary">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    >
                      <Check className="size-4 text-secondary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Tech stack */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold tracking-tighter text-primary">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {role.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center h-8 px-3 text-sm rounded-full border border-border bg-accent text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Compensation */}
            <div className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02]">
              <h4 className="text-sm font-semibold tracking-tighter text-primary uppercase">
                Compensation & benefits
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {role.compensation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply via email */}
      <section className="flex flex-col items-center justify-center w-full px-5 md:px-10 py-14 md:py-20 bg-accent">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center size-14 rounded-2xl bg-background text-secondary border border-border">
            <Mail className="size-6" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium tracking-wide text-secondary uppercase">
              {application.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance text-primary">
              {application.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
              {application.description}
            </p>
          </div>

          <Link
            href={`mailto:${application.email}?subject=${encodeURIComponent(
              application.subject
            )}`}
            className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-secondary text-primary-foreground dark:text-secondary-foreground text-base font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
          >
            {application.email}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <p className="text-sm text-muted-foreground">
            {application.footnote}
          </p>
        </div>
      </section>

      <SectionCTA
        title="Not the right role, but want to stay in touch?"
        description="We're always meeting great engineers. Drop us a line and we'll reach out when something opens up."
        primaryButton={{ text: "Get in Touch", href: "/contact" }}
        secondaryButton={{ text: "Meet the Team", href: "/about" }}
      />
    </main>
  );
}
