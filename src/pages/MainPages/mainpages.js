import React from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Detail from '../Detail';
import styles from './mainpages.styles';
import routes from '../../Navigation/routes';
import useFetch from '../../hooks/useFetch';
import MainPageCard from '../../Component/Cards/MainPageCard';

const Stack = createNativeStackNavigator();

export default function MainPages() {
  const {characterData, loading} = useFetch()

  const navigation = useNavigation();


  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.MAINPAGES} component={MainPages} />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>;

   const handleFavorites = (item) => {
    navigation.navigate("Favorites")
   }

  return (
    <SafeAreaView>
      <FlatList 
        data={characterData}
        renderItem={() => <MainPageCard item={item}/>}
      />
      <Button title='Favorites' onPress={handleFavorites}  />
    </SafeAreaView>
  );
}
