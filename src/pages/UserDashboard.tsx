
import React, { useState } from 'react';
import UserDashboardHeader from '@/components/dashboard/UserDashboardHeader';
import UserCardSummary from '@/components/dashboard/UserCardSummary';
import UserTabsNavigation from '@/components/dashboard/UserTabsNavigation';
import UserProfilePanel from '@/components/dashboard/UserProfilePanel';
import UserSecurityPanel from '@/components/dashboard/UserSecurityPanel';
import UserCouponsPanel from '@/components/dashboard/UserCouponsPanel';
import UserTransactionsPanel from '@/components/dashboard/UserTransactionsPanel';
import UserPaymentMethodsPanel from '@/components/dashboard/UserPaymentMethodsPanel';
import UserBuyCreditsPanel from '@/components/dashboard/UserBuyCreditsPanel';
import UserIntegrationsPanel from '@/components/dashboard/UserIntegrationsPanel';
import { DollarSign, History, CreditCard, User, Shield, Tag, Link } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('perfil');

  // Summary cards data
  const summaryCards = [
    { 
      id: 'creditos', 
      title: 'TUS CRÉDITOS', 
      value: '1017', 
      icon: <DollarSign className="text-white" />, 
      color: 'from-blue-600 to-blue-400' 
    },
    { 
      id: 'transacciones', 
      title: 'TRANSACCIONES', 
      value: '4', 
      icon: <History className="text-white" />, 
      color: 'from-cyan-500 to-blue-400' 
    },
    { 
      id: 'metodos_pago', 
      title: 'MÉTODOS DE PAGO', 
      value: '1', 
      icon: <CreditCard className="text-white" />, 
      color: 'from-purple-400 to-pink-400' 
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
    { id: 'integraciones', label: 'INTEGRACIONES', icon: <Link size={18} /> },
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
    <div className="min-h-screen bg-gray-100">
      <UserDashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {summaryCards.map((card) => (
            <UserCardSummary 
              key={card.id}
              title={card.title}
              value={card.value}
              icon={card.icon}
              colorClass={card.color}
              onClick={() => setActiveTab(card.id === 'creditos' ? 'comprar_creditos' : card.id)}
            />
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <UserTabsNavigation 
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

export default UserDashboard;
