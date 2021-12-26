import React ,{useState}from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import MainPageCard from '../../Component/Cards/MainPageCard';
import SearchBar from '../../Component/SearchBar/searchbar';
import { useTranslation } from 'react-i18next';


export default function MainPages() {
  const [text, setText] = useState("")
  const {t, i18} = useTranslation()
  const navigation = useNavigation();

   const handleNavigateDetailPage = ({item}) => (
    <MainPageCard item = {item} onPress = {() => navigation.navigate("Detail", {item:item})} />
   )
   const {data, loading} = useFetch(`https://gateway.marvel.com:443/v1/public/characters`,``)

   const source = data.filter(a =>a.name.includes(text)) ?? ""

  return (
    <SafeAreaView style={{flex:1}}>
      <SearchBar
        onChangeText={setText}
        value={text}
        placeholder={t('Search')}
        />
      <FlatList 
        data={source}
        renderItem={handleNavigateDetailPage}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
}
