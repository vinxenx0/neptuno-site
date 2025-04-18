
import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  title: string;
  subtitle: string;
  avatarText: string;
  avatarColor: string;
  isAdmin?: boolean;
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title,
  subtitle,
  avatarText,
  avatarColor,
  isAdmin = false,
  children
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <header className="pt-24 pb-6 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-gray-600 mt-1">{subtitle}</p>
            </div>
            
            <div className={`${avatarColor} text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg relative`}>
              {avatarText}
              <span className="absolute bottom-1 right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto max-w-7xl px-4 py-8 flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
