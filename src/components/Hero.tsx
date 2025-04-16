
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-neptuno-navy via-[#1a365d] to-neptuno-navy text-white">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neptuno-blue rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-neptuno-teal rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neptuno-amber rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              -10% descuento lanzamiento
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Deploy your MVP in minutes, launch your project in weeks
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              Ship fast no significa lanzar MPV pobres, deficientes y con fallos
            </p>
            
            <p className="text-lg md:text-xl text-gray-300">
              Lanza tu MVP con postgress db, auth, OpenAPI + GraphQL, gamification, subscriptions, dashboards, con SSL, backups y logs ya configurados.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-neptuno-blue hover:bg-blue-600 text-white">
                Lanza ya tu proyecto <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                Saber más
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-sm">
              <div className="flex items-center">
                <Shield size={18} className="mr-2 text-neptuno-teal" />
                <span>Listo para producción</span>
              </div>
              <div className="flex items-center">
                <Zap size={18} className="mr-2 text-neptuno-amber" />
                <span>SDK para desarrolladores</span>
              </div>
              <div className="flex items-center">
                <Code size={18} className="mr-2 text-neptuno-blue" />
                <span>Vibe coding ready</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in">
            <div className="glass-card overflow-hidden">
              <div className="bg-neptuno-navy text-white px-4 py-2 flex items-center space-x-2 text-sm">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono flex-1 text-center">deploy.neptuno.dev</span>
              </div>
              <div className="bg-[#1E293B] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`# Despliegue de Neptuno
docker compose up -d

# Inicializando contenedores...
\x1b[32m✓ Iniciando neptuno-proxy      \x1b[0m(Nginx + SSL)
\x1b[32m✓ Iniciando neptuno-api        \x1b[0m(FastAPI en puerto 8000)
\x1b[32m✓ Iniciando neptuno-dashboard  \x1b[0m(Next.js en puerto 3000)
\x1b[32m✓ Iniciando neptuno-db         \x1b[0m(PostgreSQL con réplica)
\x1b[32m✓ Iniciando neptuno-cache      \x1b[0m(Redis en puerto 6379)
\x1b[32m✓ Iniciando neptuno-queue      \x1b[0m(RabbitMQ en puerto 5672)

# Servicios activos y escalables
\x1b[32m✓ API\x1b[0m: https://api.neptuno.local \x1b[33m(2 réplicas)\x1b[0m
\x1b[32m✓ Dashboard\x1b[0m: https://dashboard.neptuno.local
\x1b[32m✓ SSL\x1b[0m: Certificados auto-renovables con Let's Encrypt
\x1b[32m✓ Logs\x1b[0m: Centralizados con rotación automática
\x1b[32m✓ Backups\x1b[0m: Configurados cada 6 horas

\x1b[36mSistema listo para producción!\x1b[0m`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
