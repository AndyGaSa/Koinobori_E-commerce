import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './styles.css';
import heroes from './heroes-const';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <Dashboard heroes={heroes.slice(1, 5)} />} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/list" component={() => <List heroes={heroes} />} />
        <Route path="/detail/:heroId?" component={() => <Detail heroes={heroes} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
