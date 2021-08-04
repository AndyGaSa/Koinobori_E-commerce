import actionTypes from './favourites.types';
import { favouritesLocalStorageCheck, getFavouritesLocalStorage } from '../../service/favourites-local-storage';

export function getFavourites() {
  favouritesLocalStorageCheck();

  return {
    type: actionTypes.LOAD_FAVOURITES,
    favourites: getFavouritesLocalStorage()
  };
}

export function addFavouriteLeague(favouriteLeague) {
  return {
    type: actionTypes.SAVE_LEAGUE,
    favouriteLeague
  };
}

export function deleteFavouriteLeague(leagueId) {
  return {
    type: actionTypes.DELETE_LEAGUE,
    leagueId
  };
}

export function addFavouriteTeam(favouriteTeam) {
  return {
    type: actionTypes.SAVE_TEAM,
    favouriteTeam
  };
}

export function deleteFavouriteTeam(favouriteTeam) {
  return {
    type: actionTypes.DELETE_TEAM,
    favouriteTeam
  };
}
