import { Metadata } from "next";
import { PageHero } from "@/components/sections/shared";
import { SectionHeader } from "@/components/section-header";
import { contactConfig } from "@/lib/config/contact";
import { Mail, Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call to discuss how AI can transform your business. 30-minute conversation to explore your challenges and opportunities.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <PageHero config={contactConfig.hero} />

      {/* Contact Options */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Let&apos;s Talk
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Choose how you&apos;d like to connect
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {/* Schedule a Call */}
            <div className="flex flex-col items-start justify-between min-h-[350px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group">
              <div className="flex flex-col gap-4 p-6 md:p-8 h-full">
                <div className="flex items-center justify-center size-12 rounded-xl bg-secondary text-white">
                  <Calendar className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl tracking-tighter font-semibold mb-2">
                    Book a Discovery Call
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    30-minute conversation to understand your challenges,
                    explore opportunities, and see if we&apos;re a good fit.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-4" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4" />
                      <span>Virtual</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={
                    contactConfig.contactInfo.calendlyLink ||
                    "https://cal.com/leroylabs"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary h-10 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95 gap-2"
                >
                  Schedule a Call
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Send Email */}
            <div className="flex flex-col items-start justify-between min-h-[350px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group">
              <div className="flex flex-col gap-4 p-6 md:p-8 h-full">
                <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-secondary border border-border">
                  <Mail className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl tracking-tighter font-semibold mb-2">
                    Send Us an Email
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Have a quick question or prefer email? We typically respond
                    within 24 hours on business days.
                  </p>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Email Address
                  </p>
                  <p className="text-secondary font-medium">
                    {contactConfig.contactInfo.email}
                  </p>
                </div>
                <Link
                  href={`mailto:${contactConfig.contactInfo.email}`}
                  className="h-10 flex items-center justify-center w-fit px-6 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80 gap-2"
                >
                  Send Email
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            What Happens Next
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Our process is designed to get to value fast
          </p>
        </div>
        <div className="max-w-2xl mx-auto w-full">
          {contactConfig.processSteps.map((step, index) => (
            <div key={step.id} className="flex gap-6 items-start mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center size-10 rounded-full bg-secondary text-white font-semibold text-sm shrink-0">
                  {step.id}
                </div>
                {index < contactConfig.processSteps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2 min-h-[60px]" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <h3 className="text-lg font-semibold tracking-tighter text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Link */}
      <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <div className="border-x mx-5 md:mx-10 relative w-full">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          <div className="p-10 md:p-14 text-center">
            <h2 className="text-2xl font-medium tracking-tighter text-primary mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Check out our frequently asked questions or reach out directly -
              we&apos;re happy to answer any questions about working with Leroy
              Labs.
            </p>
            <Link
              href="/#faq"
              className="h-10 flex items-center justify-center w-fit px-6 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80 mx-auto"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
