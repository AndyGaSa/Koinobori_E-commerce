import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import FormularioEventos from './pages/FormularioEventos';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import LogInPage from './pages/LogInPage';
import './App.css';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LogInPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/addevent">
          <FormularioEventos />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);

export default App;
