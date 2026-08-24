import { CalendarCheck, Globe, Quote, Smile, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site, whyChooseUs } from "../data/content";

const icons = { Users, CalendarCheck, Globe, Smile };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Skywalk"
          title="Travel Planning Without the Headache"
          text="Draft benefits below — final wording to be supplied by the client."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span className="pointer-events-none absolute -top-4 -right-2 font-display text-[7rem] leading-none font-bold text-navy-50 transition-colors duration-300 select-none group-hover:text-leaf-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-navy-900 text-sand-300 transition-colors duration-300 group-hover:bg-leaf-600 group-hover:text-white">
                  {Icon && <Icon className="size-6" strokeWidth={1.9} />}
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline strip */}
        <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-linear-to-r from-leaf-600 via-leaf-700 to-navy-900 px-8 py-10 text-center text-white shadow-xl shadow-leaf-700/20 sm:flex-row sm:text-left">
          <Quote className="size-10 shrink-0 text-sand-300" strokeWidth={1.5} />
          <div>
            <p className="font-display text-2xl font-semibold italic sm:text-3xl">
              “{site.tagline}”
            </p>
            <p className="mt-2 text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
              — The Skywalk Promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
