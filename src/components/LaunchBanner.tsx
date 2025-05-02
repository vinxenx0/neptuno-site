
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LaunchBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-12 h-12 bg-white rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-yellow-300 rounded-full filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-0 right-1/4 w-10 h-10 bg-white rounded-full filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="flex items-center justify-center space-x-2 md:space-x-4 max-w-7xl mx-auto">
        <Sparkles size={18} className="text-yellow-300 hidden sm:inline-block animate-pulse" />
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">¡Ahora en lanzamiento!</span> Sé de los primeros en probar Neptuno
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs md:text-sm bg-white/10 hover:bg-white/20 text-white border-white/30 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Probar ahora</span>
          <span className="sm:hidden">Probar</span>
          <ArrowRight size={14} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default LaunchBanner;
