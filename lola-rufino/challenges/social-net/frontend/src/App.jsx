import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <h1>Social Network</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
