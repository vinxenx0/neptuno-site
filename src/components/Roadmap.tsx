
import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, Clock, LockKeyhole, Rocket, ChartBar, Globe, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface RoadmapMilestone {
  icon: React.ReactNode;
  period: string;
  title: string;
  version: string;
  description: string;
  features: string[];
  status: 'completed' | 'current' | 'upcoming';
}

const Roadmap: React.FC = () => {
  const milestones: RoadmapMilestone[] = [
    {
      icon: <LockKeyhole className="text-neptuno-blue" size={24} />,
      period: 'Q2 2025',
      title: 'Beta Privada',
      version: 'v0.x',
      description: 'Validación temprana con feedback real',
      features: [
        'Acceso cerrado con early adopters',
        'Deploys dockerizados con stack base (FastAPI + Next.js SSR)',
        'Autenticación OAuth2 y JWT estable',
        'Primeros módulos de gamificación (puntos, niveles, badges)',
        'Tracking de eventos y sistema de sesiones listo',
        'APIs REST completas con OpenAPI'
      ],
      status: 'current'
    },
    {
      icon: <Rocket className="text-neptuno-blue" size={24} />,
      period: 'Q3 2025',
      title: 'Lanzamiento Público',
      version: 'v1.0',
      description: 'Versión funcional para producción',
      features: [
        'Dashboards admin con gestión avanzada de usuarios',
        'Subscripciones y pagos integrados (Stripe + crypto opcional)',
        'Sistema de automatización con triggers y segmentaciones',
        'Eventos con webhooks configurables y sistema de colas básico',
        'Documentación completa + SDK inicial (Python/JS)',
        'Opt-in para hosting autoescalable vía Docker Compose o Kubernetes'
      ],
      status: 'upcoming'
    },
    {
      icon: <ChartBar className="text-neptuno-blue" size={24} />,
      period: 'Q1 2026',
      title: 'Neptuno Enterprise',
      version: 'v2.0',
      description: 'Funcionalidades para escalado de negocio',
      features: [
        'Integración con Google Ads (API) para gestión de campañas',
        'Módulo de email marketing (SMTP, plantillas, automatización)',
        'Módulo Social Layer: perfiles, feed, followers, notificaciones',
        'Auditoría y logs para trazabilidad',
        'Multi-tenant support (opcional en configuración avanzada)',
        'Escalado horizontal con balanceo vía Nginx y Gunicorn'
      ],
      status: 'upcoming'
    },
    {
      icon: <Globe className="text-neptuno-blue" size={24} />,
      period: 'Q2 2026',
      title: 'Community Edition',
      version: 'v2.x LTS',
      description: 'Versión OSS lista para auto-hosting',
      features: [
        'Repositorio público, CI/CD de ejemplo, entorno local en minutos',
        'CLI para scaffolding, extensiones y updates',
        'Core modular desacoplado del frontend por defecto',
        'Licencia abierta con add-ons premium opcionales',
        'Ejemplos de integración con Vue, Svelte y Astro'
      ],
      status: 'upcoming'
    },
    {
      icon: <Mail className="text-neptuno-blue" size={24} />,
      period: 'Q3 2026',
      title: 'Módulo CRM',
      version: 'Enterprise v2.5',
      description: 'Gestión de relaciones y automatización avanzada',
      features: [
        'Segmentación dinámica de usuarios y lead scoring',
        'Tareas, notas, embudos y workflows',
        'Integración con plataformas externas vía Zapier o APIs personalizadas',
        'Webhooks bidireccionales y sync de datos externos'
      ],
      status: 'upcoming'
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-neptuno-blue/10 text-neptuno-blue rounded-full text-sm font-medium mb-4">
            <Calendar className="mr-2" size={16} />
            Roadmap de Desarrollo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planificación estratégica de Neptuno
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimos una estrategia modular, centrada en entregar valor incremental con cada release.
            Estas son las etapas clave previstas en nuestro ciclo de desarrollo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className={`p-6 border ${
              milestone.status === 'current' ? 'border-neptuno-blue/50 shadow-lg shadow-neptuno-blue/10' : 
              milestone.status === 'completed' ? 'bg-gray-50 border-green-200' : ''
            }`}>
              <div className="flex items-start">
                <div className={`h-12 w-12 rounded-lg ${
                  milestone.status === 'current' ? 'bg-neptuno-blue/10' : 
                  milestone.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                } flex items-center justify-center mr-4`}>
                  {milestone.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                      milestone.status === 'current' ? 'bg-neptuno-blue/10 text-neptuno-blue' : 
                      milestone.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {milestone.period}
                    </span>
                    
                    <span className="mx-2 text-gray-400">•</span>
                    
                    <span className="text-sm text-gray-500">
                      {milestone.version}
                    </span>
                    
                    {milestone.status === 'current' && (
                      <span className="ml-2 flex items-center text-sm text-neptuno-blue">
                        <Clock size={14} className="mr-1" />
                        En desarrollo
                      </span>
                    )}
                    
                    {milestone.status === 'completed' && (
                      <span className="ml-2 flex items-center text-sm text-green-600">
                        <CheckCircle2 size={14} className="mr-1" />
                        Completado
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  
                  <ul className="space-y-1.5">
                    {milestone.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-neptuno-blue mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
            <span className="h-2.5 w-2.5 bg-neptuno-teal rounded-full animate-pulse mr-2"></span>
            Mejoras continuas en cada iteración
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
