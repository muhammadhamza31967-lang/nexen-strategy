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
    <section className="relative bg-background pb-10 lg:pb-14">
      <style>{`
        @keyframes cta-sweep{0%{transform:translate3d(-30%,0,0)}100%{transform:translate3d(130%,0,0)}}
        @keyframes cta-glow{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(5%,-4%,0) scale(1.12)}100%{transform:translate3d(0,0,0) scale(1)}}
        @keyframes cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-64px,0)}}
        @keyframes cta-dash{to{stroke-dashoffset:-1200}}
        @keyframes cta-node{0%,100%{opacity:.25;r:2.5}50%{opacity:.9;r:3.6}}
        .cta-sweep{animation:cta-sweep 26s linear infinite}
        .cta-glow{animation:cta-glow 24s ease-in-out infinite}
        .cta-grid{animation:cta-grid 28s linear infinite}
        .cta-dash{stroke-dasharray:180 1100;animation:cta-dash 24s linear infinite}
        .cta-dash2{stroke-dasharray:120 1200;animation:cta-dash 30s linear infinite;animation-delay:-7s}
        .cta-dash3{stroke-dasharray:90 1250;animation:cta-dash 20s linear infinite;animation-delay:-13s}
        .cta-node{animation:cta-node 9s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.cta-sweep,.cta-glow,.cta-grid,.cta-dash,.cta-dash2,.cta-dash3,.cta-node{animation:none !important}}
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
          {/* connected system network */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 460"
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" strokeWidth="1">
              <path className="cta-dash" d="M-40 380 C 220 340, 380 200, 660 190 S 1080 120, 1260 90" stroke="#3AF1FF" strokeOpacity="0.30" />
              <path className="cta-dash2" d="M-40 120 C 260 170, 520 360, 860 340 S 1160 280, 1260 250" stroke="#4A73FF" strokeOpacity="0.35" />
              <path className="cta-dash3" d="M700 -40 C 760 120, 900 180, 1020 220 S 1180 320, 1240 430" stroke="#3AF1FF" strokeOpacity="0.22" />
              <path d="M840 60 L960 130 L960 260 L840 330 L720 260 L720 130 Z" stroke="#4A73FF" strokeOpacity="0.14" />
              <path d="M900 100 L1010 165 L1010 295" stroke="#3AF1FF" strokeOpacity="0.12" />
            </g>
            <g fill="#3AF1FF">
              {[
                [660, 190], [860, 340], [960, 130], [1020, 220], [720, 260], [1120, 95], [820, 60],
              ].map(([cx, cy], i) => (
                <circle key={`${cx}-${cy}`} className="cta-node" cx={cx} cy={cy} r="3" opacity="0.5" style={{ animationDelay: `${i * -1.4}s` }} />
              ))}
            </g>
          </svg>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(100deg, rgba(1,12,98,0.85) 0%, rgba(1,12,98,0.55) 45%, transparent 78%)" }}
          />
          <div className="relative">
          <div className="max-w-3xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaFooterGap() {
  return <div aria-hidden className="h-[44px] w-full bg-background lg:h-[64px]" />;
}