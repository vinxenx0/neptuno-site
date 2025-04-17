
import React from 'react';
import DashboardHeader from './DashboardHeader';

const AdminDashboardHeader: React.FC = () => {
  return (
    <DashboardHeader 
      title="Panel de Administración"
      subtitle="Gestiona la configuración del sistema"
      username="A"
      avatarColor="bg-red-500"
      isAdmin={true}
    />
  );
};

export default AdminDashboardHeader;
