
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Code } from 'lucide-react';
import SlotMachine from './SlotMachine';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-neptuno-navy via-[#1a365d] to-neptuno-navy text-white">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neptuno-blue rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-neptuno-teal rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neptuno-amber rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              -10% descuento lanzamiento
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Go-to market in minutes, in-game engagement in moments
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              <span className="font-bold">De la idea al MRR en tiempo record:</span> no arranques de cero, empieza desde Neptuno.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300">
              Crea MVP ilimitados listos para producción con todo lo que necesitas para lanzar tu proyecto al mercado
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-neptuno-blue hover:bg-blue-600 text-white">
                Lanza ya tu proyecto <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                Saber más
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-sm">
              <div className="flex items-center">
                <Shield size={18} className="mr-2 text-neptuno-teal" />
                <span>Listo para producción</span>
              </div>
              <div className="flex items-center">
                <Zap size={18} className="mr-2 text-neptuno-amber" />
                <span>SDK disponible</span>
              </div>
              <div className="flex items-center">
                <Code size={18} className="mr-2 text-neptuno-blue" />
                <span>Vibe coding ready</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in">
            <SlotMachine autoSpin={true} />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
