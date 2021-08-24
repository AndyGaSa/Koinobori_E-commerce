import { combineReducers } from 'redux';
import authtenticationReducer from './authtenticationReducer';

export default combineReducers({
  authentication: authtenticationReducer
});
