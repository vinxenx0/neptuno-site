
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Code, Zap } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
import TechStackLogos from './TechStackLogos';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fafc] to-gray-100 text-gray-900">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-neptuno-blue rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-neptuno-teal rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neptuno-amber rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1.5 bg-neptuno-blue/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              -10% descuento lanzamiento
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              🚀Launch in minutes, engagement in moments
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700">
              De la idea al MRR en tiempo record: no arranques de cero arranca desde Neptuno.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600">
              Crea MVP ilimitados listos para producción con todo lo que necesitas para lanzar tu idea al mercado
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-neptuno-blue hover:bg-blue-600 text-white">
                Lanza ya tu proyecto <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-neptuno-blue/30 text-neptuno-blue">
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
            <DashboardPreview />
          </div>
        </div>

        <TechStackLogos />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
