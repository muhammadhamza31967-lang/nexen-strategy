import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nexen Strategy" },
      {
        name: "description",
        content:
          "Nexen Strategy is a UK digital solutions partner combining strategy, design, technology and creative production to help businesses build, transform and grow.",
      },
      { property: "og:title", content: "About Nexen Strategy" },
      {
        property: "og:description",
        content:
          "One connected team of strategists, designers, engineers and producers helping UK businesses build, transform and grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Business First",
    text: "Every decision starts with the commercial outcome. Technology and creative follow the objective, never the other way round.",
  },
  {
    title: "Purposeful Technology",
    text: "We use the right tools for the problem in front of us, and we are honest when a simpler answer will serve you better.",
  },
  {
    title: "Creative Thinking",
    text: "Ideas are held to the same standard as engineering. Craft is what separates work that is noticed from work that is ignored.",
  },
  {
    title: "Built to Evolve",
    text: "What we deliver is designed to be extended. Your business will change, and the work should be ready for it.",
  },
  {
    title: "One Connected Team",
    text: "Strategy, design, development, AI, marketing and production sit together, so nothing is lost in the handover.",
  },
];

function AboutPage() {
  return (
    <>
      <Header overHero />
      <main>
        <section className="relative overflow-hidden bg-navy pt-40 pb-24 lg:pt-56 lg:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-10%] bottom-[-30%] h-[600px] w-[600px] rounded-full opacity-30 blur-[140px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">About Nexen Strategy</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-5xl text-[2.7rem] text-white sm:text-6xl lg:text-[5rem]">
                A Digital Partner Built Around Your Business.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                Nexen Strategy is a United Kingdom based digital solutions company. We help
                established businesses, SMEs and growing organisations build what they need, replace
                what no longer works and move confidently into their next phase of growth.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="display text-4xl text-navy sm:text-5xl">
                  We work at the point where strategy, technology and creativity meet.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <Reveal delay={80}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Most organisations do not need another supplier. They need a partner who
                  understands the commercial reality behind the brief, can hold the whole picture,
                  and can execute across brand, product, platform and growth without dropping the
                  standard in any of them.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                  That is how Nexen Strategy is built. One connected team covering brand and design,
                  web and app development, software, AI and automation, marketing and media
                  production, working to a single plan with a single point of accountability.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                  We are deliberate about how we work. We ask difficult questions early, we are
                  honest about what will and will not deliver a return, and we measure our work by
                  what it does for your business rather than how it looks in a case study.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="relative">
            <img
              src={aboutImg}
              alt="A calm, minimal contemporary studio workspace"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[45vh] w-full object-cover lg:h-[75vh]"
            />
          </section>
        </Reveal>

        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-azure">How we think</p>
                <h2 className="display mt-6 text-4xl text-navy lg:text-5xl">
                  Principles we hold to.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-border">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 60}>
                    <div className="grid gap-3 border-b border-border py-8 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10">
                      <h3 className="text-xl font-semibold tracking-tight text-navy">{v.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{v.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <Link
                  to="/portfolio"
                  className="group mt-12 inline-flex items-center gap-3 text-base font-semibold text-navy"
                >
                  See the work
                  <ArrowRight className="h-4 w-4 text-amber transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <CtaSection
          eyebrow="Work with us"
          heading="Tell Us Where Your Business Is Heading."
        />
      </main>
      <Footer />
    </>
  );
}