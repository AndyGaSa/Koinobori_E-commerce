/* eslint-disable no-debugger */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import actionTypes from '../actions/actionTypes';
import { initializeLocalStorage, saveFavouritesToLocalStorage } from '../actions/localStorage.creator';

export default function favoriteReducer(favorites = [], action) {
  let newState = favorites;
  let track;

  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      newState = initializeLocalStorage();
      break;

    case actionTypes.TOGGLE_FAVORITES:
      {
        track = action.track;
        const favoritesIds = favorites.map(({ track_id }) => track_id);
        if (favoritesIds.some((id) => id === track.track_id)) {
          newState = favorites.filter((currentTrack) => currentTrack.track_id !== track.track_id);
          saveFavouritesToLocalStorage(newState);
        } else {
          newState = [...favorites, action.track];
          saveFavouritesToLocalStorage(newState);
          return newState;
        }
      }

      break;

    case actionTypes.UPDATE_FAVORITE:
      newState = favorites.map((updatedTrack) => ((updatedTrack.id === action.track.id)
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
