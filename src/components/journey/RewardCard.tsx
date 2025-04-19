
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface RewardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  value,
  icon,
  bgColor = "bg-gradient-to-br from-blue-600 to-indigo-800",
  textColor = "text-white",
  className
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden border-none", 
        bgColor, 
        className
      )}
    >
      <div className="flex items-center p-4">
        <div className={`mr-4 p-2 rounded-lg ${textColor === 'text-white' ? 'bg-white/20' : 'bg-gray-100'}`}>
          {icon}
        </div>
        <div>
          <h4 className={`text-xs font-medium ${textColor}/70`}>{title}</h4>
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
      </div>
    </Card>
  );
};

export default RewardCard;
