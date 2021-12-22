export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedMarvel = action.payload.marvel;

      const isInFavorites =
        state.favoritesList.findIndex(f => f.id === selectedMarvel.id) !== -1;

      if (isInFavorites) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList, selectedMarvel];

      return {...state, favoritesList: updatedFavorites};
    }

    case 'REMOVE_FROM_FAVORITES': {
      const selectedMarvel = action.payload.marvel;

      const marvelFavoritesIndex = state.favoritesList.findIndex(
        f => f.id === selectedMarvel.id,
      );

      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice[(marvelFavoritesIndex, 1)];

      return {...state, favoritesList: updatedFavoritesList};
    }

    default:
      return state;
  }
}
