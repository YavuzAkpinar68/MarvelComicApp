import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Button from '../../Component/Button/button';
import useFetch from '../../hooks/useFetch';
import styles from './detail.styles';
import ComicCard from '../../Component/Cards/ComicCard/ComicCard';

export default function Detail () {
    const route = useRoute()
    const item = route.params.item
    const navigation = useNavigation()
    const [product, setProduct] = useState("comics")
    
    
        const handleProduct = (a) => {
            setProduct(a)
        }
    const endpoint = product
    const {data, loading} = useFetch(`/${item.id}/${endpoint}`)
    console.log(item)
    return (
        <SafeAreaView style={{flex:1}}>
            <Image 
                style={styles.image}
                source={{uri:`${item.thumbnail.path}.jpg`}}/>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={styles.buttonView}>
                <Button title="comics" onPress={handleProduct}/>
                <Button title="stories" onPress={handleProduct}/>
                <Button title="series"onPress={handleProduct}/>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => <ComicCard item={item}/>}/>
        </SafeAreaView>
    )
}