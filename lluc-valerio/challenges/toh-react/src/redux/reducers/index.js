import { combineReducers } from 'redux';
import heroesReducer from './HeroesReducer';

export default combineReducers({
  heroes: heroesReducer
});
