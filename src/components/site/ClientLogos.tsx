import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import cosh from "@/assets/client-cosh.svg.asset.json";
import college from "@/assets/client-college-of-science.svg.asset.json";
import drAmir from "@/assets/client-dr-amir.svg.asset.json";
import adobeProperty from "@/assets/client-adobe-property-advisor.svg.asset.json";
import comwave from "@/assets/client-comwave.svg.asset.json";
import dxb from "@/assets/client-dxb-real-estate.svg.asset.json";
import drKhurram from "@/assets/client-dr-khurram.svg.asset.json";
import drSarfraz from "@/assets/client-dr-sarfraz.svg.asset.json";
import drShahid from "@/assets/client-dr-shahid-v2.svg.asset.json";
import drShoaib from "@/assets/client-dr-shoaib.svg.asset.json";
import drWaseem from "@/assets/client-dr-waseem.svg.asset.json";
import englishCoach from "@/assets/client-english-coach.svg.asset.json";
import flyShop from "@/assets/client-fly-shop.svg.asset.json";
import gatd from "@/assets/client-gatd.svg.asset.json";
import glamByNoor from "@/assets/client-glam-by-noor.svg.asset.json";
import healthyLifePath from "@/assets/client-healthy-life-path.svg.asset.json";
import hiTech from "@/assets/client-hi-tech.svg.asset.json";
import mayfair from "@/assets/client-mayfair.svg.asset.json";
import minahilKhan from "@/assets/client-minahil-khan.svg.asset.json";
import mohsanCo from "@/assets/client-mohsan-co.svg.asset.json";
import muazzamEstate from "@/assets/client-muazzam-estate.svg.asset.json";
import nhFusion from "@/assets/client-nh-fusion.svg.asset.json";
import oceanOffshore from "@/assets/client-ocean-offshore.svg.asset.json";
import organicRoots from "@/assets/client-organic-roots.svg.asset.json";
import pakMedinet from "@/assets/client-pakmedinet.svg.asset.json";
import phr from "@/assets/client-phr.svg.asset.json";
import quranReading from "@/assets/client-quran-reading.svg.asset.json";
import rightMove from "@/assets/client-right-move.svg.asset.json";
import roofConnect from "@/assets/client-roofconnect.svg.asset.json";
import royaVenture from "@/assets/client-roya-venture.svg.asset.json";
import mumpsMotors from "@/assets/client-mumps-motors.png.asset.json";
import mustafaAlAnsari from "@/assets/client-mustafa-al-ansari.png.asset.json";
import sbidernet from "@/assets/client-sbidernet.svg.asset.json";
import soapSuds from "@/assets/client-soap-suds.svg.asset.json";
import torque from "@/assets/client-torque.svg.asset.json";
import umami from "@/assets/client-umami.svg.asset.json";
import vivd from "@/assets/client-vivd-v2.svg.asset.json";

const LOGO_CLS = "h-9 lg:h-12";
const clients = [
  { name: "COSH", src: cosh.url, cls: LOGO_CLS },
  { name: "College of Science", src: college.url, cls: LOGO_CLS },
  { name: "Dr Amir", src: drAmir.url, cls: LOGO_CLS },
  { name: "English Coach", src: englishCoach.url, cls: LOGO_CLS },
  { name: "Dr Shahid", src: drShahid.url, cls: LOGO_CLS },
  { name: "Dr Shoaib", src: drShoaib.url, cls: LOGO_CLS },
  { name: "Dr Sarfraz", src: drSarfraz.url, cls: LOGO_CLS },
  { name: "Dr Khurram", src: drKhurram.url, cls: LOGO_CLS },
  { name: "Dr Waseem", src: drWaseem.url, cls: LOGO_CLS },
  { name: "Comwave", src: comwave.url, cls: LOGO_CLS },
  { name: "DXB Real Estate", src: dxb.url, cls: LOGO_CLS },
  { name: "Adobe Property Advisor", src: adobeProperty.url, cls: LOGO_CLS },
  { name: "Fly Shop", src: flyShop.url, cls: LOGO_CLS },
  { name: "GATD", src: gatd.url, cls: LOGO_CLS },
  { name: "Hi Tech", src: hiTech.url, cls: LOGO_CLS },
  { name: "Mayfair", src: mayfair.url, cls: LOGO_CLS },
  { name: "Healthy Life Path", src: healthyLifePath.url, cls: LOGO_CLS },
  { name: "Glam by Noor", src: glamByNoor.url, cls: LOGO_CLS },
  { name: "Minahil Khan", src: minahilKhan.url, cls: LOGO_CLS },
  { name: "Mohsan & Co", src: mohsanCo.url, cls: LOGO_CLS },
  { name: "Muazzam Estate", src: muazzamEstate.url, cls: LOGO_CLS },
  { name: "NH Fusion", src: nhFusion.url, cls: LOGO_CLS },
  { name: "Ocean Offshore", src: oceanOffshore.url, cls: LOGO_CLS },
  { name: "Organic Roots", src: organicRoots.url, cls: LOGO_CLS },
  { name: "PakMedinet", src: pakMedinet.url, cls: LOGO_CLS },
  { name: "PHR", src: phr.url, cls: LOGO_CLS },
  { name: "Quran Reading", src: quranReading.url, cls: LOGO_CLS },
  { name: "Right Move", src: rightMove.url, cls: LOGO_CLS },
  { name: "RoofConnect", src: roofConnect.url, cls: LOGO_CLS },
  { name: "Roya Venture", src: royaVenture.url, cls: LOGO_CLS },
  { name: "Mumps Motors", src: mumpsMotors.url, cls: LOGO_CLS },
  { name: "Mustafa Al Ansari Real Estate", src: mustafaAlAnsari.url, cls: LOGO_CLS },
  { name: "Sbidernet", src: sbidernet.url, cls: LOGO_CLS },
  { name: "Soap Suds", src: soapSuds.url, cls: LOGO_CLS },
  { name: "Torque", src: torque.url, cls: LOGO_CLS },
  { name: "Umami", src: umami.url, cls: LOGO_CLS },
  { name: "VIVD", src: vivd.url, cls: LOGO_CLS },
];

export function ClientLogos() {
  const [paused, setPaused] = useState(false);
  const [delay, setDelay] = useState(0);
  const DURATION = 126;
  const PER_GROUP = clients.length;
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
            <div className="relative overflow-hidden py-10 lg:py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className="cll-track flex items-center"
                data-paused={paused}
                style={{ animationDelay: `${delay}s` }}
              >
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                    {[0].map((rep) =>
                      clients.map((c) => (
                        <div
                          key={`${rep}-${c.name}`}
                          className="flex items-center justify-center px-8 sm:px-12 lg:px-16"
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
          <div className="mt-7 flex items-center justify-center gap-10">
            <button
              type="button"
              aria-label="Previous client logos"
              onClick={() => nudge(1)}
              className="p-2 text-[#ff7a3d] transition-transform duration-300 hover:-translate-x-0.5 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              aria-label="Next client logos"
              onClick={() => nudge(-1)}
              className="p-2 text-[#ff7a3d] transition-transform duration-300 hover:translate-x-0.5 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
