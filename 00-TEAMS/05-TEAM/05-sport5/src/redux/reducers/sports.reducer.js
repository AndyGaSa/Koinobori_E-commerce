import actionTypes from '../actions/sports.types';

export default function sportsReducer(data = {
  leagues: [],
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
      localStorage.setItem('favourites', JSON.stringify(newData.favourites));
      break;
    default:
      break;
  }
  return newData;
}
