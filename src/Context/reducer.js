import AsyncStorage from '@react-native-async-storage/async-storage';



export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedMarvel = action.payload.marvel;
      const isInFavorites =
        state.favoritesList.findIndex(f => f.id === selectedMarvel.id) !== -1;
      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList,selectedMarvel];
    
      return {...state, favoritesList: updatedFavorites};
    }
    case 'ADD_TO_FAVORITES_COMIC': {
      const selectedMarvel = action.payload.marvel;
      const isInFavorites =
        state.favoritesListComic.findIndex(f => f.id === selectedMarvel.id) !== -1;
      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesListComic,selectedMarvel];

      AsyncStorage.setItem('@FAVORITES', updatedFavorites);
      console.log(updatedFavorites)

      return {...state, favoritesListComic: updatedFavorites};
    }
  

    case 'REMOVE_FROM_FAVORITES': {
      const selectedMarvel = action.payload.marvel;
      const marvelFavoritesIndex = state.favoritesList.findIndex(
        f => f.id === selectedMarvel.id,
      );
      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(marvelFavoritesIndex, 1);

      AsyncStorage.removeItem('@FAVORITES');

      return {...state, favoritesList: updatedFavoritesList};
    }
    case 'REMOVE_FROM_FAVORITES_COMIC': {
      const selectedMarvel = action.payload.marvel;
      const marvelFavoritesIndex = state.favoritesListComic.findIndex(
        f => f.id === selectedMarvel.id,
      );
      const updatedFavoritesList = [...state.favoritesListComic];
      updatedFavoritesList.splice(marvelFavoritesIndex, 1);

      AsyncStorage.removeItem('@FAVORITES');

      return {...state, favoritesListComic: updatedFavoritesList};
    }
  }
}