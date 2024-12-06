export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  sizes?: string[];
  colors?: string[];
}

export type ProductCategory = 'food' | 'medicine' | 'accessories' | 'toys' | 'grooming';

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}

export interface Category {
  id: ProductCategory;
  name: string;
  icon: string;
  description: string;
}

export interface Filter {
  categories: ProductCategory[];
  inStock: boolean;
  priceRange: [number, number];
  sortBy: 'price-asc' | 'price-desc' | 'popularity' | 'newest';
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  subtotal: number;
  tax: number;
  applyDiscount: (code: string) => void;
  discount: number;
}