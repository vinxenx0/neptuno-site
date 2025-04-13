
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Trophy, CreditCard, Tag, Award, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-md flex items-center justify-center text-white font-bold">N</div>
              <span className="ml-2 text-xl font-bold text-neptuno-navy">Neptuno</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-neptuno-blue transition-colors">Producto</a>
            <a href="#use-cases" className="text-gray-600 hover:text-neptuno-blue transition-colors">Usos</a>
            <a href="#sdk" className="text-gray-600 hover:text-neptuno-blue transition-colors">SDK</a>
            <a href="#pricing" className="text-gray-600 hover:text-neptuno-blue transition-colors">Corporate</a>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              {/* Créditos */}
              <div className="relative">
                <CreditCard className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-400 text-neptuno-navy rounded-full text-xs font-bold">
                  1k
                </span>
              </div>
              
              {/* Cupones */}
              <div className="relative">
                <Tag className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
                  1
                </span>
              </div>
              
              {/* Puntos */}
              <div className="relative">
                <Trophy className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-300 text-neptuno-navy rounded-full text-xs font-bold">
                  10
                </span>
              </div>
              
              {/* Insignias */}
              <div className="relative">
                <Award className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full text-xs font-bold">
                  1
                </span>
              </div>
              
              {/* Settings (admin only) */}
              <div className="relative">
                <Settings className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
              </div>
              
              {/* Avatar */}
              <div className="relative">
                <Avatar className="h-8 w-8 cursor-pointer border-2 border-neptuno-blue">
                  <AvatarFallback className="bg-neptuno-blue text-white">A</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-neptuno-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Producto</a>
            <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Usos</a>
            <a href="#sdk" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">SDK</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Corporate</a>
            
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <p className="text-sm text-gray-500">Notificaciones</p>
              <div className="grid grid-cols-5 gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <CreditCard className="h-6 w-6 text-gray-600" />
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-yellow-400 text-neptuno-navy">1k</Badge>
                  </div>
                  <span className="text-xs mt-1">Créditos</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Tag className="h-6 w-6 text-gray-600" />
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-purple-500 text-white">1</Badge>
                  </div>
                  <span className="text-xs mt-1">Cupones</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Trophy className="h-6 w-6 text-gray-600" />
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-yellow-300 text-neptuno-navy">10</Badge>
                  </div>
                  <span className="text-xs mt-1">Puntos</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Award className="h-6 w-6 text-gray-600" />
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-green-500 text-white">1</Badge>
                  </div>
                  <span className="text-xs mt-1">Logros</span>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-8 w-8 border-2 border-neptuno-blue">
                    <AvatarFallback className="bg-neptuno-blue text-white">A</AvatarFallback>
                  </Avatar>
                  <span className="text-xs mt-1">Perfil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
