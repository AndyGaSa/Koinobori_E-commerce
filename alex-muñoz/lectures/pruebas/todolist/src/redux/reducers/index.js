import { combineReducers } from 'redux';
import todosReducers from './todosReducer';

export default combineReducers({
  toDos: todosReducers
});
