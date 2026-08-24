import { cn } from "@/lib/utils";

type MockupKind = "browser" | "screen" | "phone" | "tablet";
export type MockupLayout = "layered" | "simple";

function Chrome() {
  return (
    <div className="flex h-3.5 shrink-0 items-center gap-1 border-b border-black/5 bg-[#F6F7FB] px-2 sm:h-6 sm:gap-1.5 sm:px-3">
      <span className="h-1 w-1 rounded-full bg-black/15 sm:h-1.5 sm:w-1.5" />
      <span className="h-1 w-1 rounded-full bg-black/10 sm:h-1.5 sm:w-1.5" />
      <span className="h-1 w-1 rounded-full bg-black/10 sm:h-1.5 sm:w-1.5" />
    </div>
  );
}

function Frame({
  src,
  alt,
  kind = "screen",
  ratio,
  className,
  frameColor = "white",
  imgClassName,
}: {
  src: string;
  alt: string;
  kind?: MockupKind;
  ratio: string;
  className?: string;
  frameColor: "white" | "navy" | "black";
  imgClassName?: string | undefined;
}) {
  const phone = kind === "phone";
  const tablet = kind === "tablet";
  const contain = phone || tablet;
  const darkFrame = (frameColor === "navy" || frameColor === "black") && (phone || tablet);
  return (
    <figure
      className={cn(
        "group/mk overflow-hidden transition-all duration-500 ease-out",
        darkFrame ? (frameColor === "black" ? "bg-black" : "bg-navy") : "bg-white",
        phone ? "rounded-[0.9rem] p-[2px] sm:rounded-[1.4rem] sm:p-[3px]" : "rounded-md sm:rounded-xl",
        "border border-black/[0.07] shadow-[0_22px_60px_-28px_rgba(1,12,98,0.35)]",
        "hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-30px_rgba(1,12,98,0.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col overflow-hidden",
          darkFrame ? (frameColor === "black" ? "bg-black" : "bg-navy") : "bg-white",
          phone ? "rounded-[0.75rem] sm:rounded-[1.25rem]" : "",
        )}
      >
        {kind === "browser" && <Chrome />}
        <div className="relative flex-1 overflow-hidden" style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              "h-full w-full transition-transform duration-[900ms] ease-out",
              kind === "tablet" ? "" : "group-hover/mk:scale-[1.04]",
              contain ? "object-contain object-center" : "object-cover object-top",
              tablet ? "p-1.5" : "",
              imgClassName,
            )}
          />
        </div>
      </div>
    </figure>
  );
}

function LayeredComposition({
  images,
  alt,
  flip,
  frameColor,
  ratios,
  thirdImageClassName,
}: {
  images: string[];
  alt: string;
  flip: boolean;
  frameColor: "white" | "navy" | "black";
  ratios?: string[] | undefined;
  thirdImageClassName?: string | undefined;
}) {
  const a = images[0]!;
  const secondary = images.slice(1).filter(Boolean).slice(0, 3);
  const r = (i: number): string => ratios?.[i] ?? ["16/10", "9/17", "4/3"][i]!;

  // Single composition at every breakpoint — percentage-based widths and a fixed
  // aspect ratio container scale the whole desktop composition proportionally.
  return (
    <div className="relative aspect-[16/10] w-full">
      <Frame
        src={a}
        alt={`${alt} — primary interface mockup`}
        kind="browser"
        ratio={r(0)}
        frameColor={frameColor}
        className={cn("absolute top-[6%] w-[80%]", flip ? "right-0" : "left-0")}
      />

      {secondary[0] && (
        <Frame
          src={secondary[0]}
          alt={`${alt} — mobile mockup`}
          kind="phone"
          ratio={r(1)}
          frameColor={frameColor}
          className={cn("absolute bottom-[6%] z-10 w-[16%]", flip ? "left-[5%]" : "right-[5%]")}
        />
      )}

      {secondary[1] && (
        <Frame
          src={secondary[1]}
          alt={`${alt} — dashboard detail`}
          kind="tablet"
          ratio={r(2)}
          frameColor={frameColor}
          imgClassName={thirdImageClassName}
          className={cn("absolute top-0 w-[26%]", flip ? "left-0" : "right-0")}
        />
      )}
    </div>
  );
}

function SimpleComposition({
  images,
  alt,
  flip,
  frameColor,
  ratios,
}: {
  images: string[];
  alt: string;
  flip: boolean;
  frameColor: "white" | "navy" | "black";
  ratios?: string[] | undefined;
}) {
  const a = images[0]!;
  const b = images[1];
  const c = images[2];
  const r = (i: number): string => ratios?.[i] ?? "4/3";

  return (
    <div className="w-full">
      {/* Desktop / tablet: one large image + up to two stacked supports */}
      <div className={cn("hidden gap-4 sm:grid sm:grid-cols-12 sm:items-stretch")}>
        <Frame
          src={a}
          alt={`${alt} — primary visual`}
          kind="screen"
          ratio={r(0)}
          frameColor={frameColor}
          className={cn(b ? "sm:col-span-8" : "sm:col-span-12", flip ? "sm:order-2" : "sm:order-1")}
        />
        {b && (
          <div className={cn("flex flex-col gap-4 sm:col-span-4", flip ? "sm:order-1" : "sm:order-2")}>
            <Frame src={b} alt={`${alt} — supporting visual`} kind="screen" ratio={r(1)} frameColor={frameColor} className="w-full" />
            {c && <Frame src={c} alt={`${alt} — detail visual`} kind="screen" ratio={r(2)} frameColor={frameColor} className="w-full" />}
          </div>
        )}
      </div>

      {/* Mobile: clean vertical stack, one visual per row */}
      <div className="flex w-full min-w-0 flex-col gap-5 overflow-hidden sm:hidden">
        <Frame src={a} alt={`${alt} — primary visual`} kind="screen" ratio={r(0)} frameColor={frameColor} className="w-full" />
        {b && <Frame src={b} alt={`${alt} — supporting visual`} kind="screen" ratio={r(1)} frameColor={frameColor} className="w-full" />}
        {c && <Frame src={c} alt={`${alt} — detail visual`} kind="screen" ratio={r(2)} frameColor={frameColor} className="w-full" />}
      </div>
    </div>
  );
}

export function MockupComposition({
  images,
  alt,
  flip = false,
  layout = "simple",
  frameColor = "white",
  ratios,
  thirdImageClassName,
}: {
  images: string[];
  alt: string;
  flip?: boolean;
  layout?: MockupLayout;
  frameColor?: "white" | "navy" | "black";
  ratios?: string[] | undefined;
  thirdImageClassName?: string | undefined;
}) {
  if (!images?.[0]) return null;
  return layout === "layered" ? (
    <LayeredComposition images={images} alt={alt} flip={flip} frameColor={frameColor} ratios={ratios} thirdImageClassName={thirdImageClassName} />
  ) : (
    <SimpleComposition images={images} alt={alt} flip={flip} frameColor={frameColor} ratios={ratios} />
  );
}
