
import React from 'react';
import { 
  Shield, 
  Server, 
  Database, 
  GitBranch,
  ArrowRight,
  Layers
} from 'lucide-react';
import { Button } from './ui/button';

const ProductionReady: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-neptuno-navy via-[#1e3a8a] to-[#1e294b] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Listo para Producción desde el Día Uno</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Arquitectura dockerizada, balanceada y escalable con configuraciones optimizadas para entornos de producción.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Architecture visualization */}
          <div className="relative">
            <div className="glass-card p-6 overflow-hidden">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    {/* Animated Architecture Diagram */}
                    <div className="relative">
                      {/* Nginx Layer */}
                      <div className="bg-indigo-900/80 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 mb-8 shadow-lg animate-pulse-gentle">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Server size={20} className="text-neptuno-teal" />
                            <span className="font-medium">NGINX</span>
                          </div>
                          <span className="text-xs bg-neptuno-teal/20 text-neptuno-teal px-2 py-0.5 rounded">
                            Proxy + Cache + SSL
                          </span>
                        </div>
                      </div>
                      
                      {/* Backend & Frontend Containers */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-blue-900/70 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 animate-float shadow-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <GitBranch size={18} className="text-neptuno-blue" />
                            <span className="font-medium">FastAPI</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            container:8000
                          </div>
                        </div>
                        <div className="bg-blue-900/70 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 animate-float shadow-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <GitBranch size={18} className="text-neptuno-blue" />
                            <span className="font-medium">FastAPI</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            container:8001
                          </div>
                        </div>
                        <div className="bg-amber-900/70 backdrop-blur-sm rounded-lg p-4 border border-amber-500/30 animate-float shadow-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Layers size={18} className="text-neptuno-amber" />
                            <span className="font-medium">Next.js</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            container:3000
                          </div>
                        </div>
                      </div>
                      
                      {/* Database Layer */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-900/70 backdrop-blur-sm rounded-lg p-4 border border-green-500/30 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Database size={18} className="text-green-400" />
                              <span className="font-medium">MariaDB</span>
                            </div>
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                              Primary
                            </span>
                          </div>
                        </div>
                        <div className="bg-green-900/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Database size={18} className="text-green-400/70" />
                              <span className="font-medium">MariaDB</span>
                            </div>
                            <span className="text-xs bg-green-500/10 text-green-400/70 px-2 py-0.5 rounded">
                              Replica
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Lines (Simplified) */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200 80 L110 130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M200 80 L200 130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M200 80 L290 130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M110 180 L150 230" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M290 180 L250 230" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Features */}
          <div className="space-y-6">
            <div className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-neptuno-teal/20 flex items-center justify-center mr-4 shrink-0">
                  <Shield size={20} className="text-neptuno-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seguridad desde el inicio</h3>
                  <p className="text-gray-300 mb-3">
                    Implementación completa de OAuth2, JWT, HTTPS, CORS, y protección CSRF lista para usar.
                  </p>
                  <div className="text-sm mb-2">
                    <span className="badge bg-neptuno-teal/20 text-neptuno-teal px-2 py-1 mr-2 rounded-md">OAuth2</span>
                    <span className="badge bg-neptuno-teal/20 text-neptuno-teal px-2 py-1 mr-2 rounded-md">JWT</span>
                    <span className="badge bg-neptuno-teal/20 text-neptuno-teal px-2 py-1 mr-2 rounded-md">HTTPS</span>
                    <span className="badge bg-neptuno-teal/20 text-neptuno-teal px-2 py-1 rounded-md">CSRF</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-neptuno-blue/20 flex items-center justify-center mr-4 shrink-0">
                  <Server size={20} className="text-neptuno-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Preparado para escalar</h3>
                  <p className="text-gray-300 mb-3">
                    Balanceo de carga con Nginx, replicación de servicios y configuración Docker optimizada.
                  </p>
                  <div className="text-sm">
                    <span className="badge bg-neptuno-blue/20 text-neptuno-blue px-2 py-1 mr-2 rounded-md">Docker</span>
                    <span className="badge bg-neptuno-blue/20 text-neptuno-blue px-2 py-1 mr-2 rounded-md">Nginx</span>
                    <span className="badge bg-neptuno-blue/20 text-neptuno-blue px-2 py-1 mr-2 rounded-md">Gunicorn</span>
                    <span className="badge bg-neptuno-blue/20 text-neptuno-blue px-2 py-1 rounded-md">Réplicas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex">
              <Button className="ml-auto" variant="outline">
                <span>Ver arquitectura completa</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionReady;
