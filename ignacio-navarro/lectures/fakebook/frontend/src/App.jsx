import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Header from './components/Header';
import configureStore from './redux/store';
// import People from './pages/People';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Header />
        <main>

          <Home />
        </main>
      </div>
    </Provider>
  );
}

export default App;
