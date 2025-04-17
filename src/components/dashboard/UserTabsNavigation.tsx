
import React, { ReactNode } from 'react';
import TabsNavigation from './TabsNavigation';

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface UserTabsNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const UserTabsNavigation: React.FC<UserTabsNavigationProps> = (props) => {
  return <TabsNavigation {...props} />;
};

export default UserTabsNavigation;
