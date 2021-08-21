import actionTypes from '../actions/actionTypes';

export default function countriesReducer(countries = [], action) {
  let allCountries = countries;
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      allCountries = action.countries;
      break;
    default:
      break;
  }
  return allCountries;
}
