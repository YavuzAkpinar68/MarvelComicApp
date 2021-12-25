import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, FlatList, Button} from 'react-native';
import {MarvelContext} from '../../Context/MarvelProvider';
import styles from './favorites.styles';
import MainPageCard from '../../Component/Cards/MainPageCard';
import useFetch from '../../hooks/useFetch';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';

export default function Favorites() {
  const {state, dispatch,setSelection} = useContext(MarvelContext);
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
      
    AsyncStorage.getItem('@FAVORITES').then(addFavorited => {
      addFavorited && setFavorites(addFavorited);
    });
   
  }, []);


  const handleRemoveFavorites = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {marvel}});
    setSelection(false)

  const handleRemoveFavoritesComic = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES_COMIC', payload: {marvel}});  
    setSelection(false)


  const renderMarvel = ({item}) => (
    <MainPageCard item={item} onPress={() => handleRemoveFavorites(item)} />
  );
  const renderMarvelComic = ({item}) => (
    <ComicCard item={item} onPress={() => handleRemoveFavoritesComic(item)} />
  );

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title='aaa' onPress={() => console.log(state.favoritesList)}></Button>
      <FlatList data={state.favoritesListComic} renderItem={renderMarvelComic} numColumns={2}/>
      <FlatList data={state.favoritesList} renderItem={renderMarvel}/>
    </SafeAreaView>
  );
}
