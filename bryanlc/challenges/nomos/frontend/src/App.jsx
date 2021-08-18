import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Lista from './components/Lista';

function App() {
  return (
    <Provider store={configureStore()}>
      <Lista />
    </Provider>
  );
}

export default App;
