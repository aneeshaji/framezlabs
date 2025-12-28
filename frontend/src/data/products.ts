import loveStoryFrame from '../assets/products/Personalized_Love_Story_Photo_Frame.jpg';
import coupleFrame from '../assets/products/photo-frame-for-couple.jpg';
import babyBirthFrame from '../assets/products/personalized-baby-birth-detail-photo-frame.jpg';
import tripToLifeFrame from '../assets/products/Trip_To_Life_–_Collage_Photo_Frame.webp';
import broSisFrame from '../assets/products/bro-sis.jpg';
import dadFrame from '../assets/products/dad.jpg';
import woodenFrame from '../assets/products/personalized-photo-frame-custom.jpg';
import heartfeltFrame from '../assets/products/heartfelt-memories-frame.webp';
import loveFoldFrame from '../assets/products/lovefold-personalised-picture-frame.webp';
import keepsakeFrame from '../assets/products/personalised-keepsake-frame.webp';
import photoPrints from '../assets/products/photo-prints-large.jpg';

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
  "A3/A4 Frames",
  "Professional Photo Prints"
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '27',
    name: "Professional Photo Prints",
    category: "Professional Photo Prints",
    image: photoPrints,
    description: "High-quality professional photo prints with vibrant colors and premium finish. Perfect for preserving your best moments in large format.",
    tag: 'New'
  },
  {
    id: '26',
    name: "Personalised Keepsake Frame",
    category: "Square Frames",
    image: keepsakeFrame,
    description: "A timeless keepsake to cherish your most precious memories forever.",
    tag: 'New'
  },
  {
    id: '25',
    name: "LoveFold Personalized Picture Frame",
    category: "Couple Mini Frames",
    image: loveFoldFrame,
    description: "A unique folding frame to showcase multiple cherished moments in one elegant display.",
    tag: 'New'
  },
  {
    id: '24',
    name: "Heartfelt Memories Frame",
    category: "Anniversary Frames",
    image: heartfeltFrame,
    description: "A beautiful frame designed to keep your most cherished heartfelt memories alive forever.",
    tag: 'New'
  },
  {
    id: '23',
    name: "Elegant Wooden Personalized Photo 4x4 Frame",
    category: "Square Frames",
    image: woodenFrame,
    description: "A timeless wooden 4x4 frame to display your cherished memories with elegance.",
    tag: 'New'
  },
  {
    id: '22',
    name: "Memories Galore – Photo Frame For Dad",
    category: "Collage Frames",
    image: dadFrame,
    description: "A heartfelt tribute to your superhero. The perfect gift for Father's Day or his special birthday.",
    tag: 'New'
  },
  {
    id: '21',
    name: "Brother Sister Photo Frame",
    category: "A3/A4 Frames",
    image: broSisFrame,
    description: "Celebrate the special bond between siblings with this delightful personalized frame.",
    tag: 'New'
  },
  {
    id: '20',
    name: "Trip To Life - Collage Photo Frame",
    category: "Collage Frames",
    image: tripToLifeFrame,
    description: "A stunning collage frame to capture the best moments of your life's journey.",
    tag: 'New'
  },
  {
    id: '19',
    name: "Personalized Baby Birth Detail Frame",
    category: "Baby Details Frames",
    image: babyBirthFrame,
    description: "Preserve the precious details of your baby's birth with this beautiful, customized keepsake frame.",
    tag: 'New'
  },
  {
    id: '17',
    name: "Personalized Love Story Photo Frame",
    category: "Anniversary Frames",
    image: loveStoryFrame,
    description: "Celebrate your unique journey with this customized love story frame, perfect for anniversaries and special dates.",
    tag: 'New'
  },
  {
    id: '18',
    name: "Romantic Couple Photo Frame",
    category: "Couple Mini Frames",
    image: coupleFrame,
    description: "A perfect keepsake for couples to cherish their special moments forever.",
    tag: 'New'
  },


];
