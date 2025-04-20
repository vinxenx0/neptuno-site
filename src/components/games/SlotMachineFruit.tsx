
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import SlotReel from './SlotReel';

interface SlotMachineFruitProps {
  credits: number;
  setCredits: (credits: number) => void;
}

const SlotMachineFruit: React.FC<SlotMachineFruitProps> = ({ credits, setCredits }) => {
  const symbols = ['🍒', '🍇', '🍋', '🍊', '🍉', '🍓'];
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [currentBet, setCurrentBet] = useState(10);
  const [message, setMessage] = useState<string | null>(null);
  
  const reelsRef = useRef<HTMLDivElement>(null);
  const spinSound = useRef(new Audio('/slot-machine-spin.mp3'));
  const winSound = useRef(new Audio('/slot-machine-win.mp3'));

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
    for (let i = 0; i < 5; i++) {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * symbols.length);
          newResults.push(symbols[randomIndex]);
          resolve();
        }, i * 150);
      });
    }
    
    setResults(newResults);
    
    setTimeout(() => {
      checkWin(newResults);
      setIsSpinning(false);
    }, 500);
  };
  
  const checkWin = (results: string[]) => {
    // Count occurrences of each symbol
    const counts: Record<string, number> = {};
    results.forEach(symbol => {
      counts[symbol] = (counts[symbol] || 0) + 1;
    });
    
    // Find maximum count
    let maxCount = 0;
    let maxSymbol = '';
    
    for (const symbol in counts) {
      if (counts[symbol] > maxCount) {
        maxCount = counts[symbol];
        maxSymbol = symbol;
      }
    }
    
    let winAmount = 0;
    
    if (maxCount >= 5) {
      // All 5 symbols match
      if (maxSymbol === '🍒') {
        winAmount = currentBet * 100;
      } else if (maxSymbol === '🍇') {
        winAmount = currentBet * 50;
      } else if (maxSymbol === '🍋') {
        winAmount = currentBet * 30;
      } else {
        winAmount = currentBet * 20;
      }
    } else if (maxCount >= 3) {
      // 3+ symbols match
      winAmount = currentBet * 5;
    } else if (maxCount === 2) {
      // Just 2 symbols match
      winAmount = currentBet;
    }
    
    if (winAmount > 0) {
      // Corrección: Usar el valor directo en lugar de una función de actualización
      setCredits(credits + winAmount);
      setMessage(`¡GANASTE ${winAmount} CRÉDITOS!`);
      
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
    }
  };

  return (
    <div className="bg-gradient-to-b from-emerald-700/70 to-emerald-900/70 p-5 rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-emerald-400">MÁQUINA DE FRUTAS</h2>
      
      <div ref={reelsRef} className="flex justify-center gap-2 bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg mb-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <SlotReel 
            key={index}
            symbols={symbols}
            isSpinning={isSpinning}
            index={index}
            result={results[index] || '❓'}
            height={60}
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
          <Button size="sm" onClick={() => changeBet(-5)} variant="outline" className="h-8 w-8 p-0">-</Button>
          <Button size="sm" onClick={() => changeBet(-1)} variant="outline" className="h-8 w-8 p-0">-</Button>
          <div className="min-w-16 text-center font-bold">{currentBet}</div>
          <Button size="sm" onClick={() => changeBet(1)} variant="outline" className="h-8 w-8 p-0">+</Button>
          <Button size="sm" onClick={() => changeBet(5)} variant="outline" className="h-8 w-8 p-0">+</Button>
        </div>
        
        <Button 
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all hover:scale-105"
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
            <span className="text-lg">🍒🍒🍒🍒🍒</span> = x100
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">🍇🍇🍇🍇🍇</span> = x50
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">🍋🍋🍋🍋🍋</span> = x30
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">3+ iguales</span> = x5
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">2 iguales</span> = x1
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlotMachineFruit;
