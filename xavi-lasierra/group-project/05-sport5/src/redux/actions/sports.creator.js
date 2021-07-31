import axios from 'axios';
// import actionTypes from './sports.types';

function getCountries() {
  // eslint-disable-next-line no-debugger
  return async () => {
    const { data } = await axios('https://www.thesportsdb.com/api/v1/json/1/all_countries.php');
    // eslint-disable-next-line camelcase
    return data.countries.map(({ name_en }) => name_en);
  };
}

export default function getLeagues(sport) {
  return async () => {
    const countriesGetter = getCountries();
    const countries = await countriesGetter();
    console.log(countries);
    const leaguesPromises = countries.map(async (country) => axios(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}&s=${sport}`));

    Promise.all(leaguesPromises)
      .then((data) => { console.log(data.map(({ data }) => data.countrys)); });
  };
}
