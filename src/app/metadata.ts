import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Leroy Labs",
    "AI Software Development",
    "AI Agents",
    "Custom Automation",
    "Forward Deployment",
    "AI-Native Products",
    "Agentic Workflows",
    "AI Consulting",
    "Machine Learning",
    "Enterprise AI",
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
