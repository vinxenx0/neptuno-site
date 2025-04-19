
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SlotReel from './slot-machine/SlotReel';
import SlotMachineControls from './slot-machine/SlotMachineControls';
import SlotMachineHeader from './slot-machine/SlotMachineHeader';
import SlotMachineResult from './slot-machine/SlotMachineResult';

const SlotMachine: React.FC = () => {
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
    
    // Start the spinning animation
    const spinDuration = 2000; // 2 seconds total
    const reelDelay = 300; // Delay between reels for natural effect
    
    // Create temporary state for animation
    let finalResults: { top: string, current: string, bottom: string }[] = [];
    
    // Prepare final results in advance for each reel
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
    
    // Stop the reels sequentially
    setTimeout(() => {
      setReels(prev => {
        const newReels = [...prev];
        newReels[0] = finalResults[0];
        return newReels;
      });
      
      setTimeout(() => {
        setReels(prev => {
          const newReels = [...prev];
          newReels[1] = finalResults[1];
          return newReels;
        });
        
        setTimeout(() => {
          setReels(prev => {
            const newReels = [...prev];
            newReels[2] = finalResults[2];
            return newReels;
          });
          
          // Finalize the spin
          setTimeout(() => finalizeSpin(finalResults.map(r => r.current)), 300);
        }, reelDelay);
      }, reelDelay);
    }, spinDuration);
  };
  
  const finalizeSpin = (finalSymbols: string[]) => {
    setIsSpinning(false);
    
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
                  isSpinning={isSpinning && index >= reels.findIndex(r => r.current === '❓')} 
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
