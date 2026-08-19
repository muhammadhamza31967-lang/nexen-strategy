import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import cosh from "@/assets/client-cosh.svg.asset.json";
import college from "@/assets/client-college-of-science.svg.asset.json";
import drAmir from "@/assets/client-dr-amir.svg.asset.json";

const clients = [
  { name: "COSH", src: cosh.url, cls: "h-12 lg:h-16" },
  { name: "College of Science", src: college.url, cls: "h-14 lg:h-20" },
  { name: "Dr Amir", src: drAmir.url, cls: "h-16 lg:h-24" },
];

export function ClientLogos() {
  const [paused, setPaused] = useState(false);
  const [delay, setDelay] = useState(0);
  const DURATION = 26;
  const PER_GROUP = clients.length * 2;
  const STEP = DURATION / PER_GROUP;
  const rafRef = useRef<number | null>(null);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const nudge = (dir: 1 | -1) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const from = delay;
    const to = delay + dir * STEP;
    const dur = 650;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setDelay(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <section className="cll relative overflow-hidden border-t border-border bg-white">
      <style>{`
        @keyframes cll-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
        @keyframes cll-glow{0%{transform:translate3d(-8%,0,0) scale(1)}50%{transform:translate3d(8%,0,0) scale(1.08)}100%{transform:translate3d(-8%,0,0) scale(1)}}
        .cll-track{animation:cll-marquee ${DURATION}s linear infinite;width:max-content}
        .cll-track[data-paused="true"]{animation-play-state:paused}
        .cll-glow{animation:cll-glow 26s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.cll-track,.cll-glow{animation:none !important}}
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_80%_at_50%_50%,black,transparent_78%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(1,12,98,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,12,98,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="cll-glow absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-[140px]"
          style={{ background: "radial-gradient(circle, #4A73FF 0%, #3AF1FF 45%, transparent 72%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-azure">Clients</p>
          <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-azure to-cyan" />
          <h2 className="display mt-5 text-[1.7rem] text-navy sm:text-3xl lg:text-[2.4rem]">
            Trusted by businesses building what&rsquo;s next.
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-12 lg:mt-14">
          <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent" />
          <div className="relative">
            <button
              type="button"
              aria-label="Previous client logos"
              onClick={() => setDelay((d) => d + STEP)}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 p-2 text-[#ff7a3d] transition-transform duration-300 hover:-translate-x-0.5 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              aria-label="Next client logos"
              onClick={() => setDelay((d) => d - STEP)}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 p-2 text-[#ff7a3d] transition-transform duration-300 hover:translate-x-0.5 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>

            <div className="relative overflow-hidden px-12 py-10 sm:px-16 lg:py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className="cll-track flex items-center"
                data-paused={paused}
                style={{ animationDelay: `${delay}s` }}
              >
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                    {[0, 1].map((rep) =>
                      clients.map((c) => (
                        <div
                          key={`${rep}-${c.name}`}
                          className="flex items-center justify-center px-10 sm:px-14 lg:px-20"
                        >
                          <img
                            src={c.src}
                            alt={`${c.name} logo`}
                            loading="lazy"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            className={`w-auto max-w-[220px] object-contain lg:max-w-[280px] ${c.cls}`}
                          />
                        </div>
                      )),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
