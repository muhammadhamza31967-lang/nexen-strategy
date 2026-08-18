import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const featured = {
  no: "01",
  title: "Halden & Co.",
  sector: "Retail & E-commerce",
  category: "Web & Apps",
  summary: "A considered commerce experience rebuilt around merchandising and repeat purchase.",
  image: work1,
};

const secondary = [
  {
    no: "02",
    title: "Northgate Group",
    sector: "Professional Services",
    category: "Brand & Design",
    summary: "A complete identity system for a group of specialist advisory businesses.",
    image: work2,
  },
  {
    no: "03",
    title: "Meridian Operations",
    sector: "Industrial & Manufacturing",
    category: "AI & Automation",
    summary: "Automated workflows that removed thousands of manual admin hours a year.",
    image: work3,
  },
];

export function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-white">
      {/* subtle premium background treatment */}
      <div aria-hidden className="grid-faint absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-azure), transparent 70%)" }}
      />
      <span
        aria-hidden
        className="ghost-type absolute -left-4 bottom-10 text-[6rem] text-navy/[0.022] sm:text-[11rem] lg:text-[15rem]"
      >
        WORK
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-azure">Portfolio Preview</p>
            <span aria-hidden className="mt-4 block h-px w-14 bg-gradient-to-r from-azure to-cyan" />
            <h2
              className="display mt-6 text-navy"
              style={{ fontSize: "clamp(2.1rem, 4.4vw, 4.4rem)", lineHeight: 1.04 }}
            >
              Ideas Built Into Real Experiences.
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              Explore selected projects where strategy, design, technology and creativity came together to solve real
              business challenges.
            </p>
            <Link to="/portfolio" className="btn-primary group mt-7">
              View Our Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Featured project */}
        <Reveal className="mt-16 lg:mt-24">
          <Link to="/portfolio" className="group block">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
              <div className="lg:col-span-9">
                <div className="relative overflow-hidden bg-navy">
                  <img
                    src={featured.image}
                    alt={`${featured.title} — ${featured.category} case study`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.03] sm:aspect-[16/10] lg:aspect-[21/9]"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
                  <span className="eyebrow absolute left-5 top-5 text-[0.6rem] text-white/70 lg:left-7 lg:top-7">
                    {featured.no} / Featured Work
                  </span>
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="eyebrow text-muted-foreground">
                  {featured.sector} — {featured.category}
                </p>
                <h3 className="display mt-3 text-[2rem] text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-[2.7rem]">
                  {featured.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{featured.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:gap-12">
          {secondary.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className={i === 1 ? "sm:mt-16" : undefined}>
              <Link to="/portfolio" className="group block">
                <div className="relative overflow-hidden bg-navy">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category} case study`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
                  <span className="eyebrow absolute left-5 top-5 text-[0.6rem] text-white/70">
                    {p.no} / Selected Work
                  </span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-muted-foreground">
                      {p.sector} — {p.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{p.summary}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-azure" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}