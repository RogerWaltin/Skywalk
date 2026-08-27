import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import EnquiryCard from "./EnquiryCard";

const MODAL_DURATION_MS = 300;

export default function EnquiryModal({ open, onClose }) {
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

  if (!open) return null;

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
        aria-label="Skywalk enquiry form"
        className={`relative w-full max-w-5xl ${
          isClosing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close enquiry form"
          autoFocus
          className="cursor-pointer absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/95 text-navy-900 shadow-lg ring-1 ring-navy-950/10 backdrop-blur transition-colors hover:bg-slate-100"
        >
          <X className="size-5" />
        </button>

        <div className="max-h-[calc(100svh-2rem)] overflow-y-auto overscroll-contain rounded-3xl shadow-2xl shadow-navy-950/60 sm:rounded-4xl sm:max-h-[calc(100svh-3rem)]">
          <EnquiryCard />
        </div>
      </div>
    </div>
  );
}
