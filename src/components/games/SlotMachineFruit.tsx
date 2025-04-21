
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from 'sonner';

interface FruitReelProps {
  spinning: boolean;
  value: string;
}

const FruitReel: React.FC<FruitReelProps> = ({ spinning, value }) => {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-white rounded-md border-2 border-green-300 shadow-inner">
      <div 
        className={`flex items-center justify-center h-full text-4xl
          ${spinning ? 'animate-slot-reel' : 'animate-none'}`}
        style={{ transition: spinning ? 'none' : 'all 0.3s ease-out' }}
      >
        {value}
      </div>
    </div>
  );
};

const SlotMachineFruit: React.FC = () => {
  const symbols = ['🍎', '🍋', '🍊', '🍇', '🍉', '🍌', '🍓', '🍍'];
  const [credits, setCredits] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [win, setWin] = useState<number | null>(null);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  
  // Efecto especial cuando hay racha de victorias
  useEffect(() => {
    if (streak >= 3) {
      toast.success(`¡Racha ganadora de ${streak}! ¡Bonificación extra!`, {
        description: "¡Has ganado 50 créditos extra!"
      });
      setCredits(credits + 50);
    }
  }, [streak]);
  
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
        setStreak(prev => prev + 1);
      } else {
        setStreak(0);
      }
    }, 2000);
  };
  
  const getWinAmount = (symbol: string) => {
    switch (symbol) {
      case '🍓': return 100;
      case '🍍': return 80;
      case '🍇': return 60;
      case '🍉': return 50;
      case '🍌': return 40;
      case '🍎': return 30;
      case '🍊': return 20;
      case '🍋': return 15;
      default: return 0;
    }
  };
  
  const buyCredits = (amount: number) => {
    setCredits(credits + amount);
    setBuyModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-lg shadow-xl overflow-hidden">
      <div className="bg-green-800 text-white px-4 py-3 font-bold text-center text-xl flex items-center justify-between">
        <span>Fruity Slots</span>
        {streak > 0 && (
          <span className="bg-yellow-500 text-xs rounded-full px-2 py-1 animate-pulse">
            Racha: {streak}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="bg-green-600 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-3">
            <span className="text-white text-sm font-bold">Créditos: {credits}</span>
            {streak > 0 && (
              <span className="text-yellow-300 text-sm font-bold">
                ¡Racha! {streak}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-3">
            {reels.map((symbol, index) => (
              <FruitReel 
                key={index} 
                spinning={spinning} 
                value={symbol} 
              />
            ))}
          </div>
          
          {win && (
            <div className="text-center bg-yellow-400/30 backdrop-blur-sm rounded-md p-2 animate-pulse">
              <span className="text-yellow-300 font-bold">
                ¡GANASTE {win} CRÉDITOS!
              </span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            onClick={spin}
            disabled={spinning || credits < 10}
            className="bg-green-800 hover:bg-green-900 text-white font-bold"
          >
            {spinning ? "Girando..." : "Jugar (10 créditos)"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setBuyModalOpen(true)}
            className="border-yellow-400 bg-yellow-400/20 text-white hover:bg-yellow-400/30"
          >
            Comprar créditos
          </Button>
        </div>
        
        <div className="mt-4 bg-green-700/50 p-3 rounded text-xs text-white">
          <h3 className="font-bold mb-1">Premios:</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex justify-between">
              <span>3 × 🍓</span>
              <span>100 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍍</span>
              <span>80 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍇</span>
              <span>60 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍉</span>
              <span>50 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍌</span>
              <span>40 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍎</span>
              <span>30 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍊</span>
              <span>20 créditos</span>
            </div>
            <div className="flex justify-between">
              <span>3 × 🍋</span>
              <span>15 créditos</span>
            </div>
          </div>
          
          <div className="mt-2 border-t border-green-600 pt-2">
            <span className="font-bold text-yellow-300">Bonus: </span>
            <span className="text-yellow-100">¡3 victorias seguidas = 50 créditos extra!</span>
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
              className="flex flex-col h-auto py-6 border-green-500"
            >
              <span className="text-xl font-bold text-green-600">50</span>
              <span className="text-sm">créditos</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => buyCredits(100)}
              className="flex flex-col h-auto py-6 border-green-600"
            >
              <span className="text-xl font-bold text-green-700">100</span>
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

export default SlotMachineFruit;
