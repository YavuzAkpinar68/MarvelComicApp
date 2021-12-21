import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text} from 'react-native';
import styles from './detail.styles';

export default function({data}) {
    const routes = useRoute()
    const data = routes.params
    return (
        <SafeAreaView>
            <Text>{data.name}</Text>
        </SafeAreaView>
    )
}