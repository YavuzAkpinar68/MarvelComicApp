import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import reducer from './reducer';
import store from './store';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [favorites, setFavorites] = useState(null);
  const [isSelected, setSelection] = useState(false)


  useEffect(() => {
    AsyncStorage.getItem('@FAVORITES').then(addFavorited => {
      addFavorited && setFavorites(addFavorited);
    });
  }, []);

  
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <MarvelContext.Provider value={{state, dispatch, isSelected, setSelection}}>
      {children}
    </MarvelContext.Provider>
  );
}

// {
//   favorites,
// }