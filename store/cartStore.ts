import { create } from 'zustand';

// Definindo os tipos (o que é um produto?)
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  imageSrc: string;
};

export type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  isOpen: boolean; // Se o carrinho está aberto ou fechado
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Se já existe, aumenta a quantidade
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // Se não existe, adiciona novo
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));