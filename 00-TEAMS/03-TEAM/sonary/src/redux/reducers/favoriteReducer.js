import actionTypes from '../actions/actionTypes';
import { initializeLocalStorage, saveFavouritesToLocalStorage } from '../actions/favorites.creator';

export default function favoriteReducer(favorites = [], action) {
  let newState = favorites;

  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      newState = initializeLocalStorage();
      break;

    case actionTypes.ADD_FAVORITES:
      newState = [...favorites, action.track];
      saveFavouritesToLocalStorage(newState);
      break;

    case actionTypes.DELETE_FAVORITES:
      newState = favorites.filter((track) => track.id !== track.heroId);
      saveFavouritesToLocalStorage(newState);
      break;

    case actionTypes.UPDATE_FAVORITE:
      newState = favorites.map((track) => ((track.id === action.track.id)
        ? {
          ...track,
          ...action.track
        }
        : track));
      saveFavouritesToLocalStorage(newState);
      break;

    default:
      newState = favorites;
      break;
  }

  return newState;
}
