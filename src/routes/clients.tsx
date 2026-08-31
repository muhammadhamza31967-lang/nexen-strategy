import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { GlobalPresence } from "@/components/site/GlobalPresence";

import adobeProperty from "@/assets/client-adobe-property-advisor.svg.asset.json";
import dxb from "@/assets/client-dxb-real-estate.svg.asset.json";
import mayfair from "@/assets/client-mayfair.svg.asset.json";
import muazzamEstate from "@/assets/client-muazzam-estate.svg.asset.json";
import mustafaAlAnsari from "@/assets/client-mustafa-al-ansari.png.asset.json";
import rightMove from "@/assets/client-right-move.svg.asset.json";
import drKhurram from "@/assets/client-dr-khurram.svg.asset.json";
import drSarfraz from "@/assets/client-dr-sarfraz.svg.asset.json";
import drShahid from "@/assets/client-dr-shahid-v2.svg.asset.json";
import drShoaib from "@/assets/client-dr-shoaib.svg.asset.json";
import drWaseem from "@/assets/client-dr-waseem.svg.asset.json";
import healthyLifePath from "@/assets/client-healthy-life-path.svg.asset.json";
import organicRoots from "@/assets/client-organic-roots.svg.asset.json";
import pakMedinet from "@/assets/client-pakmedinet.svg.asset.json";
import soapSuds from "@/assets/client-soap-suds.svg.asset.json";
import comwave from "@/assets/client-comwave.svg.asset.json";
import gatd from "@/assets/client-gatd.svg.asset.json";
import phr from "@/assets/client-phr.svg.asset.json";
import quranReading from "@/assets/client-quran-reading.svg.asset.json";
import torque from "@/assets/client-torque.svg.asset.json";
import vivd from "@/assets/client-vivd-v2.svg.asset.json";
import borsac from "@/assets/client-borsac.svg.asset.json";
import nhFusion from "@/assets/client-nh-fusion.svg.asset.json";
import flyShop from "@/assets/client-fly-shop.svg.asset.json";
import glamByNoor from "@/assets/client-glam-by-noor.svg.asset.json";
import minahilKhan from "@/assets/client-minahil-khan.svg.asset.json";
import hiTech from "@/assets/client-hi-tech.svg.asset.json";
import mumpsMotors from "@/assets/client-mumps-motors.png.asset.json";
import sbidernet from "@/assets/client-sbidernet.svg.asset.json";
import oceanOffshore from "@/assets/client-ocean-offshore.svg.asset.json";
import mohsanCo from "@/assets/client-mohsan-co.svg.asset.json";
import roofConnect from "@/assets/client-roofconnect.svg.asset.json";
import royaVenture from "@/assets/client-roya-venture.svg.asset.json";
import umami from "@/assets/client-umami.svg.asset.json";
import heroVideo from "@/assets/clients-hero.mp4.asset.json";

type Client = { name: string; src: string };

const industries: { num: string; title: string; note: string; clients: Client[] }[] = [
  {
    num: "01",
    title: "Education & Training",
    note: "From education providers to executive training organisations, we create digital solutions that make learning, communication and professional development more accessible and engaging.",
    clients: [
      { name: "Comwave", src: comwave.url },
      { name: "GATD", src: gatd.url },
      { name: "PHR", src: phr.url },
      { name: "Quran Reading", src: quranReading.url },
      { name: "Torque", src: torque.url },
      { name: "VIVD", src: vivd.url },
    ],
  },
  {
    num: "02",
    title: "Medical & Healthcare",
    note: "We support healthcare professionals, medical organisations and health-focused brands with digital experiences designed to communicate expertise, build credibility and connect with their audiences.",
    clients: [
      { name: "Dr Khurram", src: drKhurram.url },
      { name: "Dr Sarfraz", src: drSarfraz.url },
      { name: "Dr Shahid", src: drShahid.url },
      { name: "Dr Shoaib", src: drShoaib.url },
      { name: "Dr Waseem", src: drWaseem.url },
      { name: "Healthy Life Path", src: healthyLifePath.url },
      { name: "Organic Roots", src: organicRoots.url },
      { name: "Pak Medinet", src: pakMedinet.url },
      { name: "SoapSuds", src: soapSuds.url },
    ],
  },
  {
    num: "03",
    title: "Real Estate",
    note: "We work with property brands, developers and real estate agencies to create digital experiences that build trust, strengthen their presence and support business growth.",
    clients: [
      { name: "Adobe Property Advisor", src: adobeProperty.url },
      { name: "DXB Real Estate", src: dxb.url },
      { name: "May Fair", src: mayfair.url },
      { name: "Muazzam Real Estate", src: muazzamEstate.url },
      { name: "Mustafa Al Ansari Real Estate", src: mustafaAlAnsari.url },
      { name: "Right Move", src: rightMove.url },
      { name: "Roof Connect", src: roofConnect.url },
    ],
  },
  {
    num: "04",
    title: "Technology & Business Solutions",
    note: "We work with technology, infrastructure and business-focused organisations to create practical digital solutions that simplify complex challenges, strengthen operations and support growth.",
    clients: [
      { name: "Hi Tech", src: hiTech.url },
      { name: "Mumps Motors", src: mumpsMotors.url },
      { name: "Sbidernet", src: sbidernet.url },
      { name: "Ocean of Shore", src: oceanOffshore.url },
      { name: "Mohsan & Co", src: mohsanCo.url },
      { name: "Roya Ventures", src: royaVenture.url },
    ],
  },
  {
    num: "05",
    title: "Fashion & Clothing",
    note: "We help fashion, clothing and lifestyle brands build distinctive digital identities and experiences that showcase their products and connect with modern audiences.",
    clients: [
      { name: "Borsac", src: borsac.url },
      { name: "NH Fusion", src: nhFusion.url },
      { name: "Fly Shop", src: flyShop.url },
      { name: "Glam by Noor", src: glamByNoor.url },
      { name: "Minahil Khan", src: minahilKhan.url },
    ],
  },
  {
    num: "06",
    title: "Food & Hospitality",
    note: "We create digital experiences for food, hospitality and consumer-focused brands that help them present their offerings, strengthen their identity and connect with customers.",
    clients: [{ name: "Umami", src: umami.url }],
  },
];

const totalClients = industries.reduce((n, i) => n + i.clients.length, 0);

function LogoGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {clients.map((c, i) => (
        <Reveal
          key={c.name}
          delay={i * 55}
          className="w-[calc(50%-0.5rem)] sm:w-[calc(33.3333%-0.6667rem)] lg:w-[calc(20%-0.8rem)]"
        >
          <div className="group relative flex h-[132px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-6 py-6 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--azure)_35%,#E5E7EB)] lg:h-[150px]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--azure) 12%, transparent), transparent 70%)",
              }}
            />
            <img
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="relative m-auto max-h-[72px] w-auto max-w-[165px] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Nexen Strategy" },
      {
        name: "description",
        content:
          "Businesses Nexen Strategy has helped move forward across real estate, healthcare, education, fashion, engineering and hospitality.",
      },
      { property: "og:title", content: "Clients — Nexen Strategy" },
      {
        property: "og:description",
        content: "Strategy, design, technology and creativity delivered for businesses across six industries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <Header overHero />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-28 lg:pt-40 lg:pb-36">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            src={heroVideo.url}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.62) 0%, rgba(1,12,98,0.48) 45%, rgba(1,12,98,0.72) 100%)",
            }}
          />
          <div aria-hidden className="grid-faint absolute inset-0 opacity-30" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] rounded-full opacity-30 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-[8%] h-[420px] w-[420px] rounded-full opacity-20 blur-[140px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <defs>
              <linearGradient id="cl-path" x1="0" x2="1">
                <stop offset="0%" stopColor="#3AF1FF" stopOpacity="0" />
                <stop offset="50%" stopColor="#3AF1FF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#4A73FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[120, 260, 400, 520].map((y, i) => (
              <path
                key={y}
                d={`M-50 ${y} C 300 ${y - 70}, 700 ${y + 80}, 1250 ${y - 30}`}
                fill="none"
                stroke="url(#cl-path)"
                strokeWidth="1"
                style={{
                  animation: `fade-in 1.2s ease-out ${i * 0.15}s both`,
                }}
              />
            ))}
          </svg>

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Clients</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-5xl text-[2.6rem] text-white sm:text-6xl lg:text-[5rem]">
                Businesses We&apos;ve Helped Move Forward.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                We work with businesses across different industries, bringing together strategy, design, technology and
                creativity to create meaningful digital experiences and solutions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:max-w-none sm:flex-nowrap sm:items-start sm:gap-x-10 lg:gap-x-16">
                {[
                  { k: `${totalClients}+`, v: "Brands served" },
                  { k: "06", v: "Industries" },
                  { k: "UK, USA & GCC", v: "Markets" },
                  { k: "End-to-end", v: "Delivery" },
                ].map((s) => (
                  <div key={s.v} className="min-w-0">
                    <dt className="display whitespace-nowrap text-[1.6rem] text-white sm:text-[1.8rem] lg:text-[2.2rem]">
                      {s.k}
                    </dt>
                    <dd className="mt-2 text-sm text-white/55">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <GlobalPresence />

        {/* Industries */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.6 }}
          />
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-azure">Our Clients</p>
              <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-azure to-cyan" />
              <h2 className="display mt-5 text-[1.9rem] text-navy sm:text-4xl lg:text-[3rem]">
                Businesses We Support Across Industries.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We work with businesses across diverse industries, delivering digital solutions that solve real
                challenges, strengthen operations and create opportunities for sustainable growth.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div
                aria-hidden
                className="mx-auto mt-16 h-px w-full max-w-4xl lg:mt-20"
                style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.3 }}
              />
            </Reveal>

            {industries.map((ind, idx) => (
              <div key={ind.num} className={idx === 0 ? "mt-16 lg:mt-24" : "mt-24 lg:mt-32"}>

                <Reveal>
                  <div className="min-w-0 text-center">
                    <span className="font-mono text-[0.75rem] text-azure">{ind.num}</span>
                    <h2 className="display mt-3 text-[1.7rem] uppercase text-navy sm:text-[2.2rem] lg:text-[2.7rem]">
                      {ind.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {ind.note}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={60}>
                  <div
                    className="mt-6 h-px w-full"
                    style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.35 }}
                  />
                </Reveal>
                <LogoGrid clients={ind.clients} />
              </div>
            ))}
          </div>
        </section>

        <CtaSection eyebrow="Work with us" heading="Let's Build What's Next Together." />
      </main>
      <Footer />
    </>
  );
}
