import { combineReducers } from 'redux';
import events from './eventReducer';
import users from './userReducer';
import faqs from './faqReducer';

export default combineReducers({
  events,
  users,
  faqs
});
