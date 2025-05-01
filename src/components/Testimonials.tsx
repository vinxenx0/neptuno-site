
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos de éxito reales de desarrolladores y makers que usan Neptuno
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute transform rotate-45 bg-blue-500 text-white shadow-lg font-semibold py-1 right-[-35px] top-[32px] w-[170px]"></div>
            </div>
            
            <div className="flex items-start mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Carlos Hernández</h4>
                <p className="text-gray-600 text-sm">@devcarlos</p>
              </div>
            </div>
            
            <div className="mb-4 text-gray-800">
              <p>
                "Lancé mi MVP en un fin de semana con Neptuno. El sistema de gamificación integrado aumentó la retención de usuarios un 32%. Increíble ROI."
              </p>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
              <span>Mayo 2, 2025</span>
              <span className="mx-2">•</span>
              <span>124 Me gusta</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute transform rotate-45 bg-blue-500 text-white shadow-lg font-semibold py-1 right-[-35px] top-[32px] w-[170px]"></div>
            </div>
            
            <div className="flex items-start mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Laura Martínez</h4>
                <p className="text-gray-600 text-sm">@lauradev</p>
              </div>
            </div>
            
            <div className="mb-4 text-gray-800">
              <p>
                "Como freelancer, Neptuno me permite entregar proyectos que antes requerían un equipo completo. Mis clientes están impresionados con lo rápido que implemento cambios."
              </p>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
              <span>Abril 18, 2025</span>
              <span className="mx-2">•</span>
              <span>87 Me gusta</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute transform rotate-45 bg-blue-500 text-white shadow-lg font-semibold py-1 right-[-35px] top-[32px] w-[170px]"></div>
            </div>
            
            <div className="flex items-start mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Miguel Ángel López</h4>
                <p className="text-gray-600 text-sm">@miguelmaker</p>
              </div>
            </div>
            
            <div className="mb-4 text-gray-800">
              <p>
                "Pasamos de idea a producto en producción en solo 3 semanas con Neptuno. La infraestructura ya estaba resuelta y pudimos enfocarnos en el producto. Recomendado 100%."
              </p>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
              <span>Marzo 29, 2025</span>
              <span className="mx-2">•</span>
              <span>156 Me gusta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
