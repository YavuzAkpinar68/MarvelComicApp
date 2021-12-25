import {useColorScheme} from 'react-native';
import React, {createContext, useState} from 'react';

const darkTheme = {
  background: '#1A1A1A',
  foreground: '#FAFAFA',
};

const lighTheme = {
  background: '#FAFAFA',
  foreground: '#1A1A1A',
};

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState('default');

  const scheme = useColorScheme();
  return (
    <ThemeContext.Provider
      theme={scheme === 'dark' ? darkTheme : lighTheme}
      value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
