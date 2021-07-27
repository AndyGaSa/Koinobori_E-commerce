import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import './App.css';
import './components/Styles.css';

export default function App() {
  return (
    <BrowserRouter>

      <header />

      <Switch>

        <Route path="/dashboard" component={Dashboard} />

        <Route path="/heroes" component={Heroes} />

        <Route path="/details" component={Details} />

      </Switch>

    </BrowserRouter>
  );
}
