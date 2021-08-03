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
    default:
      break;
  }
  return newData;
}
