
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

type SlotReelProps = {
  spinning: boolean;
  value: string;
  duration: number;
  index: number;
};

const symbols = ['🚀', '💻', '💎', '🔥', '🎮', '🏆'];

const SlotReel: React.FC<SlotReelProps> = ({ spinning, value, duration, index }) => {
  const [position, setPosition] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const spinDelay = index * 100; // Stagger the spin start
  const spinDuration = duration;

  useEffect(() => {
    if (spinning) {
      setAnimationKey(prev => prev + 1);
      
      // Start the slot spinning animation after a delay based on reel index
      const timeout = setTimeout(() => {
        const targetIndex = symbols.findIndex(s => s === value);
        setPosition(-targetIndex * 100);
      }, spinDuration + spinDelay);
      
      return () => clearTimeout(timeout);
    }
  }, [spinning, value, spinDuration, spinDelay]);

  return (
    <div className="h-20 w-20 bg-gray-800 rounded-lg overflow-hidden relative">
      <div 
        key={animationKey}
        className={`absolute w-full transition-transform ${
          spinning 
            ? `duration-[${spinDuration}ms] ease-in-out` 
            : 'duration-500 ease-out'
        }`}
        style={{
          transform: spinning 
            ? `translateY(500%)` 
            : `translateY(${position}%)`,
          transition: spinning 
            ? `transform ${spinDuration}ms cubic-bezier(0.5, 0, 0.75, 0)` 
            : `transform 500ms cubic-bezier(0.3, 0.1, 0.3, 1.5)`
        }}
      >
        {symbols.map((symbol, i) => (
          <div 
            key={i} 
            className="h-20 w-20 flex items-center justify-center text-4xl"
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

const SlotMachine: React.FC = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>(['🚀', '💻', '💎']);
  const [credits, setCredits] = useState<number>(100);
  const [win, setWin] = useState<number>(0);
  const { toast } = useToast();
  const spinDuration = 3000; // Slower spin duration (3 seconds)

  const spin = () => {
    if (spinning || credits < 10) return;
    
    setCredits(credits - 10);
    setSpinning(true);
    setWin(0);
    
    // Generate random results after a delay
    setTimeout(() => {
      const newResults = Array.from({ length: 3 }, () => 
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      
      setResults(newResults);
      checkWin(newResults);
      setSpinning(false);
    }, spinDuration + 400); // Add a bit more time for the animation to complete
  };

  const checkWin = (results: string[]) => {
    // Check for win conditions
    if (results[0] === results[1] && results[1] === results[2]) {
      // Jackpot! All three match
      const winAmount = 100;
      setCredits(prev => prev + winAmount);
      setWin(winAmount);
      
      toast({
        title: "¡Jackpot!",
        description: `Has ganado ${winAmount} créditos!`,
      });
    } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
      // Two matching symbols
      const winAmount = 20;
      setCredits(prev => prev + winAmount);
      setWin(winAmount);
      
      toast({
        title: "¡Ganaste!",
        description: `Has ganado ${winAmount} créditos!`,
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl shadow-xl p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 text-lg px-4 py-1">
            Demo Slot
          </Badge>
        </div>
        
        {/* Slot display */}
        <div className="bg-gray-900 border-4 border-gray-700 rounded-lg p-4 shadow-inner mb-6">
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <SlotReel 
                key={i} 
                spinning={spinning} 
                value={results[i]} 
                duration={spinDuration}
                index={i}
              />
            ))}
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <div className="bg-gray-800 text-white px-4 py-2 rounded">
              Créditos: <span className="text-yellow-400 font-bold">{credits}</span>
            </div>
            {win > 0 && (
              <div className="bg-green-800 text-white px-4 py-2 rounded animate-pulse">
                Ganancia: <span className="text-green-400 font-bold">+{win}</span>
              </div>
            )}
          </div>
          
          <Button
            onClick={spin}
            disabled={spinning || credits < 10}
            className={`bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg ${
              spinning ? 'opacity-50' : 'animate-pulse'
            }`}
          >
            {spinning ? "Girando..." : "¡Girar! (10 créditos)"}
          </Button>
          
          {credits < 10 && (
            <Button
              onClick={() => setCredits(100)}
              className="mt-4 bg-green-600 hover:bg-green-700"
            >
              Recargar créditos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
