import { combineReducers } from 'redux';
import todosReducer from './todosReducers';

export default combineReducers({
  toDos: todosReducer,
});
