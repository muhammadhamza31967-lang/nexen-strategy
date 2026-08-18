import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

export type Principle = { title: string; text: string };

export function WhyNexen({ principles }: { principles: Principle[] }) {
  const [active, setActive] = useState(0);
  const current = principles[active] ?? principles[0]!;

  return (
    <section className="wn relative overflow-hidden" style={{ backgroundColor: "#010C62" }}>
      <style>{`
        @keyframes wn-drift-a { 0%{transform:translate3d(-8%,-6%,0) scale(1)} 50%{transform:translate3d(10%,6%,0) scale(1.15)} 100%{transform:translate3d(-8%,-6%,0) scale(1)} }
        @keyframes wn-drift-b { 0%{transform:translate3d(6%,8%,0) scale(1.1)} 50%{transform:translate3d(-9%,-4%,0) scale(1)} 100%{transform:translate3d(6%,8%,0) scale(1.1)} }
        @keyframes wn-sweep { 0%{transform:translateX(-40%) skewX(-14deg);opacity:0} 12%{opacity:.5} 50%{opacity:.28} 88%{opacity:0} 100%{transform:translateX(140%) skewX(-14deg);opacity:0} }
        @keyframes wn-grid { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(0,-88px,0)} }
        @keyframes wn-dash { to { stroke-dashoffset: -1400; } }
        .wn-a{animation:wn-drift-a 26s ease-in-out infinite}
        .wn-b{animation:wn-drift-b 32s ease-in-out infinite}
        .wn-sweep{animation:wn-sweep 22s linear infinite}
        .wn-grid{animation:wn-grid 24s linear infinite}
        .wn-dash{stroke-dasharray:220 1200;animation:wn-dash 28s linear infinite}
        .wn-dash-2{stroke-dasharray:140 1400;animation:wn-dash 38s linear infinite;animation-delay:-9s}
        @media (prefers-reduced-motion: reduce){
          .wn-a,.wn-b,.wn-sweep,.wn-grid,.wn-dash,.wn-dash-2{animation:none !important}
        }
      `}</style>

      {/* Motion background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-20%] overflow-hidden">
          <div
            className="wn-a absolute left-[-10%] top-[-15%] h-[820px] w-[820px] rounded-full opacity-45 blur-[190px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 68%)" }}
          />
          <div
            className="wn-b absolute bottom-[-25%] right-[-12%] h-[720px] w-[720px] rounded-full opacity-30 blur-[200px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            className="wn-b absolute right-[18%] top-[12%] hidden h-[380px] w-[380px] rounded-full opacity-[0.10] blur-[170px] lg:block"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
        </div>

        {/* parallax fine grid */}
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_20%,black,transparent_75%)]">
          <div
            className="wn-grid absolute inset-x-0 -top-[88px] bottom-[-88px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
            }}
          />
        </div>

        {/* slow flowing luminous curves */}
        <svg
          className="absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="wnLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3AF1FF" stopOpacity="0" />
              <stop offset="45%" stopColor="#3AF1FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4A73FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wnLine2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4A73FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#4A73FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4A73FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="wn-dash"
            d="M-100 640 C 300 520, 520 780, 900 600 S 1400 380, 1560 420"
            stroke="url(#wnLine)"
            strokeWidth="1.2"
          />
          <path
            className="wn-dash-2"
            d="M-100 250 C 320 360, 640 120, 980 240 S 1380 420, 1560 300"
            stroke="url(#wnLine2)"
            strokeWidth="1"
          />
        </svg>

        {/* occasional light passing through */}
        <div className="absolute inset-y-0 left-0 w-[38%]">
          <div
            className="wn-sweep h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(74,115,255,0.16) 40%, rgba(58,241,255,0.07) 60%, transparent)",
            }}
          />
        </div>

        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      </div>

      {/* ghost depth type */}
      <span
        aria-hidden
        className="ghost-type absolute -left-4 bottom-[6%] hidden text-white/[0.022] lg:block lg:text-[11rem]"
      >
        ONE
        <br />
        CONNECTED
        <br />
        TEAM
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-[140px]">
        {/* Masthead */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-cyan">Why Nexen</p>
            <span aria-hidden className="mt-6 block h-px w-16 bg-gradient-to-r from-cyan to-transparent" />
          </Reveal>
          <Reveal delay={90} className="lg:col-span-8">
            <h2 className="display text-[2.2rem] text-white sm:text-[3rem] lg:text-[4.2rem]">
              More Than a Digital Agency. A Partner for What&apos;s Next.
            </h2>
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-white/60 lg:text-[1.25rem]">
              We are chosen by organisations that need judgement as much as delivery. The work is grounded in your
              commercial reality and built to keep earning after launch.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          {/* Active content area */}
          <Reveal className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-32">
              <span className="eyebrow text-white/35">{String(active + 1).padStart(2, "0")} / Principle</span>
              <div key={current.title} className="mt-6 animate-[fade-in_0.5s_ease-out]">
                <p className="eyebrow text-[0.7rem] text-cyan">{current.title}</p>
                <p className="mt-5 max-w-sm text-[1.0625rem] leading-relaxed text-white/70">{current.text}</p>
              </div>
              <span
                aria-hidden
                className="mt-10 block h-px w-full bg-gradient-to-r from-azure/60 via-white/10 to-transparent"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8" onMouseLeave={() => setActive(0)}>
            <div className="border-t border-white/10">
              {principles.map((p, i) => {
                const isActive = active === i;
                return (
                  <Reveal key={p.title} delay={i * 60}>
                    <div
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      tabIndex={0}
                      className="group relative border-b border-white/10 py-7 outline-none lg:py-9"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-0 -mx-6 transition-opacity duration-700 lg:-mx-10",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(74,115,255,0.16), rgba(58,241,255,0.05) 45%, transparent 80%)",
                        }}
                      />
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan via-azure to-transparent transition-transform duration-700",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                      <div className="relative flex items-start gap-6 lg:gap-10">
                        <span
                          className={cn(
                            "mt-3 font-mono text-xs transition-colors duration-500",
                            isActive ? "text-cyan" : "text-white/25",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={cn(
                              "display text-[1.6rem] transition-all duration-500 sm:text-[1.9rem] lg:text-[2.1rem]",
                              isActive ? "translate-x-2 text-white" : "text-white/40 group-hover:text-white/65",
                            )}
                          >
                            {p.title}
                          </h3>
                          {/* mobile / tablet inline description */}
                          <div
                            className={cn(
                              "grid transition-all duration-500 lg:hidden",
                              isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <p className="max-w-xl overflow-hidden text-[0.95rem] leading-relaxed text-white/60">
                              {p.text}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight
                          className={cn(
                            "mt-2 h-6 w-6 shrink-0 transition-all duration-500",
                            isActive ? "-translate-y-1 translate-x-1 text-cyan" : "text-white/20",
                          )}
                          strokeWidth={1.5}
                        />
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
  );
}
