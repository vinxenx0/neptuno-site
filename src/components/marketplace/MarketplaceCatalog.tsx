
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Minus, Plus } from 'lucide-react';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import { Star, Trophy, Gift } from 'lucide-react';
import { products } from '@/data/marketplace-data';
import { useMarketplace } from '@/marketplace/MarketplaceContext';

const MarketplaceCatalog: React.FC = () => {
  const {
    cart,
    cartItems,
    categoryCounts,
    totalPoints,
    badges,
    coupons,
    totalPrice,
    handleAddToCart,
    handleRemoveFromCart,
    handleNext
  } = useMarketplace();

  return (
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
  );
};

export default MarketplaceCatalog;
