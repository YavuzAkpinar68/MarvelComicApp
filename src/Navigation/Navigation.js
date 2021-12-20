import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPages from '../pages/MainPages';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';

import routes from './routes';

const Tabs = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={routes.MAINPAGES} component={MainPages} />
        <Tabs.Screen name={routes.FAVORITES} component={Favorites} />
        <Tabs.Screen name={routes.SETTINGS} component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
