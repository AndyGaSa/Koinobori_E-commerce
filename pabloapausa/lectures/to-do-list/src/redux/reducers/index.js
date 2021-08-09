import { combineReducers } from 'redux';
import toDosReducer from './toDosReducer';

export default combineReducers({
  toDos: toDosReducer,
});
