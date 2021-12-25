import { useRoute } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./comicPageStyle";

const ComicPage = ({item}) => {
  const route = useRoute()
  const idInfo = route.params.item.id
  const {data, loading} = useFetch(`http://gateway.marvel.com/v1/public/comics/`,`${idInfo}`)
  const infoo = Object.fromEntries(data)
  const {t, i18n} = useTranslation()

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