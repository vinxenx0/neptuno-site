
import React from 'react';
import { Blocks, Zap, Users } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para lanzar rápido</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neptuno es un starter kit backend + frontend que elimina semanas de trabajo repetitivo. Autenticación avanzada, gamificación y pagos listos desde el día uno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-neptuno-blue/10 flex items-center justify-center mb-5">
              <Blocks className="text-neptuno-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">🧱 Stack listo para producción</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                Python + FastAPI, OpenAPI, MariaDB, Docker, Nginx.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                Frontend Next.js optimizado para SEO y SSR.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                Configuración de seguridad y escalabilidad incluida.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
                Testing y CI/CD preconfigurados para despliegue.
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-neptuno-amber/10 flex items-center justify-center mb-5">
              <Zap className="text-neptuno-amber" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">⚡ Desarrollo en tiempo récord</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                Tu MVP en horas, no semanas.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                Autenticación, pagos, gamificación y webhooks out-of-the-box.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                Interfaces admin preconstruidas y personalizables.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-amber mr-2 mt-2"></span>
                Plantillas y componentes listos para usar.
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-neptuno-teal/10 flex items-center justify-center mb-5">
              <Users className="text-neptuno-teal" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">🧠 Para freelancers & makers</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                Ideal para micro-agencias y makers.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                Sin vendor lock-in. 100% open source.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                Documentación detallada y comunidad activa.
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neptuno-teal mr-2 mt-2"></span>
                Actualizaciones constantes y mejoras basadas en feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
