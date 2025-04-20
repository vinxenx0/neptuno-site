
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { UsePizzaJourneyType } from '@/pages/journey/PizzaJourney';
import { Badge } from '@/components/ui/badge';

interface PizzaJourneyCustomizeProps {
  usePizzaJourney: UsePizzaJourneyType;
  onNext: () => void;
  onBack: () => void;
}

const PizzaJourneyCustomize: React.FC<PizzaJourneyCustomizeProps> = ({
  usePizzaJourney,
  onNext,
  onBack
}) => {
  const { 
    selectedFood,
    availableToppings,
    selectedToppings,
    toggleTopping
  } = usePizzaJourney;

  const toppingCount = Object.values(selectedToppings).filter(Boolean).length;
  const showBonusMessage = toppingCount >= 2;
  const showSuperBonusMessage = toppingCount >= 3;

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Personaliza tu {selectedFood?.type === 'pizza' ? 'pizza' : 'hamburguesa'}</CardTitle>
          <CardDescription>
            Añade los ingredientes que prefieras a tu {selectedFood?.name}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium mb-2">Tu selección:</h3>
                <div className="mb-3">
                  <p className="text-lg font-medium">{selectedFood?.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedFood?.description}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="font-bold">{selectedFood?.price.toFixed(2)}€</p>
                    <Badge variant="secondary">+{selectedFood?.points} pts</Badge>
                  </div>
                </div>
                
                {Object.entries(selectedToppings).map(([id, isSelected]) => {
                  if (isSelected) {
                    const topping = usePizzaJourney.getToppingById(id);
                    if (topping) {
                      return (
                        <div key={id} className="text-sm py-1 border-t flex justify-between">
                          <span>{topping.name}</span>
                          <div className="flex gap-2 items-center">
                            <span>{topping.price.toFixed(2)}€</span>
                            <Badge variant="outline" className="h-5 text-xs">+{topping.points} pts</Badge>
                          </div>
                        </div>
                      );
                    }
                  }
                  return null;
                })}
              </div>
              
              {showBonusMessage && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                  {showSuperBonusMessage ? (
                    <>
                      <p className="font-medium text-amber-800">¡Super Bonus desbloqueado!</p>
                      <p className="text-amber-700">Has añadido 3 o más ingredientes. Recibirás 10 puntos extra.</p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-amber-800">¡Casi ahí!</p>
                      <p className="text-amber-700">Añade 1 ingrediente más para desbloquear un super bonus de puntos.</p>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="md:w-2/3">
              <h3 className="font-medium mb-2">Ingredientes disponibles:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableToppings.map(topping => (
                  <div key={topping.id} className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-muted transition-colors">
                    <Checkbox 
                      id={topping.id}
                      checked={selectedToppings[topping.id] || false}
                      onCheckedChange={() => toggleTopping(topping.id)}
                    />
                    <div className="flex justify-between items-center w-full">
                      <label htmlFor={topping.id} className="cursor-pointer flex-grow">
                        {topping.name}
                      </label>
                      <div className="flex flex-col items-end">
                        <span className="font-medium">{topping.price.toFixed(2)}€</span>
                        <span className="text-xs text-muted-foreground">+{topping.points} pts</span>
                      </div>
                    </div>
                  </div>
                ))}
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
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PizzaJourneyCustomize;
