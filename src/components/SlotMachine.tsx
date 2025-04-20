
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SlotReel from './slot-machine/SlotReel';
import SlotMachineControls from './slot-machine/SlotMachineControls';
import SlotMachineHeader from './slot-machine/SlotMachineHeader';
import SlotMachineResult from './slot-machine/SlotMachineResult';

interface SlotMachineProps {
  autoSpin?: boolean;
}

const SlotMachine: React.FC<SlotMachineProps> = ({ autoSpin = false }) => {
  const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💰', '7️⃣'];
  const [credits, setCredits] = useState(100);
  const [isSpinning, setIsSpinning] = useState(false);
  const [reels, setReels] = useState([
    { top: '❓', current: '❓', bottom: '❓' },
    { top: '❓', current: '❓', bottom: '❓' },
    { top: '❓', current: '❓', bottom: '❓' }
  ]);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const spinSound = useRef(new Audio('/slot-machine-spin.mp3'));
  const winSound = useRef(new Audio('/slot-machine-win.mp3'));
  const spinTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  useEffect(() => {
    // Auto spin once when the component mounts if autoSpin is true
    if (autoSpin) {
      const timer = setTimeout(() => {
        spin();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [autoSpin]);
  
  const spin = () => {
    if (credits < 10 || isSpinning) return;
    
    setIsSpinning(true);
    setCredits(prev => prev - 10);
    setWin(null);

    try {
      spinSound.current.play().catch(() => {});
    } catch (error) {
      // Silent fallback
    }
    
    // Prepare the result symbols
    const finalResults = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      const prevIndex = (randomIndex - 1 + symbols.length) % symbols.length;
      const nextIndex = (randomIndex + 1) % symbols.length;
      
      finalResults.push({
        top: symbols[prevIndex],
        current: symbols[randomIndex],
        bottom: symbols[nextIndex]
      });
    }
    
    // Stop all reels together after the animation duration
    if (spinTimerRef.current) {
      clearTimeout(spinTimerRef.current);
    }
    
    spinTimerRef.current = setTimeout(() => {
      setReels(finalResults);
      setIsSpinning(false);
      checkWin(finalResults.map(r => r.current));
    }, 2000);
  };
  
  const checkWin = (finalSymbols: string[]) => {
    if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
      const winAmount = getWinAmount(finalSymbols[0]);
      setWin(winAmount);
      setCredits(prev => prev + winAmount);
      
      try {
        winSound.current.play().catch(() => {});
      } catch (error) {
        // Silent fallback
      }
    }
  };
  
  const getWinAmount = (symbol: string) => {
    switch (symbol) {
      case '7️⃣': return 500;
      case '💰': return 200;
      case '🔔': return 100;
      case '🍇': return 50;
      case '🍊': return 30;
      case '🍋': return 20;
      case '🍒': return 15;
      default: return 0;
    }
  };
  
  const buyCredits = (amount: number) => {
    setCredits(prev => prev + amount);
    setBuyModalOpen(false);
  };

  const generateCoupon = () => {
    setCredits(prev => prev + 10);
    setWin(10);
    setTimeout(() => setWin(null), 2000);
  };

  return (
    <div className="glass-card overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <SlotMachineHeader />
      
      <div className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-6">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-lg mb-6 w-full shadow-inner">
            <SlotMachineHeader credits={credits} />
            
            <div className="grid grid-cols-3 gap-2 bg-white rounded-lg p-4">
              {reels.map((reel, index) => (
                <SlotReel 
                  key={index} 
                  reel={reel} 
                  isSpinning={isSpinning} 
                  index={index}
                />
              ))}
            </div>
            
            <SlotMachineResult win={win} />
          </div>
          
          <SlotMachineControls
            onSpin={spin}
            onBuyCredits={() => setBuyModalOpen(true)}
            onGenerateCoupon={generateCoupon}
            isSpinning={isSpinning}
            credits={credits}
          />
        </div>
      </div>
      
      <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comprar créditos</DialogTitle>
            <DialogDescription>
              Selecciona la cantidad de créditos que deseas comprar
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button 
              variant="outline" 
              onClick={() => buyCredits(10)}
              className="flex flex-col h-auto py-6 hover:bg-yellow-50 hover:scale-105 transition-all"
            >
              <span className="text-xl font-bold">10</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(50)}
              className="flex flex-col h-auto py-6 border-yellow-500 hover:bg-yellow-50 hover:scale-105 transition-all"
            >
              <span className="text-xl font-bold text-yellow-600">50</span>
              <span className="text-sm">créditos</span>
              <span className="text-xs text-green-600 font-medium mt-1">+5 gratis</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6 border-yellow-600 hover:bg-yellow-50 hover:scale-105 transition-all"
            >
              <span className="text-xl font-bold text-yellow-700">100</span>
              <span className="text-sm">créditos</span>
              <span className="text-xs text-green-600 font-medium mt-1">+20 gratis</span>
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

export default SlotMachine;
