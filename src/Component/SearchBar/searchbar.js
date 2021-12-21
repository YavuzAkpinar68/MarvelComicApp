import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";

import styles from './searchbar.styles';

export default function SearchBar({value, onChangeText,placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            <TextInput
                value={value} 
                onChangeText={onChangeText}
                placeholder={placeholder}/>
        </View>
    )
}