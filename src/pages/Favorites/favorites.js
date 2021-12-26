import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, FlatList, Button} from 'react-native';
import {MarvelContext} from '../../Context/MarvelProvider';
import styles from './favorites.styles';
import MainPageCard from '../../Component/Cards/MainPageCard';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';

export default function Favorites() {
  const {setFavorites , favorites, state, dispatch,setSelection} = useContext(MarvelContext);


  
  const storeData =  () => {  
     AsyncStorage.getItem('@FAVORITES').then(data => {
       if(data !== null) {
         setFavorites(JSON.parse(data))
         console.log(favorites)
       }
     }).catch()
    }

    useEffect(() => {
      storeData()
    },[state.favoritesList])
  

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
      <FlatList data={state.favoritesListComic} renderItem={renderMarvelComic} numColumns={2}/>
      <FlatList data={favorites} renderItem={renderMarvel} numColumns={2}/>
    </SafeAreaView>
  );
}
