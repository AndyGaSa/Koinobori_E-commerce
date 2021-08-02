import { combineReducers } from 'redux';
import main from './mainReducer';

export default combineReducers({
  main: mainReducer

});
