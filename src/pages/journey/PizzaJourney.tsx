
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Beef, Check, ChevronRight, CookingPot, 
  Home, Leaf, MapPin, ShoppingBasket, Truck, Utensils
} from 'lucide-react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardCard from '@/components/journey/RewardCard';
import RewardPopup from '@/components/journey/RewardPopup';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const SIZES = [
  { name: "Pequeña", price: 8.95 },
  { name: "Mediana", price: 12.95 },
  { name: "Grande", price: 15.95 },
  { name: "Familiar", price: 19.95 },
];

const CRUSTS = [
  { name: "Fina", price: 0 },
  { name: "Normal", price: 0 },
  { name: "Pan", price: 1.5 },
  { name: "Borde de queso", price: 2.5 },
];

const SAUCES = [
  { name: "Tomate", price: 0 },
  { name: "BBQ", price: 0.75 },
  { name: "Crema fresca", price: 0.75 },
  { name: "Pesto", price: 1.25 },
];

const TOPPINGS = [
  { name: "Mozzarella extra", emoji: "🧀", price: 1.5 },
  { name: "Pepperoni", emoji: "🍕", price: 1.75 },
  { name: "Champiñones", emoji: "🍄", price: 1.25 },
  { name: "Bacon", emoji: "🥓", price: 1.75 },
  { name: "Pollo", emoji: "🍗", price: 1.75 },
  { name: "Cebolla", emoji: "🧅", price: 1 },
  { name: "Pimientos", emoji: "🌶️", price: 1 },
  { name: "Aceitunas", emoji: "🫒", price: 1.25 },
  { name: "Piña", emoji: "🍍", price: 1.25 },
  { name: "Maíz", emoji: "🌽", price: 1 },
  { name: "Atún", emoji: "🐟", price: 1.75 },
  { name: "Jamón", emoji: "🍖", price: 1.75 },
];

const DELIVERY_OPTIONS = [
  { name: "Recoger en tienda", emoji: "🏬", price: 0 },
  { name: "Envío a domicilio", emoji: "🛵", price: 2.95 },
];

interface PizzaSelection {
  size: string;
  crust: string;
  sauce: string;
  toppings: string[];
  delivery: string;
  notes: string;
}

interface PaymentInfo {
  name: string;
  phone: string;
  address: string;
  coupon: string;
  pointsToUse: number;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
}

const PizzaJourney = () => {
  const [step, setStep] = useState(1);
  const [points, setPoints] = useState(15);
  const [selection, setSelection] = useState<PizzaSelection>({
    size: "Mediana",
    crust: "Normal",
    sauce: "Tomate",
    toppings: [],
    delivery: "",
    notes: "",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    name: "",
    phone: "",
    address: "",
    coupon: "",
    pointsToUse: 0,
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });
  const [showReward, setShowReward] = useState(false);
  const [lastReward, setLastReward] = useState({ title: "", points: 0 });
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  
  // Calcular precio
  const calculatePrice = () => {
    let price = 0;
    // Tamaño
    price += SIZES.find(s => s.name === selection.size)?.price || 0;
    // Masa
    price += CRUSTS.find(c => c.name === selection.crust)?.price || 0;
    // Salsa
    price += SAUCES.find(s => s.name === selection.sauce)?.price || 0;
    // Ingredientes
    price += selection.toppings.reduce((acc, topping) => {
      return acc + (TOPPINGS.find(t => t.name === topping)?.price || 0);
    }, 0);
    // Envío
    price += DELIVERY_OPTIONS.find(d => d.name === selection.delivery)?.price || 0;
    
    // Descuento por cupón
    if (appliedCoupon === "NEPTUNO10") {
      price = price * 0.9; // 10% de descuento
    } else if (appliedCoupon === "PIZZA5") {
      price = Math.max(0, price - 5); // 5€ de descuento
    }
    
    // Descuento por puntos
    const pointDiscount = paymentInfo.pointsToUse * 0.10; // Cada punto vale 0.10€
    price = Math.max(0, price - pointDiscount);
    
    return price.toFixed(2);
  };
  
  const handleSizeSelect = (size: string) => {
    setSelection({ ...selection, size });
    if (step === 1) {
      setTimeout(() => setStep(2), 500);
      
      // Reward for first selection
      if (!lastReward.title) {
        setLastReward({ title: "¡Primera elección!", points: 5 });
        setPoints(prev => prev + 5);
        setShowReward(true);
      }
    }
  };
  
  const handleCrustSelect = (crust: string) => {
    setSelection({ ...selection, crust });
    if (step === 2) setTimeout(() => setStep(3), 500);
  };
  
  const handleSauceSelect = (sauce: string) => {
    setSelection({ ...selection, sauce });
    if (step === 3) setTimeout(() => setStep(4), 500);
  };
  
  const handleToppingToggle = (topping: string) => {
    const newToppings = selection.toppings.includes(topping)
      ? selection.toppings.filter(t => t !== topping)
      : [...selection.toppings, topping];
    
    setSelection({ ...selection, toppings: newToppings });
    
    // Reward for selecting 3+ toppings
    if (newToppings.length === 3 && selection.toppings.length < 3) {
      setLastReward({ title: "¡Gourmet!", points: 10 });
      setPoints(prev => prev + 10);
      setShowReward(true);
    }
  };
  
  const handleDeliverySelect = (delivery: string) => {
    setSelection({ ...selection, delivery });
    setTimeout(() => setStep(6), 500);
    
    // Reward for completing the pizza
    setLastReward({ title: "¡Pizza personalizada!", points: 15 });
    setPoints(prev => prev + 15);
    setShowReward(true);
  };
  
  const proceedToCheckout = () => {
    if (!selection.delivery) {
      toast.error("Por favor selecciona un método de entrega");
      return;
    }
    setStep(6);
  };
  
  const handleSubmit = () => {
    if (paymentInfo.name && (selection.delivery === "Recoger en tienda" || paymentInfo.address)) {
      setStep(7);
      
      // Final reward for completing order
      setLastReward({ title: "¡Pedido completado!", points: 25 });
      setPoints(prev => prev + 25 - paymentInfo.pointsToUse); // Restar puntos usados
      setShowReward(true);
      
      toast.success("¡Tu pedido ha sido realizado con éxito!");
    } else {
      toast.error("Por favor completa todos los campos requeridos");
    }
  };
  
  const handlePointsChange = (value: number) => {
    if (value >= 0 && value <= points) {
      setPaymentInfo({ ...paymentInfo, pointsToUse: value });
    }
  };
  
  const applyCoupon = () => {
    if (paymentInfo.coupon === "NEPTUNO10" || paymentInfo.coupon === "PIZZA5") {
      setAppliedCoupon(paymentInfo.coupon);
      toast.success(`Cupón ${paymentInfo.coupon} aplicado correctamente`);
      setShowCouponInput(false);
    } else {
      toast.error("Cupón no válido");
    }
  };
  
  const generateCoupon = () => {
    const couponCode = "PIZZA" + Math.floor(Math.random() * 1000);
    navigator.clipboard.writeText(couponCode).catch(() => {});
    toast.success(`Cupón ${couponCode} generado y copiado al portapapeles`, {
      description: "Válido para tu próximo pedido"
    });
  };

  return (
    <JourneyLayout 
      currentPoints={points} 
      journeyTitle="Creador de Pizza con Lógica Gamificada"
      progress={step >= 7 ? 100 : (step / 7) * 100}
    >
      <div className="max-w-4xl mx-auto">
        {/* Pasos para pizza */}
        <div className="mb-6 hidden sm:flex items-center justify-between">
          <div className={`flex items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 1 ? <Check size={16} /> : 1}
            </div>
            <span className="ml-2 text-sm font-medium">Tamaño</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          
          <div className={`flex items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 2 ? <Check size={16} /> : 2}
            </div>
            <span className="ml-2 text-sm font-medium">Masa</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          
          <div className={`flex items-center ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 3 ? <Check size={16} /> : 3}
            </div>
            <span className="ml-2 text-sm font-medium">Salsa</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          
          <div className={`flex items-center ${step >= 4 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 4 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 4 ? <Check size={16} /> : 4}
            </div>
            <span className="ml-2 text-sm font-medium">Ingredientes</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          
          <div className={`flex items-center ${step >= 5 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 5 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 5 ? <Check size={16} /> : 5}
            </div>
            <span className="ml-2 text-sm font-medium">Entrega</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          
          <div className={`flex items-center ${step >= 6 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 6 ? 'border-purple-600 bg-purple-100' : 'border-gray-300'}`}>
              {step > 6 ? <Check size={16} /> : 6}
            </div>
            <span className="ml-2 text-sm font-medium">Pago</span>
          </div>
        </div>

        {/* Step indicator for mobile */}
        <div className="mb-4 sm:hidden">
          <p className="text-sm text-gray-500 mb-1">Paso {step} de 7</p>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-600 transition-all duration-500" 
              style={{ width: `${(step / 7) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Tamaño */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Selecciona el tamaño de tu pizza</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SIZES.map((size) => (
                <Button
                  key={size.name}
                  variant={selection.size === size.name ? "default" : "outline"}
                  className={`h-auto py-6 ${selection.size === size.name ? 'bg-purple-600' : ''}`}
                  onClick={() => handleSizeSelect(size.name)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold mb-1">{size.name}</span>
                    <span className="text-sm">{size.price.toFixed(2)}€</span>
                  </div>
                </Button>
              ))}
            </div>
            <div className="mt-6">
              <RewardCard title="¡Gana puntos!" description="Completa tu pedido para ganar puntos que podrás canjear por descuentos." />
            </div>
          </div>
        )}
        
        {/* Masa */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Elige tu tipo de masa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CRUSTS.map((crust) => (
                <Button
                  key={crust.name}
                  variant={selection.crust === crust.name ? "default" : "outline"}
                  className={`h-auto py-6 ${selection.crust === crust.name ? 'bg-purple-600' : ''}`}
                  onClick={() => handleCrustSelect(crust.name)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold mb-1">{crust.name}</span>
                    {crust.price > 0 && <span className="text-sm">+{crust.price.toFixed(2)}€</span>}
                    {crust.price === 0 && <span className="text-sm text-green-600">Incluido</span>}
                  </div>
                </Button>
              ))}
            </div>
            <div className="mt-6 flex">
              <Button variant="ghost" onClick={() => setStep(1)}>
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Atrás
              </Button>
            </div>
          </div>
        )}
        
        {/* Salsa */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Selecciona tu salsa base</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SAUCES.map((sauce) => (
                <Button
                  key={sauce.name}
                  variant={selection.sauce === sauce.name ? "default" : "outline"}
                  className={`h-auto py-6 ${selection.sauce === sauce.name ? 'bg-purple-600' : ''}`}
                  onClick={() => handleSauceSelect(sauce.name)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold mb-1">{sauce.name}</span>
                    {sauce.price > 0 && <span className="text-sm">+{sauce.price.toFixed(2)}€</span>}
                    {sauce.price === 0 && <span className="text-sm text-green-600">Incluido</span>}
                  </div>
                </Button>
              ))}
            </div>
            <div className="mt-6 flex">
              <Button variant="ghost" onClick={() => setStep(2)}>
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Atrás
              </Button>
            </div>
          </div>
        )}
        
        {/* Ingredientes */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Escoge tus ingredientes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOPPINGS.map((topping) => (
                <Button
                  key={topping.name}
                  variant={selection.toppings.includes(topping.name) ? "default" : "outline"}
                  className={`h-auto py-4 ${selection.toppings.includes(topping.name) ? 'bg-purple-600' : ''}`}
                  onClick={() => handleToppingToggle(topping.name)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">{topping.emoji}</span>
                    <span className="text-sm font-medium">{topping.name}</span>
                    <span className="text-xs">+{topping.price.toFixed(2)}€</span>
                  </div>
                </Button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(3)}>
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Atrás
              </Button>
              
              <Button variant="default" onClick={() => setStep(5)}>
                Continuar
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Opciones de entrega */}
        {step === 5 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">¿Cómo prefieres recibir tu pedido?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DELIVERY_OPTIONS.map((option) => (
                <Button
                  key={option.name}
                  variant={selection.delivery === option.name ? "default" : "outline"}
                  className={`h-auto py-8 ${selection.delivery === option.name ? 'bg-purple-600' : ''}`}
                  onClick={() => handleDeliverySelect(option.name)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-3">{option.emoji}</span>
                    <span className="text-lg font-bold mb-1">{option.name}</span>
                    {option.price > 0 && <span className="text-sm">+{option.price.toFixed(2)}€</span>}
                    {option.price === 0 && <span className="text-sm text-green-600">Gratuito</span>}
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-2">Notas especiales (opcional)</h3>
              <Textarea 
                placeholder="Instrucciones adicionales para tu pedido..."
                value={selection.notes}
                onChange={(e) => setSelection({ ...selection, notes: e.target.value })}
                className="mb-4"
              />
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(4)}>
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Atrás
              </Button>
            </div>
          </div>
        )}
        
        {/* Checkout */}
        {step === 6 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Finalizar pedido</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Datos de contacto</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      value={paymentInfo.name}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      value={paymentInfo.phone}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, phone: e.target.value })}
                      placeholder="Tu teléfono"
                      required
                    />
                  </div>
                  
                  {selection.delivery === "Envío a domicilio" && (
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">
                        Dirección de entrega <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="address"
                        value={paymentInfo.address}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, address: e.target.value })}
                        placeholder="Tu dirección completa"
                        required
                      />
                    </div>
                  )}
                  
                  {/* Opciones de entrega */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Método de entrega:</h4>
                    <div className="flex items-center bg-gray-50 p-3 rounded-md">
                      {selection.delivery === "Recoger en tienda" ? (
                        <>
                          <MapPin className="text-purple-500 mr-2" size={18} />
                          <div>
                            <p className="font-medium">Recoger en tienda</p>
                            <p className="text-xs text-gray-500">Listo en aprox. 20 minutos</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Truck className="text-purple-500 mr-2" size={18} />
                          <div>
                            <p className="font-medium">Envío a domicilio</p>
                            <p className="text-xs text-gray-500">Entrega en aprox. 30-45 minutos</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mt-8 mb-4">Método de pago</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Número de tarjeta <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                      placeholder="0000 0000 0000 0000"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">
                        Caducidad <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="cardExpiry"
                        value={paymentInfo.cardExpiry}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardExpiry: e.target.value })}
                        placeholder="MM/AA"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCVC" className="block text-sm font-medium mb-1">
                        CVC <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="cardCVC"
                        value={paymentInfo.cardCVC}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardCVC: e.target.value })}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              <div>
                <Card className="p-6 mb-6">
                  <h3 className="text-lg font-bold mb-4">Resumen del pedido</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Utensils className="text-gray-400 mr-2" size={16} />
                        <span>Tamaño {selection.size}</span>
                      </div>
                      <span className="font-medium">
                        {SIZES.find(s => s.name === selection.size)?.price.toFixed(2)}€
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <CookingPot className="text-gray-400 mr-2" size={16} />
                        <span>Masa {selection.crust}</span>
                      </div>
                      <span className="font-medium">
                        {CRUSTS.find(c => c.name === selection.crust)?.price.toFixed(2) === "0.00" 
                          ? "Incluido" 
                          : `+${CRUSTS.find(c => c.name === selection.crust)?.price.toFixed(2)}€`
                        }
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Beef className="text-gray-400 mr-2" size={16} />
                        <span>Salsa {selection.sauce}</span>
                      </div>
                      <span className="font-medium">
                        {SAUCES.find(s => s.name === selection.sauce)?.price.toFixed(2) === "0.00" 
                          ? "Incluido" 
                          : `+${SAUCES.find(s => s.name === selection.sauce)?.price.toFixed(2)}€`
                        }
                      </span>
                    </div>
                    
                    {selection.toppings.length > 0 && (
                      <div>
                        <p className="flex items-center mb-1">
                          <Leaf className="text-gray-400 mr-2" size={16} />
                          <span>Ingredientes:</span>
                        </p>
                        {selection.toppings.map((topping) => (
                          <div key={topping} className="flex justify-between ml-6 mt-1">
                            <span>{topping}</span>
                            <span className="font-medium">
                              +{TOPPINGS.find(t => t.name === topping)?.price.toFixed(2)}€
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {selection.delivery && (
                      <div className="flex justify-between pt-2 border-t">
                        <div className="flex items-center">
                          {selection.delivery === "Recoger en tienda" ? (
                            <Home className="text-gray-400 mr-2" size={16} />
                          ) : (
                            <Truck className="text-gray-400 mr-2" size={16} />
                          )}
                          <span>{selection.delivery}</span>
                        </div>
                        <span className="font-medium">
                          {DELIVERY_OPTIONS.find(d => d.name === selection.delivery)?.price.toFixed(2) === "0.00" 
                            ? "Gratis" 
                            : `+${DELIVERY_OPTIONS.find(d => d.name === selection.delivery)?.price.toFixed(2)}€`
                          }
                        </span>
                      </div>
                    )}
                    
                    {/* Cupón y puntos */}
                    <div className="pt-3 border-t">
                      {showCouponInput ? (
                        <div className="flex items-center mb-3">
                          <Input 
                            value={paymentInfo.coupon}
                            onChange={(e) => setPaymentInfo({...paymentInfo, coupon: e.target.value})}
                            placeholder="Introduce tu código de cupón"
                            className="mr-2"
                          />
                          <Button size="sm" onClick={applyCoupon}>Aplicar</Button>
                        </div>
                      ) : appliedCoupon ? (
                        <div className="flex items-center justify-between mb-3">
                          <span className="flex items-center">
                            <Badge className="mr-2" variant="secondary">Cupón</Badge>
                            {appliedCoupon}
                          </span>
                          <span className="text-green-600 font-medium">
                            {appliedCoupon === "NEPTUNO10" ? "-10%" : "-5.00€"}
                          </span>
                        </div>
                      ) : (
                        <button 
                          className="text-sm text-purple-600 mb-3 hover:underline flex items-center"
                          onClick={() => setShowCouponInput(true)}
                        >
                          <ShoppingBasket size={16} className="mr-1" />
                          Tengo un cupón
                        </button>
                      )}
                      
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Tus puntos disponibles: <strong>{points}</strong></span>
                          <div className="flex items-center">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handlePointsChange(0)}
                              className="h-7 px-2"
                            >
                              0
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handlePointsChange(Math.floor(points / 2))}
                              className="h-7 px-2 mx-1"
                            >
                              {Math.floor(points / 2)}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handlePointsChange(points)}
                              className="h-7 px-2"
                            >
                              Todos
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="flex items-center">
                            <span>Puntos a utilizar: </span>
                            <span className="font-bold ml-1">{paymentInfo.pointsToUse}</span>
                          </span>
                          {paymentInfo.pointsToUse > 0 && (
                            <span className="text-green-600 font-medium">-{(paymentInfo.pointsToUse * 0.10).toFixed(2)}€</span>
                          )}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Cada punto = 0.10€</span>
                          <button 
                            className="text-purple-600 hover:underline"
                            onClick={generateCoupon}
                          >
                            Generar cupón en su lugar
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t text-lg font-bold">
                      <span>Total:</span>
                      <span>{calculatePrice()}€</span>
                    </div>
                  </div>
                </Card>
                
                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(5)}>
                    <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                    Atrás
                  </Button>
                  
                  <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                    Realizar pedido
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Confirmation */}
        {step === 7 && (
          <div className="animate-fade-in text-center py-12">
            <div className="bg-green-100 text-green-700 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Check size={32} />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">¡Pedido realizado con éxito!</h2>
            <p className="text-lg mb-6">
              {selection.delivery === "Recoger en tienda" 
                ? "Podrás recoger tu pedido en aproximadamente 20 minutos." 
                : "Tu pedido llegará en aproximadamente 30-45 minutos."}
            </p>
            
            <div className="max-w-md mx-auto bg-purple-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold mb-2">Resumen:</h3>
              <p className="text-sm">
                Pizza {selection.size} con masa {selection.crust}, salsa {selection.sauce}
                {selection.toppings.length > 0 && (
                  <span> y {selection.toppings.join(", ")}</span>
                )}
              </p>
            </div>
            
            <div className="mb-8">
              <p className="text-lg font-bold text-purple-600">
                ¡Has ganado {25} puntos con este pedido!
              </p>
              <p className="text-sm text-gray-600">
                {paymentInfo.pointsToUse > 0 
                  ? `Has utilizado ${paymentInfo.pointsToUse} puntos para obtener un descuento.`
                  : "Acumula puntos con cada pedido para obtener descuentos."}
              </p>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setStep(1)}>
              Hacer otro pedido
            </Button>
          </div>
        )}
      </div>
      
      {/* Reward popup */}
      <RewardPopup 
        open={showReward}
        onClose={() => setShowReward(false)}
        title={lastReward.title}
        points={lastReward.points}
      />
    </JourneyLayout>
  );
};

export default PizzaJourney;
