
import React from 'react';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, UserRound, Users, ShoppingBag, Pizza, FormInput, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JourneysSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  const journeys = [
    {
      icon: <UserRound className="h-8 w-8 text-white" />,
      title: "Registro gamificado",
      description: "Incentiva la captura de datos mediante recompensas y badges",
      color: "bg-gradient-to-br from-blue-600 to-indigo-800",
      path: "/journey/registration"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Cultura empresarial gamificada",
      description: "Mejora el onboarding de empleados con juegos de conocimiento",
      color: "bg-gradient-to-br from-purple-600 to-pink-600",
      path: "/journey/corporate-culture"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      title: "Marketplace con recompensas",
      description: "Incentiva compras con sistemas de puntos y badges",
      color: "bg-gradient-to-br from-emerald-600 to-teal-800",
      path: "/journey/marketplace"
    },
    {
      icon: <Pizza className="h-8 w-8 text-white" />,
      title: "Pizzería interactiva",
      description: "Personaliza productos para obtener más recompensas",
      color: "bg-gradient-to-br from-orange-500 to-red-700",
      path: "/journey/pizza"
    },
    {
      icon: <FormInput className="h-8 w-8 text-white" />,
      title: "Formulario gamificado",
      description: "Captura leads de calidad con incentivos por paso completado",
      color: "bg-gradient-to-br from-cyan-600 to-blue-700",
      path: "/journey/contact-form"
    },
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Suscripción a newsletter",
      description: "Aumenta suscriptores con recompensas por interacción",
      color: "bg-gradient-to-br from-violet-600 to-purple-700",
      path: "/journey/newsletter"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explora los journeys gamificados con Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo transformar acciones cotidianas en experiencias motivadoras con gamificación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeys.map((journey, index) => (
            <div 
              key={index}
              onClick={() => handleNavigate(journey.path)}
              className="cursor-pointer"
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full overflow-hidden border-0">
                <div className={`${journey.color} p-6 h-full flex flex-col`}>
                  <div className="bg-white/20 p-4 rounded-xl inline-block mb-4">
                    {journey.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{journey.title}</h3>
                  <p className="text-white/80 mb-4">{journey.description}</p>
                  <div className="mt-auto flex items-center text-white">
                    <span className="mr-2">Explorar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneysSection;
