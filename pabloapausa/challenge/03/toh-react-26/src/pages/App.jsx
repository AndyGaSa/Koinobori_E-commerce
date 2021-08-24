import React, { useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import Heroes from '../components/heroes/Heroes';
import Details from '../components/details/Details';
import Header from '../components/Header';
import './App.css';

// This exercise was done Object Mapping.

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const pages = {
    dashboard: <Dashboard />,
    heroes: <Heroes />,
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

/*
Entender el 'useState'.

Variable de lectura, que apunta a un objeto
cuyas propiedades señalan diferentes archivos.

Etiqueta que apunta a un objeto. El 'prop'
'setCurrentView' señala a la función
'setCurrentPage'.
*/
