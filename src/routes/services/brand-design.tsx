import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { serviceContent } from "@/lib/service-content";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import brandHero from "@/assets/brand-hero.jpg";
import brandSignature from "@/assets/brand-signature.jpg";
import brandTouchpoints from "@/assets/brand-touchpoints.jpg";

const content = serviceContent["brand-design"];

export const Route = createFileRoute("/services/brand-design")({
  head: () => ({
    meta: [
      { title: `${content.label} — Nexen Strategy` },
      { name: "description", content: content.intro.slice(0, 155) },
      { property: "og:title", content: `${content.hero} | ${content.label} — Nexen Strategy` },
      { property: "og:description", content: content.intro.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandDesignPage,
});

function BrandDesignPage() {
  const [openCap, setOpenCap] = useState<number | null>(0);
  const others = services.filter((s) => s.slug !== content.slug).slice(0, 3);

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
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-60" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.08] blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-azure">
                  {content.no} — {content.label}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display mt-7 text-[2.7rem] text-navy sm:text-6xl lg:text-[4.4rem]">
                  {content.hero}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {content.intro}
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-11 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary group">
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/portfolio" className="btn-ghost-dark group">
                    See Related Work
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
                    alt={content.imageAlt}
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ THE APPROACH ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-3">
                <p className="eyebrow text-azure">The approach</p>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
                />
              </Reveal>
              <div className="lg:col-span-6">
                {content.body.map((p, i) => (
                  <Reveal key={i} delay={80 + i * 70}>
                    <p
                      className={cn(
                        "leading-relaxed",
                        i === 0 ? "text-xl text-navy/85 lg:text-2xl" : "mt-8 text-lg text-muted-foreground",
                      )}
                    >
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200} className="lg:col-span-3">
                <ul className="space-y-6 border-l border-border pl-7">
                  {content.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-navy">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-amber" strokeWidth={2} />
                      <span className="text-base font-medium leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
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

        {/* ============ IN PRACTICE ============ */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-5 -left-5 hidden h-full w-full border border-navy/15 lg:block"
                  />
                  <div className="relative overflow-hidden bg-white shadow-[0_40px_90px_-40px_rgba(1,12,98,0.35)]">
                    <img
                      src={brandTouchpoints}
                      alt="One brand identity applied consistently across digital and print touchpoints"
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140} className="lg:col-span-5">
                <p className="eyebrow text-azure">In practice</p>
                <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-4xl lg:text-[2.6rem]">
                  {content.closing}
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                  {content.intro}
                </p>
                <Link
                  to="/portfolio"
                  className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-navy"
                >
                  See related work
                  <ArrowUpRight className="h-5 w-5 text-amber transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section className="relative overflow-hidden border-t border-border bg-navy">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="eyebrow text-cyan">What we do</p>
                  <h2 className="display mt-6 text-4xl text-white lg:text-5xl">Capabilities</h2>
                  <p className="mt-7 max-w-sm text-base leading-relaxed text-white/60">
                    Engage a single capability or the full discipline. The standard does not change.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-white/12">
                  {content.capabilities.map((c, i) => {
                    const open = openCap === i;
                    return (
                      <Reveal key={c.name} delay={i * 50}>
                        <div className="border-b border-white/12">
                          <button
                            type="button"
                            onClick={() => setOpenCap(open ? null : i)}
                            aria-expanded={open}
                            className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                          >
                            <span className="flex items-baseline gap-5">
                              <span className="font-mono text-[0.7rem] text-cyan/70">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={cn(
                                  "text-lg font-semibold tracking-tight text-white transition-colors duration-400 group-hover:text-cyan lg:text-xl",
                                  open && "text-cyan",
                                )}
                              >
                                {c.name}
                              </span>
                            </span>
                            <Plus
                              className={cn(
                                "h-5 w-5 shrink-0 text-white/40 transition-transform duration-500",
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
                              <p className="max-w-xl pb-8 pl-9 text-base leading-relaxed text-white/60">
                                {c.text}
                              </p>
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

        {/* ============ PROCESS ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow text-azure">How we work</p>
              <h2 className="display mt-6 max-w-2xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                From first conversation to measurable result.
              </h2>
            </Reveal>
            <ProcessTimeline />
          </div>
        </section>

        {/* ============ CONTINUE EXPLORING ============ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <p className="eyebrow text-azure">Continue exploring</p>
            <div className="mt-10 border-t border-border">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 border-b border-border py-7 transition-[padding] duration-500 hover:pl-3"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                    <span className="display text-2xl text-navy transition-colors group-hover:text-azure lg:text-4xl">
                      {s.title}
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-azure" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <CtaSection eyebrow={content.label} heading={content.closing} />
      </main>
      <Footer />
    </>
  );
}
