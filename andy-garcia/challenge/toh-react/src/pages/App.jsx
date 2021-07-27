import React, { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Details from './Details';
import Heroes from './Heroes';

function App() {
  const [currentPage, setCurrentPage] = useState('details');
  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes />,
    details: <Details />,
  };
  return (

    <>
      <Header setCurrentPage={setCurrentPage} />
      {
        pages[currentPage]
      }
    </>
  );
}

export default App;
