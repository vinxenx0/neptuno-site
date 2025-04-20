
import React, { useState, useEffect } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { useLocation } from 'react-router-dom';
import SlotMachineClassic from '@/components/games/SlotMachineClassic';
import SlotMachineFruit from '@/components/games/SlotMachineFruit';
import SlotMachineDiamond from '@/components/games/SlotMachineDiamond';
import CreditsPanel from '@/components/games/CreditsPanel';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GamesJourney: React.FC = () => {
  const [credits, setCredits] = useState(1000);
  const [selectedGame, setSelectedGame] = useState('classic');
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when the component mounts or location changes
    window.scrollTo(0, 0);
  }, [location]);

  const addCredits = (amount: number) => {
    setCredits(prev => prev + amount);
  };

  return (
    <JourneyLayout
      title="Juegos online con gamificación"
      subtitle="Convierte a tus usuarios en jugadores y ofrece una experiencia única"
      bgColor="bg-gradient-to-br from-amber-500 to-red-600"
    >
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border shadow-lg">
            <div className="p-6">
              <CreditsPanel credits={credits} onAddCredits={addCredits} />

              <Tabs defaultValue="classic" className="mt-8" onValueChange={setSelectedGame}>
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2">
                  <TabsTrigger value="classic" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-red-500">
                    🎰 Máquina Clásica
                  </TabsTrigger>
                  <TabsTrigger value="fruit" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600">
                    🍒 Máquina de Frutas
                  </TabsTrigger>
                  <TabsTrigger value="diamond" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600">
                    💎 Máquina de Diamantes
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="classic" className="mt-6">
                  <SlotMachineClassic credits={credits} setCredits={setCredits} />
                </TabsContent>
                <TabsContent value="fruit" className="mt-6">
                  <SlotMachineFruit credits={credits} setCredits={setCredits} />
                </TabsContent>
                <TabsContent value="diamond" className="mt-6">
                  <SlotMachineDiamond credits={credits} setCredits={setCredits} />
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>
      </div>
    </JourneyLayout>
  );
};

export default GamesJourney;
