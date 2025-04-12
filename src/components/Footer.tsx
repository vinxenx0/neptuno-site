
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-md flex items-center justify-center text-white font-bold">N</div>
              <span className="ml-2 text-xl font-bold text-neptuno-navy">Neptuno</span>
            </a>
            <p className="text-gray-600 mb-4 max-w-md">
              El starter kit full-stack para marketing, gamificación y monetización. Preconfigurado con Python, FastAPI y Next.js.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-neptuno-blue transition-colors">Características</a></li>
              <li><a href="#use-cases" className="text-gray-600 hover:text-neptuno-blue transition-colors">Casos de uso</a></li>
              <li><a href="#demo" className="text-gray-600 hover:text-neptuno-blue transition-colors">Demo</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-neptuno-blue transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Documentación</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Acerca de</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Soporte</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Términos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">&copy; {new Date().getFullYear()} Neptuno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
