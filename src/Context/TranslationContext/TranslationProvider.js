import React, { createContext, useState } from "react";
import { Appearance } from 'react-native';


export const TranslationContext = createContext()
const colorScheme = Appearance.getColorScheme()

const TranslationProvider = ({children}) => {
  const [language, setLanguage] = useState(colorScheme)
  return <TranslationContext.Provider value={{language, setLanguage}}>{children}</TranslationContext.Provider>
}

export default TranslationProvider