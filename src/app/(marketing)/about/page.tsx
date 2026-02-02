/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { aboutConfig } from "@/lib/config/about";
import { Linkedin, Twitter, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Leroy Labs is a team of elite engineers and researchers building AI that actually works. Learn about our story, values, and team.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={aboutConfig.hero} />

      {/* Our Story */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {aboutConfig.story.title}
            </h2>
          </SectionHeader>

          <div className="max-w-3xl mx-auto p-10 md:p-14 space-y-6">
            {aboutConfig.story.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed text-balance"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Our Values
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            The principles that guide how we work and what we build
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {aboutConfig.values.map((value) => (
            <div
              key={value.id}
              className="flex gap-4 p-6 rounded-xl border border-border bg-background"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-secondary border border-border shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tighter text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Engineers and researchers united by a mission to build AI that
              works
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            {aboutConfig.team.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center justify-start p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              >
                <div className="flex flex-col items-center text-center p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-24 rounded-full object-cover mb-4 border-2 border-border"
                  />
                  <h3 className="text-lg font-semibold tracking-tighter text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-8 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        <Linkedin className="size-4" />
                      </Link>
                    )}
                    {member.twitter && (
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-8 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        <Twitter className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      {/* <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Why Join Leroy Labs?
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            We&apos;re building something different
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
          {[
            "Work on production AI systems, not POCs that never ship",
            "Direct collaboration with engineering leadership",
            "Competitive compensation with equity",
            "Fully remote with flexible hours",
            "Continuous learning and conference budgets",
            "Work with the latest AI models and tooling",
          ].map((perk, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border"
            >
              <Check className="size-5 text-secondary shrink-0" />
              <span className="text-sm text-primary">{perk}</span>
            </div>
          ))}
        </div>
      </section> */}

      <SectionCTA
        title="Want to Join the Team?"
        description="We're always looking for exceptional engineers who want to build AI that matters."
        primaryButton={{ text: "View Open Roles", href: "/careers" }}
        secondaryButton={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
