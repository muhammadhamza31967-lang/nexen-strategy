import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Compass,
  Network,
  Target,
  TrendingUp,
  Users,
  Search,
  PenTool,
  Repeat,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nexen Strategy" },
      {
        name: "description",
        content:
          "Nexen Strategy brings together strategy, technology, creativity and marketing to help businesses navigate an increasingly digital world.",
      },
      { property: "og:title", content: "About Nexen Strategy" },
      {
        property: "og:description",
        content:
          "A digital partner built around business outcomes — strategy, technology, creativity and marketing under one connected team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stages: { word: string; icon: LucideIcon }[] = [
  { word: "Understand", icon: Search },
  { word: "Create", icon: PenTool },
  { word: "Transform", icon: Repeat },
  { word: "Grow", icon: Sprout },
];

const values: { name: string; text: string; icon: LucideIcon }[] = [
  {
    name: "Think Beyond the Brief",
    text: "We look at the bigger picture and challenge assumptions when a better opportunity exists.",
    icon: Compass,
  },
  {
    name: "Make Technology Useful",
    text: "Technology should simplify business, improve experiences and create opportunities — not create unnecessary complexity.",
    icon: Network,
  },
  {
    name: "Create With Purpose",
    text: "Every design decision, feature and campaign should have a reason behind it.",
    icon: Target,
  },
  {
    name: "Build for the Future",
    text: "We create solutions that can evolve as your business, customers and technology change.",
    icon: TrendingUp,
  },
  {
    name: "Work as One Team",
    text: "The best results come from close collaboration, transparency and shared ownership.",
    icon: Users,
  },
];

function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <>
      <style>{`
        @keyframes ab-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        @keyframes ab-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        @keyframes ab-dash{to{stroke-dashoffset:-1600}}
        @keyframes ab-node{0%,100%{opacity:.25}50%{opacity:.9}}
        .ab-drift{animation:ab-drift 24s ease-in-out infinite}
        .ab-drift2{animation:ab-drift 31s ease-in-out infinite reverse}
        .ab-grid{animation:ab-grid 40s linear infinite}
        .ab-dash{stroke-dasharray:160 900;animation:ab-dash 20s linear infinite}
        .ab-dash2{stroke-dasharray:120 1000;animation:ab-dash 26s linear infinite;animation-delay:-8s}
        .ab-node{animation:ab-node 6s ease-in-out infinite}
        @keyframes ab-orbit{to{transform:rotate(360deg)}}
        @keyframes ab-orbit-r{to{transform:rotate(-360deg)}}
        @keyframes ab-pulse{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:1;transform:scale(1.35)}}
        @keyframes ab-float{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-10px,0)}}
        .ab-orbit{animation:ab-orbit 46s linear infinite;transform-origin:50% 50%}
        .ab-orbit-r{animation:ab-orbit-r 68s linear infinite;transform-origin:50% 50%}
        .ab-pulse{animation:ab-pulse 5s ease-in-out infinite}
        .ab-float{animation:ab-float 9s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.ab-drift,.ab-drift2,.ab-grid,.ab-dash,.ab-dash2,.ab-node{animation:none !important}}
        @media (prefers-reduced-motion: reduce){.ab-orbit,.ab-orbit-r,.ab-pulse,.ab-float{animation:none !important}}
      `}</style>

      <Header />
      <main className="overflow-x-hidden">
        {/* 01 — HERO */}
        <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div aria-hidden className="grid-faint-dark ab-grid absolute inset-[-80px] opacity-70" />
          <div
            aria-hidden
            className="ab-drift pointer-events-none absolute right-[-12%] top-[-18%] h-[620px] w-[620px] rounded-full opacity-[0.16] blur-[120px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="ab-drift2 pointer-events-none absolute left-[-14%] bottom-[-30%] h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[120px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              {/* content */}
              <div className="lg:col-span-6">
                <Reveal>
                  <p className="eyebrow text-azure">About Us</p>
                </Reveal>
                <Reveal delay={80}>
                  <h1
                    className="display mt-7 max-w-[16ch] text-navy"
                    style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.1rem)" }}
                  >
                    We Build What Businesses Need Next.
                  </h1>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-8 border-l-2 border-azure/60 pl-6">
                    <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
                      Nexen Strategy brings together strategy, technology, creativity and marketing
                      to help businesses navigate an increasingly digital world.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={220}>
                  <div className="mt-10">
                    <Link to="/" hash="services" className="btn-primary group">
                      Explore Our Services
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* visual */}
              <div className="lg:col-span-6">
                <Reveal delay={180}>
                  <div className="relative isolate overflow-hidden rounded-[26px] bg-navy p-6 sm:p-8">
                    <div aria-hidden className="grid-faint ab-grid absolute inset-[-60px] opacity-60" />
                    <div
                      aria-hidden
                      className="ab-drift pointer-events-none absolute inset-[-25%]"
                      style={{
                        background:
                          "radial-gradient(45% 55% at 25% 25%, rgba(74,115,255,0.45) 0%, transparent 65%), radial-gradient(45% 55% at 80% 80%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                      }}
                    />
                    <svg
                      aria-hidden
                      className="relative block h-auto w-full"
                      viewBox="0 0 520 460"
                      fill="none"
                    >
                      <g className="ab-orbit" stroke="#4A73FF" strokeOpacity="0.28" fill="none">
                        <circle cx="260" cy="230" r="188" strokeDasharray="3 12" />
                      </g>
                      <g className="ab-orbit-r" stroke="#3AF1FF" strokeOpacity="0.22" fill="none">
                        <circle cx="260" cy="230" r="132" strokeDasharray="2 16" />
                      </g>
                      <g stroke="#3AF1FF" strokeOpacity="0.35" strokeWidth="1" fill="none">
                        <path className="ab-dash" d="M260 60 L104 160 L104 320 L260 410 L416 320 L416 160 Z" />
                        <path className="ab-dash2" d="M104 160 L416 320 M416 160 L104 320 M260 60 L260 410" strokeOpacity="0.2" />
                      </g>
                      <g stroke="#4A73FF" strokeOpacity="0.5" strokeWidth="1" fill="none">
                        <path d="M260 230 L260 60 M260 230 L104 160 M260 230 L416 160 M260 230 L104 320 M260 230 L416 320 M260 230 L260 410" strokeOpacity="0.28" />
                      </g>
                      <g className="ab-float">
                        <rect x="212" y="182" width="96" height="96" rx="18" fill="none" stroke="#3AF1FF" strokeOpacity="0.55" />
                        <rect x="230" y="200" width="60" height="60" rx="12" fill="none" stroke="#4A73FF" strokeOpacity="0.6" />
                        <circle cx="260" cy="230" r="7" fill="#3AF1FF" />
                      </g>
                      <g fill="#3AF1FF">
                        {[[260, 60], [104, 160], [416, 160], [104, 320], [416, 320], [260, 410]].map(
                          ([cx, cy], i) => (
                            <circle
                              key={`${cx}-${cy}`}
                              className="ab-pulse"
                              cx={cx}
                              cy={cy}
                              r="4"
                              style={{ animationDelay: `${i * -0.8}s` }}
                            />
                          ),
                        )}
                      </g>
                    </svg>

                    <div className="pointer-events-none absolute inset-0">
                      {[
                        { t: "Strategy", pos: "left-6 top-8" },
                        { t: "Technology", pos: "right-6 top-8" },
                        { t: "Creativity", pos: "left-6 bottom-8" },
                        { t: "Growth", pos: "right-6 bottom-8" },
                      ].map((l) => (
                        <span
                          key={l.t}
                          className={cn(
                            "absolute font-mono text-[0.6rem] uppercase tracking-[0.28em] text-white/45 sm:text-[0.68rem]",
                            l.pos,
                          )}
                        >
                          {l.t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — WHO WE ARE */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-36">
          <div
            aria-hidden
            className="ab-drift2 pointer-events-none absolute right-[-10%] top-[10%] h-[480px] w-[480px] rounded-full opacity-[0.1] blur-[130px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Who We Are</p>
            </Reveal>
            <Reveal delay={70}>
              <h2
                className="display mt-10 max-w-5xl text-navy"
                style={{ fontSize: "clamp(2rem, 4.4vw, 3.8rem)" }}
              >
                A Digital Partner Built Around Business Outcomes.
              </h2>
            </Reveal>
            <div aria-hidden className="mt-12 h-px w-full bg-border" />
            <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal delay={80}>
                  <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
                    We work with organisations that want more from their digital presence than a
                    website that simply looks good.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
                    Our work spans digital experiences, software solutions, AI and automation,
                    marketing and media — allowing us to support businesses across multiple stages of
                    their digital journey.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:pt-16">
                <Reveal delay={200}>
                  <p className="max-w-[52ch] border-l-2 border-cyan/70 pl-6 text-lg leading-relaxed text-navy">
                    Whether you need to launch, transform, automate or grow, we bring the people,
                    expertise and technology together to make it happen.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — OUR APPROACH */}
        <section className="relative overflow-hidden bg-navy py-24 lg:py-36">
          <div aria-hidden className="grid-faint ab-grid absolute inset-[-90px]" />
          <div
            aria-hidden
            className="ab-drift pointer-events-none absolute left-[10%] top-[-20%] h-[560px] w-[560px] rounded-full opacity-25 blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-cyan">Our Approach</p>
                </Reveal>
                <Reveal delay={70}>
                  <h2
                    className="display mt-8 text-white"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
                  >
                    Understand. Create. Transform. Grow.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
                <Reveal delay={130}>
                  <p className="text-lg leading-relaxed text-white/70">
                    We start by understanding the business behind the project.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-7 text-lg leading-relaxed text-white/70">
                    That means looking beyond features and technology to understand your customers,
                    processes, objectives and challenges.
                  </p>
                </Reveal>
                <Reveal delay={230}>
                  <p className="mt-7 text-lg leading-relaxed text-white/70">
                    From there, we develop solutions that are practical, scalable and aligned with
                    where your business is going — not simply where it is today.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* stage flow */}
            <div className="relative mt-20 lg:mt-28">
              <div aria-hidden className="absolute left-0 top-[26px] hidden h-px w-full bg-white/15 lg:block" />
              <svg aria-hidden className="absolute left-0 top-[18px] hidden h-4 w-full lg:block" viewBox="0 0 1200 16" preserveAspectRatio="none" fill="none">
                <path className="ab-dash" d="M0 8 H1200" stroke="#3AF1FF" strokeOpacity="0.7" strokeWidth="1.2" />
              </svg>
              <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {stages.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.word} delay={i * 100} as="li">
                      <div className="group relative">
                        <span
                          aria-hidden
                          className="absolute -top-[30px] left-0 hidden h-3 w-3 rounded-full border-2 border-cyan bg-navy transition-transform duration-500 group-hover:scale-125 lg:block"
                        />
                        <div className="flex items-center gap-4 lg:pt-6">
                          <Icon className="h-6 w-6 text-cyan transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.4} />
                          <span className="font-mono text-xs text-white/40">
                            0{i + 1}
                          </span>
                        </div>
                        <h3 className="display mt-6 text-3xl text-white lg:text-[2.4rem]">{s.word}</h3>
                        <span
                          aria-hidden
                          className="mt-6 block h-px w-10 bg-gradient-to-r from-cyan to-azure transition-all duration-500 group-hover:w-full"
                        />
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* 04 — OUR VALUES */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-36">
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Our Values</p>
            </Reveal>
            <div className="mt-12 border-t border-border">
              {values.map((v, i) => {
                const Icon = v.icon;
                const on = activeValue === i;
                return (
                  <Reveal key={v.name} delay={i * 60}>
                    <div
                      onMouseEnter={() => setActiveValue(i)}
                      onFocus={() => setActiveValue(i)}
                      tabIndex={0}
                      className="group relative grid gap-4 border-b border-border py-9 outline-none transition-[padding] duration-500 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[auto_minmax(0,0.9fr)_minmax(0,1fr)] lg:py-11 lg:hover:pl-4 lg:focus-visible:pl-4"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute left-0 top-0 h-full w-px transition-opacity duration-500",
                          on ? "opacity-100" : "opacity-0",
                        )}
                        style={{ background: "linear-gradient(180deg, #3AF1FF, #4A73FF)" }}
                      />
                      <Icon
                        className={cn(
                          "h-7 w-7 transition-all duration-500",
                          on ? "-translate-y-0.5 text-azure" : "text-navy/30",
                        )}
                        strokeWidth={1.4}
                      />
                      <h3
                        className={cn(
                          "display text-2xl transition-colors duration-500 sm:text-3xl lg:text-[2.3rem]",
                          on ? "text-navy" : "text-navy/60",
                        )}
                      >
                        {v.name}
                      </h3>
                      <p className="max-w-[56ch] text-base leading-relaxed text-muted-foreground sm:col-start-2 lg:col-start-3">
                        {v.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05 — ABOUT CTA */}
        <section className="relative bg-background pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-[24px] bg-navy px-7 py-14 sm:px-12 lg:px-20 lg:py-20">
              <div
                aria-hidden
                className="ab-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div aria-hidden className="grid-faint ab-grid pointer-events-none absolute inset-[-80px] opacity-70" />
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid slice" fill="none">
                <path className="ab-dash" d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40" stroke="#3AF1FF" strokeOpacity="0.35" strokeWidth="1" />
                <path className="ab-dash2" d="M-60 90 C 300 130, 520 280, 880 250 S 1180 190, 1280 170" stroke="#4A73FF" strokeOpacity="0.4" strokeWidth="1" />
              </svg>

              <div className="relative max-w-3xl">
                <Reveal>
                  <h2
                    className="display text-white"
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)" }}
                  >
                    Let's Build Something That Matters.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">
                    Tell us where you want to go. We'll help you work out how to get there.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Talk to Nexen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
