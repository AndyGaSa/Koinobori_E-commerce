import { combineReducers } from 'redux';
import gnomes from './gnomes.reducer';
import user from './user.reducer';
import currentGnome from './currentGnome.reducer';
import notifications from './notifications.reducer';

export default combineReducers({
  gnomes,
  user,
  currentGnome,
  notifications
});
