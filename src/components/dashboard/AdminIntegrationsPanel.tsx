
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Trash2, Plus, Search, ArrowUpDown, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select } from '@/components/ui/select';

const AdminIntegrationsPanel: React.FC = () => {
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'slack_notif', user: 'Admin', active: false, endpoint: 'https://hooks.slack.com/services/T00000/B00000/XXXXX' },
    { id: 2, name: 'test', user: 'DevTeam', active: true, endpoint: 'https://api.example.com/webhook' },
    { id: 3, name: 'test2', user: 'Marketing', active: false, endpoint: 'https://notify.example.org/api' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newIntegration, setNewIntegration] = useState({
    name: '',
    user: '',
    endpoint: '',
  });

  const toggleIntegration = (id: number) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id 
        ? { ...integration, active: !integration.active } 
        : integration
    ));
  };

  const deleteIntegration = (id: number) => {
    setIntegrations(integrations.filter(integration => integration.id !== id));
  };

  const addIntegration = () => {
    const newId = Math.max(...integrations.map(i => i.id), 0) + 1;
    setIntegrations([
      ...integrations,
      {
        id: newId,
        name: newIntegration.name,
        user: newIntegration.user,
        active: false,
        endpoint: newIntegration.endpoint
      }
    ]);
    
    setNewIntegration({
      name: '',
      user: '',
      endpoint: '',
    });
    
    setIsAddDialogOpen(false);
  };

  const filteredIntegrations = integrations.filter(integration => 
    integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    integration.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Buscar integración..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex w-full md:w-auto gap-2">
            <div>
              <select className="p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Todos los usuarios</option>
                <option>Admin</option>
                <option>DevTeam</option>
                <option>Marketing</option>
              </select>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-1">
                  <Plus size={16} />
                  <span>Añadir</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nueva Integración</DialogTitle>
                  <DialogDescription>
                    Añade una nueva integración para conectar con servicios externos.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-1">
                      Nombre
                    </label>
                    <Input 
                      id="name" 
                      placeholder="webhook_notifications"
                      value={newIntegration.name}
                      onChange={(e) => setNewIntegration({...newIntegration, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user" className="text-sm font-medium block mb-1">
                      Usuario
                    </label>
                    <Input 
                      id="user" 
                      placeholder="Nombre del equipo o usuario"
                      value={newIntegration.user}
                      onChange={(e) => setNewIntegration({...newIntegration, user: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="endpoint" className="text-sm font-medium block mb-1">
                      URL del endpoint
                    </label>
                    <Input 
                      id="endpoint" 
                      placeholder="https://example.com/webhook"
                      value={newIntegration.endpoint}
                      onChange={(e) => setNewIntegration({...newIntegration, endpoint: e.target.value})}
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button 
                    type="button"
                    onClick={addIntegration}
                    disabled={!newIntegration.name || !newIntegration.user || !newIntegration.endpoint}
                  >
                    Guardar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg border shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-4 px-4 font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Nombre
                    <ArrowUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Usuario
                    <ArrowUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Estado</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredIntegrations.length > 0 ? (
                filteredIntegrations.map(integration => (
                  <tr key={integration.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <ExternalLink size={12} />
                          <span className="truncate max-w-[200px]">{integration.endpoint}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-xs font-normal">
                        {integration.user}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Switch 
                          checked={integration.active} 
                          onCheckedChange={() => toggleIntegration(integration.id)}
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {integration.active ? 'Activo' : 'Inactivo'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-blue-500 border-blue-200"
                        >
                          <Check size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => deleteIntegration(integration.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">
                    No se encontraron integraciones
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminIntegrationsPanel;
