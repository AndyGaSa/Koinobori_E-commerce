import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';

export default combineReducers({
  heroes: heroesReducer,
});
