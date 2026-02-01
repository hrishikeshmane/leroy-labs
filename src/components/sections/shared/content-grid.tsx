"use client";

import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContentGridProps {
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export function ContentGrid({
  title,
  description,
  columns = 3,
  children,
  className,
}: ContentGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("w-full py-16 md:py-20 px-6 md:px-10", className)}>
      {(title || description) && (
        <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto">
          {title && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                {title}
              </h2>
            </BlurFade>
          )}
          {description && (
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="text-lg text-muted-foreground">{description}</p>
            </BlurFade>
          )}
        </div>
      )}
      <div className={cn("grid gap-6", gridCols[columns])}>{children}</div>
    </section>
  );
}

interface ContentCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  href?: string;
  index?: number;
  className?: string;
}

export function ContentCard({
  icon,
  title,
  description,
  children,
  href,
  index = 0,
  className,
}: ContentCardProps) {
  const CardWrapper = href ? "a" : "div";

  return (
    <BlurFade delay={BLUR_FADE_DELAY * (3 + index * 0.5)}>
      <CardWrapper
        href={href}
        className={cn(
          "flex flex-col gap-4 p-6 rounded-xl border border-border bg-card",
          href &&
            "hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer",
          className
        )}
      >
        {icon && (
          <div className="flex items-center justify-center size-12 rounded-lg bg-accent text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {children}
      </CardWrapper>
    </BlurFade>
  );
}
