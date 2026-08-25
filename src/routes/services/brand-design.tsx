import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import brandHero from "@/assets/brand-hero.jpg";
import brandSignature from "@/assets/brand-signature.jpg";
import brandTouchpoints from "@/assets/brand-touchpoints.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroParagraph =
  "Your brand is more than a logo. We create distinctive visual identities and digital experiences that help businesses communicate with clarity, consistency and confidence.";

const introParagraphs = [
  "A strong brand creates recognition. A strong digital experience creates connection.",
  "We bring both together to help businesses establish a visual presence that reflects who they are, what they offer and where they want to go.",
];

const serviceAreas = [
  {
    name: "Brand Identity",
    text: "Develop a clear and distinctive visual identity that gives your business a recognisable presence across every channel.",
  },
  {
    name: "Logo Design",
    text: "Create memorable logos that provide a strong visual foundation for your brand.",
  },
  {
    name: "Visual Identity",
    text: "Define colours, typography, imagery and visual elements that create consistency across your communications.",
  },
  {
    name: "Graphic Design",
    text: "Create professional visual assets for digital platforms, marketing campaigns, print and business communications.",
  },
  {
    name: "UI/UX Design",
    text: "Design intuitive interfaces and meaningful user experiences around the needs of your customers.",
  },
  {
    name: "Website & Digital Design",
    text: "Create engaging digital experiences that combine visual impact with usability.",
  },
  {
    name: "Design Systems",
    text: "Develop scalable design frameworks that keep digital products and communications consistent as they grow.",
  },
];

const processStages = [
  { name: "Discover", text: "Understand your brand, audience, market and objectives." },
  { name: "Define", text: "Establish the creative direction and visual opportunity." },
  { name: "Design", text: "Develop concepts, interfaces and visual assets." },
  { name: "Refine", text: "Review, test and improve the work based on feedback." },
  { name: "Deliver", text: "Provide the final assets and systems ready for implementation." },
];

const closingParagraph =
  "We combine creativity with strategic thinking to create brands and digital experiences that people understand, remember and trust.";

export const Route = createFileRoute("/services/brand-design")({
  head: () => ({
    meta: [
      { title: "Brand & Design — Nexen Strategy" },
      { name: "description", content: heroParagraph.slice(0, 155) },
      { property: "og:title", content: "Build a Brand People Remember. | Brand & Design — Nexen Strategy" },
      { property: "og:description", content: heroParagraph.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandDesignPage,
});

function BrandDesignPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      <style>{`
        @keyframes bd-drift{0%{transform:scale(1.06) translateX(-1.2%)}100%{transform:scale(1.06) translateX(1.2%)}}
        .bd-kenburns{animation:bd-drift 26s ease-in-out infinite alternate;will-change:transform}
        @media (prefers-reduced-motion: reduce){.bd-kenburns{animation:none !important}}
      `}</style>

      <Header />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[0%] h-[560px] w-[560px] rounded-full opacity-[0.07] blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              {/* ---- Copy ---- */}
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-azure">03 — Brand &amp; Design</p>
                    <span
                      aria-hidden
                      className="h-px w-12 bg-gradient-to-r from-amber to-ember"
                    />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.02] text-navy sm:text-6xl lg:text-[4.6rem]">
                    Build
                    <br />
                    a Brand People Remember.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                    {heroParagraph}
                  </p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Start a Design Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span
                      aria-hidden
                      className="hidden h-px w-16 bg-navy/15 sm:block"
                    />
                  </div>
                </Reveal>
              </div>

              {/* ---- Art-directed visual composition ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <div className="relative flex items-center justify-center">
                  {/* inner composition container: reduced & rebalanced */}
                  <div className="relative w-[85%]">

                    {/* thin offset framing line */}
                    <span
                      aria-hidden
                      className="absolute -top-6 -right-6 hidden h-full w-full rounded-xl border border-navy/12 lg:block"
                    />
                    {/* primary brand visual */}
                    <div className="relative overflow-hidden rounded-xl bg-secondary/40 shadow-[0_50px_90px_-40px_rgba(1,12,98,0.4)]">
                      <img
                        src={brandHero}
                        alt="Premium brand identity system with typography, colour palette and logo applications"
                        width={1024}
                        height={1280}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                    {/* small cropped brand detail — overlapping bottom-left */}
                    <div className="absolute -bottom-8 -left-10 hidden w-36 overflow-hidden rounded-lg border-[5px] border-white shadow-[0_30px_60px_-25px_rgba(1,12,98,0.45)] lg:block">
                      <img
                        src={brandTouchpoints}
                        alt="Brand identity applied across digital and print touchpoints"
                        loading="lazy"
                        width={1600}
                        height={1200}
                        className="aspect-square w-full object-cover object-left-top"
                      />
                    </div>
                    {/* colour swatch detail — overlapping top-left edge */}
                    <div
                      aria-hidden
                      className="absolute -left-5 top-10 hidden flex-col gap-2.5 lg:flex"
                    >
                      <span className="h-9 w-9 rounded-[4px] bg-navy shadow-[0_14px_28px_-12px_rgba(1,12,98,0.5)]" />
                      <span className="h-9 w-9 rounded-[4px] bg-gradient-to-br from-amber to-ember shadow-[0_14px_28px_-12px_rgba(255,72,63,0.5)]" />
                      <span className="h-9 w-9 rounded-[4px] border border-navy/15 bg-white shadow-[0_14px_28px_-12px_rgba(1,12,98,0.25)]" />
                    </div>
                    {/* fine orange accent marker */}
                    <span
                      aria-hidden
                      className="absolute -bottom-5 right-12 hidden h-px w-24 bg-gradient-to-r from-amber to-ember lg:block"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============ INTRODUCTION ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <span
                  aria-hidden
                  className="mb-10 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
                />
                <h2 className="display text-[2rem] leading-[1.12] text-navy sm:text-4xl lg:text-[3rem]">
                  Design With Purpose. Identity With Direction.
                </h2>
              </Reveal>
              <div className="lg:col-span-6 lg:col-start-7">
                {introParagraphs.map((p, i) => (
                  <Reveal key={i} delay={100 + i * 80}>
                    <p
                      className={cn(
                        "leading-relaxed",
                        i === 0
                          ? "text-xl text-navy/85 lg:text-2xl"
                          : "mt-8 text-lg text-muted-foreground",
                      )}
                    >
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ SIGNATURE VISUAL ============ */}
        <section className="relative overflow-hidden bg-navy">
          <div className="bd-kenburns">
            <img
              src={brandSignature}
              alt="Complete brand identity system applied across packaging, stationery, guidelines and digital"
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
        </section>

        {/* ============ WHAT WE DO ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="eyebrow text-azure">What we do</p>
                  <h2 className="display mt-6 text-4xl text-navy lg:text-5xl">What We Do</h2>
                  <span
                    aria-hidden
                    className="mt-10 block h-px w-14 bg-gradient-to-r from-amber to-ember"
                  />
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {serviceAreas.map((s, i) => (
                    <Reveal key={s.name} delay={i * 50}>
                      <div className="group relative border-b border-border py-8 lg:py-9">
                        <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                          <span className="font-mono text-xs text-muted-foreground lg:col-span-1">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="display text-2xl tracking-tight text-navy transition-transform duration-500 ease-out group-hover:translate-x-2 lg:col-span-5 lg:text-[1.75rem]">
                            {s.name}
                          </h3>
                          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-6">
                            {s.text}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-amber to-ember transition-[width] duration-700 ease-out group-hover:w-full"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OUR DESIGN PROCESS ============ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow text-azure">Our design process</p>
              <h2 className="display mt-6 max-w-2xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                Our Design Process
              </h2>
            </Reveal>

            <div className="relative mt-20">
              <div aria-hidden className="absolute left-0 top-[5px] hidden h-px w-full bg-border lg:block" />
              <div
                aria-hidden
                className="absolute left-0 top-[5px] hidden h-px bg-gradient-to-r from-amber to-ember transition-[width] duration-700 lg:block"
                style={{ width: `${((activeStage + 1) / processStages.length) * 100}%` }}
              />
              <div aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-border lg:hidden" />
              <ol className="grid gap-12 pl-10 lg:grid-cols-5 lg:gap-8 lg:pl-0">
                {processStages.map((s, i) => {
                  const on = i <= activeStage;
                  return (
                    <Reveal key={s.name} delay={i * 90} as="li">
                      <div
                        onMouseEnter={() => setActiveStage(i)}
                        onFocus={() => setActiveStage(i)}
                        tabIndex={0}
                        className="group relative outline-none"
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "absolute -left-10 top-0 h-[11px] w-[11px] rounded-full border-2 bg-white transition-colors duration-500 lg:-top-[0px] lg:left-0",
                            on ? "border-ember" : "border-border",
                          )}
                        />
                        <div className="lg:pt-10">
                          <span className="font-mono text-xs text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3
                            className={cn(
                              "mt-4 text-2xl font-semibold tracking-tight transition-colors duration-500",
                              on ? "text-navy" : "text-navy/50",
                            )}
                          >
                            {s.name}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ CLOSING ============ */}
        <section className="relative overflow-hidden bg-navy">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
            <div className="max-w-4xl">
              <Reveal>
                <span
                  aria-hidden
                  className="mb-10 block h-px w-16 bg-gradient-to-r from-amber to-ember"
                />
                <h2 className="display text-[2.2rem] leading-[1.1] text-white sm:text-5xl lg:text-[3.6rem]">
                  Good Design Creates Recognition. Great Design Creates Connection.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
                  {closingParagraph}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12">
                  <Link to="/contact" className="btn-primary group">
                    Start a Design Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
