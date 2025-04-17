
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, Trash2, CheckCircle } from 'lucide-react';

const UserIntegrationsPanel: React.FC = () => {
  const integrations = [
    { id: 1, name: 'asdfasdf', status: 'Pendiente' },
    { id: 2, name: 'test', status: 'Pendiente' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <Link size={20} className="text-blue-500" />
          <span>Integraciones</span>
        </h2>
      </div>

      {/* Add new integration form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-1">
          <input 
            type="text" 
            placeholder="Nombre" 
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="md:col-span-1">
          <input 
            type="text" 
            placeholder="Webhook URL" 
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="md:col-span-1">
          <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Tipo de Evento</option>
            <option>Pago</option>
            <option>Error</option>
            <option>Acceso</option>
          </select>
        </div>
      </div>

      <div className="text-right mb-8">
        <Button className="bg-blue-500 hover:bg-blue-600">
          AÑADIR
        </Button>
      </div>

      {/* Integrations list */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">Nombre</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Estado</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration) => (
              <tr key={integration.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{integration.name}</td>
                <td className="py-4 px-4">{integration.status}</td>
                <td className="py-4 px-4">
                  <Button variant="ghost" size="sm" className="text-red-500 p-1">
                    <Trash2 size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Success message */}
      <div className="fixed bottom-4 right-4 bg-white border border-green-200 rounded-lg shadow-lg py-2 px-4 flex items-center gap-2">
        <CheckCircle size={18} className="text-green-500" />
        <span className="text-sm">Integración creada con éxito</span>
        <Button variant="ghost" size="sm" className="p-1 ml-2">×</Button>
      </div>
    </div>
  );
};

export default UserIntegrationsPanel;
