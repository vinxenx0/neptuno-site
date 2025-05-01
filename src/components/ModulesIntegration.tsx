
import React from 'react';
import { Webhook, Code, Puzzle, LayoutGrid } from 'lucide-react';

const ModulesIntegration: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 mt-8">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Módulos Integrables</h3>
        
        <div className="relative h-80 overflow-hidden">
          {/* Animated Architecture Diagram */}
          <div className="absolute w-full h-full">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neptuno-blue/10 border border-neptuno-blue/30 rounded-full h-40 w-40 flex items-center justify-center">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="text-neptuno-blue font-bold text-xl">N</span>
                </div>
                <div className="mt-2 text-sm font-medium">Neptuno Core</div>
              </div>
            </div>
            
            {/* Webhooks Module */}
            <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 bg-purple-50 border border-purple-200 rounded-lg p-3 text-center w-36 animate-float">
              <div className="flex items-center justify-center mb-1">
                <Webhook size={18} className="text-purple-600 mr-2" />
                <span className="font-medium text-gray-800">Webhooks</span>
              </div>
              <div className="text-xs text-gray-600">Integraciones</div>
            </div>
            
            {/* Connect line */}
            <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-0.5 h-[60px] bg-purple-300"></div>
            
            {/* Events Module */}
            <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-center w-36 animate-float" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-center mb-1">
                <Puzzle size={18} className="text-amber-600 mr-2" />
                <span className="font-medium text-gray-800">Eventos</span>
              </div>
              <div className="text-xs text-gray-600">Real-time</div>
            </div>
            
            {/* Connect line */}
            <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-0.5 h-[60px] bg-amber-300"></div>
            
            {/* SDK Module */}
            <div className="absolute top-1/2 left-[30px] transform -translate-y-1/2 bg-green-50 border border-green-200 rounded-lg p-3 text-center w-36 animate-float" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center justify-center mb-1">
                <Code size={18} className="text-green-600 mr-2" />
                <span className="font-medium text-gray-800">SDK</span>
              </div>
              <div className="text-xs text-gray-600">JS/TS/Python</div>
            </div>
            
            {/* Connect line */}
            <div className="absolute top-1/2 left-[95px] transform -translate-y-1/2 h-0.5 w-[60px] bg-green-300"></div>
            
            {/* Dashboard Module */}
            <div className="absolute top-1/2 right-[30px] transform -translate-y-1/2 bg-blue-50 border border-blue-200 rounded-lg p-3 text-center w-36 animate-float" style={{animationDelay: '0.9s'}}>
              <div className="flex items-center justify-center mb-1">
                <LayoutGrid size={18} className="text-blue-600 mr-2" />
                <span className="font-medium text-gray-800">Dashboards</span>
              </div>
              <div className="text-xs text-gray-600">Admin & Cliente</div>
            </div>
            
            {/* Connect line */}
            <div className="absolute top-1/2 right-[95px] transform -translate-y-1/2 h-0.5 w-[60px] bg-blue-300"></div>
            
            {/* Compatible Frameworks */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-50 border border-gray-200 rounded-lg p-3 w-80">
              <div className="text-xs text-center font-medium text-gray-600 mb-2">Compatible con</div>
              <div className="flex justify-center space-x-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-6 w-6" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" className="h-6 w-6" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="h-6 w-6" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" className="h-6 w-6" />
                <span className="text-gray-400 font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesIntegration;
