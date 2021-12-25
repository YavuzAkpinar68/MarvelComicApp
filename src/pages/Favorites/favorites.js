import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, FlatList, Button} from 'react-native';
import {MarvelContext} from '../../Context/MarvelProvider';
import styles from './favorites.styles';
import MainPageCard from '../../Component/Cards/MainPageCard';
import useFetch from '../../hooks/useFetch';

export default function Favorites() {
  const {state, dispatch} = useContext(MarvelContext);
  const {data, loading} = useFetch(`https://gateway.marvel.com:443/v1/public/characters`,``)
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
      
    AsyncStorage.getItem('@FAVORITES').then(addFavorited => {
      addFavorited && setFavorites(addFavorited);
    });
   
  }, []);

  const source = data.filter(a =>a.name.includes(state.favoritesList.toString())) ?? ""

  const handleRemoveFavorites = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {marvel}});

  const renderMarvel = ({item}) => (
    <MainPageCard item={item} onPress={() => handleRemoveFavorites(item)} />
  );

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title='aaa' onPress={() => console.log(state.favoritesList)}></Button>
      <FlatList data={state.favoritesList} renderItem={renderMarvel} />
    </SafeAreaView>
  );
}
