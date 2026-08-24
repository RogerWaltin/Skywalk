// ============================================================================
// SKYWALK TOURS & TRAVELS — SITE CONTENT
// ----------------------------------------------------------------------------
// Tour packages and destinations reflect the agency's current offerings.
// Remaining paragraphs marked as placeholders await client-approved copy.
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
  instagram: "https://www.instagram.com/skywalk_travels",
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
// IMAGES — verified Unsplash photos & Wikimedia Commons lead images
// ---------------------------------------------------------------------------
const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const wm = (file, w = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file,
  )}?width=${w}`;

// Verified destination imagery (subject-accurate)
const destImages = {
  andaman: img("photo-1723203606060-b0390c387a81", 1400), // Havelock beach, Andaman
  charminar: wm("Charminar_Hyderabad_1.jpg"),
  indiaGate: img("photo-1705861144478-40b4c1157a24", 1200), // India Gate, New Delhi
  munnar: wm("Munnar_Overview.jpg"), // Munnar tea plantations
  kumarakom: wm("Kumarkom.jpg"), // Kumarakom backwaters
  alleppeyHouseboat: img("photo-1593417033942-bcdf26b74700", 900),
  alleppeyBoat: img("photo-1620495824403-9a9682fb18e7", 900),
  periyar: wm("Periyar_National_Park.JPG"), // Thekkady
  petronas: img("photo-1787078845567-6f713c714343", 1000), // Kuala Lumpur
  thaiLongtail: img("photo-1528181304800-259b08848526", 900), // Thailand
  watArun: wm("Templo Wat Arun, Bangkok, Tailandia, 2013-08-22, DD 30.jpg"),
  railay: wm("Railay_Beach_5.jpg"), // Krabi
  halongBay: img("photo-1643029891412-92f9a81a8c16", 1000), // Vietnam
  elNido: wm("El_Nido_Bay_December_2018.jpg"), // Philippines
  dubai: img("photo-1512453979798-5ea266f8880c", 1000), // Burj Khalifa skyline
  masjidHaram: wm("Edited_Great_Mosque_of_Mecca1_5-2019-ccsa4.0_(cropped).jpg"), // Umrah
  thiruvalluvar: wm("Thiruvalluvar_Statue_at_Kanyakumari_02.jpg"), // Kanyakumari
  ajmerDargah: wm("Dargah_of_Sufi_saint_Moinuddin_Chishti_Ajmer_India_(5).JPG"),
  pambanBridge: wm("Pamban_Bridge_Train_Passing.jpg"), // Rameshwaram
  tirumala: wm("Tirumala_090615.jpg"), // Tirupati
  mookambika: wm("Kollur_Sri_Mookambika_Temple_(4465798056).jpg"), // Udupi region
};

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
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
// DESTINATIONS
// ---------------------------------------------------------------------------
export const destinations = [
  {
    name: "Andaman & Nicobar",
    tag: "India · Island Getaway",
    image: destImages.andaman,
    feature: true, // spans 2x2 on desktop
  },
  {
    name: "Hyderabad",
    tag: "India · City of Pearls",
    image: destImages.charminar,
  },
  {
    name: "Delhi",
    tag: "India · Heritage & Capital",
    image: destImages.indiaGate,
  },
  {
    name: "Munnar & Thekkady",
    tag: "India · Hills & Wildlife",
    image: destImages.munnar,
  },
  {
    name: "Kumarakom",
    tag: "India · Backwaters",
    image: destImages.kumarakom,
  },
  {
    name: "Alleppey",
    tag: "India · Houseboats",
    image: destImages.alleppeyHouseboat,
  },
  {
    name: "Kuala Lumpur",
    tag: "Malaysia · Skyline City",
    image: destImages.petronas,
  },
  {
    name: "Bangkok",
    tag: "Thailand · Temples & Markets",
    image: destImages.watArun,
  },
  {
    name: "Ha Long Bay",
    tag: "Vietnam · Limestone Karsts",
    image: destImages.halongBay,
  },
  {
    name: "El Nido",
    tag: "Philippines · Lagoons",
    image: destImages.elNido,
  },
  {
    name: "Dubai & Abu Dhabi",
    tag: "UAE · Futuristic Cities",
    image: destImages.dubai,
  },
  {
    name: "Phuket & Krabi",
    tag: "Thailand · Beaches & Karsts",
    image: destImages.railay,
    wide: true, // spans 2 columns on desktop
  },
];

export const destinationNote =
  "These are just a few of the places we cover — tell us where you dream of going and we will take you there.";

// ---------------------------------------------------------------------------
// TOUR PACKAGES
// ---------------------------------------------------------------------------
export const packages = [
  // --- Domestic ---
  {
    category: "Domestic",
    title: "Andaman Nicobar Islands — Samudram Package",
    duration: "6 Days / 5 Nights",
    image: destImages.andaman,
    blurb:
      "Cruise the islands from Port Blair — Cellular Jail history, coral beaches and Ross Island.",
  },
  {
    category: "Domestic",
    title: "Hyderabad Package",
    duration: "3 Days / 2 Nights",
    image: destImages.charminar,
    blurb:
      "Charminar, Golconda Fort, Salar Jung Museum and the city's famous biryani.",
  },
  {
    category: "Domestic",
    title: "Delhi Package",
    duration: "4 Days / 3 Nights",
    image: destImages.indiaGate,
    blurb:
      "India Gate, Red Fort, Qutub Minar and the bustling bazaars of Old Delhi.",
  },
  {
    category: "Domestic",
    title: "Munnar / Thekkady",
    duration: "4 Days / 3 Nights",
    image: destImages.munnar,
    blurb:
      "Tea-garden hills of Munnar plus Periyar Lake wildlife boating in Thekkady.",
  },
  {
    category: "Domestic",
    title: "Kumarakom / Alleppey",
    duration: "3 Days / 2 Nights",
    image: destImages.alleppeyBoat,
    blurb:
      "Houseboat nights on Vembanad Lake, palm-fringed canals and village life.",
  },
  // --- International ---
  {
    category: "International",
    title: "Malaysia",
    duration: "5 Days / 4 Nights",
    image: destImages.petronas,
    blurb:
      "Kuala Lumpur's Petronas Towers, Batu Caves and a Genting Highlands escape.",
  },
  {
    category: "International",
    title: "Thailand",
    duration: "5 Days / 4 Nights",
    image: destImages.thaiLongtail,
    blurb:
      "Bangkok's grand temples, floating markets and easy-going beach days.",
  },
  {
    category: "International",
    title: "Phuket / Krabi",
    duration: "5 Days / 4 Nights",
    image: destImages.railay,
    blurb:
      "Limestone karsts, island-hopping to Phi Phi and Railay's famous beaches.",
  },
  {
    category: "International",
    title: "Vietnam",
    duration: "6 Days / 5 Nights",
    image: destImages.halongBay,
    blurb:
      "Overnight Ha Long Bay cruise, Hanoi's old quarter and Ho Chi Minh City.",
  },
  {
    category: "International",
    title: "Philippines",
    duration: "6 Days / 5 Nights",
    image: destImages.elNido,
    blurb:
      "El Nido's lagoons, Puerto Princesa's underground river and island beaches.",
  },
  {
    category: "International",
    title: "Dubai / Abu Dhabi",
    duration: "5 Days / 4 Nights",
    image: destImages.dubai,
    blurb:
      "Burj Khalifa views, desert safari, Sheikh Zayed Grand Mosque and more.",
  },
  // --- Religious ---
  {
    category: "Religious",
    title: "Umrah Package",
    duration: "14 Days / 13 Nights",
    image: destImages.masjidHaram,
    blurb:
      "Makkah and Madinah ziyarats with complete visa, stay and transport assistance.",
  },
  {
    category: "Religious",
    title: "Nagur / Kanyakumari",
    duration: "4 Days / 3 Nights",
    image: destImages.thiruvalluvar,
    blurb:
      "Nagore Dargah blessings and the Vivekananda Rock Memorial at Kanyakumari.",
  },
  {
    category: "Religious",
    title: "Ajmer Package",
    duration: "4 Days / 3 Nights",
    image: destImages.ajmerDargah,
    blurb:
      "Ajmer Sharif Dargah darshan with a Pushkar Brahma temple visit.",
  },
  {
    category: "Religious",
    title: "Rameshwaram / Madurai",
    duration: "3 Days / 2 Nights",
    image: destImages.pambanBridge,
    blurb:
      "Ramanathaswamy Temple, the iconic Pamban Bridge and Meenakshi Amman Temple.",
  },
  {
    category: "Religious",
    title: "Tirupati",
    duration: "2 Days / 1 Night",
    image: destImages.tirumala,
    blurb:
      "Sri Venkateswara Swamy darshan at Tirumala, planned end to end for you.",
  },
  {
    category: "Religious",
    title: "Mookambika / Udupi",
    duration: "4 Days / 3 Nights",
    image: destImages.mookambika,
    blurb:
      "Kollur Mookambika darshan, Udupi Sri Krishna Matha and Malpe beach.",
  },
];

export const packageCategories = ["Domestic", "International", "Religious"];

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
