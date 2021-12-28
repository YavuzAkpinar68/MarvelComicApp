import React, {createContext, useState, useEffect} from 'react';
import {Alert, Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();
const colorScheme = Appearance.getColorScheme();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(colorScheme);

  const getThemeData = async () => {
    try {
      const response = await AsyncStorage.getItem('@THEME');
      return response && setTheme(response);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    getThemeData();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
