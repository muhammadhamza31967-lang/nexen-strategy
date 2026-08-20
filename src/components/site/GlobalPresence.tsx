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
        {/* Shahada (stylised Arabic script line) */}
        <g fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
          <path d="M9 16c1.2-2 2.6-2 3.6 0M14.5 16.5c0-2 .6-2.6 1.6-2.6s1.4.8 1.4 2.6M20 16.5c.2-2 1-2.6 2-2.6M24.5 16.5c0-2.4.8-3.2 2-3.2s1.8 1 1.8 3.2M31 16.5c0-2 .7-2.7 1.8-2.7s1.6.9 1.6 2.7M37 16.5c.3-2.3 1.2-3 2.3-3s1.8.9 1.8 3M44 16.5c0-2.2.8-3 1.9-3s1.7.8 1.7 3" />
          <path d="M8 18.6h40" strokeWidth="1.2" />
          <path d="M13 12.2c.7-.9 1.6-.9 2.3 0M27 11.8c.7-.9 1.6-.9 2.3 0M39 12c.7-.9 1.6-.9 2.3 0" strokeWidth="1" />
        </g>
        {/* Sword */}
        <g fill="#fff">
          <rect x="13" y="25.3" width="31" height="1.9" rx="0.95" />
          <path d="M13 26.25l-3.4-2.1v4.2z" />
          <rect x="44" y="24.2" width="2.2" height="4.1" rx="0.8" />
          <rect x="46.6" y="25" width="3.4" height="2.5" rx="1.2" />
        </g>
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
  const track = [...countries, ...countries, ...countries];

  return (
    <section className="gp relative overflow-hidden bg-white py-14 lg:py-16">
      <style>{`
        .gp{--gp-dur:38s}
        @keyframes gp-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-33.3333%,0,0)}}
        @keyframes gp-wave{0%{transform:rotateY(-8deg) rotateX(2.5deg) skewY(1.2deg) translateY(0)}25%{transform:rotateY(0deg) rotateX(-1deg) skewY(-1.4deg) translateY(-3px)}50%{transform:rotateY(8deg) rotateX(-2deg) skewY(1deg) translateY(-5px)}75%{transform:rotateY(0deg) rotateX(1.5deg) skewY(-1.2deg) translateY(-2px)}100%{transform:rotateY(-8deg) rotateX(2.5deg) skewY(1.2deg) translateY(0)}}
        @keyframes gp-cloth{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        @keyframes gp-drift{0%{transform:translateX(-2%)}50%{transform:translateX(2%)}100%{transform:translateX(-2%)}}
        @keyframes gp-dash{to{stroke-dashoffset:-320}}
        .gp-track{display:flex;width:max-content;animation:gp-marquee var(--gp-dur) linear infinite}
        .gp-flag{animation:gp-wave 6s ease-in-out infinite;transform-style:preserve-3d}
        .gp-cloth{background-size:200% 100%;animation:gp-cloth 4.5s linear infinite}
        @media (prefers-reduced-motion: reduce){.gp-track,.gp-flag,.gp-cloth,.gp-dash,.gp-glow{animation:none !important}}
      `}</style>

      {/* light premium background details */}
      <div aria-hidden className="grid-faint absolute inset-0 opacity-[0.35]" />
      <div
        aria-hidden
        className="gp-glow pointer-events-none absolute inset-0"
        style={{
          animation: "gp-drift 30s ease-in-out infinite",
          background:
            "radial-gradient(45% 70% at 15% 20%, color-mix(in oklab, #4a73ff 9%, transparent), transparent 70%), radial-gradient(40% 60% at 85% 85%, color-mix(in oklab, #3af1ff 10%, transparent), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <linearGradient id="gp-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#3af1ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4a73ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3af1ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[70, 170].map((y, i) => (
          <path
            key={y}
            d={`M-40 ${y} C 280 ${y - 55}, 700 ${y + 60}, 1240 ${y - 25}`}
            fill="none"
            stroke="url(#gp-line)"
            strokeWidth="1"
            strokeDasharray="7 13"
            className="gp-dash"
            style={{ animation: `gp-dash ${18 + i * 6}s linear infinite` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[40%_1fr] lg:gap-12 lg:px-12">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-azure">Where We Work</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="display mt-4 text-[1.9rem] text-navy sm:text-[2.3rem] lg:text-[2.8rem]">
              Global Reach. Local Understanding.
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div
              className="mt-6 h-px w-24"
              style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.7 }}
            />
          </Reveal>
        </div>

        <div className="relative min-w-0 overflow-hidden" style={{ perspective: "1000px" }}>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
          />
          <div className="gp-track py-6">
            {track.map((c, i) => (
              <div key={`${c.name}-${i}`} className="shrink-0 px-4 lg:px-6">
                <div
                  className="gp-flag relative h-[62px] w-[92px] rounded-[6px] lg:h-[70px] lg:w-[104px]"
                  style={{
                    animationDelay: `${(i % countries.length) * 0.4}s`,
                    boxShadow:
                      "0 16px 28px -16px rgba(1,12,98,0.45), 0 0 0 1px rgba(1,12,98,0.08)",
                  }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[6px]">{c.flag}</div>
                  <span
                    aria-hidden
                    className="gp-cloth pointer-events-none absolute inset-0 rounded-[6px]"
                    style={{
                      animationDelay: `${(i % countries.length) * 0.35}s`,
                      background:
                        "linear-gradient(105deg, rgba(255,255,255,0.42) 0%, rgba(1,12,98,0.20) 14%, rgba(255,255,255,0.30) 28%, rgba(1,12,98,0.18) 42%, rgba(255,255,255,0.34) 56%, rgba(1,12,98,0.20) 72%, rgba(255,255,255,0.40) 100%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
