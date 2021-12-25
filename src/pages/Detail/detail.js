import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Button from '../../Component/Button/button';
import useFetch from '../../hooks/useFetch';
import styles from './detail.styles';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';
import {MarvelContext} from '../../Context/MarvelProvider';
import { useTranslation } from 'react-i18next';

export default function Detail() {
  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();
  const [product, setProduct] = useState('comics');
  const {t, i18} = useTranslation()
  const [isSelected, setIsSelected] = useState(false)

  const {dispatch} = useContext(MarvelContext);

  const handleProduct = a => {
    setProduct(a);
  };
  const handleCloseProduct = () => {
    setProduct('');
  };
  const handleNavigation = ({item}) => (
    <ComicCard item = {item} onPress = {() => navigation.navigate('ComicPage', {item:item})} />
  );
  const handleAddFavorites = (marvel) => {
    setIsSelected(true)
    dispatch({type: 'ADD_TO_FAVORITES', payload: {marvel}});
  }

  const endpoint = product;
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
      <View style={styles.buttonView}>
        <Button title={t('Comic')} onPress={handleProduct} />
        <Button title={t('CloseComic')} onPress={handleCloseProduct} />
      </View>
      <View style={styles.icon}>
        <Icon
          name="heart"
          size={30}
          color={isSelected ? 'red' : "gray"}
          onPress={() => handleAddFavorites(item)}
        />
      </View>
      {loading ? (
        <ActivityIndicator />
        ) : (
              <FlatList
                data={product && data}
                renderItem={handleNavigation}
              />
        )
      }
    </SafeAreaView>
  );
}
