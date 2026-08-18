import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaSection({
  eyebrow = "Start a conversation",
  heading = "Let's Build What Comes Next.",
  body = "Whether you are launching something new, replacing what no longer works, or planning the next phase of growth, we would like to hear about it. Tell us where your business is heading and we will show you how we can help you get there.",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-12 lg:pb-16">
      <style>{`
        @keyframes cta-sweep{0%{transform:translate3d(-30%,0,0)}100%{transform:translate3d(130%,0,0)}}
        @keyframes cta-glow{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(5%,-4%,0) scale(1.12)}100%{transform:translate3d(0,0,0) scale(1)}}
        .cta-sweep{animation:cta-sweep 22s linear infinite}
        .cta-glow{animation:cta-glow 24s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.cta-sweep,.cta-glow{animation:none !important}}
      `}</style>
      <div aria-hidden className="grid-faint absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-16 lg:px-12 lg:pt-20">
        <div className="relative overflow-hidden rounded-[28px] border border-cyan/20 px-7 py-14 lg:px-16 lg:py-18"
          style={{
            background:
              "linear-gradient(140deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, rgba(1,12,98,0.5) 100%)",
            boxShadow: "0 30px 90px -40px rgba(58,241,255,0.35)",
          }}
        >
          <div
            aria-hidden
            className="cta-glow pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="cta-glow pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full opacity-35 blur-[110px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)", animationDelay: "-8s" }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="cta-sweep absolute inset-y-0 w-1/3 opacity-40"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
            />
          </div>
          <span
            aria-hidden
            className="ghost-type pointer-events-none absolute -right-6 -bottom-8 text-[5rem] text-white/[0.05] sm:text-[9rem] lg:text-[12rem]"
          >
            NEXEN
          </span>
          <div className="relative max-w-4xl">
          <Reveal>
            <p className="eyebrow text-cyan">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[2.3rem] text-white sm:text-5xl lg:text-[4rem]">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">{body}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-ghost-light">
                View Our Work
              </Link>
            </div>
          </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaFooterGap() {
  return <div aria-hidden className="h-[44px] w-full bg-background lg:h-[64px]" />;
}