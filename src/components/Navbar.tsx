
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
            <a href="#features" className="text-gray-600 hover:text-neptuno-blue transition-colors">Características</a>
            <a href="#use-cases" className="text-gray-600 hover:text-neptuno-blue transition-colors">Casos de uso</a>
            <a href="#sdk" className="text-gray-600 hover:text-neptuno-blue transition-colors">SDK</a>
            <a href="#pricing" className="text-gray-600 hover:text-neptuno-blue transition-colors">Precios</a>
            <a href="#demo" className="text-gray-600 hover:text-neptuno-blue transition-colors">Demo</a>
            <Button className="bg-neptuno-blue hover:bg-blue-600 text-white">Descargar</Button>
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
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Características</a>
            <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Casos de uso</a>
            <a href="#sdk" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">SDK</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Precios</a>
            <a href="#demo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-neptuno-blue hover:bg-gray-50">Demo</a>
            <div className="px-3 py-2">
              <Button className="w-full bg-neptuno-blue hover:bg-blue-600 text-white">Descargar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
