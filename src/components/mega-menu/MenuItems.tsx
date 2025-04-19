
import React from 'react';
import { cn } from "@/lib/utils";

// Basic list item
export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

// List item with icon
export const IconListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
>(({ className, icon, title, description, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neptuno-blue/10 hover:text-neptuno-blue focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neptuno-blue/10 text-neptuno-blue">
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium leading-none mb-1">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-gray-600">
            {description}
          </p>
        </div>
      </a>
    </li>
  );
});
IconListItem.displayName = "IconListItem";

// Featured item with image
export const FeaturedItem = ({ 
  title, 
  description, 
  image, 
  href 
}: { 
  title: string; 
  description: string; 
  image: string; 
  href: string 
}) => {
  return (
    <a 
      href={href}
      className="block bg-gradient-to-tr from-neptuno-blue/5 to-neptuno-blue/10 rounded-md overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h4 className="text-sm font-medium text-neptuno-blue">{title}</h4>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
    </a>
  );
};
