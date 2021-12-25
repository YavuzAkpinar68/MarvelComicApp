import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    margin:20,
    alignItems:"center",
    padding:10
  },
  image:{
    height:Dimensions.get("screen").height/3,
    width:Dimensions.get("screen").width/1.5,
    resizeMode:"contain",
    borderRadius:15,
  },
  text:{
    padding:10
  }
})
export default styles