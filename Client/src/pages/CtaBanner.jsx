import { ArrowRight } from "lucide-react";
import { ctaBanner } from "../data/content";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={ctaBanner.video}
        poster={ctaBanner.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-950/75" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-semibold text-balance text-white sm:text-4xl">
            {ctaBanner.heading}
          </h2>
          <p className="mt-3 text-lg text-white/75">{ctaBanner.text}</p>
        </div>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-navy-900 shadow-xl shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-leaf-100"
        >
          Start Planning — It's Free
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
