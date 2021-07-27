import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroesList from './pages/HeroesList';
import Dashboard from './pages/Dashboard';

export default function App() {
  const tags = {
    dashboard: <Dashboard />,
    heroesList: <HeroesList />,
  };

  const [userPage, setUserPage] = useState('dashboard');
  return (
    <>
      <Header validate={setUserPage} />
      {tags[userPage]}
    </>
  );
}
