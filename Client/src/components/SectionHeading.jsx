export default function SectionHeading({ eyebrow, title, text, align = "center", dark = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-leaf-500">{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-slate-500"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
