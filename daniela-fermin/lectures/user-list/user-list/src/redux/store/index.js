import { createStore, compose } from 'redux';
import { rootReducer } from '../reducers';

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
};
