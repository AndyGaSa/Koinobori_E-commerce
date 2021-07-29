import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/detail" component={Detail} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
