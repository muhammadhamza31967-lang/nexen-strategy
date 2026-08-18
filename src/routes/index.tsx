import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { WhyNexen } from "@/components/site/WhyNexen";
import { Reveal } from "@/components/site/Reveal";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { IndustryShowcase } from "@/components/site/IndustryShowcase";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { partners } from "@/lib/site-data";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
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


function Home() {

  return (
    <>
      <Header overHero />
      <main>
        {/* 01 HERO */}
        <section className="relative flex min-h-[88svh] w-full flex-col overflow-hidden bg-navy lg:min-h-[83svh]">
          <video
            className="absolute inset-0 h-full w-full object-cover [object-position:center]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          {/* cinematic grade: blue wash + focused darkness behind copy */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.45) 0%, rgba(1,12,98,0.08) 38%, rgba(1,12,98,0.78) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "linear-gradient(115deg, rgba(1,12,98,0.55) 0%, rgba(1,12,98,0.06) 65%)" }}
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
                    Nexen Strategy helps established businesses and growing organisations design, build and scale what
                    comes next, across brand, digital platforms, software, AI, marketing and media.
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
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
              <Reveal delay={80} className="lg:col-span-7">
                <p className="eyebrow text-azure">Introduction</p>
                <span aria-hidden className="mt-4 block h-px w-14 bg-gradient-to-r from-azure to-cyan" />
                <h2 className="display mt-6 text-[2.3rem] text-navy sm:text-5xl lg:text-[4.1rem]">
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
                      <p className="display text-[1.7rem] text-navy sm:text-[2.3rem] lg:text-[3rem]">{s.k}</p>
                      <span aria-hidden className="mt-4 block h-px w-10 bg-gradient-to-r from-azure to-cyan" />
                      <p className="eyebrow mt-4 text-[0.62rem] text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:pt-22">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Businesses rarely struggle because of one missing capability. They struggle because brand, technology,
                  operations and marketing are being handled separately, by people who never speak to each other.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Nexen Strategy brings those disciplines into one connected team. One plan, one standard, one point of
                  accountability.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 SERVICES */}
        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
              <Reveal className="lg:col-span-7">
                <p className="eyebrow text-azure">Services</p>
                <h2 className="display mt-6 text-[2.2rem] leading-[1.05] text-navy sm:text-5xl lg:text-[3.75rem]">
                  Everything You Need to Move Digital Forward.
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-4 lg:col-start-9 lg:pt-20">
                <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                  Digital transformation doesn&rsquo;t happen through one service. It happens when technology,
                  creativity and business objectives work together.
                </p>
                <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  At Nexen, we bring these capabilities together under one team.
                </p>
              </Reveal>
            </div>
            <ServiceShowcase />
          </div>
        </section>

        {/* 04 WHY NEXEN */}
        <WhyNexen />

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
              <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.8rem]">Sectors we know well.</h2>
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
                <Link to="/portfolio" className="group inline-flex items-center gap-3 text-sm font-semibold text-navy">
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
                      A considered commerce experience rebuilt around merchandising and repeat purchase.
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
                  <p className="eyebrow mt-6 text-muted-foreground">Professional Services — Brand &amp; Design</p>
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
                  <p className="eyebrow mt-6 text-muted-foreground">Industrial — AI &amp; Automation</p>
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
