
import React from 'react';
import { Code, Layout, Cpu } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
  );
};

export default EnhancedFeatures;
