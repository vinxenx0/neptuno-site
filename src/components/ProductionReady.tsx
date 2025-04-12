
import React from 'react';
import { 
  Shield, 
  Server, 
  Database, 
  GitBranch,
  ArrowRight
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
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 mb-8 shadow-lg animate-pulse-gentle">
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
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-float shadow-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <GitBranch size={18} className="text-neptuno-blue" />
                            <span className="font-medium">FastAPI</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            container:8000
                          </div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-float shadow-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <GitBranch size={18} className="text-neptuno-amber" />
                            <span className="font-medium">Next.js</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            container:3000
                          </div>
                        </div>
                      </div>
                      
                      {/* Database Layer */}
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Database size={18} className="text-green-400" />
                            <span className="font-medium">MariaDB</span>
                          </div>
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                            with Replicas
                          </span>
                        </div>
                      </div>
                      
                      {/* Connection Lines (Simplified) */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200 80 L140 130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M200 80 L260 130" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M140 180 L200 230" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
                          <path d="M260 180 L200 230" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 2" />
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
            <div className="glass-card p-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-neptuno-teal/20 flex items-center justify-center mr-4 shrink-0">
                  <Shield size={20} className="text-neptuno-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seguridad desde el inicio</h3>
                  <p className="text-gray-300 mb-3">
                    Implementación completa de OAuth2, JWT, HTTPS, CORS, y protección CSRF lista para usar.
                  </p>
                  <div className="bg-neptuno-navy/80 rounded-md p-3 font-mono text-sm mb-2 overflow-x-auto">
                    <code className="text-gray-300">
                      curl -X POST 127.0.0.1:8000/v1/auth/token -d 'grant_type=password&username=admin%40example.com&password=admin123'
                    </code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-neptuno-blue/20 flex items-center justify-center mr-4 shrink-0">
                  <Server size={20} className="text-neptuno-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Preparado para escalar</h3>
                  <p className="text-gray-300 mb-3">
                    Balanceo de carga con Nginx, replicación de servicios y configuración Docker optimizada.
                  </p>
                  <div className="bg-neptuno-navy/80 rounded-md p-3 font-mono text-sm text-gray-300 overflow-x-auto">
                    <pre>{`services:
  fastapi:
    build: ./backend
    deploy:
      replicas: 2 # 2 instancias por defecto
    ports:
      - "8000-8001:8000" # Rango para múltiples instancias
    restart: unless-stopped`}</pre>
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
