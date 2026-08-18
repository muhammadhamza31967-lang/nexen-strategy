import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaSection({
  eyebrow = "Start a conversation",
  heading = "Let's Build What Comes Next.",
  body = "Whether you are launching something new, replacing what no longer works, or planning the next phase of growth, we would like to hear about it. Tell us where your business is heading and we will show you how we can help you get there.",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div aria-hidden className="grid-faint absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-45 blur-[130px]"
        style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="ghost-type absolute -right-8 -bottom-6 text-[6rem] text-white/[0.05] sm:text-[11rem] lg:text-[15rem]"
      >
        NEXEN
      </span>
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-30">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow text-cyan">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-7 text-[2.6rem] text-white sm:text-6xl lg:text-[4.6rem]">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{body}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-11 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-ghost-light">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
    </section>
  );
}