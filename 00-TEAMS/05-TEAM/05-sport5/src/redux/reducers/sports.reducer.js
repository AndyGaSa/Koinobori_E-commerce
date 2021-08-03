import actionTypes from '../actions/sports.types';

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
    default:
      break;
  }
  return newData;
}
