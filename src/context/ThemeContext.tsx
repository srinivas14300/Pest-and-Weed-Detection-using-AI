// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = {
  name: string;
  background: string;
  button: string;
  text: string;
  gradientFrom: string;
  gradientTo: string;
};

const themes: Theme[] = [
  { 
    name: 'nature',
    background: 'bg-green-50',
    button: 'bg-green-600 hover:bg-green-700',
    text: 'text-green-900',
    gradientFrom: 'from-green-25',
    gradientTo: 'to-green-50'
  },
  {
    name: 'sunset',
    background: 'bg-orange-50',
    button: 'bg-orange-600 hover:bg-orange-700',
    text: 'text-orange-900',
    gradientFrom: 'from-orange-100',
    gradientTo: 'to-amber-50'
  },
  {
    name: 'ocean',
    background: 'bg-blue-50',
    button: 'bg-blue-600 hover:bg-blue-700',
    text: 'text-blue-900',
    gradientFrom: 'from-blue-100',
    gradientTo: 'to-cyan-50'
  }
];

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: themes[0],
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  
  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  useEffect(() => {
    document.documentElement.className = themes[themeIndex].background;
    localStorage.setItem('theme', themes[themeIndex].name);
  }, [themeIndex]);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeIndex], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
