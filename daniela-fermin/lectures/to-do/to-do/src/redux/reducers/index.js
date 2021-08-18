import { combineReducers } from 'redux';
import toDosReducer from './todosReducer';

export default combineReducers({
  toDos: toDosReducer
});
