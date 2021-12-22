import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

import styles from './button.styles';

export default function Button ({title, onPress}) {
    return (
       <TouchableOpacity  style={styles.container} onPress={() => onPress(title)}>
           <Text>{title}</Text>
       </TouchableOpacity>
    )
}