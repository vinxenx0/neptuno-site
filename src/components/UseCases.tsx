
import React from 'react';
import { 
  BarChart3, 
  Target,
  Store,
  ChevronRight
} from 'lucide-react';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="section bg-neptuno-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso Ideales</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neptuno está optimizado para múltiples escenarios donde la gamificación y la monetización son fundamentales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Caso de uso 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neptuno-amber/20 flex items-center justify-center mb-5">
              <Target className="text-neptuno-amber" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Campañas con Gamificación</h3>
            <p className="text-gray-300 mb-6">
              Aumenta la participación y el engagement en campañas de marketing con mecánicas de gamificación.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-amber mr-2" />
                Atribuye puntos por cada interacción
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-amber mr-2" />
                Define desafíos personalizados
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-amber mr-2" />
                Automatiza la conversión con triggers
              </li>
            </ul>
            <a href="#" className="flex items-center text-neptuno-amber hover:underline mt-auto">
              <span>Ver ejemplo</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          
          {/* Caso de uso 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neptuno-blue/20 flex items-center justify-center mb-5">
              <BarChart3 className="text-neptuno-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Landing Pages Monetizadas</h3>
            <p className="text-gray-300 mb-6">
              Crea landing pages con autenticación, pagos y análisis para maximizar la conversión.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-blue mr-2" />
                Autenticación OAuth2 y JWT
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-blue mr-2" />
                Pasarelas de pago integradas
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-blue mr-2" />
                Optimizado para alto tráfico
              </li>
            </ul>
            <a href="#" className="flex items-center text-neptuno-blue hover:underline mt-auto">
              <span>Ver ejemplo</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          
          {/* Caso de uso 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-neptuno-teal/20 flex items-center justify-center mb-5">
              <Store className="text-neptuno-teal" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">SaaS Escalable</h3>
            <p className="text-gray-300 mb-6">
              Construye aplicaciones SaaS completas con gestión avanzada de usuarios, permisos y pagos.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-teal mr-2" />
                Gestión total de usuarios y permisos
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-teal mr-2" />
                Integración con CRM y marketing
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight size={18} className="text-neptuno-teal mr-2" />
                Extensible para cualquier modelo de negocio
              </li>
            </ul>
            <a href="#" className="flex items-center text-neptuno-teal hover:underline mt-auto">
              <span>Ver ejemplo</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
