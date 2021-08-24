import React from 'react';
import { Provider } from 'react-redux';
import Login from './components/Login/Login';
import configureStore from './redux/stores';

function App() {
  return (
    <Provider store={configureStore()}>
      <Login />
    </Provider>

  );
}

export default App;
