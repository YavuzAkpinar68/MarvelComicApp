import React, {useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import MainPageCard from '../../Component/Cards/MainPageCard';
import SearchBar from '../../Component/SearchBar/searchbar';
import {useTranslation} from 'react-i18next';

import styles from './mainpages.styles';

export default function MainPages() {
  const [text, setText] = useState('');
  const {t} = useTranslation();
  const navigation = useNavigation();

  const handleNavigateDetailPage = ({item}) => (
    <MainPageCard
      item={item}
      onPress={() => navigation.navigate('Detail', {item: item})}
    />
  );
  const {data, loading} = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters`,
    ``,
  );

  const source = data.filter(a => a.name.includes(text)) ?? '';

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onChangeText={setText}
        value={text}
        placeholder={t('Search')}
      />

      {loading ? (
        <ActivityIndicator size={25} />
      ) : (
        <FlatList
          data={source}
          renderItem={handleNavigateDetailPage}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}
