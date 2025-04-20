
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, Pizza } from 'lucide-react';

interface PizzaJourneyWelcomeProps {
  onStart: () => void;
  totalPoints: number;
}

const PizzaJourneyWelcome: React.FC<PizzaJourneyWelcomeProps> = ({
  onStart,
  totalPoints
}) => {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <Pizza className="h-12 w-12 text-orange-500" />
            </div>
          </div>
          
          <CardTitle className="text-2xl text-center">
            Bienvenido a nuestra Pizzería Gamificada
          </CardTitle>
          <CardDescription className="text-center">
            Personaliza tu pedido, gana puntos y canjéalos por descuentos
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="mb-4">
              En nuestra pizzería podrás pedir deliciosas pizzas, hamburguesas y complementos. 
              Con cada compra ganarás puntos que podrás canjear por descuentos en futuros pedidos.
            </p>
            
            <div className="bg-amber-50 p-4 rounded-lg inline-flex items-center gap-3 mb-2">
              <Coins className="h-5 w-5 text-amber-500" />
              <span>Tus puntos disponibles: <strong>{totalPoints}</strong></span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Cada punto equivale a 0,10€ de descuento en tu próxima compra
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Cómo ganar puntos</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Comprar pizzas y hamburguesas</li>
                <li>Añadir toppings a tu pedido</li>
                <li>Combinar 3 o más ingredientes</li>
                <li>Realizar pedidos superiores a 20€</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Cómo canjear puntos</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Al finalizar tu pedido</li>
                <li>Descuento inmediato en el pago</li>
                <li>Sin cantidad mínima de puntos</li>
                <li>Acumula o canjea, tú decides</li>
              </ul>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button size="lg" onClick={onStart}>
            Hacer mi pedido
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PizzaJourneyWelcome;
