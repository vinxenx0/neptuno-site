
import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JourneyLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
}

const JourneyLayout: React.FC<JourneyLayoutProps> = ({
  children,
  title,
  subtitle,
  bgColor
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <header className={`pt-24 pb-10 px-4 ${bgColor} text-white`}>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="text-sm mb-2 text-white/70 flex items-center">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link> 
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>Journey</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              {subtitle}
            </p>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default JourneyLayout;
