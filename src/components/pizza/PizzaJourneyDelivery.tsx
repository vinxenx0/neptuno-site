import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { deliveryOptions } from '@/data/pizza-data';
import { UsePizzaJourneyType } from '@/pages/journey/PizzaJourney';

interface PizzaJourneyDeliveryProps {
  usePizzaJourney: UsePizzaJourneyType;
  onNext: () => void;
  onBack: () => void;
}

const PizzaJourneyDelivery: React.FC<PizzaJourneyDeliveryProps> = ({
  usePizzaJourney,
  onNext,
  onBack,
}) => {
  const { selectedDeliveryOption, setSelectedDeliveryOption } = usePizzaJourney;
  const [address, setAddress] = useState('');
  const [isAddressComplete, setIsAddressComplete] = useState(false);

  const handleDeliveryChange = (deliveryId: string) => {
    const option = deliveryOptions.find(opt => opt.id === deliveryId);
    if (option) {
      setSelectedDeliveryOption(option);
      
      // If pickup is selected, consider address as complete
      if (option.id === 'pickup') {
        setIsAddressComplete(true);
      } else {
        // Otherwise, check if address is filled
        setIsAddressComplete(address.trim().length > 0);
      }
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setIsAddressComplete(e.target.value.trim().length > 0);
  };

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Opciones de entrega</CardTitle>
          <CardDescription>Selecciona cómo quieres recibir tu pedido</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <RadioGroup 
            value={selectedDeliveryOption?.id || ''} 
            onValueChange={handleDeliveryChange}
            className="space-y-4"
          >
            {deliveryOptions.map(option => {
              const Icon = option.icon;
              
              return (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label 
                    htmlFor={option.id} 
                    className="flex flex-1 items-center p-4 border rounded-lg cursor-pointer hover:bg-muted"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{option.name}</p>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <div className="text-right font-bold">
                        {option.price > 0 ? `+${option.price.toFixed(2)}€` : 'Gratis'}
                      </div>
                    </div>
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
          
          {selectedDeliveryOption?.id === 'delivery' && (
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-2">Dirección de entrega</h3>
              <div className="space-y-2">
                <Input 
                  placeholder="Calle, número, piso..." 
                  value={address}
                  onChange={handleAddressChange}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Introduce tu dirección completa para la entrega a domicilio
                </p>
              </div>
            </div>
          )}
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
            disabled={!selectedDeliveryOption || (selectedDeliveryOption.id === 'delivery' && !isAddressComplete)}
          >
            Continuar al pago
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PizzaJourneyDelivery;
