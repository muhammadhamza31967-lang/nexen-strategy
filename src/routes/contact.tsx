import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
          "Let's build something that matters. Talk to Nexen Strategy about your business, digital, technology, AI, marketing or creative requirements.",
      },
      { property: "og:title", content: "Contact — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "Start a conversation with Nexen Strategy about where your business is heading next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3.5 text-base text-navy outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-azure";

const contactDetails = [
  {
    Icon: MapPin,
    label: "Location",
    value: "UK / Islamabad",
    href: null as string | null,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+92 335 8084973",
    href: "tel:+923358084973",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@nexenstrategy.com",
    href: "mailto:info@nexenstrategy.com",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const requiredFields: (keyof typeof formData)[] = ["name", "email", "service", "message"];
    const missing = requiredFields.some((field) => !formData[field].trim());
    if (missing) {
      toast.error("Please complete all required fields.");
      return;
    }

    const whatsappMessage = [
      "New Website Enquiry",
      "",
      `Name: ${formData.name.trim()}`,
      `Company: ${formData.company.trim() || "N/A"}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "N/A"}`,
      `Service / Project Type: ${formData.service}`,
      `Message: ${formData.message.trim()}`,
    ].join("\n");

    const encoded = encodeURIComponent(whatsappMessage);
    window.location.href = `https://wa.link/u8asi4?text=${encoded}`;

    setSent(true);
    toast.success("Enquiry received", {
      description: "Thank you. A member of the team will be in touch shortly.",
    });
    e.currentTarget.reset();
    setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  }

  return (
    <>
      <Header transparentDefault />
      <main className="overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section className="relative isolate overflow-hidden pt-[9.5rem] lg:pt-44">
          {/* subtle visual treatment — fine grid + flowing line */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-faint opacity-50" />
            <div className="absolute inset-0 [background:radial-gradient(55%_60%_at_85%_10%,rgba(74,115,255,0.08),transparent_65%),radial-gradient(40%_45%_at_10%_90%,rgba(58,241,255,0.06),transparent_60%)]" />
            <svg
              className="absolute right-0 top-0 h-full w-[60%] opacity-60"
              viewBox="0 0 800 600"
              fill="none"
              preserveAspectRatio="xMaxYMin slice"
            >
              <defs>
                <linearGradient id="contactLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4A73FF" stopOpacity="0" />
                  <stop offset="55%" stopColor="#4A73FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF483F" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <path
                d="M-20 140 C 220 60, 480 240, 840 120"
                stroke="url(#contactLine)"
                strokeWidth="1"
                strokeDasharray="10 18"
              />
              <path
                d="M-20 320 C 260 240, 520 420, 840 300"
                stroke="url(#contactLine)"
                strokeWidth="1"
                strokeDasharray="10 18"
                opacity="0.7"
              />
              <circle cx="560" cy="198" r="3.5" fill="#4A73FF" opacity="0.5" />
              <circle cx="560" cy="198" r="9" fill="none" stroke="#4A73FF" strokeOpacity="0.3" />
              <circle cx="690" cy="346" r="3.5" fill="#FFA53C" opacity="0.55" />
              <circle cx="690" cy="346" r="9" fill="none" stroke="#FFA53C" strokeOpacity="0.3" />
            </svg>
          </div>

          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Contact us</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-8 max-w-4xl text-[2.75rem] leading-[1.04] text-navy sm:text-6xl lg:text-[5rem]">
                Let's Build Something That{" "}
                <span className="bg-gradient-to-r from-[#FFA53C] to-[#FF483F] bg-clip-text text-transparent">
                  Matters.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Whether it's your business, digital presence, technology, AI, marketing or creative
                requirements — tell us where you're heading and we'll show you how we can help you
                get there.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-14 border-t border-border" />
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT AREA ================= */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* LEFT — heading + contact details */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                  Start a conversation.
                </h2>
              </Reveal>
              <Reveal delay={70}>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Share a few details about your project and a senior member of the team will come
                  back to you with an honest view on how we'd approach it — and whether we're the
                  right partner for the work.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <dl className="mt-14 space-y-0 border-t border-border">
                  {contactDetails.map(({ Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="group flex items-start gap-5 border-b border-border py-7"
                    >
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-colors duration-300 group-hover:border-azure group-hover:text-azure">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <dt className="eyebrow text-muted-foreground">{label}</dt>
                        <dd className="mt-2">
                          {href ? (
                            <a
                              href={href}
                              className="inline-flex items-center gap-1.5 text-lg font-medium text-navy transition-colors hover:text-azure lg:text-xl"
                            >
                              {value}
                              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                          ) : (
                            <span className="text-lg font-medium text-navy lg:text-xl">
                              {value}
                            </span>
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <Reveal delay={140} className="lg:col-span-7">
              <div className="relative lg:pl-16">
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 hidden w-px bg-border lg:block"
                />
                <h2 className="text-xl font-semibold tracking-tight text-navy">
                  Tell us about your project
                </h2>
                <form onSubmit={handleSubmit} className="mt-10 space-y-9">
                  <div className="grid gap-9 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="eyebrow text-muted-foreground">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className={fieldClass}
                        placeholder="Company name"
                      />
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
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
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
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={fieldClass}
                        placeholder="+92"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="eyebrow text-muted-foreground">
                      Service / Project Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className={fieldClass}
                    >
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
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`${fieldClass} resize-none`}
                      placeholder="What are you looking to achieve?"
                    />
                  </div>
                  <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" className="btn-primary group">
                      Start a Conversation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p aria-live="polite" className="text-sm text-muted-foreground">
                      {sent ? "Thank you — your enquiry has been received." : ""}
                    </p>
                  </div>
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
