import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "../components/Logo";
import { WhatsAppIcon } from "../components/SocialIcons";
import { useToast } from "../components/ToastContext";
import { copyToClipboard } from "../utils/clipboard";
import { navLinks, site } from "../data/content";

export default function Navbar({ onEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyPhone = async () => {
    const copied = await copyToClipboard(site.phoneCopy);
    showToast(copied ? "Copied number to clipboard" : "Couldn't copy the number");
  };

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
        <div className={`${solid ? "" : "[&_a]:text-white"} [&_img]:h-12 sm:[&_img]:h-14`}>
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-navy-900 hover:bg-leaf-50 hover:text-leaf-700"
                    : "text-navy-900 hover:bg-navy-900/5 hover:text-navy-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <button
            type="button"
            onClick={handleCopyPhone}
            title="Copy phone number"
            aria-label="Copy phone number to clipboard"
            className={`grid size-9 place-items-center rounded-full transition-colors ${
              solid ? "hover:bg-leaf-50" : "hover:bg-white/10"
            }`}
          >
            <Phone className="size-4.5 text-leaf-500" />
          </button>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="Chat with us on WhatsApp"
            className={`grid size-9 place-items-center rounded-full transition-colors ${
              solid ? "hover:bg-leaf-50" : "hover:bg-white/10"
            }`}
          >
            <WhatsAppIcon className="size-4.5 text-leaf-500" />
          </a>
          <button
            type="button"
            onClick={onEnquiry}
            className="rounded-full bg-leaf-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-leaf-600/25 transition-all hover:-translate-y-0.5 hover:bg-leaf-700 cursor-pointer"
          >
            Enquire Now
          </button>
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
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEnquiry();
            }}
            className="mt-2 block w-full rounded-xl bg-leaf-600 px-4 py-3 text-center text-base font-bold text-white"
          >
            Enquire Now
          </a>
          <div className="flex items-center justify-center gap-2 pt-2 pb-1">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleCopyPhone();
              }}
              aria-label="Copy phone number to clipboard"
              className="grid size-11 place-items-center rounded-xl transition-colors hover:bg-leaf-50"
            >
              <Phone className="size-5 text-leaf-500" />
            </button>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="grid size-11 place-items-center rounded-xl transition-colors hover:bg-leaf-50"
            >
              <WhatsAppIcon className="size-5 text-leaf-500" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
