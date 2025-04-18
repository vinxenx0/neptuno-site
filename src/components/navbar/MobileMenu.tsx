
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50">Producto</a>
        <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50">Usos</a>
        <a href="#sdk" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50">SDK</a>
        <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50">Corporate</a>
        <div className="border-t border-gray-200 my-2"></div>
        <Link 
          to="/user-dashboard" 
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
        >
          Mi Perfil
        </Link>
        <Link 
          to="/admin-dashboard" 
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
        >
          Administración
        </Link>
      </div>
    </div>
  );
};
