import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:5,
    flexDirection:"row",
    justifyContent:"flex-start"
   

  },
  image:{
    flex:1,
    height:Dimensions.get("screen").height/4,
    width:Dimensions.get("screen").width/2,
  },
  name:{
    fontSize:25
  },
  textView:{
    justifyContent:"space-around",
    borderWidth:1,
    margin:5
  },
  comicsView:{
    borderWidth:1,
  }
})

export default styles