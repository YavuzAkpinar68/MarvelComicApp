import React, { useEffect, useState } from "react";
import axios from "axios"
import { Alert } from "react-native";


const useFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c10efc3a23bb8482602e195f69924f93&hash=d051dfd0bf99bcc7d3aa2cb83ca5dd1d`)
      setData(response.data.data.results)
      
      console.log(response.data.data.results)

    } catch (error) {
      Alert.alert(error.message)

    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return{data, loading}
}

export default useFetch