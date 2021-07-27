import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Heroes from './pages/Heroes';
import Details from './pages/Details';
import Header from './components/Header';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState('heroes');
  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes />,
    details: <Details />,
  };
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {
        pages[currentPage]
      }
    </div>
  );
}

export default App;
