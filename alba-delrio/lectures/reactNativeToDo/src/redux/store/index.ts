import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState?:any) {
  const composeEnhancers = compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
}
