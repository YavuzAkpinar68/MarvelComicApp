import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  Switch,
  SwitchComponent,
  Text,
  TouchableOpacity,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {ThemeContext} from '../../Context/ThemeContext/ThemeContext';
import {TranslationContext} from '../../Context/TranslationContext/TranslationProvider';
import styles from './settings.styles';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const {language, setLanguage} = useContext(TranslationContext);
  const [value, setValue] = useState('false');
  const handleEnglishLanguage = () => {
    setLanguage('en');
    setValue(false);
    i18n.changeLanguage(language);
  };
  const handleTurkishLanguage = () => {
    setLanguage('tr');
    setValue(true);
    i18n.changeLanguage(language);
  };
  const options = [
    {label: 'English', value: 'en'},
    {label: 'Turkish', value: 'tr'},
  ];
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <SwitchSelector
        options={options}
        selectedColor="red"
        hasPadding
        onPress={language => i18n.changeLanguage(language)}></SwitchSelector>
      <Button title="dark" onPress={() => setTheme()} />
      
    </SafeAreaView>
  );
};

export default Settings;
