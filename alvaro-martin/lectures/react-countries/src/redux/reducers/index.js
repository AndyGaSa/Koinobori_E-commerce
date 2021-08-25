import { combineReducers } from 'redux';
import countries from './countriesReducer';
import random from './RandomReducer';

export default combineReducers({
  countries,
  random,
});
