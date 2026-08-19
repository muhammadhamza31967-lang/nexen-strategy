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
  return (
    <section className="cll relative overflow-hidden border-t border-border bg-white">
      <style>{`
        @keyframes cll-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
        @keyframes cll-glow{0%{transform:translate3d(-8%,0,0) scale(1)}50%{transform:translate3d(8%,0,0) scale(1.08)}100%{transform:translate3d(-8%,0,0) scale(1)}}
        .cll-track{animation:cll-marquee 38s linear infinite;width:max-content}
        .cll:hover .cll-track{animation-play-state:paused}
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
          <div className="relative overflow-hidden py-10 lg:py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="cll-track flex items-center">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {clients.map((c) => (
                    <div key={c.name} className="flex items-center justify-center px-10 sm:px-14 lg:px-20">
                      <img
                        src={c.src}
                        alt={`${c.name} logo`}
                        loading="lazy"
                        className={`w-auto max-w-[220px] object-contain lg:max-w-[280px] ${c.cls}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
