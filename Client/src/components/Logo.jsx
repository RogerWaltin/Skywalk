import { site } from "../data/content";

// Official Skywalk logo asset — displayed statically (no rotation/tilt effects).
export default function Logo() {
  return (
    <a
      href="#home"
      aria-label={`${site.name} — home`}
      className="inline-flex items-center rounded-2xl bg-white px-3 py-1.5 shadow-md shadow-navy-900/15"
    >
      <img
        src="/Skywalk_Logo.png"
        alt={site.name}
        width={1654}
        height={525}
        className="h-9 w-auto sm:h-10"
      />
    </a>
  );
}
