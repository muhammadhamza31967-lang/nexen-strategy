import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { serviceContent } from "@/lib/service-content";
import { services, type ServiceKey } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
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
    const title = `${content.label} — Nexen Strategy`;
    return {
      meta: [
        { title },
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
  const others = services.filter((s) => s.slug !== content.slug).slice(0, 3);

  return (
    <>
      <Header overHero />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-40 pb-24 lg:pt-56 lg:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-[-20%] h-[620px] w-[620px] rounded-full opacity-35 blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">
                {content.no} — {content.label}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-5xl text-[2.7rem] text-white sm:text-6xl lg:text-[5rem]">
                {content.hero}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                {content.intro}
              </p>
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
          </div>
        </section>

        {/* Image + narrative */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-7">
              <div className="overflow-hidden">
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 lg:pt-6">
              <Reveal delay={60}>
                <div className="h-px w-16 bg-gradient-to-r from-cyan to-azure" />
              </Reveal>
              {content.body.map((p, i) => (
                <Reveal key={i} delay={100 + i * 70}>
                  <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={280}>
                <ul className="mt-10 space-y-4">
                  {content.outcomes.map((o) => (
                    <li key={o} className="flex gap-4 text-navy">
                      <span className="mt-2.5 h-px w-8 shrink-0 bg-amber" />
                      <span className="text-base font-medium">{o}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="eyebrow text-azure">What we do</p>
                  <h2 className="display mt-6 text-4xl text-navy lg:text-5xl">Capabilities</h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {content.capabilities.map((c, i) => (
                    <Reveal key={c.name} delay={i * 50}>
                      <div className="group grid gap-2 border-b border-border py-7 transition-colors hover:bg-secondary/60 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:px-3">
                        <h3 className="text-lg font-semibold tracking-tight text-navy">{c.name}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{c.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <p className="eyebrow text-azure">Continue exploring</p>
            <div className="mt-10 border-t border-border">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 border-b border-border py-7 transition-colors hover:text-azure"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                    <span className="text-2xl font-semibold tracking-tight text-navy transition-colors group-hover:text-azure lg:text-3xl">
                      {s.title}
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-azure" />
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