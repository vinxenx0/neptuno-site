
import React from 'react';

interface SlotMachineHeaderProps {
  credits?: number;
}

const SlotMachineHeader: React.FC<SlotMachineHeaderProps> = ({ credits }) => {
  if (credits !== undefined) {
    // This is the credits display header inside the machine
    return (
      <div className="text-center mb-3">
        <span className="text-yellow-400 text-sm font-bold">Créditos: {credits}</span>
      </div>
    );
  }
  
  // This is the window-style header above the machine
  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-2 text-sm">
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="font-mono flex-1 text-center">prueba Neptuno</span>
    </div>
  );
};

export default SlotMachineHeader;
