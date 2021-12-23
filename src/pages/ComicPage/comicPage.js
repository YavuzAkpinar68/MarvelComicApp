import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import useFetch from "../../hooks/useFetch";

const ComicPage = ({item}) => {
  const route = useRoute()
  const idInfo = route.params.item.id
  const {data, loading} = useFetch(`http://gateway.marvel.com/v1/public/comics/`,`${idInfo}`)
  const infoo = Object.fromEntries(data)
  console.log(idInfo)
  return(
    <SafeAreaView>
      {data.map((a, ind) => {
        return(
          <Text>{a.title}</Text>
        )
      })}
    </SafeAreaView>
  )
}

export default ComicPage