import { useState } from "react";
import { Compass, Target, PenTool, Rocket, LineChart, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const stages: { no: string; name: string; text: string; icon: LucideIcon }[] = [
  {
    no: "01",
    name: "Discover",
    text: "We learn the business, the market and the constraints before proposing anything.",
    icon: Compass,
  },
  {
    no: "02",
    name: "Define",
    text: "Objectives, scope and success measures agreed in plain language.",
    icon: Target,
  },
  {
    no: "03",
    name: "Create",
    text: "Design, engineering and production run together against one plan.",
    icon: PenTool,
  },
  {
    no: "04",
    name: "Launch",
    text: "Tested, measured and released with the team ready to run it.",
    icon: Rocket,
  },
  {
    no: "05",
    name: "Grow",
    text: "We stay involved, refining against real performance data.",
    icon: LineChart,
  },
];

export function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative mt-20">
      <div aria-hidden className="absolute left-0 top-6 hidden h-px w-full bg-border lg:block" />
      <div
        aria-hidden
        className="absolute left-0 top-6 hidden h-px bg-gradient-to-r from-cyan to-azure transition-[width] duration-700 lg:block"
        style={{ width: `${((active + 1) / stages.length) * 100}%` }}
      />
      <ol className="grid gap-12 lg:grid-cols-5 lg:gap-8">
        {stages.map((s, i) => {
          const Icon = s.icon;
          const on = i <= active;
          return (
            <Reveal key={s.no} delay={i * 90} as="li">
              <div
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="group relative outline-none lg:pt-0"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute -top-[26px] left-0 hidden h-3 w-3 rounded-full border-2 bg-white transition-colors duration-500 lg:block",
                    on ? "border-azure" : "border-border",
                  )}
                />
                <div className="flex items-center gap-4 lg:pt-8">
                  <Icon
                    className={cn(
                      "h-6 w-6 transition-colors duration-500",
                      on ? "text-azure" : "text-navy/25",
                    )}
                    strokeWidth={1.4}
                  />
                  <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                </div>
                <h3
                  className={cn(
                    "mt-5 text-2xl font-semibold tracking-tight transition-colors duration-500",
                    on ? "text-navy" : "text-navy/50",
                  )}
                >
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
