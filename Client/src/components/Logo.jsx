import { Send } from "lucide-react";
import { site } from "../data/content";

// Placeholder brand mark — swap for the official Skywalk logo asset when available.
export default function Logo({ dark = false }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-leaf-500 to-navy-900 text-white shadow-md shadow-navy-900/20 transition-transform duration-300 group-hover:-rotate-12">
        <Send className="size-5 -translate-x-px translate-y-px" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-semibold tracking-tight ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {site.shortName}
          <span className="text-leaf-500">.</span>
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-bold tracking-[0.28em] uppercase ${
            dark ? "text-white/70" : "text-navy-500"
          }`}
        >
          Tours &amp; Travels
        </span>
      </span>
    </a>
  );
}
