import { site } from "../data/content";

// Official Skywalk logo asset — displayed statically (no rotation/tilt effects).
// `boxed` keeps the white pill for dark surfaces where the artwork needs contrast.
export default function Logo({ boxed = false }) {
  return (
    <a
      href="#home"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center rounded-2xl ${
        boxed ? "bg-white px-3 py-1.5 shadow-md shadow-navy-900/15" : "px-1 py-1"
      }`}
    >
      <img
        src="/Skywalk_Logo.png"
        alt={site.name}
        width={1654}
        height={525}
        draggable={false}
        className="h-9 w-auto sm:h-10"
      />
    </a>
  );
}
