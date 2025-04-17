
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lock, RefreshCw, CreditCard } from 'lucide-react';

const UserSecurityPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Password Change */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center mb-4">
          <Lock className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium">Cambiar Contraseña</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual *</label>
            <div className="relative">
              <input 
                type="password" 
                value="••••••••"
                className="w-full p-3 border rounded-md bg-yellow-50"
                readOnly
              />
              <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña *</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingrese su nueva contraseña"
              />
              <RefreshCw className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            ACTUALIZAR CONTRASEÑA
          </Button>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center mb-4">
          <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium">Métodos de Pago</h3>
          <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
            0 configurados
          </span>
        </div>
        
        <div className="h-32 flex items-center justify-center border-2 border-dashed rounded-md border-gray-200">
          <p className="text-sm text-gray-500">No hay métodos de pago configurados</p>
        </div>
        
        <div className="mt-4">
          <Button variant="outline" className="w-full text-blue-500 border-blue-200">
            AÑADIR MÉTODO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserSecurityPanel;
