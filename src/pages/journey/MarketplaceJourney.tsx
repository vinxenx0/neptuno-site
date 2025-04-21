
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, Star, Tag, Clock, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardPopup from '@/components/journey/RewardPopup';
import RewardCard from '@/components/journey/RewardCard';

// Import our custom types
import { RewardPopupProps } from '@/components/journey/types';

const products = [
  {
    id: 1,
    name: "Auriculares Pro",
    category: "Electrónica",
    price: 129.99,
    discount: 0,
    rating: 4.8,
    image: "/placeholder.svg",
    bonus: 0,
    description: "Auriculares con cancelación de ruido y sonido de alta fidelidad"
  },
  {
    id: 2,
    name: "Portátil UltraSlim",
    category: "Informática",
    price: 899.99,
    discount: 10,
    rating: 4.5,
    image: "/placeholder.svg",
    bonus: 15,
    description: "Portátil ligero y potente con batería de larga duración"
  },
  {
    id: 3,
    name: "Smartwatch Fitness",
    category: "Wearables",
    price: 199.99,
    discount: 15,
    rating: 4.7,
    image: "/placeholder.svg",
    bonus: 5,
    description: "Reloj inteligente con seguimiento de actividad física y notificaciones"
  },
  {
    id: 4,
    name: "Altavoz Bluetooth",
    category: "Audio",
    price: 79.99,
    discount: 0,
    rating: 4.3,
    image: "/placeholder.svg",
    bonus: 0,
    description: "Altavoz portátil resistente al agua con graves potentes"
  },
  {
    id: 5,
    name: "Monitor Curvo 32\"",
    category: "Informática",
    price: 349.99,
    discount: 5,
    rating: 4.6,
    image: "/placeholder.svg",
    bonus: 10,
    description: "Monitor curvo 4K con tecnología HDR para una experiencia inmersiva"
  },
  {
    id: 6,
    name: "Teclado Mecánico",
    category: "Periféricos",
    price: 129.99,
    discount: 0,
    rating: 4.9,
    image: "/placeholder.svg",
    bonus: 5,
    description: "Teclado mecánico con retroiluminación RGB personalizable"
  },
];

const categories = [
  "Todas",
  "Electrónica",
  "Informática",
  "Wearables",
  "Audio",
  "Periféricos"
];

const MarketplaceJourney: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [points, setPoints] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [showReward, setShowReward] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Todas");
  const [currentReward, setCurrentReward] = useState<{ title: string; points: number }>({
    title: "", points: 0
  });
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [coupon, setCoupon] = useState<string>("");
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [showCouponField, setShowCouponField] = useState<boolean>(false);

  const { toast } = useToast();
  
  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    
    // Award points for adding to cart
    let newPoints = points + 5;
    setPoints(newPoints);
    
    // Set progress based on actions completed
    let newProgress = Math.min((cart.length + 1) * 10, 90);
    setProgress(newProgress);
    
    // Show reward popup
    setCurrentReward({
      title: "¡Producto añadido!",
      points: 5
    });
    setShowReward(true);
    
    toast({
      title: "Producto añadido",
      description: `${product.name} se ha añadido al carrito.`,
    });
    
    if (product.bonus > 0) {
      setTimeout(() => {
        setPoints(prev => prev + product.bonus);
        setCurrentReward({
          title: "¡Bonus de producto!",
          points: product.bonus
        });
        setShowReward(true);
      }, 1500);
    }
  };
  
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
    setProgress(Math.max(progress - 10, 0));
  };
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const getFilteredProducts = () => {
    if (activeTab === "Todas") return products;
    return products.filter(product => product.category === activeTab);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((sum, item) => {
      const discountedPrice = item.price * (1 - item.discount / 100);
      return sum + discountedPrice * item.quantity;
    }, 0);
  };
  
  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const applyCoupon = () => {
    // Simple example of coupon codes
    switch (coupon.toUpperCase()) {
      case "NEPTUNO10":
        setAppliedDiscount(10);
        setCouponApplied(true);
        toast({
          title: "Cupón aplicado",
          description: "10% de descuento aplicado a tu compra.",
        });
        break;
      case "GAMIFICA20":
        setAppliedDiscount(20);
        setCouponApplied(true);
        toast({
          title: "Cupón aplicado",
          description: "20% de descuento aplicado a tu compra.",
        });
        break;
      default:
        toast({
          title: "Cupón inválido",
          description: "El código introducido no es válido.",
          variant: "destructive",
        });
    }
  };

  const applyPointsDiscount = () => {
    // Each point is worth 0.10€
    const possibleDiscount = points * 0.10;
    const maxDiscount = getTotalPrice();
    
    // Don't apply more discount than the total price
    const actualDiscount = Math.min(possibleDiscount, maxDiscount);
    setAppliedDiscount(actualDiscount);
    
    // Convert the discount back to points
    const usedPoints = Math.ceil(actualDiscount / 0.10);
    setPoints(prev => prev - usedPoints);
    
    toast({
      title: "Puntos aplicados",
      description: `Has canjeado ${usedPoints} puntos por ${actualDiscount.toFixed(2)}€ de descuento.`,
    });
  };
  
  const getTotalWithDiscount = () => {
    const total = getTotalPrice();
    return total - appliedDiscount;
  };
  
  const checkout = () => {
    if (cart.length === 0) return;
    
    // Complete journey if not already done
    if (progress < 100) {
      setProgress(100);
      setPoints(prev => prev + 50);
      setCurrentReward({
        title: "¡Compra completada!",
        points: 50
      });
      setShowReward(true);
    }
    
    toast({
      title: "¡Compra completada!",
      description: `Has completado tu compra por ${getTotalWithDiscount().toFixed(2)}€.`,
    });
    
    // Reset cart and checkout
    setCart([]);
    setShowCheckout(false);
    setAppliedDiscount(0);
    setCoupon("");
    setCouponApplied(false);
  };

  return (
    <JourneyLayout journeyTitle="Marketplace con recompensas por sinergias" progress={progress} currentPoints={points}>
      <div className="flex flex-col max-w-5xl mx-auto w-full">
        {!showCheckout ? (
          <>
            {/* Product browsing section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Productos destacados</h2>
                {cart.length > 0 && (
                  <Button 
                    onClick={() => setShowCheckout(true)}
                    className="flex items-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Ver carrito ({getTotalItems()})</span>
                  </Button>
                )}
              </div>
              
              {/* Category filter tabs */}
              <Tabs defaultValue={activeTab} className="mb-8" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
                  {categories.map(category => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value={activeTab}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getFilteredProducts().map(product => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-video bg-gray-100 relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                          {product.discount > 0 && (
                            <Badge className="absolute top-2 right-2 bg-red-500">
                              -{product.discount}%
                            </Badge>
                          )}
                          {product.bonus > 0 && (
                            <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 rounded-full px-2 py-0.5 text-xs flex items-center">
                              <Star size={12} className="mr-1" />
                              +{product.bonus} puntos
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{product.name}</h3>
                            <div className="flex items-center">
                              <Star size={14} className="text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="text-sm">{product.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <div>
                              {product.discount > 0 ? (
                                <div className="flex items-center">
                                  <span className="text-gray-400 line-through text-sm mr-2">
                                    {product.price.toFixed(2)}€
                                  </span>
                                  <span className="font-bold text-lg">
                                    {(product.price * (1 - product.discount / 100)).toFixed(2)}€
                                  </span>
                                </div>
                              ) : (
                                <span className="font-bold text-lg">{product.price.toFixed(2)}€</span>
                              )}
                              <Badge variant="outline" className="ml-1">
                                {product.category}
                              </Badge>
                            </div>
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(product)}
                              className="hover:bg-green-600"
                            >
                              Añadir
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Recommended products based on browsing */}
              {points >= 20 && (
                <div className="mt-8">
                  <div className="flex items-center mb-3">
                    <Badge className="bg-purple-600 mr-2">Recomendado</Badge>
                    <h3 className="text-xl font-semibold">Basado en tu actividad</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[products[1], products[4], products[5]].map(product => (
                      <Card key={`rec-${product.id}`} className="flex overflow-hidden">
                        <div className="w-1/3 bg-gray-100">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="w-2/3 p-3 flex flex-col justify-between">
                          <div>
                            <h4 className="font-medium text-sm">{product.name}</h4>
                            <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold">
                              {(product.price * (1 - product.discount / 100)).toFixed(2)}€
                            </span>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => addToCart(product)}
                              className="h-8 text-xs"
                            >
                              Añadir
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Checkout section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Finalizar compra</h2>
                <Button 
                  variant="outline" 
                  onClick={() => setShowCheckout(false)}
                >
                  Volver a la tienda
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Carrito de compra</h3>
                      
                      {cart.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          Tu carrito está vacío
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center pb-4 border-b">
                              <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-100 mr-4">
                                  <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium">{item.name}</h4>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Tag size={14} className="mr-1" />
                                    <span>{item.category}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center">
                                <div className="mr-6 text-right">
                                  <div className="font-medium">
                                    {(item.price * (1 - item.discount / 100)).toFixed(2)}€
                                  </div>
                                  {item.discount > 0 && (
                                    <div className="text-sm text-red-500">
                                      -{item.discount}%
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex items-center border rounded-md mr-4">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 px-2"
                                  >
                                    -
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 px-2"
                                  >
                                    +
                                  </Button>
                                </div>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 h-8"
                                >
                                  Eliminar
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                
                <div className="col-span-1">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Resumen del pedido</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal:</span>
                          <span>{getTotalPrice().toFixed(2)}€</span>
                        </div>
                        
                        {appliedDiscount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Descuento:</span>
                            <span>-{appliedDiscount.toFixed(2)}€</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between font-bold pt-3 border-t">
                          <span>Total:</span>
                          <span>{getTotalWithDiscount().toFixed(2)}€</span>
                        </div>
                      </div>
                      
                      {/* Coupon and points redemption */}
                      {!couponApplied ? (
                        <div className="mb-4">
                          {!showCouponField ? (
                            <Button 
                              variant="outline" 
                              onClick={() => setShowCouponField(true)}
                              className="w-full justify-start"
                            >
                              <Tag size={16} className="mr-2" />
                              Aplicar cupón
                            </Button>
                          ) : (
                            <div className="flex space-x-2">
                              <input
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Código de cupón"
                                className="flex-1 px-3 py-2 border rounded-md"
                              />
                              <Button onClick={applyCoupon}>Aplicar</Button>
                            </div>
                          )}
                        </div>
                      ) : null}
                      
                      {points > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Tus puntos: {points}</span>
                            <span className="text-xs text-gray-500">(0.10€ por punto)</span>
                          </div>
                          <Button 
                            variant="outline"
                            onClick={applyPointsDiscount}
                            className="w-full justify-start"
                            disabled={appliedDiscount > 0}
                          >
                            <Star size={16} className="mr-2 text-yellow-500 fill-yellow-500" />
                            Canjear {points} puntos por {(points * 0.10).toFixed(2)}€
                          </Button>
                        </div>
                      )}
                      
                      <Button 
                        onClick={checkout}
                        disabled={cart.length === 0}
                        className="w-full"
                      >
                        Finalizar compra
                      </Button>
                      
                      <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>Entrega estimada: 3-5 días laborables</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Rewards cards */}
                  {progress >= 50 && !showCheckout && (
                    <RewardCard 
                      title="¡Completa tu compra!"
                      points={50}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
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

export default MarketplaceJourney;
