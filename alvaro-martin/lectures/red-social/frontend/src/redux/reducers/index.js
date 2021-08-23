import { combineReducers } from 'redux';
import users from './userReducer';
import profiles from './profilesReducer';

export default combineReducers({
  users,
  profiles,
});
