
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Ticket } from 'lucide-react';

const AdminCouponsPanel: React.FC = () => {
  const coupons = [
    { id: 1, name: 'Bienvenida', description: 'Cupón para nuevos usuarios', credits: 50, active: true },
    { id: 2, name: 'FIDELIDAD', description: 'Cupón por lealtad', credits: 100, active: true },
    { id: 3, name: 'PROMOCION', description: 'Cupón promocional especial', credits: 200, active: true },
    { id: 4, name: 'EVENTO', description: 'Cupón para eventos', credits: 75, active: false },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Tipos de Cupones</h2>
        <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-1">
          <span className="text-white text-sm">NUEVO TIPO DE CUPÓN</span>
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">Nombre</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Descripción</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Créditos</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Activo</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{coupon.name}</td>
                <td className="py-4 px-4">{coupon.description}</td>
                <td className="py-4 px-4">{coupon.credits}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${coupon.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {coupon.active ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 p-1">
                      <Pencil size={18} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50 text-xs flex items-center gap-1">
                      <Ticket size={14} />
                      GENERAR PRUEBA
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

export default AdminCouponsPanel;
