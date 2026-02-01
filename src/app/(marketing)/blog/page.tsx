/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { PageHero, SectionCTA } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { blogConfig } from "@/lib/config/blog";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI engineering, agent development, and building production AI systems that work.",
};

export default function BlogPage() {
  const featuredPost = blogConfig.posts.find((post) => post.featured);
  const otherPosts = blogConfig.posts.filter((post) => !post.featured);

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={blogConfig.hero} />

      {/* Featured Post */}
      {featuredPost && (
        <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
          <div className="border-x mx-5 md:mx-10 relative w-full">
            <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
            <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

            <SectionHeader>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
                Latest Insights
              </h2>
            </SectionHeader>

            <div className="p-6 md:p-10">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium w-fit">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-primary group-hover:text-secondary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        className="size-6 rounded-full border border-border"
                      />
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      <span>
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Deep dives into AI engineering and best practices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10)] transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary/90 text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-lg tracking-tighter font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="size-5 rounded-full border border-border"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <span>&middot;</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <div className="p-10 md:p-14 text-center">
            <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
              More Content Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We&apos;re working on more in-depth articles, tutorials, and case
              studies. Follow us on Twitter or LinkedIn to stay updated.
            </p>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Want to Work With Us?"
        description="Let's discuss how AI can transform your business."
        primaryButton={{ text: "Book a Discovery Call", href: "/contact" }}
        variant="accent"
      />
    </main>
  );
}
