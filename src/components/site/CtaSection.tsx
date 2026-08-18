import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useCallback, useRef } from "react";
import { Reveal } from "./Reveal";

export function CtaSection({
  eyebrow = "Start a conversation",
  heading = "Let's Build What Comes Next.",
  body = "Whether you are launching something new, replacing what no longer works, or planning the next phase of growth, we would like to hear about it. Tell us where your business is heading and we will show you how we can help you get there.",
  ctaLabel = "Start a Project",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
}) {
  const bannerRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = bannerRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--px", `${(x - 0.5) * 18}px`);
    el.style.setProperty("--py", `${(y - 0.5) * 14}px`);
  }, []);

  return (
    <section className="relative bg-background pb-10 lg:pb-14">
      <style>{`
        @keyframes cta-grad{0%{transform:translate3d(-6%,-4%,0) scale(1.15)}50%{transform:translate3d(6%,4%,0) scale(1.25)}100%{transform:translate3d(-6%,-4%,0) scale(1.15)}}
        @keyframes cta-wave{0%{transform:translate3d(-15%,0,0) scale(1.1)}100%{transform:translate3d(15%,0,0) scale(1.1)}}
        @keyframes cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-64px,-64px,0)}}
        @keyframes cta-dash{to{stroke-dashoffset:-2400}}
        @keyframes cta-node{0%,100%{opacity:.25}50%{opacity:.95}}
        @keyframes cta-orbit{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes cta-drift{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(2.5%,-2%,0)}}
        .cta-grad{animation:cta-grad 26s ease-in-out infinite}
        .cta-wave{animation:cta-wave 22s ease-in-out infinite alternate}
        .cta-wave2{animation:cta-wave 17s ease-in-out infinite alternate-reverse}
        .cta-grid{animation:cta-grid 34s linear infinite}
        .cta-dash{stroke-dasharray:200 1400;animation:cta-dash 22s linear infinite}
        .cta-dash2{stroke-dasharray:140 1500;animation:cta-dash 19s linear infinite;animation-delay:-6s}
        .cta-dash3{stroke-dasharray:110 1600;animation:cta-dash 25s linear infinite;animation-delay:-12s}
        .cta-dash4{stroke-dasharray:80 1700;animation:cta-dash 18s linear infinite;animation-delay:-3s}
        .cta-node{animation:cta-node 6s ease-in-out infinite}
        .cta-orbit{animation:cta-orbit 90s linear infinite;transform-origin:center}
        .cta-drift{animation:cta-drift 20s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.cta-grad,.cta-wave,.cta-wave2,.cta-grid,.cta-dash,.cta-dash2,.cta-dash3,.cta-dash4,.cta-node,.cta-orbit,.cta-drift{animation:none !important}}
      `}</style>
      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 lg:px-12 lg:pt-20">
        <div
          ref={bannerRef}
          onMouseMove={onMove}
          className="relative isolate flex min-h-[520px] flex-col justify-center overflow-hidden rounded-[24px] bg-navy px-7 py-10 sm:min-h-[540px] sm:px-12 lg:min-h-[560px] lg:px-20 lg:py-[80px]"
          style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%", ["--px" as string]: "0px", ["--py" as string]: "0px" }}
        >
          {/* L5 gradient movement */}
          <div
            aria-hidden
            className="cta-grad pointer-events-none absolute inset-[-20%]"
            style={{
              background:
                "radial-gradient(45% 60% at 20% 30%, rgba(74,115,255,0.45) 0%, transparent 65%), radial-gradient(40% 55% at 80% 70%, rgba(58,241,255,0.28) 0%, transparent 70%), linear-gradient(140deg, #041579 0%, #010C62 55%, #010A4E 100%)",
            }}
          />
          {/* L4 light waves */}
          <div
            aria-hidden
            className="cta-wave pointer-events-none absolute -left-1/4 top-[-30%] h-[160%] w-[90%] opacity-40 blur-[90px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(58,241,255,0.35) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="cta-wave2 pointer-events-none absolute -right-1/4 bottom-[-40%] h-[150%] w-[80%] opacity-40 blur-[100px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(74,115,255,0.4) 0%, transparent 70%)" }}
          />
          {/* L3 grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.55] [mask-image:radial-gradient(130%_110%_at_60%_45%,black,transparent_80%)]"
          >
            <div
              className="cta-grid absolute inset-[-80px]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>
          {/* L2 large abstract forms + flowing paths + nodes */}
          <svg
            aria-hidden
            className="cta-drift pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 560"
            preserveAspectRatio="xMidYMid slice"
            style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
          >
            <g className="cta-orbit" fill="none" stroke="#4A73FF" strokeOpacity="0.10" strokeWidth="1">
              <circle cx="960" cy="280" r="230" />
              <circle cx="960" cy="280" r="160" strokeDasharray="6 14" />
              <path d="M960 50 L1160 165 L1160 395 L960 510 L760 395 L760 165 Z" />
            </g>
            <g fill="none" strokeWidth="1.1">
              <path className="cta-dash" d="M-60 470 C 240 430, 420 250, 700 235 S 1100 150, 1280 110" stroke="#3AF1FF" strokeOpacity="0.45" />
              <path className="cta-dash2" d="M-60 140 C 280 200, 540 430, 880 410 S 1180 330, 1280 300" stroke="#4A73FF" strokeOpacity="0.5" />
              <path className="cta-dash3" d="M700 -60 C 780 140, 920 210, 1050 260 S 1210 380, 1270 540" stroke="#3AF1FF" strokeOpacity="0.3" />
              <path className="cta-dash4" d="M-60 300 C 200 300, 360 360, 560 330 S 900 200, 1280 220" stroke="#4A73FF" strokeOpacity="0.28" />
            </g>
            <g fill="#3AF1FF">
              {[
                [700, 235], [880, 410], [960, 130], [1050, 260], [760, 300], [1140, 120], [560, 330], [1160, 395],
              ].map(([cx, cy], i) => (
                <circle key={`${cx}-${cy}`} className="cta-node" cx={cx} cy={cy} r={i % 3 === 0 ? 3.6 : 2.6} opacity="0.5" style={{ animationDelay: `${i * -0.9}s` }} />
              ))}
            </g>
          </svg>
          {/* cursor glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{ background: "radial-gradient(320px circle at var(--mx) var(--my), rgba(58,241,255,0.13), transparent 70%)" }}
          />
          {/* readability overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(100deg, rgba(1,12,98,0.92) 0%, rgba(1,12,98,0.62) 48%, rgba(1,12,98,0.15) 82%)" }}
          />

          <div className="relative w-full">
            <Reveal>
              <p className="eyebrow text-cyan">{eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-7 text-[2.4rem] leading-[1.03] text-white sm:text-[3.2rem] lg:max-w-[70%] lg:text-[4.5rem]">
                {heading}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-full text-base leading-relaxed text-white/75 lg:max-w-[860px] lg:text-lg">{body}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary group">
                  {ctaLabel}
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
