
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProductMenu from "./mega-menu/ProductMenu";
import UsesMenu from "./mega-menu/UsesMenu";
import SdkMenu from "./mega-menu/SdkMenu";
import CorporateMenu from "./mega-menu/CorporateMenu";

export function MegaMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue bg-transparent">Producto</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ProductMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue bg-transparent">Usos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <UsesMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue bg-transparent">SDK</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SdkMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue bg-transparent">Corporate</NavigationMenuTrigger>
          <NavigationMenuContent>
            <CorporateMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
