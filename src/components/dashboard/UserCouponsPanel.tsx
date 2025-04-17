
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

const UserCouponsPanel: React.FC = () => {
  const coupons = [
    { id: 1, name: 'Demo Coupon', credits: 5, status: 'redeemed' },
    { id: 2, name: 'Demo Coupon', credits: 5, status: 'redeemed' },
    { id: 3, name: 'Demo Coupon', credits: 5, status: 'redeemed' },
    { id: 4, name: 'Demo Coupon', credits: 5, status: 'active' },
    { id: 5, name: 'Demo Coupon', credits: 5, status: 'active' },
    { id: 6, name: 'Demo Coupon', credits: 5, status: 'active' },
    { id: 7, name: 'Demo Coupon', credits: 5, status: 'active' },
    { id: 8, name: 'Demo Coupon', credits: 5, status: 'redeemed' },
    { id: 9, name: 'Demo Coupon', credits: 5, status: 'active' },
    { id: 10, name: 'Demo Coupon', credits: 5, status: 'active' },
  ];

  return (
    <div>
      <h2 className="text-xl font-medium mb-6">Mis Cupones</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">Nombre</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Créditos</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Estado</th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{coupon.name}</td>
                <td className="py-4 px-4">{coupon.credits}</td>
                <td className="py-4 px-4">
                  <span 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${coupon.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {coupon.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  {coupon.status === 'active' && (
                    <Button className="bg-blue-500 hover:bg-blue-600 text-xs">
                      CANJEAR
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCouponsPanel;
