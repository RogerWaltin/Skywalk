// ============================================================================
// SKYWALK TOURS & TRAVELS — SITE CONTENT (DRAFT / PLACEHOLDER)
// ----------------------------------------------------------------------------
// ALL text, images and videos in this file are placeholders for the prototype.
// Replace copy with client-approved marketing content before launch.
// Do NOT treat descriptions, benefits or package details as real claims.
// ============================================================================

export const site = {
  name: "Skywalk Tours & Travels",
  shortName: "Skywalk",
  tagline: "Your Journey Begins Here...",
  phone: "+91 79940 15501",
  phoneHref: "tel:+917994015501",
  whatsappHref: "https://wa.me/917994015501",
  email: "skywalktravels92@gmail.com",
  emailHref: "mailto:skywalktravels92@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: "Flights · Tours · Visas · More",
  titleLine1: "Your Journey",
  titleAccent: "Begins Here...",
  subtitle:
    "Discover breathtaking destinations and let us plan every detail of a journey you will remember forever.",
  primaryCta: { label: "Explore Our Services", href: "#services" },
  secondaryCta: { label: "Plan Your Trip", href: "#contact" },
  highlights: [
    { icon: "Plane", label: "Flight Tickets" },
    { icon: "MapPinned", label: "Tour Packages" },
    { icon: "Stamp", label: "Visa Assistance" },
    { icon: "Ship", label: "Cruise Holidays" },
  ],
  video:
    "https://videos.pexels.com/video-files/2169880/2169880-hd_1280_720_30fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
};

// ---------------------------------------------------------------------------
// ABOUT  (PLACEHOLDER COPY — awaiting final company description from client)
// ---------------------------------------------------------------------------
export const about = {
  eyebrow: "About Skywalk",
  heading: "A New Travel Partner for Every Kind of Journey",
  paragraphs: [
    "Skywalk Tours & Travels is a newly launched travel agency built around one simple idea — planning a trip should feel as exciting as taking one. From tickets and visas to complete tour packages, we bring every part of your journey under one roof.",
    "[Placeholder paragraph] This is draft copy. The final company description, story and credentials will be added once approved by the client.",
  ],
  points: [
    "Complete travel services under one roof",
    "Personalised trip planning assistance",
    "Domestic & international journeys",
  ],
  images: {
    // TODO: replace stock photos with real photos of the agency/trips
    main: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
    secondary:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80",
    tertiary:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80",
  },
};

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = [
  {
    icon: "Plane",
    title: "Flight Tickets",
    text: "Placeholder description — domestic and international flight bookings on all major airlines.",
  },
  {
    icon: "TrainFront",
    title: "Train Tickets",
    text: "Placeholder description — confirmed train ticket assistance for routes across India.",
  },
  {
    icon: "Bus",
    title: "Bus Booking",
    text: "Placeholder description — comfortable bus bookings for city, state and interstate travel.",
  },
  {
    icon: "MapPinned",
    title: "Tour Packages",
    text: "Placeholder description — ready-made and customised tour packages across India and abroad.",
  },
  {
    icon: "Landmark",
    title: "Religious & Pilgrimage Tours",
    text: "Placeholder description — thoughtfully arranged pilgrimage journeys to sacred destinations.",
  },
  {
    icon: "Ship",
    title: "Cruise Holidays",
    text: "Placeholder description — relaxing cruise holidays on the sea, planned end to end.",
  },
  {
    icon: "Stamp",
    title: "Visa Services",
    text: "Placeholder description — guidance and documentation support for your visa applications.",
  },
  {
    icon: "BookUser",
    title: "Passport Services",
    text: "Placeholder description — new passport applications and renewals made simple.",
  },
  {
    icon: "ShieldCheck",
    title: "Travel Insurance",
    text: "Placeholder description — insurance options that keep you protected on every trip.",
  },
  {
    icon: "HeartPulse",
    title: "Medical Tourism",
    text: "Placeholder description — coordinating treatment travel with care and clarity.",
  },
  {
    icon: "CarFront",
    title: "Transportation",
    text: "Placeholder description — airport transfers, rentals and local transport arrangements.",
  },
];

// ---------------------------------------------------------------------------
// DESTINATIONS  (imagery only — no claim that these are operated destinations)
// ---------------------------------------------------------------------------
export const destinations = [
  {
    name: "Kerala Backwaters",
    tag: "India · God's Own Country",
    image: img("photo-1602216056096-3b40cc0c9944", 900),
    feature: true, // spans 2x2 on desktop
  },
  {
    name: "Maldives",
    tag: "International · Islands",
    image: img("photo-1573843981267-be1999ff37cd", 900),
  },
  {
    name: "Swiss Alps",
    tag: "International · Mountains",
    image: img("photo-1508672019048-805c876b67e2", 900),
  },
  {
    name: "Taj Mahal, Agra",
    tag: "India · Heritage",
    image: img("photo-1548013146-72479768bada", 900),
  },
  {
    name: "Dubai",
    tag: "International · City",
    image: img("photo-1512453979798-5ea266f8880c", 900),
  },
  {
    name: "Bali",
    tag: "International · Tropical",
    image: img("photo-1537996194471-e657df975ab4", 900),
    wide: true, // spans 2 columns on desktop
  },
  {
    name: "Santorini",
    tag: "International · Islands",
    image: img("photo-1613395877344-13d4a8e0d49e", 900),
  },
  {
    name: "Thai Islands",
    tag: "International · Beaches",
    image: img("photo-1528181304800-259b08848526", 900),
  },
];

export const destinationNote =
  "Imagery shown for illustration. Speak to us about where you would like to travel — we arrange journeys across India and around the world.";

// ---------------------------------------------------------------------------
// PACKAGES  (EXAMPLE STRUCTURE ONLY — no real prices or itineraries)
// ---------------------------------------------------------------------------
export const packages = [
  {
    category: "Domestic",
    title: "Kerala Serenity",
    duration: "5 Days / 4 Nights",
    image: img("photo-1593693397690-362cb9666fc2", 800),
    blurb: "Munnar hills, Alleppey backwaters and Fort Kochi — sample draft itinerary.",
  },
  {
    category: "Domestic",
    title: "Himalayan Escape",
    duration: "6 Days / 5 Nights",
    image: img("photo-1501785888041-af3ef285b470", 800),
    blurb: "Mountain air, valleys and viewpoints — sample draft itinerary.",
  },
  {
    category: "Domestic",
    title: "Golden Triangle",
    duration: "4 Days / 3 Nights",
    image: img("photo-1524492412937-b28074a5d7da", 800),
    blurb: "Delhi, Agra and Jaipur heritage circuit — sample draft itinerary.",
  },
  {
    category: "International",
    title: "Maldives Island Getaway",
    duration: "4 Days / 3 Nights",
    image: img("photo-1514282401047-d79a71a590e8", 800),
    blurb: "Overwater stays and turquoise lagoons — sample draft itinerary.",
  },
  {
    category: "International",
    title: "European Highlights",
    duration: "8 Days / 7 Nights",
    image: img("photo-1499856871958-5b9627545d1a", 800),
    blurb: "Iconic cities and scenic rail journeys — sample draft itinerary.",
  },
  {
    category: "International",
    title: "Dubai City Break",
    duration: "4 Days / 3 Nights",
    image: img("photo-1512453979798-5ea266f8880c", 800),
    blurb: "Skyline, desert safari and shopping — sample draft itinerary.",
  },
  {
    category: "Pilgrimage",
    title: "Temple Trails of South India",
    duration: "6 Days / 5 Nights",
    image: img("photo-1561361513-2d000a50f0dc", 800),
    blurb: "Sacred temples and traditions — sample draft itinerary.",
  },
  {
    category: "Pilgrimage",
    title: "Himalayan Char Dham",
    duration: "10 Days / 9 Nights",
    image: img("photo-1464822759023-fed622ff2c3b", 800),
    blurb: "A revered mountain yatra — sample draft itinerary.",
  },
  {
    category: "Pilgrimage",
    title: "Varanasi Spiritual Sojourn",
    duration: "3 Days / 2 Nights",
    image: img("photo-1561361513-2d000a50f0dc", 800),
    blurb: "Ghats, evening aarti and heritage walks — sample draft itinerary.",
  },
];

export const packageCategories = ["Domestic", "International", "Pilgrimage"];

// ---------------------------------------------------------------------------
// WHY CHOOSE US  (GENERIC DRAFT BENEFITS — replace with approved copy)
// ---------------------------------------------------------------------------
export const whyChooseUs = [
  {
    icon: "Users",
    title: "Personalised Travel Assistance",
    text: "Draft copy — a dedicated point of contact who listens first and plans around what you actually want.",
  },
  {
    icon: "CalendarCheck",
    title: "Convenient Booking",
    text: "Draft copy — tickets, stays and paperwork handled through one simple, transparent process.",
  },
  {
    icon: "Globe",
    title: "Complete Travel Services",
    text: "Draft copy — flights, visas, insurance and packages together, so nothing slips through the cracks.",
  },
  {
    icon: "Smile",
    title: "Hassle-Free Planning",
    text: "Draft copy — we take care of the details and follow-ups so you can simply look forward to the trip.",
  },
];

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export const gallery = [
  img("photo-1544551763-46a013bb70d5", 700),   // snorkelling over reef
  img("photo-1523906834658-6e24ef2386f9", 700), // Venice gondolas
  img("photo-1552465011-b4e21bf6e79a", 700),   // riverside temples
  img("photo-1469474968028-56623f02e42e", 700), // sunrise valley
  img("photo-1540541338287-41700207dee6", 700), // resort infinity pool
  img("photo-1548574505-5e239809ee19", 700),   // cruise ship at sea
  img("photo-1599640842225-85d111c60e6b", 700), // cruise deck
  img("photo-1569154941061-e231b4725ef1", 700), // wing above the clouds
];

// ---------------------------------------------------------------------------
// CTA BANNER VIDEO
// ---------------------------------------------------------------------------
export const ctaBanner = {
  video:
    "https://videos.pexels.com/video-files/3571264/3571264-hd_1280_720_30fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  heading: "Ready to Plan Your Next Journey?",
  text: "Tell us where you dream of going — we will handle the rest.",
};

// ---------------------------------------------------------------------------
// ENQUIRY FORM
// ---------------------------------------------------------------------------
export const enquiry = {
  serviceOptions: [
    "Flight Tickets",
    "Train Tickets",
    "Bus Booking",
    "Domestic Tour Package",
    "International Tour Package",
    "Religious / Pilgrimage Tour",
    "Cruise Holiday",
    "Visa Services",
    "Passport Services",
    "Travel Insurance",
    "Medical Tourism",
    "Transportation",
    "Other",
  ],
};
