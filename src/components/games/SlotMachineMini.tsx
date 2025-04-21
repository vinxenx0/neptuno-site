
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MiniSlotReelProps {
  symbol: string;
  spinning: boolean;
}

const MiniSlotReel: React.FC<MiniSlotReelProps> = ({ symbol, spinning }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-md border border-gray-300 w-16 h-16 overflow-hidden shadow-inner">
      <div 
        className={`text-3xl ${spinning ? 'animate-slot-reel' : ''}`}
        style={{ transition: spinning ? 'none' : 'all 0.3s ease-out' }}
      >
        {symbol}
      </div>
    </div>
  );
};

const SlotMachineMini: React.FC = () => {
  const symbols = ['7️⃣', '🍀', '💰', '⭐', '🎲'];
  const [credits, setCredits] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reel, setReel] = useState('❓');
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  
  const spin = () => {
    if (credits < 5 || spinning) return;
    
    setSpinning(true);
    setCredits(credits - 5); // Cost to play
    setWin(null);
    
    // Animation timing
    setTimeout(() => {
      const result = symbols[Math.floor(Math.random() * symbols.length)];
      setReel(result);
      setSpinning(false);
      
      // Wins are simpler - each symbol has its own reward
      const winAmount = getWinAmount(result);
      if (winAmount > 0) {
        setWin(winAmount);
        setCredits(credits + winAmount);
      }
    }, 1500);
  };
  
  const getWinAmount = (symbol: string) => {
    switch (symbol) {
      case '7️⃣': return 50; // Highest win
      case '💰': return 25;
      case '🍀': return 15;
      case '⭐': return 10;
      case '🎲': return 7;
      default: return 0;
    }
  };
  
  const buyCredits = (amount: number) => {
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg shadow-xl overflow-hidden">
      <div className="bg-purple-800 text-white px-3 py-2 font-medium text-center">
        Mini Slot
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <span className="text-white text-sm">Créditos: {credits}</span>
          <span className="text-white text-sm">Coste: 5</span>
        </div>
        
        <div className="flex justify-center mb-4">
          <MiniSlotReel symbol={reel} spinning={spinning} />
        </div>
        
        {win && (
          <div className="text-center mb-3 animate-bounce">
            <span className="text-yellow-300 font-bold">+{win}</span>
          </div>
        )}
        
        <div className="flex space-x-2">
          <Button 
            variant="default" 
            onClick={spin}
            disabled={spinning || credits < 5}
            className="bg-purple-800 hover:bg-purple-900 text-white flex-1"
          >
            {spinning ? "..." : "Jugar"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setBuyModalOpen(true)}
            className="border-purple-300 text-white"
          >
            +
          </Button>
        </div>
        
        <div className="mt-3 bg-purple-800/30 p-2 rounded text-xs text-purple-100">
          <div className="grid grid-cols-5 gap-1">
            <div className="flex flex-col items-center">
              <span>7️⃣</span>
              <span>50</span>
            </div>
            <div className="flex flex-col items-center">
              <span>💰</span>
              <span>25</span>
            </div>
            <div className="flex flex-col items-center">
              <span>🍀</span>
              <span>15</span>
            </div>
            <div className="flex flex-col items-center">
              <span>⭐</span>
              <span>10</span>
            </div>
            <div className="flex flex-col items-center">
              <span>🎲</span>
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buy Credits Modal */}
      <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
        <DialogContent className="sm:max-w-[300px]">
          <DialogHeader>
            <DialogTitle>Comprar créditos</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button onClick={() => buyCredits(20)} className="bg-purple-600 hover:bg-purple-700">
              20 créditos
            </Button>
            <Button onClick={() => buyCredits(50)} className="bg-purple-600 hover:bg-purple-700">
              50 créditos
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

export default SlotMachineMini;
