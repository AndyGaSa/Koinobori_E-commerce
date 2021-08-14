import { applyMiddleWare, createStore, compose } from 'react';
import thunk from 'thunk';
import rootReducers from '../reducers/index';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleWare(thunk))

  );
}
