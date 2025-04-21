
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronLeft, ChevronRight, Heart, ShoppingCart, Star, Tag } from 'lucide-react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import RewardPopup from '@/components/journey/RewardPopup';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  synergy: string[];
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Monitor ultrawide curvo",
    image: "/placeholder.svg",
    price: 299.99,
    category: "Monitores",
    rating: 4.5,
    reviews: 128,
    synergy: ["Gaming", "Oficina"],
    description: "Monitor curvo ultrawide de 34 pulgadas con resolución QHD para una experiencia inmersiva."
  },
  {
    id: 2,
    name: "Teclado mecánico RGB",
    image: "/placeholder.svg",
    price: 89.99,
    category: "Periféricos",
    rating: 4.7,
    reviews: 312,
    synergy: ["Gaming", "Programación"],
    description: "Teclado mecánico con switches Cherry MX Red y retroiluminación RGB personalizable."
  },
  {
    id: 3,
    name: "Ratón ergonómico inalámbrico",
    image: "/placeholder.svg",
    price: 59.99,
    category: "Periféricos",
    rating: 4.3,
    reviews: 97,
    synergy: ["Oficina", "Diseño"],
    description: "Ratón ergonómico inalámbrico con sensor de alta precisión y batería de larga duración."
  },
  {
    id: 4,
    name: "Auriculares con cancelación de ruido",
    image: "/placeholder.svg",
    price: 129.99,
    category: "Audio",
    rating: 4.8,
    reviews: 263,
    synergy: ["Audio", "Gaming", "Movilidad"],
    description: "Auriculares con cancelación activa de ruido, micrófono integrado y hasta 30 horas de autonomía."
  },
  {
    id: 5,
    name: "Webcam 4K",
    image: "/placeholder.svg",
    price: 79.99,
    category: "Periféricos",
    rating: 4.2,
    reviews: 84,
    synergy: ["Streaming", "Videoconferencia"],
    description: "Webcam con resolución 4K, enfoque automático y micrófono incorporado con reducción de ruido."
  },
  {
    id: 6,
    name: "SSD NVMe 1TB",
    image: "/placeholder.svg",
    price: 119.99,
    category: "Almacenamiento",
    rating: 4.9,
    reviews: 416,
    synergy: ["Gaming", "Programación", "Edición"],
    description: "Unidad de estado sólido NVMe con 1TB de capacidad y velocidades de hasta 3500MB/s."
  }
];

const CATEGORIES = ["Todos", "Monitores", "Periféricos", "Audio", "Almacenamiento"];
const SYNERGIES = ["Gaming", "Oficina", "Programación", "Diseño", "Streaming", "Videoconferencia", "Edición", "Movilidad", "Audio"];

const MarketplaceJourney = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<(Product & {quantity: number})[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [availableSynergies, setAvailableSynergies] = useState<string[]>([]);
  const [unlockedSynergies, setUnlockedSynergies] = useState<string[]>([]);
  const [points, setPoints] = useState(10);
  const [showReward, setShowReward] = useState(false);
  const [lastReward, setLastReward] = useState({ title: "", points: 0 });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });
  
  // Calculate available synergies based on cart
  useEffect(() => {
    const cartSynergies: string[] = [];
    cart.forEach(item => {
      item.synergy.forEach(s => {
        if (!cartSynergies.includes(s)) cartSynergies.push(s);
      });
    });
    setAvailableSynergies(cartSynergies);
    
    // Check for newly unlocked synergies
    const newSynergies = cartSynergies.filter(s => !unlockedSynergies.includes(s));
    if (newSynergies.length > 0) {
      // Award points for unlocking synergies
      newSynergies.forEach(s => {
        toast.success(`¡Nueva sinergia desbloqueada: ${s}!`, {
          description: "Has ganado 5 puntos"
        });
      });
      
      setPoints(prev => prev + newSynergies.length * 5);
      setUnlockedSynergies([...unlockedSynergies, ...newSynergies]);
      
      if (newSynergies.length > 0) {
        setLastReward({ 
          title: "¡Nueva Sinergia!", 
          points: newSynergies.length * 5 
        });
        setShowReward(true);
      }
    }
  }, [cart]);
  
  const filterProducts = () => {
    let filtered = PRODUCTS;
    
    // Apply category filter
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) || 
        p.synergy.some(s => s.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
      toast.success(`Añadida otra unidad de ${product.name}`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.name} añadido al carrito`);
      
      // Award points first time adding a product
      if (cart.length === 0) {
        setLastReward({ title: "¡Primer producto!", points: 5 });
        setPoints(prev => prev + 5);
        setShowReward(true);
      }
    }
  };
  
  const removeFromCart = (productId: number) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };
  
  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast("Producto eliminado de favoritos");
    } else {
      setWishlist([...wishlist, productId]);
      toast.success("Producto añadido a favoritos");
      
      // Award points first time adding to wishlist
      if (wishlist.length === 0) {
        setLastReward({ title: "¡Primer favorito!", points: 3 });
        setPoints(prev => prev + 3);
        setShowReward(true);
      }
    }
  };
  
  const calculateTotal = () => {
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // Apply discount based on synergies
    const synergyDiscount = unlockedSynergies.length * 5; // 5% per synergy
    const discountAmount = (subtotal * synergyDiscount / 100);
    
    return {
      subtotal: subtotal.toFixed(2),
      discount: discountAmount.toFixed(2),
      total: (subtotal - discountAmount).toFixed(2),
      synergyDiscount
    };
  };
  
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }
    
    setIsCheckoutOpen(true);
  };
  
  const processOrder = () => {
    if (!checkoutInfo.name || !checkoutInfo.email || !checkoutInfo.address || !checkoutInfo.cardNumber) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }
    
    // Award points for completing purchase
    const orderTotal = calculateTotal();
    const earnedPoints = Math.floor(parseFloat(orderTotal.total) / 10);
    
    setLastReward({ title: "¡Compra completada!", points: earnedPoints });
    setPoints(prev => prev + earnedPoints);
    setShowReward(true);
    
    toast.success("¡Pedido realizado con éxito!", {
      description: `Has ganado ${earnedPoints} puntos con tu compra`
    });
    
    // Reset cart and checkout
    setCart([]);
    setIsCheckoutOpen(false);
  };
  
  const filteredProducts = filterProducts();
  const totalPrice = calculateTotal();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <JourneyLayout 
      currentPoints={points} 
      journeyTitle="Marketplace con Recompensas por Sinergias"
      progress={80}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Productos Tecnológicos</h2>
          
          <div className="flex items-center">
            <div className="mr-4 relative">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center"
                onClick={handleCheckout}
              >
                <ShoppingCart className="mr-2" size={16} />
                <span>Carrito ({cartItemCount})</span>
              </Button>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </div>
            
            <div className="relative">
              <Button variant="ghost" size="sm">
                <Heart className="mr-2" size={16} />
                <span>Favoritos</span>
              </Button>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <Input 
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={selectedCategory === category ? "bg-purple-600" : ""}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron productos que coincidan con tu búsqueda</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                    <button
                      className={`absolute top-2 right-2 p-1.5 rounded-full ${
                        wishlist.includes(product.id) 
                          ? 'bg-red-100 text-red-500' 
                          : 'bg-gray-100 text-gray-400'
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{product.name}</h3>
                      <span className="font-bold text-purple-600">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                      <span>{product.category}</span>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-500 mr-1" fill="currentColor" />
                        <span>{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.synergy.map((synergy) => (
                        <Badge 
                          key={synergy} 
                          variant="outline"
                          className={`
                            text-xs
                            ${unlockedSynergies.includes(synergy) ? 'border-purple-400 text-purple-600' : ''}
                          `}
                        >
                          {synergy}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Añadir al carrito
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
        
        {/* Sinergia information */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">Sinergias desbloqueadas</h3>
              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm font-medium">
                {unlockedSynergies.length}/{SYNERGIES.length}
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
              {SYNERGIES.map((synergy) => (
                <div 
                  key={synergy}
                  className={`
                    border rounded-md p-3 flex items-center
                    ${unlockedSynergies.includes(synergy) 
                      ? 'bg-purple-50 border-purple-200' 
                      : 'bg-gray-50 border-gray-200 opacity-70'
                    }
                  `}
                >
                  {unlockedSynergies.includes(synergy) ? (
                    <Check size={16} className="text-green-500 mr-2" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-gray-300 mr-2"></span>
                  )}
                  <span className={unlockedSynergies.includes(synergy) ? 'font-medium' : ''}>
                    {synergy}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 text-blue-700 p-4 rounded-md text-sm">
              <p>
                <strong>¿Cómo funcionan las sinergias?</strong> Las sinergias se desbloquean al añadir al carrito productos con características complementarias.
                Cada sinergia desbloqueada te proporciona un 5% de descuento adicional en tu compra final y 5 puntos de recompensa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md md:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Finalizar compra</DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Información de contacto</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm mb-1 block">Nombre completo *</label>
                  <Input 
                    value={checkoutInfo.name}
                    onChange={(e) => setCheckoutInfo({...checkoutInfo, name: e.target.value})}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm mb-1 block">Email *</label>
                  <Input 
                    value={checkoutInfo.email}
                    onChange={(e) => setCheckoutInfo({...checkoutInfo, email: e.target.value})}
                    placeholder="tu@email.com"
                    type="email"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm mb-1 block">Dirección *</label>
                  <Input 
                    value={checkoutInfo.address}
                    onChange={(e) => setCheckoutInfo({...checkoutInfo, address: e.target.value})}
                    placeholder="Tu dirección"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm mb-1 block">Ciudad *</label>
                  <Input 
                    value={checkoutInfo.city}
                    onChange={(e) => setCheckoutInfo({...checkoutInfo, city: e.target.value})}
                    placeholder="Ciudad"
                    required
                  />
                </div>
              </div>
              
              <h3 className="font-medium mt-6 mb-3">Información de pago</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm mb-1 block">Número de tarjeta *</label>
                  <Input 
                    value={checkoutInfo.cardNumber}
                    onChange={(e) => setCheckoutInfo({...checkoutInfo, cardNumber: e.target.value})}
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm mb-1 block">Caducidad *</label>
                    <Input 
                      value={checkoutInfo.cardExpiry}
                      onChange={(e) => setCheckoutInfo({...checkoutInfo, cardExpiry: e.target.value})}
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm mb-1 block">CVC *</label>
                    <Input 
                      value={checkoutInfo.cardCVC}
                      onChange={(e) => setCheckoutInfo({...checkoutInfo, cardCVC: e.target.value})}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Resumen de compra</h3>
              
              <div className="border rounded-md divide-y max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <ChevronLeft size={16} />
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => addToCart(item)}
                      >
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>${totalPrice.subtotal}</span>
                </div>
                
                {unlockedSynergies.length > 0 && (
                  <div className="flex justify-between text-green-600 mb-2">
                    <span>Descuento ({totalPrice.synergyDiscount}%):</span>
                    <span>-${totalPrice.discount}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>${totalPrice.total}</span>
                </div>
                
                <div className="mt-3 text-sm text-gray-500">
                  <p className="flex items-center">
                    <Tag size={14} className="mr-1" />
                    Ganarás aproximadamente {Math.floor(parseFloat(totalPrice.total) / 10)} puntos con esta compra
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="bg-blue-50 p-3 rounded-md mb-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                      <Check size={14} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-700">
                        Has desbloqueado <strong>{unlockedSynergies.length}</strong> sinergias, 
                        obteniendo un <strong>{totalPrice.synergyDiscount}%</strong> de descuento en tu compra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <div className="w-full flex justify-between">
              <Button variant="ghost" onClick={() => setIsCheckoutOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={processOrder} className="bg-purple-600 hover:bg-purple-700">
                Finalizar compra
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
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

export default MarketplaceJourney;
