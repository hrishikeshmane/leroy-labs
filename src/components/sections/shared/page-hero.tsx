"use client";

import { PageHeroConfig } from "@/lib/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  config: PageHeroConfig;
  className?: string;
}

export function PageHero({ config, className }: PageHeroProps) {
  const { badge, badgeIcon, title, description, cta } = config;

  return (
    <section className={cn("w-full relative", className)}>
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[500px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-32 pb-24 md:pb-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          {badge && (
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
              {badgeIcon}
              {badge}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              {title}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight max-w-2xl">
              {description}
            </p>
          </div>
          {cta && (
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {cta.primary && (
                <Link
                  href={cta.primary.href}
                  className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                >
                  {cta.primary.text}
                </Link>
              )}
              {cta.secondary && (
                <Link
                  href={cta.secondary.href}
                  className="h-10 flex items-center justify-center w-fit px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
                >
                  {cta.secondary.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
