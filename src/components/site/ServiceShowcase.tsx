import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clapperboard,
  LayoutDashboard,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "@/lib/site-data";
import { Reveal } from "./Reveal";

interface ShowcaseItem {
  no: string;
  slug: ServiceKey;
  title: string;
  headline: string;
  description: string;
  cta: string;
  icon: LucideIcon;
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
  },
  {
    no: "03",
    slug: "software-solutions",
    title: "Software Solutions",
    headline: "Technology built around the way your business works.",
    description:
      "From CRM and CMS platforms to custom software, dashboards and business portals, we develop solutions that simplify operations and connect your business.",
    cta: "Explore Software Solutions",
    icon: LayoutDashboard,
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
  },
  {
    no: "06",
    slug: "media-production",
    title: "Media Production",
    headline: "Bring your brand and ideas to life.",
    description:
      "From corporate videos and promotional content to professional photography, motion graphics and animation, we create visual content designed to capture attention and communicate with impact.",
    cta: "Explore Media Production",
    icon: Clapperboard,
  },
];

export function ServiceShowcase() {
  return (
    <div className="mt-20 border-t border-border lg:mt-28">
      <div className="grid md:grid-cols-2">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.slug}
              delay={i * 60}
              className={
                "group relative border-b border-border md:[&:nth-child(odd)]:border-r" +
                (i === 0 ? "" : "")
              }
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                aria-label={s.cta}
                className="relative block h-full px-0 py-12 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-azure/50 md:px-10 md:py-14 lg:px-14 lg:py-16"
              >
                {/* subtle glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 15% 0%, color-mix(in oklab, var(--color-azure) 7%, transparent) 0%, transparent 65%)",
                  }}
                />
                {/* accent line */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-azure via-cyan to-transparent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <div className="relative flex items-center gap-5">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{s.no}</span>
                  <span aria-hidden className="h-px w-8 bg-border" />
                  <Icon
                    aria-hidden
                    className="h-6 w-6 text-navy/40 transition-colors duration-300 group-hover:text-azure lg:h-7 lg:w-7"
                    strokeWidth={1.4}
                  />
                </div>

                <h3 className="display relative mt-7 text-[1.75rem] leading-[1.1] text-navy transition-colors duration-300 group-hover:text-azure lg:text-[2.15rem]">
                  {s.title}
                </h3>

                <p className="relative mt-4 max-w-lg text-[1.0625rem] font-medium leading-snug text-navy/80">
                  {s.headline}
                </p>

                <p className="relative mt-4 max-w-lg text-[1rem] leading-[1.75] text-muted-foreground">
                  {s.description}
                </p>

                <span className="relative mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-navy transition-colors duration-300 group-hover:text-azure">
                  {s.cta}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    strokeWidth={1.6}
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
