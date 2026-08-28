// ============================================================================
// SKYWALK TOURS & TRAVELS — SITE CONTENT
// ----------------------------------------------------------------------------
// Tour packages and destinations reflect the agency's current offerings.
// ============================================================================

export const site = {
  name: "Skywalk Tours & Travels",
  shortName: "Skywalk",
  tagline: "Your Journey Begins Here",
  phones: [
    { display: "+91 79940 15501", href: "tel:+917994015501" },
    { display: "+91 81369 55502", href: "tel:+918136955502" },
    { display: "+91 80753 44886", href: "tel:+918075344886" },
  ],
  phone: "+91 79940 15501",
  phoneCopy: "+91 7994015501",
  phoneHref: "tel:+917994015501",
  whatsappHref: "https://wa.me/917994015501",
  email: "skywalktravels92@gmail.com",
  emailHref: "mailto:skywalktravels92@gmail.com",
  instagram: "https://www.instagram.com/skywalk_travels",
  address: "Room No. 876, 3rd Floor, Penta Plaza, North Paravur, Ernakulam, Kerala 683513",
  mapsHref: "https://maps.app.goo.gl/K4trFHpKBTdUnVu4A",
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
    "From flight bookings to full tour packages, we handle every detail so you can focus on the journey ahead.",
  primaryCta: { label: "Explore Our Services", href: "#services" },
  secondaryCta: { label: "Plan Your Trip", href: "#contact" },
  highlights: [
    { icon: "Plane", label: "Flight Tickets" },
    { icon: "MapPinned", label: "Tour Packages" },
    { icon: "Stamp", label: "Visa Assistance" },
    { icon: "Ship", label: "Cruise Holidays" },
  ],
  video: "/videos/Hero.mp4",
  poster: "/images/pexels-37310545.webp",
};

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export const about = {
  eyebrow: "About Skywalk",
  heading: "A Fresh Approach to Travel Planning",
  paragraphs: [
    "Skywalk Tours & Travels was founded with a clear vision — travel planning should feel effortless, not overwhelming. We bring together flights, visas, tour packages and everything in between, so you have a single, reliable partner from the first conversation to your return home.",
    "Whether you are dreaming of a quiet backwater cruise, a spiritual pilgrimage, or an international adventure, we take the time to understand what matters to you and build a trip that fits. No cookie-cutter itineraries, no hidden complications — just thoughtful planning and genuine care for every journey we handle.",
  ],
  points: [
    "Flights, visas, insurance and tours — all under one roof",
    "Personalised itineraries tailored to your dates and interests",
    "Domestic and international destinations covered",
  ],
  images: {
    main: "/images/unsplash-1476514525535.webp",
    secondary: "/images/unsplash-1488646953014.webp",
    tertiary: "/images/unsplash-1436491865332.webp",
  },
};

// ---------------------------------------------------------------------------
// IMAGES — local WebP assets (800x600) served from /images
// ---------------------------------------------------------------------------
const destImages = {
  andaman: "/images/unsplash-1723203606060.webp", // Havelock beach, Andaman
  charminar: "/images/wiki-Charminar_Hyderabad_1.webp",
  indiaGate: "/images/unsplash-1705861144478.webp", // India Gate, New Delhi
  munnar: "/images/wiki-Munnar_Overview.webp", // Munnar tea plantations
  kumarakom: "/images/wiki-Kumarkom.webp", // Kumarakom backwaters
  alleppeyHouseboat: "/images/unsplash-1593417033942.webp",
  alleppeyBoat: "/images/unsplash-1620495824403.webp",
  periyar: "/images/wiki-Periyar_National_Park.webp", // Thekkady
  petronas: "/images/unsplash-1787078845567.webp", // Kuala Lumpur
  thaiLongtail: "/images/unsplash-1528181304800.webp", // Thailand
  watArun: "/images/wiki-Templo_Wat_Arun_Bangkok_Tailandia_2013-08-22_DD_30.webp",
  railay: "/images/wiki-Railay_Beach_5.webp", // Krabi
  halongBay: "/images/unsplash-1643029891412.webp", // Vietnam
  elNido: "/images/wiki-El_Nido_Bay_December_2018.webp", // Philippines
  dubai: "/images/unsplash-1512453979798.webp", // Burj Khalifa skyline
  masjidHaram: "/images/wiki-Edited_Great_Mosque_of_Mecca1_5-2019-ccsa4.0__cropped_.webp", // Umrah
  thiruvalluvar: "/images/wiki-Thiruvalluvar_Statue_at_Kanyakumari_02.webp", // Kanyakumari
  ajmerDargah: "/images/wiki-Dargah_of_Sufi_saint_Moinuddin_Chishti_Ajmer_India__5_.webp",
  pambanBridge: "/images/wiki-Pamban_Bridge_Train_Passing.webp", // Rameshwaram
  tirumala: "/images/wiki-Tirumala_090615.webp", // Tirupati
  mookambika: "/images/wiki-Kollur_Sri_Mookambika_Temple__4465798056_.webp", // Udupi region
};

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: "Plane",
    title: "Flight Tickets",
    text: "Domestic and international flight bookings across all major airlines, with fare options to suit every budget.",
  },
  {
    icon: "TrainFront",
    title: "Train Tickets",
    text: "Confirmed train ticket bookings for routes across India, including premium and sleeper classes.",
  },
  {
    icon: "Bus",
    title: "Bus Booking",
    text: "Comfortable bus bookings for city, interstate and long-distance travel with trusted operators.",
  },
  {
    icon: "MapPinned",
    title: "Tour Packages",
    text: "Ready-made and fully customised tour packages for destinations across India and around the world.",
  },
  {
    icon: "Landmark",
    title: "Religious & Pilgrimage Tours",
    text: "Thoughtfully planned pilgrimage journeys to sacred destinations, with travel and stay handled end to end.",
  },
  {
    icon: "Ship",
    title: "Cruise Holidays",
    text: "Relaxing cruise holidays on the sea, from booking to boarding — we plan every step of the voyage.",
  },
  {
    icon: "Stamp",
    title: "Visa Services",
    text: "Guidance and documentation support for tourist, business and pilgrimage visa applications worldwide.",
  },
  {
    icon: "BookUser",
    title: "Passport Services",
    text: "Assistance with new passport applications and renewals, making the process quick and straightforward.",
  },
  {
    icon: "ShieldCheck",
    title: "Travel Insurance",
    text: "Comprehensive travel insurance options to keep you protected on every domestic and international trip.",
  },
  {
    icon: "HeartPulse",
    title: "Medical Tourism",
    text: "Coordinating treatment travel with care — hospital bookings, accommodation and local transport arranged.",
  },
  {
    icon: "CarFront",
    title: "Transportation",
    text: "Airport transfers, car rentals and local transport arrangements for a smooth travel experience.",
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
// WHY CHOOSE US
// ---------------------------------------------------------------------------
export const whyChooseUs = [
  {
    icon: "Users",
    title: "Personalised Travel Assistance",
    text: "A dedicated travel coordinator who listens to your preferences and plans around what matters most to you.",
  },
  {
    icon: "CalendarCheck",
    title: "Seamless Booking",
    text: "Flights, stays, visas and paperwork handled through one simple, transparent process — no juggling multiple vendors.",
  },
  {
    icon: "Globe",
    title: "Complete Travel Services",
    text: "Everything from flight tickets to travel insurance under one roof, so every detail is covered and nothing slips through.",
  },
  {
    icon: "Smile",
    title: "Dedicated Support",
    text: "We stay with you from the first enquiry to your return home — handling follow-ups, changes and anything in between.",
  },
];

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export const gallery = [
  { src: "/images/unsplash-1621909321963.webp", caption: "Fort Exploration" },
  { src: "/images/pexels-13691355.webp", caption: "Mountain Hiking" },
  { src: "/images/unsplash-1707893013488.webp", caption: "Houseboat Cruise", position: "center 60%" },
  { src: "/images/unsplash-1672933354004.webp", caption: "Island Hopping" },
  { src: "/images/pexels-7276634.webp", caption: "Sea Kayaking" },
  { src: "/images/unsplash-1550489518.webp", caption: "Desert Safari" },
  { src: "/images/pexels-16012748.webp", caption: "Sacred Journey" },
  { src: "/images/unsplash-1527705381526.webp", caption: "Coastal Pilgrimage" },
];

// ---------------------------------------------------------------------------
// CTA BANNER VIDEO
// ---------------------------------------------------------------------------
export const ctaBanner = {
  video: "/videos/CTA.mp4",
  poster: "/images/unsplash-1507525428034.webp",
  heading: "Your Next Adventure Starts With a Conversation",
  text: "Tell us where you want to go — we will plan the rest, down to the last detail.",
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
