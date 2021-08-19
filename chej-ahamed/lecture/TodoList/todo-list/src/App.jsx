import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import ToDo from './components/ToDo';

function App() {
  return (
    <Provider store={configureStore()}>
      <ToDo />
    </Provider>

  );
}

export default App;
