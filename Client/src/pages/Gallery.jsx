import { Camera } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { gallery } from "../data/content";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Travel Experiences"
          title="Moments Waiting to Be Collected"
          text="A glimpse into the journeys we plan — real trip photos coming soon."
        />

        {/* Masonry-style collage */}
        <div className="mt-14 columns-2 gap-4 space-y-4 sm:gap-5 sm:space-y-5 lg:columns-4">
          {gallery.map((src, index) => (
            <figure
              key={src}
              className={`group relative break-inside-avoid overflow-hidden rounded-3xl ${
                index % 3 === 0 ? "aspect-3/4" : index % 3 === 1 ? "aspect-square" : "aspect-4/3"
              }`}
            >
              <img
                src={src}
                alt={`Travel experience ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/25" />
              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-center pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-navy-900 backdrop-blur-sm">
                  <Camera className="size-3.5" />
                  Skywalk Travels
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
