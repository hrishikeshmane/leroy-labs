"use client";

import { navLinks } from "@/lib/config/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

export function NavMenu() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  // Get active link based on pathname
  const getActiveLink = () => {
    // Exact match first
    const exactMatch = navLinks.find((link) => link.href === pathname);
    if (exactMatch) return exactMatch.href;

    // Check for nested routes (e.g., /services/ai-agents matches /services)
    const nestedMatch = navLinks.find(
      (link) => link.href !== "/" && pathname.startsWith(link.href)
    );
    if (nestedMatch) return nestedMatch.href;

    // Default to home
    return "/";
  };

  const activeHref = getActiveLink();

  useEffect(() => {
    // Update indicator position based on active link
    const activeItem = ref.current?.querySelector(
      `a[href="${activeHref}"]`
    )?.parentElement;
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect();
      setLeft(activeItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, [activeHref]);

  return (
    <div className="w-full hidden md:block">
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeHref === item.href
                ? "text-primary"
                : "text-primary/60 hover:text-primary"
            } tracking-tight`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
