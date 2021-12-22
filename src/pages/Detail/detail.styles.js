import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    image:{
      height:Dimensions.get("screen").height/3,
      width:Dimensions.get("screen").width/1,
      resizeMode:"contain",
      alignSelf:"center",
      borderRadius:15
    },
    buttonView:{
      flexDirection:"row",
      margin:10,
      justifyContent:"space-around"
    },
    name:{
      fontSize:20,
      alignSelf:"center"
    },
    description:{
      fontSize:13
    },
    cardContainer:{
      margin:10,
      alignItems:"center"
      
    },
    textView:{
      padding:10,
      borderWidth:1,
      marginTop:10,
      borderRadius:15,
      textAlign:"center",
      borderColor:"silver"
    }
})
