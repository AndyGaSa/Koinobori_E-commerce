import { combineReducers } from 'redux';
import toDosReducer from './todosReducers';

export default combineReducers({
  toDos: toDosReducer
});
