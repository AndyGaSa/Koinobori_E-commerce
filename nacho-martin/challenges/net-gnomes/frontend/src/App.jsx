import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import CurrentGnome from './components/CurrentGnome';
import GnomesList from './components/GnomesList';

function App() {
  return (
    <>
      <h1>The Gnome Network</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GnomesList} />
          <Route path="/:gnomeId" component={CurrentGnome} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
