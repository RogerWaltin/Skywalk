import { ArrowRight, ChevronDown, Compass, Plane, MapPinned, Stamp, Ship } from "lucide-react";
import { hero } from "../data/content";

const icons = { Plane, MapPinned, Stamp, Ship };

export default function Hero({ onEnquiry }) {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background video with poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.video}
        poster={hero.poster}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy-950/90 via-navy-900/70 to-navy-900/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-36 pb-40 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
            <Compass className="size-3.5 text-leaf-300" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold text-balance text-white sm:text-6xl lg:text-7xl">
            {hero.titleLine1}
            <br />
            <span className="text-leaf-300 italic">{hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-leaf-600/30 transition-all hover:-translate-y-0.5 hover:bg-leaf-700"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onEnquiry}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-navy-900"
            >
              {hero.secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Service highlight chips */}
        <ul className="mt-16 flex max-w-3xl flex-wrap gap-3 lg:mt-20">
          {hero.highlights.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.label}
                className="flex items-center gap-2.5 rounded-full border border-white/15 bg-navy-950/40 py-2.5 pr-6 pl-4 text-sm font-semibold text-white backdrop-blur-md"
              >
                {Icon && <Icon className="size-4.5 text-leaf-300" />}
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  );
}
