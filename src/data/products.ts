import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food',
    description: 'High-quality nutrition for your beloved canine companion. Made with real meat and essential nutrients for a balanced diet.',
    price: 49.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119',
    stock: 50,
    rating: 4.5,
    reviews: 128,
    featured: true
  },
  {
    id: '2',
    name: 'Cat Dental Care Kit',
    description: 'Complete dental care solution for cats. Includes toothbrush, toothpaste, and dental treats.',
    price: 29.99,
    category: 'medicine',
    image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9',
    stock: 30,
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Interactive Pet Toy',
    description: 'Engaging toy for mental stimulation. Keeps your pet entertained for hours.',
    price: 19.99,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
    stock: 100,
    rating: 4.8,
    reviews: 256,
    featured: true
  },
  {
    id: '4',
    name: 'Pet Grooming Brush',
    description: 'Professional-grade grooming brush for all pet types. Removes loose fur and prevents matting.',
    price: 24.99,
    category: 'grooming',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    stock: 75,
    rating: 4.6,
    reviews: 167
  },
  {
    id: '5',
    name: 'Premium Cat Food',
    description: 'Grain-free cat food made with premium ingredients. Rich in proteins and essential nutrients.',
    price: 39.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    stock: 45,
    rating: 4.7,
    reviews: 198
  }
];