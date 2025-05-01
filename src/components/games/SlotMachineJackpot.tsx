
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Coins, Flame } from 'lucide-react';

const SlotMachineJackpot: React.FC = () => {
  const symbols = ["🍒", "🍋", "🍇", "🍊", "🔔", "💎", "7️⃣", "⭐"];
  const [reels, setReels] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [spinning, setSpinning] = useState(false);
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(10);
  const [winAmount, setWinAmount] = useState(0);
  const [jackpot, setJackpot] = useState(5000);
  const [lastWin, setLastWin] = useState({ amount: 0, message: "" });
  const [hotStreak, setHotStreak] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  
  useEffect(() => {
    // Initialize with random symbols
    randomizeReels();
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (hotStreak > 0) {
      setProgressValue(Math.min(hotStreak * 10, 100));
      
      timeoutId = setTimeout(() => {
        setHotStreak(prev => Math.max(prev - 1, 0));
      }, 10000);
    } else {
      setProgressValue(0);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hotStreak]);

  const randomizeReels = () => {
    const newReels = reels.map(reel => 
      reel.map(() => Math.floor(Math.random() * symbols.length))
    );
    setReels(newReels);
  };

  const spinReels = () => {
    if (spinning || credits < bet) return;
    
    setSpinning(true);
    setCredits(prev => prev - bet);
    setWinAmount(0);
    setLastWin({ amount: 0, message: "" });
    
    // Add to jackpot
    setJackpot(prev => prev + Math.floor(bet * 0.1));
    
    // Spin animation
    const spinTime = 2000; // 2 seconds of spinning
    const spinInterval = 50; // Update every 50ms
    const totalSpins = spinTime / spinInterval;
    let currentSpin = 0;
    
    const spinAnimation = setInterval(() => {
      currentSpin++;
      randomizeReels();
      
      if (currentSpin >= totalSpins) {
        clearInterval(spinAnimation);
        checkWin();
        setSpinning(false);
      }
    }, spinInterval);
  };

  const checkWin = () => {
    // Generate final reel positions
    const finalReels = reels.map(reel => 
      reel.map(() => Math.floor(Math.random() * symbols.length))
    );
    setReels(finalReels);
    
    let winnings = 0;
    let winMessage = "";
    
    // Check for winning combinations
    // Horizontal lines (3)
    for (let row = 0; row < 3; row++) {
      const line = finalReels.map(reel => reel[row]);
      const result = calculateLineWin(line);
      winnings += result.win;
      if (result.win > 0) {
        winMessage += `Line ${row + 1}: ${result.win} credits! `;
      }
    }
    
    // Check for jackpot (all 7's on center line)
    const centerLine = finalReels.map(reel => reel[1]);
    if (centerLine.every(symbol => symbol === 6)) { // 6 is index of 7️⃣
      winnings += jackpot;
      winMessage += `JACKPOT! ${jackpot} CREDITS! `;
      setJackpot(5000); // Reset jackpot
    }
    
    if (winnings > 0) {
      setCredits(prev => prev + winnings);
      setWinAmount(winnings);
      setLastWin({ amount: winnings, message: winMessage.trim() });
      setHotStreak(prev => prev + 1);
    } else {
      setLastWin({ amount: 0, message: "No win. Try again!" });
      setHotStreak(0);
    }
  };

  const calculateLineWin = (line: number[]) => {
    // Count occurrences of each symbol
    const counts: { [key: number]: number } = {};
    line.forEach(symbol => {
      counts[symbol] = (counts[symbol] || 0) + 1;
    });
    
    // Find the most frequent symbol
    let maxCount = 0;
    let maxSymbol = -1;
    
    Object.entries(counts).forEach(([symbol, count]) => {
      const symIndex = parseInt(symbol);
      if (count > maxCount) {
        maxCount = count;
        maxSymbol = symIndex;
      }
    });
    
    // Calculate win based on matches
    let win = 0;
    if (maxCount >= 3) {
      // Base win values per symbol (higher index = higher value)
      const symbolValues = [5, 10, 15, 20, 25, 50, 100, 200];
      win = symbolValues[maxSymbol] * maxCount * (maxCount === 5 ? 3 : 1);
    }
    
    return { win, symbol: maxSymbol, count: maxCount };
  };

  const changeBet = (amount: number) => {
    if (!spinning) {
      const newBet = Math.max(1, Math.min(100, bet + amount));
      setBet(newBet);
    }
  };

  const addCredits = () => {
    setCredits(prev => prev + 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-black to-purple-900 rounded-xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 p-3 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-black">DIAMOND JACKPOT</h3>
      </div>
      
      {/* Jackpot and Hot Streak */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-b from-purple-900 to-purple-950">
        <div className="bg-black/30 rounded-lg p-2 w-40">
          <div className="text-xs text-amber-300 font-semibold">HOT STREAK</div>
          <div className="flex items-center">
            <Progress
              value={progressValue}
              className="h-3 bg-gray-800"
              style={{
                "--theme-primary": hotStreak > 0 ? "linear-gradient(to right, #f97316, #ef4444)" : "#666"
              } as any}
            />
            {hotStreak > 0 && (
              <Flame className="ml-2 text-orange-500 animate-pulse" size={16} />
            )}
          </div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3">
          <div className="text-center">
            <div className="text-xs text-amber-300 font-semibold">JACKPOT</div>
            <div className="text-3xl font-bold text-amber-400 flex items-center justify-center">
              <Coins size={20} className="mr-2" />
              {jackpot.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Slot Machine Display */}
      <div className="p-6 bg-gray-900 relative">
        {/* Last Win Message */}
        {lastWin.amount > 0 && (
          <div className="absolute top-0 left-0 w-full text-center transform -translate-y-1/2 z-10">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold px-4 py-1 rounded-full animate-bounce shadow-lg">
              WIN! {lastWin.amount} CREDITS
            </div>
          </div>
        )}
        
        <div className="bg-black p-4 rounded-xl relative shadow-inner overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/10"></div>
          
          {/* Light effects */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-b from-blue-400/30 to-transparent rounded-b-full"></div>
          
          {/* Reels */}
          <div className="flex justify-between gap-1">
            {reels.map((reel, reelIndex) => (
              <div 
                key={reelIndex}
                className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden"
              >
                <div 
                  className={`flex flex-col items-center py-2 ${spinning ? 'animate-slot-spin' : ''}`}
                  style={{animationDelay: `${reelIndex * 0.1}s`}}
                >
                  {reel.map((symbol, symbolIndex) => (
                    <div 
                      key={symbolIndex}
                      className={`w-full flex-1 flex items-center justify-center text-4xl sm:text-5xl p-2
                        ${symbolIndex === 1 ? 'border-y-2 border-amber-500/30' : ''}
                      `}
                    >
                      {symbols[symbol]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 bg-gray-900 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => changeBet(-5)}
            disabled={spinning}
            className="bg-black/50 text-white border-gray-700 hover:bg-black/70"
          >
            -5
          </Button>
          
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-xs text-gray-400">BET</div>
            <div className="text-xl font-bold text-white">{bet}</div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => changeBet(5)}
            disabled={spinning}
            className="bg-black/50 text-white border-gray-700 hover:bg-black/70"
          >
            +5
          </Button>
        </div>
        
        <Button
          size="lg"
          disabled={spinning || credits < bet}
          onClick={spinReels}
          className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold px-8 min-w-[150px]"
        >
          {spinning ? "SPINNING..." : "SPIN"}
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-xs text-gray-400">CREDITS</div>
            <div className="text-xl font-bold text-white">{credits}</div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={addCredits}
            className="bg-black/50 text-white border-gray-700 hover:bg-black/70"
          >
            +1000
          </Button>
        </div>
      </div>
      
      {/* Last Win Display */}
      {lastWin.message && (
        <div className="px-4 py-2 bg-black/70 text-center">
          <div className="text-sm text-gray-400">{lastWin.message}</div>
        </div>
      )}
      
      <style>
        {`
        @keyframes slot-spin {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% / 3)); }
        }
        
        .animate-slot-spin {
          animation: slot-spin 0.2s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default SlotMachineJackpot;
