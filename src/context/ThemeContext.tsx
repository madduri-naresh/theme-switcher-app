import React, { createContext, useState, useEffect } from 'react';
import { themes } from '../themes/themes';

type ThemeContextType = {
  theme: any;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme1,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(themes.theme1);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(themes[savedTheme as keyof typeof themes]);
    }
  }, []);

  const changeTheme = (themeName: string) => {
    const newTheme = themes[themeName as keyof typeof themes];
    setTheme(newTheme);
    localStorage.setItem('theme', themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
