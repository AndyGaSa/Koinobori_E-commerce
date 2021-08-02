import { combineReducers } from 'redux';
import driversReducer from './drivers-reducer';
import pointsReducer from './points.reducer';

export default combineReducers({ drivers: driversReducer, points: pointsReducer });
