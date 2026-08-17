import { useState } from "react";
import { industries } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import img1 from "@/assets/svc-brand.jpg";
import img2 from "@/assets/detail-web.jpg";
import img3 from "@/assets/detail-software.jpg";
import img4 from "@/assets/detail-ai.jpg";
import img5 from "@/assets/svc-marketing.jpg";
import img6 from "@/assets/detail-media.jpg";
import img7 from "@/assets/work-1.jpg";
import img8 from "@/assets/work-2.jpg";
import img9 from "@/assets/work-3.jpg";
import img10 from "@/assets/work-4.jpg";

const pool = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export function IndustryShowcase() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[440px] w-[340px] -translate-y-1/2 overflow-hidden lg:block"
      >
        {pool.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
              hover === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          />
        ))}
      </div>

      <ul className="relative border-t border-border">
        {industries.map((ind, i) => (
          <li key={ind}>
            <div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group flex items-center justify-between gap-8 border-b border-border py-5 transition-[padding] duration-500 hover:pl-3 lg:py-7"
            >
              <span className="flex items-baseline gap-6">
                <span className="font-mono text-[0.7rem] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "display cursor-default text-[1.5rem] uppercase transition-colors duration-500 sm:text-3xl lg:text-[2.6rem]",
                    hover === i ? "text-navy" : "text-navy/30",
                  )}
                >
                  {ind}
                </span>
              </span>
              <span
                className={cn(
                  "hidden h-px shrink-0 bg-gradient-to-r from-cyan to-azure transition-all duration-500 sm:block",
                  hover === i ? "w-16 opacity-100" : "w-6 opacity-30",
                )}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
