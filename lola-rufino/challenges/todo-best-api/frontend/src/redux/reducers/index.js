import { combineReducers } from 'redux';
import tasks from './tasksReducer';

export default combineReducers({
  tasks,
});