
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

const DashboardInfo: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paneles de Control Incluidos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neptuno incluye dashboards completos para administración y usuarios, permitiendo la gestión total del sistema.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Admin Dashboard */}
          <div className="space-y-6">
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
          </div>
          
          {/* User Dashboard */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;
