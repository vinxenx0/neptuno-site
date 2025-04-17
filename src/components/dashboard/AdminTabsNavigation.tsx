
import React, { ReactNode } from 'react';
import TabsNavigation from './TabsNavigation';

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface AdminTabsNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const AdminTabsNavigation: React.FC<AdminTabsNavigationProps> = (props) => {
  return <TabsNavigation {...props} />;
};

export default AdminTabsNavigation;
