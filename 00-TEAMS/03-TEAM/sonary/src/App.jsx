import React from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './redux/store/index';
import Dashboard from './components/main/dashboard/Dashboard';

function App() {
  return (
    <Provider store={configureStore()}>
      <Dashboard />
    </Provider>
  );
}

export default App;
