import React, { useState } from 'react';
import Dashboard from './pages/DashBoard/Dashboard';
import Details from './pages/Details/Details';
import Heroes from './pages/Heroes/Heroes';
import Header from './components/Header/Header';
import './Styles/Styles.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState('dashboard');
  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes setCurrentView={setCurrentPage} />,
    details: <Details />,
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

export default App;
