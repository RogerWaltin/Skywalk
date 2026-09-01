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
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        activities: [
          "Airport pickup and hotel check-in",
          "Visit Cellular Jail",
          "Evening at Corbyn's Cove Beach",
        ],
      },
      {
        day: 2,
        title: "Ross Island & North Bay",
        activities: [
          "Boat trip to Ross Island",
          "Visit North Bay Island",
          "Snorkeling / water activities (subject to availability)",
          "Return to Port Blair",
        ],
      },
      {
        day: 3,
        title: "Port Blair → Havelock",
        activities: [
          "Check-out",
          "Take a ferry to Havelock Island",
          "Hotel check-in",
          "Relax at the beach",
          "Sunset at Radhanagar Beach",
          "Overnight stay in Havelock",
        ],
      },
      {
        day: 4,
        title: "Havelock Island",
        activities: [
          "Explore Havelock Island",
          "Optional snorkeling / water activities",
          "Free time to relax",
        ],
      },
      {
        day: 5,
        title: "Havelock → Port Blair",
        activities: [
          "Check-out",
          "Take a ferry back to Port Blair",
          "Free time for shopping / local exploration",
          "Overnight stay in Port Blair",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Check-out",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
  },
  {
    category: "Domestic",
    title: "Hyderabad Package",
    duration: "3 Days / 2 Nights",
    image: destImages.charminar,
    blurb:
      "Charminar, Golconda Fort, Salar Jung Museum and the city's famous biryani.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Old Hyderabad",
        activities: [
          "Airport / railway station pickup",
          "Hotel check-in",
          "Visit Charminar",
          "Explore the surrounding Old City and local markets",
          "Visit Mecca Masjid",
          "Evening free for local shopping and exploration",
        ],
      },
      {
        day: 2,
        title: "Forts, Palaces & Culture",
        activities: [
          "Visit Golconda Fort",
          "Explore the historic fort and surrounding area",
          "Visit Qutb Shahi Tombs",
          "Visit Salar Jung Museum",
          "Evening free for shopping or leisure",
        ],
      },
      {
        day: 3,
        title: "Local Exploration & Departure",
        activities: [
          "Visit Hussain Sagar Lake and Buddha Statue",
          "Free time for shopping and local exploration",
          "Check-out from hotel",
          "Transfer to airport / railway station",
          "Departure",
        ],
      },
    ],
  },
  {
    category: "Domestic",
    title: "Delhi Package",
    duration: "4 Days / 3 Nights",
    image: destImages.indiaGate,
    blurb:
      "India Gate, Red Fort, Qutub Minar and the bustling bazaars of Old Delhi.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Old Delhi",
        activities: [
          "Airport / railway station pickup",
          "Hotel check-in",
          "Visit India Gate",
          "Visit Rashtrapati Bhavan and Parliament area",
          "Evening visit to Connaught Place",
        ],
      },
      {
        day: 2,
        title: "Old Delhi & Historic Sites",
        activities: [
          "Visit Red Fort",
          "Visit Jama Masjid",
          "Explore the streets and markets of Old Delhi",
          "Enjoy local Delhi cuisine",
          "Visit Raj Ghat",
          "Evening free for shopping and leisure",
        ],
      },
      {
        day: 3,
        title: "Culture & Heritage",
        activities: [
          "Visit Qutub Minar",
          "Visit Humayun's Tomb",
          "Visit Lotus Temple",
          "Explore local markets",
          "Evening free for shopping or leisure",
        ],
      },
      {
        day: 4,
        title: "Local Exploration & Departure",
        activities: [
          "Free time for shopping and local exploration",
          "Check-out from hotel",
          "Transfer to airport / railway station",
          "Departure",
        ],
      },
    ],
  },
  {
    category: "Domestic",
    title: "Munnar / Thekkady",
    duration: "4 Days / 3 Nights",
    image: destImages.munnar,
    blurb:
      "Tea-garden hills of Munnar plus Periyar Lake wildlife boating in Thekkady.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Munnar",
        activities: [
          "Pickup from airport / railway station",
          "Proceed to Munnar",
          "Scenic drive through the Western Ghats",
          "Visit tea gardens and viewpoints along the way",
          "Hotel check-in",
          "Evening free to relax and explore Munnar",
        ],
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        activities: [
          "Visit Mattupetty Dam",
          "Explore Echo Point",
          "Explore the tea plantations",
          "Visit Tea Museum",
          "Free time for shopping and local exploration",
        ],
      },
      {
        day: 3,
        title: "Munnar → Thekkady",
        activities: [
          "Check-out from the hotel",
          "Proceed to Thekkady",
          "Scenic drive through the hills and forests",
          "Hotel check-in",
          "Visit a local spice plantation",
          "Optional boating experience on Periyar Lake",
          "Evening free for leisure",
          "Overnight stay in Thekkady",
        ],
      },
      {
        day: 4,
        title: "Thekkady & Departure",
        activities: [
          "Morning nature / wildlife experience",
          "Free time for local shopping",
          "Check-out from the hotel",
          "Transfer to airport / railway station",
          "Departure",
        ],
      },
    ],
  },
  {
    category: "Domestic",
    title: "Kumarakom / Alleppey",
    duration: "3 Days / 2 Nights",
    image: destImages.alleppeyBoat,
    blurb:
      "Houseboat nights on Vembanad Lake, palm-fringed canals and village life.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kumarakom",
        activities: [
          "Pickup from airport / railway station",
          "Proceed to Kumarakom",
          "Hotel / resort check-in",
          "Explore the scenic backwaters",
          "Visit Kumarakom Bird Sanctuary",
          "Evening free to relax by the backwaters",
        ],
      },
      {
        day: 2,
        title: "Kumarakom → Alleppey",
        activities: [
          "Check-out from the hotel",
          "Proceed to Alleppey",
          "Check-in to houseboat",
          "Cruise through the backwaters",
          "Experience village life, canals and paddy fields",
          "Evening sunset cruise",
          "Overnight stay on the houseboat",
        ],
      },
      {
        day: 3,
        title: "Backwaters & Departure",
        activities: [
          "Morning backwater cruise",
          "Check-out from the houseboat",
          "Free time for local exploration / shopping",
          "Transfer to airport / railway station",
          "Departure",
        ],
      },
    ],
  },
  // --- International ---
  {
    category: "International",
    title: "Malaysia",
    duration: "5 Days / 4 Nights",
    image: destImages.petronas,
    blurb:
      "Kuala Lumpur's Petronas Towers, Batu Caves and a Genting Highlands escape.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur",
        activities: [
          "Arrive in Kuala Lumpur and meet the tour representative",
          "Check in to the hotel and relax after your journey",
          "Evening at leisure to explore the city or rest",
        ],
      },
      {
        day: 2,
        title: "Kuala Lumpur City Tour",
        activities: [
          "Explore the highlights of Kuala Lumpur",
          "Visit the Petronas Twin Towers",
          "See Merdeka Square and other notable city landmarks",
          "Explore Chinatown and Central Market",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Batu Caves & Genting Highlands",
        activities: [
          "Visit the famous Batu Caves",
          "Continue to Genting Highlands and enjoy the scenic mountain surroundings",
          "Explore the main attractions and entertainment areas",
          "Return to Kuala Lumpur in the evening",
        ],
      },
      {
        day: 4,
        title: "Kuala Lumpur Leisure & Shopping",
        activities: [
          "Enjoy a relaxed day exploring Kuala Lumpur at your own pace",
          "Visit popular shopping areas and local attractions",
          "Free time for shopping, sightseeing, or exploring the city",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before your departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  {
    category: "International",
    title: "Thailand",
    duration: "5 Days / 4 Nights",
    image: destImages.thaiLongtail,
    blurb:
      "Bangkok's grand temples, floating markets and easy-going beach days.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        activities: [
          "Arrive in Bangkok and meet the tour representative",
          "Check in to the hotel and relax after your journey",
          "Evening at leisure to explore the city",
        ],
      },
      {
        day: 2,
        title: "Bangkok City Tour",
        activities: [
          "Explore the highlights of Bangkok",
          "Visit some of the city's famous temples and landmarks",
          "Explore the Grand Palace and surrounding areas",
          "Visit a local market or riverside area",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Floating Market & City Exploration",
        activities: [
          "Visit one of Bangkok's famous floating markets",
          "Experience the local markets and surrounding areas",
          "Return to the city and enjoy some free time",
          "Explore Bangkok's shopping and entertainment areas",
        ],
      },
      {
        day: 4,
        title: "Bangkok to Pattaya",
        activities: [
          "Check out and travel to Pattaya",
          "Enjoy the scenic journey along the coast",
          "Explore Pattaya and its popular attractions",
          "Relax by the beach and enjoy the evening at leisure",
          "Overnight stay in Pattaya",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  {
    category: "International",
    title: "Phuket / Krabi",
    duration: "5 Days / 4 Nights",
    image: destImages.railay,
    blurb:
      "Limestone karsts, island-hopping to Phi Phi and Railay's famous beaches.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket",
        activities: [
          "Arrive in Phuket and meet the tour representative",
          "Check in to the hotel and relax",
          "Spend the evening exploring the nearby area or enjoying the beach",
        ],
      },
      {
        day: 2,
        title: "Phuket Sightseeing",
        activities: [
          "Explore the highlights of Phuket",
          "Visit popular viewpoints and local landmarks",
          "Explore the Old Town and surrounding areas",
          "Enjoy some free time by the beach",
        ],
      },
      {
        day: 3,
        title: "Phi Phi Island Tour",
        activities: [
          "Enjoy a day trip to the famous Phi Phi Islands",
          "Explore the islands, beaches, and surrounding waters",
          "Stop at scenic locations for swimming and sightseeing",
          "Return to Phuket in the evening",
        ],
      },
      {
        day: 4,
        title: "Phuket to Krabi",
        activities: [
          "Check out and travel to Krabi",
          "Enjoy the scenic journey along the coast",
          "Explore Krabi's famous limestone landscapes",
          "Visit Railay Beach and enjoy the surrounding scenery",
          "Evening at leisure",
          "Overnight stay in Krabi",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  {
    category: "International",
    title: "Vietnam",
    duration: "6 Days / 5 Nights",
    image: destImages.halongBay,
    blurb:
      "Overnight Ha Long Bay cruise, Hanoi's old quarter and Ho Chi Minh City.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        activities: [
          "Arrive in Hanoi and meet the tour representative",
          "Check in to the hotel and relax",
          "Evening at leisure to explore the city",
        ],
      },
      {
        day: 2,
        title: "Hanoi City Tour",
        activities: [
          "Explore the highlights of Hanoi",
          "Visit Hoan Kiem Lake and the Old Quarter",
          "Explore important cultural and historical landmarks",
          "Enjoy some free time to experience the city",
        ],
      },
      {
        day: 3,
        title: "Hanoi to Ha Long Bay",
        activities: [
          "Travel to Ha Long Bay",
          "Board the cruise and settle in",
          "Enjoy the scenic limestone islands and surrounding waters",
          "Relax and enjoy the cruise experience",
          "Overnight stay on the Ha Long Bay cruise",
        ],
      },
      {
        day: 4,
        title: "Ha Long Bay to Hanoi",
        activities: [
          "Continue exploring Ha Long Bay in the morning",
          "Disembark from the cruise and return to Hanoi",
          "Evening at leisure",
        ],
      },
      {
        day: 5,
        title: "Hanoi to Ho Chi Minh City",
        activities: [
          "Check out and continue to Ho Chi Minh City",
          "Explore some of the city's main landmarks",
          "Visit local markets and surrounding areas",
          "Evening at leisure",
          "Overnight stay in Ho Chi Minh City",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  {
    category: "International",
    title: "Philippines",
    duration: "6 Days / 5 Nights",
    image: destImages.elNido,
    blurb:
      "El Nido's lagoons, Puerto Princesa's underground river and island beaches.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Puerto Princesa",
        activities: [
          "Arrive in Puerto Princesa and meet the tour representative",
          "Check in to the hotel and relax",
          "Explore the surrounding area at leisure",
        ],
      },
      {
        day: 2,
        title: "Underground River",
        activities: [
          "Visit the Puerto Princesa Underground River",
          "Explore the surrounding natural landscapes",
          "Return to Puerto Princesa",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Puerto Princesa to El Nido",
        activities: [
          "Check out and travel to El Nido",
          "Enjoy the scenic journey through Palawan",
          "Check in to the hotel and relax",
          "Evening free to explore El Nido",
          "Overnight stay in El Nido",
        ],
      },
      {
        day: 4,
        title: "El Nido Island Tour",
        activities: [
          "Enjoy a day exploring the famous islands and lagoons of El Nido",
          "Visit scenic lagoons, beaches, and surrounding islands",
          "Enjoy time for swimming and sightseeing",
          "Return to El Nido in the evening",
        ],
      },
      {
        day: 5,
        title: "El Nido Leisure",
        activities: [
          "Enjoy a relaxed day in El Nido",
          "Explore the beaches and nearby areas",
          "Free time for optional activities or island experiences",
          "Evening at leisure",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  {
    category: "International",
    title: "Dubai / Abu Dhabi",
    duration: "5 Days / 4 Nights",
    image: destImages.dubai,
    blurb:
      "Burj Khalifa views, desert safari, Sheikh Zayed Grand Mosque and more.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        activities: [
          "Arrive in Dubai and meet the tour representative",
          "Check in to the hotel and relax",
          "Evening at leisure to explore the surrounding area",
        ],
      },
      {
        day: 2,
        title: "Dubai City Tour",
        activities: [
          "Explore the highlights of Dubai",
          "Visit the Burj Khalifa and enjoy views of the city",
          "Explore Dubai Marina and Jumeirah",
          "Visit the Dubai Mall and surrounding attractions",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Desert Safari",
        activities: [
          "Enjoy a relaxed morning in Dubai",
          "Spend some time exploring the city or shopping",
          "Experience an evening desert safari",
          "Enjoy the desert landscapes and traditional activities",
          "Return to the hotel",
        ],
      },
      {
        day: 4,
        title: "Abu Dhabi City Tour",
        activities: [
          "Travel to Abu Dhabi",
          "Visit the Sheikh Zayed Grand Mosque",
          "Explore the city's major landmarks and waterfront",
          "Enjoy some free time to explore Abu Dhabi",
          "Return to Dubai",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Check out from the hotel",
          "Enjoy some free time before departure",
          "Head to the airport for your onward journey",
          "Tour concludes",
        ],
      },
    ],
  },
  // --- Religious ---
  {
    category: "Religious",
    title: "Umrah Package",
    duration: "14 Days / 13 Nights",
    image: destImages.masjidHaram,
    blurb:
      "Makkah and Madinah ziyarats with complete visa, stay and transport assistance.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Saudi Arabia & Makkah",
        activities: [
          "Arrival at the airport",
          "Meet and assistance",
          "Proceed to Makkah",
          "Hotel check-in",
          "Settle in and rest",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 2,
        title: "Umrah",
        activities: [
          "Umrah arrangements and guidance",
          "Perform Umrah",
          "Return to the hotel",
          "Rest and personal time",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 3,
        title: "Makkah",
        activities: [
          "Free time in Makkah",
          "Visit the surrounding areas at leisure",
          "Opportunity for personal religious activities",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 4,
        title: "Makkah Ziyarat",
        activities: [
          "Visit important Islamic sites around Makkah",
          "Visit locations associated with the history of Umrah and the Seerah",
          "Return to the hotel",
          "Free time",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 5,
        title: "Makkah",
        activities: [
          "Free day in Makkah",
          "Personal time for worship and relaxation",
          "Explore the area around Masjid al-Haram at leisure",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 6,
        title: "Makkah",
        activities: [
          "Free time for personal activities",
          "Optional local visits depending on the package arrangements",
          "Rest and relaxation",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 7,
        title: "Makkah",
        activities: [
          "Final day in Makkah",
          "Free time for personal activities and religious observance",
          "Prepare for the journey to Madinah",
          "Overnight stay in Makkah",
        ],
      },
      {
        day: 8,
        title: "Makkah to Madinah",
        activities: [
          "Check-out from the hotel in Makkah",
          "Travel to Madinah",
          "Hotel check-in",
          "Settle in and explore the surrounding area",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 9,
        title: "Madinah",
        activities: [
          "Visit Masjid an-Nabawi",
          "Explore the surrounding area",
          "Free time for personal activities",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 10,
        title: "Madinah Ziyarat",
        activities: [
          "Visit important Islamic sites around Madinah",
          "Visit the Uhud area and other significant locations",
          "Return to the hotel",
          "Free time",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 11,
        title: "Madinah",
        activities: [
          "Visit important historical and religious sites in Madinah",
          "Free time to explore the city",
          "Return to the hotel",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 12,
        title: "Madinah",
        activities: [
          "Free day in Madinah",
          "Personal time for worship, reflection and relaxation",
          "Explore the local area at leisure",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 13,
        title: "Madinah",
        activities: [
          "Final day in Madinah",
          "Free time for personal activities",
          "Prepare for departure",
          "Overnight stay in Madinah",
        ],
      },
      {
        day: 14,
        title: "Departure",
        activities: [
          "Check-out from the hotel",
          "Transfer to the airport",
          "Departure for the return journey",
          "Tour ends",
        ],
      },
    ],
  },
  {
    category: "Religious",
    title: "Nagur / Kanyakumari",
    duration: "4 Days / 3 Nights",
    image: destImages.thiruvalluvar,
    blurb:
      "Nagore Dargah blessings and the Vivekananda Rock Memorial at Kanyakumari.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Nagur",
        activities: [
          "Arrival and pickup",
          "Proceed to Nagur",
          "Visit Nagore Dargah",
          "Explore the surrounding area",
          "Check into the hotel",
          "Evening free to relax",
        ],
      },
      {
        day: 2,
        title: "Nagur & Local Sightseeing",
        activities: [
          "Visit important local landmarks and places of interest",
          "Explore Nagur and nearby coastal areas",
          "Free time for personal visits and local exploration",
          "Return to the hotel",
        ],
      },
      {
        day: 3,
        title: "Nagur to Kanyakumari",
        activities: [
          "Check out and proceed to Kanyakumari",
          "Scenic journey towards the southern coast",
          "Visit Vivekananda Rock Memorial",
          "Visit Thiruvalluvar Statue viewpoint",
          "Explore Kanyakumari beach and surrounding areas",
          "Check into the hotel",
          "Evening free to relax and explore",
          "Overnight stay in Kanyakumari",
        ],
      },
      {
        day: 4,
        title: "Kanyakumari & Departure",
        activities: [
          "Morning sightseeing around Kanyakumari",
          "Visit important local landmarks",
          "Check out",
          "Proceed for departure",
          "Tour ends",
        ],
      },
    ],
  },
  {
    category: "Religious",
    title: "Ajmer Package",
    duration: "4 Days / 3 Nights",
    image: destImages.ajmerDargah,
    blurb:
      "Ajmer Sharif Dargah darshan with a Pushkar Brahma temple visit.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Ajmer",
        activities: [
          "Arrival and pickup",
          "Proceed to Ajmer",
          "Visit Ajmer Sharif Dargah",
          "Explore the surrounding area",
          "Check into the hotel",
          "Evening free to relax",
        ],
      },
      {
        day: 2,
        title: "Ajmer Sightseeing",
        activities: [
          "Visit important religious and historical landmarks",
          "Explore the old city and local surroundings",
          "Visit Ana Sagar Lake",
          "Free time for local exploration",
          "Return to the hotel",
        ],
      },
      {
        day: 3,
        title: "Pushkar Excursion",
        activities: [
          "Proceed to Pushkar",
          "Visit Brahma Temple",
          "Explore Pushkar Lake and the surrounding ghats",
          "Visit the local market and nearby landmarks",
          "Return to Ajmer",
          "Evening free to relax",
        ],
      },
      {
        day: 4,
        title: "Ajmer & Departure",
        activities: [
          "Morning free for personal visits or local exploration",
          "Check out",
          "Proceed for departure",
          "Tour ends",
        ],
      },
    ],
  },
  {
    category: "Religious",
    title: "Rameshwaram / Madurai",
    duration: "3 Days / 2 Nights",
    image: destImages.pambanBridge,
    blurb:
      "Ramanathaswamy Temple, the iconic Pamban Bridge and Meenakshi Amman Temple.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Rameshwaram",
        activities: [
          "Arrival and pickup",
          "Proceed to Rameshwaram",
          "Visit Ramanathaswamy Temple",
          "Visit Agni Theertham and nearby sacred sites",
          "Check into the hotel",
          "Evening free to relax or explore the surrounding area",
        ],
      },
      {
        day: 2,
        title: "Rameshwaram Sightseeing & Madurai",
        activities: [
          "Morning visit to the remaining important sights around Rameshwaram",
          "Visit Pamban Bridge and enjoy the coastal views",
          "Proceed to Madurai",
          "Visit Meenakshi Amman Temple",
          "Explore the local area and nearby markets",
          "Check into the hotel",
          "Evening free to relax",
          "Overnight stay in Madurai",
        ],
      },
      {
        day: 3,
        title: "Madurai & Departure",
        activities: [
          "Morning sightseeing around Madurai",
          "Visit Thirumalai Nayakkar Palace and other nearby landmarks",
          "Free time for local shopping or exploring",
          "Proceed for departure",
          "Tour ends",
        ],
      },
    ],
  },
  {
    category: "Religious",
    title: "Tirupati",
    duration: "2 Days / 1 Night",
    image: destImages.tirumala,
    blurb:
      "Sri Venkateswara Swamy darshan at Tirumala, planned end to end for you.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Tirupati",
        activities: [
          "Arrival and pickup",
          "Proceed to Tirupati",
          "Check into the hotel",
          "Visit nearby temples and important local attractions",
          "Spend the evening exploring the surrounding area or relaxing at the hotel",
        ],
      },
      {
        day: 2,
        title: "Tirumala & Departure",
        activities: [
          "Proceed to Tirumala for Sri Venkateswara Swamy darshan",
          "Visit the important temple areas and nearby viewpoints",
          "Return to Tirupati",
          "Free time for local shopping or relaxation",
          "Proceed for departure",
          "Tour ends",
        ],
      },
    ],
  },
  {
    category: "Religious",
    title: "Mookambika / Udupi",
    duration: "4 Days / 3 Nights",
    image: destImages.mookambika,
    blurb:
      "Kollur Mookambika darshan, Udupi Sri Krishna Matha and Malpe beach.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Mookambika",
        activities: [
          "Arrival and pickup",
          "Proceed to Kollur Mookambika",
          "Check into the hotel",
          "Visit Kollur Mookambika Temple",
          "Spend the evening exploring the temple surroundings or relaxing",
        ],
      },
      {
        day: 2,
        title: "Mookambika & Coastal Journey",
        activities: [
          "Morning temple visit or free time for darshan",
          "Proceed towards Udupi",
          "Enjoy the scenic journey along the coastal route",
          "Visit nearby attractions along the way",
          "Check into the hotel in Udupi",
          "Evening free to relax and explore the local area",
        ],
      },
      {
        day: 3,
        title: "Udupi Sightseeing",
        activities: [
          "Visit Sri Krishna Matha and important nearby temples",
          "Explore Udupi town and its local attractions",
          "Visit Malpe Beach",
          "Free time to enjoy the beach and surrounding area",
          "Return to the hotel",
        ],
      },
      {
        day: 4,
        title: "Udupi & Departure",
        activities: [
          "Morning free for relaxation or local exploration",
          "Visit any remaining nearby attractions",
          "Proceed for departure",
          "Tour ends",
        ],
      },
    ],
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
