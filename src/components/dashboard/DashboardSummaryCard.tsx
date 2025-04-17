
import React, { ReactNode } from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

interface DashboardSummaryCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  gradient: string;
  onClick?: () => void;
}

const DashboardSummaryCard: React.FC<DashboardSummaryCardProps> = ({
  title,
  value,
  icon,
  gradient,
  onClick
}) => {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all hover:shadow-lg cursor-pointer border-none", 
        gradient
      )}
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 bg-white"></div>
      <div className="flex items-center p-5 h-full">
        <div className="mr-4 rounded-full bg-white/20 p-3">
          {icon}
        </div>
        <div>
          <h3 className="text-xs font-semibold text-white/80 tracking-wider uppercase">
            {title}
          </h3>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
      </div>
    </Card>
  );
};

export default DashboardSummaryCard;
