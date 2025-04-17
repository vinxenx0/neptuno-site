
import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  username?: string;
  avatarColor?: string;
  isAdmin?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title, 
  subtitle,
  username = 'A',
  avatarColor = 'bg-red-500',
  isAdmin = false 
}) => {
  return (
    <header className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <div className="relative">
            {/* Avatar */}
            <div className={`${avatarColor} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md relative`}>
              {username.charAt(0).toUpperCase()}
              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 bg-blue-500 h-4 w-4 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
