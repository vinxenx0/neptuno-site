
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
  const spinRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isSpinning && spinRef.current) {
      // Create a staggered spinning effect based on the reel index
      const delay = index * 200;
      
      setTimeout(() => {
        if (spinRef.current) {
          spinRef.current.style.transition = 'transform 2s cubic-bezier(0.1, 0.7, 0.1, 1)';
          spinRef.current.style.transform = 'translateY(calc(-100% + 60px))';
        }
      }, delay);
    } else if (!isSpinning && spinRef.current) {
      // Reset the animation when not spinning
      spinRef.current.style.transition = 'none';
      spinRef.current.style.transform = 'translateY(0)';
    }
  }, [isSpinning, index]);

  return (
    <div 
      className="relative overflow-hidden aspect-square flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50"
      ref={reelRef}
    >
      {isSpinning ? (
        <div className="h-full w-full overflow-hidden relative">
          <div 
            ref={spinRef}
            className="absolute top-0 left-0 w-full"
          >
            {/* Duplicate symbols for the continuous loop effect */}
            {[...symbols, ...symbols, ...symbols].map((symbol, i) => (
              <div key={i} className="h-[60px] flex items-center justify-center text-4xl">
                {symbol}
              </div>
            ))}
          </div>
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
