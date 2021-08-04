import { combineReducers } from 'redux';
import leagueReducer from './sports.reducer';
import favouritesReducer from './favourites.reducer';

export default combineReducers({
  countriesLeagues: leagueReducer,
  favourites: favouritesReducer
});
