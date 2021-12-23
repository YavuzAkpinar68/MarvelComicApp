import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import useFetch from "../../hooks/useFetch";

const ComicPage = ({item}) => {
  const route = useRoute()
  const info = route.params.item
  const URI = info.comics.items.find(item => item.resourceURI).resourceURI
  const {data, loading} = useFetch(`${URI}`)
  const infoo = Object.fromEntries(data)
  console.log(infoo)
  return(
    <SafeAreaView>
      <Text>{data.title}</Text>
    </SafeAreaView>
  )
}

export default ComicPage