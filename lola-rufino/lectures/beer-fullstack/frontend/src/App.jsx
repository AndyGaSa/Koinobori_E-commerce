import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';

function App() {
  return (
    <Provider store={configureStore()} />
  );
}

export default App;
