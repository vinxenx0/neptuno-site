
import React from 'react';
import { Users, PieChart, ChevronRight, BarChart2, AlignLeft, Lightbulb, Award } from 'lucide-react';
import { IconListItem, FeaturedItem } from './MenuItems';

const CorporateMenu: React.FC = () => {
  return (
    <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
      <div className="col-span-3">
        <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
          Información Corporativa
        </h4>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#ceo-message" 
            icon={<Users size={20} />} 
            title="Nuestro Equipo" 
            description="Conoce al equipo detrás de Neptuno y nuestra misión." 
          />
          <IconListItem 
            href="#pricing" 
            icon={<PieChart size={20} />} 
            title="Inversores" 
            description="Descubre quiénes apoyan nuestra visión de futuro." 
          />
          <IconListItem 
            href="#ceo-message" 
            icon={<ChevronRight size={20} />} 
            title="Sostenibilidad" 
            description="Nuestro compromiso con el medio ambiente y la responsabilidad social." 
          />
          <IconListItem 
            href="#ceo-message" 
            icon={<Award size={20} />} 
            title="Premios y Reconocimientos" 
            description="Nuestros logros en innovación y excelencia." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <ul className="grid gap-3">
          <IconListItem 
            href="#pricing" 
            icon={<BarChart2 size={20} />} 
            title="Planes y Precios" 
            description="Opciones flexibles para startups, scaleups y empresas." 
          />
          <IconListItem 
            href="#ceo-message" 
            icon={<AlignLeft size={20} />} 
            title="Mensaje del CEO" 
            description="La visión que impulsa nuestra innovación." 
          />
          <IconListItem 
            href="#ceo-message" 
            icon={<Lightbulb size={20} />} 
            title="Innovación Abierta" 
            description="Participa en nuestros programas de colaboración e investigación." 
          />
          <IconListItem 
            href="#ceo-message" 
            icon={<Users size={20} />} 
            title="Oportunidades Profesionales" 
            description="Únete a nuestro equipo y transforma el futuro digital." 
          />
        </ul>
      </div>
      <div className="col-span-1">
        <FeaturedItem 
          title="Neptuno en números"
          description="Crecimiento, impacto y resultados de nuestra plataforma"
          image="/placeholder.svg"
          href="#pricing"
        />
      </div>
      <div className="col-span-3 mt-3 border-t pt-3">
        <a 
          href="#pricing"
          className="flex items-center text-neptuno-blue text-sm hover:underline"
        >
          Conoce más sobre nosotros
        </a>
      </div>
    </div>
  );
};

export default CorporateMenu;
