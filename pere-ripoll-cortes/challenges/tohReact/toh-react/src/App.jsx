import React from 'react';
import Dashboard from './pages/DashBoard/Dashboard';
import Details from './pages/Details/Details';
import Heroes from './pages/Heroes/Heroes';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Heroes />
      <Details />
    </div>
  );
}

export default App;
