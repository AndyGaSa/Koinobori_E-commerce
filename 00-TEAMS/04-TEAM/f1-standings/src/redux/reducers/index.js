import { combineReducers } from 'redux';
import driversReducer from './drivers.reducer';
import racesReducer from './races.reducer';
import constructorStandings from './constructor.reducer';

export default combineReducers({
  drivers: driversReducer,
  races: racesReducer,
  constructor: constructorStandings
});
