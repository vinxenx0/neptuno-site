
import React from 'react';
import { Layers, Database, Shield, Server, BarChart, Rocket, FileText } from 'lucide-react';
import { IconListItem, FeaturedItem } from './MenuItems';

const ProductMenu: React.FC = () => {
  return (
    <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
      <div className="col-span-3">
        <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
          Características Principales
        </h4>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#features" 
            icon={<Layers size={20} />} 
            title="Componentes All-in-One" 
            description="Todos los componentes que necesitas para construir tu aplicación, listos para usar." 
          />
          <IconListItem 
            href="#features" 
            icon={<Database size={20} />} 
            title="Base de datos preparada" 
            description="Arquitectura de datos ya configurada y optimizada desde el primer día." 
          />
          <IconListItem 
            href="#production-ready" 
            icon={<Shield size={20} />} 
            title="Seguridad y cumplimiento" 
            description="Implementación segura con todas las certificaciones necesarias." 
          />
          <IconListItem 
            href="#features" 
            icon={<FileText size={20} />} 
            title="Documentación avanzada" 
            description="Guías completas y ejemplos paso a paso para implementación rápida." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#features" 
            icon={<Server size={20} />} 
            title="Infraestructura escalable" 
            description="Configurada para crecer con tu negocio sin problemas." 
          />
          <IconListItem 
            href="#dashboard-info" 
            icon={<BarChart size={20} />} 
            title="Dashboard analítico" 
            description="Monitorea todos los aspectos de tu aplicación en tiempo real." 
          />
          <IconListItem 
            href="#production-ready" 
            icon={<Rocket size={20} />} 
            title="Listo para producción" 
            description="De MVP a escala empresarial en días, no meses." 
          />
          <IconListItem 
            href="#features" 
            icon={<Server size={20} />} 
            title="Arquitectura modular" 
            description="Componentes independientes que funcionan perfectamente juntos." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <FeaturedItem 
          title="Descubre nuestro sistema de análisis avanzado"
          description="Obtén insights profundos sobre el rendimiento de tu aplicación"
          image="/placeholder.svg"
          href="#dashboard-info"
        />
      </div>
      <div className="col-span-3 mt-3 border-t pt-3">
        <a 
          href="#features"
          className="flex items-center text-neptuno-blue text-sm hover:underline"
        >
          Ver todas las características
        </a>
      </div>
    </div>
  );
};

export default ProductMenu;
