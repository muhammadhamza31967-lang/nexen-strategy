import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Clapperboard,
  LayoutDashboard,
  MonitorSmartphone,
  PenTool,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import svcBrand from "@/assets/svc-brand.jpg";
import svcWeb from "@/assets/detail-web.jpg";
import svcSoftware from "@/assets/detail-software.jpg";
import svcAi from "@/assets/detail-ai.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcMedia from "@/assets/detail-media.jpg";

const visuals: Record<string, { image: string; icon: LucideIcon }> = {
  "brand-and-design": { image: svcBrand, icon: PenTool },
  "web-and-app-development": { image: svcWeb, icon: MonitorSmartphone },
  "software-solutions": { image: svcSoftware, icon: LayoutDashboard },
  "ai-and-automation": { image: svcAi, icon: Workflow },
  "marketing-and-growth": { image: svcMarketing, icon: TrendingUp },
  "media-production": { image: svcMedia, icon: Clapperboard },
};

const items = services.map((s) => ({
  ...s,
  image: visuals[s.slug]!.image,
  icon: visuals[s.slug]!.icon,
}));

export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const current = items[active]!;

  return (
    <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-20">
      {/* Visual panel */}
      <div className="order-2 hidden lg:order-1 lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <div className="relative">
            {/* offset technical frame */}
            <span
              aria-hidden
              className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-navy/15"
            />
            <span
              aria-hidden
              className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-navy/15"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-navy shadow-[0_50px_110px_-60px_rgba(1,12,98,0.75)] lg:-ml-6 lg:aspect-[3/4.1]">
            {items.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={`${s.title} visual`}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out",
                  active === i ? "scale-[1.02] opacity-100" : "scale-110 opacity-0",
                )}
              />
            ))}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(1,12,98,0.10) 0%, rgba(1,12,98,0.35) 45%, rgba(1,12,98,0.88) 100%)",
              }}
            />
            {/* thin accent line */}
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan via-azure to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8">
              <div>
                <p className="eyebrow text-cyan">{current.no}</p>
                <p className="display mt-3 text-[1.75rem] text-white">{current.title}</p>
              </div>
              <current.icon className="h-7 w-7 shrink-0 text-cyan/80" strokeWidth={1.4} />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="order-1 lg:order-2 lg:col-span-7">
        <div className="border-t border-border">
          {items.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative block border-b border-border py-10 outline-none transition-[padding] duration-500 hover:pl-3 lg:py-14"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan to-azure transition-transform duration-700",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                  <div className="flex items-start gap-6 lg:gap-8">
                    <span
                      className={cn(
                        "mt-1 font-mono text-xs transition-colors duration-500",
                        isActive ? "text-azure" : "text-muted-foreground",
                      )}
                    >
                      {s.no}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-4">
                        <Icon
                          className={cn(
                            "h-6 w-6 shrink-0 transition-all duration-500 lg:h-7 lg:w-7",
                            isActive
                              ? "scale-105 text-azure opacity-100"
                              : "text-navy/35 opacity-80",
                          )}
                          strokeWidth={1.5}
                        />
                        <h3
                          className={cn(
                            "display text-[1.55rem] transition-colors duration-500 sm:text-[1.9rem] lg:text-[2.25rem]",
                            isActive ? "text-azure" : "text-navy",
                          )}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                        {s.short}
                      </p>
                      {/* mobile visual */}
                      <div className="mt-6 overflow-hidden bg-navy lg:hidden">
                        <img
                          src={s.image}
                          alt={`${s.title} visual`}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover"
                        />
                      </div>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 transition-all duration-500",
                        isActive
                          ? "-translate-y-1 translate-x-1 text-azure"
                          : "text-muted-foreground/60",
                      )}
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
