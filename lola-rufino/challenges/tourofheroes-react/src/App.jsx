import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import Details from './components/Details';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState('dashboard');
  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes />,
    details: <Details />
  };

  return (
    <>
      <Header />
      <Nav setCurrentView={setCurrentPage} />
      {
        pages[currentPage]
      }
    </>
  );
}

export default App;
