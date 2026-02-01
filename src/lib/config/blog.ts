import { PageHeroConfig, BlogPost } from "@/lib/types";

export const blogHero: PageHeroConfig = {
  badge: "Blog",
  title: "Insights on AI Engineering",
  description:
    "Practical perspectives on building AI systems that work. From technical deep-dives to industry trends.",
  variant: "centered",
};

export const categories = [
  "All",
  "AI Agents",
  "Engineering",
  "Case Studies",
  "Industry",
];

export const posts: BlogPost[] = [
  {
    slug: "building-production-ai-agents",
    title: "Building Production-Ready AI Agents: Lessons from the Field",
    excerpt:
      "What we've learned from shipping dozens of AI agents to production. The gap between demo and deployed is bigger than you think.",
    author: {
      name: "Jordan Chen",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    publishedAt: "2024-01-15",
    category: "AI Agents",
    tags: ["AI Agents", "Production", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "forward-deployment-explained",
    title: "Forward Deployment: Why Traditional Consulting Fails for AI",
    excerpt:
      "The case for embedded engineering over traditional consulting. How we've seen forward deployment consistently outperform.",
    author: {
      name: "Alex Morgan",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    publishedAt: "2024-01-08",
    category: "Engineering",
    tags: ["Process", "Consulting", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "llm-tool-use-patterns",
    title: "LLM Tool Use: Patterns That Actually Work",
    excerpt:
      "A technical deep-dive into effective tool use patterns for LLM-based agents. What the docs don't tell you.",
    author: {
      name: "Taylor Kim",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    publishedAt: "2024-01-01",
    category: "AI Agents",
    tags: ["LLM", "Tool Use", "Technical"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "healthcare-ai-compliance",
    title: "Building HIPAA-Compliant AI: A Practical Guide",
    excerpt:
      "How to build AI systems in healthcare without compromising on compliance. Lessons from real deployments.",
    author: {
      name: "Sam Rivera",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    publishedAt: "2023-12-20",
    category: "Industry",
    tags: ["Healthcare", "Compliance", "HIPAA"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "measuring-ai-roi",
    title: "Measuring AI ROI: Beyond the Hype",
    excerpt:
      "How to actually measure the return on AI investments. The metrics that matter and the ones that don't.",
    author: {
      name: "Alex Morgan",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    publishedAt: "2023-12-15",
    category: "Engineering",
    tags: ["ROI", "Metrics", "Business"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featured: false,
  },
];

export const blogConfig = {
  hero: blogHero,
  categories,
  posts,
};
