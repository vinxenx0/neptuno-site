import React from 'react';
import { Switch } from '@/components/ui/switch';

const AdminFeaturesPanel: React.FC = () => {
  const features = [
    {
      id: 'user_registration',
      title: 'Registro de Usuarios',
      description: 'Controla si los nuevos usuarios pueden registrarse',
      status: 'Activado',
      isActive: true,
      details: 'Permite a nuevos usuarios registrarse en la plataforma. Si se desactiva, sólo los administradores podrán crear cuentas.'
    },
    {
      id: 'social_login',
      title: 'Login Social',
      description: 'Permite inicio de sesión con redes sociales',
      status: 'Desactivado',
      isActive: false,
      details: 'Permite el inicio de sesión con proveedores sociales como Google, Facebook, etc. Requiere configuración previa de las APIs.'
    },
    {
      id: 'anonymous_users',
      title: 'Usuarios Anónimos',
      description: 'Controla el acceso de usuarios no registrados',
      status: 'Permitido',
      isActive: true,
      details: 'Impide el acceso a usuarios no registrados. Todos los visitantes deberán iniciar sesión para usar la plataforma.'
    },
    {
      id: 'credit_system',
      title: 'Sistema de Créditos',
      description: 'Habilita/deshabilita el uso de créditos',
      status: 'Activado',
      isActive: true,
      details: 'Deshabilita el sistema de créditos en la plataforma. Los usuarios no podrán comprar ni gastar créditos.'
    },
    {
      id: 'payment_methods',
      title: 'Métodos de Pago',
      description: 'Habilita diferentes opciones de pago',
      status: 'Activado',
      isActive: true,
      details: 'Habilita diferentes métodos de pago como tarjetas, PayPal, etc. Requiere configuración previa de cada proveedor.'
    },
    {
      id: 'points_system',
      title: 'Sistema de Puntos',
      description: 'Activa puntos por actividades',
      status: 'Activado',
      isActive: true,
      details: 'Activa el sistema de puntos por actividades. Los usuarios ganarán puntos por completar acciones en la plataforma.'
    },
    {
      id: 'badges_system',
      title: 'Sistema de Insignias',
      description: 'Permite la obtención de insignias',
      status: 'Activado',
      isActive: true,
      details: 'Permite la obtención de insignias al alcanzar ciertos logros. Configura los requisitos en la pestaña de Gamificación.'
    },
    {
      id: 'coupons_system',
      title: 'Cupones',
      description: 'Habilita el sistema de cupones',
      status: 'Activado',
      isActive: true,
      details: 'Permite la creación y uso de cupones de descuento. Los usuarios podrán canjear cupones para obtener descuentos en compras.'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-gray-800">Control de Funcionalidades del Sistema</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(feature => (
          <div key={feature.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    feature.id === 'user_registration' ? 'bg-green-100 text-green-600' : 
                    feature.id === 'social_login' ? 'bg-red-100 text-red-600' :
                    feature.id === 'anonymous_users' ? 'bg-blue-100 text-blue-600' :
                    feature.id === 'credit_system' ? 'bg-green-100 text-green-600' :
                    feature.id === 'payment_methods' ? 'bg-green-100 text-green-600' :
                    feature.id === 'points_system' ? 'bg-green-100 text-green-600' :
                    feature.id === 'badges_system' ? 'bg-green-100 text-green-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <span className="text-lg">{feature.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
                <Switch checked={feature.isActive} />
              </div>
              <div className="text-xs text-gray-600 mt-2 flex-grow">
                {feature.details}
              </div>
              <div className="mt-3 pt-3 border-t text-xs">
                <span className={`px-2 py-1 rounded-full ${feature.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  Estado actual: <span className="font-medium">{feature.status}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeaturesPanel;
