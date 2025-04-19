
import React from 'react';

interface SlotMachineResultProps {
  win: number | null;
}

const SlotMachineResult: React.FC<SlotMachineResultProps> = ({ win }) => {
  if (!win) return null;
  
  return (
    <div className="mt-3 text-center animate-bounce">
      <span className="text-yellow-300 font-bold">¡GANASTE {win} CRÉDITOS!</span>
    </div>
  );
};

export default SlotMachineResult;
