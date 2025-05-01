
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BadgeCheck, Users, Award, TrendingUp } from 'lucide-react';

const userActivityData = [
  { name: 'Mon', anonymous: 320, registered: 240 },
  { name: 'Tue', anonymous: 300, registered: 290 },
  { name: 'Wed', anonymous: 340, registered: 320 },
  { name: 'Thu', anonymous: 380, registered: 390 },
  { name: 'Fri', anonymous: 400, registered: 420 },
  { name: 'Sat', anonymous: 280, registered: 380 },
  { name: 'Sun', anonymous: 250, registered: 410 },
];

const gamificationData = [
  { name: 'Badges', value: 65 },
  { name: 'Puntos', value: 120 },
  { name: 'Niveles', value: 18 },
  { name: 'Recompensas', value: 35 },
];

const engagementData = [
  { name: 'Ene', engagement: 65 },
  { name: 'Feb', engagement: 78 },
  { name: 'Mar', engagement: 89 },
  { name: 'Abr', engagement: 81 },
  { name: 'May', engagement: 93 },
  { name: 'Jun', engagement: 106 },
  { name: 'Jul', engagement: 122 },
];

const COLORS = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981'];

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-blue-900 p-1 shadow-xl">
      <div className="h-full rounded-lg bg-gradient-to-br from-gray-900 to-blue-900 p-4 text-white">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Dashboard Premium</h3>
          <div className="flex items-center space-x-1">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Users Chart */}
          <div className="rounded-lg bg-gray-800/70 p-3 shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="flex items-center text-sm font-medium text-gray-300">
                <Users size={16} className="mr-2 text-blue-400" />
                Usuarios anónimos vs. registrados
              </h4>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-300">
                +12.5% ↑
              </span>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  <Line type="monotone" dataKey="anonymous" stroke="#60A5FA" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="registered" stroke="#34D399" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Gamification Metrics */}
          <div className="rounded-lg bg-gray-800/70 p-3 shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="flex items-center text-sm font-medium text-gray-300">
                <Award size={16} className="mr-2 text-purple-400" />
                Métricas de gamificación
              </h4>
              <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-300">
                Premium
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gamificationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {gamificationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="col-span-1 flex flex-col justify-center space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs">
                    <div className="mr-2 h-3 w-3 rounded-sm bg-purple-500"></div>
                    Badges
                  </span>
                  <span className="text-xs font-medium">65</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs">
                    <div className="mr-2 h-3 w-3 rounded-sm bg-pink-500"></div>
                    Puntos
                  </span>
                  <span className="text-xs font-medium">120</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs">
                    <div className="mr-2 h-3 w-3 rounded-sm bg-blue-500"></div>
                    Niveles
                  </span>
                  <span className="text-xs font-medium">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs">
                    <div className="mr-2 h-3 w-3 rounded-sm bg-green-500"></div>
                    Recompensas
                  </span>
                  <span className="text-xs font-medium">35</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Engagement Chart */}
          <div className="col-span-1 rounded-lg bg-gray-800/70 p-3 shadow-lg lg:col-span-2">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="flex items-center text-sm font-medium text-gray-300">
                <TrendingUp size={16} className="mr-2 text-teal-400" />
                Nivel de engagement
              </h4>
              <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs text-teal-300">
                +24% desde implementación
              </span>
            </div>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  <Bar dataKey="engagement" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <div className="rounded-md bg-blue-900/50 p-2">
            <div className="text-xs text-gray-400">Usuarios</div>
            <div className="text-lg font-bold">2,453</div>
          </div>
          <div className="rounded-md bg-purple-900/50 p-2">
            <div className="text-xs text-gray-400">Conversión</div>
            <div className="text-lg font-bold">34.2%</div>
          </div>
          <div className="rounded-md bg-teal-900/50 p-2">
            <div className="text-xs text-gray-400">Retención</div>
            <div className="text-lg font-bold">76.8%</div>
          </div>
          <div className="rounded-md bg-amber-900/50 p-2">
            <div className="text-xs text-gray-400">LTV</div>
            <div className="text-lg font-bold">€89.50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
