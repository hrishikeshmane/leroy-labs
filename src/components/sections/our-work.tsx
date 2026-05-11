/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function OurWorkSection() {
  const { ourWork } = siteConfig;

  return (
    <section
      id="our-work"
      className="w-full relative py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle off-white backdrop that sets this section apart from the rest of the page */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Left-aligned editorial header — intentionally different from the centered SectionHeader used elsewhere */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-[0.2em]">
                Recent Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-primary text-balance">
              Live. Shipped. <span className="text-muted-foreground">In production.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg font-medium max-w-sm md:text-right">
            Four recent projects, in front of real users right now.
          </p>
        </div>

        {/* Alternating editorial layout, one project per row */}
        <div className="flex flex-col gap-24 md:gap-32">
          {ourWork.map((item, index) => {
            const isReversed = index % 2 === 1;
            const hostname = new URL(item.href).hostname.replace(/^www\./, "");
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  isReversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Browser-chrome mockup around the screenshot */}
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-7 [direction:ltr] group block"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-background shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15),0_18px_36px_-18px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.22),0_22px_44px_-18px_rgba(0,0,0,0.14)]">
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#F3F4F6] dark:bg-[#0A0A0A]">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="size-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="flex-1 h-6 rounded-md bg-background border border-border flex items-center justify-center px-3 mx-2 md:mx-6">
                        <span className="text-[11px] md:text-xs text-muted-foreground font-mono truncate">
                          {hostname}
                        </span>
                      </div>
                      <div className="hidden md:flex items-center gap-1 opacity-40">
                        <span className="block w-3 h-0.5 bg-muted-foreground rounded-full" />
                        <span className="block w-3 h-0.5 bg-muted-foreground rounded-full" />
                        <span className="block w-3 h-0.5 bg-muted-foreground rounded-full" />
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                      <img
                        src={item.image}
                        alt={`${item.name} — ${item.tagline}`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      {/* Subtle vignette on hover to make the CTA pop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Floating visit pill */}
                      <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-primary shadow-sm">
                          Visit site
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Editorial copy column */}
                <div className="md:col-span-5 [direction:ltr] flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono text-muted-foreground/60 tabular-nums">
                      {indexLabel}
                    </span>
                    <span className="h-px flex-1 bg-border max-w-[80px]" />
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                      Case {indexLabel} / 0{ourWork.length}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-secondary tracking-tight">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group/link w-fit mt-1"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {hostname}
                    </span>
                    <span className="h-px w-8 bg-border group-hover/link:w-12 group-hover/link:bg-secondary transition-all duration-300" />
                    <span className="inline-flex items-center gap-1">
                      Visit
                      <ArrowUpRight className="size-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
