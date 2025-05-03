
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const LaunchBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  return (
    <div className="w-full bg-gradient-to-r from-neptuno-blue to-purple-700 text-white py-2 px-4 z-40 relative mt-16">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <Rocket size={18} className="animate-pulse" />
          <span className="font-medium">
            <span className="font-bold">Lanzamiento Q2 2025:</span> Accede a la beta privada con un 30% de descuento
          </span>
        </div>
        
        <div className="flex items-center mt-2 md:mt-0">
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-white text-neptuno-blue hover:bg-gray-100"
          >
            Solicitar acceso
            <ChevronRight className="ml-1" size={16} />
          </Button>
          
          <button 
            onClick={() => setDismissed(true)}
            className="ml-3 text-white/80 hover:text-white"
            aria-label="Cerrar banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchBanner;
