
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardSummaryCard from '@/components/dashboard/DashboardSummaryCard';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
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
  const navigate = useNavigate();

  // Summary cards data with modern gradients
  const summaryCards = [
    { id: 'configuraciones', title: 'CONFIGURACIONES', value: '33', icon: <Settings className="text-white" size={24} />, gradient: 'bg-gradient-to-r from-purple-700 to-indigo-600' },
    { id: 'origenes', title: 'ORÍGENES PERMITIDOS', value: '3', icon: <Globe className="text-white" size={24} />, gradient: 'bg-gradient-to-r from-indigo-600 to-blue-600' },
    { id: 'integraciones', title: 'INTEGRACIONES', value: '3', icon: <Link className="text-white" size={24} />, gradient: 'bg-gradient-to-r from-blue-600 to-cyan-500' },
    { id: 'gamificacion', title: 'GAMIFICACIÓN', value: '4', icon: <Trophy className="text-white" size={24} />, gradient: 'bg-gradient-to-r from-cyan-500 to-teal-500' },
    { id: 'pagos', title: 'PAGOS', value: '5', icon: <CreditCard className="text-white" size={24} />, gradient: 'bg-gradient-to-r from-teal-500 to-emerald-500' },
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
      default:
        return <AdminConfigurationPanel />;
    }
  };

  return (
    <DashboardLayout
      title="Panel de Administración"
      subtitle="Gestiona la configuración del sistema"
      avatarText="A"
      avatarColor="bg-purple-700"
      isAdmin={true}
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {summaryCards.map((card) => (
          <DashboardSummaryCard 
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            gradient={card.gradient}
            onClick={() => setActiveTab(card.id)}
          />
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <DashboardTabs 
          tabs={navigationTabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>

      {/* Content Panel */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        {renderActivePanel()}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
