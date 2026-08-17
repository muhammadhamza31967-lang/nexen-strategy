import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { serviceOptions } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexen Strategy" },
      {
        name: "description",
        content:
          "Start a project with Nexen Strategy. Tell us about your business, your objective and where you want to be next.",
      },
      { property: "og:title", content: "Start a Project — Nexen Strategy" },
      {
        property: "og:description",
        content: "Tell us where your business is heading and we will show you how we can help.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3.5 text-base text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-azure";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Enquiry received", {
      description: "Thank you. A member of the team will be in touch shortly.",
    });
    e.currentTarget.reset();
  }

  return (
    <>
      <Header />
      <main className="pt-28 lg:pt-36">
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-azure">Contact us</p>
              </Reveal>
              <Reveal delay={70}>
                <h1 className="display mt-7 text-[2.6rem] text-navy sm:text-6xl lg:text-[4.4rem]">
                  Start a Project.
                </h1>
              </Reveal>
              <Reveal delay={130}>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Tell us about your business, what you are trying to achieve and where the current
                  approach is falling short. We will come back with an honest view of how we would
                  approach it, and whether we are the right partner for the work.
                </p>
              </Reveal>

              <Reveal delay={190}>
                <dl className="mt-14 space-y-8">
                  <div>
                    <dt className="eyebrow text-muted-foreground">Email</dt>
                    <dd className="mt-2">
                      <a
                        href="mailto:hello@nexenstrategy.com"
                        className="text-xl font-medium text-navy hover:text-azure"
                      >
                        hello@nexenstrategy.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Telephone</dt>
                    <dd className="mt-2">
                      <a
                        href="tel:+442080000000"
                        className="text-xl font-medium text-navy hover:text-azure"
                      >
                        +44 (0) 20 8000 0000
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Office</dt>
                    <dd className="mt-2 text-xl font-medium text-navy">United Kingdom</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="bg-secondary/70 p-8 lg:p-12">
                <h2 className="text-xl font-semibold tracking-tight text-navy">
                  Tell us about your project
                </h2>
                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow text-muted-foreground">
                        Name
                      </label>
                      <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="eyebrow text-muted-foreground">
                        Company
                      </label>
                      <input id="company" name="company" className={fieldClass} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="eyebrow text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow text-muted-foreground">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={fieldClass}
                        placeholder="+44"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="eyebrow text-muted-foreground">
                      Service
                    </label>
                    <select id="service" name="service" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow text-muted-foreground">
                      Project / Enquiry
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${fieldClass} resize-none`}
                      placeholder="What are you looking to achieve?"
                    />
                  </div>
                  <button type="submit" className="btn-primary group w-full justify-center">
                    Send Enquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
                    {sent ? "Thank you — your enquiry has been received." : ""}
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}