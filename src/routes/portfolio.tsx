import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexen Strategy" },
      {
        name: "description",
        content:
          "Selected work from Nexen Strategy across brand and design, web and apps, software, AI and automation, marketing and media production.",
      },
      { property: "og:title", content: "Selected Work — Nexen Strategy" },
      {
        property: "og:description",
        content: "Case studies in brand, digital platforms, software, AI, marketing and film.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const categories = [
  "All",
  "Brand & Design",
  "Web & Apps",
  "Software",
  "AI & Automation",
  "Marketing",
  "Media",
];

const projects = [
  {
    title: "Halden & Co.",
    sector: "Retail & E-commerce",
    category: "Web & Apps",
    summary: "A considered commerce experience rebuilt around merchandising and repeat purchase.",
    image: work1,
    size: "wide" as const,
  },
  {
    title: "Northgate Group",
    sector: "Professional Services",
    category: "Brand & Design",
    summary: "A complete identity system for a group of specialist advisory businesses.",
    image: work2,
    size: "tall" as const,
  },
  {
    title: "Meridian Operations",
    sector: "Industrial & Manufacturing",
    category: "AI & Automation",
    summary: "Automated workflows that removed thousands of manual admin hours a year.",
    image: work3,
    size: "tall" as const,
  },
  {
    title: "Aurora Health Portal",
    sector: "Healthcare",
    category: "Software",
    summary: "A secure patient and practitioner portal replacing four disconnected systems.",
    image: svcWeb,
    size: "half" as const,
  },
  {
    title: "Loom Growth Programme",
    sector: "Retail",
    category: "Marketing",
    summary: "A demand programme built around cost per qualified opportunity.",
    image: svcMarketing,
    size: "half" as const,
  },
  {
    title: "Kestrel Brand Film",
    sector: "Energy & Marine",
    category: "Media",
    summary: "A cinematic brand film and photography library shot across three sites.",
    image: work4,
    size: "full" as const,
  },
];

function ProjectCard({
  p,
  className,
  ratio,
}: {
  p: (typeof projects)[number];
  className?: string;
  ratio: string;
}) {
  return (
    <article className={cn("group", className)}>
      <div className={cn("relative overflow-hidden bg-navy", ratio)}>
        <img
          src={p.image}
          alt={`${p.title} — ${p.category} project`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/0 transition-colors duration-700 group-hover:bg-navy/35" />
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow text-muted-foreground">
            {p.sector} — {p.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
            {p.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {p.summary}
          </p>
        </div>
        <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-azure" />
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <Header overHero />
      <main>
        <section className="relative overflow-hidden bg-navy pt-44 pb-28 lg:pt-60 lg:pb-40">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/3 top-[-25%] h-[560px] w-[560px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Portfolio</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-4xl text-[2.7rem] text-white sm:text-6xl lg:text-[5rem]">
                Work Made to Do Something.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                A selection of projects across brand, digital platforms, software, automation,
                growth and film. Different disciplines, one standard.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="sticky top-[72px] z-30 border-b border-border bg-white/92 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1400px] gap-7 overflow-x-auto px-6 py-5 lg:px-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={cn(
                  "relative shrink-0 pb-1 text-sm font-medium transition-colors",
                  active === c ? "text-navy" : "text-muted-foreground hover:text-navy",
                )}
              >
                {c}
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-amber to-ember transition-transform duration-500",
                    active === c ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="space-y-24 lg:space-y-32">
            {visible
              .filter((p) => p.size === "wide")
              .map((p) => (
                <Reveal key={p.title}>
                  <ProjectCard p={p} ratio="aspect-[16/10] lg:aspect-[16/8]" />
                </Reveal>
              ))}

            {visible.some((p) => p.size === "tall") && (
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                {visible
                  .filter((p) => p.size === "tall")
                  .map((p, i) => (
                    <Reveal key={p.title} delay={i * 90} className={i === 1 ? "lg:mt-24" : ""}>
                      <ProjectCard p={p} ratio="aspect-[4/3]" />
                    </Reveal>
                  ))}
              </div>
            )}

            {visible.some((p) => p.size === "half") && (
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                {visible
                  .filter((p) => p.size === "half")
                  .map((p, i) => (
                    <Reveal key={p.title} delay={i * 90}>
                      <ProjectCard p={p} ratio="aspect-[3/2]" />
                    </Reveal>
                  ))}
              </div>
            )}

            {visible
              .filter((p) => p.size === "full")
              .map((p) => (
                <Reveal key={p.title}>
                  <ProjectCard p={p} ratio="aspect-[16/9] lg:aspect-[21/9]" />
                </Reveal>
              ))}

            {visible.length === 0 && (
              <p className="py-16 text-lg text-muted-foreground">
                Work in this discipline is available on request.
              </p>
            )}
          </div>
        </section>

        <CtaSection eyebrow="Your project" heading="Let's Add Yours to This Page." />
      </main>
      <Footer />
    </>
  );
}