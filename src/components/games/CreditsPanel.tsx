
import React from 'react';
import { Button } from '@/components/ui/button';
import { Coins, CreditCard } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface CreditsPanelProps {
  credits: number;
  onAddCredits: (amount: number) => void;
}

const CreditsPanel: React.FC<CreditsPanelProps> = ({ credits, onAddCredits }) => {
  const handleWithdraw = () => {
    toast.success("Solicitud de retirada enviada correctamente", {
      description: "Recibirás tus créditos en 24-48 horas"
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="bg-amber-500/20 p-3 rounded-full">
          <Coins className="h-8 w-8 text-amber-500" />
        </div>
        <div>
          <div className="text-sm text-gray-400">TUS CRÉDITOS</div>
          <div className="text-2xl font-bold text-amber-400">{credits}</div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">
              <CreditCard className="h-4 w-4 mr-2" />
              Retirar
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Retirar créditos</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Estás seguro de que quieres retirar tus {credits} créditos? 
                La transacción puede tardar entre 24-48 horas en procesarse.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleWithdraw}>Confirmar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button 
          onClick={() => onAddCredits(1000)}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
        >
          +1000 CRÉDITOS
        </Button>
      </div>
    </div>
  );
};

export default CreditsPanel;
