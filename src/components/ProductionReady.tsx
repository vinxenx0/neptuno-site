
import React from 'react';
import { Shield, Database, Scale, Server, Cpu, Network, BarChart, Lock } from 'lucide-react';

const ProductionReady: React.FC = () => {
  return (
    <section id="production-ready" className="section py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Listo para Producción</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neptuno se despliega con una arquitectura robusta, escalable y segura desde el primer minuto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Architecture Card - Enhanced with better animations */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl overflow-hidden col-span-1 lg:col-span-2 border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Arquitectura Dockerizada y Balanceada</h3>
              
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-4">
                {/* Animated Architecture Diagram - Enhanced version */}
                <div className="absolute w-full h-full">
                  {/* Internet/Users */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white/90 border border-blue-200 rounded-lg p-3 text-center w-40 shadow-lg animate-pulse-slow">
                    <div className="text-sm font-medium text-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                        <path d="M12 8v8"/>
                        <path d="M8 12h8"/>
                      </svg>
                      Usuario/Internet
                    </div>
                  </div>
                  
                  {/* Connection lines animated */}
                  <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-300 animate-pulse-slow"></div>
                  
                  {/* Nginx Proxy */}
                  <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-4 text-center w-64 shadow-md hover:shadow-lg transition-all">
                    <div className="flex items-center justify-center mb-1">
                      <Network size={20} className="text-blue-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Proxy</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">
                      Nginx + SSL + HTTP/2 + Cache Distribuido
                    </div>
                  </div>
                  
                  {/* Connection lines animated */}
                  <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-green-300"></div>
                  <div className="absolute top-[130px] left-[calc(50%-60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-br from-blue-300 to-purple-300 rotate-45"></div>
                  <div className="absolute top-[130px] left-[calc(50%+60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-br from-blue-300 to-indigo-300 -rotate-45"></div>
                  
                  {/* API Containers with enhanced animations */}
                  <div className="absolute top-[170px] left-1/4 transform -translate-x-1/2 bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-lg p-3 text-center w-40 shadow-md animate-float hover:shadow-lg transition-all">
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno API</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-100 px-2 py-1 rounded text-xs text-green-800 animate-pulse-slow">Replica 1</div>
                  </div>
                  
                  <div className="absolute top-[145px] left-[40%] transform -translate-x-1/2 bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-lg p-3 text-center w-40 shadow-md animate-float hover:shadow-lg transition-all" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno API</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-100 px-2 py-1 rounded text-xs text-green-800 animate-pulse-slow">Replica 2</div>
                  </div>
                  
                  {/* Dashboard Containers with enhanced animations */}
                  <div className="absolute top-[140px] right-[30%] bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-300 rounded-lg p-3 text-center w-44 shadow-md animate-float hover:shadow-lg transition-all" style={{animationDelay: '0.7s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">Next.js + TailwindCSS</div>
                  </div>
                  
                  <div className="absolute top-[185px] right-[15%] bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-300 rounded-lg p-3 text-center w-44 shadow-md animate-float hover:shadow-lg transition-all" style={{animationDelay: '0.9s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">Next.js + TailwindCSS</div>
                    <div className="mt-2 bg-indigo-100 px-2 py-1 rounded text-xs text-indigo-800 animate-pulse-slow">Replica</div>
                  </div>
                  
                  {/* Connection lines to DB with better styling */}
                  <div className="absolute top-[230px] left-1/4 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-green-300 to-purple-300"></div>
                  <div className="absolute top-[230px] left-[40%] transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-green-300 to-purple-300"></div>
                  <div className="absolute top-[230px] right-[30%] w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
                  <div className="absolute top-[230px] right-[15%] w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
                  
                  {/* DB Container with enhanced styling */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-300 rounded-lg p-4 text-center w-52 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center justify-center mb-1">
                      <Database size={18} className="text-purple-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno DB Cluster</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 rounded p-1">PostgreSQL + TimescaleDB</div>
                    <div className="flex justify-center gap-2 mt-2">
                      <div className="bg-purple-100 px-2 py-1 rounded-full text-xs text-purple-800">Primary</div>
                      <div className="bg-purple-100 px-2 py-1 rounded-full text-xs text-purple-800">Replica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Cards */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="text-neptuno-blue" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3 text-gray-800">Seguridad Integrada</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
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
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Scale className="text-teal-600" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3 text-gray-800">Escalabilidad</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
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
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200 p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Cpu className="text-amber-600" size={24} />
                </div>
                <h3 className="text-lg font-bold ml-3 text-gray-800">DevOps Ready</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
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
