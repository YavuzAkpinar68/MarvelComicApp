import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./MainPageCardsStyle";

const MainPageCard = ({item, onPress}) => {
  return(
    <TouchableOpacity
      onPress={onPress} 
      style={styles.container}>
      <Image 
        source={{uri: `${item.thumbnail.path}.jpg`}}
        style={styles.image}>
      </Image>
      <View style={styles.textView}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.comicsView}>
          <Text>Available Comics : {item.comics.available}</Text>
          <Text>Available Stories : {item.stories.available}</Text>
          <Text>Available Series : {item.series.available}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default MainPageCard