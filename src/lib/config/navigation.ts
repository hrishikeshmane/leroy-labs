import { NavLink, FooterColumn } from "@/lib/types";

export const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "Solutions", href: "/solutions" },
  { id: 5, name: "Case Studies", href: "/case-studies" },
  // { id: 6, name: "About", href: "/about" },
];

export const footerLinks: FooterColumn[] = [
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
