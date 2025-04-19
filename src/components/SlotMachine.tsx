
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SlotMachine: React.FC = () => {
  const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💰', '7️⃣'];
  const [credits, setCredits] = useState(100);
  const [isSpinning, setIsSpinning] = useState(false);
  const [reels, setReels] = useState(['❓', '❓', '❓']);
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
    
    let spinsRemaining = 30;
    let spinSpeed = 50;
    let currentSpin = 0;
    
    const spinInterval = setInterval(() => {
      setReels(reels.map((_, index) => {
        // Create a "reel" effect by showing symbols before and after
        const reelPosition = Math.floor(Math.random() * symbols.length);
        return symbols[reelPosition];
      }));
      
      currentSpin++;
      
      // Gradually slow down the spin
      if (currentSpin > spinsRemaining * 0.7) {
        spinSpeed = 100;
      }
      if (currentSpin > spinsRemaining * 0.9) {
        spinSpeed = 150;
      }
      
      if (currentSpin >= spinsRemaining) {
        clearInterval(spinInterval);
        finalizeSpin();
      }
    }, spinSpeed);
  };
  
  const finalizeSpin = () => {
    const finalResult = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)]
    ];
    
    setReels(finalResult);
    setIsSpinning(false);
    
    if (finalResult[0] === finalResult[1] && finalResult[1] === finalResult[2]) {
      const winAmount = getWinAmount(finalResult[0]);
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
    <div className="glass-card overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 text-sm">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="font-mono flex-1 text-center">prueba Neptuno</span>
      </div>
      
      <div className="bg-[#1e293b] p-6">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-lg mb-6 w-full">
            <div className="text-center mb-3">
              <span className="text-yellow-400 text-sm font-bold">Créditos: {credits}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 bg-white rounded-lg p-4">
              {reels.map((symbol, index) => (
                <div 
                  key={index} 
                  className={`text-4xl aspect-square flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50
                    ${isSpinning ? 'animate-pulse' : ''}`}
                >
                  {symbol}
                </div>
              ))}
            </div>
            
            {win && (
              <div className="mt-3 text-center animate-bounce">
                <span className="text-yellow-300 font-bold">¡GANASTE {win} CRÉDITOS!</span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full">
            <Button 
              variant="default" 
              onClick={spin}
              disabled={isSpinning || credits < 10}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
            >
              {isSpinning ? "Girando..." : "Jugar (10 créditos)"}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setBuyModalOpen(true)}
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-50"
            >
              Comprar créditos
            </Button>

            <Button
              variant="outline"
              onClick={generateCoupon}
              className="border-green-500 text-green-500 hover:bg-green-50"
            >
              Generar cupón
            </Button>
          </div>
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
              <span className="text-xs text-green-600 font-medium mt-1">+5 gratis</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6 border-yellow-600"
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
