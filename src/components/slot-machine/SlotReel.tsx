
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
  return (
    <div 
      className="relative overflow-hidden aspect-square flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50"
    >
      <div 
        className={`absolute flex flex-col items-center justify-center ${isSpinning ? 'animate-slot-spin' : ''}`}
      >
        <div className="text-4xl py-2">{reel.top}</div>
        <div className="text-4xl py-2">{reel.current}</div>
        <div className="text-4xl py-2">{reel.bottom}</div>
      </div>
    </div>
  );
};

export default SlotReel;
