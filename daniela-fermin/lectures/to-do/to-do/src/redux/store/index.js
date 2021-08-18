import { createStore, compose } from 'redux';
import rootReducers from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducers,
    initialState,
    composeEnhancers()
  );
}
