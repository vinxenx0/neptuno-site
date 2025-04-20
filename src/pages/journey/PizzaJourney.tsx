
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { pizzas, burgers, sides, drinks, allFoodItems, toppings, burgerToppings, deliveryOptions, DeliveryOption, FoodItem, Topping, ToppingSelection } from '@/data/pizza-data';
import PizzaJourneyWelcome from '@/components/pizza/PizzaJourneyWelcome';
import PizzaJourneyCustomize from '@/components/pizza/PizzaJourneyCustomize';
import PizzaJourneyDelivery from '@/components/pizza/PizzaJourneyDelivery';
import PizzaJourneyPayment from '@/components/pizza/PizzaJourneyPayment';
import PizzaJourneyComplete from '@/components/pizza/PizzaJourneyComplete';
import RewardPopup from '@/components/journey/RewardPopup';
import { Trophy, Star } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FoodTypeSelector from '@/components/pizza/FoodTypeSelector';

export interface UsePizzaJourneyType {
  selectedFood: FoodItem | null;
  setSelectedFood: (food: FoodItem | null) => void;
  selectedFoodType: string;
  setSelectedFoodType: (type: string) => void;
  selectedToppings: ToppingSelection;
  toggleTopping: (id: string) => void;
  selectedDeliveryOption: DeliveryOption | null;
  setSelectedDeliveryOption: (option: DeliveryOption) => void;
  totalPoints: number;
  updatePoints: (points: number) => void;
  getToppingById: (id: string) => Topping | null;
  availableToppings: Topping[];
  totalPrice: number;
  applyPointsDiscount: () => void;
  pointsApplied: boolean;
  pointsDiscount: number;
  finalPrice: number;
  calculateEarnedPoints: () => number;
}

const PizzaJourney: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when the component mounts or location changes
    window.scrollTo(0, 0);
  }, [location]);
  
  // State
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFoodType, setSelectedFoodType] = useState<string>('pizza');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<ToppingSelection>({});
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<DeliveryOption | null>(null);
  const [rewardPopup, setRewardPopup] = useState<{ title: string; description: string; icon: React.ReactNode } | null>(null);
  const [totalPoints, setTotalPoints] = useState(50); // Start with some points
  const [pointsApplied, setPointsApplied] = useState(false);
  
  // Helper functions
  const getAvailableToppings = (): Topping[] => {
    if (!selectedFood) return [];
    if (selectedFood.type === 'pizza') return toppings;
    if (selectedFood.type === 'burger') return burgerToppings;
    return [];
  };
  
  const getToppingById = (id: string): Topping | null => {
    return [...toppings, ...burgerToppings].find(t => t.id === id) || null;
  };
  
  const toggleTopping = (id: string) => {
    setSelectedToppings(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const updatePoints = (points: number) => {
    setTotalPoints(prev => prev + points);
    
    if (points > 0) {
      setRewardPopup({
        title: "¡Puntos ganados!",
        description: `Has ganado ${points} puntos`,
        icon: <Star className="h-6 w-6 text-yellow-500" />
      });
    } else if (points < 0) {
      setRewardPopup({
        title: "Puntos canjeados",
        description: `Has canjeado ${Math.abs(points)} puntos`,
        icon: <Trophy className="h-6 w-6 text-purple-500" />
      });
    }
  };
  
  // Calculate price
  const calculateTotalPrice = (): number => {
    let total = 0;
    
    // Add base food price
    if (selectedFood) {
      total += selectedFood.price;
    }
    
    // Add toppings
    Object.entries(selectedToppings).forEach(([id, isSelected]) => {
      if (isSelected) {
        const topping = getToppingById(id);
        if (topping) {
          total += topping.price;
        }
      }
    });
    
    // Add delivery fee
    if (selectedDeliveryOption) {
      total += selectedDeliveryOption.price;
    }
    
    return total;
  };
  
  const totalPrice = calculateTotalPrice();
  const pointsDiscount = pointsApplied ? Math.min(totalPoints * 0.1, totalPrice) : 0;
  const finalPrice = Math.max(0, totalPrice - pointsDiscount);
  
  const calculateEarnedPoints = (): number => {
    let points = 0;
    
    // Points for selected food
    if (selectedFood) {
      points += selectedFood.points;
    }
    
    // Points for toppings
    Object.entries(selectedToppings).forEach(([id, isSelected]) => {
      if (isSelected) {
        const topping = getToppingById(id);
        if (topping) {
          points += topping.points;
        }
      }
    });
    
    // Bonus points for 3+ toppings
    const toppingCount = Object.values(selectedToppings).filter(Boolean).length;
    if (toppingCount >= 3) {
      points += 10;
    }
    
    return points;
  };
  
  const applyPointsDiscount = () => {
    if (!pointsApplied && totalPoints > 0) {
      setPointsApplied(true);
    }
  };
  
  // Navigation
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const resetJourney = () => {
    // Reset everything
    setCurrentStep(0);
    setSelectedFood(null);
    setSelectedToppings({});
    setSelectedDeliveryOption(null);
    setPointsApplied(false);
    window.scrollTo(0, 0);
  };
  
  // PizzaJourney hook data
  const usePizzaJourney: UsePizzaJourneyType = {
    selectedFood,
    setSelectedFood,
    selectedFoodType,
    setSelectedFoodType,
    selectedToppings,
    toggleTopping,
    selectedDeliveryOption,
    setSelectedDeliveryOption,
    totalPoints,
    updatePoints,
    getToppingById,
    availableToppings: getAvailableToppings(),
    totalPrice,
    applyPointsDiscount,
    pointsApplied,
    pointsDiscount,
    finalPrice,
    calculateEarnedPoints
  };
  
  // Render step based on current state
  const renderStep = () => {
    switch (currentStep) {
      case 0: // Welcome
        return (
          <PizzaJourneyWelcome
            onStart={() => nextStep()}
            totalPoints={totalPoints}
          />
        );
      case 1: // Select food
        return (
          <div className="container mx-auto max-w-6xl py-8 px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Selecciona tu producto</h2>
              <p className="text-gray-600">Elige entre nuestra variedad de productos y gana puntos con cada compra</p>
            </div>
            
            <FoodTypeSelector 
              selectedFoodType={selectedFoodType}
              onSelectFoodType={setSelectedFoodType}
              pizzas={pizzas}
              burgers={burgers}
              sides={sides}
              drinks={drinks}
              onSelectFood={(food) => {
                setSelectedFood(food);
                // Reset toppings when changing food
                setSelectedToppings({});
                nextStep();
              }}
            />
          </div>
        );
      case 2: // Customize food
        if (selectedFood?.type === 'pizza' || selectedFood?.type === 'burger') {
          return (
            <PizzaJourneyCustomize
              usePizzaJourney={usePizzaJourney}
              onNext={nextStep}
              onBack={prevStep}
            />
          );
        } else {
          // Skip customization for sides and drinks
          nextStep();
          return null;
        }
      case 3: // Delivery options
        return (
          <PizzaJourneyDelivery 
            usePizzaJourney={usePizzaJourney}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4: // Payment and review
        return (
          <PizzaJourneyPayment
            usePizzaJourney={usePizzaJourney}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5: // Complete
        return (
          <PizzaJourneyComplete
            usePizzaJourney={usePizzaJourney}
            onReset={resetJourney}
          />
        );
      default:
        return null;
    }
  };

  return (
    <JourneyLayout 
      title="Pizzería con lógica gamificada"
      subtitle="Personaliza tu pizza preferida, acumula puntos y cánjealos por descuentos"
      bgColor="bg-gradient-to-br from-orange-500 to-red-700"
    >
      {renderStep()}
      
      <RewardPopup
        title={rewardPopup?.title || ""}
        description={rewardPopup?.description || ""}
        icon={rewardPopup?.icon}
        isVisible={!!rewardPopup}
        onClose={() => setRewardPopup(null)}
      />
    </JourneyLayout>
  );
};

export default PizzaJourney;
