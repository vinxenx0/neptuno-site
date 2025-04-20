
import React, { useRef, useEffect } from 'react';

interface ReelProps {
  reel: {
    top: string;
    current: string;
    bottom: string;
  };
  isSpinning: boolean;
  index: number;
}

const SlotReel: React.FC<ReelProps> = ({ reel, isSpinning, index }) => {
  const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💰', '7️⃣'];
  const reelRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isSpinning && reelRef.current) {
      // Reset the animation when not spinning
      reelRef.current.style.transform = 'translateY(0)';
      reelRef.current.style.transition = 'none';
    }
  }, [isSpinning]);
  
  useEffect(() => {
    if (isSpinning && reelRef.current) {
      // Create a staggered spinning effect based on the reel index
      const delay = index * 100;
      
      setTimeout(() => {
        if (reelRef.current) {
          reelRef.current.style.transition = 'transform 2s cubic-bezier(0.1, 0.7, 0.1, 1)';
          reelRef.current.style.transform = 'translateY(-100%)';
        }
      }, delay);
    }
  }, [isSpinning, index]);

  return (
    <div 
      className="relative overflow-hidden aspect-square flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50"
    >
      {isSpinning ? (
        <div ref={reelRef} className="flex flex-col">
          {[...symbols, ...symbols].map((symbol, i) => (
            <div key={i} className="h-20 flex items-center justify-center text-4xl">
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
