import { combineReducers } from 'redux';
import todosReducer from './toDosReducer';

export default combineReducers({
  toDos: todosReducer
});
