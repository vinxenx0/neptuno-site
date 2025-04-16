
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type ThemeType = 'blue' | 'green' | 'purple' | 'coral' | 'slate';

interface ThemeContextType {
  currentTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('blue');
  
  useEffect(() => {
    // Apply the theme to document root element
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Remove any previous theme classes
    document.documentElement.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-coral', 'theme-slate');
    
    // Add the new theme class
    document.documentElement.classList.add(`theme-${currentTheme}`);
    
    // Log for debugging
    console.info(`Theme changed to: ${currentTheme}`);
  }, [currentTheme]);
  
  const changeTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    toast.success(`Theme changed to ${theme}`);
  };
  
  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
