
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Ticket, PlusCircle, Tag, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminCouponsPanel: React.FC = () => {
  const coupons = [
    { id: 1, name: 'Bienvenida', description: 'Cupón para nuevos usuarios', credits: 50, active: true },
    { id: 2, name: 'FIDELIDAD', description: 'Cupón por lealtad', credits: 100, active: true },
    { id: 3, name: 'PROMOCION', description: 'Cupón promocional especial', credits: 200, active: true },
    { id: 4, name: 'EVENTO', description: 'Cupón para eventos', credits: 75, active: false },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Tipos de Cupones</h2>
          <p className="text-gray-500 text-sm">Crea y administra los cupones disponibles para tus usuarios</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <PlusCircle size={18} />
          <span className="text-white text-sm">NUEVO CUPÓN</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {coupons.map(coupon => (
          <Card key={coupon.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Tag size={16} className="text-purple-600" />
                </div>
                <h3 className="font-medium">{coupon.name}</h3>
              </div>
              <Badge variant={coupon.active ? "default" : "outline"} className={coupon.active ? "bg-green-100 text-green-700 hover:bg-green-200" : "text-red-500 border-red-200"}>
                {coupon.active ? 'Activo' : 'Inactivo'}
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mb-3">{coupon.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-gray-500">Créditos:</span> 
                <span className="font-medium text-violet-700 ml-1">{coupon.credits}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-violet-600 p-1 h-8 w-8">
                  <Pencil size={16} />
                </Button>
                <Button variant="outline" size="sm" className="text-violet-600 border-violet-300 hover:bg-violet-50 h-8 flex items-center gap-1 text-xs">
                  GENERAR
                  <ChevronRight size={14} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100 mb-4">
        <h3 className="text-lg font-medium mb-2 text-purple-800">Estadísticas de cupones</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Total de cupones</div>
            <div className="text-2xl font-bold text-purple-700">245</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Cupones canjeados</div>
            <div className="text-2xl font-bold text-indigo-600">156</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Tasa de canje</div>
            <div className="text-2xl font-bold text-blue-600">63%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Créditos distribuidos</div>
            <div className="text-2xl font-bold text-teal-600">18,450</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Nombre</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Descripción</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Créditos</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Estado</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{coupon.name}</td>
                <td className="py-3 px-4 text-gray-600">{coupon.description}</td>
                <td className="py-3 px-4">{coupon.credits}</td>
                <td className="py-3 px-4">
                  <Badge variant={coupon.active ? "default" : "outline"} className={coupon.active ? "bg-green-100 text-green-700 hover:bg-green-200" : "text-red-500 border-red-200"}>
                    {coupon.active ? 'Activo' : 'Inactivo'}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-violet-600 p-1 h-8 w-8">
                      <Pencil size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-violet-600 border-violet-300 hover:bg-violet-50 h-8 flex items-center text-xs">
                      <Ticket size={14} className="mr-1" />
                      GENERAR
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
