import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPages from '../pages/MainPages';
import Favorites from '../pages/Favorites';
import Settings from '../pages/SettingsPage';

import routes from './routes';
import StackPage from './Stacks/stack';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown:false}}>
        <Tabs.Screen name={"StackPage"} component={StackPage} />
        <Tabs.Screen name={"Favorites"} component={Favorites} />
        <Tabs.Screen name={"Settings"} component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
