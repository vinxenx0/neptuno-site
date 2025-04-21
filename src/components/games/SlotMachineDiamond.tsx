
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DiamondReelProps {
  spinning: boolean;
  value: string;
}

const DiamondReel: React.FC<DiamondReelProps> = ({ spinning, value }) => {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-indigo-900 rounded-md border-2 border-blue-400">
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

const SlotMachineDiamond: React.FC = () => {
  const symbols = ['💎', '💠', '🔷', '🔹', '💍'];
  const [credits, setCredits] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  
  const spin = () => {
    if (credits < 10 * multiplier || spinning) return;
    
    setSpinning(true);
    setCredits(credits - (10 * multiplier)); // Cost to play with multiplier
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
        const winAmount = getWinAmount(result[0]) * multiplier;
        setWin(winAmount);
        setCredits(credits + winAmount);
      }
    }, 2000);
  };
  
  const getWinAmount = (symbol: string) => {
    switch (symbol) {
      case '💎': return 300;
      case '💠': return 150;
      case '🔷': return 100;
      case '🔹': return 50;
      case '💍': return 200;
      default: return 0;
    }
  };
  
  const buyCredits = (amount: number) => {
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };

  const setStake = (newMultiplier: number) => {
    setMultiplier(newMultiplier);
  };

  return (
    <div className="bg-gradient-to-b from-blue-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
      <div className="bg-blue-900 text-white px-4 py-3 font-bold text-center text-xl">
        Diamond Rush
      </div>
      
      <div className="p-6">
        <div className="bg-indigo-800/70 p-4 rounded-lg mb-4">
          <div className="text-center mb-3">
            <span className="text-blue-300 text-sm font-bold">Créditos: {credits}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-3">
            {reels.map((symbol, index) => (
              <DiamondReel 
                key={index} 
                spinning={spinning} 
                value={symbol} 
              />
            ))}
          </div>
          
          {win && (
            <div className="text-center animate-bounce bg-blue-500/30 p-2 rounded-lg">
              <span className="text-blue-200 font-bold">¡GANASTE {win} CRÉDITOS!</span>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <div className="text-blue-300 text-sm mb-2">Multiplicador de apuesta:</div>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 5, 10, 20].map(mult => (
              <button
                key={mult}
                onClick={() => setStake(mult)}
                className={`py-1 rounded-md text-center transition-colors ${
                  mult === multiplier 
                    ? 'bg-blue-500 text-white font-medium' 
                    : 'bg-blue-900/50 text-blue-300 hover:bg-blue-800'
                }`}
              >
                x{mult}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            onClick={spin}
            disabled={spinning || credits < 10 * multiplier}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {spinning ? "Girando..." : `Jugar (${10 * multiplier} créditos)`}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setBuyModalOpen(true)}
            className="border-blue-400 text-blue-300 hover:bg-blue-900/50"
          >
            Comprar créditos
          </Button>
        </div>
        
        <div className="mt-4 bg-indigo-900/50 p-3 rounded text-xs text-blue-300">
          <h3 className="font-bold mb-1">Premios base (x{multiplier}):</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex justify-between">
              <span>3 × 💎</span>
              <span>{300 * multiplier} créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 💍</span>
              <span>{200 * multiplier} créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 💠</span>
              <span>{150 * multiplier} créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🔷</span>
              <span>{100 * multiplier} créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🔹</span>
              <span>{50 * multiplier} créditos</span>
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
              onClick={() => buyCredits(50)}
              className="flex flex-col h-auto py-6"
            >
              <span className="text-xl font-bold">50</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(200)}
              className="flex flex-col h-auto py-6 border-blue-500"
            >
              <span className="text-xl font-bold text-blue-600">200</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(500)}
              className="flex flex-col h-auto py-6 border-blue-600"
            >
              <span className="text-xl font-bold text-blue-700">500</span>
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

export default SlotMachineDiamond;
