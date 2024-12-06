import { Category } from '../types';
import { Dog, Cat, Pill, ShoppingBag, Scissors } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'food',
    name: 'Pet Food',
    icon: 'Dog',
    description: 'Premium nutrition for your pets'
  },
  {
    id: 'medicine',
    name: 'Healthcare',
    icon: 'Pill',
    description: 'Medicines and supplements'
  },
  {
    id: 'toys',
    name: 'Toys',
    icon: 'Cat',
    description: 'Fun and engaging pet toys'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: 'ShoppingBag',
    description: 'Essential pet accessories'
  },
  {
    id: 'grooming',
    name: 'Grooming',
    icon: 'Scissors',
    description: 'Grooming tools and supplies'
  }
];