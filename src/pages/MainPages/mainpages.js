import React ,{useState}from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import MainPageCard from '../../Component/Cards/MainPageCard';
import SearchBar from '../../Component/SearchBar/searchbar';


export default function MainPages() {
  const [text, setText] = useState("")

  const navigation = useNavigation();

   const handleFavorites = ({item}) => {
    navigation.navigate("Detail", {item:item})
   }
   const {data, loading} = useFetch()

   const source = data.filter(a =>a.name.includes(text)) ?? ""

  return (
    <SafeAreaView style={{flex:1}}>
      <SearchBar
        onChangeText={setText}
        value={text}
        placeholder="Ara..."
        />
      <FlatList 
        data={source}
        renderItem={({item}) => <MainPageCard 
          onPress={handleFavorites}
          item={item}/>}
      />
    </SafeAreaView>
  );
}
