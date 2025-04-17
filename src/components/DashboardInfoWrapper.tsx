
import React from 'react';
import DashboardInfo from './DashboardInfo';

const DashboardInfoWrapper: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardInfo />
      </div>
    </div>
  );
};

export default DashboardInfoWrapper;
