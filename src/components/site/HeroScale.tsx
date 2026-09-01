import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scales an entire hero visual composition proportionally as ONE unit.
 * The children are laid out at a fixed `designWidth` (the desktop design width)
 * and then transform-scaled to fit the available container width, so every
 * internal position, overlap, connector and decoration stays identical across
 * desktop, tablet and mobile.
 */
export function HeroScale({
  designWidth = 620,
  className,
  children,
}: {
  designWidth?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

  useIso(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const measure = () => {
      const w = outer.clientWidth;
      const s = w > 0 ? Math.min(1, w / designWidth) : 1;
      setScale(s);
      setHeight(inner.offsetHeight * s);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={outerRef}
      className={cn("relative w-full", className)}
      style={{ height: height ?? undefined }}
    >
      <div
        ref={innerRef}
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: designWidth, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );

}
