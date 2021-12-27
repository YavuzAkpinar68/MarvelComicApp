import i18next from "i18next";
import React ,{useEffect, useContext } from "react";
import { initReactI18next } from "react-i18next";
import { TranslationContext } from "../../Context/TranslationContext/TranslationProvider";
import english from "./english.json"
import turkish from "./turkish.json"




i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng:"tr",
  resources:{
    en:english,
    tr:turkish
  },
  react:{
    useSuspense:false
  }
})


export default i18next