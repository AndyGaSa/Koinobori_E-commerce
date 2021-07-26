import './App.css';
import React from 'react';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Details from './Details';
import Heroes from './Heroes';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Details />
      <Heroes />
    </>

  );
}

export default App;
