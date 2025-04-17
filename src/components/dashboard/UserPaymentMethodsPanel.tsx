
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, Pencil, Trash2 } from 'lucide-react';

const UserPaymentMethodsPanel: React.FC = () => {
  const paymentMethods = [
    {
      id: 1,
      type: 'PayPal',
      isPredetermined: true,
      details: 'asdfsadf'
    }
  ];

  const [isAddingNewMethod, setIsAddingNewMethod] = React.useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <CreditCard size={20} className="text-blue-500" />
          <span>Métodos de Pago</span>
          <span className="text-sm text-gray-500 ml-2">
            Gestiona tus métodos de pago asociados
          </span>
        </h2>
      </div>

      {/* Payment methods list */}
      <div className="space-y-4 mb-8">
        {paymentMethods.map((method) => (
          <div 
            key={method.id} 
            className="border rounded-lg p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <span className="text-green-500 font-bold">P</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">{method.type}</span>
                  {method.isPredetermined && (
                    <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                      Predeterminado
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{method.details}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-blue-500 p-1">
                <Pencil size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-red-500 p-1">
                <Trash2 size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add new payment method */}
      <div className="border rounded-lg">
        <div 
          className="p-4 flex items-center justify-between cursor-pointer"
          onClick={() => setIsAddingNewMethod(!isAddingNewMethod)}
        >
          <h3 className="font-medium">Añadir nuevo método de pago</h3>
          <Plus size={18} />
        </div>

        {isAddingNewMethod && (
          <div className="p-4 border-t">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tipo</label>
                <select className="w-full p-3 border rounded-md">
                  <option>PayPal</option>
                  <option>Tarjeta de Crédito</option>
                  <option>Transferencia Bancaria</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Detalles *</label>
                <textarea 
                  className="w-full p-3 border rounded-md min-h-[100px]"
                  placeholder="Ingrese los detalles del método de pago"
                ></textarea>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2">
                <Plus size={16} />
                <span>AÑADIR MÉTODO</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPaymentMethodsPanel;
