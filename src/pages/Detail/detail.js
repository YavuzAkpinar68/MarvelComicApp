import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
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
    const handleCloseProduct = () => {
        setProduct("")
    }
    const handleNavigation = () => {
        navigation.navigate("ComicPage")
    }
    
    const endpoint = product
    const {data, loading} = useFetch(`/${item.id}/${endpoint}`)
    console.log(product)
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.cardContainer}>
                <Image 
                    style={styles.image}
                    source={{uri:`${item.thumbnail.path}.jpg`}}/>
                <View style={styles.textView}>
                    <Text style={styles.name}>{item.name}</Text>
                    {
                        item.description ?
                        <Text style={styles.description}>{item.description}</Text>
                        :<Text style={styles.description}>No description</Text>
                    }
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button title="comics" onPress={handleProduct}/>
                <Button title="close comics" onPress={handleCloseProduct}/>
            </View>
            {
                loading ? <ActivityIndicator />:
                <FlatList
                    data={product && data}
                    renderItem={({item}) => <ComicCard onPress={handleNavigation} item={item}/>}
                />
            }
        </SafeAreaView>
    )
}