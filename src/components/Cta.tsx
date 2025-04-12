
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-neptuno-blue to-neptuno-teal text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
          <Sparkles size={16} className="mr-2 text-neptuno-amber" />
          Más de 1,000 desarrolladores ya usan Neptuno
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Deja de perder tiempo en infraestructura y concéntrate en crecer
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
          Neptuno te da un backend sólido y un frontend potente desde el día uno, 
          listo para escalar tu negocio.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-neptuno-blue hover:bg-gray-100 transition-all group">
            <Download size={18} className="mr-2" />
            Descargar Gratis
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            Ver documentación
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
