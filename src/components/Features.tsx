
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
          <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> {`{"success": True}`}</div>
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

// Additional demo screens to enrich the visual experience
const additionalDemos = [
  {
    title: "Análisis de Datos",
    demo: (
      <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-blue-700/50 pb-4">
          <div className="text-xl font-bold text-white">Dashboard Analítico</div>
          <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">En Tiempo Real</div>
        </div>
        
        <div className="flex flex-col space-y-4 text-sm flex-1">
          <div className="bg-blue-800/50 p-3 rounded-lg">
            <div className="flex justify-between mb-1">
              <span className="text-blue-200">Usuarios activos</span>
              <span className="text-white">1,248</span>
            </div>
            <div className="w-full h-12 bg-blue-900/50 rounded-lg overflow-hidden mt-2">
              <div className="h-full w-full flex">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{width: '65%'}}></div>
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{width: '20%'}}></div>
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{width: '15%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <div className="text-blue-200 mb-1">Tasa de Conversión</div>
              <div className="text-2xl font-bold text-white">6.4%</div>
              <div className="text-green-400 text-xs flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
                +1.8% vs mes anterior
              </div>
            </div>
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <div className="text-blue-200 mb-1">Ingresos</div>
              <div className="text-2xl font-bold text-white">€9,842</div>
              <div className="text-green-400 text-xs flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
                +24% vs mes anterior
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Console CLI",
    demo: (
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-5 h-full flex flex-col font-mono">
        <div className="flex items-center mb-4 pb-2 border-b border-gray-800">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs ml-3">Terminal</div>
        </div>
        
        <div className="flex-1 text-green-400 text-sm flex flex-col">
          <div className="mb-2">
            <span className="text-blue-400">$ </span>
            <span className="text-gray-200">neptuno init my-saas-project</span>
          </div>
          <div className="mb-1 text-gray-400">🚀 Iniciando proyecto Neptuno...</div>
          <div className="mb-1 text-gray-400">🧪 Configurando servidor de desarrollo...</div>
          <div className="mb-1 text-gray-400">🔐 Generando claves de seguridad...</div>
          <div className="mb-1 text-gray-400">📦 Instalando dependencias...</div>
          <div className="mb-3 text-gray-400">✅ Proyecto creado con éxito!</div>
          
          <div className="mb-2">
            <span className="text-blue-400">$ </span>
            <span className="text-gray-200">neptuno deploy --production</span>
          </div>
          <div className="mb-1 text-gray-400">📡 Desplegando en producción...</div>
          <div className="mb-1 text-gray-400">🌐 Configurando dominio...</div>
          <div className="mb-1 text-gray-400">🔒 Instalando certificados SSL...</div>
          <div className="mb-1 text-green-400 font-bold">✨ ¡Listo! Tu aplicación está en producción.</div>
          <div className="text-gray-400">📝 URL: https://my-saas-project.neptuno.app</div>
        </div>
      </div>
    )
  },
  {
    title: "Mobile App",
    demo: (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-5 h-full flex flex-col">
        <div className="mx-auto w-56 h-full bg-black rounded-xl overflow-hidden border-4 border-gray-800 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3">
            <div className="flex justify-between items-center">
              <div className="text-white text-sm font-bold">Neptuno App</div>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-gray-100 p-2">
            <div className="rounded-lg bg-white shadow-sm p-2 mb-2">
              <div className="text-xs font-medium">Resultados de ventas</div>
              <div className="text-sm font-bold mt-1">€12,458</div>
              <div className="h-1.5 bg-gray-100 rounded-full mt-1">
                <div className="h-1.5 bg-green-500 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white shadow-sm p-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <div className="text-xs font-medium">Usuarios</div>
                <div className="text-xs font-bold">1,248</div>
              </div>
              <div className="rounded-lg bg-white shadow-sm p-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium">Conversiones</div>
                <div className="text-xs font-bold">842</div>
              </div>
            </div>
          </div>
          
          <div className="h-4 bg-black flex justify-center items-center">
            <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<number | null>(0);
  const [currentDemoIndex, setCurrentDemoIndex] = useState<number>(0);
  
  // Auto-rotate demos every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemoIndex((prev) => (prev + 1) % additionalDemos.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleCollapsibleChange = (index: number, open: boolean) => {
    if (open) {
      setActiveFeature(index);
      setIsOpen(index);
    } else {
      setIsOpen(null);
    }
  };

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
                open={isOpen === index}
                onOpenChange={(open) => handleCollapsibleChange(index, open)}
                className={`bg-white rounded-xl shadow-sm transition-all duration-300 border overflow-hidden ${
                  isOpen === index 
                    ? 'border-neptuno-blue ring-2 ring-neptuno-blue/20' 
                    : 'border-gray-100 hover:shadow'
                }`}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6">
                  <div className="flex items-center">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${
                      isOpen === index ? 'bg-neptuno-blue/10' : 'bg-gray-50'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h3 className={`text-xl font-semibold ${isOpen === index ? 'text-neptuno-blue' : ''}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 pr-8">{feature.description}</p>
                    </div>
                  </div>
                  {isOpen === index ? 
                    <ChevronUp size={20} className="text-neptuno-blue flex-shrink-0" /> : 
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
            <div className="h-full rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
              {/* Main demo feature */}
              <div className="flex-1 min-h-[300px] max-h-[400px] overflow-hidden">
                {featuresList.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`h-full transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0 hidden'}`}
                  >
                    {feature.demo}
                  </div>
                ))}
              </div>
              
              {/* Additional demo screens */}
              <div className="border-t border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-500 mb-3">Más ejemplos de utilidad</h4>
                <div className="relative overflow-hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" 
                       style={{ transform: `translateX(-${currentDemoIndex * 100}%)` }}>
                    {additionalDemos.map((demo, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-1">
                        <div className="h-40 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                          {demo.demo}
                        </div>
                        <p className="text-xs text-center text-gray-500 mt-1">{demo.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-3 space-x-1">
                  {additionalDemos.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentDemoIndex(index)} 
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentDemoIndex === index ? 'bg-neptuno-blue' : 'bg-gray-300'
                      }`}
                      aria-label={`Ver demo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
