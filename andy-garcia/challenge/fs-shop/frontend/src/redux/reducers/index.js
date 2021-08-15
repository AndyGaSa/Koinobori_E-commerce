import { combineReducers } from 'redux';
// import sites from './sitesReducer';
// import favSites from './favSitesReducer';
import userAccount from './userReducer';

export default combineReducers({
  userAccount,
  // sites,
  // favSites,
});
