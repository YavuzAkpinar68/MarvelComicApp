import { useRoute } from "@react-navigation/native";
import { t } from "i18next";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import  Icon from "react-native-vector-icons/AntDesign";
import { MarvelContext } from "../../Context/MarvelProvider";
import useFetch from "../../hooks/useFetch";
import styles from "./comicPageStyle";

const ComicPage = ({item}) => {
  const route = useRoute()
  const idInfo = route.params.item.id
  const {data, loading} = useFetch(`http://gateway.marvel.com/v1/public/comics/`,`${idInfo}`)
  const {t, i18n} = useTranslation()
  const {dispatch} = useContext(MarvelContext)
  const [isSelected, setIsSelected] = useState(false)


  const handleAddFavorites = (marvel) => {
    setIsSelected(true)
    dispatch({type: 'ADD_TO_FAVORITES', payload: {marvel}});
  }

  console.log(idInfo)
  return(
    <SafeAreaView>
      <ScrollView>
        {data.map((a, ind) => {
          return(
            <View key={ind}>
              <Image
                style={styles.image} 
                source={{uri:`${a.thumbnail.path}.jpg`}}/>
              <View style={styles.titleView}>
                <Text style={styles.title}>{a.title}</Text>
                <Text>{a.description}</Text>
                <Text>{a.pageCount}</Text>
              </View>
              <Text style={styles.title}>{t('Creators')}</Text> 
              <View style={styles.icon}>
                <Icon
                  name="heart"
                  size={30}
                  color={isSelected ? 'red' : "gray"}
                  onPress={() => handleAddFavorites(route.params.item)}
                />
              </View> 
              {a.creators.items.map((b, ind) => {
                return (
                  <View style={styles.creatorView} key={ind}>
                    <Text>{b.name    }</Text>
                    <Text>{   b.role}</Text>
                  </View>
                )
              })
              }
              <Text style={styles.title}>{t('Characters')}</Text>
              {a.characters.items.map((b, ind) => {
                return (
                  <View key={ind}>
                    <Text>{b.name}</Text>
                    <Text>{b.role}</Text>
                  </View>
                )
              })
              }
            </View>

          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ComicPage