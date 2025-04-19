
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardPopup from '@/components/journey/RewardPopup';
import { Star, Trophy, Gift } from 'lucide-react';
import MarketplaceWelcome from '@/components/marketplace/MarketplaceWelcome';
import MarketplaceCatalog from '@/components/marketplace/MarketplaceCatalog';
import MarketplaceCheckout from '@/components/marketplace/MarketplaceCheckout';
import MarketplaceComplete from '@/components/marketplace/MarketplaceComplete';
import { products, rewardRules } from '@/data/marketplace-data';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MarketplaceJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cart, setCart] = useState<number[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [location]);
  
  // Calculate totals and category counts
  const cartItems = products.filter(product => cart.includes(product.id));
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
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
    window.scrollTo(0, 0);
  };
  
  // Props to pass to components
  const marketplaceProps = {
    cart,
    cartItems,
    categoryCounts,
    totalPoints,
    badges,
    coupons,
    totalPrice,
    handleAddToCart,
    handleRemoveFromCart,
    handleNext,
    handleComplete,
    resetJourney
  };
  
  return (
    <JourneyLayout
      title="Marketplace con recompensas por sinergias"
      subtitle="Descubre cómo obtener recompensas al combinar productos y categorías"
      bgColor="bg-gradient-to-br from-emerald-600 to-teal-800"
    >
      {currentStep === 0 ? (
        <MarketplaceWelcome onStart={handleNext} />
      ) : currentStep === 1 ? (
        <MarketplaceCatalog {...marketplaceProps} />
      ) : currentStep === 2 ? (
        <MarketplaceCheckout {...marketplaceProps} />
      ) : (
        <MarketplaceComplete {...marketplaceProps} />
      )}
      
      {/* Rewards popup */}
      {currentReward && (
        <RewardPopup 
          title={currentReward.title}
          description={currentReward.description}
          icon={currentReward.icon}
          isVisible={showReward}
          onClose={() => setShowReward(false)}
        />
      )}
    </JourneyLayout>
  );
};

export default MarketplaceJourney;
