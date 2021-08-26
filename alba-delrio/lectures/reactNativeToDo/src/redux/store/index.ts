import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState:Object) {
  const composeEnhancers = compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
}
