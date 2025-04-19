import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { ShoppingBag, Gift, Star, Trophy, Plus, Minus, CheckCircle } from 'lucide-react';

// Product data
const products = [
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
const rewardRules = [
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
  };
  
  const handleComplete = () => {
    setCurrentStep(3); // Final step
    
    // Extra bonus for completing purchase
    if (cart.length >= 3) {
      addReward(
        { points: 75, badge: "Comprador Premium", coupon: null },
        "¡Compra simulada completada!",
        "Gracias por tu compra"
      );
    }
  };
  
  return (
    <JourneyLayout
      title="Marketplace con recompensas por sinergias"
      subtitle="Descubre cómo obtener recompensas al combinar productos y categorías"
      bgColor="bg-gradient-to-br from-emerald-600 to-teal-800"
    >
      {currentStep === 0 ? (
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg">
              <div className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="h-10 w-10 text-emerald-600" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">
                  Bienvenido al Marketplace de Recompensas
                </h2>
                <p className="text-gray-600 mb-6">
                  Añade productos a tu carrito y descubre cómo las combinaciones estratégicas de productos te dan puntos, badges y cupones extra.
                </p>
                
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-medium text-emerald-800 mb-2">Cómo conseguir recompensas:</h3>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                      <span>Compra 2 productos de la misma categoría: +20 puntos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                      <span>Añade 3 productos al carrito: +30 puntos y badge "Comprador estratégico"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                      <span>Añade 5 productos al carrito: +50 puntos y cupón de 15% de descuento</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  onClick={handleNext}
                >
                  Empezar a comprar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      ) : currentStep === 1 ? (
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Products grid */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Catálogo de Productos</CardTitle>
                  <CardDescription>Añade productos para desbloquear recompensas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map(product => (
                      <div key={product.id} className="border rounded-lg overflow-hidden bg-white">
                        <div className="h-36 overflow-hidden">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                              <div className="font-bold">{product.price.toFixed(2)}€</div>
                            </div>
                            {cart.includes(product.id) ? (
                              <Button 
                                variant="destructive" 
                                size="sm"
                                className="h-8 w-8 p-0" 
                                onClick={() => handleRemoveFromCart(product.id)}
                              >
                                <Minus size={14} />
                              </Button>
                            ) : (
                              <Button 
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 h-8 w-8 p-0" 
                                size="sm"
                                onClick={() => handleAddToCart(product.id)}
                              >
                                <Plus size={14} />
                              </Button>
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
                    disabled={cart.length === 0}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    Ir al carrito
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Right column: Rewards and cart summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tu carrito</CardTitle>
                    <CardDescription>Tienes {cart.length} productos en el carrito</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {cart.length === 0 ? (
                      <div className="text-center py-6 text-gray-500">
                        Tu carrito está vacío
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {cartItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded bg-gray-100 overflow-hidden mr-2">
                                <img 
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.category}</div>
                              </div>
                            </div>
                            <div className="font-medium">{item.price.toFixed(2)}€</div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                          <span>Total:</span>
                          <span>{totalPrice.toFixed(2)}€</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  <RewardCard
                    title="Puntos acumulados"
                    value={totalPoints}
                    icon={<Star className="h-5 w-5 text-yellow-300" />}
                    bgColor="bg-gradient-to-br from-emerald-600 to-teal-700"
                  />
                  
                  <RewardCard
                    title="Badges"
                    value={badges.length}
                    icon={<Trophy className="h-5 w-5 text-amber-500" />}
                    bgColor="bg-gradient-to-br from-amber-500 to-orange-600"
                  />
                  
                  <RewardCard
                    title="Cupones"
                    value={coupons.length}
                    icon={<Gift className="h-5 w-5 text-green-500" />}
                    bgColor="bg-gradient-to-br from-teal-600 to-cyan-700"
                  />
                </div>
                
                {/* Category bonuses */}
                {Object.keys(categoryCounts).length > 0 && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Bonificaciones por categoría</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {Object.entries(categoryCounts).map(([category, count]) => (
                          <div 
                            key={category} 
                            className={`flex justify-between items-center p-2 rounded-lg ${
                              count >= 2 ? 'bg-emerald-50 text-emerald-800' : 'bg-gray-50 text-gray-500'
                            }`}
                          >
                            <span>{category}</span>
                            <div className="flex items-center">
                              <span className="mr-1">{count}/2</span>
                              {count >= 2 && <CheckCircle className="h-4 w-4 text-emerald-600" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Badges earned */}
                {badges.length > 0 && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Tus Badges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            text={badge} 
                            color="bg-emerald-100 text-emerald-800" 
                            icon={<Trophy className="h-3 w-3" />}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : currentStep === 2 ? (
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle>Finalizar compra</CardTitle>
                <CardDescription>Revisa tu carrito y confirma la compra simulada</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Resumen del carrito</h3>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-3 border-b">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                      </div>
                      <div className="font-medium">{item.price.toFixed(2)}€</div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-b py-4">
                  <div className="flex justify-between mb-1">
                    <span>Subtotal:</span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Envío:</span>
                    <span>Gratis</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                </div>
                
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <h3 className="font-medium text-emerald-800 mb-2">Bonificaciones activadas:</h3>
                  <div className="space-y-2">
                    {Object.entries(categoryCounts)
                      .filter(([_, count]) => count >= 2)
                      .map(([category]) => (
                        <div key={category} className="flex items-center text-sm text-emerald-700">
                          <Trophy className="h-4 w-4 mr-2 text-emerald-600" />
                          <span>Bonus por categoría {category}: +20 puntos</span>
                        </div>
                      ))}
                    
                    {cart.length >= 3 && (
                      <div className="flex items-center text-sm text-emerald-700">
                        <Gift className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>Badge "Comprador estratégico" desbloqueado</span>
                      </div>
                    )}
                    
                    {cart.length >= 5 && (
                      <div className="flex items-center text-sm text-emerald-700">
                        <Gift className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>Cupón: 15% en próximas compras activado</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleComplete}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  Confirmar compra simulada
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg">
              <div className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">
                  ¡Gracias por tu compra simulada!
                </h2>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-lg p-6 mb-6">
                  <p className="text-xl font-medium text-emerald-800 mb-3">
                    Recompensas obtenidas
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Star className="h-8 w-8 text-yellow-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{totalPoints}</p>
                      <p className="text-sm text-gray-500">Puntos</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Trophy className="h-8 w-8 text-indigo-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{badges.length}</p>
                      <p className="text-sm text-gray-500">Badges</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Gift className="h-8 w-8 text-emerald-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{coupons.length}</p>
                      <p className="text-sm text-gray-500">Cupones</p>
                    </div>
                  </div>
                  
                  {badges.length > 0 && (
                    <div className="mb-4">
                      <p className="font-medium mb-2">Badges desbloqueados:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            text={badge} 
                            color="bg-emerald-100 text-emerald-800" 
                            icon={<Trophy className="h-3 w-3" />}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {coupons.length > 0 && (
                    <div>
                      <p className="font-medium mb-2">Cupones desbloqueados:</p>
                      <div className="bg-white border border-emerald-100 rounded-lg p-3 text-emerald-800 flex items-center justify-center gap-2">
                        <Gift className="h-4 w-4" />
                        <span>{coupons[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setCurrentStep(0);
                      setCart([]);
                      setTotalPoints(0);
                      setBadges([]);
                      setCoupons([]);
                    }}
                  >
                    Volver a empezar
                  </Button>
                  
                  <Button 
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    Compartir progreso
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
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
