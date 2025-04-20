
import React from 'react';
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface MenuButtonProps {
  children: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children }) => {
  return (
    <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue bg-transparent hover:bg-transparent focus:bg-transparent">
      {children}
    </NavigationMenuTrigger>
  );
};

export default MenuButton;
