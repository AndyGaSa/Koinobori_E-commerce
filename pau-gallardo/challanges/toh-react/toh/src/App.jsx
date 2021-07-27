import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroesList from './pages/HeroesList';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [tags] = useState({
    dashboard: <Dashboard />,
    heroesList: <HeroesList />,
  });
  const [userPage, setUserPage] = useState('dashboard');
  function whatPageAmI(page) {
    const whatPage = page === 'dashboard';
    const currentPage = whatPage ? 'dashboard' : 'heroesList';
    setUserPage(currentPage);
  }
  return (
    <>
      <Header validate={whatPageAmI} />
      {tags[`${userPage}`]}
    </>
  );
}
