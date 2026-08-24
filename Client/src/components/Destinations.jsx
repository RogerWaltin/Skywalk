import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { destinationNote, destinations } from "../data/content";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            align="left"
            eyebrow="Explore the World"
            title="Destinations Near, Far & Everywhere Between"
            text="A glimpse of the kinds of journeys we can arrange — across India and around the globe."
          />
          <a
            href="#packages"
            className="group hidden shrink-0 items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white lg:inline-flex"
          >
            View Packages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid auto-rows-42.5 grid-cols-2 gap-4 sm:auto-rows-55 sm:gap-5 lg:auto-rows-60 lg:grid-cols-4">
          {destinations.map((destination) => (
            <figure
              key={destination.name}
              className={`group relative overflow-hidden rounded-3xl ${
                destination.feature
                  ? "col-span-2 row-span-2"
                  : destination.wide
                    ? "col-span-2"
                    : ""
              }`}
            >
              <img
                src={destination.image}
                alt={`${destination.name} (placeholder travel photo)`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-bold tracking-[0.18em] text-sand-300 uppercase">
                  {destination.tag}
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-display text-lg font-semibold text-white sm:text-xl">
                  <MapPin className="size-4.5 shrink-0 text-leaf-400" />
                  {destination.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400 italic">
          {destinationNote}
        </p>
      </div>
    </section>
  );
}
