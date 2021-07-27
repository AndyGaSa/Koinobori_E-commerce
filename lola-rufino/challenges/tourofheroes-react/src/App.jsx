import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
