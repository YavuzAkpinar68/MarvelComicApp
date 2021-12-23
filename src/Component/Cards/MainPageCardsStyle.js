import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10,
  },
  image:{
    flex:1,
    height:Dimensions.get("screen").height/4,
    width:Dimensions.get("window").width/2.3,
    justifyContent:"flex-end",

  },
  name:{
    fontSize:25,
    color:"white"
  },
  textView:{
    justifyContent:"space-around",
    backgroundColor:"#000000a0"
  },
  comicsView:{
  }
})

export default styles