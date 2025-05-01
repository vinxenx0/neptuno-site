
import React from 'react';
import { Clock, ArrowUpRight, Gift, Link } from 'lucide-react';

const WhyChooseNeptuno: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Por qué elegir Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La plataforma ideal para crear productos digitales con rapidez y eficiencia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-neptuno-blue/10 flex items-center justify-center mb-5">
              <Clock className="text-neptuno-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ahorra tiempo</h3>
            <p className="text-gray-600 mb-4">
              Lanza tu MVP en minutos y tu producto en días. Olvídate de semanas configurando la infraestructura básica.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Implementación rápida con guías paso a paso</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Plantillas preconfiguradas para casos de uso comunes</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Automatización de tareas repetitivas</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-neptuno-amber/10 flex items-center justify-center mb-5">
              <ArrowUpRight className="text-neptuno-amber" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Escalable y modular</h3>
            <p className="text-gray-600 mb-4">
              Crece sin límites, desde un micrositio hasta un SaaS complejo. Arquitectura diseñada para escalar.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Balanceo de carga automático</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Servicios desacoplados y reemplazables</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">De 10 a 10.000 usuarios sin cambiar arquitectura</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-neptuno-teal/10 flex items-center justify-center mb-5">
              <Gift className="text-neptuno-teal" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Todo en uno</h3>
            <p className="text-gray-600 mb-4">
              Autenticación, gamificación, pagos y tracking en una sola solución. Todo lo que necesitas para lanzar un producto digital completo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Sistemas de gamificación personalizables</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Integración con Stripe, PayPal y otras pasarelas</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Analytics y métricas incluidas</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <Link className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrable</h3>
            <p className="text-gray-600 mb-4">
              Conecta con cualquier frontend o sistema externo. API abierta y documentada para extensiones ilimitadas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">API REST con documentación OpenAPI</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">Webhooks para integraciones en tiempo real</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2 mt-2"></span>
                <span className="text-gray-600 text-sm">SDKs para múltiples lenguajes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNeptuno;
