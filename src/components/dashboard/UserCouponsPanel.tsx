
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket, ChevronRight, Tag, Info, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UserCouponsPanel: React.FC = () => {
  const coupons = [
    { id: 1, name: 'WELCOME10', credits: 10, status: 'active', expiresAt: '2025-06-12' },
    { id: 2, name: 'DEMO20', credits: 20, status: 'active', expiresAt: '2025-05-18' },
    { id: 3, name: 'BONUS5', credits: 5, status: 'active', expiresAt: '2025-05-02' },
    { id: 4, name: 'FREE100', credits: 100, status: 'redeemed', redeemedAt: '2025-04-10' },
    { id: 5, name: 'EASTER25', credits: 25, status: 'redeemed', redeemedAt: '2025-03-31' },
    { id: 6, name: 'PROMO50', credits: 50, status: 'redeemed', redeemedAt: '2025-03-15' },
  ];

  const activeCoupons = coupons.filter(coupon => coupon.status === 'active');
  const redeemedCoupons = coupons.filter(coupon => coupon.status === 'redeemed');

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Mis Cupones</h2>
          <p className="text-gray-500 text-sm">Gestiona y canjea tus cupones disponibles</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-purple-300 text-purple-700 flex items-center gap-1">
            <Tag size={16} />
            AÑADIR CUPÓN
          </Button>
        </div>
      </div>

      {/* Active coupons section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <span className="bg-green-100 p-1.5 rounded-md mr-2">
            <Ticket size={16} className="text-green-600" />
          </span>
          Cupones Disponibles ({activeCoupons.length})
        </h3>

        {activeCoupons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCoupons.map(coupon => (
              <Card key={coupon.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium text-lg">{coupon.name}</h4>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Activo</Badge>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Válido hasta: {coupon.expiresAt}
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-purple-50 px-3 py-1 rounded-md">
                    <span className="text-purple-700 font-medium">{coupon.credits} créditos</span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1">
                    CANJEAR
                    <ChevronRight size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 flex items-center justify-center border-dashed border-2">
            <div className="text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-gray-300 mb-2" />
              <p className="text-gray-500">No tienes cupones disponibles actualmente</p>
            </div>
          </Card>
        )}
      </div>

      {/* Redeemed coupons section */}
      <div>
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <span className="bg-gray-100 p-1.5 rounded-md mr-2">
            <Ticket size={16} className="text-gray-600" />
          </span>
          Cupones Canjeados ({redeemedCoupons.length})
        </h3>

        <Card className="bg-white rounded-lg shadow-sm overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Código</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Créditos</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Canjeado</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                {redeemedCoupons.map((coupon) => (
                  <tr key={coupon.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{coupon.name}</td>
                    <td className="py-3 px-4">
                      <span className="text-purple-700">{coupon.credits}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{coupon.redeemedAt}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="text-gray-500 bg-gray-100">
                        Canjeado
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
        <Info size={20} className="text-blue-600 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium text-blue-800 mb-1">¿Cómo funcionan los cupones?</h4>
          <p className="text-sm text-blue-700">
            Los cupones son códigos promocionales que puedes canjear para obtener créditos adicionales en tu cuenta.
            Cada cupón tiene una cantidad específica de créditos y una fecha de expiración.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCouponsPanel;
