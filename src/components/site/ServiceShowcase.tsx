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
    <div className="mt-16 lg:mt-24">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-16">
        {/* VISUAL PANEL */}
        <Reveal className="lg:col-span-7">
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-azure/40 lg:block"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-navy/15 lg:block"
            />
            <div className="relative h-[340px] overflow-hidden bg-navy sm:h-[440px] lg:h-[620px]">
              {items.map((s, i) => (
                <img
                  key={s.slug}
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className={
                    "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out motion-reduce:transition-none " +
                    (i === active ? "scale-100 opacity-100" : "scale-105 opacity-0")
                  }
                />
              ))}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--color-navy) 10%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--color-navy) 72%, transparent) 100%)",
                }}
              />

              {/* metadata */}
              <div className="absolute left-6 top-6 flex items-center gap-3 lg:left-8 lg:top-8">
                <span className="font-mono text-[0.68rem] tracking-[0.28em] text-white/70">
                  NEXEN / DIGITAL CAPABILITY {current.no}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 lg:bottom-8 lg:left-8 lg:right-8">
                <h3 className="display max-w-[10ch] text-[1.9rem] leading-[1.02] text-white lg:text-[3rem]">
                  {current.title}
                </h3>
                <span className="font-mono text-[0.68rem] tracking-[0.28em] text-white/60">
                  {current.no} / 06
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* NAVIGATION + ACTIVE STORY */}
        <Reveal delay={120} className="lg:col-span-5">
          <ul className="border-t border-border">
            {items.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative flex w-full items-center gap-5 py-4 text-left outline-none lg:py-[1.15rem]"
                  >
                    <span
                      aria-hidden
                      className={
                        "absolute bottom-[-1px] left-0 h-px w-full origin-left bg-azure transition-transform duration-300 motion-reduce:transition-none " +
                        (isActive ? "scale-x-100" : "scale-x-0")
                      }
                    />
                    <span
                      className={
                        "font-mono text-[0.7rem] tracking-[0.22em] transition-colors duration-300 " +
                        (isActive ? "text-azure" : "text-muted-foreground")
                      }
                    >
                      {s.no}
                    </span>
                    <span
                      className={
                        "display flex-1 text-[1.35rem] leading-tight transition-all duration-300 motion-reduce:transition-none lg:text-[1.75rem] " +
                        (isActive ? "translate-x-1 text-navy" : "text-navy/45")
                      }
                    >
                      {s.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={1.4}
                      className={
                        "h-5 w-5 transition-all duration-300 motion-reduce:transition-none " +
                        (isActive
                          ? "translate-x-0 -translate-y-0 text-azure opacity-100"
                          : "-translate-x-1 translate-y-1 text-navy/30 opacity-0")
                      }
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Active service story */}
          <div key={current.slug} className="mt-9 animate-[fade-in_0.4s_ease-out]">
            <div className="flex items-center gap-3">
              <Icon aria-hidden strokeWidth={1.4} className="h-5 w-5 text-azure" />
              <span className="eyebrow text-navy/60">{current.title}</span>
            </div>
            <p className="mt-5 text-[1.15rem] font-medium leading-snug text-navy lg:text-[1.3rem]">
              {current.headline}
            </p>
            <p className="mt-4 max-w-xl text-[1rem] leading-[1.75] text-muted-foreground">
              {current.description}
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: current.slug }}
              className="group mt-7 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-sm tracking-wide text-navy transition-colors duration-300 hover:border-azure hover:text-azure"
            >
              {current.cta}
              <ArrowUpRight
                aria-hidden
                strokeWidth={1.6}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
