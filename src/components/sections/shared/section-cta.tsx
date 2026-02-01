"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionCTAProps {
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "default" | "accent";
  className?: string;
}

export function SectionCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "default",
  className,
}: SectionCTAProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-8 w-full p-14",
        variant === "accent" && "bg-accent",
        className
      )}
    >
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        )}
        <div className="flex items-center gap-2.5 flex-wrap justify-center mt-2">
          <Link
            href={primaryButton.href}
            className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="h-10 flex items-center justify-center w-fit px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
