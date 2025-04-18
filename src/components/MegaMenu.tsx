
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Code,
  Layers,
  Database,
  FileText,
  BarChart,
  Shield,
  Users,
  Settings,
  Briefcase,
  Cloud,
  Server,
  GitBranch,
  BookOpen,
  Rocket,
  PieChart,
  BarChart2,
  Award,
  CreditCard,
  AlignLeft,
  Lightbulb,
  Star,
  TrendingUp,
} from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const IconListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
>(({ className, icon, title, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
    </li>
  );
});
IconListItem.displayName = "IconListItem";

const FeaturedItem = ({ title, description, image, href }: { title: string; description: string; image: string; href: string }) => {
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

export function MegaMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Producto Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue hover:bg-gray-50">Producto</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
              <div className="col-span-3">
                <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
                  Características Principales
                </h4>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#features" 
                    icon={<Layers size={20} />} 
                    title="Componentes All-in-One" 
                    description="Todos los componentes que necesitas para construir tu aplicación, listos para usar." 
                  />
                  <IconListItem 
                    href="#features" 
                    icon={<Database size={20} />} 
                    title="Base de datos preparada" 
                    description="Arquitectura de datos ya configurada y optimizada desde el primer día." 
                  />
                  <IconListItem 
                    href="#production-ready" 
                    icon={<Shield size={20} />} 
                    title="Seguridad y cumplimiento" 
                    description="Implementación segura con todas las certificaciones necesarias." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#features" 
                    icon={<Server size={20} />} 
                    title="Infraestructura escalable" 
                    description="Configurada para crecer con tu negocio sin problemas." 
                  />
                  <IconListItem 
                    href="#dashboard-info" 
                    icon={<BarChart size={20} />} 
                    title="Dashboard analítico" 
                    description="Monitorea todos los aspectos de tu aplicación en tiempo real." 
                  />
                  <IconListItem 
                    href="#production-ready" 
                    icon={<Rocket size={20} />} 
                    title="Listo para producción" 
                    description="De MVP a escala empresarial en días, no meses." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <FeaturedItem 
                  title="Descubre nuestro sistema de análisis avanzado"
                  description="Obtén insights profundos sobre el rendimiento de tu aplicación"
                  image="/placeholder.svg"
                  href="#dashboard-info"
                />
              </div>
              <div className="col-span-3 mt-3 border-t pt-3">
                <a 
                  href="#features"
                  className="flex items-center text-neptuno-blue text-sm hover:underline"
                >
                  Ver todas las características
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Usos Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue hover:bg-gray-50">Usos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
              <div className="col-span-3">
                <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
                  Casos de Uso
                </h4>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#use-cases" 
                    icon={<BarChart size={20} />} 
                    title="Campañas con Gamificación" 
                    description="Aumenta la participación con mecánicas de juego innovadoras." 
                  />
                  <IconListItem 
                    href="#use-cases" 
                    icon={<CreditCard size={20} />} 
                    title="Landing Pages Monetizadas" 
                    description="Crea páginas con autenticación, pagos y análisis incluidos." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#use-cases" 
                    icon={<Briefcase size={20} />} 
                    title="SaaS Escalable" 
                    description="Construye aplicaciones SaaS completas con gestión avanzada." 
                  />
                  <IconListItem 
                    href="#gamification-demo" 
                    icon={<Award size={20} />} 
                    title="Gamificación Empresarial" 
                    description="Implementa estrategias de gamificación para aumentar la retención." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <FeaturedItem 
                  title="Caso de éxito: +200% de engagement"
                  description="Descubre cómo nuestros clientes aumentaron la participación"
                  image="/placeholder.svg"
                  href="#use-cases"
                />
              </div>
              <div className="col-span-3 mt-3 border-t pt-3">
                <a 
                  href="#use-cases"
                  className="flex items-center text-neptuno-blue text-sm hover:underline"
                >
                  Explorar todos los casos de uso
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SDK Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue hover:bg-gray-50">SDK</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
              <div className="col-span-3">
                <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
                  Herramientas para Desarrolladores
                </h4>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#sdk" 
                    icon={<Code size={20} />} 
                    title="SDK Multiplataforma" 
                    description="Integraciones para JavaScript, Python, PHP, Java y más." 
                  />
                  <IconListItem 
                    href="#api-explorer" 
                    icon={<FileText size={20} />} 
                    title="Documentación Completa" 
                    description="Guías paso a paso y referencia de API detallada." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#api-explorer" 
                    icon={<GitBranch size={20} />} 
                    title="API Explorer" 
                    description="Prueba y experimenta con nuestra API en tiempo real." 
                  />
                  <IconListItem 
                    href="#sdk" 
                    icon={<BookOpen size={20} />} 
                    title="Ejemplos y Plantillas" 
                    description="Código de ejemplo listo para implementar en tu proyecto." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <FeaturedItem 
                  title="Nuevo: SDK en tiempo real"
                  description="Integra funcionalidades de tiempo real con solo unas líneas de código"
                  image="/placeholder.svg"
                  href="#sdk"
                />
              </div>
              <div className="col-span-3 mt-3 border-t pt-3">
                <a 
                  href="#sdk"
                  className="flex items-center text-neptuno-blue text-sm hover:underline"
                >
                  Ir al centro de desarrolladores
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Corporate Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-neptuno-blue hover:bg-gray-50">Corporate</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-3 gap-3 p-4 bg-white shadow-lg rounded-md">
              <div className="col-span-3">
                <h4 className="text-sm font-medium leading-none mb-3 text-muted-foreground">
                  Información Corporativa
                </h4>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#ceo-message" 
                    icon={<Users size={20} />} 
                    title="Nuestro Equipo" 
                    description="Conoce al equipo detrás de Neptuno y nuestra misión." 
                  />
                  <IconListItem 
                    href="#pricing" 
                    icon={<PieChart size={20} />} 
                    title="Inversores" 
                    description="Descubre quiénes apoyan nuestra visión de futuro." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="grid gap-3">
                  <IconListItem 
                    href="#pricing" 
                    icon={<BarChart2 size={20} />} 
                    title="Planes y Precios" 
                    description="Opciones flexibles para startups, scaleups y empresas." 
                  />
                  <IconListItem 
                    href="#ceo-message" 
                    icon={<AlignLeft size={20} />} 
                    title="Mensaje del CEO" 
                    description="La visión que impulsa nuestra innovación." 
                  />
                </ul>
              </div>
              <div className="col-span-1">
                <FeaturedItem 
                  title="Neptuno en números"
                  description="Crecimiento, impacto y resultados de nuestra plataforma"
                  image="/placeholder.svg"
                  href="#pricing"
                />
              </div>
              <div className="col-span-3 mt-3 border-t pt-3">
                <a 
                  href="#pricing"
                  className="flex items-center text-neptuno-blue text-sm hover:underline"
                >
                  Conoce más sobre nosotros
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
