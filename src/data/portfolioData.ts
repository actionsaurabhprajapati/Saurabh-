export interface PortfolioItem {
  id: string;
  title: string;
  category: "all" | "royal" | "candid" | "prewedding" | "rituals";
  categoryLabel: string;
  location: string;
  image: string;
  aspectRatio: "aspect-[16/9]" | "aspect-[3/4]" | "aspect-[4/3]" | "aspect-square";
  gridSpan: string; // Tailwind grid span for desktop bento layout
  altText: string;
  storySnippet: string;
  cameraNotes: string;
}

export const PORTFOLIO_STORIES: PortfolioItem[] = [
  {
    id: "story-1",
    title: "Golden Hour Nuptials at Fatehabad Heritage",
    category: "royal",
    categoryLabel: "Royal Wedding",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[16/9]",
    gridSpan: "col-span-1 md:col-span-2 row-span-1",
    altText: "Indian couple in traditional embroidered wedding attire during sunset ceremony in Agra",
    storySnippet: "A timeless outdoor wedding ceremony illuminated by the warm twilight sky, framing the bride's crimson veil against soft golden bokeh.",
    cameraNotes: "Captured on 50mm f/1.2 prime · Natural ambient golden rim light",
  },
  {
    id: "story-2",
    title: "The Solitary Bridal Reverie",
    category: "royal",
    categoryLabel: "Bridal Portrait",
    location: "Sikandra, Agra",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
    gridSpan: "col-span-1 row-span-1",
    altText: "Intimate portrait of an Indian bride with intricate heirloom jewelry and traditional bindi",
    storySnippet: "Quiet moments before the Baraat arrives. Delicate handcrafted polki jewels and intricate henna etched with the couple's initials.",
    cameraNotes: "85mm f/1.4 · Soft diffused courtyard window illumination",
  },
  {
    id: "story-3",
    title: "The Sacred Pheras & Rose Shower",
    category: "candid",
    categoryLabel: "Candid & Pheras",
    location: "Dayal Bagh, Agra",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[4/3]",
    gridSpan: "col-span-1 row-span-1",
    altText: "Rose petals showering on the bride and groom during seven sacred vows around holy agni",
    storySnippet: "As the seven rounds around the sacred fire were completed, family members showered fragrant petals over the newlyweds in joyful unison.",
    cameraNotes: "35mm f/1.8 · High-speed sync capturing petal freeze in air",
  },
  {
    id: "story-4",
    title: "Twilight Reflections Pre-Wedding",
    category: "prewedding",
    categoryLabel: "Pre-Wedding Editorial",
    location: "Mughal Heritage Grounds, Agra",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[16/9]",
    gridSpan: "col-span-1 md:col-span-2 row-span-1",
    altText: "Romantic couple walking hand in hand along historical sandstone arches at dusk",
    storySnippet: "A serene pre-wedding session away from the city bustle, highlighting the couple's natural warmth and effortless chemistry.",
    cameraNotes: "24-70mm f/2.8 · Cinematic color grade with deep sandstone tones",
  },
  {
    id: "story-5",
    title: "Laughter Amidst the Turmeric Glow",
    category: "rituals",
    categoryLabel: "Haldi Celebration",
    location: "Civil Lines, Agra",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
    gridSpan: "col-span-1 row-span-1",
    altText: "Bride laughing as friends and cousins apply fresh fragrant haldi paste",
    storySnippet: "Unfiltered joy and splashing yellow hues. Capturing spontaneous laughter and sibling camaraderie without posed intervention.",
    cameraNotes: "50mm f/1.4 · Fast shutter candid documentary capture",
  },
  {
    id: "story-6",
    title: "Midnight Reception & Grand Entrance",
    category: "candid",
    categoryLabel: "Reception Gala",
    location: "Agra Cantt, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[4/3]",
    gridSpan: "col-span-1 row-span-1",
    altText: "Bride and groom entering banquet hall decorated with candle chandeliers",
    storySnippet: "Warm banquet chandeliers, champagne toasts, and heartfelt speeches under starry night skies.",
    cameraNotes: "85mm f/1.8 · Low light off-camera flash rim accent",
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "royal", label: "Royal Nuptials" },
  { id: "candid", label: "Candid Moments" },
  { id: "prewedding", label: "Pre-Wedding" },
  { id: "rituals", label: "Haldi & Rituals" },
] as const;
