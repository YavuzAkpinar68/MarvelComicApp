import React, { useEffect, useState } from "react";
import axios from "axios"
import { Alert } from "react-native";


const useFetch = () => {
  const [chararacterData, setCharacterData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=c10efc3a23bb8482602e195f69924f93`)
      setCharacterData(response.data.results)

    } catch (error) {
      Alert.alert(error.message)
      
    } finally {
      setLoading(false)
    }

    useEffect(() => {
      fetchData()
    }, [])

    return{chararacterData, loading}
  }
}

export default useFetch