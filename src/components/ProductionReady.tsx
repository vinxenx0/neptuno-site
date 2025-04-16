
import React from 'react';
import { Shield, Database, Scale, Server, Cpu, Network, BarChart, Lock } from 'lucide-react';

const ProductionReady: React.FC = () => {
  return (
    <section id="production-ready" className="section py-24 bg-gradient-to-br from-gray-900 to-neptuno-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Listo para Producción</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neptuno se despliega con una arquitectura robusta, escalable y segura desde el primer minuto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Architecture Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden col-span-1 lg:col-span-2 border border-gray-700">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Arquitectura Dockerizada y Balanceada</h3>
              
              <div className="relative h-80 overflow-hidden">
                {/* Animated Architecture Diagram */}
                <div className="absolute w-full h-full">
                  {/* Internet/Users */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-center w-36 animate-pulse-gentle">
                    <div className="text-sm font-medium">Usuario/Internet</div>
                  </div>
                  
                  {/* Connection line */}
                  <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-600"></div>
                  
                  {/* Nginx Proxy */}
                  <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-blue-900/70 border border-blue-700 rounded-lg p-3 text-center w-60">
                    <div className="flex items-center justify-center mb-1">
                      <Network size={18} className="text-blue-400 mr-2" />
                      <span className="font-medium">Neptuno Proxy</span>
                    </div>
                    <div className="text-xs text-blue-300">Nginx + SSL + HTTP/2 + Cache</div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-600"></div>
                  <div className="absolute top-[130px] left-[calc(50%-60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gray-600 rotate-45"></div>
                  <div className="absolute top-[130px] left-[calc(50%+60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gray-600 -rotate-45"></div>
                  
                  {/* API Containers */}
                  <div className="absolute top-[170px] left-1/4 transform -translate-x-1/2 bg-green-900/70 border border-green-700 rounded-lg p-3 text-center w-40 animate-float">
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-400 mr-2" />
                      <span className="font-medium">Neptuno API</span>
                    </div>
                    <div className="text-xs text-green-300">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-800/50 px-2 py-1 rounded text-xs">Replica 1</div>
                  </div>
                  
                  <div className="absolute top-[145px] left-[40%] transform -translate-x-1/2 bg-green-900/70 border border-green-700 rounded-lg p-3 text-center w-40 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-400 mr-2" />
                      <span className="font-medium">Neptuno API</span>
                    </div>
                    <div className="text-xs text-green-300">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-800/50 px-2 py-1 rounded text-xs">Replica 2</div>
                  </div>
                  
                  {/* Dashboard Container */}
                  <div className="absolute top-[140px] right-[30%] bg-indigo-900/70 border border-indigo-700 rounded-lg p-3 text-center w-44 animate-float" style={{animationDelay: '0.7s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-400 mr-2" />
                      <span className="font-medium">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-indigo-300">Next.js + TailwindCSS</div>
                  </div>
                  
                  <div className="absolute top-[185px] right-[15%] bg-indigo-900/70 border border-indigo-700 rounded-lg p-3 text-center w-44 animate-float" style={{animationDelay: '0.9s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-400 mr-2" />
                      <span className="font-medium">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-indigo-300">Next.js + TailwindCSS</div>
                    <div className="mt-2 bg-indigo-800/50 px-2 py-1 rounded text-xs">Replica</div>
                  </div>
                  
                  {/* Connection lines to DB */}
                  <div className="absolute top-[230px] left-1/4 transform -translate-x-1/2 w-0.5 h-12 bg-gray-600"></div>
                  <div className="absolute top-[230px] left-[40%] transform -translate-x-1/2 w-0.5 h-12 bg-gray-600"></div>
                  <div className="absolute top-[230px] right-[30%] w-0.5 h-12 bg-gray-600"></div>
                  <div className="absolute top-[230px] right-[15%] w-0.5 h-12 bg-gray-600"></div>
                  
                  {/* DB Container */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-900/70 border border-purple-700 rounded-lg p-3 text-center w-48">
                    <div className="flex items-center justify-center mb-1">
                      <Database size={18} className="text-purple-400 mr-2" />
                      <span className="font-medium">Neptuno DB</span>
                    </div>
                    <div className="text-xs text-purple-300">PostgreSQL + Replicación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Cards */}
          <div className="col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-blue-900/70 to-blue-800/50 rounded-xl shadow-lg overflow-hidden border border-blue-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-800/50 flex items-center justify-center">
                  <Shield className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3">Seguridad Integrada</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
                  SSL/TLS automático con renovación
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
                  OAuth2, JWT y roles avanzados
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Protección contra CSRF y XSS
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Firewall y limitación de peticiones
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-900/70 to-teal-800/50 rounded-xl shadow-lg overflow-hidden border border-teal-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-teal-800/50 flex items-center justify-center">
                  <Scale className="text-teal-400" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3">Escalabilidad</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Balanceo de carga automático
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Réplicas de DB para alta disponibilidad
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Escalado horizontal de contenedores
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Caché en múltiples niveles
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-900/70 to-amber-800/50 rounded-xl shadow-lg overflow-hidden border border-amber-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-amber-800/50 flex items-center justify-center">
                  <Cpu className="text-amber-400" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3">DevOps Ready</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-2"></span>
                  Logs centralizados y rotativos
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-2"></span>
                  Monitorización y métricas
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-2"></span>
                  Backup automático cada 6h
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-2"></span>
                  CI/CD compatible con GitHub Actions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionReady;
