
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Backend completo', neptuno: true, firebase: true, supabase: true, shipfast: false, appwrite: true },
    { name: 'Frontend listo para producción', neptuno: true, firebase: false, supabase: false, shipfast: true, appwrite: false },
    { name: 'Gamificación built-in', neptuno: true, firebase: false, supabase: false, shipfast: false, appwrite: false },
    { name: 'Autenticación social', neptuno: true, firebase: true, supabase: true, shipfast: true, appwrite: true },
    { name: 'Procesamiento de pagos', neptuno: true, firebase: false, supabase: false, shipfast: true, appwrite: false },
    { name: 'Documentación OpenAPI', neptuno: true, firebase: false, supabase: true, shipfast: false, appwrite: true },
    { name: 'Panel de administración', neptuno: true, firebase: true, supabase: true, shipfast: true, appwrite: true },
    { name: 'Open-source', neptuno: true, firebase: false, supabase: true, shipfast: false, appwrite: true },
    { name: 'Deploy local sin dependencias', neptuno: true, firebase: false, supabase: false, shipfast: true, appwrite: false },
    { name: 'Webhooks configurables', neptuno: true, firebase: true, supabase: true, shipfast: false, appwrite: true },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comparativa con otras soluciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Neptuno se compara con otros frameworks y starter kits populares
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-left font-semibold">Características</th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neptuno-blue to-neptuno-teal mb-2 p-1">
                      <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-neptuno-blue font-bold">N</span>
                      </div>
                    </div>
                    <span className="font-semibold">Neptuno</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <img src="https://www.gstatic.com/devrel-devsite/prod/v24d520161c9661e427a3f6fa9973bfc3f24d5036a1bc58cc95f71cca1ab3b0f0/firebase/images/touchicon-180.png" alt="Firebase" className="h-12 w-12 rounded-full mb-2" />
                    <span className="font-semibold">Firebase</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <img src="https://supabase.com/favicon/favicon.ico" alt="Supabase" className="h-12 w-12 rounded-full mb-2" />
                    <span className="font-semibold">Supabase</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <img src="https://www.shipfa.st/favicon.ico" alt="Ship Fast" className="h-12 w-12 rounded-full mb-2" />
                    <span className="font-semibold">Ship Fast</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <img src="https://appwrite.io/favicon.png" alt="Appwrite" className="h-12 w-12 rounded-full mb-2" />
                    <span className="font-semibold">Appwrite</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="py-4 px-6 border-b border-gray-200">{feature.name}</td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {feature.neptuno ? 
                      <Check className="mx-auto text-green-500" size={20} /> : 
                      <X className="mx-auto text-red-500" size={20} />
                    }
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {feature.firebase ? 
                      <Check className="mx-auto text-green-500" size={20} /> : 
                      <X className="mx-auto text-red-500" size={20} />
                    }
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {feature.supabase ? 
                      <Check className="mx-auto text-green-500" size={20} /> : 
                      <X className="mx-auto text-red-500" size={20} />
                    }
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {feature.shipfast ? 
                      <Check className="mx-auto text-green-500" size={20} /> : 
                      <X className="mx-auto text-red-500" size={20} />
                    }
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {feature.appwrite ? 
                      <Check className="mx-auto text-green-500" size={20} /> : 
                      <X className="mx-auto text-red-500" size={20} />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
