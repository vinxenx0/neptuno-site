
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { products, rewardRules } from '@/data/marketplace-data';
import { Star, Trophy, Gift } from 'lucide-react';

type RewardType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface MarketplaceContextType {
  currentStep: number;
  cart: number[];
  cartItems: any[];
  categoryCounts: Record<string, number>;
  totalPoints: number;
  badges: string[];
  coupons: string[];
  totalPrice: number;
  showReward: boolean;
  currentReward: RewardType | null;
  setShowReward: (show: boolean) => void;
  handleAddToCart: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
  handleNext: () => void;
  handleComplete: () => void;
  resetJourney: () => void;
  applyPointsDiscount: () => void;
  discountApplied: boolean;
  discountValue: number;
  finalPrice: number;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (context === undefined) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};

interface MarketplaceProviderProps {
  children: ReactNode;
}

export const MarketplaceProvider: React.FC<MarketplaceProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cart, setCart] = useState<number[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<RewardType | null>(null);
  const [discountApplied, setDiscountApplied] = useState(false);
  
  // Calculate totals and category counts
  const cartItems = products.filter(product => cart.includes(product.id));
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountValue = discountApplied ? totalPoints * 0.1 : 0;
  const finalPrice = Math.max(0, totalPrice - discountValue);
  
  const categoryCounts = cartItems.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  
  const handleAddToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      const newCart = [...cart, productId];
      setCart(newCart);
      
      // Check for rewards
      checkForRewards(newCart);
    }
  };
  
  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter(id => id !== productId));
  };
  
  const checkForRewards = (newCart: number[]) => {
    const cartItems = products.filter(product => newCart.includes(product.id));
    const categoryCounts = cartItems.reduce((counts, item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);
    
    // Check each reward rule
    rewardRules.forEach(rule => {
      if (rule.type === 'category' && categoryCounts[rule.category] === rule.condition) {
        // Category bonus
        addReward(
          rule.reward,
          `¡Bonus por categoría ${rule.category}!`, 
          `Has comprado ${rule.condition} productos de ${rule.category}`
        );
      } else if (rule.type === 'total_items' && newCart.length === rule.condition) {
        // Total items bonus
        addReward(
          rule.reward,
          `¡Bonus por cantidad!`, 
          `Has añadido ${rule.condition} productos al carrito`
        );
      }
    });
  };
  
  const addReward = (
    reward: { points: number | null, badge: string | null, coupon: string | null },
    title: string,
    description: string
  ) => {
    // Add points
    if (reward.points) {
      setTotalPoints(prev => prev + reward.points);
      
      setCurrentReward({
        title,
        description: `${description}: +${reward.points} puntos`,
        icon: <Star className="h-6 w-6 text-yellow-500" />
      });
      setShowReward(true);
    }
    
    // Add badge
    if (reward.badge && !badges.includes(reward.badge)) {
      setBadges(prev => [...prev, reward.badge!]);
      
      setTimeout(() => {
        setCurrentReward({
          title: "¡Badge desbloqueado!",
          description: `Has obtenido el badge "${reward.badge}"`,
          icon: <Trophy className="h-6 w-6 text-indigo-600" />
        });
        setShowReward(true);
      }, 1500);
    }
    
    // Add coupon
    if (reward.coupon && !coupons.includes(reward.coupon)) {
      setCoupons(prev => [...prev, reward.coupon!]);
      
      setTimeout(() => {
        setCurrentReward({
          title: "¡Cupón desbloqueado!",
          description: reward.coupon,
          icon: <Gift className="h-6 w-6 text-green-600" />
        });
        setShowReward(true);
      }, reward.badge ? 3000 : 1500);
    }
  };
  
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleComplete = () => {
    setCurrentStep(3); // Final step
    window.scrollTo(0, 0);
    
    // Extra bonus for completing purchase
    if (cart.length >= 3) {
      addReward(
        { points: 75, badge: "Comprador Premium", coupon: null },
        "¡Compra simulada completada!",
        "Gracias por tu compra"
      );
    }
  };

  const resetJourney = () => {
    setCurrentStep(0);
    setCart([]);
    setTotalPoints(0);
    setBadges([]);
    setCoupons([]);
    setDiscountApplied(false);
    window.scrollTo(0, 0);
  };
  
  const applyPointsDiscount = () => {
    if (totalPoints > 0 && !discountApplied) {
      setDiscountApplied(true);
      
      setCurrentReward({
        title: "¡Descuento aplicado!",
        description: `Se han canjeado ${totalPoints} puntos por ${(totalPoints * 0.1).toFixed(2)}€ de descuento`,
        icon: <Gift className="h-6 w-6 text-emerald-500" />
      });
      setShowReward(true);
    }
  };
  
  const value = {
    currentStep,
    cart,
    cartItems,
    categoryCounts,
    totalPoints,
    badges,
    coupons,
    totalPrice,
    showReward,
    currentReward,
    setShowReward,
    handleAddToCart,
    handleRemoveFromCart,
    handleNext,
    handleComplete,
    resetJourney,
    applyPointsDiscount,
    discountApplied,
    discountValue,
    finalPrice
  };

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  );
};
