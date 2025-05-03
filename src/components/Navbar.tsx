
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, Heart, Settings, ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { MegaMenu } from './MegaMenu';
import { DesktopNotifications } from './navbar/DesktopNotifications';
import { MobileMenu } from './navbar/MobileMenu';
import { MobileBottomBar } from './navbar/MobileBottomBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-md flex items-center justify-center text-white font-bold">N</div>
                <span className="ml-2 text-xl font-bold text-gray-800">Neptuno</span>
              </Link>
            </div>
            
            {/* Desktop Navigation with MegaMenu - Center */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <MegaMenu />
            </div>
            
            {/* Desktop Notification Icons - Right side */}
            <div className="hidden md:block">
              <DesktopNotifications />
            </div>
            
            {/* Mobile header icons */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <Heart className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-pink-500 text-white rounded-full text-xs font-bold">
                  2
                </span>
              </div>
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-green-500 text-white rounded-full text-xs font-bold">
                  2
                </span>
              </div>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-yellow-400 text-purple-800 rounded-full text-xs font-bold">
                  3
                </span>
              </div>
              <Settings 
                className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" 
                onClick={() => navigate('/admin-dashboard')}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </nav>
      
      {/* Mobile fixed bottom bar with notifications */}
      {isMobile && <MobileBottomBar />}
    </>
  );
};

export default Navbar;
