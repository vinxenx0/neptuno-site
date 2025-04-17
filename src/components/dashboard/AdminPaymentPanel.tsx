
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Switch } from '@/components/ui/sheet';

const AdminPaymentPanel: React.FC = () => {
  const paymentProviders = [
    { id: 1, name: 'STRIPE', active: false },
    { id: 2, name: 'PayPal', active: true },
    { id: 3, name: 'Transferencia bancaria', active: false },
    { id: 4, name: 'Crypto', active: false },
    { id: 5, name: 'Money Transfer', active: true },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-gray-800">Gestión de Pagos</span>
        </h2>
        <Button className="bg-blue-500 hover:bg-blue-600">
          NUEVO PROVEEDOR
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-2 font-medium text-gray-600">Nombre</th>
              <th className="text-left py-4 px-2 font-medium text-gray-600">Estado</th>
              <th className="text-left py-4 px-2 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paymentProviders.map(provider => (
              <tr key={provider.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-2">{provider.name}</td>
                <td className="py-4 px-2">
                  <Switch checked={provider.active} />
                </td>
                <td className="py-4 px-2">
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
  );
};

export default AdminPaymentPanel;
