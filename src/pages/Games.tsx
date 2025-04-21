
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SlotMachineClassic from '@/components/games/SlotMachineClassic';
import SlotMachineFruit from '@/components/games/SlotMachineFruit';
import SlotMachineDiamond from '@/components/games/SlotMachineDiamond';
import SlotMachineMini from '@/components/games/SlotMachineMini';
import SlotMachineJackpot from '@/components/games/SlotMachineJackpot';
import { ChevronsRight } from 'lucide-react';

const Games = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neptuno-navy to-[#1a365d] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Juegos Online con Neptuno</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explora ejemplos de juegos gamificados que puedes integrar en tu aplicación
            </p>
          </div>
        </section>
        
        {/* Juegos */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Casino Neptuno</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explora diferentes tipos de máquinas tragamonedas construidas con Neptuno. 
                ¡Cada una con su propio diseño y mecánicas!
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="classic">Clásicas</TabsTrigger>
                <TabsTrigger value="fruit">Frutas</TabsTrigger>
                <TabsTrigger value="diamond">Diamantes</TabsTrigger>
                <TabsTrigger value="jackpot">Jackpot</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="col-span-1">
                    <SlotMachineClassic />
                  </div>
                  <div className="col-span-1">
                    <SlotMachineFruit />
                  </div>
                  <div className="col-span-1">
                    <SlotMachineDiamond />
                  </div>
                  <div className="col-span-1">
                    <SlotMachineMini />
                  </div>
                  <div className="col-span-1 lg:col-span-2">
                    <SlotMachineJackpot />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="classic">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1">
                    <SlotMachineClassic />
                  </div>
                  <div className="col-span-1">
                    <SlotMachineMini />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="fruit">
                <div className="flex justify-center">
                  <div className="w-full max-w-lg">
                    <SlotMachineFruit />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="diamond">
                <div className="flex justify-center">
                  <div className="w-full max-w-lg">
                    <SlotMachineDiamond />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="jackpot">
                <div className="flex justify-center">
                  <div className="w-full max-w-2xl">
                    <SlotMachineJackpot />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Información sobre integración */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Integra juegos en tu aplicación</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Neptuno te permite añadir fácilmente elementos de juego con pocas líneas de código.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-neptuno-blue/20 flex items-center justify-center mb-5">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Componentes modulares</h3>
                <p className="text-gray-600">
                  Todos los juegos están construidos como componentes React, lo que facilita su integración y personalización.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-blue mr-1 shrink-0" />
                    <span className="text-sm">Personalización sencilla</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-blue mr-1 shrink-0" />
                    <span className="text-sm">Integraciones flexibles</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-neptuno-teal/20 flex items-center justify-center mb-5">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analítica incorporada</h3>
                <p className="text-gray-600">
                  Monitoriza el engagement de tus usuarios y optimiza las tasas de conversión con datos en tiempo real.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-teal mr-1 shrink-0" />
                    <span className="text-sm">Métricas de retención</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-teal mr-1 shrink-0" />
                    <span className="text-sm">Patrones de uso</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-lg bg-neptuno-amber/20 flex items-center justify-center mb-5">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monetización sencilla</h3>
                <p className="text-gray-600">
                  Implementa pasarelas de pago y sistemas de créditos virtuales con configuración mínima.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-amber mr-1 shrink-0" />
                    <span className="text-sm">Compras in-app</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronsRight className="h-5 w-5 text-neptuno-amber mr-1 shrink-0" />
                    <span className="text-sm">Sistemas de recompensas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gradient-to-br from-neptuno-blue to-neptuno-teal py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para implementar gamificación?</h2>
            <p className="text-xl mb-8">
              Descarga Neptuno y comienza a crear experiencias de juego atractivas para tus usuarios.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/" className="bg-white text-neptuno-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Volver al inicio
              </a>
              <a href="/journey/registration" className="bg-neptuno-amber text-white px-6 py-3 rounded-lg font-medium hover:bg-neptuno-amber/90 transition-colors">
                Comenzar Gratis
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="py-4 text-center">
        <ThemeSwitcher />
      </div>
      <Footer />
      
      {/* Modal de Bienvenida */}
      <Dialog open={isWelcomeOpen} onOpenChange={setIsWelcomeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>¡Bienvenido al Casino Neptuno!</DialogTitle>
            <DialogDescription>
              Explora diferentes tipos de máquinas tragamonedas y descubre cómo puedes integrar elementos de juego similares en tu aplicación.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-700">
              Cada máquina viene con 100 créditos de prueba. Prueba tu suerte y experimenta la gamificación en acción.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <div className="text-2xl">🎰</div>
                <p className="text-xs font-medium mt-1">Juegos variados</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <div className="text-2xl">🏆</div>
                <p className="text-xs font-medium mt-1">Sistema de premios</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <div className="text-2xl">💎</div>
                <p className="text-xs font-medium mt-1">Monetización</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsWelcomeOpen(false)}>¡Vamos a jugar!</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Games;
