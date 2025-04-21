
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, changeTheme } = useTheme();
  
  const themes = [
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'coral', color: 'bg-orange-500' },
    { name: 'slate', color: 'bg-slate-500' }
  ];
  
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <span className="text-sm font-medium text-gray-600">Probar otro tema de color:</span>
      <div className="flex items-center gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-switcher ${theme.color} w-6 h-6 ${currentTheme === theme.name ? 'active scale-110' : ''}`}
            onClick={() => changeTheme(theme.name as any)}
            title={`Tema ${theme.name}`}
            aria-label={`Cambiar al tema ${theme.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
