import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {ThemeContext} from '../../Context/ThemeContext/ThemeProvider';
import styles from './settings.styles';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const {setTheme} = useContext(ThemeContext);
  
  const options = [
    {label: 'English', value: 'en'},
    {label: 'Turkish', value: 'tr'},
  ];
  
    return(
        <SafeAreaView>
            <SwitchSelector
                options={options}
                selectedColor="red"
                hasPadding
                onPress={(language) => i18n.changeLanguage(language) }></SwitchSelector>
                <Button title="dark" onPress={() => setTheme("dark")}></Button>
                <Button title="default" onPress={() => setTheme("default")}></Button>
        </SafeAreaView>
    )
}

export default Settings;
