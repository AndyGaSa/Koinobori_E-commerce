import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './components/UsersList';
import configureStore from './redux/stores/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <h1>Skybook</h1>
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
