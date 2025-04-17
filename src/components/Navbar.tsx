
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Trophy, CreditCard, Tag, Award, Settings, User, Mail, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-md flex items-center justify-center text-white font-bold">N</div>
                <span className="ml-2 text-xl font-bold text-neptuno-navy">Neptuno</span>
              </a>
            </div>
            
            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-neptuno-blue transition-colors">Producto</a>
              <a href="#use-cases" className="text-gray-600 hover:text-neptuno-blue transition-colors">Usos</a>
              <a href="#sdk" className="text-gray-600 hover:text-neptuno-blue transition-colors">SDK</a>
              <a href="#pricing" className="text-gray-600 hover:text-neptuno-blue transition-colors">Corporate</a>
            </div>
            
            {/* Desktop Notification Icons - Right side */}
            <div className="hidden md:flex items-center space-x-3 pl-4 border-l border-gray-200">
              {/* Messages */}
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
                  3
                </span>
              </div>
              
              {/* Followed */}
              <div className="relative">
                <Heart className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-pink-500 text-white rounded-full text-xs font-bold">
                  5
                </span>
              </div>
              
              {/* Credits */}
              <div className="relative">
                <CreditCard className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-400 text-neptuno-navy rounded-full text-xs font-bold">
                  1k
                </span>
              </div>
              
              {/* Coupons */}
              <div className="relative">
                <Tag className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
                  1
                </span>
              </div>
              
              {/* Points */}
              <div className="relative">
                <Trophy className="h-5 w-5 text-gray-600 hover:text-neptuno-blue transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-300 text-neptuno-navy rounded-full text-xs font-bold">
                  10
                </span>
              </div>
              
              {/* Badges */}
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
            
            {/* Mobile menu button and essential icons */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Only show Messages and Heart on mobile top bar */}
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
                  3
                </span>
              </div>
              
              <div className="relative">
                <Heart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-pink-500 text-white rounded-full text-xs font-bold">
                  5
                </span>
              </div>
              
              {/* Admin only */}
              <div className="relative">
                <Settings className="h-5 w-5 text-gray-600" />
              </div>
              
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
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile fixed bottom bar with notifications */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50">
          <div className="grid grid-cols-5 gap-2">
            <div className="flex flex-col items-center">
              <div className="relative">
                <CreditCard className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-yellow-400 text-neptuno-navy rounded-full text-xs font-bold">
                  1k
                </span>
              </div>
              <span className="text-xs mt-1">Créditos</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative">
                <Tag className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-purple-500 text-white rounded-full text-xs font-bold">
                  1
                </span>
              </div>
              <span className="text-xs mt-1">Cupones</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Avatar className="h-7 w-7 border border-neptuno-blue">
                <AvatarFallback className="bg-neptuno-blue text-white text-xs">A</AvatarFallback>
              </Avatar>
              <span className="text-xs mt-1">Perfil</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative">
                <Trophy className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-yellow-300 text-neptuno-navy rounded-full text-xs font-bold">
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
      )}
    </>
  );
};

export default Navbar;
