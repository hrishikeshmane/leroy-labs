/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogConfig } from "@/lib/config/blog";
import { SectionCTA } from "@/components/sections/shared";
import { JsonLd } from "@/components/json-ld";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { Markdown } from "@/components/ui/markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogConfig.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogConfig.posts.find((p) => p.slug === slug);

  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [post.image],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogConfig.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogConfig.posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const publishedLabel = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" },
  );

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          excerpt: post.excerpt,
          url: `${siteConfig.url}/blog/${post.slug}`,
          image: post.image,
          author: post.author.name,
          publishedAt: post.publishedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />

      <section className="w-full relative">
        <div className="relative flex flex-col items-center w-full px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-[520px] md:h-[460px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl" />
          </div>

          <div className="w-full max-w-3xl pt-32 pb-12 z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-balance mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="size-7 rounded-full border border-border"
                />
                <span className="text-primary font-medium">
                  {post.author.name}
                </span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <span>{publishedLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="relative aspect-video max-h-[460px] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

          <article className="max-w-3xl mx-auto p-10 md:p-14 blog-article">
            {post.content ? (
              <Markdown>{post.content}</Markdown>
            ) : (
              <p className="text-muted-foreground italic">
                Full article coming soon. In the meantime, get in touch if you
                want to talk through the topic.
              </p>
            )}
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-center text-balance">
              Related reading
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-base tracking-tighter font-semibold group-hover:text-secondary transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {r.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SectionCTA
        title="Want to work with us?"
        description="Let's talk about the software, automation, or AI work that would move your business."
        primaryButton={{ text: "Book a Discovery Call", href: "https://calendly.com/hi-leroylabs/30min" }}
        secondaryButton={{ text: "More Writing", href: "/blog" }}
        variant="accent"
      />
    </main>
  );
}
