import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './detail.styles';

export default function Detail () {
    const route = useRoute()
    const id = route.params.item.id

    const {data, loading} = useFetch(`/${id}`)

    const source = {...data[0]}

    console.log(data)
    return (
        <SafeAreaView>
            <Image 
                style={styles.image}
                source={{uri:`${source.thumbnail.path}.jpg`}}/>
            <Text>{source.name}</Text>
            <Text>{source.description}</Text>
        </SafeAreaView>
    )
}