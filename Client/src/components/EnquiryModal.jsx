import { useEffect } from "react";
import { X } from "lucide-react";
import EnquiryCard from "./EnquiryCard";

export default function EnquiryModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in bg-navy-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Skywalk enquiry form"
        className="relative w-full max-w-5xl animate-fade-up"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          autoFocus
          className="cursor-pointer absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/95 text-navy-900 shadow-lg ring-1 ring-navy-950/10 backdrop-blur transition-colors hover:bg-slate-100"
        >
          <X className="size-5" />
        </button>

        <div className="max-h-[calc(100svh-3rem)] overflow-y-auto overscroll-contain rounded-4xl shadow-2xl shadow-navy-950/60">
          <EnquiryCard />
        </div>
      </div>
    </div>
  );
}
