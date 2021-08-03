/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './sports.types';

export default function getTeams() {
  return async (dispatch) => {
    const { data } = await axios('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php');
    const leagueTeamsList = data.teams.map(({
      idTeam, strTeam, strTeamLogo, strTeamShort
    }) => ({
      id: idTeam,
      name: strTeam,
      badge: strTeamLogo,
      shortName: strTeamShort
    }));

    dispatch({
      type: actionTypes.LOAD_TEAMS,
      leagueTeamsList
    });
  };
}
