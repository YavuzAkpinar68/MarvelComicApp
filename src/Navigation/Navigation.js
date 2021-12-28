import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import Favorites from '../pages/Favorites';
import Settings from '../pages/SettingsPage';

import Icon from 'react-native-vector-icons/AntDesign';
import StackPage from './Stacks/stack';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../Context/ThemeContext/ThemeProvider';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
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
