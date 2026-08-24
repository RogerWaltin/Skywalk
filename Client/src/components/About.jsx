import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "../data/content";

// NOTE: All copy here is PLACEHOLDER text — replace once the client provides
// the final company description. No claims of experience, customers or awards.
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      {/* faint dotted travel-path backdrop */}
      <svg
        className="pointer-events-none absolute -top-10 right-0 hidden opacity-[0.35] lg:block"
        width="420"
        height="260"
        viewBox="0 0 420 260"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 230 C 120 40, 260 240, 410 30"
          stroke="#187e53"
          strokeWidth="2"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
        <circle cx="10" cy="230" r="5" fill="#187e53" />
        <circle cx="410" cy="30" r="5" fill="#0f2f45" />
        <path d="M398 22l14 8-16 6z" fill="#0f2f45" />
      </svg>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
            <img
              src={about.images.main}
              alt="Traveler paddling a canoe on a turquoise alpine lake (placeholder image)"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-4 -bottom-10 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8 sm:w-52 animate-float">
            <img
              src={about.images.secondary}
              alt="Road trip with a paper map (placeholder image)"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-6 -left-3 hidden rounded-2xl bg-leaf-600 px-5 py-4 text-white shadow-xl sm:block">
            <p className="font-display text-2xl font-semibold">New</p>
            <p className="text-xs font-bold tracking-widest uppercase">Just launched</p>
          </div>
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
