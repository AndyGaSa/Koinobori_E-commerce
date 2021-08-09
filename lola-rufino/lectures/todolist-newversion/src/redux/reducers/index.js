import { combineReducers } from 'redux';
import todosReducer from '../actions/todosReduce';

export default combineReducers({
  toDos: todosReducer
});
