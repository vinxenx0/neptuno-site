
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Coins, Timer, MapPin } from 'lucide-react';
import { UsePizzaJourneyType } from '@/pages/journey/PizzaJourney';

interface PizzaJourneyCompleteProps {
  usePizzaJourney: UsePizzaJourneyType;
  onReset: () => void;
}

const PizzaJourneyComplete: React.FC<PizzaJourneyCompleteProps> = ({ 
  usePizzaJourney, 
  onReset 
}) => {
  const {
    selectedFood,
    selectedDeliveryOption,
    totalPoints,
    finalPrice,
    pointsApplied,
    pointsDiscount,
    calculateEarnedPoints
  } = usePizzaJourney;

  const earnedPoints = calculateEarnedPoints();
  const newTotalPoints = totalPoints - (pointsApplied ? totalPoints : 0) + earnedPoints;

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">¡Pedido realizado con éxito!</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Gracias por tu pedido. Hemos enviado la confirmación a tu email.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <Card className="flex-1">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    {selectedDeliveryOption?.id === 'delivery' ? (
                      <MapPin className="h-8 w-8 text-primary" />
                    ) : (
                      <CheckCircle className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <h3 className="font-medium text-lg">Estado</h3>
                  <p className="text-center text-muted-foreground">
                    {selectedDeliveryOption?.id === 'delivery' 
                      ? 'Preparando para envío' 
                      : 'Preparando para recoger'}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex-1">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="rounded-full bg-amber-100 p-3 mb-3">
                    <Timer className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg">Tiempo estimado</h3>
                  <p className="text-center text-muted-foreground">
                    {selectedDeliveryOption?.id === 'delivery' 
                      ? '30-45 minutos' 
                      : '15-20 minutos'}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex-1">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="rounded-full bg-yellow-100 p-3 mb-3">
                    <Coins className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-medium text-lg">Puntos</h3>
                  <p className="text-center text-muted-foreground">
                    <span className="text-green-600">+{earnedPoints} ganados</span>
                    {pointsApplied && (
                      <span className="text-amber-600"> / -{totalPoints} canjeados</span>
                    )}
                  </p>
                  <p className="text-sm mt-1">Balance actual: {newTotalPoints}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted p-4 rounded-lg max-w-sm mx-auto">
              <h3 className="font-medium mb-2">Resumen de la compra</h3>
              <div className="flex justify-between mb-1">
                <span>{selectedFood?.name}</span>
                <span>{selectedFood?.price.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Extras</span>
                <span>{(finalPrice - (selectedFood?.price || 0) - (selectedDeliveryOption?.price || 0)).toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Entrega</span>
                <span>{selectedDeliveryOption?.price ? `${selectedDeliveryOption.price.toFixed(2)}€` : 'Gratis'}</span>
              </div>
              {pointsApplied && (
                <div className="flex justify-between mb-1 text-green-600">
                  <span>Descuento puntos</span>
                  <span>-{pointsDiscount.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total</span>
                <span>{finalPrice.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button onClick={onReset}>Hacer otro pedido</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PizzaJourneyComplete;
