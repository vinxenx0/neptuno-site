
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Mail, MapPin, Globe, History, Pencil } from 'lucide-react';

const UserProfilePanel: React.FC = () => {
  const recentActivity = [
    { id: 1, type: 'reset', date: '4/13/2025, 11:39:24 PM', status: 'pending', amount: '+1000 créditos', positive: true },
    { id: 2, type: 'usage', date: '4/17/2025, 7:49:32 AM', status: 'pending', amount: '-1 créditos', positive: false },
    { id: 3, type: 'usage', date: '4/17/2025, 7:49:34 AM', status: 'pending', amount: '-1 créditos', positive: false },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Personal Information */}
      <div className="lg:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <User size={18} className="text-blue-500" />
            <span>Información Personal</span>
          </h3>
          <Button variant="ghost" size="sm" className="text-blue-500 p-1 h-auto">
            <Pencil size={18} />
          </Button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Username</div>
              <div className="text-sm text-gray-600">user</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-gray-600">user@example.com</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <MapPin className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Ciudad</div>
              <div className="text-sm text-gray-600">No especificado</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <Globe className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Website</div>
              <div className="text-sm text-gray-600">No especificado</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <History size={18} className="text-blue-500" />
            <span>Actividad Reciente</span>
          </h3>
        </div>
        
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center border-b pb-4">
              <div className={`w-10 h-10 rounded-full ${activity.positive ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mr-4`}>
                <span className={`text-2xl ${activity.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {activity.positive ? '+' : '-'}
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <div className="text-sm font-medium">{activity.type}</div>
                  <div className={`text-sm ${activity.positive ? 'text-green-600' : 'text-red-600'} font-medium`}>
                    {activity.amount}
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{activity.date}</span>
                  <span>• {activity.status}</span>
                </div>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full text-blue-500 border-blue-200">
            VER TODAS LAS TRANSACCIONES
          </Button>
        </div>
      </div>
      
      {/* Danger Zone */}
      <div className="lg:col-span-3 border rounded-lg p-4 mt-4">
        <div className="mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2 text-red-500">
            <span className="text-red-500">⚠️</span> Zona Peligrosa
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Estas acciones son irreversibles. Por favor, procede con precaución.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="border-purple-300 text-purple-700">
            CERRAR SESIÓN
          </Button>
          <Button variant="outline" className="border-red-300 text-red-700">
            ELIMINAR CUENTA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePanel;
