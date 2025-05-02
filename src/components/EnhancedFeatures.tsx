
import React from 'react';
import { Code, Layout, Cpu, Shield, Database, FileCode } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  listItems 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  listItems: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="h-1.5 w-1.5 rounded-full bg-neptuno-blue mr-2 mt-2"></span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EnhancedFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="text-neptuno-blue" size={24} />}
              title="API REST"
              description="Documentada con OpenAPI, GraphQL-ready, SDK JS/TS incluido."
              listItems={[
                "Autogenerada a partir de modelos",
                "SDK completo para JS/TS",
                "Soporte para GraphQL opcional",
                "Versionado y documentación automática"
              ]}
            />
            
            <FeatureCard
              icon={<Layout className="text-neptuno-blue" size={24} />}
              title="Frontend Next.js"
              description="SSR, SEO-ready, UI modular y dashboards de gestión."
              listItems={[
                "Componentes UI preconfigurados",
                "Optimizado para SEO y performance",
                "Diseño responsivo y adaptable",
                "Dashboards administrativos incluidos"
              ]}
            />
            
            <FeatureCard
              icon={<Cpu className="text-neptuno-blue" size={24} />}
              title="Despliegue Docker"
              description="Deploy en Railway, Render o local; balanceo con Nginx/Gunicorn."
              listItems={[
                "Configuración Docker optimizada",
                "Scripts one-click para despliegue",
                "Balanceo de carga incluido",
                "Monitorización y logs centralizados"
              ]}
            />
          </div>
          
          {/* Right column example */}
          <div className="flex-1">
            <div className="bg-gray-900 rounded-lg p-5 shadow-xl h-full">
              <div className="mb-3 flex justify-between items-center">
                <span className="text-white text-sm font-medium">Usuario Autenticado</span>
                <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full text-white">Verificado</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400 text-xs">Método de Login</span>
                  <span className="text-white text-xs">Google OAuth2</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400 text-xs">Permisos</span>
                  <span className="text-white text-xs">Gestión Total</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400 text-xs">2FA</span>
                  <span className="text-white text-xs">Activado (TOTP)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Sesión</span>
                  <span className="text-white text-xs">JWT (exp: 2h)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <FeatureCard
            icon={<Shield className="text-neptuno-teal" size={24} />}
            title="Infraestructura lista"
            description="HTTP/2, CORS, CSRF, HTTPS, y seguridad incluida."
            listItems={[
              "Auto-scaling incluido",
              "Balanceo de carga configurado",
              "Réplicas de base de datos",
              "Scripts de desarrollo y despliegue one-click"
            ]}
          />
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-900 rounded-lg p-5 shadow-xl h-full flex flex-col justify-between">
            <div>
              <div className="mb-3 flex justify-between items-center">
                <span className="text-white text-sm font-medium">Neptuno App</span>
                <div className="flex space-x-1">
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded p-3 mb-4">
                <span className="text-gray-300 text-xs block mb-1">Resultados de ventas</span>
                <span className="text-white text-lg font-bold">€12,458</span>
                <div className="w-full h-1.5 bg-gray-700 rounded-full mt-2">
                  <div className="h-full bg-green-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-gray-400 text-xs">Mobile App</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <FeatureCard
            icon={<Database className="text-neptuno-amber" size={24} />}
            title="ORM integrado"
            description="Modelos, migraciones y backups automáticos."
            listItems={[
              "Base de datos relacional o NoSQL",
              "Migraciones automáticas",
              "Respaldo programado de datos",
              "Interfaz de administración de datos"
            ]}
          />
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-900 rounded-lg p-5 shadow-xl h-full flex flex-col">
            <div className="mb-4">
              <div className="mb-2 text-gray-400 text-xs">Modelo de usuario</div>
              <code className="text-xs text-green-400 block overflow-auto p-3 bg-gray-800 rounded">
                <pre>{`class User(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    email: EmailStr
    name: str
    role: UserRole = UserRole.USER
    points: int = 0
    level: int = 1
    created_at: datetime = Field(default_factory=datetime.now)`}</pre>
              </code>
            </div>
            
            <div>
              <div className="mb-2 text-gray-400 text-xs">Migración automática</div>
              <div className="bg-gray-800 rounded p-2 text-xs">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-white">Schema actualizado</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-white">Índices optimizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <FeatureCard
            icon={<FileCode className="text-purple-500" size={24} />}
            title="Herramientas Dev"
            description="CI/CD, tests, métricas y documentación automática."
            listItems={[
              "Tests unitarios y de integración",
              "Medición de cobertura de código",
              "CI/CD con GitHub Actions o GitLab",
              "Documentación generada automáticamente"
            ]}
          />
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-900 rounded-lg p-5 shadow-xl h-full">
            <div className="mb-3 flex justify-between items-center">
              <span className="text-white text-sm font-medium">Cobertura de pruebas</span>
              <span className="text-green-400 text-sm font-medium">93%</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-xs">Modelos</span>
                  <span className="text-white text-xs">98%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-xs">Controllers</span>
                  <span className="text-white text-xs">95%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-xs">Servicios</span>
                  <span className="text-white text-xs">89%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedFeatures;
