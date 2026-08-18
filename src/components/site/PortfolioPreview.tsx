import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const overlayGradient =
  "linear-gradient(180deg, rgba(1,12,98,0) 38%, rgba(1,12,98,0.35) 66%, rgba(1,12,98,0.86) 100%)";

function CaseStudyLink({ light = false }: { light?: boolean }) {
  return (
    <span
      className={
        "mt-5 inline-flex items-center gap-2 text-sm font-semibold " + (light ? "text-white" : "text-navy")
      }
    >
      View Case Study
      <ArrowUpRight className="h-4 w-4 text-amber transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </span>
  );
}

export function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-white">
      <div aria-hidden className="grid-faint absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-40 h-[460px] w-[460px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-azure), transparent 70%)" }}
      />
      <span
        aria-hidden
        className="ghost-type absolute -left-6 top-[46%] text-[6rem] text-navy/[0.02] sm:text-[12rem] lg:text-[16rem]"
      >
        WORK
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-azure">Portfolio Preview</p>
            <span aria-hidden className="mt-4 block h-px w-14 bg-gradient-to-r from-azure to-cyan" />
            <h2
              className="display mt-6 text-navy"
              style={{ fontSize: "clamp(2.1rem, 4.6vw, 4.6rem)", lineHeight: 1.03 }}
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

        {/* PROJECT 01 — large feature, metadata overlaid */}
        <Reveal className="mt-20 lg:mt-28 lg:pl-[8%]">
          <Link to="/portfolio" className="group block">
            <div className="relative overflow-hidden bg-navy">
              <img
                src={work1}
                alt="Halden & Co. — Web & Apps case study"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center transition-transform duration-[550ms] ease-out group-hover:scale-[1.03] sm:aspect-[16/10] lg:aspect-[16/8]"
              />
              <div aria-hidden className="absolute inset-0" style={{ background: overlayGradient }} />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
                <p className="eyebrow text-[0.6rem] text-white/60">01 / Selected Work</p>
                <h3 className="display mt-3 text-[2rem] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-[2.8rem] lg:text-[3.6rem]">
                  Halden &amp; Co.
                </h3>
                <p className="eyebrow mt-3 text-[0.62rem] text-white/65">
                  Retail &amp; E-commerce · Web &amp; Apps
                </p>
                <CaseStudyLink light />
              </div>
            </div>
          </Link>
        </Reveal>

        {/* PROJECT 02 — offset editorial */}
        <div className="mt-20 grid gap-8 lg:mt-32 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <Reveal delay={80} className="lg:order-2 lg:col-span-7 lg:col-start-6">
            <Link to="/portfolio" className="group block overflow-hidden bg-navy">
              <img
                src={work2}
                alt="Northgate Group — Brand & Design case study"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[550ms] ease-out group-hover:scale-[1.03] lg:aspect-[5/4]"
              />
            </Link>
          </Reveal>
          <Reveal delay={160} className="lg:order-1 lg:col-span-4 lg:pb-6">
            <Link to="/portfolio" className="group block">
              <p className="eyebrow text-[0.6rem] text-muted-foreground">02 / Selected Work</p>
              <h3 className="display mt-3 text-[1.9rem] text-navy transition-transform duration-500 group-hover:translate-x-1 lg:text-[2.9rem]">
                Northgate Group
              </h3>
              <p className="eyebrow mt-3 text-[0.62rem] text-muted-foreground">
                Professional Services · Brand &amp; Design
              </p>
              <p className="mt-4 max-w-md text-[0.94rem] leading-relaxed text-muted-foreground">
                A complete identity system for a group of specialist advisory businesses.
              </p>
              <CaseStudyLink />
            </Link>
          </Reveal>
        </div>

        {/* PROJECT 03 — wide feature */}
        <Reveal className="mt-20 lg:mt-32">
          <Link to="/portfolio" className="group block">
            <div className="relative overflow-hidden bg-navy">
              <img
                src={work3}
                alt="Meridian Operations — AI & Automation case study"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-center transition-transform duration-[550ms] ease-out group-hover:scale-[1.03] sm:aspect-[16/9] lg:aspect-[21/8]"
              />
              <div aria-hidden className="absolute inset-0" style={{ background: overlayGradient }} />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
                <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
                  <div>
                    <p className="eyebrow text-[0.6rem] text-white/60">03 / Selected Work</p>
                    <h3 className="display mt-3 text-[2rem] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-[2.6rem] lg:text-[3.3rem]">
                      Meridian Operations
                    </h3>
                    <p className="eyebrow mt-3 text-[0.62rem] text-white/65">
                      Industrial &amp; Manufacturing · AI &amp; Automation
                    </p>
                  </div>
                  <CaseStudyLink light />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
