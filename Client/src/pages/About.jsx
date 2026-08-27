import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/content";

// About section — content sourced from data/content.js
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
            <img
              src={about.images.main}
              alt="Scenic travel destination with mountain landscape"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="absolute -right-4 -bottom-10 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8 sm:w-52 animate-float">
            <img
              src={about.images.secondary}
              alt="Road trip adventure through scenic countryside"
              className="aspect-square w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* NOTE: removed this cus doesn't look good but keeping in case we change our mind */}
          {/* <div className="absolute -top-6 -left-3 hidden rounded-2xl bg-leaf-600 px-5 py-4 text-white shadow-xl sm:block">
            <p className="font-display text-2xl font-semibold">New</p>
            <p className="text-xs font-bold tracking-widest uppercase">Just launched</p>
          </div> */}

        </div>

        {/* Copy */}
        <div>
          <SectionHeading align="left" eyebrow={about.eyebrow} title={about.heading} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-500">
            {about.paragraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <ul className="mt-7 space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 font-semibold text-navy-900">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-leaf-500" />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#services"
            className="mt-9 inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
          >
            See What We Offer
          </a>
        </div>
      </div>
    </section>
  );
}
