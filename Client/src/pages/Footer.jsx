import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../components/Logo";
import { InstagramIcon, WhatsAppIcon } from "../components/SocialIcons";
import { navLinks, services, site } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="brightness-0 invert [&_img]:h-12 sm:[&_img]:h-14">
              <Logo />
            </div>
            <p className="mt-1 max-w-xs text-sm leading-relaxed">
              {site.tagline}. Flights, tours, visas and complete travel support,
              all in one place.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Skywalk on Instagram"
                className="instagram-gradient grid size-10 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:text-white"
              >
                <InstagramIcon className="size-4.5" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Skywalk on WhatsApp"
                className="grid size-10 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-leaf-600 hover:text-white"
              >
                <WhatsAppIcon className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links + Services */}
          <div className="grid grid-cols-2 gap-x-10">
            {/* Quick links */}
            <nav aria-label="Footer quick links">
              <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-leaf-300"
                    >
                      <ArrowUpRight className="size-3.5 text-leaf-400" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Services</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {services.slice(0, 6).map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="transition-colors hover:text-leaf-300">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-leaf-300">
                  <Phone className="size-4" />
                </span>
                <div className="flex flex-wrap items-center gap-x-1.5">
                  {site.phones.map((p, i) => (
                    <div key={p.href} className="flex items-center gap-x-1.5">
                      {i > 0 && <span className="text-white/40">{"\u00b7"}</span>}
                      <a
                        href={p.href}
                        className="whitespace-nowrap transition-colors hover:text-leaf-300"
                      >
                        {p.display}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-leaf-300"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-leaf-300">
                    <Mail className="size-4" />
                  </span>
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-leaf-300">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="font-semibold leading-snug">{site.address}</p>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-leaf-300 hover:text-leaf-200 transition-colors"
                  >
                    <MapPin className="size-3" />
                    Get Directions
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
