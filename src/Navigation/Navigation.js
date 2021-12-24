import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import Settings from '../pages/SettingsPage';

import Icon  from 'react-native-vector-icons/AntDesign';
import routes from './routes';
import StackPage from './Stacks/stack';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen
          name={'StackPage'}
          component={StackPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name={'Favorites'}
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name={'Settings'}
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
