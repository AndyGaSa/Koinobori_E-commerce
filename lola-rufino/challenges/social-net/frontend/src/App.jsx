import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Home from './pages/Home';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <main className="main">
        <div className="main__upper-container" />
        <div className="main__down-container">
          <Home />
        </div>
      </main>
    </Provider>
  );
}

export default App;
