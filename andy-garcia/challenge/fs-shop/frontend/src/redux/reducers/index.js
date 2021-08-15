import { combineReducers } from 'redux';
// import sites from './sitesReducer';
// import favSites from './favSitesReducer';
import user from './userReducer';

export default combineReducers({
  user,
  // sites,
  // favSites,
});
