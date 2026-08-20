import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";

type Country = { name: string; short: string; flag: React.ReactNode };

const V = "0 0 60 40";

const countries: Country[] = [
  {
    name: "Pakistan",
    short: "PK",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="40" fill="#01411C" />
        <rect width="15" height="40" fill="#fff" />
        <circle cx="38" cy="20" r="9" fill="#fff" />
        <circle cx="41.5" cy="17.5" r="9" fill="#01411C" />
        <path d="M45 12l1.1 2.6 2.8.3-2.1 1.9.6 2.7-2.4-1.4-2.4 1.4.6-2.7-2.1-1.9 2.8-.3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "United Kingdom",
    short: "UK",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="8" />
      </svg>
    ),
  },
  {
    name: "United Arab Emirates",
    short: "UAE",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="13.34" fill="#00732F" />
        <rect y="13.34" width="60" height="13.33" fill="#fff" />
        <rect y="26.67" width="60" height="13.33" fill="#000" />
        <rect width="15" height="40" fill="#FF0000" />
      </svg>
    ),
  },
  {
    name: "Saudi Arabia",
    short: "KSA",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="40" fill="#006C35" />
        <rect x="12" y="13" width="36" height="2.4" rx="1.2" fill="#fff" />
        <rect x="15" y="17.5" width="30" height="2" rx="1" fill="#fff" />
        <rect x="12" y="27" width="36" height="1.8" rx="0.9" fill="#fff" />
        <path d="M12 27.9l3-2.2v4.4z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Singapore",
    short: "SG",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="20" fill="#ED2939" />
        <rect y="20" width="60" height="20" fill="#fff" />
        <circle cx="14" cy="10" r="7" fill="#fff" />
        <circle cx="17.5" cy="10" r="7" fill="#ED2939" />
        {[
          [24, 6],
          [28.4, 9.2],
          [26.7, 14.2],
          [21.3, 14.2],
          [19.6, 9.2],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#fff" />
        ))}
      </svg>
    ),
  },
  {
    name: "Qatar",
    short: "QA",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="40" fill="#8A1538" />
        <path
          d="M0 0h14l-6 3.33 6 3.34-6 3.33 6 3.33-6 3.34 6 3.33-6 3.33 6 3.34-6 3.33 6 3.33-6 3.34 6 3.33H0z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "United States",
    short: "US",
    flag: (
      <svg viewBox={V} className="h-full w-full">
        <rect width="60" height="40" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i * 3.08} width="60" height="3.08" fill="#B22234" />
        ))}
        <rect width="26" height="21.5" fill="#3C3B6E" />
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={2.5 + c * 4.3 + (r % 2 ? 2.1 : 0)}
              cy={3 + r * 5.2}
              r="1"
              fill="#fff"
            />
          )),
        )}
      </svg>
    ),
  },
];

export function GlobalPresence() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width - 0.5).toFixed(3)}`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height - 0.5).toFixed(3)}`);
  };

  return (
    <section className="gp relative overflow-hidden bg-navy py-16 lg:py-20">
      <style>{`
        .gp{--mx:0;--my:0}
        @keyframes gp-float{0%,100%{transform:translateY(0) rotateX(var(--rx)) rotateY(var(--ry))}50%{transform:translateY(-7px) rotateX(calc(var(--rx) + 2deg)) rotateY(calc(var(--ry) - 3deg))}}
        @keyframes gp-drift{0%{transform:translateX(-2%)}50%{transform:translateX(2%)}100%{transform:translateX(-2%)}}
        @keyframes gp-dash{to{stroke-dashoffset:-320}}
        @keyframes gp-node{0%,100%{opacity:.25}50%{opacity:1}}
        .gp-flag{animation:gp-float 7s ease-in-out infinite;transform-style:preserve-3d}
        @media (prefers-reduced-motion: reduce){.gp-flag,.gp-drift,.gp-dash,.gp-node{animation:none !important}}
      `}</style>

      {/* background layers */}
      <div aria-hidden className="grid-faint absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          animation: "gp-drift 26s ease-in-out infinite",
          background:
            "radial-gradient(50% 70% at 20% 20%, color-mix(in oklab, #4a73ff 22%, transparent), transparent 70%), radial-gradient(45% 65% at 85% 80%, color-mix(in oklab, #3af1ff 16%, transparent), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      >
        <defs>
          <linearGradient id="gp-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#3af1ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#3af1ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4a73ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[60, 140, 220].map((y, i) => (
          <path
            key={y}
            d={`M-40 ${y} C 250 ${y - 60}, 650 ${y + 70}, 1240 ${y - 20}`}
            fill="none"
            stroke="url(#gp-line)"
            strokeWidth="1"
            strokeDasharray="8 12"
            className="gp-dash"
            style={{ animation: `gp-dash ${16 + i * 5}s linear infinite` }}
          />
        ))}
        {[
          [180, 82],
          [520, 148],
          [860, 96],
          [1040, 196],
        ].map(([x, y], i) => (
          <circle
            key={x}
            cx={x}
            cy={y}
            r="2.5"
            fill="#3af1ff"
            className="gp-node"
            style={{ animation: `gp-node ${5 + i}s ease-in-out infinite` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow text-cyan">Where We Work</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="display mt-4 max-w-3xl text-[1.9rem] text-white sm:text-[2.4rem] lg:text-[3rem]">
            Global Reach. Local Understanding.
          </h2>
        </Reveal>

        <div
          ref={wrapRef}
          onMouseMove={onMove}
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:mt-12 lg:grid-cols-7 lg:gap-x-6"
          style={{ perspective: "900px" }}
        >
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="group flex flex-col items-center text-center">
                <div
                  className="gp-flag relative h-[62px] w-[92px] rounded-[6px] transition-transform duration-500 group-hover:scale-[1.06] lg:h-[68px] lg:w-[102px]"
                  style={
                    {
                      "--rx": "calc(var(--my) * -10deg)",
                      "--ry": "calc(var(--mx) * 14deg)",
                      animationDelay: `${i * 0.45}s`,
                      boxShadow:
                        "0 18px 34px -18px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.08)",
                    } as React.CSSProperties
                  }
                >
                  <div className="h-full w-full overflow-hidden rounded-[6px]">{c.flag}</div>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[6px]"
                    style={{
                      background:
                        "linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.04) 32%, rgba(0,0,0,0.28) 62%, rgba(255,255,255,0.16) 100%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-2 -bottom-3 h-4 rounded-full opacity-60 blur-md"
                    style={{ background: "radial-gradient(50% 100% at 50% 0%, #4a73ff, transparent 70%)" }}
                  />
                </div>
                <p className="mt-5 text-[0.8rem] leading-snug text-white/80 lg:text-[0.85rem]">
                  {c.name}
                </p>
                <span className="mt-1 font-mono text-[0.6rem] tracking-[0.2em] text-cyan/60">
                  {c.short}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
