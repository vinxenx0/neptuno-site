
import React from 'react';
import { BarChart, CreditCard, Globe, Briefcase, Award, MessageSquare, Gift } from 'lucide-react';
import { IconListItem, FeaturedItem } from './MenuItems';

const UsesMenu: React.FC = () => {
  return (
    <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
      <div className="col-span-3">
        <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
          Casos de Uso
        </h4>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#use-cases" 
            icon={<BarChart size={20} />} 
            title="Campañas con Gamificación" 
            description="Aumenta la participación con mecánicas de juego innovadoras." 
          />
          <IconListItem 
            href="#use-cases" 
            icon={<CreditCard size={20} />} 
            title="Landing Pages Monetizadas" 
            description="Crea páginas con autenticación, pagos y análisis incluidos." 
          />
          <IconListItem 
            href="#use-cases" 
            icon={<Globe size={20} />} 
            title="Experiencias Globales" 
            description="Crea aplicaciones multi-idioma con localización automática." 
          />
          <IconListItem 
            href="#use-cases" 
            icon={<Gift size={20} />} 
            title="Programas de Fidelización" 
            description="Recompensa a tus usuarios y aumenta la retención." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#use-cases" 
            icon={<Briefcase size={20} />} 
            title="SaaS Escalable" 
            description="Construye aplicaciones SaaS completas con gestión avanzada." 
          />
          <IconListItem 
            href="#gamification-demo" 
            icon={<Award size={20} />} 
            title="Gamificación Empresarial" 
            description="Implementa estrategias de gamificación para aumentar la retención." 
          />
          <IconListItem 
            href="#use-cases" 
            icon={<MessageSquare size={20} />} 
            title="ChatBots Inteligentes" 
            description="Integra asistentes IA para mejorar la experiencia del usuario." 
          />
          <IconListItem 
            href="#use-cases" 
            icon={<Award size={20} />} 
            title="Concursos y Sorteos" 
            description="Plataforma lista para campañas promocionales interactivas." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <FeaturedItem 
          title="Caso de éxito: +200% de engagement"
          description="Descubre cómo nuestros clientes aumentaron la participación"
          image="/placeholder.svg"
          href="#use-cases"
        />
      </div>
      <div className="col-span-3 mt-3 border-t pt-3">
        <a 
          href="#use-cases"
          className="flex items-center text-neptuno-blue text-sm hover:underline"
        >
          Explorar todos los casos de uso
        </a>
      </div>
    </div>
  );
};

export default UsesMenu;
