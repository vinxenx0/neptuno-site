
import React, { ReactNode } from 'react';

interface CardSummaryProps {
  title: string;
  value: string;
  icon: ReactNode;
  colorClass: string;
  onClick?: () => void;
}

const CardSummary: React.FC<CardSummaryProps> = ({
  title,
  value,
  icon,
  colorClass,
  onClick
}) => {
  return (
    <div 
      className={`rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow`}
      onClick={onClick}
    >
      <div className={`bg-gradient-to-br ${colorClass} p-6 flex justify-between`}>
        <div>
          <h3 className="text-xs text-white/80 font-medium mb-1">{title}</h3>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="flex items-center justify-center bg-white/20 h-12 w-12 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
