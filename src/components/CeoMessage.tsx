
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CeoMessage: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* CEO Image */}
          <div className="lg:w-1/3 relative h-full">
            <div className="h-full w-full bg-gradient-to-br from-neptuno-navy to-neptuno-blue p-8 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop" 
                    alt="CEO de Neptuno" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-neptuno-blue font-semibold text-sm shadow-md">
                  CEO & Founder
                </div>
              </div>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="lg:w-2/3 p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              A letter from the CEO
            </h2>
            <h3 className="text-xl text-gray-600 mb-6">
              Conoce todo sobre Neptuno de la mano de su creador
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Cuando comencé este proyecto, tenía en mente un objetivo claro: simplificar el proceso de creación de MVPs sin sacrificar la calidad o la seguridad.
              </p>
              
              <p>
                Como desarrollador, siempre me frustraba tener que reinventar la rueda con cada nuevo proyecto - configurar bases de datos, implementar sistemas de autenticación, gestionar pagos, y todo lo necesario para crear un producto mínimo viable de calidad.
              </p>
              
              <p className="font-medium">
                Neptuno nació de esa frustración y de la firme creencia de que es posible lanzar ideas al mercado rápidamente sin comprometer la estructura técnica.
              </p>
              
              <div className="pt-4">
                <Button className="bg-neptuno-blue hover:bg-blue-600">
                  Nuestra historia completa <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
