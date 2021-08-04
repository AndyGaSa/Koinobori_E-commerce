import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </>
);

export default App;
