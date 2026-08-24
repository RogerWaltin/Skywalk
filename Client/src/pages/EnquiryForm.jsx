import EnquiryCard from "../components/EnquiryCard";
import SectionHeading from "../components/SectionHeading";

export default function EnquiryForm() {
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

        <div className="mt-14">
          <EnquiryCard />
        </div>
      </div>
    </section>
  );
}
