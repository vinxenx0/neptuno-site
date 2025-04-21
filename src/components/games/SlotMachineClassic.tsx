
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SlotReelProps {
  spinning: boolean;
  value: string;
}

const SlotReel: React.FC<SlotReelProps> = ({ spinning, value }) => {
  return (
    <div className="relative h-20 w-full overflow-hidden bg-white rounded-md border-2 border-gray-300">
      <div 
        className={`flex items-center justify-center h-full text-4xl
          ${spinning ? 'animate-slot-reel' : 'animate-none'}`}
        style={{ 
          transition: spinning ? 'none' : 'all 0.3s ease-out',
        }}
      >
        {value}
      </div>
    </div>
  );
};

const SlotMachineClassic: React.FC = () => {
  const symbols = ['7️⃣', '🔔', '💎', '💰', '🍒'];
  const [credits, setCredits] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  
  const spin = () => {
    if (credits < 10 || spinning) return;
    
    setSpinning(true);
    setCredits(credits - 10); // Cost to play
    setWin(null);
    
    // Animation timing
    setTimeout(() => {
      const result = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ];
      
      setReels(result);
      setSpinning(false);
      
      // Check for wins
      if (result[0] === result[1] && result[1] === result[2]) {
        const winAmount = getWinAmount(result[0]);
        setWin(winAmount);
        setCredits(credits + winAmount);
      }
    }, 2000);
  };
  
  const getWinAmount = (symbol: string) => {
    switch (symbol) {
      case '7️⃣': return 200;
      case '💎': return 100;
      case '💰': return 50;
      case '🔔': return 30;
      case '🍒': return 20;
      default: return 0;
    }
  };
  
  const buyCredits = (amount: number) => {
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden">
      <div className="bg-red-600 text-white px-4 py-3 font-bold text-center text-xl">
        Slot Machine Clásica
      </div>
      
      <div className="p-6">
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <div className="text-center mb-3">
            <span className="text-yellow-400 text-sm font-bold">Créditos: {credits}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-3">
            {reels.map((symbol, index) => (
              <SlotReel 
                key={index} 
                spinning={spinning} 
                value={symbol} 
              />
            ))}
          </div>
          
          {win && (
            <div className="text-center animate-bounce">
              <span className="text-yellow-300 font-bold">¡GANASTE {win} CRÉDITOS!</span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            onClick={spin}
            disabled={spinning || credits < 10}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {spinning ? "Girando..." : "Jugar (10 créditos)"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setBuyModalOpen(true)}
            className="border-yellow-500 text-yellow-500"
          >
            Comprar créditos
          </Button>
        </div>
        
        <div className="mt-4 bg-gray-700/30 p-3 rounded text-xs text-gray-300">
          <h3 className="font-bold mb-1">Premios:</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex justify-between">
              <span>3 × 7️⃣</span>
              <span>200 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 💎</span>
              <span>100 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 💰</span>
              <span>50 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🔔</span>
              <span>30 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍒</span>
              <span>20 créditos</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buy Credits Modal */}
      <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comprar créditos</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button 
              variant="outline" 
              onClick={() => buyCredits(10)}
              className="flex flex-col h-auto py-6"
            >
              <span className="text-xl font-bold">10</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(50)}
              className="flex flex-col h-auto py-6 border-yellow-500"
            >
              <span className="text-xl font-bold text-yellow-600">50</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6 border-yellow-600"
            >
              <span className="text-xl font-bold text-yellow-700">100</span>
              <span className="text-sm">créditos</span>
            </Button>
          </div>
          
          <DialogFooter>
            <Button variant="ghost" onClick={() => setBuyModalOpen(false)}>
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SlotMachineClassic;
