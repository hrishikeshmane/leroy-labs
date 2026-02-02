import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { servicesConfig } from "@/lib/config/services";
import { PricingSection } from "@/components/sections/pricing-section";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering services including custom AI agents, AI-native products, process automation, and strategic consulting.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={servicesConfig.hero} />

      {/* Services Bento Grid */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          {/* Decorative diagonal patterns */}
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              What We Build
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              From autonomous agents to full-stack AI products
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {servicesConfig.services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-start justify-between min-h-[400px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group"
              >
                <div className="flex flex-col gap-4 p-6 h-full">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-secondary border border-border">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg tracking-tighter font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 text-secondary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.href !== "/services" && (
                    <Link
                      href={service.href}
                      className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group-hover:gap-2"
                    >
                      Learn more
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <PricingSection /> */}

      <SectionCTA
        title="Ready to Build Something?"
        description="Let's discuss how AI can transform your business."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryButton={{ text: "View Case Studies", href: "/case-studies" }}
        variant="accent"
      />
    </main>
  );
}
