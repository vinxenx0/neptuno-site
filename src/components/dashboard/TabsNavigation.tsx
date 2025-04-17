
import React, { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface TabsNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex flex-wrap border-b overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors ${
            activeTab === tab.id
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabsNavigation;
