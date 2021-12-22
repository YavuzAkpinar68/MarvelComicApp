import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Button from '../../Component/Button/button';
import useFetch from '../../hooks/useFetch';
import styles from './detail.styles';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';

export default function Detail () {
    const route = useRoute()
    const item = route.params.item
    const navigation = useNavigation()
    const {data, loading} = useFetch(`/${item.id}/comics`)

    const endpoint = `/${item.id}/comics`

    const handleNavigateComic = () => {
        navigation.navigate("ComicPage")
    }
    console.log(item)
    return (
        <SafeAreaView>
            <Image 
                style={styles.image}
                source={{uri:`${item.thumbnail.path}.jpg`}}/>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={styles.buttonView}>
                <Button title="Comics" onPress={handleNavigateComic}/>
                <Button title="Stories"/>
                <Button title="Series"/>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => <ComicCard item={item}/>}/>
        </SafeAreaView>
    )
}