
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface DashboardTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex flex-wrap items-center border-b overflow-x-auto scrollbar-none">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center space-x-2 py-4 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
            activeTab === tab.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          )}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;
