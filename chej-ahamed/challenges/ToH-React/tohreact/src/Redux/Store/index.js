
import { compose, createStore } from 'redux';
import rootReducer from '../Reducers';

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
};

