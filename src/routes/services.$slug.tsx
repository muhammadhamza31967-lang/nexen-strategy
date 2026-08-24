import { createFileRoute, notFound, redirect, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { serviceContent } from "@/lib/service-content";
import { serviceVisuals } from "@/lib/service-visuals";
import { services, type ServiceKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    // Canonical Brand & Design page lives at /services/brand-design
    if (params.slug === "brand-and-design") {
      throw redirect({ to: "/services/brand-design" });
    }
    const content = serviceContent[params.slug as ServiceKey];
    if (!content) throw notFound();
    return { content };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Nexen Strategy" }, { name: "robots", content: "noindex" }],
      };
    }
    const { content } = loaderData;
    return {
      meta: [
        { title: `${content.label} — Nexen Strategy` },
        { name: "description", content: content.intro.slice(0, 155) },
        { property: "og:title", content: `${content.hero} | ${content.label}` },
        { property: "og:description", content: content.intro.slice(0, 155) },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { content } = Route.useLoaderData();
  const v = serviceVisuals[content.slug];
  const others = services.filter((s) => s.slug !== content.slug).slice(0, 3);

  const heroCopy = (
    <>
      <Reveal>
        <p className="eyebrow text-cyan">
          {content.no} — {content.label}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-8 text-[2.7rem] text-white sm:text-6xl lg:text-[4.6rem]">
          {content.hero}
        </h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{content.intro}</p>
      </Reveal>
      <Reveal delay={210}>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary group">
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/portfolio" className="btn-ghost-light">
            See Related Work
          </Link>
        </div>
      </Reveal>
    </>
  );

  return (
    <>
      <Header overHero />
      <main>
        {/* HERO — layout varies per service */}
        {v.heroLayout === "backdrop" && (
          <section className="relative overflow-hidden bg-navy pt-44 pb-28 lg:pt-60 lg:pb-40">
            <img
              src={v.detail}
              alt={v.detailAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(1,12,98,0.94) 10%, rgba(1,12,98,0.55) 60%, rgba(1,12,98,0.8) 100%)",
              }}
            />
            <div aria-hidden className="grid-faint absolute inset-0" />
            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">{heroCopy}</div>
          </section>
        )}

        {v.heroLayout === "split" && (
          <section className="relative overflow-hidden bg-navy pt-40 pb-0 lg:pt-52">
            <div aria-hidden className="grid-faint absolute inset-0" />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 top-10 h-[540px] w-[540px] rounded-full opacity-40 blur-[150px]"
              style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
            />
            <div className="relative mx-auto grid max-w-[1400px] items-end gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
              <div className="pb-20 lg:col-span-7 lg:pb-32">{heroCopy}</div>
              <Reveal delay={200} className="lg:col-span-5">
                <div className="relative -mb-16 overflow-hidden lg:-mb-24">
                  <img
                    src={v.detail}
                    alt={v.detailAlt}
                    loading="lazy"
                    className={cn("w-full object-cover", v.detailRatio)}
                  />
                </div>
              </Reveal>
            </div>
            <div className="h-16 lg:h-24" />
          </section>
        )}

        {v.heroLayout === "full-bleed" && (
          <>
            <section className="relative overflow-hidden bg-navy pt-40 pb-20 lg:pt-56 lg:pb-24">
              <div aria-hidden className="grid-faint absolute inset-0" />
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-12%] top-[-18%] h-[620px] w-[620px] rounded-full opacity-35 blur-[150px]"
                style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
              />
              <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">{heroCopy}</div>
            </section>
            <div className="bg-navy">
              <Reveal>
                <img
                  src={v.detail}
                  alt={v.detailAlt}
                  loading="lazy"
                  className="h-[46vh] min-h-[300px] w-full object-cover lg:h-[70vh]"
                />
              </Reveal>
            </div>
          </>
        )}

        {/* NARRATIVE */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-3">
              <p className="eyebrow text-azure">The approach</p>
              <span aria-hidden className="mt-6 block h-px w-14 bg-gradient-to-r from-azure to-cyan" />
            </Reveal>
            <div className="lg:col-span-6">
              {content.body.map((p, i) => (
                <Reveal key={i} delay={80 + i * 70}>
                  <p
                    className={cn(
                      "leading-relaxed text-muted-foreground",
                      i === 0 ? "text-xl text-navy/85" : "mt-7 text-lg",
                    )}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="lg:col-span-3">
              <ul className="space-y-5 border-l border-border pl-6">
                {content.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-navy">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-amber" strokeWidth={2} />
                    <span className="text-base font-medium leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* SUPPORTING VISUAL BAND / GALLERY */}
        {v.gallery ? (
          <section className="border-t border-border bg-secondary/30">
            <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
              <Reveal>
                <p className="eyebrow text-azure">Production</p>
                <h2 className="display mt-6 max-w-3xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                  Shot, directed and finished in-house.
                </h2>
              </Reveal>
              <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
                {v.gallery.map((g, i) => (
                  <Reveal key={g.src} delay={i * 90} className={g.span}>
                    <div className="group overflow-hidden bg-navy">
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        className={cn(
                          "w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]",
                          g.ratio,
                        )}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : (
          v.support && (
            <section className="relative overflow-hidden border-t border-border">
              <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                  <Reveal className="lg:col-span-7">
                    <div className="overflow-hidden bg-navy">
                      <img
                        src={v.support}
                        alt={v.supportAlt ?? content.imageAlt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={120} className="lg:col-span-5">
                    <p className="eyebrow text-azure">In practice</p>
                    <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-4xl lg:text-[2.6rem]">
                      {content.closing}
                    </h2>
                    <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                      {content.intro}
                    </p>
                    <Link
                      to="/portfolio"
                      className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-navy"
                    >
                      See related work
                      <ArrowUpRight className="h-5 w-5 text-amber transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        )}

        {/* CAPABILITIES */}
        <section className="border-t border-border bg-navy">
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <div aria-hidden className="grid-faint absolute inset-0" />
            <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="eyebrow text-cyan">What we do</p>
                  <h2 className="display mt-6 text-4xl text-white lg:text-5xl">Capabilities</h2>
                  <p className="mt-7 max-w-sm text-base leading-relaxed text-white/60">
                    Engage a single capability or the full discipline. The standard does not change.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <div className="grid gap-x-12 sm:grid-cols-2">
                  {content.capabilities.map((c, i) => (
                    <Reveal key={c.name} delay={i * 50}>
                      <div className="group border-b border-white/12 py-7">
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-[0.7rem] text-cyan/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg font-semibold tracking-tight text-white">
                            {c.name}
                          </h3>
                        </div>
                        <p className="mt-3 pl-9 text-base leading-relaxed text-white/60">{c.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow text-azure">How we work</p>
              <h2 className="display mt-6 max-w-2xl text-[2rem] text-navy sm:text-4xl lg:text-[3rem]">
                From first conversation to measurable result.
              </h2>
            </Reveal>
            <ProcessTimeline />
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <p className="eyebrow text-azure">Continue exploring</p>
            <div className="mt-10 border-t border-border">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 border-b border-border py-7 transition-[padding] duration-500 hover:pl-3"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                    <span className="display text-2xl text-navy transition-colors group-hover:text-azure lg:text-4xl">
                      {s.title}
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-azure" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection eyebrow={content.label} heading={content.closing} />
      </main>
      <Footer />
    </>
  );
}
