import React from "react";
import { Image, Text, View } from "react-native";

const MainPageCard = ({item}) => {
  return(
    <View>
      <Text>{item.name}</Text>
      <Image 
        source={{uri: `${item.thumbnail.path}.jpg`}}
        style={{height:100,width:1000}}/>
    </View>
  )
}

export default MainPageCard