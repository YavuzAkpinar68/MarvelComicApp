import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './detail.styles';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';
import {MarvelContext} from '../../Context/MarvelProvider';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Detail() {
  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();
  const {t, i18} = useTranslation()

  const {setFavorites,favorites,state, dispatch, isSelected, setSelection} = useContext(MarvelContext);

  const handleNavigation = ({item}) => (
    <ComicCard item = {item} onPress = {() => navigation.navigate('ComicPage', {item:item})} />
  );

  /*const storeData =  () => {  
    AsyncStorage.getItem('@FAVORITES').then(data => {
      if(data !== null) {
        setFavorites(JSON.parse(data))
        console.log(favorites)
      }
    }).catch()
   }
    
      useEffect(() => {
        storeData()
      },[])*/
  console.log("Favorite list", state.favoritesList);
  const handleAddFavorites = async (marvel) => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: {marvel}})
    setSelection(true)
    /*AsyncStorage.setItem('@FAVORITES', JSON.stringify(state.favoritesList)).then(() => {
      setFavorites(state.favoritesList)
    }).catch(Error)*/
  }
  
  
  const endpoint = 'comics';
  const {data, loading} = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters`,
    `/${item.id}/${endpoint}`,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{uri: `${item.thumbnail.path}.jpg`}}
        />
        <View style={styles.textView}>
          <Text style={styles.name}>{item.name}</Text>
          {item.description ? (
            <Text style={styles.description}>{item.description}</Text>
            ) : (
            <Text style={styles.description}>No description</Text>
            )
          }
        </View>
      </View>
      <View style={styles.outsideOfCardContainer}>
        <View style={styles.icon}>
          <Icon
            name="heart"
            size={30}
            color={isSelected ? 'red' : "gray"}
            onPress={() => handleAddFavorites(item)}
          />
        </View>
        <Text style={styles.name}>{t('Comic')}</Text>
        {loading ? (
          <ActivityIndicator />
          ) : ( 
                <FlatList
                  data={data}
                  renderItem={handleNavigation}
                  horizontal={true}
                  contentContainerstyle={{alignItems:"flex-end"}}
                />
          )
        }
      </View>
    </SafeAreaView>
  );
}
