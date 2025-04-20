
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Coins } from 'lucide-react';
import { UsePizzaJourneyType } from '@/pages/journey/PizzaJourney';

interface PizzaJourneyPaymentProps {
  usePizzaJourney: UsePizzaJourneyType;
  onNext: () => void;
  onBack: () => void;
}

const PizzaJourneyPayment: React.FC<PizzaJourneyPaymentProps> = ({
  usePizzaJourney,
  onNext,
  onBack
}) => {
  const {
    selectedFood,
    selectedToppings,
    selectedDeliveryOption,
    totalPrice,
    totalPoints,
    applyPointsDiscount,
    pointsApplied,
    pointsDiscount,
    finalPrice
  } = usePizzaJourney;

  const [usePoints, setUsePoints] = useState(pointsApplied);

  const handleUsePointsChange = (checked: boolean) => {
    setUsePoints(checked);
    if (checked) {
      applyPointsDiscount();
    }
  };

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Finalizar pedido</CardTitle>
          <CardDescription>Revisa tu pedido y completa el pago</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order summary */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Resumen del pedido</h3>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Producto</h4>
                  <p>{selectedFood?.name}</p>
                  
                  {Object.entries(selectedToppings).map(([id, isSelected]) => {
                    if (isSelected) {
                      const topping = usePizzaJourney.getToppingById(id);
                      if (topping) {
                        return (
                          <p key={id} className="text-sm text-muted-foreground">
                            + {topping.name}
                          </p>
                        );
                      }
                    }
                    return null;
                  })}
                </div>
                <div className="text-right">
                  <p className="font-medium">{selectedFood?.price.toFixed(2)}€</p>
                  
                  {Object.entries(selectedToppings).map(([id, isSelected]) => {
                    if (isSelected) {
                      const topping = usePizzaJourney.getToppingById(id);
                      if (topping) {
                        return (
                          <p key={id} className="text-sm text-muted-foreground">
                            {topping.price.toFixed(2)}€
                          </p>
                        );
                      }
                    }
                    return null;
                  })}
                </div>
              </div>
              
              {/* Delivery information */}
              <div className="mt-4 pt-4 border-t flex justify-between">
                <div>
                  <h4 className="font-medium">Entrega</h4>
                  <p>{selectedDeliveryOption?.name}</p>
                  {selectedDeliveryOption?.id === 'delivery' && (
                    <p className="text-sm text-muted-foreground">Aproximadamente 30-45 minutos</p>
                  )}
                  {selectedDeliveryOption?.id === 'pickup' && (
                    <p className="text-sm text-muted-foreground">Listo en 15-20 minutos</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {selectedDeliveryOption?.price ? `${selectedDeliveryOption.price.toFixed(2)}€` : 'Gratis'}
                  </p>
                </div>
              </div>
              
              {/* Points */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Coins className="h-5 w-5 text-yellow-500" />
                  <h4 className="font-medium">Tus puntos disponibles: {totalPoints}</h4>
                </div>
                
                {totalPoints > 0 && (
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="use-points" 
                      checked={usePoints}
                      onCheckedChange={handleUsePointsChange}
                    />
                    <label 
                      htmlFor="use-points" 
                      className="text-sm cursor-pointer"
                    >
                      Usar {totalPoints} puntos para un descuento de {(totalPoints * 0.10).toFixed(2)}€
                    </label>
                  </div>
                )}
              </div>
            </div>
            
            {/* Total summary */}
            <div className="bg-muted rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                
                {pointsApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento de puntos:</span>
                    <span>-{pointsDiscount.toFixed(2)}€</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span>{finalPrice.toFixed(2)}€</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Puntos que obtendrás:</span>
                  <span>+{usePizzaJourney.calculateEarnedPoints()} puntos</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={onBack}
          >
            Volver
          </Button>
          
          <Button 
            onClick={onNext}
          >
            Completar pedido
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PizzaJourneyPayment;
