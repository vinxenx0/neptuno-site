
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import DemoBooking from './DemoBooking';

const Pricing: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  
  return (
    <>
      <section id="pricing" className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empieza Gratis, Escala según Necesites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neptuno es 100% gratuito. Solo pagas si necesitas servicios adicionales para tu implementación.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan gratuito */}
            <div 
              className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 ${
                hoveredPlan === 'free' ? 'shadow-lg scale-105' : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredPlan('free')}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Starter Kit</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">Gratis</span>
                  <span className="ml-1 text-gray-500">para siempre</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Todo lo necesario para empezar a construir tu aplicación con gamificación.
                </p>
                
                <Button className="w-full mb-6">Descargar Gratis</Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Código fuente completo</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Autenticación y gamificación</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Integraciones con pasarelas de pago</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Documentación completa</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Soporte comunitario</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Plan premium - siempre un poco más grande */}
            <div 
              className={`bg-neptuno-navy text-white rounded-xl shadow-md border border-neptuno-blue overflow-hidden transition-all duration-300 ${
                hoveredPlan === 'premium' ? 'scale-110 shadow-xl' : 'scale-105 hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredPlan('premium')}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="absolute top-0 right-0 bg-neptuno-amber text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Popular
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">Soporte Premium</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">€99</span>
                  <span className="ml-1 text-gray-300">/mes</span>
                </div>
                <p className="text-sm text-gray-300 mb-6">
                  Soporte técnico especializado para optimizar tu implementación.
                </p>
                
                <Button className="w-full mb-6 bg-white text-neptuno-navy hover:bg-gray-100">Contratar Soporte</Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-neptuno-teal mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Todo lo del plan gratuito</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-neptuno-teal mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-neptuno-teal mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Tiempo de respuesta &lt; 24h</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-neptuno-teal mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Acceso a versiones beta</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-neptuno-teal mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">5 horas de consultoría mensual</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Plan personalizado */}
            <div 
              className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 ${
                hoveredPlan === 'custom' ? 'shadow-lg scale-105' : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredPlan('custom')}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Desarrollo a Medida</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">Consultar</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Desarrollo personalizado para adaptar Neptuno a tu negocio.
                </p>
                
                <Button className="w-full mb-6" variant="outline">Contactar</Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Todo lo del plan premium</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Desarrollo de funciones a medida</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Integración con tu stack tecnológico</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Consultoría estratégica</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm">Acuerdo de nivel de servicio (SLA)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo booking section */}
      <DemoBooking />
    </>
  );
};

export default Pricing;
