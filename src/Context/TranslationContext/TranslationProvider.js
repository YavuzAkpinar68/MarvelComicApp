import React, { createContext, useState } from "react";

export const TranslationContext = createContext()

const TranslationProvider = ({children}) => {
  const [language, setLanguage] = useState("en")
  return <TranslationContext.Provider value={{language, setLanguage}}>{children}</TranslationContext.Provider>
}

export default TranslationProvider