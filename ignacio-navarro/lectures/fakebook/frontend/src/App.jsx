import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <h1>Fakebook</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
