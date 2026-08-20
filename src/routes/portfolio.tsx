import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcMedia from "@/assets/svc-media.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexen Strategy" },
      {
        name: "description",
        content:
          "Selected digital solutions, technology platforms and business-focused projects built by Nexen Strategy to help organisations launch, transform, automate and grow.",
      },
      { property: "og:title", content: "Solutions Built for Real Business Challenges — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "Digital experiences, software, AI and automation, brand, growth and media projects built around how businesses operate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  href: string;
  dark?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    category: "Web & App Development",
    title: "Digital Experiences Built Around Business Goals",
    description:
      "A modern digital experience designed to communicate the business clearly, improve customer journeys and create a stronger digital foundation for growth.",
    capabilities: ["Strategy", "UX/UI", "Web Development"],
    image: work1,
    href: "/contact",
  },
  {
    number: "02",
    category: "Brand & Design",
    title: "A Digital Identity Built for a Stronger Market Presence",
    description:
      "A cohesive brand and digital identity designed to create consistency, improve recognition and establish a stronger presence across digital touchpoints.",
    capabilities: ["Brand Strategy", "Visual Identity", "Digital Design"],
    image: work2,
    href: "/contact",
  },
  {
    number: "03",
    category: "Software Solutions",
    title: "Technology Designed Around the Way Business Works",
    description:
      "A scalable software solution designed to simplify operations, connect information and give teams better tools to manage everyday business processes.",
    capabilities: ["Business Strategy", "Product Design", "Software Development"],
    image: work3,
    href: "/contact",
    dark: true,
  },
  {
    number: "04",
    category: "AI & Automation",
    title: "Turning Repetitive Processes Into Intelligent Workflows",
    description:
      "An AI and automation solution designed to reduce repetitive work, improve operational efficiency and create better experiences for teams and customers.",
    capabilities: ["AI Strategy", "Automation", "Software Development"],
    image: work4,
    href: "/contact",
  },
  {
    number: "05",
    category: "Marketing & Growth",
    title: "Building Digital Visibility That Creates Opportunity",
    description:
      "A growth-focused digital solution designed to strengthen online visibility, reach relevant audiences and turn digital engagement into meaningful business opportunities.",
    capabilities: ["Digital Strategy", "Marketing", "Performance"],
    image: svcMarketing,
    href: "/contact",
  },
  {
    number: "06",
    category: "Media Production",
    title: "Bringing Business Stories to Life Through Visual Content",
    description:
      "A visual content solution combining creative direction, photography, video and motion to communicate ideas clearly and create stronger audience engagement.",
    capabilities: ["Creative Direction", "Photography", "Video", "Motion"],
    image: svcMedia,
    href: "/contact",
  },
];

function ProjectSection({ p, index }: { p: Project; index: number }) {
  const imageRight = index % 2 === 1;
  const dark = !!p.dark;

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-navy py-24 lg:py-32" : "py-16 lg:py-24",
      )}
    >
      {dark && (
        <>
          <div aria-hidden className="grid-faint absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-[-20%] h-[520px] w-[520px] rounded-full opacity-25 blur-[160px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-x-16">
          {/* Image */}
          <Reveal
            className={cn(
              "lg:col-span-7",
              imageRight ? "lg:order-2 lg:col-start-6" : "lg:order-1",
            )}
          >
            <Link
              to={p.href as "/contact"}
              className={cn(
                "group relative block overflow-hidden rounded-2xl border transition-colors duration-500",
                dark ? "border-white/10 hover:border-cyan/40" : "border-border hover:border-azure/40",
              )}
            >
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project by Nexen Strategy`}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "linear-gradient(180deg, rgba(1,12,98,0) 45%, rgba(1,12,98,0.55) 100%)" }}
              />
              <span className="pointer-events-none absolute bottom-5 left-6 flex translate-y-3 items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View Case Study
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          {/* Content */}
          <Reveal
            delay={120}
            className={cn("lg:col-span-5", imageRight ? "lg:order-1 lg:col-start-1" : "lg:order-2")}
          >
            <div className="flex items-center gap-4">
              <span className={cn("h-px w-8", dark ? "bg-white/25" : "bg-gradient-to-r from-amber to-ember")} />
              <span className={cn("eyebrow text-[0.65rem]", dark ? "text-cyan" : "text-azure")}>{p.category}</span>
            </div>

            <h2
              className={cn(
                "display mt-6 text-[1.9rem] leading-[1.1] sm:text-[2.4rem] lg:text-[2.7rem]",
                dark ? "text-white" : "text-navy",
              )}
            >
              {p.title}
            </h2>

            <p
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed",
                dark ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {p.description}
            </p>

            <p
              className={cn(
                "mt-7 text-sm tracking-wide",
                dark ? "text-white/55" : "text-muted-foreground",
              )}
            >
              {p.capabilities.join("  ·  ")}
            </p>

            <Link
              to={p.href as "/contact"}
              className={cn(
                "group mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-tight",
                dark ? "text-white" : "text-navy",
              )}
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <span
              aria-hidden
              className={cn("mt-3 block h-px w-24", dark ? "bg-gradient-to-r from-cyan to-transparent" : "bg-gradient-to-r from-amber to-ember")}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const filters = [
  "All",
  "Brand & Design",
  "Web & App Development",
  "Software Solutions",
  "AI & Automation",
  "Marketing & Growth",
  "Media Production",
];

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <Header overHero />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-40 pb-24 lg:pt-52 lg:pb-32">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/3 top-[-25%] h-[560px] w-[560px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1440 720"
          >
            <path
              d="M-100 520 C 320 470, 520 190, 900 160 S 1420 90, 1560 60"
              fill="none"
              stroke="#3AF1FF"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <path
              d="M-100 220 C 360 300, 620 600, 1080 560 S 1440 500, 1560 480"
              fill="none"
              stroke="#4A73FF"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>
          <span aria-hidden className="ghost-type absolute -left-6 bottom-0 text-[7rem] text-white/[0.03] lg:text-[14rem]">
            NEXEN
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Portfolio</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-4xl text-[2.6rem] text-white sm:text-6xl lg:text-[4.6rem]">
                Solutions Built for Real Business Challenges.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                Explore selected digital solutions, technology experiences and business-focused projects we've built to
                help organisations launch, transform, automate and grow.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link to="/contact" className="btn-primary group mt-10">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Selected work intro */}
        <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-6 lg:px-12 lg:pt-24 lg:pb-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-azure">Selected Work</p>
              <h2 className="display mt-5 text-[2rem] text-navy sm:text-[2.6rem] lg:text-[3.1rem]">
                Technology, Creativity & Solutions Built Around Business Needs.
              </h2>
            </Reveal>
            <Reveal delay={110} className="lg:col-span-5">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                From digital experiences and software solutions to AI, automation, branding and growth-focused
                platforms, our work is designed around how businesses operate and where they want to go next.
              </p>
            </Reveal>
          </div>
          <span aria-hidden className="mt-12 block h-px w-full bg-border lg:mt-16" />
          {/* Service filter tabs */}
          <div className="mt-14 lg:mt-20">
            <style>{`
              .pf-scroll::-webkit-scrollbar{display:none}
              .pf-scroll{scrollbar-width:none;-ms-overflow-style:none}
              @keyframes pf-in{0%{opacity:0;transform:translateY(14px)}100%{opacity:1;transform:translateY(0)}}
              .pf-item{animation:pf-in 460ms cubic-bezier(.22,.61,.36,1) both}
              @media (prefers-reduced-motion: reduce){.pf-item{animation:none !important}}
            `}</style>
            <div className="pf-scroll -mx-6 overflow-x-auto px-6 lg:mx-0 lg:overflow-visible lg:px-0">
              <div className="flex w-max min-w-full items-center justify-start gap-2.5 lg:w-full lg:flex-wrap lg:justify-center lg:gap-3">
                {filters.map((f) => {
                  const on = f === active;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setActive(f)}
                      aria-pressed={on}
                      className={cn(
                        "shrink-0 rounded-full border px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                        on
                          ? "border-transparent text-white shadow-[0_12px_30px_-14px_rgba(255,72,63,0.85)]"
                          : "border-border bg-transparent text-muted-foreground hover:border-azure/40 hover:text-navy",
                      )}
                      style={on ? { backgroundImage: "linear-gradient(90deg,#FFA53C,#FF483F)" } : undefined}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </section>

        {/* Projects */}
        {visible.map((p, i) => (
          <div key={p.number} className="pf-item" style={{ animationDelay: `${i * 70}ms` }}>
            <ProjectSection p={p} index={i} />
            {!p.dark && !visible[i + 1]?.dark && i < visible.length - 1 && (
              <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                <span aria-hidden className="block h-px w-full bg-border" />
              </div>
            )}
          </div>
        ))}

        {visible.length === 0 && (
          <div className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 lg:py-32">
            <p className="text-lg text-muted-foreground">More projects coming soon.</p>
          </div>
        )}

        <div className="pt-10 lg:pt-16" />

        <CtaSection
          eyebrow="Your project"
          heading="Have an Idea? Let's Build What's Next."
          body="Whether you're launching a new digital product, modernising your website, automating your operations or looking to accelerate growth, we're ready to help."
          ctaLabel="Start a Conversation"
        />
      </main>
      <Footer />
    </>
  );
}
