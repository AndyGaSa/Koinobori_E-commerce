import { combineReducers } from 'redux';
import todosReducer from './todoReducers';

export default combineReducers({ toDos: todosReducer });
