
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SlotMachineProps {
  autoSpin?: boolean;
}

const SlotMachine: React.FC<SlotMachineProps> = ({ autoSpin = false }) => {
  const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💰', '7️⃣'];
  const [credits, setCredits] = useState(100);
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState(['❓', '❓', '❓']);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const spinSound = useRef(new Audio('/slot-machine-spin.mp3'));
  const winSound = useRef(new Audio('/slot-machine-win.mp3'));
  
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
    setCredits(credits - 10);
    setWin(null);

    try {
      spinSound.current.play().catch(() => {});
    } catch (error) {
      // Silent fallback
    }
    
    // Simple slot machine effect without complicated animations
    const newResults = [];
    const delays = [400, 600, 800];  // Staggered delays for each reel
    
    // Start a random spin animation on the symbols
    const spinInterval = setInterval(() => {
      const tempResults = [];
      for (let i = 0; i < 3; i++) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        tempResults.push(randomSymbol);
      }
      setResults(tempResults);
    }, 100);
    
    // Determine the final results and stop the reels one by one
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        newResults[i] = randomSymbol;
        
        // Update the display with locked reels
        const currentDisplay = [...results];
        currentDisplay[i] = newResults[i];
        setResults([...currentDisplay]);
        
        // When the last reel stops
        if (i === 2) {
          clearInterval(spinInterval);
          setIsSpinning(false);
          checkWin(newResults);
        }
      }, delays[i]);
    }
  };
  
  const checkWin = (finalSymbols: string[]) => {
    if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
      const winAmount = getWinAmount(finalSymbols[0]);
      setWin(winAmount);
      setCredits(credits + winAmount);
      
      try {
        winSound.current.play().catch(() => {});
      } catch (error) {
        // Silent fallback
      }
    } else if (
      finalSymbols[0] === finalSymbols[1] || 
      finalSymbols[1] === finalSymbols[2] || 
      finalSymbols[0] === finalSymbols[2]
    ) {
      // Two matching symbols
      const winAmount = 20;
      setWin(winAmount);
      setCredits(credits + winAmount);
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
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };
  
  return (
    <div className="glass-card overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="font-mono flex-1 text-center">Prueba Neptuno</span>
      </div>
      
      <div className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-3">
            <span className="text-yellow-400 text-sm font-bold">Créditos: {credits}</span>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg mb-6 w-full flex justify-center">
            <div className="grid grid-cols-3 gap-3 bg-white rounded-lg p-3">
              {results.map((symbol, index) => (
                <div 
                  key={index} 
                  className={`w-16 h-16 flex items-center justify-center text-4xl bg-gray-100 rounded border-2 ${
                    isSpinning ? 'animate-bounce' : ''
                  } ${win && !isSpinning ? 'border-yellow-500' : 'border-gray-300'}`}
                >
                  {symbol}
                </div>
              ))}
            </div>
          </div>
          
          {win !== null && !isSpinning && (
            <div className="mb-4">
              <span className="text-yellow-300 font-bold animate-bounce">
                {win === 0 ? '¡Casi!' : `¡Ganaste ${win} créditos!`}
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-3 gap-4 w-full">
            <Button 
              variant="default" 
              onClick={spin}
              disabled={isSpinning || credits < 10}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 hover:scale-105 transition-all"
            >
              {isSpinning ? "Girando..." : "Jugar (10)"}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setBuyModalOpen(true)}
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 hover:scale-105 transition-all"
            >
              Comprar
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setCredits(credits + 10)}
              className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600 hover:scale-105 transition-all"
            >
              Cupón
            </Button>
          </div>
        </div>
      </div>
      
      <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comprar créditos</DialogTitle>
            <DialogDescription>
              Selecciona la cantidad de créditos
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
              <span className="text-xs text-green-600 mt-1">+5 gratis</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6 border-yellow-600"
            >
              <span className="text-xl font-bold text-yellow-700">100</span>
              <span className="text-sm">créditos</span>
              <span className="text-xs text-green-600 mt-1">+20 gratis</span>
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
