
import React from 'react';
import { 
  Lock, 
  Trophy, 
  CreditCard, 
  Users, 
  Layers, 
  GitMerge,
  ChevronRight
} from 'lucide-react';

const featuresList = [
  {
    icon: <Lock className="text-neptuno-blue" size={32} />,
    title: "Autenticación Avanzada",
    description: "OAuth2, JWT, roles y permisos integrados para gestionar usuarios y seguridad con un solo comando.",
    details: ["Social login", "Roles y permisos", "Verificación en 2 pasos", "JWT seguro"]
  },
  {
    icon: <Trophy className="text-neptuno-amber" size={32} />,
    title: "Gamificación Completa",
    description: "Sistema de puntos, créditos, badges y niveles para aumentar engagement y conversión.",
    details: ["Sistema de puntos", "Badges personalizables", "Niveles y rangos", "Recompensas automáticas"]
  },
  {
    icon: <CreditCard className="text-neptuno-teal" size={32} />,
    title: "Pagos y Monetización",
    description: "Integración de múltiples pasarelas de pago, suscripciones y modelos freemium listos para usar.",
    details: ["Múltiples pasarelas", "Suscripciones", "Modelo freemium", "Cupones y descuentos"]
  },
  {
    icon: <Users className="text-purple-500" size={32} />,
    title: "Gestión de Usuarios y Leads",
    description: "Seguimiento completo del recorrido del usuario desde el anonimato hasta la conversión.",
    details: ["Tracking avanzado", "Analítica de conversión", "Segmentación", "Automatización"]
  },
  {
    icon: <Layers className="text-green-500" size={32} />,
    title: "Backend Robusto",
    description: "FastAPI y OpenAPI con documentación automática y endpoints optimizados para rendimiento.",
    details: ["REST API documentada", "GraphQL opcional", "Validación automática", "Escalabilidad"]
  },
  {
    icon: <GitMerge className="text-indigo-500" size={32} />,
    title: "100% Modular e Integrable",
    description: "Conecta con cualquier frontend y expande según las necesidades específicas de tu negocio.",
    details: ["Compatible con cualquier frontend", "Webhooks", "Eventos", "Extensible"]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para construir aplicaciones completas con gamificación, autenticación y monetización.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ChevronRight size={16} className="text-neptuno-blue mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
