import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import Details from './components/Details';

function App() {
  return (
    <>
      <Dashboard />
      <Heroes />
      <Details />
    </>
  );
}

export default App;
