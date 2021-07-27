import React, { useState } from 'react';

import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import './App.css';
import './components/Styles.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes />,
    details: <Details />

  };
  return (
    <>

      <Header setCurrentView={setCurrentPage} />
      {
        pages[currentPage]
      }

    </>
  );
}
