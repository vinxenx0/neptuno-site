
import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from 'sonner';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, changeTheme } = useTheme();
  
  const themes = [
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'coral', color: 'bg-orange-500' },
    { name: 'slate', color: 'bg-slate-500' }
  ];
  
  // Add CSS to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .theme-switcher {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
      }
      
      .theme-switcher.active {
        transform: scale(1.1);
        box-shadow: 0 0 0 2px white;
      }
      
      .theme-blue { --primary-color: #3b82f6; }
      .theme-green { --primary-color: #10b981; }
      .theme-purple { --primary-color: #8b5cf6; }
      .theme-coral { --primary-color: #f97316; }
      .theme-slate { --primary-color: #64748b; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const handleThemeChange = (theme: string) => {
    changeTheme(theme as any);
    toast.success(`Tema cambiado a ${theme}`);
  };
  
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <span className="text-sm font-medium text-gray-600">Probar otro tema de color:</span>
      <div className="flex items-center gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-switcher ${theme.color} ${currentTheme === theme.name ? 'active scale-110' : ''}`}
            onClick={() => handleThemeChange(theme.name)}
            title={`Tema ${theme.name}`}
            aria-label={`Cambiar al tema ${theme.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
