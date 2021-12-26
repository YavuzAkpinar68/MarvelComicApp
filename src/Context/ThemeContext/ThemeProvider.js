import React, { createContext, useState } from "react";
import { Appearance } from 'react-native';


export const ThemeContext = createContext()
const colorScheme = Appearance.getColorScheme()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(colorScheme)
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

export default ThemeProvider