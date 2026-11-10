import productone from '../assets/productone.png';
import producttwo from '../assets/producttwo.png';
import productthree from '../assets/productthree.png';
import productfour from '../assets/productfour.png';
import parttwo1 from '../assets/parttwo1.png';
import parttow2 from '../assets/parttow2.png';
import parttwo3 from '../assets/parttwo3.png';
import parttwo4 from '../assets/parttwo4.png';
import part1 from '../assets/part1(1).png';
import part2 from '../assets/part1(2).png';
import part3 from '../assets/part1(3).png';
import part4 from '../assets/part1(4).png';

export const slugify = (text = '') => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const CATEGORIES = [
  { name: 'Accessories', slug: 'accessories' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothes', slug: 'clothes' },
  { name: 'Bags', slug: 'bags' },
  { name: 'Home appliances', slug: 'home-appliances' },
  { name: 'Gadgets', slug: 'gadgets' },
];

export const OREBI_PRODUCTS = [
  {
    id: 'orb-1',
    title: 'Basic Crew Neck Tee',
    price: 44.00,
    oldPrice: 55.00,
    badge: 'New',
    color: 'Black',
    category: 'Clothes',
    categorySlug: 'clothes',
    image: productone,
    rating: 4.8,
    reviews: 32,
    stock: 25,
    description: 'Classic premium cotton crew neck t-shirt with a relaxed, modern fit and reinforced stitching.',
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-2',
    title: 'Smart Digital Chrono Watch',
    price: 120.00,
    oldPrice: 150.00,
    badge: '15% Off',
    color: 'Black',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    image: producttwo,
    rating: 4.9,
    reviews: 64,
    stock: 12,
    description: 'High precision waterproof digital watch with ambient backlit display and silicone wristband.',
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-3',
    title: 'Minimalist Ceramic Basket',
    price: 35.00,
    oldPrice: null,
    badge: 'Hot',
    color: 'Gray',
    category: 'Home appliances',
    categorySlug: 'home-appliances',
    image: productthree,
    rating: 4.6,
    reviews: 18,
    stock: 30,
    description: 'Handcrafted stoneware ceramic utility basket for kitchen counter or modern living spaces.',
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-4',
    title: 'Vintage Leather Carry Bag',
    price: 85.00,
    oldPrice: 110.00,
    badge: 'Sale',
    color: 'Black',
    category: 'Bags',
    categorySlug: 'bags',
    image: productfour,
    rating: 4.7,
    reviews: 45,
    stock: 8,
    description: 'Genuine full-grain leather tote and travel shoulder bag with antique brass zipper detailing.',
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-5',
    title: 'Modern Ergonomic Desktop Lamp',
    price: 52.00,
    oldPrice: 65.00,
    badge: 'New',
    color: 'White',
    category: 'Electronics',
    categorySlug: 'electronics',
    image: parttwo1,
    rating: 4.8,
    reviews: 58,
    stock: 20,
    description: 'Adjustable touch-controlled LED desk lamp with multiple color temperatures and USB charging port.',
    featured: false,
    newArrival: true,
    bestSeller: true,
  },
  {
    id: 'orb-6',
    title: 'Smart Bluetooth Stereo Speaker',
    price: 95.00,
    oldPrice: 120.00,
    badge: 'Hot',
    color: 'Black',
    category: 'Electronics',
    categorySlug: 'electronics',
    image: parttow2,
    rating: 4.9,
    reviews: 82,
    stock: 16,
    description: 'Portable deep-bass wireless Bluetooth speaker with 18-hour continuous battery playtime.',
    featured: false,
    newArrival: true,
    bestSeller: true,
  },
  {
    id: 'orb-7',
    title: 'Compact Wireless Earbuds',
    price: 68.00,
    oldPrice: 80.00,
    badge: 'New',
    color: 'White',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    image: parttwo3,
    rating: 4.7,
    reviews: 91,
    stock: 35,
    description: 'True wireless noise-cancelling earbuds with high-fidelity acoustic drivers and fast wireless charging case.',
    featured: false,
    newArrival: true,
    bestSeller: true,
  },
  {
    id: 'orb-8',
    title: 'Everyday Canvas Crossbody Bag',
    price: 45.00,
    oldPrice: null,
    badge: 'New',
    color: 'Navy',
    category: 'Bags',
    categorySlug: 'bags',
    image: parttwo4,
    rating: 4.5,
    reviews: 29,
    stock: 22,
    description: 'Water-resistant compact canvas messenger pouch designed for everyday urban commutes.',
    featured: false,
    newArrival: true,
    bestSeller: true,
  },
  {
    id: 'orb-9',
    title: 'Classic Woolen Winter Scarf',
    price: 28.00,
    oldPrice: 35.00,
    badge: '10% Off',
    color: 'Gray',
    category: 'Accessories',
    categorySlug: 'accessories',
    image: part1,
    rating: 4.6,
    reviews: 19,
    stock: 40,
    description: 'Ultra-soft pure lambswool knitted scarf providing warmth and lightweight elegance.',
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-10',
    title: 'Sport Utility Polarized Sunglasses',
    price: 39.00,
    oldPrice: null,
    badge: 'New',
    color: 'Black',
    category: 'Accessories',
    categorySlug: 'accessories',
    image: part2,
    rating: 4.8,
    reviews: 44,
    stock: 18,
    description: 'UV400 polarized anti-glare sport sunglasses featuring an impact-resistant polymer frame.',
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-11',
    title: 'Stainless Steel Insulated Flask',
    price: 32.00,
    oldPrice: 40.00,
    badge: 'Sale',
    color: 'White',
    category: 'Home appliances',
    categorySlug: 'home-appliances',
    image: part3,
    rating: 4.9,
    reviews: 73,
    stock: 28,
    description: 'Double-wall vacuum thermal flask keeps cold beverages chilled for 24 hours and hot for 12 hours.',
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: 'orb-12',
    title: 'Relaxed Fit Oversized Hoodie',
    price: 58.00,
    oldPrice: 75.00,
    badge: 'New',
    color: 'Black',
    category: 'Clothes',
    categorySlug: 'clothes',
    image: part4,
    rating: 4.8,
    reviews: 62,
    stock: 14,
    description: 'Heavyweight organic cotton fleece pullover hoodie with kangaroo pocket and ribbed cuffs.',
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
];

export const matchCategory = (productCategory = '', targetSlugOrName = '') => {
  if (!targetSlugOrName || targetSlugOrName.toLowerCase() === 'all' || targetSlugOrName.toLowerCase() === 'all categories') {
    return true;
  }
  const cleanTarget = slugify(targetSlugOrName);
  const cleanProd = slugify(productCategory);
  return cleanTarget === cleanProd || cleanProd.includes(cleanTarget) || cleanTarget.includes(cleanProd);
};

export const getCategoryItemCount = (catSlugOrName, products = OREBI_PRODUCTS) => {
  if (!catSlugOrName || catSlugOrName.toLowerCase() === 'all') {
    return products.length;
  }
  return products.filter((p) => matchCategory(p.category, catSlugOrName)).length;
};
