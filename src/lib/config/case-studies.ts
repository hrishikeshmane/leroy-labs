import { PageHeroConfig, CaseStudy } from "@/lib/types";

export const caseStudiesHero: PageHeroConfig = {
  badge: "Case Studies",
  title: "Real Results. Real Businesses.",
  description:
    "See how we've helped companies across industries build AI systems that deliver measurable impact. Not vanity metrics - real business outcomes.",
  variant: "centered",
  cta: {
    primary: { text: "Start Your Project", href: "/contact" },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-customer-service",
    title: "70% Automation in Customer Service",
    client: "Series B Fintech Startup",
    industry: "Financial Services",
    duration: "8 weeks",
    summary:
      "Built an AI-powered customer service system that handles 70% of inquiries autonomously while maintaining compliance and escalating complex issues to human agents.",
    challenge:
      "The client's support team was drowning in repetitive inquiries about account status, transaction history, and basic troubleshooting. Response times were increasing, and hiring wasn't keeping pace with growth. They needed to scale support without scaling headcount, while maintaining strict financial compliance requirements.",
    solution:
      "We built a custom AI agent that integrates with their existing ticketing system and customer data infrastructure. The agent handles common inquiries autonomously, pulls real-time account data, and knows when to escalate to human agents. All interactions are logged for compliance, and the system improves continuously based on agent feedback.",
    results: [
      "70% of customer inquiries now handled autonomously",
      "Average response time reduced from 4 hours to under 2 minutes",
      "Customer satisfaction scores increased by 23%",
      "Support team now handles 3x the volume with same headcount",
    ],
    metrics: [
      { label: "Automation Rate", value: "70%" },
      { label: "Response Time", value: "< 2 min" },
      { label: "CSAT Increase", value: "+23%" },
      { label: "Timeline", value: "8 weeks" },
    ],
    testimonial: {
      quote:
        "Leroy Labs transformed our operations in 8 weeks. Their engineers embedded with our team and shipped an AI system that now handles 70% of our customer inquiries autonomously. The ROI was measurable within the first month.",
      name: "Sarah Chen",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "healthtech-intake",
    title: "Patient Intake: 45 Minutes to 3 Minutes",
    client: "Healthcare Technology Company",
    industry: "Healthcare",
    duration: "6 weeks",
    summary:
      "HIPAA-compliant AI system that automated patient intake, reducing processing time by 93% while improving data accuracy.",
    challenge:
      "Manual patient intake was taking 45 minutes per patient, creating bottlenecks, data entry errors, and frustrated patients. Staff were spending more time on paperwork than patient care.",
    solution:
      "We developed an AI-powered intake system that guides patients through the process conversationally, extracts and validates information, and integrates directly with their EHR. The system handles insurance verification, medical history collection, and consent forms - all HIPAA compliant.",
    results: [
      "Intake time reduced from 45 minutes to 3 minutes",
      "Data entry errors reduced by 89%",
      "Staff time freed up for direct patient care",
      "Patient satisfaction with intake process doubled",
    ],
    metrics: [
      { label: "Time Saved", value: "93%" },
      { label: "Error Reduction", value: "89%" },
      { label: "Patient Satisfaction", value: "2x" },
      { label: "Timeline", value: "6 weeks" },
    ],
    testimonial: {
      quote:
        "What used to take our staff 45 minutes now happens in 3. Their engineers felt like an extension of our team.",
      name: "Marcus Thompson",
      role: "VP Engineering",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "ecommerce-personalization",
    title: "AI Personalization in 4 Weeks",
    client: "E-commerce Platform",
    industry: "Retail",
    duration: "4 weeks",
    summary:
      "Delivered a complete AI-powered personalization engine that internal estimates said would take 6 months to build.",
    challenge:
      "The client needed personalized product recommendations and content to compete with larger players, but their internal estimate was 6 months of engineering time they didn't have.",
    solution:
      "Our team embedded with their engineering org and built a personalization engine that integrates with their existing product catalog and customer data. Real-time recommendations, personalized email content, and dynamic landing pages - all shipped in 4 weeks.",
    results: [
      "Shipped in 4 weeks vs. 6 month internal estimate",
      "18% increase in average order value",
      "25% improvement in email click-through rates",
      "System handles 10M+ recommendations per day",
    ],
    metrics: [
      { label: "Time to Launch", value: "4 weeks" },
      { label: "AOV Increase", value: "+18%" },
      { label: "Email CTR", value: "+25%" },
      { label: "Daily Recommendations", value: "10M+" },
    ],
    testimonial: {
      quote:
        "Leroy Labs delivered in 4 weeks what our estimates said would take 6 months internally.",
      name: "Elena Rodriguez",
      role: "Founder",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "legal-document-analysis",
    title: "Contract Review Time Cut by 80%",
    client: "Legal Tech Startup",
    industry: "Legal",
    duration: "10 weeks",
    summary:
      "Built a document analysis agent that reduced contract review time by 80%, letting lawyers focus on strategy instead of reading.",
    challenge:
      "Lawyers were spending the majority of their time reading through contracts to identify key terms, risks, and obligations. This manual work was expensive and slow, limiting the firm's capacity.",
    solution:
      "We built a custom document analysis agent that reads contracts, extracts key information, identifies risks and unusual clauses, and presents findings in a structured format. Lawyers can now review in minutes what used to take hours.",
    results: [
      "Contract review time reduced by 80%",
      "Lawyers handle 4x more contracts",
      "Key clause identification accuracy of 97%",
      "Risk flagging catches issues human reviewers miss",
    ],
    metrics: [
      { label: "Time Saved", value: "80%" },
      { label: "Throughput", value: "4x" },
      { label: "Accuracy", value: "97%" },
      { label: "Timeline", value: "10 weeks" },
    ],
    testimonial: {
      quote:
        "The document analysis agent they built reduced our contract review time by 80%. Our lawyers now focus on strategy instead of reading.",
      name: "David Kim",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "logistics-optimization",
    title: "15% Fuel Cost Reduction",
    client: "Regional Logistics Company",
    industry: "Logistics",
    duration: "12 weeks",
    summary:
      "Route optimization AI that delivered 15% fuel cost reduction in the first quarter of deployment.",
    challenge:
      "Rising fuel costs were eating into margins. Manual route planning wasn't optimizing for fuel efficiency, traffic patterns, or delivery time windows effectively.",
    solution:
      "We built a route optimization system that considers real-time traffic, weather, vehicle capacity, time windows, and driver schedules. The system continuously learns from actual route performance to improve its predictions.",
    results: [
      "15% reduction in fuel costs",
      "12% improvement in on-time deliveries",
      "Drivers spend 20% less time in traffic",
      "ROI achieved within first quarter",
    ],
    metrics: [
      { label: "Fuel Savings", value: "15%" },
      { label: "On-Time Delivery", value: "+12%" },
      { label: "Time in Traffic", value: "-20%" },
      { label: "Timeline", value: "12 weeks" },
    ],
    testimonial: {
      quote:
        "Route optimization AI that actually works. 15% fuel cost reduction in the first quarter. Leroy Labs understood our constraints.",
      name: "Amanda Foster",
      role: "Head of Operations",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "saas-features",
    title: "3 AI Features in 8 Weeks",
    client: "B2B SaaS Platform",
    industry: "Technology",
    duration: "8 weeks",
    summary:
      "Embedded engineer helped ship 3 AI-powered features that were on the product roadmap for the following year.",
    challenge:
      "The product team had AI features on their roadmap but lacked the specialized expertise to build them. Hiring would take months, and they were losing deals to competitors with AI capabilities.",
    solution:
      "Our engineer embedded with their product team, bringing AI expertise while working within their existing processes and codebase. We shipped an AI-powered search, automated reporting, and smart notifications - all production-ready and fully integrated.",
    results: [
      "3 major AI features shipped",
      "Accelerated roadmap by 12+ months",
      "Engineering team upskilled in AI/ML",
      "Features now drive significant user engagement",
    ],
    metrics: [
      { label: "Features Shipped", value: "3" },
      { label: "Roadmap Acceleration", value: "12+ mo" },
      { label: "User Engagement", value: "+40%" },
      { label: "Timeline", value: "8 weeks" },
    ],
    testimonial: {
      quote:
        "Their embedded engineer became invaluable. We shipped 3 AI features in 8 weeks that our product roadmap had scheduled for next year.",
      name: "James Liu",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featured: true,
  },
];

export const caseStudiesConfig = {
  hero: caseStudiesHero,
  studies: caseStudies,
};
