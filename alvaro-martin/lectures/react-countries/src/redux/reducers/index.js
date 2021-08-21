import { combineRedurecs } from 'redux';
import countries from './countriesReducer';

export default combineRedurecs({
  countries,
});
