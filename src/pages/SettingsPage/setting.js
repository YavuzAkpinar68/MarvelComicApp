import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button, SafeAreaView, Text } from "react-native";
import { TranslationContext } from "../../Context/TranslationContext/TranslationProvider";
import styles from './settings.styles';

const Settings = () => {
    const {t, i18n} = useTranslation()
    const {language, setLanguage} = useContext(TranslationContext)
    const handleEnglishLanguage = () => {
        setLanguage("en")
        i18n.changeLanguage(language)
    }
    const handleTurkishLanguage = () => {
        setLanguage("tr")
        i18n.changeLanguage(language)
    }
    return(
        <SafeAreaView>
            <Button title="English" onPress={handleEnglishLanguage}></Button>
            <Button title="Turkish" onPress={handleTurkishLanguage}></Button>

        </SafeAreaView>
    )
}

export default Settings