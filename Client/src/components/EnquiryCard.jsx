import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { enquiry, site } from "../data/content";
import { submitEnquiry } from "../utils/enquiryApi";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-navy-900 placeholder:font-normal placeholder:text-slate-400 transition-all outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-500/15 sm:py-3";

function Field({ label, children }) {
  const parts = label.split(" *");
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold tracking-wide text-navy-800 uppercase sm:mb-1.5 sm:text-xs">
        {parts[0]}
        {parts.length > 1 && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

const turnstileOptions = (setToken, setError) => ({
  sitekey: TURNSTILE_SITE_KEY,
  theme: "light",
  size: "normal",
  callback: (token) => {
    setToken(token);
    setError(false);
  },
  "expired-callback": () => {
    setToken("");
    setError(true);
  },
  "error-callback": () => {
    setToken("");
    setError(true);
  },
});

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function EnquiryCard() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState(false);
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileError(false);
    const id = widgetIdRef.current;
    if (id != null && typeof window.turnstile !== "undefined") {
      window.turnstile.reset(id);
    }
  };

  const resetAll = () => {
    setForm(initialFormState);
    setStatus("idle");
    setErrorMessage("");
    resetTurnstile();
  };

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return undefined;

    const container = turnstileContainerRef.current;
    if (!container) return undefined;

    if (status === "sending" || status === "success") {
      if (container.querySelector(".cf-turnstile")) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
      return undefined;
    }

    const renderWidget = () => {
      const el = container.querySelector(".cf-turnstile");
      if (widgetIdRef.current == null && !el) {
        widgetIdRef.current = window.turnstile.render(
          container,
          turnstileOptions(setTurnstileToken, setTurnstileError),
        );
      }
    };

    if (typeof window.turnstile !== "undefined") {
      renderWidget();
      return undefined;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      if (
        widgetIdRef.current != null &&
        typeof window.turnstile !== "undefined" &&
        container.querySelector(".cf-turnstile")
      ) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    if (!TURNSTILE_SITE_KEY) {
      setErrorMessage("Security verification could not be loaded. Please try again later.");
      setStatus("error");
      return;
    }

    if (!turnstileToken) {
      setTurnstileError(true);
      setErrorMessage("Please complete the security check before sending.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      message: form.message.trim(),
      turnstileToken,
    };

    try {
      await submitEnquiry(payload);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message);
      setStatus("error");
      resetTurnstile();
    }
  };

  const isSending = status === "sending";

  return (
    <div className="grid overflow-hidden rounded-4xl shadow-2xl shadow-navy-900/10 lg:grid-cols-5">
      {/* Contact info panel */}
      <div className="relative flex flex-col bg-linear-to-b from-navy-900 to-navy-950 p-6 text-white sm:p-8 lg:col-span-2 lg:p-10">
        <h3 className="font-display text-xl font-semibold sm:text-2xl">Contact Skywalk</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-white/60 sm:mt-3">
          Reach out directly and our travel team will help you plan the perfect trip.
        </p>

        <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
          <li className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300 sm:size-10">
              <Phone className="size-4 sm:size-4.5" />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                Phone
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-x-1.5 border-l-2 border-white/10 pl-3">
                {site.phones.map((p, i) => (
                  <div key={p.href} className="flex items-center gap-x-1.5">
                    {i > 0 && <span className="text-sm text-white/40">{"\u00b7"}</span>}
                    <a
                      href={p.href}
                      className="text-sm font-semibold whitespace-nowrap transition-colors hover:text-leaf-300"
                    >
                      {p.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300 sm:size-10">
              <Mail className="size-4 sm:size-4.5" />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                Email
              </p>
              <a
                href={site.emailHref}
                className="mt-1 block text-sm font-semibold whitespace-nowrap hover:text-leaf-300"
              >
                {site.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300 sm:size-10">
              <Clock className="size-4 sm:size-4.5" />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                Office Hours
              </p>
              <p className="mt-1 font-semibold">9:30 AM to 6PM (Monday to Saturday)</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300 sm:size-10">
              <MapPin className="size-4 sm:size-4.5" />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                Office Address
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug">{site.address}</p>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-leaf-300 hover:text-leaf-200 transition-colors"
              >
                <MapPin className="size-3" />
                Get Directions
              </a>
            </div>
          </li>
        </ul>

        <div className="mt-auto hidden pt-10 lg:block">
          <p className="font-display text-lg text-white/80 italic">"{site.tagline}"</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="bg-white p-6 sm:p-8 lg:col-span-3 lg:p-10">
        {status === "success" ? (
          <div className="grid h-full min-h-80 place-items-center text-center">
            <div>
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-leaf-100 text-leaf-600">
                <MessageSquareText className="size-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
                Thank you! Your enquiry has been noted.
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                Our travel team will review your enquiry and get back to you shortly with a
                personalised response.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="mt-6 rounded-full border-2 border-navy-900 px-6 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
              >
                Fill Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2 sm:gap-5">
            <Field label="Full Name *">
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="e.g. Priya Nair"
                className={inputClasses}
                autoComplete="off"
              />
            </Field>
            <Field label="Phone *">
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="+91 8574320932"
                className={inputClasses}
                autoComplete="off"
                pattern="[+0-9 ]+"
              />
            </Field>
            <Field label="Email *">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="priya@example.com"
                className={inputClasses}
                autoComplete="off"
              />
            </Field>

            {/* NOTE: keeping this here just in case. */}
            {/* <Field label="Destination">
              <input type="text" name="destination" placeholder="Where would you like to go?" className={inputClasses} autoComplete="off" />
            </Field> */}
            {/* <Field label="Travel Date">
              <input type="date" name="travelDate" className={inputClasses} autoComplete="off" />
            </Field> */}
            {/* <Field label="Number of Travellers">
              <input
                type="number"
                name="travellers"
                min="1"
                placeholder="e.g. 4"
                className={inputClasses} autoComplete="off"
              />
            </Field> */}

              <Field label="Service Required *">
              <select
                required
                name="service"
                value={form.service}
                onChange={updateField}
                className={inputClasses}
                autoComplete="off"
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {enquiry.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Message">
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us more about your plans…"
                  className={`${inputClasses} resize-none`}
                />
              </Field>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:col-span-2">
              <p className="max-w-sm text-xs leading-relaxed text-slate-400">
                By submitting, you agree to be contacted about your travel enquiry.
              </p>
              <button
                type="submit"
                disabled={isSending}
                className="cursor-pointer group inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-leaf-600/30 transition-all hover:-translate-y-0.5 hover:bg-leaf-700 active:translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-leaf-600 sm:w-auto"
              >
                {isSending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending Enquiry…
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2">
              <div
                ref={turnstileContainerRef}
                className={turnstileError ? "opacity-90" : ""}
              />
              {status === "error" && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
