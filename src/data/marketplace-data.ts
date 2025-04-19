
// Product data
export const products = [
  {
    id: 1,
    name: "Auriculares gaming",
    price: 79.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80"
  },
  {
    id: 2,
    name: "Smartwatch deportivo",
    price: 129.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1615834307821-9f1eb247a91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80"
  },
  {
    id: 3,
    name: "Batidora profesional",
    price: 89.99,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1594241498383-646ce27c5c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
  },
  {
    id: 4,
    name: "Sartén de titanio",
    price: 59.99,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1593642634627-6fdaf35340f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80"
  },
  {
    id: 5,
    name: "Mancuernas ajustables",
    price: 149.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: 6,
    name: "Teclado mecánico RGB",
    price: 99.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80"
  },
  {
    id: 7,
    name: "Esterilla de yoga",
    price: 29.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 8,
    name: "Ratón gaming inalámbrico",
    price: 69.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1618499890638-3f0ee1f8c91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80"
  }
];

// Reward rules
export const rewardRules = [
  {
    type: 'category',
    condition: 2,
    category: 'Gaming',
    reward: { points: 20, badge: null, coupon: null }
  },
  {
    type: 'category',
    condition: 2,
    category: 'Fitness',
    reward: { points: 20, badge: null, coupon: null }
  },
  {
    type: 'category',
    condition: 2,
    category: 'Cocina',
    reward: { points: 20, badge: null, coupon: null }
  },
  {
    type: 'total_items',
    condition: 3,
    reward: { points: 30, badge: 'Comprador estratégico', coupon: null }
  },
  {
    type: 'total_items',
    condition: 5,
    reward: { points: 50, badge: null, coupon: '15% en próximas compras' }
  }
];

// Types for Marketplace components
export interface MarketplaceProps {
  cart: number[];
  cartItems: typeof products;
  categoryCounts: Record<string, number>;
  totalPoints: number;
  badges: string[];
  coupons: string[];
  totalPrice: number;
  handleAddToCart: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
  handleNext: () => void;
  handleComplete: () => void;
  resetJourney: () => void;
}
