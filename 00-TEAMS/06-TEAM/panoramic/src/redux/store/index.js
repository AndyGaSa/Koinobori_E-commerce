/* eslint-disable import/no-unresolved */
import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
}
