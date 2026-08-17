import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/nexen-logo.png.asset.json";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !scrolled;

  const navLink = cn(
    "text-sm font-medium tracking-tight transition-colors",
    light ? "text-white/85 hover:text-white" : "text-navy/75 hover:text-navy",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-500",
        light ? "py-6" : "bg-white/92 py-4 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" aria-label="Nexen Strategy home" className="shrink-0">
          <img
            src={logo.url}
            alt="Nexen Strategy"
            width={160}
            height={42}
            className={cn(
              "h-8 w-auto transition-all duration-500 sm:h-9",
              light && "brightness-0 invert",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <Link to="/about" className={navLink}>
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(navLink, "flex items-center gap-1.5")}
            >
              Services
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-5 transition-all duration-300",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0",
              )}
            >
              <div className="overflow-hidden rounded-md border border-border bg-white p-2 shadow-[0_30px_70px_-30px_rgba(1,12,98,0.45)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between px-4 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-secondary hover:text-navy"
                  >
                    {s.title}
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-azure opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/portfolio" className={navLink}>
            Portfolio
          </Link>
          <Link to="/partners" className={navLink}>
            Partners
          </Link>
          <Link to="/contact" className={navLink}>
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !py-3 !text-[0.85rem] lg:inline-flex">
            Start a Project
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn("p-2 lg:hidden", light ? "text-white" : "text-navy")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-navy transition-all duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img
            src={logo.url}
            alt="Nexen Strategy"
            width={160}
            height={42}
            className="h-8 w-auto brightness-0 invert"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav
          className="flex h-[calc(100%-88px)] flex-col gap-1 overflow-y-auto px-6 pb-16"
          aria-label="Mobile"
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white"
            >
              {l.label}
            </Link>
          ))}
          <p className="eyebrow pt-7 pb-2 text-cyan">Services</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3.5 text-lg font-medium text-white/85"
            >
              {s.title}
            </Link>
          ))}
          {[
            { to: "/portfolio", label: "Portfolio" },
            { to: "/partners", label: "Partners" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 justify-center"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}