import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className={solid ? "" : "[&_a]:text-white"}>
          <Logo dark={!solid} />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-navy-900 hover:bg-leaf-50 hover:text-leaf-700"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              solid ? "text-navy-900 hover:text-leaf-600" : "text-white hover:text-sand-300"
            }`}
          >
            <Phone className="size-4 text-leaf-500" />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-leaf-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-leaf-600/25 transition-all hover:-translate-y-0.5 hover:bg-leaf-700"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={`grid size-10 place-items-center rounded-xl lg:hidden ${
            solid ? "text-navy-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-navy-900 hover:bg-leaf-50 hover:text-leaf-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-leaf-600 px-4 py-3 text-center text-base font-bold text-white"
          >
            Enquire Now
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 pt-2 pb-1 text-sm font-semibold text-navy-700"
          >
            <Phone className="size-4 text-leaf-500" /> {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
