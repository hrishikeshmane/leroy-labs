import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Custom Software, Business Automation & AI Integration`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Leroy Labs",
    "Software Consultancy",
    "Custom Software Development",
    "Business Automation",
    "Workflow Automation",
    "Process Automation",
    "AI Integration",
    "AI Agents",
    "Web App Development",
    "Mobile App Development",
    "Next.js Development",
    "System Integration",
    "API Integration",
    "Forward-Deployed Engineering",
    "Software Studio",
  ],
  authors: [
    {
      name: "Leroy Labs",
      url: "https://leroylabs.io",
    },
  ],
  creator: "Leroy Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@leroylabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
