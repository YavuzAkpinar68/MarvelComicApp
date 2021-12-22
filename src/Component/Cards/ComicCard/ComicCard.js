import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

const ComicCard = ({item}) => {
  return(
    <TouchableOpacity>
      <Image style = {{height:100, width:100}}source={{uri:`${item.images.path}.json`}}/>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default ComicCard