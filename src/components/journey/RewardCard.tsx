
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';

export interface RewardCardProps {
  title: string;
  value?: number; 
  icon?: ReactNode;
  bgColor?: string;
  points?: number; // Added for backward compatibility
}

const RewardCard: React.FC<RewardCardProps> = ({ 
  title, 
  value, 
  icon, 
  bgColor = "bg-gradient-to-br from-blue-600 to-indigo-600", 
  points // New prop
}) => {
  // Use points as fallback if value is not provided
  const displayValue = value !== undefined ? value : points;
  
  return (
    <Card className={`border-0 overflow-hidden ${bgColor} text-white`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">{title}</h3>
          {icon && <div>{icon}</div>}
        </div>
        {displayValue !== undefined && (
          <p className="text-2xl font-bold mt-2">{displayValue}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RewardCard;
