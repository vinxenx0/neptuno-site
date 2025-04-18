
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

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
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center text-sm mb-2 text-gray-500">
                <Link to="/">Dashboard</Link> 
                <ChevronRight className="h-4 w-4 mx-1" />
                <span>{isAdmin ? 'Admin' : 'Mi cuenta'}</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-gray-600 mt-1">{subtitle}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="font-medium text-sm">{isAdmin ? 'Administrator' : 'User'}</span>
                <span className="text-xs text-gray-500">Online</span>
              </div>
              <div className={`${avatarColor} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md relative`}>
                {avatarText}
                <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
              </div>
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
