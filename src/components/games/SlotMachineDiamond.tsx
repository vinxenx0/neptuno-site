
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import SlotReel from './SlotReel';

interface SlotMachineDiamondProps {
  credits: number;
  setCredits: (credits: number) => void;
}

const SlotMachineDiamond: React.FC<SlotMachineDiamondProps> = ({ credits, setCredits }) => {
  const symbols = ['💎', '💰', '🔔', '✨', '⭐', '♠', '♥'];
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [currentBet, setCurrentBet] = useState(10);
  const [message, setMessage] = useState<string | null>(null);
  
  const reelsRef = useRef<HTMLDivElement>(null);
  const spinSound = useRef(new Audio('/slot-machine-spin.mp3'));
  const winSound = useRef(new Audio('/slot-machine-win.mp3'));
  const jackpotSound = useRef(new Audio('/jackpot.mp3'));

  const changeBet = (amount: number) => {
    const newBet = currentBet + amount;
    if (newBet >= 1 && newBet <= credits) {
      setCurrentBet(newBet);
    }
  };

  const handleSpin = async () => {
    if (isSpinning || credits < currentBet) return;
    
    try {
      spinSound.current.play().catch(() => {});
    } catch (error) {
      // Silent fallback
    }
    
    setIsSpinning(true);
    setCredits(credits - currentBet);
    setMessage(null);
    
    const newResults: string[] = [];
    
    // Spin each reel with a staggered delay
    for (let i = 0; i < 3; i++) {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * symbols.length);
          newResults.push(symbols[randomIndex]);
          resolve();
        }, i * 250);
      });
    }
    
    setResults(newResults);
    
    setTimeout(() => {
      checkWin(newResults);
      setIsSpinning(false);
    }, 500);
  };
  
  const checkWin = (results: string[]) => {
    const unique = [...new Set(results)];
    
    if (unique.length === 1) {
      // Three identical symbols
      let winAmount = 0;
      
      if (results[0] === '💎') {
        winAmount = currentBet * 100;
        setMessage("🎉 ¡JACKPOT! 🎉");
        
        try {
          jackpotSound.current.play().catch(() => {});
        } catch (error) {
          // Silent fallback
        }
      } else if (results[0] === '💰') {
        winAmount = currentBet * 50;
      } else if (results[0] === '🔔') {
        winAmount = currentBet * 20;
      } else if (results[0] === '✨') {
        winAmount = currentBet * 10;
      } else {
        winAmount = currentBet * 5;
      }
      
      // Fix: Use function form for setting state that depends on previous state
      setCredits(prevCredits => prevCredits + winAmount);
      
      if (results[0] !== '💎') {
        setMessage(`¡GANASTE ${winAmount} CRÉDITOS!`);
      }
      
      if (reelsRef.current) {
        reelsRef.current.classList.add('animate-bounce');
        setTimeout(() => {
          if (reelsRef.current) {
            reelsRef.current.classList.remove('animate-bounce');
          }
        }, 1000);
      }
      
      try {
        winSound.current.play().catch(() => {});
      } catch (error) {
        // Silent fallback
      }
    } else if (unique.length === 2) {
      // Two identical symbols
      const winAmount = currentBet * 3;
      // Fix: Use function form for setting state that depends on previous state
      setCredits(prevCredits => prevCredits + winAmount);
      setMessage(`¡GANASTE ${winAmount} CRÉDITOS!`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-violet-700/70 to-purple-900/70 p-5 rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-violet-400">MÁQUINA DE DIAMANTES</h2>
      
      <div ref={reelsRef} className="flex justify-center gap-4 bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg mb-4">
        {[0, 1, 2].map((index) => (
          <SlotReel 
            key={index}
            symbols={symbols}
            isSpinning={isSpinning}
            index={index}
            result={results[index] || '❓'}
            height={100}
            isDeluxe={true}
          />
        ))}
      </div>
      
      {message && (
        <div className="text-center animate-bounce mb-4">
          <span className="text-yellow-300 font-bold">{message}</span>
        </div>
      )}
      
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => changeBet(-25)} variant="outline" className="h-8 w-8 p-0">-</Button>
          <Button size="sm" onClick={() => changeBet(-5)} variant="outline" className="h-8 w-8 p-0">-</Button>
          <div className="min-w-16 text-center font-bold">{currentBet}</div>
          <Button size="sm" onClick={() => changeBet(5)} variant="outline" className="h-8 w-8 p-0">+</Button>
          <Button size="sm" onClick={() => changeBet(25)} variant="outline" className="h-8 w-8 p-0">+</Button>
        </div>
        
        <Button 
          className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-all hover:scale-105"
          size="lg"
          disabled={isSpinning || credits < currentBet}
          onClick={handleSpin}
        >
          {isSpinning ? "Girando..." : "¡GIRAR!"}
        </Button>
      </div>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
        <h3 className="font-medium mb-2">Tabla de Pagos (x apuesta)</h3>
        <ul className="grid grid-cols-2 gap-2">
          <li className="flex items-center gap-2">
            <span className="text-lg">💎💎💎</span> = x100 (Jackpot)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">💰💰💰</span> = x50
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">🔔🔔🔔</span> = x20
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">✨✨✨</span> = x10
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">2 iguales</span> = x3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlotMachineDiamond;
