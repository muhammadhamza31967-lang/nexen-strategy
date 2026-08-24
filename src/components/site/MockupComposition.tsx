import { cn } from "@/lib/utils";

type MockupKind = "browser" | "screen" | "phone" | "tablet";
export type MockupLayout = "layered" | "simple";

function Chrome() {
  return (
    <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-black/5 bg-[#F6F7FB] px-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
      <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
      <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
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
}: {
  src: string;
  alt: string;
  kind?: MockupKind;
  ratio: string;
  className?: string;
  frameColor?: "white" | "navy";
}) {
  const phone = kind === "phone";
  const tablet = kind === "tablet";
  const contain = phone || tablet;
  const darkFrame = frameColor === "navy" && (phone || tablet);
  return (
    <figure
      className={cn(
        "group/mk overflow-hidden transition-all duration-500 ease-out",
        darkFrame ? "bg-navy" : "bg-white",
        phone ? "rounded-[1.4rem] p-[3px]" : "rounded-xl",
        "border border-black/[0.07] shadow-[0_22px_60px_-28px_rgba(1,12,98,0.35)]",
        "hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-30px_rgba(1,12,98,0.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col overflow-hidden",
          darkFrame ? "bg-navy" : "bg-white",
          phone ? "rounded-[1.25rem]" : "",
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
}: {
  images: string[];
  alt: string;
  flip: boolean;
  frameColor?: "white" | "navy";
}) {
  const a = images[0]!;
  const secondary = images.slice(1).filter(Boolean).slice(0, 3);

  return (
    <div className="w-full">
      {/* Desktop / tablet composition */}
      <div className="relative hidden aspect-[16/10] w-full sm:block">
        <Frame
          src={a}
          alt={`${alt} — primary interface mockup`}
          kind="browser"
          ratio="16/10"
          frameColor={frameColor}
          className={cn("absolute top-[6%] w-[80%]", flip ? "right-0" : "left-0")}
        />

        {secondary[0] && (
          <Frame
            src={secondary[0]}
            alt={`${alt} — mobile mockup`}
            kind="phone"
            ratio="9/17"
            frameColor={frameColor}
            className={cn("absolute bottom-[6%] z-10 w-[16%]", flip ? "left-[5%]" : "right-[5%]")}
          />
        )}

        {secondary[1] && (
          <Frame
            src={secondary[1]}
            alt={`${alt} — dashboard detail`}
            kind="tablet"
            ratio="4/3"
            frameColor={frameColor}
            className={cn("absolute top-0 w-[26%]", flip ? "left-0" : "right-0")}
          />
        )}
      </div>


      {/* Mobile: primary + controlled horizontal carousel */}
      <div className="sm:hidden">
        <Frame src={a} alt={`${alt} — primary interface mockup`} kind="browser" ratio="16/10" frameColor={frameColor} className="w-full" />
        {secondary.length > 0 && (
          <div className="mk-scroll -mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {secondary.map((src, i) => (
              <Frame
                key={i}
                src={src}
                alt={`${alt} — supporting mockup ${i + 2}`}
                kind="screen"
                ratio="4/3"
                frameColor={frameColor}
                className="w-[68%] shrink-0 snap-start"
              />
            ))}
          </div>
        )}
        <style>{`.mk-scroll{scrollbar-width:none}.mk-scroll::-webkit-scrollbar{display:none}`}</style>
      </div>
    </div>
  );
}

function SimpleComposition({
  images,
  alt,
  flip,
  frameColor,
}: {
  images: string[];
  alt: string;
  flip: boolean;
  frameColor?: "white" | "navy";
}) {
  const a = images[0]!;
  const b = images[1];
  const c = images[2];

  return (
    <div className="w-full">
      {/* Desktop / tablet: one large image + up to two stacked supports */}
      <div className={cn("hidden gap-4 sm:grid sm:grid-cols-12 sm:items-stretch")}>
        <Frame
          src={a}
          alt={`${alt} — primary visual`}
          kind="screen"
          ratio="4/3"
          frameColor={frameColor}
          className={cn(b ? "sm:col-span-8" : "sm:col-span-12", flip ? "sm:order-2" : "sm:order-1")}
        />
        {b && (
          <div className={cn("flex flex-col gap-4 sm:col-span-4", flip ? "sm:order-1" : "sm:order-2")}>
            <Frame src={b} alt={`${alt} — supporting visual`} kind="screen" ratio="4/3" frameColor={frameColor} className="w-full" />
            {c && <Frame src={c} alt={`${alt} — detail visual`} kind="screen" ratio="4/3" frameColor={frameColor} className="w-full" />}
          </div>
        )}
      </div>

      {/* Mobile: clean vertical stack */}
      <div className="flex flex-col gap-4 sm:hidden">
        <Frame src={a} alt={`${alt} — primary visual`} kind="screen" ratio="4/3" frameColor={frameColor} className="w-full" />
        {b && (
          <div className="grid grid-cols-2 gap-4">
            <Frame src={b} alt={`${alt} — supporting visual`} kind="screen" ratio="4/3" frameColor={frameColor} className="w-full" />
            {c && <Frame src={c} alt={`${alt} — detail visual`} kind="screen" ratio="4/3" frameColor={frameColor} className="w-full" />}
          </div>
        )}
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
}: {
  images: string[];
  alt: string;
  flip?: boolean;
  layout?: MockupLayout;
  frameColor?: "white" | "navy";
}) {
  if (!images?.[0]) return null;
  return layout === "layered" ? (
    <LayeredComposition images={images} alt={alt} flip={flip} frameColor={frameColor} />
  ) : (
    <SimpleComposition images={images} alt={alt} flip={flip} frameColor={frameColor} />
  );
}
