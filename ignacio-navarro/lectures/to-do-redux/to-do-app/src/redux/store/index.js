import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // eslint-disable-next-line no-undef
  return createStore(rootReducer, initialState, composeEnhancers());
};
