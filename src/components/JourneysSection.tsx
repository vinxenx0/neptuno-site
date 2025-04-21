
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const JourneyCard = ({ title, description, path, icon }: { 
  title: string; 
  description: string; 
  path: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link to={path}>
      <Card className="hover:shadow-md transition-shadow h-full overflow-hidden">
        <div className="bg-gradient-to-r from-neptuno-blue/80 to-neptuno-blue p-6 flex items-center justify-center text-white text-3xl">
          {icon}
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const JourneysSection = () => {
  return (
    <section id="journeys" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explora los Journeys Gamificados con Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementaciones reales de gamificación que puedes utilizar como punto de partida para tu proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JourneyCard 
            title="Formulario de Registro Gamificado" 
            description="Aumenta las conversiones con un formulario de registro que premia cada paso completado"
            path="/journey/registration"
            icon="📝"
          />
          
          <JourneyCard 
            title="Formulario de Contacto Interactivo" 
            description="Convierte un aburrido formulario de contacto en una experiencia memorable"
            path="/journey/contact-form"
            icon="📞"
          />
          
          <JourneyCard 
            title="Newsletter con Rewards" 
            description="Incentiva las suscripciones y mejora el engagement de tu newsletter"
            path="/journey/newsletter"
            icon="📧"
          />
          
          <JourneyCard 
            title="Marketplace con Recompensas" 
            description="Implementa un sistema de puntos y recompensas en tu tienda online"
            path="/journey/marketplace"
            icon="🛍️"
          />
          
          <JourneyCard 
            title="Cultura Corporativa Gamificada" 
            description="Mejora el ambiente laboral y la productividad con mecánicas de juego"
            path="/journey/corporate-culture"
            icon="👥"
          />
          
          <JourneyCard 
            title="Pizzería con lógica gamificada" 
            description="Proceso de pedido de comida con sistema de puntos y recompensas"
            path="/journey/pizza"
            icon="🍕"
          />
          
          <JourneyCard 
            title="Juegos Online" 
            description="Explora ejemplos de juegos gamificados que puedes integrar en tu aplicación"
            path="/games"
            icon="🎮"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneysSection;
