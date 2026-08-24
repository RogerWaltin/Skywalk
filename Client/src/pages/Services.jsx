import {
  ArrowUpRight,
  BookUser,
  Bus,
  CarFront,
  Globe,
  HeartPulse,
  Landmark,
  MapPinned,
  Plane,
  ShieldCheck,
  Ship,
  Stamp,
  TrainFront,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

const icons = {
  Plane,
  TrainFront,
  Bus,
  MapPinned,
  Landmark,
  Ship,
  Stamp,
  BookUser,
  ShieldCheck,
  HeartPulse,
  CarFront,
};

export default function Services({ onEnquiry }) {
  return (
    <section id="services" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything Your Journey Needs, Under One Roof"
          text="From tickets and documents to complete holidays — placeholder descriptions below, ready to be replaced with approved copy."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <button
                key={service.title}
                type="button"
                onClick={onEnquiry}
                className="group relative flex w-full cursor-pointer flex-col rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf-200 hover:shadow-xl hover:shadow-leaf-600/10"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-leaf-50 to-navy-50 text-leaf-600 transition-colors duration-300 group-hover:bg-leaf-600 group-hover:text-white">
                  {Icon && <Icon className="size-6" strokeWidth={1.9} />}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{service.text}</p>
                <ArrowUpRight className="absolute top-6 right-6 size-4.5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-leaf-500" />
              </button>
            );
          })}

          {/* Filler card prompting enquiry */}
          <div className="flex flex-col justify-between rounded-3xl bg-linear-to-br from-navy-900 to-navy-700 p-6 text-white shadow-lg">
            <div>
              <Globe className="size-8 text-leaf-300" strokeWidth={1.7} />
              <h3 className="mt-4 font-display text-lg font-semibold">Something Else in Mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Draft copy — tell us what you need and we will help you arrange it.
              </p>
            </div>
            <button
              type="button"
              onClick={onEnquiry}
              className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-leaf-100"
            >
              Ask Us
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
