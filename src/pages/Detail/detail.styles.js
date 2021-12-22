import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    image:{
      height:Dimensions.get("screen").height/2,
      resizeMode:"contain"
    },
    buttonView:{
      flexDirection:"row",
      margin:10,
      justifyContent:"space-around"
    }
})