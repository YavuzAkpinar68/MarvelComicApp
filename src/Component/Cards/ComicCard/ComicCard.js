import React from 'react';
import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import styles from '../MainPageCardsStyle';

const ComicCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        source={{uri: `${item.thumbnail.path}.jpg`}}
        style={styles.image}>
        <View style={styles.textView}>
          <Text style={styles.title}>{item.title || item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ComicCard;
