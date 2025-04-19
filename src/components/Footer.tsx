
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add ThemeSwitcher at the top of the footer */}
        <div className="flex justify-end mb-8">
          <ThemeSwitcher />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-md flex items-center justify-center text-white font-bold">N</div>
              <span className="ml-2 text-xl font-bold text-gray-800">Neptuno</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Neptuno es una plataforma integral para desarrollo de aplicaciones 
              empresariales con funcionalidades como autenticación, gamificación, 
              analítica y herramientas de colaboración integradas desde el primer día.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-neptuno-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-neptuno-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-neptuno-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-neptuno-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-600 tracking-wider">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Características</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Seguridad</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Precios</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Novedades</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-600 tracking-wider">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#ceo-message" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Acerca de</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Empleo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Prensa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-600 tracking-wider">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Blog</a></li>
              <li><a href="#api-explorer" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Documentación</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Tutoriales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors text-sm">Soporte</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Neptuno Technologies, Inc. Todos los derechos reservados.
            </p>
            <div className="md:text-right space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-neptuno-blue transition-colors">Privacidad</a>
              <a href="#" className="text-sm text-gray-600 hover:text-neptuno-blue transition-colors">Términos</a>
              <a href="#" className="text-sm text-gray-600 hover:text-neptuno-blue transition-colors">Cookies</a>
              <a href="#" className="text-sm text-gray-600 hover:text-neptuno-blue transition-colors">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
