import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import reducer from './reducer';
import store from './store';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [isSelected, setSelection] = useState(false)
  const [state, dispatch] = useReducer(reducer, store);
  const [favorites, setFavorites] = useState([])

  const getStoreData = async () => {
    try {
       const response = await AsyncStorage.getItem('@FAVORITES')
       return response && dispatch({type:'SET_FAVORITES', payload:JSON.parse(response)})
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getStoreData()
  },[])

  return (
    <MarvelContext.Provider value={{state, dispatch, isSelected, setSelection, favorites, setFavorites}}>
      {children}
    </MarvelContext.Provider>
  );
}

// {
//   favorites,
// }