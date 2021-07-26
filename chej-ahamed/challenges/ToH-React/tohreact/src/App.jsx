import React from 'react';

import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import './App.css';
import './components/Styles.css';

function App() {
  return (
    <>
      <Header />
      <Heroes />
      <Dashboard />
      <Details />

    </>
  );
}

export default App;
