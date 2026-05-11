import { siteConfig } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/agent-template-og.png`,
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hi@leroylabs.io",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["en"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: "Worldwide",
  priceRange: "$$$",
  serviceType: [
    "Custom Software Development",
    "Business Process Automation",
    "AI Integration",
    "System Integration",
    "Forward-Deployed Engineering",
    "Technical Strategy & Discovery",
  ],
};

export function faqPageSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
  };
}

export function caseStudySchema(study: {
  title: string;
  summary: string;
  url: string;
  image: string;
  client: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: study.url,
    image: study.image.startsWith("http")
      ? study.image
      : `${siteConfig.url}${study.image}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: study.client,
  };
}

export function blogPostingSchema(post: {
  title: string;
  excerpt: string;
  url: string;
  image: string;
  author: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: post.url,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/agent-template-og.png`,
      },
    },
  };
}
