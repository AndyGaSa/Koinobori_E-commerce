import { createStore, compose } from 'redux';
import root from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(root, initialState, composeEnhancers());
}
