
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Pencil, Trash2, Plus } from 'lucide-react';

const AdminGamificationPanel: React.FC = () => {
  const eventTypes = [
    { id: 1, name: 'api_usage', description: 'Uso de la API', points: 10 },
    { id: 2, name: 'login', description: 'Inicio de sesión', points: 5 },
    { id: 3, name: 'purchase', description: 'Compra de créditos', points: 50 },
    { id: 4, name: 'error_report', description: 'Reporte de error', points: 20 },
  ];

  const badges = [
    { id: 1, name: 'api_usage (ID: 1)', expanded: false },
    { id: 2, name: 'login (ID: 2)', expanded: false },
    { id: 3, name: 'purchase (ID: 3)', expanded: false },
    { id: 4, name: 'error_report (ID: 4)', expanded: false },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-gray-800">Gestión de Gamificación</span>
        </h2>
      </div>

      {/* Event Types Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Tipos de Evento</h3>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus size={16} className="mr-1" />
            NUEVO TIPO
          </Button>
        </div>

        <div className="overflow-x-auto bg-white rounded-md">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-medium text-gray-600">Nombre</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Descripción</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Puntos</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {eventTypes.map(event => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{event.name}</td>
                  <td className="py-4 px-4">{event.description}</td>
                  <td className="py-4 px-4">{event.points}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 p-1">
                        <Pencil size={18} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 p-1">
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Insignias</h3>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus size={16} className="mr-1" />
            NUEVA INSIGNIA
          </Button>
        </div>

        <div className="space-y-2">
          {badges.map(badge => (
            <div key={badge.id} className="bg-white border rounded-md">
              <div className="flex items-center justify-between p-4">
                <span>{badge.name}</span>
                <Button variant="ghost" size="sm" className="p-1">
                  <ChevronDown size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGamificationPanel;
