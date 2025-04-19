
import React from 'react';
import { Code, FileText, LayoutGrid, GitBranch, BookOpen, Headphones, Database } from 'lucide-react';
import { IconListItem, FeaturedItem } from './MenuItems';

const SdkMenu: React.FC = () => {
  return (
    <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
      <div className="col-span-3">
        <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
          Herramientas para Desarrolladores
        </h4>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#sdk" 
            icon={<Code size={20} />} 
            title="SDK Multiplataforma" 
            description="Integraciones para JavaScript, Python, PHP, Java y más." 
          />
          <IconListItem 
            href="#api-explorer" 
            icon={<FileText size={20} />} 
            title="Documentación Completa" 
            description="Guías paso a paso y referencia de API detallada." 
          />
          <IconListItem 
            href="#sdk" 
            icon={<LayoutGrid size={20} />} 
            title="Componentes UI" 
            description="Biblioteca de componentes preconfigurados para cada plataforma." 
          />
          <IconListItem 
            href="#sdk" 
            icon={<Database size={20} />} 
            title="Gestión de Data" 
            description="Herramientas avanzadas para manipulación y visualización de datos." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#api-explorer" 
            icon={<GitBranch size={20} />} 
            title="API Explorer" 
            description="Prueba y experimenta con nuestra API en tiempo real." 
          />
          <IconListItem 
            href="#sdk" 
            icon={<BookOpen size={20} />} 
            title="Ejemplos y Plantillas" 
            description="Código de ejemplo listo para implementar en tu proyecto." 
          />
          <IconListItem 
            href="#sdk" 
            icon={<Headphones size={20} />} 
            title="Soporte Técnico 24/7" 
            description="Asistencia especializada para desarrolladores con tiempo de respuesta garantizado." 
          />
          <IconListItem 
            href="#sdk" 
            icon={<Code size={20} />} 
            title="Integración CI/CD" 
            description="Flujos de trabajo automatizados para despliegues continuos." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <FeaturedItem 
          title="Nuevo: SDK en tiempo real"
          description="Integra funcionalidades de tiempo real con solo unas líneas de código"
          image="/placeholder.svg"
          href="#sdk"
        />
      </div>
      <div className="col-span-3 mt-3 border-t pt-3">
        <a 
          href="#sdk"
          className="flex items-center text-neptuno-blue text-sm hover:underline"
        >
          Ir al centro de desarrolladores
        </a>
      </div>
    </div>
  );
};

export default SdkMenu;
