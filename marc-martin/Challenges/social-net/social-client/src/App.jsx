import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import UsersList from './components/UserList/UsersList';
import configureStore from './redux/stores/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Header />
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
