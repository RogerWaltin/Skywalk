import { useState } from "react";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { packageCategories, packages } from "../data/content";

// Package cards driven by data/content.js — categories: Domestic,
// International, Religious. Pricing shown on request.
export default function Packages({ onEnquiry }) {
  const [active, setActive] = useState(packageCategories[0]);
  const visible = packages.filter((pkg) => pkg.category === active);

  return (
    <section id="packages" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Tour Packages"
          title="Packages We Offer"
          text="Handpicked journeys across India and around the world — every package can be tailored to your dates and budget."
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Package categories">
          {packageCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                active === category
                  ? "bg-leaf-500 text-white shadow-lg shadow-leaf-500/30"
                  : "border border-white/15 bg-white/5 text-white/70 hover:border-leaf-400/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((pkg) => (
            <article
              key={pkg.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf-400/40 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} tour package`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-bold tracking-wide text-leaf-300 uppercase backdrop-blur-sm">
                  <Sparkles className="size-3.5" />
                  {pkg.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/50 uppercase">
                  <Clock className="size-4 text-leaf-400" />
                  {pkg.duration}
                </div>
                <h3 className="mt-2.5 font-display text-xl font-semibold text-white">{pkg.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{pkg.blurb}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-bold text-leaf-300">Price on request</span>
                  <button
                    type="button"
                    onClick={onEnquiry}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-leaf-400 transition-colors hover:text-leaf-300"
                  >
                    Enquire
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-white/50">
          <MapPin className="size-4 shrink-0 text-leaf-400" />
          Looking for a custom itinerary? We build trips around your dates, budget and interests.
        </p>
      </div>
    </section>
  );
}
