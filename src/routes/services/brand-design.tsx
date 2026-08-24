import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import brandHero from "@/assets/brand-hero.jpg";
import brandSignature from "@/assets/brand-signature.jpg";
import brandTouchpoints from "@/assets/brand-touchpoints.jpg";
import work1 from "@/assets/work-1.jpg";
import work3 from "@/assets/work-3.jpg";
import svcMedia from "@/assets/svc-media.jpg";

export const Route = createFileRoute("/services/brand-design")({
  head: () => ({
    meta: [
      { title: "Brand & Design — Nexen Strategy" },
      {
        name: "description",
        content:
          "Strategic brand identities that connect strategy, design and business goals — brand strategy, visual identity, brand applications and guidelines built to grow.",
      },
      { property: "og:title", content: "Brands Built With Purpose. Designed to Be Remembered. — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "We build distinctive brand identities that connect strategy, design and business goals — creating brands that are clear, credible and built to grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandDesignPage,
});

const processSteps = [
  { no: "01", name: "Discover", text: "Understand the business, audience, market and opportunity." },
  { no: "02", name: "Define", text: "Establish positioning, personality, messaging and visual direction." },
  { no: "03", name: "Design", text: "Develop the identity system, visual language and brand assets." },
  { no: "04", name: "Deliver", text: "Create a consistent system ready to work across every touchpoint." },
];

const capabilityGroups = [
  {
    name: "Brand Strategy",
    items: ["Brand positioning", "Brand architecture", "Audience definition", "Brand personality"],
  },
  {
    name: "Visual Identity",
    items: ["Logo systems", "Typography", "Colour systems", "Visual language"],
  },
  {
    name: "Brand Applications",
    items: ["Digital interfaces", "Social media", "Marketing collateral", "Presentations"],
  },
  {
    name: "Brand Guidelines",
    items: ["Brand standards", "Usage guidelines", "Visual consistency", "Brand documentation"],
  },
];

const outcomes = [
  { no: "01", name: "Recognition", text: "Build a brand people remember." },
  { no: "02", name: "Credibility", text: "Create a stronger sense of trust." },
  { no: "03", name: "Consistency", text: "Make every touchpoint feel connected." },
];

const selectedWork = [
  {
    name: "Building a Distinctive Brand Identity",
    type: "Brand Strategy · Visual Identity · Art Direction",
    description:
      "A cohesive visual identity created to give a growing business a stronger presence, clearer positioning and a consistent visual language across its customer touchpoints.",
    image: work1,
  },
  {
    name: "Creating a Brand System That Connects Every Touchpoint",
    type: "Brand Identity · Graphic Design · Brand Guidelines",
    description:
      "A refined brand system designed to create consistency across digital platforms, marketing materials and customer experiences.",
    image: work3,
  },
  {
    name: "Designing a Brand Experience With Purpose",
    type: "Brand Strategy · Visual Design · Marketing Collateral",
    description:
      "A complete visual design approach developed to bring clarity, consistency and personality to the brand across multiple communication channels.",
    image: svcMedia,
  },
];

function BrandDesignPage() {
  const [openGroup, setOpenGroup] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes bd-drift{0%{transform:scale(1.06) translateX(-1.2%)}100%{transform:scale(1.06) translateX(1.2%)}}
        .bd-kenburns{animation:bd-drift 26s ease-in-out infinite alternate;will-change:transform}
        @keyframes bd-dot{0%{left:0;opacity:0}8%{opacity:1}92%{opacity:1}100%{left:100%;opacity:0}}
        .bd-process-dot{animation:bd-dot 7s cubic-bezier(.45,0,.25,1) infinite}
        @media (prefers-reduced-motion: reduce){.bd-kenburns,.bd-process-dot{animation:none !important}}
      `}</style>

      <Header />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-azure">Brand &amp; Design</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display mt-7 text-[2.7rem] text-navy sm:text-6xl lg:text-[4.4rem]">
                  Brands Built With Purpose. Designed to Be Remembered.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  We build distinctive brand identities that connect strategy, design and business
                  goals — creating brands that are clear, credible and built to grow.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-11 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary group">
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/portfolio" className="btn-ghost-dark group">
                    Explore Our Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180} className="lg:col-span-6">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -top-5 -right-5 hidden h-full w-full border border-navy/15 lg:block"
                />
                <div className="relative overflow-hidden bg-secondary/40">
                  <img
                    src={brandHero}
                    alt="Brand identity system — logo card, typography specimen, colour palette and stationery"
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between gap-6">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Identity · Typography · Colour · Application
                  </p>
                  <span aria-hidden className="h-px w-16 bg-gradient-to-r from-amber to-ember" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ INTRO / BRAND WITH PURPOSE ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow text-azure">Brand With Purpose</p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="display mt-7 max-w-2xl text-[2.2rem] text-navy sm:text-5xl lg:text-[3.6rem]">
                    A Brand Is More Than What People See.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:pt-16">
                <Reveal delay={140}>
                  <span aria-hidden className="mb-10 block h-px w-full bg-border" />
                  <p className="text-xl leading-relaxed text-navy/85">
                    Your brand is how people recognise you, understand you and decide whether to
                    trust you.
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    We combine strategic thinking with purposeful design to create identities that
                    communicate clearly, differentiate your business and remain consistent across
                    every touchpoint.
                  </p>
                  <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Strategy-led · Design-driven · Business-focused
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow text-azure">Our Brand &amp; Design Approach</p>
              <h2 className="display mt-6 max-w-3xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                From Strategy to Identity.
              </h2>
            </Reveal>

            <div className="relative mt-16 lg:mt-20">
              {/* connecting line with travelling indicator (desktop) */}
              <div aria-hidden className="absolute top-0 right-0 left-0 hidden h-px bg-navy/10 lg:block">
                <span className="bd-process-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber to-ember" />
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {processSteps.map((s, i) => (
                  <Reveal key={s.no} delay={i * 90}>
                    <div className="group border-t border-navy/20 pt-8 transition-colors duration-500 hover:border-amber lg:border-t-0 lg:pt-10">
                      <p className="font-mono text-[0.72rem] tracking-[0.18em] text-azure">{s.no}</p>
                      <h3 className="display mt-5 text-2xl text-navy transition-colors duration-500 group-hover:text-azure lg:text-[1.7rem]">
                        {s.name}
                      </h3>
                      <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT WE DELIVER ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-azure">What We Deliver</p>
                  <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.9rem]">
                    Everything Your Brand Needs to Show Up With Clarity.
                  </h2>
                  <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
                    Engage a single capability or the full discipline. Every engagement is built on
                    the same strategic foundation.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-border">
                  {capabilityGroups.map((g, i) => {
                    const open = openGroup === i;
                    return (
                      <Reveal key={g.name} delay={i * 60}>
                        <div className="border-b border-border">
                          <button
                            type="button"
                            onClick={() => setOpenGroup(open ? null : i)}
                            aria-expanded={open}
                            className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                          >
                            <span className="flex items-baseline gap-5">
                              <span className="font-mono text-[0.72rem] tracking-[0.18em] text-muted-foreground">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={cn(
                                  "display text-2xl text-navy transition-colors duration-400 group-hover:text-azure lg:text-[2rem]",
                                  open && "text-azure",
                                )}
                              >
                                {g.name}
                              </span>
                            </span>
                            <Plus
                              className={cn(
                                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500",
                                open && "rotate-45 text-amber",
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="overflow-hidden">
                              <ul className="grid gap-x-10 gap-y-3 pb-8 pl-9 sm:grid-cols-2">
                                {g.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-3 text-[0.95rem] text-muted-foreground"
                                  >
                                    <span aria-hidden className="h-px w-5 bg-gradient-to-r from-amber to-ember" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
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

        {/* ============ SIGNATURE VISUAL ============ */}
        <section className="relative overflow-hidden bg-navy">
          <div className="bd-kenburns">
            <img
              src={brandSignature}
              alt="Complete brand identity system across packaging, stationery, guidelines and digital"
              loading="lazy"
              width={1920}
              height={1088}
              className="h-[52vh] min-h-[320px] w-full object-cover opacity-90 lg:h-[78vh]"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.35) 0%, transparent 35%, transparent 70%, rgba(1,12,98,0.55) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-6 pb-8 lg:px-12 lg:pb-12">
              <Reveal>
                <p className="eyebrow text-cyan/80">Identity in application</p>
                <p className="display mt-3 max-w-md text-xl text-white lg:text-2xl">
                  One system — packaging, print, guidelines and digital, working as one.
                </p>
              </Reveal>
              <span aria-hidden className="hidden h-px w-24 bg-white/25 lg:block" />
            </div>
          </div>
        </section>

        {/* ============ WHY BRAND & DESIGN MATTERS ============ */}
        <section className="relative overflow-hidden border-t border-white/10 bg-navy">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow text-cyan">Why Brand &amp; Design Matters</p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="display mt-7 text-[2.2rem] text-white sm:text-5xl lg:text-[3.4rem]">
                    Good Design Gets Attention. Strategic Design Builds Trust.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:pt-20">
                <Reveal delay={150}>
                  <p className="max-w-md text-lg leading-relaxed text-white/65">
                    A strong identity gives businesses more than a polished appearance. It creates
                    recognition, builds credibility and gives every customer interaction a
                    consistent sense of who you are.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 grid gap-10 border-t border-white/12 pt-12 sm:grid-cols-3 lg:mt-24 lg:gap-16 lg:pt-16">
              {outcomes.map((o, i) => (
                <Reveal key={o.no} delay={i * 100}>
                  <div>
                    <p className="font-mono text-[0.72rem] tracking-[0.18em] text-cyan/70">{o.no}</p>
                    <h3 className="display mt-5 text-2xl text-white lg:text-[1.7rem]">{o.name}</h3>
                    <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-white/60">
                      {o.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BRAND SYSTEM / TOUCHPOINTS ============ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-azure">The Brand System</p>
                  <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.9rem]">
                    One Identity. Many Touchpoints.
                  </h2>
                  <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
                    A brand only works when it works everywhere. We design identity systems that
                    stay consistent — from your website and product interface to print, social and
                    every presentation in between.
                  </p>
                  <p className="mt-9 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Website · Mobile · Business cards · Social · Presentations · Packaging
                  </p>
                </Reveal>
              </div>
              <Reveal delay={140} className="lg:col-span-7">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-5 -left-5 hidden h-full w-full border border-navy/15 lg:block"
                  />
                  <div className="relative overflow-hidden bg-white shadow-[0_40px_90px_-40px_rgba(1,12,98,0.35)]">
                    <img
                      src={brandTouchpoints}
                      alt="One brand identity applied across website, mobile, business cards, presentation and packaging"
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SELECTED WORK ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <Reveal className="lg:col-span-8">
                <p className="eyebrow text-azure">Selected Brand Work</p>
                <h2 className="display mt-6 max-w-2xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                  Brands We've Helped Move Forward.
                </h2>
              </Reveal>
              <Reveal delay={110} className="lg:col-span-4 lg:text-right">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  View All Brand &amp; Design Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
              {selectedWork.map((w, i) => {
                const flip = i % 2 === 1;
                return (
                  <div
                    key={w.name}
                    className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                  >
                    <Reveal className={cn("lg:col-span-7", flip && "lg:order-2")}>
                      <Link to="/portfolio" className="group block overflow-hidden bg-secondary/40">
                        <img
                          src={w.image}
                          alt={w.name}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                        />
                      </Link>
                    </Reveal>
                    <Reveal delay={120} className={cn("lg:col-span-5", flip && "lg:order-1")}>
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-azure">
                        {w.type}
                      </p>
                      <h3 className="display mt-4 text-[1.7rem] leading-tight text-navy lg:text-[2rem]">
                        {w.name}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        {w.description}
                      </p>
                      <Link
                        to="/portfolio"
                        className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                      >
                        View Case Study
                        <ArrowUpRight className="h-4 w-4 text-amber transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                      <span aria-hidden className="mt-4 block h-px w-20 bg-gradient-to-r from-amber to-ember" />
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIAL ============ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1000px] px-6 py-24 text-center lg:py-36">
            <Reveal>
              <span aria-hidden className="mx-auto block h-px w-16 bg-gradient-to-r from-amber to-ember" />
              <blockquote className="display mt-12 text-[1.6rem] leading-snug text-navy sm:text-[2.1rem] lg:text-[2.5rem]">
                "Nexen gave us far more than a new look — they gave us a brand system our whole
                business could stand behind, and the confidence to show up the same way everywhere."
              </blockquote>
              <p className="mt-10 text-sm font-semibold tracking-wide text-navy">Halden &amp; Co.</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                Managing Director
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative overflow-hidden bg-navy">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] bottom-[-40%] h-[480px] w-[480px] rounded-full opacity-30 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow text-cyan">Ready to Build Your Brand?</p>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="display mt-7 text-[2.4rem] text-white sm:text-5xl lg:text-[3.8rem]">
                  Let's Build a Brand People Remember.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                  Whether you're building a new identity or evolving an existing one, we'll bring
                  strategy and design together to create something built for where your business is
                  going.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <Link to="/contact" className="btn-primary group mt-11">
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
