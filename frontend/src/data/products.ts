export interface Product {
  id: string;
  name: string;
  category: string;
  price?: string;
  image: string;
  description: string;
  tag?: 'Best Seller' | 'Popular' | 'New';
}

export const CATEGORIES = [
  "Birthday Frames",
  "Baby Details Frames",
  "Anniversary Frames",
  "Collage Frames",
  "Mosaic Frames",
  "Square Frames",
  "Couple Mini Frames",
  "Gift Hampers",
  "Personalized Mugs",
  "Custom Photo Books",
  "A3/A4 Frames"
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Baby Milestones Frame",
    category: "Baby Details Frames",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    description: "Capture every precious moment of your little one's first year with this customized milestone frame."
  },
  {
    id: '2',
    name: "Anniversary Collage",
    category: "Anniversary Frames",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    description: "A beautiful heart-warming collage to celebrate your journey of love together.",
    tag: 'Best Seller'
  },
  {
    id: '3',
    name: "Mosaic Art Frame",
    category: "Mosaic Frames",
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800",
    description: "Hundreds of small photos coming together to form one big memory. The perfect artistic gift.",
    tag: 'Popular'
  },
  {
    id: '4',
    name: "Premium Gift Hamper",
    category: "Gift Hampers",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800",
    description: "Curated gift hampers for special occasions, packed with love and premium goodies."
  },
  {
    id: '5',
    name: "Couple Mini Frame",
    category: "Couple Mini Frames",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    description: "Minimalist frames for your desktop or bedside table."
  },
  {
    id: '6',
    name: "Custom Photo Book",
    category: "Custom Photo Books",
    image: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=800",
    description: "Tell your story page by page with our premium quality hardbound photo books."
  },
  {
    id: '7',
    name: "Classic Birthday Collage",
    category: "Birthday Frames",
    image: "https://images.unsplash.com/photo-1544333323-537f818ef33d?auto=format&fit=crop&q=80&w=800",
    description: "Make their special day unforgettable with a beautiful collage of all their favorite moments."
  },
  {
    id: '8',
    name: "Minimalist Square Frame",
    category: "Square Frames",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    description: "Sleek and modern square frames that fit perfectly on any wall or desk."
  },
  {
    id: '9',
    name: "Custom Magic Mug",
    category: "Personalized Mugs",
    image: "https://images.unsplash.com/photo-1517256011271-bfbd3f508092?auto=format&fit=crop&q=80&w=800",
    description: "Watch your favorite memory reveal itself with heat-activated color-changing technology."
  },
  {
    id: '10',
    name: "Premium A3 Wooden Frame",
    category: "A3/A4 Frames",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=800",
    description: "Large, elegant A3 size frames made from high-quality wood for your masterpiece."
  },
  {
    id: '11',
    name: "Star Map Birthday Frame",
    category: "Birthday Frames",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800",
    description: "A unique map of the stars as they appeared on the day you were born."
  },
  {
    id: '12',
    name: "Modern A4 Photo Frame",
    category: "A3/A4 Frames",
    image: "https://images.unsplash.com/photo-1513511100223-99b38ec25f54?auto=format&fit=crop&q=80&w=800",
    description: "The classic A4 frame, redefined with modern thin bezels and premium glass."
  },
  {
    id: '13',
    name: "Mosaic Memory Wall",
    category: "Mosaic Frames",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=800",
    description: "A larger mosaic masterpiece combining over 500 small photos into one stunning artwork.",
    tag: 'Best Seller'
  },
  {
    id: '14',
    name: "Couple Memory Box",
    category: "Couple Mini Frames",
    image: "https://images.unsplash.com/photo-1518131394553-c4675934bc39?auto=format&fit=crop&q=80&w=800",
    description: "A set of cute mini frames designed specifically for your favorite couple goals."
  },
  {
    id: '15',
    name: "Luxury Celebration Hamper",
    category: "Gift Hampers",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800",
    description: "The ultimate gift box containing frames, chocolates, and personalized surprises."
  },
  {
    id: '16',
    name: "Grid Style Photo Collage",
    category: "Collage Frames",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
    description: "A clean, modern grid layout to showcase your top 12 memories of the year."
  }
];
