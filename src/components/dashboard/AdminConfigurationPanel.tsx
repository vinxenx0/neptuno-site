
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ChevronUp, ChevronDown } from 'lucide-react';

const AdminConfigurationPanel: React.FC = () => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    auth: true,
    rate_limit: false,
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

  const renderConfigSection = (
    id: string,
    title: string,
    content: React.ReactNode,
    configCount: number = 3
  ) => {
    const isOpen = openSections[id];
    
    return (
      <div className="mb-4 border rounded-lg bg-white">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
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
          <div className="p-4 border-t">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button variant="outline" className="text-sm">
          CONTRAER TODO
        </Button>
      </div>
      
      {renderConfigSection(
        'auth',
        'auth',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500">basic_duration</label>
            <div className="mt-1 border rounded p-2 bg-gray-50">3600</div>
            <div className="mt-1 text-xs text-gray-500">Duración en seg para tokens básicos (segundos)</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500">refresh_token_duration</label>
            <div className="mt-1 border rounded p-2 bg-gray-50">604800</div>
            <div className="mt-1 text-xs text-gray-500">Tiempo de vida del refresh token (7 días)</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500">min_pass_length</label>
            <div className="mt-1 border rounded p-2 bg-gray-50">6</div>
            <div className="mt-1 text-xs text-gray-500">Mínima longitud de contraseña</div>
          </div>
        </div>
      )}
      
      {renderConfigSection(
        'rate_limit',
        'rate_limit',
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500">web_limit_auth</label>
            <div className="mt-1 border rounded p-2 bg-gray-50">{"[\"limit\": 20, \"seconds\": 60]"}</div>
            <div className="mt-1 text-xs text-gray-500">Límite de peticiones para auth</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500">web_limit_api</label>
            <div className="mt-1 border rounded p-2 bg-gray-50">{"[\"limit\": 100, \"seconds\": 60]"}</div>
            <div className="mt-1 text-xs text-gray-500">Límite de peticiones para API</div>
          </div>
        </div>
      )}

      {/* More configuration sections would go here */}
    </div>
  );
};

export default AdminConfigurationPanel;
