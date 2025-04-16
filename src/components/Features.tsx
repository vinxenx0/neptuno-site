
import React, { useState } from 'react';
import { 
  Lock, 
  Trophy, 
  CreditCard, 
  Users, 
  Layers, 
  GitMerge,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const featuresList = [
  {
    icon: <Lock className="text-neptuno-blue" size={32} />,
    title: "Autenticación Avanzada",
    description: "OAuth2, JWT, roles y permisos integrados para gestionar usuarios y seguridad con un solo comando.",
    details: ["Social login", "Roles y permisos", "Verificación en 2 pasos", "JWT seguro"],
    image: "/assets/auth-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">U</div>
            <div>
              <div className="font-medium text-white">Usuario Autenticado</div>
              <div className="text-xs text-gray-400">Rol: Administrador</div>
            </div>
          </div>
          <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">Verificado</div>
        </div>
        
        <div className="space-y-3 text-sm flex-1">
          <div className="flex justify-between bg-gray-800/50 p-2 rounded">
            <span className="text-gray-400">Método de Login</span>
            <span className="text-white">Google OAuth2</span>
          </div>
          <div className="flex justify-between bg-gray-800/50 p-2 rounded">
            <span className="text-gray-400">Permisos</span>
            <span className="text-white">Gestión Total</span>
          </div>
          <div className="flex justify-between bg-gray-800/50 p-2 rounded">
            <span className="text-gray-400">2FA</span>
            <span className="text-white">Activado (TOTP)</span>
          </div>
          <div className="flex justify-between bg-gray-800/50 p-2 rounded">
            <span className="text-gray-400">Sesión</span>
            <span className="text-white">JWT (exp: 2h)</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Trophy className="text-neptuno-amber" size={32} />,
    title: "Gamificación Completa",
    description: "Sistema de puntos, créditos, badges y niveles para aumentar engagement y conversión.",
    details: ["Sistema de puntos", "Badges personalizables", "Niveles y rangos", "Recompensas automáticas"],
    image: "/assets/gamification-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-indigo-700/50 pb-4">
          <div className="text-xl font-bold text-white">Perfil de Usuario</div>
          <div className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">Nivel 8</div>
        </div>
        
        <div className="space-y-4 text-sm flex-1">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-indigo-200">Progreso al Nivel 9</span>
              <span className="text-indigo-200">75%</span>
            </div>
            <div className="w-full bg-indigo-700/30 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-indigo-800/50 p-3 rounded-lg flex flex-col">
              <span className="text-indigo-300 text-xs">Puntos totales</span>
              <span className="text-2xl font-bold text-white">1,250</span>
            </div>
            <div className="bg-indigo-800/50 p-3 rounded-lg flex flex-col">
              <span className="text-indigo-300 text-xs">Badges</span>
              <span className="text-2xl font-bold text-white">7/24</span>
            </div>
            <div className="bg-indigo-800/50 p-3 rounded-lg flex flex-col">
              <span className="text-indigo-300 text-xs">Créditos</span>
              <span className="text-2xl font-bold text-white">520</span>
            </div>
            <div className="bg-indigo-800/50 p-3 rounded-lg flex flex-col">
              <span className="text-indigo-300 text-xs">Challenges</span>
              <span className="text-2xl font-bold text-white">2</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <CreditCard className="text-neptuno-teal" size={32} />,
    title: "Pagos y Monetización",
    description: "Integración de múltiples pasarelas de pago, suscripciones y modelos freemium listos para usar.",
    details: ["Múltiples pasarelas", "Suscripciones", "Modelo freemium", "Cupones y descuentos"],
    image: "/assets/payments-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-teal-800 to-emerald-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-teal-700/50 pb-4">
          <div className="text-xl font-bold text-white">Suscripciones</div>
          <div className="bg-teal-500/20 text-teal-300 text-xs px-2 py-1 rounded">Plan Pro</div>
        </div>
        
        <div className="space-y-4 text-sm flex-1">
          <div className="bg-teal-800/50 p-3 rounded-lg">
            <div className="flex justify-between mb-1">
              <span className="text-teal-200">Estado</span>
              <span className="text-green-400">Activo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-teal-200">Próximo ciclo</span>
              <span className="text-white">15/05/2025</span>
            </div>
          </div>
          
          <div className="bg-teal-800/50 p-3 rounded-lg">
            <div className="flex justify-between mb-1">
              <span className="text-teal-200">Método de pago</span>
              <span className="text-white flex items-center">
                <span className="w-4 h-4 rounded bg-blue-500 mr-1 flex items-center justify-center text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                    <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                Visa ***4582
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-teal-200">Ciclo</span>
              <span className="text-white">Mensual</span>
            </div>
          </div>
          
          <div className="bg-teal-800/50 p-3 rounded-lg">
            <div className="flex justify-between">
              <span className="text-teal-200">Precio mensual</span>
              <span className="text-white">29.99€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-teal-200">Con descuento</span>
              <span className="text-green-400">23.99€</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Users className="text-purple-500" size={32} />,
    title: "Gestión de Usuarios y Leads",
    description: "Seguimiento completo del recorrido del usuario desde el anonimato hasta la conversión.",
    details: ["Tracking avanzado", "Analítica de conversión", "Segmentación", "Automatización"],
    image: "/assets/users-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-purple-800 to-fuchsia-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-purple-700/50 pb-4">
          <div className="text-xl font-bold text-white">Embudo de Conversión</div>
          <div className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded">Últimos 7 días</div>
        </div>
        
        <div className="space-y-4 text-sm flex-1">
          <div className="mb-6 space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-purple-200">Visitantes</span>
                <span className="text-purple-200">1,450</span>
              </div>
              <div className="w-full bg-purple-700/30 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-fuchsia-400 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-purple-200">Registros</span>
                <span className="text-purple-200">487</span>
              </div>
              <div className="w-full bg-purple-700/30 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-fuchsia-400 h-2 rounded-full" style={{width: '33%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-purple-200">Prueba gratuita</span>
                <span className="text-purple-200">164</span>
              </div>
              <div className="w-full bg-purple-700/30 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-fuchsia-400 h-2 rounded-full" style={{width: '11%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-purple-200">Clientes</span>
                <span className="text-purple-200">42</span>
              </div>
              <div className="w-full bg-purple-700/30 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-fuchsia-400 h-2 rounded-full" style={{width: '3%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/50 p-3 rounded-lg">
            <div className="text-purple-200 mb-2">Leads por canal</div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Email Marketing</span>
              <span className="text-white">45%</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Social Media</span>
              <span className="text-white">32%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white">Búsqueda orgánica</span>
              <span className="text-white">23%</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Layers className="text-green-500" size={32} />,
    title: "Backend Robusto",
    description: "FastAPI y OpenAPI con documentación automática y endpoints optimizados para rendimiento.",
    details: ["REST API documentada", "GraphQL opcional", "Validación automática", "Escalabilidad"],
    image: "/assets/backend-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-5 h-full flex flex-col font-mono">
        <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
            <div className="text-lg font-bold text-white">FastAPI</div>
          </div>
          <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">v0.105.0</div>
        </div>
        
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-green-400 overflow-x-auto flex-1">
          <div><span className="text-blue-400">from</span> <span className="text-orange-400">fastapi</span> <span className="text-blue-400">import</span> FastAPI, Depends</div>
          <div><span className="text-blue-400">from</span> <span className="text-orange-400">fastapi.security</span> <span className="text-blue-400">import</span> OAuth2PasswordBearer</div>
          <div><span className="text-blue-400">from</span> <span className="text-orange-400">neptuno.auth</span> <span className="text-blue-400">import</span> get_current_user</div>
          <div><span className="text-blue-400">from</span> <span className="text-orange-400">neptuno.models</span> <span className="text-blue-400">import</span> User, GamificationEvent</div>
          <br/>
          <div>app = FastAPI(</div>
          <div>&nbsp;&nbsp;title=<span className="text-yellow-300">"Neptuno API"</span>,</div>
          <div>&nbsp;&nbsp;description=<span className="text-yellow-300">"Autenticación, gamificación y monetización todo-en-uno"</span>,</div>
          <div>&nbsp;&nbsp;version=<span className="text-yellow-300">"1.0.0"</span></div>
          <div>)</div>
          <br/>
          <div><span className="text-blue-300">@app.post</span>(<span className="text-yellow-300">"/gamification/points"</span>)</div>
          <div><span className="text-blue-400">async</span> <span className="text-blue-400">def</span> <span className="text-yellow-400">award_points</span>(</div>
          <div>&nbsp;&nbsp;event: GamificationEvent,</div>
          <div>&nbsp;&nbsp;user: User = Depends(get_current_user)</div>
          <div>):</div>
          <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> {<span className="text-yellow-300">"success"</span>: <span className="text-blue-300">True</span>}</div>
        </div>
      </div>
    )
  },
  {
    icon: <GitMerge className="text-indigo-500" size={32} />,
    title: "100% Modular e Integrable",
    description: "Conecta con cualquier frontend y expande según las necesidades específicas de tu negocio.",
    details: ["Compatible con cualquier frontend", "Webhooks", "Eventos", "Extensible"],
    image: "/assets/modular-demo.png",
    demo: (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">
          <div className="text-lg font-bold text-white">Arquitectura Modular</div>
          <div className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded">Multi-stack</div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Central Neptuno Node */}
          <div className="bg-indigo-600 text-white rounded-lg p-2 w-32 text-center text-sm font-medium mb-4">Neptuno API</div>
          
          {/* Connection Lines */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {/* Frontend Connections */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-blue-500 text-white rounded-lg p-2 w-full text-center text-sm">React</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-green-500 text-white rounded-lg p-2 w-full text-center text-sm">Vue</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-red-500 text-white rounded-lg p-2 w-full text-center text-sm">Angular</div>
            </div>
          </div>
          
          <div className="my-4 text-gray-400 text-xs">API de integración universal</div>
          
          {/* Backend Services */}
          <div className="grid grid-cols-3 gap-4 w-full mt-2">
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-gray-700 text-white rounded-lg p-2 w-full text-center text-sm">Auth</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-yellow-600 text-white rounded-lg p-2 w-full text-center text-sm">Pagos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-0.5 bg-gray-500 mb-2"></div>
              <div className="bg-purple-600 text-white rounded-lg p-2 w-full text-center text-sm">Analytics</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section id="features" className="section bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para construir aplicaciones completas con gamificación, autenticación y monetización.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-4">
            {featuresList.map((feature, index) => (
              <Collapsible
                key={index}
                open={activeFeature === index}
                onOpenChange={(isOpen) => isOpen && setActiveFeature(index)}
                className="bg-white rounded-xl shadow-sm hover:shadow transition-shadow border border-gray-100 overflow-hidden"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 pr-8">{feature.description}</p>
                    </div>
                  </div>
                  {activeFeature === index ? 
                    <ChevronUp size={20} className="text-gray-400 flex-shrink-0" /> : 
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 animate-accordion-down">
                  <ul className="space-y-2 ml-16">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {featuresList.map((feature, index) => (
                <div 
                  key={index} 
                  className={`h-full transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0 hidden'}`}
                >
                  {feature.demo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
