
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Heart, CreditCard, Tag, Trophy, Award, Settings, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const DesktopNotifications = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center space-x-4">
      {/* Messages */}
      <div className="relative">
        <Heart className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-pink-500 text-white rounded-full text-xs font-bold">
          5
        </span>
      </div>

      {/* Shopping Cart */}
      <div className="relative">
        <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full text-xs font-bold">
          2
        </span>
      </div>
      
      {/* Messages */}
      <div className="relative">
        <Mail className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
          3
        </span>
      </div>
      
      {/* Credits */}
      <div className="relative">
        <CreditCard 
          className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
          onClick={() => navigate('/user-dashboard')}
        />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-400 text-purple-800 rounded-full text-xs font-bold">
          1k
        </span>
      </div>
      
      {/* Coupons */}
      <div className="relative">
        <Tag className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs font-bold">
          1
        </span>
      </div>
      
      {/* Points */}
      <div className="relative">
        <Trophy className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-300 text-purple-800 rounded-full text-xs font-bold">
          10
        </span>
      </div>
      
      {/* Badges */}
      <div className="relative">
        <Award className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full text-xs font-bold">
          1
        </span>
      </div>
      
      {/* User Avatar */}
      <div 
        className="cursor-pointer"
        onClick={() => navigate('/user-dashboard')}
      >
        <Avatar className="h-8 w-8 border-2 border-purple-500">
          <AvatarFallback className="bg-purple-600 text-white">U</AvatarFallback>
        </Avatar>
      </div>
      
      {/* Settings (admin only) */}
      <div className="relative">
        <Settings 
          className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" 
          onClick={() => navigate('/admin-dashboard')}
        />
      </div>
    </div>
  );
};
