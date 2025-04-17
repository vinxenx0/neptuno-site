
import React from 'react';
import DashboardHeader from './DashboardHeader';

const UserDashboardHeader: React.FC = () => {
  return (
    <DashboardHeader 
      title="Hola, user!"
      subtitle="Bienvenido a tu panel de control"
      username="U"
      avatarColor="bg-blue-500"
      isAdmin={false}
    />
  );
};

export default UserDashboardHeader;
