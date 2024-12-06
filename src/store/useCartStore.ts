import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity === 0) {
      get().removeItem(productId);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  
  clearCart: () => set({ items: [] }),
  
  setIsOpen: (isOpen) => set({ isOpen }),
  
  getSubtotal: () => {
    const state = get();
    return state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
  
  getTax: () => {
    const state = get();
    return state.getSubtotal() * 0.1; // 10% tax
  },
  
  getTotal: () => {
    const state = get();
    return state.getSubtotal() + state.getTax();
  },
}));