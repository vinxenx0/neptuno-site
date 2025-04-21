
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardCard from '@/components/journey/RewardCard';
import RewardPopup from '@/components/journey/RewardPopup';
import { Pizza, ChevronRight, Clock, MapPin, Home, ArrowRight, Star, Check } from "lucide-react";

// Pizza options
const bases = [
  { id: "clasica", name: "Clásica", price: 8.99, points: 5, description: "Masa tradicional de borde grueso" },
  { id: "fina", name: "Fina", price: 8.99, points: 5, description: "Masa crujiente extrafina" },
  { id: "integral", name: "Integral", price: 9.99, points: 8, description: "Masa de harina integral" },
  { id: "singluten", name: "Sin gluten", price: 10.99, points: 10, description: "Especial para celíacos" },
];

const sauces = [
  { id: "tomate", name: "Tomate", price: 0, points: 2, description: "Salsa de tomate casera" },
  { id: "bbq", name: "Barbacoa", price: 1, points: 3, description: "Salsa BBQ ahumada" },
  { id: "carbonara", name: "Carbonara", price: 1.5, points: 3, description: "Cremosa salsa blanca" },
  { id: "pesto", name: "Pesto", price: 2, points: 5, description: "Pesto de albahaca fresca" },
];

const cheeses = [
  { id: "mozzarella", name: "Mozzarella", price: 0, points: 2, description: "El clásico queso para pizza" },
  { id: "cheddar", name: "Cheddar", price: 1, points: 3, description: "Queso fuerte de sabor intenso" },
  { id: "gouda", name: "Gouda", price: 1.5, points: 3, description: "Suave y ligeramente dulce" },
  { id: "azul", name: "Queso azul", price: 2, points: 5, description: "Intenso queso de venas azules" },
];

const toppings = [
  { id: "jamon", name: "Jamón", price: 1.50, points: 3, description: "Jamón cocido en dados" },
  { id: "pepperoni", name: "Pepperoni", price: 1.50, points: 3, description: "Rodajas de pepperoni picante" },
  { id: "champinones", name: "Champiñones", price: 1.00, points: 2, description: "Champiñones laminados" },
  { id: "aceitunas", name: "Aceitunas", price: 1.00, points: 2, description: "Aceitunas negras" },
  { id: "pimiento", name: "Pimiento", price: 1.00, points: 2, description: "Pimiento rojo en tiras" },
  { id: "cebolla", name: "Cebolla", price: 0.75, points: 1, description: "Cebolla roja en aros" },
  { id: "pina", name: "Piña", price: 1.25, points: 2, description: "Piña en dados" },
  { id: "atun", name: "Atún", price: 1.50, points: 3, description: "Atún en conserva" },
  { id: "bacon", name: "Bacon", price: 1.75, points: 4, description: "Bacon crujiente en tiras" },
  { id: "maiz", name: "Maíz", price: 0.75, points: 1, description: "Granos de maíz dulce" },
];

const PizzaJourney: React.FC = () => {
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBase, setSelectedBase] = useState<string>("");
  const [selectedSauce, setSelectedSauce] = useState<string>("");
  const [selectedCheese, setSelectedCheese] = useState<string>("");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [extraIndications, setExtraIndications] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [showReward, setShowReward] = useState<boolean>(false);
  const [currentReward, setCurrentReward] = useState<{ title: string; points: number }>({
    title: "", points: 0
  });
  const [progress, setProgress] = useState<number>(0);
  const [deliveryMethod, setDeliveryMethod] = useState<string>(""); // "delivery" or "pickup"
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
  });
  const [coupon, setCoupon] = useState<string>("");
  const [pointsToRedeem, setPointsToRedeem] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  
  // Calculate price
  const calculatePrice = () => {
    let price = 0;
    
    if (selectedBase) {
      const base = bases.find(b => b.id === selectedBase);
      if (base) price += base.price;
    }
    
    if (selectedSauce) {
      const sauce = sauces.find(s => s.id === selectedSauce);
      if (sauce) price += sauce.price;
    }
    
    if (selectedCheese) {
      const cheese = cheeses.find(c => c.id === selectedCheese);
      if (cheese) price += cheese.price;
    }
    
    selectedToppings.forEach(toppingId => {
      const topping = toppings.find(t => t.id === toppingId);
      if (topping) price += topping.price;
    });
    
    // Add delivery fee if applicable
    if (deliveryMethod === "delivery") {
      price += 2.50;
    }
    
    // Apply coupon discount
    if (couponApplied) {
      price = price * 0.9; // 10% off
    }
    
    // Apply points discount (each point = 0.10€)
    price -= pointsToRedeem * 0.10;
    
    return Math.max(price, 0);
  };
  
  // Calculate total points earned
  const calculatePointsEarned = () => {
    let earnedPoints = 0;
    
    if (selectedBase) {
      const base = bases.find(b => b.id === selectedBase);
      if (base) earnedPoints += base.points;
    }
    
    if (selectedSauce) {
      const sauce = sauces.find(s => s.id === selectedSauce);
      if (sauce) earnedPoints += sauce.points;
    }
    
    if (selectedCheese) {
      const cheese = cheeses.find(c => c.id === selectedCheese);
      if (cheese) earnedPoints += cheese.points;
    }
    
    selectedToppings.forEach(toppingId => {
      const topping = toppings.find(t => t.id === toppingId);
      if (topping) earnedPoints += topping.points;
    });
    
    // Bonus points for selecting 3 or more toppings
    if (selectedToppings.length >= 3) {
      earnedPoints += 5;
    }
    
    return earnedPoints;
  };
  
  // Update progress
  useEffect(() => {
    let newProgress = 0;
    
    switch (currentStep) {
      case 1:
        newProgress = selectedBase ? 20 : 0;
        break;
      case 2:
        newProgress = 20 + (selectedSauce ? 15 : 0);
        break;
      case 3:
        newProgress = 35 + (selectedCheese ? 15 : 0);
        break;
      case 4:
        newProgress = 50 + Math.min(selectedToppings.length * 5, 25);
        break;
      case 5:
        newProgress = 75 + (deliveryMethod ? 10 : 0);
        break;
      case 6:
        // Check if customer details are filled
        const detailsFilled = customerDetails.name && customerDetails.phone &&
          (deliveryMethod === "pickup" || (customerDetails.address && customerDetails.postalCode));
        newProgress = 85 + (detailsFilled ? 15 : 0);
        break;
    }
    
    setProgress(newProgress);
  }, [
    currentStep, selectedBase, selectedSauce, 
    selectedCheese, selectedToppings, 
    deliveryMethod, customerDetails
  ]);
  
  const handleNextStep = () => {
    if (currentStep === 1 && !selectedBase) {
      toast({
        title: "Selecciona una base",
        description: "Debes seleccionar una base para tu pizza.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 2 && !selectedSauce) {
      toast({
        title: "Selecciona una salsa",
        description: "Debes seleccionar una salsa para tu pizza.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 3 && !selectedCheese) {
      toast({
        title: "Selecciona un queso",
        description: "Debes seleccionar un queso para tu pizza.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 5 && !deliveryMethod) {
      toast({
        title: "Selecciona método de entrega",
        description: "Debes seleccionar si quieres entrega a domicilio o recoger en tienda.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 6) {
      if (!customerDetails.name || !customerDetails.phone) {
        toast({
          title: "Información incompleta",
          description: "Debes proporcionar tu nombre y teléfono.",
          variant: "destructive",
        });
        return;
      }
      
      if (deliveryMethod === "delivery" && (!customerDetails.address || !customerDetails.postalCode)) {
        toast({
          title: "Dirección incompleta",
          description: "Debes proporcionar tu dirección completa para la entrega.",
          variant: "destructive",
        });
        return;
      }
      
      // Place order
      finishOrder();
      return;
    }
    
    // Award points when moving to next steps
    if (currentStep === 1 && selectedBase) {
      const base = bases.find(b => b.id === selectedBase);
      awardPointsWithPopup(`¡Base ${base?.name} seleccionada!`, base?.points || 0);
    }
    
    if (currentStep === 2 && selectedSauce) {
      const sauce = sauces.find(s => s.id === selectedSauce);
      awardPointsWithPopup(`¡Salsa ${sauce?.name} añadida!`, sauce?.points || 0);
    }
    
    if (currentStep === 3 && selectedCheese) {
      const cheese = cheeses.find(c => c.id === selectedCheese);
      awardPointsWithPopup(`¡Queso ${cheese?.name} añadido!`, cheese?.points || 0);
    }
    
    if (currentStep === 4) {
      if (selectedToppings.length > 0) {
        awardPointsWithPopup("¡Toppings seleccionados!", 5);
      }
      
      // Bonus for 3 or more toppings
      if (selectedToppings.length >= 3) {
        setTimeout(() => {
          awardPointsWithPopup("¡Bonus por variedad!", 5);
        }, 1500);
      }
    }
    
    setCurrentStep(currentStep + 1);
  };
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const toggleTopping = (toppingId: string) => {
    setSelectedToppings(prev => {
      if (prev.includes(toppingId)) {
        return prev.filter(id => id !== toppingId);
      } else {
        return [...prev, toppingId];
      }
    });
  };
  
  const awardPointsWithPopup = (title: string, pts: number) => {
    setPoints(prev => prev + pts);
    setCurrentReward({
      title,
      points: pts
    });
    setShowReward(true);
  };
  
  const finishOrder = () => {
    const earnedPoints = calculatePointsEarned();
    awardPointsWithPopup("¡Pedido completo!", earnedPoints);
    setProgress(100);
    setShowPreview(true);
    
    toast({
      title: "¡Pedido realizado con éxito!",
      description: `Recibirás tu pizza ${deliveryMethod === "delivery" ? "en tu dirección" : "en tienda"} en breve.`,
    });
  };
  
  const applyCoupon = () => {
    // Simple coupon validation
    const validCoupons = ["PIZZA10", "NEPTUNO20", "GAMIFICA15"];
    
    if (validCoupons.includes(coupon.toUpperCase())) {
      setCouponApplied(true);
      toast({
        title: "Cupón aplicado",
        description: "10% de descuento añadido a tu pedido.",
      });
      
      // Award points for using a coupon
      awardPointsWithPopup("¡Cupón aplicado!", 5);
    } else {
      toast({
        title: "Cupón inválido",
        description: "El código introducido no es válido.",
        variant: "destructive",
      });
    }
  };
  
  const redeemPoints = () => {
    if (points < pointsToRedeem) {
      toast({
        title: "Puntos insuficientes",
        description: `Sólo tienes ${points} puntos disponibles.`,
        variant: "destructive",
      });
      return;
    }
    
    setPoints(prev => prev - pointsToRedeem);
    
    toast({
      title: "Puntos canjeados",
      description: `Has canjeado ${pointsToRedeem} puntos por ${(pointsToRedeem * 0.10).toFixed(2)}€ de descuento.`,
    });
  };
  
  const resetOrder = () => {
    setCurrentStep(1);
    setSelectedBase("");
    setSelectedSauce("");
    setSelectedCheese("");
    setSelectedToppings([]);
    setExtraIndications("");
    setShowPreview(false);
    setDeliveryMethod("");
    setCustomerDetails({
      name: "",
      phone: "",
      address: "",
      postalCode: "",
    });
    setCoupon("");
    setPointsToRedeem(0);
    setCouponApplied(false);
  };
  
  return (
    <JourneyLayout journeyTitle="Pizzería con lógica gamificada" progress={progress} currentPoints={points}>
      <div className="max-w-5xl mx-auto">
        {!showPreview ? (
          <div className="grid md:grid-cols-4 gap-6">
            {/* Left sidebar with steps */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="font-medium text-lg mb-4">Tu pizza</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">1</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Base</h3>
                      {selectedBase && (
                        <p className="text-xs text-gray-500">
                          {bases.find(b => b.id === selectedBase)?.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 2 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">2</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Salsa</h3>
                      {selectedSauce && (
                        <p className="text-xs text-gray-500">
                          {sauces.find(s => s.id === selectedSauce)?.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 3 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">3</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Queso</h3>
                      {selectedCheese && (
                        <p className="text-xs text-gray-500">
                          {cheeses.find(c => c.id === selectedCheese)?.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 4 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">4</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Ingredientes</h3>
                      {selectedToppings.length > 0 && (
                        <p className="text-xs text-gray-500">
                          {selectedToppings.length} seleccionados
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 5 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">5</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Entrega</h3>
                      {deliveryMethod && (
                        <p className="text-xs text-gray-500">
                          {deliveryMethod === "delivery" ? "A domicilio" : "Recoger en tienda"}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${currentStep >= 6 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="text-xs font-semibold">6</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Pago</h3>
                    </div>
                  </div>
                </div>
                
                {/* Price summary */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{calculatePrice().toFixed(2)}€</span>
                  </div>
                  
                  {currentStep >= 5 && deliveryMethod === "delivery" && (
                    <div className="flex justify-between text-sm mt-2">
                      <span>Envío:</span>
                      <span>2.50€</span>
                    </div>
                  )}
                  
                  {couponApplied && (
                    <div className="flex justify-between text-sm text-green-600 mt-2">
                      <span>Descuento cupón:</span>
                      <span>-10%</span>
                    </div>
                  )}
                  
                  {pointsToRedeem > 0 && (
                    <div className="flex justify-between text-sm text-green-600 mt-2">
                      <span>Descuento puntos:</span>
                      <span>-{(pointsToRedeem * 0.10).toFixed(2)}€</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-semibold mt-2 pt-2 border-t">
                    <span>Total:</span>
                    <span>{calculatePrice().toFixed(2)}€</span>
                  </div>
                  
                  <div className="flex items-center mt-2 text-xs text-yellow-600">
                    <Star size={12} className="mr-1 fill-yellow-500" />
                    <span>Ganarás {calculatePointsEarned()} puntos</span>
                  </div>
                </div>
                
                {/* Rewards */}
                {points >= 25 && currentStep >= 4 && (
                  <div className="mt-6 pt-4 border-t">
                    <RewardCard 
                      title="¡Completa tu pedido!" 
                      points={10}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-3">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  {currentStep === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Elige tu base</h2>
                      <p className="text-gray-600 mb-6">
                        Comienza seleccionando el tipo de masa para tu pizza
                      </p>
                      
                      <RadioGroup value={selectedBase} onValueChange={setSelectedBase} className="gap-4">
                        {bases.map(base => (
                          <div key={base.id} className="flex items-start space-x-2">
                            <RadioGroupItem value={base.id} id={base.id} className="mt-1" />
                            <Label htmlFor={base.id} className="flex-1 flex flex-col cursor-pointer">
                              <div className="flex justify-between">
                                <span className="font-medium">{base.name}</span>
                                <div className="flex items-center">
                                  <Badge variant="outline" className="mr-2">
                                    <Star size={12} className="mr-1 text-yellow-500 fill-yellow-500" />
                                    {base.points} pts
                                  </Badge>
                                  <span>{base.price.toFixed(2)}€</span>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{base.description}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Elige tu salsa</h2>
                      <p className="text-gray-600 mb-6">
                        Selecciona la salsa base para tu pizza
                      </p>
                      
                      <RadioGroup value={selectedSauce} onValueChange={setSelectedSauce} className="gap-4">
                        {sauces.map(sauce => (
                          <div key={sauce.id} className="flex items-start space-x-2">
                            <RadioGroupItem value={sauce.id} id={sauce.id} className="mt-1" />
                            <Label htmlFor={sauce.id} className="flex-1 flex flex-col cursor-pointer">
                              <div className="flex justify-between">
                                <span className="font-medium">{sauce.name}</span>
                                <div className="flex items-center">
                                  <Badge variant="outline" className="mr-2">
                                    <Star size={12} className="mr-1 text-yellow-500 fill-yellow-500" />
                                    {sauce.points} pts
                                  </Badge>
                                  <span>{sauce.price > 0 ? `+${sauce.price.toFixed(2)}€` : 'Incluida'}</span>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{sauce.description}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                  
                  {currentStep === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Elige tu queso</h2>
                      <p className="text-gray-600 mb-6">
                        Selecciona el tipo de queso para tu pizza
                      </p>
                      
                      <RadioGroup value={selectedCheese} onValueChange={setSelectedCheese} className="gap-4">
                        {cheeses.map(cheese => (
                          <div key={cheese.id} className="flex items-start space-x-2">
                            <RadioGroupItem value={cheese.id} id={cheese.id} className="mt-1" />
                            <Label htmlFor={cheese.id} className="flex-1 flex flex-col cursor-pointer">
                              <div className="flex justify-between">
                                <span className="font-medium">{cheese.name}</span>
                                <div className="flex items-center">
                                  <Badge variant="outline" className="mr-2">
                                    <Star size={12} className="mr-1 text-yellow-500 fill-yellow-500" />
                                    {cheese.points} pts
                                  </Badge>
                                  <span>{cheese.price > 0 ? `+${cheese.price.toFixed(2)}€` : 'Incluido'}</span>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{cheese.description}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                  
                  {currentStep === 4 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold">Elige tus ingredientes</h2>
                        {selectedToppings.length >= 3 && (
                          <Badge className="bg-green-500">
                            +5 pts por combo
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-6">
                        Selecciona los ingredientes que deseas añadir (opcional)
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {toppings.map(topping => (
                          <div key={topping.id} className="flex items-start space-x-2">
                            <Checkbox 
                              id={topping.id} 
                              checked={selectedToppings.includes(topping.id)}
                              onCheckedChange={() => toggleTopping(topping.id)}
                              className="mt-1"
                            />
                            <Label htmlFor={topping.id} className="flex-1 flex flex-col cursor-pointer">
                              <div className="flex justify-between">
                                <span className="font-medium">{topping.name}</span>
                                <div className="flex items-center">
                                  <Badge variant="outline" className="mr-2">
                                    <Star size={12} className="mr-1 text-yellow-500 fill-yellow-500" />
                                    {topping.points} pts
                                  </Badge>
                                  <span>+{topping.price.toFixed(2)}€</span>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{topping.description}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Label htmlFor="extra" className="font-medium mb-2 block">
                          Instrucciones adicionales (opcional)
                        </Label>
                        <Input
                          id="extra"
                          value={extraIndications}
                          onChange={(e) => setExtraIndications(e.target.value)}
                          placeholder="Ej: poco hecha, sin borde, etc."
                          className="max-w-md"
                        />
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 5 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Método de entrega</h2>
                      <p className="text-gray-600 mb-6">
                        Elige cómo quieres recibir tu pedido
                      </p>
                      
                      <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="gap-4">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" className="mt-1" />
                          <Label htmlFor="delivery" className="flex-1 flex flex-col cursor-pointer">
                            <div className="flex items-center">
                              <Home size={18} className="mr-2" />
                              <span className="font-medium">Entrega a domicilio</span>
                              <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">+2.50€</Badge>
                            </div>
                            <span className="text-sm text-gray-500">Recibe tu pedido en la dirección que indiques</span>
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
                          <Label htmlFor="pickup" className="flex-1 flex flex-col cursor-pointer">
                            <div className="flex items-center">
                              <MapPin size={18} className="mr-2" />
                              <span className="font-medium">Recoger en tienda</span>
                              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Gratis</Badge>
                            </div>
                            <span className="text-sm text-gray-500">Recoge tu pedido en nuestra tienda</span>
                          </Label>
                        </div>
                      </RadioGroup>
                      
                      {deliveryMethod && (
                        <div className="mt-8">
                          <h3 className="font-semibold text-lg mb-4">Información de contacto</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="mb-2 block text-sm">
                                Nombre completo *
                              </Label>
                              <Input
                                id="name"
                                value={customerDetails.name}
                                onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                                placeholder="Tu nombre"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone" className="mb-2 block text-sm">
                                Teléfono *
                              </Label>
                              <Input
                                id="phone"
                                value={customerDetails.phone}
                                onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                                placeholder="Tu teléfono"
                              />
                            </div>
                          </div>
                          
                          {deliveryMethod === "delivery" && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="md:col-span-2">
                                <Label htmlFor="address" className="mb-2 block text-sm">
                                  Dirección *
                                </Label>
                                <Input
                                  id="address"
                                  value={customerDetails.address}
                                  onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                                  placeholder="Tu dirección"
                                />
                              </div>
                              
                              <div>
                                <Label htmlFor="postal" className="mb-2 block text-sm">
                                  Código postal *
                                </Label>
                                <Input
                                  id="postal"
                                  value={customerDetails.postalCode}
                                  onChange={(e) => setCustomerDetails({...customerDetails, postalCode: e.target.value})}
                                  placeholder="Código postal"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {currentStep === 6 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Finalizar y pagar</h2>
                      <p className="text-gray-600 mb-6">
                        Revisa tu pedido y completa el pago
                      </p>
                      
                      {/* Resumen del pedido */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h3 className="font-medium mb-3">Resumen del pedido</h3>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <div className="text-gray-500">Base:</div>
                            <div>{bases.find(b => b.id === selectedBase)?.name}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Salsa:</div>
                            <div>{sauces.find(s => s.id === selectedSauce)?.name}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Queso:</div>
                            <div>{cheeses.find(c => c.id === selectedCheese)?.name}</div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <div className="text-gray-500 text-sm">Ingredientes:</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedToppings.length > 0 ? (
                              selectedToppings.map(id => (
                                <Badge key={id} variant="outline">
                                  {toppings.find(t => t.id === id)?.name}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-sm italic">Sin ingredientes adicionales</span>
                            )}
                          </div>
                        </div>
                        
                        {extraIndications && (
                          <div className="mt-3">
                            <div className="text-gray-500 text-sm">Instrucciones:</div>
                            <div className="text-sm italic">{extraIndications}</div>
                          </div>
                        )}
                        
                        <div className="mt-3">
                          <div className="text-gray-500 text-sm">Método de entrega:</div>
                          <div className="flex items-center">
                            {deliveryMethod === "delivery" ? (
                              <>
                                <Home size={16} className="mr-1" />
                                <span className="text-sm">Entrega a domicilio</span>
                              </>
                            ) : (
                              <>
                                <MapPin size={16} className="mr-1" />
                                <span className="text-sm">Recoger en tienda</span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {deliveryMethod === "delivery" && (
                          <div className="mt-3 text-sm">
                            <div className="text-gray-500">Dirección de entrega:</div>
                            <div>{customerDetails.name}</div>
                            <div>{customerDetails.address}</div>
                            <div>{customerDetails.postalCode}</div>
                            <div>Tel: {customerDetails.phone}</div>
                          </div>
                        )}
                      </div>
                      
                      {/* Cupones y puntos */}
                      <div className="border rounded-lg p-4 mb-6">
                        <h3 className="font-medium mb-3">Descuentos</h3>
                        
                        {!couponApplied ? (
                          <div className="flex space-x-2 mb-4">
                            <Input
                              value={coupon}
                              onChange={(e) => setCoupon(e.target.value)}
                              placeholder="Código de cupón"
                              className="max-w-xs"
                            />
                            <Button onClick={applyCoupon}>
                              Aplicar
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center mb-4 text-green-600">
                            <Check size={16} className="mr-1" />
                            <span>Cupón aplicado: 10% de descuento</span>
                          </div>
                        )}
                        
                        <div className="border-t pt-4">
                          <h4 className="text-sm font-medium mb-2">Tus puntos: {points}</h4>
                          {points > 0 && (
                            <div className="flex space-x-2">
                              <Input
                                type="number"
                                min="0"
                                max={points}
                                value={pointsToRedeem}
                                onChange={(e) => setPointsToRedeem(parseInt(e.target.value) || 0)}
                                placeholder="Puntos a canjear"
                                className="max-w-xs"
                              />
                              <Button onClick={redeemPoints}>
                                Canjear ({(pointsToRedeem * 0.10).toFixed(2)}€)
                              </Button>
                            </div>
                          )}
                          <p className="text-sm text-gray-500 mt-2">
                            Cada punto equivale a 0,10€ de descuento
                          </p>
                        </div>
                      </div>
                      
                      {/* Payment methods */}
                      <div>
                        <h3 className="font-medium mb-3">Método de pago</h3>
                        <RadioGroup defaultValue="card">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Tarjeta de crédito</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Efectivo (solo recogida en tienda)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <Button variant="outline" onClick={handlePreviousStep}>
                        Atrás
                      </Button>
                    )}
                    <Button 
                      onClick={handleNextStep}
                      className={`ml-auto ${currentStep === 6 ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    >
                      {currentStep === 6 ? 'Realizar pedido' : 'Continuar'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">¡Pedido realizado con éxito!</h2>
            <p className="text-gray-600 mb-6">
              Gracias por tu pedido. Hemos enviado una confirmación a tu teléfono.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Detalles del pedido</h3>
                <Badge>Pedido #12345</Badge>
              </div>
              
              <div className="text-sm text-left">
                <div className="flex justify-between py-1 border-b">
                  <span>Pizza {bases.find(b => b.id === selectedBase)?.name}</span>
                  <span>{bases.find(b => b.id === selectedBase)?.price.toFixed(2)}€</span>
                </div>
                
                {selectedSauce && sauces.find(s => s.id === selectedSauce)?.price > 0 && (
                  <div className="flex justify-between py-1 border-b">
                    <span>Salsa {sauces.find(s => s.id === selectedSauce)?.name}</span>
                    <span>{sauces.find(s => s.id === selectedSauce)?.price.toFixed(2)}€</span>
                  </div>
                )}
                
                {selectedCheese && cheeses.find(c => c.id === selectedCheese)?.price > 0 && (
                  <div className="flex justify-between py-1 border-b">
                    <span>Queso {cheeses.find(c => c.id === selectedCheese)?.name}</span>
                    <span>{cheeses.find(c => c.id === selectedCheese)?.price.toFixed(2)}€</span>
                  </div>
                )}
                
                {selectedToppings.map(toppingId => {
                  const topping = toppings.find(t => t.id === toppingId);
                  return topping && (
                    <div key={toppingId} className="flex justify-between py-1 border-b">
                      <span>{topping.name}</span>
                      <span>{topping.price.toFixed(2)}€</span>
                    </div>
                  );
                })}
                
                {deliveryMethod === "delivery" && (
                  <div className="flex justify-between py-1 border-b">
                    <span>Entrega a domicilio</span>
                    <span>2.50€</span>
                  </div>
                )}
                
                {couponApplied && (
                  <div className="flex justify-between py-1 border-b text-green-600">
                    <span>Descuento cupón (10%)</span>
                    <span>-{(calculatePrice() * 0.1).toFixed(2)}€</span>
                  </div>
                )}
                
                {pointsToRedeem > 0 && (
                  <div className="flex justify-between py-1 border-b text-green-600">
                    <span>Descuento puntos ({pointsToRedeem} pts)</span>
                    <span>-{(pointsToRedeem * 0.10).toFixed(2)}€</span>
                  </div>
                )}
                
                <div className="flex justify-between py-2 font-medium">
                  <span>Total</span>
                  <span>{calculatePrice().toFixed(2)}€</span>
                </div>
                
                <div className="mt-3 flex items-center justify-center text-yellow-600">
                  <Star size={16} className="mr-1 fill-yellow-500" />
                  <span>Has ganado {calculatePointsEarned()} puntos</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <Clock size={20} className="mr-2 text-gray-600" />
              <span className="text-lg">
                Tiempo estimado de {deliveryMethod === "delivery" ? "entrega" : "recogida"}: 35-45 minutos
              </span>
            </div>
            
            <Button onClick={resetOrder} className="mr-4" variant="outline">
              Volver al inicio
            </Button>
            
            <Button onClick={resetOrder} className="bg-green-600 hover:bg-green-700">
              Hacer otro pedido
            </Button>
          </div>
        )}
      </div>
      
      <RewardPopup 
        title={currentReward.title} 
        points={currentReward.points}
        open={showReward}
        onClose={() => setShowReward(false)}
      />
    </JourneyLayout>
  );
};

export default PizzaJourney;
