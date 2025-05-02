
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Tag, Trophy, Award, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const MobileBottomBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50 md:hidden">
      <div className="grid grid-cols-5 gap-2">
        <div className="flex flex-col items-center">
          <div className="relative">
            <CreditCard 
              className="h-5 w-5 text-gray-600"
              onClick={() => navigate('/user-dashboard')}
            />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-yellow-400 text-purple-800 rounded-full text-xs font-bold">
              1k
            </span>
          </div>
          <span className="text-xs mt-1">Créditos</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-purple-600 text-white rounded-full text-xs font-bold">
              1
            </span>
          </div>
          <span className="text-xs mt-1">Carrito</span>
        </div>
        
        <div 
          className="flex flex-col items-center"
          onClick={() => navigate('/user-dashboard')}
        >
          <Avatar className="h-7 w-7 border border-purple-500">
            <AvatarFallback className="bg-purple-600 text-white text-xs">U</AvatarFallback>
          </Avatar>
          <span className="text-xs mt-1">Perfil</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <Trophy className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-yellow-300 text-purple-800 rounded-full text-xs font-bold">
              10
            </span>
          </div>
          <span className="text-xs mt-1">Puntos</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <Award className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-green-500 text-white rounded-full text-xs font-bold">
              1
            </span>
          </div>
          <span className="text-xs mt-1">Medallas</span>
        </div>
      </div>
    </div>
  );
};
