import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/nexen-logo.png.asset.json";
import { services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <img
              src={logo.url}
              alt="Nexen Strategy"
              width={200}
              height={52}
              loading="lazy"
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
              A UK digital solutions partner helping established businesses build, transform and
              grow through strategy, design, technology and creative work.
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-cyan to-azure" />
          </div>

          <nav aria-label="Services">
            <p className="eyebrow text-cyan">Services</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="eyebrow text-cyan">Company</p>
            <ul className="mt-6 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/partners", label: "Partners" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-cyan">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:hello@nexenstrategy.com" className="hover:text-white">
                  hello@nexenstrategy.com
                </a>
              </li>
              <li>
                <a href="tel:+442080000000" className="hover:text-white">
                  +44 (0) 20 8000 0000
                </a>
              </li>
              <li className="pt-2 leading-relaxed">United Kingdom</li>
            </ul>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 text-amber transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/12 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Nexen Strategy. All rights reserved.</p>
          <p>Build Better. Move Smarter. Grow Further.</p>
        </div>
      </div>
    </footer>
  );
}