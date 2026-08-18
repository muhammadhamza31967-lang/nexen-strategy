import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import ctaMark from "@/assets/nexen-cta-mark.png.asset.json";

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
    <section className="relative bg-background pb-10 lg:pb-14">
      <style>{`
        @keyframes cta-sweep{0%{transform:translate3d(-30%,0,0)}100%{transform:translate3d(130%,0,0)}}
        @keyframes cta-glow{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(5%,-4%,0) scale(1.12)}100%{transform:translate3d(0,0,0) scale(1)}}
        @keyframes cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-64px,0)}}
        .cta-sweep{animation:cta-sweep 26s linear infinite}
        .cta-glow{animation:cta-glow 24s ease-in-out infinite}
        .cta-grid{animation:cta-grid 28s linear infinite}
        @media (prefers-reduced-motion: reduce){.cta-sweep,.cta-glow,.cta-grid{animation:none !important}}
      `}</style>
      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 lg:px-12 lg:pt-20">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-cyan/20 bg-navy px-8 py-9 sm:px-10 sm:py-12 lg:px-16 lg:py-18"
          style={{
            backgroundImage:
              "linear-gradient(140deg, rgba(74,115,255,0.22) 0%, rgba(1,12,98,0.35) 45%, rgba(1,12,98,0.85) 100%)",
            boxShadow: "0 30px 90px -40px rgba(58,241,255,0.35)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.5] [mask-image:radial-gradient(120%_100%_at_50%_40%,black,transparent_80%)]"
          >
            <div
              className="cta-grid absolute inset-x-0 -top-16 bottom-[-64px]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>
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
          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-cyan">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[2.3rem] text-white sm:text-[3rem] lg:text-[4rem]">
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
          <Reveal delay={240} className="lg:col-span-5">
            <div className="group relative mx-auto flex h-[220px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 sm:h-[280px] lg:h-[360px]"
              style={{
                background: "linear-gradient(150deg, rgba(74,115,255,0.18), rgba(1,12,98,0.35))",
                boxShadow: "0 24px 70px -32px rgba(58,241,255,0.4)",
              }}
            >
              <img
                src={ctaMark.url}
                alt="Nexen Strategy emblem"
                loading="lazy"
                className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-[1.02]"
              />
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