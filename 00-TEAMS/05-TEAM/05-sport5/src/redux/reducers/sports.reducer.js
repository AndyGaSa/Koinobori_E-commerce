import actionTypes from '../actions/sports.types';
import { saveFavourites } from '../../service/favourites-local-storage';

export default function sportsReducer(data = {
  leagues: [],
  teams: [],
  favourites:
  {
    favouriteLeagues: [],
    favouriteTeams: []
  }
}, action) {
  let newData = data;
  switch (action.type) {
    case actionTypes.LOAD_LEAGUES:
      newData = { ...data, leagues: action.leaguesByCountries };
      break;
    case actionTypes.LOAD_TEAMS:
      newData = { ...data, teams: action.leagueTeamsList };
      break;
    case actionTypes.LOAD_FAVOURITES:
      newData = { ...data, favourites: action.favourites };
      break;
    case actionTypes.SAVE_LEAGUE:
      newData = {
        ...data,
        favourites: {
          ...data.favourites,
          favouriteLeagues: [...data.favourites.favouriteLeagues, action.favouriteLeague]
        }
      };
      saveFavourites(newData.favourites);
      break;
    case actionTypes.DELETE_LEAGUE:
      newData = {
        ...data,
        favourites: {
          ...data.favourites,
          favouriteLeagues: data.favourites.favouriteLeagues
            .filter(({ id }) => id !== action.leagueId)
        }
      };
      saveFavourites(newData.favourites);
      break;
    default:
      break;
  }
  return newData;
}
