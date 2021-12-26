import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import reducer from './reducer';
import store from './store';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [isSelected, setSelection] = useState(false)
  const [state, dispatch] = useReducer(reducer, store);
  const [favorites, setFavorites] = useState([])

  return (
    <MarvelContext.Provider value={{state, dispatch, isSelected, setSelection, favorites, setFavorites}}>
      {children}
    </MarvelContext.Provider>
  );
}

// {
//   favorites,
// }