import { cn } from "@/lib/utils";

type MockupKind = "browser" | "screen" | "phone" | "tablet";

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
}: {
  src: string;
  alt: string;
  kind?: MockupKind;
  ratio: string;
  className?: string;
}) {
  const phone = kind === "phone";
  return (
    <figure
      className={cn(
        "group/mk overflow-hidden bg-white transition-all duration-500 ease-out",
        phone ? "rounded-[1.4rem] p-1.5" : "rounded-xl",
        "border border-black/[0.07] shadow-[0_22px_60px_-28px_rgba(1,12,98,0.35)]",
        "hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-30px_rgba(1,12,98,0.45)]",
        className,
      )}
    >
      <div
        className={cn("flex h-full w-full flex-col overflow-hidden bg-white", phone ? "rounded-[1rem]" : "")}
      >
        {kind === "browser" && <Chrome />}
        <div className="relative flex-1 overflow-hidden" style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/mk:scale-[1.04]"
          />
        </div>
      </div>
    </figure>
  );
}

export function MockupComposition({
  images,
  alt,
  flip = false,
}: {
  images: string[];
  alt: string;
  flip?: boolean;
}) {
  const [a, b, c, d] = images;
  if (!a) return null;
  const secondary = [b, c, d].filter(Boolean) as string[];

  return (
    <div className="w-full">
      {/* Desktop / tablet composition */}
      <div className="relative hidden aspect-[16/12] w-full sm:block">
        <Frame
          src={a}
          alt={`${alt} — primary interface mockup`}
          kind="browser"
          ratio="16/10"
          className={cn("absolute top-0 w-[82%]", flip ? "right-0" : "left-0")}
        />

        {secondary[0] && (
          <Frame
            src={secondary[0]}
            alt={`${alt} — supporting screen`}
            kind="screen"
            ratio="4/3"
            className={cn("absolute bottom-0 w-[46%]", flip ? "right-[26%]" : "left-[26%]")}
          />
        )}

        {secondary[1] && (
          <Frame
            src={secondary[1]}
            alt={`${alt} — mobile mockup`}
            kind="phone"
            ratio="9/17"
            className={cn("absolute bottom-[6%] w-[19%]", flip ? "left-[1%]" : "right-[1%]")}
          />
        )}

        {secondary[2] && (
          <Frame
            src={secondary[2]}
            alt={`${alt} — dashboard detail`}
            kind="tablet"
            ratio="4/3"
            className={cn("absolute top-[10%] w-[27%]", flip ? "left-0" : "right-0")}
          />
        )}
      </div>

      {/* Mobile: primary + controlled horizontal carousel */}
      <div className="sm:hidden">
        <Frame src={a} alt={`${alt} — primary interface mockup`} kind="browser" ratio="16/10" className="w-full" />
        {secondary.length > 0 && (
          <div className="mk-scroll -mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {secondary.map((src, i) => (
              <Frame
                key={i}
                src={src}
                alt={`${alt} — supporting mockup ${i + 2}`}
                kind="screen"
                ratio="4/3"
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
