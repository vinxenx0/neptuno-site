
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from 'lucide-react';

interface MarketplaceWelcomeProps {
  onStart: () => void;
}

const MarketplaceWelcome: React.FC<MarketplaceWelcomeProps> = ({ onStart }) => {
  return (
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
              onClick={onStart}
            >
              Empezar a comprar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketplaceWelcome;
