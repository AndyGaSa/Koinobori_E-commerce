import actionTypes from '../actions/favourties.types';
import { saveFavourites } from '../../service/favourites-local-storage';

export default function sportsReducer(favourites = {
  favouriteLeagues: [],
  favouriteTeams: []
}, action) {
  let newFavourites = favourites;
  switch (action.type) {
    case actionTypes.LOAD_FAVOURITES:
      newFavourites = action.favourites;
      break;
    case actionTypes.SAVE_LEAGUE:
      newFavourites = {
        ...favourites,
        favouriteLeagues: [...favourites.favouriteLeagues, action.favouriteLeague]
      };
      saveFavourites(newFavourites);
      break;
    case actionTypes.DELETE_LEAGUE:
      newFavourites = {
        ...favourites,
        favouriteLeagues: favourites.favouriteLeagues
          .filter(({ id }) => id !== action.leagueId)
      };
      saveFavourites(newFavourites);
      break;
    default:
      break;
  }
  return newFavourites;
}
