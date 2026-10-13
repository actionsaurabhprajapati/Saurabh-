export interface BusinessConfig {
  name: string;
  category: string;
  tagline: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  contact: {
    phone: string;
    phoneRaw: string;
    whatsapp: string;
    whatsappRaw: string;
    email: string; // placeholder if unconfirmed
    isEmailConfirmed: boolean;
  };
  links: {
    googleMapsListing: string;
    googleMapsDirections: string;
    googleReviewsUrl: string;
    instagramUrl: string;
    youtubeUrl: string;
  };
  reviewSnapshot: {
    rating: number;
    reviewCount: number;
    platform: string;
    observedDate: string;
    isSnapshot: boolean;
  };
  serviceAreas: string[];
  services: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    inclusions: string[];
    isConfirmed: boolean;
    image: string;
  }[];
  announcement: {
    enabled: boolean;
    message: string;
  };
  whatsappTemplate: (date?: string, venue?: string, service?: string) => string;
}

export const INITIAL_BUSINESS_CONFIG: BusinessConfig = {
  name: "THE WEDDING NAZARE PRODUCTIONS",
  category: "Wedding Photographer & Cinematic Films",
  tagline: "Your Wedding. Your Story. Beautifully Remembered.",
  address: {
    line1: "Shop No. 2, Radha Nagar",
    locality: "Sikandra",
    city: "Agra",
    state: "Uttar Pradesh",
    pincode: "282007",
    country: "India",
    fullFormatted: "Shop No. 2, Radha Nagar, Sikandra, Agra, Uttar Pradesh 282007, India",
  },
  contact: {
    phone: "+91 92868 28892",
    phoneRaw: "+919286828892",
    whatsapp: "+91 92868 28892",
    whatsappRaw: "919286828892",
    email: "[OWNER TO CONFIRM]",
    isEmailConfirmed: false,
  },
  links: {
    googleMapsListing: "https://maps.app.goo.gl/hsNGtnPxfVG7jnFB7",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Shop+No.+2,+Radha+Nagar,+Sikandra,+Agra,+Uttar+Pradesh+282007",
    googleReviewsUrl: "https://maps.app.goo.gl/hsNGtnPxfVG7jnFB7",
    instagramUrl: "https://instagram.com/[OWNER TO CONFIRM]",
    youtubeUrl: "https://youtube.com/[OWNER TO CONFIRM]",
  },
  reviewSnapshot: {
    rating: 4.5,
    reviewCount: 172,
    platform: "Google Maps",
    observedDate: "Public Research Snapshot",
    isSnapshot: true,
  },
  serviceAreas: [
    "Sikandra & Dayal Bagh",
    "Taj Ganj & Fatehabad Road",
    "Civil Lines & Sanjay Place",
    "Mathura & Vrindavan",
    "Firozabad & Bharatpur",
    "Destination across North India",
  ],
  services: [
    {
      id: "wedding-photography",
      title: "Candid & Traditional Wedding Photography",
      subtitle: "Heartfelt emotions, timeless portraits & ritual memories",
      description: "Comprehensive multi-photographer wedding day coverage capturing solemn traditions, spontaneous laughter, and editorial couple portraits with heirloom color science.",
      inclusions: [
        "Lead candid portrait photographer & traditional ceremony specialist",
        "High-resolution color-graded digital gallery",
        "Curated highlight preview album within 7 business days",
        "Print-ready heirloom quality masters",
      ],
      isConfirmed: true,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "cinematic-films",
      title: "Cinematic Wedding Teasers & Feature Films",
      subtitle: "Visual poetry with immersive audio and cinematic motion",
      description: "Art-directed 4K cinematography focusing on emotional wedding vows, family speeches, vibrant music rhythms, and the sacred beauty of Indian nuptials.",
      inclusions: [
        "4K drone cinematography (venue & scenic permit permitting)",
        "3-5 minute cinematic wedding highlight teaser",
        "Full ceremony documentation feature film",
        "Professional audio mastering and bespoke musical score",
      ],
      isConfirmed: true,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "pre-wedding",
      title: "Editorial Pre-Wedding Conceptual Shoots",
      subtitle: "Romantic narratives set against Mughal heritage & intimate landscapes",
      description: "Crafted portrait sessions in and around Agra, featuring historical backdrops, styling assistance, relaxed pacing, and cinematic golden hour storytelling.",
      inclusions: [
        "Concept moodboarding and outfit aesthetic consultation",
        "Up to 2 scenic locations in Agra region",
        "30+ retouched master signature portraits",
        "Pre-wedding teaser video for wedding reception entry",
      ],
      isConfirmed: true,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ceremonies-rituals",
      title: "Haldi, Mehendi & Sangeet Ceremonies",
      subtitle: "Vibrant yellow marigolds, henna artistry & celebratory dance",
      description: "Energetic and joyful coverage of pre-wedding ceremonies, preserving raw laughter, lively sangeet performances, and the warmth of family bonding.",
      inclusions: [
        "High-speed candid capture of dance and festivities",
        "Detailed macro photography of bridal henna and decor accents",
        "Same-week social-ready snippet delivery",
      ],
      isConfirmed: true,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  announcement: {
    enabled: true,
    message: "Now accepting wedding and pre-wedding bookings for 2026–2027 season in Agra & North India.",
  },
  whatsappTemplate: (date = "[DATE]", venue = "[VENUE]", service = "Wedding Photography") => {
    return `Hello THE WEDDING NAZARE PRODUCTIONS, I would like to enquire about wedding photography. My event date is ${date}, venue is ${venue}, and I am interested in ${service}. Please share availability and package details.`;
  },
};
