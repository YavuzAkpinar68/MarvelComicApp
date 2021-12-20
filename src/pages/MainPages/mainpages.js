import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Detail from '../Detail';
import styles from './mainpages.styles';
import routes from '../../Navigation/routes';
import navigation from '../../Navigation/navigation';

const Stack = createNativeStackNavigator();

export default function MainPages() {

const navigation = useNavigation();


  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.MAINPAGES} component={MainPages} />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>;

   const handleFavorites = (item) => {
    navigation.navigate(routes.DETAIL, {item})
   }

  return (
    <SafeAreaView>
      <Text>Main Pages</Text>
      <Button title='Favorites' onPress={handleFavorites}  />
    </SafeAreaView>
  );
}
