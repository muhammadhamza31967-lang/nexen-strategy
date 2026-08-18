import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Camera,
  Layers,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import imgBrand from "@/assets/svc-brand.jpg";
import imgWeb from "@/assets/svc-web.jpg";
import imgSoftware from "@/assets/svc-software.jpg";
import imgAi from "@/assets/svc-ai.jpg";
import imgMarketing from "@/assets/svc-marketing.jpg";
import imgMedia from "@/assets/svc-media.jpg";

interface ShowcaseItem {
  no: string;
  slug: ServiceKey;
  title: string;
  headline: string;
  description: string;
  cta: string;
  icon: LucideIcon;
  image: string;
  alt: string;
}

const items: ShowcaseItem[] = [
  {
    no: "01",
    slug: "brand-and-design",
    title: "Brand & Design",
    headline: "Build a brand people recognise and remember.",
    description:
      "From logos and visual identities to UI/UX and digital design, we create brands and experiences that communicate clearly, look distinctive and remain consistent across every touchpoint.",
    cta: "Explore Brand & Design",
    icon: PenTool,
    image: imgBrand,
    alt: "Brand identity and visual design system laid out across print and digital collateral",
  },
  {
    no: "02",
    slug: "web-and-app-development",
    title: "Web & App Development",
    headline: "Digital experiences designed around your business and your customers.",
    description:
      "We create responsive websites, web applications, mobile apps and e-commerce experiences that combine strong design with reliable technology.",
    cta: "Explore Web & App Development",
    icon: MonitorSmartphone,
    image: imgWeb,
    alt: "High-end website and mobile application interfaces displayed on modern devices",
  },
  {
    no: "03",
    slug: "software-solutions",
    title: "Software Solutions",
    headline: "Technology built around the way your business works.",
    description:
      "From CRM and CMS platforms to custom software, dashboards and business portals, we develop solutions that simplify operations and connect your business.",
    cta: "Explore Software Solutions",
    icon: Layers,
    image: imgSoftware,
    alt: "Business software platform and operational dashboard environment",
  },
  {
    no: "04",
    slug: "ai-and-automation",
    title: "AI & Automation",
    headline: "Make your business smarter, faster and more efficient.",
    description:
      "We develop AI-powered chatbots, assistants, agents and automated workflows that reduce repetitive work and create better customer and team experiences.",
    cta: "Explore AI & Automation",
    icon: Sparkles,
    image: imgAi,
    alt: "Intelligent automation and AI assisted workflow visual",
  },
  {
    no: "05",
    slug: "marketing-and-growth",
    title: "Marketing & Growth",
    headline: "Turn visibility into meaningful business opportunities.",
    description:
      "We help businesses build their digital presence, reach the right audiences and create marketing strategies that generate engagement, leads and growth.",
    cta: "Explore Marketing & Growth",
    icon: TrendingUp,
    image: imgMarketing,
    alt: "Digital marketing campaign performance and audience analytics",
  },
  {
    no: "06",
    slug: "media-production",
    title: "Media Production",
    headline: "Bring your brand and ideas to life.",
    description:
      "From corporate videos and promotional content to professional photography, motion graphics and animation, we create visual content designed to capture attention and communicate with impact.",
    cta: "Explore Media Production",
    icon: Camera,
    image: imgMedia,
    alt: "Cinematic media production set with professional camera equipment",
  },
];

export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const current = items[active]!;
  const Icon = current.icon;

  return (
    <div className="mt-20 lg:mt-28">
      {/* LARGE VISUAL CANVAS */}
      <Reveal>
        <div className="relative mx-auto w-full lg:w-[95%]">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-5 -top-5 hidden h-28 w-28 border-l border-t border-azure/35 lg:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-navy/15 lg:block"
          />
          <div
            className="relative h-[380px] overflow-hidden bg-navy sm:h-[480px] lg:h-[620px]"
            style={{ boxShadow: "0 40px 90px -50px color-mix(in oklab, var(--color-navy) 60%, transparent)" }}
          >
            {items.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className={
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[600ms] ease-out motion-reduce:transition-none " +
                  (i === active ? "scale-100 opacity-100 blur-0" : "scale-[1.06] opacity-0 blur-[2px]")
                }
              />
            ))}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--color-navy) 42%, transparent) 0%, transparent 38%, color-mix(in oklab, var(--color-navy) 78%, transparent) 100%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "120px 120px",
              }}
            />

            {/* top metadata */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between lg:left-10 lg:right-10 lg:top-9">
              <span className="font-mono text-[0.66rem] tracking-[0.3em] text-white/70">
                NEXEN / DIGITAL CAPABILITY
              </span>
              <span className="hidden items-center gap-3 sm:flex">
                <Icon aria-hidden strokeWidth={1.3} className="h-4 w-4 text-cyan/80" />
                <span aria-hidden className="h-px w-16 bg-white/25" />
              </span>
            </div>

            {/* overlay title block */}
            <div className="absolute bottom-8 left-6 right-6 lg:bottom-12 lg:left-10 lg:right-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div key={current.slug} className="max-w-[22ch]">
                  <span className="font-mono text-[0.66rem] tracking-[0.3em] text-cyan/80">
                    {current.no} / 06
                  </span>
                  <h3 className="display mt-4 text-[2.2rem] leading-[1.02] text-white lg:text-[4.25rem]">
                    {current.title}
                  </h3>
                </div>
                <p className="max-w-md text-[1.05rem] font-medium leading-snug text-white/85 lg:text-[1.25rem]">
                  {current.headline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* HORIZONTAL SERVICE NAVIGATION */}
      <Reveal delay={100}>
        <nav
          aria-label="Services"
          className="-mx-6 mt-10 overflow-x-auto px-6 lg:mx-auto lg:mt-12 lg:w-[95%] lg:overflow-visible lg:px-0"
        >
          <ul className="flex min-w-max border-t border-border lg:min-w-0">
            {items.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="flex-1 border-r border-border last:border-r-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative block w-full px-5 py-5 text-left outline-none lg:px-4 lg:py-6"
                  >
                    <span
                      aria-hidden
                      className={
                        "absolute left-0 top-[-1px] h-px w-full origin-left bg-azure transition-transform duration-300 motion-reduce:transition-none " +
                        (isActive ? "scale-x-100" : "scale-x-0")
                      }
                    />
                    <span
                      className={
                        "font-mono text-[0.64rem] tracking-[0.28em] transition-colors duration-300 " +
                        (isActive ? "text-azure" : "text-muted-foreground")
                      }
                    >
                      {s.no}
                    </span>
                    <span className="mt-3 flex items-start gap-2">
                      <span
                        className={
                          "text-[0.82rem] font-semibold uppercase leading-tight tracking-[0.06em] transition-colors duration-300 lg:text-[0.9rem] " +
                          (isActive ? "text-navy" : "text-navy/40 group-hover:text-navy/70")
                        }
                      >
                        {s.title}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        strokeWidth={1.5}
                        className={
                          "mt-0.5 h-3.5 w-3.5 shrink-0 transition-all duration-300 motion-reduce:transition-none " +
                          (isActive ? "text-azure opacity-100" : "-translate-x-1 translate-y-1 opacity-0")
                        }
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </Reveal>

      {/* ACTIVE SERVICE STORY */}
      <Reveal delay={160}>
        <div key={current.slug} className="mx-auto mt-14 grid gap-8 lg:mt-20 lg:w-[95%] lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-azure" />
              <span className="eyebrow text-navy/60">{current.title}</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-[1.05rem] leading-[1.8] text-muted-foreground lg:text-[1.15rem]">
              {current.description}
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: current.slug }}
              className="group mt-8 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-sm tracking-wide text-navy transition-colors duration-300 hover:border-azure hover:text-azure"
            >
              {current.cta}
              <ArrowUpRight
                aria-hidden
                strokeWidth={1.6}
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
