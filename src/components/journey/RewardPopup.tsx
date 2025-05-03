
import React, { useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';

export interface RewardPopupProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
  points?: number; // Added for backward compatibility
  open?: boolean; // Added for backward compatibility
}

const RewardPopup: React.FC<RewardPopupProps> = ({
  title,
  description,
  icon,
  isVisible,
  onClose,
  points, // New prop
  open, // New prop
}) => {
  const [visible, setVisible] = useState(false);
  
  // Handle both isVisible and open props for backward compatibility
  const isPopupVisible = isVisible !== undefined ? isVisible : open;
  
  useEffect(() => {
    if (isPopupVisible) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isPopupVisible, onClose]);
  
  if (!isPopupVisible && !visible) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 max-w-md w-full animate-bounce-in pointer-events-auto">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold flex items-center">
              {icon || <Star className="h-5 w-5 text-yellow-500 mr-2" />}
              {title || "¡Recompensa!"}
            </h3>
            
            {description && <p className="mt-2 text-gray-600">{description}</p>}
            
            {points !== undefined && (
              <div className="mt-3 flex items-center text-yellow-500">
                <Star className="h-5 w-5 fill-yellow-500 mr-2" />
                <span className="font-medium">+{points} puntos</span>
              </div>
            )}
          </div>
          
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardPopup;
