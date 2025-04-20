
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
        <NavigationMenuItem>
          <MenuButton>Producto</MenuButton>
          <NavigationMenuContent>
            <ProductMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <MenuButton>Usos</MenuButton>
          <NavigationMenuContent>
            <UsesMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <MenuButton>SDK</MenuButton>
          <NavigationMenuContent>
            <SdkMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <MenuButton>Corporate</MenuButton>
          <NavigationMenuContent>
            <CorporateMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
