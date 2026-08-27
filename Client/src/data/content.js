// ============================================================================
// SKYWALK TOURS & TRAVELS — SITE CONTENT
// ----------------------------------------------------------------------------
// Tour packages and destinations reflect the agency's current offerings.
// ============================================================================

export const site = {
  name: "Skywalk Tours & Travels",
  shortName: "Skywalk",
  tagline: "Together, we journey ahead",
  phone: "+91 79940 15501",
  phoneCopy: "+91 7994015501",
  phoneHref: "tel:+917994015501",
  whatsappHref: "https://wa.me/917994015501",
  email: "skywalktravels92@gmail.com",
  emailHref: "mailto:skywalktravels92@gmail.com",
  instagram: "https://www.instagram.com/skywalk_travels",
  address: "Room No. 876, 3rd Floor, Penta Plaza, North Paravur, Kerala 683513",
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
  video: "https://www.pexels.com/download/video/8345629/",
  poster:
    "https://images.pexels.com/photos/37310545/pexels-photo-37310545.jpeg",
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

const px = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

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
  { src: img("photo-1621909321963-2276c9660298", 700), caption: "Fort Exploration" },
  { src: px("13691355", 700), caption: "Mountain Hiking" },
  { src: img("photo-1707893013488-51672ef83425", 700), caption: "Houseboat Cruise", position: "center 60%" },
  { src: img("photo-1672933354004-3cbd9874f099", 700), caption: "Island Hopping" },
  { src: px("7276634", 700), caption: "Sea Kayaking" },
  { src: "https://images.unsplash.com/flagged/photo-1550489518-40f49ba4bf20?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Desert Safari" },
  { src: px("16012748", 700), caption: "Sacred Journey" },
  { src: "https://images.unsplash.com/photo-1527705381526-469031509a9d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Coastal Pilgrimage" },
];

// ---------------------------------------------------------------------------
// CTA BANNER VIDEO
// ---------------------------------------------------------------------------
export const ctaBanner = {
  video:
    "https://videos.pexels.com/video-files/3571264/3571264-hd_1280_720_30fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
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
