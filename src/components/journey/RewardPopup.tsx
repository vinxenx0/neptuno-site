
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface RewardPopupProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const RewardPopup: React.FC<RewardPopupProps> = ({
  title,
  description,
  icon,
  isVisible,
  onClose
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Card className={`w-full max-w-sm p-6 bg-white rounded-xl shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}>
        <div className="flex justify-between items-start mb-4">
          <div className="text-xl font-bold text-gray-900">{title}</div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0" 
            onClick={onClose}
          >
            <X size={16} />
          </Button>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="mr-4 p-3 rounded-full bg-indigo-100">
            {icon}
          </div>
          <div className="text-gray-700">
            {description}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button onClick={onClose}>Aceptar</Button>
        </div>
      </Card>
    </div>
  );
};

export default RewardPopup;
