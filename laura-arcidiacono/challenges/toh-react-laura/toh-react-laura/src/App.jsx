import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import './components/Styles.css';

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
      {
        pages[currentPage]
      }
    </>
  );
}

export default App;
