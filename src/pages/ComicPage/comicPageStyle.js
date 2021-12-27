import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image:{
    height:Dimensions.get("screen").height /3,
    width:Dimensions.get("screen").width /1.5,
    borderRadius:15,
    alignSelf:"center",
    margin:10
  },
  creatorView:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:30
  },
  titleView:{
    padding:10,
    borderWidth:1,
    margin:10,
    borderRadius:10
  },
  title:{
    alignSelf:"center",
    fontSize:25,
    padding:10
  },
  icon:{
    alignSelf:"center"
  }
})

export default styles