
import React, { useState } from 'react';
import { Badge as UiBadge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  color: string;
  animated?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  icon, 
  text, 
  color, 
  animated = false 
}) => {
  const [isAnimating, setIsAnimating] = useState(animated);

  React.useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  return (
    <UiBadge 
      className={cn(
        "px-3 py-1.5 text-sm flex items-center gap-1.5 transition-all duration-300",
        color,
        isAnimating && "animate-pulse transform scale-110"
      )}
    >
      {icon}
      {text}
    </UiBadge>
  );
};

export default Badge;
