import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { services, industries, partners } from "@/lib/site-data";
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

const approach = [
  { no: "01", name: "Discover", text: "We learn the business, the market and the constraints before proposing anything." },
  { no: "02", name: "Define", text: "Objectives, scope and success measures agreed in plain language." },
  { no: "03", name: "Create", text: "Design, engineering and production run together against one plan." },
  { no: "04", name: "Launch", text: "Tested, measured and released with the team ready to run it." },
  { no: "05", name: "Grow", text: "We stay involved, refining against real performance data." },
];

function Home() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [hoverService, setHoverService] = useState<string | null>(null);

  return (
    <>
      <Header overHero />
      <main>
        {/* 01 HERO */}
        <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-navy">
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
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.86) 0%, rgba(1,12,98,0.62) 45%, rgba(1,12,98,0.92) 100%)",
            }}
          />
          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-12 lg:pb-32">
            <Reveal>
              <p className="eyebrow text-cyan">UK Digital Solutions Partner</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display mt-8 max-w-5xl text-[2.9rem] text-white sm:text-6xl lg:text-[6rem]">
                Build Better.
                <br />
                Move Smarter.
                <br />
                Grow Further.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/75">
                Nexen Strategy helps established businesses and growing organisations design,
                build and scale what comes next, across brand, digital platforms, software, AI,
                marketing and media.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-11 flex flex-wrap gap-4">
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
          <div className="absolute inset-x-0 bottom-7 flex justify-center">
            <span className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
          </div>
        </section>

        {/* 02 INTRODUCTION */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-azure">Introduction</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-7 text-[2.2rem] text-navy sm:text-5xl lg:text-[3.6rem]">
                  A single partner for everything digital your business depends on.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-10 h-px w-full bg-gradient-to-r from-azure/70 via-cyan/40 to-transparent" />
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:pt-16">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Businesses rarely struggle because of one missing capability. They struggle
                  because brand, technology, operations and marketing are being handled separately,
                  by people who never speak to each other.
                </p>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                  Nexen Strategy brings those disciplines into one connected team. We define the
                  direction, design the experience, build the technology and drive the growth, with
                  one plan and one point of accountability.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
                  {[
                    { k: "6", v: "Connected disciplines" },
                    { k: "10+", v: "Industries served" },
                    { k: "UK", v: "Based and accountable" },
                  ].map((s) => (
                    <div key={s.v}>
                      <p className="display text-4xl text-navy">{s.k}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 SERVICES */}
        <section id="services" className="scroll-mt-24 border-t border-border bg-white">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Reveal>
                <p className="eyebrow text-azure">What we do</p>
                <h2 className="display mt-6 max-w-2xl text-[2.2rem] text-navy sm:text-5xl lg:text-[3.6rem]">
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

            <div className="mt-16 border-t border-border">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 50}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onMouseEnter={() => setHoverService(s.slug)}
                    onMouseLeave={() => setHoverService(null)}
                    className="group relative block border-b border-border py-8 transition-[padding] duration-500 hover:pl-4 lg:py-10"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan to-azure transition-transform duration-700",
                        hoverService === s.slug ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                    <div className="grid items-baseline gap-3 lg:grid-cols-12 lg:gap-8">
                      <span className="font-mono text-xs text-muted-foreground lg:col-span-1">
                        {s.no}
                      </span>
                      <h3 className="display text-3xl text-navy transition-colors duration-500 group-hover:text-azure lg:col-span-5 lg:text-[2.6rem]">
                        {s.title}
                      </h3>
                      <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:col-span-5">
                        {s.short}
                      </p>
                      <span className="flex items-center gap-2 text-sm font-semibold text-navy lg:col-span-1 lg:justify-end">
                        <span className="lg:sr-only">Explore</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 WHY NEXEN */}
        <section className="bg-navy">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-cyan">Why Nexen</p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display mt-7 text-[2.1rem] text-white sm:text-5xl">
                    More Than a Digital Agency. A Partner for What&apos;s Next.
                  </h2>
                </Reveal>
                <Reveal delay={150}>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-white/65">
                    We are chosen by organisations that need judgement as much as delivery. The work
                    is grounded in your commercial reality and built to keep earning after launch.
                  </p>
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
                        className="group border-b border-white/12 py-7 outline-none"
                      >
                        <div className="flex items-center justify-between gap-6">
                          <h3
                            className={cn(
                              "text-2xl font-semibold tracking-tight transition-colors duration-500 lg:text-[2rem]",
                              activePrinciple === i ? "text-white" : "text-white/45",
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
                            "grid transition-all duration-600",
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
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow text-azure">Our approach</p>
              <h2 className="display mt-6 max-w-2xl text-[2.2rem] text-navy sm:text-5xl">
                A process that keeps momentum without cutting corners.
              </h2>
            </Reveal>

            <div className="relative mt-20">
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-px w-full bg-border lg:block"
              />
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-px w-2/5 bg-gradient-to-r from-cyan to-azure lg:block"
              />
              <ol className="grid gap-12 lg:grid-cols-5 lg:gap-8">
                {approach.map((a, i) => (
                  <Reveal key={a.no} delay={i * 90} as="li" className="lg:pt-10">
                    <div className="group relative">
                      <span
                        aria-hidden
                        className="absolute -top-[42px] left-0 hidden h-2 w-2 rounded-full bg-azure opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:block"
                      />
                      <p className="font-mono text-xs text-azure">{a.no}</p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy">
                        {a.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {a.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 06 INDUSTRIES */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <Reveal>
            <p className="eyebrow text-azure">Industries</p>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3 lg:gap-x-12">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 40}>
                <span className="display cursor-default text-[1.7rem] text-navy/25 transition-colors duration-500 hover:text-navy sm:text-4xl lg:text-[3.2rem]">
                  {ind}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 07 PORTFOLIO PREVIEW */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <p className="eyebrow text-azure">Selected work</p>
                <h2 className="display mt-6 text-[2.2rem] text-navy sm:text-5xl">
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

            <Reveal className="mt-16">
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden bg-navy">
                  <img
                    src={work1}
                    alt="Halden & Co. commerce experience case study"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05] lg:aspect-[16/7]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-muted-foreground">Retail & E-commerce — Web & Apps</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-4xl">
                      Halden &amp; Co.
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-3 h-6 w-6 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-azure" />
                </div>
              </Link>
            </Reveal>

            <div className="mt-20 grid gap-14 lg:grid-cols-2">
              {[
                {
                  img: work2,
                  meta: "Professional Services — Brand & Design",
                  title: "Northgate Group",
                },
                {
                  img: work3,
                  meta: "Industrial — AI & Automation",
                  title: "Meridian Operations",
                },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 100} className={i === 1 ? "lg:mt-20" : ""}>
                  <Link to="/portfolio" className="group block">
                    <div className="overflow-hidden bg-navy">
                      <img
                        src={p.img}
                        alt={`${p.title} case study`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <p className="eyebrow mt-6 text-muted-foreground">{p.meta}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1">
                      {p.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>

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
                <p className="eyebrow mt-6 text-muted-foreground">Energy & Marine — Media</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                  Kestrel Brand Film
                </h3>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 08 PARTNERS */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal>
              <p className="eyebrow text-center text-muted-foreground">
                Trusted by teams across the UK
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {partners.slice(0, 10).map((p, i) => (
                <Reveal key={p} delay={i * 40}>
                  <span className="block text-center text-base font-semibold tracking-tight text-navy/35 transition-colors duration-500 hover:text-navy lg:text-lg">
                    {p}
                  </span>
                </Reveal>
              ))}
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
