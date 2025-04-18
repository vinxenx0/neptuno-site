
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardSummaryCard from '@/components/dashboard/DashboardSummaryCard';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import UserProfilePanel from '@/components/dashboard/UserProfilePanel';
import UserSecurityPanel from '@/components/dashboard/UserSecurityPanel';
import UserCouponsPanel from '@/components/dashboard/UserCouponsPanel';
import UserTransactionsPanel from '@/components/dashboard/UserTransactionsPanel';
import UserPaymentMethodsPanel from '@/components/dashboard/UserPaymentMethodsPanel';
import UserBuyCreditsPanel from '@/components/dashboard/UserBuyCreditsPanel';
import UserIntegrationsPanel from '@/components/dashboard/UserIntegrationsPanel';
import { DollarSign, History, CreditCard, User, Shield, Tag, Link as LinkIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('perfil');
  const navigate = useNavigate();

  // Summary cards data with modern gradients
  const summaryCards = [
    { 
      id: 'creditos', 
      title: 'TUS CRÉDITOS', 
      value: '1017', 
      icon: <DollarSign className="text-white" size={24} />, 
      gradient: 'bg-gradient-to-r from-violet-500 to-purple-600' 
    },
    { 
      id: 'transacciones', 
      title: 'TRANSACCIONES', 
      value: '4', 
      icon: <History className="text-white" size={24} />, 
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600' 
    },
    { 
      id: 'metodos_pago', 
      title: 'MÉTODOS DE PAGO', 
      value: '1', 
      icon: <CreditCard className="text-white" size={24} />, 
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500' 
    },
  ];

  // Navigation tabs
  const navigationTabs = [
    { id: 'perfil', label: 'PERFIL', icon: <User size={18} /> },
    { id: 'seguridad', label: 'SEGURIDAD', icon: <Shield size={18} /> },
    { id: 'cupones', label: 'CUPONES', icon: <Tag size={18} /> },
    { id: 'transacciones', label: 'TRANSACCIONES', icon: <History size={18} /> },
    { id: 'metodos_pago', label: 'MÉTODOS DE PAGO', icon: <CreditCard size={18} /> },
    { id: 'comprar_creditos', label: 'COMPRAR CRÉDITOS', icon: <DollarSign size={18} /> },
    { id: 'integraciones', label: 'INTEGRACIONES', icon: <LinkIcon size={18} /> },
  ];

  // Render the appropriate panel based on active tab
  const renderActivePanel = () => {
    switch (activeTab) {
      case 'perfil':
        return <UserProfilePanel />;
      case 'seguridad':
        return <UserSecurityPanel />;
      case 'cupones':
        return <UserCouponsPanel />;
      case 'transacciones':
        return <UserTransactionsPanel />;
      case 'metodos_pago':
        return <UserPaymentMethodsPanel />;
      case 'comprar_creditos':
        return <UserBuyCreditsPanel />;
      case 'integraciones':
        return <UserIntegrationsPanel />;
      default:
        return <UserProfilePanel />;
    }
  };

  return (
    <DashboardLayout
      title="Panel de Usuario"
      subtitle="Gestiona tu cuenta y configuración"
      avatarText="U"
      avatarColor="bg-purple-600"
      isAdmin={false}
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card) => (
          <DashboardSummaryCard 
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            gradient={card.gradient}
            onClick={() => setActiveTab(card.id === 'creditos' ? 'comprar_creditos' : card.id)}
          />
        ))}
      </div>

      {/* Navigation Tabs */}
      <Card className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 border-none">
        <DashboardTabs 
          tabs={navigationTabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </Card>

      {/* Content Panel */}
      <Card className="bg-white rounded-lg shadow-sm p-6 border-none">
        {renderActivePanel()}
      </Card>
    </DashboardLayout>
  );
};

export default UserDashboard;
