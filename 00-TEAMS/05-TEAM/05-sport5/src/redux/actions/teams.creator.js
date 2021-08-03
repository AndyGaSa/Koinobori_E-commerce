/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './sports.types';

export default function getTeams(idLeague) {
  return async (dispatch) => {
    const { data } = await axios(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`);
    console.log(data);
    const leagueTeamsList = data.teams?.map(({
      idTeam, strTeam, strTeamBadge, strTeamShort
    }) => ({
      id: idTeam,
      name: strTeam,
      badge: strTeamBadge,
      shortName: strTeamShort
    }));

    dispatch({
      type: actionTypes.LOAD_TEAMS,
      leagueTeamsList
    });
  };
}
