
import React, { useState, useEffect } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { Pizza, Star, Trophy, Gift, CheckCircle } from 'lucide-react';

// Pizza options
const pizzaOptions = {
  dough: [
    { id: 'thin', name: 'Masa Fina', points: 20, image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'thick', name: 'Masa Gruesa', points: 20, image: 'https://images.unsplash.com/photo-1595854341625-f33e596b5163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' },
    { id: 'wholegrain', name: 'Masa Integral', points: 30, image: 'https://images.unsplash.com/photo-1589840700256-f78d6f9f4c21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' }
  ],
  sauces: [
    { id: 'tomato', name: 'Salsa de Tomate', points: 10, image: 'https://images.unsplash.com/photo-1608219994488-cc13218f034e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'white', name: 'Salsa Blanca', points: 10, image: 'https://images.unsplash.com/photo-1608219994488-cc13218f034e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'bbq', name: 'Salsa Barbacoa', points: 15, image: 'https://images.unsplash.com/photo-1608219994488-cc13218f034e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' }
  ],
  ingredients: [
    { id: 'cheese', name: 'Queso Mozzarella', points: 10, type: 'basic', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' },
    { id: 'pepperoni', name: 'Pepperoni', points: 10, type: 'meat', image: 'https://images.unsplash.com/photo-1638164659008-4d6d633689a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'mushrooms', name: 'Champiñones', points: 10, type: 'veggie', image: 'https://images.unsplash.com/photo-1631206753348-db44968fd440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' },
    { id: 'olives', name: 'Aceitunas', points: 10, type: 'veggie', image: 'https://images.unsplash.com/photo-1607104000972-6ee2eb044dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'bell-peppers', name: 'Pimiento', points: 10, type: 'veggie', image: 'https://images.unsplash.com/photo-1563565375-f4e34bd3868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80' },
    { id: 'ham', name: 'Jamón', points: 10, type: 'meat', image: 'https://images.unsplash.com/photo-1588315029478-a9ecdcc2241a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2760&q=80' },
    { id: 'onion', name: 'Cebolla', points: 10, type: 'veggie', image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'bacon', name: 'Bacon', points: 10, type: 'meat', image: 'https://images.unsplash.com/photo-1542221562-e1e93a5ea24b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'pineapple', name: 'Piña', points: 15, type: 'special', image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' },
    { id: 'jalapenos', name: 'Jalapeños', points: 15, type: 'special', image: 'https://images.unsplash.com/photo-1597227094558-2f48729f2134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80' }
  ],
  extras: [
    { id: 'drinks', name: 'Bebida', points: 20, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
    { id: 'dessert', name: 'Postre', points: 20, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80' },
    { id: 'side', name: 'Complemento', points: 20, image: 'https://images.unsplash.com/photo-1519624014191-508652cbd7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2759&q=80' }
  ]
};

// Badge rewards
const badgeRewards = [
  { 
    id: 'veggie-deluxe', 
    name: 'Pizza Veggie Deluxe', 
    condition: (selections: PizzaSelections) => {
      const veggieCount = selections.ingredients.filter(ing => 
        pizzaOptions.ingredients.find(i => i.id === ing)?.type === 'veggie'
      ).length;
      return veggieCount >= 3;
    }
  },
  {
    id: 'meat-lover',
    name: 'Meat Lover',
    condition: (selections: PizzaSelections) => {
      const meatCount = selections.ingredients.filter(ing =>
        pizzaOptions.ingredients.find(i => i.id === ing)?.type === 'meat'
      ).length;
      return meatCount >= 3;
    }
  },
  {
    id: 'maestro-pizzero',
    name: 'Maestro Pizzero 🍕',
    condition: (selections: PizzaSelections) => {
      return selections.ingredients.length >= 7;
    }
  },
  {
    id: 'combo-master',
    name: 'Combo Master',
    condition: (selections: PizzaSelections) => {
      return selections.extras.length >= 2;
    }
  }
];

// Coupon rewards
const couponRewards = [
  {
    id: 'five-ingredients',
    name: '10% en tu próxima pizza',
    condition: (selections: PizzaSelections) => {
      return selections.ingredients.length >= 5;
    }
  },
  {
    id: 'full-combo',
    name: '1 complemento gratis en tu próxima compra',
    condition: (selections: PizzaSelections) => {
      return selections.extras.length === 3;
    }
  }
];

interface PizzaSelections {
  dough: string;
  sauce: string;
  ingredients: string[];
  extras: string[];
}

const initialSelections: PizzaSelections = {
  dough: '',
  sauce: '',
  ingredients: [],
  extras: []
};

const PizzaJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<PizzaSelections>(initialSelections);
  const [totalPoints, setTotalPoints] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  
  // Update earned points based on selections
  useEffect(() => {
    let points = 0;
    
    // Points for dough
    if (selections.dough) {
      const doughOption = pizzaOptions.dough.find(d => d.id === selections.dough);
      if (doughOption) points += doughOption.points;
    }
    
    // Points for sauce
    if (selections.sauce) {
      const sauceOption = pizzaOptions.sauces.find(s => s.id === selections.sauce);
      if (sauceOption) points += sauceOption.points;
    }
    
    // Points for ingredients
    selections.ingredients.forEach(ing => {
      const ingredient = pizzaOptions.ingredients.find(i => i.id === ing);
      if (ingredient) points += ingredient.points;
    });
    
    // Points for extras
    selections.extras.forEach(ext => {
      const extra = pizzaOptions.extras.find(e => e.id === ext);
      if (extra) points += extra.points;
    });
    
    // Bonus points for multiple ingredients
    if (selections.ingredients.length === 3) points += 20;
    if (selections.ingredients.length >= 5) points += 30;
    if (selections.ingredients.length >= 7) points += 50;
    
    setEarnedPoints(points);
  }, [selections]);
  
  // Check for badge rewards
  useEffect(() => {
    if (currentStep !== 4) return; // Only check on final step
    
    badgeRewards.forEach(badge => {
      if (badge.condition(selections) && !badges.includes(badge.name)) {
        setBadges(prev => [...prev, badge.name]);
        
        setTimeout(() => {
          setCurrentReward({
            title: "¡Badge desbloqueado!",
            description: `Has obtenido el badge "${badge.name}"`,
            icon: <Trophy className="h-6 w-6 text-indigo-600" />
          });
          setShowReward(true);
        }, 1500);
      }
    });
    
    // Check for coupon rewards
    couponRewards.forEach(coupon => {
      if (coupon.condition(selections) && !coupons.includes(coupon.name)) {
        setCoupons(prev => [...prev, coupon.name]);
        
        setTimeout(() => {
          setCurrentReward({
            title: "¡Cupón desbloqueado!",
            description: coupon.name,
            icon: <Gift className="h-6 w-6 text-green-600" />
          });
          setShowReward(true);
        }, 3000);
      }
    });
  }, [currentStep]);
  
  const handleNext = () => {
    // Add points when advancing steps
    if (currentStep === 0 || currentStep === 1 || currentStep === 2 || currentStep === 3) {
      setTotalPoints(prev => prev + earnedPoints);
      
      setCurrentReward({
        title: "¡Puntos ganados!",
        description: `Has ganado ${earnedPoints} puntos`,
        icon: <Star className="h-6 w-6 text-yellow-500" />
      });
      setShowReward(true);
    }
    
    setCurrentStep(currentStep + 1);
  };
  
  const handleSelectDough = (doughId: string) => {
    setSelections({ ...selections, dough: doughId });
  };
  
  const handleSelectSauce = (sauceId: string) => {
    setSelections({ ...selections, sauce: sauceId });
  };
  
  const handleToggleIngredient = (ingredientId: string) => {
    if (selections.ingredients.includes(ingredientId)) {
      setSelections({
        ...selections,
        ingredients: selections.ingredients.filter(id => id !== ingredientId)
      });
    } else {
      setSelections({
        ...selections,
        ingredients: [...selections.ingredients, ingredientId]
      });
    }
  };
  
  const handleToggleExtra = (extraId: string) => {
    if (selections.extras.includes(extraId)) {
      setSelections({
        ...selections,
        extras: selections.extras.filter(id => id !== extraId)
      });
    } else {
      setSelections({
        ...selections,
        extras: [...selections.extras, extraId]
      });
    }
  };
  
  // Compute progress percentage
  const steps = ['dough', 'sauce', 'ingredients', 'extras', 'result'];
  const progress = Math.min((currentStep / (steps.length - 1)) * 100, 100);
  
  return (
    <JourneyLayout
      title="Creador de Pizza con lógica gamificada"
      subtitle="Personaliza tu pizza y obtén recompensas por cada ingrediente"
      bgColor="bg-gradient-to-br from-orange-500 to-red-700"
    >
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Progress and rewards */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu progreso</CardTitle>
                  <CardDescription>Personaliza tu pizza paso a paso</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressBar 
                    progress={Math.round(progress)} 
                    label={`Creación de pizza`} 
                    color="bg-gradient-to-r from-orange-500 to-red-500"
                  />
                  
                  <div className="mt-4 space-y-3">
                    {steps.map((step, index) => (
                      <div 
                        key={index}
                        className={`flex items-center ${
                          currentStep === index ? 'text-orange-600 font-medium' : 
                          currentStep > index ? 'text-green-600' : 'text-gray-400'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm ${
                          currentStep === index ? 'bg-orange-100 text-orange-600 border border-orange-300' : 
                          currentStep > index ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {currentStep > index ? <CheckCircle className="h-4 w-4" /> : index + 1}
                        </div>
                        <span className="capitalize">{step === 'result' ? 'Tu pizza' : step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Points earned this step */}
              {currentStep < 4 && (
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-orange-800">Puntos en este paso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-800">{earnedPoints}</div>
                    
                    {currentStep === 2 && (
                      <div className="mt-2 space-y-2 text-sm text-orange-700">
                        <div className="flex justify-between">
                          <span>Ingredientes básicos:</span>
                          <span>+10 c/u</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ingredientes especiales:</span>
                          <span>+15 c/u</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bonus 3 ingredientes:</span>
                          <span>+20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bonus 5 ingredientes:</span>
                          <span>+30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bonus 7 ingredientes:</span>
                          <span>+50</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
              
              {/* Total accumulated rewards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <RewardCard
                  title="Puntos acumulados"
                  value={totalPoints}
                  icon={<Star className="h-5 w-5 text-yellow-300" />}
                  bgColor="bg-gradient-to-br from-orange-600 to-red-700"
                />
                
                <RewardCard
                  title="Badges"
                  value={badges.length}
                  icon={<Trophy className="h-5 w-5 text-amber-500" />}
                  bgColor="bg-gradient-to-br from-amber-500 to-yellow-600"
                />
                
                <RewardCard
                  title="Cupones"
                  value={coupons.length}
                  icon={<Gift className="h-5 w-5 text-green-500" />}
                  bgColor="bg-gradient-to-br from-red-600 to-pink-700"
                />
              </div>
              
              {/* Pizza preview */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Tu pizza</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-br from-amber-100 to-orange-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-40 h-40 rounded-full ${selections.dough ? 'bg-amber-300' : 'bg-gray-200'} relative`}>
                        {/* Sauce visualization */}
                        {selections.sauce && (
                          <div className="absolute inset-2 rounded-full bg-red-500"></div>
                        )}
                        
                        {/* Simple ingredient visualization */}
                        {selections.ingredients.length > 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-32 h-32">
                              {selections.ingredients.includes('cheese') && (
                                <div className="absolute inset-4 rounded-full bg-yellow-100"></div>
                              )}
                              {selections.ingredients.includes('pepperoni') && (
                                <>
                                  <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-red-600"></div>
                                  <div className="absolute top-10 right-8 w-4 h-4 rounded-full bg-red-600"></div>
                                  <div className="absolute bottom-8 left-10 w-4 h-4 rounded-full bg-red-600"></div>
                                </>
                              )}
                              {selections.ingredients.includes('mushrooms') && (
                                <>
                                  <div className="absolute top-8 right-6 w-3 h-3 rounded-full bg-gray-600"></div>
                                  <div className="absolute bottom-6 right-10 w-3 h-3 rounded-full bg-gray-600"></div>
                                </>
                              )}
                              {selections.ingredients.includes('bell-peppers') && (
                                <>
                                  <div className="absolute top-14 left-14 w-3 h-3 rounded-full bg-green-500"></div>
                                  <div className="absolute bottom-10 right-6 w-3 h-3 rounded-full bg-green-500"></div>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Extras visualization */}
                    {selections.extras.length > 0 && (
                      <div className="absolute bottom-0 right-0 p-2 flex gap-2">
                        {selections.extras.includes('drinks') && (
                          <div className="w-8 h-12 bg-blue-500 rounded"></div>
                        )}
                        {selections.extras.includes('dessert') && (
                          <div className="w-8 h-8 bg-brown-400 rounded"></div>
                        )}
                        {selections.extras.includes('side') && (
                          <div className="w-10 h-6 bg-yellow-400 rounded"></div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Selected items list */}
                  <div className="mt-4 space-y-2 text-sm">
                    {selections.dough && (
                      <div className="flex justify-between">
                        <span>Masa:</span>
                        <span>{pizzaOptions.dough.find(d => d.id === selections.dough)?.name}</span>
                      </div>
                    )}
                    
                    {selections.sauce && (
                      <div className="flex justify-between">
                        <span>Salsa:</span>
                        <span>{pizzaOptions.sauces.find(s => s.id === selections.sauce)?.name}</span>
                      </div>
                    )}
                    
                    {selections.ingredients.length > 0 && (
                      <div className="flex justify-between">
                        <span>Ingredientes:</span>
                        <span>{selections.ingredients.length}</span>
                      </div>
                    )}
                    
                    {selections.extras.length > 0 && (
                      <div className="flex justify-between">
                        <span>Extras:</span>
                        <span>{selections.extras.length}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2">
            <Card className="border shadow-lg">
              {currentStep === 0 ? (
                <>
                  <CardHeader>
                    <CardTitle>Elige tu masa</CardTitle>
                    <CardDescription>La base perfecta para una pizza extraordinaria</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pizzaOptions.dough.map(dough => (
                        <div 
                          key={dough.id}
                          onClick={() => handleSelectDough(dough.id)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                            selections.dough === dough.id 
                              ? 'ring-2 ring-orange-500 border-orange-500' 
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="h-36 overflow-hidden">
                            <img 
                              src={dough.image} 
                              alt={dough.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <div className="font-medium">{dough.name}</div>
                            <div className="flex justify-between mt-2">
                              <span className="flex items-center text-sm text-orange-600">
                                <Star className="h-4 w-4 mr-1" />
                                <span>+{dough.points} puntos</span>
                              </span>
                              {selections.dough === dough.id && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={!selections.dough}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Siguiente: Salsa
                    </Button>
                  </CardFooter>
                </>
              ) : currentStep === 1 ? (
                <>
                  <CardHeader>
                    <CardTitle>Selecciona tu salsa</CardTitle>
                    <CardDescription>El sabor que lo une todo</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pizzaOptions.sauces.map(sauce => (
                        <div 
                          key={sauce.id}
                          onClick={() => handleSelectSauce(sauce.id)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                            selections.sauce === sauce.id 
                              ? 'ring-2 ring-orange-500 border-orange-500' 
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="h-36 overflow-hidden">
                            <img 
                              src={sauce.image} 
                              alt={sauce.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <div className="font-medium">{sauce.name}</div>
                            <div className="flex justify-between mt-2">
                              <span className="flex items-center text-sm text-orange-600">
                                <Star className="h-4 w-4 mr-1" />
                                <span>+{sauce.points} puntos</span>
                              </span>
                              {selections.sauce === sauce.id && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={!selections.sauce}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Siguiente: Ingredientes
                    </Button>
                  </CardFooter>
                </>
              ) : currentStep === 2 ? (
                <>
                  <CardHeader>
                    <CardTitle>Selecciona ingredientes</CardTitle>
                    <CardDescription>Personaliza tu pizza con los mejores ingredientes</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h3 className="font-medium text-amber-800 mb-1">Bonificaciones:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          selections.ingredients.length >= 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-white">
                            {selections.ingredients.length >= 3 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <span className="text-xs">3</span>
                            )}
                          </div>
                          <span className="text-sm">+20 puntos</span>
                        </div>
                        
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          selections.ingredients.length >= 5 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-white">
                            {selections.ingredients.length >= 5 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <span className="text-xs">5</span>
                            )}
                          </div>
                          <span className="text-sm">+30 puntos + cupón</span>
                        </div>
                        
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          selections.ingredients.length >= 7 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-white">
                            {selections.ingredients.length >= 7 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <span className="text-xs">7</span>
                            )}
                          </div>
                          <span className="text-sm">+50 puntos + badge</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {pizzaOptions.ingredients.map(ingredient => (
                        <div 
                          key={ingredient.id}
                          onClick={() => handleToggleIngredient(ingredient.id)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                            selections.ingredients.includes(ingredient.id) 
                              ? 'ring-2 ring-orange-500 border-orange-500' 
                              : 'hover:border-orange-200 hover:bg-orange-50'
                          }`}
                        >
                          <div className="h-24 overflow-hidden">
                            <img 
                              src={ingredient.image} 
                              alt={ingredient.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <div className="font-medium text-sm">{ingredient.name}</div>
                            <div className="flex justify-between mt-1">
                              <span className="flex items-center text-xs text-orange-600">
                                <Star className="h-3 w-3 mr-1" />
                                <span>+{ingredient.points}</span>
                              </span>
                              {selections.ingredients.includes(ingredient.id) && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={selections.ingredients.length === 0}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Siguiente: Extras
                    </Button>
                  </CardFooter>
                </>
              ) : currentStep === 3 ? (
                <>
                  <CardHeader>
                    <CardTitle>Combo de bebidas y postres</CardTitle>
                    <CardDescription>Completa tu pedido con estos extras</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-medium text-blue-800 mb-2">Combo detectado</h3>
                      <div className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                        selections.extras.length >= 2 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Gift className="h-4 w-4" />
                        <span className="text-sm">
                          {selections.extras.length >= 2 
                            ? '¡Combo detectado! +15 puntos extra y badge "Combo Master"' 
                            : 'Selecciona al menos 2 extras para un combo'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pizzaOptions.extras.map(extra => (
                        <div 
                          key={extra.id}
                          onClick={() => handleToggleExtra(extra.id)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                            selections.extras.includes(extra.id) 
                              ? 'ring-2 ring-orange-500 border-orange-500' 
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="h-36 overflow-hidden">
                            <img 
                              src={extra.image} 
                              alt={extra.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <div className="font-medium">{extra.name}</div>
                            <div className="flex justify-between mt-2">
                              <span className="flex items-center text-sm text-orange-600">
                                <Star className="h-4 w-4 mr-1" />
                                <span>+{extra.points} puntos</span>
                              </span>
                              {selections.extras.includes(extra.id) && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Finalizar pizza
                    </Button>
                  </CardFooter>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Pizza className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    ¡Tu pizza legendaria está lista! 🍕✨
                  </h2>
                  
                  <div className="relative h-32 mx-auto w-32 mb-8">
                    <div className={`w-32 h-32 rounded-full bg-amber-300 relative`}>
                      {/* Sauce visualization */}
                      {selections.sauce && (
                        <div className="absolute inset-2 rounded-full bg-red-500"></div>
                      )}
                      
                      {/* Simple ingredient visualization */}
                      {selections.ingredients.length > 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-28 h-28">
                            {selections.ingredients.includes('cheese') && (
                              <div className="absolute inset-4 rounded-full bg-yellow-100"></div>
                            )}
                            {selections.ingredients.includes('pepperoni') && (
                              <>
                                <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-red-600"></div>
                                <div className="absolute top-10 right-8 w-3 h-3 rounded-full bg-red-600"></div>
                                <div className="absolute bottom-8 left-10 w-3 h-3 rounded-full bg-red-600"></div>
                              </>
                            )}
                            {selections.ingredients.includes('mushrooms') && (
                              <>
                                <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-gray-600"></div>
                                <div className="absolute bottom-6 right-10 w-2 h-2 rounded-full bg-gray-600"></div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-lg p-6 mb-6">
                    <p className="text-lg font-medium text-orange-800 mb-3">
                      Resumen
                    </p>
                    
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-left mb-4">
                      <div className="font-medium">Masa:</div>
                      <div>{pizzaOptions.dough.find(d => d.id === selections.dough)?.name}</div>
                      
                      <div className="font-medium">Salsa:</div>
                      <div>{pizzaOptions.sauces.find(s => s.id === selections.sauce)?.name}</div>
                      
                      <div className="font-medium">Ingredientes:</div>
                      <div>{selections.ingredients.length}</div>
                      
                      <div className="font-medium">Extras:</div>
                      <div>{selections.extras.length}</div>
                    </div>
                    
                    <div className="border-t border-orange-200 pt-4 mb-4">
                      <div className="text-center mb-2">
                        <span className="text-lg font-bold text-orange-800">
                          {totalPoints} puntos obtenidos
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-2">
                        {badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            text={badge} 
                            color="bg-amber-100 text-amber-800" 
                            icon={<Trophy className="h-3 w-3" />}
                          />
                        ))}
                      </div>
                      
                      {coupons.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {coupons.map((coupon, index) => (
                            <Badge 
                              key={index} 
                              text={coupon} 
                              color="bg-green-100 text-green-800" 
                              icon={<Gift className="h-3 w-3" />}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setCurrentStep(0);
                        setSelections(initialSelections);
                        setTotalPoints(0);
                        setBadges([]);
                        setCoupons([]);
                      }}
                    >
                      Crear nueva pizza
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Ordenar ahora
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
      
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

export default PizzaJourney;
