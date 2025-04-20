
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ProductMenu from "./mega-menu/ProductMenu";
import UsesMenu from "./mega-menu/UsesMenu";
import SdkMenu from "./mega-menu/SdkMenu";
import CorporateMenu from "./mega-menu/CorporateMenu";
import MenuButton from "./mega-menu/MenuButton";

export function MegaMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <MegaMenuItem label="Producto" content={<ProductMenu />} />
        <MegaMenuItem label="Usos" content={<UsesMenu />} />
        <MegaMenuItem label="SDK" content={<SdkMenu />} />
        <MegaMenuItem label="Corporate" content={<CorporateMenu />} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type MegaMenuItemProps = {
  label: string;
  content: React.ReactNode;
};

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({ label, content }) => {
  return (
    <NavigationMenuItem>
      <MenuButton>{label}</MenuButton>
      <NavigationMenuContent>{content}</NavigationMenuContent>
    </NavigationMenuItem>
  );
};
