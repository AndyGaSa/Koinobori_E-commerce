import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Home from './pages/Home';
import AllUsers from './pages/AllUsers';
import Header from './components/Header';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <main className="main">
        <Header />
        <div className="main__down-container">
          <Home />
          <AllUsers />
        </div>
      </main>
    </Provider>
  );
}

export default App;
