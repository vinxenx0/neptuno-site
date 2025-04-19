
import React from 'react';

interface ReelProps {
  reel: {
    top: string;
    current: string;
    bottom: string;
  };
  isSpinning: boolean;
}

const SlotReel: React.FC<ReelProps> = ({ reel, isSpinning }) => {
  // Create an array of symbols for the spinning animation
  const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💰', '7️⃣'];
  const repeatedSymbols = [...symbols, ...symbols, ...symbols]; // Triple the symbols for continuous scrolling effect
  
  return (
    <div 
      className="relative overflow-hidden aspect-square flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50"
    >
      {isSpinning ? (
        <div className="absolute flex flex-col h-[900px] animate-slot-spin">
          {repeatedSymbols.map((symbol, index) => (
            <div key={index} className="h-20 flex items-center justify-center text-4xl">
              {symbol}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl opacity-40 mb-2">{reel.top}</div>
          <div className="text-4xl">{reel.current}</div>
          <div className="text-4xl opacity-40 mt-2">{reel.bottom}</div>
        </div>
      )}
    </div>
  );
};

export default SlotReel;
