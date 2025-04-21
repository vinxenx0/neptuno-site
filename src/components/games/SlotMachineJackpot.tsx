
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Array of symbols for the slot machine
const symbols = ['7', '💰', '💎', '🔥', '⭐', '🎰'];
const bonusSymbols = ['🎁', '🏆'];
const allSymbols = [...symbols, ...bonusSymbols];

// Points for winning combinations
const pointValues = {
  '7': 100,
  '💰': 75,
  '💎': 50,
  '🔥': 40,
  '⭐': 30,
  '🎰': 20,
  '🎁': 200,
  '🏆': 250
};

const SlotMachineJackpot: React.FC = () => {
  const [reels, setReels] = useState<string[][]>([
    [symbols[0], symbols[1], symbols[2]],
    [symbols[1], symbols[2], symbols[3]],
    [symbols[2], symbols[3], symbols[4]],
    [symbols[3], symbols[4], symbols[5]],
    [symbols[4], symbols[5], symbols[0]]
  ]);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [credits, setCredits] = useState<number>(100);
  const [bet, setBet] = useState<number>(1);
  const [win, setWin] = useState<number>(0);
  const [jackpotValue, setJackpotValue] = useState<number>(1000);
  const [jackpotProgress, setJackpotProgress] = useState<number>(0);
  const [winningLines, setWinningLines] = useState<number[]>([]);
  const { toast } = useToast();

  // Possible winning lines (horizontal, diagonal, etc)
  const lines = [
    [[0,0], [1,0], [2,0], [3,0], [4,0]], // Top row
    [[0,1], [1,1], [2,1], [3,1], [4,1]], // Middle row
    [[0,2], [1,2], [2,2], [3,2], [4,2]], // Bottom row
    [[0,0], [1,1], [2,2], [3,1], [4,0]], // V shape
    [[0,2], [1,1], [2,0], [3,1], [4,2]]  // Inverted V shape
  ];

  // Slow down the reel spin animation
  const spinDuration = 2000; // 2 seconds for a slower spin

  useEffect(() => {
    const jackpotInterval = setInterval(() => {
      setJackpotValue(prev => Math.floor(prev * 1.001));
    }, 5000);
    
    return () => clearInterval(jackpotInterval);
  }, []);

  const spin = () => {
    if (spinning || credits < bet) return;
    
    // Deduct bet amount from credits
    setCredits(prev => prev - bet);
    setWin(0);
    setWinningLines([]);
    setSpinning(true);
    
    // Contribute to jackpot
    const contribution = bet * 0.1;
    setJackpotValue(prev => Math.floor(prev + contribution));
    setJackpotProgress(prev => Math.min(prev + (bet * 2), 100));

    // Generate new random symbols for each reel
    const newReels: string[][] = [];
    
    for (let i = 0; i < 5; i++) {
      const reelSymbols: string[] = [];
      for (let j = 0; j < 3; j++) {
        // Add a small chance for bonus symbols
        const useBonus = Math.random() < 0.05;
        if (useBonus) {
          reelSymbols.push(bonusSymbols[Math.floor(Math.random() * bonusSymbols.length)]);
        } else {
          reelSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
      }
      newReels.push(reelSymbols);
    }
    
    // Simulate spinning effect
    setTimeout(() => {
      setReels(newReels);
      checkWin(newReels);
      setSpinning(false);
    }, spinDuration);
  };

  const checkWin = (finalReels: string[][]) => {
    let totalWin = 0;
    const winners: number[] = [];
    
    // Check each winning line
    lines.forEach((line, lineIndex) => {
      const lineSymbols = line.map(([reel, pos]) => finalReels[reel][pos]);
      
      // Count occurrences of each symbol in the line
      const counts: Record<string, number> = {};
      lineSymbols.forEach(sym => {
        counts[sym] = (counts[sym] || 0) + 1;
      });
      
      // Find the most common symbol and its count
      let maxCount = 0;
      let maxSymbol = '';
      
      Object.entries(counts).forEach(([symbol, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxSymbol = symbol;
        }
      });
      
      // Award win based on consecutive matches starting from left
      let consecutiveCount = 0;
      for (let i = 0; i < lineSymbols.length; i++) {
        if (lineSymbols[i] === maxSymbol) {
          consecutiveCount++;
        } else {
          break;
        }
      }
      
      // Only count wins of 3 or more consecutive symbols
      if (consecutiveCount >= 3) {
        const lineWin = bet * (pointValues[maxSymbol] || 10) * (consecutiveCount - 2);
        totalWin += lineWin;
        winners.push(lineIndex);
        
        // Check for jackpot (all 5 symbols match and are 7s)
        if (consecutiveCount === 5 && maxSymbol === '7') {
          toast({
            title: "¡JACKPOT!",
            description: `¡Has ganado el jackpot de ${jackpotValue} créditos!`,
          });
          totalWin += jackpotValue;
          setJackpotValue(1000);
          setJackpotProgress(0);
        }
      }
    });
    
    if (totalWin > 0) {
      setCredits(prev => prev + totalWin);
      setWin(totalWin);
      setWinningLines(winners);
      
      toast({
        title: "¡Ganaste!",
        description: `Has ganado ${totalWin} créditos`,
      });
    }
    
    // Check if jackpot progress is full
    if (jackpotProgress >= 100) {
      const bonusCredits = Math.floor(Math.random() * 50) + 10;
      toast({
        title: "¡Bonus de Jackpot!",
        description: `Has recibido ${bonusCredits} créditos de bonus`,
      });
      setCredits(prev => prev + bonusCredits);
      setJackpotProgress(0);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900 rounded-lg shadow-xl p-5 w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-yellow-400 font-bold text-xl">MEGA JACKPOT</div>
        <div className="bg-black bg-opacity-50 text-yellow-300 px-3 py-1 rounded-full animate-pulse">
          Jackpot: {jackpotValue} créditos
        </div>
      </div>
      
      {/* Jackpot meter */}
      <div className="mb-4">
        <p className="text-white text-xs mb-1">Progreso de Jackpot:</p>
        <Progress 
          value={jackpotProgress} 
          className="h-2 bg-gray-700"
        />
      </div>
      
      {/* Slot display */}
      <div className="bg-gray-900 border-4 border-yellow-700 rounded-lg p-3 mb-4 shadow-inner">
        <div className="flex justify-between">
          {reels.map((reel, reelIndex) => (
            <div 
              key={reelIndex} 
              className={`flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 p-2 rounded mx-0.5 relative overflow-hidden ${spinning ? 'spinning' : ''}`}
            >
              {reel.map((symbol, symbolIndex) => (
                <div 
                  key={symbolIndex}
                  className={`text-4xl h-16 w-16 flex items-center justify-center my-0.5 rounded
                    ${winningLines.some(lineIdx => lines[lineIdx].some(([r, p]) => r === reelIndex && p === symbolIndex)) 
                      ? 'bg-yellow-500 animate-pulse' : 'bg-gray-700'}`}
                >
                  <span className={`${spinning ? 'animate-pulse' : ''}`}>{symbol}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="bg-gray-800 rounded-lg p-2 text-white">
          <p>Créditos: <span className="text-yellow-400">{credits}</span></p>
          <p>Apuesta: <span className="text-yellow-400">{bet}</span></p>
          {win > 0 && <p>Ganancia: <span className="text-green-400">{win}</span></p>}
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBet(prev => Math.max(1, prev - 1))}
              disabled={spinning}
              className="bg-gray-700 text-white hover:bg-gray-600"
            >
              -
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBet(prev => Math.min(10, prev + 1))}
              disabled={spinning}
              className="bg-gray-700 text-white hover:bg-gray-600"
            >
              +
            </Button>
          </div>
          <Button
            onClick={spin}
            disabled={spinning || credits < bet}
            className={`bg-red-600 hover:bg-red-700 text-white w-24 ${spinning ? 'opacity-50' : ''}`}
          >
            {spinning ? "Girando..." : "¡Girar!"}
          </Button>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCredits(prev => prev + 100)}
            className="bg-green-700 text-white hover:bg-green-600"
          >
            +100 créditos
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: translateY(-300px); }
          100% { transform: translateY(300px); }
        }
        .spinning span {
          animation: spin ${spinDuration/1000}s linear;
        }
      `}</style>
    </div>
  );
};

export default SlotMachineJackpot;
