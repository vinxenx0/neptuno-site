
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminIntegrationsPanel: React.FC = () => {
  const integrations = [
    { id: 1, name: 'slack_notif', user: 1, active: false },
    { id: 2, name: 'test', user: 1, active: true },
    { id: 3, name: 'test2', user: 1, active: false },
  ];

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <select className="p-3 border rounded-md w-full">
            <option>Todos los usuarios</option>
            <option>Usuario 1</option>
            <option>Usuario 2</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-medium text-gray-600">Nombre</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Usuario</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Estado</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {integrations.map(integration => (
                <tr key={integration.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{integration.name}</td>
                  <td className="py-4 px-4">{integration.user}</td>
                  <td className="py-4 px-4">
                    <Switch checked={integration.active} />
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 p-1">
                      <Trash2 size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminIntegrationsPanel;
