import { combineReducers } from 'redux';
import sportsReducer from './sports.reducer';
import favouritesReducer from './favourites.reducer';

export default combineReducers({
  sportsApi: sportsReducer,
  favourites: favouritesReducer
});
