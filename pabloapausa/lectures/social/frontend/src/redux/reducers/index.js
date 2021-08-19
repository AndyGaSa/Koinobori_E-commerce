import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

// Función que recibe un objeto.
export default combineReducers({
  user: userReducer,
  auth: authReducer,
});
