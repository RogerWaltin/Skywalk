import { useEffect, useState } from "react";
import { Plane } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-5 z-50 grid size-12 place-items-center rounded-full bg-leaf-600 text-white shadow-xl shadow-navy-900/30 ring-2 ring-white transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Plane className="size-5 -rotate-45" strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}
