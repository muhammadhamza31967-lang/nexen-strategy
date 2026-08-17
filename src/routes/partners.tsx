import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { partners } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Nexen Strategy" },
      {
        name: "description",
        content:
          "The organisations, platforms and clients Nexen Strategy works alongside across technology, marketing, software and creative production.",
      },
      { property: "og:title", content: "Partners — Nexen Strategy" },
      {
        property: "og:description",
        content: "Long-term relationships with organisations that trust us with what matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <Header overHero />
      <main>
        <section className="relative overflow-hidden bg-navy pt-40 pb-24 lg:pt-56 lg:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-25 blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Partners & clients</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-4xl text-[2.7rem] text-white sm:text-6xl lg:text-[5rem]">
                Trusted by Businesses With Something to Protect.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                We work with organisations across professional services, healthcare, industry,
                education, retail and technology. Most of our relationships are long term, and most
                of our new work comes from the people we already work with.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <Reveal>
            <p className="eyebrow text-azure">Selected partners</p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-16 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-24">
            {partners.map((p, i) => (
              <Reveal key={p} delay={i * 40}>
                <span className="block text-center text-lg font-semibold tracking-tight text-navy/35 transition-colors duration-500 hover:text-navy lg:text-xl">
                  {p}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-3 lg:px-12 lg:py-32">
            {[
              {
                k: "Long-term",
                v: "Relationships measured in years, not projects. We stay accountable after launch.",
              },
              {
                k: "Senior",
                v: "The people who scope your work are the people who deliver it.",
              },
              {
                k: "Transparent",
                v: "Clear scope, clear reporting and no ambiguity about where a project stands.",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="h-px w-14 bg-gradient-to-r from-cyan to-azure" />
                <h2 className="mt-7 text-2xl font-semibold tracking-tight text-navy">{item.k}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaSection eyebrow="Partner with us" heading="Let's Start a Long Relationship." />
      </main>
      <Footer />
    </>
  );
}