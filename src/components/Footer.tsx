
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

// Add color theme options
const colorThemes = [
  { 
    id: 'blue', 
    name: 'Azul (Actual)', 
    primary: '#0F172A', // neptuno-navy
    accent: '#3B82F6', // neptuno-blue
    highlight: '#0EA5E9', // neptuno-teal
    extra: '#F59E0B' // neptuno-amber
  },
  { 
    id: 'purple', 
    name: 'Púrpura', 
    primary: '#2D1B69', 
    accent: '#9061F9',
    highlight: '#D8B4FE',
    extra: '#F0ABFC'
  },
  { 
    id: 'green', 
    name: 'Verde', 
    primary: '#064E3B', 
    accent: '#10B981',
    highlight: '#6EE7B7',
    extra: '#FCD34D'
  },
  { 
    id: 'coral', 
    name: 'Coral', 
    primary: '#431407', 
    accent: '#F97316',
    highlight: '#FB923C',
    extra: '#38BDF8'
  },
  { 
    id: 'slate', 
    name: 'Pizarra', 
    primary: '#1E293B', 
    accent: '#64748B',
    highlight: '#94A3B8',
    extra: '#22D3EE'
  }
];

const Footer: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('blue');

  const handleChangeTheme = (themeId: string) => {
    setSelectedTheme(themeId);
    // This would normally change the theme in a real implementation
    console.log('Theme changed to:', themeId);
  };

  return (
    <footer className="bg-gradient-to-br from-neptuno-navy to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <div className="h-9 w-9 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-md flex items-center justify-center text-white font-bold text-xl">N</div>
              <span className="ml-2 text-2xl font-bold">Neptuno</span>
            </div>
            <p className="text-gray-300 mb-4">
              Construye aplicaciones con autenticación, gamificación y pagos integrados en minutos, no en meses.
            </p>
            <div className="flex space-x-4 mb-5">
              {/* Social Media Icons */}
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 16.09V8.16c0-.55.45-1 1-1s1 .45 1 1v9.93c0 .55-.45 1-1 1s-1-.45-1-1zm2.01-13.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start">
                <MapPin size={16} className="mt-0.5 mr-2 flex-shrink-0 text-neptuno-blue" />
                <span>Avenida Miguel Indurain, Murcia, 30008 España</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-neptuno-blue" />
                <span>info@neptuno.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-neptuno-blue" />
                <span>+34 987 654 321</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-neptuno-blue">Características</a></li>
              <li><a href="#use-cases" className="hover:text-neptuno-blue">Casos de uso</a></li>
              <li><a href="#pricing" className="hover:text-neptuno-blue">Pricing</a></li>
              <li><a href="#demo" className="hover:text-neptuno-blue">Demostración</a></li>
              <li><a href="#sdk" className="hover:text-neptuno-blue">SDK</a></li>
              <li><a href="#production-ready" className="hover:text-neptuno-blue">Producción</a></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Información</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-neptuno-blue">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Privacidad</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Términos Legales</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Soporte</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">API Docs</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Contacto</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Suscríbete</h3>
            <p className="text-gray-300 mb-4">Recibe actualizaciones sobre nuevas características y noticias.</p>
            <form className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-neptuno-blue bg-gray-800 border border-gray-700" 
                />
                <button type="submit" className="px-4 py-2 bg-neptuno-blue rounded-r-md hover:bg-blue-600">
                  <span className="sr-only">Suscribirse</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Theme Selector (for design purposes) */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-gray-400">Probar otro tema de color:</h4>
              <div className="flex flex-wrap gap-2">
                {colorThemes.map(theme => (
                  <button
                    key={theme.id}
                    className={`h-8 w-8 rounded overflow-hidden ${selectedTheme === theme.id ? 'ring-2 ring-white' : ''}`}
                    title={theme.name}
                    onClick={() => handleChangeTheme(theme.id)}
                  >
                    <div className="h-full w-full flex flex-col">
                      <div className="h-1/2 w-full flex">
                        <div className="w-1/2 h-full" style={{ backgroundColor: theme.primary }}></div>
                        <div className="w-1/2 h-full" style={{ backgroundColor: theme.accent }}></div>
                      </div>
                      <div className="h-1/2 w-full flex">
                        <div className="w-1/2 h-full" style={{ backgroundColor: theme.highlight }}></div>
                        <div className="w-1/2 h-full" style={{ backgroundColor: theme.extra }}></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Neptuno. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neptuno-blue">Privacidad</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Términos</a></li>
              <li><a href="#" className="hover:text-neptuno-blue">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
