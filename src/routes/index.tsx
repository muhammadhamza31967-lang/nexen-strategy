import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { IndustryShowcase } from "@/components/site/IndustryShowcase";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { partners } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";
import abstractIntro from "@/assets/abstract-intro.jpg";
import aboutImg from "@/assets/about.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexen Strategy — Build Better. Move Smarter. Grow Further." },
      {
        name: "description",
        content:
          "A UK digital solutions partner for brand, web and app development, software, AI and automation, marketing and media production.",
      },
      { property: "og:title", content: "Build Better. Move Smarter. Grow Further." },
      {
        property: "og:description",
        content:
          "Nexen Strategy helps established businesses build, transform and grow through strategy, design, technology and creative work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const principles = [
  {
    title: "Business First",
    text: "We start with the commercial objective. Every design, system and campaign is judged on what it does for the business, not how it looks in isolation.",
  },
  {
    title: "Purposeful Technology",
    text: "Technology is a means, not a statement. We choose what fits the problem, the budget and the team who will live with it.",
  },
  {
    title: "Creative Thinking",
    text: "Strategy without craft goes unnoticed. We hold ideas and execution to the same standard, across every discipline.",
  },
  {
    title: "Built to Evolve",
    text: "What we build is designed to be extended. Your business will change, and the work should be ready for it.",
  },
  {
    title: "One Connected Team",
    text: "Brand, product, software, AI, marketing and production sit together, so nothing is lost between disciplines.",
  },
];

function Home() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <>
      <Header overHero />
      <main>
        {/* 01 HERO */}
        <section className="relative h-svh min-h-[680px] w-full overflow-hidden bg-navy">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          {/* cinematic grade: blue wash + focused darkness behind copy */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(1,12,98,0.55) 0%, rgba(1,12,98,0.10) 38%, rgba(1,12,98,0.86) 100%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "linear-gradient(115deg, rgba(1,12,98,0.72) 0%, rgba(1,12,98,0.10) 65%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ boxShadow: "inset 0 0 220px 60px rgba(1,12,98,0.6)" }}
          />
          <div aria-hidden className="grid-faint absolute inset-0 opacity-60" />

          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-6 lg:px-12">
            <div className="h-[56%] min-h-[180px]" />
            <div>
              <Reveal>
                <p className="eyebrow text-cyan">
                  Digital Solutions <span className="mx-2 text-cyan/50">•</span> Technology
                  <span className="mx-2 text-cyan/50">•</span> Growth
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="display mt-8 max-w-5xl text-[3rem] text-white sm:text-7xl lg:text-[6.6rem]">
                  Build Better.
                  <br />
                  Move Smarter.
                  <br />
                  Grow Further.
                </h1>
              </Reveal>
              <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
                <Reveal delay={170} className="lg:col-span-6">
                  <p className="max-w-xl text-base leading-relaxed text-white/70">
                    Nexen Strategy helps established businesses and growing organisations design,
                    build and scale what comes next, across brand, digital platforms, software, AI,
                    marketing and media.
                  </p>
                </Reveal>
                <Reveal delay={240} className="lg:col-span-6 lg:justify-self-end">
                  <div className="flex flex-wrap gap-4">
                    <a href="#services" className="btn-primary group">
                      Explore Our Services
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link to="/contact" className="btn-ghost-light">
                      Start a Project
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="flex flex-1 items-end justify-center pb-8">
              <span className="flex flex-col items-center gap-2 text-white/45">
                <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </span>
            </div>
          </div>
        </section>

        {/* 02 INTRODUCTION — editorial three-column with oversized ghost type */}
        <section className="relative overflow-hidden">
          <span
            aria-hidden
            className="ghost-type absolute -left-6 top-10 text-[7rem] text-navy/[0.045] sm:text-[13rem] lg:text-[19rem]"
          >
            NEXEN
          </span>
          <div className="relative mx-auto max-w-[1400px] px-6 pt-24 lg:px-12 lg:pt-40">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-2">
                <p className="eyebrow text-azure">Introduction</p>
                <span aria-hidden className="mt-6 block h-px w-14 bg-gradient-to-r from-azure to-cyan" />
              </Reveal>
              <Reveal delay={80} className="lg:col-span-6">
                <h2 className="display text-[2.1rem] text-navy sm:text-5xl lg:text-[3.5rem]">
                  A single partner for everything digital your business depends on.
                </h2>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-4 lg:pt-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Businesses rarely struggle because of one missing capability. They struggle
                  because brand, technology, operations and marketing are being handled separately,
                  by people who never speak to each other.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Nexen Strategy brings those disciplines into one connected team. One plan, one
                  standard, one point of accountability.
                </p>
              </Reveal>
            </div>
          </div>

          {/* layered visual composition breaking the container */}
          <div className="relative mt-16 lg:mt-24">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                <Reveal className="lg:col-span-8">
                  <div className="overflow-hidden bg-navy">
                    <img
                      src={abstractIntro}
                      alt="Abstract visual representing connected digital systems"
                      width={1600}
                      height={1200}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover lg:aspect-[16/9]"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className="lg:col-span-4 lg:-mt-20">
                  <div className="overflow-hidden bg-navy shadow-[0_40px_90px_-50px_rgba(1,12,98,0.6)]">
                    <img
                      src={aboutImg}
                      alt="Nexen Strategy studio environment"
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <div className="mt-10 grid grid-cols-3 gap-6">
                    {[
                      { k: "6", v: "Connected disciplines" },
                      { k: "10+", v: "Industries served" },
                      { k: "UK", v: "Based and accountable" },
                    ].map((s) => (
                      <div key={s.v}>
                        <p className="display text-3xl text-navy lg:text-4xl">{s.k}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.v}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 03 SERVICES */}
        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-44">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Reveal>
                <p className="eyebrow text-azure">What we do</p>
                <h2 className="display mt-6 max-w-2xl text-[2.2rem] text-navy sm:text-5xl lg:text-[3.5rem]">
                  Six disciplines. One standard.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                  Engage one capability or the whole team. The thinking, the craft and the
                  accountability stay the same.
                </p>
              </Reveal>
            </div>
            <ServiceShowcase />
          </div>
        </section>

        {/* 04 WHY NEXEN */}
        <section className="relative overflow-hidden bg-navy">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full opacity-40 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <span
            aria-hidden
            className="ghost-type absolute -right-10 bottom-4 text-[7rem] text-white/[0.04] sm:text-[12rem] lg:text-[16rem]"
          >
            WHY NEXEN
          </span>
          <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-44">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-cyan">Why Nexen</p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display mt-7 text-[2.2rem] text-white sm:text-5xl lg:text-[3.6rem]">
                    More Than a Digital Agency. A Partner for What&apos;s Next.
                  </h2>
                </Reveal>
                <Reveal delay={150}>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-white/65">
                    We are chosen by organisations that need judgement as much as delivery. The work
                    is grounded in your commercial reality and built to keep earning after launch.
                  </p>
                </Reveal>
                <Reveal delay={220}>
                  <div className="mt-12 hidden overflow-hidden lg:block">
                    <img
                      src={work3}
                      alt="Detail from a Nexen Strategy engagement"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover opacity-85"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-white/12">
                  {principles.map((p, i) => (
                    <Reveal key={p.title} delay={i * 60}>
                      <div
                        onMouseEnter={() => setActivePrinciple(i)}
                        onFocus={() => setActivePrinciple(i)}
                        tabIndex={0}
                        className="group border-b border-white/12 py-8 outline-none"
                      >
                        <div className="flex items-center justify-between gap-6">
                          <h3
                            className={cn(
                              "text-2xl font-semibold tracking-tight transition-colors duration-500 lg:text-[2.1rem]",
                              activePrinciple === i ? "text-white" : "text-white/40",
                            )}
                          >
                            {p.title}
                          </h3>
                          <span
                            className={cn(
                              "h-px w-12 shrink-0 transition-all duration-500",
                              activePrinciple === i ? "w-20 bg-cyan" : "bg-white/20",
                            )}
                          />
                        </div>
                        <div
                          className={cn(
                            "grid transition-all duration-500",
                            activePrinciple === i
                              ? "mt-4 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <p className="overflow-hidden text-base leading-relaxed text-white/60">
                            {p.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 OUR APPROACH */}
        <section className="relative overflow-hidden border-b border-border">
          <div aria-hidden className="grid-faint-dark absolute inset-0" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Reveal>
                <p className="eyebrow text-azure">Our approach</p>
                <h2 className="display mt-6 max-w-2xl text-[2.2rem] text-navy sm:text-5xl lg:text-[3.4rem]">
                  A process that keeps momentum without cutting corners.
                </h2>
              </Reveal>
            </div>
            <ProcessTimeline />
          </div>
        </section>

        {/* 06 INDUSTRIES */}
        <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-azure">Industries</p>
              <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.8rem]">
                Sectors we know well.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <IndustryShowcase />
            </div>
          </div>
        </section>

        {/* 07 PORTFOLIO PREVIEW */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <p className="eyebrow text-azure">Selected work</p>
                <h2 className="display mt-6 text-[2.2rem] text-navy sm:text-5xl lg:text-[3.4rem]">
                  Work made to do something.
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-navy"
                >
                  View full portfolio
                  <ArrowRight className="h-4 w-4 text-amber transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            {/* Case study 01 — full bleed */}
            <Reveal className="mt-20">
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden bg-navy">
                  <img
                    src={work1}
                    alt="Halden & Co. commerce experience case study"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05] lg:aspect-[21/9]"
                  />
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="eyebrow text-muted-foreground">Retail &amp; E-commerce</p>
                    <p className="mt-2 text-sm text-azure">Web &amp; Apps</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="display text-3xl text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-5xl">
                      Halden &amp; Co.
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                      A considered commerce experience rebuilt around merchandising and repeat
                      purchase.
                    </p>
                  </div>
                  <div className="flex items-start lg:col-span-2 lg:justify-end">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                      View Case Study
                      <ArrowUpRight className="h-5 w-5 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Case studies 02 / 03 — asymmetric */}
            <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-7">
                <Link to="/portfolio" className="group block">
                  <div className="overflow-hidden bg-navy">
                    <img
                      src={work2}
                      alt="Northgate Group identity system case study"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">
                    Professional Services — Brand &amp; Design
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                    Northgate Group
                  </h3>
                </Link>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5 lg:mt-28">
                <Link to="/portfolio" className="group block">
                  <div className="overflow-hidden bg-navy">
                    <img
                      src={work3}
                      alt="Meridian Operations automation case study"
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">
                    Industrial — AI &amp; Automation
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                    Meridian Operations
                  </h3>
                </Link>
              </Reveal>
            </div>

            {/* Case study 04 */}
            <Reveal className="mt-24">
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden bg-navy">
                  <img
                    src={work4}
                    alt="Kestrel brand film production still"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05] lg:aspect-[21/9]"
                  />
                </div>
                <p className="eyebrow mt-6 text-muted-foreground">Energy &amp; Marine — Media</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                  Kestrel Brand Film
                </h3>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 08 PARTNERS */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Partners</p>
                <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                  Technology and expertise, connected.
                </h2>
              </Reveal>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3">
                  {partners.slice(0, 9).map((p, i) => (
                    <Reveal key={p} delay={i * 40}>
                      <span className="block text-base font-semibold tracking-tight text-navy/30 transition-colors duration-500 hover:text-navy lg:text-lg">
                        {p}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09 CTA */}
        <CtaSection />
      </main>
      {/* 10 FOOTER */}
      <Footer />
    </>
  );
}
