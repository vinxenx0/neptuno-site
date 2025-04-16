
import React from 'react';
import DashboardInfo from './DashboardInfo';

const DashboardInfoWrapper: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-full max-w-none px-0">
        <DashboardInfo />
      </div>
    </div>
  );
};

export default DashboardInfoWrapper;
