import type { Metadata } from "next";
import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OurWorkSection } from "@/components/sections/our-work";
import { QuoteSection } from "@/components/sections/quote-section";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { faqSectionConfig } from "@/lib/config/home";

export const metadata: Metadata = {
  title: {
    absolute:
      "Leroy Labs — Custom Software, Business Automation & AI Integration",
  },
  description:
    "Leroy Labs is a forward-deployed software studio. We build web and mobile products, automate business workflows, and integrate AI where it creates real leverage.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <JsonLd data={faqPageSchema(faqSectionConfig.faQitems)} />
      <HeroSection />
      <CompanyShowcase />
      <OurWorkSection />
      <BentoSection />
      <QuoteSection />
      <FeatureSection />
      <GrowthSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
