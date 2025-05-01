
import React, { ReactNode } from 'react';
import { Shield, Database, Scale, Server, Cpu, Network, BarChart, Lock } from 'lucide-react';

interface ProductionReadyProps {
  children?: ReactNode;
}

const ProductionReady: React.FC<ProductionReadyProps> = ({ children }) => {
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
          {/* Architecture Card */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl overflow-hidden col-span-1 lg:col-span-2 border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Arquitectura Dockerizada y Balanceada</h3>
              
              <div className="relative h-80 overflow-hidden">
                {/* Animated Architecture Diagram */}
                <div className="absolute w-full h-full">
                  {/* Internet/Users */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 text-center w-36 animate-pulse-gentle">
                    <div className="text-sm font-medium text-gray-800">Usuario/Internet</div>
                  </div>
                  
                  {/* Connection line */}
                  <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
                  
                  {/* Nginx Proxy */}
                  <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-blue-50 border border-blue-200 rounded-lg p-3 text-center w-60">
                    <div className="flex items-center justify-center mb-1">
                      <Network size={18} className="text-neptuno-blue mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Proxy</span>
                    </div>
                    <div className="text-xs text-gray-600">Nginx + SSL + HTTP/2 + Cache</div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
                  <div className="absolute top-[130px] left-[calc(50%-60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gray-300 rotate-45"></div>
                  <div className="absolute top-[130px] left-[calc(50%+60px)] transform -translate-x-1/2 w-0.5 h-20 bg-gray-300 -rotate-45"></div>
                  
                  {/* API Containers */}
                  <div className="absolute top-[170px] left-1/4 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 text-center w-40 animate-float">
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno API</span>
                    </div>
                    <div className="text-xs text-gray-600">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-100 px-2 py-1 rounded text-xs text-green-800">Replica 1</div>
                  </div>
                  
                  <div className="absolute top-[145px] left-[40%] transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 text-center w-40 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <Server size={18} className="text-green-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno API</span>
                    </div>
                    <div className="text-xs text-gray-600">FastAPI + OpenAPI</div>
                    <div className="mt-2 bg-green-100 px-2 py-1 rounded text-xs text-green-800">Replica 2</div>
                  </div>
                  
                  {/* Dashboard Container */}
                  <div className="absolute top-[140px] right-[30%] bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center w-44 animate-float" style={{animationDelay: '0.7s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-gray-600">Next.js + TailwindCSS</div>
                  </div>
                  
                  <div className="absolute top-[185px] right-[15%] bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center w-44 animate-float" style={{animationDelay: '0.9s'}}>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart size={18} className="text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno Dashboard</span>
                    </div>
                    <div className="text-xs text-gray-600">Next.js + TailwindCSS</div>
                    <div className="mt-2 bg-indigo-100 px-2 py-1 rounded text-xs text-indigo-800">Replica</div>
                  </div>
                  
                  {/* Connection lines to DB */}
                  <div className="absolute top-[230px] left-1/4 transform -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
                  <div className="absolute top-[230px] left-[40%] transform -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
                  <div className="absolute top-[230px] right-[30%] w-0.5 h-12 bg-gray-300"></div>
                  <div className="absolute top-[230px] right-[15%] w-0.5 h-12 bg-gray-300"></div>
                  
                  {/* DB Container */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-50 border border-purple-200 rounded-lg p-3 text-center w-48">
                    <div className="flex items-center justify-center mb-1">
                      <Database size={18} className="text-purple-600 mr-2" />
                      <span className="font-medium text-gray-800">Neptuno DB</span>
                    </div>
                    <div className="text-xs text-gray-600">PostgreSQL + Replicación</div>
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

        {children}
      </div>
    </section>
  );
};

export default ProductionReady;
