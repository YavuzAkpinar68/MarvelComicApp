import React, {useContext} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {MarvelContext} from '../../Context/MarvelProvider';
import styles from './favorites.styles';
import MainPageCard from '../../Component/Cards/MainPageCard';

export default function Favorites() {
  const {state, dispatch} = useContext(MarvelContext);

  const handleRemoveFavorites = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {marvel}});

  const renderMarvel = ({item}) => (
    <MainPageCard item={item} onPress={() => handleRemoveFavorites(item)} />
  );

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <FlatList data={state.favoritesList} renderItem={renderMarvel} />
    </SafeAreaView>
  );
}
