
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, Coins } from 'lucide-react';
import { useMarketplace } from '@/marketplace/MarketplaceContext';

const MarketplaceCheckout: React.FC = () => {
  const {
    cartItems,
    categoryCounts,
    totalPrice,
    cart,
    totalPoints,
    handleComplete,
    applyPointsDiscount,
    discountApplied,
    discountValue,
    finalPrice
  } = useMarketplace();

  return (
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
              
              {totalPoints > 0 && (
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center">
                    <Coins className="h-4 w-4 mr-1 text-yellow-500" />
                    Puntos disponibles ({totalPoints}):
                  </span>
                  {discountApplied ? (
                    <span className="text-green-600">-{discountValue.toFixed(2)}€</span>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs border-yellow-500 text-yellow-700 h-7"
                      onClick={applyPointsDiscount}
                    >
                      Canjear ({(totalPoints * 0.1).toFixed(2)}€)
                    </Button>
                  )}
                </div>
              )}
              
              <div className="flex justify-between mb-1">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className={discountApplied ? "text-green-600" : ""}>
                  {finalPrice.toFixed(2)}€
                  {discountApplied && (
                    <span className="text-xs line-through text-gray-500 ml-2">
                      {totalPrice.toFixed(2)}€
                    </span>
                  )}
                </span>
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
  );
};

export default MarketplaceCheckout;
