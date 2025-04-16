import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add ThemeSwitcher at the top of the footer */}
        <ThemeSwitcher />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Características</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Seguridad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Novedades</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Acerca de</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Empleo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Prensa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Documentación</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Tutoriales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Términos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neptuno-blue transition-colors">Licencia</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Neptuno. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.663 9.156 8.432 9.829v-6.299h-2.363v-3.529h2.363V8.237c0-3.005 1.792-4.669 4.533-4.669 1.315 0 2.473.147 2.829.216v3.195h-1.911c-1.447 0-1.723.695-1.723 1.708v2.241h3.017l-.394 3.062h-2.623v6.299C18.337 21.156 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.315 3.435 9.807 8.205 11.385-.168-.003-.337-.003-.505-.003-4.05 0-7.795-2.589-7.795-7.795 0-.142.015-.282.044-.42C4.271 15.757 6.417 14.01 6.417 14.01c.827-1.399 2.015-1.762 2.015-1.762.573-.391.741.583.741.583.813.573 1.264 1.35 1.264 1.35.735 1.289 1.928.92 2.39.698.074-.543.288-.92 522-.92 1.867 0 3.377 1.51 3.377 3.377 0 2.033-1.235 3.74-2.928 3.74-.567 0-1.098-.298-1.283-.643.092.839.357 1.731.357 1.731 1.067 3.181 3.418 4.049 7.144 4.049.165 0 .329-.005.494-.008 8.623 0 14-5.373 14-12C24 5.373 18.627 0 12 0" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-neptuno-blue transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.954 22.605l-5.639-5.639a9.463 9.463 0 00.63-3.635 9.5 9.5 0 00-9.5-9.5 9.5 9.5 0 00-9.5 9.5 9.5 9.5 0 009.5 9.5 9.463 9.463 0 003.635-.63l5.639 5.639a.998.998 0 001.414 0 .999.999 0 000-1.414zM3.5 10.5a7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
