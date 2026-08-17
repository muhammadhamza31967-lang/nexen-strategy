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
        <section className="relative flex min-h-[88svh] w-full flex-col overflow-hidden bg-navy lg:min-h-[83svh]">
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

          <div className="relative mx-auto flex min-h-[88svh] w-full max-w-[1400px] flex-1 flex-col px-6 pb-8 lg:min-h-[83svh] lg:px-12 lg:pb-8">
            <div className="h-[19vh] min-h-[110px] shrink-0 lg:h-[21vh]" />
            <div>
              <Reveal>
                <p className="eyebrow text-cyan">
                  Digital Solutions <span className="mx-2 text-cyan/50">•</span> Technology
                  <span className="mx-2 text-cyan/50">•</span> Growth
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="display mt-6 max-w-5xl text-[2.85rem] text-white sm:text-6xl lg:text-[6rem]">
                  Build Better.
                  <br />
                  Move Smarter.
                  <br />
                  Grow Further.
                </h1>
              </Reveal>
              <div className="mt-8 grid gap-7 lg:grid-cols-12 lg:items-end">
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
            <div className="flex flex-1 items-end justify-center pt-12 pb-1 lg:pt-14">
              <span className="flex flex-col items-center gap-2 text-white/45">
                <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </span>
            </div>
          </div>
        </section>

        {/* 02 INTRODUCTION — typography-led editorial section */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/[0.05] to-transparent"
          />
          <span
            aria-hidden
            className="ghost-type absolute -left-6 top-24 text-[7rem] text-navy/[0.025] sm:text-[13rem] lg:text-[18rem]"
          >
            NEXEN
          </span>
          <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20 lg:px-12 lg:pt-28 lg:pb-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-2">
                <p className="eyebrow text-azure">Introduction</p>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
                />
              </Reveal>
              <Reveal delay={80} className="lg:col-span-6">
                <h2 className="display text-[2.3rem] text-navy sm:text-5xl lg:text-[4.1rem]">
                  A single partner for everything digital your business depends on.
                </h2>

                {/* editorial statistics — inside left column */}
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 lg:mt-16 lg:gap-8">
                  {[
                    { k: "6", v: "Connected disciplines" },
                    { k: "10+", v: "Industries served" },
                    { k: "UK", v: "Based and accountable" },
                  ].map((s) => (
                    <div key={s.v}>
                      <p className="display text-[1.9rem] text-navy sm:text-[2.6rem] lg:text-[3.4rem]">
                        {s.k}
                      </p>
                      <span
                        aria-hidden
                        className="mt-4 block h-px w-10 bg-gradient-to-r from-azure to-cyan"
                      />
                      <p className="eyebrow mt-4 text-[0.62rem] text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-4 lg:pt-4">
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
        </section>

        {/* 03 SERVICES */}
        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
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
          <div aria-hidden className="grid-faint absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-52 -top-32 h-[680px] w-[680px] rounded-full opacity-35 blur-[170px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-[0.13] blur-[180px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          {/* fine technical rules */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
          />
          <span
            aria-hidden
            className="ghost-type absolute right-6 top-[34%] hidden text-right text-white/[0.018] lg:block lg:text-[9rem]"
          >
            ONE
            <br />
            CONNECTED
            <br />
            TEAM
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-56">
            {/* Editorial masthead */}
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-3">
                <p className="eyebrow text-cyan">Why Nexen</p>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-16 bg-gradient-to-r from-cyan to-transparent"
                />
              </Reveal>
              <Reveal delay={90} className="lg:col-span-9">
                <h2 className="display text-[2.6rem] text-white sm:text-6xl lg:text-[5.6rem]">
                  More Than a Digital Agency. A Partner for What&apos;s Next.
                </h2>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-3" />
              <Reveal delay={140} className="lg:col-span-5">
                <p className="text-lg leading-relaxed text-white/65 lg:text-xl">
                  We are chosen by organisations that need judgement as much as delivery. The work
                  is grounded in your commercial reality and built to keep earning after launch.
                </p>
              </Reveal>
            </div>

            {/* Interactive principles — offset to the right */}
            <div className="mt-24 grid lg:mt-40 lg:grid-cols-12">
              <div className="hidden lg:col-span-3 lg:block" />
              <div
                className="lg:col-span-9"
                onMouseLeave={() => setActivePrinciple(0)}
              >
                <div className="border-t border-white/10">
                  {principles.map((p, i) => {
                    const isActive = activePrinciple === i;
                    return (
                      <Reveal key={p.title} delay={i * 60}>
                        <div
                          onMouseEnter={() => setActivePrinciple(i)}
                          onFocus={() => setActivePrinciple(i)}
                          tabIndex={0}
                          className="group relative border-b border-white/10 py-9 outline-none lg:py-12"
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan via-azure to-transparent transition-transform duration-700",
                              isActive ? "scale-x-100" : "scale-x-0",
                            )}
                          />
                          <div className="flex items-start gap-6 lg:gap-10">
                            <span
                              className={cn(
                                "mt-2 font-mono text-xs transition-colors duration-500",
                                isActive ? "text-cyan" : "text-white/30",
                              )}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0 flex-1">
                              <h3
                                className={cn(
                                  "display text-[1.8rem] transition-all duration-500 sm:text-4xl lg:text-[3rem]",
                                  isActive
                                    ? "translate-x-1 text-white"
                                    : "text-white/35 group-hover:text-white/55",
                                )}
                              >
                                {p.title}
                              </h3>
                              <div
                                className={cn(
                                  "grid transition-all duration-500",
                                  isActive
                                    ? "mt-5 grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0",
                                )}
                              >
                                <p className="max-w-xl overflow-hidden text-base leading-relaxed text-white/60">
                                  {p.text}
                                </p>
                              </div>
                            </div>
                            <ArrowUpRight
                              className={cn(
                                "mt-2 h-6 w-6 shrink-0 transition-all duration-500",
                                isActive
                                  ? "-translate-y-1 translate-x-1 text-cyan"
                                  : "text-white/25",
                              )}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
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
