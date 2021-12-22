import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {MarvelContext} from '../../Context/MarvelProvider';
import styles from './favorites.styles';

export default function Favorites() {
  const [state, dispatch] = useContext(MarvelContext);

  const handleRemoveFavorites = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {marvel}});
  const renderMarvel = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleRemoveFavorites(item)}
        style={styles.container}>
        <ImageBackground
          source={{uri: `${item.thumbnail.path}.jpg`}}
          style={styles.image}>
          <View style={styles.textView}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.comicsView}>
              <Text>Available Comics : {item.comics.available}</Text>
              <Text>Available Stories : {item.stories.available}</Text>
              <Text>Available Series : {item.series.available}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text>Favorites</Text>

      <FlatList data={state.favoritesList} renderItem={renderMarvel} />
    </SafeAreaView>
  );
}
