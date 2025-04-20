
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Code, Trophy, Users, Lightbulb, Rocket, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLocation } from 'react-router-dom';

const About: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-neptuno-navy via-[#1a365d] to-neptuno-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Neptuno</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                Impulsando el futuro de la gamificación y engagement digital
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    En Neptuno, creemos que el software debe ser potente pero accesible. Nuestra misión es 
                    democratizar el acceso a herramientas de gamificación de nivel empresarial, permitiendo 
                    a empresas de todos los tamaños mejorar el engagement de sus usuarios.
                  </p>
                  <p className="text-lg text-gray-600">
                    Hemos creado una plataforma que elimina las barreras técnicas y financieras, permitiendo 
                    a los desarrolladores y empresas implementar estrategias de gamificación efectivas en 
                    cuestión de minutos, no meses.
                  </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Valores Fundamentales</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-neptuno-blue/10 p-2 rounded-full mr-4">
                        <Shield className="h-5 w-5 text-neptuno-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">Seguridad y Confianza</h4>
                        <p className="text-gray-600">Protegemos los datos y la privacidad como prioridad absoluta</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-neptuno-teal/10 p-2 rounded-full mr-4">
                        <Code className="h-5 w-5 text-neptuno-teal" />
                      </div>
                      <div>
                        <h4 className="font-medium">Innovación Constante</h4>
                        <p className="text-gray-600">Nos comprometemos a estar a la vanguardia tecnológica</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-neptuno-amber/10 p-2 rounded-full mr-4">
                        <Users className="h-5 w-5 text-neptuno-amber" />
                      </div>
                      <div>
                        <h4 className="font-medium">Centrados en el Cliente</h4>
                        <p className="text-gray-600">Tu éxito es nuestro éxito, y está en el centro de todo lo que hacemos</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Nuestra Historia</h2>
              
              <div className="space-y-16">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="bg-white p-1 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                        alt="Equipo fundador" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="bg-neptuno-blue/10 p-2 rounded-full mr-3">
                        <Lightbulb className="h-5 w-5 text-neptuno-blue" />
                      </span>
                      2020: El nacimiento de una idea
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Todo comenzó cuando nuestros fundadores, experimentados desarrolladores de software y 
                      especialistas en UX, se dieron cuenta de un problema recurrente: las empresas querían 
                      implementar estrategias de gamificación, pero el costo y la complejidad técnica eran 
                      barreras enormes.
                    </p>
                    <p className="text-gray-600">
                      Decidimos crear una solución que democratizara el acceso a estas herramientas, 
                      permitiendo a cualquier empresa, independientemente de su tamaño, implementar gamificación 
                      de nivel profesional.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-5 gap-8 items-center md:flex-row-reverse">
                  <div className="md:col-span-3 order-2 md:order-1">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="bg-neptuno-teal/10 p-2 rounded-full mr-3">
                        <Rocket className="h-5 w-5 text-neptuno-teal" />
                      </span>
                      2022: El lanzamiento
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Después de dos años de desarrollo y pruebas intensivas, lanzamos la primera versión de 
                      Neptuno. La respuesta fue inmediata y entusiasta, con más de 100 empresas adoptando 
                      nuestra plataforma en los primeros tres meses.
                    </p>
                    <p className="text-gray-600">
                      La retroalimentación de estos primeros clientes fue invaluable, permitiéndonos 
                      perfeccionar nuestra oferta y expandir nuestras capacidades a un ritmo acelerado.
                    </p>
                  </div>
                  <div className="md:col-span-2 order-1 md:order-2">
                    <div className="bg-white p-1 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
                        alt="Lanzamiento" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="bg-white p-1 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
                        alt="Equipo global" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="bg-neptuno-amber/10 p-2 rounded-full mr-3">
                        <Globe className="h-5 w-5 text-neptuno-amber" />
                      </span>
                      Hoy: Crecimiento global
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Actualmente, Neptuno es utilizada por más de 1,000 empresas en 40 países, desde startups 
                      hasta corporaciones internacionales. Nuestro equipo ha crecido hasta incluir expertos en 
                      gamificación, desarrollo de software, análisis de datos y experiencia de usuario.
                    </p>
                    <p className="text-gray-600">
                      Pero esto es solo el comienzo. Seguimos innovando y expandiendo nuestra plataforma para 
                      satisfacer las necesidades cambiantes de nuestros clientes y las tendencias emergentes 
                      en engagement digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
                Un grupo diverso de expertos apasionados por crear soluciones innovadoras
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Elena Rodríguez",
                    role: "CEO & Co-fundadora",
                    image: "https://i.pravatar.cc/300?img=1"
                  },
                  {
                    name: "Carlos Mendoza",
                    role: "CTO & Co-fundador",
                    image: "https://i.pravatar.cc/300?img=11"
                  },
                  {
                    name: "Sofía Martínez",
                    role: "Directora de Producto",
                    image: "https://i.pravatar.cc/300?img=5"
                  },
                  {
                    name: "Daniel López",
                    role: "Lead Engineer",
                    image: "https://i.pravatar.cc/300?img=12"
                  }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-20 bg-neptuno-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a la revolución de la gamificación</h2>
              <p className="text-xl mb-10">
                Descubre cómo Neptuno puede transformar la experiencia de tus usuarios y clientes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-neptuno-navy hover:bg-gray-100">
                  Comenzar Gratis
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Solicitar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
