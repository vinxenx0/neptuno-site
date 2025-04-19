
import React from 'react';
import { Button } from "@/components/ui/button";

interface SlotMachineControlsProps {
  onSpin: () => void;
  onBuyCredits: () => void;
  onGenerateCoupon: () => void;
  isSpinning: boolean;
  credits: number;
}

const SlotMachineControls: React.FC<SlotMachineControlsProps> = ({
  onSpin,
  onBuyCredits,
  onGenerateCoupon,
  isSpinning,
  credits
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Button 
        variant="default" 
        onClick={onSpin}
        disabled={isSpinning || credits < 10}
        className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
      >
        {isSpinning ? "Girando..." : "Jugar (10 créditos)"}
      </Button>
      
      <Button 
        variant="outline" 
        onClick={onBuyCredits}
        className="border-yellow-500 text-yellow-500 hover:bg-yellow-50"
      >
        Comprar créditos
      </Button>

      <Button
        variant="outline"
        onClick={onGenerateCoupon}
        className="border-green-500 text-green-500 hover:bg-green-50"
      >
        Generar cupón
      </Button>
    </div>
  );
};

export default SlotMachineControls;
