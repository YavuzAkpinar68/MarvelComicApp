import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <MarvelContext.Provider value={{state, dispatch}}>
      {children}
    </MarvelContext.Provider>
  );
}
