import axios from 'axios';
import actionTypes from './sports.types';

function getCountries() {
  return async () => {
    const { data } = await axios('https://www.thesportsdb.com/api/v1/json/1/all_countries.php');
    // eslint-disable-next-line camelcase
    return data.countries.map(({ name_en }) => name_en);
  };
}

export function getLeagues(sport) {
  return async (dispatch) => {
    const countriesGetter = getCountries();
    const countries = await countriesGetter();
    const leaguesPromises = countries.map(async (country) => axios(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}&s=${sport}`));

    Promise.all(leaguesPromises)
      .then((response) => {
        const leaguesByCountries = response.reduce((acc, { data: { countrys } }) => {
          countrys?.forEach((country) => {
            if (country) {
              if (!acc[country.strCountry.toLowerCase()]) {
                acc[country.strCountry.toLowerCase()] = [];
              }

              acc[country.strCountry.toLowerCase()] = [
                ...acc[country.strCountry.toLowerCase()],
                {
                  badge: country.strBadge,
                  name: country.strLeague,
                  id: country.idLeague,
                  sport: country.strSport
                }
              ];
            }
          });
          return acc;
        }, {});

        dispatch({
          type: actionTypes.LOAD_LEAGUES,
          leaguesByCountries
        });
      });
  };
}

export function getTeams(idLeague) {
  return async (dispatch) => {
    const { data } = await axios(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`);
    const leagueTeamsList = data.teams?.map(({
      idTeam, strTeam, strTeamBadge
    }) => ({
      id: idTeam,
      name: strTeam,
      badge: strTeamBadge
    }));

    dispatch({
      type: actionTypes.LOAD_TEAMS,
      leagueTeamsList
    });
  };
}
