
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Code, Zap, Globe } from 'lucide-react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neptuno-navy to-[#1a365d] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Acerca de Neptuno</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Somos pioneros en soluciones de gamificación para impulsarte al mercado en tiempo récord.
            </p>
          </div>
        </section>
        
        {/* Misión y Visión */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-neptuno-blue font-medium">
                  <span className="w-8 h-0.5 bg-neptuno-blue"></span>
                  <span>NUESTRA MISIÓN</span>
                </div>
                <h2 className="text-3xl font-bold">Democratizar la gamificación para todos los desarrolladores</h2>
                <p className="text-gray-600">
                  En Neptuno tenemos una clara misión: eliminar las barreras técnicas que impiden a las empresas implementar estrategias de engagement efectivas. Queremos que cualquier desarrollador o empresa, independientemente de su tamaño, pueda crear experiencias gamificadas de nivel profesional.
                </p>
                <div className="pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-neptuno-teal/10 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-neptuno-teal" />
                    </div>
                    <span className="font-medium">Código seguro y escalable</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-neptuno-amber font-medium">
                  <span className="w-8 h-0.5 bg-neptuno-amber"></span>
                  <span>NUESTRA VISIÓN</span>
                </div>
                <h2 className="text-3xl font-bold">Ser el estándar en implementación de gamificación</h2>
                <p className="text-gray-600">
                  Visualizamos un futuro donde cada aplicación incorpore elementos de gamificación de manera orgánica, mejorando la retención y monetización. Queremos ser la plataforma que haga esto posible, reduciendo el tiempo de implementación de meses a minutos.
                </p>
                <div className="pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-neptuno-amber/10 p-2 rounded-full">
                      <Award className="h-6 w-6 text-neptuno-amber" />
                    </div>
                    <span className="font-medium">Experiencia de usuario premiada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nuestro equipo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un equipo multidisciplinario comprometido con la excelencia y la innovación constante.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-neptuno-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-neptuno-blue" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Ingeniería</h3>
                <p className="text-gray-600 text-center">
                  Expertos en arquitectura de software, gamificación y escalabilidad que han trabajado en empresas líderes del sector.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-neptuno-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-neptuno-teal" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Producto</h3>
                <p className="text-gray-600 text-center">
                  Diseñadores y product managers dedicados a crear interfaces intuitivas y flujos de gamificación efectivos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-neptuno-amber/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-neptuno-amber" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Operaciones</h3>
                <p className="text-gray-600 text-center">
                  Profesionales dedicados a garantizar que nuestras soluciones estén disponibles 24/7 con un soporte excepcional.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nuestros valores */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada decisión y desarrollo en Neptuno.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-neptuno-blue/10 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-neptuno-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovación Constante</h3>
                  <p className="text-gray-600">
                    Nos desafiamos continuamente para crear soluciones que rompan moldes y establezcan nuevos estándares en la industria.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-neptuno-teal/10 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-neptuno-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Seguridad y Confianza</h3>
                  <p className="text-gray-600">
                    Desarrollamos con los más altos estándares de seguridad, protegiendo los datos y la privacidad de nuestros usuarios.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-neptuno-amber/10 p-2 rounded-full">
                    <Users className="h-6 w-6 text-neptuno-amber" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Centrados en el Usuario</h3>
                  <p className="text-gray-600">
                    Cada característica y mejora está diseñada pensando en cómo beneficiará a los desarrolladores y usuarios finales.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <Globe className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Impacto Global</h3>
                  <p className="text-gray-600">
                    Aspiramos a que nuestras soluciones lleguen a desarrolladores de todo el mundo, independientemente de su ubicación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA final */}
        <section className="bg-gradient-to-br from-neptuno-blue to-neptuno-teal py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a la revolución de la gamificación</h2>
            <p className="text-xl mb-8">
              Descubre cómo Neptuno puede transformar tu proyecto y llevarlo al siguiente nivel.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/" className="bg-white text-neptuno-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Volver al inicio
              </a>
              <a href="/journey/contact-form" className="bg-neptuno-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-neptuno-teal/90 transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="py-4 text-center">
        <ThemeSwitcher />
      </div>
      <Footer />
    </div>
  );
};

export default About;
