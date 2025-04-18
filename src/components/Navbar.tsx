
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { MegaMenu } from './MegaMenu';
import { DesktopNotifications } from './navbar/DesktopNotifications';
import { MobileMenu } from './navbar/MobileMenu';
import { MobileBottomBar } from './navbar/MobileBottomBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-neptuno-blue to-neptuno-teal rounded-md flex items-center justify-center text-white font-bold">N</div>
                <span className="ml-2 text-xl font-bold text-neptuno-navy">Neptuno</span>
              </Link>
            </div>
            
            {/* Desktop Navigation with MegaMenu - Center */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <MegaMenu />
            </div>
            
            {/* Desktop Notification Icons - Right side */}
            <DesktopNotifications />
            
            {/* Mobile menu button and essential icons */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile nav buttons */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-neptuno-blue"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} />
      </nav>
      
      {/* Mobile fixed bottom bar with notifications */}
      {isMobile && <MobileBottomBar />}
    </>
  );
};

export default Navbar;
