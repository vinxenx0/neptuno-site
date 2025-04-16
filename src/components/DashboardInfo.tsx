
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Gauge, 
  Settings, 
  Users, 
  Trophy, 
  CreditCard, 
  Tag,
  BarChartBig,
  Server
} from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dashboardScreens = [
  {
    image: (
      <div className="glass-card bg-gradient-to-br from-neptuno-navy to-blue-900 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Panel de Administración</h3>
          <Badge variant="outline" className="border-neptuno-teal text-neptuno-teal font-semibold">INCLUIDO</Badge>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            Control total del sistema desde un único lugar. Configura todas las características de Neptuno sin escribir código.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Settings size={20} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">33</div>
                  <div className="text-xs text-gray-400">Configuraciones</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Server size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-xs text-gray-400">Integraciones</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Trophy size={20} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-gray-400">Gamificación</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 px-4 py-3 bg-white/10 rounded-xl">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <div className="flex items-center whitespace-nowrap">
                <Users size={18} className="text-blue-300 mr-2" />
                <span>Usuarios</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <Trophy size={18} className="text-yellow-300 mr-2" />
                <span>Gamificación</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <CreditCard size={18} className="text-green-300 mr-2" />
                <span>Pagos</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <Tag size={18} className="text-purple-300 mr-2" />
                <span>Cupones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Panel de Administración",
    description: "Gestión completa del sistema, usuarios, pagos y configuraciones"
  },
  {
    image: (
      <div className="glass-card p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Panel de Usuario</h3>
            <p className="text-blue-200">Experiencia personalizada</p>
          </div>
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
            A
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 p-4 rounded-xl">
            <div>
              <div className="text-xs text-blue-200 mb-1">TUS CRÉDITOS</div>
              <div className="text-2xl font-bold flex items-center">
                1040
                <CreditCard size={16} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 rounded-xl">
            <div>
              <div className="text-xs text-blue-200 mb-1">TRANSACCIONES</div>
              <div className="text-2xl font-bold flex items-center">
                3
                <BarChartBig size={16} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 rounded-xl">
            <div>
              <div className="text-xs text-blue-200 mb-1">PAGOS</div>
              <div className="text-2xl font-bold flex items-center">
                2
                <Gauge size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold">Actividad reciente</div>
            <div className="text-xs text-blue-200">Últimas 24h</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mr-2 text-white text-xs">+</div>
                <span>purchase</span>
              </div>
              <div className="text-green-300">+2 créditos</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center mr-2 text-white text-xs">-</div>
                <span>api_call</span>
              </div>
              <div className="text-red-300">-10 créditos</div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Panel de Usuario",
    description: "Control de créditos, puntos, insignias y actividad"
  },
  {
    image: (
      <div className="glass-card bg-gradient-to-br from-indigo-700 to-violet-900 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Analítica de Gamificación</h3>
          <Badge variant="outline" className="border-purple-300 text-purple-300 font-semibold">PRO</Badge>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <span className="text-indigo-200">Conversión por badges</span>
              <span className="text-white">78%</span>
            </div>
            <div className="w-full bg-indigo-800/50 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-purple-400 to-indigo-300 h-2.5 rounded-full" style={{width: '78%'}}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-xs text-indigo-200 mb-1">USUARIOS ACTIVOS</div>
              <div className="text-2xl font-bold">1,254</div>
              <div className="text-xs text-green-400 flex items-center">
                <span className="mr-1">+12%</span>
                vs semana anterior
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-xs text-indigo-200 mb-1">PUNTOS OTORGADOS</div>
              <div className="text-2xl font-bold">25.8K</div>
              <div className="text-xs text-green-400 flex items-center">
                <span className="mr-1">+28%</span>
                vs semana anterior
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-sm font-semibold mb-2">Desafíos más populares</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Encuesta satisfacción</span>
                <span className="text-sm font-medium">268 completados</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Compartir en redes</span>
                <span className="text-sm font-medium">182 completados</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Primera compra</span>
                <span className="text-sm font-medium">95 completados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Analítica de Gamificación",
    description: "Métricas, conversión y rendimiento de la gamificación"
  },
  {
    image: (
      <div className="glass-card bg-gradient-to-br from-emerald-700 to-teal-900 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Sistema de Pagos</h3>
          <Badge variant="outline" className="border-emerald-300 text-emerald-300 font-semibold">ENTERPRISE</Badge>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-xs text-emerald-200 mb-1">INGRESOS ESTE MES</div>
              <div className="text-2xl font-bold">4,320€</div>
              <div className="text-xs text-green-400">+18% vs mes anterior</div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-xs text-emerald-200 mb-1">SUSCRIPCIONES ACTIVAS</div>
              <div className="text-2xl font-bold">148</div>
              <div className="text-xs text-green-400">+5 nuevos esta semana</div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-sm font-semibold mb-2">Planes más populares</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-blue-400 rounded-full mr-2"></div>
                  <span>Pro Mensual</span>
                </div>
                <span>65%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-purple-400 rounded-full mr-2"></div>
                  <span>Pro Anual</span>
                </div>
                <span>22%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-emerald-400 rounded-full mr-2"></div>
                  <span>Enterprise</span>
                </div>
                <span>13%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Procesamiento de pagos</div>
              <div className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Operativo</div>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <div className="h-8 w-12 bg-white rounded flex items-center justify-center">
                <div className="text-blue-800 font-bold text-sm">Visa</div>
              </div>
              <div className="h-8 w-12 bg-red-500 rounded flex items-center justify-center">
                <div className="text-white font-bold text-sm">MC</div>
              </div>
              <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center">
                <div className="text-white font-bold text-sm">PP</div>
              </div>
              <div className="h-8 w-12 bg-orange-500 rounded flex items-center justify-center">
                <div className="text-white font-bold text-sm">BTC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Sistema de Pagos",
    description: "Gestión de suscripciones, pagos y transacciones"
  }
];

const DashboardInfo: React.FC = () => {
  return (
    <section id="dashboards" className="section bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paneles de Control Incluidos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neptuno incluye dashboards completos para administración y usuarios, permitiendo la gestión total del sistema.
          </p>
        </div>
        
        <div className="relative px-10">
          <Carousel 
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {dashboardScreens.map((screen, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="h-full p-1">
                    <div className="h-full flex flex-col">
                      {screen.image}
                      <div className="text-center mt-4">
                        <h4 className="text-lg font-semibold">{screen.title}</h4>
                        <p className="text-gray-600">{screen.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 bg-white/80 backdrop-blur-sm" />
              <CarouselNext className="-right-4 bg-white/80 backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;
