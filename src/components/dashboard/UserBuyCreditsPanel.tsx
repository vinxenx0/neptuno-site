
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, CreditCard, Star, Shield } from 'lucide-react';

const UserBuyCreditsPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Buy credits form */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center mb-4">
          <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium">Comprar Créditos</h3>
          <span className="ml-2 text-sm text-gray-500">
            Recarga tu saldo de créditos
          </span>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad de Créditos *</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input 
                type="text" 
                className="w-full pl-8 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monto a Pagar (USD) *</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input 
                type="text" 
                className="w-full pl-8 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Método de Pago</label>
            <div className="relative">
              <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>PayPal - asdfsadf (Predeterminado)</option>
                <option>Añadir nuevo método de pago</option>
              </select>
            </div>
            <p className="mt-1 text-xs text-gray-500">Selecciona un método de pago</p>
          </div>
          
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            COMPRAR CRÉDITOS
          </Button>
        </div>
      </div>
      
      {/* Rates and benefits */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center mb-6">
          <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium">Tarifas y Beneficios</h3>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center p-3 border rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Star className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="font-medium">1 crédito = $1 USD</div>
              <div className="text-sm text-gray-500">Tasa de cambio fija</div>
            </div>
          </div>
          
          <div className="flex items-center p-3 border rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <CreditCard className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="font-medium">Múltiples métodos de pago</div>
              <div className="text-sm text-gray-500">Tarjetas, PayPal y más</div>
            </div>
          </div>
          
          <div className="flex items-center p-3 border rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <Shield className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="font-medium">Transacciones seguras</div>
              <div className="text-sm text-gray-500">Encriptación SSL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBuyCreditsPanel;
