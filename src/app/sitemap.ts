import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { caseStudies } from "@/lib/config/case-studies";
import { posts as blogPosts } from "@/lib/config/blog";
import { services } from "@/lib/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const uniqueServiceHrefs = Array.from(
    new Set(services.map((s) => s.href).filter((h) => h !== "/services")),
  );
  const serviceRoutes: MetadataRoute.Sitemap = uniqueServiceHrefs.map(
    (href) => ({
      url: `${base}${href}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const dedup = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const r of [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes]) {
    dedup.set(r.url, r);
  }
  return Array.from(dedup.values());
}
