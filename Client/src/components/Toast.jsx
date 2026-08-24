import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { ToastContext } from "./ToastContext";

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: "", visible: false });
  const timerRef = useRef(null);

  const showToast = useCallback((message) => {
    clearTimeout(timerRef.current);
    setToast({ message, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 2000);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 transition-all duration-300 ease-out ${
          toast.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 rounded-full bg-navy-900/95 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-navy-950/25 backdrop-blur-sm">
          <Check className="size-4 shrink-0 text-leaf-300" />
          {toast.message}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
