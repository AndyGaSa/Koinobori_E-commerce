import { combineReducers } from 'redux';
import leagueReducer from './sports.reducer';

export default combineReducers({
  countriesLeagues: leagueReducer
});
