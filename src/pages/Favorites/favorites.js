import React, {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {MarvelContext} from '../../Context/MarvelProvider';

import styles from './favorites.styles';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';

export default function Favorites() {
  const {setFavorites, favorites, state, dispatch, setSelection} =
    useContext(MarvelContext);
  const {t} = useTranslation();

  const storeData = () => {
    AsyncStorage.getItem('@FAVORITES')
      .then(data => {
        if (data !== null) {
          setFavorites(JSON.parse(data));
        }
      })
      .catch();
  };

  useEffect(() => {
    storeData();
  }, [state.favoritesList]);

  const handleRemoveFavorites = marvel =>
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {marvel}});
  setSelection(false);

  const renderMarvelComic = ({item}) => (
    <ComicCard item={item} onPress={() => handleRemoveFavorites(item)} />
  );

  return (
    <SafeAreaView>
      <Text style={styles.title}>{t('favorites')}</Text>
      <Text style={styles.note}>{t('Note')}</Text>
      <FlatList
        data={favorites}
        renderItem={renderMarvelComic}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
