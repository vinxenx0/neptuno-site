
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Trophy, Gift } from 'lucide-react';
import Badge from '@/components/journey/Badge';
import { MarketplaceProps } from '@/data/marketplace-data';

const MarketplaceComplete: React.FC<MarketplaceProps> = ({
  totalPoints,
  badges,
  coupons,
  resetJourney
}) => {
  return (
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
                onClick={resetJourney}
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
  );
};

export default MarketplaceComplete;
