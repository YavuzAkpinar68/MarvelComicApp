import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '../../Navigation/routes';
import MainPages from "../../pages/MainPages";
import Detail from "../../pages/Detail";
import ComicPage from "../../pages/ComicPage/comicPage";

const Stack = createNativeStackNavigator();


const StackPage = () => {
return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={routes.MAINPAGES} component={MainPages} />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
      <Stack.Screen name={routes.COMIC} component={ComicPage} />
    </Stack.Navigator>
)
  
}

export default StackPage


