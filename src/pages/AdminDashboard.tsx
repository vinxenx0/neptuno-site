
import React, { useState } from 'react';
import AdminDashboardHeader from '@/components/dashboard/AdminDashboardHeader';
import AdminCardSummary from '@/components/dashboard/AdminCardSummary';
import AdminTabsNavigation from '@/components/dashboard/AdminTabsNavigation';
import AdminConfigurationPanel from '@/components/dashboard/AdminConfigurationPanel';
import AdminPaymentPanel from '@/components/dashboard/AdminPaymentPanel';
import AdminCouponsPanel from '@/components/dashboard/AdminCouponsPanel';
import AdminGamificationPanel from '@/components/dashboard/AdminGamificationPanel';
import AdminIntegrationsPanel from '@/components/dashboard/AdminIntegrationsPanel';
import AdminOriginsPanel from '@/components/dashboard/AdminOriginsPanel';
import AdminFeaturesPanel from '@/components/dashboard/AdminFeaturesPanel';
import { Settings, Globe, Link, Trophy, Tag, CreditCard, Layers } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('configuraciones');

  // Summary cards data
  const summaryCards = [
    { id: 'configuraciones', title: 'CONFIGURACIONES', value: '33', icon: <Settings className="text-white" />, color: 'from-indigo-600 to-purple-600' },
    { id: 'origenes', title: 'ORÍGENES PERMITIDOS', value: '3', icon: <Globe className="text-white" />, color: 'from-blue-600 to-indigo-500' },
    { id: 'integraciones', title: 'INTEGRACIONES', value: '3', icon: <Link className="text-white" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'gamificacion', title: 'GAMIFICACIÓN', value: '4', icon: <Trophy className="text-white" />, color: 'from-violet-500 to-purple-600' },
    { id: 'pagos', title: 'PAGOS', value: '5', icon: <CreditCard className="text-white" />, color: 'from-blue-500 to-indigo-500' },
  ];

  // Navigation tabs
  const navigationTabs = [
    { id: 'funcionalidades', label: 'FUNCIONALIDADES', icon: <Layers size={18} /> },
    { id: 'origenes', label: 'ORÍGENES', icon: <Globe size={18} /> },
    { id: 'integraciones', label: 'INTEGRACIONES', icon: <Link size={18} /> },
    { id: 'gamificacion', label: 'GAMIFICACIÓN', icon: <Trophy size={18} /> },
    { id: 'cupones', label: 'CUPONES', icon: <Tag size={18} /> },
    { id: 'pagos', label: 'PAGOS', icon: <CreditCard size={18} /> },
    { id: 'configuraciones', label: 'CONFIGURACIONES', icon: <Settings size={18} /> },
  ];

  // Render the appropriate panel based on active tab
  const renderActivePanel = () => {
    switch (activeTab) {
      case 'funcionalidades':
        return <AdminFeaturesPanel />;
      case 'origenes':
        return <AdminOriginsPanel />;
      case 'integraciones':
        return <AdminIntegrationsPanel />;
      case 'gamificacion':
        return <AdminGamificationPanel />;
      case 'cupones':
        return <AdminCouponsPanel />;
      case 'pagos':
        return <AdminPaymentPanel />;
      case 'configuraciones':
        return <AdminConfigurationPanel />;
      default:
        return <AdminConfigurationPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminDashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {summaryCards.map((card) => (
            <AdminCardSummary 
              key={card.id}
              title={card.title}
              value={card.value}
              icon={card.icon}
              colorClass={card.color}
              onClick={() => setActiveTab(card.id.toLowerCase())}
            />
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <AdminTabsNavigation 
            tabs={navigationTabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {renderActivePanel()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
