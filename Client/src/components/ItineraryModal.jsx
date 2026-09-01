import { useCallback, useEffect, useState } from "react";
import { X, Clock, MapPin, CalendarDays } from "lucide-react";

const MODAL_DURATION_MS = 300;

export default function ItineraryModal({ open, onClose, pkg }) {
  const [isClosing, setIsClosing] = useState(false);
  const [wasOpen, setWasOpen] = useState(open);

  if (wasOpen !== open) {
    setWasOpen(open);
    if (open) setIsClosing(false);
  }

  const requestClose = useCallback(() => setIsClosing(true), []);

  useEffect(() => {
    if (!isClosing) return undefined;
    const timer = setTimeout(onClose, MODAL_DURATION_MS);
    return () => clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") requestClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, requestClose]);

  if (!open || !pkg) return null;

  const hasItinerary = pkg.itinerary && pkg.itinerary.length > 0;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 md:p-6"
      style={{ "--modal-duration": `${MODAL_DURATION_MS}ms` }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm ${
          isClosing ? "animate-fade-out" : "animate-fade-in"
        }`}
        onClick={requestClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${pkg.title} itinerary`}
        className={`relative w-full max-w-3xl ${
          isClosing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close itinerary"
          autoFocus
          className="cursor-pointer absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/95 text-navy-900 shadow-lg ring-1 ring-navy-950/10 backdrop-blur transition-colors hover:bg-slate-100"
        >
          <X className="size-5" />
        </button>

        <div className="max-h-[calc(100svh-2rem)] overflow-y-auto overscroll-contain rounded-3xl bg-navy-900 shadow-2xl shadow-navy-950/60 sm:rounded-4xl sm:max-h-[calc(100svh-3rem)]">
          {/* Header image */}
          <div className="relative h-48 overflow-hidden sm:h-56">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-900 via-navy-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-500/90 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase backdrop-blur-sm">
                <MapPin className="size-3.5" />
                {pkg.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {pkg.title}
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/70">
                <Clock className="size-4 text-leaf-400" />
                {pkg.duration}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {hasItinerary ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-leaf-400 uppercase">
                  <CalendarDays className="size-4" />
                  Day-by-Day Itinerary
                </div>

                <div className="relative space-y-0">
                  {pkg.itinerary.map((day, index) => (
                    <div key={day.day} className="relative flex gap-4 pb-6 last:pb-0">
                      {/* Vertical line segment (stops at circle edge) */}
                      {index < pkg.itinerary.length - 1 && (
                        <div className="absolute top-8 bottom-0 left-3.75 w-px bg-white/10" />
                      )}

                      {/* Day marker */}
                      <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-leaf-500/20 ring-2 ring-leaf-400/40">
                        <span className="text-xs font-bold text-leaf-300">{day.day}</span>
                      </div>

                      {/* Day content */}
                      <div className="flex-1 pt-0.5">
                        <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                          Day {day.day} — {day.title}
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {day.activities.map((activity, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm leading-relaxed text-white/60"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-leaf-400/60" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/40">
                  This itinerary is a general guide and may be subject to change based on weather,
                  availability and other factors. Contact us for a personalised plan.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="grid size-16 place-items-center rounded-full bg-white/5">
                  <CalendarDays className="size-7 text-white/20" />
                </div>
                <p className="mt-4 text-lg font-semibold text-white/70">
                  Detailed itinerary coming soon.
                </p>
                <p className="mt-1 text-sm text-white/40">
                  Contact us for more information about this package.
                </p>
                <button
                  type="button"
                  onClick={requestClose}
                  className="mt-6 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-leaf-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-leaf-500/25 transition-colors hover:bg-leaf-600"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
