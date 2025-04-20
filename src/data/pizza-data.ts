
import { Pizza, ShoppingBag } from "lucide-react";

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'pizza' | 'burger' | 'side' | 'drink';
  category: string;
  points: number;
};

export type Topping = {
  id: string;
  name: string;
  price: number;
  points: number;
};

export type ToppingSelection = {
  [key: string]: boolean;
};

// Pizzas
export const pizzas: FoodItem[] = [
  {
    id: "pizza-1",
    name: "Margarita",
    description: "Salsa de tomate, mozzarella y orégano",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop",
    type: "pizza",
    category: "Clásica",
    points: 10
  },
  {
    id: "pizza-2",
    name: "Pepperoni",
    description: "Salsa de tomate, mozzarella y pepperoni",
    price: 11.95,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop",
    type: "pizza",
    category: "Clásica",
    points: 12
  },
  {
    id: "pizza-3",
    name: "4 Quesos",
    description: "Mozzarella, gorgonzola, parmesano y emmental",
    price: 12.95,
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=500&auto=format&fit=crop",
    type: "pizza",
    category: "Especial",
    points: 15
  },
  {
    id: "pizza-4",
    name: "Barbacoa",
    description: "Salsa barbacoa, mozzarella, pollo, bacon y cebolla",
    price: 13.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop",
    type: "pizza",
    category: "Especial",
    points: 15
  }
];

// Burgers
export const burgers: FoodItem[] = [
  {
    id: "burger-1",
    name: "Clásica",
    description: "Carne de vacuno, lechuga, tomate y cebolla",
    price: 8.95,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop",
    type: "burger",
    category: "Clásica",
    points: 8
  },
  {
    id: "burger-2",
    name: "Cheese",
    description: "Carne de vacuno, queso cheddar, lechuga y tomate",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=500&auto=format&fit=crop",
    type: "burger",
    category: "Clásica",
    points: 10
  },
  {
    id: "burger-3",
    name: "BBQ Bacon",
    description: "Carne de vacuno, bacon, queso, salsa BBQ",
    price: 11.95,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500&auto=format&fit=crop",
    type: "burger",
    category: "Especial",
    points: 12
  },
  {
    id: "burger-4",
    name: "Mexicana",
    description: "Carne de vacuno, jalapeños, guacamole, queso",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500&auto=format&fit=crop",
    type: "burger",
    category: "Especial",
    points: 15
  }
];

// Sides
export const sides: FoodItem[] = [
  {
    id: "side-1",
    name: "Patatas fritas",
    description: "Patatas crujientes recién hechas",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=500&auto=format&fit=crop",
    type: "side",
    category: "Acompañamiento",
    points: 5
  },
  {
    id: "side-2",
    name: "Alitas de pollo",
    description: "6 alitas de pollo con salsa barbacoa",
    price: 6.95,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop",
    type: "side",
    category: "Acompañamiento",
    points: 8
  },
  {
    id: "side-3",
    name: "Aros de cebolla",
    description: "8 aros de cebolla crujientes",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1639024471283-03bce1be0dfe?q=80&w=500&auto=format&fit=crop",
    type: "side",
    category: "Acompañamiento",
    points: 6
  },
  {
    id: "side-4",
    name: "Ensalada César",
    description: "Lechuga, pollo, queso, picatostes y salsa César",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=500&auto=format&fit=crop",
    type: "side",
    category: "Acompañamiento",
    points: 7
  }
];

// Drinks
export const drinks: FoodItem[] = [
  {
    id: "drink-1",
    name: "Refresco",
    description: "Cola, naranja, limón (33cl)",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop",
    type: "drink",
    category: "Bebida",
    points: 3
  },
  {
    id: "drink-2",
    name: "Agua mineral",
    description: "Agua mineral (50cl)",
    price: 1.95,
    image: "https://images.unsplash.com/photo-1564419434663-c49967363199?q=80&w=500&auto=format&fit=crop",
    type: "drink",
    category: "Bebida",
    points: 2
  },
  {
    id: "drink-3",
    name: "Cerveza",
    description: "Cerveza (33cl)",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=500&auto=format&fit=crop",
    type: "drink",
    category: "Bebida",
    points: 4
  },
  {
    id: "drink-4",
    name: "Zumo natural",
    description: "Naranja, manzana o piña (25cl)",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=500&auto=format&fit=crop",
    type: "drink",
    category: "Bebida",
    points: 5
  }
];

// All food items combined
export const allFoodItems: FoodItem[] = [
  ...pizzas,
  ...burgers,
  ...sides,
  ...drinks
];

// Pizza toppings
export const toppings: Topping[] = [
  { id: "topping-1", name: "Extra de queso", price: 1.50, points: 2 },
  { id: "topping-2", name: "Champiñones", price: 1.00, points: 1 },
  { id: "topping-3", name: "Pimiento", price: 1.00, points: 1 },
  { id: "topping-4", name: "Cebolla", price: 0.75, points: 1 },
  { id: "topping-5", name: "Aceitunas", price: 0.75, points: 1 },
  { id: "topping-6", name: "Pepperoni", price: 1.50, points: 2 },
  { id: "topping-7", name: "Jamón", price: 1.50, points: 2 },
  { id: "topping-8", name: "Piña", price: 1.00, points: 1 },
  { id: "topping-9", name: "Bacon", price: 1.50, points: 2 },
  { id: "topping-10", name: "Pollo", price: 1.75, points: 2 }
];

// Burger toppings
export const burgerToppings: Topping[] = [
  { id: "burger-topping-1", name: "Queso extra", price: 1.00, points: 1 },
  { id: "burger-topping-2", name: "Bacon", price: 1.50, points: 2 },
  { id: "burger-topping-3", name: "Huevo frito", price: 1.25, points: 2 },
  { id: "burger-topping-4", name: "Cebolla caramelizada", price: 0.75, points: 1 },
  { id: "burger-topping-5", name: "Guacamole", price: 1.50, points: 2 },
  { id: "burger-topping-6", name: "Jalapeños", price: 0.75, points: 1 }
];

export type DeliveryOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ElementType;
};

export const deliveryOptions: DeliveryOption[] = [
  {
    id: "delivery",
    name: "Entrega a domicilio",
    description: "Te lo llevamos a casa en 30-45 minutos",
    price: 2.95,
    icon: ShoppingBag
  },
  {
    id: "pickup",
    name: "Recoger en tienda",
    description: "Listo para recoger en 15-20 minutos",
    price: 0,
    icon: Pizza
  }
];
