import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import Icon  from 'react-native-vector-icons/AntDesign';

import styles from './searchbar.styles';

export default function SearchBar({value, onChangeText,placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            <TextInput
                value={value} 
                onChangeText={onChangeText}
                placeholder={placeholder}
                />
            <Icon name="search1" size={20} />
        </View>
    )
}