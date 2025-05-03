
import React from 'react';
import { Check, Clock, ArrowRightCircle } from 'lucide-react';

const RoadmapItem = ({ 
  title, 
  date, 
  description, 
  items, 
  status, 
  color 
}: { 
  title: string; 
  date: string; 
  description: string; 
  items: string[]; 
  status: 'completed' | 'current' | 'upcoming';
  color: string;
}) => {
  return (
    <div className="relative mb-8">
      {/* Timeline connector */}
      {status !== 'completed' && (
        <div className="absolute left-6 top-16 h-full border-l-2 border-dashed border-gray-200"></div>
      )}
      
      <div className="flex">
        {/* Status indicator */}
        <div className="flex-shrink-0 mr-4">
          <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
            status === 'completed' 
              ? 'bg-green-100 text-green-600' 
              : status === 'current' 
                ? `${color} text-white` 
                : 'bg-gray-100 text-gray-400'
          }`}>
            {status === 'completed' ? (
              <Check size={24} />
            ) : status === 'current' ? (
              <Clock size={24} />
            ) : (
              <ArrowRightCircle size={24} />
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 
          ${status === 'current' ? 'ring-2 ring-offset-2 ' + color.replace('bg-', 'ring-') : ''}
        `}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className={`text-sm px-3 py-1 rounded-full ${
              status === 'completed' 
                ? 'bg-green-100 text-green-700' 
                : status === 'current' 
                  ? `${color} bg-opacity-20 ${color.replace('bg-', 'text-')}`
                  : 'bg-gray-100 text-gray-500'
            }`}>
              {date}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`h-1.5 w-1.5 rounded-full ${color} mr-2 mt-2`}></span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: "Beta Privada (v0.x)",
      date: "Q2 2025",
      description: "Validación temprana con feedback real",
      items: [
        "Acceso cerrado con early adopters",
        "Deploys dockerizados con stack base (FastAPI + Next.js SSR)",
        "Autenticación OAuth2 y JWT estable",
        "Primeros módulos de gamificación (puntos, niveles, badges)",
        "Tracking de eventos y sistema de sesiones listo",
        "APIs REST completas con OpenAPI"
      ],
      status: 'completed' as const,
      color: "bg-blue-500"
    },
    {
      title: "Lanzamiento Público v1.0",
      date: "Q3 2025",
      description: "Versión funcional para producción",
      items: [
        "Dashboards admin con gestión avanzada de usuarios",
        "Subscripciones y pagos integrados (Stripe + crypto opcional)",
        "Sistema de automatización con triggers y segmentaciones",
        "Eventos con webhooks configurables y sistema de colas básico",
        "Documentación completa + SDK inicial (Python/JS)",
        "Opt-in para hosting autoescalable vía Docker Compose o Kubernetes"
      ],
      status: 'current' as const,
      color: "bg-indigo-600"
    },
    {
      title: "Neptuno Enterprise v2.0",
      date: "Q1 2026",
      description: "Funcionalidades para escalado de negocio",
      items: [
        "Integración con Google Ads (API) para gestión de campañas",
        "Módulo de email marketing (SMTP, plantillas, automatización)",
        "Módulo Social Layer: perfiles, feed, followers, notificaciones",
        "Auditoría y logs para trazabilidad",
        "Multi-tenant support (opcional en configuración avanzada)",
        "Escalado horizontal con balanceo vía Nginx y Gunicorn"
      ],
      status: 'upcoming' as const,
      color: "bg-purple-600"
    },
    {
      title: "Community Edition (v2.x LTS)",
      date: "Q2 2026",
      description: "Versión OSS lista para auto-hosting",
      items: [
        "Repositorio público, CI/CD de ejemplo, entorno local en minutos",
        "CLI para scaffolding, extensiones y updates",
        "Core modular desacoplado del frontend por defecto",
        "Licencia abierta con add-ons premium opcionales",
        "Ejemplos de integración con Vue, Svelte y Astro"
      ],
      status: 'upcoming' as const,
      color: "bg-emerald-600"
    },
    {
      title: "Módulo CRM (Enterprise v2.5)",
      date: "Q3 2026",
      description: "Gestión de relaciones y automatización avanzada",
      items: [
        "Segmentación dinámica de usuarios y lead scoring",
        "Tareas, notas, embudos y workflows",
        "Integración con plataformas externas vía Zapier o APIs personalizadas",
        "Webhooks bidireccionales y sync de datos externos"
      ],
      status: 'upcoming' as const,
      color: "bg-amber-600"
    }
  ];

  return (
    <section id="roadmap" className="section py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap de Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimos una estrategia modular, centrada en entregar valor incremental con cada release
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {roadmapItems.slice(0, 3).map((item, index) => (
              <RoadmapItem 
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                items={item.items}
                status={item.status}
                color={item.color}
              />
            ))}
          </div>
          
          <div className="space-y-8">
            {roadmapItems.slice(3).map((item, index) => (
              <RoadmapItem 
                key={index + 3}
                title={item.title}
                date={item.date}
                description={item.description}
                items={item.items}
                status={item.status}
                color={item.color}
              />
            ))}
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-6">
              <h3 className="text-xl font-semibold mb-2">En curso — Mejoras continuas</h3>
              <p className="mb-6">Nuestro compromiso con la calidad y la innovación</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm">Refactor continuo del core para mantener bajo acoplamiento</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm">Compatibilidad con OpenTelemetry y Prometheus para observabilidad</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm">Extensiones oficiales (experimentos: NFT rewards, IA para scoring)</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm">Feedback-driven development desde la comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
