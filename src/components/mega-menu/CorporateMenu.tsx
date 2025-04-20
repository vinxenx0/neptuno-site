
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

const CorporateMenu = () => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <MenuItems 
        title="Empresa"
        items={[
          { name: "Acerca de", href: "/about" },
          { name: "Historias de éxito", href: "#" },
          { name: "Testimonios", href: "#" }
        ]}
      />
      <MenuItems 
        title="Recursos"
        items={[
          { name: "Blog", href: "#" },
          { name: "Documentación", href: "#" },
          { name: "Carreras profesionales", href: "#" }
        ]}
      />
    </div>
  );
};

export default CorporateMenu;
