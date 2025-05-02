
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Code, Users, Layers, CreditCard, Zap, Workflow } from 'lucide-react';

const RoadmapItem = ({ 
  quarter, 
  year, 
  title, 
  objective, 
  features, 
  icon,
  gradient 
}: { 
  quarter: string; 
  year: string; 
  title: string; 
  objective: string; 
  features: string[]; 
  icon: React.ReactNode;
  gradient: string;
}) => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent -z-10"></div>
      
      <div className={`rounded-xl p-6 shadow-md mb-8 border border-gray-100 hover:shadow-lg transition-all ${gradient}`}>
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white/80 shadow-inner">
            {icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs bg-white/60 backdrop-blur-sm">
                {quarter} {year}
              </Badge>
              <span className="text-sm font-medium text-gray-600">v{title.split('v')[1]}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{title.split('v')[0].trim()}</h3>
            <p className="text-sm text-gray-600 mb-4 font-medium">Objetivo: {objective}</p>
            
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mt-2"></span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q2",
      year: "2025",
      title: "Beta Privada v0.x",
      objective: "Validación temprana con feedback real",
      features: [
        "Acceso cerrado con early adopters.",
        "Deploys dockerizados con stack base (FastAPI + Next.js SSR).",
        "Autenticación OAuth2 y JWT estable.",
        "Primeros módulos de gamificación (puntos, niveles, badges).",
        "Tracking de eventos y sistema de sesiones listo.",
        "APIs REST completas con OpenAPI."
      ],
      icon: <Code className="text-neptuno-blue" size={24} />,
      gradient: "bg-gradient-to-br from-white to-blue-50"
    },
    {
      quarter: "Q3",
      year: "2025",
      title: "Lanzamiento Público v1.0",
      objective: "Versión funcional para producción",
      features: [
        "Dashboards admin con gestión avanzada de usuarios.",
        "Subscripciones y pagos integrados (Stripe + crypto opcional).",
        "Sistema de automatización con triggers y segmentaciones.",
        "Eventos con webhooks configurables y sistema de colas básico.",
        "Documentación completa + SDK inicial (Python/JS).",
        "Opt-in para hosting autoescalable vía Docker Compose o Kubernetes."
      ],
      icon: <Zap className="text-neptuno-amber" size={24} />,
      gradient: "bg-gradient-to-br from-white to-amber-50"
    },
    {
      quarter: "Q1",
      year: "2026",
      title: "Neptuno Enterprise v2.0",
      objective: "Funcionalidades para escalado de negocio",
      features: [
        "Integración con Google Ads (API) para gestión de campañas.",
        "Módulo de email marketing (SMTP, plantillas, automatización).",
        "Módulo Social Layer: perfiles, feed, followers, notificaciones.",
        "Auditoría y logs para trazabilidad.",
        "Multi-tenant support (opcional en configuración avanzada).",
        "Escalado horizontal con balanceo vía Nginx y Gunicorn."
      ],
      icon: <CreditCard className="text-neptuno-teal" size={24} />,
      gradient: "bg-gradient-to-br from-white to-teal-50"
    },
    {
      quarter: "Q2",
      year: "2026",
      title: "Community Edition v2.x LTS",
      objective: "Versión OSS lista para auto-hosting",
      features: [
        "Repositorio público, CI/CD de ejemplo, entorno local en minutos.",
        "CLI para scaffolding, extensiones y updates.",
        "Core modular desacoplado del frontend por defecto.",
        "Licencia abierta con add-ons premium opcionales.",
        "Ejemplos de integración con Vue, Svelte y Astro."
      ],
      icon: <Users className="text-purple-500" size={24} />,
      gradient: "bg-gradient-to-br from-white to-purple-50"
    },
    {
      quarter: "Q3",
      year: "2026",
      title: "Módulo CRM v2.5",
      objective: "Gestión de relaciones y automatización avanzada",
      features: [
        "Segmentación dinámica de usuarios y lead scoring.",
        "Tareas, notas, embudos y workflows.",
        "Integración con plataformas externas vía Zapier o APIs personalizadas.",
        "Webhooks bidireccionales y sync de datos externos."
      ],
      icon: <Workflow className="text-rose-500" size={24} />,
      gradient: "bg-gradient-to-br from-white to-rose-50"
    },
    {
      quarter: "Continuo",
      year: "",
      title: "Mejoras continuas",
      objective: "Evolución y perfeccionamiento",
      features: [
        "Refactor continuo del core para mantener bajo acoplamiento.",
        "Compatibilidad con OpenTelemetry y Prometheus para observabilidad.",
        "Extensiones oficiales (experimentos: NFT rewards, IA para scoring).",
        "Feedback-driven development desde la comunidad."
      ],
      icon: <Layers className="text-indigo-500" size={24} />,
      gradient: "bg-gradient-to-br from-white to-indigo-50"
    }
  ];

  return (
    <section id="roadmap" className="section py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🛠️ Roadmap de Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimos una estrategia modular, centrada en entregar valor incremental con cada release.
            Estas son las etapas clave previstas en nuestro ciclo de desarrollo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {roadmapItems.slice(0, 3).map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
          
          <div className="space-y-6 lg:mt-16">
            {roadmapItems.slice(3).map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
