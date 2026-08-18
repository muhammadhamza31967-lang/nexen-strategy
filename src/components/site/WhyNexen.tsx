import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    n: "01",
    title: "Strategy",
    text: "We understand your objectives before recommending the solution.",
  },
  {
    n: "02",
    title: "Technology",
    text: "We use the right platforms and technologies to build scalable digital solutions.",
  },
  {
    n: "03",
    title: "Creativity",
    text: "We make complex ideas clear, engaging and memorable.",
  },
  {
    n: "04",
    title: "Performance",
    text: "We focus on outcomes that create genuine business value.",
  },
];

export function WhyNexen() {
  const [hovered, setHovered] = useState<number | null>(null);

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

        <div className="absolute inset-y-0 left-0 w-[38%]">
          <div
            className="wn-sweep h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(74,115,255,0.16) 40%, rgba(58,241,255,0.07) 60%, transparent)",
            }}
          />
        </div>

        {/* readability veil */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(1,12,98,0.55) 0%, rgba(1,12,98,0.35) 45%, rgba(1,12,98,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-[140px]">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-cyan">Why Nexen</p>
            <span aria-hidden className="mt-5 block h-px w-20 bg-gradient-to-r from-cyan to-transparent" />
            <h2 className="display mt-8 text-[2.4rem] text-white sm:text-[3.4rem] lg:text-[4.5rem]">
              More Than a Digital Agency.
              <br />A Partner for What&apos;s Next.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:pt-20">
            <p className="text-[1.0625rem] leading-relaxed text-white/70 lg:text-[1.125rem]">
              We don&apos;t believe in building technology for technology&apos;s sake.
            </p>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/55 lg:text-[1.125rem]">
              Every website, application, campaign and automation we create starts with a simple question:
            </p>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-white lg:text-[1.25rem]">
              What does this need to achieve for the business?
            </p>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-x-16 gap-y-14 sm:grid-cols-2 lg:mt-32 lg:gap-x-24 lg:gap-y-20">
          {pillars.map((p, i) => {
            const isOn = hovered === i;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  className="group relative outline-none"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -inset-x-6 -inset-y-6 transition-opacity duration-700 lg:-inset-x-10",
                      isOn ? "opacity-100" : "opacity-0",
                    )}
                    style={{
                      background:
                        "radial-gradient(80% 100% at 0% 0%, rgba(74,115,255,0.16), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors duration-500",
                        isOn ? "text-cyan" : "text-white/30",
                      )}
                    >
                      {p.n}
                    </span>
                    <span aria-hidden className="mt-5 block h-px w-full bg-white/12">
                      <span
                        className={cn(
                          "block h-px origin-left bg-gradient-to-r from-cyan via-azure to-transparent transition-transform duration-700",
                          isOn ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </span>
                    <h3
                      className={cn(
                        "display mt-7 text-[1.75rem] transition-colors duration-500 lg:text-[2.1rem]",
                        isOn ? "text-white" : "text-white/75",
                      )}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-5 max-w-md text-[1rem] leading-relaxed transition-all duration-500 lg:text-[1.0625rem]",
                        isOn ? "translate-x-1 text-white/75" : "text-white/50",
                      )}
                    >
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
