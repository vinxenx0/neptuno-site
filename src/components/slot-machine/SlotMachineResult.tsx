
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SlotMachineResultProps {
  win: number | null;
}

const SlotMachineResult: React.FC<SlotMachineResultProps> = ({ win }) => {
  if (!win) return null;
  
  return (
    <div className="mt-3 text-center animate-bounce">
      <span className="text-yellow-300 font-bold flex items-center justify-center">
        <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
        ¡GANASTE {win} CRÉDITOS!
      </span>
    </div>
  );
};

export default SlotMachineResult;
