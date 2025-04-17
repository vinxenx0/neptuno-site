
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/sheet';
import { Trash2, Plus } from 'lucide-react';

const AdminOriginsPanel: React.FC = () => {
  const [origins, setOrigins] = React.useState([
    { id: 1, origin: 'localhost:3000' },
    { id: 2, origin: 'neptuno.ciberpunk.es/api' },
    { id: 3, origin: '*' },
  ]);

  const [newOrigin, setNewOrigin] = React.useState('');

  const handleAddOrigin = () => {
    if (newOrigin.trim()) {
      setOrigins([...origins, { id: Date.now(), origin: newOrigin }]);
      setNewOrigin('');
    }
  };

  const handleDeleteOrigin = (id: number) => {
    setOrigins(origins.filter(origin => origin.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <span>Orígenes Permitidos</span>
        <Switch />
      </h2>

      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Nuevo Origen"
          className="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newOrigin}
          onChange={(e) => setNewOrigin(e.target.value)}
        />
        <Button 
          className="bg-blue-500 hover:bg-blue-600 rounded-l-none"
          onClick={handleAddOrigin}
        >
          AÑADIR ORIGEN
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">Origen</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {origins.map(origin => (
              <tr key={origin.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{origin.origin}</td>
                <td className="py-4 px-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-500 hover:text-red-600 p-1"
                    onClick={() => handleDeleteOrigin(origin.id)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOriginsPanel;
