import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';

export default combineReducers({
  toDos: todosReducer
});
