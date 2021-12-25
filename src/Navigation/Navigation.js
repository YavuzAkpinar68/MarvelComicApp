import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Appearance } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Favorites from '../pages/Favorites';
import Settings from '../pages/SettingsPage';

import Icon  from 'react-native-vector-icons/AntDesign';
import routes from './routes';
import StackPage from './Stacks/stack';
import { useTranslation } from 'react-i18next';
import { TranslationContext } from '../Context/TranslationContext/TranslationProvider';



const Tabs = createBottomTabNavigator();

const Navigation = () => {
  const {language, setLanguage} = useContext(TranslationContext)
  const {t, i18n} = useTranslation()
  return (
    <NavigationContainer theme={language === "dark" ? DarkTheme :DefaultTheme}>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen
          name={t('StackPage')}
          component={StackPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name={t('favorites')}
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name={t('Settings')}
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="setting" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
