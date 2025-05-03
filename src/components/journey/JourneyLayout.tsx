
import React, { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';

export interface JourneyLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  journeyTitle?: string; // Added for compatibility
  progress?: number;
  currentPoints?: number;
}

const JourneyLayout: React.FC<JourneyLayoutProps> = ({
  children,
  title,
  subtitle,
  bgColor = 'bg-white',
  journeyTitle, // Now correctly typed
  progress = 0,
  currentPoints = 0
}) => {
  // Use journeyTitle as a fallback if title is not provided
  const displayTitle = title || journeyTitle || '';
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`${bgColor} text-white py-16 px-4`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h1>
          {subtitle && <p className="text-xl opacity-90">{subtitle}</p>}
          
          {progress > 0 && (
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progreso</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
          
          {currentPoints > 0 && (
            <div className="flex items-center mt-4 text-yellow-300">
              <Star className="mr-2 h-5 w-5 fill-yellow-300" />
              <span className="font-medium">{currentPoints} puntos</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-grow py-12 px-4 bg-gray-50">
        {children}
      </div>
      
      <Separator />
      
      <footer className="py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          Powered by Neptuno — La plataforma para crear experiencias gamificadas
        </div>
      </footer>
    </div>
  );
};

export default JourneyLayout;
