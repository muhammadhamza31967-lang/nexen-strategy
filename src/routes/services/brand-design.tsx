import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import brandHero from "@/assets/brand-hero.jpg";
import brandSignature from "@/assets/brand-signature.jpg";
import brandTouchpoints from "@/assets/brand-touchpoints.jpg";
import svcBrandIdentity from "@/assets/svc-brand-identity.jpg";
import svcLogoDesign from "@/assets/svc-logo-design.jpg";
import svcVisualIdentity from "@/assets/svc-visual-identity.jpg";
import svcGraphicDesign from "@/assets/svc-graphic-design.jpg";
import svcUiuxDesign from "@/assets/svc-uiux-design.jpg";
import svcWebDesign from "@/assets/svc-web-design.jpg";
import svcDesignSystems from "@/assets/svc-design-systems.jpg";
import svcBrandGuidelines from "@/assets/svc-brand-guidelines.jpg";

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
    img: svcBrandIdentity,
    alt: "Brand identity system presented across guidelines, stationery and business cards",
  },
  {
    name: "Logo Design",
    text: "Create memorable logos that provide a strong visual foundation for your brand.",
    img: svcLogoDesign,
    alt: "Logo design exploration sheet with construction grid, lockups and variations",
  },
  {
    name: "Visual Identity",
    text: "Define colours, typography, imagery and visual elements that create consistency across your communications.",
    img: svcVisualIdentity,
    alt: "Visual identity system with typography specimen, colour palette and pattern samples",
  },
  {
    name: "Graphic Design",
    text: "Create professional visual assets for digital platforms, marketing campaigns, print and business communications.",
    img: svcGraphicDesign,
    alt: "Graphic design collateral across brochures, posters and marketing print",
  },
  {
    name: "UI/UX Design",
    text: "Design intuitive interfaces and meaningful user experiences around the needs of your customers.",
    img: svcUiuxDesign,
    alt: "Polished mobile and tablet interface screens for a digital product",
  },
  {
    name: "Website & Digital Design",
    text: "Create engaging digital experiences that combine visual impact with usability.",
    img: svcWebDesign,
    alt: "Premium corporate website design shown on laptop and mobile",
  },
  {
    name: "Design Systems",
    text: "Develop scalable design frameworks that keep digital products and communications consistent as they grow.",
    img: svcDesignSystems,
    alt: "Design system component library with colours, typography and UI components",
  },
  {
    name: "Brand Guidelines",
    text: "Develop clear brand guidelines that define how your identity should be used consistently across digital, print and marketing communications.",
    img: svcBrandGuidelines,
    alt: "Brand guidelines book showing logo usage, typography, colour palette and print applications",
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
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <style>{`
        @keyframes bd-drift{0%{transform:scale(1.06) translateX(-1.2%)}100%{transform:scale(1.06) translateX(1.2%)}}
        .bd-kenburns{animation:bd-drift 26s ease-in-out infinite alternate;will-change:transform}
        @keyframes bd-caption{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        .bd-caption{animation:bd-caption .45s ease-out both}
        @media (prefers-reduced-motion: reduce){.bd-kenburns,.bd-caption{animation:none !important}}
      `}</style>

      <Header />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.07] blur-[140px]"
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
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-[0.03]" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-14 lg:px-12 lg:py-20">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left: heading */}
              <div className="lg:col-span-5">
                <Reveal>
                  <span
                    aria-hidden
                    className="mb-6 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
                  />
                  <h2 className="display text-3xl leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-[2.1rem] xl:text-[2.5rem]">
                    Design
                    <br />
                    With Purpose.
                    <br />
                    Identity With Direction.
                  </h2>
                </Reveal>
              </div>

              {/* Right: content — unified editorial body */}
              <div className="lg:col-span-7 lg:pt-2">
                <Reveal delay={100}>
                  <p className="text-xl leading-relaxed text-navy/85">
                    A strong brand creates recognition. A strong digital experience creates connection.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-8 text-xl leading-relaxed text-navy/60">
                    We bring both together to help businesses establish a visual presence that reflects who they are, what they offer and where they want to go.
                  </p>
                </Reveal>
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

        {/* ============ WHAT WE DO — image-led showcase ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-[0.03]" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            {/* Section header — mobile / tablet only (desktop header lives in the left column) */}
            <Reveal className="lg:hidden">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="eyebrow text-azure">What we do</p>
                  <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Do</h2>
                </div>
              </div>
            </Reveal>

            {/* ---- Desktop: editorial navigation + label / title / description / visual ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left: header + premium service navigation */}
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">What we do</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Do</h2>
                <span
                  aria-hidden
                  className="mt-9 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <ul className="mt-12">
                  {serviceAreas.map((s, i) => {
                    const on = i === activeService;
                    return (
                      <li key={s.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveService(i)}
                          onFocus={() => setActiveService(i)}
                          onClick={() => setActiveService(i)}
                          aria-current={on}
                          className="group relative flex w-full items-center gap-5 border-b border-border py-5 text-left outline-none transition-colors duration-300"
                        >
                          {/* outline number */}
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center font-mono text-[13px] font-medium tracking-[0.02em] text-transparent transition-all duration-300",
                              on
                                ? "[-webkit-text-stroke:1px_#ff483f]"
                                : "[-webkit-text-stroke:1px_rgba(1,12,98,0.25)] group-hover:[-webkit-text-stroke:1px_rgba(1,12,98,0.55)]",
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          {/* service name */}
                          <span
                            className={cn(
                              "display text-[1.55rem] leading-none tracking-tight transition-all duration-300 ease-out",
                              on
                                ? "text-navy"
                                : "text-navy/40 group-hover:text-navy/75",
                            )}
                          >
                            {s.name}
                          </span>

                          {/* arrow indicator */}
                          <ArrowRight
                            aria-hidden
                            className={cn(
                              "ml-auto h-4 w-4 shrink-0 text-ember transition-all duration-300",
                              on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50",
                            )}
                          />

                          {/* active / hover accent line */}
                          <span
                            aria-hidden
                            className={cn(
                              "absolute left-0 top-1/2 h-8 w-[2px] -translate-y-1/2 bg-gradient-to-b from-amber to-ember transition-all duration-300",
                              on ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              {/* Right: label → title → description → large visual */}
              <Reveal delay={120} className="lg:col-span-7">
                <div key={activeService} className="bd-caption">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeService + 1).padStart(2, "0")} — Capability
                  </p>
                  <h3 className="display mt-4 text-3xl text-navy xl:text-[2.6rem]">
                    {serviceAreas[activeService]?.name ?? serviceAreas[0]?.name}
                  </h3>
                  <p className="mt-7 max-w-2xl text-[1.35rem] leading-[1.7] text-navy/80">
                    {serviceAreas[activeService]?.text ?? serviceAreas[0]?.text}
                  </p>
                </div>
                <div className="relative mt-10">
                  {/* offset frame line */}
                  <span
                    aria-hidden
                    className="absolute -top-4 -right-4 hidden h-full w-full rounded-xl border border-navy/10 lg:block"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary/40 shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
                    {serviceAreas.map((s, i) => (
                      <img
                        key={s.name}
                        src={s.img}
                        alt={s.alt}
                        loading="lazy"
                        width={1280}
                        height={960}
                        aria-hidden={i !== activeService}
                        className={cn(
                          "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                          i === activeService
                            ? "scale-100 opacity-100"
                            : "scale-[1.04] opacity-0",
                        )}
                      />
                    ))}
                    {/* index marker */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-navy/55 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white backdrop-blur-sm">
                      {String(activeService + 1).padStart(2, "0")} / {String(serviceAreas.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---- Mobile / tablet: touch accordion ---- */}
            <div className="mt-10 lg:hidden">
              <ul className="border-t border-border">
                {serviceAreas.map((s, i) => {
                  const on = i === activeService;
                  return (
                    <li key={s.name} className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setActiveService(i)}
                        aria-expanded={on}
                        className="flex w-full items-center gap-4 py-4 text-left"
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center font-mono text-[12px] font-medium tracking-[0.02em] text-transparent transition-all duration-300",
                            on
                              ? "[-webkit-text-stroke:1px_#ff483f]"
                              : "[-webkit-text-stroke:1px_rgba(1,12,98,0.25)]",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "display text-xl tracking-tight transition-colors duration-300",
                            on ? "text-navy" : "text-navy/55",
                          )}
                        >
                          {s.name}
                        </span>
                        <ArrowRight
                          aria-hidden
                          className={cn(
                            "ml-auto h-4 w-4 shrink-0 transition-all duration-300",
                            on ? "rotate-90 text-ember" : "text-navy/30",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-out",
                          on ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-lg leading-relaxed text-navy/75">{s.text}</p>
                          <div className="mt-5 overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(1,12,98,0.35)]">
                            <img
                              src={s.img}
                              alt={s.alt}
                              loading="lazy"
                              width={1280}
                              height={960}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
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
