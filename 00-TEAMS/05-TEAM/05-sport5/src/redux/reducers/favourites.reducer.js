import actionTypes from '../actions/favourites.types';
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
    case actionTypes.SAVE_TEAM:
      newFavourites = {
        ...favourites,
        favouriteTeams: [...favourites.favouriteTeams, action.favouriteTeam]
      };
      saveFavourites(newFavourites);
      break;
    case actionTypes.DELETE_TEAM:
      newFavourites = {
        ...favourites,
        favouriteTeams: favourites.favouriteTeams
          .filter(({ id }) => id !== action.teamId)
      };
      break;
    default:
      break;
  }
  return newFavourites;
}
