import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {ThemeContext} from '../../Context/ThemeContext/ThemeProvider';
import styles from './settings.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const {setTheme} = useContext(ThemeContext);

  const options = [
    {label: t('English'), value: 'en'},
    {label: t('Turkish'), value: 'tr'},
  ];
  const themeOptions = [
    {label: t('Dark'), value: 'dark'},
    {label: t('Default'), value: 'default'},
  ];

  const handleTheme = value => {
    setTheme(value);
    AsyncStorage.setItem('@THEME', value);
  };

  const handleLanguage = languageSelected => {
    i18n.changeLanguage(languageSelected);
    AsyncStorage.setItem('@LANGUAGE', languageSelected);
  };

  return (
    <SafeAreaView>
      <View style={styles.languages}>
        <Text style={styles.languages_text}>{t('Languages')} </Text>
        <SwitchSelector
          options={options}
          selectedColor="white"
          buttonColor="teal"
          bold
          textStyle={{fontSize: 20}}
          selectedTextStyle={{fontSize: 20}}
          hasPadding
          onPress={handleLanguage}></SwitchSelector>
      </View>
      <View style={styles.theme}>
        <Text style={styles.theme_text}>{t('Theme')} </Text>
        <SwitchSelector
          options={themeOptions}
          selectedColor="white"
          buttonColor="teal"
          bold
          textStyle={{fontSize: 20}}
          selectedTextStyle={{fontSize: 20}}
          hasPadding
          onPress={handleTheme}></SwitchSelector>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
