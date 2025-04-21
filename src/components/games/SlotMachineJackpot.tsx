
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { toast } from 'sonner';

interface JackpotReelProps {
  symbol: string;
  spinning: boolean;
}

const JackpotReel: React.FC<JackpotReelProps> = ({ symbol, spinning }) => {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-gradient-to-b from-gray-700 to-black rounded-md border-2 border-yellow-500">
      <div 
        className={`flex items-center justify-center h-full text-4xl
          ${spinning ? 'animate-slot-reel' : 'animate-none'}`}
        style={{ transition: spinning ? 'none' : 'all 0.3s ease-out' }}
      >
        {symbol}
      </div>
    </div>
  );
};

const SlotMachineJackpot: React.FC = () => {
  const symbols = ['💰', '🏆', '👑', '💎', '🔔'];
  const [credits, setCredits] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(['❓', '❓', '❓', '❓', '❓']);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [jackpot, setJackpot] = useState(1000);
  const [jackpotWon, setJackpotWon] = useState(false);
  const [bonusLevel, setBonusLevel] = useState(0);
  const [bonusProgress, setBonusProgress] = useState(0);
  
  // Incrementar jackpot cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot(prev => Math.round(prev + 1));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const spin = () => {
    if (credits < 20 || spinning) return;
    
    setSpinning(true);
    setCredits(credits - 20); // Cost to play
    setWin(null);
    setJackpotWon(false);
    
    // Contribuir al jackpot
    setJackpot(prev => prev + 5);
    
    // Animation timing
    setTimeout(() => {
      const result = Array(5).fill('').map(() => 
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      
      setReels(result);
      setSpinning(false);
      
      // Increment bonus progress
      setBonusProgress(prev => {
        const newProgress = Math.min(prev + 10, 100);
        if (newProgress === 100 && bonusLevel < 3) {
          toast.success(`¡Has alcanzado el nivel de bonus ${bonusLevel + 1}!`);
          setBonusLevel(prev => prev + 1);
          return 0;
        }
        return newProgress;
      });
      
      // Check for wins
      const uniqueSymbols = new Set(result);
      if (uniqueSymbols.size === 1) {
        // 5 iguales - jackpot!
        setJackpotWon(true);
        setWin(jackpot);
        setCredits(credits + jackpot);
        setJackpot(1000); // Reset jackpot
        toast.success('¡JACKPOT! 🎉🎊', {
          description: `¡Has ganado ${jackpot} créditos!`,
          duration: 8000,
        });
      } else if (countMaxOccurrences(result) >= 4) {
        // 4 iguales
        const winAmount = 200 * (bonusLevel + 1);
        setWin(winAmount);
        setCredits(credits + winAmount);
        toast('¡Gran victoria! 🎉', {
          description: `¡Has ganado ${winAmount} créditos!`
        });
      } else if (countMaxOccurrences(result) === 3) {
        // 3 iguales
        const winAmount = 50 * (bonusLevel + 1);
        setWin(winAmount);
        setCredits(credits + winAmount);
      }
    }, 3000); // Longer animation for jackpot machine
  };
  
  // Helper to count max occurrences of any symbol
  const countMaxOccurrences = (arr: string[]) => {
    const counts: Record<string, number> = {};
    let maxCount = 0;
    
    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1;
      maxCount = Math.max(maxCount, counts[item]);
    }
    
    return maxCount;
  };
  
  const buyCredits = (amount: number) => {
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-3 font-bold text-center text-xl">
        MEGA JACKPOT
      </div>
      
      <div className="p-6">
        {/* Jackpot display */}
        <div className="bg-black flex justify-center items-center mb-4 border-2 border-yellow-500 rounded-md p-2">
          <div className="text-yellow-500 text-2xl md:text-4xl font-bold font-mono animate-pulse">
            {jackpot.toLocaleString()} 
          </div>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg mb-4 border border-yellow-600">
          <div className="flex justify-between mb-3">
            <span className="text-yellow-400 text-sm font-bold">Créditos: {credits}</span>
            <span className="text-amber-400 text-sm font-bold">Bonus Lvl: {bonusLevel}</span>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mb-3">
            {reels.map((symbol, index) => (
              <JackpotReel 
                key={index} 
                spinning={spinning} 
                symbol={symbol} 
              />
            ))}
          </div>
          
          {win && (
            <div className={`text-center p-2 rounded-md ${jackpotWon ? 'bg-yellow-500 animate-ping' : 'bg-yellow-600/30 animate-pulse'}`}>
              <span className={`${jackpotWon ? 'text-black text-xl' : 'text-yellow-300'} font-bold`}>
                ¡GANASTE {win} CRÉDITOS!
              </span>
            </div>
          )}
          
          {/* Bonus progress */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progreso de bonus</span>
              <span>{bonusProgress}%</span>
            </div>
            <Progress value={bonusProgress} className="h-2" indicatorClassName="bg-amber-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            onClick={spin}
            disabled={spinning || credits < 20}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold"
          >
            {spinning ? "Girando..." : "Jugar (20 créditos)"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setBuyModalOpen(true)}
            className="border-yellow-500 text-yellow-500"
          >
            Comprar créditos
          </Button>
        </div>
        
        <div className="mt-4 bg-gray-800/50 p-3 rounded text-xs text-gray-300 grid grid-cols-2">
          <div>
            <h3 className="font-bold mb-1 text-yellow-500">Premios:</h3>
            <ul className="space-y-0.5">
              <li className="flex justify-between">
                <span>5 iguales</span>
                <span className="text-yellow-400">¡JACKPOT!</span>
              </li>
              <li className="flex justify-between">
                <span>4 iguales</span>
                <span>200 x Nivel</span>
              </li>
              <li className="flex justify-between">
                <span>3 iguales</span>
                <span>50 x Nivel</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-amber-500">Niveles de Bonus:</h3>
            <ul className="space-y-0.5">
              <li className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${bonusLevel >= 1 ? 'bg-amber-500' : 'bg-gray-600'} mr-1`}></div>
                <span>Nivel 1: x2 ganancias</span>
              </li>
              <li className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${bonusLevel >= 2 ? 'bg-amber-500' : 'bg-gray-600'} mr-1`}></div>
                <span>Nivel 2: x3 ganancias</span>
              </li>
              <li className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${bonusLevel >= 3 ? 'bg-amber-500' : 'bg-gray-600'} mr-1`}></div>
                <span>Nivel 3: x4 ganancias</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Buy Credits Modal */}
      <Dialog open={buyModalOpen} onOpenChange={setBuyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comprar créditos</DialogTitle>
            <DialogDescription>
              ¡Compra más créditos para seguir jugando!
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6"
            >
              <span className="text-xl font-bold">100</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(250)}
              className="flex flex-col h-auto py-6 border-yellow-500"
            >
              <span className="text-xl font-bold text-yellow-600">250</span>
              <span className="text-sm">créditos</span>
              <span className="text-xs text-green-600 font-medium mt-1">+10% bonus</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(500)}
              className="flex flex-col h-auto py-6 border-amber-500"
            >
              <span className="text-xl font-bold text-amber-600">500</span>
              <span className="text-sm">créditos</span>
              <span className="text-xs text-green-600 font-medium mt-1">+20% bonus</span>
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

export default SlotMachineJackpot;
