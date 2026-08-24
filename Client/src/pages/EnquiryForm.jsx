import { useState } from "react";
import { Clock, Mail, MessageSquareText, Phone, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { enquiry, site } from "../data/content";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 placeholder:font-normal placeholder:text-slate-400 transition-all outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-500/15";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-navy-800 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  // Prototype only — no backend submission is wired up yet.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      {/* soft brand blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-leaf-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-navy-100/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Tell Us About Your Trip"
          text="Fill in the form and our travel team will get back to you — prototype form, not connected to a server yet."
        />

        <div className="mt-14 grid overflow-hidden rounded-4xl shadow-2xl shadow-navy-900/10 lg:grid-cols-5">
          {/* Contact info panel */}
          <div className="relative flex flex-col bg-linear-to-b from-navy-900 to-navy-950 p-8 text-white sm:p-10 lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold">Contact Skywalk</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Placeholder note — reach us directly and we will be happy to help you plan your
              journey.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                  <Phone className="size-4.5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm font-semibold whitespace-nowrap hover:text-leaf-300"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                  <Mail className="size-4.5" />
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
              <li className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                  <Clock className="size-4.5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                    Office Hours
                  </p>
                  <p className="mt-1 font-semibold">Placeholder — to be confirmed</p>
                </div>
              </li>
            </ul>

            <div className="mt-auto hidden pt-10 lg:block">
              <p className="font-display text-lg text-white/80 italic">“{site.tagline}”</p>
            </div>
          </div>

          {/* Form panel */}
          <div className="bg-white p-8 sm:p-10 lg:col-span-3">
            {sent ? (
              <div className="grid h-full min-h-80 place-items-center text-center">
                <div>
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-leaf-100 text-leaf-600">
                    <MessageSquareText className="size-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
                    Thank you! Your enquiry has been noted.
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                    Prototype mode — this form does not send data anywhere yet. Once live, enquiries
                    will reach the Skywalk team directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border-2 border-navy-900 px-6 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                  >
                    Fill Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *">
                  <input required type="text" name="name" placeholder="e.g. Priya Nair" className={inputClasses} autoComplete="off"/>
                </Field>
                <Field label="Phone *">
                  <input required type="tel" name="phone" placeholder="+91 00000 00000" className={inputClasses} autoComplete="off" />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" placeholder="you@example.com" className={inputClasses} autoComplete="off" />
                </Field>
                <Field label="Destination">
                  <input type="text" name="destination" placeholder="Where would you like to go?" className={inputClasses} autoComplete="off" />
                </Field>
                <Field label="Travel Date">
                  <input type="date" name="travelDate" className={inputClasses} autoComplete="off" />
                </Field>
                <Field label="Number of Travellers">
                  <input
                    type="number"
                    name="travellers"
                    min="1"
                    placeholder="e.g. 4"
                    className={inputClasses} autoComplete="off"
                  />
                </Field>
                <Field label="Service Required">
                  <select name="service" defaultValue="" className={inputClasses} autoComplete="off">
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
                      placeholder="Tell us more about your plans…"
                      className={`${inputClasses} resize-none`}
                    />
                  </Field>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
                  <p className="max-w-sm text-xs leading-relaxed text-slate-400">
                    By submitting, you agree to be contacted about your enquiry. (Draft notice — final
                    privacy wording pending.)
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-leaf-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-leaf-600/30 transition-all hover:-translate-y-0.5 hover:bg-leaf-700"
                  >
                    Send Enquiry
                    <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
