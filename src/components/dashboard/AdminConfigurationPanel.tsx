
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ChevronUp, ChevronDown, Info } from 'lucide-react';

const AdminConfigurationPanel: React.FC = () => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    auth: true,
    rate_limit: true,
    cache: false,
    cors: false,
    celery: false,
    database: false,
    credits: false,
    logging: false,
    system: false,
    features: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleAll = (value: boolean) => {
    const updatedSections: Record<string, boolean> = {};
    Object.keys(openSections).forEach(key => {
      updatedSections[key] = value;
    });
    setOpenSections(updatedSections);
  };

  const renderConfigSection = (
    id: string,
    title: string,
    content: React.ReactNode,
    configCount: number = 3
  ) => {
    const isOpen = openSections[id];
    
    return (
      <div className="mb-4 border rounded-lg bg-white shadow-sm overflow-hidden">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => toggleSection(id)}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-xs">C</span>
            </div>
            <span className="font-medium">{title}</span>
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">{configCount} config</span>
          </div>
          <div>
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
        
        {isOpen && (
          <div className="p-4 border-t bg-gray-50">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Configuraciones del Sistema</h2>
        <div className="space-x-2">
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => toggleAll(true)}
          >
            EXPANDIR TODO
          </Button>
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => toggleAll(false)}
          >
            CONTRAER TODO
          </Button>
        </div>
      </div>
      
      {renderConfigSection(
        'auth',
        'auth',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">basic_duration</label>
            <div className="mt-1 border rounded p-2 bg-white">3600</div>
            <div className="mt-1 text-xs text-gray-500">Duración en seg para tokens básicos (segundos)</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">refresh_token_duration</label>
            <div className="mt-1 border rounded p-2 bg-white">604800</div>
            <div className="mt-1 text-xs text-gray-500">Tiempo de vida del refresh token (7 días)</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">min_pass_length</label>
            <div className="mt-1 border rounded p-2 bg-white">6</div>
            <div className="mt-1 text-xs text-gray-500">Mínima longitud de contraseña</div>
          </div>
        </div>,
        3
      )}
      
      {renderConfigSection(
        'rate_limit',
        'rate_limit',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">web_limit_auth</label>
            <div className="mt-1 border rounded p-2 bg-white">{"[\"limit\": 20, \"seconds\": 60]"}</div>
            <div className="mt-1 text-xs text-gray-500">Límite de peticiones para auth</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">web_limit_api</label>
            <div className="mt-1 border rounded p-2 bg-white">{"[\"limit\": 100, \"seconds\": 60]"}</div>
            <div className="mt-1 text-xs text-gray-500">Límite de peticiones para API</div>
          </div>
        </div>,
        2
      )}
      
      {renderConfigSection(
        'cache',
        'cache',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">cache_ttl</label>
            <div className="mt-1 border rounded p-2 bg-white">300</div>
            <div className="mt-1 text-xs text-gray-500">Tiempo de vida del caché en segundos</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">cache_enabled</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Habilitar/deshabilitar caché</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">max_size_cache</label>
            <div className="mt-1 border rounded p-2 bg-white">10000</div>
            <div className="mt-1 text-xs text-gray-500">Tamaño máximo del caché en entradas</div>
          </div>
        </div>,
        3
      )}
      
      {renderConfigSection(
        'cors',
        'cors',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">allowed_origins</label>
            <div className="mt-1 border rounded p-2 bg-white">["*"]</div>
            <div className="mt-1 text-xs text-gray-500">Orígenes permitidos para CORS</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enabled</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Habilitar/deshabilitar CORS</div>
          </div>
        </div>,
        2
      )}
      
      {renderConfigSection(
        'celery',
        'celery',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">celery_workers</label>
            <div className="mt-1 border rounded p-2 bg-white">4</div>
            <div className="mt-1 text-xs text-gray-500">Número de workers de Celery</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">celery_task_timeout</label>
            <div className="mt-1 border rounded p-2 bg-white">300</div>
            <div className="mt-1 text-xs text-gray-500">Tiempo máximo de ejecución de tareas Celery</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">celery_max_retries</label>
            <div className="mt-1 border rounded p-2 bg-white">3</div>
            <div className="mt-1 text-xs text-gray-500">Máximo de reintentos para tareas Celery</div>
          </div>
        </div>,
        3
      )}
      
      {renderConfigSection(
        'database',
        'database',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">db_pool_size</label>
            <div className="mt-1 border rounded p-2 bg-white">20</div>
            <div className="mt-1 text-xs text-gray-500">Tamaño del pool de conexiones a la DB</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">db_max_overflow</label>
            <div className="mt-1 border rounded p-2 bg-white">10</div>
            <div className="mt-1 text-xs text-gray-500">Conexiones adicionales permitidas en el pool</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">db_pool_timeout</label>
            <div className="mt-1 border rounded p-2 bg-white">30</div>
            <div className="mt-1 text-xs text-gray-500">Tiempo de espera para conseguir una conexión</div>
          </div>
        </div>,
        3
      )}
      
      {renderConfigSection(
        'credits',
        'credits',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">initial_credits</label>
            <div className="mt-1 border rounded p-2 bg-white">100</div>
            <div className="mt-1 text-xs text-gray-500">Créditos iniciales para suscripción freemium</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">premium_credits</label>
            <div className="mt-1 border rounded p-2 bg-white">1000</div>
            <div className="mt-1 text-xs text-gray-500">Créditos iniciales para suscripción premium</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">credits_ratio</label>
            <div className="mt-1 border rounded p-2 bg-white">30</div>
            <div className="mt-1 text-xs text-gray-500">Minutos de recarga de créditos (días)</div>
          </div>
        </div>,
        4
      )}
      
      {renderConfigSection(
        'logging',
        'logging',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">log_level</label>
            <div className="mt-1 border rounded p-2 bg-white">"INFO"</div>
            <div className="mt-1 text-xs text-gray-500">Nivel de detalle en los logs</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">log_retention_days</label>
            <div className="mt-1 border rounded p-2 bg-white">90</div>
            <div className="mt-1 text-xs text-gray-500">Días de retención de logs</div>
          </div>
        </div>,
        2
      )}
      
      {renderConfigSection(
        'system',
        'system',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">system_mode</label>
            <div className="mt-1 border rounded p-2 bg-white">"prod"</div>
            <div className="mt-1 text-xs text-gray-500">Modo del sistema (dev, test, prod)</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">api_version</label>
            <div className="mt-1 border rounded p-2 bg-white">"1.0.0"</div>
            <div className="mt-1 text-xs text-gray-500">Versión actual de la API</div>
          </div>
        </div>,
        2
      )}
      
      {renderConfigSection(
        'features',
        'features',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_registration</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Activar registro de usuarios</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_social_login</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Activar login con redes sociales</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_anonymous_access</label>
            <div className="mt-1 border rounded p-2 bg-white">false</div>
            <div className="mt-1 text-xs text-gray-500">Permitir acceso anónimo</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_demo_mode</label>
            <div className="mt-1 border rounded p-2 bg-white">false</div>
            <div className="mt-1 text-xs text-gray-500">Activar modo demostración</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_metrics</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Activar recolección de métricas</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">enable_coupons</label>
            <div className="mt-1 border rounded p-2 bg-white">true</div>
            <div className="mt-1 text-xs text-gray-500">Activar sistema de cupones</div>
          </div>
        </div>,
        6
      )}
    </div>
  );
};

export default AdminConfigurationPanel;
