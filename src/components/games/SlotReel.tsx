
import React, { useEffect, useRef } from 'react';

interface SlotReelProps {
  symbols: string[];
  isSpinning: boolean;
  index: number;
  result: string;
  height: number;
  isDeluxe?: boolean;
}

const SlotReel: React.FC<SlotReelProps> = ({ 
  symbols, 
  isSpinning, 
  index, 
  result,
  height,
  isDeluxe = false
}) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const symbolsRef = useRef<HTMLDivElement>(null);

  // Initialize the reel with symbols
  useEffect(() => {
    if (symbolsRef.current) {
      symbolsRef.current.innerHTML = [...symbols, ...symbols, ...symbols]
        .map(s => `<div class="symbol" style="height: ${height}px; display: flex; align-items: center; justify-content: center; font-size: ${height * 0.5}px;">${s}</div>`)
        .join('');
    }
  }, [symbols, height]);

  // Handle spinning effect
  useEffect(() => {
    if (isSpinning && symbolsRef.current) {
      // Add a slight delay based on the reel index for staggered effect
      const delay = index * 100;
      
      setTimeout(() => {
        if (symbolsRef.current) {
          // Reset position
          symbolsRef.current.style.transition = 'none';
          symbolsRef.current.style.transform = 'translateY(0)';
          
          // Start spinning after a tiny delay
          setTimeout(() => {
            if (symbolsRef.current) {
              // Calculate random position to stop at
              const symbolHeight = height;
              const randomOffset = Math.floor(Math.random() * symbols.length);
              const position = -randomOffset * symbolHeight;
              
              // Apply smooth transition
              symbolsRef.current.style.transition = `transform ${1 + index * 0.3}s cubic-bezier(0.1, 0.7, 0.1, 1)`;
              symbolsRef.current.style.transform = `translateY(${position}px)`;
            }
          }, 50);
        }
      }, delay);
    }
  }, [isSpinning, index, height, symbols.length]);

  return (
    <div 
      ref={reelRef}
      className={`relative overflow-hidden rounded-md ${isDeluxe ? 'bg-gradient-to-b from-gray-200 to-gray-100' : 'bg-white'}`}
      style={{ width: height, height: height }}
    >
      <div 
        ref={symbolsRef}
        className="absolute top-0 left-0 w-full"
      >
        {/* Symbols will be inserted here via JS */}
      </div>
      
      {!isSpinning && (
        <div 
          className="absolute inset-0 flex items-center justify-center text-4xl bg-white/80"
          style={{ fontSize: height * 0.5 }}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default SlotReel;
