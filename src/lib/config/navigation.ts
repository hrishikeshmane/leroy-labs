import { NavLink, FooterColumn } from "@/lib/types";

export const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "Solutions", href: "/solutions" },
  { id: 4, name: "Our Approach", href: "/approach" },
  { id: 5, name: "Case Studies", href: "/case-studies" },
  // { id: 6, name: "About", href: "/about" },
];

export const footerLinks: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { id: 1, title: "AI Agent Development", url: "/services/ai-agents" },
      { id: 2, title: "AI-Native Products", url: "/services" },
      { id: 3, title: "Process Automation", url: "/services" },
      { id: 4, title: "Consulting", url: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { id: 5, title: "About", url: "/about" },
      { id: 6, title: "Case Studies", url: "/case-studies" },
      { id: 7, title: "Blog", url: "/blog" },
      { id: 8, title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { id: 9, title: "Our Approach", url: "/approach" },
      { id: 10, title: "Industries", url: "/solutions" },
      { id: 11, title: "Privacy Policy", url: "/privacy" },
      { id: 12, title: "Terms of Service", url: "/terms" },
    ],
  },
];

export const navigationConfig = {
  links: navLinks,
  cta: {
    text: "Book a Call",
    href: "/contact",
  },
};
